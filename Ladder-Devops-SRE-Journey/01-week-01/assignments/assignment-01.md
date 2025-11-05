# Assignment 01: Role Evolution Research  
**Due:** November 1, 2025  
**Objective:** Understand the historical context and distinctions between infrastructure-adjacent roles.

---

## Deliverable

### 1. SysAdmin (Pre-2000s): The Gatekeepers

**Responsibilities:**
System administrators were the sole custodians of production infrastructure. They manually provisioned servers, managed backups, configured networks, applied security patches, and responded to incidents. Everything required direct server access and manual intervention.

**Tools:**
- **Shell scripts** (bash, perl) for automation
- **vi/vim** for text editing configurations
- **rsync** for file synchronization
- **cron** for scheduled tasks
- **SSH** for remote access
- **Apache/Nginx** for web serving

**Pain Points:**
- **Manual, error-prone processes**: Deployments required extensive checklists and could take hours or days
- **"Works on my machine" syndrome**: Inconsistencies between dev and prod environments
- **Slow release cycles**: Monthly or quarterly releases were standard
- **Siloed teams**: Development threw code "over the wall" to operations
- **Tribal knowledge**: Documentation was sparse; knowledge lived in people's heads
- **Alert fatigue**: Pager duty with no automated remediation

---

### 2. DevOps (2009–2015): Breaking Down Silos

**The Origin Story:**
DevOps emerged from Patrick Debois's frustration with the dev/ops divide at the 2009 Velocity Conference. After John Allspaw and Paul Hammond's talk "10+ Deploys Per Day: Dev and Ops Cooperation at Flickr," Debois organized the first DevOpsDays in Ghent, Belgium. The movement emphasized **collaboration over conflict**.

**Core Philosophy - CALMS Framework:**
- **Culture**: Shared responsibility, blameless postmortems, psychological safety
- **Automation**: CI/CD pipelines, infrastructure as code, automated testing
- **Lean**: Eliminate waste, continuous improvement, small batch sizes
- **Measurement**: Metrics-driven decisions (DORA metrics: deployment frequency, lead time, MTTR, change failure rate)
- **Sharing**: Knowledge transfer, open communication, breaking down silos

**Key Tools:**
- **Jenkins/GitLab CI**: Continuous integration and deployment
- **Docker**: Containerization for consistency across environments
- **Ansible/Chef/Puppet**: Configuration management and infrastructure as code
- **Git**: Version control for everything (including infrastructure)
- **Nagios/Prometheus**: Monitoring and alerting

**Fundamental Shift:**
DevOps wasn't a role but a **cultural movement**. It united developers and operations through shared tools, metrics, and goals. The focus shifted from "keeping servers running" to "delivering value to customers rapidly and reliably."

---

### 3. SRE (2016–Present): Engineering Reliability

**Google SRE Book (2016):**
Google codified their approach to operations as Site Reliability Engineering, treating operations as a software problem. SREs are software engineers who build systems to run systems.

**Core Concepts:**
- **Error Budgets**: Accept that 100% uptime is impossible and expensive. If you promise 99.9% uptime, you have a 0.1% error budget to spend on innovation. Deploys stop when the budget is exhausted.
- **Toil**: Repetitive, manual, automatable work that scales linearly with service growth. SREs limit toil to <50% of their time, spending the rest on engineering projects.
- **SLOs (Service Level Objectives)**: User-centric reliability targets (e.g., "99.9% of API requests complete in <200ms"). SLIs measure performance, SLAs are contracts.
- **On-call rotation**: Blameless postmortems, incident response playbooks

**SRE vs DevOps:**
- **SRE is prescriptive**, DevOps is philosophical. SRE provides specific practices (error budgets, SLOs) to achieve DevOps principles.
- **SRE focuses on reliability**, DevOps on delivery speed. SRE balances velocity with stability.
- SRE is a **job title**; DevOps is a **culture**. As Google says: "SRE is what happens when you ask a software engineer to design an operations team."

---

### 4. Cloud & Platform Engineering (2020–2025): The Developer Experience Era

**The Shift:**
As cloud-native architectures (microservices, Kubernetes) exploded in complexity, developers spent more time wrestling with infrastructure than writing business logic. Platform Engineering emerged to provide **golden paths** for developers.

**Key Concepts:**
- **Paved Road Philosophy**: Offer opinionated, self-service platforms that make the right thing the easy thing. Developers get guardrails, not barriers.
- **Internal Developer Portals (IDPs)**: Single pane of glass for service catalogs, deployment pipelines, docs, and metrics
- **Kubernetes Everywhere**: Container orchestration became the standard, but required abstraction

**Key Tools:**
- **Backstage** (Spotify): Open-source IDP for service catalogs
- **Crossplane**: Infrastructure orchestration using Kubernetes APIs
- **Argo CD**: GitOps continuous delivery for Kubernetes
- **Terraform/Pulumi**: Multi-cloud infrastructure as code
- **Helm**: Kubernetes package manager

**Platform Engineering vs DevOps/SRE:**
Platform teams **build products for internal developers**. They abstract away complexity, enforce standards, and measure success by developer productivity (time-to-first-deploy, cognitive load). It's "DevOps as a Product."

---

### 5. Personal Takeaway

**Which role resonates most?**
**Platform Engineering** aligns perfectly with my frontend background. Both focus on **user experience**—except my users are now developers, not end customers. Building intuitive interfaces for complex systems (whether React components or Kubernetes abstractions) requires the same empathy and design thinking.

**How my frontend skills translate:**
- **Component thinking**: Breaking complex UIs into reusable pieces mirrors building modular infrastructure platforms
- **Developer empathy**: Understanding pain points in frontend tooling (Webpack configs, anyone?) prepares me to design better platform experiences
- **Documentation obsession**: Good frontend libraries need great docs; so do internal platforms
- **API design**: Thinking about developer-facing APIs (both REST and platform abstractions) is already familiar territory
- **Feedback loops**: A/B testing UI changes is like measuring platform adoption metrics

The evolution from SysAdmin → DevOps → SRE → Platform Engineering shows a trend: **increasingly treating infrastructure as software** and **optimizing for developer productivity**. My frontend journey fits naturally into this narrative—I'm just shifting from building interfaces for users to building platforms for builders.

---

## Resources
- [The Evolution of DevOps – roadmap.sh](https://roadmap.sh/devops)
- [Google SRE Book](https://sre.google/sre-book/table-of-contents/)
- [What is Platform Engineering? – CNCF](https://www.cncf.io/blog/2023/06/26/what-is-platform-engineering/)
- [DevOps Topology – Matthew Skelton](https://web.devopstopologies.com/)

---
