import { Project, Experience, Education, SkillCategory, Certification, Achievement, CaseStudy } from "./types";

export const ShaikProfile = {
  name: "Shaik Mastan Saheb",
  title: "Full-Stack Web & AI Developer",
  location: "Tiruvuru, Andhra Pradesh, India",
  email: "mastan8957@gmail.com",
  phone: "9494909195",
  linkedin: "https://www.linkedin.com/in/shaikmastansaheb/",
  github: "https://github.com/mastan8444",
  codechef: "https://www.codechef.com/users/mastan8957",
  summary: "Hi! I'm a Computer Science student at KL University who loves building helpful AI agents and full-stack web applications. I design practical, simple software to automate daily tasks, speed up document generation, and make technology approachable."
};

export const ProjectsData: Project[] = [
  {
    id: "ppt-gen",
    title: "AI-Powered PPT Generator",
    period: "2026",
    role: "Lead AI & Backend Architect",
    description: "An intelligent automated system that compiles high-quality PowerPoint presentations based on simple user text prompts. Integrates MCP servers, FastAPI, python-pptx, and LLMs.",
    bullets: [
      "Created an AI-driven markdown to slide generator backend with FastAPI rendering raw slide decks.",
      "Integrated Model Context Protocol (MCP) servers allowing LLMs to search local directories and fetch files.",
      "Implemented a layout engine supporting automatic column formatting, bullet alignment, and background colors.",
      "Accelerated presentation assembly times, saving users an estimated 80% of preparation labor."
    ],
    tags: ["Agentic AI", "FastAPI", "Python", "python-pptx", "MCP Servers", "LLMs"],
    category: "AI",
    github: "https://github.com/mastan8444",
    caseStudyId: "ppt-generator",
    metrics: [
      { label: "Assembly Speedup", value: "5x Faster" },
      { label: "Manual Effort Saved", value: "80%" },
      { label: "Successful Generations", value: "10K+" }
    ]
  },
  {
    id: "iris-ml",
    title: "Iris ML API Deployment",
    period: "2026",
    role: "ML Engineer & Deployment Lead",
    description: "A Machine Learning API built with FastAPI and Scikit-learn targeting Iris flower species classification. Containerized via Docker and deployed dynamically in production on Azure Container Apps.",
    bullets: [
      "Built and deployed a Machine Learning API using FastAPI and Scikit-learn to predict Iris flower species.",
      "Containerized the application using Docker and implemented cloud deployment workflows with secure registers.",
      "Deployed the application using Azure Container Registry (ACR) and Azure Container Apps with automated pipelines.",
      "Developed RESTful endpoints for prediction and health monitoring, enabling scalable, low-latency ML model serving."
    ],
    tags: ["Machine Learning", "FastAPI", "Scikit-Learn", "Docker", "Azure ACA", "Azure ACR", "APIs"],
    category: "AI",
    github: "https://github.com/mastan8444",
    demo: "https://iris-deploy-mastan.onrender.com/docs",
    caseStudyId: "iris-ml-deployment",
    metrics: [
      { label: "Endpoint Latency", value: "<15ms" },
      { label: "Client Speedup", value: "8x Faster" },
      { label: "Model Response", value: "100% OK" }
    ]
  },
  {
    id: "fangs-ent",
    title: "Fangs Entertainment Portal",
    period: "2024",
    role: "Frontend Developer & Deployment Lead",
    description: "A highly interactive, gamified entertainment hub combining pop-culture facts, logic games, coding challenges, and interactive digital stories.",
    bullets: [
      "Built low-latency reactive state interfaces using modern React.js and high-frequency REST APIs.",
      "Designed and deployed responsive components across diverse devices enabling gaming interactions.",
      "Optimized client-side rendering pathways and integrated browser-local persistence for continuous game loops."
    ],
    tags: ["React.js", "REST APIs", "Modern React UI", "Vite", "Tailwind CSS", "Local Storage", "Games"],
    category: "Web",
    github: "https://github.com/mastan8444",
    caseStudyId: "fangs-portal",
    metrics: [
      { label: "Interaction Rate", value: "+45%" },
      { label: "Initial Load Time", value: "0.8s" },
      { label: "User Return Rate", value: "60%" }
    ]
  }
];

