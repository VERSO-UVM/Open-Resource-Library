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
- `--ammend` - Redo the last commit, amending the commit message or the committed files

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

When cloning a repository, Git will automatically set the cloned server as a remote

## References

[//]: # (This documentation serves as an introduction to Git, providing the fundamental knowledge and commands essential for version control and collaborative software development.)
[//]: # (Explore further to enhance your understanding and proficiency with Git.)

- [Official Git documentation](https://git-scm.com/doc)
- [GitHub Git guide](https://github.com/git-guides)
- [ArchWiki Git page](https://wiki.archlinux.org/title/Git)
