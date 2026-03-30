---
sidebar_position: 1
---

# Visual Studio Code

Visual Studio Code (VS Code) is a free, open source code editor made by Microsoft. It's one of the most popular editors in the world, used across web development, data science, systems programming, and research. It runs on Windows, macOS, and Linux.

## Installation

Download VS Code from [code.visualstudio.com](https://code.visualstudio.com). The installer is straightforward on all platforms.

On Linux, you can also install it via your package manager:

```sh
# Ubuntu/Debian
sudo apt install code

# Arch
sudo pacman -S code
```

## The Interface

When you first open VS Code, you'll see:

- **Activity Bar** (left side) — icons for Explorer, Search, Source Control, Extensions, and more
- **Side Bar** — the panel that appears when you click an Activity Bar icon
- **Editor** — the main area where you write code
- **Terminal** — built-in terminal at the bottom (open with `` Ctrl+` ``)
- **Status Bar** — the colored bar at the very bottom showing file info, Git branch, errors, and warnings

## Essential Keyboard Shortcuts

Learning a few shortcuts will dramatically speed up your work.

| Action | Windows/Linux | macOS |
| --- | --- | --- |
| Open Command Palette | `Ctrl+Shift+P` | `Cmd+Shift+P` |
| Quick open file | `Ctrl+P` | `Cmd+P` |
| Toggle terminal | `` Ctrl+` `` | `` Ctrl+` `` |
| Save file | `Ctrl+S` | `Cmd+S` |
| Find in file | `Ctrl+F` | `Cmd+F` |
| Find across files | `Ctrl+Shift+F` | `Cmd+Shift+F` |
| Go to definition | `F12` | `F12` |
| Rename symbol | `F2` | `F2` |
| Comment/uncomment line | `Ctrl+/` | `Cmd+/` |
| Duplicate line | `Shift+Alt+Down` | `Shift+Option+Down` |
| Move line up/down | `Alt+Up/Down` | `Option+Up/Down` |
| Open settings | `Ctrl+,` | `Cmd+,` |

:::tip
The **Command Palette** (`Ctrl+Shift+P`) is the most useful shortcut. You can type any command name — open a file, change color theme, run a task, install an extension — without leaving the keyboard.
:::

## The Integrated Terminal

VS Code has a full terminal built in. Open it with `` Ctrl+` `` or via **View → Terminal**.

You can open multiple terminal instances and split them side by side. This is convenient when you need to run a server in one terminal and run commands in another at the same time.

## Extensions

Extensions add support for new languages, themes, linters, and tools. Install them from the Extensions panel (`Ctrl+Shift+X`).

### Recommended Extensions

**General**

- **GitLens** — supercharges Git integration, shows who wrote each line, commit history per line
- **Prettier** — automatic code formatter for JavaScript, TypeScript, HTML, CSS, JSON, and more
- **EditorConfig for VS Code** — respects `.editorconfig` files for consistent formatting across teams

**Python**

- **Python** (by Microsoft) — essential for Python development; enables IntelliSense, linting, debugging, and Jupyter notebooks
- **Pylance** — faster, more powerful Python language server
- **Ruff** — extremely fast Python linter

**Web Development**

- **ESLint** — JavaScript/TypeScript linter
- **Live Server** — launch a local development server with live reload for HTML files

**Other Languages**

- **Rust Analyzer** — Rust language support
- **Go** — Go language support
- **C/C++** — C and C++ support

**Themes**

- **One Dark Pro**, **Dracula**, **Catppuccin**, **Tokyo Night** — popular dark themes

## Settings

VS Code settings are stored as JSON. Open them via `Ctrl+,` for the GUI or `Ctrl+Shift+P` → "Open User Settings (JSON)" for direct editing.

Useful settings to know:

```json
{
  "editor.fontSize": 14,
  "editor.tabSize": 4,
  "editor.formatOnSave": true,
  "editor.wordWrap": "on",
  "files.autoSave": "afterDelay",
  "terminal.integrated.defaultProfile.linux": "bash"
}
```

### Workspace Settings

You can save settings per-project in a `.vscode/settings.json` file at the root of your repository. This is useful for enforcing formatting rules across your team. Commit this file to Git so everyone shares the same settings.

## Git Integration

VS Code has built-in Git support in the **Source Control** panel (`Ctrl+Shift+G`). You can:

- See which files have changed
- Stage and unstage changes
- Write commit messages and commit
- Push and pull
- View diffs inline in the editor

For more powerful Git features, install the **GitLens** extension.

## Debugging

VS Code has a built-in debugger that works with Python, JavaScript, and many other languages.

1. Open the **Run and Debug** panel (`Ctrl+Shift+D`)
2. Click **create a launch.json file** to configure the debugger for your project
3. Set breakpoints by clicking to the left of a line number
4. Press `F5` to start debugging

When paused at a breakpoint, you can inspect variables, step through code line by line, and evaluate expressions in the Debug Console.

## Snippets

Snippets are shortcuts that expand into code templates. Type a prefix and press `Tab` to insert the snippet. For example, in Python files, typing `def` and pressing `Tab` inserts a function skeleton.

You can define your own snippets via **File → Preferences → Configure User Snippets**.

## Multi-cursor Editing

VS Code supports editing multiple locations simultaneously:

- `Alt+Click` — place additional cursors
- `Ctrl+D` — select next occurrence of the current word
- `Ctrl+Shift+L` — select all occurrences of the current word

## Remote Development

The **Remote - SSH** extension lets you open a folder on a remote server (like a university HPC cluster) and edit files as if they were local. You get full IntelliSense, debugging, and terminal access on the remote machine.

## References

- [VS Code documentation](https://code.visualstudio.com/docs)
- [VS Code keyboard shortcuts (Windows)](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf)
- [VS Code keyboard shortcuts (macOS)](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf)
- [VS Code keyboard shortcuts (Linux)](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-linux.pdf)
