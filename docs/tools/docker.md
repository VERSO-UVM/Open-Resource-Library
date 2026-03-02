# Docker

Docker is a tool that packages software into **containers** — isolated, portable environments that include everything a program needs to run: code, runtime, libraries, and configuration. A container runs the same way on any machine, eliminating the "it works on my machine" problem.

## Containers vs. Virtual Machines

Both containers and virtual machines (VMs) provide isolated environments, but they work differently:

| | Containers | Virtual Machines |
| --- | --- | --- |
| **Size** | Megabytes | Gigabytes |
| **Startup** | Seconds | Minutes |
| **Isolation** | Process-level | Full OS |
| **Overhead** | Very low | High |

Containers share the host OS kernel but isolate their filesystem, networking, and processes. VMs emulate an entire computer, including a separate OS.

## Key Concepts

### Image

A **Docker image** is a read-only template that defines a container. Think of it like a snapshot of an environment. Images are built from a `Dockerfile` and can be shared via registries like [Docker Hub](https://hub.docker.com).

### Container

A **container** is a running instance of an image. You can start many containers from the same image. When a container stops, its changes are discarded (unless you use volumes).

### Dockerfile

A `Dockerfile` is a text file with instructions for building an image. Each instruction creates a layer.

### Registry

A registry stores and distributes images. [Docker Hub](https://hub.docker.com) is the default public registry, similar to how GitHub hosts code.

## Installation

Download **Docker Desktop** from [docker.com](https://www.docker.com/products/docker-desktop/). It includes Docker Engine, the CLI, and a GUI.

Verify installation:

```sh
docker --version
docker run hello-world
```

## Basic Docker Commands

### Working with Images

```sh
# Download an image from Docker Hub
docker pull python:3.12

# List downloaded images
docker images

# Remove an image
docker rmi python:3.12
```

### Running Containers

```sh
# Run a container (downloads image if needed)
docker run python:3.12

# Run interactively with a shell
docker run -it python:3.12 bash

# Run in the background (detached)
docker run -d nginx

# Run and remove the container when it exits
docker run --rm python:3.12 python --version

# Map a host port to a container port
docker run -p 8080:80 nginx
# Now visit http://localhost:8080
```

### Managing Containers

```sh
# List running containers
docker ps

# List all containers (including stopped)
docker ps -a

# Stop a running container
docker stop <container-id>

# Remove a stopped container
docker rm <container-id>

# View logs from a container
docker logs <container-id>

# Open a shell inside a running container
docker exec -it <container-id> bash
```

## Writing a Dockerfile

Here's a Dockerfile for a simple Python application:

```dockerfile
# Start from an official Python image
FROM python:3.12-slim

# Set the working directory inside the container
WORKDIR /app

# Copy the requirements file and install dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the application code
COPY . .

# The command to run when the container starts
CMD ["python", "app.py"]
```

### Build and Run

```sh
# Build an image from the Dockerfile in the current directory
docker build -t my-app .

# Run it
docker run my-app

# Run with a port mapping
docker run -p 5000:5000 my-app
```

### Dockerfile Instructions

| Instruction | Purpose |
| --- | --- |
| `FROM` | Base image to start from |
| `WORKDIR` | Set the working directory |
| `COPY` | Copy files from host to image |
| `RUN` | Execute a command during build |
| `ENV` | Set environment variables |
| `EXPOSE` | Document which port the app uses |
| `CMD` | Default command to run at startup |
| `ENTRYPOINT` | Fixed command (CMD becomes arguments) |

## Volumes

By default, container data is lost when the container stops. **Volumes** persist data between runs:

```sh
# Mount a host directory into the container
docker run -v /path/on/host:/path/in/container my-app

# Mount the current directory
docker run -v $(pwd):/app my-app

# Create a named volume (managed by Docker)
docker run -v mydata:/app/data my-app
```

## Docker Compose

For projects with multiple services (e.g., a web app + a database), **Docker Compose** lets you define and run them together with a single `docker-compose.yml` file.

```yaml
services:
  web:
    build: .
    ports:
      - "5000:5000"
    depends_on:
      - db
    environment:
      - DATABASE_URL=postgresql://user:pass@db:5432/mydb

  db:
    image: postgres:16
    environment:
      - POSTGRES_USER=user
      - POSTGRES_PASSWORD=pass
      - POSTGRES_DB=mydb
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:
```

Commands:

```sh
# Start all services
docker compose up

# Start in the background
docker compose up -d

# Stop all services
docker compose down

# View logs
docker compose logs

# Rebuild images
docker compose build
```

## .dockerignore

Like `.gitignore`, a `.dockerignore` file tells Docker which files to exclude when building an image. This keeps images small and prevents secrets from being accidentally included:

```text
.git
.env
venv/
__pycache__/
*.pyc
node_modules/
```

## Practical Use Cases for Researchers

- **Reproducible environments** — share a `Dockerfile` alongside your code so others can reproduce your exact environment years later
- **Running tools without installing them** — `docker run -it ubuntu bash` gives you a temporary Linux environment
- **Consistent development environments** — the whole team uses the same container, so setup instructions become a single `docker compose up`
- **Running services locally** — start a local PostgreSQL or Redis instance with one command, no installation required

```sh
# Start a PostgreSQL database locally for development
docker run -d \
  -e POSTGRES_USER=dev \
  -e POSTGRES_PASSWORD=dev \
  -e POSTGRES_DB=myapp \
  -p 5432:5432 \
  postgres:16
```

## References

- [Docker documentation](https://docs.docker.com)
- [Docker Hub](https://hub.docker.com) — official images and community images
- [Play with Docker](https://labs.play-with-docker.com) — free browser-based Docker environment
- [Dockerfile best practices](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/)
