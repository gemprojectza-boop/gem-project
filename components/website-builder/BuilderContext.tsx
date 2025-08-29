import React, { createContext, useContext } from 'react';
import type { BuilderContextType } from './types';

const BuilderContext = createContext<BuilderContextType | null>(null);

export const BuilderProvider: React.FC<{ 
  children: React.ReactNode; 
  value: BuilderContextType;
}> = ({ children, value }) => {
  return (
    <BuilderContext.Provider value={value}>
      {children}
    </BuilderContext.Provider>
  );
};

export const useBuilder = () => {
  const context = useContext(BuilderContext);
  if (!context) {
    throw new Error('useBuilder must be used within a BuilderProvider');
  }
  return context;
};