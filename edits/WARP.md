# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is **Stairio**, a static website for a business website service company. It's a single-page application built with vanilla HTML, CSS, and JavaScript that showcases website packages and includes an agent referral program.

## High-Level Architecture

### Core Structure
- **Single HTML file architecture**: All content lives in `index.html` with embedded CSS/JS
- **Multi-page SPA pattern**: Different "pages" are shown/hidden using JavaScript navigation
- **Embedded styling**: All CSS is inlined in `<style>` tags within the HTML head
- **Component-based sections**: Hero, Features, Revolution (Bento grid), Packages, Agent pages, etc.

### Key Design Patterns
- **Apple-inspired design system**: Uses design tokens (CSS custom properties) for colors, spacing, shadows
- **Glassmorphism UI**: Extensive use of backdrop-filter, rgba backgrounds, and layered transparency
- **Psychology-optimized theming**: `.psy` body class applies specific design refinements for conversion
- **Mobile-first responsive**: Extensive media queries with progressive enhancement

### JavaScript Architecture
- **Vanilla JS with functional patterns**: No frameworks, direct DOM manipulation
- **Event-driven navigation**: Hash-based routing between sections (#home, #packages, etc.)
- **Interactive package builder**: Dynamic pricing calculator with add-ons selection
- **WebGL fluid cursor**: `splash-cursor.js` creates animated cursor effects using WebGL shaders

## Development Workflow

### File Structure
```
├── index.html          # Main application file (158KB+ with embedded assets)
├── homepage.html       # Empty placeholder file
├── privacy.html        # Legal page
├── terms.html          # Legal page  
├── assets/
│   ├── splash-cursor.js # WebGL fluid cursor animation
│   └── images/
│       ├── hero/       # Hero background images
│       ├── avatars/    # User testimonial avatars (SVG)
│       ├── logos/      # Brand logos (SVG)
│       └── portfolio/  # Portfolio preview images (SVG)
├── robots.txt          # SEO configuration
└── sitemap.xml         # Site structure for search engines
```

### Key Technical Components

#### 1. Theme System
The project uses a dual-theme approach:
- **Base theme**: Standard clean design
- **Psychology theme** (`.psy` class): Conversion-optimized typography and spacing

#### 2. Package Builder
Complex interactive pricing system with:
- Base packages (Starter, Plus, Premium)
- Dynamic add-on selection with visual feedback
- Real-time price calculation
- Billing toggle (one-time vs monthly)
- Animated selection states with CSS keyframes

#### 3. WebGL Cursor Effects
`splash-cursor.js` implements:
- Full-screen pointer-events:none canvas overlay
- Fluid dynamics simulation using WebGL shaders
- Touch and mouse interaction support
- Graceful WebGL fallback handling

## Development Commands

### Serving the Site
Since this is a static site with no build process:
```bash
# Simple HTTP server (Python)
python -m http.server 8000

# Alternative with Node.js
npx serve .

# Or any static file server
```

### Asset Management
```bash
# Optimize images (if needed)
# SVG files are already optimized, JPG files may need compression

# Check file sizes
du -sh assets/images/**/*
```

### Testing
```bash
# Validate HTML
npx html-validate index.html

# Check for broken links (if using external references)
# Most assets are embedded or inline, so minimal external deps

# Performance testing
lighthouse index.html --output html --output-path ./lighthouse-report.html
```

### SEO and Validation
```bash
# Validate sitemap
# Check robots.txt compliance
# Test meta tags and structured data
```

## Key Implementation Details

### CSS Architecture
- **CSS Custom Properties**: Extensive use of CSS variables for theming
- **Component-scoped styles**: Each section has its own style namespace
- **Performance optimizations**: `content-visibility: auto` for off-screen sections
- **Accessibility**: Focus states, skip links, ARIA labels throughout

### JavaScript Patterns
- **Module pattern**: IIFE wrapping to avoid global namespace pollution
- **Progressive enhancement**: Graceful degradation for WebGL and advanced features
- **Touch/mouse unified handling**: Single event system for desktop and mobile

### Performance Considerations
- **Zoom scaling**: Global 0.8 zoom for compact layout
- **Lazy rendering**: Off-screen content uses `content-visibility`
- **Backdrop-filter fallbacks**: Graceful degradation for unsupported browsers
- **Animation preferences**: `prefers-reduced-motion` support

## Important Notes for Future Development

### File Editing Approach
- **Single source of truth**: All code is in `index.html` - avoid creating separate CSS/JS files
- **Embedded assets**: SVGs and small images are inlined to reduce HTTP requests  
- **Incremental enhancement**: Add features within the existing architecture

### Browser Compatibility
- **WebGL fallbacks**: Handle WebGL unavailability gracefully
- **Backdrop-filter support**: Provide solid color fallbacks
- **Modern CSS features**: Uses Grid, Flexbox, CSS variables extensively

### Mobile Considerations
- **Touch interactions**: Package selection works on touch devices
- **Responsive breakpoints**: Major breakpoint at 768px with mobile-specific optimizations
- **Scroll behavior**: Sticky positioning and scroll-based interactions

This is a production-ready static website with sophisticated interactive elements built entirely with vanilla web technologies.