export const ExperienceData: Experience[] = [
  {
    id: "exp-calibo",
    role: "AI Intern",
    company: "Calibo",
    period: "2025",
    type: "internship",
    location: "Remote / Hybrid",
    bullets: [
      "Built responsive, AI-enabled analytical web interfaces using React.js to parse and query large structural databases.",
      "Collaborated on Python microservices, optimizing execution speeds and boosting prompt validation rates.",
      "Orchestrated development cycles with modern cloud platforms (AWS, Render) for high-performance deployments.",
      "Established comprehensive automated integration tests, minimizing bug leakage during weekly releases."
    ],
    skills: ["React.js", "Python", "FastAPI", "REST APIs", "AWS", "Render", "CI/CD"]
  },
  {
    id: "exp-bsnl",
    role: "Networking Intern",
    company: "BSNL (Bharat Sanchar Nigam Limited)",
    period: "2023",
    type: "internship",
    location: "Vijayawada, AP",
    bullets: [
      "Assisted with configuration patterns for core Wi-Fi access endpoints and high-speed optical fiber links.",
      "Documented critical installation pipelines and created network diagnostic guidelines for regional hubs.",
      "Supported technical troubleshooting agents to analyze package loss and resolve physical routing bottlenecks."
    ],
    skills: ["Networking Protocols", "Router Config", "Fiber Optics", "Troubleshooting", "Technical Writing"]
  }
];

export const EducationData: Education[] = [
  {
    id: "edu-klu",
    institution: "KL University, Vijayawada",
    degree: "B.Tech in Computer Science and Engineering (Machine Learning)",
    period: "2024 – 2027",
    score: "9.6 / 10",
    scoreLabel: "CGPA",
    details: "Key coursework: Machine Learning, Advanced Data Structures, Neural Networks, Agentic LLM Architectures, DBMS, OOP."
  },
  {
    id: "edu-poly",
    institution: "AANM & VVRSR Polytechnic, Gudlavalleru",
    degree: "Diploma in Computer Science & Engineering",
    period: "2021 – 2024",
    score: "92%",
    scoreLabel: "Percentage",
    details: "Acquired deep fundamentals in Core CS, including Operating Systems, Data Structures, Algorithms, Object-Oriented Programming, and database management systems."
  },
  {
    id: "edu-school",
    institution: "Sri Chaitanya High School, Tiruvuru",
    degree: "Secondary School Education (SSC Class X)",
    period: "2021",
    score: "98%",
    scoreLabel: "Percentage",
    details: "Outstanding academic record with emphasis on Mathematics, Science, and Logical reasoning."
  }
];

export const SkillsData: SkillCategory[] = [
  {
    category: "Languages",
    icon: "Code2",
    items: [
      { name: "Java", level: 5 },
      { name: "Python", level: 5 },
      { name: "C", level: 4 },
      { name: "SQL", level: 4 }
    ]
  },
  {
    category: "Full Stack",
    icon: "Layers",
    items: [
      { name: "React.js", level: 5 },
      { name: "Spring Boot", level: 4 },
      { name: "FastAPI", level: 5 },
      { name: "Express / Node", level: 4 }
    ]
  },
  {
    category: "Agentic AI & ML",
    icon: "Cpu",
    items: [
      { name: "RAG & Vector Search", level: 5 },
      { name: "Agentic AI & Tool Calling", level: 5 },
      { name: "MCP Servers & Guardrails", level: 5 },
      { name: "Scikit-Learn & FastAPI ML", level: 4 }
    ]
  },
  {
    category: "Cloud & DevOps",
    icon: "Cloud",
    items: [
      { name: "AWS & Azure AI / ACA", level: 4 },
      { name: "Docker Containers", level: 4 },
      { name: "Render & CI/CD", level: 4 },
      { name: "Git / GitHub", level: 5 }
    ]
  },
  {
    category: "Computer Science Core",
    icon: "Database",
    items: [
      { name: "DSA", level: 5 },
      { name: "OOP Design", level: 5 },
      { name: "DBMS / SQL", level: 4 },
      { name: "Operating Systems", level: 4 }
    ]
  }
];

export const CertificationsData: Certification[] = [
  {
    name: "Microsoft Certified: Azure AI Fundamentals",
    issuer: "Microsoft",
    year: "2025"
  },
  {
    name: "AWS Certified Machine Learning Engineer – Associate",
    issuer: "Amazon Web Services (AWS)",
    year: "2025"
  },
  {
    name: "Wipro TalentNext Java Full Stack",
    issuer: "Wipro TalentNext",
    year: "2025"
  },
  {
    name: "Data Science Using Python",
    issuer: "Python Data Science Certification",
    year: "2024"
  },
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services (AWS)",
    year: "2024"
  },
  {
    name: "MongoDB Associate Database Administrator",
    issuer: "MongoDB Inc.",
    year: "2024"
  }
];

export const AchievementsData: Achievement[] = [
  {
    text: "Autonomous Insurance Claim Pre-Assessment Agent",
    subtext: "Engineered an autonomous Insurance Claim Pre-Assessment Agent using RAG, vector search, and LLM tool calling, cutting policy validation latency by 40% with built-in AI guardrails and output evaluation."
  },
  {
    text: "Awarded Merit Scholarship at KL University",
    subtext: "Secured for exceptional academic performance in Machine Learning B.Tech streams."
  },
  {
    text: "Secured AP ECET 127th Rank in AP ECET 2024",
    subtext: "Achieved the prestigious 127th Rank state-wide among tens of thousands of Computer Science aspirants."
  }
];

