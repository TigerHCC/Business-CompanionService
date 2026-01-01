# Genshin Impact Services Website

A professional, responsive website for offering Genshin Impact boosting services. Built with React + Vite.

## Features
- **Hero Section**: Engaging visuals with a call-to-action.
- **Services**: Detailed list of services (Exploration, Abyss, etc.).
- **Responsive Design**: Works on mobile and desktop.
- **Genshin Theme**: Custom color palette inspired by the game.

## Getting Started

1.  Install dependencies:
    ```bash
    npm install
    ```
2.  Run locally:
    ```bash
    npm run dev
    ```

## Deployment (GitHub Pages)

This project is configured to be deployed to GitHub Pages.

### Step 1: Push to GitHub
Make sure you have created a repository on GitHub and pushed this code to it.

```bash
git add .
git commit -m "Ready for deployment"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

### Step 2: Configure GitHub Pages
1.  Go to your repository on GitHub.
2.  Go to **Settings** > **Pages**.
3.  Under **Build and deployment**, select **GitHub Actions**.
4.  Vite usually has a default workflow, or you can use the "Static HTML" option if you build locally and push the `dist` folder.

**Easiest Method (Deploy from Branch):**
1.  Run `npm run build`.
2.  This creates a `dist` folder.
3.  You can use a tool like `gh-pages` to deploy this folder.
    ```bash
    npm install -D gh-pages
    ```
4.  Add this script to `package.json`:
    ```json
    "scripts": {
      "deploy": "gh-pages -d dist"
    }
    ```
5.  Run `npm run deploy`.

## Customization
-   **Colors**: Edit `src/index.css` to change the theme.
-   **Content**: Edit the components in `src/components/` to update text and links.
