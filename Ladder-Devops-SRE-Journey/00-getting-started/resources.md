# Curated Learning Resources

> **Curated for busy full-stack devs transitioning to DevOps/SRE.** Prioritized **free**, **short**, **hands-on**. Mentor Kolawole Deji can swap or add. Aligned with program resources like Docker Docs, AWS Documentation, and books such as *The Phoenix Project*.

## 1. Foundations (Week 1)
| Type | Resource | Why | Time |
|------|----------|-----|------|
| Video | [Learn Docker in 1 Hour – Fireship](https://www.youtube.com/watch?v=gAkwW2tuIqE) | Visual, no fluff; covers containers vs VMs | 1 hr |
| Interactive | [Katacoda Docker Playground](https://kodekloud.com/playgrounds) | Browser-based terminal for practice | 2 hr |
| Cheatsheet | [Docker CLI Cheatsheet (devhints)](https://devhints.io/docker) | Print & stick on wall | – |
| Docs | [Docker Official Docs](https://docs.docker.com/) | Core reference for getting started | Ongoing |

## 2. Containerizing Full-Stack Apps (Week 2)
| Type | Resource | Why | Time |
|------|----------|-----|------|
| Guide | [Next.js Docker Guide (Vercel)](https://nextjs.org/docs/app/building-your-application/deploying#docker-image) | Official multi-stage example for frontend | 30 min |
| Guide | [NestJS Dockerization](https://docs.nestjs.com/recipes/docker) | Backend containerization with Node.js | 30 min |
| Article | [Optimizing Docker Images for Production](https://dev.to/jollyrogers/optimizing-nextjs-docker-images-3n0) | Reduces layer size 70%; security best practices | 20 min |
| Tool | [Dive](https://github.com/wagoodman/dive) | Visualize layer waste | 15 min |

## 3. GitHub Actions (Weeks 3–4)
| Type | Resource | Why | Time |
|------|----------|-----|------|
| Docs | [GitHub Actions Docs](https://docs.github.com/en/actions) | Official starter workflows for CI/CD | 10 min |
| Course | [GitHub Actions – freeCodeCamp (4 hrs)](https://www.youtube.com/watch?v=R8_veQiYBjI) | Step-by-step with caching, secrets | 4 hr |
| Debug | [act – Run Actions Locally](https://github.com/nektos/act) | Test without pushing | 30 min |
| Examples | [GitHub Actions Starter Workflows](https://github.com/actions/starter-workflows) | Copy-paste for Node.js/Express/NestJS | – |

## 4. Infrastructure as Code (Weeks 5–6)
| Type | Resource | Why | Time |
|------|----------|-----|------|
| Tutorial | [Terraform AWS in 100 Seconds + Full Guide](https://www.youtube.com/watch?v=Y2jxFv8kmoY) | HashiCorp-approved intro | 2 hr |
| Lab | [Learn Terraform – HashiCorp Learn](https://learn.hashicorp.com/terraform) | Free tier modules for AWS | 3 hr |
| Docs | [Terraform Documentation](https://www.terraform.io/docs) | Core reference for IaC | Ongoing |
| Alternative | [Pulumi (JS/TS)](https://www.pulumi.com/) | If mentor prefers code over HCL | – |

## 5. Cloud Providers (AWS Focus)
| Resource | Link | Why |
|----------|------|-----|
| AWS Free Tier | https://aws.amazon.com/free/ | Hands-on practice |
| AWS Documentation | https://docs.aws.amazon.com/ | Basics for EC2, S3, RDS, VPC |
| ECS Fargate Tutorial | https://aws.amazon.com/getting-started/hands-on/deploy-docker-containers/ | Container deployment |
| AWS Cloud Practitioner Essentials | (AWS Training Portal) | Free course for fundamentals |
| Cantrill AWS SAA Course | (Discount codes on Reddit) | Deeper dive if needed |

## 6. Observability (Week 7)
| Type | Resource | Why | Time |
|------|----------|-----|------|
| Docker | [Prometheus + Grafana Stack](https://grafana.com/tutorials/run-grafana-with-docker/) | 3 containers, pre-built dashboards | 1 hr |
| Logging | [ELK Stack Tutorial](https://www.elastic.co/guide/en/elastic-stack-get-started/current/get-started-elastic-stack.html) | For centralized logging | 2 hr |
| Frontend/Backend | [Sentry for Node/React](https://docs.sentry.io/platforms/javascript/guides/react/) | Error tracking with source maps | 30 min |

## 7. Books & Communities (Ongoing)
| Type | Resource | Why |
|------|----------|-----|
| Book | *The Phoenix Project* by Gene Kim | DevOps mindset |
| Book | *Site Reliability Engineering* by Google | SRE principles |
| Book | *The DevOps Handbook* | Practical implementation |
| Community | r/devops (Reddit) | Discussions, advice |
| Community | DevOps.com | Articles, news |
| Community | AWS Community Builders | Events, support |

## 8. Courses (Supplementary)
| Course | Platform | Focus |
|--------|----------|-------|
| Docker for Beginners | Udemy | Hands-on Docker |
| AWS Cloud Practitioner Essentials | AWS | Cloud basics |
| Terraform Associate Certification Path | HashiCorp | IaC certification prep |

---

**Mentor TODO:**  
- [ ] Strike through anything redundant  
- [ ] Add 1–2 resources you swear by  
- [ ] Assign specific labs per week