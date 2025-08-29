import React from 'react';

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
  isVideo = false,
  className = '',
  loading = 'lazy',
  videoAutoPlay = false,
  objectFit = 'cover'
}) => {
  if (isVideo) {
    return (
      <video
        src={mediaUrl}
        className={className}
        autoPlay={videoAutoPlay}
        muted
        loop
        style={{ objectFit }}
      />
    );
  }

  return (
    <img
      src={mediaUrl}
      alt={alt}
      className={className}
      loading={loading}
      style={{ objectFit }}
    />
  );
};

export default EditableMedia;