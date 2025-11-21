# HTML1.html Analysis - Actual D365FO Customer List Page

**Source**: Saved HTML from running D365FO application
**URL**: `https://orgf63cec72.operations.eu.dynamics.com/?cmp=usmf&mi=CustTableListPage`
**Page**: All customers (CustTableListPage)
**Date Analyzed**: 2025-11-21

---

## File Overview

- **Total Lines**: 5,491 lines
- **File Size**: ~1MB
- **Type**: Complete HTML with inline styles and data bindings
- **Framework**: D365FO web client with Knockout.js data binding

---

## Key CSS Class Names (Actual D365FO)

### Navigation Bar Classes

```html
<!-- Main navigation bar container -->
<div id="NavBar" class="navigationBar layout-root-scope officeNavBar">

<!-- Navigation buttons -->
<button class="navigationBar-symbolButton navigationBar-officeWaffle button dynamicsButton">
<button class="navigationBar-dashboardButton button dynamicsButton">
<button class="navigationBar-button navigationBar-searchButtonCollapsed button dynamicsButton">
<button class="navigationBar-symbolButton button dynamicsButton copilotButton">

<!-- Search box -->
<div class="navigationBar-symbolButton" data-dyn-role="SearchBox">

<!-- Company chooser -->
<div class="navigationBar-company navigationBar-pinnedElement">
<button class="navigationBar-companyButton">

<!-- User/settings area -->
<div class="navigationBar-actions navigationBar-list">
<ul class="navigationBar-list">
<li class="navigationBar-listItem">

<!-- Breadcrumbs -->
<ol class="navigationBar-crumbList">
<li class="navigationBar-crumbItem D365ChevronRight-symbol">
```

**Key Discovery**: Navigation uses `navigationBar-` prefix consistently

---

## Action Pane / App Bar Classes

### Action Pane Structure

```html
<!-- Action Pane container -->
<div data-dyn-role="ActionPane" class="actionPane">

<!-- Action button groups (Edit, New, Delete) -->
<div class="actionPane-buttons">
  <div class="actionGroup button-group">
    <button class="button dynamicsButton">
      <span class="button-label">Edit</span>
    </button>
  </div>
</div>

<!-- App Bar Tabs (Customer, Sell, Invoice, etc.) -->
<div class="appBarTab" data-dyn-role="AppBarTab">
  <button class="appBarTab-header allowFlyoutClickPropagation">
    <span class="appBarTab-headerLabel">Customer</span>
  </button>
</div>

<!-- App Bar Groups (command groups within tabs) -->
<div data-dyn-role="AppBarGroup" class="group button-group">
  <div class="group_header">
    <label class="group_title">Accounts</label>
  </div>
  <div class="group_content layout-container layout-vertical">
    <button class="button dynamicsButton">
      <div class="button-container">
        <span class="button-commandRing imageBinder-emptyImage"></span>
        <span class="button-label">Contacts</span>
      </div>
    </button>
  </div>
</div>
```

**Key Discoveries**:
1. ✅ Class: `actionPane` (not `action-pane` with hyphens)
2. ✅ Class: `appBarTab` (not `action-tab`)
3. ✅ Class: `appBarTab-header` for tab buttons
4. ✅ Class: `appBarTab-headerLabel` for tab text
5. ✅ Tabs use `data-dyn-role="AppBarTab"`
6. ✅ Button groups use `data-dyn-role="AppBarGroup"`
7. ✅ Standard buttons use `button dynamicsButton` classes

---

## Button Classes

### Standard Button Structure

```html
<button class="button dynamicsButton" type="button">
  <div class="button-container">
    <span class="button-commandRing imageBinder-emptyImage"></span>
    <span class="button-label">Button Text</span>
  </div>
</button>

<!-- Button with image -->
<button class="button dynamicsButton">
  <span class="button-commandRing">
    <img src="icon.svg" class="imageBinder-image">
  </span>
  <span class="button-label">Text</span>
</button>

<!-- Flyout/dropdown button -->
<button class="button flyoutButton-Button dynamicsButton" aria-haspopup="true">
  <div class="button-container">
    <span class="button-commandRing"></span>
    <span class="button-label button-label-dropDown">Text</span>
  </div>
</button>
```

