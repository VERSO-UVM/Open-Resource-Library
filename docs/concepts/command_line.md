---
sidebar_position: 2
---

# Command Line

The command line (also called the **terminal**, **shell**, or **CLI** — Command Line Interface) is a text-based way to interact with your computer. Instead of clicking icons and menus, you type commands.

It can feel intimidating at first, but learning the basics will make you a much faster and more capable developer. Many tools in software development — Git, package managers, build systems — are primarily used through the command line.

## What Is a Shell?

A shell is the program that reads your commands and runs them. Common shells include:

- **bash** — the default on most Linux systems and older macOS
- **zsh** — the default on modern macOS (since Catalina)
- **fish** — a user-friendly shell with helpful features
- **PowerShell** / **cmd** — Windows shells (though WSL gives you bash on Windows)

On Windows, you can use the **Windows Subsystem for Linux (WSL)** to get a full bash/zsh environment. This is highly recommended for development.

## Opening a Terminal

- **macOS** — Search "Terminal" in Spotlight, or use iTerm2
- **Linux** — Usually `Ctrl+Alt+T`, or find "Terminal" in your apps
- **Windows** — Windows Terminal, Git Bash, or WSL
- **VS Code** — Built-in terminal with `` Ctrl+` ``

## Navigating the File System

Your terminal always has a **working directory** — the folder you're currently "in." Commands operate relative to this location.

```sh
# Print Working Directory — shows where you are
pwd

# List files in the current directory
ls

# List with details (permissions, size, date)
ls -l

# List including hidden files (files starting with .)
ls -a

# Change Directory
cd Documents

# Go up one level (parent directory)
cd ..

# Go to your home directory
cd ~

# Go to the previous directory
cd -
```

### Understanding Paths

- **Absolute path** — starts from the root, always works: `/home/username/Documents/project`
- **Relative path** — relative to where you are now: `Documents/project` or `../other-project`

## Working with Files and Directories

```sh
# Create a new directory
mkdir my-project

# Create nested directories
mkdir -p projects/research/data

# Create an empty file
touch notes.txt

# Copy a file
cp notes.txt notes-backup.txt

# Copy a directory and its contents
cp -r my-project my-project-backup

# Move or rename a file
mv notes.txt renamed-notes.txt

# Move a file to a different directory
mv notes.txt Documents/

# Remove a file
rm old-file.txt

# Remove a directory and everything inside it
rm -rf old-directory/
```

:::warning
`rm -rf` permanently deletes files — there's no Trash or Recycle Bin. Double-check what you're deleting before running it.
:::

## Reading Files

```sh
# Print the entire contents of a file
cat file.txt

# View a file one screen at a time (press q to quit)
less file.txt

# Print the first 10 lines
head file.txt

# Print the last 10 lines
tail file.txt

# Print the last 10 lines and keep watching for new content
tail -f logfile.txt
```

## Searching

```sh
# Search for a pattern in a file
grep "error" logfile.txt

# Search recursively in all files in a directory
grep -r "TODO" ./src/

# Case-insensitive search
grep -i "error" logfile.txt

# Find files by name
find . -name "*.py"

# Find files modified in the last 7 days
find . -mtime -7
```

## Piping and Redirection

One of the most powerful features of the command line is **piping** — connecting the output of one command to the input of another.

```sh
# Pipe: send output of one command to another
# Count the number of Python files in the current directory
ls *.py | wc -l

# Find all TODOs in Python files
grep -r "TODO" . | grep ".py"

# View a long output one screen at a time
git log | less

# Redirect output to a file (overwrites)
ls > file-list.txt

# Append output to a file
echo "new line" >> notes.txt

# Discard output (send to /dev/null)
some-noisy-command > /dev/null
```

## Environment Variables

Environment variables are key-value pairs that configure your shell and the programs running in it.

```sh
# Print a variable
echo $HOME
echo $PATH

# Set a variable for the current session
export MY_VAR="hello"

# Use it
echo $MY_VAR
```

The `$PATH` variable is a colon-separated list of directories where the shell looks for programs. When you type `python`, it searches each directory in `$PATH` in order.

### Making Variables Permanent

Add `export MY_VAR="value"` to your shell's config file:

- bash: `~/.bashrc` or `~/.bash_profile`
- zsh: `~/.zshrc`

Then run `source ~/.bashrc` (or restart your terminal) to apply changes.

## Useful Shortcuts

| Shortcut | Action |
| --- | --- |
| `Tab` | Autocomplete file/command name |
| `Tab Tab` | Show all completions |
| `↑` / `↓` | Scroll through command history |
| `Ctrl+C` | Stop the running command |
| `Ctrl+D` | Exit the current shell |
| `Ctrl+L` | Clear the screen |
| `Ctrl+A` | Jump to start of line |
| `Ctrl+E` | Jump to end of line |
| `Ctrl+R` | Search command history |

:::tip
`Tab` autocomplete is one of the most useful features. Start typing a filename or command and press `Tab` — the shell will complete it or show options. Use it constantly.
:::

## Running Scripts

```sh
# Run a Python script
python script.py

# Run a shell script
bash myscript.sh

# Make a script executable and run it directly
chmod +x myscript.sh
./myscript.sh
```

## Getting Help

```sh
# Manual page for a command (press q to exit)
man ls

# Brief help flag (works for most commands)
ls --help
git --help
python --help
```

## Command History

```sh
# View your command history
history

# Re-run a specific command by number
!42

# Re-run the last command
!!
```

## Working with Processes

```sh
# List running processes
ps aux

# Search for a process by name
ps aux | grep python

# Kill a process by ID
kill 12345

# Kill a process by name
pkill python

# Run a command in the background
python long-script.py &

# List background jobs
jobs
```

## References

- [The Linux Command Line (free book)](https://linuxcommand.org/tlcl.php)
- [explainshell.com](https://explainshell.com) — paste any shell command and get an explanation
- [tldr pages](https://tldr.sh) — simplified man pages with practical examples
- [Bash scripting cheatsheet](https://devhints.io/bash)
