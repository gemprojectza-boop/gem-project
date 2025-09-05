/**
 * NH Canvas - Interaction Engine
 * Handles dragging, resizing, and keyboard interactions
 */

import type { 
  DragState, 
  ResizeState, 
  SelectionState, 
  Point, 
  LayoutRect, 
  ResizeHandle,
  ElementInfo
} from './types.js';
import { Utils } from './utils.js';
import { ElementManager } from './element-manager.js';

export class InteractionEngine {
  private elementManager: ElementManager;
  private dragState: DragState;
  private resizeState: ResizeState;
  private selectionState: SelectionState;
  private ghostElement: HTMLElement | null = null;
  private resizeHandles: HTMLElement[] = [];
  
  // Event listeners cleanup
  private eventCleanupFunctions: (() => void)[] = [];

  constructor(elementManager: ElementManager) {
    this.elementManager = elementManager;
    
    this.dragState = {
      isDragging: false,
      startPos: { x: 0, y: 0 },
      currentPos: { x: 0, y: 0 },
      element: null,
      offset: { x: 0, y: 0 }
    };
    
    this.resizeState = {
      isResizing: false,
      handle: null,
      startRect: null,
      element: null
    };
    
    this.selectionState = {
      selectedElements: new Set(),
      isMarqueeSelecting: false,
      marqueeStart: null,
      marqueeEnd: null
    };
  }

  enable(): void {
    this.addEventListeners();
    this.createResizeHandles();
  }

  disable(): void {
    this.removeEventListeners();
    this.removeResizeHandles();
    this.clearSelection();
    this.cancelDrag();
    this.cancelResize();
  }

  private addEventListeners(): void {
    const mousedownHandler = (e: MouseEvent) => this.handlePointerStart(e);
    const mouseupHandler = (e: MouseEvent) => this.handlePointerEnd(e);
    const mousemoveHandler = (e: MouseEvent) => this.handlePointerMove(e);
    const keydownHandler = (e: KeyboardEvent) => this.handleKeyDown(e);
    const keyupHandler = (e: KeyboardEvent) => this.handleKeyUp(e);
    
    // Touch events
    const touchstartHandler = (e: TouchEvent) => this.handlePointerStart(e);
    const touchendHandler = (e: TouchEvent) => this.handlePointerEnd(e);
    const touchmoveHandler = (e: TouchEvent) => this.handlePointerMove(e);
    
    document.addEventListener('mousedown', mousedownHandler, { passive: false });
    document.addEventListener('mouseup', mouseupHandler, { passive: false });
    document.addEventListener('mousemove', mousemoveHandler, { passive: false });
    document.addEventListener('keydown', keydownHandler, { passive: false });
    document.addEventListener('keyup', keyupHandler, { passive: false });
    
    document.addEventListener('touchstart', touchstartHandler, { passive: false });
    document.addEventListener('touchend', touchendHandler, { passive: false });
    document.addEventListener('touchmove', touchmoveHandler, { passive: false });
    
    // Store cleanup functions
    this.eventCleanupFunctions = [
      () => document.removeEventListener('mousedown', mousedownHandler),
      () => document.removeEventListener('mouseup', mouseupHandler),
      () => document.removeEventListener('mousemove', mousemoveHandler),
      () => document.removeEventListener('keydown', keydownHandler),
      () => document.removeEventListener('keyup', keyupHandler),
      () => document.removeEventListener('touchstart', touchstartHandler),
      () => document.removeEventListener('touchend', touchendHandler),
      () => document.removeEventListener('touchmove', touchmoveHandler)
    ];
  }

  private removeEventListeners(): void {
    this.eventCleanupFunctions.forEach(cleanup => cleanup());
    this.eventCleanupFunctions = [];
  }

