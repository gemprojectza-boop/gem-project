import React, { useState, useRef, useEffect } from 'react';
import { useDragDrop } from '../contexts/DragDropContext';
import { CheckIcon, XIcon, EditIcon } from './icons';

interface EditableTextProps {
  id?: string;
  text: string;
  onTextChange: (newText: string) => void;
  element?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
  className?: string;
  placeholder?: string;
  multiline?: boolean;
  maxLength?: number;
  disabled?: boolean;
}

const EditableText: React.FC<EditableTextProps> = ({
  id,
  text,
  onTextChange,
  element = 'p',
  className = '',
  placeholder = 'Click to edit...',
  multiline = false,
  maxLength,
  disabled = false,
}) => {
  const { state } = useDragDrop();
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(text);
  const [isHovered, setIsHovered] = useState(false);
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);

  const canEdit = state.isEditMode && !disabled;

  // Update edit value when text prop changes
  useEffect(() => {
    setEditValue(text);
  }, [text]);

  // Focus input when entering edit mode
  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [isEditing]);

  const handleStartEdit = () => {
    if (!canEdit) return;
    setIsEditing(true);
  };

  const handleSave = () => {
    onTextChange(editValue);
    setIsEditing(false);
    
    // Track change for code generation
    if (id) {
      // This would update the drag drop context to track the change
      console.log(`Text changed for ${id}: ${editValue}`);
    }
  };

  const handleCancel = () => {
    setEditValue(text);
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !multiline && !e.shiftKey) {
      e.preventDefault();
      handleSave();
    } else if (e.key === 'Escape') {
      e.preventDefault();
      handleCancel();
    } else if (e.key === 'Enter' && multiline && e.ctrlKey) {
      e.preventDefault();
      handleSave();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    if (!maxLength || newValue.length <= maxLength) {
      setEditValue(newValue);
    }
  };

  // Create the appropriate element
  const Element = element as keyof JSX.IntrinsicElements;

  // If not in edit mode, render normally
  if (!canEdit) {
    return (
      <Element className={className}>
        {text || placeholder}
      </Element>
    );
  }

  // If editing, show input/textarea
  if (isEditing) {
    const InputComponent = multiline ? 'textarea' : 'input';
    
    return (
      <div className="relative inline-block w-full">
        <InputComponent
          ref={inputRef as any}
          value={editValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          className={`
            ${className} 
            border-2 border-blue-400 rounded px-2 py-1 w-full
            focus:outline-none focus:ring-2 focus:ring-blue-500
            bg-white shadow-sm
            ${multiline ? 'min-h-[60px] resize-y' : ''}
          `}
          placeholder={placeholder}
          maxLength={maxLength}
          {...(multiline ? { rows: 3 } : { type: 'text' })}
        />
        
        {/* Edit controls */}
        <div className="absolute top-0 right-0 transform translate-x-full flex gap-1 ml-2">
          <button
            onClick={handleSave}
            className="bg-green-600 text-white p-1 rounded shadow hover:bg-green-700 transition-colors"
            title="Save changes"
          >
            <CheckIcon className="w-4 h-4" />
          </button>
          <button
            onClick={handleCancel}
            className="bg-red-600 text-white p-1 rounded shadow hover:bg-red-700 transition-colors"
            title="Cancel changes"
          >
            <XIcon className="w-4 h-4" />
          </button>
        </div>
        
        {/* Character count */}
        {maxLength && (
          <div className="text-xs text-gray-500 mt-1">
            {editValue.length}/{maxLength}
          </div>
        )}
      </div>
    );
  }

  // In edit mode but not currently editing
  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Element
        className={`
          ${className} 
          cursor-pointer transition-colors duration-200
          ${isHovered ? 'bg-yellow-50 ring-1 ring-yellow-300' : ''}
          ${!text && 'text-gray-400 italic'}
        `}
        onClick={handleStartEdit}
        title="Click to edit text"
      >
        {text || placeholder}
      </Element>
      
      {/* Edit indicator */}
      {isHovered && (
        <div className="absolute top-0 right-0 transform translate-x-full ml-2">
          <div className="bg-white border border-gray-300 rounded-full p-1 shadow-sm">
            <EditIcon className="w-3 h-3 text-gray-600" />
          </div>
        </div>
      )}
    </div>
  );
};

export default EditableText;