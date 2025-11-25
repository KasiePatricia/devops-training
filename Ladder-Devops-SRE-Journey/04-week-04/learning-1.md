# Docker Complete Study Guide - Organized Notes

## Table of Contents
1. [Docker Fundamentals](#fundamentals)
2. [Installation](#installation)
3. [Basic Commands](#basic-commands)
4. [Docker Images](#docker-images)
5. [Docker Containers](#docker-containers)
6. [Dockerfile](#dockerfile)
7. [Docker Compose](#docker-compose)
8. [Docker Volumes](#docker-volumes)
9. [Docker Swarm](#docker-swarm)
10. [AWS Deployment](#aws-deployment)
11. [Practice Project](#practice-project)

---

## Docker Fundamentals {#fundamentals}

### What is Docker?
Docker is a platform for developing, shipping, and running applications in containers.

### How Docker Works
Docker uses containerization technology to package applications with all their dependencies into standardized units.

### Virtualization vs Containerization

**Virtualization:**
- Full OS for each application
- Heavy resource usage
- Slower boot time

**Containerization:**
- Shared OS kernel
- Lightweight
- Fast boot time
- More efficient resource usage

### Docker Architecture Components
1. **Docker Client** - User interface
2. **Docker Host/Daemon** - Runs containers
3. **Docker Registry** - Stores images (Docker Hub)

### Why Use Docker?

**Isolation:**
- Containers run independently
- No conflicts between applications
- Secure environment

**Key Benefits:**
- Lightweight and fast
- Easy to start, stop, kill, and remove
- Share OS resources efficiently
- Portable across environments
- Consistent behavior

### Container Features
- Standalone, executable packages
- Include: code, runtime, system tools, libraries, settings
- Lightweight with fewer resources
- Fast booting
- Easy management
- Share host OS kernel

---

## Installation {#installation}

### Install Docker on macOS
1. Download Docker Desktop from docker.com
2. Install and launch
3. Verify installation

### Install Docker on AWS Linux EC2

```bash
# Step 1: Update system
sudo yum update -y

# Step 2: Install Docker
sudo amazon-linux-extras install docker

# Step 3: Start Docker service
sudo service docker start

# Step 4: Check Docker is running
sudo docker info

# Step 5: Add user to docker group
sudo usermod -aG docker ec2-user
# Logout and reconnect

# Step 6: Test installation
docker run hello-world

# Check Linux version
cat /etc/*-release
rpm -E %{rhel}
```

---

## Basic Commands {#basic-commands}

### General Commands

```bash
# Version information
docker version
docker -v
docker --version

# System information
docker info
docker --help

# Login to Docker Hub
docker login

# System management
docker stats                    # Resource usage
docker system df                # Disk usage
docker system prune             # Remove unused data
```

---

## Docker Images {#docker-images}

### What are Images?
A Docker image is a lightweight, standalone, executable package that includes everything needed to run a piece of software.

### Image Commands

```bash
# List images
docker images
docker images -q                # Show only IDs
docker images -f "dangling=false"  # Filter non-dangling images

# Pull images
docker pull <image-name>
docker pull <image-name:version>
docker pull nginx

# Remove images
docker rmi <image-id>
docker rmi $(docker images -q)  # Remove all images

# Image history
docker history <image-name/id>
```

### How to Pull an Image

```bash
# Default (latest version)
docker pull nginx

# Specific version
docker pull nginx:1.14.0

# Verify
docker images
```

### Run Container from Image

```bash
# Basic run
docker run nginx

# Run with options
docker run -d -p 80:80 nginx
# -d: detached mode
# -p: port mapping (host:container)
```

---

## Docker Containers {#docker-containers}

### What are Containers?
Containers are running instances of Docker Images.

### Container Lifecycle

```bash
# Create container (stopped state)
docker container create <image>

# Run container
docker run <image-name>
docker run --name MyUbuntu -it ubuntu bash
docker run -d -p 80:80 nginx

# List containers
docker ps                       # Running containers
docker ps -a                    # All containers
docker ps -q                    # Only IDs

# Start/Stop containers
docker start <container-name/id>
docker stop <container-name/id>
docker stop $(docker ps -a -q)  # Stop all

# Pause/Unpause
docker pause <container-name/id>
docker unpause <container-name/id>

# Container details
docker top <container-name/id>
docker stats <container-name/id>
docker inspect <container-name/id>

# Attach to container
docker attach <container-name/id>

# Kill container
docker kill <container-name/id>

# Remove containers
docker rm <container-name/id>
docker rm $(docker ps -a -q)    # Remove all
docker container prune          # Remove stopped containers
```

### Container Tips
- Containers are isolated environments
- Multiple containers can run from same image
- Containers share host OS kernel
- Data doesn't persist after container removal (unless using volumes)

---

## Dockerfile {#dockerfile}

### What is Dockerfile?
A text file with instructions to build a Docker image. It automates Docker image creation.

### Basic Dockerfile Instructions

```dockerfile
# Base image
FROM node:14.17.6

# Set working directory
WORKDIR /www

# Copy package.json
COPY ./package.json ./package.json

# Install dependencies
RUN npm install

# Copy application files
COPY . .

# Expose ports
EXPOSE 80
EXPOSE 3000

# Run command
CMD ["npm", "start"]
```

### Key Instructions

**FROM** - Specifies base image
**WORKDIR** - Sets working directory
**COPY** - Copies files from host to image
**RUN** - Executes commands during build
**EXPOSE** - Documents ports
**CMD** - Default command to run

### Building Images from Dockerfile

```bash
# Step 1: Create Dockerfile
touch Dockerfile

# Step 2: Add instructions to Dockerfile

# Step 3: Build image
docker build -t <image-name:tag> <directory>
docker build -t myapp:1.0 .

# Step 4: Run container from image
docker run <image-name>
```

### Example: Simple Nginx App

```dockerfile
FROM nginx
COPY index.html /usr/share/nginx/html
```

```bash
# Build
docker build -t myapp .

# Run
docker run -d -p 8080:80 myapp
```

---

## Docker Compose {#docker-compose}

### What is Docker Compose?
A tool for defining and running multi-container Docker applications using YAML files.

### Why Use Docker Compose?
- Define multiple services in one file
- Start all services: `docker-compose up`
- Stop all services: `docker-compose down`
- Scale services easily
- Manage complex applications

### Installation

```bash
# Check if installed (included with Docker Desktop)
docker-compose -v

# Install via pip (alternative)
pip install -U docker-compose
```

### Creating docker-compose.yml

**Step 1:** Create file `docker-compose.yml`

```yaml
version: '3.8'

services:
  web:
    image: nginx
    ports:
      - "80:80"
  
  database:
    image: postgres
    environment:
      POSTGRES_PASSWORD: example
```

**Step 2:** Validate file

```bash
docker-compose config
```

**Step 3:** Run services

```bash
docker-compose up -d
# -d: detached mode
```

**Step 4:** Stop services

```bash
docker-compose down
```

### Scaling Services

```bash
docker-compose up -d --scale database=4
```

### Docker Compose Commands

```bash
docker-compose up          # Start services
docker-compose up -d       # Start in background
docker-compose down        # Stop and remove
docker-compose ps          # List services
docker-compose logs        # View logs
docker-compose config      # Validate config
```

---

## Docker Volumes {#docker-volumes}

### What are Volumes?
Volumes are the preferred mechanism for persisting data generated by and used by Docker containers.

### Why Use Volumes?

**Benefits:**
- Decouple container from storage
- Share data among different containers
- Data persists after container deletion
- Not tightly coupled to host machine

**Problem Without Volumes:**
- Data doesn't persist when container stops
- Data is tightly coupled to container
- Can't easily move data

### Volume Types

**1. Named Volumes**
- Managed by Docker
- Stored in Docker-managed location
- Best practice for data persistence

**2. Anonymous Volumes**
- No explicit name
- Created automatically

**3. Bind Mounts**
- Stored anywhere on host system
- Referenced by full path
- Can be modified by non-Docker processes

### Volume Commands

```bash
# Get volume information
docker volume

# Create volume
docker volume create <volume-name>
docker volume create myvol1

# List volumes
docker volume ls

# Inspect volume
docker volume inspect <volume-name>

# Remove volume
docker volume rm <volume-name>

# Remove unused volumes
docker volume prune
```

### Using Volumes with Containers

**Named Volume:**
```bash
docker run --name MyJenkins1 \
  -v myvol1:/var/jenkins_home \
  -p 8080:8080 -p 50000:50000 jenkins
```

**Bind Mount:**
```bash
docker run --name MyJenkins3 \
  -v /Users/raghav/Desktop/Jenkins_Home:/var/jenkins_home \
  -p 9191:8080 -p 40000:50000 jenkins
```

**Share Volume Between Containers:**
```bash
# Container 1
docker run --name MyJenkins1 \
  -v myvol1:/var/jenkins_home \
  -p 8080:8080 -p 50000:50000 jenkins

# Container 2 (shares same volume)
docker run --name MyJenkins2 \
  -v myvol1:/var/jenkins_home \
  -p 9090:8080 -p 60000:50000 jenkins
```

### Volume Key Points
- Volumes persist even when container is removed
- Multiple containers can mount same volume
- Volumes are managed by Docker
- Isolated from host core functionality
- Support volume drivers for remote/cloud storage

---

## Docker Swarm {#docker-swarm}

### What is Docker Swarm?
A tool for container orchestration - managing and controlling multiple Docker containers as a single service.

### Why Use Docker Swarm?

**Orchestration Benefits:**
- Health check on every container
- Ensure containers are up on all systems
- Scale containers based on load
- Deploy updates/changes to all containers

**Alternatives:**
- Docker Swarm
- Kubernetes
- Apache Mesos

### Swarm Concepts

**Swarm:** Group of machines running Docker joined into a cluster

**Nodes:**
- Manager Node: Controls the swarm
- Worker Node: Executes tasks

### Prerequisites
- Docker 1.13 or higher
- Docker Machine

### Setting Up Docker Swarm

**Step 1: Create Docker Machines**
```bash
# Create manager
docker-machine create --driver virtualbox manager1

# Create workers
docker-machine create --driver virtualbox worker1
docker-machine create --driver virtualbox worker2

# List machines
docker-machine ls

# Get IP
docker-machine ip manager1
```

**Step 2: SSH to Manager**
```bash
docker-machine ssh manager1
```

**Step 3: Initialize Swarm**
```bash
# On manager node
docker swarm init --advertise-addr <MANAGER_IP>

# List nodes
docker node ls
```

**Step 4: Add Workers**
```bash
# On manager - get join command
docker swarm join-token worker

# Copy output and run on worker machines
docker swarm join --token <TOKEN> <MANAGER_IP>:2377

# Verify on manager
docker node ls
```

**Step 5: Get Manager Token (if needed)**
```bash
docker swarm join-token manager
```

### Managing Swarm

**Create Service:**
```bash
docker service create --replicas 3 \
  -p 80:80 --name serviceName nginx

# Check status
docker service ls
docker service ps serviceName
```

**Scale Service:**
```bash
docker service scale serviceName=5
```

**Update Service:**
```bash
docker service update --image nginx:1.14.0 serviceName
```

**Inspect Nodes:**
```bash
docker node inspect nodename
docker node inspect self
docker node inspect worker1
```

**Drain Node (Maintenance):**
```bash
docker node update --availability drain worker1
```

**Remove Service:**
```bash
docker service rm serviceName
```

**Leave Swarm:**
```bash
docker swarm leave
```

**Manage Machines:**
```bash
docker-machine stop machineName
docker-machine rm machineName
```

---

## AWS Deployment {#aws-deployment}

### Setup Docker on AWS EC2

**Prerequisites:**
- AWS account
- EC2 Linux instance launched

### Installation Steps

```bash
# 1. Update system
sudo yum update -y

# 2. Install Docker
sudo amazon-linux-extras install docker

# 3. Check version
sudo docker --version

# 4. Start Docker service
sudo service docker start

# 5. Verify Docker is running
sudo docker info

# 6. Add user to docker group
sudo usermod -aG docker ec2-user
# Logout and reconnect

# 7. Test installation
docker run hello-world
```

### Deploy Application on AWS

```bash
# Pull image
docker pull nginx

# Run container
docker run -d -p 80:80 nginx

# List containers
docker ps

# Stop all containers
docker stop $(docker ps -a -q)

# Remove all containers
docker rm $(docker ps -a -q)

# Remove all images
docker rmi $(docker images -q)

# Clean up
docker system prune

# Stop Docker
sudo service docker stop
```

### Security Group Configuration

**For accessing containerized apps:**
1. Open AWS EC2 Console
2. Select instance
3. Click "Security" tab
4. Edit inbound rules
5. Add rule:
   - Type: Custom TCP
   - Protocol: TCP
   - Port: 8080 (or your port)
   - Source: 0.0.0.0/0 (or specific IP)

**Access app:**
```
http://<Public_IP>:8080
```

---

## Practice Project {#practice-project}

### Build and Deploy Simple Web App

**Project Flow:**
```
Dockerfile → Docker Image → Docker Container → Access App
```

### Step-by-Step Implementation

**Step 1: Create Directory**
```bash
mkdir myapp
cd myapp
```

**Step 2: Create HTML File**
```bash
echo "Hello, world!" > index.html
```

**Step 3: Create Dockerfile**
```bash
touch Dockerfile
```

**Step 4: Edit Dockerfile**
```dockerfile
FROM nginx
COPY index.html /usr/share/nginx/html
```

**What this does:**
- Uses official nginx image as base
- Copies index.html to nginx directory

**Step 5: Build Image**
```bash
docker build -t myapp .
```

**Step 6: Run Container**
```bash
docker run -d -p 8080:80 myapp
```

**Step 7: Access Application**
- Local: `http://localhost:8080`
- AWS: `http://<Public_IP>:8080`

### Troubleshooting

**Permission Issues (Jenkins):**
```bash
# Use privileged mode
docker run --privileged ...

# Or change folder permissions
sudo chown 1000:1000 /path/to/your/folder
```

**AWS Port Access:**
Ensure security group allows inbound traffic on your port (8080, etc.)

---

## Quick Reference Commands

### Essential Operations

```bash
# Build & Run
docker build -t myapp .
docker run -d -p 8080:80 myapp

# List & Inspect
docker ps
docker images
docker inspect <container>

# Clean Up
docker stop $(docker ps -q)
docker rm $(docker ps -a -q)
docker rmi $(docker images -q)
docker system prune
docker volume prune
docker container prune

# Compose
docker-compose up -d
docker-compose down
docker-compose scale service=4

# Swarm
docker swarm init
docker service create
docker service scale
docker node ls
```

---

## Interview Prep - Key Topics

### Part 1: Fundamentals
- What is Docker
- How Docker works
- Virtualization vs Containerization
- Docker Architecture
- Advantages of Docker

### Part 2: Components
- Docker Images
- Docker Containers
- Dockerfile
- Docker Compose

### Key Concepts to Master
1. **Isolation** - How containers provide isolation
2. **Persistence** - Using volumes for data
3. **Orchestration** - Managing multiple containers
4. **Networking** - Container communication
5. **Scaling** - Handling increased load

---

## Best Practices

1. **Use .dockerignore** - Exclude unnecessary files
2. **Multi-stage builds** - Reduce image size
3. **Use volumes** - For persistent data
4. **Named containers** - Easy management
5. **Port mapping** - Proper network configuration
6. **Resource limits** - Prevent resource hogging
7. **Security groups** - Proper AWS configuration
8. **Regular cleanup** - Use prune commands
9. **Version tags** - Don't rely only on 'latest'
10. **Compose for multi-container** - Better organization

---

## Additional Resources

- Docker Hub: https://hub.docker.com
- Docker Documentation: https://docs.docker.com
- Docker Swarm Guide: https://docs.docker.com/guides/swarm-deploy
- Docker Compose: https://docs.docker.com/compose
- Docker Volumes: https://docs.docker.com/storage/volumes

---

*Remember: Every like and subscription motivates continued learning!*