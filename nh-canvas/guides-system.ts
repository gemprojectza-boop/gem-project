/**
 * NH Canvas - Guides and Snapping System
 * Handles rulers, smart guides, grid snapping, and alignment
 */

import type { Guide, Point, LayoutRect, GridConfig, SnapConfig } from './types.js';
import { Utils } from './utils.js';
import { ElementManager } from './element-manager.js';

export class GuidesSystem {
  private elementManager: ElementManager;
  private gridConfig: GridConfig;
  private snapConfig: SnapConfig;
  
  private rulersContainer: HTMLElement | null = null;
  private topRuler: HTMLElement | null = null;
  private leftRuler: HTMLElement | null = null;
  private crosshair: HTMLElement | null = null;
  
  private guidesContainer: HTMLElement | null = null;
  private activeGuides: HTMLElement[] = [];
  
  private gridOverlay: HTMLElement | null = null;
  
  private safePadding = 24;
  private rulerHeight = 20;

  constructor(
    elementManager: ElementManager,
    gridConfig: GridConfig = { enabled: true, step: 8 },
    snapConfig: SnapConfig = { enabled: true, threshold: 6 }
  ) {
    this.elementManager = elementManager;
    this.gridConfig = gridConfig;
    this.snapConfig = snapConfig;
  }

  enable(): void {
    this.createRulers();
    this.createGuidesContainer();
    this.createGridOverlay();
    this.addEventListeners();
    this.updateRulers();
    this.updateGrid();
  }

  disable(): void {
    this.removeRulers();
    this.removeGuidesContainer();
    this.removeGridOverlay();
    this.removeEventListeners();
  }

