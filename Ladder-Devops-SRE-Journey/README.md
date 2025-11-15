# 🚀 My DevOps/SRE Learning Journey

> **Cohort 5 - Ladder Tech Mentorship Program**  
> **Duration:** 8 Weeks | **Theme:** Accelerate  
> **Focus:** DevOps & Site Reliability Engineering

---

## 👋 About Me

Hi, I'm **Kasie** – a software developer transitioning into DevOps and SRE. I have 2+ years of experience in frontend development and some backend work. This repository documents my 8-week journey from developer to DevOps engineer.

**Current Stack:** React, Next.js, NestJS, Node.js, Express, PostgreSQL, Docker  
**DevOps Goal:** Master the deployment lifecycle, infrastructure as code, and reliability practices

---

## 🎯 Program Goals

By the end of this 8-week mentorship, I aim to:

1. **Foundation (Week 1-4):** Deploy containerized applications with CI/CD automation
2. **Infrastructure (Week 5-6):** Provision cloud resources using Infrastructure as Code
3. **Reliability (Week 7-8):** Implement monitoring, logging, and incident response

---

## 📂 Repository Structure

```
devops-journey/
│
├── README.md                          # This file
├── MENTORSHIP_PLAN.md                 # Detailed 8-week plan
│
├── 00-getting-started/
│   ├── background.md                  # My career story & motivation
│   ├── goals.md                       # SMART goals defined with mentor
│   └── resources.md                   # Curated learning resources
│
├── 01-week-01/
│   ├── session-notes.md               # Week 1 session notes
│   ├── assignments/                   # Tasks from mentor
│   │   └── assignment-01.md
│   ├── learnings.md                   # Key takeaways
│   └── progress.md                    # What I accomplished
│
├── 02-week-02/
│   ├── session-notes.md
│   ├── assignments/
│   │     ├── assignment-02-git.md
│   │     └── assignment-02-pipeline.md
│   ├── learnings.md
│   └── progress.md
│
├── 03-week-03/
│   ├── session-notes.md
│   ├── assignments/
│   │   └── cicd-pipeline/
│   │       ├── .github/
│   │       │   └── workflows/
│   │       │       └── deploy.yml
│   │       └── setup-notes.md
│   ├── learnings.md
│   └── progress.md
│
├── 04-week-04/
│   ├── session-notes.md
│   ├── assignments/
│   │   └── production-deployment/
│   │       ├── deployment-checklist.md
│   │       └── troubleshooting.md
│   ├── learnings.md
│   └── progress.md
│
├── 05-week-05/
│   ├── session-notes.md
│   ├── midpoint-reflection.md         # Progress review
│   ├── assignments/
│   │   └── iac-intro/
│   │       ├── terraform/
│   │       │   ├── main.tf
│   │       │   ├── variables.tf
│   │       │   └── outputs.tf
│   │       └── learning-notes.md
│   ├── learnings.md
│   └── progress.md
│
├── 06-week-06/
│   ├── session-notes.md
│   ├── assignments/
│   │   └── infrastructure-project/
│   │       ├── terraform/
│   │       ├── architecture-diagram.png
│   │       └── documentation.md
│   ├── learnings.md
│   └── progress.md
│
├── 07-week-07/
│   ├── session-notes.md
│   ├── assignments/
│   │   └── observability/
│   │       ├── monitoring-setup/
│   │       │   ├── prometheus.yml
│   │       │   └── grafana-dashboard.json
│   │       ├── logging-config/
│   │       ├── incident-simulation.md
│   │       └── postmortem-template.md
│   ├── learnings.md
│   └── progress.md
│
├── 08-week-08/
│   ├── session-notes.md
│   ├── final-reflection.md            # Journey recap
│   ├── portfolio-review/
│   │   ├── resume-updates.md
│   │   ├── linkedin-profile.md
│   │   └── project-showcase.md
│   ├── learnings.md
│   └── next-steps.md                  # Post-program plan
│
├── projects/
│   ├── project-01-simple-app/         # First containerized app
│   │   ├── README.md
│   │   ├── Dockerfile
│   │   ├── docker-compose.yml
│   │   ├── .github/
│   │   │   └── workflows/
│   │   └── src/
│   │
│   ├── project-02-iac-deployment/     # Infrastructure as Code project
│   │   ├── README.md
│   │   ├── terraform/
│   │   ├── scripts/
│   │   └── docs/
│   │
│   └── project-03-monitored-app/      # Full stack with observability
│       ├── README.md
│       ├── app/
│       ├── infrastructure/
│       ├── monitoring/
│       └── docs/
│
├── technical-notes/
│   ├── docker/
│   │   ├── commands-cheatsheet.md
│   │   ├── best-practices.md
│   │   └── troubleshooting.md
│   │
│   ├── cicd/
│   │   ├── github-actions-guide.md
│   │   ├── pipeline-patterns.md
│   │   └── examples/
│   │
│   ├── cloud/
│   │   ├── aws-basics.md
│   │   ├── networking-fundamentals.md
│   │   └── security-checklist.md
│   │
│   ├── iac/
│   │   ├── terraform-guide.md
│   │   ├── common-patterns.md
│   │   └── state-management.md
│   │
│   └── observability/
│       ├── monitoring-strategies.md
│       ├── logging-best-practices.md
│       └── incident-response.md
│
├── mentor-feedback/
│   ├── week-01-feedback.md
│   ├── week-02-feedback.md
│   ├── week-03-feedback.md
│   ├── week-04-feedback.md
│   ├── week-05-feedback.md
│   ├── week-06-feedback.md
│   ├── week-07-feedback.md
│   └── week-08-feedback.md
│
├── challenges-and-solutions/
│   ├── docker-networking-issue.md
│   ├── terraform-state-conflict.md
│   ├── cicd-pipeline-debugging.md
│   └── template.md
│
├── wins/
│   ├── first-successful-deployment.md
│   ├── automated-my-workflow.md
│   └── solved-production-issue.md
│
└── resources/
    ├── books.md                       # Reading list
    ├── courses.md                     # Online courses
    ├── tools.md                       # Tools & platforms
    ├── communities.md                 # DevOps communities
    └── articles.md                    # Helpful articles & blogs
```

