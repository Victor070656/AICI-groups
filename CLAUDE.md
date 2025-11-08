# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start the development server on http://localhost:3000
- `npm run build` - Build the production application
- `npm start` - Start the production server
- `npm run lint` - Run ESLint for code linting

## Project Architecture

This is a Next.js 16 project using the App Router pattern for a real estate and consultancy website (AICI Group).

### Key Technologies
- **Next.js 16** with App Router
- **React 19** with TypeScript
- **Tailwind CSS v4** for styling with custom design system
- **Google Fonts**: Playfair Display (serif) and Inter (sans-serif)

### Directory Structure

- **app/** - Next.js App Router pages and layouts
  - Uses file-based routing for pages: Home, About, Services, Blog, Properties, Team, Contact, Login
  - Root layout at `app/layout.tsx` with font configuration and global styling
  - Global styles in `app/globals.css`

- **components/** - Organized by feature/page
  - Component groups: Home, About, Blog, Contact, Login, Property, Team
  - Each page has its own component subdirectory with related UI elements

### Design System
- **Colors**: Primary (#C8102E), Secondary (#0033A0), Accent (#D4AF37), Light/Dark backgrounds
- **Typography**: Display font (Playfair Display) and body font (Inter)
- **Dark Mode**: Configured with Tailwind's dark mode using class strategy

### Configuration
- **TypeScript**: Strict mode enabled with path aliases (`@/*` maps to root)
- **ESLint**: Uses Next.js recommended configuration with core web vitals and TypeScript rules
- **Import paths**: Use `@/` prefix for absolute imports from the root directory

### Architecture Notes
- Component-based architecture with clear separation by feature
- Responsive design with Tailwind CSS
- Font optimization using next/font/google
- Dark mode support throughout the application