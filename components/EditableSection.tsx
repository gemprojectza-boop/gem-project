import React from 'react';
import { ArrowUpIcon, ArrowDownIcon } from './icons.tsx';

interface EditableSectionProps {
  children: React.ReactNode;
  title: string;
  isEditMode: boolean;
  isFirst: boolean;
  isLast: boolean;
  onMoveUp: () => void;
  onMoveDown: () => void;
}

const EditableSection: React.FC<EditableSectionProps> = ({
  children,
  title,
  isEditMode,
  isFirst,
  isLast,
  onMoveUp,
  onMoveDown,
}) => {
  if (!isEditMode) {
    return <>{children}</>;
  }

  return (
    <div className="relative group p-2 border-2 border-dashed border-brand-primary my-4">
      <div className="absolute inset-0 bg-brand-primary/10 pointer-events-none"></div>
      <div className="absolute top-2 left-2 bg-brand-primary text-white text-xs font-bold px-3 py-1 rounded-full z-10">
        {title}
      </div>
      <div className="absolute top-2 right-2 flex gap-1 z-10">
        <button
          onClick={onMoveUp}
          disabled={isFirst}
          className="bg-brand-surface p-1 rounded-full shadow-md disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-100"
          aria-label="Move section up"
        >
          <ArrowUpIcon className="w-5 h-5 text-brand-text-primary" />
        </button>
        <button
          onClick={onMoveDown}
          disabled={isLast}
          className="bg-brand-surface p-1 rounded-full shadow-md disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-100"
          aria-label="Move section down"
        >
          <ArrowDownIcon className="w-5 h-5 text-brand-text-primary" />
        </button>
      </div>
      <div className="relative">{children}</div>
    </div>
  );
};

export default EditableSection;