---
sidebar_position: 4
---

# Debugging

Debugging is the process of finding and fixing errors (bugs) in your code. Every programmer spends a significant portion of their time debugging — it's a core skill, not a sign of failure.

## Types of Errors

### Syntax Errors

The code isn't valid in the language. The program won't even start. These are usually easy to fix because the interpreter points directly at the problem.

```python
# Missing colon
if x > 5
    print("big")
# SyntaxError: expected ':'
```

### Runtime Errors

The code is valid syntax, but something goes wrong while it's running — dividing by zero, accessing an index that doesn't exist, etc.

```python
numbers = [1, 2, 3]
print(numbers[10])
# IndexError: list index out of range
```

### Logic Errors

The code runs without crashing, but produces the wrong result. These are often the hardest to find.

```python
def average(numbers):
    # Bug: should divide by len(numbers)
    return sum(numbers) / len(numbers) + 1
```

## Reading Error Messages

When your program crashes, read the error message carefully before doing anything else. Python error messages (tracebacks) tell you:

1. **What file and line** the error occurred on
2. **What kind of error** it was
3. **A description** of the problem

```text
Traceback (most recent call last):
  File "script.py", line 8, in <module>
    result = calculate(data)
  File "script.py", line 3, in calculate
    return total / count
ZeroDivisionError: division by zero
```

Read the traceback **from the bottom up** — the bottom line is the actual error, and the lines above show the chain of function calls that led there.

:::tip
Copy the error message and search for it online. Chances are someone on Stack Overflow has encountered the exact same error. Include the last line of the traceback in your search.
:::

## Debugging Strategies

### Print Debugging

The simplest strategy: add `print()` statements to see what your variables contain at different points in the program.

```python
def process_data(items):
    print(f"DEBUG: items = {items}")  # Add this
    result = []
    for item in items:
        print(f"DEBUG: processing {item}")  # Add this
        result.append(item * 2)
    return result
```

While basic, this is often the fastest way to isolate a problem. Just remember to remove the debug prints when you're done.

### Rubber Duck Debugging

Explain your code out loud — to a rubber duck, a plant, a friend, or even just to yourself. Forcing yourself to describe exactly what the code does, step by step, very often reveals the bug before you finish explaining.

This works because the act of articulating the problem shifts your thinking from "I know what I meant" to "what is the code actually doing."

### Simplify the Problem

If something is broken, try to create the smallest possible version that still shows the problem. Remove code, hard-code values, reduce data. A minimal reproducible example often makes the bug obvious — and is also what you'll need if you ask someone else for help.

### Check Your Assumptions

Bugs often come from a value being different from what you assumed. Ask yourself:

- What do I think this variable contains right now?
- What do I think this function returns?
- What do I think is in this file?

Then check each assumption explicitly (with print statements or a debugger) rather than assuming you're right.

### Binary Search Debugging

If you have a large chunk of code and don't know where the bug is, comment out or skip the second half. If the bug disappears, it was in the second half. If it's still there, it was in the first half. Keep halving until you find the line.

## Using a Debugger

A debugger lets you pause program execution at any line and inspect the state of all variables. It's more powerful than print debugging.

### Breakpoints

A breakpoint is a marker on a line that tells the debugger to pause there. When the program reaches a breakpoint, it freezes and you can inspect variables, step through code line by line, and look at the call stack.

### Python's Built-in Debugger (pdb)

Add this line anywhere in your code to drop into an interactive debugger:

```python
import pdb; pdb.set_trace()
# In Python 3.7+, use the shorthand:
breakpoint()
```

Common pdb commands:

| Command | Description |
| --- | --- |
| `n` | Next line (step over) |
| `s` | Step into a function call |
| `c` | Continue until next breakpoint |
| `p variable` | Print a variable |
| `l` | List source code around current line |
| `q` | Quit the debugger |

### VS Code Debugger

VS Code has a graphical debugger that's easier to use than pdb. See the [VS Code](/tools/vscode) page for setup instructions. You can click to set breakpoints, hover over variables to see their values, and step through code with buttons.

## Common Bugs and How to Spot Them

### Off-by-one Errors

Loops that run one too many or one too few times. Very common when using indices.

```python
# Bug: should be range(len(items))
for i in range(len(items) + 1):
    print(items[i])  # IndexError on last iteration
```

### Mutable Default Arguments (Python)

A classic Python gotcha:

```python
# Bug: the list is shared across all calls
def add_item(item, collection=[]):
    collection.append(item)
    return collection

print(add_item("a"))  # ['a']
print(add_item("b"))  # ['a', 'b'] — unexpected!

# Fix: use None as default
def add_item(item, collection=None):
    if collection is None:
        collection = []
    collection.append(item)
    return collection
```

### Variable Shadowing

Using the same variable name in different scopes accidentally.

```python
x = 10

def my_func():
    x = 20  # This is a new local variable, not the global x
    print(x)  # 20

my_func()
print(x)  # 10 — unchanged
```

### Comparing with `==` vs `is`

In Python, `==` checks if values are equal, `is` checks if they're the same object in memory.

```python
a = [1, 2, 3]
b = [1, 2, 3]
print(a == b)  # True (same values)
print(a is b)  # False (different objects)

# Use 'is' only for None, True, False
if result is None:
    ...
```

## Asking for Help Effectively

When you're stuck and need to ask someone, always include:

1. What you were trying to do
2. What you expected to happen
3. What actually happened (the full error message)
4. The relevant code (the smallest amount that reproduces the problem)

Providing all four makes it much easier for someone to help you — and often the process of writing it up reveals the bug yourself.

## References

- [Python Debugger (pdb) documentation](https://docs.python.org/3/library/pdb.html)
- [VS Code debugging guide](https://code.visualstudio.com/docs/editor/debugging)
- [Stack Overflow](https://stackoverflow.com) — search before posting
