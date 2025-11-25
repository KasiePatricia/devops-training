# Complete Docker Course -

## Table of Contents
1. [Introduction](#introduction)
2. [What is Docker](#what-is-docker)
3. [Why Use Docker](#why-use-docker)
4. [How Docker Works](#how-docker-works)
5. [How to Use Docker](#how-to-use-docker)
6. [Hello Docker Demo](#hello-docker-demo)
7. [React Docker Demo](#react-docker-demo)
8. [Publishing Docker Images](#publishing-docker-images)
9. [Docker Compose (React)](#docker-compose-react)
10. [Docker Compose Watch (MERN)](#docker-compose-watch-mern)
11. [Docker Scout](#docker-scout)
12. [Full Stack Next.js Demo](#nextjs-demo)
13. [Should You Dockerize](#should-you-dockerize)

---

## Introduction

Docker solves the classic "it works on my machine" problem. It's not just a compatibility tool—it's a critical skill for high-paying developer jobs. Surveys show Docker is used by 57% of professional developers.

**What You'll Learn:**
- Docker fundamentals and why/when/how to use it
- Dockerizing modern web applications
- Docker Desktop features
- Creating and publishing Docker images
- Advanced concepts: volumes, networks, port mapping
- Full-stack dockerization (React, Vue, Svelte, MERN, Next.js)
- Docker commands: compose, init, scout, compose watch

---

## What is Docker

**The Lunchbox Analogy:**
Docker is like a lunchbox for your application. It packs not just your code (the main dish) but all dependencies (ingredients). This magical lunchbox ensures everything works the same everywhere—your desk, colleague's desk, or production server.

**Technical Definition:**
Docker is a platform that enables development, packaging, and execution of applications in unified environments. It creates self-contained boxes with their own OS and all components needed to run your application smoothly.

---

## Why Use Docker

### Real-World Impact
Major companies using Docker:
- **Uber**: Onboarding developers in minutes vs. weeks
- **eBay, Spotify, Washington Post, Yelp**: Improved app speed and development

### Key Benefits

**1. Consistency Across Environments**
- No more "works on my machine" issues
- Same commands for everyone regardless of OS
- Eliminates OS-specific setup problems

**2. Isolation**
- Clear boundaries between app and dependencies
- No conflicts between applications
- Improved security and debugging
- Like partitioned lunchbox compartments

**3. Portability**
- Easy movement between development, testing, production
- Lightweight containers vs. traditional VMs
- Efficient resource usage
- Faster application start times

**4. Version Control**
- Track application versions like Git for code
- Easy rollback to previous versions

**5. Scalability**
- Handle more users by creating container copies
- Like multiple restaurant menus for more customers

**6. DevOps Integration**
- Bridges gap between development and operations
- Streamlined workflow from coding to deployment
- Continuous feedback and collaboration

---

## How Docker Works

### Core Concepts

**1. Docker Images**
- Lightweight, standalone executable package
- Includes: code, runtimes (Node.js), libraries, system tools, OS
- Think of it as a recipe for your application
- Lists ingredients (code/libraries) and instructions (runtime/tools)

**2. Docker Containers**
- Runnable instance of a Docker image
- Execution environment for the application
- Follows image instructions, downloads packages, sets up runtime
- Like a baked cake from a recipe
- Multiple containers can run from one image

**3. Docker Volumes**
- Persistent data storage mechanism
- Shared between container and host machine
- Data survives even if container stops/removes
- Like a shared folder outside the container

**4. Docker Networks**
- Communication channel between containers
- Enables containers to share information while maintaining isolation
- Like a restaurant kitchen with different cooking stations connected by order tickets

### Docker Architecture

**Three Main Components:**

**1. Docker Client**
- User interface for Docker
- Command line or GUI
- Issues build, run, manage commands
- Like a chef giving kitchen instructions

**2. Docker Host (Docker Daemon)**
- Background process managing containers
- Listens for client commands
- Creates/manages containers and images
- Like the master chef executing instructions

**3. Docker Registry (Docker Hub)**
- Centralized repository of Docker images
- Public and private registries
- Docker's version of GitHub
- Like a cookbook library for sharing recipes

---

## How to Use Docker

### Installation & Setup

1. Download Docker Desktop from description link
2. Install for your OS
3. Sign up and launch

### Docker Desktop Features
- **Containers**: View created containers
- **Images**: View built images
- **Volumes**: View shared volumes
- **Beta Features**: Builds, Dev Environments, Docker Scout

### Docker Hub
- Visit hub.docker.com
- Explore public images
- Official images: Ubuntu, Python, Go, Redis, PostgreSQL, MongoDB, MySQL, Node.js, WordPress
- Community and verified publisher images

---

## Dockerfile Syntax

### Essential Commands

**FROM** - Base image
```dockerfile
FROM node:20-alpine
```

**WORKDIR** - Set working directory
```dockerfile
WORKDIR /app
```

**COPY** - Copy files to image
```dockerfile
COPY . .
```

**RUN** - Execute commands during build
```dockerfile
RUN npm install
```

**EXPOSE** - Declare network ports
```dockerfile
EXPOSE 3000
```

**ENV** - Set environment variables
```dockerfile
ENV NODE_ENV=production
```

**ARG** - Build-time variables
```dockerfile
ARG NODE_VERSION=20
```

**VOLUME** - Mount point for storage
```dockerfile
VOLUME /app/data
```

**CMD** - Default command (can be overridden)
```dockerfile
CMD ["npm", "start"]
```

**ENTRYPOINT** - Fixed startup command
```dockerfile
ENTRYPOINT ["node", "server.js"]
```

---

## Hello Docker Demo

### Step-by-Step

**1. Create Project Structure**
```
hello-docker/
  ├── hello.js
  └── Dockerfile
```

**2. hello.js**
```javascript
console.log("Hello Docker");
```

**3. Dockerfile**
```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY . .
CMD ["node", "hello.js"]
```

**4. Build Image**
```bash
cd hello-docker
docker build -t hello-docker .
```

**5. Run Container**
```bash
docker run hello-docker
# Output: Hello Docker
```

**6. Interactive Shell**
```bash
docker run -it hello-docker sh
node hello.js
```

---

## React Docker Demo

### Setup
```bash
npm create vite@latest react-docker
cd react-docker
```

### Complete Dockerfile
```dockerfile
FROM node:20-alpine

# Create system user for security
RUN addgroup app && adduser -S -G app app
USER app

WORKDIR /app

# Copy package files first (for caching)
COPY package*.json ./
RUN chown -R app:app .

USER app
RUN npm install

# Copy rest of files
COPY . .
RUN chown -R app:app .

USER app

EXPOSE 5173

CMD ["npm", "run", "dev"]
```

### .dockerignore
```
node_modules
```

### Update package.json
```json
{
  "scripts": {
    "dev": "vite --host"
  }
}
```

### Build and Run
```bash
docker build -t react-docker .
docker run -p 5173:5173 react-docker
```

### With Hot Reload (Volumes)
```bash
docker run -p 5173:5173 \
  -v "$(pwd):/app" \
  -v /app/node_modules \
  react-docker
```

### Docker Commands Reference

**List Containers**
```bash
docker ps          # Running containers
docker ps -a       # All containers
```

**Stop/Remove Containers**
```bash
docker stop <container-id>
docker rm <container-id>
docker rm -f <container-id>  # Force remove
```

**Clean Up**
```bash
docker container prune  # Remove stopped containers
docker images          # List images
```

---

## Publishing Docker Images

### Steps to Publish

**1. Login**
```bash
docker login
```

**2. Tag Image**
```bash
docker tag react-docker <username>/react-docker
```

**3. Push to Docker Hub**
```bash
docker push <username>/react-docker
```

**4. Verify**
- Visit hub.docker.com
- Check under Repositories

---

## Docker Compose (React)

### What is Docker Compose?

A tool for defining and managing multi-container applications using a YAML file. Run entire applications with one command instead of multiple docker commands.

**Benefits:**
- Single configuration file
- One command to run everything
- Manages multiple containers
- Defines services, networks, volumes

### Docker Init

Generate Docker files automatically:
```bash
docker init
```

Answer prompts:
- Platform: Node
- Version: 20
- Package manager: npm
- Build command: No (use dev)
- Start command: npm run dev
- Port: 5173

### compose.yaml Structure

```yaml
version: '3.8'

services:
  web:
    build:
      context: .
      dockerfile: Dockerfile
    ports:
      - "5173:5173"
    volumes:
      - .:/app
      - /app/node_modules
```

### Run with Docker Compose
```bash
docker compose up
```

### Stop Services
```bash
# Ctrl+C (graceful stop)
# Or
docker compose down
```

---

## Docker Compose Watch (MERN)

### What is Docker Compose Watch?

Automatically updates service containers when you make code changes. Eliminates manual rebuilds and reruns.

**Three Main Operations:**

1. **Sync**: Moves changed files to container in real-time
2. **Rebuild**: Creates new images and updates services
3. **Sync + Restart**: Syncs files and restarts container

### MERN Application Structure

```
mern-docker/
  ├── frontend/
  │   ├── Dockerfile
  │   ├── .dockerignore
  │   └── src/
  ├── backend/
  │   ├── Dockerfile
  │   ├── .dockerignore
  │   └── src/
  └── compose.yaml
```

### Complete compose.yaml for MERN

```yaml
version: '3.8'

services:
  # Frontend Service
  web:
    depends_on:
      - api
    build:
      context: ./frontend
    ports:
      - "5173:5173"
    environment:
      - VITE_API_URL=http://localhost:8000
    develop:
      watch:
        - path: ./frontend/package.json
          action: rebuild
        - path: ./frontend/package-lock.json
          action: rebuild
        - path: ./frontend
          target: /app
          action: sync

  # Backend Service
  api:
    depends_on:
      - db
    build:
      context: ./backend
    ports:
      - "8000:8000"
    environment:
      - DB_URL=mongodb://db:27017/anime
    develop:
      watch:
        - path: ./backend/package.json
          action: rebuild
        - path: ./backend/package-lock.json
          action: rebuild
        - path: ./backend
          target: /app
          action: sync

  # Database Service
  db:
    image: mongo:latest
    ports:
      - "27017:27017"
    volumes:
      - anime:/data/db

volumes:
  anime:
```

### Frontend Dockerfile
```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5173
CMD ["npm", "run", "dev"]
```

### Backend Dockerfile
```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8000
CMD ["npm", "start"]
```

### .dockerignore (both frontend/backend)
```
node_modules
```

### Run MERN Application

**Start Services:**
```bash
cd mern-docker
docker compose up
```

**Enable Watch Mode:**
```bash
docker compose watch
```

Now changes to code automatically sync to containers!

### Testing the Application

1. Navigate to `http://localhost:5173`
2. Add anime entries
3. Data persists in MongoDB container
4. Make code changes - see updates in real-time

---

## Docker Scout

### What is Docker Scout?

A security tool that scans container images for vulnerabilities.

**How It Works:**
1. Scans container image layers
2. Creates Software Bill of Materials (SBOM)
3. Checks against vulnerability database
4. Reports security issues

### Using Docker Scout

**In Docker Desktop:**
1. Navigate to Docker Scout section
2. Select image to analyze
3. View vulnerability report
4. Check packages and CVEs

**Via CLI:**
```bash
docker scout cves <image-name>
```

### Best Practices
- Run Scout before deploying
- Review all vulnerabilities
- Update vulnerable dependencies
- Regular security audits

---

## Full Stack Next.js Demo {#nextjs-demo}

### Project Setup
```bash
# Create Next.js project
npx create-next-app@latest next-docker
cd next-docker
```

### Initialize Docker
```bash
docker init
```

Configuration:
- Platform: Node
- Version: 20
- Package manager: npm
- Build: No
- Start: npm run dev
- Port: 3000

### Custom Dockerfile

```dockerfile
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]
```

### compose.yaml

```yaml
version: '3.8'

services:
  frontend:
    build:
      context: .
      dockerfile: Dockerfile
    ports:
      - "3000:3000"
    develop:
      watch:
        - path: ./package.json
          action: rebuild
        - path: ./next.config.js
          action: rebuild
        - path: ./package-lock.json
          action: rebuild
        - path: .
          target: /app
          action: sync
    environment:
      - DB_URL=<your-mongodb-atlas-connection-string>

volumes:
  tasks:
```

### For Local MongoDB

If using local MongoDB instead of Atlas:

```yaml
services:
  frontend:
    # ... previous config
    depends_on:
      - db
    environment:
      - DB_URL=mongodb://db:27017/tasks

  db:
    image: mongo:latest
    ports:
      - "27017:27017"
    volumes:
      - tasks:/data/db
```

### Run Application

**Start Services:**
```bash
docker compose up
```

**Enable Watch Mode:**
```bash
docker compose watch
```

### Testing
1. Navigate to `http://localhost:3000`
2. Create tasks
3. Make code changes
4. Changes sync automatically

---

## Should You Dockerize Your Application? {#should-you-dockerize}

### When Docker Makes Sense

**1. Large & Complex Applications**
- Multiple services (databases, servers, APIs)
- Example: E-commerce with web server, database, payment API, inventory API
- Docker packages everything into standardized units

**2. Microservices Architecture**
- Independent features as separate services
- Example: Social media with auth, posts, notifications, connections
- Isolate and manage services independently

**3. Cross-Platform Development**
- Team using Windows, macOS, Linux
- Docker ensures consistent environment
- Minimizes compatibility issues

**4. Scalability Requirements**
- Handle growing user base
- Example: Streaming service scaling transcoding
- Easy replication and deployment

**5. Frequent Updates**
- Smooth deployment process
- Consistent environment for updates
- No broken dependencies

**6. Team Collaboration**
- Same environment for all developers
- Example: ML project with specific libraries
- Reduced compatibility issues

**7. Legacy Applications**
- Modernize old applications
- Isolate dependencies
- Compatible with modern systems

### Key Advantages

✅ Consistency across environments
✅ Simplified dependency management
✅ Easy scaling
✅ Smooth updates
✅ Better collaboration
✅ Modernize legacy apps
✅ Industry standard

### Conclusion

Docker is valuable for applications of any size. It solves problems before they happen and makes development smoother. Almost every company uses dockerized applications, making Docker knowledge essential for modern developers.

---

## Course Completion

🎉 **Congratulations!** You've learned:
- Docker fundamentals and core concepts
- Building and managing images
- Creating and running containers
- Docker Compose for multi-container apps
- Docker Compose Watch for development
- Security scanning with Docker Scout
- Dockerizing various applications (vanilla JS, React, MERN, Next.js)

You can now confidently dockerize any modern application!

---

## Quick Command Reference

### Essential Docker Commands

```bash
# Images
docker build -t <name> .
docker images
docker rmi <image-id>

# Containers
docker run <image>
docker run -it <image> sh
docker run -p 3000:3000 <image>
docker ps
docker ps -a
docker stop <container-id>
docker rm <container-id>
docker container prune

# Docker Compose
docker compose up
docker compose down
docker compose watch

# Docker Hub
docker login
docker tag <image> <username>/<image>
docker push <username>/<image>

# Utility
docker init
docker scout cves <image>
```

---
