# Canvas-Based Drag & Drop Editing Mode

This document describes the new canvas-based drag and drop editing functionality that allows you to visually edit your website by dragging and dropping components, editing text inline, and changing images.

## Features

### 🎯 Drag & Drop Components
- **Section Reordering**: Drag sections up and down to reorder them
- **Free-form Positioning**: Some components can be positioned anywhere on the canvas
- **Visual Drop Zones**: Clear visual feedback showing where items can be dropped
- **Smart Collision Detection**: Prevents overlapping and guides placement

### ✏️ Inline Text Editing
- **Click to Edit**: Click any text to edit it inline
- **Live Preview**: See changes immediately as you type
- **Keyboard Shortcuts**: 
  - Enter to save (single line)
  - Ctrl+Enter to save (multi-line)
  - Escape to cancel

### 🖼️ Image Management
- **Click to Change**: Click any image to change its source
- **URL Input**: Paste image URLs directly
- **Quick Gallery**: Choose from predefined images
- **Alt Text Editing**: Update accessibility descriptions

### 📐 Position Tracking
- **Automatic Code Generation**: All changes are tracked and generate code updates
- **CSS Position Updates**: Free-form positioned elements generate CSS
- **Layout Persistence**: Changes can be exported and applied to your codebase

## How to Use

### Entering Edit Mode
1. **Keyboard Shortcut**: Press `Ctrl+E` to toggle edit mode
2. **UI Button**: Click the blue edit button in the bottom-right corner

### In Edit Mode
- **Blue outlines** appear around editable elements
- **Drag handles** appear for moveable items
- **Edit controls** show on hover (edit, delete buttons)
- **Grid background** appears to help with positioning

### Drag and Drop
1. **Hover** over a section or component
2. **Click and hold** the drag handle (arrows icon)
3. **Drag** to reorder or reposition
4. **Drop** in the desired location

### Text Editing
1. **Click** on any text element
2. **Type** your changes
3. **Save** with Enter or click the checkmark
4. **Cancel** with Escape or click the X

### Image Editing
1. **Click** on any image
2. **Paste URL** in the input field or choose from quick gallery
3. **Update alt text** for accessibility
4. **Save** to apply changes

### Saving Changes
1. Click **"Export Layout Changes"** in the edit toolbar
2. **Copy the generated code** from the modal
3. **Apply the code** to your source files
4. Changes include:
   - Layout reordering
   - Position updates
   - Content changes
   - CSS for positioned elements

## Components

### Core Components
- `DragDropProvider` - Main context provider for drag and drop state
- `DraggableWrapper` - Makes any component draggable
- `DropZone` - Defines areas where items can be dropped
- `EditableText` - Inline text editing component
- `EditableImage` - Image changing component
- `EditModeToolbar` - Main editing UI controls

### Integration
```tsx
import { DragDropProvider } from './contexts/DragDropContext';
import DraggableWrapper from './components/DraggableWrapper';
import EditableText from './components/EditableText';
import EditableImage from './components/EditableImage';

function App() {
  return (
    <DragDropProvider>
      <DraggableWrapper id="my-section" type="section">
        <div>
          <EditableText 
            text="Click to edit me"
            onTextChange={(newText) => console.log(newText)}
          />
          <EditableImage
            src="https://example.com/image.jpg"
            alt="Example image"
            onImageChange={(newSrc, newAlt) => console.log(newSrc, newAlt)}
          />
        </div>
      </DraggableWrapper>
    </DragDropProvider>
  );
}
```

## Technical Details

### Drag and Drop Library
- Uses `@dnd-kit` for accessible drag and drop
- Supports keyboard navigation
- Touch-friendly on mobile devices

### State Management
- Centralized state in `DragDropContext`
- Tracks all draggable items and positions
- Generates code for persistence

### Code Generation
- Automatic layout code generation
- CSS for absolute positioning
- JSX structure updates
- Ready-to-apply code snippets

### Performance
- Optimized re-renders with React context
- Efficient collision detection
- Smooth animations and transitions

## Browser Support
- Chrome/Edge 88+
- Firefox 85+
- Safari 14+
- Mobile browsers supported

## Development

### Running in Development
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

The edit mode automatically detects development vs production and adjusts accordingly.

## Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Ctrl+E` | Toggle edit mode |
| `Enter` | Save text changes (single line) |
| `Ctrl+Enter` | Save text changes (multi-line) |
| `Escape` | Cancel editing |
| `Delete` | Delete selected element |
| `Ctrl+Z` | Undo (planned feature) |

## Tips

1. **Start Simple**: Begin by reordering sections, then try text editing
2. **Use Grid**: The background grid helps align elements precisely
3. **Save Frequently**: Export changes regularly to avoid losing work
4. **Test on Mobile**: Edit mode works on touch devices too
5. **Check Accessibility**: Update alt text when changing images

## Troubleshooting

### Changes Not Saving
- Make sure you click "Export Layout Changes"
- Copy the generated code to your source files
- Refresh the page to see persisted changes

### Drag Not Working
- Check that edit mode is enabled (Ctrl+E)
- Ensure the element has a DraggableWrapper
- Try clicking the drag handle directly

### Text Editing Issues
- Click directly on the text, not surrounding elements
- Use keyboard shortcuts to save/cancel
- Check for JavaScript errors in console

## Future Enhancements
- [ ] Undo/Redo functionality
- [ ] Component library palette
- [ ] Advanced positioning tools
- [ ] Collaborative editing
- [ ] Version history
- [ ] Template system
- [ ] Real-time preview
- [ ] Mobile-optimized controls

---

*For technical support or feature requests, please check the repository issues or create a new one.*