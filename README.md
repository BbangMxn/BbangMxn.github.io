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
- `content/notes/research/`: experiments, logs, working notes
- `content/notes/wiki/`: evergreen notes
- `content/notes/wiki/site/`: site implementation docs for page architecture and folder structure
- `content/about.md`: about page
- `content/contact.md`: contact details
- `content/projects/hackathon/`: hackathon projects and participation records
- `content/projects/capstone/`: capstone projects
- `content/notes/index.md`: topic-based study archive
- `content/notes/diary/`: personal learning and experience notes
- `content/docs/`: shared document forms such as `spec`, `design`, and `task`

## Implementation structure

- `quartz.config.ts`: build pipeline, transformers, emitters
- `quartz.layout.ts`: Quartz entrypoint forwarding to `quartz/app`
- `quartz/app/`: layout composition and site-wide styles
- `quartz/widgets/`: site navigation and content index UI
- `quartz/entities/document/`: document selection, topic grouping, and sorting
- `quartz/shared/`: routes and Quartz integration
- `quartz/components/pages/`: page body renderers such as `Content.tsx` and `FolderContent.tsx`
- `quartz/styles/custom.scss`: loads Quartz base styles and `quartz/app/styles/site.scss`
- `quartz/app/styles/markdown.scss`: shared reading styles for regular Markdown pages

The homepage uses the portfolio design. Project and study pages use the common
Markdown reading surface; hackathons and capstones are grouped within Projects.

Use slice `index.ts` exports across boundaries. Dependencies flow from app to widgets,
entities, and shared. Content keeps its subject-based folders and existing URLs;
Quartz owns page rendering, so there are no empty FSD layers. Previous study URLs
redirect through document aliases after the move into `content/notes/`.

## Generated output

`public/` is recreated by `npm run build` and uploaded by GitHub Actions. Do not
edit it or keep source assets there. Write documents and document images in
`content/`, shared static assets in `quartz/static/`, and design code in `quartz/`.
Dependencies, build output, and local caches are excluded by `.gitignore`.

Validate site changes with `npx tsc --noEmit`, `npx tsx --test quartz/entities/document/model/catalog.test.ts quartz/shared/routes/routes.test.ts`, and `npm run build`.

## Internal docs

- `content/docs/index.md`: shared documentation template hub
- `content/docs/spec.md`: common specification template used before implementation
- `content/docs/design.md`: common design template used after spec is fixed
- `content/docs/task.md`: common task template for implementation tracking

## GitHub Pages

After the first push, go to repository settings and set Pages to use `GitHub Actions` as the source.
