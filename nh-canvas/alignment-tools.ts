/**
 * NH Canvas - Alignment Tools
 * Handles multi-select alignment and distribution operations
 */

import type { LayoutRect } from './types.js';
import { Utils } from './utils.js';
import { ElementManager } from './element-manager.js';

export type AlignmentType = 
  | 'left' | 'center' | 'right' 
  | 'top' | 'middle' | 'bottom';

export type DistributionType = 
  | 'horizontal' | 'vertical';

export class AlignmentTools {
  private elementManager: ElementManager;

  constructor(elementManager: ElementManager) {
    this.elementManager = elementManager;
  }

  /**
   * Align multiple elements along a specified axis
   */
  alignElements(elements: HTMLElement[], alignment: AlignmentType): void {
    if (elements.length < 2) return;

    const infos = elements
      .map(el => this.elementManager.getElementInfo(el))
      .filter(info => info && !info.isLocked);

    if (infos.length < 2) return;

    const rects = infos.map(info => info!.currentRect);
    const alignmentValue = this.calculateAlignmentValue(rects, alignment);

    // Apply alignment to each element
    for (let i = 0; i < infos.length; i++) {
      const info = infos[i]!;
      const newRect = { ...info.currentRect };

      switch (alignment) {
        case 'left':
          newRect.x = alignmentValue;
          break;
        case 'center':
          newRect.x = alignmentValue - newRect.width / 2;
          break;
        case 'right':
          newRect.x = alignmentValue - newRect.width;
          break;
        case 'top':
          newRect.y = alignmentValue;
          break;
        case 'middle':
          newRect.y = alignmentValue - newRect.height / 2;
          break;
        case 'bottom':
          newRect.y = alignmentValue - newRect.height;
          break;
      }

      this.elementManager.updateElementRect(info.element, newRect);
    }

    this.dispatchChangeEvent(elements);
  }

  /**
   * Distribute elements evenly along an axis
   */
  distributeElements(elements: HTMLElement[], distribution: DistributionType): void {
    if (elements.length < 3) return;

    const infos = elements
      .map(el => this.elementManager.getElementInfo(el))
      .filter(info => info && !info.isLocked);

    if (infos.length < 3) return;

    if (distribution === 'horizontal') {
      this.distributeHorizontally(infos);
    } else {
      this.distributeVertically(infos);
    }

    this.dispatchChangeEvent(elements);
  }

  /**
   * Space elements evenly with equal gaps
   */
  spaceElementsEvenly(elements: HTMLElement[], distribution: DistributionType, spacing?: number): void {
    if (elements.length < 2) return;

    const infos = elements
      .map(el => this.elementManager.getElementInfo(el))
      .filter(info => info && !info.isLocked);

    if (infos.length < 2) return;

    if (distribution === 'horizontal') {
      this.spaceHorizontally(infos, spacing);
    } else {
      this.spaceVertically(infos, spacing);
    }

    this.dispatchChangeEvent(elements);
  }

  /**
   * Resize elements to match the largest/smallest in selection
   */
  matchSize(elements: HTMLElement[], dimension: 'width' | 'height' | 'both', target: 'largest' | 'smallest' = 'largest'): void {
    if (elements.length < 2) return;

    const infos = elements
      .map(el => this.elementManager.getElementInfo(el))
      .filter(info => info && !info.isLocked);

    if (infos.length < 2) return;

    const rects = infos.map(info => info!.currentRect);
    
    let targetWidth: number;
    let targetHeight: number;

    if (target === 'largest') {
      targetWidth = Math.max(...rects.map(r => r.width));
      targetHeight = Math.max(...rects.map(r => r.height));
    } else {
      targetWidth = Math.min(...rects.map(r => r.width));
      targetHeight = Math.min(...rects.map(r => r.height));
    }

    for (const info of infos) {
      const newRect = { ...info!.currentRect };

      if (dimension === 'width' || dimension === 'both') {
        newRect.width = targetWidth;
      }
      if (dimension === 'height' || dimension === 'both') {
        newRect.height = targetHeight;
      }

      this.elementManager.updateElementRect(info!.element, newRect);
    }

    this.dispatchChangeEvent(elements);
  }

