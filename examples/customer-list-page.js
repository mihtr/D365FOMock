// Customer List Page - D365FO Mock Implementation
// This JavaScript adds interactivity to the customer list page

// Sample customer data matching the screenshot
const customerData = [
    { account: 'DE-001', name: 'Contoso Europe', invoiceAccount: '30', customerGroup: 'EUR', currency: 'EUR', telephone: '01234-56789', extension: '', isMerged: '' },
    { account: 'US-001', name: 'Contoso Retail San Diego', invoiceAccount: '30', customerGroup: 'USD', currency: 'USD', telephone: '321-555-0160', extension: '', isMerged: '' },
    { account: 'US-002', name: 'Contoso Retail Los Angeles', invoiceAccount: '30', customerGroup: 'USD', currency: 'USD', telephone: '123-555-0111', extension: '', isMerged: '' },
    { account: 'US-003', name: 'Forest Wholesalers', invoiceAccount: '30', customerGroup: 'USD', currency: 'USD', telephone: '123-555-0159', extension: '', isMerged: '' },
    { account: 'US-004', name: 'Cave Wholesalers', invoiceAccount: '30', customerGroup: 'USD', currency: 'USD', telephone: '123-555-0161', extension: '', isMerged: '' },
    { account: 'US-005', name: 'Contoso Retail Seattle', invoiceAccount: '30', customerGroup: 'USD', currency: 'USD', telephone: '123-555-0172', extension: '', isMerged: '' },
    { account: 'US-006', name: 'Contoso Retail Portland', invoiceAccount: '30', customerGroup: 'USD', currency: 'USD', telephone: '123-555-0112', extension: '', isMerged: '' },
    { account: 'US-007', name: 'Desert Wholesalers', invoiceAccount: '30', customerGroup: 'USD', currency: 'USD', telephone: '123-555-0162', extension: '', isMerged: '' },
    { account: 'US-008', name: 'Sparrow Retail', invoiceAccount: '30', customerGroup: 'USD', currency: 'USD', telephone: '123-555-0163', extension: '', isMerged: '' },
    { account: 'US-009', name: 'Owl Wholesalers', invoiceAccount: '30', customerGroup: 'USD', currency: 'USD', telephone: '123-555-0164', extension: '', isMerged: '' },
    { account: 'US-010', name: 'Sunset Wholesalers', invoiceAccount: '30', customerGroup: 'USD', currency: 'USD', telephone: '123-555-0160', extension: '', isMerged: '' },
    { account: 'US-011', name: 'Contoso Retail Dallas', invoiceAccount: '30', customerGroup: 'USD', currency: 'USD', telephone: '123-555-0117', extension: '', isMerged: '' },
    { account: 'US-012', name: 'Contoso Retail New York', invoiceAccount: '30', customerGroup: 'USD', currency: 'USD', telephone: '123-555-0116', extension: '', isMerged: '' },
    { account: 'US-013', name: 'Pelican Wholesalers', invoiceAccount: '30', customerGroup: 'USD', currency: 'USD', telephone: '123-555-0165', extension: '', isMerged: '' },
    { account: 'US-014', name: 'Grape Wholesalers', invoiceAccount: '30', customerGroup: 'USD', currency: 'USD', telephone: '123-555-0180', extension: '', isMerged: '' },
    { account: 'US-015', name: 'Contoso Retail Chicago', invoiceAccount: '30', customerGroup: 'USD', currency: 'USD', telephone: '123-555-0187', extension: '', isMerged: '' },
    { account: 'US-016', name: 'Whale Wholesalers', invoiceAccount: '30', customerGroup: 'USD', currency: 'USD', telephone: '123-555-0167', extension: '', isMerged: '' },
    { account: 'US-017', name: 'Turtle Wholesalers', invoiceAccount: '30', customerGroup: 'USD', currency: 'USD', telephone: '123-555-0168', extension: '', isMerged: '' },
    { account: 'US-018', name: 'Contoso Retail Detroit', invoiceAccount: '30', customerGroup: 'USD', currency: 'USD', telephone: '123-555-0119', extension: '', isMerged: '' },
    { account: 'US-019', name: 'Sunflower Wholesalers', invoiceAccount: '30', customerGroup: 'USD', currency: 'USD', telephone: '123-555-0144', extension: '', isMerged: '' },
    { account: 'US-020', name: 'Orchid Shopping', invoiceAccount: '30', customerGroup: 'USD', currency: 'USD', telephone: '123-555-0146', extension: '', isMerged: '' },
    { account: 'US-021', name: 'Otter Wholesalers', invoiceAccount: '30', customerGroup: 'USD', currency: 'USD', telephone: '123-555-0170', extension: '', isMerged: '' },
    { account: 'US-022', name: 'Contoso Retail Virginia', invoiceAccount: '30', customerGroup: 'USD', currency: 'USD', telephone: '123-555-0115', extension: '', isMerged: '' },
    { account: 'US-023', name: 'Shovel Retail', invoiceAccount: '30', customerGroup: 'USD', currency: 'USD', telephone: '123-555-0169', extension: '', isMerged: '' },
    { account: 'US-024', name: 'Yellow Square', invoiceAccount: '30', customerGroup: 'USD', currency: 'USD', telephone: '123-555-0183', extension: '', isMerged: '' },
    { account: 'US-025', name: 'Oak Company', invoiceAccount: '30', customerGroup: 'USD', currency: 'USD', telephone: '123-555-0157', extension: '', isMerged: '' },
    { account: 'US-026', name: 'Maple Company', invoiceAccount: '30', customerGroup: 'USD', currency: 'USD', telephone: '123-555-0135', extension: '', isMerged: '' },
    { account: 'US-027', name: 'Birch Company', invoiceAccount: '30', customerGroup: 'USD', currency: 'USD', telephone: '111-555-0173', extension: '', isMerged: '' },
    { account: 'US-028', name: 'Contoso Retail Miami', invoiceAccount: '30', customerGroup: 'USD', currency: 'USD', telephone: '123-555-0184', extension: '', isMerged: '' },
    { account: 'US-030', name: 'Contoso Retail USA', invoiceAccount: '100', customerGroup: 'USD', currency: 'USD', telephone: '123-555-0199', extension: '', isMerged: '' },
    { account: 'US-041', name: 'Dolphin Wholesale', invoiceAccount: '30', customerGroup: 'USD', currency: 'USD', telephone: '', extension: '', isMerged: '' },
    { account: 'US-103', name: 'Rain Projectors', invoiceAccount: '30', customerGroup: 'USD', currency: 'USD', telephone: '444-555-0110', extension: '', isMerged: '' }
];

