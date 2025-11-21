# D365FO Form Patterns & Styles

**Date**: 2025-11-21
**Source**: Microsoft Learn Documentation
**Purpose**: Complete catalog of all D365FO form patterns and when to use them

---

## Overview

D365FO uses **Form Patterns** to provide consistent user experiences across the application. Patterns are applied to the form's design node and provide:

- Structure and layout guidance
- Default property values
- Validation rules
- Responsive design

---

## Form Pattern Categories

### 1. Primary Data Forms
### 2. Secondary Data Forms
### 3. Supporting Forms
### 4. Dialog Forms
### 5. Subpatterns

---

## Primary Data Forms

### 1. List Page Pattern

**Purpose**: Display lists of records with filtering, sorting, and quick actions

**Use Cases**:
- Customer lists
- Vendor lists
- Product catalogs
- Any browsable data collection

**Structure**:
```
Form
├── Design (Pattern: List Page)
│   ├── ActionPane
│   │   ├── ActionPaneTab (Customer, Sell, Invoice, etc.)
│   │   │   └── ButtonGroup
│   │   │       └── Buttons (Edit, New, Delete, etc.)
│   ├── FilterGroup (QuickFilter)
│   ├── Grid
│   │   ├── Columns (Account, Name, Phone, etc.)
│   └── StatusBar
```

**Key Components**:
- **Action Pane**: Command buttons organized in tabs
- **Quick Filter**: Search across visible columns
- **Grid**: Multi-column data display
- **Status Bar**: Record count, selection info

**Example**: Customer List Page (CustTableListPage)

**Pattern Rules**:
- Must have ActionPane
- Must have Grid
- QuickFilter recommended
- Minimum 3 columns in grid

---

### 2. Details Master Pattern

**Purpose**: Display and edit detailed information about a single record

**Use Cases**:
- Customer details
- Vendor details
- Product details
- Employee profiles

**Structure**:
```
Form
├── Design (Pattern: Details Master)
│   ├── ActionPane
│   │   ├── ActionPaneTab (General, Contact, etc.)
│   ├── TitleGroup
│   │   ├── QuickFilter (optional)
│   │   ├── TitleFields (ID, Name)
│   ├── TabControl
│   │   ├── TabPage (General)
│   │   │   ├── FastTab (Overview)
│   │   │   │   └── Group (Fields)
│   │   │   ├── FastTab (Addresses)
│   │   ├── TabPage (Invoices)
│   ├── FactBoxPanel (optional)
│   │   ├── FactBox (Related information)
```

**Key Components**:
- **Action Pane**: Edit, New, Delete, Save, etc.
- **Title Group**: Record identifier (name, ID)
- **FastTabs**: Collapsible sections for field groups
- **Tab Pages**: Major data categories
- **FactBox**: Related information panel

**Pattern Rules**:
- Must have ActionPane
- Must have at least one FastTab
- Title group required
- Fields organized in logical groups

---

### 3. Details Transaction Pattern

**Purpose**: Create and edit transactional documents (orders, invoices, journals)

**Use Cases**:
- Sales orders
- Purchase orders
- Invoices
- Journals

**Structure**:
```
Form
├── Design (Pattern: Details Transaction)
│   ├── ActionPane
│   ├── HeaderGroup
│   │   ├── TitleFields (Order number, Customer)
│   ├── LinesGrid
│   │   ├── Line columns (Item, Quantity, Price)
│   ├── LinesTotals
│   │   ├── Subtotal, Tax, Total
```

**Key Components**:
- **Header**: Document-level information
- **Lines Grid**: Transaction line items
- **Totals**: Calculated summaries
- **Workflow**: Approval and status tracking

**Pattern Rules**:
- Must have header and lines
- Must have totals section
- Action pane with document lifecycle actions

---

## Secondary Data Forms

### 4. Simple List Pattern

**Purpose**: Display simple lists without complex filtering

**Use Cases**:
- Reference data lists
- Code tables
- Small lookup lists

**Structure**:
```
Form
├── Design (Pattern: Simple List)
│   ├── ActionPane (optional)
│   ├── Grid
```

**Differences from List Page**:
- No QuickFilter required
- Simpler action pane
- Fewer columns
- Smaller datasets

---

### 5. Simple Details Pattern

**Purpose**: Edit simple records with few fields

