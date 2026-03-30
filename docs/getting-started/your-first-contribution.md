---
sidebar_position: 4
---

# Your First Contribution

This guide walks you through the complete workflow for contributing to an open source project on GitHub — from finding something to work on, to getting your changes merged.

**Prerequisites:** You should have Git installed and configured, a GitHub account, and SSH keys set up. If you haven't done that yet, start with [Setting Up Your Environment](./environment-setup).

---

## The Big Picture

Contributing to an open source project follows a consistent pattern:

```
Find an issue → Fork the repo → Clone your fork → Create a branch →
Make changes → Commit → Push → Open a pull request → Respond to review
```

Each step is explained below.

---

## Step 1: Find Something to Work On

Open source projects use **issues** to track bugs, feature requests, and tasks. Look for issues labeled:

- `good first issue` — intentionally easy; maintainers mark these for new contributors
- `help wanted` — the team wants external contributions
- `documentation` — often easier than code changes, and just as valuable

**Where to look:**
- Any project's Issues tab on GitHub
- [goodfirstissue.dev](https://goodfirstissue.dev) — aggregates beginner-friendly issues
- This library itself: [github.com/VERSO-UVM/Open-Resource-Library/issues](https://github.com/VERSO-UVM/Open-Resource-Library/issues)

Once you find an issue you want to work on, **leave a comment** saying you'd like to tackle it. This prevents two people from working on the same thing at the same time.

---

## Step 2: Fork the Repository

Forking creates your own copy of the repository under your GitHub account, where you can make changes freely.

1. Go to the project's GitHub page
2. Click the **Fork** button (top right)
3. GitHub creates `your-username/project-name` under your account

Your fork is independent — changes you make there won't affect the original project until you submit a pull request.

---

## Step 3: Clone Your Fork

Cloning downloads a local copy of your fork to your computer.

```bash
git clone git@github.com:your-username/project-name.git
cd project-name
```

Replace `your-username` and `project-name` with the actual values. Use the SSH URL (starts with `git@github.com`) rather than the HTTPS URL — it uses the SSH key you set up.

### Set the upstream remote

Add the original repository as a remote called `upstream`. This lets you pull in new changes from the original project later:

```bash
git remote add upstream git@github.com:original-owner/project-name.git
```

Verify your remotes:

```bash
git remote -v
```

You should see both `origin` (your fork) and `upstream` (the original).

---

## Step 4: Create a Branch

Never make changes directly on `main`. Create a new branch for your work:

```bash
git checkout -b fix/typo-in-readme
```

Use a short, descriptive branch name. Common conventions:

| Prefix | Use for |
|---|---|
| `fix/` | Bug fixes |
| `feat/` | New features |
| `docs/` | Documentation changes |
| `chore/` | Maintenance tasks |

---

## Step 5: Make Your Changes

Now do the actual work. Open the project in VS Code:

```bash
code .
```

Make your changes, then check what you've modified:

```bash
git status
git diff
```

`git status` shows which files have changed. `git diff` shows the exact lines that changed.

---

## Step 6: Commit Your Changes

Stage the files you want to include in the commit:

```bash
git add path/to/changed-file.md
```

Or stage all changed files:

```bash
git add .
```

Then commit with a clear message:

```bash
git commit -m "docs: fix typo in README installation section"
```

Write your commit message in the present tense and keep it under 72 characters. See [VERSO commit message standards](/verso-standards/commit-messages) for more detail.

:::tip
Make small, focused commits. One logical change per commit makes it easier for reviewers to understand your work and easier to undo if something goes wrong.
:::

---

## Step 7: Push Your Branch

Push your branch to your fork on GitHub:

```bash
git push origin fix/typo-in-readme
```

---

## Step 8: Open a Pull Request

1. Go to your fork on GitHub (`github.com/your-username/project-name`)
2. GitHub will show a banner: **"Compare & pull request"** — click it
3. Make sure the **base** is the original project's `main` branch and the **compare** is your branch
4. Fill in the title and description

**A good PR description includes:**

- What you changed and why
- A link to the issue it addresses (use `Closes #123` to automatically close the issue when the PR merges)
- Screenshots if you changed something visual
- Any notes for the reviewer

Example:

```
Fix typo in README installation section

Corrects "instal" → "install" in step 3 of the macOS setup instructions.

Closes #42
```

Click **Create pull request**.

---

## Step 9: Respond to Review

Maintainers will review your PR and may ask for changes. This is normal and expected — even experienced contributors get feedback.

- Read the comments carefully
- Make the requested changes on your local branch
- Commit and push again — the PR updates automatically
- Reply to comments to let the reviewer know you've addressed them

Once the reviewer approves, they'll merge your PR. Congratulations — you've contributed to open source!

---

## Keeping Your Fork Up to Date

If time passes between when you forked and when you finish your work, the original repo may have moved ahead. Sync your fork:

```bash
git checkout main
git fetch upstream
git merge upstream/main
git push origin main
```

If your feature branch is based on an outdated `main`, rebase it:

```bash
git checkout fix/typo-in-readme
git rebase main
```

---

## Common Situations

### You made commits on main by mistake

Create a branch from your current state and reset main:

```bash
git checkout -b fix/my-work
git checkout main
git reset --hard upstream/main
```

### You need to update your branch after the reviewer requests changes

Just make the changes, commit, and push again:

```bash
git add .
git commit -m "address review feedback: rename variable for clarity"
git push origin fix/typo-in-readme
```

### Your PR has merge conflicts

GitHub will warn you. The simplest fix:

```bash
git checkout main
git fetch upstream
git merge upstream/main
git checkout fix/typo-in-readme
git merge main
# resolve conflicts in the affected files
git add .
git commit -m "resolve merge conflicts"
git push origin fix/typo-in-readme
```

---

## References

- [GitHub Docs: Contributing to a project](https://docs.github.com/en/get-started/exploring-projects-on-github/contributing-to-a-project)
- [First Contributions](https://firstcontributions.github.io) — a practice repo to try the workflow with no risk
- [How to Write a Git Commit Message](https://cbea.ms/git-commit/) — Chris Beams' widely cited guide
- [VERSO Commit Message Standards](/verso-standards/commit-messages)