// State management
let filteredData = [...customerData];
let selectedRows = new Set();
let currentSortColumn = null;
let sortDirection = 'asc';

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    renderGrid();
    attachEventListeners();
    updateRecordCount();
});

// Render the data grid
function renderGrid() {
    const gridBody = document.getElementById('gridBody');
    gridBody.innerHTML = '';

    filteredData.forEach((customer, index) => {
        const row = document.createElement('tr');
        row.className = 'dyn-grid-row';
        row.setAttribute('role', 'row');
        row.dataset.index = index;
        row.dataset.account = customer.account;

        if (selectedRows.has(customer.account)) {
            row.classList.add('selected');
        }

        row.innerHTML = `
            <td class="checkbox-col">
                <input type="checkbox"
                       ${selectedRows.has(customer.account) ? 'checked' : ''}
                       onchange="toggleRowSelection('${customer.account}')">
            </td>
            <td><a href="#" class="dyn-hyperlink" onclick="openCustomerDetails('${customer.account}'); return false;">${customer.account}</a></td>
            <td>${customer.name}</td>
            <td>${customer.invoiceAccount}</td>
            <td>${customer.customerGroup}</td>
            <td>${customer.currency}</td>
            <td>${customer.telephone}</td>
            <td>${customer.extension}</td>
            <td>${customer.isMerged}</td>
        `;

        // Add click handler for row selection
        row.addEventListener('click', function(e) {
            if (e.target.type !== 'checkbox' && e.target.tagName !== 'A') {
                toggleRowSelection(customer.account);
            }
        });

        gridBody.appendChild(row);
    });
}

// Toggle row selection
function toggleRowSelection(account) {
    if (selectedRows.has(account)) {
        selectedRows.delete(account);
    } else {
        selectedRows.add(account);
    }
    renderGrid();
}

// Select all rows
function toggleSelectAll() {
    const selectAllCheckbox = document.getElementById('selectAll');

    if (selectAllCheckbox.checked) {
        filteredData.forEach(customer => selectedRows.add(customer.account));
    } else {
        selectedRows.clear();
    }

    renderGrid();
}

// Quick filter functionality
function applyQuickFilter() {
    const filterText = document.getElementById('quickFilter').value.toLowerCase();
    const filterField = document.querySelector('.filter-field-select').value;

    if (!filterText) {
        filteredData = [...customerData];
    } else {
        filteredData = customerData.filter(customer => {
            let fieldValue = '';

            switch(filterField) {
                case 'Telephone':
                    fieldValue = customer.telephone;
                    break;
                case 'Account':
                    fieldValue = customer.account;
                    break;
                case 'Name':
                    fieldValue = customer.name;
                    break;
                case 'Currency':
                    fieldValue = customer.currency;
                    break;
                default:
                    // Search across all fields
                    fieldValue = Object.values(customer).join(' ');
            }

            return fieldValue.toLowerCase().includes(filterText);
        });
    }

    renderGrid();
    updateRecordCount();
}