**Use Cases**:
- Parameter forms
- Setup forms
- Simple reference data

**Structure**:
```
Form
├── Design (Pattern: Simple Details)
│   ├── ActionPane
│   ├── ContentGroup
│   │   ├── FieldGroup
│   │   │   └── Fields
```

**Pattern Rules**:
- Maximum 15-20 fields
- Single-level grouping
- No tabs or FastTabs

---

### 6. Simple List and Details Pattern

**Purpose**: Master-detail view with list and details side-by-side

**Use Cases**:
- Configuration forms
- Code maintenance
- Small datasets with details

**Structure**:
```
Form
├── Design (Pattern: Simple List and Details)
│   ├── ActionPane
│   ├── GridGroup
│   │   ├── Grid (master list)
│   ├── DetailsGroup
│   │   ├── FieldGroups (detail fields)
```

---

## Supporting Forms

### 7. Table Of Contents Pattern

**Purpose**: Navigate between related data sections

**Use Cases**:
- Multi-section configuration
- Wizard-like navigation
- Hierarchical data

**Structure**:
```
Form
├── Design (Pattern: Table Of Contents)
│   ├── ActionPane
│   ├── TOCTree (navigation tree)
│   ├── ContentArea
│   │   ├── ContentPage1
│   │   ├── ContentPage2
```

---

### 8. Wizard Pattern

**Purpose**: Guide users through multi-step processes

**Use Cases**:
- Setup wizards
- Data import
- Configuration processes

**Structure**:
```
Form
├── Design (Pattern: Wizard)
│   ├── Step1Group
│   ├── Step2Group
│   ├── Step3Group
│   ├── Navigation (Back, Next, Finish)
```

---

### 9. Task Single / Task Double Pattern

**Purpose**: Single or dual-panel task forms

**Task Single**: Single panel
**Task Double**: Two panels side-by-side

**Use Cases**:
- Quick data entry
- Task-oriented forms

---

### 10. Workspace Pattern

**Purpose**: Dashboard-style activity workspace

**Use Cases**:
- Role-based dashboards
- Activity centers
- KPI displays

**Structure**:
```
Form
├── Design (Pattern: Workspace)
│   ├── ActionPane
│   ├── PanoramaSection (tiles)
│   │   ├── Tile (Count)
│   │   ├── Tile (Chart)
│   │   ├── Tile (Link)
│   ├── TabularSection (lists)
│   │   ├── Grid (Recent orders)
│   │   ├── Grid (Tasks)
│   ├── PowerBISection (optional)
```

**Key Components**:
- **Tiles**: Visual summaries
- **Charts**: Data visualization
- **Lists**: Action items, recent records
- **Power BI**: Embedded reports

---

## Dialog Forms

### 11. Dialog Pattern

**Purpose**: Modal dialogs for user input

**Use Cases**:
- Parameter input
- Confirmation dialogs
- Simple data entry

**Structure**:
```
Dialog
├── Design (Pattern: Dialog)
│   ├── DialogContent
│   │   ├── FieldGroups
│   ├── DialogCommit (OK button)
│   ├── DialogCancel (Cancel button)
```

---

### 12. Drop Dialog Pattern

**Purpose**: Lightweight popup dialogs

**Use Cases**:
- Quick edits
- Inline data entry
- Contextual actions

**Differences from Dialog**:
- Smaller size
- Fewer fields
- Quick actions

---

### 13. Advanced Selection Pattern

**Purpose**: Multi-select with criteria

**Use Cases**:
- Batch selection
- Filter-based selection
- Complex queries

---

### 14. Lookup Pattern

**Purpose**: Search and select records

**Use Cases**:
- Reference field lookups
- Foreign key selection
- Related record selection

**Structure**:
```
Lookup
├── Design (Pattern: Lookup)
│   ├── FilterGroup
│   ├── Grid (search results)
```

---

### 15. FactBox Pattern

**Purpose**: Related information panel

**Use Cases**:
- Related records
- Document attachments
- Workflow history
- Quick summaries

**Structure**:
```
FactBox
├── Design (Pattern: FactBox)
│   ├── FieldGroups
│   ├── Charts (optional)
│   ├── Lists (optional)
```

---

## Subpatterns

Subpatterns are applied to container controls within forms.

### 16. Custom Filter Group

**Purpose**: Custom filter controls

**Use Cases**:
- Date range filters
- Multi-field filters
- Custom criteria

