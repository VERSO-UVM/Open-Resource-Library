---
sidebar_position: 9
---

# CI/CD

**CI/CD** stands for **Continuous Integration** and **Continuous Delivery** (or Deployment). It's a set of practices and tools that automate the testing and deployment of software, letting teams ship code more reliably and frequently.

## Why CI/CD?

Without automation, releasing software is manual and error-prone:

- A developer finishes a feature and manually runs tests
- They manually build the project
- They manually upload files to a server
- They hope nothing was forgotten

With CI/CD, these steps happen automatically every time code is pushed to the repository.

## Continuous Integration (CI)

**Continuous Integration** means automatically building and testing your code every time a change is pushed. The goal is to catch problems early — ideally before they ever reach the main branch.

A typical CI pipeline runs:

1. **Install dependencies** — set up the project environment
2. **Run linters** — check for style and syntax issues
3. **Run tests** — execute the automated test suite
4. **Report results** — pass or fail, with details

If any step fails, the team is notified immediately. Pull requests can be configured to require CI to pass before merging.

### Benefits of CI

- Bugs are caught when the change is still fresh in the developer's mind
- The main branch stays in a working state
- Everyone on the team gets instant feedback on their changes
- No "it works on my machine" — CI runs in a clean, consistent environment

## Continuous Delivery (CD)

**Continuous Delivery** extends CI by automatically preparing a deployable version of the software after every successful build. The actual deployment to production requires a manual approval step.

**Continuous Deployment** goes one step further — every passing build is automatically deployed to production with no human intervention.

```text
Push code
    → CI builds and tests
        → CD packages the build
            → (manual approval OR automatic)
                → Deployed to production
```

## GitHub Actions

[GitHub Actions](https://github.com/features/actions) is GitHub's built-in CI/CD platform. Workflows are defined as YAML files stored in `.github/workflows/`.

### Your First Workflow

Create `.github/workflows/ci.yml`:

```yaml
name: CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
      - name: Check out code
        uses: actions/checkout@v4

      - name: Set up Python
        uses: actions/setup-python@v5
        with:
          python-version: '3.12'

      - name: Install dependencies
        run: pip install -r requirements.txt

      - name: Run tests
        run: pytest
```

This workflow:

- Triggers on any push to `main` or any pull request targeting `main`
- Checks out the code
- Sets up Python 3.12
- Installs dependencies
- Runs the test suite with pytest

If any step returns a non-zero exit code, the workflow fails and GitHub marks the commit or PR with a red X.

### Key Concepts

**Triggers (`on`)** — what causes the workflow to run:

```yaml
on:
  push:           # Any push
  pull_request:   # Any PR
  schedule:
    - cron: '0 9 * * 1'  # Every Monday at 9am UTC
  workflow_dispatch:      # Manual trigger from GitHub UI
```

**Jobs** — independent units of work that run in parallel by default:

```yaml
jobs:
  lint:
    runs-on: ubuntu-latest
    steps: [...]

  test:
    runs-on: ubuntu-latest
    steps: [...]
```

**Steps** — sequential commands within a job. Each step either runs a shell command (`run`) or calls a reusable action (`uses`).

**Actions** — reusable building blocks published on the [GitHub Marketplace](https://github.com/marketplace?type=actions). `actions/checkout` and `actions/setup-python` are official examples.

**Matrix builds** — run the same job across multiple configurations:

```yaml
strategy:
  matrix:
    python-version: ['3.10', '3.11', '3.12']
    os: [ubuntu-latest, windows-latest]
```

### Secrets

Store sensitive values (API keys, deploy tokens) as **GitHub Secrets** under your repo's **Settings → Secrets and variables → Actions**. Reference them in workflows:

```yaml
- name: Deploy
  env:
    API_KEY: ${{ secrets.MY_API_KEY }}
  run: deploy-script.sh
```

Secrets are never printed in logs.

## A More Complete Example

Here's a workflow that lints, tests, and deploys a Python project:

```yaml
name: CI/CD

on:
  push:
    branches: [main]
  pull_request:

jobs:
  lint-and-test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-python@v5
        with:
          python-version: '3.12'
      - run: pip install ruff pytest
      - name: Lint
        run: ruff check .
      - name: Test
        run: pytest --tb=short

  deploy:
    needs: lint-and-test        # Only runs if lint-and-test passes
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'   # Only on main branch
    steps:
      - uses: actions/checkout@v4
      - name: Deploy to server
        run: echo "Deploy step goes here"
```

## Status Badges

You can add a CI status badge to your README to show whether the build is passing:

```markdown
![CI](https://github.com/username/repo/actions/workflows/ci.yml/badge.svg)
```

## Other CI/CD Platforms

While GitHub Actions is the most convenient for GitHub-hosted projects, other platforms exist:

- **GitLab CI/CD** — built into GitLab, uses `.gitlab-ci.yml`
- **CircleCI** — popular third-party CI service
- **Jenkins** — self-hosted, highly customizable
- **Travis CI** — historically popular in open source

## References

- [GitHub Actions documentation](https://docs.github.com/en/actions)
- [GitHub Actions Marketplace](https://github.com/marketplace?type=actions)
- [Atlassian: What is CI/CD?](https://www.atlassian.com/continuous-delivery/principles/continuous-integration-vs-delivery-vs-deployment)
