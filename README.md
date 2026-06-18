# Fatin Noor Anik — Frontend Portfolio

A single-page personal portfolio for frontend / JavaScript roles, built in the modern dark developer-portfolio style.

**Live:** deploys to Vercel as-is (`output: standalone`).

## Design

- **Dark theme** — near-black canvas with a single **emerald** accent (sky/violet used sparingly)
- Subtle fading **grid**, floating glow orbs, **glassy** surfaces, gradient hover-rings
- An interactive **particle-constellation** animation in the hero background

## Stack

- **Next.js 15** (App Router) + **TypeScript** — `output: standalone`
- **Tailwind CSS** + **shadcn/ui** (`Button`, `Badge`, `Card`)
- **Framer Motion** — scroll and interaction motion
- **lucide-react** icons
- Fonts: **Manrope** (display + body) · **JetBrains Mono** (mono)

## Sections

| # | Section | Notes |
| --- | --- | --- |
| — | **Hero** | Particle constellation, word-by-word headline reveal, rotating role |
| 01 | **Experience** | Timeline with per-role responsibilities + Development / QA track badges |
| 02 | **About** | Bio + quick-facts card |
| 03 | **Stack** | Tech marquee + categorized skill groups |
| — | **Contact** | Email CTA + social links |

## Motion

| Component | Effect |
| --- | --- |
| `hero-background` | Canvas particle network; links nearby nodes + reaches toward the cursor. DPR-aware, pauses when scrolled offscreen |
| `scroll-progress` | Spring-eased emerald progress bar |
| `hero` | Staggered word reveal + rotating role + floating glow |
| `marquee` | Seamless infinite tech marquee (pauses on hover) |
| `reveal` / `stagger` | `whileInView` section and list reveals |

All motion respects `prefers-reduced-motion`.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
```

## Production

```bash
npm run build && npm start
# or containerized (mapped to host :3001 so it can coexist with other apps):
docker compose up --build
```

## Customize

- Content lives in [`lib/data.ts`](lib/data.ts) — `profile`, `about`, `quickFacts`, `experience`, `skillGroups`, `marqueeStack`, `navLinks`, `socials`.
- Theme tokens are HSL CSS variables in [`app/globals.css`](app/globals.css); the accent is `--primary`.
- Fonts are configured in [`app/layout.tsx`](app/layout.tsx).
