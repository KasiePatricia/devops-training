# Assignment 02-B: Map Your CI/CD Pipeline  
**Due:** November 8, 2025  
**Objective:** Read and explain your team’s pipeline in plain English

---

## Step 1: Locate the Config File

| Project | Pipeline File | Location |
|-------|--------------|----------|
| Frontend (Next.js) | Vercel | [vercel.com/dashboard → Settings → Git](https://vercel.com) |
| Backend (.Net) | `.gitlab-ci.yml` | `root` of repo |

> *If no pipeline file exists → document the **manual steps** you take.*

---

## Step 2: Break It Down (Plain English)

```yaml
# Example: Vercel (auto-detected)
1. GitHub push → webhook
2. Vercel clones repo
3. Runs `npm install`
4. Runs `npm run build`
5. Deploys to edge network
6. Assigns preview URL
```

## Step 3: Diagram

flowchart LR
    A[git push] --> B(Webhook)
    B --> C{Clone Repo}
    C --> D[Install Deps]
    D --> E[Run Tests?]
    E --> F[Build Artifact]
    F --> G[Deploy to...?]
    G --> H[Live URL]

## Step 4: Answer

Question
"Where is the app deployed? (URL, cloud, VM)",
"What tests run? (unit, integration, E2E)",
What triggers a deploy?,
Can it fail? What stops it?,
Who gets notified?,