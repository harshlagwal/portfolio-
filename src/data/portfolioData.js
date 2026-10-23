export const portfolioData = {
  personal: {
    name: "Harsh Lagwal",
    handle: "harshlagwal",
    title: "AI & ML Engineer",
    subTitle: "MBA in Decision Science (IIT Patna, 2026–2028)",
    email: "Harshlagwal2005@gmail.com",
    github: "https://github.com/harshlagwal",
    linkedin: "https://linkedin.com/in/harshlagwal",
    phone: "+916230624011",
    whatsapp: "https://wa.me/916230624011",
    portfolioUrl: "https://harshlagwalportfolio.netlify.app",
    resumeLink: "https://drive.google.com/file/d/1PA8fV23UmJ2AYf7kxUGaihI88M1NWW0b/view?usp=sharing",
    location: "Hamirpur, Himachal Pradesh, India",
    bio: "AI & Machine Learning Engineer and MBA Decision Science Scholar at IIT Patna. Passionate about engineering production-grade Generative AI pipelines, low-latency microservices with FastAPI & PyTorch, and intuitive intelligent user experiences."
  },

  trustLogos: [
    { name: "IIT Patna", role: "MBA (Decision Science)", logo: "/logos/iit-patna.png" },
    { name: "Rayat Bahra", role: "B.Tech (CSE)", logo: "/logos/rayat-bahra-seal.webp" },
    { name: "Google", role: "AI Verified", logo: "/logos/google-developers.svg" },
    { name: "ISRO", role: "Remote Sensing", logo: "/logos/isro.png" },
    { name: "NVIDIA", role: "Deep Learning", logo: "/logos/nvidia.svg" },
    { name: "Anthropic", role: "Claude AI", logo: "/logos/anthropic.png" },
    { name: "ChatGPT", role: "Prompting", logo: "/logos/chatgpt.svg" },
    { name: "TATA", role: "Decision Analytics", logo: "/logos/tata.png" },
    { name: "Microsoft", role: "Azure AI", logo: "/logos/microsoft-azure.svg" },
  ],

  projects: [
    {
      id: "master-ai",
      title: "Master AI",
      tag: "AI Education & Career SaaS",
      category: "Generative AI",
      metrics: ["24+ Frontier Models", "7-Day Masterclass", "Spline 3D & UPI"],
      summary: "Interactive AI education platform designed to help students and aspiring professionals learn practical AI skills through a structured 7-day masterclass.",
      problem: "Traditional AI learning paths are overly theoretical, disjointed, and lack hands-on orchestration across frontier LLM ecosystems and real-world deployment workflows.",
      solution: "Engineered an interactive masterclass platform featuring animated UI, 3D Spline visuals, multi-step UPI enrollment, mentor profiles, and real-time curriculum covering 24+ frontier models.",
      tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion", "Spline 3D", "UPI Integration"],
      image: "/projects/master-ai.png",
      liveDemo: "https://master-ai-iota.vercel.app",
      github: "https://github.com/harshlagwal/Master-Ai",
      featured: true
    },
    {
      id: "codeink",
      title: "CODEINK",
      tag: "Tactile Engineering Notebook",
      category: "Developer Tools",
      metrics: ["In-Browser Compilers", "Hardware Memory Tracer", "100 Dev Tools"],
      summary: "Open-source interactive Computer Science learning platform that combines the tactile experience of an engineering notebook with in-browser code execution, memory tracing, AI study copilot, and revision flashcards.",
      problem: "Traditional computer science education separates dry documentation from execution, lacking tactile visualization of memory architecture, pointer tables, and hardware stacks.",
      solution: "Engineered a tactile digital notebook equipped with an in-browser compiler, step-by-step memory architecture tracer, and AI guide across structured CS tracks with privacy-focused client-side execution.",
      tech: ["React 19", "TypeScript", "Vite", "Tailwind CSS 4", "Motion", "Lenis", "Spline", "Gemini API", "Wandbox API"],
      image: "/projects/codeink.png",
      liveDemo: "https://code-ink-theta.vercel.app/",
      github: "https://github.com/harshlagwal/code-ink",
      featured: true
    },
    {
      id: "pyviz-sandbox",
      title: "PyViz Sandbox",
      tag: "WebAssembly Python IDE",
      category: "Developer Tools",
      metrics: ["Zero Server Latency", "100% Local Privacy", "Pyodide WASM Engine"],
      summary: "Browser-based Python data science environment designed to execute Python code and visualize data without requiring a dedicated backend server, powered by Pyodide and WebAssembly.",
      problem: "Setting up local Python data science environments with Jupyter, pandas, and matplotlib creates friction, server dependencies, ingress costs, and cloud privacy concerns.",
      solution: "Built a zero-latency client-side Python sandbox using Pyodide and WebAssembly with CodeMirror and Plotly, enabling full dataset processing and chart rendering entirely in the browser.",
      tech: ["React 19", "Vite", "JavaScript", "CodeMirror", "Pyodide / WASM", "Plotly", "Framer Motion"],
      image: "/projects/pyviz-sandbox.png",
      liveDemo: "https://py-viz-sandbox.vercel.app/",
      github: "https://github.com/harshlagwal/PyViz-Sandbox",
      featured: true
    },
    {
      id: "codechaska",
      title: "CodeChaska",
      tag: "Gamified Coding Universe",
      category: "Client & Web Apps",
      metrics: ["360 Missions", "60 FPS Games", "Flow DSA Lab"],
      summary: "Cyberpunk interactive coding platform turning programming into a game with 360 missions, real-time code evaluation, and visual 2D algorithm flow tracers.",
      problem: "Learning foundational data structures and algorithms through static text problems often leads to high drop-off and lack of conceptual visualization.",
      solution: "Created an immersive gamified ecosystem with 360 progressive coding missions, a live browser code runtime, and visual AST flow execution tracers running at 60 FPS.",
      tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "Web Audio API"],
      image: "/projects/codechaska.png",
      liveDemo: "https://code-chaska.vercel.app",
      github: "https://github.com/harshlagwal/CodeChaska",
      featured: true
    },
    {
      id: "atc-constructions",
      title: "Amit Traders & Constructions",
      tag: "Client Production Web",
      category: "Client & Web Apps",
      metrics: ["Govt. Contractor", "Live on Vercel", "Fleet & Quotation Flow"],
      summary: "Commercial platform engineered and deployed for government-approved civil contractor Amit Thakur, featuring live quotation flows, project galleries, and SEO.",
      problem: "Civil infrastructure contractors need an authoritative web presence to present public tenders, showcase heavy transport fleet capabilities, and capture commercial inquiries.",
      solution: "Architected a responsive commercial portal deployed on Vercel with automated quotation forms, optimized media galleries, and structured SEO for regional search visibility.",
      tech: ["React", "JavaScript", "Tailwind CSS", "Vercel", "UI/UX Design"],
      image: "/projects/atc-constructions.png",
      liveDemo: "https://atc-constructions.vercel.app/",
      github: "https://github.com/harshlagwal/ATC-Constructions-",
      featured: true
    },
    {
      id: "sheetla-mata-mandir",
      title: "Shree Sheetla Mata Mandir Portal",
      tag: "Community Platform",
      category: "Client & Web Apps",
      metrics: ["Temple Portal", "Live Darshan Hours", "Festival Schedules"],
      summary: "Digital community platform connecting thousands of devotees with daily live darshan schedules, festival notifications, and cultural heritage archives.",
      problem: "Devotee communities and pilgrims often miss sacred festival schedules, live aarti notifications, and authentic temple trust announcements.",
      solution: "Developed an accessible multilingual community portal with verified daily darshan schedules, cultural heritage archives, and instant festival alert broadcasts.",
      tech: ["React", "JavaScript", "Tailwind CSS", "Cloudflare Pages", "UI/UX Design"],
      image: "/projects/sheetla-mata.png",
      liveDemo: "https://sheetla-mata-mandir-website.pages.dev/",
      github: "https://github.com/harshlagwal",
      featured: false
    },
    {
      id: "algoflow",
      title: "AlgoFlow VS Code Extension",
      tag: "Developer Tool & Marketplace",
      category: "Developer Tools",
      metrics: ["VS Marketplace Live", "Step-by-Step Flow", "Big-O Analysis"],
      summary: "Published developer extension on the Visual Studio Marketplace converting code into animated flowcharts in real time, featuring step-by-step variable execution and automated Big-O complexity analysis.",
      problem: "Tracing complex recursion, branching logic, and algorithmic edge cases in IDEs is mentally taxing without real-time visual execution diagrams.",
      solution: "Engineered a VS Code extension that dynamically parses source code into live animated flowchart nodes, tracks variable states step-by-step, and computes Big-O complexity.",
      tech: ["VS Code API", "Python", "TypeScript", "Marketplace Release"],
      image: "/projects/algoflow.png",
      liveDemo: "https://marketplace.visualstudio.com/items?itemName=harshlagwal.algoflow",
      github: "https://github.com/harshlagwal/AlgoFlow-",
      featured: true
    }
  ],

  experiences: [
    {
      role: "AI / ML Intern",
      company: "Upto Skills",
      duration: "Jan 2026 – Apr 2026",
      type: "Remote",
      logo: "/logos/upto-skills.webp",
      description: "Architecting deep learning algorithms, fine-tuning neural networks, and optimizing predictive ML pipelines for high-throughput enterprise deployments.",
      certificates: [
        { label: "Experience Letter", link: "https://drive.google.com/file/d/16dbN9y3l5rsR2Y70AeaLxqIT20_tEKma/view?usp=drive_link" },
        { label: "Certificate", link: "https://drive.google.com/file/d/1nlus1dHLJ44rN04BLj5MgpA2lEaH6mp6/view?usp=drive_link" }
      ]
    },
    {
      role: "Campus Ambassador",
      company: "eDC IIT Delhi",
      duration: "Dec 2025 – Feb 2026",
      type: "Remote",
      logo: "/logos/edc-iit-delhi.png",
      description: "Represented the Entrepreneurship Development Cell of IIT Delhi, organizing high-impact AI hackathons and technical mentorship for student engineering cohorts.",
      certificate: "https://drive.google.com/file/d/1tIkMYWmhuA2pzWlGqaduzdmu5AwsJGu8/view?usp=drivesdk"
    },
    {
      role: "Generative AI Engineer",
      company: "SpectoV",
      duration: "Jul 2025 – Sep 2025",
      type: "Remote",
      logo: "/logos/spectov.svg",
      description: "Engineered state-of-the-art Generative AI workflows, implementing custom LLM orchestration, structured output prompt architectures, and context-window optimization.",
      certificate: "https://drive.google.com/file/d/1HqxEmc6-nWhCpVRRHlxMlusENMk1DwtW/view?usp=sharing"
    },
    {
      role: "AI Azure Intern",
      company: "Edunet Foundation",
      duration: "Jun 2025 – Jul 2025",
      type: "Remote",
      logo: "/logos/edunet-foundation.png",
      description: "Deployed scalable cloud-native machine learning models and automated computer vision REST endpoints using Microsoft Azure ML Studio.",
      certificate: "https://drive.google.com/file/d/1RptrUewLOq4PEjWw21tfNbmCULuM5-oZ/view?usp=drivesdk"
    }
  ],

  education: [
    {
      degree: "MBA in Decision Science",
      institution: "Indian Institute of Technology, Patna (IIT Patna)",
      duration: "2026 – 2028",
      focus: "Quantitative Business Modeling, Decision Science, AI Leadership & Big Data Analytics.",
      status: "Enrolled"
    },
    {
      degree: "Bachelor of Technology (B.Tech) - Computer Science & Engineering",
      institution: "Rayat Bahra University",
      duration: "2022 – 2026",
      focus: "Machine Learning, Deep Learning, Cloud Computing, Data Structures & Algorithms.",
      status: "Completed"
    }
  ],

  skills: {
    "AI & Machine Learning": [
      "Generative AI", "PyTorch", "TensorFlow", "Deep Learning", "NLP", 
      "Gemini 1.5 Pro", "OpenCV DNN", "Hugging Face", "LangChain", "Prompt Engineering"
    ],
    "Languages": [
      "Python", "JavaScript (ES6+)", "TypeScript", "SQL", "C++", "HTML5 & CSS3"
    ],
    "Frameworks & Libraries": [
      "React", "FastAPI", "Node.js", "Express", "Tailwind CSS", "Framer Motion", "Vite"
    ],
    "Tools & Platforms": [
      "Git & GitHub", "Docker", "Microsoft Azure ML", "MongoDB", "Linux/Bash", "Vercel", "Postman"
    ]
  },

  certifications: [
    {
      title: "Deep Learning & Neural Networks",
      issuer: "NVIDIA Deep Learning Institute",
      date: "2025",
      logo: "/logos/nvidia.svg",
      link: "https://drive.google.com/file/d/1nlus1dHLJ44rN04BLj5MgpA2lEaH6mp6/view?usp=drive_link"
    },
    {
      title: "Remote Sensing & Geospatial AI",
      issuer: "ISRO / IIRS",
      date: "2025",
      logo: "/logos/isro.png",
      link: "https://drive.google.com/file/d/1HqxEmc6-nWhCpVRRHlxMlusENMk1DwtW/view?usp=sharing"
    },
    {
      title: "Google AI & Machine Learning Foundations",
      issuer: "Google Developers",
      date: "2025",
      logo: "/logos/google-developers.svg",
      link: "https://drive.google.com/file/d/1PA8fV23UmJ2AYf7kxUGaihI88M1NWW0b/view?usp=sharing"
    },
    {
      title: "Microsoft Azure AI Fundamentals",
      issuer: "Microsoft / Edunet",
      date: "2025",
      logo: "/logos/microsoft-azure.svg",
      link: "https://drive.google.com/file/d/1RptrUewLOq4PEjWw21tfNbmCULuM5-oZ/view?usp=drivesdk"
    }
  ]
};
