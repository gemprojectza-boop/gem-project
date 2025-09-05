/**
 * NH Canvas - Storage and Persistence Layer
 * Handles layout state persistence with localStorage and adapter pattern
 */

import type { 
  LayoutState, 
  LayoutEntry, 
  StorageAdapter, 
  GridConfig, 
  SnapConfig, 
  ElementSelector,
  LayoutRect,
  Breakpoint 
} from './types.js';
import { Utils } from './utils.js';

export class LocalStorageAdapter implements StorageAdapter {
  private readonly storageKey: string;
  
  constructor(storageKey = 'nh.layout.v1') {
    this.storageKey = `${window.location.host}.${storageKey}`;
  }

  async load(): Promise<LayoutState | null> {
    try {
      const stored = localStorage.getItem(this.storageKey);
      if (!stored) return null;

      const parsed = JSON.parse(stored);
      
      // Validate the structure
      if (!this.isValidLayoutState(parsed)) {
        console.warn('NH Canvas: Invalid layout state found in storage, resetting');
        await this.clear();
        return null;
      }

      return parsed;
    } catch (error) {
      console.error('NH Canvas: Error loading from localStorage:', error);
      return null;
    }
  }

  async save(state: LayoutState): Promise<void> {
    try {
      const serialized = JSON.stringify(state, null, 0);
      localStorage.setItem(this.storageKey, serialized);
    } catch (error) {
      console.error('NH Canvas: Error saving to localStorage:', error);
      throw error;
    }
  }

  async clear(): Promise<void> {
    try {
      localStorage.removeItem(this.storageKey);
    } catch (error) {
      console.error('NH Canvas: Error clearing localStorage:', error);
      throw error;
    }
  }

  private isValidLayoutState(obj: any): obj is LayoutState {
    return (
      obj &&
      typeof obj.siteVersion === 'string' &&
      Array.isArray(obj.entries) &&
      obj.grid &&
      typeof obj.grid.enabled === 'boolean' &&
      typeof obj.grid.step === 'number' &&
      obj.snap &&
      typeof obj.snap.enabled === 'boolean' &&
      typeof obj.snap.threshold === 'number'
    );
  }
}

export class HistoryManager {
  private history: Array<{ state: LayoutState; timestamp: number }> = [];
  private currentIndex = -1;
  private maxHistorySize: number;

  constructor(maxSize = 100) {
    this.maxHistorySize = maxSize;
  }

  push(state: LayoutState): void {
    const entry = {
      state: Utils.deepClone(state),
      timestamp: Date.now()
    };

    // Remove any entries after current index (when undoing then making new changes)
    if (this.currentIndex < this.history.length - 1) {
      this.history = this.history.slice(0, this.currentIndex + 1);
    }

    this.history.push(entry);
    this.currentIndex++;

    // Trim history if too large
    if (this.history.length > this.maxHistorySize) {
      this.history = this.history.slice(-this.maxHistorySize);
      this.currentIndex = this.history.length - 1;
    }
  }

  canUndo(): boolean {
    return this.currentIndex > 0;
  }

  canRedo(): boolean {
    return this.currentIndex < this.history.length - 1;
  }

  undo(): LayoutState | null {
    if (!this.canUndo()) return null;

    this.currentIndex--;
    return Utils.deepClone(this.history[this.currentIndex].state);
  }

  redo(): LayoutState | null {
    if (!this.canRedo()) return null;

    this.currentIndex++;
    return Utils.deepClone(this.history[this.currentIndex].state);
  }

  clear(): void {
    this.history = [];
    this.currentIndex = -1;
  }

  getStats(): { total: number; current: number; canUndo: boolean; canRedo: boolean } {
    return {
      total: this.history.length,
      current: this.currentIndex,
      canUndo: this.canUndo(),
      canRedo: this.canRedo()
    };
  }
}

export class PersistenceManager {
  private adapter: StorageAdapter;
  private historyManager: HistoryManager;
  private currentState: LayoutState;
  private autoSaveEnabled = true;
  private autoSaveDelay = 300;
  private autoSaveTimer: number | null = null;
  private isDirty = false;

  constructor(adapter?: StorageAdapter, historySize = 100) {
    this.adapter = adapter || new LocalStorageAdapter();
    this.historyManager = new HistoryManager(historySize);
    this.currentState = this.createDefaultState();
  }

