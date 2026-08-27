# Portfolio Website

A modern personal portfolio website built with Next.js, React, TypeScript, and Tailwind CSS. The site highlights professional experience, selected projects, skills, and contact information through a polished, animated interface.

## Features

- Responsive one-page portfolio layout
- Animated section transitions and motion effects
- Interactive project showcase with modal detail views
- Clean, modern UI with a dark theme
- Built with the latest Next.js App Router architecture

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- Radix UI primitives
- Lucide React icons
- Geist font

## Project Structure

```text
src/
  app/                # App Router pages and global styles
  components/         # Reusable UI sections and page components
  lib/                # Utility helpers
public/               # Static assets and project media
```

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm, pnpm, yarn, or bun

### Installation

```bash
npm install
```

### Development

Run the local development server:

```bash
npm run dev
```

Then open http://localhost:3000 in your browser.

### Production Build

```bash
npm run build
```

### Start Production Server

```bash
npm run start
```

### Linting

```bash
npm run lint
```

## Customizing Content

You can update the main portfolio content by editing the section components in the src/components folder, especially:

- src/components/hero-section.tsx
- src/components/experience-section.tsx
- src/components/selected-projects.tsx
- src/components/skills-section.tsx
- src/components/footer.tsx

## Deployment

This project is ready to deploy on platforms such as Vercel, Netlify, or any Node.js-compatible hosting provider.

For Vercel deployment, the standard Next.js workflow applies:

```bash
npm run build
```

## License

This project is for personal use and portfolio purposes.
