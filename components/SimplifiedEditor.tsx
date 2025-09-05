import React from 'react';

interface SimplifiedEditorProps {
  isEditMode: boolean;
  onToggleEditMode: () => void;
}

const SimplifiedEditor: React.FC<SimplifiedEditorProps> = ({ isEditMode, onToggleEditMode }) => {
  if (!isEditMode) return null;

  return (
    <div className="fixed top-20 right-4 z-50 bg-white rounded-lg shadow-lg p-4 border">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-semibold text-gray-800">Edit Mode</h3>
        <button
          onClick={onToggleEditMode}
          className="text-gray-500 hover:text-gray-700 text-sm"
          title="Exit Edit Mode"
        >
          ✕
        </button>
      </div>
      <div className="text-xs text-gray-600">
        <p className="text-center">Click on images to edit them.</p>
        <p className="mt-1">Press <kbd className="px-1 py-0.5 bg-gray-100 rounded text-xs">Ctrl+E</kbd> to toggle edit mode.</p>
      </div>
    </div>
  );
};

export default SimplifiedEditor;