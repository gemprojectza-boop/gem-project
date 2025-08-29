import React from 'react';
import { useBuilder } from './BuilderContext';

const PropertyPanel: React.FC = () => {
  const { state, actions } = useBuilder();
  
  const selectedComponent = state.components.find(
    comp => comp.id === state.selectedComponentId
  );

  const updateProperty = (property: string, value: any) => {
    if (!selectedComponent) return;
    
    if (property === 'content') {
      actions.updateComponent(selectedComponent.id, { content: value });
    } else if (property.includes('.')) {
      // Handle nested properties like 'position.x' or 'size.width'
      const [parent, child] = property.split('.');
      const currentValue = (selectedComponent as any)[parent] || {};
      actions.updateComponent(selectedComponent.id, {
        [parent]: { ...currentValue, [child]: value }
      });
    } else {
      // Handle style properties
      actions.updateComponent(selectedComponent.id, {
        style: { ...selectedComponent.style, [property]: value }
      });
    }
  };

  const renderPropertyInput = (property: string, value: any, type: string, options?: any) => {
    const commonClasses = "w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent";
    
    switch (type) {
      case 'text':
        return (
          <input
            type="text"
            value={value || ''}
            onChange={(e) => updateProperty(property, e.target.value)}
            className={commonClasses}
            placeholder="Enter text..."
          />
        );
      
      case 'number':
        return (
          <input
            type="number"
            value={value || 0}
            onChange={(e) => updateProperty(property, parseFloat(e.target.value) || 0)}
            className={commonClasses}
            min={options?.min}
            max={options?.max}
            step={options?.step || 1}
          />
        );
      
      case 'range':
        return (
          <div className="space-y-2">
            <input
              type="range"
              value={value || options?.min || 0}
              onChange={(e) => updateProperty(property, parseFloat(e.target.value))}
              min={options?.min || 0}
              max={options?.max || 100}
              step={options?.step || 1}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-xs text-gray-500">
              <span>{options?.min || 0}</span>
              <span className="font-medium">{value || options?.min || 0}{options?.unit || ''}</span>
              <span>{options?.max || 100}</span>
            </div>
          </div>
        );
      
      case 'color':
        return (
          <div className="flex gap-2">
            <input
              type="color"
              value={value || '#000000'}
              onChange={(e) => updateProperty(property, e.target.value)}
              className="w-12 h-10 border border-gray-300 rounded cursor-pointer"
            />
            <input
              type="text"
              value={value || '#000000'}
              onChange={(e) => updateProperty(property, e.target.value)}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="#000000"
            />
          </div>
        );
      
      case 'select':
        return (
          <select
            value={value || ''}
            onChange={(e) => updateProperty(property, e.target.value)}
            className={commonClasses}
          >
            {options?.map((option: any) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        );
      
      case 'boolean':
        return (
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={value || false}
              onChange={(e) => updateProperty(property, e.target.checked)}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
            />
            <span className="text-sm text-gray-700">Enabled</span>
          </label>
        );
      
      default:
        return (
          <input
            type="text"
            value={value || ''}
            onChange={(e) => updateProperty(property, e.target.value)}
            className={commonClasses}
          />
        );
    }
  };

  if (!selectedComponent) {
    return (
      <div className="property-panel h-full flex flex-col">
        <div className="p-4 border-b border-gray-200">
          <h3 className="font-semibold text-gray-800">⚙️ Properties</h3>
        </div>
        <div className="flex-1 flex items-center justify-center p-6">
          <div className="text-center text-gray-500">
            <div className="text-4xl mb-3">👆</div>
            <p className="text-sm">Select a component to edit its properties</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="property-panel h-full flex flex-col">
      <div className="p-4 border-b border-gray-200">
        <h3 className="font-semibold text-gray-800">⚙️ Properties</h3>
        <p className="text-sm text-gray-600 mt-1">
          {selectedComponent.type} component
        </p>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        {/* Content Properties */}
        {(selectedComponent.type === 'text' || selectedComponent.type === 'button' || selectedComponent.type === 'heading') && (
          <div className="property-group">
            <h4 className="font-medium text-gray-700 mb-3">📝 Content</h4>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Text Content
                </label>
                {renderPropertyInput('content', selectedComponent.content, 'text')}
              </div>
            </div>
          </div>
        )}

        {selectedComponent.type === 'image' && (
          <div className="property-group">
            <h4 className="font-medium text-gray-700 mb-3">🖼️ Image</h4>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Image URL
                </label>
                {renderPropertyInput('content', selectedComponent.content, 'text')}
              </div>
            </div>
          </div>
        )}

        {/* Position & Size */}
        <div className="property-group">
          <h4 className="font-medium text-gray-700 mb-3">📐 Position & Size</h4>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">X</label>
              {renderPropertyInput('position.x', selectedComponent.position.x, 'number')}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Y</label>
              {renderPropertyInput('position.y', selectedComponent.position.y, 'number')}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Width</label>
              {renderPropertyInput('size.width', selectedComponent.size.width, 'number', { min: 10 })}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Height</label>
              {renderPropertyInput('size.height', selectedComponent.size.height, 'number', { min: 10 })}
            </div>
          </div>
        </div>

        {/* Typography (for text components) */}
        {(selectedComponent.type === 'text' || selectedComponent.type === 'heading') && (
          <div className="property-group">
            <h4 className="font-medium text-gray-700 mb-3">🔤 Typography</h4>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">Font Size</label>
                {renderPropertyInput('fontSize', parseInt(selectedComponent.style.fontSize) || 16, 'range', { min: 12, max: 72, unit: 'px' })}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">Color</label>
                {renderPropertyInput('color', selectedComponent.style.color, 'color')}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">Font Weight</label>
                {renderPropertyInput('fontWeight', selectedComponent.style.fontWeight, 'select', [
                  { value: 'normal', label: 'Normal' },
                  { value: '500', label: 'Medium' },
                  { value: 'bold', label: 'Bold' }
                ])}
              </div>
            </div>
          </div>
        )}

        {/* Appearance */}
        <div className="property-group">
          <h4 className="font-medium text-gray-700 mb-3">🎨 Appearance</h4>
          <div className="space-y-3">
            {selectedComponent.type === 'button' && (
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">Background Color</label>
                {renderPropertyInput('backgroundColor', selectedComponent.style.backgroundColor, 'color')}
              </div>
            )}
            {selectedComponent.type === 'container' && (
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">Background Color</label>
                {renderPropertyInput('backgroundColor', selectedComponent.style.backgroundColor, 'color')}
              </div>
            )}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Border Radius</label>
              {renderPropertyInput('borderRadius', parseInt(selectedComponent.style.borderRadius) || 0, 'range', { min: 0, max: 50, unit: 'px' })}
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="property-group">
          <h4 className="font-medium text-gray-700 mb-3">🎯 Actions</h4>
          <div className="space-y-2">
            <button
              onClick={() => actions.deleteComponent(selectedComponent.id)}
              className="w-full px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors text-sm font-medium"
            >
              🗑️ Delete Component
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyPanel;