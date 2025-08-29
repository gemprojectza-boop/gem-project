import React, { useRef } from 'react';
import { useDrag } from './SimpleDragDrop';
import { useBuilder } from './BuilderContext';
import type { BuilderComponent } from './types';

interface DraggableComponentProps {
  component: BuilderComponent;
  isSelected: boolean;
}

const DraggableComponent: React.FC<DraggableComponentProps> = ({ component, isSelected }) => {
  const { actions } = useBuilder();
  const elementRef = useRef<HTMLDivElement>(null);

  const [{ isDragging }, drag] = useDrag({
    type: 'CANVAS_COMPONENT',
    item: { id: component.id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging
    })
  });

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    actions.selectComponent(component.id);
  };

  const handleDoubleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (component.type === 'text') {
      const newContent = prompt('Edit text:', component.content || '');
      if (newContent !== null) {
        actions.updateComponent(component.id, { content: newContent });
      }
    }
  };

  const renderComponent = () => {
    const baseStyle: React.CSSProperties = {
      width: '100%',
      height: '100%',
      border: 'none',
      outline: 'none',
      background: 'transparent',
      ...component.style
    };

    switch (component.type) {
      case 'text':
        return (
          <div 
            style={{
              ...baseStyle,
              padding: '8px',
              fontSize: '16px',
              color: component.style.color || '#333',
              fontFamily: component.style.fontFamily || 'Arial, sans-serif',
              fontWeight: component.style.fontWeight || 'normal',
              textAlign: component.style.textAlign || 'left',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            {component.content || 'Text Component'}
          </div>
        );

      case 'button':
        return (
          <button
            style={{
              ...baseStyle,
              backgroundColor: component.style.backgroundColor || '#3b82f6',
              color: component.style.color || 'white',
              border: 'none',
              borderRadius: component.style.borderRadius || '6px',
              padding: '8px 16px',
              fontSize: '14px',
              fontWeight: '500',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {component.content || 'Button'}
          </button>
        );

      case 'image':
        return (
          <img
            src={component.content || 'https://via.placeholder.com/200x100?text=Image'}
            alt="Component"
            style={{
              ...baseStyle,
              objectFit: 'cover',
              borderRadius: component.style.borderRadius || '0px'
            }}
          />
        );

      case 'container':
        return (
          <div
            style={{
              ...baseStyle,
              backgroundColor: component.style.backgroundColor || 'transparent',
              border: component.style.border || '1px dashed #d1d5db',
              borderRadius: component.style.borderRadius || '4px',
              padding: component.style.padding || '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#6b7280',
              fontSize: '14px'
            }}
          >
            {component.children?.length ? (
              component.children.map(child => (
                <DraggableComponent
                  key={child.id}
                  component={child}
                  isSelected={false}
                />
              ))
            ) : (
              'Container'
            )}
          </div>
        );

      case 'heading':
        return (
          <h2
            style={{
              ...baseStyle,
              margin: 0,
              fontSize: component.style.fontSize || '24px',
              fontWeight: component.style.fontWeight || 'bold',
              color: component.style.color || '#1f2937',
              textAlign: component.style.textAlign || 'left',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            {component.content || 'Heading'}
          </h2>
        );

      default:
        return (
          <div style={baseStyle}>
            Unknown Component: {component.type}
          </div>
        );
    }
  };

  return (
    <div
      ref={(node) => {
        elementRef.current = node;
        drag(node);
      }}
      className={`absolute cursor-pointer ${
        isSelected ? 'ring-2 ring-blue-500 ring-opacity-75' : ''
      } ${isDragging ? 'opacity-50' : ''}`}
      style={{
        left: component.position.x,
        top: component.position.y,
        width: component.size.width,
        height: component.size.height,
        zIndex: isSelected ? 10 : 1
      }}
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
    >
      {renderComponent()}

      {/* Selection handles */}
      {isSelected && (
        <>
          {/* Resize handles */}
          <div className="absolute -top-1 -left-1 w-3 h-3 bg-blue-500 border border-white rounded-full cursor-nw-resize" />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 border border-white rounded-full cursor-ne-resize" />
          <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-blue-500 border border-white rounded-full cursor-sw-resize" />
          <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-blue-500 border border-white rounded-full cursor-se-resize" />
          
          {/* Delete button */}
          <button
            className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full text-xs flex items-center justify-center hover:bg-red-600 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              actions.deleteComponent(component.id);
            }}
            title="Delete component"
          >
            ×
          </button>
          
          {/* Component label */}
          <div className="absolute -top-6 left-0 bg-blue-500 text-white px-2 py-1 rounded text-xs font-medium whitespace-nowrap">
            {component.type}
          </div>
        </>
      )}
    </div>
  );
};

export default DraggableComponent;