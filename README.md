# BbangMxn Quartz Wiki

Obsidian-like technical wiki and blog powered by [Quartz](https://quartz.jzhao.xyz/).

## Local workflow

1. Install dependencies:

   ```bash
   npm ci
   ```

2. Start the local preview server:

   ```bash
   npm run dev
   ```

3. Write notes in `content/`.
   You can open `content/` directly as an Obsidian vault if you want the familiar editor workflow.

4. Build a production bundle:

   ```bash
   npm run build
   ```

5. Commit and push to `main`.
   GitHub Actions will build and deploy the site to GitHub Pages.

## Content structure

- `content/index.md`: homepage
- `content/wiki/`: evergreen notes
- `content/journal/`: dated log posts
- `content/about.md`: about page
- `content/start-here.md`: onboarding page

## GitHub Pages

After the first push, go to repository settings and set Pages to use `GitHub Actions` as the source.
