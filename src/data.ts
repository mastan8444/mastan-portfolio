import { Project, Experience, Education, SkillCategory, Certification, Achievement, CaseStudy } from "./types";

export const ShaikProfile = {
  name: "Shaik Mastan Saheb",
  title: "Agentic AI & Full-Stack Developer",
  location: "Tiruvuru, Andhra Pradesh, India",
  email: "mastan8957@gmail.com",
  phone: "9494909195",
  linkedin: "https://www.linkedin.com/in/shaikmastansaheb/",
  github: "https://github.com/mastan8444",
  codechef: "https://www.codechef.com/users/mastan8957",
  summary: "Motivated Computer Science student specializing in Machine Learning and Agentic AI. Hands-on experience architecting full-stack systems with FastAPI and React, deploying robust cloud backends, and crafting intelligent presentation, automation, and conversational AI agents."
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
    details: "Key coursework: Machine Learning, Advanced Data Structures, Neural Networks, Agentic LLM Architectures, DBMS, OOP."
  },
  {
    id: "edu-poly",
    institution: "AANM & VVRSR Polytechnic, Gudlavalleru",
    degree: "Diploma in Computer Science & Engineering",
    period: "2021 – 2024",
    details: "Acquired deep fundamentals in Core CS, including Operating Systems, Data Structures, Algorithms, Object-Oriented Programming, and database management systems."
  },
  {
    id: "edu-school",
    institution: "Sri Chaitanya High School, Tiruvuru",
    degree: "Secondary School Education (SSC Class X)",
    period: "2021",
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
    category: "Agentic AI",
    icon: "Cpu",
    items: [
      { name: "Agentic AI Systems", level: 5 },
      { name: "MCP Servers", level: 5 },
      { name: "LLM Orchestration", level: 5 },
      { name: "FastAPI Servings", level: 4 }
    ]
  },
  {
    category: "Cloud & Dev Tools",
    icon: "Cloud",
    items: [
      { name: "AWS", level: 4 },
      { name: "Render", level: 4 },
      { name: "Docker", level: 4 },
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
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services (AWS)",
    year: "2024"
  },
  {
    name: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
    issuer: "Oracle University",
    year: "2025"
  },
  {
    name: "Software Engineer Certification",
    issuer: "HackerRank",
    year: "2024"
  }
];

export const AchievementsData: Achievement[] = [
  {
    text: "Awarded Merit Scholarship at KL University",
    subtext: "Secured for exceptional academic performance in Machine Learning B.Tech streams."
  },
  {
    text: "OCI 2025 Certified Generative AI Professional",
    subtext: "Validated advanced expertise designing conversational interfaces and prompt tuning neural models."
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