---

## 📊 Weekly Progress Tracker

| Week | Focus Area | Status | Key Achievement |
|------|-----------|--------|----------------|
| 1 | Introduction & Goal Setting | 🔄 In Progress | - |
| 2 | Docker & Containerization | ⏳ Upcoming | - |
| 3 | CI/CD Pipeline Setup | ⏳ Upcoming | - |
| 4 | Production Deployment | ⏳ Upcoming | - |
| 5 | Infrastructure as Code | ⏳ Upcoming | - |
| 6 | Advanced Infrastructure | ⏳ Upcoming | - |
| 7 | Monitoring & Observability | ⏳ Upcoming | - |
| 8 | Final Review & Next Steps | ⏳ Upcoming | - |

**Legend:** ✅ Completed | 🔄 In Progress | ⏳ Upcoming

---

## 🛠️ Technical Skills Progress

### Docker & Containers
- [ ] Understand containers vs VMs
- [ ] Write production-ready Dockerfiles
- [ ] Use Docker Compose for multi-container apps
- [ ] Optimize Docker images for size and security

### CI/CD
- [ ] Set up GitHub Actions workflow
- [ ] Implement automated testing
- [ ] Configure deployment automation
- [ ] Handle secrets and environment variables

### Cloud Platforms (AWS Focus)
- [ ] Navigate AWS console
- [ ] Provision EC2, S3, RDS
- [ ] Understand VPC and networking
- [ ] Implement basic security (IAM, Security Groups)

### Infrastructure as Code
- [ ] Write Terraform configurations
- [ ] Manage Terraform state
- [ ] Use modules for reusability
- [ ] Version control infrastructure

### Monitoring & Observability
- [ ] Set up logging (CloudWatch/ELK)
- [ ] Configure metrics (Prometheus)
- [ ] Create dashboards (Grafana)
- [ ] Implement alerting
- [ ] Write incident postmortems

### Soft Skills
- [ ] Read production logs effectively
- [ ] Debug deployment issues
- [ ] Write technical documentation
- [ ] Communicate incidents clearly

