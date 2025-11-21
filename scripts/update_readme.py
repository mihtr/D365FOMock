#!/usr/bin/env python3
"""
README Updater for D365FOMock
Automatically updates README with latest project information
"""

import os
import re
from datetime import datetime
from pathlib import Path


class ReadmeUpdater:
    """Update README with current project statistics and information"""

    def __init__(self, project_root="."):
        self.project_root = Path(project_root)
        self.readme_path = self.project_root / "README.md"

    def update(self):
        """Update the README file"""
        print("📄 Updating README...")

        if not self.readme_path.exists():
            self.create_readme()
        else:
            self.update_existing_readme()

        print("✅ README updated!")

    def create_readme(self):
        """Create a new README file"""
        print("Creating new README...")

        stats = self.gather_statistics()

        content = f"""# D365FOMock

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

*Last updated: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}*

- **HTML Files**: {stats['html_count']}
- **CSS Files**: {stats['css_count']}
- **JavaScript Files**: {stats['js_count']}
- **Documentation Files**: {stats['md_count']}

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
- [File Structure](docs/FILE_STRUCTURE.md) - Project organization
- [Components](docs/COMPONENTS.md) - Component documentation
- [API Reference](docs/API_REFERENCE.md) - JavaScript API documentation

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

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run local validation (pre-commit hooks will help)
5. Submit a pull request

The CI/CD pipeline will automatically:
- Validate your changes
- Update documentation
- Run security scans
- Build artifacts

## Development Rules

### CI/CD Rules
1. **Always run CI/CD**: Pipeline executes on all branches and PRs
2. **Always update documentation**: Documentation auto-generates on every commit
3. **Validate before commit**: Pre-commit hooks validate code quality

## License

This is a demonstration/mockup for educational and development purposes.

## Resources

- [Microsoft Learn - D365FO Documentation](https://learn.microsoft.com/en-us/dynamics365/fin-ops-core/fin-ops/)
- [Form Patterns Documentation](https://learn.microsoft.com/en-us/dynamics365/fin-ops-core/dev-itpro/user-interface/form-styles-patterns)

---

*This README is automatically updated by the CI/CD pipeline.*
"""

        with open(self.readme_path, "w", encoding="utf-8") as f:
            f.write(content)

        print(f"✅ Created: {self.readme_path}")

    def update_existing_readme(self):
        """Update existing README with latest statistics"""
        print("Updating existing README...")

        with open(self.readme_path, "r", encoding="utf-8") as f:
            content = f.read()

        stats = self.gather_statistics()

        # Update statistics section
        stats_pattern = r"(## Project Statistics.*?\n\n)(.*?)(\n\n##|\Z)"
        stats_replacement = (
            f"\\1*Last updated: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}*\n\n"
            f"- **HTML Files**: {stats['html_count']}\n"
            f"- **CSS Files**: {stats['css_count']}\n"
            f"- **JavaScript Files**: {stats['js_count']}\n"
            f"- **Documentation Files**: {stats['md_count']}\n"
            f"\\3"
        )

        if re.search(stats_pattern, content, re.DOTALL):
            content = re.sub(stats_pattern, stats_replacement, content, flags=re.DOTALL)
        else:
            # Add statistics section if it doesn't exist
            stats_section = f"\n## Project Statistics\n\n*Last updated: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}*\n\n"
            stats_section += f"- **HTML Files**: {stats['html_count']}\n"
            stats_section += f"- **CSS Files**: {stats['css_count']}\n"
            stats_section += f"- **JavaScript Files**: {stats['js_count']}\n"
            stats_section += f"- **Documentation Files**: {stats['md_count']}\n\n"

            # Insert after Overview section or at the beginning
            if "## Overview" in content:
                content = content.replace(
                    "## Overview", stats_section + "## Overview", 1
                )
            else:
                lines = content.split("\n")
                insert_pos = 2  # After title
                lines.insert(insert_pos, stats_section)
                content = "\n".join(lines)

        with open(self.readme_path, "w", encoding="utf-8") as f:
            f.write(content)

        print(f"✅ Updated: {self.readme_path}")

    def gather_statistics(self):
        """Gather project statistics"""
        stats = {
            "html_count": 0,
            "css_count": 0,
            "js_count": 0,
            "md_count": 0,
        }

        for file_path in self.project_root.rglob("*"):
            if any(
                skip in file_path.parts
                for skip in [".git", "node_modules", "__pycache__", ".claude"]
            ):
                continue

            if file_path.is_file():
                if file_path.suffix == ".html":
                    stats["html_count"] += 1
                elif file_path.suffix == ".css":
                    stats["css_count"] += 1
                elif file_path.suffix == ".js":
                    stats["js_count"] += 1
                elif file_path.suffix == ".md":
                    stats["md_count"] += 1

        return stats


def main():
    """Main entry point"""
    updater = ReadmeUpdater()
    updater.update()


if __name__ == "__main__":
    main()
