# MediCloud — Telehealth SaaS Platform

[![Deploy Status](https://img.shields.io/badge/deploy-success-brightgreen)]()
[![License](https://img.shields.io/badge/license-MIT-blue.svg)]()
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue.svg)]()
[![React](https://img.shields.io/badge/React-19+-61DAFB.svg?logo=react&logoColor=white)]()
[![Vite](https://img.shields.io/badge/Vite-6+-646CFF.svg?logo=vite&logoColor=white)]()
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4+-38B2AC.svg?logo=tailwindcss&logoColor=white)]()

> **All-in-one telehealth platform for modern practices.** Manage patients, clinical notes, and secure HD video consultations in one unified workspace.

---

## 📋 Overview

MediCloud is a comprehensive telehealth SaaS platform designed for healthcare providers who want to deliver exceptional virtual care. Built with modern web technologies, it provides a seamless experience for both providers and patients.

### ✨ Key Features

| Feature | Description |
|---------|-------------|
| 🎥 **Video Consultations** | HD, peer-to-peer encrypted video calls with built-in waiting rooms and screen sharing |
| 📅 **Smart Scheduling** | Automated booking, timezone detection, and calendar sync with Google & Outlook |
| 📝 **Digital EHR** | Structured clinical notes, ICD-10 coding, and longitudinal patient health records |
| 💊 **ePrescriptions** | Securely send prescriptions directly to pharmacies with automated interaction checks |
| 💳 **Integrated Payments** | Billing, insurance claims processing, and direct patient payments |
| 🔒 **Security & Compliance** | SOC2 Type II, HIPAA, and GDPR compliant with data residency options |

---

## 🏗️ Project Structure

```
MediCloud/
├── index.html                 # Landing page (Bootstrap 5)
├── css/
│   └── style.css              # Custom styles for landing page
├── medicloud-app/             # React + TypeScript + Vite Application
│   ├── public/
│   │   ├── favicon.svg
│   │   └── icons.svg
│   ├── src/
│   │   ├── assets/            # Static assets (images, icons)
│   │   ├── components/        # React components
│   │   │   ├── Hero.tsx
│   │   │   ├── Features.tsx
│   │   │   ├── HowItWorks.tsx
│   │   │   ├── TrustedBy.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   ├── Pricing.tsx
│   │   │   ├── FAQ.tsx
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── VideoShowcase.tsx
│   │   ├── lib/
│   │   │   └── SectionContext.tsx
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css
│   ├── index.html             # App entry point
│   ├── package.json
│   ├── tsconfig.json
│   ├── vite.config.ts
│   ├── tailwind.config.js
│   └── .oxlintrc.json
└── DESIGN.md                  # Design system documentation
```

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18+ (recommended: 20+)
- **npm** 9+ or **pnpm** 8+

### Installation

```bash
# Clone the repository
git clone https://github.com/girishlade111/MediCloud.git
cd MediCloud

# Install dependencies for the React app
cd medicloud-app
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

### Landing Page

The static landing page (`index.html`) can be opened directly in a browser or served with any static server:

```bash
# From root directory
npx serve .
# or
python -m http.server 8000
```

---

## 🛠️ Development

### Available Scripts (medicloud-app)

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Type-check and build for production |
| `npm run lint` | Run Oxlint for code quality |
| `npm run preview` | Preview production build locally |

### Code Quality

- **TypeScript** — Strict mode enabled
- **Oxlint** — Fast, Rust-based linter with React & TypeScript rules
- **Prettier** — Configured via Oxlint (runs with `npm run lint`)

---

## 🎨 Tech Stack

### Landing Page
- **HTML5** — Semantic markup with accessibility (ARIA)
- **Bootstrap 5.3** — Responsive grid, components, utilities
- **Custom CSS** — Design tokens, animations, component overrides
- **IBM Plex Sans** — Typography system

### React Application
| Category | Technology |
|----------|------------|
| **Framework** | React 19 + TypeScript |
| **Build Tool** | Vite 6 |
| **Styling** | TailwindCSS 4 (via Vite plugin) |
| **Animation** | Framer Motion 12 |
| **Icons** | Lucide React |
| **Linting** | Oxlint |
| **Type Checking** | TypeScript 6 (strict) |

---

## 🔧 Configuration

### Environment Variables

Create `.env.local` in `medicloud-app/` for local development:

```env
# API Configuration
VITE_API_URL=http://localhost:3000/api
VITE_WS_URL=ws://localhost:3000/ws

# Feature Flags
VITE_ENABLE_AI_SCRIBE=true
VITE_ENABLE_VITALS_MONITORING=true

# Analytics (optional)
VITE_GA_ID=G-XXXXXXXXXX
```

### TailwindCSS

Configuration in `medicloud-app/tailwind.config.js` (or via CSS-first config in `index.css`):

```css
@import "tailwindcss";

@theme {
  --color-primary: #00B8DB;
  --color-secondary: #0F2D5E;
  --color-accent: #FF8D6D;
  --color-success: #10B981;
  --font-sans: "IBM Plex Sans", system-ui, sans-serif;
}
```

---

## 📦 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy from medicloud-app directory
cd medicloud-app
vercel --prod
```

### Netlify

```bash
# Build command
npm run build

# Publish directory
dist
```

### Docker

```dockerfile
# Dockerfile (in medicloud-app/)
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

---

## ♿ Accessibility

MediCloud is built with **WCAG 2.2 AA** compliance in mind:

- ✅ Semantic HTML5 elements
- ✅ ARIA labels and roles
- ✅ Keyboard navigation support
- ✅ Focus management
- ✅ Color contrast ratios (4.5:1 minimum)
- ✅ Skip links
- ✅ Screen reader optimized
- ✅ Reduced motion support

---

## 🔒 Security

- **Content Security Policy** ready
- **HTTPS-only** cookies in production
- **CORS** configured for API endpoints
- **Dependency scanning** via `npm audit`
- **No secrets in code** — use environment variables

---

## 🧪 Testing

```bash
# Unit & Integration tests (when configured)
npm run test

# E2E tests with Playwright (when configured)
npm run test:e2e

# Type checking
npm run build  # includes tsc -b
```

---

## 🤝 Contributing

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Code Style

- Follow existing patterns in the codebase
- Use TypeScript strict mode
- Write meaningful commit messages
- Ensure `npm run lint` passes
- Add tests for new features

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

## 📞 Support & Contact

- **Website**: [medicloud.example.com](https://medicloud.example.com)
- **Email**: support@medicloud.example.com
- **Documentation**: [docs.medicloud.example.com](https://docs.medicloud.example.com)
- **Status Page**: [status.medicloud.example.com](https://status.medicloud.example.com)

---

## 🙏 Acknowledgments

- **Bootstrap** — For the landing page framework
- **React Team** — For React 19 and concurrent features
- **Vite Team** — For the blazing fast build tool
- **TailwindCSS** — For utility-first styling
- **Framer Motion** — For delightful animations
- **Lucide** — For beautiful, consistent icons
- **IBM Plex Sans** — For professional typography

---

<div align="center">
  <strong>Built with ❤️ for healthcare providers everywhere</strong>
  <br/>
  <sub>MediCloud — Making virtual care effortless</sub>
</div>
---

Built by Girish Lade — https://ladestack.in
