import React, { useState, useRef, useCallback, useEffect } from 'react';
import { XIcon, UploadIcon, SaveIcon, CopyIcon, CheckIcon, AlertTriangleIcon, LoaderIcon } from './icons.tsx';
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
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>('');
  const [isDragging, setIsDragging] = useState(false);
  const [urlError, setUrlError] = useState('');
  const [copySuccess, setCopySuccess] = useState(false);
  const [previewError, setPreviewError] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);
  const blobUrlRef = useRef<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const generateMediaCode = (key?: string, filename?: string, url?: string) => {
    if (!key) return '';
    
    const codeTemplate = `
// Add this to your media content object in App.tsx:
'${key}': '${url || urlInput}',

// If using a file upload, save ${filename || 'the file'} to your project's public/media folder
// Then update the URL to: '/media/${filename || 'filename.ext'}'

// Copy this line to update your media content:
mediaContent['${key}'] = '${url || urlInput}';
`;
    
    return codeTemplate.trim();
  };

  const handleFileSelected = useCallback((selectedFile: File | null) => {
    setError('');
    setPreviewError(false);
    
    if (!selectedFile) {
      setFile(null);
      setMediaUrl('');
      setIsMediaVideo(false);
      setGeneratedCode('');
      if (blobUrlRef.current) {
        URL.revokeObjectURL(blobUrlRef.current);
        blobUrlRef.current = null;
      }
      return;
    }

    // Validate file size (10MB limit)
    const maxSize = 10 * 1024 * 1024;
    if (selectedFile.size > maxSize) {
      setError('File size must be less than 10MB');
      return;
    }

    // Validate file type
    if (!selectedFile.type.startsWith('image/') && !selectedFile.type.startsWith('video/')) {
      setError('Please select a valid image or video file');
      return;
    }

    setIsLoading(true);
    
    if (blobUrlRef.current) {
      URL.revokeObjectURL(blobUrlRef.current);
      blobUrlRef.current = null;
    }
    
    setFile(selectedFile);
    const newBlobUrl = URL.createObjectURL(selectedFile);
    setMediaUrl(newBlobUrl);
    blobUrlRef.current = newBlobUrl;
    setIsMediaVideo(selectedFile.type.startsWith('video/'));
    
    // Generate code for this media change
    const code = generateMediaCode(mediaKey, selectedFile.name, newBlobUrl);
    setGeneratedCode(code);
    
    setIsLoading(false);
  }, [mediaKey]);

  const handleUrlSubmit = async () => {
    const url = urlInput.trim();
    if (!url) {
      setUrlError('Please enter a URL');
      return;
    }

    // Basic URL validation
    try {
      new URL(url);
    } catch {
      setUrlError('Please enter a valid URL');
      return;
    }

    setIsLoading(true);
    setError('');
    setUrlError('');
    setPreviewError(false);

    try {
      // Test if the URL is accessible
      const response = await fetch(url, { method: 'HEAD' });
      if (!response.ok) {
        throw new Error('URL not accessible');
      }

      setMediaUrl(url);
      setIsMediaVideo(
        url.includes('.mp4') || 
        url.includes('.webm') || 
        url.includes('.ogv') ||
        response.headers.get('content-type')?.startsWith('video/')
      );
      const code = generateMediaCode(mediaKey, undefined, url);
      setGeneratedCode(code);
    } catch (error) {
      setUrlError('Could not load media from this URL. Please check the URL and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      const videoDuration = videoRef.current.duration;
      setDuration(videoDuration);
      setTrim([0, videoDuration]);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current && trim[1] > trim[0] && videoRef.current.currentTime >= trim[1]) {
      videoRef.current.currentTime = trim[0];
      if (!videoRef.current.loop) {
        videoRef.current.play();
      }
    }
  };

  const handleFocalPointClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setFocalPoint({ x, y });
  };

  const handleSave = () => {
    if (mediaUrl) {
      let finalUrl = mediaUrl;
      const isTrimmed = isMediaVideo && (trim[0] > 0 || trim[1] < duration);
      if (isTrimmed && trim[0] !== trim[1]) {
        finalUrl = `${mediaUrl}#t=${trim[0]},${trim[1]}`;
      }
      onSave(finalUrl, focalPoint);
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFileSelected(e.dataTransfer.files[0]);
      e.dataTransfer.clearData();
    }
  }, [handleFileSelected]);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (!e.currentTarget.contains(e.relatedTarget as Node)) {
      setIsDragging(false);
    }
  };

  const handleImageError = () => {
    setPreviewError(true);
    setError('Failed to load media preview');
  };

  const handleVideoError = () => {
    setPreviewError(true);
    setError('Failed to load video preview');
  };

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if ((e.ctrlKey || e.metaKey) && e.key === 's') {
        e.preventDefault();
        if (mediaUrl) handleSave();
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [mediaUrl, onClose]);

  // Cleanup effect
  useEffect(() => {
    return () => {
      if (blobUrlRef.current) {
        URL.revokeObjectURL(blobUrlRef.current);
      }
    };
  }, []);

  const copyCodeToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(generatedCode);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (error) {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = generatedCode;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div className="bg-white rounded-lg shadow-xl w-full max-w-6xl max-h-[90vh] overflow-y-auto transform transition-all" onClick={e => e.stopPropagation()}>
        <div className="flex justify-between items-center p-5 border-b sticky top-0 bg-white z-10">
          <h3 className="text-xl font-semibold">Edit Media</h3>
          <div className="flex gap-2">
            {mediaKey && (
              <span className="text-sm text-gray-600 bg-gray-100 px-2 py-1 rounded">
                Key: {mediaKey}
              </span>
            )}
            <button onClick={onClose}>
              <XIcon className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="p-6">
          {/* Error Display */}
          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2">
              <AlertTriangleIcon className="w-5 h-5 text-red-500 flex-shrink-0" />
              <span className="text-red-700 text-sm">{error}</span>
            </div>
          )}

          {/* Upload Method Selector */}
          <div className="mb-6">
            <div className="flex gap-2 mb-4">
              <button
                onClick={() => {
                  setUploadMethod('file');
                  setUrlError('');
                  setError('');
                }}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  uploadMethod === 'file' 
                    ? 'bg-brand-primary text-white shadow-md' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <UploadIcon className="w-4 h-4 inline mr-2" />
                Upload File
              </button>
              <button
                onClick={() => {
                  setUploadMethod('url');
                  setError('');
                  setPreviewError(false);
                }}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  uploadMethod === 'url' 
                    ? 'bg-brand-primary text-white shadow-md' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                🔗 Use URL
              </button>
            </div>

            {uploadMethod === 'file' ? (
              <div>
                {!mediaUrl ? (
                  <div 
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    onDragEnter={handleDragEnter}
                    onDragLeave={handleDragLeave}
                    className={`border-2 border-dashed rounded-lg p-12 text-center cursor-pointer transition-all ${
                      isDragging 
                        ? 'border-brand-primary bg-brand-primary/5 scale-105' 
                        : 'border-gray-300 hover:border-brand-primary hover:bg-gray-50'
                    }`}
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <input 
                      ref={fileInputRef}
                      type="file" 
                      className="hidden" 
                      accept="video/*,image/*" 
                      onChange={e => handleFileSelected(e.target.files ? e.target.files[0] : null)} 
                    />
                    {isLoading ? (
                      <LoaderIcon className="mx-auto h-12 w-12 text-brand-primary animate-spin" />
                    ) : (
                      <UploadIcon className={`mx-auto h-12 w-12 transition-colors ${
                        isDragging ? 'text-brand-primary' : 'text-gray-400'
                      }`} />
                    )}
                    <p className="mt-2 text-gray-600">
                      {isDragging ? (
                        <span className="font-semibold text-brand-primary">Drop your file here!</span>
                      ) : isLoading ? (
                        <span>Processing file...</span>
                      ) : (
                        <>
                          <span className="font-semibold text-brand-primary">Upload media</span> or drag and drop
                        </>
                      )}
                    </p>
                    <p className="text-sm text-gray-400">
                      {isLoading ? 'Please wait...' : 'PNG, JPG, GIF, MP4, WebM up to 10MB'}
                    </p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 p-3 bg-green-50 border border-green-200 rounded-lg">
                      <CheckIcon className="w-5 h-5 text-green-500" />
                      <span className="text-green-700 text-sm font-medium">
                        File loaded: {file?.name}
                      </span>
                    </div>
                    <button
                      onClick={() => fileInputRef.current?.click()}
                      className="w-full p-3 border-2 border-dashed border-gray-300 rounded-lg text-center hover:border-brand-primary hover:bg-gray-50 transition-colors"
                    >
                      <input 
                        ref={fileInputRef}
                        type="file" 
                        className="hidden" 
                        accept="video/*,image/*" 
                        onChange={e => handleFileSelected(e.target.files ? e.target.files[0] : null)} 
                      />
                      📁 Click to change file
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="space-y-3">
                <div className="flex gap-2">
                  <input
                    type="url"
                    placeholder="https://example.com/image.jpg or https://example.com/video.mp4"
                    value={urlInput}
                    onChange={(e) => {
                      setUrlInput(e.target.value);
                      setUrlError('');
                    }}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        handleUrlSubmit();
                      }
                    }}
                    className={`flex-1 p-3 border rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-colors ${
                      urlError ? 'border-red-300' : 'border-gray-300'
                    }`}
                    disabled={isLoading}
                  />
                  <button
                    onClick={handleUrlSubmit}
                    disabled={!urlInput.trim() || isLoading}
                    className="px-6 py-3 bg-brand-primary text-white rounded-lg hover:bg-brand-primary-hover disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
                  >
                    {isLoading ? (
                      <LoaderIcon className="w-4 h-4 animate-spin" />
                    ) : (
                      '🔗'
                    )}
                    {isLoading ? 'Loading...' : 'Load URL'}
                  </button>
                </div>
                {urlError && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2">
                    <AlertTriangleIcon className="w-4 h-4 text-red-500" />
                    <span className="text-red-700 text-sm">{urlError}</span>
                  </div>
                )}
                {mediaUrl && urlInput && !urlError && (
                  <div className="flex items-center gap-2 p-3 bg-green-50 border border-green-200 rounded-lg">
                    <CheckIcon className="w-5 h-5 text-green-500" />
                    <span className="text-green-700 text-sm font-medium">
                      URL loaded successfully
                    </span>
                  </div>
                )}
              </div>
            )}
          </div>

          {mediaUrl && !previewError && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Media Preview */}
              <div className="lg:col-span-2">
                <div className="relative bg-black rounded-lg flex items-center justify-center min-h-[300px] overflow-hidden" onClick={handleFocalPointClick}>
                  {isLoading ? (
                    <div className="flex flex-col items-center gap-4 text-white">
                      <LoaderIcon className="w-8 h-8 animate-spin" />
                      <span>Loading media...</span>
                    </div>
                  ) : isMediaVideo ? (
                    <video
                      ref={videoRef}
                      src={mediaUrl}
                      className="w-full max-h-[500px] rounded-lg"
                      onLoadedMetadata={handleLoadedMetadata}
                      onTimeUpdate={handleTimeUpdate}
                      onPlay={() => setIsPlaying(true)}
                      onPause={() => setIsPlaying(false)}
                      onError={handleVideoError}
                      controls
                    />
                  ) : (
                    <img 
                      src={mediaUrl} 
                      alt="Media preview" 
                      className="max-w-full max-h-[500px] object-contain rounded-lg"
                      onError={handleImageError}
                      onLoad={() => setPreviewError(false)}
                    />
                  )}
                  {/* Focal Point Indicator */}
                  <div className="absolute inset-0 cursor-crosshair pointer-events-auto">
                    <div 
                      className="absolute w-6 h-px bg-white/70" 
                      style={{ 
                        top: `${focalPoint.y * 100}%`, 
                        left: `${focalPoint.x * 100}%`, 
                        transform: 'translate(-50%, -50%) translateX(-12px)' 
                      }}
                    ></div>
                    <div 
                      className="absolute h-6 w-px bg-white/70" 
                      style={{ 
                        top: `${focalPoint.y * 100}%`, 
                        left: `${focalPoint.x * 100}%`, 
                        transform: 'translate(-50%, -50%) translateY(-12px)' 
                      }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Controls */}
              <div className="space-y-6">
                {/* Video Controls */}
                {isMediaVideo && duration > 0 && (
                  <div>
                    <h4 className="font-semibold mb-3">Video Controls</h4>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Trim Video</label>
                        <RangeSlider
                          min={0}
                          max={duration}
                          step={0.1}
                          value={trim}
                          onChange={setTrim}
                        />
                        <div className="flex justify-between text-sm text-gray-600 mt-1">
                          <span>Start: {formatTime(trim[0])}</span>
                          <span>End: {formatTime(trim[1])}</span>
                        </div>
                      </div>
                      <button 
                        onClick={togglePlay} 
                        className="w-full bg-brand-primary text-white py-2 rounded-md font-semibold hover:bg-brand-primary-hover transition-colors"
                      >
                        {isPlaying ? 'Pause' : 'Play'}
                      </button>
                    </div>
                  </div>
                )}

                {/* Focal Point */}
                <div>
                  <h4 className="font-semibold mb-2">Focal Point</h4>
                  <p className="text-sm text-gray-600 mb-2">
                    Click on the media to set the focus for different screen sizes.
                  </p>
                  <div className="text-xs bg-gray-100 p-2 rounded">
                    X: {focalPoint.x.toFixed(2)}, Y: {focalPoint.y.toFixed(2)}
                  </div>
                </div>

                {/* Generated Code */}
                {generatedCode && (
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      Generated Code
                      <button
                        onClick={copyCodeToClipboard}
                        className={`transition-all ${
                          copySuccess 
                            ? 'text-green-500' 
                            : 'text-brand-primary hover:text-brand-primary-hover'
                        }`}
                        title={copySuccess ? 'Copied!' : 'Copy to clipboard'}
                      >
                        {copySuccess ? (
                          <CheckIcon className="w-4 h-4" />
                        ) : (
                          <CopyIcon className="w-4 h-4" />
                        )}
                      </button>
                      {copySuccess && (
                        <span className="text-sm text-green-600 font-normal">Copied!</span>
                      )}
                    </h4>
                    <pre className="text-xs bg-gray-100 p-3 rounded overflow-x-auto">
                      {generatedCode}
                    </pre>
                  </div>
                )}
              </div>
            </div>
          )}

          {previewError && (
            <div className="flex flex-col items-center justify-center p-8 bg-gray-100 rounded-lg">
              <AlertTriangleIcon className="w-12 h-12 text-red-400 mb-4" />
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Preview Error</h3>
              <p className="text-gray-600 text-center mb-4">
                Unable to load the media preview. The file may be corrupted or the URL may not be accessible.
              </p>
              <button
                onClick={() => {
                  setPreviewError(false);
                  setError('');
                  if (uploadMethod === 'file') {
                    fileInputRef.current?.click();
                  } else {
                    setUrlInput('');
                  }
                }}
                className="px-4 py-2 bg-brand-primary text-white rounded-md hover:bg-brand-primary-hover transition-colors"
              >
                Try Again
              </button>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center p-5 bg-gray-50 border-t sticky bottom-0">
          <div className="text-sm text-gray-600">
            <kbd className="px-2 py-1 bg-gray-200 rounded text-xs">Esc</kbd> to cancel • <kbd className="px-2 py-1 bg-gray-200 rounded text-xs">Ctrl+S</kbd> to save
          </div>
          <div className="flex gap-3">
            <button 
              onClick={onClose} 
              className="px-4 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button 
              onClick={handleSave} 
              disabled={!mediaUrl || isLoading || previewError} 
              className="px-4 py-2 bg-brand-primary text-white rounded-md disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-brand-primary-hover transition-colors flex items-center gap-2 font-medium"
            >
              <SaveIcon className="w-4 h-4" />
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaEditModal;