/**
 * NH Canvas - Element Manager
 * Handles DOM scanning, element eligibility, and wrapper management
 */

import type { ElementInfo, ElementSelector, LayoutRect, NHCanvasConfig } from './types.js';
import { Utils } from './utils.js';

export class ElementManager {
  private eligibleElements = new Map<HTMLElement, ElementInfo>();
  private config: NHCanvasConfig;
  private observer: MutationObserver | null = null;

  constructor(config: NHCanvasConfig) {
    this.config = config;
    this.setupMutationObserver();
  }

  private setupMutationObserver(): void {
    this.observer = new MutationObserver((mutations) => {
      let needsRescan = false;
      
      for (const mutation of mutations) {
        if (mutation.type === 'childList') {
          needsRescan = true;
          break;
        }
        if (mutation.type === 'attributes' && 
            (mutation.attributeName === 'class' || 
             mutation.attributeName === 'data-nh-id')) {
          needsRescan = true;
          break;
        }
      }
      
      if (needsRescan) {
        this.scanDOM();
      }
    });
  }

  scanDOM(): ElementInfo[] {
    this.eligibleElements.clear();
    
    // Combine all selectors
    const selectors = [
      ...this.config.defaultSelectors,
      '[data-nh-draggable]'
    ];
    
    const allElements = new Set<HTMLElement>();
    
    // Find all matching elements
    for (const selector of selectors) {
      try {
        const elements = document.querySelectorAll(selector);
        elements.forEach(el => {
          if (el instanceof HTMLElement) {
            allElements.add(el);
          }
        });
      } catch (error) {
        console.warn(`NH Canvas: Invalid selector "${selector}"`, error);
      }
    }
    
    // Filter out blacklisted elements
    const eligibleElements = Array.from(allElements).filter(element => {
      return !this.isBlacklisted(element);
    });
    
    // Create ElementInfo for each eligible element
    for (const element of eligibleElements) {
      const info = this.createElementInfo(element);
      this.eligibleElements.set(element, info);
    }
    
    return Array.from(this.eligibleElements.values());
  }

  private isBlacklisted(element: HTMLElement): boolean {
    // Check if element matches any blacklist selector
    for (const selector of this.config.blacklistSelectors) {
      try {
        if (element.matches(selector)) {
          return true;
        }
      } catch {
        // Ignore invalid selectors
      }
    }
    
    // Check if element has data-nh-ignore attribute
    if (element.hasAttribute('data-nh-ignore')) {
      return true;
    }
    
    // Check if element is inside a blacklisted parent
    let parent = element.parentElement;
    while (parent && parent !== document.body) {
      for (const selector of this.config.blacklistSelectors) {
        try {
          if (parent.matches(selector)) {
            return true;
          }
        } catch {
          // Ignore invalid selectors
        }
      }
      if (parent.hasAttribute('data-nh-ignore')) {
        return true;
      }
      parent = parent.parentElement;
    }
    
    return false;
  }

  private createElementInfo(element: HTMLElement): ElementInfo {
    const selector = Utils.generateSelector(element);
    const originalRect = element.getBoundingClientRect();
    
    const currentRect: LayoutRect = {
      x: originalRect.left + window.scrollX,
      y: originalRect.top + window.scrollY,
      width: originalRect.width,
      height: originalRect.height,
      rotate: 0,
      z: this.getComputedZIndex(element),
      locked: element.hasAttribute('data-nh-locked'),
      hidden: false
    };

    return {
      element,
      selector,
      originalRect,
      currentRect,
      wrapper: null,
      isEligible: true,
      isLocked: currentRect.locked || false,
      isHidden: currentRect.hidden || false
    };
  }

  private getComputedZIndex(element: HTMLElement): number {
    const computed = window.getComputedStyle(element);
    const zIndex = computed.zIndex;
    if (zIndex === 'auto') return 0;
    const parsed = parseInt(zIndex, 10);
    return isNaN(parsed) ? 0 : parsed;
  }

  getElementInfo(element: HTMLElement): ElementInfo | null {
    return this.eligibleElements.get(element) || null;
  }

  getAllElementInfo(): ElementInfo[] {
    return Array.from(this.eligibleElements.values());
  }

