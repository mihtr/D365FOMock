# D365FO Template Generator Guide

**Date**: 2025-11-21
**Purpose**: Step-by-step guide for creating new D365FO UI mockups using templates

---

## Quick Start

### 1. Choose Your Form Pattern

Refer to `form-patterns.md` to select the appropriate pattern:

| Need | Pattern | Template |
|------|---------|----------|
| Browse records | **List Page** | Use `customer-list-page.html` as base |
| Edit single record | **Details Master** | Coming soon |
| Create order/document | **Details Transaction** | Coming soon |
| Simple configuration | **Simple Details** | Coming soon |
| User input modal | **Dialog** | See component-library.md |

---

## Creating a List Page

### Step 1: Copy Base Template

```bash
cp examples/customer-list-page.html examples/your-list-page.html
cp examples/customer-list-page.js examples/your-list-page.js
```

### Step 2: Update HTML Structure

#### A. Update Page Title and Meta

```html
<title>Your Entity List - Finance and Operations</title>
```

#### B. Update Navigation Search Placeholder

```html
<input type="text" placeholder="your entity" id="globalSearch">
```

#### C. Update Page Title

```html
<h1 class="page-title">All your entities</h1>
```

#### D. Update Grid Columns

Replace the grid headers with your columns:

```html
<thead class="dyn-grid-header">
  <tr role="row">
    <th class="dyn-headerCell">
      <input type="checkbox" id="selectAll">
    </th>
    <th class="dyn-headerCell sortable" data-dyn-columnname="YourEntity_Column1">
      <div class="dyn-headerCellLabel">Column 1</div>
      <span class="sort-icon"></span>
    </th>
    <th class="dyn-headerCell sortable" data-dyn-columnname="YourEntity_Column2">
      <div class="dyn-headerCellLabel">Column 2</div>
      <span class="sort-icon"></span>
    </th>
    <!-- Add more columns -->
  </tr>
</thead>
```

#### E. Update Action Pane Buttons

Customize the buttons for your entity:

```html
<div class="actionPane-buttons">
  <button class="button dynamicsButton">
    <div class="button-container">
      <span class="button-commandRing">✏️</span>
      <span class="button-label">Edit</span>
    </div>
  </button>
  <!-- Add your custom buttons -->
</div>
```

#### F. Update Action Pane Tabs

Update tabs for your entity's action categories:

```html
<div class="appBarTab">
  <button class="appBarTab-header active">
    <span class="appBarTab-headerLabel">General</span>
  </button>
</div>
<div class="appBarTab">
  <button class="appBarTab-header">
    <span class="appBarTab-headerLabel">Process</span>
  </button>
</div>
<!-- Add your custom tabs -->
```

### Step 3: Update JavaScript Data

#### A. Define Your Data Model

```javascript
// Replace customerData with your entity data
const yourEntityData = [
    {
        id: '001',
        column1: 'Value 1',
        column2: 'Value 2',
        column3: 'Value 3'
    },
    {
        id: '002',
        column1: 'Value A',
        column2: 'Value B',
        column3: 'Value C'
    }
    // Add more records
];
```

#### B. Update Column Mapping

In the `sortColumn` function:

```javascript
const columnMap = {
    'Column 1': 'column1',
    'Column 2': 'column2',
    'Column 3': 'column3'
    // Map display names to data properties
};
```

#### C. Update Filter Fields

In `applyQuickFilter` function:

```javascript
switch(filterField) {
    case 'Column 1':
        fieldValue = entity.column1;
        break;
    case 'Column 2':
        fieldValue = entity.column2;
        break;
    // Add your columns
}
```

#### D. Update Grid Rendering

In `renderGrid` function:

```javascript
row.innerHTML = `
    <td class="checkbox-col">
        <input type="checkbox" ${selectedRows.has(entity.id) ? 'checked' : ''}>
    </td>
    <td><a href="#" class="dyn-hyperlink">${entity.column1}</a></td>
    <td>${entity.column2}</td>
    <td>${entity.column3}</td>
    <!-- Match your columns -->
`;
```

### Step 4: Link JavaScript

