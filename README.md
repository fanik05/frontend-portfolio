# Fatin Noor Anik — Frontend Portfolio

A motion-rich, single-page portfolio aimed at frontend / JavaScript roles. Built to *be* the demo: the animation is the proof of craft.

**Concept — "Kinetic Spotlight":** committed dark theme, electric-lime accent, living aurora background, and motion everywhere it earns attention.

## Stack

- **Next.js 15** (App Router) + **TypeScript**, `output: standalone`
- **Tailwind CSS** + **shadcn/ui** (new-york style) — `Button`, `Card`, `Badge`
- **Framer Motion** — all interaction & scroll motion
- **lucide-react** icons
- Fonts: **Syne** (display) · **Plus Jakarta Sans** (body) · **IBM Plex Mono**

## Motion features

| Component | Effect |
| --- | --- |
| `scroll-progress` | Spring-eased top progress bar |
| `cursor-spotlight` | Lime glow trailing the cursor (pointer-fine only) |
| `hero` | Animated aurora blobs, word-by-word headline reveal, rotating role |
| `magnetic` | Buttons that spring toward the cursor |
| `animated-counter` | Stats count up on scroll-in |
| `tilt-card` | 3D cursor-tracked tilt + glare on project cards |
| `marquee` | Seamless infinite tech marquee (pauses on hover) |
| `reveal` / `stagger` | `whileInView` section + list reveals |

All motion respects `prefers-reduced-motion`.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
```

## Production

```bash
npm run build && npm start
# or containerized (mapped to host :3001 to coexist with other apps):
docker compose up --build
```

## Customize

- Content lives in [`lib/data.ts`](lib/data.ts) — profile, projects, experience, stats, skills.
- Replace [`public/Fatin-Noor-Anik-Resume.pdf`](public/Fatin-Noor-Anik-Resume.pdf) with your real résumé (keep the name, or update `profile.resumeHref`).
- Theme tokens are HSL CSS variables in [`app/globals.css`](app/globals.css); the accent is `--primary`.

Deploys to Vercel as-is.
