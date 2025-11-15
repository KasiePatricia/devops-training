# Assignment 02-A: Git Branching Strategy  
**Due:** November 8, 2025  
**Objective:** Move from *using Git* to *designing Git workflows*

---

## Part 1: Research & Compare

| Strategy | GitFlow | Trunk-Based Development (TBD) |
|--------|--------|-------------------------------|
| **Branch Types** | `main`, `develop`, `feature/*`, `release/*`, `hotfix/*` | `main` only + short-lived `feature/*` (<1 day) |
| **When to Use** | Complex releases, versioned APIs, multiple teams | High-velocity teams, CD, microservices |
| **Pros** | Clear release process, stable `main` | Faster feedback, fewer merge conflicts |
| **Cons** | Long-lived branches → merge hell | Requires strong CI/CD, feature flags |
| **Tools** | GitFlow CLI, GitHub PRs | Feature flags (LaunchDarkly, Unleash) |

> **Sources:**  
> - [GitFlow (Vincent Driessen)](https://nvie.com/posts/a-successful-git-branching-model/)  
> - [Trunk-Based Development](https://trunkbaseddevelopment.com/)  
> - [Google’s Monorepo Strategy](https://cacm.acm.org/magazines/2016/7/204032-why-google-stores-billions-of-lines-of-code-in-a-single-repository/fulltext)

---

## Part 2: Audit Your Team

| Question | Your Answer |
|--------|-------------|
| What branching model does your team use? | *(e.g., “We use `main` + `feature/*` but no `develop`”)* |
| Are PRs required? | Yes / No |
| Who approves deploys? | |
| Are branches deleted after merge? | |
| Do you use release tags? | |

---

## Part 3: Recommendation

Our CI/CD pipeline is defined in .gitlab-ci.yml.
It has three stages: build, staging, master.
In the build stage we clean-install Node dependencies, inject the correct .env file (staging vs prod), run yarn build:…, and store the build/ folder as an artifact.
In the deploy stage we:

Spin up an OpenVPN tunnel (using base64-encoded CI variables)
SSH into an on-prem VM
Delete the old web root and scp the new build/ folder.
There are no automated tests; the pipeline only proceeds if every command succeeds.
Deployment targets are static-site directories on VMs served by Nginx/Apache.”

---
