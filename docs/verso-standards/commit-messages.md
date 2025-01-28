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

## Structured Commit Messages

As mentioned above, select projects may have a stricter format for commit messages on the `main`/default branch. This makes it possible to run automations based on commit activity; ie, generating changelogs or cutting releases. This is based on Conventional Commits.

### Basic Format

```
<type>: <subject>

<optional body>

<optional footer>
```

**type** is required can be any one of:

- `fix`: Fixes a bug
- `feat`: New feature or functionality
- `docs`: Improves or alters documentation
- `chore`: Formatting stuff, non-breaking-change updates

Types are _always_ lowercase.

Additionally, if a `feat`/`fix` contains a [breaking change](#breaking-change) it can be suffixed with a bang (`!`) like this: `feat!: <subject>`

`<subject>` is the short description that is [described above](#good-messages). It is always required.

`<optional body>` is a section defined by a separation of _two newlines_ and can be used if more context may be necessary. Typically, it is present in the automated commits created by things like pull request merge commits. You don't usually need to write this yourself.

`<optional footer>` can be used to note things like related issues, who reviewed something, etc. This is not something a dev needs to think about on a day-to-day basis. [More info](#footers)

Any given line must not be longer than 80-100 characters! Use linebreaks/newlines when necessary; with the exception that if your subject needs a linebreak, it's probably too long.

### More Format Options

#### Scopes

Scopes are sometimes helpful to note that that a given commit only affects a certain part of the project. A good example is if you have a mobile app, web app, and backend API in the same repository; you can use scopes like `web`, `mobile`, and `api`/`backend`.

```
fix(web): ensure breakpoints are used properly

feat(api): new endpoint to find get users' friends
fix(backend)!: fix bug that clients were depending on

docs(mobile): add comments to clarify business logic
```

#### Footers

Footers can be used to add certain details:

```
Reviewed by: Charlie Catamount <ccatamou@uvm.edu>
Closes: #1791, #1928
```

See full in-context example below.

### Full Example

```
feat(api): new endpoint to find get users' friends

This endpoint will be used by the new Friends feature in the mobile app.

Reviewed by: Charlie Catamount <ccatamou@uvm.edu>
Closes: #1791, #1928
```

### Differences from Conventional Commits

This standard is based on the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) standard but departs from it in few key ways in order to simplify things.

- **Types:** This standard limits the number of types and expandes the scope of what they can be used for.
- **BREAKING CHANGE**: We do not use `BREAKING CHANGE`

## Terms

#### Breaking Change

> A breaking change is any change which modifies the public interface to a module in such a way that causes any consuming modules to fail either at compile-time or run-time. In other words, any change which requires consuming code to change in order to maintain the same behavior.
