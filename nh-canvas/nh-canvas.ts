/**
 * NH Canvas - Main Class
 * Site-wide Design Canvas System
 */

import type { 
  NHCanvasConfig, 
  NHCanvasEvents, 
  EventName, 
  EventHandler,
  LayoutEntry,
  GridConfig,
  SnapConfig
} from './types.js';
import { Utils } from './utils.js';
import { ElementManager } from './element-manager.js';
import { InteractionEngine } from './interaction-engine.js';
import { GuidesSystem } from './guides-system.js';
import { AlignmentTools } from './alignment-tools.js';
import { PersistenceManager, LocalStorageAdapter } from './storage.js';
import { UIComponents, UICallbacks } from './ui-components.js';

export class NHCanvas {
  private config: NHCanvasConfig;
  private isEnabled = false;
  
  private elementManager: ElementManager;
  private interactionEngine: InteractionEngine;
  private guidesSystem: GuidesSystem;
  private alignmentTools: AlignmentTools;
  private persistenceManager: PersistenceManager;
  private uiComponents: UIComponents;
  
  private eventHandlers = new Map<EventName, Set<EventHandler<any>>>();
  private cssLoaded = false;

  constructor(config: Partial<NHCanvasConfig> = {}) {
    this.config = {
      defaultSelectors: [
        'img',
        'p',
        'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
        '.card',
        '.section',
        '.hero',
        '.container',
        '.content',
        '.block',
        '.tile',
        '[data-nh-draggable]'
      ],
      blacklistSelectors: [
        'nav',
        '.modal',
        '.dropdown',
        '.tooltip',
        '.popover',
        'script',
        'style',
        'meta',
        'link',
        '[data-nh-ignore]'
      ],
      gridStep: 8,
      snapThreshold: 6,
      maxHistorySteps: 100,
      autoSave: true,
      autoSaveDelay: 300,
      enableResponsive: false,
      safePadding: 24,
      ...config
    };

    this.initializeComponents();
    this.setupEventHandlers();
    this.loadCSS();
  }

  private initializeComponents(): void {
    this.elementManager = new ElementManager(this.config);
    this.interactionEngine = new InteractionEngine(this.elementManager);
    this.guidesSystem = new GuidesSystem(
      this.elementManager,
      { enabled: true, step: this.config.gridStep },
      { enabled: true, threshold: this.config.snapThreshold }
    );
    this.alignmentTools = new AlignmentTools(this.elementManager);
    this.persistenceManager = new PersistenceManager();
    
    const uiCallbacks: UICallbacks = {
      onToggle: (enabled) => enabled ? this.enable() : this.disable(),
      onGridToggle: (enabled) => this.setGridEnabled(enabled),
      onSnapToggle: (enabled) => this.setSnapEnabled(enabled),
      onGridStepChange: (step) => this.setGridStep(step),
      onExport: () => this.exportLayout(),
      onImport: (json) => this.importLayout(json),
      onReset: (scope) => this.resetLayout(scope),
      onUndo: () => this.undo(),
      onRedo: () => this.redo(),
      onAlign: (type) => this.handleAlignment(type),
      onDistribute: (type) => this.handleDistribution(type),
      onHelp: () => {} // Handled by UI components
    };
    
    this.uiComponents = new UIComponents(uiCallbacks);
  }

  private setupEventHandlers(): void {
    // Listen to internal events and forward them
    window.addEventListener('nh-canvas:change', (e) => {
      this.saveCurrentLayout();
      this.emit('change', (e as CustomEvent).detail);
    });

    window.addEventListener('nh-canvas:selection-change', (e) => {
      const detail = (e as CustomEvent).detail;
      this.uiComponents.updateSelection(detail.selectedElements);
      this.emit('select', detail.selectedElements);
    });

    window.addEventListener('nh-canvas:alignment-change', (e) => {
      this.saveCurrentLayout();
    });

    // Apply saved layouts when elements become available
    window.addEventListener('nh-canvas:elements-scanned', () => {
      this.applySavedLayouts();
    });

    // Save on page unload
    window.addEventListener('beforeunload', () => {
      if (this.isEnabled) {
        this.persistenceManager.save();
      }
    });
  }