**Key Classes**:
- `button` - Base button class
- `dynamicsButton` - D365FO specific styling
- `button-container` - Inner container
- `button-commandRing` - Icon/image container
- `button-label` - Button text
- `button-label-dropDown` - Label with dropdown indicator
- `flyoutButton-Button` - For dropdown buttons

---

## Quick Filter Classes

```html
<div data-dyn-controlname="QuickFilterControl"
     data-dyn-role="QuickFilter"
     class="quickFilter hasdiscretesize-width discretesize-width-large fixed-width layout-container layout-vertical">

  <!-- Filter input and controls -->
  <div class="field">
    <input type="text" class="field-text">
  </div>
</div>
```

**Key Discoveries**:
1. ✅ Class: `quickFilter` (lowercase, camelCase)
2. ✅ Has layout classes: `layout-container layout-vertical`
3. ✅ Size classes: `discretesize-width-large fixed-width`
4. ✅ Uses `data-dyn-role="QuickFilter"`

---

## Grid/Table Classes

Search needed more context - will document after finding grid section.

Based on typical D365FO patterns, grids likely use:
- `grid` or `hierarchyGrid` classes
- `grid-header` for headers
- `grid-row` for rows
- `grid-cell` for cells

---

## Layout System Classes

D365FO uses a comprehensive layout system:

```css
/* Layout containers */
.layout-container
.layout-root-scope
.layout-horizontal
.layout-vertical
.layout-horizontal-bottomalign

/* Sizing */
.fill-width
.fixed-width
.hasdiscretesize-width
.discretesize-width-large
```

**Key Discovery**: D365FO has its own layout system with specific classes

---

## Data Binding Attributes

Every control uses `data-dyn-*` attributes for framework binding:

```html
<!-- Common attributes -->
data-dyn-role="Button"           <!-- Control type -->
data-dyn-controlname="EditButton" <!-- Control name -->
data-dyn-serverid="123_0"        <!-- Server ID -->
data-dyn-bind="..."               <!-- Knockout bindings -->
data-dyn-focus=".field"          <!-- Focus target -->
data-dyn-container=".content"    <!-- Content container -->
data-dyn-template-applied="true" <!-- Template state -->
data-dyn-lastvisible="true"      <!-- Visibility state -->
```

**Key Discovery**: All D365FO controls are heavily data-driven with `data-dyn-*` attributes

---

## Color Specifications (from inline styles)

### Splash Screen Colors
```css
#splashScreen {
  background-color: #FFFFFF;
  color: #323130;
}
```

### Spinner/Loader Colors
```css
.ms-Spinner {
  border-color: rgb(0, 120, 212) rgb(199, 224, 244) rgb(199, 224, 244);
  /* Primary: #0078d4, Light: #c7e0f4 */
}
```

### Meta Theme Colors
```html
<meta name="msapplication-TileColor" content="#4a356F">
<meta name="msapplication-navbutton-color" content="#4a356F">
```

**Confirmed Colors**:
- Primary blue: `#0078d4` (rgb(0, 120, 212))
- Light blue: `#c7e0f4` (rgb(199, 224, 244))
- Text: `#323130`
- Background: `#FFFFFF`
- Tile/Brand: `#4a356F` (purple)

---

## Typography Specifications

```css
/* From splash screen styles */
.ms-suiteName {
  font-family: Segoe UI;
  font-size: 32px;
  line-height: 40px;
}

.ms-productName {
  font-family: Segoe UI;
  font-size: 24px;
  line-height: 32px;
}
```

**Font Family**: `Segoe UI` (confirmed from actual HTML)

---

## Component Hierarchy

