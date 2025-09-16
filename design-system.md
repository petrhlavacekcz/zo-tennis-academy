# ZO Tennis Academy Design System

## Overview
A sophisticated tennis academy design system inspired by luxury minimalism, combining athletic elegance with modern web aesthetics. Built for Svelte 5 with shadcn-svelte components and Paraglide 2.0 internationalization.

## Brand Identity

### Core Values
- **Athletic Elegance**: Professional tennis aesthetic with sophisticated visual hierarchy
- **Luxury Minimalism**: Clean, uncluttered interfaces with premium feel
- **Performance Focus**: Fast, responsive, mobile-first design approach
- **International Appeal**: Seamless Czech/English language support

### Visual Personality
- Modern and sophisticated
- Clean and professional
- Energetic yet refined
- Trustworthy and premium

## Color System

### Primary Palette (4 Colors + Dark Mode)
\`\`\`css
/* Light Mode */
--primary-black: hsl(0 0% 4%)        /* #0b0b0b - Typography, strong contrast */
--off-white: hsl(0 0% 98%)           /* #fafafa - Backgrounds, breathing space */
--orange-accent: hsl(24 95% 53%)     /* #f97316 - Tennis brand, CTAs, highlights */
--pure-white: hsl(0 0% 100%)         /* #ffffff - Cards, clean surfaces */

/* Dark Mode */
--primary-black: hsl(0 0% 98%)       /* #fafafa - Inverted typography */
--off-white: hsl(0 0% 4%)            /* #0b0b0b - Inverted backgrounds */
--orange-accent: hsl(20 91% 48%)     /* #ea580c - Darker orange for contrast */
--pure-white: hsl(0 0% 10%)          /* #1a1a1a - Dark mode cards */
\`\`\`

### Glass Morphism
\`\`\`css
--glass-light: hsla(0 0% 100% / 0.9)
--glass-dark: hsla(0 0% 10% / 0.9)
--backdrop-blur: 16px
\`\`\`

### Usage Guidelines
- **Orange Accent**: Use sparingly for CTAs, highlights, and brand elements
- **Primary Black**: Main typography and strong contrast elements
- **Off-White**: Page backgrounds and subtle contrast areas
- **Pure White**: Card backgrounds and clean surfaces
- **Glass Panels**: Overlay elements with backdrop blur

### Theme Tokens & Tailwind/Shadcn Mapping

Use CSS variables scoped to :root (light) and .dark (dark). Tailwind/shadcn colors consume these HSL variables.

```css
:root{
  --background: 0 0% 98%;    /* off-white */
  --foreground: 0 0% 4%;     /* primary-black */
  --primary:    24 95% 53%;  /* orange-accent */
  --card:       0 0% 100%;   /* pure-white */
  --accent:     0 0% 96%;
  --muted:      0 0% 94%;
  --border:     0 0% 86%;
  --input:      0 0% 90%;
  --ring:       24 95% 53%;  /* same as --primary */
}
.dark{
  --background: 0 0% 4%;
  --foreground: 0 0% 98%;
  --primary:    20 91% 48%;
  --card:       0 0% 10%;
  --accent:     0 0% 12%;
  --muted:      0 0% 14%;
  --border:     0 0% 20%;
  --input:      0 0% 18%;
  --ring:       20 91% 48%;
}
```

Conceptual mapping used by Tailwind/shadcn:

```ts
colors = {
  background: 'hsl(var(--background))',
  foreground: 'hsl(var(--foreground))',
  primary:    'hsl(var(--primary))',
  card:       'hsl(var(--card))',
  accent:     'hsl(var(--accent))',
  muted:      'hsl(var(--muted))',
  border:     'hsl(var(--border))',
  input:      'hsl(var(--input))',
  ring:       'hsl(var(--ring))'
}
```

### State Colors
- success: 142 70% 45% (on: white)
- warning: 43 96% 56% (on: black)
- destructive: 0 84% 60% (on: white)

## Typography

### Current Issues Analysis
**Problems Found:**
- **Too many font sizes**: 10+ variants across the app (should be 4-6 max)
- **Inconsistent weights**: Mixed font-medium, font-semibold, font-bold, font-extrabold
- **Conflicting font families**: CSS defines Space Grotesk for headings but components use Inter
- **Poor accessibility**: Some text below 16px minimum for body text
- **No systematic approach**: Ad-hoc sizing without mathematical consistency

### Recommended Typography System

#### Font Family Hierarchy
```css
/* Primary: Inter for all text */
font-family: Inter, system-ui, -apple-system, sans-serif;

