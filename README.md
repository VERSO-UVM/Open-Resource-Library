# Open Resource Library

[![DOI](https://zenodo.org/badge/715627164.svg)](https://zenodo.org/doi/10.5281/zenodo.11508637)

An open source toolkit for students and researchers getting started with open source software development.

Maintained by [VERSO (Vermont Research Open Source Program)](https://verso.w3.uvm.edu) at the University of Vermont.

**Live site:** [verso-uvm.github.io/Open-Resource-Library](https://verso-uvm.github.io/Open-Resource-Library)

---

## What's Inside

The library is organized into three sections:

- **Concepts** — foundational ideas: version control, testing, debugging, APIs, CI/CD, licensing, ethics, and more
- **Tools** — practical guides: Git, GitHub, VS Code, Python, Docker, pyenv, SSH, and more
- **VERSO Standards** — project conventions for commit messages, micro-commits, and AI use

---

## Contributing

Contributions are welcome — from fixing typos to adding entirely new pages. All skill levels are welcome.

### Getting Started

1. **Fork** the repository on GitHub
2. **Clone** your fork locally
3. **Create a branch** for your changes: `git checkout -b your-branch-name`
4. Make your changes (see [Editing Content](#editing-content) below)
5. **Commit** with a descriptive message
6. **Push** your branch and open a **Pull Request**

### Local Development

You need [Bun](https://bun.sh) installed. Bun is the runtime and package manager used by this project.

**Install Bun:**

```bash
# macOS / Linux
curl -fsSL https://bun.sh/install | bash

# Windows (PowerShell)
powershell -c "irm bun.sh/install.ps1 | iex"
```

**Install dependencies:**

```bash
bun i
```

**Start the development server:**

```bash
bun start
```

This opens a browser window at [localhost:3000](http://localhost:3000) and updates live as you edit files. Add `--no-open` to prevent the browser from opening automatically.

**Build the site:**

```bash
bun run build
```

**Preview the built site:**

```bash
bun serve
```

This also opens [localhost:3000](http://localhost:3000) so you can preview what the site will look like in production.

---

## Editing Content

All content lives in the `docs/` directory as Markdown files. Each subdirectory is a category in the sidebar.

### Directory Structure

```text
docs/
├── introduction.md          # Landing page
├── concepts/                # Conceptual guides
│   ├── _category_.yml       # Sidebar config for this category
│   ├── apis.md
│   ├── ci_cd.md
│   ├── command_line.md
│   ├── debugging.md
│   ├── documentation.md
│   ├── package_management.md
│   ├── security_basics.md
│   ├── testing.md
│   ├── version_control.md
│   └── ...
├── tools/                   # Tool-specific guides
│   ├── _category_.yml
│   ├── docker.md
│   ├── git.md
│   ├── github.md
│   ├── python.md
│   ├── pyenv.md
│   ├── ssh.md
│   ├── vscode.md
│   └── ...
└── verso-standards/         # VERSO project conventions
    ├── _category_.yml
    ├── commit-messages.md
    └── ...
```

### Adding a New Page

1. Create a `.md` file in the appropriate category directory
2. Start with a `#` heading — this becomes the page title and sidebar label
3. Write content using standard Markdown (see [Markdown Guide](https://www.markdownguide.org))
4. Docusaurus admonitions (`:::tip`, `:::warning`, `:::info`) are available for callout boxes

### Category Configuration

Each category has a `_category_.yml` file that controls its sidebar appearance:

```yaml
position: 2          # Position in the sidebar
label: Concepts      # Display name
collapsed: false     # Whether the category starts collapsed
link:
  type: generated-index
  title: Concepts Overview
```

### Page Metadata

Pages can have front matter at the top to control their sidebar position and title:

```markdown
---
sidebar_position: 1
sidebar_label: Custom Sidebar Label
---

# Page Title
```

### Docusaurus Features

This site uses [Docusaurus 3](https://docusaurus.io). Beyond standard Markdown, you can use:

- **Admonitions** for callout boxes: `:::tip`, `:::note`, `:::warning`, `:::danger`, `:::info`
- **Code blocks** with syntax highlighting: ` ```python `, ` ```sh `, ` ```yaml `, etc.
- **Tables**, **links**, and standard GFM (GitHub Flavored Markdown)

For more features, see the [Docusaurus documentation](https://docusaurus.io/docs).

---

## Style Guide

When writing new pages, aim to match the existing style:

- Write for undergraduate students — clear, direct language, no assumed expertise
- Use second person ("you") to address the reader
- Define terms before using them
- Include practical examples and code snippets
- Add a **References** section at the bottom with links to further reading
- Use `:::tip` for helpful hints, `:::warning` for important cautions

---

## License

See [LICENSE](LICENSE) for the license terms for this project's content.