  private async loadCSS(): Promise<void> {
    if (this.cssLoaded) return;

    try {
      // Check if CSS is already loaded
      const existingLink = document.querySelector('link[href*="nh-canvas.css"]');
      if (existingLink) {
        this.cssLoaded = true;
        return;
      }

      // Try to load from relative path first
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = './nh-canvas/nh-canvas.css';
      
      return new Promise((resolve, reject) => {
        link.onload = () => {
          this.cssLoaded = true;
          resolve();
        };
        
        link.onerror = () => {
          // Fallback: inject critical styles inline
          this.injectCriticalStyles();
          resolve();
        };
        
        document.head.appendChild(link);
        
        // Timeout fallback
        setTimeout(() => {
          if (!this.cssLoaded) {
            this.injectCriticalStyles();
            resolve();
          }
        }, 1000);
      });
    } catch (error) {
      console.warn('NH Canvas: Could not load CSS, using inline styles');
      this.injectCriticalStyles();
    }
  }

  private injectCriticalStyles(): void {
    if (document.querySelector('#nh-canvas-critical-styles')) return;

    const style = document.createElement('style');
    style.id = 'nh-canvas-critical-styles';
    style.textContent = `
      .nh-selected { outline: 2px solid #007acc !important; outline-offset: -2px !important; }
      .nh-ghost-element { opacity: 0.6 !important; pointer-events: none !important; z-index: 10000 !important; border: 2px dashed #007acc !important; }
      .nh-resize-handle { position: absolute; background: #007acc; border: 1px solid white; width: 8px; height: 8px; z-index: 10001; }
      .nh-marquee { border: 1px dashed #007acc; background: rgba(0, 122, 204, 0.1); pointer-events: none; z-index: 9999; }
      body.nh-dragging, body.nh-dragging * { cursor: move !important; user-select: none !important; }
      body.nh-resizing { cursor: nw-resize !important; }
    `;
    document.head.appendChild(style);
    this.cssLoaded = true;
  }

  // Public API Methods

  async enable(): Promise<void> {
    if (this.isEnabled) return;

    await this.loadCSS();
    await this.persistenceManager.initialize();

    this.elementManager.scanDOM();
    this.elementManager.startObserving();
    this.interactionEngine.enable();
    this.guidesSystem.enable();
    this.uiComponents.enable();

    this.applySavedLayouts();

    this.isEnabled = true;
    document.body.classList.add('nh-canvas-enabled');
    
    this.emit('enable');
    
    console.log('NH Canvas: Design mode enabled');
  }

  disable(): void {
    if (!this.isEnabled) return;

    this.elementManager.cleanup();
    this.elementManager.stopObserving();
    this.interactionEngine.disable();
    this.guidesSystem.disable();
    this.uiComponents.disable();

    this.isEnabled = false;
    document.body.classList.remove('nh-canvas-enabled');
    
    this.emit('disable');
    
    console.log('NH Canvas: Design mode disabled');
  }

  toggle(): void {
    if (this.isEnabled) {
      this.disable();
    } else {
      this.enable();
    }
  }

  isActive(): boolean {
    return this.isEnabled;
  }

  // Configuration methods

  addSelector(selector: string): void {
    this.elementManager.addCustomSelector(selector);
    if (this.isEnabled) {
      this.applySavedLayouts();
    }
  }

  blacklistSelector(selector: string): void {
    this.elementManager.addBlacklistSelector(selector);
  }

  setGridEnabled(enabled: boolean): void {
    const gridConfig = { ...this.guidesSystem.getGridConfig(), enabled };
    this.guidesSystem.setGridConfig(gridConfig);
    this.persistenceManager.setGridConfig(gridConfig);
    this.uiComponents.updateGridConfig(gridConfig);
  }

  setSnapEnabled(enabled: boolean): void {
    const snapConfig = { ...this.guidesSystem.getSnapConfig(), enabled };
    this.guidesSystem.setSnapConfig(snapConfig);
    this.persistenceManager.setSnapConfig(snapConfig);
    this.uiComponents.updateSnapConfig(snapConfig);
  }

