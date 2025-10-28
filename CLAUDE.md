# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
- `npm run dev` - Start development server
- `npm run dev -- --open` - Start development server and open in browser

### Building & Production
- `npm run build` - Create production build
- `npm run preview` - Preview production build

### Code Quality
- `npm run format` - Format code with Prettier
- `npm run lint` - Run ESLint and Prettier checks
- `npm run check` - Run Svelte type checking
- `npm run check:watch` - Run Svelte type checking in watch mode

## Architecture

### Framework & Technology Stack
- **SvelteKit 2.x** with **Svelte 5** (using new runes syntax: `$state`, `$props`, `$effect`, `$derived`)
- **TypeScript** for type safety
- **Tailwind CSS v4** with `@tailwindcss/vite` plugin
- **shadcn-svelte** component library (bits-ui based)
- **Paraglide.js 2.0** for internationalization (Czech/English/German/Polish)
- **Vite** as build tool with static adapter for static site generation

### Project Structure
- `src/lib/components/ui/` - shadcn-svelte UI components (Button, Card, Input, etc.)
- `src/lib/components/zo-tennis-academy/` - Application-specific components
  - `components/pages/` - Page components (home, coaches, programs, contact)
  - `components/sections/` - Reusable section components
  - `components/header/` - Header and navigation components
  - `components/footer/` - Footer component
  - `components/theme/` - Theme switching functionality
  - `components/seo/` - SEO component with meta tags, Open Graph, and structured data
- `src/lib/paraglide/` - Auto-generated i18n files (do not edit manually)
- `src/lib/utils/` - Utility functions (localize.ts for i18n routing)
- `messages/` - Translation files (cs.json, en.json, de.json, pl.json) with SEO metadata
- `src/routes/[[lang]]/` - File-based routing with optional language parameter
- `src/routes/sitemap.xml/` - Dynamic sitemap generation with multilingual support

### Navigation & State Management
- **SvelteKit file-based routing** with `[[lang]]` parameter for multilingual support
- **Svelte 5 runes** for reactive state management (`$state`, `$derived.by()`, `$effect`)
  - ⚠️ **Important**: Use `$derived.by(() => {...})` for complex derived values, not `$derived(() => {...})`
- **Svelte 5 `$app/state`** for accessing page state (replaces deprecated `$app/stores`)
- Theme switching (light/dark/system) with localStorage persistence using `$effect` for browser-only code
- No external state management library needed

### Styling & Design System
- Tailwind CSS v4 with custom design tokens
- Component aliases configured in `components.json`:
  - `$lib/components` for components
  - `$lib/components/ui` for UI components
  - `$lib/utils` for utilities
- Tennis-themed animations and hover effects defined globally in layout

### Internationalization (Paraglide.js 2.0)
- **Base locale**: Czech (`cs`) at `/`
- **Supported locales**: Czech (`cs`), English (`en`), German (`de`), Polish (`pl`)
- **URL structure**: `/{locale}/{page}` (e.g., `/en/coaches`, `/de/programs`)
- **Messages**: Stored in `/messages/{locale}.json` (309+ keys per language)
- **Runtime**: Paraglide generates tree-shakable message functions in `src/lib/paraglide/`
- **Strategy**: `['url', 'cookie', 'baseLocale']` for locale detection
- **SSG Support**: Invisible anchor tags in layout for crawling all language versions

### Build Configuration
- **Static adapter** (`@sveltejs/adapter-static`) for SSG
- **Base path**: `/zo-tennis-academy` for GitHub Pages deployment (production only)
- **Prerendering**: Enabled for all routes (`prerender: true`)
- **Tailwind CSS v4**: Integrated via Vite plugin
- **Paraglide Vite Plugin**: Compiles messages at build time

### SEO Implementation (2025 Best Practices)
- **SEO Component** (`src/lib/components/zo-tennis-academy/components/seo/seo.svelte`)
  - Dynamic meta tags (title, description, keywords)
  - Open Graph tags for social media (Facebook, LinkedIn)
  - Twitter Card tags
  - Canonical URLs for each page
  - hreflang tags for multilingual SEO (all 4 languages)
  - Structured data (Schema.org JSON-LD)
- **Structured Data Types**:
  - `SportsActivityLocation` for organization
  - `Person` for coaches (Zuzana Ondrášková, Michal Ondrášek)
  - `Service` for programs (individual, group, junior, professional)
  - `ContactPage` for contact information
- **Sitemap**: Dynamic XML sitemap at `/sitemap.xml` with all pages and language alternates
- **Robots.txt**: Updated with sitemap reference
- **SEO Messages**: All SEO metadata stored in translation files under `seo.*` keys
  - `seo.home.*` - Homepage SEO
  - `seo.coaches.*` - Coaches page SEO
  - `seo.programs.*` - Programs page SEO
  - `seo.contact.*` - Contact page SEO

### Svelte 5 Best Practices
- ✅ Use `$derived.by(() => {...})` for complex derived values
- ✅ Use `$effect(() => {...})` for side effects and browser-only code
- ✅ Use `$app/state` instead of deprecated `$app/stores`
- ✅ Return cleanup functions from `$effect` for event listeners
- ✅ Use `$state` for reactive state
- ✅ Use `$props()` for component props with destructuring