# Personal-Website

This repo contains the code for my personal portfolio website and some other web-dev projects.

## Project status

The current work-in-progress is a responsive static portfolio that now includes light/dark theme toggling, improved navigation, and dynamic data-driven sections for projects and notes. All pages load with the same navigation and styling, and a GitHub Pages workflow is already set up to publish updates automatically.

## Viewing the site locally

You can preview the site in any modern browser by running a simple local web server from the repository root:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000` in your browser. Use the theme toggle in the header to switch between light and dark modes.

## Deployment

GitHub Pages is configured via the included Actions workflow. After pushing to `main` (or this branch), the `Deploy static site to GitHub Pages` workflow will build and publish the site to the Pages environment.

Steps to verify or redeploy:

1. Push your changes to GitHub.
2. In the repository, go to **Settings → Pages** and ensure **Source** is set to **GitHub Actions**.
3. Check **Actions** for the latest `Deploy static site to GitHub Pages` run and confirm it completed successfully.
4. The deployed URL will be shown in the workflow summary under the Pages environment output.

If you prefer another static host (e.g., Netlify, Vercel), deploy the `index.html`, `blog.html`, `work.html`, `css/`, `images/`, and `js/` assets as-is.
