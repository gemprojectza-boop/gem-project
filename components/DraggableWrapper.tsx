import React, { useState, useRef, useEffect } from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { useDragDrop } from '../contexts/DragDropContext';
import { DragHandleIcon, EditIcon, DeleteIcon, MoveIcon } from './icons';

interface DraggableWrapperProps {
  id: string;
  children: React.ReactNode;
  type: 'section' | 'component' | 'text' | 'image';
  className?: string;
  disabled?: boolean;
  onEdit?: () => void;
  onDelete?: () => void;
  allowPositioning?: boolean; // For free-form positioning
}

const DraggableWrapper: React.FC<DraggableWrapperProps> = ({
  id,
  children,
  type,
  className = '',
  disabled = false,
  onEdit,
  onDelete,
  allowPositioning = false,
}) => {
  const { state, actions } = useDragDrop();
  const [isHovered, setIsHovered] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging: isSortableDragging,
  } = useSortable({ 
    id, 
    disabled: disabled || !state.isEditMode,
  });

  const item = state.items[id];

  // Handle free-form positioning when allowPositioning is true
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!allowPositioning || !state.isEditMode) return;
    
    e.preventDefault();
    setIsDragging(true);
    
    const rect = elementRef.current?.getBoundingClientRect();
    if (!rect) return;
    
    const startX = e.clientX - rect.left;
    const startY = e.clientY - rect.top;
    
    const handleMouseMove = (e: MouseEvent) => {
      const newX = e.clientX - startX;
      const newY = e.clientY - startY;
      
      setPosition({ x: newX, y: newY });
      
      // Update item position in state
      actions.updateItem(id, {
        position: { x: newX, y: newY }
      });
    };
    
    const handleMouseUp = () => {
      setIsDragging(false);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  // Apply position from item state
  useEffect(() => {
    if (item?.position) {
      setPosition(item.position);
    }
  }, [item?.position]);

  // Style for the wrapper
  const wrapperStyle = {
    transform: allowPositioning 
      ? `translate3d(${position.x}px, ${position.y}px, 0)` 
      : CSS.Transform.toString(transform),
    transition: allowPositioning 
      ? (isDragging ? 'none' : 'transform 0.2s ease') 
      : transition,
    position: allowPositioning ? 'absolute' as const : 'relative' as const,
    zIndex: isDragging || isSortableDragging ? 1000 : isSelected ? 10 : 1,
  };

  // Don't show editing UI if not in edit mode
  if (!state.isEditMode) {
    return (
      <div 
        ref={setNodeRef}
        className={className}
        style={allowPositioning ? wrapperStyle : undefined}
      >
        {children}
      </div>
    );
  }

  return (
    <div
      ref={(node) => {
        setNodeRef(node);
        if (elementRef.current !== node) {
          elementRef.current = node;
        }
      }}
      className={`
        relative group transition-all duration-200
        ${isSelected ? 'ring-2 ring-blue-500 ring-offset-2' : ''}
        ${isHovered ? 'ring-1 ring-blue-300' : ''}
        ${isDragging || isSortableDragging ? 'opacity-50' : ''}
        ${className}
      `}
      style={wrapperStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={(e) => {
        e.stopPropagation();
        setIsSelected(!isSelected);
      }}
      {...attributes}
    >
      {/* Drag Overlay for edit mode */}
      <div className={`
        absolute inset-0 bg-blue-500/10 border-2 border-dashed border-blue-500 
        transition-opacity duration-200 pointer-events-none
        ${isHovered || isSelected ? 'opacity-100' : 'opacity-0'}
      `} />
      
      {/* Edit Controls */}
      {(isHovered || isSelected) && (
        <div className="absolute top-2 right-2 flex gap-1 z-20">
          <div className="flex bg-white rounded-md shadow-md border">
            {/* Drag handle for sortable dragging */}
            {!allowPositioning && (
              <button
                {...listeners}
                className="p-2 hover:bg-gray-100 rounded-l-md cursor-grab active:cursor-grabbing"
                aria-label="Drag to reorder"
              >
                <DragHandleIcon className="w-4 h-4 text-gray-600" />
              </button>
            )}
            
            {/* Position handle for free-form dragging */}
            {allowPositioning && (
              <button
                onMouseDown={handleMouseDown}
                className="p-2 hover:bg-gray-100 rounded-l-md cursor-move"
                aria-label="Drag to position"
              >
                <MoveIcon className="w-4 h-4 text-gray-600" />
              </button>
            )}
            
            {/* Edit button */}
            {onEdit && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onEdit();
                }}
                className="p-2 hover:bg-gray-100 border-l border-gray-200"
                aria-label="Edit content"
              >
                <EditIcon className="w-4 h-4 text-gray-600" />
              </button>
            )}
            
            {/* Delete button */}
            {onDelete && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onDelete();
                }}
                className="p-2 hover:bg-red-100 text-red-600 rounded-r-md border-l border-gray-200"
                aria-label="Delete element"
              >
                <DeleteIcon className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      )}
      
      {/* Type label */}
      {(isHovered || isSelected) && (
        <div className="absolute top-2 left-2 z-20">
          <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full">
            {type}
          </span>
        </div>
      )}
      
      {/* Content */}
      <div className={isDragging || isSortableDragging ? 'pointer-events-none' : ''}>
        {children}
      </div>
    </div>
  );
};

export default DraggableWrapper;