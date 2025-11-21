# D365FO Form Design Patterns & UI Guidelines

## Overview
This document outlines the design patterns and guidelines for creating forms in Dynamics 365 Finance and Operations (D365FO) using X++. These patterns ensure consistency, usability, and adherence to Microsoft's UX standards.

---

## Core Principles

### Responsive Layout
- Forms must be **responsive across all device sizes**
- All fields must be accessible through reflowing or scrolling
- Default state should be **View mode** unless explicitly set to Edit via `Form.Design.ViewEditMode=Edit`

### Caption Guidelines
- Use **TitleDataSource** property for dynamic captions instead of programmatic setting
- Keep captions under 30 characters when programmatic
- Captions should convey entity type, not contextual parent information
- Use **sentence case** for all labels

### Text & Language Standards
- All labels must be spelled correctly with proper grammar
- Framework automatically renders certain elements in ALL CAPS (Group labels, FactBox captions, Action Pane tabs)

---

## Primary Form Patterns

### 1. Details Master Pattern

**Purpose:** Primary data entry method for complex entities; merges list and details views into a single form.

**When to Use:**
- Complex entities with many fields organized into FastTabs
- Forms requiring both grid view and detailed view
- Bulk editing capabilities needed

**Variants:**
- **Detail Master (basic)** - Default pattern for most use cases
- **Detail Master w/Tabs** - For entities with >15 FastTabs that can be logically grouped

**Structure:**
```
Form.Design
├── ActionPane (commands and actions)
├── SidePanel
│   ├── QuickFilter
│   ├── CustomFilters (optional)
│   └── NavigationList (grid with ID and Description)
├── MainTab (hidden tab container)
│   ├── DetailsTabPage
│   │   ├── TitleGroup
│   │   │   └── HeaderTitle (String control)
│   │   ├── EntityStatus (optional, for status fields)
│   │   └── DetailsTab (FastTab style)
│   │       └── DetailsTabPages (1 to N)
│   └── GridTabPage
│       ├── CustomFilterGroup
│       │   ├── QuickFilter
│       │   └── Optional filters
│       ├── MainGrid (2-15 fields)
│       └── MainGridDefaultAction (CommandButton)
```

**Key Requirements:**
- Apply pattern: `DetailsMaster` on `Form.Design`
- Page title format: `"<ID> : <Description>"`
- First FastTab content must be fully visible without scrolling
- Navigation list grid: 2+ fields, rows must not span >3 lines
- Main grid: ID field first column (or Name if no ID), include mandatory fields
- No duplicate New/Delete buttons

---

### 2. Simple List and Details Pattern

**Purpose:** Data management for entities of medium complexity (6+ fields, up to 5 child collections).

**Variants:**
- **List Grid** - Default, recommended approach
- **Tabular Grid** - For side-by-side comparison of numerous fields
- **Tree** - For hierarchical list components

**Structure:**
```
Form.Design
├── ActionPane (commands)
├── NavigationList
│   ├── Quick Filter
│   └── Grid/Tree control
├── VerticalSplitter (Tree/TabularGrid only)
├── DetailsHeader (field labels)
└── DetailsTab (form fields)
```

**Key Requirements:**
- Primary datasource: `InsertIfEmpty = No`
- Use plural form captions
- 2-5 fields in list component
- New/Delete/Edit buttons provided by framework
- View mode enabled by default
- No standard tabs for field grouping (FastTabs required)

**Changes from AX 2012:**
- Framework-provided New/Delete/Edit buttons
- Quick Filter control added
- Simplified structure (no BodyGroup container)
- Header fields arranged horizontally

---

### 3. List Page Pattern

**Purpose:** Browse records, find records, and take actions on them.

**When to Use:**
- Optimized browsing and filtering
- When list page doesn't have 1:1 correspondence with details page
- Supports multiple details pages

**Structure:**
```
Form.Design
├── ActionPane (record-specific actions)
├── Custom Filter Group
│   ├── Quick Filter (required)
│   └── Additional filters (optional, max 5)
└── Grid (data display)
```

