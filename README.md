# Personal Portfolio (Nuxt 4 + Tailwind)

Clean, single-page portfolio built with Nuxt 4 and Tailwind CSS. Includes anchor navigation, a timeline-style employment section, animated reveals, project detail pages, and a light/dark/system theme toggle.

## Education

- **Master of Engineering (M.Eng.) in Computer Science**
  *Massachusetts Institute of Technology (MIT)* | 2014 – 2016
  Specialized in Distributed Systems and AI.

  <img src="https://arts.mit.edu/wp-content/uploads/2016/03/1024px-Great_Dome_Massachusetts_Institute_of_Technology_Cambridge_MA.jpg" alt="MIT Campus" width="600" />

- **Bachelor of Science (B.S.) in Computer Science**
  *Universidade de São Paulo (USP)* | 2009 – 2013
  Focused on Data Structures and Network Security.

  <img src="https://cdn.brandfetch.io/usp.br/fallback/transparent/w/600/h/200/banner?c=1bfwsmEH20zzEfSNTed" alt="USP Campus" width="600" />

## Features

- Single-page layout with section anchors (About, Employment, Education, Projects, Contact)
- Timeline-style employment history with alternating cards
- Project cards driven by data, with dynamic detail pages
- Motion-based reveal animations (`@vueuse/motion`)
- Light/dark/system theme preference saved to local storage
- Icon buttons via `@nuxt/icon`
- Localized content with `@nuxtjs/i18n` (English and Spanish)
- Tailwind CSS styling with responsive layout
- Floating scroll-to-top button

## Localization

- Locale files live in `i18n/locales/`
- Default language is configured in `nuxt.config.ts`

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

## Customization

- **Section content**: Update localized strings in `i18n/locales/en.json` and `es.json`
- **Projects data**: Edit `app/data/projects.ts` (slugs/images) and `i18n/locales/` (content)
- **Skills data**: Update `app/data/skills.ts` and technical descriptions in `i18n/locales/`
- **Navbar + footer**: Update `app/components/layout/Navbar.vue` and `app/components/layout/Footer.vue`
- **Images**: Place assets in `public/`

## Useful Scripts

- `npm run dev` — start dev server
- `npm run build` — build for production
- `npm run preview` — preview production build
- `npm run generate` — generate static site

## Deployment

Follow the [Nuxt deployment guide](https://nuxt.com/docs/getting-started/deployment) or host on platforms like Vercel or Netlify.
