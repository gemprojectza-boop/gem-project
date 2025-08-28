import React, { useState, useRef } from 'react';
import { XIcon, UploadIcon, SaveIcon, EditIcon } from './icons.tsx';

interface EditingSystemProps {
  isEditMode: boolean;
  onToggleEditMode: () => void;
  onSaveChanges: (changes: MediaChanges) => void;
  mediaContent: Record<string, string>;
}

interface MediaChanges {
  [key: string]: string;
}

interface MediaUpload {
  key: string;
  file: File;
  preview: string;
}

const EditingSystem: React.FC<EditingSystemProps> = ({
  isEditMode,
  onToggleEditMode,
  onSaveChanges,
  mediaContent
}) => {
  const [pendingUploads, setPendingUploads] = useState<MediaUpload[]>([]);
  const [changes, setChanges] = useState<MediaChanges>({});
  const [isUploading, setIsUploading] = useState(false);
  const [showUploadPanel, setShowUploadPanel] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (file: File, mediaKey?: string) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const preview = e.target?.result as string;
      const key = mediaKey || `media_${Date.now()}`;
      
      setPendingUploads(prev => [
        ...prev.filter(upload => upload.key !== key),
        { key, file, preview }
      ]);
      
      setChanges(prev => ({
        ...prev,
        [key]: preview
      }));
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    files.forEach(file => {
      if (file.type.startsWith('image/') || file.type.startsWith('video/')) {
        handleFileUpload(file);
      }
    });
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    files.forEach(file => handleFileUpload(file));
  };

  const saveChangesToCode = async () => {
    setIsUploading(true);
    
    try {
      // Generate updated media content object
      const updatedMediaContent = { ...mediaContent, ...changes };
      
      // Create a downloadable file with the new media mappings
      const mediaMapping = Object.entries(updatedMediaContent)
        .map(([key, url]) => `  '${key}': '${url}',`)
        .join('\n');
      
      const codeUpdate = `
// Updated Media Content - Replace in your App.tsx
const mediaContent = {
${mediaMapping}
};

// Pending uploads that need to be saved to your project:
${pendingUploads.map(upload => `// ${upload.key}: ${upload.file.name}`).join('\n')}
      `;
      
      // Create and download the file
      const blob = new Blob([codeUpdate], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'media-updates.txt';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      
      // Call the save callback
      onSaveChanges(changes);
      
      // Reset state
      setPendingUploads([]);
      setChanges({});
      
      alert('Changes saved! Check your downloads for the media-updates.txt file with the code changes.');
      
    } catch (error) {
      console.error('Error saving changes:', error);
      alert('Error saving changes. Please try again.');
    } finally {
      setIsUploading(false);
    }
  };

  const removeUpload = (key: string) => {
    setPendingUploads(prev => prev.filter(upload => upload.key !== key));
    setChanges(prev => {
      const newChanges = { ...prev };
      delete newChanges[key];
      return newChanges;
    });
  };

  if (!isEditMode) {
    return (
      <button
        onClick={onToggleEditMode}
        className="fixed top-4 right-4 z-50 bg-brand-primary text-white px-4 py-2 rounded-lg shadow-lg hover:bg-brand-primary-hover transition-colors flex items-center gap-2"
        title="Enable Edit Mode"
      >
        <EditIcon className="w-4 h-4" />
        Edit Site
      </button>
    );
  }

  return (
    <>
      {/* Edit Mode Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-brand-primary text-white p-4 shadow-lg">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
            <h2 className="text-lg font-semibold">Edit Mode Active</h2>
            <span className="text-sm opacity-75">
              {Object.keys(changes).length} pending change{Object.keys(changes).length !== 1 ? 's' : ''}
            </span>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setShowUploadPanel(!showUploadPanel)}
              className="bg-white text-brand-primary px-3 py-1 rounded text-sm hover:bg-gray-100 transition-colors flex items-center gap-1"
            >
              <UploadIcon className="w-4 h-4" />
              Upload Media
            </button>
            <button
              onClick={saveChangesToCode}
              disabled={isUploading || Object.keys(changes).length === 0}
              className="bg-brand-accent text-white px-3 py-1 rounded text-sm hover:bg-brand-accent-hover disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-1"
            >
              <SaveIcon className="w-4 h-4" />
              {isUploading ? 'Saving...' : 'Save Changes'}
            </button>
            <button
              onClick={onToggleEditMode}
              className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600 transition-colors flex items-center gap-1"
            >
              <XIcon className="w-4 h-4" />
              Exit Edit
            </button>
          </div>
        </div>
      </div>

      {/* Upload Panel */}
      {showUploadPanel && (
        <div className="fixed top-20 right-4 z-40 bg-white rounded-lg shadow-xl border p-4 w-80">
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Upload Media</h3>
            
            {/* Drag and Drop Area */}
            <div
              onDrop={handleDrop}
              onDragOver={(e) => e.preventDefault()}
              className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-brand-primary transition-colors cursor-pointer"
              onClick={() => fileInputRef.current?.click()}
            >
              <UploadIcon className="mx-auto h-8 w-8 text-gray-400 mb-2" />
              <p className="text-sm text-gray-600">
                Drop images/videos here or <span className="text-brand-primary font-medium">click to browse</span>
              </p>
            </div>
            
            <input
              ref={fileInputRef}
              type="file"
              multiple
              accept="image/*,video/*"
              onChange={handleFileSelect}
              className="hidden"
            />
          </div>

          {/* Pending Uploads */}
          {pendingUploads.length > 0 && (
            <div className="space-y-2">
              <h4 className="font-medium text-sm">Pending Uploads:</h4>
              {pendingUploads.map((upload) => (
                <div key={upload.key} className="flex items-center gap-2 p-2 bg-gray-50 rounded">
                  <div className="w-8 h-8 bg-gray-200 rounded overflow-hidden">
                    <img
                      src={upload.preview}
                      alt="Preview"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 text-sm">
                    <div className="font-medium truncate">{upload.file.name}</div>
                    <div className="text-gray-500 text-xs">{upload.key}</div>
                  </div>
                  <button
                    onClick={() => removeUpload(upload.key)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <XIcon className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Body padding to account for fixed header */}
      <div className="pt-20"></div>
    </>
  );
};

export default EditingSystem;