  private handlePointerStart(event: MouseEvent | TouchEvent): void {
    const coords = Utils.getEventCoordinates(event);
    const target = event.target as HTMLElement;
    
    // Check if clicking on a resize handle
    const resizeHandle = target.closest('.nh-resize-handle') as HTMLElement;
    if (resizeHandle) {
      this.startResize(resizeHandle, coords);
      Utils.preventDefault(event);
      return;
    }
    
    // Check if clicking on an eligible element
    const eligibleElement = Utils.getClosestEligibleElement(
      target, 
      this.elementManager.getAllElementInfo().map(info => 
        info.selector.strategy === 'dataId' 
          ? `[data-nh-id="${info.selector.value}"]`
          : info.selector.value
      )
    );
    
    if (eligibleElement && this.elementManager.isEligible(eligibleElement)) {
      const info = this.elementManager.getElementInfo(eligibleElement);
      if (info && !info.isLocked) {
        // Handle selection
        if (event.shiftKey || event.ctrlKey || event.metaKey) {
          this.toggleSelection(eligibleElement);
        } else if (!this.selectionState.selectedElements.has(eligibleElement)) {
          this.setSelection([eligibleElement]);
        }
        
        // Start drag if element is selected
        if (this.selectionState.selectedElements.has(eligibleElement)) {
          this.startDrag(eligibleElement, coords);
        }
        
        Utils.preventDefault(event);
        return;
      }
    }
    
    // Start marquee selection if clicking on empty space
    this.startMarqueeSelection(coords);
  }

  private handlePointerMove(event: MouseEvent | TouchEvent): void {
    const coords = Utils.getEventCoordinates(event);
    
    if (this.dragState.isDragging) {
      this.updateDrag(coords);
      Utils.preventDefault(event);
    } else if (this.resizeState.isResizing) {
      this.updateResize(coords);
      Utils.preventDefault(event);
    } else if (this.selectionState.isMarqueeSelecting) {
      this.updateMarqueeSelection(coords);
      Utils.preventDefault(event);
    }
  }

  private handlePointerEnd(event: MouseEvent | TouchEvent): void {
    if (this.dragState.isDragging) {
      this.endDrag();
    } else if (this.resizeState.isResizing) {
      this.endResize();
    } else if (this.selectionState.isMarqueeSelecting) {
      this.endMarqueeSelection();
    }
  }

  private startDrag(element: HTMLElement, startPos: Point): void {
    const elementRect = Utils.getElementRect(element);
    
    this.dragState = {
      isDragging: true,
      startPos,
      currentPos: startPos,
      element,
      offset: {
        x: startPos.x - elementRect.x,
        y: startPos.y - elementRect.y
      }
    };
    
    this.createGhostElement(element);
    document.body.classList.add('nh-dragging');
  }

  private updateDrag(currentPos: Point): void {
    if (!this.dragState.isDragging || !this.dragState.element) return;
    
    this.dragState.currentPos = currentPos;
    
    const newX = currentPos.x - this.dragState.offset.x;
    const newY = currentPos.y - this.dragState.offset.y;
    
    // Update ghost element position
    if (this.ghostElement) {
      this.ghostElement.style.transform = `translate3d(${newX}px, ${newY}px, 0)`;
    }
    
    // Dispatch drag event for snapping/guides
    this.dispatchDragUpdate(newX, newY);
  }

