import React, { useState, useRef, useCallback, useEffect } from 'react';
import { XIcon, UploadIcon, SaveIcon, CopyIcon } from './icons.tsx';
import RangeSlider from './RangeSlider.tsx';

interface MediaEditModalProps {
  onClose: () => void;
  onSave: (url: string, focalPoint?: { x: number; y: number }) => void;
  currentUrl?: string;
  mediaKey?: string;
}

const formatTime = (time: number) => {
  if (isNaN(time)) return '0:00';
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
};

const MediaEditModal: React.FC<MediaEditModalProps> = ({ 
  onClose, 
  onSave, 
  currentUrl,
  mediaKey 
}) => {
  const [file, setFile] = useState<File | null>(null);
  const [mediaUrl, setMediaUrl] = useState<string>(currentUrl || '');
  const [urlInput, setUrlInput] = useState<string>(currentUrl || '');
  const [isMediaVideo, setIsMediaVideo] = useState(false);
  const [focalPoint, setFocalPoint] = useState({ x: 0.5, y: 0.5 });
  const [duration, setDuration] = useState(0);
  const [trim, setTrim] = useState<[number, number]>([0, 0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [uploadMethod, setUploadMethod] = useState<'file' | 'url'>('file');
  const [generatedCode, setGeneratedCode] = useState('');
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  
  const blobUrlRef = useRef<string | null>(null);
  const hasSavedRef = useRef(false);

  useEffect(() => {
    // Cleanup function to revoke blob URL if component unmounts without saving
    return () => {
      if (blobUrlRef.current && !hasSavedRef.current) {
        URL.revokeObjectURL(blobUrlRef.current);
      }
    };
  }, []);

  const handleFileSelected = (selectedFile: File | null) => {
    if (blobUrlRef.current) {
      URL.revokeObjectURL(blobUrlRef.current);
      blobUrlRef.current = null;
    }

    setFile(selectedFile);
    setUrlInput('');
    if (selectedFile) {
      const newBlobUrl = URL.createObjectURL(selectedFile);
      setPreviewUrl(newBlobUrl);
      blobUrlRef.current = newBlobUrl;
    } else {
      setPreviewUrl(null);
    }
  };

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrlInput(e.target.value);
    handleFileSelected(null); // Clear file if URL is typed
    setPreviewUrl(e.target.value);
  };

  const handleSave = () => {
    if (previewUrl) {
      hasSavedRef.current = true;
      onSave(previewUrl);
    }
  };
  
  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.stopPropagation();
      if(e.dataTransfer.files && e.dataTransfer.files.length > 0) {
          handleFileSelected(e.dataTransfer.files[0]);
          e.dataTransfer.clearData();
      }
  }, []);
  
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.stopPropagation();
  };

  const isSaveDisabled = !previewUrl;
  const isVideo = file?.type.startsWith('video/') || (!!urlInput && (urlInput.endsWith('.mp4') || urlInput.endsWith('.webm')));

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div className="bg-brand-surface rounded-lg shadow-xl w-full max-w-2xl transform transition-all" onClick={e => e.stopPropagation()}>
        <div className="flex justify-between items-center p-5 border-b border-gray-200">
          <h3 className="text-xl font-semibold text-brand-text-primary">Edit Media</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <XIcon className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label htmlFor="media-url" className="block text-sm font-medium text-gray-700 mb-1">
                  Media URL
                </label>
                <input
                  type="text"
                  id="media-url"
                  value={urlInput}
                  onChange={handleUrlChange}
                  placeholder="https://example.com/image.jpg"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-primary focus:border-brand-primary"
                />
              </div>
              
              <div className="text-center text-gray-500 font-semibold">OR</div>

              <div 
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:border-brand-primary transition-colors"
              >
                  <input
                    type="file"
                    id="file-upload"
                    className="hidden"
                    accept="image/*,video/*"
                    onChange={(e) => handleFileSelected(e.target.files ? e.target.files[0] : null)}
                  />
                  <label htmlFor="file-upload" className="cursor-pointer">
                    <UploadIcon className="mx-auto h-10 w-10 text-gray-400" />
                    <p className="mt-2 text-sm text-gray-600">
                      <span className="font-semibold text-brand-primary">Click to upload</span> or drag and drop
                    </p>
                    <p className="text-xs text-gray-500">{file ? file.name : "PNG, JPG, GIF, MP4 up to 10MB"}</p>
                  </label>
              </div>
            </div>

            <div className="bg-gray-100 rounded-lg flex items-center justify-center min-h-[250px]">
              {previewUrl ? (
                isVideo ? (
                  <video src={previewUrl} controls className="max-w-full max-h-64 rounded-md" />
                ) : (
                  <img src={previewUrl} alt="Preview" className="max-w-full max-h-64 rounded-md" />
                )
              ) : (
                <p className="text-gray-500">Media Preview</p>
              )}
            </div>
          </div>
        </div>

        <div className="flex justify-end items-center p-5 bg-gray-50 border-t border-gray-200 rounded-b-lg">
          <button onClick={onClose} className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50">
            Cancel
          </button>
          <button
            onClick={handleSave}
            disabled={isSaveDisabled}
            className="ml-3 px-4 py-2 text-sm font-medium text-white bg-brand-primary border border-transparent rounded-md shadow-sm hover:bg-brand-primary-hover disabled:bg-brand-disabled disabled:cursor-not-allowed"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default MediaEditModal;