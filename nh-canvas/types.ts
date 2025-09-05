/**
 * NH Canvas - Site-wide Design Canvas System
 * Core Types and Interfaces
 */

export type ElementSelector = {
  strategy: 'dataId' | 'autoCss';
  value: string;
};

export type LayoutRect = {
  x: number;
  y: number;
  width: number;
  height: number;
  rotate?: number;
  z?: number;
  locked?: boolean;
  hidden?: boolean;
};

export type LayoutEntry = {
  selector: ElementSelector;
  page?: string;
  rect: LayoutRect;
};

export type GridConfig = {
  enabled: boolean;
  step: number;
};

export type SnapConfig = {
  enabled: boolean;
  threshold: number;
};

export type LayoutState = {
  siteVersion: string;
  entries: LayoutEntry[];
  grid: GridConfig;
  snap: SnapConfig;
};

export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg';

export type ResponsiveLayoutRect = {
  [key in Breakpoint]?: LayoutRect;
};

export type ResponsiveLayoutEntry = {
  selector: ElementSelector;
  page?: string;
  rects: ResponsiveLayoutRect;
};

export type DragState = {
  isDragging: boolean;
  startPos: { x: number; y: number };
  currentPos: { x: number; y: number };
  element: HTMLElement | null;
  offset: { x: number; y: number };
};

export type ResizeState = {
  isResizing: boolean;
  handle: ResizeHandle | null;
  startRect: DOMRect | null;
  element: HTMLElement | null;
};

export type ResizeHandle = 'nw' | 'n' | 'ne' | 'w' | 'e' | 'sw' | 's' | 'se';

export type SelectionState = {
  selectedElements: Set<HTMLElement>;
  isMarqueeSelecting: boolean;
  marqueeStart: { x: number; y: number } | null;
  marqueeEnd: { x: number; y: number } | null;
};

export type Guide = {
  type: 'vertical' | 'horizontal';
  position: number;
  elements: HTMLElement[];
  snapType: 'edge' | 'center';
};

export type HistoryEntry = {
  type: 'move' | 'resize' | 'create' | 'delete' | 'multi';
  elements: HTMLElement[];
  beforeState: Map<HTMLElement, LayoutRect>;
  afterState: Map<HTMLElement, LayoutRect>;
  timestamp: number;
};

export interface StorageAdapter {
  load(): Promise<LayoutState | null>;
  save(state: LayoutState): Promise<void>;
  clear(): Promise<void>;
}

export interface NHCanvasConfig {
  defaultSelectors: string[];
  blacklistSelectors: string[];
  gridStep: number;
  snapThreshold: number;
  maxHistorySteps: number;
  autoSave: boolean;
  autoSaveDelay: number;
  enableResponsive: boolean;
  safePadding: number;
}

export interface NHCanvasEvents {
  enable: () => void;
  disable: () => void;
  change: (entries: LayoutEntry[]) => void;
  select: (elements: HTMLElement[]) => void;
  apply: (element: HTMLElement, rect: LayoutRect) => void;
}

export type EventName = keyof NHCanvasEvents;
export type EventHandler<T extends EventName> = NHCanvasEvents[T];

export interface Point {
  x: number;
  y: number;
}

export interface Rect {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface Transform {
  translateX: number;
  translateY: number;
  scaleX: number;
  scaleY: number;
  rotate: number;
}

export interface ElementInfo {
  element: HTMLElement;
  selector: ElementSelector;
  originalRect: DOMRect;
  currentRect: LayoutRect;
  wrapper: HTMLElement | null;
  isEligible: boolean;
  isLocked: boolean;
  isHidden: boolean;
}

export interface BreakpointConfig {
  xs: number; // < 768
  sm: number; // 768-991
  md: number; // 992-1199
  lg: number; // >= 1200
}