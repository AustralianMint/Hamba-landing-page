# Project decisions

Brief log of implementation choices for the Hamba landing page. Update this file when you make meaningful architectural or tooling decisions.

---

## Stack & scaffolding

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Framework | **Next.js 16** via `create-next-app` | App Router, RSC, first-class Vercel deploy, current default template |
| Language | **TypeScript** (strict) | Type safety; matches Next.js and team expectations |
| Styling | **Tailwind CSS v4** | Utility-first, ships with CNA template; `@import "tailwindcss"` in `globals.css` |
| Linting | **ESLint 9** + `eslint-config-next` | Core Web Vitals + TypeScript rules aligned with Next.js |
| Animation | **Framer Motion 12** | Requested; works well with React client components |

**Scaffold command:** `create-next-app` with `--typescript --tailwind --eslint --app --src-dir --import-alias "@/*"`.

---

## Project layout

```
src/
  app/           # routes, layouts, global CSS
  components/    # UI (client vs server split by folder/file)
  lib/           # shared utilities (e.g. motion re-exports)
```

- **`src/` directory** — Keeps application code separate from config at repo root.
- **`@/*` import alias** — Maps to `./src/*` (see `tsconfig.json`); avoids deep relative paths.

---

## React & Next.js patterns

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Routing | **App Router** | Default for new Next.js apps; layouts, metadata API, RSC |
| Default component type | **Server Components** | Smaller client bundle; fetch and static content on server |
| Client boundaries | **`"use client"` only where needed** | e.g. `Hero`, `MotionProvider` — animation and browser APIs |
| Fonts | **Geist + Geist Mono** via `next/font/google` | Self-hosted at build time; CSS variables `--font-geist-sans` / `--font-geist-mono` |
| Metadata | **Root `metadata` export** | `title.default` + `title.template` (`%s \| Hamba`) for consistent SEO |

---

## Framer Motion

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Bundle size | **`LazyMotion` + `domAnimation`** | Loads only DOM animation features; wrapped in `MotionProvider` at root |
| Component API | **`m.*` from `framer-motion/m`** | v12 lazy API (`m.p`, `m.div`); re-exported as `@/lib/motion` |
| Strict mode | **`strict` on `LazyMotion`** | Ensures lazy `m` components are used (not full `motion`) inside provider |
| Provider placement | **Root layout** | One provider for the whole app; layout stays a server component, provider is client |

Animated UI lives in client components under `src/components/` (e.g. `landing/hero.tsx`).

---

## Styling

- **Design tokens** — CSS variables in `:root` (`--background`, `--foreground`) wired into Tailwind via `@theme inline` in `globals.css`.
- **Dark mode** — `prefers-color-scheme: dark` on `:root` (no `next-themes` yet); add a theme provider later if manual toggle is needed.
- **Body font** — `font-sans` on `<body>` uses Geist via theme `--font-sans`.

---

## Tooling & config

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Package manager | **npm** | CNA default; `package-lock.json` committed |
| Scripts | `dev`, `build`, `start`, `lint`, `typecheck` | `lint` runs `eslint .`; `typecheck` runs `tsc --noEmit` |
| Turbopack root | `turbopack.root: process.cwd()` in `next.config.ts` | Avoids wrong workspace root when a parent `package-lock.json` exists |
| Env files | `.env.example` committed; `.env.local` ignored | Documents vars without secrets; standard Next.js pattern |

---

## Git

- Repository initialized by `create-next-app` with an initial commit.
- **No custom commit hooks or Prettier** yet — add if the team wants enforced formatting.

---

## Intentionally not chosen (yet)

- **Prettier** — ESLint only; can add for consistent formatting.
- **Testing** (Vitest, Playwright) — add when flows are defined.
- **`next-themes`** — system dark mode only for now.
- **Component library** (shadcn, Radix) — keep landing page lightweight until design is set.

---

## How to use this file

When you make a non-obvious choice, add a short section or table row:

1. **What** you decided  
2. **Why** (constraint, tradeoff, or goal)  
3. **What you didn’t pick** (if relevant)

Keep entries brief; link to docs or PRs when helpful.
