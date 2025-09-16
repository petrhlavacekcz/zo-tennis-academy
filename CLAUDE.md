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
- **SvelteKit 2.x** with **Svelte 5** (using new runes syntax: `$state`, `$props`, `$effect`)
- **TypeScript** for type safety
- **Tailwind CSS v4** with `@tailwindcss/vite` plugin
- **shadcn-svelte** component library (bits-ui based)
- **Paraglide.js** for internationalization (Czech/English)
- **Vite** as build tool with static adapter for GitHub Pages

### Project Structure
- `src/lib/components/ui/` - shadcn-svelte UI components (Button, Card, Input, etc.)
- `src/lib/components/zo-tennis-academy/` - Application-specific components
  - `components/pages/` - Page components (home, coaches, programs, contact)
  - `components/sections/` - Reusable section components
  - `components/header/` - Header and navigation components
  - `components/footer/` - Footer component
  - `components/theme/` - Theme switching functionality
- `src/lib/paraglide/` - Auto-generated i18n files
- `messages/` - Translation files (cs.json, en.json)

### Navigation & State Management
- Client-side routing implemented with state management in `zo-tennis-academy.svelte`
- Theme switching (light/dark/system) with localStorage persistence
- No external state management library - uses Svelte 5 runes

### Styling & Design System
- Tailwind CSS with custom design tokens
- Component aliases configured in `components.json`:
  - `$lib/components` for components
  - `$lib/components/ui` for UI components
  - `$lib/utils` for utilities
- Tennis-themed animations and hover effects defined globally

### Internationalization
- Base locale: Czech (`cs`)
- Supported locales: Czech (`cs`), English (`en`)
- Messages stored in `/messages/{locale}.json`
- Paraglide generates runtime files in `src/lib/paraglide/`

### Build Configuration
- **Static adapter** for GitHub Pages deployment
- Base path: `/zo-tennis-academy/` in production
- Prerendering enabled for all routes
- Tailwind CSS v4 integrated via Vite plugin