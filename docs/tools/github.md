# GitHub

GitHub is a web-based platform built on top of Git that adds collaboration features like issue tracking, pull requests, code review, project management, and hosting for open source and private projects. It is where the vast majority of open source software lives today.

## What GitHub Does for You

While [Git](/tools/git) handles version control locally, GitHub provides:

- A **remote backup** of your repository in the cloud
- **Pull requests** for proposing and reviewing code changes
- **Issues** for tracking bugs, features, and tasks
- **GitHub Actions** for automating tests and deployments
- **GitHub Pages** for hosting websites directly from a repository
- **Discussions, wikis, and project boards** for team coordination

## Key Concepts

### Repositories

A repository (repo) is where your project lives. It contains all your code, commit history, branches, and project metadata.

- **Public** repos are visible to everyone — great for open source
- **Private** repos are only visible to you and collaborators

### Forks

Forking creates your own copy of someone else's repository under your GitHub account. This lets you freely experiment with changes without affecting the original project. When you're ready to contribute back, you open a pull request.

```text
Original repo: VERSO-UVM/some-project
Your fork:     your-username/some-project
```

### Pull Requests (PRs)

A pull request is how you propose changes to a repository. It shows the difference between your changes and the current codebase, and gives maintainers a place to review and discuss your work before merging.

**A typical contribution workflow:**

1. Fork the repo (if you're an outside contributor) or create a branch
2. Make your changes on a feature branch
3. Push the branch to GitHub
4. Open a pull request to the main branch of the original repo
5. Respond to review comments
6. The maintainer merges your PR

### Issues

Issues are how projects track bugs, feature requests, and tasks. Anyone can open an issue on a public repository. A good issue includes:

- A clear title
- Steps to reproduce (for bugs)
- What you expected to happen vs. what actually happened
- Screenshots or error messages if relevant

:::tip
Before opening an issue, search existing issues first. Your bug might already be reported, or a feature might already be in progress.
:::

### Branches

GitHub works with Git branches. The default branch (usually `main`) is the stable version of the project. Feature work and bug fixes happen on separate branches.

## Getting Started

### Creating a Repository

1. Click the **+** icon in the top right and select **New repository**
2. Give it a name and optional description
3. Choose public or private
4. Optionally add a README, `.gitignore`, and license
5. Click **Create repository**

GitHub will show you commands to either initialize a new repo locally or connect an existing one:

```sh
# Connect an existing local repo to GitHub
git remote add origin https://github.com/your-username/your-repo.git
git branch -M main
git push -u origin main
```

### Cloning a Repository

To get a local copy of a GitHub repository:

```sh
git clone https://github.com/username/repo-name.git
```

If you have [SSH keys set up](/tools/ssh), use the SSH URL instead for passwordless authentication:

```sh
git clone git@github.com:username/repo-name.git
```

## Working with Pull Requests

### Opening a PR

1. Push your feature branch to GitHub:

   ```sh
   git push origin my-feature-branch
   ```

2. Visit the repository on GitHub — a banner will appear prompting you to open a PR
3. Write a clear title and description explaining *what* you changed and *why*
4. Assign reviewers if appropriate
5. Submit the PR

### Good PR Descriptions

A good PR description includes:

- A summary of what was changed
- Why the change was made
- Any relevant issue numbers (e.g., `Closes #42`)
- Screenshots for UI changes

### Reviewing a PR

When reviewing someone else's code:

- Leave specific, actionable comments on individual lines
- Be constructive and kind — critique the code, not the person
- Approve the PR when satisfied, or request changes with clear explanations

:::tip
Use the **Files changed** tab to view exactly what lines were modified. You can comment on individual lines by clicking the `+` icon next to them.
:::

## GitHub Actions

GitHub Actions is a built-in automation platform. You can configure workflows that run automatically when things happen in your repo, such as pushing code, opening a PR, or publishing a release.

Common uses:

- Running your test suite on every push
- Linting code for style issues
- Automatically deploying a website
- Sending notifications

Workflows are defined as YAML files in the `.github/workflows/` directory. Here is a simple example that runs Python tests on every push:

```yaml
name: Run Tests

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-python@v5
        with:
          python-version: '3.12'
      - run: pip install -r requirements.txt
      - run: pytest
```

See the [CI/CD concepts page](/concepts/ci_cd) for more background on what this accomplishes.

## GitHub Pages

GitHub Pages lets you host a static website directly from a repository for free. This is great for:

- Project documentation
- Personal portfolios
- Course or lab websites

To enable it, go to your repo's **Settings → Pages** and choose a source branch. Any HTML, CSS, or JavaScript pushed there will be published.

## Useful GitHub Features

### Pinning Issues and PRs

You can reference issues and PRs in commit messages or PR descriptions:

- `Closes #15` — automatically closes issue #15 when the PR is merged
- `Fixes #15` — same behavior
- `#15` — creates a link to the issue without closing it

### Labels

Labels are colored tags you can apply to issues and PRs to categorize them (e.g., `bug`, `enhancement`, `good first issue`). The `good first issue` label is a convention that signals a task is suitable for new contributors.

### Watching and Starring

- **Star** a repo to bookmark it and show appreciation
- **Watch** a repo to receive notifications about activity

### GitHub CLI

The `gh` CLI tool lets you interact with GitHub from your terminal:

```sh
# Install (macOS)
brew install gh

# Authenticate
gh auth login

# Create a PR from the current branch
gh pr create

# View open issues
gh issue list

# Clone a repo
gh repo clone username/repo-name
```

## References

- [GitHub Docs](https://docs.github.com)
- [GitHub Skills](https://skills.github.com) — free interactive courses
- [GitHub CLI docs](https://cli.github.com/manual/)
- [Understanding the GitHub flow](https://docs.github.com/en/get-started/using-github/github-flow)
