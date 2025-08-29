import React from 'react';
import { getFocalPoint, createFocalPointStyles } from '../utils/focalPointStorage.ts';

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
  isVideo = false,
  className = '',
  loading = 'lazy',
  videoAutoPlay = false,
  objectFit = 'cover'
}) => {
  // Hardcoded focal points for dog faces
  const dogFocalPoints: Record<string, {x: number, y: number}> = {
    // Adoptable Dogs
    'alex_main': { x: 0.06, y: 0.35 },
    'chandra_main': { x: 0.48, y: 0.02 },
    'daisy_main': { x: 0.03, y: 0.42 },
    'max_main': { x: 0.50, y: 0.02 },
    'ruth_main': { x: 0.53, y: 0.03 },
    'fifi_main': { x: 0.06, y: 0.46 },
    'foxy_main': { x: 0.44, y: 0.03 },
    'hazel_main': { x: 0.42, y: 0.01 },
    // Forever Sanctuary Dogs
    'casper_main': { x: 0.08, y: 0.44 },
    'jerry_main': { x: 0.45, y: 0.01 },
    'jesse_main': { x: 0.07, y: 0.34 },
    'simba_main': { x: 0.46, y: 0.02 },
    'ruby_main': { x: 0.93, y: 0.46 },
    'pretty_main': { x: 0.96, y: 0.59 }
  };

  // Use hardcoded focal points for dogs, or get from localStorage for other media
  const focalPoint = dogFocalPoints[mediaKey] || getFocalPoint(mediaKey);
  const focalPointStyles = createFocalPointStyles(focalPoint);

  if (isVideo) {
    return (
      <video
        src={mediaUrl}
        className={className}
        autoPlay={videoAutoPlay}
        muted
        loop
        style={{ objectFit, ...focalPointStyles }}
      />
    );
  }

  return (
    <img
      src={mediaUrl}
      alt={alt}
      className={className}
      loading={loading}
      style={{ objectFit, ...focalPointStyles }}
    />
  );
};

export default EditableMedia;