  /**
   * Create a uniform grid layout from selected elements
   */
  arrangeInGrid(
    elements: HTMLElement[], 
    columns: number, 
    spacing: { horizontal: number; vertical: number } = { horizontal: 20, vertical: 20 }
  ): void {
    if (elements.length === 0 || columns < 1) return;

    const infos = elements
      .map(el => this.elementManager.getElementInfo(el))
      .filter(info => info && !info.isLocked);

    if (infos.length === 0) return;

    // Calculate grid dimensions
    const rows = Math.ceil(infos.length / columns);
    
    // Find the bounds of all elements to determine starting position
    const rects = infos.map(info => info!.currentRect);
    const minX = Math.min(...rects.map(r => r.x));
    const minY = Math.min(...rects.map(r => r.y));

    // Calculate cell dimensions (use largest element as base)
    const maxWidth = Math.max(...rects.map(r => r.width));
    const maxHeight = Math.max(...rects.map(r => r.height));

    // Position elements in grid
    for (let i = 0; i < infos.length; i++) {
      const info = infos[i]!;
      const row = Math.floor(i / columns);
      const col = i % columns;

      const newRect = { ...info.currentRect };
      newRect.x = minX + col * (maxWidth + spacing.horizontal);
      newRect.y = minY + row * (maxHeight + spacing.vertical);

      this.elementManager.updateElementRect(info.element, newRect);
    }

    this.dispatchChangeEvent(elements);
  }

  /**
   * Center elements within the viewport or relative to a container
   */
  centerElements(
    elements: HTMLElement[], 
    centerType: 'viewport' | 'horizontal' | 'vertical' = 'viewport',
    container?: HTMLElement
  ): void {
    if (elements.length === 0) return;

    const infos = elements
      .map(el => this.elementManager.getElementInfo(el))
      .filter(info => info && !info.isLocked);

    if (infos.length === 0) return;

    // Calculate bounds
    let containerRect: { x: number; y: number; width: number; height: number };
    
    if (container) {
      containerRect = Utils.getElementRect(container);
    } else {
      const viewport = Utils.getViewportRect();
      containerRect = {
        x: viewport.x + window.scrollX,
        y: viewport.y + window.scrollY,
        width: viewport.width,
        height: viewport.height
      };
    }

    // Calculate the bounds of selected elements
    const rects = infos.map(info => info!.currentRect);
    const groupBounds = {
      left: Math.min(...rects.map(r => r.x)),
      right: Math.max(...rects.map(r => r.x + r.width)),
      top: Math.min(...rects.map(r => r.y)),
      bottom: Math.max(...rects.map(r => r.y + r.height))
    };

    const groupWidth = groupBounds.right - groupBounds.left;
    const groupHeight = groupBounds.bottom - groupBounds.top;

    // Calculate center position
    const centerX = containerRect.x + containerRect.width / 2;
    const centerY = containerRect.y + containerRect.height / 2;

    const offsetX = centerX - groupWidth / 2 - groupBounds.left;
    const offsetY = centerY - groupHeight / 2 - groupBounds.top;

    // Apply centering
    for (const info of infos) {
      const newRect = { ...info!.currentRect };

      if (centerType === 'viewport' || centerType === 'horizontal') {
        newRect.x += offsetX;
      }
      if (centerType === 'viewport' || centerType === 'vertical') {
        newRect.y += offsetY;
      }

      this.elementManager.updateElementRect(info!.element, newRect);
    }

    this.dispatchChangeEvent(elements);
  }

