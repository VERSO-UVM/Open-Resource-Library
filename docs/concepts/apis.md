---
sidebar_position: 8
---

# APIs

An **API** (Application Programming Interface) is a defined way for two pieces of software to communicate with each other. APIs are everywhere in modern software: when a weather app shows you the forecast, it's fetching data from a weather API. When you log into a site with Google, that site is calling Google's OAuth API.

As a researcher or developer, you'll regularly use APIs to fetch data, call external services, and build integrations.

## What Is a Web API?

A web API works over the internet using HTTP — the same protocol your browser uses to load websites. You send a **request** to a URL, and the server sends back a **response**, usually containing data.

The most common style of web API today is **REST** (Representational State Transfer).

## REST APIs

A REST API organizes resources (things like users, articles, datasets) as URLs. You interact with them using standard HTTP methods.

### HTTP Methods

| Method | Purpose | Example |
| --- | --- | --- |
| `GET` | Retrieve data | Get a list of users |
| `POST` | Create new data | Submit a new comment |
| `PUT` | Replace existing data | Update a user profile |
| `PATCH` | Partially update data | Change just an email address |
| `DELETE` | Delete data | Remove a post |

### HTTP Status Codes

The server's response always includes a status code indicating success or failure:

| Code | Meaning |
| --- | --- |
| `200 OK` | Success |
| `201 Created` | Resource created successfully |
| `400 Bad Request` | Your request was malformed |
| `401 Unauthorized` | You need to authenticate |
| `403 Forbidden` | You don't have permission |
| `404 Not Found` | Resource doesn't exist |
| `429 Too Many Requests` | You've hit a rate limit |
| `500 Internal Server Error` | The server had an error |

### JSON

Most REST APIs exchange data in **JSON** (JavaScript Object Notation) format. JSON is a lightweight text format that maps closely to Python dictionaries and lists:

```json
{
  "id": 42,
  "name": "Alice",
  "email": "alice@example.com",
  "roles": ["researcher", "contributor"],
  "active": true
}
```

## Making API Requests

### In Your Browser

You can make basic GET requests right in your browser. Navigate to any API URL to see the response. For example:

```text
https://api.github.com/users/octocat
```

### With curl (Command Line)

```sh
# Basic GET request
curl https://api.github.com/users/octocat

# Pretty-print JSON output
curl https://api.github.com/users/octocat | python -m json.tool

# POST request with JSON body
curl -X POST https://api.example.com/items \
  -H "Content-Type: application/json" \
  -d '{"name": "New Item", "value": 42}'
```

### With Python (requests library)

The `requests` library makes it easy to call APIs from Python:

```sh
pip install requests
```

**GET request:**

```python
import requests

response = requests.get("https://api.github.com/users/octocat")

# Check if request succeeded
print(response.status_code)  # 200

# Parse the JSON response
data = response.json()
print(data["name"])        # "The Octocat"
print(data["public_repos"])
```

**POST request with JSON body:**

```python
import requests

payload = {"title": "My Post", "body": "Hello world", "userId": 1}

response = requests.post(
    "https://jsonplaceholder.typicode.com/posts",
    json=payload
)

print(response.status_code)  # 201
print(response.json())
```

**Handling errors:**

```python
import requests

response = requests.get("https://api.example.com/data")

if response.status_code == 200:
    data = response.json()
elif response.status_code == 404:
    print("Resource not found")
elif response.status_code == 401:
    print("Authentication required")
else:
    print(f"Error: {response.status_code}")

# Or raise an exception automatically for 4xx/5xx responses
response.raise_for_status()
```

## Authentication

Most APIs require authentication to know who is making requests and to enforce rate limits or permissions.

### API Keys

The most common method. You include a key (a long string) in your request:

```python
import requests

API_KEY = "your-api-key-here"

response = requests.get(
    "https://api.example.com/data",
    headers={"Authorization": f"Bearer {API_KEY}"}
)
```

:::warning
Never hardcode API keys in your source code or commit them to Git. Store them in environment variables or a `.env` file that is listed in `.gitignore`. See the [Security Basics](/concepts/security_basics) page.
:::

```python
import os
import requests

API_KEY = os.environ.get("MY_API_KEY")
```

### OAuth

OAuth is used when an API acts on behalf of a user (e.g., "Sign in with Google"). It's more complex — typically you redirect the user to the provider's login page, receive a token, and use that token in subsequent requests. Most libraries have OAuth helpers.

## Rate Limits

APIs limit how many requests you can make per unit of time to prevent abuse. If you exceed the limit, you'll receive a `429 Too Many Requests` response.

Always:

- Check the API documentation for rate limits
- Add delays between requests when making many calls
- Cache responses when you can — don't re-fetch data you already have

```python
import requests
import time

urls = ["https://api.example.com/item/1", "https://api.example.com/item/2"]

for url in urls:
    response = requests.get(url)
    print(response.json())
    time.sleep(0.5)  # Wait 500ms between requests
```

## Reading API Documentation

Good API documentation includes:

- **Base URL** — the root URL all endpoints are relative to
- **Endpoints** — the specific URLs and what they do
- **Parameters** — query parameters, path parameters, and request body fields
- **Authentication** — how to authenticate
- **Examples** — sample requests and responses
- **Rate limits** — how many requests you're allowed

### Query Parameters

Many GET endpoints accept parameters to filter or sort results:

```text
https://api.github.com/search/repositories?q=python&sort=stars&order=desc
```

In Python:

```python
params = {"q": "python", "sort": "stars", "order": "desc"}
response = requests.get("https://api.github.com/search/repositories", params=params)
```

## Practical Example: GitHub API

The GitHub API is free and well-documented — great for practicing.

```python
import requests

# Get repositories for a user
username = "VERSO-UVM"
response = requests.get(f"https://api.github.com/users/{username}/repos")
repos = response.json()

for repo in repos:
    print(f"{repo['name']}: {repo['stargazers_count']} stars")
```

## References

- [MDN: HTTP overview](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview)
- [GitHub REST API documentation](https://docs.github.com/en/rest)
- [JSONPlaceholder](https://jsonplaceholder.typicode.com) — a free fake API for testing
- [requests library documentation](https://requests.readthedocs.io)
- [Postman](https://www.postman.com) — a graphical tool for exploring and testing APIs