```
Page (CustTableListPage)
├── Navigation Bar (navigationBar)
│   ├── Office Waffle (navigationBar-officeWaffle)
│   ├── Dashboard Button (navigationBar-dashboardButton)
│   ├── Breadcrumbs (navigationBar-crumbList)
│   ├── Search Box (NavigationSearchBox)
│   ├── Company Chooser (navigationBar-company)
│   └── Actions (navigationBar-actions)
│       ├── Copilot Button
│       ├── Messages Button
│       ├── Settings Menu
│       ├── Help Menu
│       └── User Button
│
├── Action Pane (actionPane)
│   ├── Action Buttons Group
│   │   ├── Edit Button
│   │   ├── New Button
│   │   └── Delete Button
│   │
│   ├── App Bar Tabs
│   │   ├── Customer (aptabCustomer)
│   │   ├── Sell (aptabSell)
│   │   ├── Invoice (aptabInvoice)
│   │   ├── Collect (aptabCollect)
│   │   ├── Projects (aptabProjects)
│   │   ├── Service (aptabService)
│   │   ├── Market (aptabMarket)
│   │   ├── Retail (aptabRetail)
│   │   ├── Pricing (aptabPricing)
│   │   ├── General (aptabGeneral)
│   │   ├── Credit (aptabCredit)
│   │   └── SubBill (SubBillTab)
│   │
│   └── App Bar Groups (per tab)
│       ├── btngrpCustomerAccounts
│       │   ├── Contacts (dropdown)
│       │   └── Change party association
│       ├── btngrpCustomerTransactions
│       │   ├── Transactions
│       │   └── Global transactions
│       └── btngrpCustomerBalance
│           ├── Balance
│           └── Aged balance
│
├── Page Content
│   ├── Quick Filter (QuickFilterControl)
│   └── Grid (TBD - need to find in HTML)
│
└── Status Bar (TBD)
```

---

## Key Differences from Our Implementation

### ❌ What We Got Wrong

1. **Class Names**:
   - We used: `action-pane` (with hyphen)
   - Actual: `actionPane` (camelCase)

2. **Tab Classes**:
   - We used: `action-tab`
   - Actual: `appBarTab` with `appBarTab-header`

3. **Button Structure**:
   - We used: Simple button with icon span
   - Actual: Nested `button-container` > `button-commandRing` + `button-label`

4. **Navigation Classes**:
   - We used: `top-nav`
   - Actual: `navigationBar layout-root-scope officeNavBar`

5. **Quick Filter**:
   - We used: `quick-filter` (hyphenated)
   - Actual: `quickFilter` (camelCase)

### ✅ What We Got Right

