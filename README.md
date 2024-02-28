# Open Resource Library

Learn, explore, and create open source practices.

## Contributing

**TODO**

### Local development

To work on the Open Resource Library (ORL) locally, you must have a JavaScript runtime and package manager installed in your system.
The production version of the ORL uses [Bun](https://bun.sh) to fill both these roles, but a more standard installation of
[Node.js and NPM](https://nodejs.org), [Yarn](https://yarnpkg.com), or [PNPM](https://pnpm.io) will work too.
For simplicity purposes, we will use `bun` as the package manager of choice here.

Once Bun (or an alternative) is installed, install dependencies with:

```bash
bun i
```

Once this is done, you can now start the development server with:

```bash
bun start
```

This will open a browser window to [localhost:3000](http://localhost:3000), which will be updated live with any changes you make to the library.
(Note: you may append `--no-open` to this command to prevent the opening of a new browser window)

To test the generated static site locally on your machine, run:

```bash
bun run build
```

This will generate a static site to the `build` directory locally, which you can preview in your browser with:

```bash
bun serve
```

This also open a browser window to [localhost:3000](http://localhost:3000) which will allow you to preview what the site will look like in production.
(As with the dev server, `--no-open` may be provided to prevent the opening of a new browser window)

### Editing content

The actual content of the library is stored as markdown files within the `docs` directory.
Each subdirectory of `docs` acts as a category, which then gets auto-generated into groups in the sidebar.

For categories, the `_category_.yml` file may be used to modify a number of metadata options.
Namely, the category's position within the sidebar with the `position` key, label with the `label` key, whether it starts collapsed with the `collapsed` key, and more.

Each page also has metadata you can modify using the markdown file's [front matter](https://jekyllrb.com/docs/front-matter/).
By default, the page title in the browser and sidebar will be taken from the first `h1` or `#` header on the page,
these values can be modified with the `title` and `sidebar_label` keys respectively.
A page's position on the sidebar can also be modified with the `sidebar_position` key, similar to how category positioning works.

That covers the basics of editing the ORL, but Docusaurus is an extensive tool with many so-far unused features.
If you would like to learn more about Docusaurus and it's features, you can do so at the [Docusaurus docs](https://docusaurus.io/docs).

