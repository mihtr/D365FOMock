# D365FOMock - Quick Start Guide

## 🚀 Get Started in 5 Minutes

### View the Interactive Example

**Option 1: Direct Open**
```bash
# Navigate to examples folder and open the HTML file
cd examples
# Double-click customer-list-page.html in File Explorer
```

**Option 2: Local Server** (Recommended)
```bash
# Start a local web server
cd examples
python -m http.server 8000

# Open in browser: http://localhost:8000/customer-list-page.html
```

### What You Can Do

✅ **Filter customers** - Type in the search box
✅ **Sort columns** - Click column headers
✅ **Select rows** - Click checkboxes or rows
✅ **Try commands** - Click Action Pane buttons
✅ **Switch tabs** - Click different Action Pane tabs
✅ **View details** - Click blue customer account links

---

## 📚 Documentation

### For Developers

**Start Here**:
1. [`README.md`](README.md) - Project overview
2. [`examples/README.md`](examples/README.md) - Example details
3. [`D365FO_Form_Design_Patterns.md`](D365FO_Form_Design_Patterns.md) - Form patterns guide

**Deep Dive**:
- [`trainingpictures/ui-specifications.md`](trainingpictures/ui-specifications.md) - Exact UI specs
- [`trainingpictures/SCREENSHOT_INDEX.md`](trainingpictures/SCREENSHOT_INDEX.md) - All analyzed screenshots
- [`.github/workflows/README.md`](.github/workflows/README.md) - CI/CD documentation

### For Designers

**Color Palette**:
```css
Primary Blue: #0078d4
Sidebar Blue: #2b579a
Selected Blue: #deecf9
Background Gray: #f3f2f1
Border Gray: #d2d0ce
```

**Typography**:
```css
Font: Segoe UI
Page Titles: 21px, weight 600
Body Text: 12px
```

**Complete Specs**: See [`trainingpictures/ui-specifications.md`](trainingpictures/ui-specifications.md)

---

## 🔧 Contributing

### Set Up Development Environment

```bash
# Clone the repository
git clone https://github.com/mihtr/D365FOMock.git
cd D365FOMock

# Install pre-commit hooks (optional but recommended)
pip install pre-commit
pre-commit install
```

### Make Changes

```bash
# Create a feature branch
git checkout -b feature/my-feature

# Make your changes
# Edit files...

# Commit (pre-commit hooks run automatically)
git add .
git commit -m "feat: add my feature"

# Push to GitHub
git push origin feature/my-feature
```

### CI/CD Pipeline

When you push, the pipeline automatically:
- ✅ Validates HTML, CSS, JavaScript, Markdown
- ✅ Updates documentation
- ✅ Runs security scans
- ✅ Builds and packages
- ✅ Deploys to GitHub Pages

**Pipeline Status**: Check Actions tab on GitHub

---

## 📖 Form Patterns Available

### ✅ Implemented
1. **List Page** - [`examples/customer-list-page.html`](examples/customer-list-page.html)
   - Customer list with filtering and sorting
   - Action Pane with multiple tabs
   - Quick Filter
   - Interactive grid

### 📝 Documented (Not Yet Implemented)
2. **Details Master** - See [`D365FO_Form_Design_Patterns.md`](D365FO_Form_Design_Patterns.md#1-details-master-pattern)
   - Complex entity data entry
   - FastTabs for organization
   - Grid and details views

3. **Simple List and Details** - See documentation
   - Medium complexity entities
   - Split view (list + details)

4. **Simple Details** - See documentation
   - Display limited information
   - Read-only or simple editing

5. **Workspace** - See documentation
   - Navigation hub
   - Business activity starting point

6. **Dialog** - See documentation
   - User input with commit/cancel
   - Focused workflows

7. **Wizard** - See documentation
   - Step-by-step guidance
   - Complex processes

8. **Lookup** - See documentation
   - Data selection controls
   - Search and filter

---

## 🎯 Quick Reference

### File Structure
```
D365FOMock/
├── examples/              # Interactive examples
│   └── customer-list-page.html
├── trainingpictures/      # Screenshots & analysis
│   ├── SCREENSHOT_INDEX.md
│   └── ui-specifications.md
├── scripts/               # Automation scripts
├── .github/workflows/     # CI/CD pipeline
├── D365FO_Form_Design_Patterns.md
└── README.md
```

### Common Tasks

**View Examples**:
```bash
cd examples && python -m http.server 8000
```

**Generate Documentation**:
```bash
python scripts/generate_docs.py
python scripts/update_readme.py
```

**Validate Code**:
```bash
pre-commit run --all-files
```

**Commit Changes**:
```bash
git add . && git commit -m "your message"
```

---

## 📊 Training Screenshots

We've analyzed 4 D365FO screenshots showing:

1. ✅ **Customer List Page** - List Page pattern
2. ✅ **Sales Order Details** - Details Master pattern with FastTabs
3. ✅ **Sales Order Details** - (duplicate)
4. ✅ **Navigation Menu** - Expandable sidebar structure

**Full Analysis**: See [`trainingpictures/SCREENSHOT_INDEX.md`](trainingpictures/SCREENSHOT_INDEX.md)

**Key Components Identified**:
- FastTabs (collapsible sections)
- View tabs (Lines/Header)
- Grid toolbar
- Loading indicators (Copilot)
- Expandable navigation menu
- Multi-column grids (25+ columns)

---

## 🆘 Troubleshooting

### Examples Not Working?

**Problem**: HTML file doesn't display correctly
**Solution**: Use a local web server instead of opening directly
```bash
python -m http.server 8000
```

### Pre-commit Hooks Failing?

**Problem**: Commit blocked by validation
**Solution**: Fix the validation errors or run hooks manually
```bash
pre-commit run --all-files
```

### Documentation Not Updating?

**Problem**: README not showing latest stats
**Solution**: Run update script manually
```bash
python scripts/update_readme.py
```

---

## 🔗 Useful Links

- **Repository**: https://github.com/mihtr/D365FOMock
- **Issues**: https://github.com/mihtr/D365FOMock/issues
- **Actions**: https://github.com/mihtr/D365FOMock/actions

### Microsoft Documentation
- [D365FO Documentation](https://learn.microsoft.com/en-us/dynamics365/fin-ops-core/fin-ops/)
- [Form Patterns](https://learn.microsoft.com/en-us/dynamics365/fin-ops-core/dev-itpro/user-interface/form-styles-patterns)
- [UI Guidelines](https://learn.microsoft.com/en-us/dynamics365/fin-ops-core/dev-itpro/user-interface/general-form-guidelines)

---

## ✨ Next Steps

1. **Open the example**: [`examples/customer-list-page.html`](examples/customer-list-page.html)
2. **Read the patterns guide**: [`D365FO_Form_Design_Patterns.md`](D365FO_Form_Design_Patterns.md)
3. **Check UI specs**: [`trainingpictures/ui-specifications.md`](trainingpictures/ui-specifications.md)
4. **Push to GitHub**: `git push -u origin main`
5. **Watch CI/CD run**: Check Actions tab
6. **Build more examples**: Implement other form patterns!

---

*Quick Start Guide - For rapid onboarding to D365FOMock*
