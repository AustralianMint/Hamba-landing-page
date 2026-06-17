# Build plan

Sequencing for implementing the content in `docs/CONTENT.md`. Each task below is
sized to be a single, self-contained prompt to Claude Code or Cursor, with its
own review checkpoint before moving to the next. Don't batch multiple tasks into
one prompt: the point of splitting is to catch problems (wrong tone, broken
layout, content that doesn't fit the design system) before they get built on top
of.

Read `docs/CONTENT.md` for the actual copy and `CLAUDE.md` for conventions
(server components by default, `m.*` from `@/lib/motion`, Tailwind design
tokens) before starting any task below.

---

## Task order and why

1. **Privacy Policy page** first, not last. It has zero dependencies on the
   other three tasks, and two other tasks (Footer) need to link to it. Building
   it first means there's a real route to link to, not a guess at a future path.
2. **About Hamba** section. Independent of everything else. Build second simply
   because it's the highest-value content (the actual story) and you want to see
   it rendered early.
3. **About the developer** section. Independent of the others, but depends on
   nothing from task 2 either, order between 2 and 3 doesn't matter on
   dependency grounds, only on which you'd rather see first.
4. **Footer**. Built last because it's the one component that actually
   references the others: the `/privacy` route from task 1, the CV file, the
   App Store link, GitHub, LinkedIn, email. If you build it before task 1
   exists, you will either skip the privacy link or have to come back and fix
   it. Don't.
5. **Integration pass**. Not a content task. Wire the new sections into
   `src/app/page.tsx`, run `npm run lint` and `npm run typecheck`, check the
   page at mobile and desktop widths, confirm `strict` LazyMotion isn't
   throwing if any new section uses `m.*`. This is where you catch the things
   that only show up once everything's actually assembled, like uneven spacing
   between sections or two sections that both assumed they'd be visually
   anchored against a background that turns out to clash.

---

## Task 1: Privacy Policy page

**Scope:** new route at `/privacy` (`src/app/privacy/page.tsx`), rendering the
policy text from `docs/CONTENT.md`.

**Definition of done:**
- Route is reachable at `/privacy`
- Renders as a server component (no client-side state needed for static text)
- Uses existing design tokens (`bg-background`, `text-foreground`, fonts), not
  a generic unstyled page bolted on
- Readable line length and heading hierarchy, this is a wall of text, treat it
  like one: don't let body copy run edge-to-edge on desktop
- `npm run lint` and `npm run typecheck` pass

**Open design question to resolve while building, not before:** does this page
need the same nav/footer chrome as the home page, or can it be a bare content
page with just a link back home? Either is defensible. Pick one and note it in
`DECISIONS.md` if it's not obvious from the code.

---

## Task 2: About Hamba section

**Scope:** new component, likely `src/components/landing/about-hamba.tsx`,
rendered in `page.tsx` after `Features`.

**Definition of done:**
- Copy matches the revised draft in `docs/CONTENT.md` (covid origin story, the
  "zooming into maps for a patch of green" framing), not the earlier draft
- Two stat callouts (200+ downloads, 4-person team across 4 semesters) as
  visually separated cards, matching the `bg-foreground/5 rounded-3xl` card
  style already used in `Features`, not buried in the paragraph
- Consistent with existing animation pattern (`m.*`, rise/container variants)
  if you want it animated, this is optional, the page doesn't have to animate
  every section
- `npm run lint` and `npm run typecheck` pass

**Question worth asking before calling this done:** does this section visually
compete with `Features` for attention, or does it clearly read as a different
kind of content (story vs. feature list)? If they look identical, a visitor
won't register the shift in what they're reading.

---

## Task 3: About the developer section

**Scope:** new component, likely `src/components/landing/about-developer.tsx`.

**Definition of done:**
- Copy matches the approved draft in `docs/CONTENT.md`
- Links present and correct: GitHub, LinkedIn, email (mailto), CV download
  (`/files/Thomas_Frey_CV.pdf`)
- CV link actually triggers a download or opens the PDF, test this, don't
  assume an `<a href>` to a PDF behaves the way you expect across browsers
- `npm run lint` and `npm run typecheck` pass

---

## Task 4: Footer

**Scope:** new component, likely `src/components/landing/footer.tsx`, rendered
once at the bottom of `page.tsx` (and on the `/privacy` page if you decided in
Task 1 that it needs shared chrome).

**Definition of done:**
- Links: GitHub, LinkedIn, email, CV download, App Store, `/privacy`
- All links resolve, this is the task where a typo'd href is most likely to slip
  through silently, check every one
- Copyright line
- `npm run lint` and `npm run typecheck` pass

---

## Task 5: Integration pass

Not content, verification. Confirm:
- All four pieces render together in the right order in `page.tsx`
- No layout collisions (spacing, contrast) between sections built independently
- Site works at narrow (mobile) and wide (desktop) widths
- Lint and typecheck pass on the whole project, not just the file you last
  touched
- Update `docs/DECISIONS.md` if anything here introduced a non-obvious choice
  (e.g. the privacy page chrome decision from Task 1)