// Sort functionality
function sortColumn(columnName) {
    const columnMap = {
        'Account': 'account',
        'Name': 'name',
        'Invoice account': 'invoiceAccount',
        'Customer group': 'customerGroup',
        'Currency': 'currency',
        'Telephone': 'telephone',
        'Extension': 'extension',
        'Is merged': 'isMerged'
    };

    const fieldName = columnMap[columnName];

    if (currentSortColumn === fieldName) {
        sortDirection = sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
        currentSortColumn = fieldName;
        sortDirection = 'asc';
    }

    filteredData.sort((a, b) => {
        let aVal = a[fieldName] || '';
        let bVal = b[fieldName] || '';

        // Convert to string for comparison
        aVal = aVal.toString().toLowerCase();
        bVal = bVal.toString().toLowerCase();

        if (sortDirection === 'asc') {
            return aVal < bVal ? -1 : aVal > bVal ? 1 : 0;
        } else {
            return aVal > bVal ? -1 : aVal < bVal ? 1 : 0;
        }
    });

    renderGrid();
}

// Update record count in status bar
function updateRecordCount() {
    const recordCount = document.getElementById('recordCount');
    recordCount.textContent = `${filteredData.length} records`;
}

// Open customer details (simulated)
function openCustomerDetails(account) {
    alert(`Opening details for customer: ${account}\n\nThis would navigate to the Details Master form for this customer record.`);
}

// Attach event listeners
function attachEventListeners() {
    // Quick filter
    const quickFilter = document.getElementById('quickFilter');
    quickFilter.addEventListener('input', applyQuickFilter);

    const filterFieldSelect = document.querySelector('.filter-field-select');
    filterFieldSelect.addEventListener('change', applyQuickFilter);

    // Select all checkbox
    const selectAllCheckbox = document.getElementById('selectAll');
    selectAllCheckbox.addEventListener('change', toggleSelectAll);

    // Column sorting (updated selector for D365FO classes)
    const headers = document.querySelectorAll('.dyn-grid .dyn-headerCell.sortable');
    headers.forEach(header => {
        header.addEventListener('click', function() {
            const labelElement = this.querySelector('.dyn-headerCellLabel');
            const columnName = labelElement ? labelElement.textContent.trim() : this.textContent.trim().replace(' ▼', '');
            sortColumn(columnName);
        });
    });

    // Action Pane tab switching (updated selector for D365FO classes)
    const appBarTabs = document.querySelectorAll('.appBarTab-header');
    appBarTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            appBarTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            // In a real implementation, this would change the command buttons shown
        });
    });

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
            const label = this.querySelector('.button-label')?.textContent || 'Action';

            console.log(`Menu item clicked: ${label}`);

            // Execute menu item action
            handleMenuAction(label);

            // Close flyout
            closeFlyout(button, flyout);
        });
    });

    // Action buttons (Edit, New, Delete) - exclude flyout buttons
    const actionButtons = document.querySelectorAll('.actionPane-buttons .button.dynamicsButton');
    actionButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const label = this.querySelector('.button-label')?.textContent || 'Action';
            console.log(`Clicked: ${label}`);

            // Provide user feedback
            if (selectedRows.size === 0 && label !== 'New') {
                alert('Please select at least one customer record first.');
            } else {
                alert(`Executing: ${label}\n\nSelected records: ${selectedRows.size}`);
            }
        });
    });

    // Global search (top navigation)
    const globalSearch = document.getElementById('globalSearch');
    globalSearch.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            alert(`Global search for: ${this.value}\n\nThis would search across all D365FO modules.`);
        }
    });
}

// Handle menu actions
function handleMenuAction(actionLabel) {
    switch(actionLabel) {
        case 'Copy':
            if (selectedRows.size > 0) {
                alert(`Copying ${selectedRows.size} customer record(s)...`);
            } else {
                alert('Please select at least one customer record to copy.');
            }
            break;

        case 'Export to Excel':
            alert('Exporting data to Excel...\n\nThis would generate an Excel file with the current grid data.');
            break;

        case 'Refresh':
            alert('Refreshing data...');
            // In a real app, this would reload data from server
            renderGrid();
            updateRecordCount();
            break;

        case 'View details':
            if (selectedRows.size === 1) {
                const account = Array.from(selectedRows)[0];
                openCustomerDetails(account);
            } else if (selectedRows.size === 0) {
                alert('Please select a customer record first.');
            } else {
                alert('Please select only one customer record to view details.');
            }
            break;

        default:
            alert(`Action: ${actionLabel}`);
    }
}

// Flyout menu functionality
function toggleFlyout(buttonElement) {
    const container = buttonElement.closest('.flyoutContainer');
    const flyout = container.querySelector('.flyoutButton-flyOut');
    const isOpen = buttonElement.getAttribute('aria-expanded') === 'true';

    // Close all other open flyouts first
    document.querySelectorAll('.flyoutButton-Button[aria-expanded="true"]').forEach(btn => {
        if (btn !== buttonElement) {
            closeFlyout(btn, btn.closest('.flyoutContainer').querySelector('.flyoutButton-flyOut'));
        }
    });

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
        setTimeout(() => firstItem.focus(), 50);
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
    if (!menuItem.classList.contains('flyout-menuItem')) return;

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
            button.focus();
            break;

        case 'Enter':
        case ' ':
            event.preventDefault();
            menuItem.click();
            break;
    }
}

// Make functions globally accessible
window.toggleRowSelection = toggleRowSelection;
window.openCustomerDetails = openCustomerDetails;
window.toggleFlyout = toggleFlyout;
