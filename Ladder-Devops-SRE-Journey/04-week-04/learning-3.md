# Docker Tutorial - Complete Guide

## Overview
This is a comprehensive half-day Docker tutorial covering fundamental concepts from containerization basics to practical development workflows. The instructor (Jerome) covers both theoretical concepts and hands-on demonstrations using virtual machines provided to participants.

---

## Part 1: Docker Fundamentals

### 1.1 Introduction to Docker

**Why Docker?**
- Software development has evolved from monolithic applications to microservices
- Traditional deployment: months-long cycles, single large applications
- Modern approach: smaller components, rapid iteration (weeks/months), horizontal scaling
- Deployment becomes complex with many components across many servers ("matrix from hell")

**The Container Analogy**
- Inspired by physical shipping containers
- Separation of concerns: developers package applications, operators run them
- Developers don't worry about deployment environment
- Operators don't worry about application contents

**Real-World Impact**
- European bank: 9 months → 15 minutes time-to-market
- CI/CD improvements: 50% reduction in test suite execution time
- Solves dependency hell problems

---

### 1.2 Docker History

**Timeline**
- **1972**: IBM VM/370 - first hypervisor (containers aren't new!)
- **2008**: dotCloud started (PaaS platform)
- **2012**: Container engine became complex (100+ microservices)
- **2013**: Docker announced at PyCon Santa Clara
- Focus shifted from dotCloud to Docker
- Evolved from single engine to full platform (Compose, Machine, Swarm)

---

### 1.3 Setting Up Docker

**Installation Options**
- **Linux**: Use upstream packages (recommended over distro packages)
  - Faster updates
  - Better packaging consistency
- **Mac/Windows**: Docker Toolbox
  - Includes VirtualBox + lightweight VM
  - Wrappers for seamless experience
  - Docker for Mac/Windows (newer, better integration)

**Security Considerations**
- Docker API access = root equivalent access
- By default, only root can access Docker socket
- Users can be added to `docker` group for non-root access
- Tutorial VMs have docker group pre-configured

---

## Part 2: Working with Containers

### 2.1 Running Your First Container

**Hello World Example**
```bash
docker run busybox echo hello world
```

**What happens:**
1. Docker searches for `busybox` image locally
2. If not found, pulls from Docker Hub
3. Executes the command in the container
4. Subsequent runs use cached image (instant execution)

**BusyBox**: Minimal Unix toolkit used in embedded systems

---

### 2.2 Interactive Containers

**Starting an Interactive Ubuntu Container**
```bash
docker run -it ubuntu
```

**Flags explained:**
- `-i`: Interactive (stdin/stdout)
- `-t`: Terminal emulation

**Key Observations:**
- Container has its own isolated process space
- Different package set from host (demonstrated with `dpkg -l | wc -l`)
- Ubuntu container can run on any Linux host (CentOS, CoreOS, etc.)

---

### 2.3 Installing Software in Containers

**Example: Installing figlet**
```bash
docker run -it ubuntu
apt-get update
apt-get install figlet
figlet hello
exit
```

**Important Concept:**
- After exiting and restarting a new container, figlet is gone
- Containers are ephemeral by default
- This encourages building new images rather than modifying running containers

**Philosophy: Pets vs. Cattle**
- **Pets**: Unique servers with individual configurations (difficult to replace)
- **Cattle**: Identical servers created from images (easily replaceable)
- Docker encourages "cattle" approach for containers

---

### 2.4 Background Containers

**Running Containers in Background**
```bash
docker run -d jpetazzo/clock
```

**Managing Background Containers**
```bash
docker ps                    # List running containers
docker ps -l                 # Last started container
docker ps -q                 # Container IDs only
docker ps -lq                # Combine flags
docker logs <container_id>   # View container output
docker logs -f <container_id> # Follow logs (like tail -f)
docker logs --tail 10 -f <container_id> # Last 10 lines + follow
```

**Stopping Containers**
```bash
docker stop <container_id>   # Graceful stop (sends TERM, waits 10s, then KILL)
docker kill <container_id>   # Immediate stop (sends KILL)
```

**Viewing All Containers**
```bash
docker ps -a                 # Including stopped containers
```

---

### 2.5 Container Lifecycle

**Restarting Containers**
```bash
docker start <container_id>  # Restart stopped container
docker attach <container_id> # Attach to running container
```

**Detaching from Containers**
- Default sequence: `Ctrl+P`, `Ctrl+Q`
- Returns to host while container continues running
- Can reattach later

**Important Warning:**
- Use `docker logs` to view output, not `docker attach`
- `Ctrl+C` in attached session stops the container!
- `docker logs` is safer for viewing output

---

## Part 3: Docker Images

### 3.1 Understanding Images vs Containers

**Key Concepts:**
- **Image**: Read-only collection of files + metadata (like a class)
- **Container**: Running instance of an image (like an object)
- **Layers**: Images composed of stackable layers
  - Base layer (e.g., CentOS)
  - + Java installation layer
  - + Tomcat layer
  - + Application dependencies
  - + Application code
  - + Configuration

**Benefits of Layers:**
- Efficient updates (only changed layers rebuild)
- Layer reuse between images
- Reduced bandwidth (only new layers transferred)
- Disk space optimization

---

### 3.2 Image Namespaces

**Three Types:**

1. **Official Images** (root namespace)
   ```bash
   docker run ubuntu
   docker run busybox
   ```
   - Vetted by Docker
   - Maintained by official sources

2. **User Images** (user namespace)
   ```bash
   docker run jpetazzo/clock
   ```
   - Format: `username/imagename`
   - Anyone can publish

3. **Self-hosted Images** (custom registries)
   ```bash
   docker run localhost:5000/wordpress
   ```
   - Format: `hostname:port/imagename`

---

### 3.3 Working with Images

**List Local Images**
```bash
docker images
```

**Search for Images**
```bash
docker search django
docker search zookeeper
```

**Pull Images**
```bash
docker pull ubuntu          # Latest version
docker pull python:2.7      # Specific version
docker pull python:2        # Latest 2.x version
```

**Image Tags:**
- `latest`: Default tag (like `master` in Git)
- Specific versions: `python:3.5.1`, `ubuntu:16.04`
- **Recommendation**: Use specific tags in production for reproducibility

---

### 3.4 Docker Hub

**Features:**
- Central repository for Docker images
- Search functionality
- Automated builds
- Image documentation
- Trust mechanisms

**Trust Considerations:**
- Official images: Vetted and maintained
- User images: Like downloading random packages
- Same security considerations as any package manager (pip, npm, gem)

**Viewing Image Details:**
```bash
docker inspect <image_name>
docker history <image_name>  # View layers
```

---

## Part 4: Building Images

### 4.1 Manual Image Creation

**Docker Commit Method**
```bash
# Start container and make changes
docker run -it ubuntu
apt-get update
apt-get install figlet
exit

# Review changes
docker diff <container_id>

# Commit to new image
docker commit <container_id>

# Tag the image
docker tag <image_id> figlet
```

**Limitations:**
- Manual process
- Not reproducible
- No version control
- Difficult to share process

---

### 4.2 Dockerfile Basics

**Creating a Dockerfile**
```dockerfile
FROM ubuntu
RUN apt-get update
RUN apt-get install figlet
```

**Building from Dockerfile**
```bash
mkdir myimage
cd myimage
vi Dockerfile  # Create the above content
docker build -t figlet .
```

**Build Process:**
1. Sends build context to Docker daemon
2. Executes each instruction
3. Creates layer for each instruction
4. Uses cache for unchanged instructions

**Important**: Create separate directory to avoid sending unnecessary files to daemon

---

### 4.3 Advanced Dockerfile Instructions

**CMD - Default Command**
```dockerfile
FROM ubuntu
RUN apt-get update
RUN apt-get install figlet
CMD figlet -f script hello
```

Usage:
```bash
docker run figlet              # Executes default command
docker run figlet bash         # Overrides default command
```

**ENTRYPOINT - Fixed Command**
```dockerfile
FROM ubuntu
RUN apt-get update
RUN apt-get install figlet
ENTRYPOINT ["figlet", "-f", "script"]
```

Usage:
```bash
docker run figlet              # Runs: figlet -f script
docker run figlet Python       # Runs: figlet -f script Python
```

**Combining ENTRYPOINT and CMD**
```dockerfile
FROM ubuntu
RUN apt-get update
RUN apt-get install figlet
ENTRYPOINT ["figlet", "-f", "script"]
CMD ["hello"]
```

- CMD provides default parameters
- Parameters can be overridden
- Both must use JSON syntax when combined

**Override ENTRYPOINT:**
```bash
docker run --entrypoint bash -it figlet
```

---

### 4.4 Essential Dockerfile Instructions

**FROM** - Base Image
```dockerfile
FROM ubuntu
FROM python:3.5
FROM centos:7
```

**RUN** - Execute Commands
```dockerfile
# Shell form
RUN apt-get update

# Exec form (no shell processing)
RUN ["apt-get", "install", "figlet"]
```

**COPY** - Add Files
```dockerfile
COPY hello.py /
COPY . /app
```
- Files relative to build context
- Detects file changes for cache invalidation

**EXPOSE** - Declare Ports
```dockerfile
EXPOSE 80 443
EXPOSE 53/tcp 53/udp
```

**WORKDIR** - Set Working Directory
```dockerfile
WORKDIR /app
RUN make install
```

**ENV** - Environment Variables
```dockerfile
ENV DATABASE_URL postgres://localhost/mydb
```

**USER** - Change User
```dockerfile
USER nobody
```

**VOLUME** - Declare Volume
```dockerfile
VOLUME /var/lib/postgresql/data
```

---

### 4.5 Build Optimization

**Bad Practice:**
```dockerfile
FROM python
COPY . /app
WORKDIR /app
RUN pip install -r requirements.txt
EXPOSE 5000
CMD python app.py
```
Problem: Every code change rebuilds dependencies (slow!)

**Good Practice:**
```dockerfile
FROM python
COPY requirements.txt /app/
WORKDIR /app
RUN pip install -r requirements.txt
COPY . /app
EXPOSE 5000
CMD python app.py
```
Benefits: Dependencies cached, only code layer rebuilds

**Layer Collapsing:**
```dockerfile
# Instead of multiple RUN commands
RUN apt-get update
RUN apt-get install package1
RUN apt-get install package2

# Combine to reduce layers
RUN apt-get update && \
    apt-get install -y package1 package2 && \
    apt-get clean
```

---

### 4.6 Python Application Example

**Complete Dockerfile:**
```dockerfile
FROM python
COPY requirements.txt /app/
WORKDIR /app
RUN pip install -r requirements.txt
COPY . /app
EXPOSE 5000
CMD ["python", "app.py"]
```

**Building and Running:**
```bash
docker build -t myapp .
docker run -p 8000:5000 myapp
```

---

## Part 5: Container Networking

### 5.1 Port Mapping

**Automatic Port Mapping:**
```bash
docker run -d -P nginx
```
- `-P`: Publish all exposed ports to random high ports
- Check with: `docker ps`

**Manual Port Mapping:**
```bash
docker run -d -p 80:80 nginx          # Host:Container
docker run -d -p 8000:80 nginx        # Custom host port
docker run -d -p 8080:80 -p 8443:443 nginx  # Multiple ports
```

**Why Port Mapping?**
- IPv4 address scarcity
- Most servers have single IP address
- Multiple services need different ports
- Prevents port conflicts between containers

---

### 5.2 Network Drivers

**Bridge Driver (Default)**
- Each container gets private IP
- Connected to virtual bridge (docker0)
- NAT for outbound connections
- Port mapping via iptables

**None Driver**
```bash
docker run --net none -it alpine sh
```
- No network connectivity
- Only loopback interface
- Use case: Network isolation, testing

**Host Driver**
```bash
docker run --net host -it alpine sh
```
- Shares host's network stack
- No network isolation
- High performance (bypasses virtual networking)
- Use cases: High throughput, VoIP, gaming

**Container Driver**
```bash
docker run --net container:<container_id> -it alpine sh
```
- Shares network stack with another container
- Same IP, ports, routes
- Use cases: VPN clients, network tools, sidecars

---

### 5.3 Container Network Model (CNM)

**Creating Networks:**
```bash
docker network create dev
docker network create prod
docker network ls
```

**Using Networks:**
```bash
docker run --net dev -d --name search elasticsearch
docker run --net dev -it centos
ping search                    # Works! DNS resolution
curl search:9200              # Access service by name
```

**Key Features:**
- Automatic DNS resolution
- Container names as hostnames
- Network isolation
- Multiple networks per container possible

---

### 5.4 Multi-Container Applications

**Example: Web App + Redis**
```bash
# Create network
docker network create dev

# Start Redis
docker run --net dev -d --name redis redis

# Start web application
docker run --net dev -d -P jpetazzo/training-wheels
```

Application connects to Redis using hostname `redis`

**Network Aliases:**
```bash
docker run --net dev -d --net-alias search elasticsearch
docker run --net dev -d --net-alias search elasticsearch
# Multiple containers respond to 'search' name
```

**Benefits:**
- No hardcoded IPs
- Easy service discovery
- Environment parity (dev/staging/prod)
- Network isolation between environments

---

### 5.5 Legacy: Links (Deprecated)

**Old Method:**
```bash
docker run -d --name redis redis
docker run -d --link redis:redis webapp
```

**Why Avoid:**
- Order dependency (server must start first)
- Less flexible than networks
- Replaced by user-defined networks

---

## Part 6: Storage and Volumes

### 6.1 Volume Basics

**Purpose:**
- Persist data beyond container lifecycle
- Share data between containers
- Separate data from container filesystem
- Performance optimization

**Declaring Volumes in Dockerfile:**
```dockerfile
VOLUME /var/lib/postgresql/data
```

---

### 6.2 Bind Mounts

**Sharing Host Directory with Container:**
```bash
docker run -v /host/path:/container/path image
docker run -v $(pwd):/app myapp
```

**Development Workflow Example:**
```bash
# Clone application
git clone https://github.com/jpetazzo/namer
cd namer

# Run with live code reload
docker run -d -v $(pwd):/src -p 80:9292 jpetazzo/namer
```

**Benefits:**
- Edit code on host, changes reflect immediately
- No rebuild required
- Use familiar local tools
- Fast iteration cycle

---

### 6.3 Special Use Cases

**Docker-in-Docker (Control Socket Sharing):**
```bash
docker run -it -v /var/run/docker.sock:/var/run/docker.sock docker
```

**Use cases:**
- CI/CD systems (Jenkins, GitLab CI)
- Build automation
- Container management tools

**Warning:** Full Docker API access = root equivalent

---

### 6.4 Volume Plugins

**Available Plugins:**
- Cloud storage (AWS EBS, Azure Disk)
- Network storage (NFS, GlusterFS)
- Storage appliances (NetApp, Pure Storage)
- Distributed storage (Ceph, Flocker)

**Usage:**
```bash
docker volume create --driver <plugin> myvolume
docker run -v myvolume:/data myapp
```

---

## Part 7: Development Workflow

### 7.1 Local Development Setup

**Goal:** Clean, reproducible development environment

**Example: Ruby Application**

1. **Clone repository**
   ```bash
   git clone https://github.com/jpetazzo/namer
   cd namer
   ```

2. **Run with bind mount**
   ```bash
   docker run -d \
     -v $(pwd):/src \
     -p 80:9292 \
     jpetazzo/namer
   ```

3. **Edit code**
   ```ruby
   # company_name_generator.rb
   # Change: color: 'blue'
   # To:     color: 'red'
   ```

4. **Reload browser** - Changes visible immediately!

---

### 7.2 Docker Compose

**Purpose:**
- Define multi-container applications
- Simplify complex docker run commands
- Version control infrastructure
- Easy onboarding: `docker-compose up`

**docker-compose.yml Example:**
```yaml
version: '3'
services:
  www:
    build: .
    ports:
      - "80:9292"
    volumes:
      - .:/src
  
  redis:
    image: redis
```

**Common Commands:**
```bash
docker-compose up         # Start all services
docker-compose up -d      # Start in background
docker-compose ps         # List services
docker-compose logs       # View logs
docker-compose stop       # Stop services
docker-compose down       # Stop and remove containers
docker-compose build      # Rebuild images
```

---

### 7.3 Complete Workflow Example

**Training Wheels Application:**

1. **Clone**
   ```bash
   git clone https://github.com/jpetazzo/training-wheels
   cd training-wheels
   ```

2. **Compose File Structure:**
   ```yaml
   services:
     www:
       build: .
       ports:
         - "80:5000"
       volumes:
         - .:/app
     
     redis:
       image: redis
   ```

3. **Start Stack**
   ```bash
   docker-compose up -d
   ```

4. **Result:**
   - Web application on port 80
   - Connected to Redis automatically
   - Code changes reflect immediately
   - All dependencies pre-installed

---

## Part 8: Best Practices

### 8.1 Dockerfile Best Practices

**DO:**
- Use official base images when possible
- Pin specific versions in production
- Minimize layers (combine RUN commands)
- Order instructions by change frequency (least → most)
- Use `.dockerignore` to exclude files
- Clean up in same layer (apt-get clean)
- Use COPY instead of ADD (unless you need ADD's features)

**DON'T:**
- Copy entire context if not needed
- Install unnecessary packages
- Run processes as root (use USER)
- Store secrets in images
- Use latest tag in production

---

### 8.2 Security Considerations

**Container Isolation:**
- Not perfect (kernel shared with host)
- Containers can be escaped (rare but possible)
- Use trusted images
- Scan images for vulnerabilities
- Limit container capabilities

**API Access:**
- Docker API = root access
- Protect Docker socket
- Use TLS for remote access
- Consider Docker authorization plugins

---

### 8.3 Production Considerations

**Image Management:**
- Use private registries for proprietary code
- Implement CI/CD for image building
- Scan images regularly
- Tag meaningfully (semantic versioning)

**Resource Limits:**
```bash
docker run --memory 512m --cpus 0.5 myapp
```

**Restart Policies:**
```bash
docker run --restart always myapp
docker run --restart on-failure:5 myapp
```

**Health Checks:**
```dockerfile
HEALTHCHECK --interval=30s --timeout=3s \
  CMD curl -f http://localhost/ || exit 1
```

---

## Part 9: Troubleshooting

### 9.1 Common Issues

**Image Build Fails:**
- Check build context size
- Verify Dockerfile syntax
- Check network connectivity
- Review error messages in build output

**Container Won't Start:**
```bash
docker logs <container>
docker inspect <container>
docker events  # Real-time event stream
```

**Networking Issues:**
```bash
docker network inspect bridge
docker port <container>
docker exec <container> ping <target>
```

**Performance Issues:**
```bash
docker stats                    # Resource usage
docker system df                # Disk usage
docker system prune             # Clean up
```

---

### 9.2 Useful Commands

**Inspection:**
```bash
docker inspect <container>
docker inspect --format '{{.State.Running}}' <container>
docker diff <container>          # File system changes
docker top <container>           # Running processes
```

**Cleanup:**
```bash
docker container prune           # Remove stopped containers
docker image prune              # Remove dangling images
docker system prune -a          # Remove everything unused
```

**Debugging:**
```bash
docker exec -it <container> bash  # Get shell in running container
docker logs --since 1h <container>  # Recent logs
docker cp <container>:/path /host/path  # Copy files
```

---

## Part 10: Next Steps

### 10.1 Advanced Topics (Covered in Afternoon Session)

- Docker Swarm (clustering)
- Overlay networks (multi-host)
- Service discovery
- Load balancing
- Rolling updates
- Secrets management
- Stack deployment

---

### 10.2 Learning Resources

**Official Documentation:**
- https://docs.docker.com
- https://docs.docker.com/compose
- Comprehensive prompt engineering guide

**Tutorial Materials:**
- Slides: http://container.training
- Full PDF with additional content available
- GitHub repositories with examples

**Community:**
- Docker Forums
- Stack Overflow
- Docker Community Slack
- Conference tutorials

---

## Summary

### Key Takeaways

1. **Containers ≠ VMs**: Lighter, faster, more portable
2. **Images are layered**: Efficient storage and transfer
3. **Dockerfile = Recipe**: Reproducible, version-controlled builds
4. **Compose = Orchestration**: Multi-container applications made easy
5. **Volumes = Persistence**: Data survives container lifecycle
6. **Networks = Communication**: Isolated, secure container connectivity
7. **Workflow = Speed**: Fast iteration, easy onboarding

### Docker Philosophy

- **Immutable infrastructure**: Rebuild, don't modify
- **Cattle, not pets**: Containers are disposable
- **One process per container**: Clear separation of concerns
- **Environment parity**: Same container dev → prod
- **Microservices-friendly**: Perfect for distributed architectures

### The Docker Workflow

```
Code → Dockerfile → Build → Test → Push → Deploy → Scale
  ↑                                                    ↓
  └────────────── Iterate ← Monitor ← ────────────────┘
```

---

## Appendix: Command Reference

### Container Lifecycle
```bash
docker run          # Create and start
docker start        # Start stopped container
docker stop         # Graceful stop
docker kill         # Force stop
docker restart      # Restart
docker rm           # Remove container
docker rename       # Rename container
```

### Image Management
```bash
docker build        # Build from Dockerfile
docker pull         # Download image
docker push         # Upload image
docker images       # List images
docker rmi          # Remove image
docker tag          # Tag image
docker history      # View layers
```

### Information & Logs
```bash
docker ps           # List running containers
docker ps -a        # List all containers
docker logs         # View logs
docker inspect      # Detailed info (JSON)
docker stats        # Resource usage
docker top          # Running processes
```

### Networking
```bash
docker network create    # Create network
docker network ls        # List networks
docker network inspect   # Network details
docker network connect   # Connect container to network
docker network disconnect  # Disconnect from network
```

### Compose
```bash
docker-compose up        # Start services
docker-compose down      # Stop and remove
docker-compose ps        # List services
docker-compose logs      # View logs
docker-compose build     # Rebuild services
docker-compose exec      # Execute in service
```

---

**Tutorial Duration**: Half-day (approximately 4 hours)  
**Instructor**: Jerome (jpetazzo)  
**Format**: Lecture + Hands-on Labs  
**Provided**: Virtual machines with Docker pre-installed  

**Feedback**: Survey link provided at end of session