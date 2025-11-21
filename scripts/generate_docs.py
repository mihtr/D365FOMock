#!/usr/bin/env python3
"""
Automatic Documentation Generator for D365FOMock
Generates documentation from code comments, file structure, and metadata
"""

import os
import json
import re
from datetime import datetime
from pathlib import Path


class DocumentationGenerator:
    """Generate comprehensive documentation from project files"""

    def __init__(self, project_root="."):
        self.project_root = Path(project_root)
        self.docs_dir = self.project_root / "docs"
        self.docs_dir.mkdir(exist_ok=True)

    def generate_all(self):
        """Generate all documentation"""
        print("🔄 Generating documentation...")

        self.generate_file_structure_doc()
        self.generate_component_docs()
        self.generate_api_reference()
        self.generate_changelog_entry()

        print("✅ Documentation generation complete!")

    def generate_file_structure_doc(self):
        """Generate file structure documentation"""
        print("📁 Generating file structure documentation...")

        structure_doc = self.docs_dir / "FILE_STRUCTURE.md"

        with open(structure_doc, "w", encoding="utf-8") as f:
            f.write("# D365FOMock File Structure\n\n")
            f.write(f"*Generated: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}*\n\n")
            f.write("## Project Organization\n\n")

            f.write("```\n")
            self._write_tree(self.project_root, f, prefix="")
            f.write("```\n\n")

            f.write("## Directory Descriptions\n\n")
            self._write_directory_descriptions(f)

        print(f"✅ Created: {structure_doc}")

    def _write_tree(self, path, file, prefix="", is_last=True):
        """Recursively write directory tree"""
        # Skip certain directories
        skip_dirs = {".git", "node_modules", "__pycache__", ".claude"}

        if path.is_file():
            return

        items = sorted(path.iterdir(), key=lambda x: (not x.is_dir(), x.name))
        items = [item for item in items if item.name not in skip_dirs]

        for i, item in enumerate(items):
            is_last_item = i == len(items) - 1
            connector = "└── " if is_last_item else "├── "

            file.write(f"{prefix}{connector}{item.name}\n")

            if item.is_dir() and item.name not in skip_dirs:
                extension = "    " if is_last_item else "│   "
                self._write_tree(item, file, prefix + extension, is_last_item)

    def _write_directory_descriptions(self, file):
        """Write descriptions for each directory"""
        descriptions = {
            ".github/": "GitHub Actions workflows and CI/CD configuration",
            "examples/": "Interactive browser-based examples demonstrating D365FO form patterns",
            "scripts/": "Automation scripts for documentation, build, and deployment",
            "docs/": "Generated and manual documentation",
            "tests/": "Test suites for validation and quality assurance",
        }

        for directory, description in descriptions.items():
            dir_path = self.project_root / directory
            if dir_path.exists():
                file.write(f"### `{directory}`\n{description}\n\n")

    def generate_component_docs(self):
        """Generate documentation for each component"""
        print("🧩 Generating component documentation...")

        examples_dir = self.project_root / "examples"
        if not examples_dir.exists():
            return

        components_doc = self.docs_dir / "COMPONENTS.md"

        with open(components_doc, "w", encoding="utf-8") as f:
            f.write("# D365FOMock Components\n\n")
            f.write(f"*Generated: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}*\n\n")

            # Parse HTML files
            for html_file in examples_dir.glob("*.html"):
                self._document_html_component(html_file, f)

            # Parse JavaScript files
            for js_file in examples_dir.glob("*.js"):
                self._document_js_component(js_file, f)

        print(f"✅ Created: {components_doc}")

    def _document_html_component(self, html_file, file):
        """Document an HTML component"""
        file.write(f"## {html_file.stem}\n\n")
        file.write(f"**File**: `{html_file.relative_to(self.project_root)}`\n\n")

        with open(html_file, "r", encoding="utf-8") as hf:
            content = hf.read()

            # Extract title
            title_match = re.search(r"<title>(.*?)</title>", content, re.IGNORECASE)
            if title_match:
                file.write(f"**Title**: {title_match.group(1)}\n\n")

            # Extract sections
            sections = re.findall(
                r'<!-- (.*?) -->', content
            )
            if sections:
                file.write("**Sections**:\n")
                for section in set(sections):
                    file.write(f"- {section}\n")
                file.write("\n")

    def _document_js_component(self, js_file, file):
        """Document a JavaScript component"""
        file.write(f"## {js_file.stem} (JavaScript)\n\n")
        file.write(f"**File**: `{js_file.relative_to(self.project_root)}`\n\n")

        with open(js_file, "r", encoding="utf-8") as jf:
            content = jf.read()

            # Extract functions
            functions = re.findall(
                r"function\s+(\w+)\s*\(([^)]*)\)", content
            )
            if functions:
                file.write("**Functions**:\n")
                for func_name, params in functions:
                    file.write(f"- `{func_name}({params})`\n")
                file.write("\n")

            # Extract classes
            classes = re.findall(r"class\s+(\w+)", content)
            if classes:
                file.write("**Classes**:\n")
                for class_name in classes:
                    file.write(f"- `{class_name}`\n")
                file.write("\n")

            # Extract constants
            constants = re.findall(r"const\s+(\w+)\s*=", content)
            if constants:
                file.write("**Constants**:\n")
                for const in constants[:10]:  # Limit to first 10
                    file.write(f"- `{const}`\n")
                file.write("\n")

    def generate_api_reference(self):
        """Generate API reference documentation"""
        print("📚 Generating API reference...")

        api_doc = self.docs_dir / "API_REFERENCE.md"

        with open(api_doc, "w", encoding="utf-8") as f:
            f.write("# D365FOMock API Reference\n\n")
            f.write(f"*Generated: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}*\n\n")

            f.write("## JavaScript API\n\n")

            # Find and document JavaScript APIs
            examples_dir = self.project_root / "examples"
            if examples_dir.exists():
                for js_file in examples_dir.glob("*.js"):
                    self._document_js_api(js_file, f)

        print(f"✅ Created: {api_doc}")

    def _document_js_api(self, js_file, file):
        """Document JavaScript API from a file"""
        with open(js_file, "r", encoding="utf-8") as jf:
            content = jf.read()

            file.write(f"### {js_file.stem}\n\n")

            # Extract function documentation
            func_pattern = r"/\*\*\s*(.*?)\s*\*/\s*function\s+(\w+)\s*\(([^)]*)\)"
            matches = re.finditer(func_pattern, content, re.DOTALL)

            for match in matches:
                doc_comment, func_name, params = match.groups()
                file.write(f"#### `{func_name}({params})`\n\n")

                # Clean up doc comment
                doc_lines = [
                    line.strip().lstrip("*").strip()
                    for line in doc_comment.split("\n")
                    if line.strip()
                ]
                if doc_lines:
                    file.write(f"{' '.join(doc_lines)}\n\n")

    def generate_changelog_entry(self):
        """Generate or update CHANGELOG with automated entry"""
        print("📝 Updating CHANGELOG...")

        changelog = self.project_root / "CHANGELOG.md"

        # Read existing changelog or create new
        if changelog.exists():
            with open(changelog, "r", encoding="utf-8") as f:
                existing_content = f.read()
        else:
            existing_content = "# Changelog\n\nAll notable changes to this project will be documented in this file.\n\n"

        # Create new entry
        today = datetime.now().strftime("%Y-%m-%d")
        new_entry = f"## [{today}] - Auto-generated\n\n"
        new_entry += "### Changed\n- Documentation automatically updated\n\n"

        # Insert new entry after the header
        lines = existing_content.split("\n")
        header_end = 0
        for i, line in enumerate(lines):
            if line.startswith("## "):
                header_end = i
                break

        if header_end == 0:
            # No previous entries, add after header
            updated_content = existing_content + "\n" + new_entry
        else:
            # Insert before first entry
            updated_content = (
                "\n".join(lines[:header_end])
                + "\n"
                + new_entry
                + "\n".join(lines[header_end:])
            )

        with open(changelog, "w", encoding="utf-8") as f:
            f.write(updated_content)

        print(f"✅ Updated: {changelog}")


def main():
    """Main entry point"""
    generator = DocumentationGenerator()
    generator.generate_all()


if __name__ == "__main__":
    main()
