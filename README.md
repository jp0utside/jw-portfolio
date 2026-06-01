# Jake Warsaw - Personal Portfolio

A modern, responsive personal portfolio website showcasing professional experience, projects, and skills. Built with React and Vite for optimal performance and developer experience.

## 🚀 Live Demo

[View Live Portfolio](https://jpw-portfolio.vercel.app/)

## ✨ Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Interactive Sections**: 
  - Dynamic experience timeline with sidebar navigation
  - Project showcase with detailed descriptions and live demos
  - Color-coded technology skills with hover effects
- **Modern UI/UX**: 
  - Glassmorphism effects and smooth animations
  - Custom background images and gradients
  - Professional typography and spacing
- **Performance Optimized**: 
  - Fast loading with Vite build system
  - Optimized images and assets
  - SEO-friendly structure

## 🛠️ Tech Stack

### Frontend
- **React 19.1.1** - Modern React with latest features
- **Vite 7.1.7** - Fast build tool and development server
- **TailwindCSS 3.4.17** - Utility-first CSS framework
- **Lucide React 0.544.0** - Beautiful, customizable icons

### Development Tools
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing with autoprefixer
- **TypeScript Support** - Type definitions for React

### Build & Deployment
- **Vite Build** - Optimized production builds
- **Static Site Generation** - Ready for deployment on any static hosting

## 📋 Prerequisites

Before running this project, ensure you have the following installed:

- **Node.js** (v20.0.0 or higher)
- **npm** (v10.0.0 or higher) or **yarn** (v1.22.0 or higher)
- **Git** (for version control)

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/jw-portfolio.git
cd jw-portfolio
```

### 2. Install Dependencies

```bash
# Using npm
npm install

# Using yarn
yarn install

# Using pnpm
pnpm install
```

### 3. Development Server

```bash
# Using npm
npm run dev

# Using yarn
yarn dev

# Using pnpm
pnpm dev
```

The development server will start at `http://localhost:5173`

### 4. Build for Production

```bash
# Using npm
npm run build

# Using yarn
yarn build

# Using pnpm
pnpm build
```

### 5. Preview Production Build

```bash
# Using npm
npm run preview

# Using yarn
yarn preview

# Using pnpm
pnpm preview
```

## 📁 Project Structure

```
jw-portfolio/
├── public/
│   ├── images/           # Static images (profile, background, etc.)
│   └── vite.svg         # Vite logo
├── src/
│   ├── components/
│   │   ├── layout/      # Header, Footer, Layout components
│   │   ├── sections/    # Personal, Experience, Projects, Skills
│   │   └── ui/          # Reusable UI components
│   ├── data/            # JSON data files for content
│   │   ├── personal.js  # Personal information
│   │   ├── experience.js # Work experience data
│   │   ├── projects.js  # Project portfolio data
│   │   └── skills.js    # Skills and certifications
│   ├── utils/           # Utility functions
│   │   └── techColors.js # Technology color mapping
│   ├── App.jsx          # Main application component
│   ├── App.css          # Global styles and animations
│   ├── index.css        # TailwindCSS imports
│   └── main.jsx         # Application entry point
├── .gitignore           # Git ignore rules
├── eslint.config.js     # ESLint configuration
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── postcss.config.js    # PostCSS configuration
├── tailwind.config.js   # TailwindCSS configuration
├── vite.config.js       # Vite configuration
└── README.md            # This file
```

## 🎨 Customization

### Personal Information
Update your personal details in `src/data/personal.js`:
- Name, title, and bio
- Contact information
- Social media links
- Profile image path

### Experience & Projects
Modify `src/data/experience.js` and `src/data/projects.js` to showcase your work:
- Add/remove work experiences
- Update project descriptions and links
- Modify technology stacks

### Skills
Edit `src/data/skills.js` to reflect your technical skills:
- Add/remove skill categories
- Update certifications
- Modify personal interests

### Styling
- **Colors**: Update the color scheme in `tailwind.config.js`
- **Fonts**: Modify typography in `src/App.css`
- **Images**: Replace images in `public/images/`

### Technology Colors
Customize technology chip colors in `src/utils/techColors.js`:
- Add new technology categories
- Modify color gradients
- Update technology icons

## 🚀 Deployment

### Netlify
1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify
3. Configure custom domain (optional)

### Vercel
1. Connect your GitHub repository to Vercel
2. Vercel will automatically build and deploy
3. Configure environment variables if needed

### GitHub Pages
1. Build the project: `npm run build`
2. Push the `dist` folder to a `gh-pages` branch
3. Enable GitHub Pages in repository settings

### Traditional Hosting
1. Build the project: `npm run build`
2. Upload the `dist` folder contents to your web server
3. Configure your web server for SPA routing

## 🔧 Development Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run ESLint
npm run lint
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Jake Warsaw**
- Email: jacobpwarsaw@gmail.com
- LinkedIn: [linkedin.com/in/jake-warsaw-a0064927](https://www.linkedin.com/in/jake-warsaw-a0064927/)
- GitHub: [github.com/jp0utside](https://github.com/jp0utside)

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - UI library
- [Vite](https://vitejs.dev/) - Build tool
- [TailwindCSS](https://tailwindcss.com/) - CSS framework
- [Lucide](https://lucide.dev/) - Icon library
- [Unsplash](https://unsplash.com/) - Stock photography

---

⭐ If you found this portfolio helpful, please give it a star!