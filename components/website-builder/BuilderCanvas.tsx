import React, { forwardRef } from 'react';
import { useDrop } from './SimpleDragDrop';
import { useBuilder } from './BuilderContext';
import DraggableComponent from './DraggableComponent';

const BuilderCanvas = forwardRef<HTMLDivElement>((props, ref) => {
  const { state, actions } = useBuilder();

  const [{ isOver }, drop] = useDrop({
    accept: 'COMPONENT',
    drop: (item: { type: string }, monitor) => {
      const offset = monitor.getClientOffset();
      const canvasRect = (ref as React.RefObject<HTMLDivElement>)?.current?.getBoundingClientRect();
      
      if (offset && canvasRect) {
        const position = {
          x: Math.max(0, offset.x - canvasRect.left),
          y: Math.max(0, offset.y - canvasRect.top)
        };
        
        // Snap to grid if enabled
        if (state.snapEnabled) {
          position.x = Math.round(position.x / 20) * 20;
          position.y = Math.round(position.y / 20) * 20;
        }
        
        actions.addComponent(item.type, position);
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver
    })
  });

  const handleCanvasClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      actions.selectComponent(null);
    }
  };

  const gridSize = 20;
  const gridPattern = state.gridEnabled ? `
    linear-gradient(to right, #e5e7eb 1px, transparent 1px),
    linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)
  ` : 'none';

  return (
    <div 
      ref={(node) => {
        drop(node);
        if (ref) {
          (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
        }
      }}
      className={`builder-canvas relative bg-white border-2 ${
        isOver ? 'border-blue-400 bg-blue-50' : 'border-gray-300'
      } rounded-lg overflow-hidden transition-colors duration-200`}
      style={{
        width: state.canvasSize.width,
        height: state.canvasSize.height,
        backgroundImage: gridPattern,
        backgroundSize: state.gridEnabled ? `${gridSize}px ${gridSize}px` : 'auto',
        minHeight: '600px'
      }}
      onClick={handleCanvasClick}
    >
      {/* Grid overlay */}
      {state.gridEnabled && (
        <div 
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(to right, #d1d5db 1px, transparent 1px),
              linear-gradient(to bottom, #d1d5db 1px, transparent 1px)
            `,
            backgroundSize: `${gridSize}px ${gridSize}px`
          }}
        />
      )}

      {/* Drop zone overlay */}
      {isOver && (
        <div className="absolute inset-0 bg-blue-100 bg-opacity-50 border-2 border-dashed border-blue-400 rounded-lg flex items-center justify-center pointer-events-none">
          <div className="bg-white px-4 py-2 rounded-lg shadow-lg">
            <span className="text-blue-600 font-medium">Drop component here</span>
          </div>
        </div>
      )}

      {/* Render components */}
      {state.components.map((component) => (
        <DraggableComponent
          key={component.id}
          component={component}
          isSelected={state.selectedComponentId === component.id}
        />
      ))}

      {/* Canvas info */}
      <div className="absolute bottom-4 right-4 bg-white px-3 py-1 rounded shadow text-sm text-gray-600">
        {state.components.length} components • {state.viewMode} view
      </div>
    </div>
  );
});

BuilderCanvas.displayName = 'BuilderCanvas';

export default BuilderCanvas;