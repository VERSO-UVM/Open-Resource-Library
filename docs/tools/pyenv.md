---
sidebar_position: 5
---

# Pyenv

Pyenv is a tool that lets you install and switch between multiple versions of Python on the same machine. This is essential when working on different projects that require different Python versions, or when a project specifies a particular version.

## Why Pyenv?

Python releases new versions regularly, and not all projects keep up. You might work on:

- A research script that requires Python 3.9
- A web app that requires Python 3.12
- A legacy tool that only works on Python 3.7

Without pyenv, managing this would mean constantly uninstalling and reinstalling Python. Pyenv solves this cleanly.

## Installation

### macOS and Linux

The recommended installation method is [pyenv-installer](https://github.com/pyenv/pyenv-installer):

```sh
curl https://pyenv.run | bash
```

After installation, add pyenv to your shell's startup file. For **bash** (`.bashrc` or `.bash_profile`):

```sh
export PYENV_ROOT="$HOME/.pyenv"
[[ -d $PYENV_ROOT/bin ]] && export PATH="$PYENV_ROOT/bin:$PATH"
eval "$(pyenv init -)"
```

For **zsh** (`.zshrc`):

```sh
export PYENV_ROOT="$HOME/.pyenv"
[[ -d $PYENV_ROOT/bin ]] && export PATH="$PYENV_ROOT/bin:$PATH"
eval "$(pyenv init -)"
```

Restart your terminal or run `source ~/.bashrc` (or `~/.zshrc`) to apply the changes.

### Windows

On Windows, use [pyenv-win](https://github.com/pyenv-win/pyenv-win):

```powershell
Invoke-WebRequest -UseBasicParsing -Uri "https://raw.githubusercontent.com/pyenv-win/pyenv-win/master/pyenv-win/install-pyenv-win.ps1" -OutFile "./install-pyenv-win.ps1"; &"./install-pyenv-win.ps1"
```

Or install via pip:

```sh
pip install pyenv-win --target "$HOME\\.pyenv"
```

## Basic Usage

### Installing a Python Version

First, see what versions are available:

```sh
pyenv install --list
```

This outputs a long list. To filter for stable Python 3 releases:

```sh
pyenv install --list | grep "  3\."
```

Install a specific version:

```sh
pyenv install 3.12.3
```

:::tip
Install the latest stable version unless a project specifies otherwise. You can always add more versions later.
:::

### Listing Installed Versions

```sh
pyenv versions
```

Output example:

```text
  system
* 3.11.8 (set by /home/user/.pyenv/version)
  3.12.3
```

The `*` marks the currently active version. `system` refers to whatever Python was installed outside of pyenv.

### Setting the Python Version

**Globally** (default for your entire system):

```sh
pyenv global 3.12.3
```

**Locally** (for a specific project directory — creates a `.python-version` file):

```sh
cd my-project/
pyenv local 3.11.8
```

When you `cd` into that directory, pyenv will automatically switch to the specified version.

**Shell** (temporary, only for the current terminal session):

```sh
pyenv shell 3.9.18
```

### Verifying the Active Version

```sh
python --version
pyenv version
```

## Working with Virtual Environments

Pyenv pairs well with Python's built-in `venv` module. A virtual environment isolates a project's dependencies from other projects.

```sh
# Create a virtual environment named "venv" in the current directory
python -m venv venv

# Activate it (macOS/Linux)
source venv/bin/activate

# Activate it (Windows)
venv\Scripts\activate

# Install dependencies into the virtual environment
pip install requests pandas

# Deactivate when done
deactivate
```

:::tip
Add `venv/` to your `.gitignore` file — you should never commit a virtual environment to Git. Share dependencies instead via a `requirements.txt` file.
:::

### Generating a requirements.txt

```sh
pip freeze > requirements.txt
```

Others can then recreate your environment with:

```sh
pip install -r requirements.txt
```

## pyenv-virtualenv Plugin

The `pyenv-virtualenv` plugin integrates virtual environments directly with pyenv, so switching project directories can also activate the right virtual environment automatically.

Install alongside pyenv:

```sh
# Included if you used pyenv-installer above
# Otherwise:
git clone https://github.com/pyenv/pyenv-virtualenv.git $(pyenv root)/plugins/pyenv-virtualenv
```

Add to your shell config:

```sh
eval "$(pyenv virtualenv-init -)"
```

Usage:

```sh
# Create a virtualenv named "myproject-env" using Python 3.12
pyenv virtualenv 3.12.3 myproject-env

# Activate it
pyenv activate myproject-env

# Assign it automatically to a directory
cd my-project/
pyenv local myproject-env

# Deactivate
pyenv deactivate
```

## Common Commands Reference

| Command | Description |
| --- | --- |
| `pyenv install --list` | List all installable versions |
| `pyenv install 3.x.y` | Install a specific version |
| `pyenv versions` | List installed versions |
| `pyenv global 3.x.y` | Set system-wide default |
| `pyenv local 3.x.y` | Set version for current directory |
| `pyenv shell 3.x.y` | Set version for current shell session |
| `pyenv version` | Show currently active version |
| `pyenv uninstall 3.x.y` | Remove a version |
| `pyenv update` | Update pyenv and all plugins |

## References

- [pyenv GitHub repository](https://github.com/pyenv/pyenv)
- [pyenv-win (Windows)](https://github.com/pyenv-win/pyenv-win)
- [Real Python: Managing Python Versions with pyenv](https://realpython.com/intro-to-pyenv/)
