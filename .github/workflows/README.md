# CI/CD Pipeline Documentation

## Overview

The D365FOMock project uses a comprehensive CI/CD pipeline that **always runs** on every commit, pull request, and branch. The pipeline automatically validates code, runs tests, updates documentation, and deploys artifacts.

## Pipeline Rules

### 🔄 Rule 1: Always Run CI/CD Pipeline

The CI/CD pipeline is configured to run on:
- ✅ All branch pushes (`push: branches: ['**']`)
- ✅ All pull requests (`pull_request: branches: ['**']`)
- ✅ Manual triggers (`workflow_dispatch`)
- ✅ Weekly schedule (Sunday at midnight)

**This means every commit triggers the full pipeline automatically.**

### 📚 Rule 2: Always Update Documentation

Documentation is automatically updated on every pipeline run:
- ✅ File structure documentation
- ✅ Component documentation
- ✅ API reference
- ✅ README statistics
- ✅ CHANGELOG entries

**Documentation changes are committed back to the repository automatically.**

## Pipeline Jobs

### 1. Validate (validate)
**Purpose**: Validate code quality and syntax

**Steps**:
- Validates HTML files with htmlhint
- Validates CSS files with stylelint
- Validates JavaScript files with eslint
- Validates Markdown files with markdownlint
- Checks for broken links

**Triggers**: Every commit

**Blocking**: Yes (pipeline fails if validation fails)

### 2. Test (test)
**Purpose**: Run automated tests

**Steps**:
- Sets up Node.js environment
- Installs testing dependencies (Jest, Puppeteer)
- Runs unit and integration tests
- Generates coverage reports

**Triggers**: After validation passes

**Blocking**: No (continues even if tests fail)

### 3. Update Documentation (update-documentation)
**Purpose**: Automatically update all documentation

**Steps**:
- Runs `scripts/generate_docs.py` to generate documentation
- Runs `scripts/update_readme.py` to update README
- Runs `scripts/update_changelog.py` to update CHANGELOG
- Commits changes back to repository (if any)

**Triggers**: After validation passes

**Blocking**: No

**Commits**: Automatically commits with message `docs: auto-update documentation [skip ci]`

### 4. Build (build)
**Purpose**: Build and package the project

**Steps**:
- Copies production files to build directory
- Minifies HTML, CSS, and JavaScript
- Creates release archive (ZIP)
- Uploads build artifacts (30-day retention)
- Uploads release archive (90-day retention)

**Triggers**: After validation and tests complete

**Blocking**: No

### 5. Security (security)
**Purpose**: Scan for security vulnerabilities

**Steps**:
- Runs Trivy vulnerability scanner
- Uploads results to GitHub Security tab
- Checks for secrets in code with secretlint

**Triggers**: After validation passes

