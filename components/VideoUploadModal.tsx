import React, { useState, useRef, useEffect, useCallback } from 'react';
import { XIcon, UploadIcon } from './icons.tsx';
import RangeSlider from './RangeSlider.tsx';

interface VideoUploadModalProps {
  onClose: () => void;
  onSave: (url: string, focalPoint: { x: number; y: number }) => void;
}

const formatTime = (time: number) => {
  if (isNaN(time)) return '0:00';
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
};

const VideoUploadModal: React.FC<VideoUploadModalProps> = ({ onClose, onSave }) => {
  const [file, setFile] = useState<File | null>(null);
  const [mediaUrl, setMediaUrl] = useState<string | null>(null);
  const [isMediaVideo, setIsMediaVideo] = useState(false);
  const [focalPoint, setFocalPoint] = useState({ x: 0.5, y: 0.5 });
  const [duration, setDuration] = useState(0);
  const [trim, setTrim] = useState<[number, number]>([0, 0]);
  const [isPlaying, setIsPlaying] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);
  const blobUrlRef = useRef<string | null>(null);
  const hasSavedRef = useRef(false);

  useEffect(() => {
    return () => {
      if (blobUrlRef.current && !hasSavedRef.current) {
        URL.revokeObjectURL(blobUrlRef.current);
      }
    };
  }, []);

  const handleFileSelected = (selectedFile: File | null) => {
    if (blobUrlRef.current) URL.revokeObjectURL(blobUrlRef.current);
    
    setFile(selectedFile);
    if (selectedFile) {
      const newBlobUrl = URL.createObjectURL(selectedFile);
      setMediaUrl(newBlobUrl);
      blobUrlRef.current = newBlobUrl;
      setIsMediaVideo(selectedFile.type.startsWith('video/'));
    } else {
      setMediaUrl(null);
      setIsMediaVideo(false);
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
      hasSavedRef.current = true;
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
      if(e.dataTransfer.files && e.dataTransfer.files.length > 0) {
          handleFileSelected(e.dataTransfer.files[0]);
          e.dataTransfer.clearData();
      }
  }, []);
  
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.stopPropagation();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div className="bg-brand-surface rounded-lg shadow-xl w-full max-w-4xl transform transition-all" onClick={e => e.stopPropagation()}>
        <div className="flex justify-between items-center p-5 border-b">
          <h3 className="text-xl font-semibold">Customize Hero Media</h3>
          <button onClick={onClose}><XIcon className="w-6 h-6" /></button>
        </div>

        <div className="p-6">
          {!mediaUrl ? (
             <div 
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center cursor-pointer hover:border-brand-primary"
              >
                  <input type="file" id="media-upload" className="hidden" accept="video/*,image/*" onChange={e => handleFileSelected(e.target.files ? e.target.files[0] : null)} />
                  <label htmlFor="media-upload" className="cursor-pointer">
                    <UploadIcon className="mx-auto h-12 w-12 text-gray-400" />
                    <p className="mt-2 text-gray-600"><span className="font-semibold text-brand-primary">Upload media</span> or drag and drop</p>
                  </label>
              </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              <div className="md:col-span-3 relative bg-black rounded-lg flex items-center justify-center" onClick={handleFocalPointClick}>
                {isMediaVideo ? (
                    <video
                      ref={videoRef}
                      src={mediaUrl}
                      className="w-full rounded-lg"
                      onLoadedMetadata={handleLoadedMetadata}
                      onTimeUpdate={handleTimeUpdate}
                      onPlay={() => setIsPlaying(true)}
                      onPause={() => setIsPlaying(false)}
                    />
                ) : (
                    <img src={mediaUrl} alt="Preview" className="max-w-full max-h-[400px] object-contain rounded-lg"/>
                )}
                <div className="absolute inset-0 cursor-crosshair">
                   <div className="absolute w-6 h-px bg-white/70" style={{ top: `${focalPoint.y * 100}%`, left: `${focalPoint.x * 100}%`, transform: 'translate(-50%, -50%) translateX(-12px) ' }}></div>
                   <div className="absolute h-6 w-px bg-white/70" style={{ top: `${focalPoint.y * 100}%`, left: `${focalPoint.x * 100}%`, transform: 'translate(-50%, -50%) translateY(-12px)' }}></div>
                </div>
              </div>
              <div className="md:col-span-2 space-y-4">
                {isMediaVideo && duration > 0 ? (
                    <>
                        <div>
                        <h4 className="font-semibold mb-2">Trim Video</h4>
                        <div className="space-y-2">
                            <RangeSlider
                            min={0}
                            max={duration}
                            step={0.1}
                            value={trim}
                            onChange={setTrim}
                            />
                            <div className="flex justify-between text-sm text-gray-600">
                            <span>Start: {formatTime(trim[0])}</span>
                            <span>End: {formatTime(trim[1])}</span>
                            </div>
                        </div>
                        </div>
                        <div>
                        <h4 className="font-semibold mb-2">Playback</h4>
                        <button onClick={togglePlay} className="w-full bg-brand-primary/20 py-2 rounded-md font-semibold text-brand-text-primary hover:bg-brand-primary hover:text-white transition-colors">{isPlaying ? 'Pause' : 'Play'}</button>
                        </div>
                    </>
                ) : (
                    !isMediaVideo ? null : <div className="space-y-4">
                        <div className="bg-gray-200 rounded-lg animate-pulse h-16 w-full"></div>
                        <div className="bg-gray-200 rounded-lg animate-pulse h-10 w-full"></div>
                    </div>
                )}
                <div>
                  <h4 className="font-semibold mb-2">Focal Point</h4>
                  <p className="text-sm text-gray-600">Click on the media to set the focus for different screen sizes.</p>
                  <p className="text-xs mt-1 bg-gray-100 p-2 rounded">X: {focalPoint.x.toFixed(2)}, Y: {focalPoint.y.toFixed(2)}</p>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="flex justify-end p-5 bg-gray-50 border-t">
          <button onClick={onClose} className="px-4 py-2 bg-white border rounded-md mr-3">Cancel</button>
          <button onClick={handleSave} disabled={!mediaUrl} className="px-4 py-2 bg-brand-primary text-white rounded-md disabled:bg-brand-disabled">Save Media</button>
        </div>
      </div>
    </div>
  );
};

export default VideoUploadModal;