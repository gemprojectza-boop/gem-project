/**
 * NH Canvas - Utility Functions
 */

import type { ElementSelector, Point, Rect, LayoutRect, Breakpoint } from './types.js';

export class Utils {
  static generateId(): string {
    return `nh-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }

  static throttle<T extends (...args: any[]) => void>(
    func: T,
    delay: number
  ): (...args: Parameters<T>) => void {
    let timeoutId: number | null = null;
    let lastExecTime = 0;
    
    return (...args: Parameters<T>) => {
      const currentTime = Date.now();
      
      if (currentTime - lastExecTime > delay) {
        func(...args);
        lastExecTime = currentTime;
      } else {
        if (timeoutId) clearTimeout(timeoutId);
        timeoutId = window.setTimeout(() => {
          func(...args);
          lastExecTime = Date.now();
          timeoutId = null;
        }, delay - (currentTime - lastExecTime));
      }
    };
  }

  static debounce<T extends (...args: any[]) => void>(
    func: T,
    delay: number
  ): (...args: Parameters<T>) => void {
    let timeoutId: number | null = null;
    
    return (...args: Parameters<T>) => {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = window.setTimeout(() => func(...args), delay);
    };
  }

  static clamp(value: number, min: number, max: number): number {
    return Math.max(min, Math.min(max, value));
  }

  static distance(p1: Point, p2: Point): number {
    const dx = p1.x - p2.x;
    const dy = p1.y - p2.y;
    return Math.sqrt(dx * dx + dy * dy);
  }

  static rectContainsPoint(rect: Rect, point: Point): boolean {
    return point.x >= rect.x && 
           point.x <= rect.x + rect.width &&
           point.y >= rect.y && 
           point.y <= rect.y + rect.height;
  }

  static rectsIntersect(rect1: Rect, rect2: Rect): boolean {
    return !(rect1.x > rect2.x + rect2.width ||
             rect2.x > rect1.x + rect1.width ||
             rect1.y > rect2.y + rect2.height ||
             rect2.y > rect1.y + rect1.height);
  }

  static snapToGrid(value: number, gridSize: number): number {
    return Math.round(value / gridSize) * gridSize;
  }

  static snapToValue(value: number, targets: number[], threshold = 6): number {
    for (const target of targets) {
      if (Math.abs(value - target) <= threshold) {
        return target;
      }
    }
    return value;
  }

  static generateSelector(element: HTMLElement): ElementSelector {
    // Prefer data-id strategy
    const dataId = element.getAttribute('data-nh-id');
    if (dataId) {
      return { strategy: 'dataId', value: dataId };
    }

    // Auto-generate CSS selector
    const parts: string[] = [];
    
    // Add tag name
    parts.push(element.tagName.toLowerCase());
    
    // Add classes
    if (element.className && typeof element.className === 'string') {
      const classes = element.className.split(/\s+/).filter(Boolean);
      if (classes.length > 0) {
        parts[0] += '.' + classes.join('.');
      }
    }

    // Add position among siblings if needed for uniqueness
    const parent = element.parentElement;
    if (parent) {
      const siblings = Array.from(parent.children).filter(
        child => child.tagName === element.tagName
      );
      if (siblings.length > 1) {
        const index = siblings.indexOf(element);
        parts.push(`:nth-of-type(${index + 1})`);
      }
    }

    return { strategy: 'autoCss', value: parts.join('') };
  }

  static querySelector(selector: ElementSelector): HTMLElement | null {
    try {
      if (selector.strategy === 'dataId') {
        return document.querySelector(`[data-nh-id="${selector.value}"]`) as HTMLElement;
      } else {
        return document.querySelector(selector.value) as HTMLElement;
      }
    } catch {
      return null;
    }
  }

  static querySelectorAll(selector: ElementSelector): HTMLElement[] {
    try {
      if (selector.strategy === 'dataId') {
        return Array.from(document.querySelectorAll(`[data-nh-id="${selector.value}"]`)) as HTMLElement[];
      } else {
        return Array.from(document.querySelectorAll(selector.value)) as HTMLElement[];
      }
    } catch {
      return [];
    }
  }

  static getViewportRect(): Rect {
    return {
      x: 0,
      y: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

  static getElementRect(element: HTMLElement): Rect {
    const domRect = element.getBoundingClientRect();
    return {
      x: domRect.left + window.scrollX,
      y: domRect.top + window.scrollY,
      width: domRect.width,
      height: domRect.height
    };
  }

  static setElementRect(element: HTMLElement, rect: LayoutRect): void {
    const style = element.style;
    style.transform = `translate3d(${rect.x}px, ${rect.y}px, 0) rotate(${rect.rotate || 0}deg)`;
    style.width = `${rect.width}px`;
    style.height = `${rect.height}px`;
    
    if (rect.z !== undefined) {
      style.zIndex = rect.z.toString();
    }
  }

  static getCurrentBreakpoint(): Breakpoint {
    const width = window.innerWidth;
    if (width >= 1200) return 'lg';
    if (width >= 992) return 'md';
    if (width >= 768) return 'sm';
    return 'xs';
  }

  static getEventCoordinates(event: MouseEvent | TouchEvent): Point {
    if ('touches' in event && event.touches.length > 0) {
      return {
        x: event.touches[0].clientX,
        y: event.touches[0].clientY
      };
    } else if ('clientX' in event) {
      return {
        x: event.clientX,
        y: event.clientY
      };
    }
    return { x: 0, y: 0 };
  }

  static preventDefault(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
  }

  static isContentEditable(element: HTMLElement): boolean {
    return element.contentEditable === 'true' || 
           element.isContentEditable ||
           element.getAttribute('contenteditable') === 'true';
  }

  static hasReducedMotion(): boolean {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  static deepClone<T>(obj: T): T {
    return JSON.parse(JSON.stringify(obj));
  }

  static getClosestEligibleElement(
    element: HTMLElement, 
    eligibleSelectors: string[]
  ): HTMLElement | null {
    let current: HTMLElement | null = element;
    
    while (current && current !== document.body) {
      for (const selector of eligibleSelectors) {
        try {
          if (current.matches(selector)) {
            return current;
          }
        } catch {
          // Ignore invalid selectors
        }
      }
      current = current.parentElement;
    }
    
    return null;
  }

  static createWrapper(element: HTMLElement): HTMLElement {
    const wrapper = document.createElement('div');
    wrapper.className = 'nh-canvas-wrap';
    wrapper.style.cssText = `
      position: relative;
      display: inline-block;
      pointer-events: none;
    `;
    
    const parent = element.parentNode;
    if (parent) {
      parent.insertBefore(wrapper, element);
      wrapper.appendChild(element);
    }
    
    return wrapper;
  }

  static removeWrapper(wrapper: HTMLElement): void {
    const element = wrapper.firstElementChild as HTMLElement;
    if (element && wrapper.parentNode) {
      wrapper.parentNode.insertBefore(element, wrapper);
      wrapper.remove();
    }
  }

  static formatBytes(bytes: number): string {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

  static getPageIdentifier(): string {
    return window.location.pathname + window.location.search;
  }

  static createElementFromHTML(html: string): HTMLElement {
    const template = document.createElement('template');
    template.innerHTML = html.trim();
    return template.content.firstChild as HTMLElement;
  }
}