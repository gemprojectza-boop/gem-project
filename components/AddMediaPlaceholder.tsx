

import React from 'react';
import { UploadIcon } from './icons.tsx';

interface AddMediaPlaceholderProps {
  onAddClick: (key: string) => void;
  mediaKey: string;
  text?: string;
}

const AddMediaPlaceholder: React.FC<AddMediaPlaceholderProps> = ({ onAddClick, mediaKey, text = 'Add Media' }) => {
  return (
    <button
      onClick={() => onAddClick(mediaKey)}
      className="w-full h-full min-h-[200px] bg-brand-primary/10 border-2 border-dashed border-brand-primary rounded-lg flex flex-col items-center justify-center text-brand-primary hover:bg-brand-primary/20 hover:border-brand-primary-hover transition-all duration-300"
    >
      <UploadIcon className="w-12 h-12 mb-2" />
      <span className="font-semibold">{text}</span>
    </button>
  );
};

export default AddMediaPlaceholder;