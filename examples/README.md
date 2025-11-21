# D365FO Customer List Page Example

This is a fully functional, browser-based mockup of a Dynamics 365 Finance and Operations (D365FO) Customer List Page. It demonstrates the **List Page** form pattern with authentic D365FO styling and interactions.

## Files

- `customer-list-page.html` - Main HTML structure (Updated 2025-11-21)
- `d365fo-styles.css` - Complete D365FO styling with CSS variables (Updated 2025-11-21)
- `customer-list-page.js` - Interactive functionality
- `README.md` - This file

## Recent Updates (2025-11-21)

### Enhanced with Screenshot Analysis
The example has been updated with precise specifications extracted from actual D365FO screenshots:

**CSS Improvements**:
- ✅ Added CSS variables for exact D365FO color palette
- ✅ Refined typography to match screenshots
- ✅ Improved spacing using verified measurements
- ✅ Enhanced transitions and animations (0.2s ease)
- ✅ Better focus states with 2px blue borders
- ✅ Firefox scrollbar support added
- ✅ All colors now use CSS variables for consistency

**Color Accuracy**:
- Primary Blue: `#0078d4` (verified from screenshots)
- Sidebar Blue: `#2b579a` (verified from screenshots)
- Selected Row: `#deecf9` (verified from screenshots)
- Background Gray: `#f3f2f1` (verified from screenshots)
- All 15 D365FO colors documented and applied

## Features

### Visual Elements
- ✅ Top navigation bar with search and user controls
- ✅ Breadcrumb navigation
- ✅ Left sidebar with navigation buttons
- ✅ Action Pane with multiple tabs (Customer, Sell, Invoice, Collect, etc.)
- ✅ Command buttons with icons and labels
- ✅ Page title with view selector
- ✅ Quick Filter with field selection
- ✅ Responsive data grid with sortable columns
- ✅ Status bar with record count

### Interactive Functionality
- ✅ **Row selection** - Click rows or checkboxes to select
- ✅ **Select all** - Checkbox in header to select/deselect all
- ✅ **Quick Filter** - Filter by multiple fields (Telephone, Account, Name, Currency)
- ✅ **Column sorting** - Click column headers to sort ascending/descending
- ✅ **Clickable account links** - Opens customer details (simulated)
- ✅ **Command buttons** - All action pane commands are clickable
- ✅ **Tab switching** - Switch between action pane tabs
- ✅ **Hover effects** - All interactive elements have hover states

## How to Run

### Option 1: Direct File Open
1. Navigate to the `examples` folder
2. Double-click `customer-list-page.html`
3. It will open in your default browser

### Option 2: Local Web Server (Recommended)
```bash
# Using Python 3
cd examples
python -m http.server 8000

# Using Node.js
npx http-server -p 8000

# Then open: http://localhost:8000/customer-list-page.html
```

## Usage Examples

### Filtering Records
1. Type in the "Search by" input field
2. Select which field to filter by (Telephone, Account, Name, Currency)
3. Results update automatically as you type

### Sorting Columns
1. Click any column header to sort by that column
2. Click again to reverse the sort direction
3. Current sort indicated by arrow icon

### Selecting Records
1. Click checkbox in any row to select that record
2. Click the header checkbox to select/deselect all
3. Click anywhere in the row (except links) to toggle selection
4. Selected rows highlighted in blue

### Viewing Customer Details
1. Click any blue Account link (e.g., "DE-001")
2. Simulated alert shows which customer was clicked
3. In real implementation, would navigate to Details Master form

### Action Pane Commands
1. Select one or more customer records
2. Click any command button (e.g., "Transactions", "Balance")
3. System shows which action was triggered

## Design Pattern Details

This example implements the **List Page** form pattern from D365FO, which includes:

- **Purpose**: Browse records, find records, and take actions
- **Key Components**:
  - ActionPane with multiple tabs
  - Quick Filter for rapid searching
  - Data grid with <15 columns
  - First column as hyperlink to details
  - Record count in status bar

### Pattern Compliance
✅ Quick Filter defaults to commonly filtered field (Telephone)
✅ Grid has fewer than 15 fields
✅ First column (Account) is hyperlink to details
✅ Page title is plural form ("All customers")
✅ Initial focus on Quick Filter
✅ Proper color scheme and spacing
✅ Responsive design for different screen sizes

## Customization

### Adding More Data
Edit `customer-list-page.js` and add records to the `customerData` array:

```javascript
const customerData = [
    {
        account: 'NEW-001',
        name: 'Your Company Name',
        invoiceAccount: '30',
        customerGroup: 'USD',
        currency: 'USD',
        telephone: '123-456-7890',
        extension: '',
        isMerged: ''
    },
    // ... more records
];
```

### Changing Colors
Edit `d365fo-styles.css` to customize the color scheme:

```css
/* Primary blue color */
.top-nav {
    background-color: #0078d4; /* Change this */
}

/* Selected row color */
.data-grid tbody tr.selected {
    background-color: #deecf9; /* Change this */
}
```

### Adding New Columns
1. Update the table header in `customer-list-page.html`
2. Add data property to `customerData` in JavaScript
3. Update the row rendering in `renderGrid()` function

## Browser Compatibility

Tested and working on:
- ✅ Chrome 90+
- ✅ Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+

## Next Steps

This example can be extended to include:
- Details Master form for individual customer records
- Dialog forms for quick actions
- FactBox panel with related information
- Advanced filtering with multiple criteria
- Export to Excel functionality
- Keyboard navigation and accessibility
- Real backend integration

## Related Documentation

- [List Page Pattern Documentation](https://learn.microsoft.com/en-us/dynamics365/fin-ops-core/dev-itpro/user-interface/list-page-form-pattern)
- [General Form Guidelines](https://learn.microsoft.com/en-us/dynamics365/fin-ops-core/dev-itpro/user-interface/general-form-guidelines)
- [Form Styles and Patterns](https://learn.microsoft.com/en-us/dynamics365/fin-ops-core/dev-itpro/user-interface/form-styles-patterns)

## License

This is a demonstration/mockup for educational and development purposes.
