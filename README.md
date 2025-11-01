# Personal Website

A modern, responsive personal website built with React.js and Vite.

## Project Overview

This is a personal website showcasing work, projects, and information. Built with React.js following modern best practices.

## Tech Stack

- **React.js** - UI library
- **Vite** - Build tool and dev server
- **CSS3** - Styling with CSS variables and modern features

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to the URL shown in the terminal (typically `http://localhost:5173`)

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
personal-website/
├── src/
│   ├── components/        # React components
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── constants/         # All text, data, and constants
│   │   ├── siteData.js
│   │   ├── personalInfo.js
│   │   └── projectsData.js
│   ├── styles/            # CSS styles
│   │   └── index.css
│   ├── App.jsx            # Main app component
│   └── main.jsx           # Entry point
├── index.html
├── vite.config.js
└── package.json
```

## Customization

All text content, names, and data are stored in the `src/constants/` directory:

- `siteData.js` - Site-wide text and navigation
- `personalInfo.js` - Personal information
- `projectsData.js` - Projects data

Edit these files to customize your website content without touching component code.

## Features

- ✨ Modern, clean design
- 📱 Fully responsive
- 🎨 Gradient accents and smooth animations
- ♿ Accessible markup
- ⚡ Fast development with Vite
- 🔧 Easy to customize via constants files