**Blocking**: No (security issues reported but don't block)

### 6. Deploy Documentation (deploy-docs)
**Purpose**: Deploy to GitHub Pages

**Steps**:
- Creates documentation website
- Uploads to GitHub Pages
- Deploys live documentation site

**Triggers**: Only on main/master branch after build completes

**Blocking**: No

**URL**: Available at `https://<username>.github.io/D365FOMock/`

### 7. Notify (notify)
**Purpose**: Report pipeline status

**Steps**:
- Collects all job results
- Creates summary in GitHub Actions UI
- Reports on artifacts and next steps

**Triggers**: Always runs last, even if other jobs fail

**Blocking**: No

## Artifacts

### Build Artifacts
- **Name**: `build-artifacts`
- **Contents**: Minified production files
- **Retention**: 30 days
- **Location**: Available in workflow run

### Release Archive
- **Name**: `release-archive`
- **Contents**: ZIP file of entire build
- **Retention**: 90 days
- **Naming**: `D365FOMock-{commit-sha}.zip`

## Documentation Updates

The pipeline automatically updates these files:

### Generated Files
1. **docs/FILE_STRUCTURE.md** - Project file structure
2. **docs/COMPONENTS.md** - Component documentation
3. **docs/API_REFERENCE.md** - JavaScript API documentation

### Updated Files
1. **README.md** - Project statistics updated
2. **CHANGELOG.md** - New entries added based on commits

## Local Development

### Pre-commit Hooks

Install pre-commit hooks for local validation:

```bash
# Install pre-commit
pip install pre-commit

# Install hooks
pre-commit install

# Run manually
pre-commit run --all-files
```

### Manual Documentation Generation

Run documentation scripts manually:

```bash
# Generate all documentation
python scripts/generate_docs.py

# Update README
python scripts/update_readme.py

# Update CHANGELOG
python scripts/update_changelog.py
```

### Local Validation

Validate your code before committing:

```bash
# HTML validation
npx htmlhint examples/*.html

# CSS validation
npx stylelint examples/*.css

# JavaScript validation
npx eslint examples/*.js

# Markdown validation
npx markdownlint *.md
```

## Triggering the Pipeline

### Automatic Triggers

The pipeline runs automatically on:
- Any `git push` to any branch
- Any pull request creation or update
- Weekly on Sunday at midnight (scheduled)

### Manual Trigger

You can manually trigger the pipeline:

1. Go to Actions tab in GitHub
2. Select "CI/CD Pipeline" workflow
3. Click "Run workflow"
4. Select branch and click "Run workflow"

## Pipeline Configuration

### Environment Variables

- `NODE_VERSION`: 18
- `PYTHON_VERSION`: 3.11

### Secrets Required

- `GITHUB_TOKEN`: Automatically provided by GitHub Actions

### Permissions

The pipeline requires these permissions:
- `contents: write` - For committing documentation updates
- `pages: write` - For deploying to GitHub Pages
- `id-token: write` - For GitHub Pages deployment

## Monitoring

### View Pipeline Status

- **Badge**: Add to README for visual status
- **Actions Tab**: See all workflow runs
- **Commit Status**: Check marks on commits
- **Pull Requests**: Status checks before merge

### Pipeline Notifications

Failed pipelines notify via:
- GitHub UI notifications
- Email (if configured)
- Commit status checks

## Troubleshooting

### Pipeline Fails on Validation

**Problem**: Code doesn't pass validation

**Solution**:
```bash
# Run local validation
npm install -g htmlhint stylelint eslint markdownlint-cli
htmlhint examples/*.html
stylelint examples/*.css
eslint examples/*.js
markdownlint *.md
```

### Documentation Not Updating

**Problem**: Documentation changes not committed

**Solution**: Check that:
- Pipeline has `contents: write` permission
- `GITHUB_TOKEN` is available
- No conflicts in documentation files

### Build Artifacts Missing

**Problem**: Can't find build artifacts

**Solution**:
- Go to workflow run page
- Scroll to "Artifacts" section at bottom
- Download within retention period (30 days)

### GitHub Pages Not Deploying

**Problem**: Documentation site not available

**Solution**: Ensure:
- Running on main/master branch
- GitHub Pages enabled in repository settings
- `pages: write` permission granted

## Best Practices

### 1. Commit Messages

Use clear, descriptive commit messages:
- `feat: add new form pattern`
- `fix: correct styling issue`
- `docs: update API reference`
- `test: add unit tests`

### 2. Pull Requests

- Create feature branches
- Let pipeline run before merging
- Review documentation updates
- Check build artifacts

### 3. Documentation

- Let pipeline handle documentation updates
- Review auto-generated docs
- Add manual docs when needed
- Keep design patterns updated

### 4. Security

- Review security scan results
- Fix vulnerabilities promptly
- Don't commit secrets
- Use environment variables

## Advanced Configuration

### Customizing Pipeline

Edit `.github/workflows/ci-cd.yml` to:
- Add new jobs
- Modify validation rules
- Change deployment targets
- Add notification channels

### Adding New Documentation Scripts

1. Create script in `scripts/` directory
2. Add to `update-documentation` job
3. Test locally first
4. Commit and let pipeline run

### Disabling Specific Jobs

To skip a job temporarily:
```yaml
jobs:
  job-name:
    if: false  # Disable this job
```

## Support

For pipeline issues:
1. Check workflow logs in Actions tab
2. Review error messages
3. Test scripts locally
4. Open issue if needed

---

*This documentation is automatically updated by the CI/CD pipeline.*
