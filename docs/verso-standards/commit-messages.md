# Commit Messages

Commit Messages must be short yet descriptive. Combined with Micro-Commits, this ensures that changes can be precisely tracked.

_This standard is based on the **[Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)** standard._

:::warning
This policy may be selectively required depending on the size and activity of a project. Regardless, descriptive commit messages are **always necessary.**
:::

## Basic Descriptive Messages

At the very least, all commits made on VERSO repos must meet a minimum standard as describing in the following sub-sections.

### Bad Message Examples

Here is "what not to do" when writing commit messages:

- `Update <filename>` (ie `Update README.md`): This provides no information as to what exactly was updated or why. _This is a default message when using the Github web UI. Make sure to change it!_
- `Add files via upload`: This is another Github Web UI special; it provides no information as to what was uploaded or why. _This is a default message when using the Github web UI. Make sure to change it!_
- `Changes`/`updates`/`stuff` _or any variation_: This provides no information as to what was changed and makes it especially difficult to track history.

### Good Messages

- `Updated README with DOI`: This tells you what file was changed and what was added; since READMEs are not code, it typically doesn't need a why. It is also short and to the point.
- `Created new API endpoint in <file> to support <feature>`; Tells us what (created api endpoint), where (in \<file\>), and why (support a new \<feature\>)
- `Added new data files for <thing>`: An example of what to do if you're just uploading data that should be tracked in Git; ie geojson, certain csv formatted data. Also tells us what the data files are for.
