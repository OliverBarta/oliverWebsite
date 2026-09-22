# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal portfolio site for Oliver Barta: a single-page React 19 + Vite app (plain JSX, no TypeScript, no router, no test suite). Scroll-driven slide animations use GSAP + ScrollTrigger.

## Commands

- `npm run dev`: Vite dev server
- `npm run build`: production build to `dist/`
- `npm run preview`: serve the built `dist/` locally (run `build` first)
- `npm run lint`: ESLint (flat config in `eslint.config.js`: recommended JS, react-hooks, react-refresh)

There are no tests.

## Deployment

Pushing to `main` deploys to GitHub Pages through `.github/workflows/deploy.yml` (Node 20, `npm ci`, `npm run build`, upload `dist`). You can also run it manually from the Actions tab. `vite.config.js` sets `base: '/oliverWebsite/'`, so asset URLs must go through Vite imports (e.g. `import img from '../assets/x.png'`) or be relative to that base. Absolute `/foo` paths break in production.

## Architecture

- **`App.jsx`** renders `<Slideshow>` with `<Home />` followed by one `ProjectSlide` per entry in `src/data/projects.js`. `Contact` and `Header` still exist in the source but are not rendered. Contact links (email, GitHub, LinkedIn, resume PDF) now live on the Home slide.
- **`src/data/projects.js`** is the content source for project slides. Each entry has `title`, `desc`, `tags`, `link`, `github`, `images` (imported from `src/assets/`), and `imageOrientation`. Adding a project usually means only adding an entry here and importing its screenshots. An empty or `'#'` `link`/`github` hides that button.
- **`imageOrientation`** controls how `ProjectSlide` (`src/pages/Projects.jsx`) lays out images:
  - `'carousel'` renders `ProjectCarousel`, a stacked, auto-advancing (8s, pauses on hover) card carousel. Its aspect ratio comes from the first image.
  - `'horizontal'` lays images out in a row.
  - Anything else is treated as `'vertical'`. With 3 or 4 images, vertical gets `grid grid-N` classes.
  - Every slide has text on the left and images on the right. The first project slide gets `id="projects"`.
- **`src/slideshow.jsx`** holds the scroll logic. Each child must be a `<section className="slide">`, because slides are found by the `.slide` selector. Behavior depends on screen width:
  - **Desktop (≥768px, through `gsap.matchMedia`):** the container is pinned, and a scrubbed timeline moves `.slides-track` by `-N*100vh` over `N * innerHeight` of scroll. Scroll snaps to whole slides. Elements marked `data-slide-in` animate in: on the first slide with a one-time intro tween, on later slides as part of the scroll timeline. The up/down arrow buttons scroll to computed positions within the ScrollTrigger range.
  - **Mobile (<768px):** no GSAP. `slideshow.css` falls back to normal stacked sections, and the arrows are hidden.
  - `dotsRef` and the `.slide-progress`/`.slide-dot` styles are leftovers. No dot elements are rendered.
- **Styling:** each component imports its own CSS file. Design tokens (dark theme colors, accents, gradients, fonts) are CSS custom properties in `src/index.css` `:root`. Reuse them instead of hard-coding colors.