  private createDefaultState(): LayoutState {
    return {
      siteVersion: '1.0.0',
      entries: [],
      grid: { enabled: true, step: 8 },
      snap: { enabled: true, threshold: 6 }
    };
  }

  async initialize(): Promise<void> {
    try {
      const loadedState = await this.adapter.load();
      if (loadedState) {
        this.currentState = loadedState;
        this.validateAndCleanupEntries();
      }
      
      // Push initial state to history
      this.historyManager.push(this.currentState);
    } catch (error) {
      console.error('NH Canvas: Error initializing persistence:', error);
      this.currentState = this.createDefaultState();
    }
  }

  private validateAndCleanupEntries(): void {
    // Remove entries for elements that no longer exist
    const validEntries = this.currentState.entries.filter(entry => {
      const elements = Utils.querySelectorAll(entry.selector);
      return elements.length > 0;
    });

    if (validEntries.length !== this.currentState.entries.length) {
      this.currentState.entries = validEntries;
      this.markDirty();
    }
  }

  getState(): LayoutState {
    return Utils.deepClone(this.currentState);
  }

  updateElement(element: HTMLElement, rect: LayoutRect): void {
    const selector = Utils.generateSelector(element);
    const page = Utils.getPageIdentifier();

    const existingIndex = this.currentState.entries.findIndex(
      entry => this.selectorsMatch(entry.selector, selector) && 
               (entry.page === page || !entry.page)
    );

    const newEntry: LayoutEntry = {
      selector,
      page,
      rect: Utils.deepClone(rect)
    };

    if (existingIndex !== -1) {
      this.currentState.entries[existingIndex] = newEntry;
    } else {
      this.currentState.entries.push(newEntry);
    }

    this.markDirty();
  }

  removeElement(element: HTMLElement): void {
    const selector = Utils.generateSelector(element);
    const page = Utils.getPageIdentifier();

    this.currentState.entries = this.currentState.entries.filter(
      entry => !this.selectorsMatch(entry.selector, selector) || 
               (entry.page && entry.page !== page)
    );

    this.markDirty();
  }

  getElementLayout(element: HTMLElement): LayoutRect | null {
    const selector = Utils.generateSelector(element);
    const page = Utils.getPageIdentifier();

    // Look for page-specific entry first
    let entry = this.currentState.entries.find(
      e => this.selectorsMatch(e.selector, selector) && e.page === page
    );

    // Fall back to global entry
    if (!entry) {
      entry = this.currentState.entries.find(
        e => this.selectorsMatch(e.selector, selector) && !e.page
      );
    }

    return entry ? Utils.deepClone(entry.rect) : null;
  }

  getEntriesForPage(page?: string): LayoutEntry[] {
    const currentPage = page || Utils.getPageIdentifier();
    return this.currentState.entries
      .filter(entry => entry.page === currentPage || !entry.page)
      .map(entry => Utils.deepClone(entry));
  }

  getAllEntries(): LayoutEntry[] {
    return Utils.deepClone(this.currentState.entries);
  }

  setGridConfig(config: Partial<GridConfig>): void {
    this.currentState.grid = { ...this.currentState.grid, ...config };
    this.markDirty();
  }

  getGridConfig(): GridConfig {
    return Utils.deepClone(this.currentState.grid);
  }

  setSnapConfig(config: Partial<SnapConfig>): void {
    this.currentState.snap = { ...this.currentState.snap, ...config };
    this.markDirty();
  }

  getSnapConfig(): SnapConfig {
    return Utils.deepClone(this.currentState.snap);
  }

  private selectorsMatch(selector1: ElementSelector, selector2: ElementSelector): boolean {
    return selector1.strategy === selector2.strategy && 
           selector1.value === selector2.value;
  }

  private markDirty(): void {
    this.isDirty = true;
    this.scheduleAutoSave();
  }

  private scheduleAutoSave(): void {
    if (!this.autoSaveEnabled) return;

    if (this.autoSaveTimer) {
      clearTimeout(this.autoSaveTimer);
    }

    this.autoSaveTimer = window.setTimeout(() => {
      this.save();
    }, this.autoSaveDelay);
  }