  /**
   * Stack elements on top of each other with optional spacing
   */
  stackElements(elements: HTMLElement[], direction: 'horizontal' | 'vertical', spacing = 0): void {
    if (elements.length < 2) return;

    const infos = elements
      .map(el => this.elementManager.getElementInfo(el))
      .filter(info => info && !info.isLocked);

    if (infos.length < 2) return;

    // Sort elements by their current position
    infos.sort((a, b) => {
      if (direction === 'horizontal') {
        return a!.currentRect.x - b!.currentRect.x;
      } else {
        return a!.currentRect.y - b!.currentRect.y;
      }
    });

    // Position elements sequentially
    for (let i = 1; i < infos.length; i++) {
      const currentInfo = infos[i]!;
      const prevInfo = infos[i - 1]!;
      const newRect = { ...currentInfo.currentRect };

      if (direction === 'horizontal') {
        newRect.x = prevInfo.currentRect.x + prevInfo.currentRect.width + spacing;
      } else {
        newRect.y = prevInfo.currentRect.y + prevInfo.currentRect.height + spacing;
      }

      this.elementManager.updateElementRect(currentInfo.element, newRect);
    }

    this.dispatchChangeEvent(elements);
  }

  private calculateAlignmentValue(rects: LayoutRect[], alignment: AlignmentType): number {
    switch (alignment) {
      case 'left':
        return Math.min(...rects.map(r => r.x));
      case 'center':
        const minX = Math.min(...rects.map(r => r.x));
        const maxX = Math.max(...rects.map(r => r.x + r.width));
        return (minX + maxX) / 2;
      case 'right':
        return Math.max(...rects.map(r => r.x + r.width));
      case 'top':
        return Math.min(...rects.map(r => r.y));
      case 'middle':
        const minY = Math.min(...rects.map(r => r.y));
        const maxY = Math.max(...rects.map(r => r.y + r.height));
        return (minY + maxY) / 2;
      case 'bottom':
        return Math.max(...rects.map(r => r.y + r.height));
      default:
        return 0;
    }
  }

  private distributeHorizontally(infos: Array<{ element: HTMLElement; currentRect: LayoutRect }>): void {
    // Sort by X position
    infos.sort((a, b) => a.currentRect.x - b.currentRect.x);

    const first = infos[0];
    const last = infos[infos.length - 1];
    
    const startX = first.currentRect.x;
    const endX = last.currentRect.x + last.currentRect.width;
    const totalWidth = endX - startX;

    // Calculate total width of all elements
    const elementWidths = infos.reduce((sum, info) => sum + info.currentRect.width, 0);
    const availableSpace = totalWidth - elementWidths;
    const spacing = infos.length > 2 ? availableSpace / (infos.length - 1) : 0;

    // Position elements
    let currentX = startX;
    for (let i = 0; i < infos.length; i++) {
      const info = infos[i];
      const newRect = { ...info.currentRect };
      
      if (i === 0) {
        // Keep first element in place
        currentX = newRect.x + newRect.width;
      } else if (i === infos.length - 1) {
        // Keep last element in place
        break;
      } else {
        // Distribute middle elements
        newRect.x = currentX + spacing * i;
        currentX = newRect.x + newRect.width;
        this.elementManager.updateElementRect(info.element, newRect);
      }
    }
  }

  private distributeVertically(infos: Array<{ element: HTMLElement; currentRect: LayoutRect }>): void {
    // Sort by Y position
    infos.sort((a, b) => a.currentRect.y - b.currentRect.y);

    const first = infos[0];
    const last = infos[infos.length - 1];
    
    const startY = first.currentRect.y;
    const endY = last.currentRect.y + last.currentRect.height;
    const totalHeight = endY - startY;

    // Calculate total height of all elements
    const elementHeights = infos.reduce((sum, info) => sum + info.currentRect.height, 0);
    const availableSpace = totalHeight - elementHeights;
    const spacing = infos.length > 2 ? availableSpace / (infos.length - 1) : 0;

    // Position elements
    let currentY = startY;
    for (let i = 0; i < infos.length; i++) {
      const info = infos[i];
      const newRect = { ...info.currentRect };
      
      if (i === 0) {
        // Keep first element in place
        currentY = newRect.y + newRect.height;
      } else if (i === infos.length - 1) {
        // Keep last element in place
        break;
      } else {
        // Distribute middle elements
        newRect.y = currentY + spacing * i;
        currentY = newRect.y + newRect.height;
        this.elementManager.updateElementRect(info.element, newRect);
      }
    }
  }

