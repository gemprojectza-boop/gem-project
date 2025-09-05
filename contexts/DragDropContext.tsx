import React, { createContext, useContext, useState, useCallback, useRef } from 'react';
import { 
  DndContext, 
  DragOverlay, 
  DragStartEvent, 
  DragEndEvent,
  DragOverEvent,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  Active,
  Over
} from '@dnd-kit/core';
import { arrayMove, sortableKeyboardCoordinates } from '@dnd-kit/sortable';

export interface DragDropItem {
  id: string;
  type: 'section' | 'component' | 'text' | 'image';
  content: any;
  position?: { x: number; y: number };
  parentId?: string;
}

export interface DragDropState {
  items: Record<string, DragDropItem>;
  layout: string[]; // Order of top-level items
  activeId: string | null;
  isEditMode: boolean;
}

interface DragDropContextValue {
  state: DragDropState;
  actions: {
    addItem: (item: DragDropItem) => void;
    updateItem: (id: string, updates: Partial<DragDropItem>) => void;
    removeItem: (id: string) => void;
    moveItem: (fromIndex: number, toIndex: number) => void;
    setEditMode: (enabled: boolean) => void;
    updateLayout: (newLayout: string[]) => void;
    saveChangesToCode: () => void;
  };
  dragOverlay: React.ReactNode;
}

const DragDropContextValue = createContext<DragDropContextValue | null>(null);

export const useDragDrop = () => {
  const context = useContext(DragDropContextValue);
  if (!context) {
    throw new Error('useDragDrop must be used within DragDropProvider');
  }
  return context;
};

interface DragDropProviderProps {
  children: React.ReactNode;
  initialItems?: Record<string, DragDropItem>;
  initialLayout?: string[];
  onLayoutChange?: (layout: string[]) => void;
  onItemUpdate?: (id: string, updates: Partial<DragDropItem>) => void;
}

