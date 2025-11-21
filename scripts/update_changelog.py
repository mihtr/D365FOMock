#!/usr/bin/env python3
"""
CHANGELOG Updater for D365FOMock
Automatically updates CHANGELOG based on git commits
"""

import os
import subprocess
from datetime import datetime
from pathlib import Path


class ChangelogUpdater:
    """Update CHANGELOG with recent changes"""

    def __init__(self, project_root="."):
        self.project_root = Path(project_root)
        self.changelog_path = self.project_root / "CHANGELOG.md"

    def update(self):
        """Update the CHANGELOG file"""
        print("📝 Updating CHANGELOG...")

        if not self.changelog_path.exists():
            self.create_changelog()
        else:
            self.update_existing_changelog()

        print("✅ CHANGELOG updated!")

    def create_changelog(self):
        """Create a new CHANGELOG file"""
        print("Creating new CHANGELOG...")

        content = """# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

"""

        # Add initial entry
        content += self.generate_entry()

        with open(self.changelog_path, "w", encoding="utf-8") as f:
            f.write(content)

        print(f"✅ Created: {self.changelog_path}")

    def update_existing_changelog(self):
        """Update existing CHANGELOG"""
        print("Updating existing CHANGELOG...")

        with open(self.changelog_path, "r", encoding="utf-8") as f:
            existing_content = f.read()

        new_entry = self.generate_entry()

        # Find where to insert (after header)
        lines = existing_content.split("\n")
        insert_pos = 0

        for i, line in enumerate(lines):
            if line.startswith("## ["):
                insert_pos = i
                break

        if insert_pos == 0:
            # No entries yet, append to end
            updated_content = existing_content + "\n" + new_entry
        else:
            # Insert before first entry
            updated_content = (
                "\n".join(lines[:insert_pos])
                + "\n"
                + new_entry
                + "\n"
                + "\n".join(lines[insert_pos:])
            )

        with open(self.changelog_path, "w", encoding="utf-8") as f:
            f.write(updated_content)

        print(f"✅ Updated: {self.changelog_path}")

    def generate_entry(self):
        """Generate a changelog entry"""
        today = datetime.now().strftime("%Y-%m-%d")
        entry = f"## [{today}] - Automated Update\n\n"

        # Try to get recent git commits
        changes = self.get_recent_changes()

        if changes:
            # Categorize changes
            added = [c for c in changes if "add" in c.lower() or "new" in c.lower()]
            changed = [
                c
                for c in changes
                if "update" in c.lower()
                or "change" in c.lower()
                or "modify" in c.lower()
            ]
            fixed = [c for c in changes if "fix" in c.lower()]
            removed = [
                c for c in changes if "remove" in c.lower() or "delete" in c.lower()
            ]

            if added:
                entry += "### Added\n"
                for change in added[:5]:
                    entry += f"- {change}\n"
                entry += "\n"

            if changed:
                entry += "### Changed\n"
                for change in changed[:5]:
                    entry += f"- {change}\n"
                entry += "\n"

            if fixed:
                entry += "### Fixed\n"
                for change in fixed[:5]:
                    entry += f"- {change}\n"
                entry += "\n"

            if removed:
                entry += "### Removed\n"
                for change in removed[:5]:
                    entry += f"- {change}\n"
                entry += "\n"
        else:
            entry += "### Changed\n"
            entry += "- Documentation automatically updated\n"
            entry += "- Project files synchronized\n\n"

        return entry

    def get_recent_changes(self):
        """Get recent changes from git"""
        try:
            # Get last 10 commit messages
            result = subprocess.run(
                ["git", "log", "-10", "--pretty=format:%s"],
                cwd=self.project_root,
                capture_output=True,
                text=True,
            )

            if result.returncode == 0:
                commits = result.stdout.strip().split("\n")
                # Filter out automated commits
                return [
                    c
                    for c in commits
                    if c and not c.startswith("docs: auto-update")
                ]
        except Exception as e:
            print(f"Warning: Could not get git commits: {e}")

        return []


def main():
    """Main entry point"""
    updater = ChangelogUpdater()
    updater.update()


if __name__ == "__main__":
    main()
