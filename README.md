# Robert Pławski - Portfolio Website

A modern, interactive portfolio website showcasing my professional experience, projects, and technical skills. Built with Next.js 15, React 19, and featuring stunning visual effects.

[![Live Demo](https://img.shields.io/badge/Live-Demo-green.svg)](https://robertplawski.pl) [![Next.js](https://img.shields.io/badge/Next.js-15.4.1-black.svg)](https://nextjs.org/) [![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue.svg)](https://www.typescriptlang.org/) [![Cloudflare Pages](https://img.shields.io/badge/Deployed-Cloudflare%20Pages-orange.svg)](https://pages.cloudflare.com/)

## 🛠️ Tech Stack

### Core Technologies

- **Next.js 15.4.1** - React framework with App Router
- **React 19.1.0** - UI library
- **TypeScript 5.x** - Type safety
- **Tailwind CSS 4.x** - Utility-first CSS framework

### Visual & Animation

- **React bits** - animated React components

### Deployment & DevOps

- **Cloudflare Pages** - Edge deployment
- **OpenNext.js** - Next.js adapter for Cloudflare
- **Wrangler** - Cloudflare CLI

## 📊 Performance

- **Lighthouse Score**: 96/100/100/100
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.8s
- **Cumulative Layout Shift**: 0
- **Time to Interactive**: < 3.5s

## 📁 Project Structure

```
robertplawski.pl/
├── src/
│   ├── app/
│   │   ├── components/     # UI components
│   │   │   ├── informational/     # Compponents which display static information
│   │   │   ├── interactable/     # Components that user can interact with
│   │   │   └── sections/     # Site Sections
│   │   ├── globals.css     # Global styles
│   │   ├── layout.tsx      # Root layout
│   │   └── page.tsx        # Home page
├── public/                 # Static assets
├── wrangler.jsonc         # Cloudflare configuration
├── open-next.config.ts    # OpenNext.js configuration
└── next.config.ts         # Next.js configuration
```

## 🎯 Sections

- **Hero** - Eye-catching introduction with animated background
- **Professional Experience** - Timeline of work history
- **Source Code** - GitHub repositories display

## 🎨 Customization

### Content Management

- Update personal information in `src/app/components/sections/`
- Modify projects in the Portfolio section
- Add testimonials in the Testimonials section
- Update professional experience timeline

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run preview` - Preview Cloudflare deployment
- `npm run deploy` - Deploy to Cloudflare Pages
- `npm run cf-typegen` - Generate Cloudflare types

### Code Quality

- **ESLint** - Code linting with Next.js config
- **TypeScript** - Strict type checking
- **Prettier** - Code formatting (recommended)

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, or pnpm

### Installation

1. Clone the repository:

```bash
git clone https://github.com/robertplawski/robertplawski.pl.git
cd robertplawski.pl
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Building for Production

### Local Build

```bash
npm run build
npm start
```

### Cloudflare Pages Deployment

```bash
# Preview deployment
npm run preview

# Production deployment
npm run deploy
```

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📞 Contact

- **Website**: [robertplawski.pl](https://robertplawski.pl)
- **Email**: [contact@robertplawski.pl](mailto:contact@robertplawski.pl)
- **GitHub**: [@robertplawski](https://github.com/robertplawski)

---

Built with ❤️ by Robert Pławski