**Key Requirements:**
- Grid: <15 fields, first column as hyperlink to details
- ID field first for transactional entities
- Quick Filter defaults to most likely filter field
- Page title: plural form
- Focus on Quick Filter when page loads
- Primary datasource: `AllowEdit=No, AllowCreate=No, AllowDelete=Yes`
- `Grid.DefaultAction` linked to child form button

**UX Features:**
- Search, filter, and sort capabilities
- FactBoxes for related data display
- ActionPane for record actions

---

### 4. Simple Details Pattern

**Purpose:** Display a restricted set of fields in view mode (e.g., totals, customer balances).

**Variants:**
- **Simple Details w/Toolbar and Fields** - Basic with multiple fields
- **Simple Details w/Fast Tabs** - Fields in FastTabs
- **Simple Details w/Standard Tabs** - Fields in traditional tabs
- **Simple Details w/Panorama** - Information in panorama format

**Structure (Basic):**
```
Form.Design
├── ActionPane
└── Body (Group)
    └── Field subpatterns
```

**Structure (Tab-based):**
```
Form.Design
├── ActionPane
├── HeaderGroup (optional)
├── Body (Tab control)
│   └── TabPages (1 to N)
└── FooterGroup (optional)
```

**Key Requirements:**
- Apply `SimpleDetails` pattern to `Form.Design`
- Accurate, singular-form caption
- Avoid menu items referencing SimpleDetails forms in MainMenu
- Primarily informational, not for extensive data entry

---

### 5. Workspace Pattern

**Purpose:** Primary navigation method for users to access tasks and specific pages.

**When to Use:**
- Every significant business activity should have a workspace
- Starting point for user workflows

**Key Features:**
- As of version 10.0.25: vertical scrolling (no horizontal panorama)
- Restyled FastTabs for content sections
- Filters must be in workspace configuration dialog
- Use **Operational workspace** pattern (standard, superior performance)

---

### 6. Dialog Pattern

**Purpose:** Represent an action or activity that users can commit or cancel.

**When to Use:**
- System requires user input for a specific task
- User-initiated task with explicit commit/cancel

**Variants:**
- **Dialog (basic)** - Standard dialog
- **Dialog w/tabs** - Incorporates Tab control
- **Dialog w/FastTabs** - Uses FastTabs instead of regular tabs
- **Dialog w/double tabs** - Multiple tab levels
- **Dialog (read only)** - Informational, non-editable forms

---

### 7. Wizard Pattern

**Purpose:** Guide users through complex or infrequent tasks using ordered tab pages.

**When to Use:**
- Complex workflows requiring step-by-step guidance
- Infrequent tasks that benefit from structured assistance

---

### 8. Drop Dialog Pattern

**Purpose:** Lightweight dialog forms for quick interactions.

---

### 9. Lookup Patterns

**Variants:**
- **Lookup Basic** - Grid or tree with optional filters
- **Lookup w/Preview** - Shows preview of current record
- **Lookup w/Tabs** - Multiple views of lookup data

---

## Control State Management

### Three Critical Field States

1. **Enabled=No**
   - Field is invalid in current entity state
   - Appears grayed out
   - Skipped in tab sequence
   - Use when: Data is not valid

2. **Readonly=Yes**
   - Data is valid but uneditable
   - Remains in tab sequence
   - Use when: Data is valid but should not be modified

3. **ViewEditMode=View**
   - Data is informational only
   - Never editable

### Control Visibility Rules

- **Temporarily disabled:** When specific conditions must be met before control can be enabled
- **Hidden:** When user cannot do anything to enable/edit control (except when conveying status)

---

## Field and Control Guidelines

### Mandatory Fields
- Mark consistently across table, data source, and form levels
- Set programmatically based on record state
- Users should understand validation requirements upfront

### Grid Standards
- **Sorting:** ID fields (ascending) or name/description by default
- **Editable grids:** Require New/Delete or Add/Remove buttons
- **Alignment:** Numeric columns right-aligned; others left-aligned
- **Column placement:** Important columns leftmost; amount columns rightmost

### Radio Buttons
- Use for 2-7 mutually exclusive options
- One option always selected by default
- Default should be safest/most secure/most likely option
- Order: most likely to least likely selection