  private createRulers(): void {
    if (this.rulersContainer) return;

    // Main container
    this.rulersContainer = document.createElement('div');
    this.rulersContainer.className = 'nh-canvas-rulers';
    this.rulersContainer.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 9998;
    `;

    // Top ruler
    this.topRuler = document.createElement('div');
    this.topRuler.className = 'nh-canvas-ruler nh-canvas-ruler-top';
    this.topRuler.style.cssText = `
      position: absolute;
      top: 0;
      left: ${this.rulerHeight}px;
      width: calc(100% - ${this.rulerHeight}px);
      height: ${this.rulerHeight}px;
      background: rgba(0, 0, 0, 0.8);
      color: white;
      font-family: monospace;
      font-size: 10px;
      overflow: hidden;
      border-bottom: 1px solid #333;
    `;

    // Left ruler
    this.leftRuler = document.createElement('div');
    this.leftRuler.className = 'nh-canvas-ruler nh-canvas-ruler-left';
    this.leftRuler.style.cssText = `
      position: absolute;
      top: ${this.rulerHeight}px;
      left: 0;
      width: ${this.rulerHeight}px;
      height: calc(100% - ${this.rulerHeight}px);
      background: rgba(0, 0, 0, 0.8);
      color: white;
      font-family: monospace;
      font-size: 10px;
      overflow: hidden;
      border-right: 1px solid #333;
    `;

    // Corner
    const corner = document.createElement('div');
    corner.className = 'nh-canvas-ruler-corner';
    corner.style.cssText = `
      position: absolute;
      top: 0;
      left: 0;
      width: ${this.rulerHeight}px;
      height: ${this.rulerHeight}px;
      background: rgba(0, 0, 0, 0.9);
      border-bottom: 1px solid #333;
      border-right: 1px solid #333;
    `;

    // Crosshair
    this.crosshair = document.createElement('div');
    this.crosshair.className = 'nh-canvas-crosshair';
    this.crosshair.style.cssText = `
      position: fixed;
      pointer-events: none;
      z-index: 10000;
      display: none;
    `;

    const crosshairVertical = document.createElement('div');
    crosshairVertical.style.cssText = `
      position: absolute;
      width: 1px;
      height: 100vh;
      background: rgba(255, 0, 0, 0.5);
      top: 0;
    `;

    const crosshairHorizontal = document.createElement('div');
    crosshairHorizontal.style.cssText = `
      position: absolute;
      height: 1px;
      width: 100vw;
      background: rgba(255, 0, 0, 0.5);
      left: 0;
    `;

    this.crosshair.appendChild(crosshairVertical);
    this.crosshair.appendChild(crosshairHorizontal);

    this.rulersContainer.appendChild(this.topRuler);
    this.rulersContainer.appendChild(this.leftRuler);
    this.rulersContainer.appendChild(corner);
    this.rulersContainer.appendChild(this.crosshair);

    document.body.appendChild(this.rulersContainer);
  }

  private removeRulers(): void {
    if (this.rulersContainer) {
      this.rulersContainer.remove();
      this.rulersContainer = null;
      this.topRuler = null;
      this.leftRuler = null;
      this.crosshair = null;
    }
  }

  private updateRulers(): void {
    if (!this.topRuler || !this.leftRuler) return;

    this.updateTopRuler();
    this.updateLeftRuler();
  }

  private updateTopRuler(): void {
    if (!this.topRuler) return;

    const scrollX = window.scrollX;
    const viewportWidth = window.innerWidth;
    
    this.topRuler.innerHTML = '';
    
    const step = this.getOptimalRulerStep(viewportWidth);
    const start = Math.floor(scrollX / step) * step;
    const end = scrollX + viewportWidth;
    
    for (let x = start; x <= end; x += step) {
      const tick = document.createElement('div');
      tick.style.cssText = `
        position: absolute;
        left: ${x - scrollX}px;
        top: ${this.rulerHeight - 5}px;
        width: 1px;
        height: 5px;
        background: white;
      `;
      
      if (x % (step * 5) === 0) {
        tick.style.height = '8px';
        tick.style.top = `${this.rulerHeight - 8}px`;
        
        const label = document.createElement('div');
        label.textContent = x.toString();
        label.style.cssText = `
          position: absolute;
          left: ${x - scrollX + 2}px;
          top: 2px;
          line-height: 1;
          white-space: nowrap;
        `;
        this.topRuler.appendChild(label);
      }
      
      this.topRuler.appendChild(tick);
    }
  }

  private updateLeftRuler(): void {
    if (!this.leftRuler) return;

    const scrollY = window.scrollY;
    const viewportHeight = window.innerHeight;
    
    this.leftRuler.innerHTML = '';
    
    const step = this.getOptimalRulerStep(viewportHeight);
    const start = Math.floor(scrollY / step) * step;
    const end = scrollY + viewportHeight;
    
    for (let y = start; y <= end; y += step) {
      const tick = document.createElement('div');
      tick.style.cssText = `
        position: absolute;
        top: ${y - scrollY}px;
        left: ${this.rulerHeight - 5}px;
        height: 1px;
        width: 5px;
        background: white;
      `;
      
      if (y % (step * 5) === 0) {
        tick.style.width = '8px';
        tick.style.left = `${this.rulerHeight - 8}px`;
        
        const label = document.createElement('div');
        label.textContent = y.toString();
        label.style.cssText = `
          position: absolute;
          top: ${y - scrollY + 2}px;
          left: 2px;
          line-height: 1;
          white-space: nowrap;
          writing-mode: vertical-lr;
          text-orientation: mixed;
        `;
        this.leftRuler.appendChild(label);
      }
      
      this.leftRuler.appendChild(tick);
    }
  }

  private getOptimalRulerStep(dimension: number): number {
    const steps = [1, 2, 5, 10, 20, 25, 50, 100, 200, 250, 500, 1000];
    const targetTickCount = dimension / 50; // Aim for ~50px between major ticks
    
    for (const step of steps) {
      if (dimension / step <= targetTickCount) {
        return step;
      }
    }
    
    return steps[steps.length - 1];
  }

  private createGuidesContainer(): void {
    if (this.guidesContainer) return;

    this.guidesContainer = document.createElement('div');
    this.guidesContainer.className = 'nh-canvas-guides';
    this.guidesContainer.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 9999;
    `;

    document.body.appendChild(this.guidesContainer);
  }