/* Optional: Space Grotesk for large headlines only */
.hero-headline {
  font-family: "Space Grotesk", Inter, system-ui, sans-serif;
}
```

#### Simplified Type Scale (Major Second - 1.125 ratio)
**4 Primary Sizes + 2 Special Cases:**

```css
/* Core Typography Scale */
--text-xs: 0.75rem     /* 12px - Captions, labels */
--text-sm: 0.875rem    /* 14px - Secondary text */
--text-base: 1rem      /* 16px - Body text (minimum) */
--text-lg: 1.125rem    /* 18px - Large body, lead text */
--text-xl: 1.5rem      /* 24px - Small headings */
--text-2xl: 2rem       /* 32px - Section headings */

/* Special Display Sizes */
--text-4xl: 3rem       /* 48px - Page headings */
--text-hero: clamp(2.5rem, 6vw, 4rem) /* 40-64px - Hero only */
```

#### Font Weight System (Only 3 weights)
```css
--font-normal: 400     /* Body text, secondary text */
--font-semibold: 600   /* Headings, emphasis */
--font-bold: 700       /* Primary headings, CTAs */
```

#### Line Height System
```css
--leading-tight: 1.2   /* Headings */
--leading-normal: 1.5  /* Body text (accessibility minimum) */
--leading-relaxed: 1.6 /* Large body text */
```

### Typography Usage Guidelines

#### Semantic Hierarchy
```html
<!-- Hero Title (once per page) -->
<h1 class="text-hero font-bold leading-tight">

<!-- Page Headings -->
<h1 class="text-4xl font-bold leading-tight">

<!-- Section Headings -->
<h2 class="text-2xl font-semibold leading-tight">

<!-- Subsection Headings -->
<h3 class="text-xl font-semibold leading-tight">

<!-- Body Text -->
<p class="text-base font-normal leading-normal">

<!-- Large Body / Lead Text -->
<p class="text-lg font-normal leading-relaxed">

<!-- Secondary Text -->
<p class="text-sm font-normal leading-normal">

<!-- Labels / Captions -->
<span class="text-xs font-normal leading-normal uppercase tracking-wide">
```

#### Responsive Typography
```css
/* Only use clamp for hero titles */
.hero-title {
  font-size: clamp(2.5rem, 6vw, 4rem);
  line-height: 1.1;
  letter-spacing: -0.02em;
}

