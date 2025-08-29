export interface Position {
  x: number;
  y: number;
}

export interface Size {
  width: number;
  height: number;
}

export interface BuilderComponent {
  id: string;
  type: string;
  position: Position;
  size: Size;
  style: Record<string, any>;
  content?: string;
  children?: BuilderComponent[];
  props?: Record<string, any>;
}

export interface BuilderState {
  components: BuilderComponent[];
  selectedComponentId: string | null;
  canvasSize: Size;
  viewMode: 'desktop' | 'tablet' | 'mobile';
  gridEnabled: boolean;
  snapEnabled: boolean;
  history: BuilderState[];
  historyIndex: number;
}

export interface BuilderActions {
  addComponent: (type: string, position: Position) => void;
  updateComponent: (id: string, updates: Partial<BuilderComponent>) => void;
  selectComponent: (id: string | null) => void;
  deleteComponent: (id: string) => void;
  undo: () => void;
  redo: () => void;
  exportCode: () => void;
  setState: React.Dispatch<React.SetStateAction<BuilderState>>;
}

export interface BuilderContextType {
  state: BuilderState;
  actions: BuilderActions;
}

export interface ComponentDefinition {
  type: string;
  name: string;
  icon: string;
  category: string;
  defaultProps: Partial<BuilderComponent>;
  properties: PropertyDefinition[];
}

export interface PropertyDefinition {
  name: string;
  label: string;
  type: 'text' | 'number' | 'color' | 'select' | 'boolean' | 'range';
  options?: { value: string; label: string; }[];
  min?: number;
  max?: number;
  step?: number;
  defaultValue?: any;
}