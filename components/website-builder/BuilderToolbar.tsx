import React from 'react';
import { useBuilder } from './BuilderContext';

const BuilderToolbar: React.FC = () => {
  const { state, actions } = useBuilder();

  const handleViewModeChange = (mode: 'desktop' | 'tablet' | 'mobile') => {
    const sizes = {
      desktop: { width: 1200, height: 800 },
      tablet: { width: 768, height: 1024 },
      mobile: { width: 375, height: 667 }
    };

    actions.setState(prev => ({
      ...prev,
      viewMode: mode,
      canvasSize: sizes[mode]
    }));
  };

  const toggleGrid = () => {
    actions.setState(prev => ({ ...prev, gridEnabled: !prev.gridEnabled }));
  };

  const toggleSnap = () => {
    actions.setState(prev => ({ ...prev, snapEnabled: !prev.snapEnabled }));
  };

  const canUndo = state.historyIndex > 0;
  const canRedo = state.historyIndex < state.history.length - 1;

  return (
    <div className="builder-toolbar bg-white border-b border-gray-300 px-4 py-2 flex items-center justify-between">
      <div className="flex items-center gap-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-2xl">🏗️</span>
          <h1 className="text-lg font-bold text-gray-800">Website Builder</h1>
        </div>

        {/* View Mode Selector */}
        <div className="flex items-center gap-1 bg-gray-100 rounded-lg p-1">
          {(['desktop', 'tablet', 'mobile'] as const).map((mode) => (
            <button
              key={mode}
              onClick={() => handleViewModeChange(mode)}
              className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                state.viewMode === mode
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              {mode === 'desktop' && '🖥️ Desktop'}
              {mode === 'tablet' && '📱 Tablet'}
              {mode === 'mobile' && '📱 Mobile'}
            </button>
          ))}
        </div>

        {/* Canvas Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggleGrid}
            className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
              state.gridEnabled
                ? 'bg-blue-100 text-blue-700'
                : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
            }`}
          >
            📐 Grid
          </button>
          <button
            onClick={toggleSnap}
            className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
              state.snapEnabled
                ? 'bg-blue-100 text-blue-700'
                : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
            }`}
          >
            🧲 Snap
          </button>
        </div>
      </div>

      <div className="flex items-center gap-4">
        {/* History Controls */}
        <div className="flex items-center gap-1">
          <button
            onClick={actions.undo}
            disabled={!canUndo}
            className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
              canUndo
                ? 'text-gray-700 hover:bg-gray-100'
                : 'text-gray-400 cursor-not-allowed'
            }`}
            title="Undo (Ctrl+Z)"
          >
            ↶ Undo
          </button>
          <button
            onClick={actions.redo}
            disabled={!canRedo}
            className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
              canRedo
                ? 'text-gray-700 hover:bg-gray-100'
                : 'text-gray-400 cursor-not-allowed'
            }`}
            title="Redo (Ctrl+Y)"
          >
            ↷ Redo
          </button>
        </div>

        {/* Component Count */}
        <div className="text-sm text-gray-600">
          {state.components.length} component{state.components.length !== 1 ? 's' : ''}
        </div>

        {/* Export Button */}
        <button
          onClick={actions.exportCode}
          disabled={state.components.length === 0}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            state.components.length > 0
              ? 'bg-green-600 text-white hover:bg-green-700'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          🚀 Export Code
        </button>

        {/* Preview Button */}
        <button
          onClick={() => {
            // Create preview window
            const previewWindow = window.open('', '_blank', 'width=800,height=600');
            if (previewWindow) {
              const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Preview</title>
  <style>
    body { margin: 0; padding: 0; font-family: Arial, sans-serif; }
    .website-container { position: relative; width: 100%; min-height: 100vh; }
  </style>
</head>
<body>
  <div class="website-container">
    ${state.components.map(comp => {
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
          return `<div style="${styleString}">${comp.content}</div>`;
        case 'button':
          return `<button style="${styleString}">${comp.content || 'Button'}</button>`;
        case 'image':
          return `<img src="${comp.content || 'https://via.placeholder.com/200x100'}" style="${styleString}" alt="Image" />`;
        default:
          return `<div style="${styleString}"></div>`;
      }
    }).join('\n')}
  </div>
</body>
</html>`;
              previewWindow.document.write(html);
              previewWindow.document.close();
            }
          }}
          disabled={state.components.length === 0}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            state.components.length > 0
              ? 'bg-blue-600 text-white hover:bg-blue-700'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          👁️ Preview
        </button>
      </div>
    </div>
  );
};

export default BuilderToolbar;