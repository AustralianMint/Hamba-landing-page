# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev        # start dev server (Turbopack)
npm run build      # production build
npm run lint       # ESLint 9
npm run typecheck  # tsc --noEmit
```

No test runner is configured yet.

## Architecture

Single-page marketing site for the Hamba iOS app. One route (`src/app/page.tsx`) renders two sections: `Hero` and `Features`.

```
src/
  app/            # root layout, global CSS, single page route
  components/
    landing/      # page sections (Hero, Features) + AppStoreButton
    providers/    # MotionProvider (LazyMotion wrapper)
  lib/
    motion.ts     # re-exports framer-motion/m as `m`
```

**Import alias:** `@/*` → `src/*` (configured in `tsconfig.json`).

## Key patterns

**Server vs. client components** — default to server components. Add `"use client"` only when using browser APIs or Framer Motion (`m.*` elements). `MotionProvider` is placed at the root layout so the layout itself stays a server component.

**Framer Motion** — use `m.*` (lazy API) imported from `@/lib/motion`, never `motion.*` from `framer-motion` directly. `MotionProvider` wraps the whole app with `<LazyMotion features={domAnimation} strict>`. The `strict` prop will throw if you accidentally use the non-lazy `motion` components inside.

**Styling** — Tailwind v4 with `@import "tailwindcss"`. Brand tokens are defined as CSS variables in `globals.css` and wired into Tailwind via `@theme inline`:
- `bg-background` / `text-foreground` / `text-accent` / `bg-accent`
- Palette: `--background: #1a3a2a` (forest green), `--foreground: #f5f0e8` (cream), `--accent: #5a9e6f` (moss green)
- Fonts: `font-sans` → Inter, `font-serif` → Playfair Display (both loaded via `next/font/google`)
- No dark-mode override — the page is intentionally dark (forest green) in all color schemes.

**AppStoreButton** — two variants (`compact`, `wide`). Export `APP_STORE_URL` from the same file if you need the link elsewhere.

## Decisions log

`docs/DECISIONS.md` records all non-obvious architectural choices with rationale. Update it when making meaningful changes to the stack or conventions.