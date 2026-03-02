# Package Management

A **package manager** is a tool that automates the process of installing, upgrading, configuring, and removing software packages. Rather than manually downloading files and resolving dependencies, a package manager handles all of that for you.

In software development, you'll use package managers constantly — for programming language libraries, system tools, and project dependencies.

## Why Package Managers?

Without a package manager, installing a library means:

1. Find the library's website
2. Download the right version for your OS
3. Install it manually
4. Realize it depends on three other libraries
5. Repeat for each dependency

A package manager does all of this in one command.

## Types of Package Managers

### System Package Managers

Install system-level software on your operating system.

| Manager | Platform |
| --- | --- |
| `apt` / `apt-get` | Debian, Ubuntu |
| `dnf` / `yum` | Fedora, Red Hat |
| `pacman` | Arch Linux |
| `brew` | macOS (Homebrew) |
| `winget` | Windows |
| `choco` | Windows (Chocolatey) |

### Language-Specific Package Managers

Install libraries for a specific programming language.

| Manager | Language |
| --- | --- |
| `pip` | Python |
| `npm` | JavaScript/Node.js |
| `yarn` | JavaScript/Node.js |
| `cargo` | Rust |
| `gem` | Ruby |
| `maven` / `gradle` | Java |
| `go get` | Go |
| `bun` | JavaScript/TypeScript |

## pip (Python)

pip is the standard package manager for Python. It installs packages from [PyPI (Python Package Index)](https://pypi.org).

```sh
# Install a package
pip install requests

# Install a specific version
pip install requests==2.31.0

# Install multiple packages
pip install numpy pandas matplotlib

# Upgrade a package
pip install --upgrade requests

# Uninstall a package
pip uninstall requests

# List installed packages
pip list

# Show details about a package
pip show requests

# Search for packages
pip search keyword  # Note: often disabled; use pypi.org instead
```

### requirements.txt

A `requirements.txt` file lists a project's dependencies so others can recreate the environment:

```text
requests==2.31.0
numpy>=1.24.0
pandas
pytest==7.4.0
```

Generate it from your current environment:

```sh
pip freeze > requirements.txt
```

Install from it:

```sh
pip install -r requirements.txt
```

:::tip
Using exact version pins (`==`) makes your environment reproducible. Using `>=` allows upgrades but may introduce breaking changes. Pick a strategy based on your project's needs.
:::

### Virtual Environments

Always use a virtual environment so project dependencies don't conflict. See the [Python tools page](/tools/python) for details.

```sh
python -m venv venv
source venv/bin/activate   # macOS/Linux
venv\Scripts\activate      # Windows
```

## npm (JavaScript / Node.js)

npm (Node Package Manager) manages JavaScript libraries and is included with [Node.js](https://nodejs.org).

```sh
# Initialize a new project (creates package.json)
npm init

# Install a package and save to dependencies
npm install express

# Install a package as a dev-only dependency
npm install --save-dev jest

# Install all dependencies listed in package.json
npm install

# Run a script defined in package.json
npm run test
npm run build
npm start

# Update packages
npm update

# Uninstall a package
npm uninstall express
```

### package.json

`package.json` is the configuration file for a Node.js project. It lists dependencies, scripts, and metadata:

```json
{
  "name": "my-project",
  "version": "1.0.0",
  "scripts": {
    "start": "node index.js",
    "test": "jest",
    "build": "webpack"
  },
  "dependencies": {
    "express": "^4.18.2"
  },
  "devDependencies": {
    "jest": "^29.0.0"
  }
}
```

### package-lock.json

npm generates a `package-lock.json` that records the exact version of every installed package. **Commit this file to Git** — it ensures that `npm install` produces the exact same result on every machine.

## Homebrew (macOS)

Homebrew installs command-line tools and applications on macOS:

```sh
# Install Homebrew
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Install a package
brew install git

# Install a GUI application
brew install --cask visual-studio-code

# Update Homebrew and all packages
brew update && brew upgrade

# Search for a package
brew search python

# List installed packages
brew list
```

## Semantic Versioning

Most packages use **Semantic Versioning** (semver): `MAJOR.MINOR.PATCH`

- `MAJOR` — breaking changes
- `MINOR` — new features, backwards-compatible
- `PATCH` — bug fixes

Version specifiers:

| Specifier | Meaning |
| --- | --- |
| `==1.2.3` | Exactly version 1.2.3 |
| `>=1.2.0` | Version 1.2.0 or higher |
| `~=1.2.0` | Compatible with 1.2.x (patch updates ok) |
| `^1.2.0` | Compatible with 1.x.x (minor updates ok, used in npm) |
| `*` | Any version |

## Dependency Files to Commit

Always commit dependency files to your repository:

| File | Manager | Commit? |
| --- | --- | --- |
| `requirements.txt` | pip | Yes |
| `package.json` | npm | Yes |
| `package-lock.json` | npm | Yes |
| `yarn.lock` | yarn | Yes |
| `Cargo.toml` | cargo | Yes |
| `go.mod` | go | Yes |

Never commit the installed packages themselves (`node_modules/`, `venv/`). Add those directories to `.gitignore`.

## References

- [PyPI — Python Package Index](https://pypi.org)
- [npm documentation](https://docs.npmjs.com)
- [Homebrew documentation](https://docs.brew.sh)
- [Semantic Versioning specification](https://semver.org)
