# My DJ Portfolio 🎧

A modern, responsive web portfolio to showcase my DJ sets and mixes.  
Built with **React + TypeScript + Vite**, deployed via **Netlify (JAMStack)**.

**Goal:** Combine professional frontend engineering with my passion for music.

## Features

- Responsive UI (Mobile-First, Tailwind CSS v4)
- Mixes section(s) with data from **Mixcloud API**
- Clean and modular code structure (React Hooks, TypeScript)
- API abstraction via custom hooks & service layer
- ESLint + Prettier integration to ensure consistent code style
- Unit tests with **Vitest + React Testing Library**
- Ready for internationalization (i18n)
- Deployable JAMStack setup (Netlify)

## Tech Stack

- **Frontend:** React 19, TypeScript, Vite
- **Styling:** Tailwind CSS v4
- **Tooling:** ESLint, Prettier
- **Testing:** Vitest, Jest, React Testing Library
- **Deployment:** Netlify (JAMStack)
- **API:** Mixcloud REST API

## Getting Started

### Installation & Startup

```bash
git clone https://github.com/X-Fate2011/my-dj-portfolio.git
cd my-dj-portfolio
npm install
npm run dev
```

### Run tests

```bash
npm run test
```

## Code Quality

This project utilizes **ESLint + Prettier** for clean and consistent code.

- `npm run lint` → Checks code for linting errors.
- `npm run lint:fix` → Automatically solves linting errors.
- `npm run format` → Formats code according to Prettier rules.

## Live Demo

https://x-fate.de

## Quality Assurance

- Tested with Vitest + RTL
- Linting & formatting via ESLint + Prettier
- Ready for CI/CD with GitHub Actions (build & test pipeline)
- Performance checked via Lighthouse

## Architecture

- Components: Functional, stateless where possible
- Hooks: For API calls and to reuse common code (e.g. custom _useMixcloudShows_)
- Service Layer: API requests separated from UI logic
- State Management: Local state

## Future improvements

- Add a dark mode toggle
- Improve test coverage
- React Query integration for caching & infinite scroll

## License

This project is **not an open source project**.  
It serves solely as a personal portfolio and to demonstrate me and my skills. Use, reproduction or distribution is not permitted.
