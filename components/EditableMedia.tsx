import React, { useState } from 'react';
import MediaEditModal from './MediaEditModal.tsx';
import { EditIcon } from './icons.tsx';

interface EditableMediaProps {
  mediaUrl: string;
  alt: string;
  mediaKey: string;
  isEditMode?: boolean;
  onUpdate?: (key: string, newUrl: string) => void;
  isVideo?: boolean;
  className?: string;
  loading?: 'lazy' | 'eager';
  videoAutoPlay?: boolean;
  objectFit?: 'cover' | 'contain' | 'fill' | 'scale-down';
}

const EditableMedia: React.FC<EditableMediaProps> = ({
  mediaUrl,
  alt,
  mediaKey,
  isEditMode = false,
  onUpdate,
  isVideo = false,
  className,
  loading = 'lazy',
  videoAutoPlay = false,
  objectFit = 'cover',
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSave = (newUrl: string) => {
    if (onUpdate) {
      onUpdate(mediaKey, newUrl);
    }
    setIsModalOpen(false);
  };

  const mediaElement = isVideo ? (
    <video
      key={mediaUrl}
      src={mediaUrl}
      controls
      loop={videoAutoPlay}
      autoPlay={videoAutoPlay}
      muted={videoAutoPlay}
      playsInline
      className={`w-full h-full ${className || ''}`}
      style={{ objectFit }}
      preload="metadata"
    />
  ) : (
    <img
      src={mediaUrl}
      alt={alt}
      loading={loading}
      decoding="async"
      className={`w-full h-full ${className || ''}`}
      style={{ objectFit }}
    />
  );

  if (!isEditMode || !onUpdate) {
    return mediaElement;
  }

  return (
    <>
      <div className="relative group h-full">
        {mediaElement}
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-white/90 text-brand-text-primary font-bold py-2 px-4 rounded-full flex items-center gap-2 shadow-lg hover:bg-white transform hover:scale-110 transition-transform duration-300"
            aria-label={`Edit ${alt}`}
          >
            <EditIcon className="w-5 h-5" />
            <span>Edit</span>
          </button>
        </div>
      </div>
      {isModalOpen && (
        <MediaEditModal
          onClose={() => setIsModalOpen(false)}
          onSave={handleSave}
        />
      )}
    </>
  );
};

export default EditableMedia;