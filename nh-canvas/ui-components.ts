/**
 * NH Canvas - UI Components
 * Creates floating panels, toolbars, and controls
 */

import type { GridConfig, SnapConfig } from './types.js';
import { Utils } from './utils.js';

export interface UICallbacks {
  onToggle: (enabled: boolean) => void;
  onGridToggle: (enabled: boolean) => void;
  onSnapToggle: (enabled: boolean) => void;
  onGridStepChange: (step: number) => void;
  onExport: () => void;
  onImport: (json: string) => void;
  onReset: (scope: 'page' | 'site') => void;
  onUndo: () => void;
  onRedo: () => void;
  onAlign: (type: string) => void;
  onDistribute: (type: string) => void;
  onHelp: () => void;
}

export class UIComponents {
  private callbacks: UICallbacks;
  private isEnabled = false;
  
  private mainPanel: HTMLElement | null = null;
  private contextToolbar: HTMLElement | null = null;
  private helpModal: HTMLElement | null = null;
  
  private gridConfig: GridConfig = { enabled: true, step: 8 };
  private snapConfig: SnapConfig = { enabled: true, threshold: 6 };

  constructor(callbacks: UICallbacks) {
    this.callbacks = callbacks;
  }

  enable(): void {
    this.isEnabled = true;
    this.createMainPanel();
    this.createContextToolbar();
    this.updateControls();
  }

  disable(): void {
    this.isEnabled = false;
    this.removeMainPanel();
    this.removeContextToolbar();
    this.removeHelpModal();
  }

  updateGridConfig(config: GridConfig): void {
    this.gridConfig = config;
    this.updateControls();
  }

  updateSnapConfig(config: SnapConfig): void {
    this.snapConfig = config;
    this.updateControls();
  }

  updateSelection(elements: HTMLElement[]): void {
    this.updateContextToolbar(elements);
  }

  private createMainPanel(): void {
    if (this.mainPanel) return;

    this.mainPanel = Utils.createElementFromHTML(`
      <div class="nh-canvas-main-panel">
        <div class="nh-panel-header">
          <span class="nh-panel-title">Design Mode</span>
          <button class="nh-btn nh-btn-toggle" data-action="toggle">
            <span class="nh-toggle-text">ON</span>
          </button>
        </div>
        
        <div class="nh-panel-section">
          <div class="nh-control-group">
            <label class="nh-checkbox">
              <input type="checkbox" data-action="grid-toggle" ${this.gridConfig.enabled ? 'checked' : ''}>
              <span class="nh-checkmark"></span>
              Grid
            </label>
            <select class="nh-select" data-action="grid-step">
              <option value="4" ${this.gridConfig.step === 4 ? 'selected' : ''}>4px</option>
              <option value="8" ${this.gridConfig.step === 8 ? 'selected' : ''}>8px</option>
              <option value="10" ${this.gridConfig.step === 10 ? 'selected' : ''}>10px</option>
              <option value="12" ${this.gridConfig.step === 12 ? 'selected' : ''}>12px</option>
              <option value="16" ${this.gridConfig.step === 16 ? 'selected' : ''}>16px</option>
              <option value="20" ${this.gridConfig.step === 20 ? 'selected' : ''}>20px</option>
            </select>
          </div>
          
          <label class="nh-checkbox">
            <input type="checkbox" data-action="snap-toggle" ${this.snapConfig.enabled ? 'checked' : ''}>
            <span class="nh-checkmark"></span>
            Snap
          </label>
        </div>

        <div class="nh-panel-section">
          <div class="nh-button-group">
            <button class="nh-btn nh-btn-small" data-action="undo" title="Undo (Ctrl+Z)">
              <span class="nh-icon">↶</span>
            </button>
            <button class="nh-btn nh-btn-small" data-action="redo" title="Redo (Ctrl+Y)">
              <span class="nh-icon">↷</span>
            </button>
          </div>
        </div>

        <div class="nh-panel-section">
          <button class="nh-btn nh-btn-small nh-btn-full-width" data-action="export">
            Export Layout
          </button>
          <button class="nh-btn nh-btn-small nh-btn-full-width" data-action="import">
            Import Layout
          </button>
        </div>

        <div class="nh-panel-section">
          <div class="nh-button-group">
            <button class="nh-btn nh-btn-small" data-action="reset-page" title="Reset current page">
              Reset Page
            </button>
            <button class="nh-btn nh-btn-small nh-btn-danger" data-action="reset-site" title="Reset entire site">
              Reset All
            </button>
          </div>
        </div>

        <div class="nh-panel-section">
          <button class="nh-btn nh-btn-small nh-btn-full-width nh-btn-outline" data-action="help">
            Help & Shortcuts
          </button>
        </div>

        <input type="file" class="nh-file-input" data-file="import" accept=".json" style="display: none;">
      </div>
    `);

    this.mainPanel.style.cssText = `
      position: fixed;
      bottom: 20px;
      left: 20px;
      width: 200px;
      background: rgba(0, 0, 0, 0.9);
      color: white;
      border-radius: 8px;
      padding: 16px;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 12px;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
      /* backdrop-filter: blur(10px); - Removed to prevent image blur */
      border: 1px solid rgba(255, 255, 255, 0.1);
      z-index: 10002;
      user-select: none;
    `;

    this.addPanelEventListeners();
    document.body.appendChild(this.mainPanel);
  }

