# D365FOMock

Mock framework for Dynamics 365 Finance and Operations (D365FO) development and testing.

## Overview

D365FOMock provides browser-based mockups and examples of D365FO form patterns, helping developers understand and implement authentic D365FO user interfaces.

## Features

- ✅ Interactive browser-based examples
- ✅ Authentic D365FO styling and behavior
- ✅ Multiple form pattern implementations
- ✅ Comprehensive design pattern documentation
- ✅ Automated CI/CD pipeline
- ✅ Auto-updating documentation

## Project Statistics

*Last updated: 2025-11-21*

- **HTML Files**: 1
- **CSS Files**: 1
- **JavaScript Files**: 1
- **Documentation Files**: 2

## Quick Start

### View Examples

1. Navigate to the `examples/` directory
2. Open `customer-list-page.html` in your browser
3. Interact with the D365FO customer list page mockup

### Local Development Server

```bash
cd examples
python -m http.server 8000
# Open: http://localhost:8000/customer-list-page.html
```

## Documentation

- [Form Design Patterns](D365FO_Form_Design_Patterns.md) - Complete guide to D365FO form patterns
- [Examples README](examples/README.md) - Details on interactive examples
- [CI/CD Documentation](.github/workflows/README.md) - Pipeline and automation details

## CI/CD Pipeline

This project includes a comprehensive CI/CD pipeline that:

- ✅ **Always runs** on all branches and pull requests
- ✅ **Auto-updates documentation** on every commit
- ✅ Validates HTML, CSS, JavaScript, and Markdown
- ✅ Runs security scans
- ✅ Builds and packages releases
- ✅ Deploys to GitHub Pages

See [CI/CD Documentation](.github/workflows/README.md) for details.

## Form Patterns Implemented

### List Page Pattern
- Customer list page with filtering, sorting, and selection
- Action Pane with multiple tabs
- Quick Filter functionality
- Grid with sortable columns

**Live Demo**: [examples/customer-list-page.html](examples/customer-list-page.html)

## Getting Started

### Prerequisites

- Modern web browser (Chrome, Edge, Firefox, Safari)
- Python 3.x (for local server) or any HTTP server
- Git (for contributing)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/mihtr/D365FOMock.git
cd D365FOMock
```

2. Open examples in browser:
```bash
cd examples
python -m http.server 8000
```

3. Navigate to: http://localhost:8000/customer-list-page.html

### For Contributors

1. Install pre-commit hooks:
```bash
pip install pre-commit
pre-commit install
```

2. Make changes and commit:
```bash
git add .
git commit -m "feat: your changes"
```

Pre-commit hooks will automatically:
- Validate code
- Update documentation
- Check for secrets
- Format files

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Run local validation (pre-commit hooks will help)
5. Commit your changes (`git commit -m 'feat: add amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a pull request

The CI/CD pipeline will automatically:
- Validate your changes
- Update documentation
- Run security scans
- Build artifacts

## Development Rules

### CI/CD Rules

#### Rule 1: Always Run CI/CD Pipeline
The CI/CD pipeline executes on:
- All branch pushes
- All pull requests
- Manual triggers
- Weekly schedule

**No exceptions** - every commit triggers the pipeline.

#### Rule 2: Always Update Documentation
Documentation is automatically updated on every commit:
- File structure documentation
- Component documentation
- API reference
- README statistics
- CHANGELOG entries

**No manual documentation updates needed** - the pipeline handles it.

### Code Quality

- HTML validated with htmlhint
- CSS validated with stylelint
- JavaScript validated with eslint
- Markdown validated with markdownlint
- Security scanned with Trivy and secretlint

## Project Structure

```
D365FOMock/
├── .github/
│   └── workflows/
│       ├── ci-cd.yml           # Main CI/CD pipeline
│       └── README.md            # Pipeline documentation
├── examples/
│   ├── customer-list-page.html # Customer list demo
│   ├── customer-list-page.js   # Interactive functionality
│   ├── d365fo-styles.css       # D365FO styling
│   └── README.md                # Examples documentation
├── scripts/
│   ├── generate_docs.py        # Documentation generator
│   ├── update_readme.py        # README updater
│   └── update_changelog.py     # CHANGELOG updater
├── docs/                        # Generated documentation
├── D365FO_Form_Design_Patterns.md  # Design patterns guide
├── .pre-commit-config.yaml     # Pre-commit hooks
└── README.md                    # This file
```

## Available Form Patterns

Based on Microsoft's D365FO documentation, the following patterns are documented:

1. **Details Master** - Complex entity data entry with FastTabs
2. **Simple List and Details** - Medium complexity entities
3. **List Page** - Browse and filter records (✅ Implemented)
4. **Simple Details** - Display limited information
5. **Workspace** - Navigation hub for business activities
6. **Dialog** - User input with commit/cancel
7. **Wizard** - Step-by-step guidance
8. **Lookup** - Data selection controls

## Roadmap

- [ ] Details Master form example
- [ ] Simple List and Details form example
- [ ] Dialog form example
- [ ] Workspace pattern example
- [ ] Wizard pattern example
- [ ] Unit and integration tests
- [ ] Backend API integration examples
- [ ] X++ code generation from patterns

## Resources

- [Microsoft Learn - D365FO Documentation](https://learn.microsoft.com/en-us/dynamics365/fin-ops-core/fin-ops/)
- [Form Patterns Documentation](https://learn.microsoft.com/en-us/dynamics365/fin-ops-core/dev-itpro/user-interface/form-styles-patterns)
- [General Form Guidelines](https://learn.microsoft.com/en-us/dynamics365/fin-ops-core/dev-itpro/user-interface/general-form-guidelines)

## License

This is a demonstration/mockup for educational and development purposes.

## Support

- **Issues**: Report bugs and request features via [GitHub Issues](https://github.com/mihtr/D365FOMock/issues)
- **Discussions**: Ask questions in [GitHub Discussions](https://github.com/mihtr/D365FOMock/discussions)
- **CI/CD Help**: See [.github/workflows/README.md](.github/workflows/README.md)

---

*This README is automatically updated by the CI/CD pipeline.*