  async save(force = false): Promise<void> {
    if (!this.isDirty && !force) return;

    try {
      // Add to history before saving
      this.historyManager.push(this.currentState);

      await this.adapter.save(this.currentState);
      this.isDirty = false;
      
      if (this.autoSaveTimer) {
        clearTimeout(this.autoSaveTimer);
        this.autoSaveTimer = null;
      }

      this.dispatchSaveEvent();
    } catch (error) {
      console.error('NH Canvas: Error saving state:', error);
      throw error;
    }
  }

  async reset(scope: 'page' | 'site' = 'page'): Promise<void> {
    if (scope === 'page') {
      const currentPage = Utils.getPageIdentifier();
      this.currentState.entries = this.currentState.entries.filter(
        entry => entry.page !== currentPage
      );
    } else {
      this.currentState = this.createDefaultState();
    }

    this.markDirty();
    await this.save(true);
    
    this.dispatchResetEvent(scope);
  }

  exportJSON(): string {
    return JSON.stringify(this.currentState, null, 2);
  }

  async importJSON(json: string): Promise<void> {
    try {
      const imported = JSON.parse(json);
      
      if (!this.isValidImportData(imported)) {
        throw new Error('Invalid layout data format');
      }

      this.currentState = imported;
      await this.save(true);
      
      this.dispatchImportEvent();
    } catch (error) {
      console.error('NH Canvas: Error importing layout:', error);
      throw new Error('Failed to import layout: ' + (error as Error).message);
    }
  }

  private isValidImportData(data: any): data is LayoutState {
    try {
      return (
        data &&
        typeof data.siteVersion === 'string' &&
        Array.isArray(data.entries) &&
        data.grid &&
        typeof data.grid.enabled === 'boolean' &&
        typeof data.grid.step === 'number' &&
        data.snap &&
        typeof data.snap.enabled === 'boolean' &&
        typeof data.snap.threshold === 'number'
      );
    } catch {
      return false;
    }
  }

  undo(): boolean {
    const previousState = this.historyManager.undo();
    if (previousState) {
      this.currentState = previousState;
      this.markDirty();
      this.dispatchUndoEvent();
      return true;
    }
    return false;
  }

  redo(): boolean {
    const nextState = this.historyManager.redo();
    if (nextState) {
      this.currentState = nextState;
      this.markDirty();
      this.dispatchRedoEvent();
      return true;
    }
    return false;
  }

  canUndo(): boolean {
    return this.historyManager.canUndo();
  }

  canRedo(): boolean {
    return this.historyManager.canRedo();
  }

  getHistoryStats() {
    return this.historyManager.getStats();
  }

  setAutoSave(enabled: boolean, delay = 300): void {
    this.autoSaveEnabled = enabled;
    this.autoSaveDelay = delay;
  }

  isDirtyState(): boolean {
    return this.isDirty;
  }

  getStats(): {
    totalEntries: number;
    pageEntries: number;
    globalEntries: number;
    isDirty: boolean;
    historyStats: ReturnType<HistoryManager['getStats']>;
  } {
    const currentPage = Utils.getPageIdentifier();
    const pageEntries = this.currentState.entries.filter(e => e.page === currentPage).length;
    const globalEntries = this.currentState.entries.filter(e => !e.page).length;

    return {
      totalEntries: this.currentState.entries.length,
      pageEntries,
      globalEntries,
      isDirty: this.isDirty,
      historyStats: this.historyManager.getStats()
    };
  }

  // Event dispatching
  private dispatchSaveEvent(): void {
    window.dispatchEvent(new CustomEvent('nh-canvas:state-saved', {
      detail: { state: this.getState() }
    }));
  }

  private dispatchResetEvent(scope: string): void {
    window.dispatchEvent(new CustomEvent('nh-canvas:state-reset', {
      detail: { scope }
    }));
  }

  private dispatchImportEvent(): void {
    window.dispatchEvent(new CustomEvent('nh-canvas:state-imported', {
      detail: { state: this.getState() }
    }));
  }

  private dispatchUndoEvent(): void {
    window.dispatchEvent(new CustomEvent('nh-canvas:undo', {
      detail: { state: this.getState() }
    }));
  }

  private dispatchRedoEvent(): void {
    window.dispatchEvent(new CustomEvent('nh-canvas:redo', {
      detail: { state: this.getState() }
    }));
  }

  // Cleanup
  destroy(): void {
    if (this.autoSaveTimer) {
      clearTimeout(this.autoSaveTimer);
      this.autoSaveTimer = null;
    }
    this.historyManager.clear();
  }
}