1. ✅ Color scheme (#0078d4, #323130, etc.)
2. ✅ Font family (Segoe UI)
3. ✅ Overall structure (nav > action pane > content)
4. ✅ Button grouping concept
5. ✅ Tab concept (though class names wrong)

---

## Data Binding Framework

D365FO uses **Knockout.js** for data binding:

```html
<!-- Example binding syntax -->
data-dyn-bind="
    visible: $data.Visible,
    enabled: $data.Enabled,
    click: { callBack: $data.Clicked },
    text: $data.Label,
    css: { 'button-isDefault' : $data.DefaultButton }"
```

**Framework Features**:
- Observables for reactive data
- Computed values
- Template bindings
- Event handlers
- CSS class bindings
- Visibility/enable state management

---

## Icon System

D365FO uses multiple icon approaches:

1. **Symbol Classes**: `D365ChevronRight-symbol`, `ViewNotifications-symbol`
2. **Image Binding**: `imageBinder-image`, `imageBinder-emptyImage`
3. **Command Ring**: `button-commandRing` container for icons

```html
<!-- Symbol icon -->
<span class="D365ChevronRight-symbol"></span>

<!-- Image icon -->
<span class="button-commandRing">
  <img src="CopilotIcon.svg" class="imageBinder-image">
</span>

<!-- Empty placeholder -->
<span class="button-commandRing imageBinder-emptyImage"
      aria-description="No image"></span>
```

---

## Accessibility Attributes

D365FO is heavily accessibility-focused:

```html
<!-- ARIA attributes -->
role="banner"              <!-- Navigation bar -->
role="search"              <!-- Quick filter -->
role="button"
role="menu"
role="menuitem"
role="group"

aria-label="Navigation bar"
aria-labelledby="id"
aria-describedby="id_helptext"
aria-expanded="true"
aria-haspopup="true"
aria-controls="id_list"
aria-hidden="true"

<!-- Focus management -->
tabindex="0"
tabindex="-1"
data-dyn-focus=".field"
```

**Key Discovery**: Every control has comprehensive ARIA support

---

## Help Text System

Every control has associated help text:

```html
<button id="EditButton">
  <span class="button-label"
        aria-describedby="EditButton_helptext">
    Edit
  </span>
</button>

<span class="button-help"
      id="EditButton_helptext"
      style="display: none;">
  Edit the selected customer record
</span>
```

**Pattern**: `{ControlId}_helptext` convention for all help text

---

## Flyout/Dropdown System

```html
<button class="button flyoutButton-Button"
        aria-haspopup="true"
        aria-expanded="false"
        aria-controls="flyout_list">
  Button Text
</button>

<div class="sysPopup flyoutButton-flyOut"
     role="menu"
     id="flyout_list"
     aria-hidden="true"
     style="display: none;">
  <!-- Menu items -->
</div>
```

**Classes**:
- `flyoutButton-Button` - Button that opens flyout
- `sysPopup` - Popup container
- `flyoutButton-flyOut` - Flyout content
- `flyout-menuItem` - Individual menu items

---

## Recommendations for Examples

### Immediate Changes Needed

1. **Rename classes to match D365FO**:
   ```css
   /* Change from: */
   .action-pane → .actionPane
   .action-tab → .appBarTab
   .action-button → .button.dynamicsButton
   .quick-filter → .quickFilter
   .top-nav → .navigationBar
   ```

2. **Update button structure**:
   ```html
   <!-- Old -->
   <button class="action-button">
     <span class="icon">✏️</span>
     <span>Edit</span>
   </button>

   <!-- New (D365FO style) -->
   <button class="button dynamicsButton">
     <div class="button-container">
       <span class="button-commandRing">✏️</span>
       <span class="button-label">Edit</span>
     </div>
   </button>
   ```

3. **Add data-dyn attributes**:
   ```html
   <button class="button dynamicsButton"
           data-dyn-role="Button"
           data-dyn-controlname="EditButton">
   ```

4. **Update tab structure**:
   ```html
   <div class="appBarTab" data-dyn-role="AppBarTab">
     <button class="appBarTab-header">
       <span class="appBarTab-headerLabel">Customer</span>
     </button>
   </div>
   ```

### Optional Enhancements

1. Add help text spans (hidden) for each control
2. Add comprehensive ARIA attributes
3. Implement layout system classes
4. Add data binding attributes (even if not functional)
5. Use `imageBinder-` classes for icons

---

## CSS Class Reference

### Navigation
- `navigationBar` - Main nav container
- `navigationBar-launch` - Left section
- `navigationBar-symbolButton` - Icon buttons
- `navigationBar-officeWaffle` - Office 365 menu
- `navigationBar-dashboardButton` - Dashboard/home
- `navigationBar-crumbList` - Breadcrumbs
- `navigationBar-crumbItem` - Breadcrumb item
- `navigationBar-company` - Company chooser
- `navigationBar-actions` - Right actions section
- `navigationBar-list` - Action list container
- `navigationBar-listItem` - Action item

### Action Pane
- `actionPane` - Main action pane container
- `appBarTab` - Tab container
- `appBarTab-header` - Tab button
- `appBarTab-headerLabel` - Tab text
- `appBarTab-content` - Tab content area
- `actionGroup` - Button group
- `actionGroup-overflow` - Overflow container
- `button-group` - Group styling

### Buttons
- `button` - Base button
- `dynamicsButton` - D365FO button style
- `button-container` - Inner container
- `button-commandRing` - Icon container
- `button-label` - Button text
- `button-label-dropDown` - Dropdown label
- `button-help` - Help text (hidden)
- `flyoutButton-Button` - Dropdown button
- `flyoutButton-flyOut` - Dropdown content

### Groups
- `group` - Group container
- `group_header` - Group header
- `group_title` - Group title
- `group_content` - Group content

### Forms
- `field` - Field container
- `field-text` - Text input
- `field-help` - Help text
- `field-status` - Status indicator

### Layout
- `layout-container` - Layout container
- `layout-root-scope` - Root scope
- `layout-horizontal` - Horizontal layout
- `layout-vertical` - Vertical layout
- `fill-width` - Fill available width
- `fixed-width` - Fixed width

### Quick Filter
- `quickFilter` - Quick filter container

---

## Next Steps

1. ✅ **Create CSS file** with actual D365FO class names
2. ✅ **Update HTML structure** to match D365FO hierarchy
3. ✅ **Refactor examples** to use correct classes
4. 🔲 **Extract grid CSS** (need to find grid section in HTML1.html)
5. 🔲 **Document grid structure**
6. 🔲 **Update documentation** with new findings

---

*Analysis Date: 2025-11-21*
*Source: HTML1.html (5,491 lines, actual D365FO application)*
*This document provides the foundation for accurate D365FO mockups*
