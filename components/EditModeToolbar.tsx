import React, { useState } from 'react';
import { useDragDrop } from '../contexts/DragDropContext';
import { 
  EditIcon, 
  SaveIcon, 
  XIcon, 
  CopyIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  DeleteIcon,
  UploadIcon,
  CheckIcon
} from './icons';

interface EditModeToolbarProps {
  onToggleEditMode: () => void;
}

const EditModeToolbar: React.FC<EditModeToolbarProps> = ({ onToggleEditMode }) => {
  const { state, actions } = useDragDrop();
  const [showExportPanel, setShowExportPanel] = useState(false);
  const [exportCode, setExportCode] = useState('');

  const handleSaveChanges = () => {
    actions.saveChangesToCode();
    setShowExportPanel(true);
    generateExportCode();
  };

  const generateExportCode = () => {
    // Generate comprehensive code export
    const layoutCode = `// Updated component layout\nconst layout = ${JSON.stringify(state.layout, null, 2)};`;
    
    const itemsCode = Object.entries(state.items).map(([id, item]) => {
      return `// Item: ${id}\nconst ${id} = ${JSON.stringify(item, null, 2)};`;
    }).join('\n\n');

    const positionCSS = Object.entries(state.items)
      .filter(([_, item]) => item.position)
      .map(([id, item]) => {
        return `.draggable-${id} {\n  position: absolute;\n  left: ${item.position!.x}px;\n  top: ${item.position!.y}px;\n}`;
      }).join('\n\n');

    const fullExportCode = [
      '/* Auto-generated layout and position updates */',
      layoutCode,
      '',
      itemsCode,
      '',
      '/* CSS Position Updates */',
      positionCSS
    ].join('\n');

    setExportCode(fullExportCode);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(exportCode);
    alert('Code copied to clipboard!');
  };

  const clearAllPositions = () => {
    if (confirm('Clear all custom positions? This will reset all items to their default positions.')) {
      Object.keys(state.items).forEach(id => {
        if (state.items[id].position) {
          actions.updateItem(id, { position: undefined });
        }
      });
    }
  };

  const itemCount = Object.keys(state.items).length;
  const positionedItemCount = Object.values(state.items).filter(item => item.position).length;

  if (!state.isEditMode) {
    return (
      <button
        onClick={() => {
          actions.setEditMode(true);
          onToggleEditMode();
        }}
        className="fixed bottom-4 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-50"
        title="Enter edit mode (Ctrl+E)"
      >
        <EditIcon className="w-6 h-6" />
      </button>
    );
  }

  return (
    <>
      {/* Main Toolbar */}
      <div className="fixed top-4 right-4 bg-white border border-gray-300 rounded-lg shadow-lg p-3 z-50 min-w-80">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-semibold text-gray-800 flex items-center">
            <EditIcon className="w-5 h-5 mr-2 text-blue-600" />
            Edit Mode
          </h3>
          <button
            onClick={() => {
              actions.setEditMode(false);
              onToggleEditMode();
            }}
            className="p-1 hover:bg-gray-100 rounded"
            title="Exit edit mode (Ctrl+E)"
          >
            <XIcon className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
          <div className="bg-blue-50 p-2 rounded">
            <div className="text-blue-800 font-semibold">{itemCount}</div>
            <div className="text-blue-600">Total Items</div>
          </div>
          <div className="bg-green-50 p-2 rounded">
            <div className="text-green-800 font-semibold">{positionedItemCount}</div>
            <div className="text-green-600">Positioned</div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2">
          <button
            onClick={handleSaveChanges}
            className="w-full flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          >
            <SaveIcon className="w-4 h-4 mr-2" />
            Export Layout Changes
          </button>

          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={clearAllPositions}
              className="flex items-center justify-center px-3 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700 transition-colors text-sm"
            >
              <ArrowUpIcon className="w-4 h-4 mr-1" />
              Reset Positions
            </button>
            
            <button
              onClick={() => {
                // Add new section
                const newId = `section_${Date.now()}`;
                actions.addItem({
                  id: newId,
                  type: 'section',
                  content: { title: 'New Section', children: [] }
                });
              }}
              className="flex items-center justify-center px-3 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors text-sm"
            >
              <UploadIcon className="w-4 h-4 mr-1" />
              Add Section
            </button>
          </div>
        </div>

        {/* Help Text */}
        <div className="mt-4 pt-3 border-t border-gray-200 text-xs text-gray-600">
          <div className="space-y-1">
            <div>• Drag items with drag handles to reorder</div>
            <div>• Click and drag positioned items to move freely</div>
            <div>• Click text to edit inline</div>
            <div>• Click images to change source</div>
            <div>• Press Ctrl+E to toggle edit mode</div>
          </div>
        </div>
      </div>

      {/* Export Panel */}
      {showExportPanel && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-6 max-w-4xl max-h-[80vh] overflow-hidden flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-gray-800">
                Generated Layout Code
              </h3>
              <button
                onClick={() => setShowExportPanel(false)}
                className="p-1 hover:bg-gray-100 rounded"
              >
                <XIcon className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            <div className="flex-1 overflow-auto mb-4">
              <pre className="text-center bg-gray-50 p-4 rounded border text-sm font-mono overflow-auto">
                <code>{exportCode}</code>
              </pre>
            </div>

            <div className="flex justify-end gap-2">
              <button
                onClick={copyToClipboard}
                className="flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
              >
                <CopyIcon className="w-4 h-4 mr-2" />
                Copy to Clipboard
              </button>
              <button
                onClick={() => {
                  // In a real implementation, this would save to files
                  const blob = new Blob([exportCode], { type: 'text/plain' });
                  const url = URL.createObjectURL(blob);
                  const a = document.createElement('a');
                  a.href = url;
                  a.download = 'layout-updates.txt';
                  a.click();
                  URL.revokeObjectURL(url);
                }}
                className="flex items-center px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
              >
                <UploadIcon className="w-4 h-4 mr-2" />
                Download
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Canvas Grid (for positioning assistance) */}
      {state.isEditMode && (
        <div className="fixed inset-0 pointer-events-none z-10">
          <div 
            className="w-full h-full opacity-5"
            style={{
              backgroundImage: `
                linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
              `,
              backgroundSize: '20px 20px'
            }}
          />
        </div>
      )}
    </>
  );
};

export default EditModeToolbar;