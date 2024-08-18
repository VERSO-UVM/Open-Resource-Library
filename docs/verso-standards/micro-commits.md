# Micro Commits

Micro-committing is the practice of frequently committing small changes while working within an Git repo.

## How?

A micro-commit is a commit which only contains changes that are related to each other **including** a short + descriptive commit message.

This may seem like a lot of work but once you get in this habit, it makes a ton of sense and actually helps you be more productive.

### Workflow

To illustrate the process of micro-committing, here's a hypothetical situation where we are adding a new UI element to an HTML/CSS-based web app.

1. **Write the inital working feature:**
   At this point, commit the HTML and CSS _for your feature as it stands._ This gives you a point to compare future changes against if you run into errors. This commit should not include anything else.
2. **Find and fix bugs:** Commit each bugfix individually; ideally splitting up by different parts of files if necessary/possible. Lots of IDEs will allow you to do this visually. At this point, you can now track how each fix has changed the codebase.
3. **Make the code pretty:** Formatting, refactoring, etc. Things that make your code easier to read and fix at a later date. Commit after this is done, fixing any errors that cropped up beforehand.
4. Push to remote! (If you haven't already)

A good detailed guide: [A Practical Guide to Micro Commits | Niko Heikkila](https://world.hey.com/niko.heikkila/a-practical-guide-to-micro-commits-a37151eb)

## Why?

Many developers tend to make large, infrequent commits full of unrelated changes. This can make it hard to track how a project has evolved or how different parts of a codebase have changed. Some benefits include:

- **Reducing risk of losing work:** Frequently committing and pushing means that your work gets incrementally saved.
- **Debugging via commits:** As you fix bugs or develop new features, small commits allow you to figure out (and revert) exactly what changes might be causing errors.
- **Merge conflict resolution:** Resolving merge conflicts can be made easier via micro-committing, since the git merge algorithm has more information to work with.

## More information

There is an [excellent blogpost by Tim Ottinger on the Industrial Logic blog.](https://www.industriallogic.com/blog/whats-this-about-micro-commits/)
