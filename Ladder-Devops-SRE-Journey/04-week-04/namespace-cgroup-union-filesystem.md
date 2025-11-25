# Docker Engine Deep Dive - Complete Guide

## Table of Contents
1. [Docker Engine Overview](#engine-overview)
2. [Docker Engine Components](#engine-components)
3. [Docker Namespaces](#namespaces)
4. [PID Namespaces Demo](#pid-demo)
5. [Control Groups (cgroups)](#cgroups)
6. [Resource Management Commands](#resource-commands)
7. [Union File Systems](#union-filesystems)
8. [Union File Systems Demo](#union-demo)
9. [Key Takeaways](#takeaways)

---

## Docker Engine Overview {#engine-overview}

### What is Docker Engine?

Docker Engine is a powerful tool that uses **kernel-level technology** to create containerized environments. These environments are:
- Self-contained
- Isolated from each other
- Lightweight and efficient

### Core Technologies

Docker Engine leverages three fundamental Linux kernel technologies:

1. **Namespaces** - Define the scope and isolation of containers
2. **Control Groups (cgroups)** - Limit resources available to containers
3. **Union File Systems** - Enable layered, efficient image architecture

---

## Docker Engine Components {#engine-components}

### 1. Docker Daemon

**Purpose:** Manages Docker objects

**Responsibilities:**
- Manages images
- Manages containers
- Manages networks
- Manages volumes
- Executes container-related tasks
- Takes commands from Docker CLI

**Key Features:**
- Runs in the background
- Core component of Docker Engine
- Handles all container operations

### 2. REST API

**Purpose:** Remote management interface

**Capabilities:**
- Remotely manage containers
- Remotely manage images
- Remotely manage networks
- Enable custom workflows
- Integration via HTTP requests

**Use Cases:**
- Custom automation tools
- CI/CD pipeline integration
- Remote container management
- Third-party tool integration

### 3. Docker CLI

**Purpose:** User interface for Docker Engine

**Features:**
- Command-line tool
- User-friendly interactions
- Interface between users and Docker Engine
- Enables building, deploying, and managing containers

**Common Operations:**
- Build images
- Run containers
- Manage resources
- Deploy applications
- Monitor container status

### How Components Work Together

```
User → Docker CLI → Docker Daemon → Container Operations
              ↓
         REST API (optional for remote access)
```

---

## Docker Namespaces {#namespaces}

### What are Namespaces?

Namespaces provide **resource isolation**, acting as virtualized instances for independent process operation. They ensure containers remain isolated from each other and the host system.

### Six Types of Namespaces

#### 1. PID Namespace

**Purpose:** Process ID isolation

**How it Works:**
- Provides dedicated space for process IDs
- Container processes remain unaware of external processes
- Each container has its own process tree starting from PID 1
- Prevents process interference between containers

**Benefits:**
- Process isolation
- Security enhancement
- Independent process management

#### 2. Network Namespace

**Purpose:** Network stack isolation

**How it Works:**
- Each container gets its own networking environment
- Separate network interfaces
- Independent routing tables
- Isolated network configuration

**Benefits:**
- Network isolation
- Port conflict prevention
- Independent networking per container

#### 3. Mount Namespace

**Purpose:** File system isolation

**How it Works:**
- Provides distinct file system hierarchy
- Shields container from host's file system structure
- Each container sees its own mount points

**Benefits:**
- File system isolation
- Prevents unauthorized access to host files
- Clean file system separation

#### 4. UTS Namespace

**Purpose:** Hostname and domain name isolation

**How it Works:**
- Containers can have their own hostname
- Independent domain name
- Separate from host system identity

**Benefits:**
- Identity isolation
- Network identification per container
- Clean hostname management

#### 5. IPC Namespace

**Purpose:** Inter-Process Communication isolation

**How it Works:**
- Safeguards IPC resources
- Prevents interference between containers
- Isolates message queues, semaphores, shared memory

**Benefits:**
- Communication isolation
- Prevents data leakage
- Secure IPC operations

#### 6. User Namespace

**Purpose:** User and Group ID isolation

**How it Works:**
- Ensures isolation of user and group IDs
- Allows secure mapping between container and host identities
- Container root can be non-root on host

**Benefits:**
- Enhanced security
- Privilege separation
- User ID mapping flexibility

---

## PID Namespaces Demo {#pid-demo}

### Understanding PID Isolation

When Docker creates containers, each container gets its own set of process IDs. These IDs are:
- Unique to that container
- Not shared with other containers
- Not shared with the host system
- Start from PID 1 within the container

### Key Concept

**Process Isolation:** If we have a process in Container A, it won't interfere with processes in Container B or the host system. Each container only sees its own processes.

### Practical Demonstration

#### Prerequisites

**Verify Docker Installation:**
```bash
# Method 1: Check Docker Desktop (GUI)
# Click Docker icon in top bar

# Method 2: Check version in terminal
docker version

# Expected output shows:
# - Client: Docker Engine version
# - Server: Docker Desktop version
```

#### Step 1: Launch First Container

```bash
# Launch Alpine container with interactive shell
docker run -it --name demo-container alpine sh

# What happens:
# - Pulls Alpine image if not available locally
# - Creates and starts container
# - Drops you into interactive shell
```

#### Step 2: Check Processes in Container 1

```bash
# Inside container, list processes
ps aux

# Output shows:
# PID 1 - Main process
# PID 7 - Current shell
```

**Note:** These are the only processes visible from inside the container.

#### Step 3: Launch Second Container

```bash
# In a new terminal (Command+N on Mac)
docker run -it --name demo-container-2 alpine sh

# Inside second container
ps aux

# Output shows:
# PID 1 - Main process
# PID 7 - Current shell
```

#### Step 4: Compare Processes

**Container 1:**
- PID 1 and PID 7 running
- Completely isolated

**Container 2:**
- Also has PID 1 and PID 7 running
- Completely isolated from Container 1
- Same PIDs but different processes

### What This Demonstrates

✅ Each container has its own PID namespace
✅ PIDs don't conflict between containers
✅ Containers can't see each other's processes
✅ Complete process isolation achieved
✅ Enhanced security and stability

### Why PID Namespaces Matter

1. **Safety:** Prevents unintended interactions
2. **Efficiency:** Isolated process management
3. **Portability:** Consistent behavior across environments
4. **Consistency:** Predictable process trees
5. **Security:** Prevents cross-container process manipulation

---

## Control Groups (cgroups) {#cgroups}

### What are Control Groups?

Control groups (cgroups) are a critical part of Docker's resource management. They:
- Assign hardware resources to containers
- Set limits on resource usage
- Ensure fair resource distribution
- Prevent resource monopolization

### Why Use Cgroups?

**Problem:** Without limits, a single container could consume all system resources, impacting overall performance.

**Solution:** Cgroups ensure no single container uses up all resources, maintaining system stability.

### Four Types of Control Groups

#### 1. CPU Group

**Purpose:** CPU resource management

**Functions:**
- Governs CPU resource distribution
- Ensures each container gets fair share
- Prevents CPU starvation
- Controls CPU time allocation

**Use Cases:**
- Limiting CPU-intensive applications
- Ensuring balanced workload distribution
- Preventing CPU hogging

#### 2. Memory Group

**Purpose:** Memory resource management

**Functions:**
- Regulates memory usage per container
- Prevents memory hogging
- Sets memory limits
- Enforces memory constraints

**Use Cases:**
- Limiting memory-intensive applications
- Preventing OOM (Out of Memory) issues
- Ensuring predictable memory usage

#### 3. Block I/O Group

**Purpose:** Disk I/O management

**Functions:**
- Controls disk I/O operations
- Prevents one container from saturating storage subsystem
- Manages read/write bandwidth
- Balances disk access

**Use Cases:**
- Limiting disk-intensive operations
- Ensuring fair disk access
- Preventing I/O bottlenecks

#### 4. Network Group

**Purpose:** Network bandwidth management

**Functions:**
- Manages network bandwidth
- Ensures fair network usage
- Controls network throughput
- Prevents network saturation

**Use Cases:**
- Limiting network-intensive applications
- Ensuring balanced network access
- Managing bandwidth allocation

---

## Resource Management Commands {#resource-commands}

### 1. CPU Resource Allocation

**Limit CPU to Half a Core:**
```bash
docker run -it --cpus="0.5" alpine
```

**What it does:**
- Restricts container to 0.5 CPU cores
- Prevents excessive CPU usage
- Ensures fair CPU distribution

**Adjust as needed:**
```bash
--cpus="1.0"    # One full core
--cpus="2.0"    # Two cores
--cpus="0.25"   # Quarter core
```

### 2. Memory Resource Allocation

**Limit Memory to 512MB:**
```bash
docker run -it --memory="512m" alpine
```

**What it does:**
- Restricts container to 512MB RAM
- Prevents memory overflow
- Ensures predictable memory usage

**Common values:**
```bash
--memory="256m"   # 256 megabytes
--memory="1g"     # 1 gigabyte
--memory="2g"     # 2 gigabytes
```

### 3. Combined CPU and Memory Limits

**Apply Both Limits:**
```bash
docker run -it --cpus="0.5" --memory="512m" alpine
```

**What it does:**
- Combines CPU and memory restrictions
- Ensures container doesn't exceed specified values
- Comprehensive resource control

**Best Practice:**
- Always set both limits for production containers
- Prevents resource exhaustion
- Ensures predictable performance

### 4. CPU Shares (Relative Weight)

**Set CPU Priority:**
```bash
docker run -it --cpu-shares=256 alpine
```

**What it does:**
- Sets container CPU priority relative to others
- Higher value = higher priority
- Default is 1024

**Priority Examples:**
```bash
--cpu-shares=512   # Half priority
--cpu-shares=1024  # Normal priority
--cpu-shares=2048  # Double priority
```

**Note:** This is relative weight, not absolute limit.

### 5. Network Bandwidth Management

**Create Network:**
```bash
# List existing networks
docker network ls

# Create new network
docker network create demo-network

# Verify creation
docker network ls
```

**Attach Container to Network with Alias:**
```bash
docker run -it \
  --network demo-network \
  --network-alias myapp-container \
  alpine
```

**What it does:**
- Attaches container to specific network
- Controls network bandwidth
- Manages interactions with other containers
- Provides network alias for easy reference

### 6. Restart Policies

**Always Restart Container:**
```bash
docker run -d --restart always alpine
```

**What it does:**
- Container restarts automatically if it exits
- Ensures high availability
- Useful for production services

**Check Status:**
```bash
docker ps

# You'll see container continuously restarting
# Because Alpine has no long-running service
```

**Restart Policy Options:**
```bash
--restart no          # Never restart (default)
--restart always      # Always restart
--restart on-failure  # Restart on non-zero exit
--restart unless-stopped  # Restart unless manually stopped
```

### 7. Container Cleanup

**Remove All Stopped Containers:**
```bash
docker container prune
```

**What it does:**
- Removes all stopped containers
- Frees up disk space
- Cleans up resources
- Keeps environment tidy

**⚠️ Warning:** This removes ALL stopped containers. Use carefully!

**Alternative (safer):**
```bash
# List stopped containers first
docker ps -a -f status=exited

# Then prune
docker container prune
```

---

## Union File Systems {#union-filesystems}

### What are Union File Systems?

Union File Systems are an essential part of Docker's layered architecture. They enable:
- Quick creation of container images
- Efficient distribution of images
- Lightweight and agile deployments
- Layer sharing between images

### Key Concepts

**Layered Architecture:**
- Each instruction in Dockerfile creates a new layer
- Layers are stacked on top of each other
- Lower layers are shared across images
- Only top layers differ between similar images

**Benefits:**
- **Efficient Storage:** Shared layers reduce disk usage
- **Fast Deployment:** Only new layers need to be transferred
- **Version Control:** Easy to track changes layer by layer
- **Reusability:** Base layers can be reused across images

### How Layers Work

```
┌─────────────────────────┐
│   Application Layer     │  ← Your code
├─────────────────────────┤
│   Dependencies Layer    │  ← npm/pip packages
├─────────────────────────┤
│   Runtime Layer         │  ← Node.js/Python
├─────────────────────────┤
│   Base OS Layer         │  ← Alpine/Ubuntu
└─────────────────────────┘
```

### Layer Sharing Example

**Image 1:** Alpine + Node.js + App A
**Image 2:** Alpine + Node.js + App B

Shared layers:
- Alpine (base)
- Node.js (runtime)

Unique layers:
- App A code
- App B code

---

## Union File Systems Demo {#union-demo}

### Setup and Cleanup

```bash
# Check running containers
docker ps -a

# List existing images
docker images

# Create test directory
mkdir test-demo
cd test-demo
```

### Step 1: Create Base Image

**Create Simple Dockerfile:**
```bash
# Create Dockerfile with Alpine base
echo "FROM alpine:latest" > Dockerfile

# Verify content
cat Dockerfile
```

**Build Base Image:**
```bash
docker build -t base_image .
```

**Inspect Layers:**
```bash
docker history base_image

# Output shows:
# - One layer: FROM alpine:latest
```

### Step 2: Extend Base Image

**Add New Layer:**
```bash
# Add curl installation to Dockerfile
echo "RUN apk add --no-cache curl" >> Dockerfile

# Verify content
cat Dockerfile

# Output:
# FROM alpine:latest
# RUN apk add --no-cache curl
```

**Build Extended Image:**
```bash
docker build -t extended_image .

# Verify images
docker images

# You'll see:
# - base_image
# - extended_image
# - alpine
```

**Inspect New Layers:**
```bash
docker history extended_image

# Output shows:
# - Layer 1: FROM alpine:latest (shared with base_image)
# - Layer 2: RUN apk add --no-cache curl (new layer)
```

**Compare to Base:**
```bash
docker history base_image

# Shows only one layer
# extended_image has additional layer on top
```

### Step 3: Add Runtime Layer

**Run Container and Make Changes:**
```bash
# Run extended image
docker run -it extended_image /bin/sh

# Inside container, install additional package
apk add --no-cache wget

# Exit container
exit
```

**Commit Changes:**
```bash
# Get container ID
docker ps -a

# Commit changes to create new image
docker commit <container-id> final_image
```

**Inspect Final Image:**
```bash
docker history final_image

# Output shows:
# - Layer 1: FROM alpine:latest (shared)
# - Layer 2: RUN apk add curl (shared)
# - Layer 3: Manual wget installation (new)
```

**Compare All Images:**
```bash
docker images

# You'll see:
# - alpine (base)
# - base_image (1 layer on alpine)
# - extended_image (2 layers)
# - final_image (3 layers)
```

### What This Demonstrates

✅ **Layered Harmony:** Each instruction adds a new layer
✅ **Efficient Storage:** Shared layers (Alpine, curl) used by multiple images
✅ **Easy Versioning:** Track changes layer by layer
✅ **Container Changes:** Runtime changes can be committed as new layers
✅ **Storage Optimization:** Only unique layers consume additional space

### Layer Benefits Illustrated

**Without Layer Sharing:**
```
base_image:    5MB (Alpine)
extended_image: 5MB (Alpine) + 3MB (curl) = 8MB
final_image:   5MB (Alpine) + 3MB (curl) + 2MB (wget) = 10MB
Total: 23MB
```

**With Layer Sharing:**
```
alpine:        5MB
curl layer:    3MB
wget layer:    2MB
Total: 10MB (13MB saved!)
```

---

## Key Takeaways {#takeaways}

### Technology Summary

**Linux Containers are powered by:**
1. **Namespaces** - Define scope and isolation
2. **Control Groups** - Limit resource usage
3. **Union File Systems** - Enable efficient layering

### How Technologies Collaborate

```
┌──────────────────────────────────────┐
│         Docker Container             │
├──────────────────────────────────────┤
│  Union File Systems (Layered Image)  │
├──────────────────────────────────────┤
│  Namespaces (Isolation)              │
├──────────────────────────────────────┤
│  Cgroups (Resource Limits)           │
├──────────────────────────────────────┤
│  Linux Kernel                        │
└──────────────────────────────────────┘
```

### Why This Matters

**For Developers:**
- Understand container internals
- Debug issues effectively
- Optimize resource usage
- Build efficient images

**For Operations:**
- Manage resources properly
- Ensure system stability
- Implement security best practices
- Monitor container performance

### Best Practices

1. **Namespaces:**
   - Leverage for security isolation
   - Understand process boundaries
   - Use for multi-tenancy

2. **Cgroups:**
   - Always set resource limits
   - Monitor resource usage
   - Prevent resource exhaustion
   - Balance workload distribution

3. **Union File Systems:**
   - Minimize layer count
   - Order instructions efficiently
   - Leverage layer caching
   - Share base layers across images

### The Big Picture

**Namespaces** define the scope → Containers stay isolated
**Cgroups** limit resources → Fair resource distribution
**Union FS** enables layers → Efficient storage and deployment

Together, these technologies create a powerful virtualized environment where applications can thrive.

---

## Quick Command Reference

### Resource Management
```bash
# CPU limit
docker run -it --cpus="0.5" alpine

# Memory limit
docker run -it --memory="512m" alpine

# Combined limits
docker run -it --cpus="0.5" --memory="512m" alpine

# CPU priority
docker run -it --cpu-shares=256 alpine

# Restart policy
docker run -d --restart always alpine
```

### Network Management
```bash
# List networks
docker network ls

# Create network
docker network create demo-network

# Run with network
docker run -it --network demo-network --network-alias myapp alpine
```

### Image Management
```bash
# Build image
docker build -t image_name .

# View layers
docker history image_name

# List images
docker images

# Commit changes
docker commit container_id new_image_name
```

### Cleanup
```bash
# Remove stopped containers
docker container prune

# Remove unused images
docker image prune

# Remove everything unused
docker system prune
```

---

## Conclusion

Mastering Docker's core technologies—namespaces, cgroups, and union file systems—is crucial for success in containerization. These technologies work together to provide:

- **Isolation** through namespaces
- **Resource control** through cgroups
- **Efficiency** through union file systems

As containerization continues to evolve, understanding these fundamentals becomes increasingly important for both developers and operations teams.

---

*Happy Coding! 🐳*