  isEligible(element: HTMLElement): boolean {
    return this.eligibleElements.has(element);
  }

  addCustomSelector(selector: string): void {
    if (!this.config.defaultSelectors.includes(selector)) {
      this.config.defaultSelectors.push(selector);
      this.scanDOM();
    }
  }

  removeCustomSelector(selector: string): void {
    const index = this.config.defaultSelectors.indexOf(selector);
    if (index !== -1) {
      this.config.defaultSelectors.splice(index, 1);
      this.scanDOM();
    }
  }

  addBlacklistSelector(selector: string): void {
    if (!this.config.blacklistSelectors.includes(selector)) {
      this.config.blacklistSelectors.push(selector);
      this.scanDOM();
    }
  }

  removeBlacklistSelector(selector: string): void {
    const index = this.config.blacklistSelectors.indexOf(selector);
    if (index !== -1) {
      this.config.blacklistSelectors.splice(index, 1);
      this.scanDOM();
    }
  }

  createWrapper(element: HTMLElement): HTMLElement {
    const info = this.eligibleElements.get(element);
    if (!info || info.wrapper) {
      return info?.wrapper || element;
    }

    const wrapper = Utils.createWrapper(element);
    info.wrapper = wrapper;
    
    return wrapper;
  }

  removeWrapper(element: HTMLElement): void {
    const info = this.eligibleElements.get(element);
    if (info && info.wrapper) {
      Utils.removeWrapper(info.wrapper);
      info.wrapper = null;
    }
  }

  updateElementRect(element: HTMLElement, rect: LayoutRect): void {
    const info = this.eligibleElements.get(element);
    if (info) {
      info.currentRect = { ...rect };
      
      // Update locked/hidden state
      info.isLocked = rect.locked || false;
      info.isHidden = rect.hidden || false;
      
      // Apply rect to element or wrapper
      const target = info.wrapper || element;
      Utils.setElementRect(target, rect);
      
      // Update data attributes
      if (rect.locked) {
        element.setAttribute('data-nh-locked', '');
      } else {
        element.removeAttribute('data-nh-locked');
      }
      
      if (rect.hidden) {
        element.setAttribute('data-nh-hidden', '');
        target.style.visibility = 'hidden';
      } else {
        element.removeAttribute('data-nh-hidden');
        target.style.visibility = '';
      }
    }
  }

  getElementAtPoint(x: number, y: number): HTMLElement | null {
    // Get element at point, but ignore our overlay elements
    const elements = document.elementsFromPoint(x, y);
    
    for (const element of elements) {
      if (element instanceof HTMLElement && 
          !element.classList.contains('nh-canvas-overlay') &&
          !element.closest('.nh-canvas-overlay') &&
          this.isEligible(element)) {
        return element;
      }
    }
    
    return null;
  }

  getElementsInRect(rect: { x: number; y: number; width: number; height: number }): HTMLElement[] {
    const result: HTMLElement[] = [];
    
    for (const [element, info] of this.eligibleElements) {
      const elementRect = Utils.getElementRect(info.wrapper || element);
      
      if (Utils.rectsIntersect(rect, elementRect)) {
        result.push(element);
      }
    }
    
    return result;
  }

  startObserving(): void {
    if (this.observer) {
      this.observer.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['class', 'data-nh-id', 'data-nh-locked', 'data-nh-hidden']
      });
    }
  }

  stopObserving(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  cleanup(): void {
    // Remove all wrappers
    for (const [element, info] of this.eligibleElements) {
      if (info.wrapper) {
        this.removeWrapper(element);
      }
    }
    
    this.stopObserving();
    this.eligibleElements.clear();
  }

  getStats(): { total: number; wrapped: number; locked: number; hidden: number } {
    let wrapped = 0;
    let locked = 0;
    let hidden = 0;
    
    for (const info of this.eligibleElements.values()) {
      if (info.wrapper) wrapped++;
      if (info.isLocked) locked++;
      if (info.isHidden) hidden++;
    }
    
    return {
      total: this.eligibleElements.size,
      wrapped,
      locked,
      hidden
    };
  }
}