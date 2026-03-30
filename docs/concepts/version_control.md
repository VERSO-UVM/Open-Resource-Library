---
sidebar_position: 1
---

# Version Control

Version control is the practice of tracking and managing changes to files over time. It lets you see what changed, who changed it, and when — and it lets you recover any earlier version of your project. Almost every software project uses version control, and understanding it is one of the most important skills you'll develop as a developer.

## Why Version Control Matters

Imagine working on a research script for several days, and then accidentally deleting a section that was working. Without version control, that code is gone. With version control, you can restore it in seconds.

Or imagine two people editing the same file at the same time. Without version control, whoever saves last wins and the other person's work disappears. Version control solves this by merging changes intelligently.

More concretely, version control lets you:

- **Undo mistakes** — restore any file or the entire project to any previous state
- **See your history** — understand what changed and why, months or years later
- **Work in parallel** — create branches to experiment or build features without affecting the main codebase
- **Collaborate safely** — merge changes from multiple people without overwriting each other's work
- **Track blame** — see who wrote each line and why (via commit messages), which makes debugging faster

## How It Works

A version control system (VCS) stores a **history of snapshots** of your project. Each snapshot is called a **commit**. A commit records:

- Exactly which lines changed in which files
- Who made the change
- When the change was made
- A message describing what the change was and why

You don't take a snapshot automatically — you choose when to commit, and you write a short message explaining what you did. These messages become the project's change log.

```
commit a3f9d21
Author: Jane Smith <jane@example.com>
Date:   Mon Mar 10 14:32:05 2025

    Add input validation to the data parser

    Previously, malformed rows caused the script to crash silently.
    Now an error is raised with the offending row number.
```

Over time, your project accumulates hundreds or thousands of commits — a full history of every decision ever made.

## Centralized vs. Distributed

There are two main types of version control systems:

**Centralized** systems (like Subversion) store the project history on a single central server. Developers check out files from the server, make changes, and check them back in. Only one person can work on a file at a time, and you need a connection to the server to do most operations.

**Distributed** systems (like Git) give every developer a complete copy of the repository, including its full history, on their local machine. You can commit, branch, and review history entirely offline. Changes are synchronized between copies when needed.

Today, distributed version control — and Git specifically — is the standard. Git is used by virtually every open source project in the world.

## Key Concepts

**Repository (repo):** The folder containing your project files and the complete history of all changes ever made. There's a hidden `.git` folder at the root that stores all of this.

**Commit:** A saved snapshot of your project at a point in time. Each commit has a unique ID (a hash like `a3f9d21`), an author, a timestamp, and a message.

**Branch:** A parallel line of development. The default branch is usually called `main`. You create a new branch to work on a feature or fix without affecting `main`, then merge it back when it's ready.

**Merge:** Combining changes from one branch into another. Git is usually good at this automatically, but when two people edit the same lines, a **merge conflict** occurs and you have to resolve it manually.

**Remote:** A copy of the repository hosted on a server (like GitHub). You push changes to the remote to share them and pull changes others have made.

## A Simple Example

Here's what a basic version control workflow looks like, using Git:

```bash
# Start tracking a project
git init

# Stage changes you want to save
git add analysis.py

# Save a snapshot with a message
git commit -m "Add initial data analysis script"

# Make more changes, then commit again
git add analysis.py
git commit -m "Fix off-by-one error in row counter"

# See the history
git log --oneline
# a3f9d21 Fix off-by-one error in row counter
# 7b2c014 Add initial data analysis script
```

Every commit is a restore point. If the second commit broke something, you can go back to the first with `git checkout 7b2c014`.

## Version Control vs. File Backups

Backups save copies of files. Version control does more:

| | File backup | Version control |
|---|---|---|
| Stores history | Maybe | Yes — every commit |
| Describes what changed | No | Yes — commit messages |
| Tracks who changed what | No | Yes — per commit |
| Supports branching | No | Yes |
| Enables collaboration | No | Yes — merging |

## Next Steps

- **[Git](/tools/git)** — the practical guide to using Git: installation, commands, branching, merging, and a typical workflow
- **[GitHub](/tools/github)** — how to host repositories and collaborate using GitHub
- **[Your First Contribution](/getting-started/your-first-contribution)** — a step-by-step walkthrough of the fork-branch-commit-PR cycle

## References

- [Git documentation](https://git-scm.com/doc)
- [Pro Git book](https://git-scm.com/book/en/v2) — free, comprehensive, available online
- [Missing Semester: Version Control (Git)](https://missing.csail.mit.edu/2020/version-control/) — MIT lecture on Git concepts
