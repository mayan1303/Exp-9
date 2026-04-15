# Experiment 9 Submission

This project covers both required parts of the experiment:

- Experiment 3.2.1: Dockerize React application using a multi-stage build
- Experiment 3.2.2: CI/CD pipeline using GitHub Actions

## Included Deliverables

- `Dockerfile` with Node build stage and Nginx production stage
- `nginx/default.conf` with gzip enabled and cache headers for static assets
- `.github/workflows/react-cicd.yml` for testing, Docker build and push, and Slack notifications
- `.env.example` showing how React environment variables are passed at build time

## Local Run

Install dependencies:

```powershell
npm install
```

Start the development server:

```powershell
npm start
```

## Docker Commands

Build the production image:

```powershell
docker build -t exp-9-react-app --build-arg REACT_APP_API_BASE_URL=https://api.example.com --build-arg REACT_APP_ENVIRONMENT=production .
```

Run the container on port 8080:

```powershell
docker run -d -p 8080:8080 --name exp-9-container exp-9-react-app
```

Check final image size:

```powershell
docker images exp-9-react-app
```

## GitHub Setup

Create these repository settings before pushing:

1. Add repository variable `REACT_APP_API_BASE_URL`
2. Add repository secret `SLACK_WEBHOOK_URL`
3. Keep GitHub Packages enabled so GHCR push works with `GITHUB_TOKEN`

## Submission Files To Upload

1. Screenshot of successful GitHub Actions workflow run
2. Screenshot of the pushed image in GitHub Container Registry
3. The CI/CD file: `.github/workflows/react-cicd.yml`

## Suggested Screenshot Steps

1. Push this project to a GitHub repository with `main` as the default branch.
2. Open the **Actions** tab and take a screenshot after the workflow passes.
3. Open the package page under **Packages** and take a screenshot showing the pushed image tags.
4. Upload `.github/workflows/react-cicd.yml` directly for the YML submission.
