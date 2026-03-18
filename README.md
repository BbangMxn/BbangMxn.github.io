# BbangMxn Quartz Wiki

Portfolio-first knowledge site powered by [Quartz](https://quartz.jzhao.xyz/).

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
- `content/projects/`: portfolio and case studies
- `content/research/`: experiments, logs, working notes
- `content/wiki/`: evergreen notes
- `content/wiki/site/`: site implementation docs for page architecture and folder structure
- `content/about.md`: about page
- `content/start-here.md`: onboarding page

## Implementation structure

- `quartz.config.ts`: build pipeline, transformers, emitters
- `quartz.layout.ts`: shared/content/list page layout composition
- `quartz/components/pages/`: page body renderers such as `Content.tsx` and `FolderContent.tsx`
- `quartz/styles/pages/`: page-family styles for home, hubs, and dense notes

## GitHub Pages

After the first push, go to repository settings and set Pages to use `GitHub Actions` as the source.