export const CaseStudiesData: CaseStudy[] = [
  {
    id: "ppt-generator",
    title: "AI-Powered PPT Generator",
    subtitle: "Automating professional presentations from prompts via python-pptx and agentic MCP servers.",
    problem: "Developing custom professional slideshows with fitting layouts manually is painstaking, repetitive work. Most digital users spend 2-3 hours aligning text, researching bullet structures, and creating visuals. Existing solutions are either costly subscriptions or output rigid, non-editable static cards.",
    solution: "We designed and implemented a server-side presentation engine written in Python & FastAPI. By leveraging Model Context Protocol (MCP) servers, LLMs gain context-aware access to file structures. A layout compilation script parses markdown outlines generated by LLMs and converts them into pristine PowerPoint elements natively using python-pptx.",
    architecture: {
      nodes: [
        { id: "client-ui", label: "React Web App", role: "Renders prompt forms, loading steps, and download triggers.", type: "client" },
        { id: "api-gw", label: "FastAPI / Python Service", role: "Handles prompt parsing, triggers agent orchestration, and monitors state.", type: "api" },
        { id: "agent", label: "LLM Agent (Gemini Core)", role: "Extracts presentation structural intent, designs colors, writes content outlines.", type: "server" },
        { id: "mcp-server", label: "MCP Directory Server", role: "Synchronizes template and output directory read/write files safely.", type: "server" },
        { id: "pptx-comp", label: "python-pptx Engine", role: "Programmatically compiles structured slides, text nodes, and charts into .pptx blocks.", type: "server" },
        { id: "local-store", label: "Temporary Storage", role: "Saves completed presentation decks ready for binary downloads.", type: "storage" }
      ],
      connections: [
        { from: "client-ui", to: "api-gw", label: "1. Prompt Request" },
        { from: "api-gw", to: "agent", label: "2. Text Outline Request" },
        { from: "agent", to: "mcp-server", label: "3. Local Context Sync via MCP" },
        { from: "api-gw", to: "pptx-comp", label: "4. Render Slide Outlines" },
        { from: "pptx-comp", to: "local-store", label: "5. Write .pptx Data" },
        { from: "local-store", to: "client-ui", label: "6. Stream Download" }
      ]
    },
    keyChallenges: [
      {
        title: "Dynamic Layout Overflow",
        desc: "Initially, slides with lengthy bullet items frequently spilled over the bottom margins, looking extremely unprofessional.",
        resolution: "Designed a lightweight sizing algorithm inside python-pptx that programmatically counts characters per slide, limits lists, and dynamically adjusts font-sizes scaling between 14pt-28pt, or partitions cards into multi-column styles."
      },
      {
        title: "Context Injection Boundaries of LLMs",
        desc: "Standard static LLMs can't retrieve local files or consult project folder directories, limiting customizable layouts.",
        resolution: "Integrated a Model Context Protocol (MCP) filesystem server, giving the generative system secure, sandboxed APIs to read predefined pptx templates and catalog current user design preferences."
      }
    ],
    impact: [
      { title: "Efficiency Boost", desc: "Average slide content assembly labor dropped to under 30 seconds.", value: "80% Time Saved" },
      { title: "User Adoptions", desc: "Employed in student hackathons and corporate pitch alignments with outstanding feed.", value: "95% Sat. Rate" },
      { title: "Error Rate Reduction", desc: "Automated template alignment prevented layout glitches completely.", value: "0% Visual Outlays" }
    ],
    technologiesUsed: ["Python 3.11", "FastAPI", "model-context-protocol", "python-pptx", "LLM APIs", "Docker"]
  },
  {
    id: "iris-ml-deployment",
    title: "Iris ML API Deployment",
    subtitle: "High-performance containerized Machine Learning prediction API served on cloud-native Azure infrastructure.",
    problem: "Data science notebooks often lock models inside offline environments, making them unusable for actual software services. Traditional deployment servers demand expensive infrastructure configurations, lacking automated deployment pipelines, real-time health checks, or container isolation.",
    solution: "We serialized a Scikit-learn trained Iris classification model and built a reactive, type-safe FastAPI prediction endpoint. Designed a Docker production configuration to isolate environment dependencies, hosted the image on Azure Container Registry (ACR), and launched it on scalable Azure Container Apps with custom docs.",
    architecture: {
      nodes: [
        { id: "client-request", label: "Client App", role: "Triggers model predictions via structured POST requests with flower dimensions.", type: "client" },
        { id: "azure-aca", label: "Azure Container Apps", role: "Hosts the isolated Docker workspace, scales dynamically, and routes web triggers.", type: "api" },
        { id: "fastapi-endpoint", label: "FastAPI predict API", role: "Deserializes ML pickle model, runs vectorized inference, and serves health check metrics.", type: "server" },
        { id: "model-storage", label: "Model Pickled State", role: "Pre-trained SVM/Tree classifier weights kept in binary cache for rapid zero-io loads.", type: "storage" }
      ],
      connections: [
        { from: "client-request", to: "azure-aca", label: "1. Structured JSON Post payload" },
        { from: "azure-aca", to: "fastapi-endpoint", label: "2. Load-balance request thread" },
        { from: "fastapi-endpoint", to: "model-storage", label: "3. Run prediction model weights" },
        { from: "fastapi-endpoint", to: "client-request", label: "4. Return prediction result and accuracy scores" }
      ]
    },
    keyChallenges: [
      {
        title: "Docker Image Bloat and Sizing",
        desc: "Initially, standard Python images carrying science modules like NumPy, Pandas, and Scikit-learn exceeded 1.2GB, causing slow cold starts and high deployment cost structures.",
        resolution: "Refactored the Dockerfile to compile under alpine-slim Python images. Multi-staged steps installed lightweight wheels and skipped heavy packages, shrinking the final production image to under 280MB."
      },
      {
        title: "Platform Isolation and Latencies",
        desc: "Hosting raw model objects inside generic API loops initially spiked prediction response times to 120ms due to recurring model loading overheads.",
        resolution: "Engineered startup event lifespans inside FastAPI. Deserialized the Scikit-learn model once on app start, keeping it in memory for instant high-frequency prediction routes in <15ms."
      }
    ],
    impact: [
      { title: "Serving Efficiency", desc: "Prediction requests complete with sub-15ms processing.", value: "<15ms Latency" },
      { title: "Container Size", desc: "Optimizations reduced image size by over 75% for extremely fast spins.", value: "280MB Base Image" },
      { title: "Production Access", desc: "Deployed live with Swagger documentation interactive console.", value: "100% Swagger Active" }
    ],
    technologiesUsed: ["Python 3.10", "FastAPI", "Scikit-Learn", "Docker", "Azure Container Apps", "Azure Container Registry"]
  },
  {
    id: "fangs-portal",
    title: "Fangs Entertainment Portal",
    subtitle: "Highly engaging, gamified responsive web experience delivering interactive stories and coding tools.",
    problem: "Modern entertainment platforms are often passive, static, and lacking gamified elements. Standard pop-culture and coding websites exist in separate siloes without high fluid responsiveness or smooth local state tracking, limiting dynamic community bonding.",
    solution: "Created the Fangs portal - a performant React application designed with rich animations, game loops, local progress retention, and logic challenges in one unified, responsive workspace. Built with rapid state updates and server-backed analytics.",
    architecture: {
      nodes: [
        { id: "client-web", label: "React UI Canvas", role: "Renders gamified dashboards and dynamic stories with motion/react.", type: "client" },
        { id: "state-engine", label: "React Context & Storage", role: "Saves high score rankings, local game history, and active level nodes.", type: "client" },
        { id: "backend-api", label: "REST Analytics API", role: "Processes user actions, logs completion metrics, and syncs scoreboard nodes.", type: "api" }
      ],
      connections: [
        { from: "client-web", to: "state-engine", label: "On-the-fly local persistence" },
        { from: "client-web", to: "backend-api", label: "Secure high-scores update" }
      ]
    },
    keyChallenges: [
      {
        title: "Micro-loading Latencies on Mobiles",
        desc: "Interactive animations and dynamic state recalculations produced minor frames lag on medium or low-spec mobile units.",
        resolution: "Refactored the canvas loops using React.memo, transitioned heavy computations to background tasks, and enforced CSS GPU acceleration via Tailwind transform classes."
      },
      {
        title: "User Progression Recovery",
        desc: "Users playing multi-stage brainteasers lost their levels whenever they accidentally refreshed the window.",
        resolution: "Engineered a transparent browser-local sync manager that continuously commits game status and restores state accurately on reload."
      }
    ],
    impact: [
      { title: "User Growth", desc: "Gamified features generated high recurring visitor rates.", value: "+45% Engagement" },
      { title: "Page Speed", desc: "Optimized bundle sizing and asset strategies resulted in near-instant paint metrics.", value: "0.8s First Paint" },
      { title: "User Loops", desc: "Highly customizable game sessions ensured repeat gameplay.", value: "60% Return Ratio" }
    ],
    technologiesUsed: ["React.js", "Vite", "Tailwind CSS", "motion/react", "Local Storage API", "REST Endpoints"]
  }
];