  private endDrag(): void {
    if (!this.dragState.isDragging || !this.dragState.element) return;
    
    const element = this.dragState.element;
    const newX = this.dragState.currentPos.x - this.dragState.offset.x;
    const newY = this.dragState.currentPos.y - this.dragState.offset.y;
    
    // Apply final position to all selected elements
    const selectedElements = Array.from(this.selectionState.selectedElements);
    if (selectedElements.length > 1) {
      // Multi-element drag - maintain relative positions
      const draggedElementInfo = this.elementManager.getElementInfo(element);
      if (draggedElementInfo) {
        const deltaX = newX - draggedElementInfo.currentRect.x;
        const deltaY = newY - draggedElementInfo.currentRect.y;
        
        for (const selectedElement of selectedElements) {
          const info = this.elementManager.getElementInfo(selectedElement);
          if (info) {
            const newRect = {
              ...info.currentRect,
              x: info.currentRect.x + deltaX,
              y: info.currentRect.y + deltaY
            };
            this.elementManager.updateElementRect(selectedElement, newRect);
          }
        }
      }
    } else {
      // Single element drag
      const info = this.elementManager.getElementInfo(element);
      if (info) {
        const newRect = {
          ...info.currentRect,
          x: newX,
          y: newY
        };
        this.elementManager.updateElementRect(element, newRect);
      }
    }
    
    this.cancelDrag();
    this.updateResizeHandles();
    this.dispatchChangeEvent();
  }

  private cancelDrag(): void {
    this.dragState = {
      isDragging: false,
      startPos: { x: 0, y: 0 },
      currentPos: { x: 0, y: 0 },
      element: null,
      offset: { x: 0, y: 0 }
    };
    
    this.removeGhostElement();
    document.body.classList.remove('nh-dragging');
  }

  private startResize(handleElement: HTMLElement, startPos: Point): void {
    const handle = handleElement.dataset.handle as ResizeHandle;
    const element = this.getElementFromResizeHandle(handleElement);
    
    if (!element) return;
    
    this.resizeState = {
      isResizing: true,
      handle,
      startRect: element.getBoundingClientRect(),
      element
    };
    
    document.body.classList.add('nh-resizing');
  }

  private updateResize(currentPos: Point): void {
    if (!this.resizeState.isResizing || !this.resizeState.element || !this.resizeState.startRect) {
      return;
    }
    
    const { handle, element, startRect } = this.resizeState;
    const info = this.elementManager.getElementInfo(element);
    
    if (!info) return;
    
    const deltaX = currentPos.x - this.dragState.startPos.x;
    const deltaY = currentPos.y - this.dragState.startPos.y;
    
    let newRect = { ...info.currentRect };
    
    // Calculate new dimensions based on handle
    switch (handle) {
      case 'nw':
        newRect.x = startRect.left + deltaX;
        newRect.y = startRect.top + deltaY;
        newRect.width = startRect.width - deltaX;
        newRect.height = startRect.height - deltaY;
        break;
      case 'n':
        newRect.y = startRect.top + deltaY;
        newRect.height = startRect.height - deltaY;
        break;
      case 'ne':
        newRect.y = startRect.top + deltaY;
        newRect.width = startRect.width + deltaX;
        newRect.height = startRect.height - deltaY;
        break;
      case 'w':
        newRect.x = startRect.left + deltaX;
        newRect.width = startRect.width - deltaX;
        break;
      case 'e':
        newRect.width = startRect.width + deltaX;
        break;
      case 'sw':
        newRect.x = startRect.left + deltaX;
        newRect.width = startRect.width - deltaX;
        newRect.height = startRect.height + deltaY;
        break;
      case 's':
        newRect.height = startRect.height + deltaY;
        break;
      case 'se':
        newRect.width = startRect.width + deltaX;
        newRect.height = startRect.height + deltaY;
        break;
    }
    
    // Enforce minimum dimensions
    newRect.width = Math.max(20, newRect.width);
    newRect.height = Math.max(20, newRect.height);
    
    this.elementManager.updateElementRect(element, newRect);
    this.updateResizeHandles();
  }

  private endResize(): void {
    this.cancelResize();
    this.dispatchChangeEvent();
  }

  private cancelResize(): void {
    this.resizeState = {
      isResizing: false,
      handle: null,
      startRect: null,
      element: null
    };
    
    document.body.classList.remove('nh-resizing');
  }

  private startMarqueeSelection(startPos: Point): void {
    this.selectionState.isMarqueeSelecting = true;
    this.selectionState.marqueeStart = startPos;
    this.selectionState.marqueeEnd = startPos;
    
    this.createMarqueeElement();
  }

