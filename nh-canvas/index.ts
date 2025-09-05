/**
 * NH Canvas - Main Export File
 * Site-wide Design Canvas System
 */

// Core exports
export { NHCanvas, NHCanvasAPI, default } from './nh-canvas.js';

// Type exports
export type {
  NHCanvasConfig,
  NHCanvasEvents,
  EventName,
  EventHandler,
  LayoutState,
  LayoutEntry,
  LayoutRect,
  ElementSelector,
  GridConfig,
  SnapConfig,
  StorageAdapter,
  Point,
  Rect,
  Transform,
  ElementInfo,
  Breakpoint,
  DragState,
  ResizeState,
  SelectionState,
  Guide,
  HistoryEntry
} from './types.js';

// Utility exports
export { Utils } from './utils.js';

// Storage exports
export { 
  LocalStorageAdapter, 
  PersistenceManager, 
  HistoryManager 
} from './storage.js';

// Component exports
export { ElementManager } from './element-manager.js';
export { InteractionEngine } from './interaction-engine.js';
export { GuidesSystem } from './guides-system.js';
export { AlignmentTools } from './alignment-tools.js';
export { UIComponents } from './ui-components.js';

// React exports (if React is available)
export type { 
  AlignmentType, 
  DistributionType 
} from './alignment-tools.js';

export type {
  UICallbacks
} from './ui-components.js';

// Version info
export const VERSION = '1.0.0';

// Feature detection
export const FEATURES = {
  touch: 'ontouchstart' in window,
  pointerEvents: 'PointerEvent' in window,
  resizeObserver: 'ResizeObserver' in window,
  intersectionObserver: 'IntersectionObserver' in window,
  webGL: !!document.createElement('canvas').getContext('webgl'),
  localStorage: (() => {
    try {
      const test = '__nh_canvas_test__';
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      return true;
    } catch {
      return false;
    }
  })()
} as const;

// Browser support check
export const isBrowserSupported = (): boolean => {
  return !!(
    typeof document !== 'undefined' &&
    typeof window !== 'undefined' &&
    document.querySelector &&
    window.addEventListener &&
    Array.from &&
    Object.assign &&
    Promise &&
    Map &&
    Set
  );
};

// Quick start function
export const quickStart = async (config?: Partial<import('./types.js').NHCanvasConfig>) => {
  if (!isBrowserSupported()) {
    throw new Error('NH Canvas: Browser not supported');
  }
  
  const { NHCanvasAPI } = await import('./nh-canvas.js');
  
  if (config) {
    const canvas = NHCanvasAPI.create(config);
    await canvas.enable();
    return canvas;
  } else {
    await NHCanvasAPI.enable();
    return NHCanvasAPI.getGlobal();
  }
};