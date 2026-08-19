# 🌟 Harsh Lagwal — AI & Machine Learning Engineering Portfolio

<div align="center">

[![Live Demo](https://img.shields.io/badge/Live_Demo-Vercel_Production-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://harshlagwal.vercel.app/)
[![React 19](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS_v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Vite](https://img.shields.io/badge/Vite_7-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![WhatsApp](https://img.shields.io/badge/WhatsApp-Connect-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://wa.me/916230624011)

<p align="center">
  <b>A state-of-the-art, high-performance portfolio platform showcasing specialized expertise in Generative AI, Large Language Models (LLMs), Computer Vision, and Full-Stack Engineering.</b>
</p>

</div>

---

## 🚀 Key Highlights & Interactive Features

### 💊 1. Floating Dynamic Capsule Navbar
- Minimalist centered capsule pill inspired by next-gen Silicon Valley interfaces.
- Left circular avatar badge with high-resolution photo.
- Seamless, dynamic dark/light mode surface switching (`bg-white/90` frosted glass in light mode, `#18181b` in dark mode).
- Integrated quick utilities: **⌘K Search**, **Terminal CLI**, **WhatsApp Direct**, **Theme Toggle**, and high-contrast email CTA pill.

### 🤖 2. Harsh AI Copilot (`✨ Ask AI`)
- Compact floating AI Assistant at the bottom-right.
- Built-in Knowledge Base capable of instant answering questions about Harsh's AI/ML tech stack, 8+ projects, IIT Patna academic background, 6 internships, and contact details.
- 1-click prompt suggestion chips for effortless recruiter interaction.

### 🔍 3. Global Command Search Palette (`Ctrl + K` / `⌘K`)
- Instant keyboard-driven navigation across all sections, projects, certifications, and direct actions.
- Real-time fuzzy query filtering with smooth keyboard navigation.

### 💻 4. Interactive Hacker Terminal Drawer (`>_` / `T`)
- Simulated Linux CLI environment with interactive commands:
  - `help` — List all available commands
  - `skills` — Display AI/ML technical arsenal
  - `projects` — List flagship AI & web applications
  - `clear` / `exit` — Manage session window

### 🏛️ 5. Institutional Credibility Ribbon & Engineering Philosophy
- Verified credential badges: **IIT Patna** *(MBA Decision Science)*, **Rayat Bahra** *(B.Tech CSE)*, **Google**, **ISRO**, **NVIDIA**, **Anthropic**, **OpenAI**, **Microsoft Azure**, and **TATA**.
- 3 core Senior Architectural Principles:
  1. ⚡ **Production-First AI:** Low-latency microservices with FastAPI & Docker.
  2. 🎯 **Inference & Token Optimization:** Smart caching and quantized inference.
  3. 🛡️ **Hallucination-Resistant Agents:** Guardrails and deterministic fallback mechanics.

### 💼 6. Flagship AI Systems & Client Web Deliverables (8+ Projects)
- **WanderLust.ai:** AI Travel Planner with Gemini 1.5 Pro, dynamic maps, and admin analytics.
- **ATC Constructions Portal:** Live commercial platform for Govt. Approved Contractor Amit Thakur ([atc-constructions.vercel.app](https://atc-constructions.vercel.app/)).
- **Healthcare Assistant Chatbot:** NLP triage engine developed during Edunet Foundation AI internship.
- **Real-Time Object Detection:** 30+ FPS computer vision inference with SSD MobileNet v3 and OpenCV DNN.
- **Shree Sheetla Mata Mandir Portal:** Cultural heritage community platform.
- **Safalta Apki Chatbot:** DeepSeek API career guidance engine.
- **Employee Salary Prediction:** 5 ML classifiers comparing Random Forest, SVM, and KNN.
- **AlgoFlow VS Code Extension:** Real-time algorithmic flowchart visualization across 7 programming languages.

---

## ⌨️ Global Keyboard Shortcuts Matrix

| Keybinding | Action | Description |
| :---: | :--- | :--- |
| <kbd>Ctrl</kbd> + <kbd>K</kbd> / <kbd>⌘K</kbd> | **Command Palette** | Open global instant search & quick action launcher |
| <kbd>R</kbd> | **Resume Modal** | View and download official PDF Resume |
| <kbd>T</kbd> | **Terminal Drawer** | Toggle interactive developer CLI console |
| <kbd>C</kbd> | **Scroll to Contact** | Jump directly to Contact & Inquiry section |
| <kbd>Esc</kbd> | **Close Active Window** | Dismiss any open modal, palette, or drawer |

---

## 🛠️ Technical Stack & Architecture

- **Frontend Core:** React 19, JavaScript (ESNext), Vite 7
- **Styling Architecture:** Tailwind CSS v4, Modern Design Tokens, Frosted Glassmorphism
- **Animation Engine:** Framer Motion 12, Spring Physics, Ambient Cursor Spotlights
- **Icons & Typography:** Lucide React, Plus Jakarta Sans, Inter, JetBrains Mono
- **Inquiry Processing:** Formspree API (Zero-OAuth, direct serverless delivery)
- **SEO & Social Sharing:** Custom AI Neural SVG Favicon, OpenGraph & Twitter Large Image Preview Cards

---

## 📁 Repository Directory Structure

```text
portfolio-harsh-lagwal/
├── public/
│   ├── favicon.svg               # Custom AI Neural SVG Favicon
│   ├── og-image.jpg              # High-resolution Social Card Banner
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── Harsh-portfolio.jpg   # Official Portfolio Portrait
│   ├── components/
│   │   ├── About.jsx             # Story, Stats, Trust Ribbon & Philosophy
│   │   ├── AIAssistantModal.jsx  # Floating AI Copilot with Knowledge Base
│   │   ├── CertificateModal.jsx  # Credential & Certificate viewer
│   │   ├── Certifications.jsx    # ISRO, NVIDIA, Google, Anthropic Badges
│   │   ├── CommandPalette.jsx    # Global Ctrl+K Spotlight Search
│   │   ├── Contact.jsx           # Formspree Form, WhatsApp & Direct Channels
│   │   ├── Education.jsx         # IIT Patna & Rayat Bahra Degree Timeline
│   │   ├── Experience.jsx        # 6 Internships Interactive Timeline
│   │   ├── Footer.jsx            # Clean Footer with Right Corner Scroll-To-Top
│   │   ├── HeroSection.jsx       # Confident Hero with Ambient Cursor Glow
│   │   ├── Navbar.jsx            # Dynamic Floating Capsule Bar & WhatsApp Link
│   │   ├── Projects.jsx          # 8+ Project Cards with Metrics & Live Demos
│   │   ├── ResumeModal.jsx       # PDF Resume Preview
│   │   ├── ScrollingSkills.jsx   # Infinite Marquee Skills Stream
│   │   ├── Skills.jsx            # Tech Categorized Arsenal
│   │   ├── TechIcon.jsx          # SVG Tech Stacks Renderer
│   │   └── TerminalDrawer.jsx    # Developer CLI Terminal Emulator
│   ├── context/
│   │   └── ThemeContext.jsx      # Light / Dark Mode System Provider
│   ├── App.jsx                   # Lazy-Loaded Root Composition Component
│   ├── index.css                 # Tailwind v4 Directives & Custom Utilities
│   └── main.jsx                  # React DOM Root Mounting
├── index.html                    # SEO Meta Tags, OpenGraph & Favicon Links
├── package.json
└── vite.config.js
```

---

## ⚡ Local Development Setup

### 1. Clone the Repository
```bash
git clone https://github.com/harshlagwal/portfolio-.git
cd portfolio-
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Build for Production
```bash
npm run build
```

---

## 📬 Connect with Harsh Lagwal

- **Email:** [Harshlagwal2005@gmail.com](mailto:Harshlagwal2005@gmail.com)
- **WhatsApp:** [+91 6230624011](https://wa.me/916230624011)
- **LinkedIn:** [linkedin.com/in/harsh-lagwal](https://linkedin.com/in/harsh-lagwal)
- **GitHub:** [github.com/harshlagwal](https://github.com/harshlagwal)

---

<p align="center">
  <b>Designed & Engineered by Harsh Lagwal © 2026</b>
</p>
