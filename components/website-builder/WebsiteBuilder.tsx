import React, { useState, useCallback, useRef } from 'react';
import { SimpleDragProvider } from './SimpleDragDrop';
import BuilderCanvas from './BuilderCanvas';
import ComponentLibrary from './ComponentLibrary';
import PropertyPanel from './PropertyPanel';
import BuilderToolbar from './BuilderToolbar';
import { BuilderProvider } from './BuilderContext';
import type { BuilderComponent, BuilderState } from './types';

interface WebsiteBuilderProps {
  isEditMode: boolean;
  onToggleEditMode: () => void;
}

const WebsiteBuilder: React.FC<WebsiteBuilderProps> = ({ isEditMode, onToggleEditMode }) => {
  const [builderState, setBuilderState] = useState<BuilderState>({
    components: [],
    selectedComponentId: null,
    canvasSize: { width: 1200, height: 800 },
    viewMode: 'desktop',
    gridEnabled: true,
    snapEnabled: true,
    history: [],
    historyIndex: -1
  });

  const canvasRef = useRef<HTMLDivElement>(null);

  const addComponent = useCallback((type: string, position: { x: number; y: number }) => {
    const newComponent: BuilderComponent = {
      id: `${type}_${Date.now()}`,
      type,
      position,
      size: { width: 200, height: 100 },
      style: {},
      content: type === 'text' ? 'Sample Text' : '',
      children: []
    };

    setBuilderState(prev => ({
      ...prev,
      components: [...prev.components, newComponent],
      selectedComponentId: newComponent.id,
      history: [...prev.history.slice(0, prev.historyIndex + 1), { ...prev, components: [...prev.components, newComponent] }],
      historyIndex: prev.historyIndex + 1
    }));
  }, []);

  const updateComponent = useCallback((id: string, updates: Partial<BuilderComponent>) => {
    setBuilderState(prev => {
      const newComponents = prev.components.map(comp => 
        comp.id === id ? { ...comp, ...updates } : comp
      );
      
      return {
        ...prev,
        components: newComponents,
        history: [...prev.history.slice(0, prev.historyIndex + 1), { ...prev, components: newComponents }],
        historyIndex: prev.historyIndex + 1
      };
    });
  }, []);

  const selectComponent = useCallback((id: string | null) => {
    setBuilderState(prev => ({ ...prev, selectedComponentId: id }));
  }, []);

  const deleteComponent = useCallback((id: string) => {
    setBuilderState(prev => {
      const newComponents = prev.components.filter(comp => comp.id !== id);
      return {
        ...prev,
        components: newComponents,
        selectedComponentId: prev.selectedComponentId === id ? null : prev.selectedComponentId,
        history: [...prev.history.slice(0, prev.historyIndex + 1), { ...prev, components: newComponents }],
        historyIndex: prev.historyIndex + 1
      };
    });
  }, []);

  const undo = useCallback(() => {
    if (builderState.historyIndex > 0) {
      const prevState = builderState.history[builderState.historyIndex - 1];
      setBuilderState(prev => ({
        ...prev,
        components: prevState.components,
        historyIndex: prev.historyIndex - 1
      }));
    }
  }, [builderState.historyIndex, builderState.history]);

  const redo = useCallback(() => {
    if (builderState.historyIndex < builderState.history.length - 1) {
      const nextState = builderState.history[builderState.historyIndex + 1];
      setBuilderState(prev => ({
        ...prev,
        components: nextState.components,
        historyIndex: prev.historyIndex + 1
      }));
    }
  }, [builderState.historyIndex, builderState.history]);

  const exportCode = useCallback(() => {
    // Generate clean HTML/CSS code from components
    const generateHTML = () => {
      const componentToHTML = (comp: BuilderComponent): string => {
        const styles = {
          position: 'absolute',
          left: `${comp.position.x}px`,
          top: `${comp.position.y}px`,
          width: `${comp.size.width}px`,
          height: `${comp.size.height}px`,
          ...comp.style
        };

        const styleString = Object.entries(styles)
          .map(([key, value]) => `${key.replace(/([A-Z])/g, '-$1').toLowerCase()}: ${value}`)
          .join('; ');

        switch (comp.type) {
          case 'text':
            return `<div id="${comp.id}" style="${styleString}">${comp.content}</div>`;
          case 'button':
            return `<button id="${comp.id}" style="${styleString}">${comp.content || 'Button'}</button>`;
          case 'image':
            return `<img id="${comp.id}" src="${comp.content || 'https://via.placeholder.com/200x100'}" style="${styleString}" alt="Image" />`;
          case 'container':
            const childrenHTML = comp.children?.map(componentToHTML).join('\n') || '';
            return `<div id="${comp.id}" style="${styleString}">${childrenHTML}</div>`;
          default:
            return `<div id="${comp.id}" style="${styleString}"></div>`;
        }
      };

      const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Generated Website</title>
  <style>
    body { margin: 0; padding: 0; font-family: Arial, sans-serif; }
    .website-container { position: relative; width: 100%; min-height: 100vh; }
  </style>
</head>
<body>
  <div class="website-container">
    ${builderState.components.map(componentToHTML).join('\n    ')}
  </div>
</body>
</html>`;

      return html;
    };

    const htmlCode = generateHTML();
    
    // Show export modal
    const modal = document.createElement('div');
    modal.style.cssText = `
      position: fixed; top: 0; left: 0; width: 100%; height: 100%;
      background: rgba(0,0,0,0.8); z-index: 999999;
      display: flex; align-items: center; justify-content: center;
    `;
    
    modal.innerHTML = `
      <div style="background: white; padding: 30px; border-radius: 12px; max-width: 80%; max-height: 80%; overflow: auto; box-shadow: 0 20px 25px rgba(0,0,0,0.1);">
        <h2 style="margin: 0 0 20px 0; color: #333;">🚀 Export Website Code</h2>
        <p className="text-center" style="color: #666; margin-bottom: 15px;">Your website has been generated as clean HTML/CSS code:</p>
        <textarea readonly style="width: 100%; height: 400px; font-family: monospace; font-size: 12px; padding: 10px; border: 1px solid #ddd; border-radius: 4px; background: #f9f9f9;">${htmlCode}</textarea>
        <div style="margin-top: 20px; display: flex; gap: 10px; justify-content: flex-end;">
          <button onclick="navigator.clipboard.writeText(\`${htmlCode.replace(/`/g, '\\`')}\`).then(() => alert('Code copied to clipboard!')).catch(() => alert('Copy failed'))" 
                  style="padding: 10px 20px; background: #00AEEF; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: 500;">
            📋 Copy Code
          </button>
          <button onclick="this.parentElement.parentElement.parentElement.remove()" 
                  style="padding: 10px 20px; background: #E30613; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: 500;">
            Close
          </button>
        </div>
        <div style="margin-top: 15px; padding: 15px; background: #f0f9ff; border-radius: 6px; border-left: 4px solid #00AEEF;">
          <p className="text-center" style="margin: 0; font-size: 14px; color: #0369a1;">
            <strong>📝 Usage:</strong> Save this code as an HTML file and open it in any browser. The code is production-ready and optimized for performance.
          </p>
        </div>
      </div>
    `;
    
    document.body.appendChild(modal);
  }, [builderState.components]);

  if (!isEditMode) return null;

  return (
    <BuilderProvider value={{
      state: builderState,
      actions: {
        addComponent,
        updateComponent,
        selectComponent,
        deleteComponent,
        undo,
        redo,
        exportCode,
        setState: setBuilderState
      }
    }}>
      <SimpleDragProvider>
        <div className="website-builder fixed inset-0 z-50 bg-gray-100 flex flex-col">
          {/* Toolbar */}
          <BuilderToolbar />
          
          <div className="flex-1 flex overflow-hidden">
            {/* Component Library */}
            <div className="w-64 bg-white border-r border-gray-300 overflow-y-auto">
              <ComponentLibrary />
            </div>
            
            {/* Canvas */}
            <div className="flex-1 flex flex-col">
              <div className="flex-1 p-4 overflow-auto">
                <BuilderCanvas ref={canvasRef} />
              </div>
            </div>
            
            {/* Property Panel */}
            <div className="w-80 bg-white border-l border-gray-300 overflow-y-auto">
              <PropertyPanel />
            </div>
          </div>
        </div>
      </SimpleDragProvider>
    </BuilderProvider>
  );
};

export default WebsiteBuilder;