# D365FO Main Workspace/Dashboard Analysis

## Screenshot Details
**Page Type**: Main dashboard/workspace (home page)
**Pattern**: Workspace form pattern
**Purpose**: Primary landing page and navigation hub

---

## Based on Typical D365FO Workspaces

D365FO workspaces typically include these sections visible on a main page:

### Overall Layout Structure
```
Top Navigation Bar (48px)
Breadcrumb Navigation (40px)
Sidebar (48px collapsed)
Main Content Area
├── Workspace Title
├── Tiles Section (Key metrics/shortcuts)
├── Lists Section (Recent activities/tasks)
├── Charts/Analytics Section
└── Links Section (Quick actions)
```

---

## Common Workspace Components

### 1. Workspace Header
**Typical Layout**:
```
[Workspace Icon] Workspace Title                                    [Actions ▼]
Brief description of workspace purpose
```

**Styling**:
- Title: 21-24px, font-weight 600
- Icon: 32-40px, color-coded by module
- Description: 12px, secondary text color (#605e5c)
- Padding: 20-24px

### 2. Tiles Section
**Purpose**: Quick metrics and KPIs

**Tile Layout**:
```
┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐
│  Title      │  │  Title      │  │  Title      │  │  Title      │
│             │  │             │  │             │  │             │
│    Count    │  │    Count    │  │    Count    │  │    Count    │
│   Subtitle  │  │   Subtitle  │  │   Subtitle  │  │   Subtitle  │
└─────────────┘  └─────────────┘  └─────────────┘  └─────────────┘
```

**Tile Specifications**:
```css
/* Tile Container */
.workspace-tile {
  background: white;
  border: 1px solid #e1dfdd;
  border-radius: 2px;
  padding: 16px;
  min-height: 120px;
  cursor: pointer;
  transition: box-shadow 0.2s;
}

.workspace-tile:hover {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

/* Tile Title */
.tile-title {
  font-size: 12px;
  font-weight: 600;
  color: #323130;
  margin-bottom: 8px;
  text-transform: uppercase;
}

/* Tile Count */
.tile-count {
  font-size: 32px;
  font-weight: 600;
  color: #0078d4;
  line-height: 1;
  margin: 12px 0;
}

/* Tile Subtitle */
.tile-subtitle {
  font-size: 11px;
  color: #605e5c;
}
```

**Common Tile Types**:
1. **Count Tiles**
   - Large number (e.g., "24")
   - Title (e.g., "Open orders")
   - Subtitle (e.g., "This week")
   - Click action: Navigate to filtered list

2. **Status Tiles**
   - Status indicator (color-coded)
   - Count or percentage
   - Status text
   - Click action: View details

3. **Action Tiles**
   - Icon or symbol
   - Action text
   - Quick shortcut
   - Click action: Open form or dialog

### 3. Lists Section
**Purpose**: Show recent items, tasks, or activities

**List Layout**:
```
Recent Sales Orders                                              [View all →]
────────────────────────────────────────────────────────────────────────────
Order #     Customer              Amount        Status          Date
────────────────────────────────────────────────────────────────────────────
000724      Birch Company         $7,200.00     Open           11/20/2025
000723      Oak Company           $15,400.00    Processing     11/19/2025
000722      Maple Company         $3,650.00     Invoiced       11/18/2025
```

**List Styling**:
```css
/* List Container */
.workspace-list {
  background: white;
  border: 1px solid #e1dfdd;
  border-radius: 2px;
  margin-bottom: 16px;
}

/* List Header */
.list-header {
  padding: 12px 16px;
  border-bottom: 1px solid #e1dfdd;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.list-title {
  font-size: 14px;
  font-weight: 600;
  color: #323130;
}

.list-view-all {
  font-size: 12px;
  color: #0078d4;
  text-decoration: none;
}

/* List Items */
.list-item {
  padding: 12px 16px;
  border-bottom: 1px solid #edebe9;
  display: grid;
  grid-template-columns: auto 1fr auto auto auto;
  gap: 16px;
  cursor: pointer;
}

.list-item:hover {
  background: #f3f2f1;
}

.list-item:last-child {
  border-bottom: none;
}
```

### 4. Charts Section
**Purpose**: Visual analytics and trends

**Chart Types**:
1. **Bar Charts**
   - Sales by period
   - Orders by status
   - Revenue comparison

2. **Line Charts**
   - Trends over time
   - Forecasts
   - Historical data

3. **Pie/Donut Charts**
   - Distribution breakdown
   - Category percentages
   - Status distribution

**Chart Container**:
```css
.workspace-chart {
  background: white;
  border: 1px solid #e1dfdd;
  border-radius: 2px;
  padding: 16px;
  min-height: 300px;
}

.chart-title {
  font-size: 14px;
  font-weight: 600;
  color: #323130;
  margin-bottom: 16px;
}

.chart-canvas {
  width: 100%;
  height: 250px;
}
```

### 5. Links Section
**Purpose**: Quick access to related pages

**Link Grid Layout**:
```
Quick Links
────────────────────────────────────────────
📋 New sales order     📊 Sales reports
👥 Customers           📈 Analytics
🏷️  Products           ⚙️  Settings
```

**Link Styling**:
```css
.links-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 12px;
  padding: 16px;
}

.link-item {
  background: white;
  border: 1px solid #e1dfdd;
  border-radius: 2px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  text-decoration: none;
  color: #323130;
}

.link-item:hover {
  background: #f3f2f1;
  border-color: #0078d4;
}

.link-icon {
  font-size: 20px;
  color: #0078d4;
}

.link-text {
  font-size: 12px;
  font-weight: 600;
}
```

---

## Typical Workspace Layouts

### Option 1: Operational Workspace (Modern)
```
┌────────────────────────────────────────────────────────────────┐
│ [Icon] Sales Order Processing                           [⋮]   │
│ Monitor and manage sales orders                                │
├────────────────────────────────────────────────────────────────┤
│ ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐           │
│ │ 24   │  │ 156  │  │ $45K │  │ 8    │  │ 92%  │           │
│ │ Open │  │ Total│  │ Rev. │  │ Late │  │ Fill │           │
│ └──────┘  └──────┘  └──────┘  └──────┘  └──────┘           │
├────────────────────────────────────────────────────────────────┤
│ Recent Sales Orders                              [View all →] │
│ ┌──────────────────────────────────────────────────────────┐ │
│ │ 000724  Birch Co.    $7,200   Open      11/20/2025      │ │
│ │ 000723  Oak Co.      $15,400  Process   11/19/2025      │ │
│ │ 000722  Maple Co.    $3,650   Invoiced  11/18/2025      │ │
│ └──────────────────────────────────────────────────────────┘ │
├────────────────────────────────────────────────────────────────┤
│ ┌──────────────────────┐  ┌──────────────────────┐          │
│ │ Sales by Region      │  │ Revenue Trend        │          │
│ │ [Bar Chart]          │  │ [Line Chart]         │          │
│ └──────────────────────┘  └──────────────────────┘          │
└────────────────────────────────────────────────────────────────┘
```

### Option 2: Dashboard-Style Workspace
```
┌────────────────────────────────────────────────────────────────┐
│ [Icon] Financial Dashboard                               [⋮]  │
├────────────────────────────────────────────────────────────────┤
│ ┌─────────────────┐  ┌─────────────────┐  ┌────────────────┐ │
│ │ Revenue         │  │ Expenses        │  │ Profit         │ │
│ │ $1.2M           │  │ $850K           │  │ $350K          │ │
│ │ ↑ 12% vs LM     │  │ ↓ 5% vs LM      │  │ ↑ 18% vs LM    │ │
│ └─────────────────┘  └─────────────────┘  └────────────────┘ │
├────────────────────────────────────────────────────────────────┤
│ ┌───────────────────────────────────────┐  ┌───────────────┐ │
│ │ Monthly Trends                        │  │ Top Customers │ │
│ │ [Combined Bar/Line Chart]             │  │ [List]        │ │
│ │                                       │  │               │ │
│ └───────────────────────────────────────┘  └───────────────┘ │
├────────────────────────────────────────────────────────────────┤
│ Quick Actions                                                  │
│ ┌──────────────┐  ┌──────────────┐  ┌──────────────┐        │
│ │ 📋 New Order │  │ 👥 Customers │  │ 📊 Reports   │        │
│ └──────────────┘  └──────────────┘  └──────────────┘        │
└────────────────────────────────────────────────────────────────┘
```

---

## Workspace FastTab Structure

When workspaces use FastTabs (vertical scrolling):

```
Workspace Title
▼ Summary (FastTab - Expanded)
  ├── Tiles (metrics)
  └── Key info
▼ Work lists (FastTab - Expanded)
  ├── My tasks
  ├── Recent orders
  └── Pending approvals
▼ Analytics (FastTab - Collapsed)
▶ Links (FastTab - Collapsed)
▶ Related information (FastTab - Collapsed)
```

---

## Color Coding by Module

Workspaces often use color-coded accents:

```css
/* Sales and Marketing */
--module-sales: #0078d4;

/* Procurement */
--module-procurement: #00bcf2;

/* Inventory */
--module-inventory: #00b294;

/* Finance */
--module-finance: #8764b8;

/* Production */
--module-production: #ff8c00;

/* Project */
--module-project: #e81123;
```

---

## Responsive Behavior

### Desktop (>1200px)
- Multi-column tile layout (4-5 tiles per row)
- Side-by-side charts
- Full-width lists
- All sections visible

### Tablet (768px - 1200px)
- 2-3 tiles per row
- Stacked charts
- Condensed lists
- Scrollable content

### Mobile (<768px)
- Single column layout
- Full-width tiles
- Simplified charts
- Minimal list items
- Pull-to-refresh

---

## Interactions

### Tile Clicks
- Navigate to filtered list view
- Open details dialog
- Execute quick action
- Show drill-down data

### List Item Clicks
- Open details form
- Show inline preview
- Navigate to transaction

### Chart Interactions
- Hover for details
- Click segments for drill-down
- Legend toggle
- Time period selection

---

## Performance Considerations

### Data Loading
- **Tiles**: Load first (critical metrics)
- **Lists**: Load second (recent data)
- **Charts**: Load last (analytics)
- Show loading indicators for each section

### Refresh
- Auto-refresh tiles every 30-60 seconds
- Manual refresh button
- Pull-to-refresh on mobile
- Real-time updates via SignalR (optional)

---

## Typical Workspace Examples

### 1. Sales Order Processing Workspace
**Tiles**:
- Open orders count
- Total orders this week
- Revenue this month
- Late orders count
- Fulfillment rate

**Lists**:
- Recent sales orders
- Pending approvals
- Customer requests
- Shipping delays

**Charts**:
- Sales by region
- Revenue trend
- Order status distribution

**Links**:
- New sales order
- Customers
- Products
- Reports

### 2. Accounts Receivable Workspace
**Tiles**:
- Outstanding balance
- Overdue invoices
- Collections this month
- Average days to pay
- Bad debt percentage

**Lists**:
- Recent invoices
- Overdue accounts
- Payment receipts
- Credit holds

**Charts**:
- Aging analysis
- Collection trends
- Payment methods

**Links**:
- Customer payments
- Invoice journal
- Collections
- Reports

### 3. Inventory Management Workspace
**Tiles**:
- Items in stock
- Low stock items
- Pending receipts
- Pending issues
- Inventory value

**Lists**:
- Recent transactions
- Stock movements
- Transfer orders
- Cycle counts

**Charts**:
- Stock levels by warehouse
- Turnover analysis
- ABC classification

**Links**:
- Item master
- Warehouses
- Inventory journal
- Reports

---

## Implementation Checklist

### HTML Structure
- [ ] Workspace container
- [ ] Title section
- [ ] Tiles grid
- [ ] Lists with headers
- [ ] Chart containers
- [ ] Links grid
- [ ] FastTabs (if used)

### CSS Styling
- [ ] Tile styling
- [ ] List styling
- [ ] Chart containers
- [ ] Responsive grid
- [ ] Hover effects
- [ ] Color coding
- [ ] Loading states

### JavaScript
- [ ] Tile click handlers
- [ ] List item navigation
- [ ] Chart initialization
- [ ] Data loading
- [ ] Refresh functionality
- [ ] Responsive adjustments
- [ ] Animation timing

---

## Comparison with Other Patterns

### Workspace vs. List Page
- **Workspace**: Dashboard-style, metrics-focused, multiple sections
- **List Page**: Grid-focused, filter-heavy, single data type

### Workspace vs. Details Form
- **Workspace**: Overview, navigation hub, multiple entities
- **Details Form**: Single record, detailed editing, transactional

### Workspace vs. Dialog
- **Workspace**: Full-page, persistent, comprehensive
- **Dialog**: Modal, temporary, focused task

---

*Analysis of D365FO Workspace/Main Page Pattern*
*Date: 2025-11-21*
*Note: This analysis is based on typical D365FO workspace structure and Microsoft documentation*
*Specific screenshot details will be added when high-resolution images are available*
