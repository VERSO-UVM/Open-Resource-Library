---
sidebar_position: 2
---

# Setting Up Your Environment

This guide walks you through installing everything you need to start developing. By the end you'll have:

- A code editor (VS Code)
- Git (version control)
- Python (via pyenv)
- SSH keys linked to GitHub

Work through each section in order. The whole setup takes about 30–60 minutes.

---

## 1. Install VS Code

Visual Studio Code is a free code editor that works on all platforms. It has built-in Git support, a terminal, and a large extension library.

**Download:** [code.visualstudio.com](https://code.visualstudio.com)

After installing, open VS Code. You can leave it open throughout this guide — you'll use the built-in terminal for the steps below.

To open the terminal in VS Code: **View → Terminal** (or `` Ctrl+` `` on Windows/Linux, `` Cmd+` `` on macOS).

:::tip
After setup is complete, check out the [VS Code guide](/tools/vscode) to learn keyboard shortcuts, recommended extensions, and how to use the built-in debugger.
:::

---

## 2. Install Git

Git is the version control system used by almost every software project. You'll use it to track changes to your code and collaborate with others.

### macOS

Open Terminal (search "Terminal" in Spotlight) and run:

```bash
brew install git
```

If you don't have Homebrew installed, first run:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Alternatively, just running `git` in Terminal will prompt macOS to install the Xcode Command Line Tools, which includes Git.

### Windows

Download the installer from [gitforwindows.org](https://gitforwindows.org) and run it. The default options are fine. This also installs **Git Bash**, a terminal you can use for all the commands in this library.

### Linux (Debian/Ubuntu)

```bash
sudo apt update && sudo apt install git
```

### Verify the installation

```bash
git --version
```

You should see output like `git version 2.x.x`.

### Configure Git with your name and email

Git attaches your name and email to every commit you make. Run these two commands, replacing the values with your own:

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

Use the same email address you'll use for your GitHub account.

---

## 3. Create a GitHub Account

If you don't already have one, create a free account at [github.com](https://github.com).

Use the same email address you set in the Git config step above.

---

## 4. Set Up SSH Authentication for GitHub

SSH keys let you push code to GitHub without typing your password every time. This is the standard way to authenticate with GitHub.

### Check for existing keys

```bash
ls ~/.ssh
```

If you see files named `id_ed25519` and `id_ed25519.pub` (or `id_rsa` and `id_rsa.pub`), you already have a key pair and can skip to "Add your key to GitHub."

### Generate a new SSH key

```bash
ssh-keygen -t ed25519 -C "you@example.com"
```

Replace `you@example.com` with your email. When prompted:

- Press **Enter** to save the key in the default location (`~/.ssh/id_ed25519`)
- Enter a passphrase (recommended) or press **Enter** to skip

### Add the key to the SSH agent

```bash
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519
```

On macOS, add `--apple-use-keychain` to automatically store the passphrase:

```bash
ssh-add --apple-use-keychain ~/.ssh/id_ed25519
```

### Copy your public key

```bash
cat ~/.ssh/id_ed25519.pub
```

Select and copy the entire output (it starts with `ssh-ed25519`).

### Add your key to GitHub

1. Go to **github.com → Settings → SSH and GPG keys**
2. Click **New SSH key**
3. Give it a title (e.g., "My Laptop")
4. Paste your public key into the "Key" field
5. Click **Add SSH key**

### Test the connection

```bash
ssh -T git@github.com
```

You should see: `Hi username! You've successfully authenticated...`

---

## 5. Install Python (via pyenv)

[pyenv](https://github.com/pyenv/pyenv) lets you install and switch between multiple Python versions. This is the recommended way to manage Python for research and development work.

### macOS / Linux

Install pyenv:

```bash
curl https://pyenv.run | bash
```

After it finishes, follow the instructions it prints to add pyenv to your shell config (it will tell you exactly what to add and to which file, e.g. `~/.zshrc` or `~/.bashrc`). Then restart your terminal or run:

```bash
exec "$SHELL"
```

### Windows

On Windows, use [pyenv-win](https://github.com/pyenv-win/pyenv-win). In PowerShell (as Administrator):

```powershell
Invoke-WebRequest -UseBasicParsing -Uri "https://raw.githubusercontent.com/pyenv-win/pyenv-win/master/pyenv-win/install-pyenv-win.ps1" -OutFile "./install-pyenv-win.ps1"; &"./install-pyenv-win.ps1"
```

### Install a Python version

```bash
pyenv install 3.12
pyenv global 3.12
```

### Verify

```bash
python --version
```

You should see `Python 3.12.x`.

:::tip
See the [pyenv guide](/tools/pyenv) for more detail on managing multiple Python versions and virtual environments.
:::

---

## You're Done

You now have everything set up. Here's what to explore next:

- **[Markdown Basics](./markdown-basics)** — Learn the formatting language used in this library and on GitHub (15 min)
- **[Command Line](/concepts/command_line)** — Get comfortable with the terminal
- **[Git guide](/tools/git)** — Learn the Git workflow in depth
- **[Python guide](/tools/python)** — Start writing Python
