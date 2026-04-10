# Content Syndicate

A modern, high-performance marketing landing page and web application for Content Syndicate - a PR distribution service that helps brands get featured on major news outlets.

## 🚀 Features

- **Modern Tech Stack**: Built with React 19, TypeScript, Vite 6, and Tailwind CSS v4
- **Component-Based Architecture**: Modular, reusable components for easy maintenance
- **Dynamic Content**: Integrated RSS feed parser to pull real-time press releases and news
- **Responsive Design**: Fully responsive layout that works beautifully on all devices
- **Smooth Animations**: High-performance animations powered by Motion (Framer Motion)
- **Form Validation**: Client-side form validation with real-time feedback
- **Type Safety**: Full TypeScript coverage with strict mode enabled
- **Code Quality**: ESLint 9 and Prettier configured for consistent code style

## 🛠️ Tech Stack

- **Framework**: React 19
- **Language**: TypeScript 5.8
- **Build Tool**: Vite 6
- **Styling**: Tailwind CSS v4
- **Animations**: Motion
- **Icons**: Lucide React
- **Routing**: React Router DOM 7
- **Linting & Formatting**: ESLint 9, Prettier 3

## 📦 Installation

```bash
# Clone the repository
git clone <repository-url>
cd content-syndicate-site

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:3060` (as defined in `package.json`).

## 📜 Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run type checking
npm run typecheck

# Run ESLint
npm run lint

# Format code with Prettier
npm run format

# Run tests
npm run test
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── forms/           # Form components and logic
│   ├── layout/          # Layout components (Header, Footer, etc.)
│   ├── newsroom/        # Components specific to the Newsroom page
│   └── sections/        # Major page sections (Hero, Stats, Pricing, etc.)
├── content/             # Static HTML/Markdown content
├── hooks/               # Custom React hooks (e.g., useRssFeed, useDebounce)
├── lib/                 # Utility functions, constants, and API helpers
├── pages/               # Route-level page components (Home, About, Pricing, etc.)
├── types/               # TypeScript type definitions
├── App.tsx              # Main application router
├── main.tsx             # Application entry point
└── index.css            # Global styles and Tailwind configuration
```

## 🎨 Customization

### Content Configuration

Global configuration and static copy can be found in `src/lib/constants.ts`. You can modify:

- Company information and contact details
- Navigation items
- Feature comparisons and pricing plans
- Steps, FAQS, and more.

### Styling

The application uses Tailwind CSS v4. Global styles and custom theme variables are defined in `src/index.css`. The primary palette includes:

- Primary accent color: `#9BC621` (green)
- Dark base color: `#101828`

## 🚢 Deployment

The project is configured for seamless deployment on platforms like Vercel, Netlify, or Cloudflare Pages.

### Standard Build

```bash
npm run build
```

The optimized static files will be generated in the `dist/` directory.

### Deploy to Vercel

Vercel will automatically detect the Vite build configuration.

1. Push your code to GitHub/GitLab/Bitbucket.
2. Import the project into Vercel.
3. The default build settings (`npm run build`, output directory: `dist`) will apply automatically.

## 📝 License

This project is proprietary and owned by Content Syndicate.

## 📧 Support

For support, email hello@contentsyndicate.com or visit https://contentsyndicate.net
