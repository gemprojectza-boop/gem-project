import React, { useState } from 'react';
import { useDroppable } from '@dnd-kit/core';
import { useDragDrop } from '../contexts/DragDropContext';
import { PlusIcon } from './icons';

interface DropZoneProps {
  id: string;
  children?: React.ReactNode;
  className?: string;
  orientation?: 'horizontal' | 'vertical';
  allowedTypes?: Array<'section' | 'component' | 'text' | 'image'>;
  placeholder?: string;
  onDrop?: (itemId: string) => void;
}

const DropZone: React.FC<DropZoneProps> = ({
  id,
  children,
  className = '',
  orientation = 'vertical',
  allowedTypes = ['section', 'component', 'text', 'image'],
  placeholder = 'Drop items here',
  onDrop,
}) => {
  const { state } = useDragDrop();
  const [showAddButton, setShowAddButton] = useState(false);

  const { isOver, setNodeRef } = useDroppable({
    id,
    data: {
      allowedTypes,
    },
  });

  // Style for the drop zone
  const dropZoneStyle = `
    transition-all duration-200 ease-in-out
    ${isOver ? 'bg-blue-100 border-blue-400 shadow-lg' : 'bg-gray-50 border-gray-300'}
    border-2 border-dashed rounded-lg
    ${orientation === 'horizontal' ? 'flex flex-row gap-4 p-4' : 'flex flex-col gap-4 p-4'}
    ${className}
  `;

  const isEmpty = !children;

  if (!state.isEditMode) {
    return (
      <div className={className}>
        {children}
      </div>
    );
  }

  return (
    <div
      ref={setNodeRef}
      data-drop-zone={id}
      className={dropZoneStyle}
      onMouseEnter={() => setShowAddButton(true)}
      onMouseLeave={() => setShowAddButton(false)}
      style={{
        minHeight: isEmpty ? '120px' : 'auto',
        minWidth: orientation === 'horizontal' ? '200px' : 'auto',
      }}
    >
      {isEmpty && (
        <div className="flex items-center justify-center h-full text-gray-500">
          <div className="text-center">
            <div className="mb-2 opacity-50">
              <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <p className="text-center"ath strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <p className="text-sm">{placeholder}</p>
            <p className="text-xs mt-1 opacity-75">
              Accepts: {allowedTypes.join(', ')}
            </p>
          </div>
        </div>
      )}
      
      {children}

      {/* Add new item button when hovering */}
      {showAddButton && (
        <AddItemButton
          dropZoneId={id}
          allowedTypes={allowedTypes}
          orientation={orientation}
        />
      )}
    </div>
  );
};

// Component for adding new items to a drop zone
interface AddItemButtonProps {
  dropZoneId: string;
  allowedTypes: Array<'section' | 'component' | 'text' | 'image'>;
  orientation: 'horizontal' | 'vertical';
}

const AddItemButton: React.FC<AddItemButtonProps> = ({
  dropZoneId,
  allowedTypes,
  orientation,
}) => {
  const { actions } = useDragDrop();
  const [showMenu, setShowMenu] = useState(false);

  const handleAddItem = (type: 'section' | 'component' | 'text' | 'image') => {
    const newId = `${type}_${Date.now()}`;
    const newItem = {
      id: newId,
      type,
      content: getDefaultContent(type),
      parentId: dropZoneId,
    };

    actions.addItem(newItem);
    setShowMenu(false);
  };

  const getDefaultContent = (type: string) => {
    switch (type) {
      case 'text':
        return { text: 'Click to edit text', editable: true };
      case 'image':
        return { src: 'https://via.placeholder.com/300x200?text=New+Image', alt: 'New image', editable: true };
      case 'component':
        return { name: 'New Component', props: {} };
      case 'section':
        return { title: 'New Section', children: [] };
      default:
        return {};
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="bg-blue-600 text-white p-2 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
        aria-label="Add new item"
      >
        <PlusIcon className="w-4 h-4" />
      </button>

      {showMenu && (
        <div className={`
          absolute z-50 bg-white rounded-lg shadow-lg border border-gray-200 p-2
          ${orientation === 'horizontal' ? 'top-full left-0 mt-2' : 'left-full top-0 ml-2'}
        `}>
          <div className="flex flex-col gap-1 min-w-32">
            {allowedTypes.map(type => (
              <button
                key={type}
                onClick={() => handleAddItem(type)}
                className="px-3 py-2 text-center hover:bg-blue-50 rounded-md text-sm capitalize transition-colors"
              >
                Add {type}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropZone;