import React, { useState, useRef } from 'react';
import { useDragDrop } from '../contexts/DragDropContext';
import { EditIcon, UploadIcon, CheckIcon, XIcon } from './icons';

interface EditableImageProps {
  id?: string;
  src: string;
  alt: string;
  onImageChange: (newSrc: string, newAlt?: string) => void;
  className?: string;
  width?: number;
  height?: number;
  disabled?: boolean;
  allowUrlInput?: boolean;
  allowFileUpload?: boolean;
}

const EditableImage: React.FC<EditableImageProps> = ({
  id,
  src,
  alt,
  onImageChange,
  className = '',
  width,
  height,
  disabled = false,
  allowUrlInput = true,
  allowFileUpload = false, // File upload would need backend implementation
}) => {
  const { state } = useDragDrop();
  const [isEditing, setIsEditing] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [newUrl, setNewUrl] = useState(src);
  const [newAlt, setNewAlt] = useState(alt);
  const [isLoading, setIsLoading] = useState(false);
  const [imageError, setImageError] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const canEdit = state.isEditMode && !disabled;

  const handleStartEdit = () => {
    if (!canEdit) return;
    setNewUrl(src);
    setNewAlt(alt);
    setIsEditing(true);
    setImageError(false);
  };

  const handleSave = async () => {
    if (newUrl !== src) {
      setIsLoading(true);
      
      // Test if the image URL is valid
      try {
        const img = new Image();
        img.onload = () => {
          onImageChange(newUrl, newAlt);
          setIsEditing(false);
          setIsLoading(false);
          setImageError(false);
          
          // Track change for code generation
          if (id) {
            console.log(`Image changed for ${id}: ${newUrl}`);
          }
        };
        img.onerror = () => {
          setImageError(true);
          setIsLoading(false);
        };
        img.src = newUrl;
      } catch (error) {
        setImageError(true);
        setIsLoading(false);
      }
    } else {
      // Just update alt text
      onImageChange(newUrl, newAlt);
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setNewUrl(src);
    setNewAlt(alt);
    setIsEditing(false);
    setImageError(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && e.ctrlKey) {
      e.preventDefault();
      handleSave();
    } else if (e.key === 'Escape') {
      e.preventDefault();
      handleCancel();
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        setNewUrl(result);
        // Auto-generate alt text from filename
        const filename = file.name.split('.')[0].replace(/[_-]/g, ' ');
        setNewAlt(newAlt || filename);
      };
      reader.readAsDataURL(file);
    }
  };

  // Predefined image URLs for quick selection (in a real app, this would come from a CMS or gallery)
  const quickImages = [
    { url: 'https://images.unsplash.com/photo-1544568100-847a948585b9?w=800&auto=format&fit=crop&q=60', alt: 'Dog placeholder' },
    { url: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&auto=format&fit=crop&q=60', alt: 'Horse placeholder' },
    { url: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=800&auto=format&fit=crop&q=60', alt: 'Community placeholder' },
    { url: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&auto=format&fit=crop&q=60', alt: 'People placeholder' },
  ];

  // If not in edit mode, render normally
  if (!canEdit) {
    return (
      <img 
        src={src} 
        alt={alt} 
        className={className}
        width={width}
        height={height}
      />
    );
  }

  // If editing, show the editor
  if (isEditing) {
    return (
      <div className="relative">
        {/* Image preview */}
        <div className="mb-4 border rounded-lg overflow-hidden bg-gray-50">
          {isLoading ? (
            <div className="flex items-center justify-center h-48 text-gray-500">
              <div className="animate-spin w-8 h-8 border-4 border-gray-300 border-t-blue-600 rounded-full"></div>
              <span className="ml-2">Loading...</span>
            </div>
          ) : imageError ? (
            <div className="flex items-center justify-center h-48 text-red-500 bg-red-50">
              <div className="text-center">
                <XIcon className="w-8 h-8 mx-auto mb-2" />
                <p className="text-center">Invalid image URL</p>
              </div>
            </div>
          ) : (
            <img 
              src={newUrl} 
              alt={newAlt} 
              className={`${className} max-h-48 w-full object-cover`}
              onError={() => setImageError(true)}
            />
          )}
        </div>

        {/* URL input */}
        {allowUrlInput && (
          <div className="mb-3">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Image URL
            </label>
            <input
              type="url"
              value={newUrl}
              onChange={(e) => {
                setNewUrl(e.target.value);
                setImageError(false);
              }}
              onKeyDown={handleKeyDown}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="https://example.com/image.jpg"
            />
          </div>
        )}

        {/* Alt text input */}
        <div className="mb-3">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Alt text
          </label>
          <input
            type="text"
            value={newAlt}
            onChange={(e) => setNewAlt(e.target.value)}
            onKeyDown={handleKeyDown}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Describe the image..."
          />
        </div>

        {/* File upload */}
        {allowFileUpload && (
          <div className="mb-3">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Upload file
            </label>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileUpload}
              accept="image/*"
              className="hidden"
            />
            <button
              onClick={() => fileInputRef.current?.click()}
              className="flex items-center px-3 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
            >
              <UploadIcon className="w-4 h-4 mr-2" />
              Choose file
            </button>
          </div>
        )}

        {/* Quick image selection */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Quick select
          </label>
          <div className="grid grid-cols-4 gap-2">
            {quickImages.map((image, index) => (
              <button
                key={index}
                onClick={() => {
                  setNewUrl(image.url);
                  setNewAlt(image.alt);
                  setImageError(false);
                }}
                className={`relative rounded overflow-hidden border-2 transition-colors ${
                  newUrl === image.url ? 'border-blue-500' : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <img 
                  src={image.url} 
                  alt={image.alt}
                  className="w-full h-16 object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex justify-end gap-2">
          <button
            onClick={handleCancel}
            className="px-4 py-2 text-gray-700 border border-gray-300 rounded hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            disabled={isLoading || imageError}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Save
          </button>
        </div>
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
      <img 
        src={src} 
        alt={alt} 
        className={`
          ${className} 
          cursor-pointer transition-all duration-200
          ${isHovered ? 'ring-2 ring-blue-300 ring-offset-2' : ''}
        `}
        width={width}
        height={height}
        onClick={handleStartEdit}
        title="Click to change image"
      />
      
      {/* Edit overlay */}
      {isHovered && (
        <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
          <div className="bg-white rounded-full p-2 shadow-lg">
            <EditIcon className="w-5 h-5 text-gray-600" />
          </div>
        </div>
      )}
    </div>
  );
};

export default EditableImage;