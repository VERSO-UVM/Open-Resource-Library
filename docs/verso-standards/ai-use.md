# AI Usage Policy

:::info
Standard in progress
:::

Wondering if you're allowed to use AI tools like ChatGPT, Github Copilot, Supermaven, etc. to work on VERSO projects? Here's your answer. Below are core concepts to help guide your usage of AI.

## Know what you commit

This has been a problem since before the rise of LLMs; see StackOverflow and other forums. When you copy code from anywhere - not just AI tools - make sure that you understand what you're copying. If you don't understand it at first, make an effort to read it and understand how the code works. If you are not able to come to an understanding to where you would be able to write it yourself in the future, don't commit it. One good gauge is whether you can write useful comments for the code.

**In the end, you are responsible for the code you write**

You should be able to maintain and improve on code you've contributed, therefore fully understanding the concepts is very important.

## What to use AI for

A priority list for what AI tools are best used for; generally ordered by how much time they might save/cost the developer.

:::warning
If it is taking several attempts to get the AI to do what you want, then you should just do it yourself.
:::

The important part here is that spending time coaching an AI tool to output what you want can very quickly become more time consuming than if you had just done it yourself.

### 1. Generating boilerplate/dummy data

This is among the best uses for AI tools. They are particularly good at pattern recognition so they are great for filling out things like switch case statements, common errors, etc. They can also be used to help generate fake data to test some code.

### 2. Generating tests

AI can be super useful for generating lots of repetitive tests, ie unit/integration/e2e tests.
However, this is different from above because it still requires human review to ensure that the tests are fully covering a public interface and that they are checking for the correct results.

### 3. Solving a problem

In this area, AI tools either shine or suck. When you are stuck on a problem, it can sometimes help to go try solving with AI first; if you do, [understand the solution!](#know-what-you-commit)

However, if the result does not work or does not make sense, you should revert to solving the problem yourself. Depending on the problem, this may involve reading documentation, testing ideas, and/or researching similar problems/solutions. This is also better for your learning as a developer and your ability to maintain code in the future.

## What to _not_ use AI for

**Do not use AI for:**

- Writing lots of business logic (with the intention of not checking it and cleaning it up)
- Writing comments/documentation

These tasks are things that require the contextual knowledge and reasoning capabilities of a human. If you use AI for these things, you will likely produce code that is hard to maintain/debug or documentation that does not provide truly useful information to the reader.