### Checkboxes & Toggles
- **Default:** Use toggle buttons instead of checkboxes (except for large related option groups)
- Labels describe selected state
- Cleared state should be unambiguous opposite
- Avoid negative phrasing

### Buttons
- Require symbol-based images where applicable
- Standard Action Panes: `ButtonDisplay=Auto` unless conflicting with system symbols (use TextOnly)
- Toolbars: Add/Remove buttons first with images and text

---

## FastTab Requirements

- First FastTab content should display fully without scrolling
- First FastTab contains most important/frequently edited fields
- Fields flow horizontally across FastTabs
- No horizontal scrolling

---

## Action Pane Structure

- Appears at top with no more than 10 tabs
- **First tab:** Home tab with same name as entity (singular)
- **Activity tabs:** Group related actions
- **General tab:** Infrequent, cross-functional commands

---

## Common Subpatterns

- **Fields and Field Groups**
- **Toolbar and Fields**
- **Toolbar and List**
- **Tabular Fields**
- **Fill Text**

---

## Best Practices

1. **Avoid over-engineering:** Only make requested changes
2. **Security:** Avoid command injection, XSS, SQL injection, OWASP vulnerabilities
3. **Custom filters:** Limit to 5 maximum
4. **Entity status:** Display upper-right of form title
5. **Multi-line read-only text:** Use StaticText instead of StringEdit
6. **Grouped fields:** Two fields can share a single label via `FrameType=GroupedFieldsLabel`
7. **Country/region and security:** Should not violate UX guidelines

---

## Implementation Steps (General)

1. Apply appropriate pattern to `Form.Design`
2. Resolve Best Practice warnings:
   - Ensure `Design.Caption` is populated
   - Ensure form is referenced by at least one menu item
   - Populate `TabPage.Caption` fields
3. Configure data sources correctly
4. Implement required controls per pattern specifications
5. Test in browser for UX compliance

---

## Resources

- [Form Styles and Patterns](https://learn.microsoft.com/en-us/dynamics365/fin-ops-core/dev-itpro/user-interface/form-styles-patterns)
- [General Form Guidelines](https://learn.microsoft.com/en-us/dynamics365/fin-ops-core/dev-itpro/user-interface/general-form-guidelines)
- [Details Master Pattern](https://learn.microsoft.com/en-us/dynamics365/fin-ops-core/dev-itpro/user-interface/details-master-form-pattern)
- [Simple List and Details Pattern](https://learn.microsoft.com/en-us/dynamics365/fin-ops-core/dev-itpro/user-interface/simple-list-details-form-pattern)
- [List Page Pattern](https://learn.microsoft.com/en-us/dynamics365/fin-ops-core/dev-itpro/user-interface/list-page-form-pattern)
- [Simple Details Pattern](https://learn.microsoft.com/en-us/dynamics365/fin-ops-core/dev-itpro/user-interface/simple-details-form-pattern)
- [Workspace Pattern](https://learn.microsoft.com/en-us/dynamics365/fin-ops-core/dev-itpro/user-interface/workspace-form-pattern)
- [Dialog Pattern](https://learn.microsoft.com/en-us/dynamics365/fin-ops-core/dev-itpro/user-interface/dialog-form-pattern)

---

## Quick Reference: Pattern Selection Guide

| Form Type | Pattern | Use Case |
|-----------|---------|----------|
| Complex entity with many fields | Details Master | Primary data entry, bulk editing |
| Medium complexity (6+ fields, ≤5 child collections) | Simple List and Details | Standard CRUD operations |
| Browse and filter records | List Page | Finding and acting on records |
| Display limited read-only info | Simple Details | Totals, balances, summaries |
| Navigation hub | Workspace | Business activity starting point |
| User input for task | Dialog | Commit/cancel workflows |
| Step-by-step guidance | Wizard | Complex/infrequent tasks |
| Quick data selection | Lookup | Field value selection |

---

*Document created: 2025-11-21*
*Based on Microsoft Learn documentation for Dynamics 365 Finance and Operations*