Update the script reference:

```html
<script src="your-list-page.js"></script>
```

### Step 5: Test

Open `your-list-page.html` in a browser and test:

- [ ] Grid displays with your data
- [ ] Columns are sortable
- [ ] Quick filter works
- [ ] Row selection works
- [ ] Action buttons display
- [ ] Flyout menu works

---

## Adding Interactive Components

### Adding a Flyout Menu

**1. Copy HTML from `component-library.md` (Flyout Menus section)**

**2. Insert into your page:**

```html
<div class="flyoutContainer">
  <!-- Paste flyout template here -->
</div>
```

**3. Add JavaScript (already included if you copied from customer-list-page.js)**

**4. Customize menu items:**

```html
<button class="button flyout-menuItem" role="menuitem" type="button">
  <div class="button-container">
    <span class="button-commandRing">🔧</span>
    <span class="button-label">Your Action</span>
  </div>
</button>
```

**5. Add action handler:**

```javascript
function handleMenuAction(actionLabel) {
    switch(actionLabel) {
        case 'Your Action':
            // Your logic here
            break;
    }
}
```

---

### Adding Form Fields

**1. Choose field type from `component-library.md` (Form Fields section)**

**2. Copy template:**

```html
<div class="form-field">
  <label for="fieldId">Field Label</label>
  <div class="dyn-container dyn-stringEdit">
    <input type="text" id="fieldId" class="dyn-field">
  </div>
</div>
```

**3. Add to your page**

**4. Wire up data binding (if needed):**

```javascript
document.getElementById('fieldId').value = yourData.fieldName;
```

---

### Adding a Dialog

**1. Copy dialog HTML from `component-library.md` (Dialogs section)**

**2. Add before closing `</body>` tag:**

```html
<!-- Dialog Overlay -->
<div class="dialog-overlay" style="display: none;"></div>

<!-- Dialog Container -->
<div class="dialog-container" ...>
  <!-- Dialog content -->
</div>
```

**3. Add CSS (already in d365fo-styles.css if you need to add):**

```css
.dialog-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 9998;
}

.dialog-container {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--d365-white);
    border: 1px solid var(--d365-gray);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    z-index: 9999;
    min-width: 400px;
    max-width: 600px;
}
```

**4. Copy JavaScript functions from `component-library.md`:**

```javascript
function openDialog() { /* ... */ }
function closeDialog() { /* ... */ }
```

**5. Trigger dialog:**

```javascript
// From button click
button.addEventListener('click', openDialog);
```

---

## Template Checklist

When creating a new page, ensure you have:

### Structure
- [ ] Correct DOCTYPE and HTML structure
- [ ] Linked `d365fo-styles.css`
- [ ] Linked your JavaScript file
- [ ] Navigation bar
- [ ] Breadcrumb navigation
- [ ] Sidebar (if needed)
- [ ] Main content area

### Action Pane
- [ ] Action buttons in `.actionPane-buttons`
- [ ] App bar tabs (`.appBarTab`)
- [ ] Buttons follow D365FO structure (button > div.button-container > spans)

### Content Area
- [ ] Page title
- [ ] Quick filter (if List Page)
- [ ] Main content (grid, form fields, etc.)
- [ ] Status bar (if needed)

### Interactivity
- [ ] Data defined in JavaScript
- [ ] Event listeners attached
- [ ] Functions implemented
- [ ] Error handling

### Accessibility
- [ ] ARIA attributes on interactive elements
- [ ] Keyboard navigation support
- [ ] Focus management
- [ ] Screen reader support

### Testing
- [ ] Visual appearance matches D365FO
- [ ] All buttons work
- [ ] Grid/form functionality works
- [ ] Responsive design works
- [ ] No JavaScript errors in console

---

## Component Reference Quick Links

### Common Components

**Buttons**: See `component-library.md` → Buttons section
- Standard button
- Primary button
- Icon-only button
- Disabled button

**Flyout Menus**: See `component-library.md` → Flyout Menus section
- Basic flyout
- Navigation bar flyout

