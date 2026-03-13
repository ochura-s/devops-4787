# Launchpad

A static landing page built with **Next.js 16**, **TypeScript**, and **Tailwind CSS v4**, configured for deployment on **Netlify**.

## Tech Stack

- [Next.js](https://nextjs.org) — React framework with App Router and static export
- [TypeScript](https://www.typescriptlang.org) — Type-safe JavaScript
- [Tailwind CSS v4](https://tailwindcss.com) — Utility-first CSS framework
- [Netlify](https://netlify.com) — Hosting and continuous deployment

## Getting Started

### Prerequisites

- Node.js 20+
- npm

### Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build

```bash
npm run build
```

The static site is generated in the `out/` directory.

## Deploy to Netlify

### Option 1: Git-based deploy

1. Push this repo to GitHub/GitLab/Bitbucket.
2. Connect the repo in [Netlify](https://app.netlify.com).
3. Netlify will auto-detect settings from `netlify.toml`.

### Option 2: Manual deploy

```bash
npm run build
npx netlify-cli deploy --prod --dir=out
```

## Project Structure

```
src/app/
├── layout.tsx      Root layout with metadata and fonts
├── page.tsx        Landing page (Hero, Features, CTA, Footer)
└── globals.css     Tailwind imports and design tokens
netlify.toml        Netlify build and deploy configuration
next.config.ts      Next.js static export configuration
```

## License

See [LICENSE](LICENSE) for details.