  private removeMainPanel(): void {
    if (this.mainPanel) {
      this.mainPanel.remove();
      this.mainPanel = null;
    }
  }

  private createContextToolbar(): void {
    if (this.contextToolbar) return;

    this.contextToolbar = Utils.createElementFromHTML(`
      <div class="nh-canvas-context-toolbar" style="display: none;">
        <div class="nh-toolbar-section">
          <div class="nh-input-group">
            <label>X:</label>
            <input type="number" class="nh-input nh-input-small" data-property="x" step="1">
            <label>Y:</label>
            <input type="number" class="nh-input nh-input-small" data-property="y" step="1">
          </div>
          <div class="nh-input-group">
            <label>W:</label>
            <input type="number" class="nh-input nh-input-small" data-property="width" step="1" min="1">
            <label>H:</label>
            <input type="number" class="nh-input nh-input-small" data-property="height" step="1" min="1">
          </div>
        </div>

        <div class="nh-toolbar-section">
          <div class="nh-button-group">
            <button class="nh-btn nh-btn-icon" data-action="align-left" title="Align Left">
              <span class="nh-icon">⫴</span>
            </button>
            <button class="nh-btn nh-btn-icon" data-action="align-center" title="Align Center">
              <span class="nh-icon">⫶</span>
            </button>
            <button class="nh-btn nh-btn-icon" data-action="align-right" title="Align Right">
              <span class="nh-icon">⫵</span>
            </button>
          </div>
          <div class="nh-button-group">
            <button class="nh-btn nh-btn-icon" data-action="align-top" title="Align Top">
              <span class="nh-icon">⫷</span>
            </button>
            <button class="nh-btn nh-btn-icon" data-action="align-middle" title="Align Middle">
              <span class="nh-icon">⫹</span>
            </button>
            <button class="nh-btn nh-btn-icon" data-action="align-bottom" title="Align Bottom">
              <span class="nh-icon">⫸</span>
            </button>
          </div>
        </div>

        <div class="nh-toolbar-section">
          <div class="nh-button-group">
            <button class="nh-btn nh-btn-icon" data-action="distribute-horizontal" title="Distribute Horizontally">
              <span class="nh-icon">⟷</span>
            </button>
            <button class="nh-btn nh-btn-icon" data-action="distribute-vertical" title="Distribute Vertically">
              <span class="nh-icon">⟵⟶</span>
            </button>
          </div>
        </div>

        <div class="nh-toolbar-section">
          <button class="nh-btn nh-btn-icon" data-action="lock" title="Lock/Unlock">
            <span class="nh-icon">🔒</span>
          </button>
          <button class="nh-btn nh-btn-icon" data-action="hide" title="Show/Hide">
            <span class="nh-icon">👁</span>
          </button>
          <button class="nh-btn nh-btn-icon" data-action="bring-forward" title="Bring Forward">
            <span class="nh-icon">⬆</span>
          </button>
          <button class="nh-btn nh-btn-icon" data-action="send-backward" title="Send Backward">
            <span class="nh-icon">⬇</span>
          </button>
        </div>

        <div class="nh-toolbar-arrow"></div>
      </div>
    `);

    this.contextToolbar.style.cssText = `
      position: absolute;
      background: rgba(0, 0, 0, 0.9);
      color: white;
      border-radius: 6px;
      padding: 8px;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 11px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
      /* backdrop-filter: blur(10px); - Removed to prevent image blur */
      border: 1px solid rgba(255, 255, 255, 0.1);
      z-index: 10003;
      user-select: none;
    `;

    this.addContextToolbarEventListeners();
    document.body.appendChild(this.contextToolbar);
  }

