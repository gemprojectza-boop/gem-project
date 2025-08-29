import React from 'react';
import { useDrag } from './SimpleDragDrop';
import type { ComponentDefinition } from './types';

const COMPONENT_LIBRARY: ComponentDefinition[] = [
  {
    type: 'text',
    name: 'Text',
    icon: '📝',
    category: 'Basic',
    defaultProps: {
      size: { width: 200, height: 60 },
      style: {
        fontSize: '16px',
        color: '#333333',
        fontFamily: 'Arial, sans-serif'
      }
    },
    properties: [
      { name: 'content', label: 'Text Content', type: 'text', defaultValue: 'Sample Text' },
      { name: 'fontSize', label: 'Font Size', type: 'range', min: 12, max: 48, step: 1, defaultValue: 16 },
      { name: 'color', label: 'Text Color', type: 'color', defaultValue: '#333333' },
      { name: 'fontWeight', label: 'Font Weight', type: 'select', options: [
        { value: 'normal', label: 'Normal' },
        { value: 'bold', label: 'Bold' },
        { value: '500', label: 'Medium' }
      ]}
    ]
  },
  {
    type: 'heading',
    name: 'Heading',
    icon: '📰',
    category: 'Basic',
    defaultProps: {
      size: { width: 300, height: 80 },
      style: {
        fontSize: '32px',
        fontWeight: 'bold',
        color: '#1f2937'
      }
    },
    properties: [
      { name: 'content', label: 'Heading Text', type: 'text', defaultValue: 'Heading' },
      { name: 'fontSize', label: 'Font Size', type: 'range', min: 16, max: 72, step: 2, defaultValue: 32 },
      { name: 'color', label: 'Text Color', type: 'color', defaultValue: '#1f2937' }
    ]
  },
  {
    type: 'button',
    name: 'Button',
    icon: '🔘',
    category: 'Interactive',
    defaultProps: {
      size: { width: 120, height: 40 },
      style: {
        backgroundColor: '#3b82f6',
        color: 'white',
        borderRadius: '6px'
      }
    },
    properties: [
      { name: 'content', label: 'Button Text', type: 'text', defaultValue: 'Button' },
      { name: 'backgroundColor', label: 'Background Color', type: 'color', defaultValue: '#3b82f6' },
      { name: 'color', label: 'Text Color', type: 'color', defaultValue: '#ffffff' },
      { name: 'borderRadius', label: 'Border Radius', type: 'range', min: 0, max: 20, step: 1, defaultValue: 6 }
    ]
  },
  {
    type: 'image',
    name: 'Image',
    icon: '🖼️',
    category: 'Media',
    defaultProps: {
      size: { width: 200, height: 150 },
      style: {
        borderRadius: '4px'
      }
    },
    properties: [
      { name: 'content', label: 'Image URL', type: 'text', defaultValue: 'https://via.placeholder.com/200x150' },
      { name: 'borderRadius', label: 'Border Radius', type: 'range', min: 0, max: 20, step: 1, defaultValue: 4 }
    ]
  },
  {
    type: 'container',
    name: 'Container',
    icon: '📦',
    category: 'Layout',
    defaultProps: {
      size: { width: 300, height: 200 },
      style: {
        backgroundColor: 'transparent',
        border: '1px solid #e5e7eb',
        borderRadius: '8px',
        padding: '16px'
      }
    },
    properties: [
      { name: 'backgroundColor', label: 'Background Color', type: 'color', defaultValue: '#ffffff' },
      { name: 'border', label: 'Border', type: 'text', defaultValue: '1px solid #e5e7eb' },
      { name: 'borderRadius', label: 'Border Radius', type: 'range', min: 0, max: 20, step: 1, defaultValue: 8 },
      { name: 'padding', label: 'Padding', type: 'text', defaultValue: '16px' }
    ]
  }
];

interface DraggableComponentItemProps {
  component: ComponentDefinition;
}

const DraggableComponentItem: React.FC<DraggableComponentItemProps> = ({ component }) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'COMPONENT',
    item: { type: component.type },
    collect: (monitor) => ({
      isDragging: monitor.isDragging
    })
  });

  return (
    <div
      ref={drag}
      className={`component-item p-3 border border-gray-200 rounded-lg cursor-grab hover:border-blue-300 hover:shadow-sm transition-all ${
        isDragging ? 'opacity-50' : ''
      }`}
    >
      <div className="flex items-center gap-3">
        <span className="text-2xl">{component.icon}</span>
        <div>
          <div className="font-medium text-sm text-gray-800">{component.name}</div>
          <div className="text-xs text-gray-500">{component.category}</div>
        </div>
      </div>
    </div>
  );
};

const ComponentLibrary: React.FC = () => {
  const categories = [...new Set(COMPONENT_LIBRARY.map(comp => comp.category))];

  return (
    <div className="component-library h-full flex flex-col">
      <div className="p-4 border-b border-gray-200">
        <h3 className="font-semibold text-gray-800 mb-2">🧰 Components</h3>
        <p className="text-sm text-gray-600">Drag components to the canvas</p>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        {categories.map(category => (
          <div key={category} className="mb-6">
            <h4 className="font-medium text-gray-700 mb-3 text-sm uppercase tracking-wide">
              {category}
            </h4>
            <div className="space-y-2">
              {COMPONENT_LIBRARY
                .filter(comp => comp.category === category)
                .map(component => (
                  <DraggableComponentItem
                    key={component.type}
                    component={component}
                  />
                ))
              }
            </div>
          </div>
        ))}
      </div>

      {/* Quick tips */}
      <div className="p-4 bg-blue-50 border-t border-blue-200">
        <div className="text-sm text-blue-800">
          <strong>💡 Tips:</strong>
          <ul className="mt-2 text-xs space-y-1">
            <li>• Drag components to canvas</li>
            <li>• Click to select components</li>
            <li>• Double-click text to edit</li>
            <li>• Use property panel to style</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ComponentLibrary;