---

## 🚀 Projects Showcase

### Project 1: Containerized Web App
**Description:** A simple web application containerized with Docker and deployed with CI/CD  
**Tech Stack:** Docker, GitHub Actions, AWS EC2  
**Status:** 🔄 In Progress  
**Link:** [View Project](./projects/project-01-simple-app/)

### Project 2: Infrastructure as Code
**Description:** Cloud infrastructure provisioned using Terraform  
**Tech Stack:** Terraform, AWS (VPC, EC2, S3, RDS)  
**Status:** ⏳ Upcoming  
**Link:** [View Project](./projects/project-02-iac-deployment/)

### Project 3: Production-Grade App with Monitoring
**Description:** Full-stack application with logging, metrics, and alerts  
**Tech Stack:** Docker, Terraform, Prometheus, Grafana  
**Status:** ⏳ Upcoming  
**Link:** [View Project](./projects/project-03-monitored-app/)

---

## 💡 Key Learnings

### Week 1
*To be updated after first session*

### Week 2
*To be updated*

---

## 🎓 Resources I'm Using

### Official Documentation
- [Docker Docs](https://docs.docker.com/)
- [GitHub Actions Docs](https://docs.github.com/en/actions)
- [AWS Documentation](https://docs.aws.amazon.com/)
- [Terraform Documentation](https://www.terraform.io/docs)

### Courses & Tutorials
- Docker for Beginners (Udemy)
- AWS Cloud Practitioner Essentials
- Terraform Associate Certification Path

### Books
- *The Phoenix Project* by Gene Kim
- *Site Reliability Engineering* by Google
- *The DevOps Handbook*

### Communities
- r/devops
- DevOps.com
- AWS Community Builders

---

## 🏆 Achievements & Wins

- [ ] First Docker container running locally
- [ ] First successful CI/CD deployment
- [ ] Infrastructure deployed with code
- [ ] Detected and resolved a simulated incident
- [ ] Portfolio reviewed and optimized for job hunt

---

## 🤝 Mentor Acknowledgment

**Mentor:** Kolawole Deji 
**Company/Role:** System Engineer

This journey wouldn't be possible without their guidance, patience, and expertise. Grateful for every session, code review, and piece of advice.

---

## 📈 Next Steps (Post-Program)

1. **Deepen Kubernetes knowledge** - Complete CKA certification prep
2. **Build advanced projects** - Multi-region, high-availability infrastructure
3. **Contribute to open source** - DevOps tooling or documentation
4. **Job applications** - Target Junior DevOps/SRE roles
5. **Stay connected** - Join DevOps communities, attend meetups

---

## 📝 How to Use This Repository

### For Me (Kasie)
- Document everything I learn in real-time
- Keep session notes organized by week
- Track progress and celebrate small wins
- Use as reference when stuck
- Showcase to potential employers

### For Others Learning DevOps
This repo can serve as a template for your own DevOps learning journey. Feel free to:
- Fork and adapt the structure
- Use the templates for your own notes
- Follow the week-by-week progression
- Learn from my challenges and solutions

---

## 📞 Connect With Me

- **LinkedIn:** https://www.linkedin.com/in/ugwu-kasie/
- **GitHub:** https://github.com/KasiePatricia
- **Twitter/X:** https://x.com/UgwuKasie
- **Email:** ugwukasiep@gmail.com

---

## 📜 License

This repository is for educational purposes. Feel free to use it as inspiration for your own learning journey.

---

## 🙏 Acknowledgments

- **Ladder Tech** for organizing this incredible mentorship program
- **My Mentor** for dedicating time and sharing knowledge
- **Cohort 5 Peers** for the shared learning experience
- **DevOps Community** for endless resources and support

---

**Last Updated:** October 22, 2025  
**Program Status:** Week 1 - Getting Started 🚀

---

### 📌 Quick Links

- [Mentorship Plan](./MENTORSHIP_PLAN.md)
- [Week 1 Notes](./01-week-01/)
- [Projects Overview](./projects/)
- [Technical Notes](./technical-notes/)
- [Resources](./resources/)

---

*"The journey of a thousand deployments begins with a single container."* 🐳