  private removeContextToolbar(): void {
    if (this.contextToolbar) {
      this.contextToolbar.remove();
      this.contextToolbar = null;
    }
  }

  private updateContextToolbar(selectedElements: HTMLElement[]): void {
    if (!this.contextToolbar) return;

    if (selectedElements.length === 0) {
      this.contextToolbar.style.display = 'none';
      return;
    }

    // Show toolbar and position it
    this.contextToolbar.style.display = 'block';
    
    if (selectedElements.length === 1) {
      this.updateSingleElementToolbar(selectedElements[0]);
    } else {
      this.updateMultiElementToolbar(selectedElements);
    }

    this.positionContextToolbar(selectedElements);
  }

  private updateSingleElementToolbar(element: HTMLElement): void {
    const rect = Utils.getElementRect(element);
    
    // Update position inputs
    const xInput = this.contextToolbar?.querySelector('[data-property="x"]') as HTMLInputElement;
    const yInput = this.contextToolbar?.querySelector('[data-property="y"]') as HTMLInputElement;
    const widthInput = this.contextToolbar?.querySelector('[data-property="width"]') as HTMLInputElement;
    const heightInput = this.contextToolbar?.querySelector('[data-property="height"]') as HTMLInputElement;

    if (xInput) xInput.value = Math.round(rect.x).toString();
    if (yInput) yInput.value = Math.round(rect.y).toString();
    if (widthInput) widthInput.value = Math.round(rect.width).toString();
    if (heightInput) heightInput.value = Math.round(rect.height).toString();

    // Show/hide relevant controls
    this.contextToolbar?.querySelectorAll('.nh-toolbar-section').forEach(section => {
      (section as HTMLElement).style.display = 'flex';
    });
  }

  private updateMultiElementToolbar(elements: HTMLElement[]): void {
    // For multiple elements, hide position/size inputs and focus on alignment
    const inputSection = this.contextToolbar?.querySelector('.nh-toolbar-section') as HTMLElement;
    if (inputSection) {
      inputSection.style.display = 'none';
    }

    // Show alignment and distribution controls
    this.contextToolbar?.querySelectorAll('.nh-toolbar-section').forEach((section, index) => {
      if (index > 0) {
        (section as HTMLElement).style.display = 'flex';
      }
    });
  }

  private positionContextToolbar(selectedElements: HTMLElement[]): void {
    if (!this.contextToolbar) return;

    // Calculate bounds of all selected elements
    const rects = selectedElements.map(el => Utils.getElementRect(el));
    const bounds = {
      left: Math.min(...rects.map(r => r.x)),
      top: Math.min(...rects.map(r => r.y)),
      right: Math.max(...rects.map(r => r.x + r.width)),
      bottom: Math.max(...rects.map(r => r.y + r.height))
    };

    const toolbarRect = this.contextToolbar.getBoundingClientRect();
    const viewport = Utils.getViewportRect();

    // Position above the selection if possible, otherwise below
    let x = bounds.left + (bounds.right - bounds.left) / 2 - toolbarRect.width / 2;
    let y = bounds.top - toolbarRect.height - 10;

    // Adjust if toolbar would go outside viewport
    x = Math.max(10, Math.min(x, viewport.width - toolbarRect.width - 10));
    
    if (y < 10) {
      y = bounds.bottom + 10;
    }

    this.contextToolbar.style.left = `${x}px`;
    this.contextToolbar.style.top = `${y}px`;
  }

