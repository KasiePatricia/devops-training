# Docker roadmap
        - https://medium.com/@furkan.turkal/how-does-docker-actually-work-the-hard-way-a-technical-deep-diving-c5b8ea2f0422
        - https://docs.docker.com/get-started/

## Introduction
    - what are containers?
        - https://www.docker.com/resources/what-container/
    - Why do we need containers?
    - Bare metal vs VMs vs Containers
        - VMs - https://azure.microsoft.com/en-au/resources/cloud-computing-dictionary/what-is-a-virtual-machine
        - https://glossary.cncf.io/
    - Docker and OCI
        - The Open Container Initiative (OCI) is a Linux Foundation project which aims at creating industry standards for container formats and runtimes.
        - https://opencontainers.org/about/overview/
## Underlying technologies
  - https://www.youtube.com/watch?v=x1npPrzyKfs
  - https://www.youtube.com/watch?v=jodR236at_8 - very important
    - Namespace
        - https://docs.docker.com/engine/security/userns-remap/
        - https://man7.org/linux/man-pages/man7/namespaces.7.html
    - cgroups
        - https://www.youtube.com/watch?v=u1LeMndEk70
    - union filesystem
## Installation and setup
    - Docker desktop
## basics of docker 
## data persistance
  - https://docs.docker.com/get-started/docker-concepts/running-containers/persisting-container-data/
    - Ephemeral container filesystem - https://docs.docker.com/get-started/docker-concepts/running-containers/persisting-container-data/
    - Volumn mount
        - https://www.youtube.com/watch?v=p2PH_YPCsis
        - https://www.youtube.com/watch?v=r_LgmqejAkA
    - Bind mount
## using 3rd party container images
    - Database
        - https://www.youtube.com/watch?v=igc2zsOKPJs
        - https://docs.docker.com/guides/databases/
    - Commandline utilities
## building container images
    - Dockerfile
    - Efficient layer caching
## container registries
## running containers
## container security
## docker CLI
    - https://www.youtube.com/watch?v=bKFMS5C4CG0
## Developer experience
## Deploying containers

Bare Metal vs VM vs Containers
Bare metal runs applications directly on hardware with maximum performance but limited flexibility. 
VMs use hypervisors to run multiple OS instances with strong isolation but higher overhead. 
Containers share the host OS kernel, providing lightweight isolation with better resource efficiency than VMs while maintaining portability.