# D365FO Interactive Components Documentation

**Date**: 2025-11-21
**Source**: HTML1.html analysis + Microsoft Learn documentation
**Purpose**: Complete reference for all interactive UI components in D365FO

---

## Table of Contents

1. [Flyout/Dropdown Menus](#flyout-dropdown-menus)
2. [Form Field Types](#form-field-types)
3. [Dialogs and Modals](#dialogs-and-modals)
4. [Action Controls](#action-controls)
5. [Grid Controls](#grid-controls)
6. [Messaging Components](#messaging-components)
7. [Navigation Components](#navigation-components)

---

## Flyout/Dropdown Menus

### Structure

Flyout menus consist of three main parts:

1. **Trigger Button** - Opens the flyout
2. **Flyout Container** - The popup menu itself
3. **Menu Items** - Individual actions within the flyout

### Complete HTML Structure

```html
<!-- Flyout Container -->
<div data-dyn-role="MenuButton"
     class="navigationBar-symbolButton navigationBar-settingsButton flyoutContainer"
     data-dyn-controlname="navBarSettings">

  <!-- Trigger Button -->
  <button class="button flyoutButton-Button dynamicsButton"
          aria-haspopup="true"
          aria-expanded="false"
          type="button">
    <div class="button-container">
      <span class="button-commandRing Settings-symbol"></span>
      <span class="button-label button-label-dropDown">Settings</span>
    </div>
  </button>

  <!-- Flyout Popup -->
  <div class="sysPopup flyoutButton-flyOut layout-root-scope"
       role="menu"
       tabindex="-1"
       aria-hidden="true"
       style="display: none;">

    <!-- Menu Item 1 -->
    <button data-dyn-role="MenuItem"
            class="button flyout-menuItem"
            role="menuitem"
            type="button">
      <div class="button-container">
        <span class="button-commandRing"></span>
        <span class="button-label">User options</span>
      </div>
    </button>

    <!-- Menu Item 2 -->
    <button data-dyn-role="MenuItem"
            class="button flyout-menuItem"
            role="menuitem"
            type="button">
      <div class="button-container">
        <span class="button-commandRing"></span>
        <span class="button-label">Task recorder</span>
      </div>
    </button>

    <!-- Additional menu items... -->

  </div>
</div>
```

### Key Classes

**Container Level**:
- `.flyoutContainer` - Wraps the entire flyout component
- `data-dyn-role="MenuButton"` - Identifies as menu button control

**Trigger Button**:
- `.flyoutButton-Button` - Flyout trigger button
- `.button-label-dropDown` - Label for dropdown button
- `aria-haspopup="true"` - Indicates popup menu exists
- `aria-expanded="false"` - Tracks open/closed state

**Flyout Popup**:
- `.sysPopup` - System popup container
- `.flyoutButton-flyOut` - Flyout-specific popup
- `.layout-root-scope` - Layout container
- `role="menu"` - ARIA menu role
- `aria-hidden="true"` - Hidden by default

**Menu Items**:
- `.flyout-menuItem` - Individual menu item button
- `role="menuitem"` - ARIA menu item role
- `data-dyn-role="MenuItem"` - D365FO menu item control

### CSS Styling

```css
/* Flyout Container */
.flyoutContainer {
    position: relative;
    display: inline-block;
}

/* Trigger Button */
.flyoutButton-Button {
    background: none;
    border: 1px solid var(--d365-gray);
    padding: 6px 12px;
    cursor: pointer;
    border-radius: 2px;
}

.flyoutButton-Button:hover {
    background-color: var(--d365-gray-lighter);
}

.flyoutButton-Button[aria-expanded="true"] {
    background-color: var(--d365-gray-lighter);
    border-color: var(--d365-blue-primary);
}

/* Dropdown indicator */
.button-label-dropDown::after {
    content: '▼';
    margin-left: 6px;
    font-size: 10px;
}

/* Flyout Popup */
.sysPopup {
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 1000;
    min-width: 200px;
    background: var(--d365-white);
    border: 1px solid var(--d365-gray);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    margin-top: 2px;
}

.flyoutButton-flyOut {
    display: none;
    padding: 4px 0;
}

.flyoutButton-flyOut[aria-hidden="false"] {
    display: block;
}

/* Menu Items */
.flyout-menuItem {
    width: 100%;
    background: none;
    border: none;
    padding: 8px 16px;
    text-align: left;
    cursor: pointer;
    font-size: 12px;
    transition: background-color 0.15s ease;
}

.flyout-menuItem:hover {
    background-color: var(--d365-gray-lighter);
}

.flyout-menuItem:focus {
    background-color: var(--d365-blue-light);
    outline: none;
}

.flyout-menuItem .button-container {
    display: flex;
    align-items: center;
    gap: 8px;
}

.flyout-menuItem .button-commandRing {
    width: 16px;
    font-size: 14px;
}

.flyout-menuItem .button-label {
    flex: 1;
}
```

### JavaScript Functionality

```javascript
// Toggle flyout menu
function toggleFlyout(buttonElement) {
    const container = buttonElement.closest('.flyoutContainer');
    const flyout = container.querySelector('.flyoutButton-flyOut');
    const isOpen = buttonElement.getAttribute('aria-expanded') === 'true';

    if (isOpen) {
        closeFlyout(buttonElement, flyout);
    } else {
        openFlyout(buttonElement, flyout);
    }
}

function openFlyout(buttonElement, flyout) {
    // Update ARIA attributes
    buttonElement.setAttribute('aria-expanded', 'true');
    flyout.setAttribute('aria-hidden', 'false');

    // Show flyout
    flyout.style.display = 'block';

    // Focus first menu item
    const firstItem = flyout.querySelector('.flyout-menuItem');
    if (firstItem) {
        firstItem.focus();
    }

    // Add click-outside listener
    setTimeout(() => {
        document.addEventListener('click', handleClickOutside);
    }, 0);
}

function closeFlyout(buttonElement, flyout) {
    // Update ARIA attributes
    buttonElement.setAttribute('aria-expanded', 'false');
    flyout.setAttribute('aria-hidden', 'true');

    // Hide flyout
    flyout.style.display = 'none';

    // Remove click-outside listener
    document.removeEventListener('click', handleClickOutside);

    // Return focus to button
    buttonElement.focus();
}

function handleClickOutside(event) {
    const flyoutContainer = event.target.closest('.flyoutContainer');
    if (!flyoutContainer) {
        // Click was outside any flyout, close all
        document.querySelectorAll('.flyoutContainer').forEach(container => {
            const button = container.querySelector('.flyoutButton-Button');
            const flyout = container.querySelector('.flyoutButton-flyOut');
            if (button && flyout) {
                closeFlyout(button, flyout);
            }
        });
    }
}

// Keyboard navigation for menu items
function handleMenuKeydown(event) {
    const menuItem = event.target;
    const menu = menuItem.closest('.flyoutButton-flyOut');
    const items = Array.from(menu.querySelectorAll('.flyout-menuItem'));
    const currentIndex = items.indexOf(menuItem);

    switch(event.key) {
        case 'ArrowDown':
            event.preventDefault();
            const nextIndex = (currentIndex + 1) % items.length;
            items[nextIndex].focus();
            break;

        case 'ArrowUp':
            event.preventDefault();
            const prevIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
            items[prevIndex].focus();
            break;

        case 'Escape':
            const button = menu.closest('.flyoutContainer').querySelector('.flyoutButton-Button');
            closeFlyout(button, menu);
            break;

        case 'Enter':
        case ' ':
            event.preventDefault();
            menuItem.click();
            break;
    }
}

// Attach event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Flyout button clicks
    document.querySelectorAll('.flyoutButton-Button').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            toggleFlyout(this);
        });
    });

    // Menu item keyboard navigation
    document.querySelectorAll('.flyout-menuItem').forEach(item => {
        item.addEventListener('keydown', handleMenuKeydown);
    });

    // Menu item clicks
    document.querySelectorAll('.flyout-menuItem').forEach(item => {
        item.addEventListener('click', function() {
            const container = this.closest('.flyoutContainer');
            const button = container.querySelector('.flyoutButton-Button');
            const flyout = container.querySelector('.flyoutButton-flyOut');

            // Execute menu item action here
            console.log('Menu item clicked:', this.querySelector('.button-label').textContent);

            // Close flyout
            closeFlyout(button, flyout);
        });
    });
});
```

### Data Binding (Knockout.js Pattern)

In actual D365FO, the flyout uses Knockout.js data binding:

```html
data-dyn-bind="
    flyout: {
        flyout: $('.sysPopup', $element.parentElement),
        show: $data.ShowFlyout,
        clickSubscriber: $dyn.util.flyout.getFlyoutWithActionsClickSubscriber('button:enabled'),
        positionResize: true,
        optOutOfWait: $dyn.value($data.HasBeenOpened),
        getAnchor: $data.getCurrentAnchor
    }"
```

### Variations

**1. Settings Menu** (NavigationBar)
```html
<div class="navigationBar-symbolButton navigationBar-settingsButton flyoutContainer">
  <!-- Settings icon with menu -->
</div>
```

**2. Help Menu** (NavigationBar)
```html
<div class="navigationBar-symbolButton navigationBar-helpButton flyoutContainer">
  <!-- Help icon with menu -->
</div>
```

**3. Action Pane Dropdown**
```html
<div class="appBarButton flyoutContainer">
  <!-- Action button with dropdown -->
</div>
```

**4. Context Menu** (Grid)
```html
<div class="grid-contextMenu flyoutContainer">
  <!-- Right-click context menu -->
</div>
```

---

## Form Field Types

### Common Field Controls

D365FO uses various field types for data entry:

#### 1. String Edit (Text Input)

```html
<div class="dyn-container dyn-stringEdit"
     data-dyn-controlname="CustTable_Name"
     data-dyn-role="Input">
  <div class="dyn-container">
    <input type="text"
           class="dyn-field"
           role="textbox"
           aria-label="Name"
           value="Contoso Europe">
  </div>
</div>
```

**Classes**:
- `.dyn-stringEdit` - String edit control
- `.dyn-field` - Input field

#### 2. Hyperlink Field

```html
<div class="dyn-container dyn-stringEdit">
  <div class="dyn-container">
    <input type="text"
           class="dyn-field dyn-hyperlink"
           role="textbox"
           readonly
           value="DE-001"
           title="DE-001\n\nClick to follow link">
  </div>
</div>
```

**Classes**:
- `.dyn-hyperlink` - Hyperlink field (blue, underline on hover)

#### 3. Lookup Field

```html
<div class="dyn-container dyn-stringEdit field-hasLookupButton"
     data-dyn-controlname="CustTable_InvoiceAccount">
  <div class="dyn-container">
    <input type="text"
           class="dyn-field"
           role="combobox"
           aria-haspopup="true"
           value="30">
  </div>
  <button class="lookupButton"
          aria-label="Lookup"
          title="Open lookup">
    <span class="Lookup-symbol"></span>
  </button>
</div>
```

**Classes**:
- `.field-hasLookupButton` - Field with lookup button
- `.lookupButton` - Lookup button

#### 4. Date Picker

```html
<div class="dyn-container dyn-dateEdit field-hasLookupButton">
  <div class="dyn-container">
    <input type="text"
           class="dyn-field"
           role="textbox"
           aria-label="Date"
           value="1/20/2025">
  </div>
  <button class="lookupButton datePickerButton"
          aria-label="Select date">
    <span class="Calendar-symbol"></span>
  </button>
</div>
```

**Classes**:
- `.dyn-dateEdit` - Date edit control
- `.datePickerButton` - Date picker button

#### 5. Checkbox

```html
<div class="dyn-container dyn-checkBox">
  <input type="checkbox"
         class="dyn-field"
         role="checkbox"
         aria-label="Active"
         aria-checked="true">
  <label>Active</label>
</div>
```

**Classes**:
- `.dyn-checkBox` - Checkbox control

#### 6. Radio Button Group

```html
<div class="dyn-container dyn-radioButton">
  <div class="radio-group">
    <label>
      <input type="radio" name="group1" value="option1" checked>
      <span>Option 1</span>
    </label>
    <label>
      <input type="radio" name="group1" value="option2">
      <span>Option 2</span>
    </label>
  </div>
</div>
```

#### 7. Combo Box (Dropdown Select)

```html
<div class="dyn-container dyn-comboBox">
  <select class="dyn-field"
          role="combobox"
          aria-label="Customer group">
    <option value="USD">USD - US Customers</option>
    <option value="EUR">EUR - European Customers</option>
  </select>
</div>
```

**Classes**:
- `.dyn-comboBox` - Combo box control

---

## Dialogs and Modals

### Dialog Structure

```html
<!-- Overlay -->
<div class="dialog-overlay"
     role="presentation"
     aria-hidden="false"></div>

<!-- Dialog Container -->
<div class="dialog-container"
     role="dialog"
     aria-modal="true"
     aria-labelledby="dialog-title">

  <!-- Dialog Header -->
  <div class="dialog-header">
    <h2 id="dialog-title" class="dialog-title">Customer Details</h2>
    <button class="dialog-closeButton"
            aria-label="Close"
            title="Close">
      <span class="Cancel-symbol"></span>
    </button>
  </div>

  <!-- Dialog Content -->
  <div class="dialog-content">
    <!-- Form fields or content here -->
  </div>

  <!-- Dialog Footer -->
  <div class="dialog-footer">
    <button class="button dynamicsButton button-primary">
      <div class="button-container">
        <span class="button-label">OK</span>
      </div>
    </button>
    <button class="button dynamicsButton">
      <div class="button-container">
        <span class="button-label">Cancel</span>
      </div>
    </button>
  </div>

</div>
```

### Dialog Types

**1. Drop Dialog** - Simple input dialog
**2. Advanced Selection** - Multi-select dialog
**3. Lookup Dialog** - Search and select dialog
**4. Confirmation Dialog** - Yes/No confirmation

---

## Action Controls

### Button Types

#### 1. Standard Button

```html
<button class="button dynamicsButton"
        data-dyn-role="Button"
        type="button">
  <div class="button-container">
    <span class="button-commandRing">✏️</span>
    <span class="button-label">Edit</span>
  </div>
</button>
```

#### 2. Primary Button

```html
<button class="button dynamicsButton button-primary">
  <div class="button-container">
    <span class="button-label">Save</span>
  </div>
</button>
```

**Classes**:
- `.button-primary` - Primary action (blue background)

#### 3. Menu Button (with dropdown)

```html
<button class="button dynamicsButton flyoutButton-Button"
        aria-haspopup="true">
  <div class="button-container">
    <span class="button-commandRing">⚙</span>
    <span class="button-label button-label-dropDown">Settings</span>
  </div>
</button>
```

#### 4. Icon-Only Button

```html
<button class="button dynamicsButton button-imageOnly">
  <div class="button-container">
    <span class="button-commandRing Delete-symbol"></span>
  </div>
</button>
```

**Classes**:
- `.button-imageOnly` - Icon only, no label

---

## Grid Controls

### Grid Row Selection

```html
<div class="dyn-grid-row"
     data-dyn-row-active="true"
     role="row"
     aria-selected="true">
  <!-- Row cells -->
</div>
```

### Grid Context Menu

Right-click on row opens context menu (flyout).

### Column Resizing

Handled by FixedDataTable library with resize handles.

### Column Reordering

Drag column headers to reorder.

---

## Messaging Components

### Message Bar

```html
<div class="messageBar messageBar-info" role="alert">
  <span class="messageBar-icon Info-symbol"></span>
  <span class="messageBar-text">Record saved successfully</span>
  <button class="messageBar-closeButton" aria-label="Dismiss">
    <span class="Cancel-symbol"></span>
  </button>
</div>
```

**Types**:
- `.messageBar-info` - Information (blue)
- `.messageBar-warning` - Warning (yellow)
- `.messageBar-error` - Error (red)
- `.messageBar-success` - Success (green)

### Message Center

```html
<div class="messageCenter"
     role="dialog"
     aria-modal="true"
     aria-label="Action center">
  <!-- Notification list -->
</div>
```

Located in navigation bar, shows system notifications.

---

## Navigation Components

### Breadcrumb

```html
<div class="breadcrumb">
  <button class="back-btn" aria-label="Back">←</button>
  <button class="forward-btn" aria-label="Forward">→</button>
  <span class="breadcrumb-path">
    <button class="home-btn" aria-label="Home">⌂</button>
    <span class="breadcrumb-separator">/</span>
    <span class="breadcrumb-item">Accounts receivable</span>
    <span class="breadcrumb-separator">/</span>
    <span class="breadcrumb-item">All customers</span>
  </span>
</div>
```

### Navigation Bar

Documented in HTML1-analysis.md

---

## Best Practices

### Accessibility

1. **Always include ARIA attributes**:
   - `role` for semantic meaning
   - `aria-label` for screen readers
   - `aria-haspopup` for popup elements
   - `aria-expanded` for expandable elements
   - `aria-hidden` for visibility state

2. **Keyboard Navigation**:
   - Tab/Shift+Tab for focus movement
   - Enter/Space for activation
   - Arrow keys for menu navigation
   - Escape to close popups

3. **Focus Management**:
   - Return focus to trigger after closing
   - Move focus to first item when opening
   - Visible focus indicators

### Performance

1. **Lazy Load**: Only render flyouts when opened
2. **Event Delegation**: Use single event listener for multiple items
3. **Debounce**: Debounce search/filter operations

### Responsive Design

1. Use `layout-root-scope` for layout containers
2. Use D365FO spacing variables
3. Test on different screen sizes

---

*Last Updated: 2025-11-21*
*Based on: HTML1.html analysis + Microsoft Learn documentation*
