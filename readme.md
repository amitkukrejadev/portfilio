# Amit Kukreja - Portfolio Website

A modern, responsive portfolio website built with Next.js, showcasing my skills, experience, and projects as a Full Stack Developer.

## 🌟 Features

- **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- **Dark/Light Mode** - Toggle between themes with smooth transitions
- **Interactive Contact Form** - Functional email integration using EmailJS
- **Animated Tech Icons** - Engaging animations for technology stack display
- **Modern UI/UX** - Clean design with Tailwind CSS and shadcn/ui components
- **SEO Optimized** - Proper meta tags and semantic HTML structure
- **Fast Performance** - Built with Next.js 15 and optimized for speed

## 🚀 Live Demo

Visit the live website: [amitkukrejadev.vercel.app](https://amitkukrejadev.vercel.app)

## 🛠️ Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Modern UI components
- **Lucide React** - Beautiful icons

### Backend & Services
- **EmailJS** - Contact form email functionality
- **Vercel** - Deployment and hosting

### Development Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Git** - Version control

## 📁 Project Structure

\`\`\`
├── app/
│   ├── about/              # About page
│   ├── contact/            # Contact page with working form
│   ├── education/          # Education background
│   ├── experience/         # Work experience
│   ├── projects/           # Projects showcase
│   ├── skills/             # Technical skills
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Homepage
├── components/
│   ├── ui/                 # shadcn/ui components
│   ├── footer.tsx          # Footer component
│   ├── navbar.tsx          # Navigation component
│   ├── theme-provider.tsx  # Theme context provider
│   └── theme-toggle.tsx    # Dark/light mode toggle
├── hooks/                  # Custom React hooks
├── lib/                    # Utility functions
└── public/                 # Static assets
\`\`\`

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/amitkukrejadev/portfolio.git
   cd portfolio
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   \`\`\`

3. **Install EmailJS (for contact form)**
   \`\`\`bash
   npm install @emailjs/browser
   \`\`\`

4. **Run the development server**
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   \`\`\`

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## ⚙️ Configuration

### EmailJS Setup (Contact Form)

To enable the contact form functionality:

1. **Sign up at [EmailJS](https://www.emailjs.com/)**
2. **Create an email service** (Gmail recommended)
3. **Create an email template** with variables: \`from_name\`, \`from_email\`, \`message\`
4. **Update the EmailJS credentials** in \`app/contact/page.tsx\`:
   \`\`\`typescript
   await emailjs.send(
     "YOUR_SERVICE_ID",    // Replace with your service ID
     "YOUR_TEMPLATE_ID",   // Replace with your template ID
     formData,
     "YOUR_PUBLIC_KEY"     // Replace with your public key
   )
   \`\`\`

### Customization

#### Personal Information
Update your details in:
- \`app/page.tsx\` - Hero section
- \`app/about/page.tsx\` - About content
- \`app/experience/page.tsx\` - Work experience
- \`app/education/page.tsx\` - Educational background
- \`app/projects/page.tsx\` - Project showcases
- \`app/skills/page.tsx\` - Technical skills

#### Styling
- **Colors**: Modify \`tailwind.config.ts\` and \`app/globals.css\`
- **Components**: Update shadcn/ui components in \`components/ui/\`
- **Layout**: Adjust spacing and layout in individual page files

## 📱 Pages Overview

- **Home** (\`/\`) - Hero section with animated tech stack
- **About** (\`/about\`) - Personal story and background
- **Experience** (\`/experience\`) - Professional work history
- **Education** (\`/education\`) - Academic qualifications
- **Skills** (\`/skills\`) - Technical skills with proficiency levels
- **Projects** (\`/projects\`) - Portfolio of work and projects
- **Contact** (\`/contact\`) - Working contact form and information

## 🎨 Key Features Explained

### Dark/Light Mode
- Implemented using \`next-themes\`
- Persistent theme selection
- Smooth transitions between modes

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Flexible grid layouts and typography scaling

### Contact Form
- Real email sending via EmailJS
- Form validation and error handling
- Loading states and success feedback
- Accessible form labels and ARIA attributes

### Animations
- CSS transitions for hover effects
- JavaScript animations for tech icons
- Smooth page transitions

## 🚀 Deployment

### Vercel (Recommended)
1. **Push to GitHub**
2. **Connect to Vercel**
3. **Deploy automatically**

### Other Platforms
- **Netlify**: Drag and drop \`out/\` folder after \`npm run build\`
- **GitHub Pages**: Use \`next export\` for static export

## 📊 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for LCP, FID, and CLS
- **Bundle Size**: Optimized with Next.js automatic code splitting

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (\`git checkout -b feature/amazing-feature\`)
3. Commit changes (\`git commit -m 'Add amazing feature'\`)
4. Push to branch (\`git push origin feature/amazing-feature\`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

**Amit Kukreja**
- Email: [amitkukrejadev@gmail.com](mailto:amitkukrejadev@gmail.com)
- LinkedIn: [linkedin.com/in/amitkukrejadev](https://linkedin.com/in/amitkukrejadev)
- GitHub: [github.com/amitkukrejadev](https://github.com/amitkukrejadev)
- Portfolio: [amitkukrejadev.vercel.app](https://amitkukrejadev.vercel.app)

## 🙏 Acknowledgments

- **shadcn/ui** for the beautiful component library
- **Vercel** for hosting and deployment
- **EmailJS** for contact form functionality
- **Lucide** for the icon set
- **Next.js team** for the amazing framework

---

⭐ **Star this repository if you found it helpful!**
\`\`\`

Made with ❤️ by [Amit Kukreja](https://github.com/amitkukrejadev)
\`\`\`
