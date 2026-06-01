# Hamba Landing Page

Next.js landing page with TypeScript, Tailwind CSS v4, ESLint, and Framer Motion.

## Stack

- **Next.js 16** — App Router, React Server Components by default
- **TypeScript** — strict mode
- **Tailwind CSS v4** — `@import "tailwindcss"` in `globals.css`
- **ESLint** — `eslint-config-next` (Core Web Vitals + TypeScript)
- **Framer Motion** — lazy-loaded via `LazyMotion` + `m` components

## Project structure

```
docs/             # project documentation (see DECISIONS.md)
src/
  app/              # routes, layouts, global styles
  components/       # UI (use "use client" only when needed)
  lib/              # shared utilities (e.g. motion exports)
```

## Scripts

```bash
npm run dev        # development server (http://localhost:3000)
npm run build      # production build
npm run start      # serve production build
npm run lint       # ESLint
npm run typecheck  # TypeScript without emit
```

## Framer Motion

Animations live in **client components** (`"use client"`). The root layout wraps the app in `MotionProvider`, which enables lazy-loaded features. Import from `@/lib/motion` and use `m.p`, `m.div`, etc. (not `motion`) for the smallest bundle.

## Environment variables

Copy `.env.example` to `.env.local` for local secrets and public config. Never commit `.env.local`.