  setGridStep(step: number): void {
    const gridConfig = { ...this.guidesSystem.getGridConfig(), step };
    this.guidesSystem.setGridConfig(gridConfig);
    this.persistenceManager.setGridConfig(gridConfig);
    this.uiComponents.updateGridConfig(gridConfig);
  }

  // Layout methods

  private applySavedLayouts(): void {
    const entries = this.persistenceManager.getEntriesForPage();
    let appliedCount = 0;

    for (const entry of entries) {
      const elements = Utils.querySelectorAll(entry.selector);
      
      for (const element of elements) {
        if (this.elementManager.isEligible(element)) {
          this.elementManager.updateElementRect(element, entry.rect);
          appliedCount++;
          
          this.emit('apply', element, entry.rect);
        }
      }
    }

    if (appliedCount > 0) {
      console.log(`NH Canvas: Applied ${appliedCount} saved layouts`);
    }
  }

  private saveCurrentLayout(): void {
    if (!this.isEnabled) return;

    const allElementInfo = this.elementManager.getAllElementInfo();
    
    for (const info of allElementInfo) {
      this.persistenceManager.updateElement(info.element, info.currentRect);
    }
  }

  // Export/Import methods

  exportJSON(): string {
    return this.persistenceManager.exportJSON();
  }

  exportLayout(): void {
    try {
      const json = this.exportJSON();
      const blob = new Blob([json], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      
      const a = document.createElement('a');
      a.href = url;
      a.download = `nh-canvas-layout-${Date.now()}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      
      URL.revokeObjectURL(url);
      
      this.uiComponents.showNotification('Layout exported successfully', 'success');
    } catch (error) {
      this.uiComponents.showNotification('Error exporting layout', 'error');
      console.error('NH Canvas: Export error:', error);
    }
  }

  async importJSON(json: string): Promise<void> {
    try {
      await this.persistenceManager.importJSON(json);
      
      if (this.isEnabled) {
        this.applySavedLayouts();
      }
      
      this.uiComponents.showNotification('Layout imported successfully', 'success');
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unknown error';
      this.uiComponents.showNotification(`Import failed: ${message}`, 'error');
      throw error;
    }
  }

  importLayout(json: string): void {
    this.importJSON(json).catch(console.error);
  }

  async resetLayout(scope: 'page' | 'site' = 'page'): Promise<void> {
    try {
      await this.persistenceManager.reset(scope);
      
      if (this.isEnabled) {
        // Reset visual elements
        const allElementInfo = this.elementManager.getAllElementInfo();
        for (const info of allElementInfo) {
          if (info.wrapper) {
            this.elementManager.removeWrapper(info.element);
          }
        }
        
        // Rescan and reapply
        this.elementManager.scanDOM();
        this.applySavedLayouts();
      }
      
      const message = scope === 'page' ? 'Page layout reset' : 'All layouts reset';
      this.uiComponents.showNotification(message, 'success');
    } catch (error) {
      this.uiComponents.showNotification('Error resetting layout', 'error');
      console.error('NH Canvas: Reset error:', error);
    }
  }

  // History methods

  undo(): boolean {
    const success = this.persistenceManager.undo();
    if (success && this.isEnabled) {
      this.applySavedLayouts();
      this.uiComponents.showNotification('Undid last change', 'info');
    }
    return success;
  }

  redo(): boolean {
    const success = this.persistenceManager.redo();
    if (success && this.isEnabled) {
      this.applySavedLayouts();
      this.uiComponents.showNotification('Redid last change', 'info');
    }
    return success;
  }

  // Alignment methods

  private handleAlignment(type: string): void {
    const selectedElements = this.interactionEngine.getSelectedElements();
    if (selectedElements.length === 0) return;

    switch (type) {
      case 'align-left':
        this.alignmentTools.alignLeft(selectedElements);
        break;
      case 'align-center':
        this.alignmentTools.alignCenter(selectedElements);
        break;
      case 'align-right':
        this.alignmentTools.alignRight(selectedElements);
        break;
      case 'align-top':
        this.alignmentTools.alignTop(selectedElements);
        break;
      case 'align-middle':
        this.alignmentTools.alignMiddle(selectedElements);
        break;
      case 'align-bottom':
        this.alignmentTools.alignBottom(selectedElements);
        break;
      case 'distribute-horizontal':
        this.alignmentTools.distributeHorizontal(selectedElements);
        break;
      case 'distribute-vertical':
        this.alignmentTools.distributeVertical(selectedElements);
        break;
    }
  }

  private handleDistribution(type: string): void {
    const selectedElements = this.interactionEngine.getSelectedElements();
    if (selectedElements.length < 3) return;

    if (type === 'horizontal') {
      this.alignmentTools.distributeHorizontal(selectedElements);
    } else if (type === 'vertical') {
      this.alignmentTools.distributeVertical(selectedElements);
    }
  }

  // Event system

  on<T extends EventName>(eventName: T, handler: EventHandler<T>): void {
    if (!this.eventHandlers.has(eventName)) {
      this.eventHandlers.set(eventName, new Set());
    }
    this.eventHandlers.get(eventName)!.add(handler);
  }

  off<T extends EventName>(eventName: T, handler: EventHandler<T>): void {
    const handlers = this.eventHandlers.get(eventName);
    if (handlers) {
      handlers.delete(handler);
    }
  }

  private emit<T extends EventName>(eventName: T, ...args: Parameters<EventHandler<T>>): void {
    const handlers = this.eventHandlers.get(eventName);
    if (handlers) {
      handlers.forEach(handler => {
        try {
          (handler as any)(...args);
        } catch (error) {
          console.error(`NH Canvas: Error in ${eventName} handler:`, error);
        }
      });
    }
  }

  // Utility methods

  getStats(): {
    isEnabled: boolean;
    elementsManaged: number;
    layoutEntries: number;
    persistenceStats: ReturnType<PersistenceManager['getStats']>;
  } {
    return {
      isEnabled: this.isEnabled,
      elementsManaged: this.elementManager.getAllElementInfo().length,
      layoutEntries: this.persistenceManager.getAllEntries().length,
      persistenceStats: this.persistenceManager.getStats()
    };
  }

  getSelectedElements(): HTMLElement[] {
    return this.interactionEngine.getSelectedElements();
  }

  selectElements(elements: HTMLElement[]): void {
    if (this.isEnabled) {
      this.interactionEngine.setSelection(elements);
    }
  }

  clearSelection(): void {
    if (this.isEnabled) {
      this.interactionEngine.clearSelection();
    }
  }

  // Cleanup

  destroy(): void {
    this.disable();
    this.persistenceManager.destroy();
    this.eventHandlers.clear();
    
    // Remove injected styles
    const injectedStyles = document.querySelector('#nh-canvas-critical-styles');
    if (injectedStyles) {
      injectedStyles.remove();
    }
  }
}

// Global instance management
let globalInstance: NHCanvas | null = null;

export const NHCanvasAPI = {
  create(config?: Partial<NHCanvasConfig>): NHCanvas {
    return new NHCanvas(config);
  },
  
  getGlobal(): NHCanvas {
    if (!globalInstance) {
      globalInstance = new NHCanvas();
    }
    return globalInstance;
  },
  
  enable(): Promise<void> {
    return this.getGlobal().enable();
  },
  
  disable(): void {
    return this.getGlobal().disable();
  },
  
  toggle(): void {
    return this.getGlobal().toggle();
  },
  
  exportJSON(): string {
    return this.getGlobal().exportJSON();
  },
  
  importJSON(json: string): Promise<void> {
    return this.getGlobal().importJSON(json);
  },
  
  reset(options: { scope: 'page' | 'site' }): Promise<void> {
    return this.getGlobal().resetLayout(options.scope);
  },
  
  addSelector(css: string): void {
    return this.getGlobal().addSelector(css);
  },
  
  blacklistSelector(css: string): void {
    return this.getGlobal().blacklistSelector(css);
  },
  
  on<T extends EventName>(eventName: T, handler: EventHandler<T>): void {
    return this.getGlobal().on(eventName, handler);
  },
  
  off<T extends EventName>(eventName: T, handler: EventHandler<T>): void {
    return this.getGlobal().off(eventName, handler);
  }
};

// Export both the class and the API
export default NHCanvas;
export { NHCanvas };

// Auto-setup global instance if in browser
if (typeof window !== 'undefined') {
  (window as any).NHCanvas = NHCanvasAPI;
}