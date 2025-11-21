# D365FO Grid Structure Analysis

**Source**: HTML1.html lines 4280-4309
**Component**: Customer grid (FixedDataTable implementation)

---

## Grid Framework

D365FO uses **FixedDataTable** library for grids - a React-based virtualized table component.

### Key Classes

```
fixedDataTable* - Main grid framework classes
dyn-* - D365FO specific grid classes
public_fixedDataTable* - Public API classes
```

---

## Grid Class Hierarchy

### 1. Header Row

```html
<div class="fixedDataTableRowLayout_rowWrapper">
  <div class="fixedDataTableRowLayout_main
              public_fixedDataTableRow_main
              public_fixedDataTable_headerRow">

    <!-- Header cells -->
    <div class="fixedDataTableCellLayout_main
                public_fixedDataTableCell_main
                public_fixedDataTableCell_hasReorderHandle"
         role="columnheader"
         aria-sort="none">

      <!-- Column resizer -->
      <div class="fixedDataTableCellLayout_columnResizerContainer">
        <div class="fixedDataTableCellLayout_columnResizerKnob
                    public_fixedDataTableCell_columnResizerKnob">
        </div>
      </div>

      <!-- Column reorder handle -->
      <div class="fixedDataTableCellLayout_columnReorderContainer">
      </div>

      <!-- Cell content -->
      <div class="fixedDataTableCellLayout_wrap1
                  public_fixedDataTableCell_wrap1">
        <div class="fixedDataTableCellLayout_wrap2
                    public_fixedDataTableCell_wrap2">
          <div class="fixedDataTableCellLayout_wrap3
                      public_fixedDataTableCell_wrap3">
            <div class="public_fixedDataTableCell_cellContent">

              <!-- D365FO header cell -->
              <div class="dyn-headerCell _1stt52k isFilterable"
                   data-dyn-columnname="CustTable_AccountNum"
                   data-dyn-controlname="CustTable_AccountNum"
                   id="CustTable_AccountNum_144_0_header">

                <!-- Header label -->
                <div class="dyn-headerCellLabel _1hxomlv"
                     title="Account">
                  Account
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```

#### Header Cell Classes

- `fixedDataTableCellLayout_main` - Main cell layout
- `public_fixedDataTableCell_main` - Public cell
- `public_fixedDataTableCell_hasReorderHandle` - Supports column reordering
- `dyn-headerCell` - D365FO header cell
- `isFilterable` - Column supports filtering
- `dyn-headerCellLabel` - Header text container

---

### 2. Body Rows

```html
<div class="fixedDataTableRowLayout_rowWrapper">
  <div class="fixedDataTableRowLayout_main
              public_fixedDataTableRow_main
              public_fixedDataTableRow_even
              _s7okcqi
              public_fixedDataTable_bodyRow"
       role="row"
       aria-rowindex="2"
       data-dyn-row-active="true"
       id="Grid_144_0-row-0">

    <!-- Row body -->
    <div class="fixedDataTableRowLayout_body">

      <!-- Cell groups -->
      <div class="fixedDataTableCellGroupLayout_cellGroupWrapper">
        <div class="fixedDataTableCellGroupLayout_cellGroup">

          <!-- Individual cell -->
          <div class="fixedDataTableCellLayout_main
                      public_fixedDataTableCell_main"
               role="gridcell"
               id="GridCell-0-CustTable_AccountNum">

            <!-- Cell wrapping (3 levels) -->
            <div class="fixedDataTableCellLayout_wrap1
                        public_fixedDataTableCell_wrap1
                        dyn-activeRowCell">
              <div class="fixedDataTableCellLayout_wrap2
                          public_fixedDataTableCell_wrap2">
                <div class="fixedDataTableCellLayout_wrap3
                            public_fixedDataTableCell_wrap3">
                  <div class="public_fixedDataTableCell_cellContent">

                    <!-- D365FO field control -->
                    <div class="dyn-container _u097gw dyn-stringEdit"
                         id="CustTable_AccountNum_144_0_0"
                         data-dyn-controlname="CustTable_AccountNum">

                      <div class="dyn-container _1xz16d8">
                        <input id="CustTable_AccountNum_144_0_0_input"
                               readonly=""
                               role="textbox"
                               type="text"
                               aria-label="Account"
                               class="dyn-field dyn-hyperlink _1n2l0m9"
                               value="DE-001"
                               title="DE-001

Click to follow link">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```

#### Body Row Classes

**Row Level**:
- `fixedDataTableRowLayout_main` - Main row layout
- `public_fixedDataTableRow_main` - Public row class
- `public_fixedDataTableRow_even` / `public_fixedDataTableRow_odd` - Zebra striping
- `public_fixedDataTable_bodyRow` - Body row marker
- `public_fixedDataTableRow_highlighted` - Hover/selected state
- `data-dyn-row-active="true"` - Active row indicator

