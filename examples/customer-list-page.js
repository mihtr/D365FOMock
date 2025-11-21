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
            <td><a href="#" onclick="openCustomerDetails('${customer.account}'); return false;">${customer.account}</a></td>
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

    // Column sorting
    const headers = document.querySelectorAll('.data-grid th.sortable');
    headers.forEach(header => {
        header.addEventListener('click', function() {
            const columnName = this.textContent.trim().replace(' ▼', '');
            sortColumn(columnName);
        });
    });

    // Action Pane tab switching
    const actionTabs = document.querySelectorAll('.action-tab');
    actionTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            actionTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            // In a real implementation, this would change the command buttons shown
        });
    });

    // Command buttons
    const commandButtons = document.querySelectorAll('.command-btn');
    commandButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const label = this.querySelector('.btn-label')?.textContent || 'Command';
            console.log(`Clicked: ${label}`);

            // Provide user feedback
            if (selectedRows.size === 0 && !['Contacts', 'Change party association'].includes(label)) {
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

// Make functions globally accessible
window.toggleRowSelection = toggleRowSelection;
window.openCustomerDetails = openCustomerDetails;