---

### 17. Fields and Field Groups

**Purpose**: Standard field layout

**Restrictions**:
- No static text
- No manual widths
- No nested groups beyond 2 levels

---

### 18. Toolbar and List

**Purpose**: Toolbar above list

**Use Cases**:
- Grid toolbars
- List action buttons

---

### 19. Toolbar and Fields

**Purpose**: Toolbar above field groups

---

### 20. Dimension Entry Control

**Purpose**: Financial dimension input

**Use Cases**:
- Financial dimensions
- Multi-segment accounts

---

### 21. Fill Text

**Purpose**: Explanatory text blocks

---

### 22. Filters and Toolbar

**Purpose**: Combined filter and toolbar

---

### 23. Horizontal Fields and Buttons Group

**Purpose**: Fields with inline buttons

---

### 24. Image Preview

**Purpose**: Image display with preview

---

### 25. List Panel

**Purpose**: Panel containing lists

---

### 26. Nested Simple List and Details

**Purpose**: Master-detail within container

---

### 27. Section Chart

**Purpose**: Chart section in workspace

---

### 28. Section Power BI

**Purpose**: Power BI embedded section

---

### 29. Section Related Links

**Purpose**: Related link tiles

---

### 30. Section Stacked Chart

**Purpose**: Stacked chart visualization

---

### 31. Section Tabbed List

**Purpose**: Tabbed lists in section

---

### 32. Section Tiles

**Purpose**: Tile group section

---

### 33. Tabular Fields

**Purpose**: Table-style field layout

---

### 34. Workspace Filter Group

**Purpose**: Filters for workspace

---

## Pattern Selection Guide

### Choosing the Right Pattern

| Scenario | Pattern | Why |
|----------|---------|-----|
| Browse records | **List Page** | Filtering, sorting, bulk actions |
| Edit single record | **Details Master** | Full detail with tabs and FastTabs |
| Create order/invoice | **Details Transaction** | Header-lines structure with totals |
| Simple reference data | **Simple List** | Minimal complexity |
| Quick configuration | **Simple Details** | Few fields, no tabs |
| Split view edit | **Simple List and Details** | Master-detail side-by-side |
| Multi-section setup | **Table Of Contents** | Navigation tree |
| Guided process | **Wizard** | Step-by-step flow |
| Activity dashboard | **Workspace** | Tiles, charts, lists |
| User input modal | **Dialog** | Modal data entry |
| Quick lookup | **Lookup** | Search and select |
| Related info panel | **FactBox** | Contextual information |

---

## Pattern Properties

### Common Properties

All patterns provide:
- **Layout Mode**: Responsive column layout
- **Column Width**: Auto or fixed
- **Height Mode**: SizeToAvailable, SizeToContent, or Fixed
- **Width Mode**: Auto, Column width, or Fixed

### Validation

Patterns enforce:
- Required controls
- Control placement
- Property settings
- Structural hierarchy

**Build errors** occur if pattern rules violated.

---

## UX Guidelines

### Consistency

- Use standard patterns for standard scenarios
- Don't customize unless truly necessary
- Follow Microsoft's UX guidelines

### Performance

- Limit grid columns (5-10 visible)
- Use deferred loading for large datasets
- Minimize FastTab count (< 10)

### Accessibility

- All controls must have labels
- Keyboard navigation required
- ARIA attributes for screen readers

### Responsive Design

- Forms adapt to screen size
- Mobile-friendly layouts
- Touch-friendly controls

---

## Custom Patterns

If standard patterns don't fit:

1. **Check subpatterns** - Can you compose from existing?
2. **Use General Form Guidelines** - Fallback pattern
3. **Test thoroughly** - Ensure consistency
4. **Document deviations** - Why custom?

---

## Resources

- [Form Styles and Patterns](https://learn.microsoft.com/en-us/dynamics365/fin-ops-core/dev-itpro/user-interface/form-styles-patterns)
- [UI Development Home](https://learn.microsoft.com/en-us/dynamics365/fin-ops-core/dev-itpro/user-interface/user-interface-development-home-page)
- [Form Pattern Guidelines](https://learn.microsoft.com/en-us/dynamics365/fin-ops-core/dev-itpro/user-interface/)

---

*Last Updated: 2025-11-21*
*Source: Microsoft Learn + HTML1.html analysis*
