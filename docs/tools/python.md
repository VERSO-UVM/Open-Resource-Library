# Python

Python is a general-purpose, beginner-friendly programming language widely used in research, data science, web development, automation, and AI. Its readable syntax makes it an excellent first language, and its vast ecosystem of libraries makes it powerful enough for professional use.

## Installation

The recommended way to manage Python versions is with [pyenv](/tools/pyenv). However, you can also install Python directly:

- **Windows** — Download from [python.org](https://www.python.org/downloads/) or via the Microsoft Store
- **macOS** — `brew install python` (via [Homebrew](https://brew.sh))
- **Linux** — Usually pre-installed; or `sudo apt install python3` (Debian/Ubuntu)

Verify your installation:

```sh
python --version
# or
python3 --version
```

:::tip
On many systems, `python` refers to Python 2 (outdated) and `python3` refers to Python 3. Always use Python 3. If `python` on your system is Python 2, use `python3` and `pip3` instead of `python` and `pip`.
:::

## Running Python

### Interactive Mode (REPL)

Type `python` to open an interactive session. This is great for quickly testing small pieces of code:

```python
$ python
>>> 2 + 2
4
>>> name = "world"
>>> print(f"Hello, {name}!")
Hello, world!
>>> exit()
```

### Running a Script

Write your code in a `.py` file and run it:

```sh
python my_script.py
```

## Python Basics

### Variables and Types

```python
# Numbers
age = 21
gpa = 3.8

# Strings
name = "Alice"
greeting = f"Hello, {name}!"  # f-strings for embedding variables

# Booleans
is_enrolled = True

# None (equivalent to null)
result = None

# Lists (ordered, mutable)
grades = [95, 87, 92, 78]

# Dictionaries (key-value pairs)
student = {"name": "Alice", "age": 21, "gpa": 3.8}

# Tuples (ordered, immutable)
coordinates = (44.4759, -73.2121)

# Sets (unordered, unique values)
unique_tags = {"python", "research", "open-source"}
```

### Control Flow

```python
# If/elif/else
score = 85
if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
else:
    grade = "C"

# For loop
for item in ["apple", "banana", "cherry"]:
    print(item)

# For loop with range
for i in range(5):
    print(i)  # prints 0, 1, 2, 3, 4

# While loop
count = 0
while count < 3:
    print(count)
    count += 1
```

### Functions

```python
def greet(name, greeting="Hello"):
    """Return a greeting string. (This is a docstring.)"""
    return f"{greeting}, {name}!"

print(greet("Alice"))           # "Hello, Alice!"
print(greet("Bob", "Hi"))       # "Hi, Bob!"
```

### Error Handling

```python
try:
    result = 10 / 0
except ZeroDivisionError:
    print("Cannot divide by zero!")
except Exception as e:
    print(f"Unexpected error: {e}")
finally:
    print("This always runs")
```

### Reading and Writing Files

```python
# Write a file
with open("output.txt", "w") as f:
    f.write("Hello, file!\n")

# Read a file
with open("output.txt", "r") as f:
    contents = f.read()
    print(contents)

# Read line by line
with open("data.txt", "r") as f:
    for line in f:
        print(line.strip())
```

The `with` statement automatically closes the file when the block exits, even if an error occurs.

## Package Management with pip

pip is Python's package manager. It installs libraries from the [Python Package Index (PyPI)](https://pypi.org).

```sh
# Install a package
pip install requests

# Install a specific version
pip install requests==2.31.0

# Install from a requirements file
pip install -r requirements.txt

# List installed packages
pip list

# Show info about a package
pip show requests

# Uninstall a package
pip uninstall requests

# Save current packages to a requirements file
pip freeze > requirements.txt
```

See the [Package Management concepts page](/concepts/package_management) for more detail.

## Virtual Environments

Always use a virtual environment for projects so their dependencies don't conflict with each other.

```sh
# Create a virtual environment
python -m venv venv

# Activate it (macOS/Linux)
source venv/bin/activate

# Activate it (Windows)
venv\Scripts\activate

# Your prompt will change to show (venv)
# Now install packages — they go into the venv, not globally
pip install pandas matplotlib

# Deactivate when done
deactivate
```

Add `venv/` to your `.gitignore`.

## Common Libraries

### Data and Science

| Library | Purpose |
| --- | --- |
| `numpy` | Numerical arrays and math |
| `pandas` | Data manipulation with DataFrames |
| `matplotlib` | Plotting and visualization |
| `scipy` | Scientific computing |
| `scikit-learn` | Machine learning |

### Web and APIs

| Library | Purpose |
| --- | --- |
| `requests` | Making HTTP requests |
| `flask` | Lightweight web framework |
| `fastapi` | Modern, fast API framework |
| `beautifulsoup4` | HTML parsing / web scraping |

### Utilities

| Library | Purpose |
| --- | --- |
| `pathlib` | Modern file path handling (built-in) |
| `json` | JSON parsing (built-in) |
| `os` | Operating system interface (built-in) |
| `argparse` | Command-line argument parsing (built-in) |
| `logging` | Application logging (built-in) |

## Style Guidelines

Python has an official style guide called **PEP 8**. The key points:

- Use 4 spaces for indentation (not tabs)
- Variable and function names use `snake_case`
- Class names use `PascalCase`
- Constants use `ALL_CAPS`
- Lines should be 79 characters or fewer
- Add docstrings to all functions, classes, and modules

Automate formatting with tools like **Black** or **Ruff**:

```sh
pip install black
black my_script.py
```

## Type Hints

Python supports optional type hints, which make code more readable and enable better IDE support and error checking:

```python
def calculate_average(numbers: list[float]) -> float:
    return sum(numbers) / len(numbers)

def greet(name: str, times: int = 1) -> str:
    return (f"Hello, {name}!\n") * times
```

## References

- [Official Python Documentation](https://docs.python.org/3/)
- [The Python Tutorial](https://docs.python.org/3/tutorial/)
- [Real Python](https://realpython.com) — practical tutorials for all skill levels
- [PEP 8 Style Guide](https://pep8.org)
- [PyPI — Python Package Index](https://pypi.org)
