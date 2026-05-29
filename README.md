# portfolio-html

Full-stack software developer portfolio implemented as a Vue 3 + TypeScript + Tailwind single-page app.

## Stack
- Vue 3
- TypeScript (strict)
- Tailwind CSS
- Vite

## Development
- Install dependencies: `npm install`
- Start dev server: `npm run dev`
- Type-check and build production assets: `npm run build`
- Preview production build: `npm run preview`

## Project Structure
- `src/App.vue`: page composition and section order.
- `src/data/content.ts`: typed content source (hero, projects, skills, experience, contact).
- `src/types/content.ts`: shared content contracts.
- `src/components/sections/*`: section components.

## Content Model Notes
- Hero content is data-driven via `heroContent`:
  - `eyebrow`
  - `headline`
  - `supportingLine`
  - `ctas[]` (used for "View Featured Work", "GitHub", "Contact")
- Projects follow a mini case-study structure:
  - problem/context
  - what was built
  - technical highlights
  - outcome/usefulness
- `featured` controls which projects are highlighted in the Featured Work case-study section.
- Full Projects intentionally renders all projects (including featured) as a complete index.

## Build Output
- Vite outputs static assets to `dist/`.
