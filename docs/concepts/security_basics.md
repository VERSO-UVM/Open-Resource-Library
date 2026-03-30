---
sidebar_position: 7
---

# Security Basics

Security is not just for security engineers — every developer has a responsibility to write code that protects users and data. This page covers the foundational security practices that every student and researcher should know.

## Never Commit Secrets

The single most important rule: **never commit passwords, API keys, tokens, or other secrets to Git.**

Once a secret is committed, it is part of the repository's history forever — even if you delete it in a later commit. If the repository is public, automated bots will find and use the secret within minutes.

:::warning
Secrets accidentally committed to public GitHub repositories have caused major incidents, including leaked cloud credentials that resulted in large unexpected bills and data breaches.
:::

### What Counts as a Secret

- Passwords
- API keys (AWS, GitHub, Google, etc.)
- OAuth tokens
- Private keys (`.pem`, `.key` files)
- Database connection strings (if they contain credentials)
- `.env` files

### How to Keep Secrets Out of Git

**Use environment variables:**

```sh
# Set in your terminal session
export DATABASE_URL="postgresql://user:pass@localhost/mydb"

# Or in a .env file (see below)
```

**Use a `.env` file** for local development, but add it to `.gitignore`:

```text
# .env
DATABASE_URL=postgresql://user:pass@localhost/mydb
STRIPE_API_KEY=sk_test_abc123
```

```text
# .gitignore
.env
.env.local
*.pem
```

**Read from the environment in code:**

```python
import os

api_key = os.environ.get("MY_API_KEY")
if not api_key:
    raise ValueError("MY_API_KEY environment variable not set")
```

**Share secrets safely** — use GitHub Secrets (for CI/CD), a password manager, or a secrets manager like HashiCorp Vault. Never share secrets in Slack, email, or code comments.

### If You Accidentally Commit a Secret

1. **Rotate the secret immediately** — generate a new key/password, invalidate the old one
2. Remove it from the code
3. If the repository was public, assume the secret was compromised

## .gitignore

A `.gitignore` file tells Git which files to never track. Create one at the root of every project.

Common things to gitignore:

```text
# Environment files
.env
.env.*

# Dependencies
node_modules/
venv/
__pycache__/

# Build outputs
dist/
build/
*.egg-info/

# Editor files
.vscode/settings.json
.idea/
*.swp

# OS files
.DS_Store
Thumbs.db

# Secrets and keys
*.pem
*.key
secrets.json
```

[gitignore.io](https://www.gitignore.io) generates `.gitignore` files for any language or framework.

## Dependency Security

The libraries you install can contain vulnerabilities. Keep dependencies updated and audit them regularly.

```sh
# Python — check for known vulnerabilities
pip install pip-audit
pip-audit

# JavaScript — built into npm
npm audit

# Fix automatically where possible
npm audit fix
```

Only install packages you need. Every dependency is a potential vulnerability.

## HTTPS vs. HTTP

Always use HTTPS (not HTTP) for web requests, especially when sending credentials or sensitive data. HTTPS encrypts traffic between the client and server; HTTP sends data in plain text.

When calling APIs:

```python
# Good — encrypted
requests.get("https://api.example.com/data")

# Bad — unencrypted
requests.get("http://api.example.com/data")
```

## Input Validation

Never trust data from users, files, or external APIs. Always validate and sanitize inputs.

### SQL Injection

Never build SQL queries by concatenating user input:

```python
# Dangerous — SQL injection vulnerability
user_input = "'; DROP TABLE users; --"
query = f"SELECT * FROM users WHERE name = '{user_input}'"

# Safe — use parameterized queries
cursor.execute("SELECT * FROM users WHERE name = %s", (user_input,))
```

### Command Injection

Never pass user input directly to shell commands:

```python
import subprocess

# Dangerous
filename = input("Enter filename: ")
subprocess.run(f"cat {filename}", shell=True)  # User could input "file.txt; rm -rf /"

# Safe — pass as a list, not a shell string
subprocess.run(["cat", filename])
```

## Principle of Least Privilege

Request only the permissions your code actually needs. If your app only reads from a database, don't give it write permissions. If an API key only needs read access, don't use one with write access.

This limits the damage if something goes wrong.

## Protecting Sensitive Data in Research

As a researcher, you may work with data that has privacy implications:

- **PII (Personally Identifiable Information)** — names, emails, IP addresses, location data. Treat this carefully and follow your institution's policies.
- **De-identification** — remove or obscure identifying information before sharing datasets publicly.
- **IRB approval** — research involving human subjects may require Institutional Review Board approval.
- **Data storage** — store sensitive data on approved institutional systems, not personal laptops or public cloud services without authorization.

## Two-Factor Authentication (2FA)

Enable 2FA on your GitHub account and any other accounts related to your development work. If your password is leaked, 2FA prevents unauthorized access.

GitHub allows 2FA via authenticator app, hardware key (YubiKey), or SMS. Authenticator apps and hardware keys are more secure than SMS.

## References

- [OWASP Top 10](https://owasp.org/www-project-top-ten/) — the ten most critical web application security risks
- [Have I Been Pwned](https://haveibeenpwned.com) — check if your email has been in a data breach
- [gitignore.io](https://www.gitignore.io) — generate `.gitignore` files
- [GitHub: Keeping secrets safe](https://docs.github.com/en/actions/security-guides/encrypted-secrets)
- [pip-audit](https://pypi.org/project/pip-audit/) — audit Python dependencies for vulnerabilities