**Cell Level**:
- `fixedDataTableCellLayout_main` - Main cell layout
- `public_fixedDataTableCell_main` - Public cell
- `dyn-activeRowCell` - Active row cell (current)
- `dyn-inactiveRowCell` - Inactive row cell

**Field Level**:
- `dyn-container` - D365FO container
- `dyn-stringEdit` - String edit control
- `dyn-field` - Field class
- `dyn-hyperlink` - Hyperlink field
- `_1n2l0m9`, `_7gf207`, etc. - CSS module classes (hashed)

---

## Marking Column (Checkbox)

```html
<div class="fixedDataTableCellLayout_main
            public_fixedDataTableCell_main"
     role="gridcell"
     style="width: 28.6px;">

  <div aria-checked="false"
       role="checkbox"
       tabindex="-1"
       title="Select or unselect row"
       class="fixedDataTableCellLayout_wrap1
              public_fixedDataTableCell_wrap1
              dyn-markingColumn
              dyn-isFixed
              dyn-activeRowCell _7cafhf"
       style="cursor: pointer;">

    <div class="fixedDataTableCellLayout_wrap2
                public_fixedDataTableCell_wrap2">
      <div class="fixedDataTableCellLayout_wrap3
                  public_fixedDataTableCell_wrap3">
        <div class="public_fixedDataTableCell_cellContent">
          <div class="dyn-hoverMarkingColumn"></div>
        </div>
      </div>
    </div>
  </div>
</div>
```

### Marking Column Classes

- `dyn-markingColumn` - Checkbox/marking column
- `dyn-isFixed` - Fixed (pinned) column
- `dyn-hoverMarkingColumn` - Hover state container
- `aria-checked="false"` - Checkbox state
- `role="checkbox"` - Accessibility role

---

## Column Types

### 1. Hyperlink Column

```html
<input class="dyn-field dyn-hyperlink _1n2l0m9"
       role="textbox"
       readonly=""
       type="text"
       value="DE-001"
       title="DE-001

Click to follow link">
```

**Classes**: `dyn-field dyn-hyperlink`

### 2. Regular Text Column

```html
<input class="dyn-field _7gf207"
       role="textbox"
       readonly=""
       type="text"
       value="01234 56789"
       title="01234 56789">
```

**Classes**: `dyn-field`

---

## Grid Features

### 1. Column Resizing

```html
<div class="fixedDataTableCellLayout_columnResizerContainer">
  <div class="fixedDataTableCellLayout_columnResizerKnob
              public_fixedDataTableCell_columnResizerKnob">
  </div>
</div>
```

**Purpose**: Allows user to resize column widths

### 2. Column Reordering

```html
<div class="fixedDataTableCellLayout_columnReorderContainer">
</div>
```

**Purpose**: Drag-and-drop column reordering

### 3. Filterable Columns

```html
<div class="dyn-headerCell _1stt52k isFilterable">
  <div class="dyn-headerCellLabel">Column Name</div>
</div>
```

**Class**: `isFilterable` on header cells

### 4. Active/Inactive Rows

- **Active row**: `dyn-activeRowCell` on cells
- **Inactive row**: `dyn-inactiveRowCell` on cells
- **Row indicator**: `data-dyn-row-active="true"`

### 5. Zebra Striping

- Even rows: `public_fixedDataTableRow_even`
- Odd rows: `public_fixedDataTableRow_odd`

### 6. Hover State

- Class: `public_fixedDataTableRow_highlighted`

---

## Inline Styles

D365FO grids use extensive inline styles for dynamic layout:

```html
style="height: 24px;
       width: 113px;
       left: 0px;
       transform: translate3d(0px, 0px, 0px);"
```

**Properties**:
- `height` - Row/cell height
- `width` - Column width
- `left` - Column position
- `transform: translate3d()` - Hardware-accelerated positioning

---

## Grid Measurements (from HTML)

### Row Heights
- Header row: `23px`
- Body row: `24px`

### Column Widths (Customer grid example)
- Marking column: `28.6px`
- Account: `113px`
- Name: `155px`
- Invoice account: `113px`
- Customer group: `113px`
- Currency: `71px`
- Telephone: `155px`
- Extension: `71px`
- Is merged: `71px`
- Options menu: `20px`

---

## Cell Wrapping Levels

D365FO uses **3 levels of wrapping** for layout control:

```
fixedDataTableCellLayout_wrap1
  └─ fixedDataTableCellLayout_wrap2
      └─ fixedDataTableCellLayout_wrap3
          └─ public_fixedDataTableCell_cellContent
              └─ (D365FO control)
```

