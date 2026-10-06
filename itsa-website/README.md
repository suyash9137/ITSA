# ITSA — PVPPCOE Information Technology Student Association

A full rebuild of the ITSA website: Next.js 14 (App Router) + TypeScript +
Tailwind CSS, with GSAP/ScrollTrigger + Lenis for scroll-driven motion and
Framer Motion for route transitions.

## Design concept

**"Systems console"** — a technical, schematic aesthetic built for an IT
department rather than a generic "modern SaaS" look: an ink-dark background,
circuit-trace SVG lines, a copper/amber accent standing in for a soldered
trace, and monospace "spec labels" used the way a datasheet uses them — for
real metadata (status, category, index), never as decoration.

- **Type**: Space Grotesk (display) + JetBrains Mono (labels/data)
- **Color**: `ink #0F1216` · `panel #171B22` · `paper #F4F2EA` ·
  `copper #E3A857` · `signal #7C93FF`
- **Layout**: asymmetric 12-col grid, left spec-label / right content,
  numbered markers used only where content is genuinely sequential
  (the 4 initiative tracks, the events log)

## What's interactive

- Animated boot-sequence preloader (session-scoped, skips on repeat visits)
- Site-wide inertia scrolling via **Lenis**
- Scroll-in **and** scroll-out reveal animations (`components/Reveal.tsx`) —
  content animates both entering and leaving the viewport
- A **pinned scroll section** on the homepage ("What We Do") where the four
  initiative tracks cross-fade while the section stays fixed on screen
- Parallax on the hero background traces and the About/Home "Vision" marquee
- Animated count-up stats (300+ members / 30+ events / 20+ mentors)
- Magnetic CTA buttons, hover-reveal leadership cards, a full-screen
  clip-path menu reveal, a scroll-aware nav bar
- Animated route transitions via Framer Motion `AnimatePresence`
- Everything respects `prefers-reduced-motion` — motion is disabled
  gracefully rather than fought

## Getting started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Deploying

This is a standard Next.js App Router project — it deploys to **Vercel**
with zero configuration:

1. Push this repo to GitHub
2. Import it in Vercel → it auto-detects Next.js
3. Deploy

For any other host, `npm run build && npm run start` works the same way.

## Pages

`/` `/about` `/events` `/team` `/resources` `/ai-insights` `/community` `/contact`

## Still to fill in before this goes live

- **Leadership names/photos** — `components/sections/Leadership.tsx` has
  placeholder names (`[HOD Name]`, `[Coordinator Name]`, `[Student Name]`)
  and initials in place of real photos. Swap in real names/images.
- **Team roster** — `app/team/page.tsx`'s "Core team, by track" grid lists
  roles, not real people — add actual names.
- **Events** — `app/events/page.tsx` has representative/placeholder events
  by category; replace with your real calendar.
- **Testimonials** — `app/community/page.tsx` quotes are illustrative;
  swap for real member quotes (with permission).
- **Contact form backend** — `components/ContactForm.tsx` currently
  simulates a submit. Wire it to a real endpoint (Formspree, a Vercel
  serverless function, etc.) before launch.
- **Social links** — add real Instagram/LinkedIn/GitHub URLs to the footer.
- **OG image** — add a real `/public/og-image.png` and reference it in
  `app/layout.tsx` metadata for link-preview cards.

## A few decisions worth knowing about

1. **The pinned "What We Do" section** uses a single `ScrollTrigger.create`
   with manual `onUpdate` cross-fading rather than a scrubbed timeline —
   it's more code, but it keeps each panel snapping cleanly to full
   opacity instead of ghosting through partial cross-fades.
2. **The preloader only plays once per session** (via `sessionStorage`) —
   a returning visitor five minutes later shouldn't have to sit through it
   again; that's for first-load-of-the-session only.
3. **Reveal direction is used sparingly and meaningfully** — most content
   reveals `up`, but two-column sections alternate `left`/`right` so the
   two columns visually converge rather than all sliding the same way.
