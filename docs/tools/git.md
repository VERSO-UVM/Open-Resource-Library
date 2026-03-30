---
sidebar_position: 2
---

# Git

## What is Git?

Git is a distributed version control system that enables collaborative software development.
It tracks changes in files, allowing multiple developers to work on projects simultaneously.
It records project history and facilitates efficient collaboration by merging changes.

### Origins

Developed by Linus Torvalds in 2005 to manage the Linux kernel development, Git was created to address limitations in existing version control systems.

## Key Features

- **Distributed Development:** Git allows multiple developers to work on a project simultaneously.
- **Branching and Merging:** Enables creating separate lines of development and merging changes.
- **History Tracking:** Records changes, making it easy to review project history.
- **Fast and Efficient:** Lightweight and performs operations quickly.
- **Open Source:** Free and accessible for various platforms.

## Installation and Setup

### Installing Git on Different Platforms

#### Windows

- Download the installer from [Git for Windows](https://gitforwindows.org/).
- Run the installer and follow the installation instructions.

#### macOS

Install Git using Homebrew:
`brew install git`

#### Linux

Install Git using your distribution's package manager:

- Debian/Ubuntu: `sudo apt update && sudo apt install git`
- Fedora: `sudo dnf install git`
- Arch: `sudo pacman -S git`
- OpenSUSE: `sudo zypper install git`
- Alpine: `doas apk add git`
- Void: `sudo xbps-install -U git`

### Basic Configuration

After installation, configure Git by setting your username and email:

```sh
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

## Creating a Git Repository

### Initializing a Local Repository

To start version controlling a project, initialize a local Git repository:
`git init`

### Cloning an Existing Repository

To create a copy of an existing repository:
`git clone <repository URL>`

## Recording Changes

### Staging Changes

Git records changes to a project within a *staging area*, which exists as an `index` file within the `.git` directory.
To modify your project, you must add your changes to the staging area (stage it), then commit them to the repository.

- Add changes to the staging area: `git add [path]`
- Remove changes from the staging area: `git reset [path]`
- Show staged and unstaged changes: `git status`

You can instruct Git to ignore certain untracked files using a `.gitignore` file.

### Committing Changes

Use the `git commit` command to commit staged changes to the repository.

Commonly used options:

- `-m <message>` - Add a message to the commit
- `-a` - Automatically stage tracked files that have been modified or deleted
- `--amend` - Redo the last commit, amending the commit message or the committed files

:::tip
Making many smaller commits with meaningful messages is often easier for contributors than fewer large commits.
:::

### Signing Commits

Many open-source projects make use of Git's ability to sign commits

### Viewing Changes

- View the current staged changes: `git diff`
- View the commit logs: `git log`

## Branching and Merging

Git organizes a sequence of commits into *branches*.
Most branches contain fixes or features not ready for a `main`, `trunk`, or `master` branch.
Once changes have been thoroughly tested and approved they can be merged back into the primary branch.

- List branches: `git branch`
- Create a new branch: `git branch <branch-name>`
- Switch to a branch: `git checkout <branch-name>`
- Create and switch: `git checkout -b <branch-name>`
- Delete branch: `git branch -d <branch-name>`
- Merge a branch into the current branch: `git merge <branch-name>`

## Working with Remotes

While Git can be used entirely locally, most projects host their projects on a Git server such as [GitHub](/tools/github), Gitlab, BitBucket, or Forgejo.

### Setting Remotes

When cloning a repository, Git will automatically set the cloned server as a remote named `origin`.

```sh
# View configured remotes
git remote -v

# Add a new remote
git remote add origin https://github.com/username/repo.git

# Push a branch to a remote
git push origin main

# Push and set upstream (so future pushes just need `git push`)
git push -u origin main

# Fetch changes from the remote without merging
git fetch origin

# Pull (fetch + merge) changes from the remote
git pull origin main
```

## Undoing Changes

One of Git's most valuable features is the ability to undo mistakes.

### Unstaging Files

```sh
# Remove a file from the staging area (keep changes in working directory)
git restore --staged file.txt
```

### Discarding Working Directory Changes

```sh
# Discard uncommitted changes to a file (this cannot be undone!)
git restore file.txt

# Discard all uncommitted changes
git restore .
```

### Undoing Commits

```sh
# Undo the last commit but keep the changes staged
git reset --soft HEAD~1

# Undo the last commit and unstage the changes
git reset HEAD~1

# Create a new commit that reverses a previous commit (safe for shared history)
git revert <commit-hash>
```

:::warning
Avoid using `git reset --hard` or `git push --force` on shared branches — these rewrite history and can cause problems for other contributors.
:::

## Stashing

Stashing lets you temporarily set aside changes without committing them. Useful when you need to switch branches but aren't ready to commit.

```sh
# Save current changes to the stash
git stash

# List stashed changes
git stash list

# Apply the most recent stash and keep it in the list
git stash apply

# Apply and remove the most recent stash
git stash pop

# Stash with a descriptive message
git stash push -m "work in progress on feature X"
```

## Viewing History

```sh
# Full commit log
git log

# Condensed one-line log
git log --oneline

# Show a graph of branches and merges
git log --oneline --graph --all

# Show what changed in a specific commit
git show <commit-hash>

# Show who last modified each line of a file
git blame file.txt
```

## Rebasing

Rebasing is an alternative to merging. Instead of creating a merge commit, it replays your commits on top of another branch, resulting in a cleaner linear history.

```sh
# Rebase the current branch onto main
git rebase main
```

**Interactive rebase** lets you rewrite, combine, and reorder commits:

```sh
# Interactively rebase the last 3 commits
git rebase -i HEAD~3
```

In the interactive editor you can:

- `pick` — keep the commit as-is
- `squash` (or `s`) — combine with the previous commit
- `reword` (or `r`) — keep the commit but edit the message
- `drop` (or `d`) — remove the commit entirely

:::tip
Squashing commits before merging a PR makes the project history cleaner — a series of work-in-progress commits becomes a single, well-described commit.
:::

## Tags

Tags mark specific commits as significant — typically used to mark releases.

```sh
# Create a lightweight tag
git tag v1.0.0

# Create an annotated tag (recommended)
git tag -a v1.0.0 -m "Release version 1.0.0"

# List tags
git tag

# Push tags to a remote
git push origin --tags
```

## .gitignore

A `.gitignore` file tells Git which files to never track. Place one at the root of your repository.

```text
# Python
__pycache__/
*.pyc
venv/
.env

# Node.js
node_modules/

# Editor files
.vscode/settings.json
.idea/

# OS files
.DS_Store
Thumbs.db
```

[gitignore.io](https://www.gitignore.io) generates `.gitignore` files for any language or framework.

## Common Workflow

A typical day-to-day Git workflow looks like this:

```sh
# 1. Make sure you're up to date
git pull origin main

# 2. Create a new branch for your work
git checkout -b feature/my-feature

# 3. Make changes, then stage and commit them
git add changed-file.py
git commit -m "feat: add new data processing step"

# 4. Push the branch to GitHub
git push -u origin feature/my-feature

# 5. Open a pull request on GitHub
# 6. After review and approval, merge into main
```

## References

[//]: # (This documentation serves as an introduction to Git, providing the fundamental knowledge and commands essential for version control and collaborative software development.)
[//]: # (Explore further to enhance your understanding and proficiency with Git.)

- [Official Git documentation](https://git-scm.com/doc)
- [GitHub Git guide](https://github.com/git-guides)
- [ArchWiki Git page](https://wiki.archlinux.org/title/Git)
- [Oh Shit, Git!?!](https://ohshitgit.com) — plain-English solutions to common Git mistakes
- [Learn Git Branching](https://learngitbranching.js.org) — interactive visual tutorial