  private spaceHorizontally(
    infos: Array<{ element: HTMLElement; currentRect: LayoutRect }>, 
    spacing?: number
  ): void {
    // Sort by X position
    infos.sort((a, b) => a.currentRect.x - b.currentRect.x);

    if (spacing === undefined) {
      // Auto-calculate spacing based on current distribution
      const gaps: number[] = [];
      for (let i = 1; i < infos.length; i++) {
        const prevInfo = infos[i - 1];
        const currentInfo = infos[i];
        const gap = currentInfo.currentRect.x - (prevInfo.currentRect.x + prevInfo.currentRect.width);
        gaps.push(gap);
      }
      spacing = gaps.reduce((sum, gap) => sum + gap, 0) / gaps.length;
    }

    // Apply spacing
    for (let i = 1; i < infos.length; i++) {
      const info = infos[i];
      const prevInfo = infos[i - 1];
      const newRect = { ...info.currentRect };
      
      newRect.x = prevInfo.currentRect.x + prevInfo.currentRect.width + spacing;
      this.elementManager.updateElementRect(info.element, newRect);
    }
  }

  private spaceVertically(
    infos: Array<{ element: HTMLElement; currentRect: LayoutRect }>, 
    spacing?: number
  ): void {
    // Sort by Y position
    infos.sort((a, b) => a.currentRect.y - b.currentRect.y);

    if (spacing === undefined) {
      // Auto-calculate spacing based on current distribution
      const gaps: number[] = [];
      for (let i = 1; i < infos.length; i++) {
        const prevInfo = infos[i - 1];
        const currentInfo = infos[i];
        const gap = currentInfo.currentRect.y - (prevInfo.currentRect.y + prevInfo.currentRect.height);
        gaps.push(gap);
      }
      spacing = gaps.reduce((sum, gap) => sum + gap, 0) / gaps.length;
    }

    // Apply spacing
    for (let i = 1; i < infos.length; i++) {
      const info = infos[i];
      const prevInfo = infos[i - 1];
      const newRect = { ...info.currentRect };
      
      newRect.y = prevInfo.currentRect.y + prevInfo.currentRect.height + spacing;
      this.elementManager.updateElementRect(info.element, newRect);
    }
  }

  private dispatchChangeEvent(elements: HTMLElement[]): void {
    window.dispatchEvent(new CustomEvent('nh-canvas:alignment-change', {
      detail: { elements }
    }));
  }

  /**
   * Quick alignment shortcuts
   */
  alignLeft(elements: HTMLElement[]): void {
    this.alignElements(elements, 'left');
  }

  alignCenter(elements: HTMLElement[]): void {
    this.alignElements(elements, 'center');
  }

  alignRight(elements: HTMLElement[]): void {
    this.alignElements(elements, 'right');
  }

  alignTop(elements: HTMLElement[]): void {
    this.alignElements(elements, 'top');
  }

  alignMiddle(elements: HTMLElement[]): void {
    this.alignElements(elements, 'middle');
  }

  alignBottom(elements: HTMLElement[]): void {
    this.alignElements(elements, 'bottom');
  }

  distributeHorizontal(elements: HTMLElement[]): void {
    this.distributeElements(elements, 'horizontal');
  }

  distributeVertical(elements: HTMLElement[]): void {
    this.distributeElements(elements, 'vertical');
  }

  /**
   * Get alignment suggestions based on current selection
   */
  getAlignmentSuggestions(elements: HTMLElement[]): {
    canAlign: boolean;
    canDistribute: boolean;
    canMatchSize: boolean;
    suggestions: string[];
  } {
    const suggestions: string[] = [];
    const count = elements.length;

    const canAlign = count >= 2;
    const canDistribute = count >= 3;
    const canMatchSize = count >= 2;

    if (canAlign) {
      suggestions.push('Align elements by edge or center');
    }
    if (canDistribute) {
      suggestions.push('Distribute elements evenly');
    }
    if (canMatchSize) {
      suggestions.push('Match element sizes');
    }
    if (count >= 1) {
      suggestions.push('Center in viewport');
    }

    return {
      canAlign,
      canDistribute,
      canMatchSize,
      suggestions
    };
  }
}