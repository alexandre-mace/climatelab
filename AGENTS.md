# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Dev Commands

- `pnpm dev` — Start dev server (localhost:3000)
- `pnpm build` — Production build
- `pnpm start` — Start production server
- `pnpm lint` — ESLint

## Tech Stack

- **Next.js 14.1.4** (App Router, Server Components by default)
- **React 18**, **TypeScript 5**
- **Tailwind CSS 3.3** with `tailwindcss-animate`, dark mode via class strategy
- **shadcn/ui** components (Radix UI primitives, CVA for variants)
- **Prettier** with Tailwind plugin for class sorting

## Architecture

This is a **static portal site** — no API routes, no database, no backend. It links out to separate ClimateLab tools hosted on subdomains (e.g. `transitions.climatelab.fr`, `thermometre.climatelab.fr`).

**Data flow:** `data/tools.json` → `app/page.tsx` → `components/Tool.tsx` cards in a responsive grid. Adding a new tool means adding an entry to the JSON file and placing a logo image in `public/images/`.

**Key files:**
- `app/page.tsx` — Home page, maps over tools JSON to render cards
- `components/Tool.tsx` — Card component with hover shadow animations
- `data/tools.json` — All tool definitions (title, description, logo, colors, link, shadow classes)
- `lib/utils.ts` — `cn()` helper (clsx + tailwind-merge)

## Conventions

- **French UI**: All user-facing text is in French. ESLint rule `react/no-unescaped-entities` is disabled to accommodate French typography.
- **"use client"** only where needed (interactive components). Default to Server Components.
- **Path alias**: `@/*` maps to project root.
- **Shadow system**: Each tool has custom Tailwind shadow classes stored in JSON, applied dynamically.
- **Images**: Remote patterns allow all HTTPS hosts in `next.config.mjs`. Logos are emoji PNGs/WebPs in `public/images/`.
