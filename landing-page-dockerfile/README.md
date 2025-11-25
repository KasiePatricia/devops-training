## Landing Page Dockerfile

Modern marketing page built with Next.js 14, Tailwind CSS v4, and a lightweight Docker image for reproducible development or deployment. The goal of this repo is to practice Dockerizing a Next.js app from scratch.

### Stack
- Next.js App Router (`app/` directory)
- Tailwind CSS v4 with custom OKLCH design tokens
- Node.js 20 Alpine base image

---

## Local Development

```bash
npm install
npm run dev
# http://localhost:3000
```

Edit `app/page.tsx` or any component under `components/`—Next hot-reloads automatically. Global styles and CSS variables live in `app/globals.css`.

---

## Docker Workflow

The `Dockerfile` lives at the repo root and follows a simple five-step build:

1. `FROM node:20-alpine3.21`
2. `WORKDIR /app`
3. `COPY package*.json ./`
4. `RUN npm install`
5. `COPY . .`
6. `EXPOSE 3000`
7. `CMD ["npm", "run", "dev"]`

> The container runs the dev server for quick iteration. Swap the last line with `["npm", "run", "start"]` after running `npm run build` if you want a production server inside the image.

### Build the image
```bash
docker build -t landing-page .
```

### Run the container
```bash
docker run --rm -p 3000:3000 landing-page
```

Now visit `http://localhost:3000` and you’ll see the running containerized app.

---

## Scripts
- `npm run dev` – Next.js dev server with fast refresh.
- `npm run build` – Production build (required before `npm run start`).
- `npm run start` – Serve the pre-built app.
- `npm run lint` – ESLint with Next.js config.

---

## Folder Highlights
- `app/` – App Router entry points.
- `components/` – Reusable landing page sections.
- `public/` – Static assets such as SVG icons.

---

## Notes & Next Steps
- Add `npm run build && npm run start` stages or multi-stage build if you need a production-ready container.
- Hook the Docker image into a `docker-compose` stack or a CI pipeline to practice DevOps workflows.
