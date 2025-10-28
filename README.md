# ZO Tennis Academy

A modern, multilingual tennis academy website built with SvelteKit 2.x and Svelte 5.

## 🎾 Features

- **Multilingual Support**: Czech (default), English, German, Polish
- **Modern Stack**: SvelteKit 2.x with Svelte 5 runes
- **Type-Safe**: Full TypeScript support
- **Internationalization**: Paraglide.js 2.0 with tree-shakable translations
- **Static Site Generation**: Pre-rendered for optimal performance
- **Dark Mode**: System-aware theme switching
- **Responsive Design**: Mobile-first with Tailwind CSS v4
- **Component Library**: shadcn-svelte UI components

## 🚀 Quick Start

### Prerequisites

- Node.js 20+ (LTS recommended)
- npm, pnpm, or yarn

### Installation

```sh
npm install
```

### Development

Start the development server:

```sh
npm run dev

# or open in browser automatically
npm run dev -- --open
```

The site will be available at `http://localhost:5173/`

### Building

Create a production build:

```sh
npm run build
```

Preview the production build:

```sh
npm run preview
```

## 📁 Project Structure

```
zo-tennis-academy/
├── src/
│   ├── lib/
│   │   ├── components/
│   │   │   ├── ui/              # shadcn-svelte components
│   │   │   └── zo-tennis-academy/
│   │   │       └── components/
│   │   │           ├── pages/   # Page components
│   │   │           ├── sections/ # Reusable sections
│   │   │           ├── header/  # Header & navigation
│   │   │           ├── footer/  # Footer
│   │   │           └── theme/   # Theme switcher
│   │   ├── paraglide/           # Auto-generated i18n (don't edit)
│   │   └── utils/               # Utility functions
│   ├── routes/
│   │   ├── [[lang]]/            # Multilingual routes
│   │   │   ├── +layout.svelte   # Root layout
│   │   │   ├── +page.svelte     # Home page
│   │   │   ├── coaches/         # Coaches page
│   │   │   ├── programs/        # Programs page
│   │   │   └── contact/         # Contact page
│   │   └── +layout.svelte       # Global layout
│   ├── app.html                 # HTML template
│   ├── app.css                  # Global styles
│   └── hooks.server.ts          # Server hooks
├── messages/                    # Translation files
│   ├── cs.json                  # Czech (default)
│   ├── en.json                  # English
│   ├── de.json                  # German
│   └── pl.json                  # Polish
├── project.inlang/              # Paraglide config
├── svelte.config.js             # SvelteKit config
├── vite.config.ts               # Vite config
└── tailwind.config.js           # Tailwind config
```

## 🌍 Internationalization

The site supports 4 languages with URL-based routing:

- **Czech (cs)**: `/` (default)
- **English (en)**: `/en/`
- **German (de)**: `/de/`
- **Polish (pl)**: `/pl/`

### Adding/Editing Translations

1. Edit translation files in `messages/{locale}.json`
2. Paraglide will auto-generate type-safe message functions
3. Use messages in components: `import * as m from "$lib/paraglide/messages"`

## 🎨 Styling

- **Tailwind CSS v4**: Utility-first CSS framework
- **shadcn-svelte**: Pre-built accessible components
- **Custom Design Tokens**: Tennis-themed colors and animations
- **Dark Mode**: Automatic system detection with manual override

## 📝 Code Quality

```sh
# Type checking
npm run check

# Type checking (watch mode)
npm run check:watch

# Format code
npm run format

# Lint code
npm run lint
```

## 🚢 Deployment

The site is configured for static site generation and can be deployed to:

- **GitHub Pages**
- **Netlify**
- **Vercel**
- **Cloudflare Pages**
- Any static hosting service

The build output is in the `build/` directory.

## 📚 Tech Stack

- **Framework**: SvelteKit 2.x
- **UI Library**: Svelte 5 (with runes)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Components**: shadcn-svelte
- **i18n**: Paraglide.js 2.0
- **Build Tool**: Vite
- **Adapter**: @sveltejs/adapter-static

## 📄 License

© 2025 ZO Tennis Academy. All rights reserved.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.