  private updateMarqueeSelection(currentPos: Point): void {
    if (!this.selectionState.isMarqueeSelecting || !this.selectionState.marqueeStart) {
      return;
    }
    
    this.selectionState.marqueeEnd = currentPos;
    this.updateMarqueeElement();
    
    // Find elements within marquee
    const rect = this.getMarqueeRect();
    const elementsInMarquee = this.elementManager.getElementsInRect(rect);
    
    // Update selection preview (could dispatch event for visual feedback)
    this.dispatchMarqueeUpdate(elementsInMarquee);
  }

  private endMarqueeSelection(): void {
    if (!this.selectionState.isMarqueeSelecting) return;
    
    const rect = this.getMarqueeRect();
    const elementsInMarquee = this.elementManager.getElementsInRect(rect);
    
    this.setSelection(elementsInMarquee);
    
    this.selectionState.isMarqueeSelecting = false;
    this.selectionState.marqueeStart = null;
    this.selectionState.marqueeEnd = null;
    
    this.removeMarqueeElement();
  }

  private handleKeyDown(event: KeyboardEvent): void {
    // Handle keyboard shortcuts
    const { ctrlKey, metaKey, shiftKey, key } = event;
    const modifierKey = ctrlKey || metaKey;
    
    switch (key) {
      case 'ArrowUp':
      case 'ArrowDown':
      case 'ArrowLeft':
      case 'ArrowRight':
        if (this.selectionState.selectedElements.size > 0) {
          this.nudgeSelection(key, shiftKey ? 10 : 1);
          Utils.preventDefault(event);
        }
        break;
        
      case 'd':
      case 'D':
        if (modifierKey && this.selectionState.selectedElements.size > 0) {
          this.duplicateSelection();
          Utils.preventDefault(event);
        }
        break;
        
      case 'a':
      case 'A':
        if (modifierKey) {
          this.selectAll();
          Utils.preventDefault(event);
        }
        break;
        
      case 'Escape':
        this.clearSelection();
        Utils.preventDefault(event);
        break;
        
      case 'Delete':
      case 'Backspace':
        if (this.selectionState.selectedElements.size > 0) {
          this.deleteSelection();
          Utils.preventDefault(event);
        }
        break;
    }
  }

  private handleKeyUp(event: KeyboardEvent): void {
    // Handle key up events if needed
  }

  // Selection methods
  setSelection(elements: HTMLElement[]): void {
    this.clearSelection();
    elements.forEach(element => {
      if (this.elementManager.isEligible(element)) {
        this.selectionState.selectedElements.add(element);
        this.addSelectionVisual(element);
      }
    });
    this.updateResizeHandles();
    this.dispatchSelectionEvent();
  }

  addToSelection(elements: HTMLElement[]): void {
    elements.forEach(element => {
      if (this.elementManager.isEligible(element) && 
          !this.selectionState.selectedElements.has(element)) {
        this.selectionState.selectedElements.add(element);
        this.addSelectionVisual(element);
      }
    });
    this.updateResizeHandles();
    this.dispatchSelectionEvent();
  }

  removeFromSelection(elements: HTMLElement[]): void {
    elements.forEach(element => {
      if (this.selectionState.selectedElements.has(element)) {
        this.selectionState.selectedElements.delete(element);
        this.removeSelectionVisual(element);
      }
    });
    this.updateResizeHandles();
    this.dispatchSelectionEvent();
  }

  toggleSelection(element: HTMLElement): void {
    if (this.selectionState.selectedElements.has(element)) {
      this.removeFromSelection([element]);
    } else {
      this.addToSelection([element]);
    }
  }

  clearSelection(): void {
    this.selectionState.selectedElements.forEach(element => {
      this.removeSelectionVisual(element);
    });
    this.selectionState.selectedElements.clear();
    this.updateResizeHandles();
    this.dispatchSelectionEvent();
  }

