# ✅ **Summary of Findings From My Discussion With Our DevOps Engineer**

Following the action items you shared with me, I met with our DevOps engineer to understand our Git strategy, CI/CD pipeline, deployment environments, and overall DevOps workflow. Below is a detailed summary of what I learned.

---

## **1. Git & Branching Strategy**

### **Branching Strategy Used**

* On the **frontend team**, we follow a **GitFlow-style branching model** — using feature branches and Pull Requests before merging into the main branch.
* He explained that if I need to **see my changes immediately** or share them for validation,
  the team can **host each PR as a temporary preview environment**.

  * This preview link shows the PR changes before merge.
  * Once the PR is merged, the preview link will no longer reflect the merged changes; a new preview will only be generated for the next PR.
* The **backend team**, however, follows more of a **Trunk-Based Development** approach, where changes are made in small increments and frequently integrated into the main branch.

### **Why This Approach**

* GitFlow supports the frontend workflow, where updates often require UI review and separate feature isolation.
* Trunk-Based Development suits backend services where continuous integration and smaller, rapid changes are preferred.

### **Feature Branch Lifespan**

* Feature branches are generally kept short-lived because each PR is expected to represent a complete, reviewable change.

### **Handling Urgent Fixes**

* Critical fixes follow the same PR process but are merged quickly to ensure rapid deployment.

---

## **2. CI/CD Pipeline**

### **Pipeline Configuration**

* Pipelines are hosted on our **self-hosted GitLab servers**.
* CI/CD configuration files live in the respective GitLab repositories.

### **Key Pipeline Steps**

Although the process varies slightly between services, the general workflow is:

1. **PR creation** triggers a pipeline.
2. **Build stage** runs to prepare the application.
3. For backend services:

   * The code is packaged and bundled into **Docker containers**.
4. **Deployment stage** pushes the build to our environments on GCP.
5. **Health checks** run to verify the service is functioning correctly post-deployment.

### **Docker Usage**

* **Backend uses Docker**, not the frontend.
* Frontend applications are built but not containerized on our side.

### **Deployment Environments**

* We deploy to **standalone servers on Google Cloud Platform (GCP)**.
* We are **not using Kubernetes** or any orchestration framework.
* Deployments are done using **custom scripts**.

### **Infrastructure & Secrets**

* GitLab is **self-hosted**.
* Secrets are managed using **HashiCorp Vault**.

### **Automated Tests**

* There are **no automated tests run by the DevOps pipeline**.
* Tests are expected to be written and run by the **frontend/backend teams** before PR submission.

### **Checks Before Deployment**

* Pipeline uses **health checks** to determine if a service is healthy after deployment.

### **Rollbacks**

* Not explicitly automated; likely handled manually due to the script-based deployment approach.

---

## **3. Monitoring & Observability**

The team uses multiple tools for monitoring:

* **Grafana** – server metrics and dashboards
* **Elasticsearch** – indexing and searching logs
* **Kibana** – visualization and analysis of logs

These tools help the DevOps team observe system health and diagnose issues.

---

## **4. Additional Guidance**

When I asked about learning resources, I was advised to focus on:

* GitLab CI/CD documentation
* HashiCorp Vault basics
* Understanding our deployment scripts
* Observing the PR → pipeline → deployment flow

---

## **Closing Summary**

This discussion gave me a clearer understanding of:

* How the frontend and backend teams use different Git models
* How our CI/CD pipeline is structured
* What tools and infrastructure we rely on
* How deployments occur in practice within our organization

I now have a stronger picture of how code moves from development to production and what areas I should continue exploring.

---

