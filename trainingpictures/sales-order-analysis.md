# Sales Order Form Analysis

## Screenshot Details
**Form**: Sales order details (000724 - Birch Company)
**Pattern**: Details Transaction or Details Master
**Module**: Finance and Operations > Sales order

---

## Overall Layout

### Page Structure
```
Top Navigation Bar (48px)
Breadcrumb Navigation (40px)
Action Pane with Tabs
  - Multiple tabs: Edit, New, Delete, Sales order, Sell, Manage, etc.
  - Command buttons below tabs
Main Content Area
  - Page header: "000724 : Birch Company"
  - View tabs: Lines | Header
  - Collapsible sections:
    - Summary by Copilot (with loading indicator)
    - Sales order header
    - Sales order lines (grid)
  - Line details section at bottom
```

---

## Detailed Component Analysis

### Top Navigation Bar
**Consistent with customer list**:
- Background: Dark blue (#0078d4)
- Height: 48px
- Contains: Menu, title, search, company info, icons

### Action Pane Tabs
**First Row (Tabs)**:
- Edit
- New
- Delete
- **Sales order** (active - with blue underline)
- Sell
- Manage
- Pick and pack
- Invoice
- Commerce
- General
- Warehouse
- Transportation
- Credit management
- Options

**Second Row (Commands under "Sales order" tab)**:
Groups visible:
1. **Maintain**:
   - Service order
   - Purchase order
   - Direct delivery

2. **Generate**:
   - Cancel

3. **Payments**:
   - Multiple payment options

4. **Setup**:
   - From all
   - From journal

5. **Totals**:
   - Totals
   - Order events
   - Deleted status

6. **Subscription billing**:
   - Billing information

7. **Functions**:
   - Order credit
   - Sales order recap
   - Order holder

8. **Attachments**:
   - Notes

9. **Clean**:
   - Email notification log

10. **Sales**:
    - Clean up sales update history

11. **Engineering change management**:
    - New engineering change request
    - View engineering change requests

### Page Header Section
**Layout**:
```
[Sales order details] | [My view ▼]
000724 : Birch Company                                                [Open order →]
```

**Components**:
- Breadcrumb link: "Sales order details" (blue hyperlink)
- View selector: "My view" dropdown
- Title: "000724 : Birch Company" (large, ~21px)
- Action link: "Open order" on right side

### View Tabs
**Tabs**:
- **Lines** (active)
- **Header**

Style: Horizontal tabs below page title

### Collapsible Sections

#### 1. Summary by Copilot (FastTab)
**Status**: Expanded, loading
**Content**:
- Loading message: "Generating summary... This may take a moment."
- Sub-text: "Feel free to continue with other activities."
- Loading indicator (three dots animation)
- Collapse button (^) on right

**Styling**:
- Background: White
- Border: Light gray
- Padding: 16px
- Loading icon: Blue circular spinner

#### 2. Sales order header (FastTab)
**Status**: Collapsed
**Indicator**: "▼" (expand arrow)
**Location**: Below Summary section

#### 3. Sales order lines (Grid Section)
**Toolbar Above Grid**:
Buttons (left to right):
- `+ Add line`
- `↯ Add lines`
- `Add products`
- `🗑 Remove`
- `Deferrals`
- `Sales order line ▼` (dropdown)
- `Financials ▼`
- `Inventory ▼`
- `Product and supply ▼`
- `Update line ▼`
- `Warehouse ▼`
- `Retail ▼`
- `Engineering change ▼`
- `Add revenue split child item ▼`
- `Billing schedule details`

**Grid Columns** (left to right):
1. ☰ (checkbox/selector)
2. `+` (expand icon)
3. **Variant number**
4. **Item number** (blue hyperlink) - "00006"
5. **Product name** - "Car Audio System / Car A..."
6. **Sales category** - "Auto audio systems"
7. **CW quantity**
8. **CW unit**
9. **Revenue t...**
10. **Revenue s...**
11. **Percent am...**
12. **Quantity** - "51.00"
13. **Unit** - "ea"
14. **Delivery type** - "Stock"
15. **CW deliver...**
16. **Adjusted ex...** - "0.00000"
17. **S/a** - "4"
18. **Warehouse** - "41"
19. **Unit price** - "700.00"
20. **Discount**
21. **Discount p...**
22. **Net amount** - "$5,700.00"
23. **Adjusted ex...** - "0.00"
24. **Quality order status**
25. **Deliver now**
26. **Line type**
27. **Source code**

**Second Row**:
- Item number: "50001"
- Product name: "Installation services"
- Quantity: "8.00 ea"
- Delivery type: "Stock"
- Adjusted: "0.00000 4"
- Warehouse: "41"
- Unit price: "250.00"
- Net amount: "1,500.00"
- Adjusted: "0.00"
- Source: "Regular"

**Grid Styling**:
- Header: Light gray background (#f3f2f1)
- Column headers: Bold, with dropdown arrows (▼) for filters
- Rows: White background
- Selected row: Light blue highlight
- Alternating rows: Subtle gray/white
- Font size: 12px
- Cell padding: 8px
- Borders: Light gray between columns and rows
- Many columns have truncated text with "..." (ellipsis)

#### 4. Line details (FastTab)
**Status**: Collapsed
**Location**: Bottom of page
**Indicator**: "▼" (expand arrow on right)

---

## Key UI Elements

### FastTab Headers
```css
background: #f3f2f1;
padding: 12px 16px;
font-size: 12px;
font-weight: 600;
text-transform: uppercase;
border-top: 1px solid #e1dfdd;
cursor: pointer;
```

**Collapsed State**:
- Arrow: ▼ (pointing down)
- No content visible

**Expanded State**:
- Arrow: ^ (pointing up)
- Content area visible below
- Border-bottom on content area

### Loading Indicator
**Copilot Loading State**:
- Icon: Circular spinner (blue)
- Message: Multi-line text
- Style: Centered in FastTab
- Background: White
- Animation: Rotating spinner + dots

### Grid Toolbar
**Layout**:
```
[+ Add line] [↯ Add lines] [Add products] [🗑 Remove] ... [More buttons →]
```

**Button Styles**:
- Height: ~32px
- Padding: 6px 12px
- Font-size: 12px
- Border: 1px solid #d2d0ce
- Background: White
- Icon + text layout
- Dropdowns have ▼ indicator

### Grid Features
**Interactions**:
1. **Checkbox column**: Select rows
2. **Expand column** (+): Expand row details
3. **Hyperlinks**: Blue, underlined on hover
4. **Column dropdowns**: Filter/sort options
5. **Horizontal scroll**: Many columns (scrollable)
6. **Column resizing**: Drag column borders

**Data Types in Columns**:
- Text: Left-aligned
- Numbers: Right-aligned
- Currency: Right-aligned with $ symbol and decimal places
- Dropdowns: Text with ▼ indicator in header

---

## Color Palette Verification

### Confirmed Colors
```css
/* From this screenshot */
--nav-blue: #0078d4;
--link-blue: #0078d4;
--grid-header-bg: #f3f2f1;
--fasttab-header-bg: #f3f2f1;
--border-gray: #e1dfdd;
--border-light: #d2d0ce;
--white: #ffffff;
--text-dark: #323130;
```

---

## Typography Verification

### Font Sizes Confirmed
```css
--page-title: 21px, font-weight: 600;
--section-header: 12px, font-weight: 600, text-transform: uppercase;
--grid-text: 12px;
--button-text: 12px;
--link-text: 12px;
```

---

## Form Pattern Identification

**Pattern**: Details Transaction or Details Master

**Characteristics**:
1. ✅ Page header with ID and description
2. ✅ Action Pane with multiple tabs
3. ✅ View tabs (Lines/Header)
4. ✅ Multiple FastTabs (collapsible sections)
5. ✅ Data grid with toolbar
6. ✅ Many columns with horizontal scrolling
7. ✅ Line details section
8. ✅ Command buttons above grid

**Matches Documentation**:
- Details Transaction pattern for sales orders
- Grid view for line items
- Header/Lines split view
- Toolbar for line operations
- FastTabs for grouping information

---

## Unique Features Observed

### 1. Copilot Integration
- "Summary by Copilot" FastTab
- AI-powered summary generation
- Loading state with user-friendly message
- Blue Copilot icon

### 2. Multi-line Grid Toolbar
- Extensive toolbar with 15+ buttons
- Grouped functionality (Add, Modify, View, etc.)
- Dropdown menus for related actions
- Icon + text combination

### 3. Column Management
- 25+ columns visible
- Column headers with dropdown filters
- Sortable columns
- Resizable columns
- Horizontal scrolling

### 4. Expandable Rows
- "+" icon in grid to expand row
- Show additional details inline
- Nested information display

---

## Comparison with Customer List

### Similarities
- Top navigation bar (identical)
- Action Pane structure (tabs + commands)
- Grid styling (headers, borders, fonts)
- Command button layout
- Overall color scheme

### Differences
- **View tabs** (Lines/Header) not in list page
- **FastTabs** for collapsible sections
- **More complex grid** with 25+ columns vs 9 columns
- **Toolbar above grid** with line operations
- **Expandable rows** with + icon
- **Loading states** for dynamic content
- **Page title format**: "ID : Name" vs just "Name"

---

## Implementation Notes

### For Mockup Development

**Key Elements to Implement**:
1. FastTab component (collapsible sections)
2. Loading indicator with message
3. Grid toolbar with many buttons
4. Expandable row functionality
5. View tabs (Lines/Header)
6. Page title with ID : Name format
7. Extensive column grid with horizontal scroll
8. Column dropdown filters

**CSS Requirements**:
- FastTab collapse/expand animation
- Loading spinner animation
- Toolbar button styling
- Multi-column grid layout
- Expandable row transition
- View tab styling

**JavaScript Requirements**:
- FastTab toggle functionality
- Loading state management
- Row expand/collapse
- Toolbar button actions
- Column filtering/sorting
- View tab switching

---

## Measurements

### Component Heights
- Navigation bar: 48px
- Breadcrumb: 40px
- Action Pane tabs: ~40px
- Action Pane commands: ~70px (two rows visible)
- Page header: ~60px
- View tabs: ~40px
- FastTab header: ~40px
- Grid toolbar: ~40px
- Grid header: ~32px
- Grid row: ~32px
- Status area: Variable

### Spacing
- Between FastTabs: 0px (borders touch)
- Toolbar button gap: 8px
- Grid cell padding: 8px horizontal, 6px vertical
- FastTab content padding: 16px

---

*Analysis completed for Sales Order form (000724)*
*Pattern: Details Transaction / Details Master*
*Date: 2025-11-21*