**Form Fields**: See `component-library.md` → Form Fields section
- Text input
- Hyperlink
- Lookup
- Date picker
- Checkbox
- Dropdown
- Radio button

**Grids**: See `component-library.md` → Grids section
- Simple grid
- Grid row template

**Dialogs**: See `component-library.md` → Dialogs section
- Simple dialog
- Dialog JavaScript

**Message Bars**: See `component-library.md` → Message Bars section
- Info, warning, error, success messages

---

## Advanced Customization

### Custom Styling

If you need custom styling, add to the end of `d365fo-styles.css`:

```css
/* Custom styles for Your Page */
.your-custom-class {
    /* Your styles */
}
```

**Important**: Always use D365FO CSS variables for colors and spacing:
- Colors: `var(--d365-blue-primary)`, `var(--d365-gray-lighter)`, etc.
- Spacing: `var(--padding-sm)`, `var(--padding-md)`, `var(--padding-lg)`
- Font sizes: `var(--font-size-base)`, `var(--font-size-large)`

### Custom JavaScript

For complex interactions, create new functions in your JS file:

```javascript
function yourCustomFunction() {
    // Your logic
}

// Attach to event
document.getElementById('yourButton').addEventListener('click', yourCustomFunction);
```

---

## Form Pattern Templates

### Coming Soon

We'll be adding more complete templates for:

1. **Details Master** - Customer details, vendor details
2. **Details Transaction** - Sales order, purchase order
3. **Simple Details** - Parameter forms
4. **Workspace** - Activity dashboard
5. **Wizard** - Multi-step processes

For now, use `customer-list-page` as a starting point and refer to:
- `form-patterns.md` for structure guidelines
- `component-library.md` for individual components
- `interactive-components.md` for detailed component specifications

---

## Troubleshooting

### Grid not displaying
✓ Check JavaScript data array is defined
✓ Check `renderGrid()` is called in DOMContentLoaded
✓ Check grid columns match data properties

### Flyout menu not working
✓ Check `toggleFlyout` function is defined
✓ Check event listener is attached
✓ Check CSS for `.flyoutButton-flyOut` is included

### Buttons not styled correctly
✓ Check button structure: button > div.button-container > spans
✓ Check classes: `.button`, `.dynamicsButton`
✓ Check d365fo-styles.css is linked

### JavaScript errors
✓ Open browser console (F12)
✓ Check for undefined variables
✓ Check function names match
✓ Check event listeners are attached after DOM loads

---

## Example Workflow

### Creating a "Products List" Page

**1. Copy templates:**
```bash
cp examples/customer-list-page.html examples/products-list-page.html
cp examples/customer-list-page.js examples/products-list-page.js
```

**2. Update HTML:**
- Title: "All products - Finance and Operations"
- Page title: "All products"
- Grid columns: Product number, Product name, Category, Price, Stock
- Action tabs: Product, Inventory, Purchase, Sales

**3. Update JavaScript:**
```javascript
const productData = [
    {
        number: 'P-001',
        name: 'Laptop Computer',
        category: 'Electronics',
        price: 1200.00,
        stock: 45
    },
    // More products...
];
```

**4. Update column mapping and grid rendering**

**5. Link JS file:**
```html
<script src="products-list-page.js"></script>
```

**6. Test in browser**

---

## Next Steps

After creating your mockup:

1. **Test thoroughly** - All interactions, keyboard navigation, responsive design
2. **Document** - Add comments explaining custom logic
3. **Share** - Get feedback from stakeholders
4. **Iterate** - Refine based on feedback
5. **Use for development** - Hand off to developers as specification

---

## Resources

- **Form Patterns**: `form-patterns.md` - All D365FO form patterns
- **Components**: `component-library.md` - Reusable component templates
- **Interactive Components**: `interactive-components.md` - Detailed component specs
- **Example**: `examples/customer-list-page.html` - Complete working example
- **Styles**: `examples/d365fo-styles.css` - Complete CSS framework
- **Analysis**: `trainingpictures/HTML1-*.md` - Actual D365FO structure analysis

---

*Last Updated: 2025-11-21*
*Template generator guide for rapid D365FO mockup development*
