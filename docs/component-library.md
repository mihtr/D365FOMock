# D365FO Component Library

**Date**: 2025-11-21
**Purpose**: Reusable HTML/CSS/JS templates for D365FO UI components
**Usage**: Copy-paste templates for rapid mockup development

---

## Table of Contents

1. [Buttons](#buttons)
2. [Flyout Menus](#flyout-menus)
3. [Form Fields](#form-fields)
4. [Grids](#grids)
5. [FastTabs](#fasttabs)
6. [Dialogs](#dialogs)
7. [Message Bars](#message-bars)
8. [Action Panes](#action-panes)
9. [Navigation](#navigation)
10. [Complete Page Templates](#complete-page-templates)

---

## Buttons

### Standard Button

```html
<button class="button dynamicsButton" data-dyn-role="Button" type="button">
  <div class="button-container">
    <span class="button-commandRing">✏️</span>
    <span class="button-label">Edit</span>
  </div>
</button>
```

### Primary Button

```html
<button class="button dynamicsButton button-primary" type="button">
  <div class="button-container">
    <span class="button-label">Save</span>
  </div>
</button>
```

### Icon-Only Button

```html
<button class="button dynamicsButton button-imageOnly" type="button">
  <div class="button-container">
    <span class="button-commandRing Delete-symbol"></span>
  </div>
</button>
```

### Disabled Button

```html
<button class="button dynamicsButton" type="button" disabled>
  <div class="button-container">
    <span class="button-commandRing">💾</span>
    <span class="button-label">Save</span>
  </div>
</button>
```

---

## Flyout Menus

### Basic Flyout

```html
<div class="flyoutContainer">
  <!-- Trigger Button -->
  <button class="button flyoutButton-Button dynamicsButton"
          aria-haspopup="true"
          aria-expanded="false"
          type="button"
          onclick="toggleFlyout(this)">
    <div class="button-container">
      <span class="button-commandRing">⚙</span>
      <span class="button-label button-label-dropDown">Settings</span>
    </div>
  </button>

  <!-- Flyout Menu -->
  <div class="sysPopup flyoutButton-flyOut layout-root-scope"
       role="menu"
       tabindex="-1"
       aria-hidden="true"
       style="display: none;">

    <button class="button flyout-menuItem" role="menuitem" type="button">
      <div class="button-container">
        <span class="button-commandRing">👤</span>
        <span class="button-label">User options</span>
      </div>
    </button>

    <button class="button flyout-menuItem" role="menuitem" type="button">
      <div class="button-container">
        <span class="button-commandRing">🎬</span>
        <span class="button-label">Task recorder</span>
      </div>
    </button>

    <button class="button flyout-menuItem" role="menuitem" type="button">
      <div class="button-container">
        <span class="button-commandRing">📱</span>
        <span class="button-label">Mobile app</span>
      </div>
    </button>

  </div>
</div>
```

### Navigation Bar Flyout (Settings/Help)

```html
<div data-dyn-role="MenuButton"
     class="navigationBar-symbolButton navigationBar-settingsButton flyoutContainer"
     data-dyn-controlname="navBarSettings">

  <button class="button flyoutButton-Button dynamicsButton"
          aria-haspopup="true"
          aria-expanded="false"
          type="button"
          onclick="toggleFlyout(this)">
    <div class="button-container">
      <span class="button-commandRing Settings-symbol"></span>
    </div>
  </button>

  <div class="sysPopup flyoutButton-flyOut layout-root-scope"
       role="menu"
       tabindex="-1"
       aria-hidden="true"
       style="display: none;">
    <!-- Menu items -->
  </div>

</div>
```

---

## Form Fields

### Text Input

```html
<div class="form-field">
  <label for="custName">Name</label>
  <div class="dyn-container dyn-stringEdit">
    <input type="text"
           id="custName"
           class="dyn-field"
           role="textbox"
           aria-label="Name"
           value="">
  </div>
</div>
```

### Hyperlink Field

```html
<div class="form-field">
  <label for="custAccount">Account</label>
  <div class="dyn-container dyn-stringEdit">
    <input type="text"
           id="custAccount"
           class="dyn-field dyn-hyperlink"
           role="textbox"
           aria-label="Account"
           value="US-001"
           readonly
           onclick="openCustomerDetails('US-001')">
  </div>
</div>
```

### Lookup Field

```html
<div class="form-field">
  <label for="invoiceAccount">Invoice account</label>
  <div class="dyn-container dyn-stringEdit field-hasLookupButton">
    <input type="text"
           id="invoiceAccount"
           class="dyn-field"
           role="combobox"
           aria-haspopup="true"
           aria-label="Invoice account"
           value="30">
    <button class="lookupButton" aria-label="Lookup" title="Open lookup">
      <span class="Lookup-symbol">🔍</span>
    </button>
  </div>
</div>
```

### Date Picker

```html
<div class="form-field">
  <label for="orderDate">Order date</label>
  <div class="dyn-container dyn-dateEdit field-hasLookupButton">
    <input type="text"
           id="orderDate"
           class="dyn-field"
           role="textbox"
           aria-label="Order date"
           value="1/20/2025">
    <button class="lookupButton datePickerButton"
            aria-label="Select date"
            title="Open calendar">
      <span class="Calendar-symbol">📅</span>
    </button>
  </div>
</div>
```

### Checkbox

```html
<div class="form-field form-field-checkbox">
  <label>
    <input type="checkbox"
           class="dyn-field"
           role="checkbox"
           aria-checked="true"
           checked>
    <span>Active</span>
  </label>
</div>
```

### Dropdown (ComboBox)

```html
<div class="form-field">
  <label for="custGroup">Customer group</label>
  <div class="dyn-container dyn-comboBox">
    <select id="custGroup"
            class="dyn-field"
            role="combobox"
            aria-label="Customer group">
      <option value="">-- Select --</option>
      <option value="USD">USD - US Customers</option>
      <option value="EUR">EUR - European Customers</option>
      <option value="GBP">GBP - UK Customers</option>
    </select>
  </div>
</div>
```

### Radio Button Group

```html
<div class="form-field">
  <label>Order type</label>
  <div class="dyn-container dyn-radioButton">
    <div class="radio-group">
      <label>
        <input type="radio" name="orderType" value="journal" checked>
        <span>Journal</span>
      </label>
      <label>
        <input type="radio" name="orderType" value="quotation">
        <span>Quotation</span>
      </label>
      <label>
        <input type="radio" name="orderType" value="subscription">
        <span>Subscription</span>
      </label>
    </div>
  </div>
</div>
```

---

## Grids

### Simple Grid

```html
<div class="grid-container">
  <table class="dyn-grid" role="grid">
    <thead class="dyn-grid-header">
      <tr role="row">
        <th class="dyn-headerCell">
          <input type="checkbox" aria-label="Select all">
        </th>
        <th class="dyn-headerCell sortable" onclick="sortColumn('Account')">
          <div class="dyn-headerCellLabel">Account</div>
          <span class="sort-icon"></span>
        </th>
        <th class="dyn-headerCell sortable" onclick="sortColumn('Name')">
          <div class="dyn-headerCellLabel">Name</div>
          <span class="sort-icon"></span>
        </th>
        <th class="dyn-headerCell sortable" onclick="sortColumn('City')">
          <div class="dyn-headerCellLabel">City</div>
          <span class="sort-icon"></span>
        </th>
      </tr>
    </thead>
    <tbody class="dyn-grid-body" id="gridBody">
      <!-- Rows populated by JavaScript -->
    </tbody>
  </table>
</div>
```

### Grid Row Template (JavaScript)

```javascript
function createGridRow(data, index) {
  const row = document.createElement('tr');
  row.className = 'dyn-grid-row';
  row.setAttribute('role', 'row');
  row.dataset.index = index;

  row.innerHTML = `
    <td class="checkbox-col">
      <input type="checkbox" onchange="toggleRowSelection('${data.id}')">
    </td>
    <td>
      <a href="#" class="dyn-hyperlink" onclick="openDetails('${data.id}'); return false;">
        ${data.account}
      </a>
    </td>
    <td>${data.name}</td>
    <td>${data.city}</td>
  `;

  return row;
}
```

---

## FastTabs

### FastTab Container

```html
<div class="fastTab-container">

  <!-- FastTab 1 -->
  <div class="fastTab" data-expanded="true">
    <button class="fastTab-header" onclick="toggleFastTab(this)">
      <span class="fastTab-title">General</span>
      <span class="fastTab-icon">▼</span>
    </button>
    <div class="fastTab-content">
      <div class="form-group">
        <div class="form-row">
          <div class="form-field">
            <label for="field1">Customer group</label>
            <input type="text" id="field1" class="dyn-field">
          </div>
          <div class="form-field">
            <label for="field2">Currency</label>
            <input type="text" id="field2" class="dyn-field">
          </div>
        </div>
        <div class="form-row">
          <div class="form-field">
            <label for="field3">Language</label>
            <input type="text" id="field3" class="dyn-field">
          </div>
          <div class="form-field">
            <label for="field4">Sales tax group</label>
            <input type="text" id="field4" class="dyn-field">
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- FastTab 2 -->
  <div class="fastTab" data-expanded="false">
    <button class="fastTab-header" onclick="toggleFastTab(this)">
      <span class="fastTab-title">Addresses</span>
      <span class="fastTab-icon">▶</span>
    </button>
    <div class="fastTab-content" style="display: none;">
      <!-- Address fields -->
    </div>
  </div>

  <!-- FastTab 3 -->
  <div class="fastTab" data-expanded="false">
    <button class="fastTab-header" onclick="toggleFastTab(this)">
      <span class="fastTab-title">Payment</span>
      <span class="fastTab-icon">▶</span>
    </button>
    <div class="fastTab-content" style="display: none;">
      <!-- Payment fields -->
    </div>
  </div>

</div>
```

### FastTab JavaScript

```javascript
function toggleFastTab(headerElement) {
  const fastTab = headerElement.closest('.fastTab');
  const content = fastTab.querySelector('.fastTab-content');
  const icon = fastTab.querySelector('.fastTab-icon');
  const isExpanded = fastTab.dataset.expanded === 'true';

  if (isExpanded) {
    // Collapse
    content.style.display = 'none';
    icon.textContent = '▶';
    fastTab.dataset.expanded = 'false';
  } else {
    // Expand
    content.style.display = 'block';
    icon.textContent = '▼';
    fastTab.dataset.expanded = 'true';
  }
}
```

---

## Dialogs

### Simple Dialog

```html
<!-- Dialog Overlay -->
<div class="dialog-overlay" style="display: none;"></div>

<!-- Dialog Container -->
<div class="dialog-container" role="dialog" aria-modal="true" aria-labelledby="dialogTitle" style="display: none;">

  <!-- Dialog Header -->
  <div class="dialog-header">
    <h2 id="dialogTitle" class="dialog-title">Customer Details</h2>
    <button class="dialog-closeButton" aria-label="Close" onclick="closeDialog()">
      <span class="Cancel-symbol">✖</span>
    </button>
  </div>

  <!-- Dialog Content -->
  <div class="dialog-content">
    <div class="form-group">
      <div class="form-field">
        <label for="dialogField1">Customer name</label>
        <input type="text" id="dialogField1" class="dyn-field">
      </div>
      <div class="form-field">
        <label for="dialogField2">Phone</label>
        <input type="text" id="dialogField2" class="dyn-field">
      </div>
    </div>
  </div>

  <!-- Dialog Footer -->
  <div class="dialog-footer">
    <button class="button dynamicsButton button-primary" onclick="saveDialog()">
      <div class="button-container">
        <span class="button-label">OK</span>
      </div>
    </button>
    <button class="button dynamicsButton" onclick="closeDialog()">
      <div class="button-container">
        <span class="button-label">Cancel</span>
      </div>
    </button>
  </div>

</div>
```

### Dialog JavaScript

```javascript
function openDialog() {
  document.querySelector('.dialog-overlay').style.display = 'block';
  document.querySelector('.dialog-container').style.display = 'block';
  document.body.style.overflow = 'hidden';
}

function closeDialog() {
  document.querySelector('.dialog-overlay').style.display = 'none';
  document.querySelector('.dialog-container').style.display = 'none';
  document.body.style.overflow = 'auto';
}

function saveDialog() {
  // Save logic here
  console.log('Dialog saved');
  closeDialog();
}
```

---

## Message Bars

### Information Message

```html
<div class="messageBar messageBar-info" role="alert">
  <span class="messageBar-icon Info-symbol">ℹ️</span>
  <span class="messageBar-text">Record saved successfully</span>
  <button class="messageBar-closeButton" aria-label="Dismiss" onclick="dismissMessage(this)">
    <span class="Cancel-symbol">✖</span>
  </button>
</div>
```

### Warning Message

```html
<div class="messageBar messageBar-warning" role="alert">
  <span class="messageBar-icon Warning-symbol">⚠️</span>
  <span class="messageBar-text">Some fields require attention</span>
  <button class="messageBar-closeButton" aria-label="Dismiss" onclick="dismissMessage(this)">
    <span class="Cancel-symbol">✖</span>
  </button>
</div>
```

### Error Message

```html
<div class="messageBar messageBar-error" role="alert">
  <span class="messageBar-icon Error-symbol">❌</span>
  <span class="messageBar-text">Unable to save record. Please check required fields.</span>
  <button class="messageBar-closeButton" aria-label="Dismiss" onclick="dismissMessage(this)">
    <span class="Cancel-symbol">✖</span>
  </button>
</div>
```

### Success Message

```html
<div class="messageBar messageBar-success" role="alert">
  <span class="messageBar-icon Success-symbol">✓</span>
  <span class="messageBar-text">Operation completed successfully</span>
  <button class="messageBar-closeButton" aria-label="Dismiss" onclick="dismissMessage(this)">
    <span class="Cancel-symbol">✖</span>
  </button>
</div>
```

### Message Bar JavaScript

```javascript
function showMessage(type, text) {
  const messageBar = document.createElement('div');
  messageBar.className = `messageBar messageBar-${type}`;
  messageBar.setAttribute('role', 'alert');

  const icons = {
    info: 'ℹ️',
    warning: '⚠️',
    error: '❌',
    success: '✓'
  };

  messageBar.innerHTML = `
    <span class="messageBar-icon ${type}-symbol">${icons[type]}</span>
    <span class="messageBar-text">${text}</span>
    <button class="messageBar-closeButton" aria-label="Dismiss" onclick="dismissMessage(this)">
      <span class="Cancel-symbol">✖</span>
    </button>
  `;

  // Insert at top of content area
  const contentArea = document.querySelector('.content-area');
  contentArea.insertBefore(messageBar, contentArea.firstChild);

  // Auto-dismiss after 5 seconds
  setTimeout(() => {
    dismissMessage(messageBar.querySelector('.messageBar-closeButton'));
  }, 5000);
}

function dismissMessage(button) {
  const messageBar = button.closest('.messageBar');
  messageBar.style.opacity = '0';
  setTimeout(() => messageBar.remove(), 300);
}
```

---

## Action Panes

### Action Pane with Tabs

```html
<div class="actionPane" data-dyn-role="ActionPane">

  <!-- Action Buttons Group -->
  <div class="actionPane-buttons">
    <button class="button dynamicsButton">
      <div class="button-container">
        <span class="button-commandRing">✏️</span>
        <span class="button-label">Edit</span>
      </div>
    </button>
    <button class="button dynamicsButton">
      <div class="button-container">
        <span class="button-commandRing">➕</span>
        <span class="button-label">New</span>
      </div>
    </button>
    <button class="button dynamicsButton">
      <div class="button-container">
        <span class="button-commandRing">🗑</span>
        <span class="button-label">Delete</span>
      </div>
    </button>
    <button class="button dynamicsButton">
      <div class="button-container">
        <span class="button-commandRing">💾</span>
        <span class="button-label">Save</span>
      </div>
    </button>
  </div>

  <!-- App Bar Tabs -->
  <div class="appBarTab" data-dyn-role="AppBarTab">
    <button class="appBarTab-header active">
      <span class="appBarTab-headerLabel">Customer</span>
    </button>
  </div>

  <div class="appBarTab" data-dyn-role="AppBarTab">
    <button class="appBarTab-header">
      <span class="appBarTab-headerLabel">Sell</span>
    </button>
  </div>

  <div class="appBarTab" data-dyn-role="AppBarTab">
    <button class="appBarTab-header">
      <span class="appBarTab-headerLabel">Invoice</span>
    </button>
  </div>

</div>
```

---

## Navigation

### Navigation Bar

```html
<div class="navigationBar" data-dyn-role="NavigationBar">

  <!-- Left Section -->
  <div class="navigationBar-launch">
    <button class="navigationBar-symbolButton" title="Open navigation">☰</button>
    <button class="navigationBar-dashboardButton">
      <span class="app-title">Finance and Operations</span>
    </button>
  </div>

  <!-- Center Section (Search) -->
  <div class="nav-center">
    <div class="search-box">
      <input type="text" placeholder="Search" id="globalSearch">
      <button class="search-btn">🔍</button>
    </div>
  </div>

  <!-- Right Section (Actions) -->
  <div class="navigationBar-actions">
    <span class="company-info">USMF | Contoso Entertainment System USA</span>
    <button class="icon-btn" title="Help">?</button>
    <button class="icon-btn" title="Settings">⚙</button>
    <button class="icon-btn" title="Notifications">🔔</button>
    <button class="icon-btn" title="User">👤</button>
  </div>

</div>
```

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
    <span class="breadcrumb-item">Customers</span>
    <span class="breadcrumb-separator">/</span>
    <span class="breadcrumb-item current">All customers</span>
  </span>
</div>
```

---

## Complete Page Templates

### List Page Template

See `examples/customer-list-page.html` for complete List Page template.

### Details Master Template

Coming soon - create based on form-patterns.md specifications.

### Simple Details Template

Coming soon.

---

## CSS Framework

All components use the D365FO CSS framework defined in `examples/d365fo-styles.css`.

### Key CSS Variables

```css
/* Colors */
--d365-blue-primary: #0078d4;
--d365-white: #ffffff;
--d365-gray-lighter: #f3f2f1;
--d365-gray: #d2d0ce;
--d365-gray-darker: #605e5c;

/* Font Sizes */
--font-size-base: 12px;
--font-size-large: 14px;

/* Spacing */
--padding-sm: 8px;
--padding-md: 12px;
--padding-lg: 16px;
```

---

## JavaScript Utilities

### Common Functions

```javascript
// Toggle flyout
function toggleFlyout(buttonElement) { /* See flyout section */ }

// Sort grid column
function sortColumn(columnName) { /* See grid section */ }

// Toggle FastTab
function toggleFastTab(headerElement) { /* See FastTab section */ }

// Show message
function showMessage(type, text) { /* See message bar section */ }

// Open/close dialog
function openDialog() { /* See dialog section */ }
function closeDialog() { /* See dialog section */ }
```

---

## Usage Examples

### Creating a New List Page

1. Copy `examples/customer-list-page.html`
2. Update page title and data
3. Modify grid columns
4. Adjust action pane buttons
5. Update JavaScript data array

### Adding a Flyout Menu

1. Copy flyout HTML template
2. Add to your page
3. Include flyout JavaScript
4. Update menu items
5. Test keyboard navigation

### Adding Form Fields

1. Copy field template
2. Update IDs and labels
3. Add validation if needed
4. Wire up data binding
5. Test accessibility

---

*Last Updated: 2025-11-21*
*Complete component library for D365FO mockups*
