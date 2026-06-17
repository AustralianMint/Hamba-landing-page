# Content brief

Source of truth for landing page copy and content decisions. Read this instead of
re-deriving context from chat history. Update it as copy changes.

No em-dashes in any text (project-wide rule).

---

## Site structure

1. Hero (existing)
2. Features (existing)
3. About Hamba (new) — the product story
4. About the developer (new) — mini-CV, implicit job-search framing
5. Footer (new) — links + Privacy Policy
6. Privacy Policy (new) — separate route, `/privacy`

Decisions: About Hamba and About-developer are separate sections. Job framing is
implicit (portfolio tone, not "hire me" copy) but CV download and contact are
present for recruiters who land here. Chess Tracker and Kalimba Visualiser get one
sentence each, no dedicated cards. Privacy Policy is a separate page linked from
the footer, not a modal.

---

## About Hamba — draft copy

**Heading:** The story behind Hamba

**Body (revised draft, per Thomas's notes on the real origin story):**

> Hamba started during covid. Going outside was one of the few things you could
> still do, but every place needed a test, and all I wanted was somewhere to sit
> outside. That feeling stuck with me: when you are out with friends and you just
> want somewhere to sit, enjoy the view, have a drink, you shouldn't have to work
> for it.
>
> Google Maps and Apple Maps don't really solve this. You zoom in, squint for a
> patch of green, and hope it's actually a place you can sit, not someone's back
> garden or a closed construction site. It's a mission. Hamba skips that: it just
> shows you where you can sit outside in Berlin and not be bothered.
>
> It later became my capstone project at CODE University. Every spot on Hamba has
> been visited in person before it makes the map, no scraped listings, no
> generated content. Over four semesters I led a team of four through the full
> build, from architecture to clean code standards to automated testing. Hamba
> shipped to the App Store and has passed 200 downloads.

**Stat callouts (confirmed: yes, visual treatment):**

Pull two stats out of the prose into their own small callout cards, sitting
alongside or below the body text, matching the existing `bg-foreground/5
rounded-3xl` card style used in Features:

- **200+** downloads on the App Store
- **4** team members led across 4 semesters

Keep the numbers large (serif, `text-accent` or `text-foreground`) with a short
label underneath, same pattern as a typical stats strip. Implementation detail
(grid vs. flex, exact sizing) is for Claude Code/Cursor to decide against the
existing design tokens; this just confirms the two numbers to surface and that
they should be visually separated from the paragraph, not buried in it.

---

## About the developer — draft copy

**Heading:** Who built this

**Body (draft):**

> I am Thomas Frey, a software engineer based in Berlin. I just finished a B.Sc in
> Software Engineering at CODE University, where Hamba was my capstone project.
> My thesis looked at mobile platform migration.
>
> I work mainly in Swift and SwiftUI, with Kotlin and Jetpack Compose on the
> Android side, and React, HTML, CSS, and JavaScript on the web. Recent backend
> work includes AWS, Supabase, Vapor, and PostgreSQL.
>
> Outside of Hamba I have built a chess tournament tracker for a 30-member chess
> league I founded at CODE, and a kalimba note visualiser for a musician who needed
> a way to notate music visually.
>
> I am German, South African, and speak German, English, and Afrikaans natively.

**Links/CTAs:**
- GitHub: github.com/AustralianMint
- LinkedIn: www.linkedin.com/in/thomas-frey-b60a02213
- Email: thomas.frey@code.berlin
- App Store: https://apps.apple.com/de/app/hamba/id6444381532?l=en-GB
- Download CV (PDF, already in `public/files/Thomas_Frey_CV.pdf`)

---

## Footer — draft content

- GitHub: github.com/AustralianMint
- LinkedIn: www.linkedin.com/in/thomas-frey-b60a02213
- Email: thomas.frey@code.berlin
- "Download CV" link (`/files/Thomas_Frey_CV.pdf`)
- App Store link: https://apps.apple.com/de/app/hamba/id6444381532?l=en-GB
- Privacy Policy link (`/privacy`)
- Small copyright line, e.g. "© 2026 Thomas Frey"

---

## Privacy Policy — confirmed facts and draft text

**Confirmed with Thomas:**
- Location permission: yes, requested to show the map
- Accounts/sign-in: none
- Analytics or crash reporting: none
- Backend (AWS/Supabase/Vapor): not currently used; spot data is hardcoded in the app
- Advertising/third-party SDKs: none
- Contact: thomas.frey@code.berlin

Because there are no accounts, no analytics, no ads, and no backend, this policy
is short and avoids language (CCPA opt-out, "sale of data," "business partners,"
"other users") that doesn't apply. Revisit and expand if any of this changes
(e.g. adding a backend or analytics later).

**Implemented at `src/app/privacy/page.tsx`.** That file is now the source of
truth for this copy, not this brief. Don't maintain the text in two places;
if the policy needs to change, edit the page directly and treat this section
as historical context for why each part exists, not a copy to keep in sync.

Sections present in the live page, beyond the original draft: a "Who is
responsible for this" section naming Thomas as data controller, an explicit
legal-basis statement under Location (consent via the OS permission prompt,
revocable in device settings), an "International data transfers" section
(none, since nothing leaves the device), and a "Your rights" section covering
the GDPR right to lodge a complaint with a supervisory authority. These were
added because the developer is based in Germany, so GDPR's required
disclosure elements apply regardless of where users are, plain language is
fine under GDPR Article 12, but completeness of disclosure is not optional.

For reference, the sections originally drafted here were:

> ## Children's privacy
>
> Hamba does not knowingly collect information from anyone, including
> children. Since no personal data is collected at all, this applies equally
> to all users regardless of age.
>
> ## Changes to this policy
>
> If Hamba's data practices change (for example, if a backend or analytics is
> added later), this page will be updated and the "Last updated" date above
> will reflect that.
>
> ## Contact
>
> Questions about this policy can be sent to thomas.frey@code.berlin.

Apple's App Store listing requires a working URL to this page, so it needs to be
live at `/privacy` before/alongside any App Store metadata update.

---

## Outstanding inputs needed from Thomas

- [x] LinkedIn URL: www.linkedin.com/in/thomas-frey-b60a02213
- [x] Public-facing email: thomas.frey@code.berlin
- [x] App Store link: https://apps.apple.com/de/app/hamba/id6444381532?l=en-GB
- [x] Hamba's actual data collection: location yes, no accounts, no analytics, no backend, no ads
- [x] "200+ downloads" / "team of 4" get a visual stat-card treatment, matching Features card style
- [x] About Hamba: revised with real covid-era origin story and the "zooming into maps for a patch of green" problem framing
- [x] About developer: approved as drafted
- [x] Footer / Privacy Policy: approved as drafted

**Status: content brief is complete.** Ready to hand to Claude Code or Cursor to
build About Hamba, About the developer, the footer, and the `/privacy` route.