  selectAll(): void {
    const allElements = this.elementManager.getAllElementInfo()
      .filter(info => !info.isLocked)
      .map(info => info.element);
    this.setSelection(allElements);
  }

  getSelectedElements(): HTMLElement[] {
    return Array.from(this.selectionState.selectedElements);
  }

  // Helper methods for visual feedback
  private createGhostElement(element: HTMLElement): void {
    this.removeGhostElement();
    
    this.ghostElement = element.cloneNode(true) as HTMLElement;
    this.ghostElement.classList.add('nh-ghost-element');
    this.ghostElement.style.cssText = `
      position: fixed;
      opacity: 0.5;
      pointer-events: none;
      z-index: 10000;
      border: 2px dashed #007acc;
    `;
    
    document.body.appendChild(this.ghostElement);
  }

  private removeGhostElement(): void {
    if (this.ghostElement) {
      this.ghostElement.remove();
      this.ghostElement = null;
    }
  }

  private createResizeHandles(): void {
    const handles: ResizeHandle[] = ['nw', 'n', 'ne', 'w', 'e', 'sw', 's', 'se'];
    
    handles.forEach(handle => {
      const handleElement = document.createElement('div');
      handleElement.className = `nh-resize-handle nh-resize-${handle}`;
      handleElement.dataset.handle = handle;
      handleElement.style.cssText = `
        position: absolute;
        width: 8px;
        height: 8px;
        background: #007acc;
        border: 1px solid white;
        cursor: ${this.getCursorForHandle(handle)};
        z-index: 10001;
        display: none;
      `;
      
      document.body.appendChild(handleElement);
      this.resizeHandles.push(handleElement);
    });
  }

  private removeResizeHandles(): void {
    this.resizeHandles.forEach(handle => handle.remove());
    this.resizeHandles = [];
  }

  private updateResizeHandles(): void {
    if (this.selectionState.selectedElements.size !== 1) {
      this.hideResizeHandles();
      return;
    }
    
    const element = Array.from(this.selectionState.selectedElements)[0];
    const rect = Utils.getElementRect(element);
    
    const positions = {
      nw: { x: rect.x - 4, y: rect.y - 4 },
      n: { x: rect.x + rect.width / 2 - 4, y: rect.y - 4 },
      ne: { x: rect.x + rect.width - 4, y: rect.y - 4 },
      w: { x: rect.x - 4, y: rect.y + rect.height / 2 - 4 },
      e: { x: rect.x + rect.width - 4, y: rect.y + rect.height / 2 - 4 },
      sw: { x: rect.x - 4, y: rect.y + rect.height - 4 },
      s: { x: rect.x + rect.width / 2 - 4, y: rect.y + rect.height - 4 },
      se: { x: rect.x + rect.width - 4, y: rect.y + rect.height - 4 }
    };
    
    this.resizeHandles.forEach(handle => {
      const handleType = handle.dataset.handle as ResizeHandle;
      const pos = positions[handleType];
      
      handle.style.left = `${pos.x}px`;
      handle.style.top = `${pos.y}px`;
      handle.style.display = 'block';
    });
  }

  private hideResizeHandles(): void {
    this.resizeHandles.forEach(handle => {
      handle.style.display = 'none';
    });
  }

  private getCursorForHandle(handle: ResizeHandle): string {
    const cursors = {
      nw: 'nw-resize',
      n: 'n-resize',
      ne: 'ne-resize',
      w: 'w-resize',
      e: 'e-resize',
      sw: 'sw-resize',
      s: 's-resize',
      se: 'se-resize'
    };
    return cursors[handle];
  }

  private getElementFromResizeHandle(handleElement: HTMLElement): HTMLElement | null {
    // In a real implementation, you'd need to associate handles with elements
    return Array.from(this.selectionState.selectedElements)[0] || null;
  }

