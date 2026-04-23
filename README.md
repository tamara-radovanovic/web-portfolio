# Tamara Radovanović — Portfolio

Personal portfolio website built with React 19, TypeScript, and Tailwind CSS v4. Features a responsive design with dark/light theme toggle and smooth animations.

## Live Demo

> Add your deployed URL here (Vercel, Netlify, GitHub Pages, etc.)

## Features

- Responsive layout — works on mobile, tablet, and desktop
- Dark / light theme toggle with persistent preference
- Animated sections using Motion (Framer Motion v12)
- Client-side routing with React Router v7
- CV download
- 404 page

## Tech Stack

| Category       | Technologies                                              |
| -------------- | --------------------------------------------------------- |
| Framework      | React 19, TypeScript                                      |
| Styling        | Tailwind CSS v4, CSS Modules                              |
| Animations     | Motion (Framer Motion v12)                                |
| Routing        | React Router DOM v7                                       |
| Build Tool     | Vite 8                                                    |
| Linting        | ESLint 9, typescript-eslint                               |

## Project Structure

```
src/
├── assets/          # Images and static assets
├── components/      # Reusable UI components (Navbar)
├── data/            # Static content — personal info, skills, projects
├── hooks/           # Custom React hooks (useTheme)
├── pages/           # Route-level pages (Home, NotFound)
├── sections/        # Page sections (Hero, About, Skills, Projects, Contact)
├── types/           # Shared TypeScript types
└── main.tsx         # App entry point
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
cd web-portfolio
npm install
```

### Development

```bash
npm run dev
```

Opens at `http://localhost:5173`