  private removeGuidesContainer(): void {
    if (this.guidesContainer) {
      this.guidesContainer.remove();
      this.guidesContainer = null;
    }
    this.clearGuides();
  }

  private createGridOverlay(): void {
    if (this.gridOverlay) return;

    this.gridOverlay = document.createElement('div');
    this.gridOverlay.className = 'nh-canvas-grid';
    this.gridOverlay.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 9997;
      display: none;
    `;

    document.body.appendChild(this.gridOverlay);
  }

  private removeGridOverlay(): void {
    if (this.gridOverlay) {
      this.gridOverlay.remove();
      this.gridOverlay = null;
    }
  }

  private updateGrid(): void {
    if (!this.gridOverlay) return;

    if (this.gridConfig.enabled) {
      this.gridOverlay.style.display = 'block';
      this.gridOverlay.style.backgroundImage = `
        linear-gradient(to right, rgba(0, 122, 204, 0.2) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(0, 122, 204, 0.2) 1px, transparent 1px)
      `;
      this.gridOverlay.style.backgroundSize = `${this.gridConfig.step}px ${this.gridConfig.step}px`;
      this.gridOverlay.style.backgroundPosition = `${-window.scrollX % this.gridConfig.step}px ${-window.scrollY % this.gridConfig.step}px`;
    } else {
      this.gridOverlay.style.display = 'none';
    }
  }

  private addEventListeners(): void {
    const mouseMoveHandler = (e: MouseEvent) => this.updateCrosshair(e);
    const scrollHandler = () => {
      this.updateRulers();
      this.updateGrid();
    };
    const resizeHandler = () => {
      this.updateRulers();
      this.updateGrid();
    };

    const dragUpdateHandler = (e: CustomEvent) => this.updateGuidesForDrag(e.detail);
    const dragEndHandler = () => this.clearGuides();

    document.addEventListener('mousemove', mouseMoveHandler);
    window.addEventListener('scroll', scrollHandler);
    window.addEventListener('resize', resizeHandler);
    
    window.addEventListener('nh-canvas:drag-update', dragUpdateHandler);
    window.addEventListener('nh-canvas:drag-end', dragEndHandler);

    // Store cleanup functions
    this.eventCleanupFunctions = [
      () => document.removeEventListener('mousemove', mouseMoveHandler),
      () => window.removeEventListener('scroll', scrollHandler),
      () => window.removeEventListener('resize', resizeHandler),
      () => window.removeEventListener('nh-canvas:drag-update', dragUpdateHandler),
      () => window.removeEventListener('nh-canvas:drag-end', dragEndHandler)
    ];
  }

  private eventCleanupFunctions: (() => void)[] = [];

  private removeEventListeners(): void {
    this.eventCleanupFunctions.forEach(cleanup => cleanup());
    this.eventCleanupFunctions = [];
  }

  private updateCrosshair(event: MouseEvent): void {
    if (!this.crosshair) return;

    const isDragging = document.body.classList.contains('nh-dragging') ||
                     document.body.classList.contains('nh-resizing');

    if (isDragging) {
      this.crosshair.style.display = 'block';
      this.crosshair.style.left = `${event.clientX}px`;
      this.crosshair.style.top = `${event.clientY}px`;
      
      // Update ruler indicators
      this.updateRulerIndicators(event.clientX, event.clientY);
    } else {
      this.crosshair.style.display = 'none';
    }
  }

  private updateRulerIndicators(x: number, y: number): void {
    if (!this.topRuler || !this.leftRuler) return;

    // Remove existing indicators
    this.topRuler.querySelectorAll('.nh-ruler-indicator').forEach(el => el.remove());
    this.leftRuler.querySelectorAll('.nh-ruler-indicator').forEach(el => el.remove());

    // Add new indicators
    const topIndicator = document.createElement('div');
    topIndicator.className = 'nh-ruler-indicator';
    topIndicator.style.cssText = `
      position: absolute;
      left: ${x}px;
      top: 0;
      width: 1px;
      height: 100%;
      background: red;
    `;
    this.topRuler.appendChild(topIndicator);

    const leftIndicator = document.createElement('div');
    leftIndicator.className = 'nh-ruler-indicator';
    leftIndicator.style.cssText = `
      position: absolute;
      top: ${y}px;
      left: 0;
      height: 1px;
      width: 100%;
      background: red;
    `;
    this.leftRuler.appendChild(leftIndicator);
  }

  private updateGuidesForDrag(dragData: { x: number; y: number; element: HTMLElement }): void {
    if (!this.snapConfig.enabled || !this.guidesContainer) return;

    this.clearGuides();

    const guides = this.calculateGuides(dragData);
    this.displayGuides(guides);

    // Apply snapping
    const snappedPosition = this.applySnapping(dragData, guides);
    if (snappedPosition.x !== dragData.x || snappedPosition.y !== dragData.y) {
      // Update the dragged element position
      window.dispatchEvent(new CustomEvent('nh-canvas:snap-applied', {
        detail: snappedPosition
      }));
    }
  }

  private calculateGuides(dragData: { x: number; y: number; element: HTMLElement }): Guide[] {
    const guides: Guide[] = [];
    const threshold = this.snapConfig.threshold;
    const dragRect = Utils.getElementRect(dragData.element);
    
    // Current drag position
    const dragLeft = dragData.x;
    const dragRight = dragData.x + dragRect.width;
    const dragTop = dragData.y;
    const dragBottom = dragData.y + dragRect.height;
    const dragCenterX = dragData.x + dragRect.width / 2;
    const dragCenterY = dragData.y + dragRect.height / 2;

    // Get all other eligible elements
    const otherElements = this.elementManager.getAllElementInfo()
      .filter(info => info.element !== dragData.element)
      .map(info => info.element);

    // Check against other elements
    for (const element of otherElements) {
      const rect = Utils.getElementRect(element);
      const left = rect.x;
      const right = rect.x + rect.width;
      const top = rect.y;
      const bottom = rect.y + rect.height;
      const centerX = rect.x + rect.width / 2;
      const centerY = rect.y + rect.height / 2;

      // Vertical guides
      if (Math.abs(dragLeft - left) <= threshold) {
        guides.push({ type: 'vertical', position: left, elements: [element], snapType: 'edge' });
      }
      if (Math.abs(dragRight - right) <= threshold) {
        guides.push({ type: 'vertical', position: right, elements: [element], snapType: 'edge' });
      }
      if (Math.abs(dragLeft - right) <= threshold) {
        guides.push({ type: 'vertical', position: right, elements: [element], snapType: 'edge' });
      }
      if (Math.abs(dragRight - left) <= threshold) {
        guides.push({ type: 'vertical', position: left, elements: [element], snapType: 'edge' });
      }
      if (Math.abs(dragCenterX - centerX) <= threshold) {
        guides.push({ type: 'vertical', position: centerX, elements: [element], snapType: 'center' });
      }

      // Horizontal guides
      if (Math.abs(dragTop - top) <= threshold) {
        guides.push({ type: 'horizontal', position: top, elements: [element], snapType: 'edge' });
      }
      if (Math.abs(dragBottom - bottom) <= threshold) {
        guides.push({ type: 'horizontal', position: bottom, elements: [element], snapType: 'edge' });
      }
      if (Math.abs(dragTop - bottom) <= threshold) {
        guides.push({ type: 'horizontal', position: bottom, elements: [element], snapType: 'edge' });
      }
      if (Math.abs(dragBottom - top) <= threshold) {
        guides.push({ type: 'horizontal', position: top, elements: [element], snapType: 'edge' });
      }
      if (Math.abs(dragCenterY - centerY) <= threshold) {
        guides.push({ type: 'horizontal', position: centerY, elements: [element], snapType: 'center' });
      }
    }

    // Check against viewport edges
    const viewport = Utils.getViewportRect();
    const viewportLeft = viewport.x + this.safePadding;
    const viewportRight = viewport.x + viewport.width - this.safePadding;
    const viewportTop = viewport.y + this.safePadding;
    const viewportBottom = viewport.y + viewport.height - this.safePadding;

    if (Math.abs(dragLeft - viewportLeft) <= threshold) {
      guides.push({ type: 'vertical', position: viewportLeft, elements: [], snapType: 'edge' });
    }
    if (Math.abs(dragRight - viewportRight) <= threshold) {
      guides.push({ type: 'vertical', position: viewportRight, elements: [], snapType: 'edge' });
    }
    if (Math.abs(dragTop - viewportTop) <= threshold) {
      guides.push({ type: 'horizontal', position: viewportTop, elements: [], snapType: 'edge' });
    }
    if (Math.abs(dragBottom - viewportBottom) <= threshold) {
      guides.push({ type: 'horizontal', position: viewportBottom, elements: [], snapType: 'edge' });
    }

    // Grid snapping
    if (this.gridConfig.enabled) {
      const gridStep = this.gridConfig.step;
      const snappedLeft = Utils.snapToGrid(dragLeft, gridStep);
      const snappedTop = Utils.snapToGrid(dragTop, gridStep);
      
      if (Math.abs(dragLeft - snappedLeft) <= threshold) {
        guides.push({ type: 'vertical', position: snappedLeft, elements: [], snapType: 'edge' });
      }
      if (Math.abs(dragTop - snappedTop) <= threshold) {
        guides.push({ type: 'horizontal', position: snappedTop, elements: [], snapType: 'edge' });
      }
    }

    return guides;
  }

  private displayGuides(guides: Guide[]): void {
    if (!this.guidesContainer) return;

    for (const guide of guides) {
      const guideElement = document.createElement('div');
      guideElement.className = `nh-guide nh-guide-${guide.type} nh-guide-${guide.snapType}`;
      
      if (guide.type === 'vertical') {
        guideElement.style.cssText = `
          position: absolute;
          left: ${guide.position}px;
          top: 0;
          width: 1px;
          height: 100vh;
          background: ${guide.snapType === 'center' ? '#ff6b35' : '#007acc'};
          z-index: 10000;
        `;
      } else {
        guideElement.style.cssText = `
          position: absolute;
          top: ${guide.position}px;
          left: 0;
          height: 1px;
          width: 100vw;
          background: ${guide.snapType === 'center' ? '#ff6b35' : '#007acc'};
          z-index: 10000;
        `;
      }

      this.guidesContainer.appendChild(guideElement);
      this.activeGuides.push(guideElement);
    }
  }

  private applySnapping(
    dragData: { x: number; y: number; element: HTMLElement }, 
    guides: Guide[]
  ): { x: number; y: number } {
    let snappedX = dragData.x;
    let snappedY = dragData.y;

    const dragRect = Utils.getElementRect(dragData.element);

    // Find the closest vertical guide
    const verticalGuides = guides.filter(g => g.type === 'vertical');
    let closestVerticalDistance = Infinity;
    let closestVerticalGuide: Guide | null = null;

    for (const guide of verticalGuides) {
      const distances = [
        Math.abs(dragData.x - guide.position), // left edge
        Math.abs(dragData.x + dragRect.width - guide.position), // right edge
        Math.abs(dragData.x + dragRect.width / 2 - guide.position) // center
      ];
      
      const minDistance = Math.min(...distances);
      if (minDistance < closestVerticalDistance && minDistance <= this.snapConfig.threshold) {
        closestVerticalDistance = minDistance;
        closestVerticalGuide = guide;
      }
    }

    if (closestVerticalGuide) {
      if (closestVerticalGuide.snapType === 'center') {
        snappedX = closestVerticalGuide.position - dragRect.width / 2;
      } else {
        // Determine which edge to snap
        const leftDistance = Math.abs(dragData.x - closestVerticalGuide.position);
        const rightDistance = Math.abs(dragData.x + dragRect.width - closestVerticalGuide.position);
        
        if (leftDistance <= rightDistance) {
          snappedX = closestVerticalGuide.position;
        } else {
          snappedX = closestVerticalGuide.position - dragRect.width;
        }
      }
    }

    // Find the closest horizontal guide
    const horizontalGuides = guides.filter(g => g.type === 'horizontal');
    let closestHorizontalDistance = Infinity;
    let closestHorizontalGuide: Guide | null = null;

    for (const guide of horizontalGuides) {
      const distances = [
        Math.abs(dragData.y - guide.position), // top edge
        Math.abs(dragData.y + dragRect.height - guide.position), // bottom edge
        Math.abs(dragData.y + dragRect.height / 2 - guide.position) // center
      ];
      
      const minDistance = Math.min(...distances);
      if (minDistance < closestHorizontalDistance && minDistance <= this.snapConfig.threshold) {
        closestHorizontalDistance = minDistance;
        closestHorizontalGuide = guide;
      }
    }

    if (closestHorizontalGuide) {
      if (closestHorizontalGuide.snapType === 'center') {
        snappedY = closestHorizontalGuide.position - dragRect.height / 2;
      } else {
        // Determine which edge to snap
        const topDistance = Math.abs(dragData.y - closestHorizontalGuide.position);
        const bottomDistance = Math.abs(dragData.y + dragRect.height - closestHorizontalGuide.position);
        
        if (topDistance <= bottomDistance) {
          snappedY = closestHorizontalGuide.position;
        } else {
          snappedY = closestHorizontalGuide.position - dragRect.height;
        }
      }
    }

    return { x: snappedX, y: snappedY };
  }

  private clearGuides(): void {
    this.activeGuides.forEach(guide => guide.remove());
    this.activeGuides = [];
  }

  // Public API methods
  setGridConfig(config: Partial<GridConfig>): void {
    this.gridConfig = { ...this.gridConfig, ...config };
    this.updateGrid();
  }

  getGridConfig(): GridConfig {
    return { ...this.gridConfig };
  }

  setSnapConfig(config: Partial<SnapConfig>): void {
    this.snapConfig = { ...this.snapConfig, ...config };
  }

  getSnapConfig(): SnapConfig {
    return { ...this.snapConfig };
  }

  setSafePadding(padding: number): void {
    this.safePadding = padding;
  }

  toggleGrid(): void {
    this.gridConfig.enabled = !this.gridConfig.enabled;
    this.updateGrid();
  }

  toggleSnap(): void {
    this.snapConfig.enabled = !this.snapConfig.enabled;
  }

  setGridStep(step: number): void {
    this.gridConfig.step = Math.max(1, step);
    this.updateGrid();
  }

  snapElementToGrid(element: HTMLElement): void {
    const info = this.elementManager.getElementInfo(element);
    if (info && this.gridConfig.enabled) {
      const snappedRect = {
        ...info.currentRect,
        x: Utils.snapToGrid(info.currentRect.x, this.gridConfig.step),
        y: Utils.snapToGrid(info.currentRect.y, this.gridConfig.step)
      };
      this.elementManager.updateElementRect(element, snappedRect);
    }
  }

  snapAllElementsToGrid(): void {
    if (!this.gridConfig.enabled) return;
    
    const allElements = this.elementManager.getAllElementInfo();
    for (const info of allElements) {
      if (!info.isLocked) {
        this.snapElementToGrid(info.element);
      }
    }
  }
}