  private addSelectionVisual(element: HTMLElement): void {
    element.classList.add('nh-selected');
  }

  private removeSelectionVisual(element: HTMLElement): void {
    element.classList.remove('nh-selected');
  }

  private createMarqueeElement(): void {
    this.removeMarqueeElement();
    
    const marquee = document.createElement('div');
    marquee.className = 'nh-marquee';
    marquee.style.cssText = `
      position: fixed;
      border: 1px dashed #007acc;
      background: rgba(0, 122, 204, 0.1);
      pointer-events: none;
      z-index: 9999;
    `;
    
    document.body.appendChild(marquee);
  }

  private updateMarqueeElement(): void {
    const marquee = document.querySelector('.nh-marquee') as HTMLElement;
    if (!marquee || !this.selectionState.marqueeStart || !this.selectionState.marqueeEnd) {
      return;
    }
    
    const rect = this.getMarqueeRect();
    marquee.style.left = `${rect.x}px`;
    marquee.style.top = `${rect.y}px`;
    marquee.style.width = `${rect.width}px`;
    marquee.style.height = `${rect.height}px`;
  }

  private removeMarqueeElement(): void {
    const marquee = document.querySelector('.nh-marquee');
    if (marquee) {
      marquee.remove();
    }
  }

  private getMarqueeRect(): { x: number; y: number; width: number; height: number } {
    if (!this.selectionState.marqueeStart || !this.selectionState.marqueeEnd) {
      return { x: 0, y: 0, width: 0, height: 0 };
    }
    
    const { marqueeStart, marqueeEnd } = this.selectionState;
    
    return {
      x: Math.min(marqueeStart.x, marqueeEnd.x),
      y: Math.min(marqueeStart.y, marqueeEnd.y),
      width: Math.abs(marqueeEnd.x - marqueeStart.x),
      height: Math.abs(marqueeEnd.y - marqueeStart.y)
    };
  }

  private nudgeSelection(direction: string, distance: number): void {
    const selectedElements = Array.from(this.selectionState.selectedElements);
    
    selectedElements.forEach(element => {
      const info = this.elementManager.getElementInfo(element);
      if (info && !info.isLocked) {
        const newRect = { ...info.currentRect };
        
        switch (direction) {
          case 'ArrowUp':
            newRect.y -= distance;
            break;
          case 'ArrowDown':
            newRect.y += distance;
            break;
          case 'ArrowLeft':
            newRect.x -= distance;
            break;
          case 'ArrowRight':
            newRect.x += distance;
            break;
        }
        
        this.elementManager.updateElementRect(element, newRect);
      }
    });
    
    this.updateResizeHandles();
    this.dispatchChangeEvent();
  }

  private duplicateSelection(): void {
    // This would be implemented to duplicate selected elements
    console.log('Duplicate selection - to be implemented');
  }

  private deleteSelection(): void {
    // This would be implemented to delete selected elements
    console.log('Delete selection - to be implemented');
  }

  // Event dispatching
  private dispatchDragUpdate(x: number, y: number): void {
    window.dispatchEvent(new CustomEvent('nh-canvas:drag-update', {
      detail: { x, y, element: this.dragState.element }
    }));
  }

  private dispatchMarqueeUpdate(elements: HTMLElement[]): void {
    window.dispatchEvent(new CustomEvent('nh-canvas:marquee-update', {
      detail: { elements }
    }));
  }

  private dispatchChangeEvent(): void {
    window.dispatchEvent(new CustomEvent('nh-canvas:change', {
      detail: { selectedElements: Array.from(this.selectionState.selectedElements) }
    }));
  }

  private dispatchSelectionEvent(): void {
    window.dispatchEvent(new CustomEvent('nh-canvas:selection-change', {
      detail: { selectedElements: Array.from(this.selectionState.selectedElements) }
    }));
  }
}