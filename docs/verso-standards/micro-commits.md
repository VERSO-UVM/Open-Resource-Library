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

This is [copied from Qoura](https://www.quora.com/What-is-the-meaning-of-Micro-Commit-in-Git-Is-it-for-the-small-changes-If-it-is-then-how-can-we-perform-Micro-Commit-for-small-changes/answer/Steven-J-Owens?ch=10&share=eee75e4d&srid=ifcN)

> A2A. I hadn’t heard the term before this question but a quick google suggests that “microcommits” appears to be either a new term for “good practices for revision control commits”, or possibly taking those regular good practices and turning the dial up to 11.

> In general most developers who start to use revision control (or Source Code Management, SCM, as Linus Torvalds, the creator of git, prefers) go through a process of learning to commit more often. This is a little trickier than it might sound, especially for a beginner, because another standard practice with SCM is to never commit broken code (i.e. always commit code that compiles cleanly with no errors and passes all the automated tests).

> To resolve the tension between these two practices, most beginners need to learn to modify their actual day to day development process. They need to learn more discipline in tightly scoping their changes, biting off smaller chunks at a time, getting those chunks all the way to building and passing tests and then committing them before touching a different part of the code.

> This learning process can be painful but in the long run makes a developer much more effective. The more I learn about software development, the more I feel that scope control is fundamental to the process.

> Having said the above, I’ve always been a bit disappointed in Git, because it doesn’t help with the intermediate stages in the process, i.e. the stages in between the points where you have clean-compiling, test-passing code.

> I would find it extremely helpful to be able to make what I’ll call intermediate commits, commits during the stages where the code isn’t working right. I always found CVS and Subversion frustrating because I couldn’t make such intermediate commits because all commits went back to the server and would break everyone else’s builds. I had hoped Git’s decentralized nature would solve that problem for me.

> Indeed, I can’t see much, if any, reason why you couldn’t make intermediate commits with git, except for the conventions and practices of the git world, which seem (to me) to obsess a bit too much with making your commit history “pretty”, hiding the ugliness of going through the development process. I can see some value in that, but it looks to me like the sort of thing that your SCM should help you with, rather than impose on you. (Then again, talk is cheap. I didn’t invent git and I’m not the one putting in the work to maintain and extend it.)

> So “microcommits”, on first glance, look like they’re encouraging good practice of tightly controlling scope in your day to day work and committing often, which I’m in favor of.

> On second glance, microcommits look like they’re advocating what I’m suggesting above, in which case I’m cautiously in favor of it. Meaning I like the idea, but I’d like to see the pros and cons argued out thoroughly.

> However, on third glance, one of the blog posts I read advocated both committing and pushing, even going so far as to suggest automating it so everything gets committed and pushed every five minutes. This is a bit extreme and gets us into dicier territory. By definition, you have a lot more leeway in your personal repo. It’s when you start pushing to a shared repo or other people’s repos that you really need to be more considerate of the problems you might be creating for other people.

> Still, if you adopt aggressive branching practices, so all of your microcommits and pushes are still in your own branch on the shared repo, then you’re not inflicting your broken code on anybody else until they pull and merge your branch. So in theory it should be feasible. But it’s going to result in a very cluttered commit log.