/* All other text should use fixed sizes with responsive design */
```

### Implementation Recommendations

#### Phase 1: Audit and Replace
1. **Replace oversized headings**: text-5xl, text-6xl → text-4xl or text-hero
2. **Consolidate body text**: text-lg, text-xl → text-base or text-lg only
3. **Unify weights**: Replace font-medium, font-extrabold → font-semibold, font-bold

#### Phase 2: Accessibility Compliance
1. **Minimum body text**: Ensure all body text is 16px (text-base) minimum
2. **Contrast ratios**: Verify 4.5:1 minimum contrast
3. **Line height**: Ensure 1.5 minimum for body text

#### Phase 3: Systematic Application
1. **Create typography utility classes**
2. **Document component-specific usage**
3. **Establish review process for new typography**

### Migration Guide

**Current → Recommended:**
- `text-xs` → Keep (12px for labels only)
- `text-sm` → Keep (14px for secondary text)
- `text-base` → Keep (16px body text)
- `text-lg` → Keep (18px large body)
- `text-xl` → Keep (24px small headings)
- `text-2xl` → Keep (32px section headings)
- `text-3xl` → Replace with `text-2xl`
- `text-4xl` → Keep (48px page headings)
- `text-5xl, text-6xl` → Replace with `text-4xl` or `text-hero`
- Custom clamps → Replace with `text-hero` for hero titles only

## Spacing System

### Base Unit: 4px (0.25rem)

### Spacing Scale
\`\`\`css
--space-1: 0.25rem    /* 4px */
--space-2: 0.5rem     /* 8px */
--space-3: 0.75rem    /* 12px */
--space-4: 1rem       /* 16px */
--space-6: 1.5rem     /* 24px */
--space-8: 2rem       /* 32px */
--space-12: 3rem      /* 48px */
--space-16: 4rem      /* 64px */
--space-24: 6rem      /* 96px */
--space-32: 8rem      /* 128px */
\`\`\`

### Spacing Patterns
- **Component Internal**: 1.5rem (24px) padding
- **Card Spacing**: 2rem (32px) gap between cards
- **Section Spacing**: 6rem (96px) between major sections
- **Container Padding**: 3rem (48px) horizontal on desktop, 1.5rem (24px) on mobile

## Layout System

### Container System
\`\`\`css
.container-custom {
  max-width: 1320px;
  margin: 0 auto;
  padding: 0 3rem; /* 48px desktop */
  padding: 0 1.5rem; /* 24px mobile */
}
\`\`\`

### Layout Method Priority
1. **Flexbox** - Primary layout method for most components
2. **CSS Grid** - Complex 2D layouts (coach cards, program grids)
3. **Absolute Positioning** - Only for overlays and special effects

### Responsive Breakpoints
\`\`\`css
/* Mobile First */
--mobile: 0px
--tablet: 768px
--desktop: 1024px
--wide: 1320px
\`\`\`
### Layout Decisions (Project)
- Section vertical spacing: 6rem (py-24)
- Container: max-width 1320px; padding-x 24px (mobile) / 48px (desktop)
- Breakpoints: mobile 0, tablet 768px, desktop 1024px, wide 1320px


### Grid Systems
- **Coaches**: 2-column desktop, 1-column mobile
- **Programs Overview (Home)**: 5-col xl, 4-col lg, 3-col md, 2-col sm, 1-col xs
- **Programs Page**: 3-column desktop, 2-column tablet, 1-column mobile
- **Feature Lists**: Auto-fit grid with minimum 280px columns

## Components Design

### Card Components
- **Border Radius**: 1.5rem (24px) for large cards, 1rem (16px) for small cards
- **Shadow**: Subtle elevation with `shadow-lg`, enhanced to `shadow-xl` on hover
- **Aspect Ratios**: 4:3 for images, 16:9 for video content
- **Overflow**: Hidden for image scaling effects

### Button Components
- **Primary**: Orange background, white text, rounded-full
- **Secondary**: Transparent background, orange border, orange text
- **Ghost**: No background, orange text, subtle hover background
- **Sizes**: Small (2rem height), Medium (2.5rem height), Large (3rem height)

### Navigation Components
- **Desktop**: Horizontal navigation with glass morphism background
- **Mobile**: Slide-out sheet with backdrop blur
- **Language Switcher**: Dropdown with flag icons
- **Theme Switcher**: Dropdown with system/light/dark options

#### Component Standards (Decided)

- Cards
  - Large radius 24px (rounded-3xl), Small radius 16px (rounded-2xl)
  - Shadows: shadow-lg; on hover shadow-xl; keep minimal, no heavy glow
  - Overflow hidden; subtle image zoom on hover
- Buttons
  - Primary: bg-primary, text-primary-foreground, rounded-full
  - Outline: border border-primary, text-primary, transparent background
  - Ghost: no background, text-primary, hover:bg-accent
  - Sizes: sm / default / lg consistent s paddings
- Inputs & Labels
  - Inputs: border-border, bg-background; focus:border-primary; focus ring 3px primary/50
  - Labels: uppercase, tracking-wide, font-medium
- Focus (global)
  - 2px orange ring with offset; keyboard-visible on all interactive elements

```css
/* Example focus ring */
:where(a,button,input,select,textarea,[role="button"]) :focus-visible{
  outline: none;
  box-shadow: 0 0 0 2px hsl(var(--background)), 0 0 0 4px hsl(var(--ring));
}
```

### Form Components
- **Input Fields**: Clean borders, orange focus states, rounded corners
- **Labels**: Uppercase, medium weight, orange accent color
- **Validation**: Orange error states, green success states

## Animation System

### Timing Functions
\`\`\`css
--ease-smooth: cubic-bezier(0.21, 0.47, 0.32, 0.98)
--ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55)
--ease-sharp: cubic-bezier(0.4, 0, 0.2, 1)
\`\`\`

### Duration Scale
\`\`\`css
--duration-fast: 150ms     /* Quick interactions */
--duration-normal: 300ms   /* Standard transitions */
--duration-slow: 500ms     /* Complex animations */
--duration-reveal: 700ms   /* Text reveals */
\`\`\`

### Animation Patterns

#### Glass Usage Decisions (Project)
- Header: glass background with backdrop blur (enabled)
- Cards: glass only for hover overlays when needed, not as base surfaces
- CTA/floating elements: use sparingly to keep minimalism and readability

- **Hover Effects**: Scale (1.02), Y-lift (-8px), shadow elevation
- **Text Reveals**: Character-by-character with staggered delays (30ms)
- **Parallax**: Scroll-based transforms with reduced motion respect
- **Page Transitions**: Fade and slide combinations
- **Loading States**: Subtle pulse and skeleton patterns

### Micro-Interactions
- **Button Press**: Scale down to 0.98 on active state
- **Card Hover**: Lift, scale, and image zoom simultaneously
- **Menu Toggle**: Smooth hamburger to X transformation
- **Form Focus**: Orange glow with smooth border transition

## Visual Elements

### Photography Style
- **Tennis Courts**: Clay court textures, professional lighting
- **Portraits**: Clean backgrounds, consistent lighting, orange branded clothing
- **Action Shots**: Dynamic angles, motion blur for energy
- **Facilities**: Architectural photography with clean lines

### Iconography
- **Style**: Outline icons from Lucide Svelte
- **Sizes**: default 20px; 24px in headings; 16px for compact actions
- **Color**: Inherit text color, orange for active states
- **Usage**: Consistent sizing within component groups

### Glass Morphism Effects
- **Background**: Semi-transparent with backdrop blur
- **Borders**: Subtle white/20 opacity borders
- **Usage**: Navigation bars, modal overlays, floating elements

## Accessibility

### Color Contrast
- **AA Compliance**: Minimum 4.5:1 contrast ratio for normal text
- **AAA Compliance**: 7:1 contrast ratio for important content
- **Orange Accessibility**: Sufficient contrast against both light and dark backgrounds

### Focus States
- **Visible**: Orange outline with 2px offset
- **Keyboard Navigation**: Clear focus indicators on all interactive elements
- **Skip Links**: Hidden but accessible navigation shortcuts

### Motion Preferences
- **Reduced Motion**: Respect `prefers-reduced-motion` media query
- **Alternative Animations**: Fade transitions instead of complex movements
- **Performance**: Hardware acceleration for smooth animations

## Internationalization (Paraglide 2.0)

### Language Support
- **Primary**: Czech (cs)
- **Secondary**: English (en)
- **Expansion**: Ready for additional European languages

### Text Direction
- **LTR Support**: Left-to-right reading patterns
- **RTL Ready**: Prepared for future right-to-left language support

### Cultural Considerations
- **Date Formats**: European DD/MM/YYYY format
- **Number Formats**: European decimal comma notation
- **Currency**: Czech Koruna (CZK) and Euro (EUR) support

## Performance Guidelines

### Image Optimization
- **Formats**: WebP with JPEG fallback
- **Sizes**: Responsive images with appropriate srcset
- **Loading**: Lazy loading for below-fold content
- **Compression**: Optimized for web without quality loss

### Animation Performance
- **Hardware Acceleration**: Use transform and opacity for animations
- **Will-Change**: Apply sparingly for performance-critical animations
- **Reduced Motion**: Provide alternatives for accessibility

### Bundle Optimization
- **Tree Shaking**: Import only used components and utilities
- **Code Splitting**: Route-based splitting for optimal loading
- **Critical CSS**: Inline critical styles for faster rendering

## Brand Guidelines

### Logo Usage
- **Primary**: ZO Tennis Academy wordmark
- **Minimum Size**: 120px width for digital use
- **Clear Space**: Equal to the height of the "Z" letter
- **Color Variations**: Black on light backgrounds, white on dark backgrounds

### Voice and Tone
- **Professional**: Expert tennis instruction and facilities
- **Approachable**: Welcoming to players of all levels
- **Energetic**: Passionate about tennis and improvement
- **Trustworthy**: Reliable coaching and academy experience

### Photography Guidelines
- **Lighting**: Natural light preferred, consistent exposure
- **Composition**: Rule of thirds, dynamic angles for action shots
- **Color Grading**: Warm tones that comlement orange brand color
- **Consistency**: Maintain visual style across all imagery

---

*This design system serves as the foundation for all ZO Tennis Academy digital experiences, ensuring consistency, accessibility, and brand alignment across all touchpoints.*
