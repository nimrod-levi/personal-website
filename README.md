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
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── constants/         # All text, data, and constants
│   │   ├── siteData.ts
│   │   ├── personalInfo.ts
│   │   ├── projectsData.ts
│   │   ├── skillsData.ts
│   │   └── icons/         # Icon components
│   ├── contexts/          # React contexts
│   │   └── ThemeContext.tsx
│   ├── types/             # TypeScript type definitions
│   ├── styles/            # CSS styles
│   │   ├── index.css
│   │   └── components/    # Component-specific styles
│   ├── App.tsx            # Main app component
│   └── main.tsx           # Entry point
├── index.html
├── vite.config.ts
├── tsconfig.json
└── package.json
```

## Fork and Create Your Own Site

This personal website template is designed to be easily customizable. Follow these steps to create your own version:

### 1. Fork the Repository

1. Click the "Fork" button at the top of this repository on GitHub
2. This creates a copy of the repository in your GitHub account

### 2. Clone Your Fork

```bash
git clone https://github.com/YOUR_USERNAME/personal-website.git
cd personal-website
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Customize Your Content

All content is stored in the `src/constants/` directory for easy customization. Update these files with your information:

#### Update Personal Information
Edit `src/constants/personalInfo.ts`:
- Replace name, title, location, email, and bio
- Update GitHub, LinkedIn, and X (Twitter) URLs and usernames

#### Update Site Content
Edit `src/constants/siteData.ts`:
- Update site name and title
- Customize navigation items
- Modify headings and descriptions for each section
- Update footer text

#### Update Projects
Edit `src/constants/projectsData.ts`:
- Add your own projects with titles, descriptions, technologies, and links

#### Update Skills
Edit `src/constants/skillsData.ts`:
- Customize your skills and technologies list

### 5. Customize Styling (Optional)

- Edit `src/styles/index.css` for global styles, colors, and theme variables
- Modify component-specific CSS files in `src/styles/components/` for section-specific styling

### 6. Update Package.json

Update the `package.json` file with your information:
- Change the `name` field to your project name
- Update `author` and `description` fields

### 7. Test Locally

```bash
npm run dev
```

Visit `http://localhost:5173` to preview your changes.


## Customization

All text content, names, and data are stored in the `src/constants/` directory:

- `siteData.ts` - Site-wide text and navigation
- `personalInfo.ts` - Personal information
- `projectsData.ts` - Projects data
- `skillsData.ts` - Skills and technologies

Edit these files to customize your website content without touching component code.

## Features

- ✨ Modern, clean design
- 📱 Fully responsive
- 🎨 Gradient accents and smooth animations
- ♿ Accessible markup
- ⚡ Fast development with Vite
- 🔧 Easy to customize via constants files

