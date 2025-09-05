/**
 * NH Canvas - React Bindings
 * Optional React integration with hooks and components
 */

import React, { createContext, useContext, useEffect, useState, useCallback, useRef } from 'react';
import { NHCanvas, NHCanvasAPI } from './nh-canvas.js';
import type { NHCanvasConfig, EventName, EventHandler } from './types.js';

// Context for NH Canvas instance
interface NHCanvasContextType {
  canvas: NHCanvas | null;
  isEnabled: boolean;
  isLoading: boolean;
  error: string | null;
  stats: ReturnType<NHCanvas['getStats']> | null;
}

const NHCanvasContext = createContext<NHCanvasContextType | null>(null);

// Provider component
interface NHCanvasProviderProps {
  children: React.ReactNode;
  config?: Partial<NHCanvasConfig>;
  autoEnable?: boolean;
  useGlobalInstance?: boolean;
}

export const NHCanvasProvider: React.FC<NHCanvasProviderProps> = ({
  children,
  config,
  autoEnable = false,
  useGlobalInstance = true
}) => {
  const [canvas, setCanvas] = useState<NHCanvas | null>(null);
  const [isEnabled, setIsEnabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [stats, setStats] = useState<ReturnType<NHCanvas['getStats']> | null>(null);

  useEffect(() => {
    try {
      const instance = useGlobalInstance 
        ? NHCanvasAPI.getGlobal()
        : NHCanvasAPI.create(config);
      
      setCanvas(instance);

      // Set up event listeners
      const handleEnable = () => {
        setIsEnabled(true);
        setStats(instance.getStats());
      };

      const handleDisable = () => {
        setIsEnabled(false);
        setStats(instance.getStats());
      };

      const handleChange = () => {
        setStats(instance.getStats());
      };

      instance.on('enable', handleEnable);
      instance.on('disable', handleDisable);
      instance.on('change', handleChange);

      // Auto-enable if requested
      if (autoEnable) {
        setIsLoading(true);
        instance.enable().then(() => {
          setIsLoading(false);
        }).catch((err) => {
          setError(err.message);
          setIsLoading(false);
        });
      }

      // Initial stats
      setStats(instance.getStats());

      return () => {
        instance.off('enable', handleEnable);
        instance.off('disable', handleDisable);
        instance.off('change', handleChange);
        
        if (!useGlobalInstance) {
          instance.destroy();
        }
      };
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to initialize NH Canvas');
    }
  }, [config, autoEnable, useGlobalInstance]);

  const contextValue: NHCanvasContextType = {
    canvas,
    isEnabled,
    isLoading,
    error,
    stats
  };

  return (
    <NHCanvasContext.Provider value={contextValue}>
      {children}
    </NHCanvasContext.Provider>
  );
};

// Hook to use NH Canvas
export const useNHCanvas = () => {
  const context = useContext(NHCanvasContext);
  if (!context) {
    throw new Error('useNHCanvas must be used within an NHCanvasProvider');
  }
  return context;
};

// Hook for design mode state
export const useDesignMode = () => {
  const { canvas, isEnabled, isLoading, error } = useNHCanvas();

  const enable = useCallback(async () => {
    if (canvas && !isEnabled) {
      await canvas.enable();
    }
  }, [canvas, isEnabled]);

  const disable = useCallback(() => {
    if (canvas && isEnabled) {
      canvas.disable();
    }
  }, [canvas, isEnabled]);

  const toggle = useCallback(() => {
    if (canvas) {
      canvas.toggle();
    }
  }, [canvas]);

  return {
    isEnabled,
    isLoading,
    error,
    enable,
    disable,
    toggle
  };
};

// Hook for selection management
export const useSelection = () => {
  const { canvas } = useNHCanvas();
  const [selectedElements, setSelectedElements] = useState<HTMLElement[]>([]);

  useEffect(() => {
    if (!canvas) return;

    const handleSelectionChange = (elements: HTMLElement[]) => {
      setSelectedElements(elements);
    };

    canvas.on('select', handleSelectionChange);

    return () => {
      canvas.off('select', handleSelectionChange);
    };
  }, [canvas]);

  const selectElements = useCallback((elements: HTMLElement[]) => {
    if (canvas) {
      canvas.selectElements(elements);
    }
  }, [canvas]);

  const clearSelection = useCallback(() => {
    if (canvas) {
      canvas.clearSelection();
    }
  }, [canvas]);

  return {
    selectedElements,
    selectElements,
    clearSelection,
    hasSelection: selectedElements.length > 0,
    selectionCount: selectedElements.length
  };
};

// Hook for layout operations
export const useLayout = () => {
  const { canvas } = useNHCanvas();

  const exportLayout = useCallback(() => {
    if (canvas) {
      return canvas.exportJSON();
    }
    return null;
  }, [canvas]);

  const importLayout = useCallback(async (json: string) => {
    if (canvas) {
      await canvas.importJSON(json);
    }
  }, [canvas]);

  const resetLayout = useCallback(async (scope: 'page' | 'site' = 'page') => {
    if (canvas) {
      await canvas.resetLayout(scope);
    }
  }, [canvas]);

  const undo = useCallback(() => {
    if (canvas) {
      return canvas.undo();
    }
    return false;
  }, [canvas]);

  const redo = useCallback(() => {
    if (canvas) {
      return canvas.redo();
    }
    return false;
  }, [canvas]);

  return {
    exportLayout,
    importLayout,
    resetLayout,
    undo,
    redo
  };
};

// Hook for configuration
export const useConfig = () => {
  const { canvas } = useNHCanvas();

  const addSelector = useCallback((selector: string) => {
    if (canvas) {
      canvas.addSelector(selector);
    }
  }, [canvas]);

  const blacklistSelector = useCallback((selector: string) => {
    if (canvas) {
      canvas.blacklistSelector(selector);
    }
  }, [canvas]);

  const setGridEnabled = useCallback((enabled: boolean) => {
    if (canvas) {
      canvas.setGridEnabled(enabled);
    }
  }, [canvas]);

  const setSnapEnabled = useCallback((enabled: boolean) => {
    if (canvas) {
      canvas.setSnapEnabled(enabled);
    }
  }, [canvas]);

  const setGridStep = useCallback((step: number) => {
    if (canvas) {
      canvas.setGridStep(step);
    }
  }, [canvas]);

  return {
    addSelector,
    blacklistSelector,
    setGridEnabled,
    setSnapEnabled,
    setGridStep
  };
};

// Hook for events
export const useNHCanvasEvents = <T extends EventName>(
  eventName: T,
  handler: EventHandler<T>,
  deps: React.DependencyList = []
) => {
  const { canvas } = useNHCanvas();
  const handlerRef = useRef(handler);

  // Update handler ref when dependencies change
  useEffect(() => {
    handlerRef.current = handler;
  }, deps);

  useEffect(() => {
    if (!canvas) return;

    const stableHandler = (...args: Parameters<EventHandler<T>>) => {
      handlerRef.current(...args);
    };

    canvas.on(eventName, stableHandler);

    return () => {
      canvas.off(eventName, stableHandler);
    };
  }, [canvas, eventName]);
};

// Design Mode Toggle Button Component
interface NHDesignToggleProps {
  children?: React.ReactNode;
  className?: string;
  enabledText?: string;
  disabledText?: string;
  size?: 'small' | 'medium' | 'large';
  variant?: 'primary' | 'secondary' | 'outline';
}

export const NHDesignToggle: React.FC<NHDesignToggleProps> = ({
  children,
  className = '',
  enabledText = 'Design Mode ON',
  disabledText = 'Design Mode OFF',
  size = 'medium',
  variant = 'primary'
}) => {
  const { isEnabled, isLoading, toggle } = useDesignMode();

  const sizeClasses = {
    small: 'px-3 py-1.5 text-sm',
    medium: 'px-4 py-2',
    large: 'px-6 py-3 text-lg'
  };

  const variantClasses = {
    primary: isEnabled 
      ? 'bg-green-600 hover:bg-green-700 text-white' 
      : 'bg-blue-600 hover:bg-blue-700 text-white',
    secondary: isEnabled 
      ? 'bg-green-100 text-green-800 hover:bg-green-200' 
      : 'bg-gray-100 text-gray-800 hover:bg-gray-200',
    outline: isEnabled
      ? 'border-2 border-green-600 text-green-600 hover:bg-green-50'
      : 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50'
  };

  const classes = [
    'inline-flex items-center justify-center font-medium rounded-md transition-all duration-200',
    'focus:outline-none focus:ring-2 focus:ring-offset-2',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    sizeClasses[size],
    variantClasses[variant],
    isEnabled ? 'focus:ring-green-500' : 'focus:ring-blue-500',
    className
  ].filter(Boolean).join(' ');

  return (
    <button
      type="button"
      className={classes}
      onClick={toggle}
      disabled={isLoading}
      aria-label={isEnabled ? 'Disable design mode' : 'Enable design mode'}
      title={isEnabled ? 'Exit design mode' : 'Enter design mode'}
    >
      {isLoading && (
        <svg className="animate-spin -ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24">
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      {children || (isEnabled ? enabledText : disabledText)}
    </button>
  );
};

// Stats Display Component
interface NHStatsProps {
  className?: string;
  showDetails?: boolean;
}

export const NHStats: React.FC<NHStatsProps> = ({
  className = '',
  showDetails = true
}) => {
  const { stats, isEnabled } = useNHCanvas();

  if (!stats) return null;

  return (
    <div className={`bg-gray-50 border rounded-lg p-4 ${className}`}>
      <h3 className="text-sm font-semibold text-gray-900 mb-2">NH Canvas Stats</h3>
      
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div>
          <span className="text-gray-600">Status:</span>
          <span className={`ml-2 font-medium ${isEnabled ? 'text-green-600' : 'text-gray-500'}`}>
            {isEnabled ? 'Enabled' : 'Disabled'}
          </span>
        </div>
        
        <div>
          <span className="text-gray-600">Elements:</span>
          <span className="ml-2 font-medium text-gray-900">
            {stats.elementsManaged}
          </span>
        </div>
        
        <div>
          <span className="text-gray-600">Layouts:</span>
          <span className="ml-2 font-medium text-gray-900">
            {stats.layoutEntries}
          </span>
        </div>
        
        {showDetails && (
          <div>
            <span className="text-gray-600">History:</span>
            <span className="ml-2 font-medium text-gray-900">
              {stats.persistenceStats.historyStats.current}/{stats.persistenceStats.historyStats.total}
            </span>
          </div>
        )}
      </div>
      
      {showDetails && stats.persistenceStats.isDirty && (
        <div className="mt-2 text-xs text-amber-600">
          ⚠ Unsaved changes
        </div>
      )}
    </div>
  );
};

// Error Boundary for NH Canvas
interface NHCanvasErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

export class NHCanvasErrorBoundary extends React.Component<
  React.PropsWithChildren<{}>,
  NHCanvasErrorBoundaryState
> {
  constructor(props: React.PropsWithChildren<{}>) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): NHCanvasErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('NH Canvas Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <h3 className="text-red-800 font-semibold mb-2">NH Canvas Error</h3>
          <p className="text-red-700 text-sm mb-3">
            An error occurred in the design canvas system:
          </p>
          <details className="text-xs text-red-600">
            <summary className="cursor-pointer font-medium">Error Details</summary>
            <pre className="mt-2 whitespace-pre-wrap">
              {this.state.error?.message}
            </pre>
          </details>
          <button
            onClick={() => this.setState({ hasError: false, error: null })}
            className="mt-3 px-3 py-1.5 bg-red-100 text-red-800 rounded text-sm hover:bg-red-200 transition-colors"
          >
            Retry
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

// Utility function to check if React is available
export const isReactAvailable = (): boolean => {
  return typeof window !== 'undefined' && 
         typeof (window as any).React !== 'undefined';
};

// Export everything
export default {
  NHCanvasProvider,
  NHDesignToggle,
  NHStats,
  NHCanvasErrorBoundary,
  useNHCanvas,
  useDesignMode,
  useSelection,
  useLayout,
  useConfig,
  useNHCanvasEvents,
  isReactAvailable
};