# D365FO Training Pictures and Reference Materials

This folder contains screenshots and reference materials collected from the web to improve the accuracy of D365FO mockups.

## Purpose

The materials in this folder serve as visual references for:
- Authentic D365FO styling and layout
- Color schemes and typography
- UI component placement and behavior
- Form pattern implementations
- User interactions and workflows

## Sources

### Official Microsoft Documentation

1. **Build the Customer Form**
   - URL: https://learn.microsoft.com/en-us/dynamics365/fin-ops-core/dev-itpro/user-interface/build-customer-form
   - Content: Master Details pattern with navigation panel and grid/details tabs
   - UI Elements: QuickFilter, NavigationList, MainGrid, HeaderTitle, DetailsBodyTab

2. **User Interface Elements**
   - URL: https://learn.microsoft.com/en-us/dynamics365/fin-ops-core/fin-ops/get-started/user-interface-elements
   - Content: Comprehensive guide to all UI components
   - Components: Navigation Bar, Action Pane, FactBox, Filter Pane, FastTabs, Grids

3. **Form Styles and Patterns**
   - URL: https://learn.microsoft.com/en-us/dynamics365/fin-ops-core/dev-itpro/user-interface/form-styles-patterns
   - Content: Complete form pattern catalog
   - Patterns: Details Master, Simple List and Details, List Page, Dialog, Workspace

### Community Resources

4. **Dynamics 365 Musings - Simple List and Details**
   - URL: https://dynamics365musings.com/simple-list-and-details/
   - Content: Tutorial on implementing Simple List and Details pattern
   - Visual: Two-panel layout with grid on left, details on right

5. **Stoneridge Software - Applying Form Patterns**
   - URL: https://stoneridgesoftware.com/applying-form-patterns-in-dynamics-365-for-operations/
   - Content: Practical guide to form patterns

## Key UI Characteristics Identified

### Color Scheme
- Primary blue: #0078d4 (navigation bar, links, selected items)
- Background: #f3f2f1 (page background)
- White: #ffffff (content areas, grids)
- Gray borders: #e1dfdd, #d2d0ce
- Selected row: #deecf9 (light blue)
- Hover state: #f3f2f1 (light gray)

### Typography
- Font family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
- Base font size: 12px
- Page titles: 21px, font-weight 600
- Action Pane: 12px
- Grid headers: 12px, font-weight 600

### Layout Structure
1. **Top Navigation Bar** (48px height)
   - Hamburger menu (left)
   - Company name and module title
   - Global search (center)
   - Company selector
   - Icons: notifications, settings, help, user (right)

2. **Breadcrumb Bar** (40px height)
   - Back/forward navigation
   - Home button
   - Current path

3. **Action Pane** (variable height)
   - Multiple tabs (horizontal scrolling)
   - Command buttons with icons and labels
   - Grouped by functionality

4. **Page Content**
   - Quick Filter at top
   - Data grid or form content
   - Status bar at bottom

5. **Sidebar** (48px width, optional)
   - Navigation buttons
   - Favorites
   - Search

### Component Details

#### Navigation Bar Elements
- Height: 48px
- Background: #0078d4 (blue)
- Text: white
- Icons: white, 16px

#### Action Pane Tabs
- Background: white when active
- Bottom border: 2px #0078d4 when active
- Padding: 8px 16px
- Font-size: 12px

#### Command Buttons
- Display: vertical layout (icon above text)
- Icon size: 20px
- Label: 11px
- Padding: 8px
- Hover: light gray background

#### Data Grid
- Header background: #f3f2f1
- Border: 1px solid #d2d0ce
- Row padding: 8px 12px
- Hover: #f3f2f1
- Selected: #deecf9
- Font-size: 12px

#### Quick Filter
- Border: 1px solid #d2d0ce
- Padding: 6px 8px
- Focus: border changes to #0078d4

### Responsive Behavior
- Forms adjust layout based on browser width
- Fields reflow to better fill available space
- Grids maintain column structure but allow horizontal scrolling
- Action Pane commands may wrap or scroll horizontally

## Form Patterns Documented

### 1. Master Details (Customer Form)
**Structure:**
```
SidePanel (left)
├── QuickFilter
└── NavigationList (grid with ID and description)

GridDetailsTab (main area)
├── Grid View Tab
│   ├── QuickFilter
│   ├── CustomFilterGroup
│   └── MainGrid
└── Details View Tab
    ├── HeaderTitle
    └── DetailsBodyTab (FastTabs)
```

### 2. List Page
**Structure:**
```
ActionPane
CustomFilterGroup
├── QuickFilter
└── Custom filters (optional)
Grid
├── Columns (2-15)
├── ID column first
└── Linked to details page
```

### 3. Simple List and Details
**Structure:**
```
Left Panel: Grid (ID + Description)
Right Panel: Details (FastTabs)
```

## Pattern Compliance Indicators

Visual Studio shows pattern compliance with colors:
- **Red**: Missing required controls
- **Yellow**: Unresolved issues
- **Clean**: Fully compliant

## Screenshot Collection

### To Add to This Folder

When you find useful D365FO screenshots, add them here with descriptive names:

- `navigation-bar-example.png`
- `action-pane-customer-tab.png`
- `grid-with-filters.png`
- `customer-details-form.png`
- `simple-list-details-layout.png`
- `fasttabs-expanded.png`
- `quick-filter-in-action.png`
- `workspace-example.png`
- `dialog-form-example.png`

### Naming Convention

Format: `[component]-[pattern]-[description].png`

Examples:
- `grid-listpage-customer-list.png`
- `form-detailsmaster-customer-details.png`
- `actionpane-invoice-commands.png`
- `navigation-sidebar-collapsed.png`

## Using These References

1. **Compare with Examples**: Check if your mockup matches the visual style
2. **Verify Colors**: Use the exact color codes identified
3. **Check Spacing**: Match padding and margins
4. **Validate Typography**: Use correct fonts and sizes
5. **Test Interactions**: Ensure hover states and selections work correctly

## Additional Resources

### Microsoft Learn Documentation
- [User Interface Development Home](https://learn.microsoft.com/en-us/dynamics365/fin-ops-core/dev-itpro/user-interface/user-interface-development-home-page)
- [General Form Guidelines](https://learn.microsoft.com/en-us/dynamics365/fin-ops-core/dev-itpro/user-interface/general-form-guidelines)
- [Form Design Requirements](https://learn.microsoft.com/en-us/dynamics365/fin-ops-core/dev-itpro/mobile-apps/platform/form-design-requirements)

### Tools for Capturing Screenshots
- Task Recorder with Screenshots (D365FO native tool)
- Chrome Extension: "Dynamics 365 F&O Task Recorder Screenshot"
- Windows Snipping Tool / Snip & Sketch

## Contributing

When adding new screenshots:
1. Include source URL in filename or companion .txt file
2. Note the D365FO version/release if known
3. Describe what the screenshot shows
4. Indicate which form pattern it demonstrates

---

*This folder helps ensure D365FOMock examples are as accurate as possible to real D365FO interfaces.*
