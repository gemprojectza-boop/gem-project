
import React from 'react';
import { PawIcon } from './icons.tsx';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-144px)] text-brand-primary" aria-live="polite" role="status">
      <PawIcon className="w-20 h-20 animate-pulse-gentle" />
      <p className="mt-4 text-lg font-semibold tracking-wider">Loading...</p>
    </div>
  );
};

export default LoadingSpinner;