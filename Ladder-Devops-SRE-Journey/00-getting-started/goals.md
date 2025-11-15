# SMART + Roadmap-Aligned Goals (8-Week DevOps/SRE Sprint)

> **Mentor:** Kolawole Deji – *System Engineer*  
> **Program:** Ladder Tech Mentorship 5.0 – Cohort 5 (Theme: Accelerate)  
> **Roadmap Reference:** [roadmap.sh/devops](https://roadmap.sh/devops) – 2025 Edition  
> **Success Metric:** Deploy a monitored, IaC-provisioned full-stack app in **<10 min** from PR merge, with **<5 min** MTTD for simulated incidents.

---

## High-Level Roadmap Mapping
| Roadmap.sh Stage | Our 8-Week Focus | Weeks |
|------------------|------------------|-------|
| **Learn a Programming Language** | Python | Already proficient (JS/TS) | – |
| **Linux Basics & Scripting** | Week 1 | 1 |
| **Version Control & Git Workflow** | Week 1–2 | 1–2 |
| **Containerization (Docker)** | Week 2 | 2 |
| **CI/CD (GitHub Actions)** | Week 3–4 | 3–4 |
| **Infrastructure as Code (Terraform)** | Week 5–6 | 5–6 |
| **Cloud (AWS)** | Week 5–6 | 5–6 |
| **Monitoring & Observability** | Week 7 | 7 |
| **Incident Response & SRE** | Week 7–8 | 7–8 |
| **Capstone & Portfolio** | Week 8 | 8 |

---

## SMART Goals (Refined & Actionable)

| # | Goal | Specific | Measurable | Achievable | Relevant (Roadmap.sh) | Time-bound |
|---|------|----------|-----------|------------|-----------------------|------------|
| 1 | **Master Linux + Scripting** | Write 5 Bash scripts: health check, log rotator, backup, env injector, SSH key generator | 5 scripts in `technical-notes/linux/scripts/` with tests (`bats`) | I use Linux daily; 10 hrs | `Linux Basics` | **End of Week 1** |
| 2 | **Git Workflow Mastery** | Implement GitFlow + PR template + branch protection + signed commits | Repo with `main`, `develop`, `feature/*`, `release/*` + GitHub settings | I use Git daily | `Version Control` | **End of Week 1** |
| 3 | **Production-Grade Docker** | Multi-stage Dockerfile for **Next.js + NestJS**; <100 MB final image; `hadolint`, `trivy` pass | `Dockerfile`, `docker-compose.yml`, `scripts/scan.sh` | I’ve containerized before | `Containerization` | **End of Week 2** |
| 4 | **Zero-Touch CI/CD** | GitHub Actions: lint → test → build → scan → push → deploy to **staging EC2** | Workflow badge, 100% pass rate, deploy in <6 min | I use Jest/RTL | `CI/CD` | **End of Week 4** |
| 5 | **IaC with Terraform** | Provision **VPC, Subnets, EC2, RDS, S3, ALB, IAM** via Terraform modules | `terraform apply` <2 min, state in S3 + DynamoDB | Free tier; mentor review | `Infrastructure as Code` + `Cloud` | **End of Week 6** |
| 6 | **Observability Stack** | Prometheus (metrics), Grafana (dashboards), Loki (logs), Alertmanager (Slack) | 3 panels, 1 alert fires on >500ms p95 | Docker Compose stack | `Monitoring` | **End of Week 7** |
| 7 | **Incident Response Playbook** | Simulate 3 incidents (CPU spike, DB deadlock, cert expiry) → write postmortems | `challenges-and-solutions/*.md` + `postmortem-template.md` | Controlled chaos | `SRE Practices` | **End of Week 7** |
| 8 | **Capstone: TaskFlow SaaS** | Full-stack app with auth, queue (BullMQ), rate limiting, deployed via pipeline | Live URL, 90% test coverage, architecture diagram | Reuses all skills | `Capstone` | **End of Week 8** |

---

## Weekly Micro-Milestones (Push-Ready Deliverables)

| Week | Focus | Deliverables (GitHub Paths) |
|------|-------|----------------------------|
| **1** | Linux + Git | `technical-notes/linux/scripts/` (5 scripts)<br>`/.github/workflows/git-check.yml` (signed commits)<br>`01-week-01/progress.md` |
| **2** | Docker Mastery | `projects/project-01-simple-app/Dockerfile`<br>`docker-compose.yml`<br>`scripts/scan.sh` (trivy)<br>`02-week-02/learnings.md` |
| **3** | CI/CD Part 1 | `.github/workflows/ci.yml` (lint, test, build)<br>`03-week-03/assignments/cicd-pipeline/` |
| **4** | CI/CD Part 2 | `.github/workflows/cd.yml` (deploy to EC2 via SSH)<br>Staging URL live<br>`04-week-04/progress.md` |
| **5** | IaC Intro | `projects/project-02-iac-deployment/terraform/main.tf`<br>`variables.tf`, `outputs.tf`<br>`05-week-05/midpoint-reflection.md` |
| **6** | Cloud + Security | VPC diagram, IAM roles, SG rules<br>`06-week-06/assignments/infrastructure-project/` |
| **7** | Observability + Incidents | `monitoring/prometheus.yml`, `grafana/dashboards/`<br>`challenges-and-solutions/cpu-spike.md`<br>`07-week-07/learnings.md` |
| **8** | Capstone + Portfolio | `projects/project-03-monitored-app/` (full repo)<br>`08-week-08/final-reflection.md`<br>`portfolio-review/resume-updates.md` |

---

## Success Checklist (Copy-Paste into `progress.md`)

```markdown
- [ ] 5 Bash scripts passing `bats` tests
- [ ] GitHub branch protection + signed commits
- [ ] Docker image <100 MB, `trivy` critical=0
- [ ] CI/CD pipeline runs in <6 min
- [ ] `terraform apply` provisions full stack
- [ ] Grafana dashboard with 3 panels + 1 alert
- [ ] 3 postmortems with RCA and action items
- [ ] TaskFlow live at `taskflow.kasie.dev`
- [ ] Resume updated with DevOps projects