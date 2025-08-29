// Simple drag and drop implementation without external dependencies
import React, { useState, useRef, useCallback } from 'react';

export interface DragItem {
  type: string;
  data?: any;
}

export interface DropResult {
  item: DragItem;
  monitor: {
    getClientOffset(): { x: number; y: number } | null;
  };
}

interface DragProviderProps {
  children: React.ReactNode;
}

interface DragState {
  isDragging: boolean;
  dragItem: DragItem | null;
  dragOffset: { x: number; y: number } | null;
}

// Simple context for drag and drop
const DragContext = React.createContext<{
  dragState: DragState;
  startDrag: (item: DragItem, offset: { x: number; y: number }) => void;
  endDrag: () => void;
  setDragOffset: (offset: { x: number; y: number } | null) => void;
} | null>(null);

export const SimpleDragProvider: React.FC<DragProviderProps> = ({ children }) => {
  const [dragState, setDragState] = useState<DragState>({
    isDragging: false,
    dragItem: null,
    dragOffset: null
  });

  const startDrag = useCallback((item: DragItem, offset: { x: number; y: number }) => {
    setDragState({
      isDragging: true,
      dragItem: item,
      dragOffset: offset
    });
  }, []);

  const endDrag = useCallback(() => {
    setDragState({
      isDragging: false,
      dragItem: null,
      dragOffset: null
    });
  }, []);

  const setDragOffset = useCallback((offset: { x: number; y: number } | null) => {
    setDragState(prev => ({ ...prev, dragOffset: offset }));
  }, []);

  return (
    <DragContext.Provider value={{ dragState, startDrag, endDrag, setDragOffset }}>
      {children}
    </DragContext.Provider>
  );
};

export const useDrag = (config: {
  type: string;
  item?: any;
  collect?: (monitor: { isDragging: boolean }) => any;
}) => {
  const context = React.useContext(DragContext);
  const elementRef = useRef<HTMLElement>(null);

  if (!context) {
    throw new Error('useDrag must be used within a SimpleDragProvider');
  }

  const { dragState, startDrag, endDrag } = context;
  const isDragging = dragState.isDragging && dragState.dragItem?.type === config.type;

  const connectDrag = useCallback((element: HTMLElement | null) => {
    if (!element) return;
    elementRef.current = element;

    const handleMouseDown = (e: MouseEvent) => {
      e.preventDefault();
      const rect = element.getBoundingClientRect();
      startDrag(
        { type: config.type, data: config.item },
        { x: e.clientX - rect.left, y: e.clientY - rect.top }
      );

      const handleMouseUp = () => {
        endDrag();
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };

      const handleMouseMove = () => {
        // Mouse move handled by the drop zone
      };

      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    };

    element.addEventListener('mousedown', handleMouseDown);
    return () => element.removeEventListener('mousedown', handleMouseDown);
  }, [config.type, config.item, startDrag, endDrag]);

  const collected = config.collect ? config.collect({ isDragging }) : { isDragging };
  
  return [collected, connectDrag] as const;
};

export const useDrop = (config: {
  accept: string;
  drop?: (item: any, monitor: any) => void;
  collect?: (monitor: { isOver: boolean }) => any;
}) => {
  const context = React.useContext(DragContext);
  const elementRef = useRef<HTMLElement>(null);
  const [isOver, setIsOver] = useState(false);

  if (!context) {
    throw new Error('useDrop must be used within a SimpleDragProvider');
  }

  const { dragState, endDrag } = context;

  const connectDrop = useCallback((element: HTMLElement | null) => {
    if (!element) return;
    elementRef.current = element;

    const handleMouseEnter = () => {
      if (dragState.isDragging && dragState.dragItem?.type === config.accept) {
        setIsOver(true);
      }
    };

    const handleMouseLeave = () => {
      setIsOver(false);
    };

    const handleMouseUp = (e: MouseEvent) => {
      if (dragState.isDragging && dragState.dragItem?.type === config.accept && isOver) {
        const rect = element.getBoundingClientRect();
        const clientOffset = { x: e.clientX, y: e.clientY };
        
        config.drop?.(dragState.dragItem.data, {
          getClientOffset: () => clientOffset
        });
        
        endDrag();
        setIsOver(false);
      }
    };

    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);
    element.addEventListener('mouseup', handleMouseUp);

    return () => {
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
      element.removeEventListener('mouseup', handleMouseUp);
    };
  }, [config.accept, config.drop, dragState, isOver, endDrag]);

  const collected = config.collect ? config.collect({ isOver }) : { isOver };
  
  return [collected, connectDrop] as const;
};