  private createHelpModal(): void {
    if (this.helpModal) return;

    this.helpModal = Utils.createElementFromHTML(`
      <div class="nh-canvas-help-modal">
        <div class="nh-modal-backdrop"></div>
        <div class="nh-modal-content">
          <div class="nh-modal-header">
            <h3>NH Canvas - Keyboard Shortcuts</h3>
            <button class="nh-btn nh-btn-icon nh-modal-close" data-action="close-help">
              <span class="nh-icon">×</span>
            </button>
          </div>
          
          <div class="nh-modal-body">
            <div class="nh-shortcut-section">
              <h4>Selection</h4>
              <div class="nh-shortcut-list">
                <div class="nh-shortcut-item">
                  <span class="nh-shortcut-key">Click</span>
                  <span class="nh-shortcut-desc">Select element</span>
                </div>
                <div class="nh-shortcut-item">
                  <span class="nh-shortcut-key">Shift+Click</span>
                  <span class="nh-shortcut-desc">Add to selection</span>
                </div>
                <div class="nh-shortcut-item">
                  <span class="nh-shortcut-key">Ctrl/⌘+A</span>
                  <span class="nh-shortcut-desc">Select all</span>
                </div>
                <div class="nh-shortcut-item">
                  <span class="nh-shortcut-key">Escape</span>
                  <span class="nh-shortcut-desc">Clear selection</span>
                </div>
              </div>
            </div>

            <div class="nh-shortcut-section">
              <h4>Movement</h4>
              <div class="nh-shortcut-list">
                <div class="nh-shortcut-item">
                  <span class="nh-shortcut-key">Arrow Keys</span>
                  <span class="nh-shortcut-desc">Move 1px</span>
                </div>
                <div class="nh-shortcut-item">
                  <span class="nh-shortcut-key">Shift+Arrow</span>
                  <span class="nh-shortcut-desc">Move 10px</span>
                </div>
                <div class="nh-shortcut-item">
                  <span class="nh-shortcut-key">Drag</span>
                  <span class="nh-shortcut-desc">Move freely</span>
                </div>
              </div>
            </div>

            <div class="nh-shortcut-section">
              <h4>Actions</h4>
              <div class="nh-shortcut-list">
                <div class="nh-shortcut-item">
                  <span class="nh-shortcut-key">Ctrl/⌘+D</span>
                  <span class="nh-shortcut-desc">Duplicate</span>
                </div>
                <div class="nh-shortcut-item">
                  <span class="nh-shortcut-key">Delete</span>
                  <span class="nh-shortcut-desc">Remove element</span>
                </div>
                <div class="nh-shortcut-item">
                  <span class="nh-shortcut-key">Ctrl/⌘+Z</span>
                  <span class="nh-shortcut-desc">Undo</span>
                </div>
                <div class="nh-shortcut-item">
                  <span class="nh-shortcut-key">Ctrl/⌘+Y</span>
                  <span class="nh-shortcut-desc">Redo</span>
                </div>
              </div>
            </div>

            <div class="nh-shortcut-section">
              <h4>Tips</h4>
              <ul class="nh-tips-list">
                <li>Hold Shift while resizing to maintain aspect ratio</li>
                <li>Smart guides appear when elements align</li>
                <li>Grid snapping can be toggled for precise placement</li>
                <li>Layouts persist across page refreshes and navigation</li>
                <li>Use the context toolbar for alignment and distribution</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    `);

    this.helpModal.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 10004;
      display: none;
    `;

    this.addHelpModalEventListeners();
    document.body.appendChild(this.helpModal);
  }

  private removeHelpModal(): void {
    if (this.helpModal) {
      this.helpModal.remove();
      this.helpModal = null;
    }
  }

  private showHelp(): void {
    if (!this.helpModal) {
      this.createHelpModal();
    }
    if (this.helpModal) {
      this.helpModal.style.display = 'flex';
    }
  }

  private hideHelp(): void {
    if (this.helpModal) {
      this.helpModal.style.display = 'none';
    }
  }

  private addPanelEventListeners(): void {
    if (!this.mainPanel) return;

    this.mainPanel.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      const action = target.dataset.action || target.closest('[data-action]')?.getAttribute('data-action');
      
      if (!action) return;

      switch (action) {
        case 'toggle':
          this.callbacks.onToggle(!this.isEnabled);
          break;
        case 'grid-toggle':
          this.callbacks.onGridToggle((target as HTMLInputElement).checked);
          break;
        case 'snap-toggle':
          this.callbacks.onSnapToggle((target as HTMLInputElement).checked);
          break;
        case 'export':
          this.callbacks.onExport();
          break;
        case 'import':
          this.triggerFileImport();
          break;
        case 'reset-page':
          if (confirm('Reset layout for current page?')) {
            this.callbacks.onReset('page');
          }
          break;
        case 'reset-site':
          if (confirm('Reset layout for entire site? This cannot be undone.')) {
            this.callbacks.onReset('site');
          }
          break;
        case 'undo':
          this.callbacks.onUndo();
          break;
        case 'redo':
          this.callbacks.onRedo();
          break;
        case 'help':
          this.showHelp();
          break;
      }
    });

    this.mainPanel.addEventListener('change', (e) => {
      const target = e.target as HTMLElement;
      const action = target.dataset.action;
      
      if (action === 'grid-step') {
        const step = parseInt((target as HTMLSelectElement).value, 10);
        this.callbacks.onGridStepChange(step);
      }
    });

    // File import handler
    const fileInput = this.mainPanel.querySelector('[data-file="import"]') as HTMLInputElement;
    if (fileInput) {
      fileInput.addEventListener('change', (e) => {
        const file = (e.target as HTMLInputElement).files?.[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = (e) => {
            const json = e.target?.result as string;
            try {
              this.callbacks.onImport(json);
            } catch (error) {
              alert('Error importing layout: ' + (error as Error).message);
            }
          };
          reader.readAsText(file);
          fileInput.value = ''; // Clear input
        }
      });
    }
  }

  private addContextToolbarEventListeners(): void {
    if (!this.contextToolbar) return;

    this.contextToolbar.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      const action = target.dataset.action || target.closest('[data-action]')?.getAttribute('data-action');
      
      if (!action) return;

      // Handle alignment and distribution
      if (action.startsWith('align-') || action.startsWith('distribute-')) {
        this.callbacks.onAlign(action);
      } else {
        // Handle other actions like lock, hide, z-order
        console.log('Context action:', action);
      }
    });

    // Handle property changes
    this.contextToolbar.addEventListener('change', (e) => {
      const target = e.target as HTMLInputElement;
      const property = target.dataset.property;
      
      if (property && target.type === 'number') {
        // This would trigger element property updates
        console.log('Property change:', property, target.value);
      }
    });
  }

  private addHelpModalEventListeners(): void {
    if (!this.helpModal) return;

    this.helpModal.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      
      if (target.classList.contains('nh-modal-backdrop') || 
          target.dataset.action === 'close-help') {
        this.hideHelp();
      }
    });
  }

  private triggerFileImport(): void {
    const fileInput = this.mainPanel?.querySelector('[data-file="import"]') as HTMLInputElement;
    if (fileInput) {
      fileInput.click();
    }
  }

  private updateControls(): void {
    if (!this.mainPanel) return;

    // Update grid checkbox
    const gridCheckbox = this.mainPanel.querySelector('[data-action="grid-toggle"]') as HTMLInputElement;
    if (gridCheckbox) {
      gridCheckbox.checked = this.gridConfig.enabled;
    }

    // Update grid step select
    const gridSelect = this.mainPanel.querySelector('[data-action="grid-step"]') as HTMLSelectElement;
    if (gridSelect) {
      gridSelect.value = this.gridConfig.step.toString();
    }

    // Update snap checkbox
    const snapCheckbox = this.mainPanel.querySelector('[data-action="snap-toggle"]') as HTMLInputElement;
    if (snapCheckbox) {
      snapCheckbox.checked = this.snapConfig.enabled;
    }
  }

  showNotification(message: string, type: 'success' | 'error' | 'info' = 'info'): void {
    const notification = Utils.createElementFromHTML(`
      <div class="nh-notification nh-notification-${type}">
        ${message}
      </div>
    `);

    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      padding: 12px 16px;
      background: ${type === 'error' ? '#ff4757' : type === 'success' ? '#2ed573' : '#5352ed'};
      color: white;
      border-radius: 6px;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 14px;
      z-index: 10005;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      transform: translateX(100%);
      transition: transform 0.3s ease;
    `;

    document.body.appendChild(notification);

    // Animate in
    requestAnimationFrame(() => {
      notification.style.transform = 'translateX(0)';
    });

    // Auto remove after delay
    setTimeout(() => {
      notification.style.transform = 'translateX(100%)';
      setTimeout(() => {
        notification.remove();
      }, 300);
    }, 3000);
  }
}