**Purpose**: Multi-level wrapping allows precise control over:
- Borders
- Padding
- Background colors
- Selection states
- Layout positioning

---

## CSS Module Classes

D365FO uses CSS modules with hashed class names:

```css
_1stt52k    /* Header cell */
_1hxomlv    /* Header cell label */
_15v18tk    /* Alternative header label */
_u097gw     /* String edit container */
_1xz16d8    /* Inner container */
_1n2l0m9    /* Hyperlink field */
_7gf207     /* Regular field */
_m9fsl2     /* Alternative field style */
_s7okcqi    /* Row style */
_7cafhf     /* Marking column style */
```

**Note**: These are auto-generated and change between builds. Use `dyn-*` classes for stable references.

---

## Data Attributes

### Column Attributes
```html
data-dyn-columnname="CustTable_AccountNum"
data-dyn-controlname="CustTable_AccountNum"
id="CustTable_AccountNum_144_0_header"
```

### Cell Attributes
```html
id="GridCell-0-CustTable_AccountNum"
id="CustTable_AccountNum_144_0_0"
data-dyn-controlname="CustTable_AccountNum"
data-dyn-focus="input"
```

### Row Attributes
```html
role="row"
aria-rowindex="2"
data-dyn-row-active="true"
id="Grid_144_0-row-0"
```

---

## Accessibility Features

### ARIA Attributes

**Grid level**:
```html
role="grid"
```

**Row level**:
```html
role="row"
aria-rowindex="2"
```

**Cell level**:
```html
role="gridcell"
role="columnheader"
aria-sort="none"
```

**Checkbox**:
```html
role="checkbox"
aria-checked="false"
title="Select or unselect row"
```

**Field**:
```html
role="textbox"
aria-label="Account"
aria-invalid="false"
```

---

## Recommendations for Examples

### Simple Approach (Recommended)

For mockup purposes, we don't need full FixedDataTable complexity:

```html
<div class="dyn-grid">
  <!-- Header -->
  <div class="dyn-grid-header">
    <div class="dyn-headerCell isFilterable">
      <div class="dyn-headerCellLabel">Account</div>
    </div>
    <div class="dyn-headerCell isFilterable">
      <div class="dyn-headerCellLabel">Name</div>
    </div>
  </div>

  <!-- Body -->
  <div class="dyn-grid-body">
    <div class="dyn-grid-row dyn-grid-row-even" data-dyn-row-active="true">
      <div class="dyn-grid-cell dyn-activeRowCell">
        <div class="dyn-container dyn-stringEdit">
          <input class="dyn-field dyn-hyperlink"
                 value="DE-001"
                 readonly>
        </div>
      </div>
      <div class="dyn-grid-cell dyn-activeRowCell">
        <div class="dyn-container dyn-stringEdit">
          <input class="dyn-field"
                 value="Contoso Europe"
                 readonly>
        </div>
      </div>
    </div>
  </div>
</div>
```

### Key Classes to Implement

**Grid**:
- `dyn-grid` - Grid container
- `dyn-grid-header` - Header row
- `dyn-grid-body` - Body container
- `dyn-grid-row` - Row
- `dyn-grid-cell` - Cell

**Header**:
- `dyn-headerCell` - Header cell
- `dyn-headerCellLabel` - Header text
- `isFilterable` - Filterable column indicator

**Row States**:
- `dyn-grid-row-even` / `dyn-grid-row-odd` - Zebra striping
- `dyn-grid-row-highlighted` - Hover/selected
- `data-dyn-row-active="true"` - Active row

**Cell States**:
- `dyn-activeRowCell` - Active row cell
- `dyn-inactiveRowCell` - Inactive row cell
- `dyn-markingColumn` - Checkbox column

**Field Types**:
- `dyn-container` - Field container
- `dyn-stringEdit` - String edit control
- `dyn-field` - Input field
- `dyn-hyperlink` - Hyperlink field

---

## Summary

D365FO grids use:

1. ✅ **FixedDataTable** library (React-based virtualized table)
2. ✅ **3-level cell wrapping** for layout control
3. ✅ **Inline styles** for dynamic positioning
4. ✅ **CSS modules** with hashed classes
5. ✅ **D365FO classes** prefixed with `dyn-`
6. ✅ **Extensive ARIA** attributes for accessibility
7. ✅ **Column features**: resizing, reordering, filtering
8. ✅ **Row states**: active, inactive, highlighted, even/odd
9. ✅ **Field types**: hyperlink, regular text, etc.

For mockups, use simplified structure with `dyn-*` classes while maintaining visual fidelity.

---

*Analysis Date: 2025-11-21*
*Source: HTML1.html lines 4280-4309*