export const DragDropProvider: React.FC<DragDropProviderProps> = ({
  children,
  initialItems = {},
  initialLayout = [],
  onLayoutChange,
  onItemUpdate,
}) => {
  const [state, setState] = useState<DragDropState>({
    items: initialItems,
    layout: initialLayout,
    activeId: null,
    isEditMode: false,
  });

  const [dragOverlay, setDragOverlay] = useState<React.ReactNode>(null);
  const codeChangesRef = useRef<Array<{ type: string; data: any }>>([]);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const addItem = useCallback((item: DragDropItem) => {
    setState(prev => ({
      ...prev,
      items: { ...prev.items, [item.id]: item },
      layout: item.parentId ? prev.layout : [...prev.layout, item.id],
    }));

    // Track for code generation
    codeChangesRef.current.push({
      type: 'ADD_ITEM',
      data: { item }
    });
  }, []);

  const updateItem = useCallback((id: string, updates: Partial<DragDropItem>) => {
    setState(prev => ({
      ...prev,
      items: {
        ...prev.items,
        [id]: { ...prev.items[id], ...updates }
      }
    }));

    // Track for code generation
    codeChangesRef.current.push({
      type: 'UPDATE_ITEM',
      data: { id, updates }
    });

    onItemUpdate?.(id, updates);
  }, [onItemUpdate]);

  const removeItem = useCallback((id: string) => {
    setState(prev => {
      const newItems = { ...prev.items };
      delete newItems[id];
      
      return {
        ...prev,
        items: newItems,
        layout: prev.layout.filter(itemId => itemId !== id),
      };
    });

    // Track for code generation
    codeChangesRef.current.push({
      type: 'REMOVE_ITEM',
      data: { id }
    });
  }, []);

  const moveItem = useCallback((fromIndex: number, toIndex: number) => {
    setState(prev => {
      const newLayout = arrayMove(prev.layout, fromIndex, toIndex);
      onLayoutChange?.(newLayout);
      
      // Track for code generation
      codeChangesRef.current.push({
        type: 'MOVE_ITEM',
        data: { fromIndex, toIndex, newLayout }
      });

      return {
        ...prev,
        layout: newLayout,
      };
    });
  }, [onLayoutChange]);

  const updateLayout = useCallback((newLayout: string[]) => {
    setState(prev => ({ ...prev, layout: newLayout }));
    onLayoutChange?.(newLayout);

    // Track for code generation
    codeChangesRef.current.push({
      type: 'UPDATE_LAYOUT',
      data: { newLayout }
    });
  }, [onLayoutChange]);

  const setEditMode = useCallback((enabled: boolean) => {
    setState(prev => ({ ...prev, isEditMode: enabled }));
  }, []);

  const saveChangesToCode = useCallback(() => {
    if (codeChangesRef.current.length === 0) {
      console.log('No changes to save');
      return;
    }

    // Generate code updates based on tracked changes
    const changes = codeChangesRef.current;
    let codeUpdate = '// Auto-generated layout updates\n';
    
    // Generate layout array
    if (changes.some(c => c.type.includes('LAYOUT') || c.type.includes('MOVE'))) {
      codeUpdate += `const updatedLayout = ${JSON.stringify(state.layout, null, 2)};\n\n`;
    }

    // Generate item updates
    const itemUpdates = changes.filter(c => c.type === 'UPDATE_ITEM');
    if (itemUpdates.length > 0) {
      codeUpdate += '// Component updates:\n';
      itemUpdates.forEach(update => {
        codeUpdate += `// Update item ${update.data.id}: ${JSON.stringify(update.data.updates, null, 2)}\n`;
      });
    }

    // Generate position updates for CSS
    const positionUpdates = Object.entries(state.items)
      .filter(([_, item]) => item.position)
      .map(([id, item]) => ({
        id,
        position: item.position,
        type: item.type
      }));

    if (positionUpdates.length > 0) {
      codeUpdate += '\n// CSS Position updates:\n';
      positionUpdates.forEach(({ id, position }) => {
        codeUpdate += `.draggable-${id} {\n`;
        codeUpdate += `  position: absolute;\n`;
        codeUpdate += `  left: ${position!.x}px;\n`;
        codeUpdate += `  top: ${position!.y}px;\n`;
        codeUpdate += `}\n\n`;
      });
    }

    console.log('🔄 Generated Code Updates:');
    console.log(codeUpdate);
    
    // In a real app, this would save to files or send to API
    alert('Layout changes saved! Check the browser console for generated code updates.');
    
    // Clear tracked changes
    codeChangesRef.current = [];
  }, [state.layout, state.items]);

  const handleDragStart = useCallback((event: DragStartEvent) => {
    setState(prev => ({ ...prev, activeId: event.active.id as string }));
    
    const activeItem = state.items[event.active.id as string];
    if (activeItem) {
      setDragOverlay(
        <div className="bg-white shadow-lg border-2 border-blue-500 rounded-lg p-4 opacity-90">
          {activeItem.type} - {activeItem.id}
        </div>
      );
    }
  }, [state.items]);

  const handleDragEnd = useCallback((event: DragEndEvent) => {
    const { active, over } = event;
    
    setState(prev => ({ ...prev, activeId: null }));
    setDragOverlay(null);

    if (!over || active.id === over.id) return;

    const oldIndex = state.layout.indexOf(active.id as string);
    const newIndex = state.layout.indexOf(over.id as string);

    if (oldIndex !== -1 && newIndex !== -1) {
      moveItem(oldIndex, newIndex);
    }
  }, [state.layout, moveItem]);

  const handleDragOver = useCallback((event: DragOverEvent) => {
    // Handle drop zone detection and visual feedback
    const { active, over } = event;
    
    if (!over) return;
    
    // Update visual feedback for drop zones
    const dropZones = document.querySelectorAll('[data-drop-zone]');
    dropZones.forEach(zone => {
      zone.classList.remove('drag-over');
    });
    
    const overElement = document.querySelector(`[data-drop-zone="${over.id}"]`);
    if (overElement) {
      overElement.classList.add('drag-over');
    }
  }, []);

  const contextValue: DragDropContextValue = {
    state,
    actions: {
      addItem,
      updateItem,
      removeItem,
      moveItem,
      setEditMode,
      updateLayout,
      saveChangesToCode,
    },
    dragOverlay,
  };

  return (
    <DragDropContextValue.Provider value={contextValue}>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        onDragOver={handleDragOver}
      >
        {children}
        <DragOverlay>{dragOverlay}</DragOverlay>
      </DndContext>
    </DragDropContextValue.Provider>
  );
};