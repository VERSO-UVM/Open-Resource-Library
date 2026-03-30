---
sidebar_position: 3
---

# Markdown Basics

Markdown is a lightweight formatting language that turns plain text into formatted documents. You'll use it constantly in open source work: README files, GitHub issues, pull request descriptions, comments, and documentation (including this library) are all written in Markdown.

The key idea: you write plain text with simple punctuation, and it gets rendered as formatted HTML.

---

## Headings

Add `#` symbols before a line to make headings. More `#` symbols = smaller heading.

```markdown
# Heading 1
## Heading 2
### Heading 3
#### Heading 4
```

---

## Emphasis

```markdown
*italic* or _italic_
**bold** or __bold__
~~strikethrough~~
```

Renders as: *italic*, **bold**, ~~strikethrough~~

---

## Lists

**Unordered list** (use `-`, `*`, or `+`):

```markdown
- Apples
- Oranges
- Bananas
```

**Ordered list:**

```markdown
1. First step
2. Second step
3. Third step
```

**Nested list** (indent with 2 or 4 spaces):

```markdown
- Fruits
  - Apples
  - Oranges
- Vegetables
  - Carrots
```

---

## Links

```markdown
[link text](https://example.com)
```

For links within the same site, use a relative path:

```markdown
[Git guide](/tools/git)
```

---

## Images

Same as links but with a `!` in front:

```markdown
![alt text](path/to/image.png)
```

The alt text describes the image for screen readers and appears if the image fails to load.

---

## Code

**Inline code** uses backticks:

```markdown
Use the `git commit` command.
```

**Code blocks** use triple backticks, with an optional language name for syntax highlighting:

````markdown
```python
def greet(name):
    return f"Hello, {name}!"
```
````

Common language identifiers: `python`, `bash`, `javascript`, `html`, `css`, `yaml`, `json`, `markdown`.

---

## Blockquotes

```markdown
> This is a blockquote.
> It can span multiple lines.
```

---

## Tables

```markdown
| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
| Row 1    | Data     | Data     |
| Row 2    | Data     | Data     |
```

The dashes in the second row separate the header from the body. Column widths don't need to match.

---

## Horizontal Rule

Three or more dashes on their own line:

```markdown
---
```

---

## Task Lists (GitHub Flavored Markdown)

GitHub extends Markdown with checkboxes. These work in issues and pull request descriptions:

```markdown
- [x] Completed task
- [ ] Incomplete task
- [ ] Another task
```

---

## Escaping Characters

If you want to display a character that Markdown would otherwise interpret (like `*` or `#`), put a backslash before it:

```markdown
\*This is not italic\*
```

---

## Where Markdown Is Used

| Context | Where you'll write Markdown |
|---|---|
| `README.md` | The front page of any GitHub repository |
| Issues | Bug reports and feature requests on GitHub |
| Pull requests | Descriptions and comments on code changes |
| Wikis | Documentation pages on GitHub |
| This library | Every page you're reading right now |
| Jupyter notebooks | Text cells alongside code |
| Slack / Discord | Basic formatting in many chat platforms |

---

## Quick Reference

| Format | Syntax |
|---|---|
| Heading 1 | `# Text` |
| Heading 2 | `## Text` |
| Bold | `**text**` |
| Italic | `*text*` |
| Strikethrough | `~~text~~` |
| Inline code | `` `code` `` |
| Code block | ` ```language ` |
| Link | `[text](url)` |
| Image | `![alt](url)` |
| Unordered list | `- item` |
| Ordered list | `1. item` |
| Blockquote | `> text` |
| Horizontal rule | `---` |
| Table | `\| col \| col \|` |

---

## References

- [Markdown Guide](https://www.markdownguide.org) — comprehensive reference with examples
- [GitHub Flavored Markdown Spec](https://github.github.com/gfm/) — GitHub's extensions to standard Markdown
- [CommonMark Spec](https://commonmark.org) — the standardized Markdown specification
