import React, { useState } from "react";
import { ProjectsData } from "../data";
import { 
  Cpu, 
  Globe, 
  Github, 
  Milestone, 
  Sparkles, 
  MoveRight, 
  Layers, 
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Terminal,
  Database,
  Monitor,
  HardDrive,
  CheckCircle2
} from "lucide-react";
import { Project } from "../types";

interface ProjectsProps {
  onSelectCaseStudy: (caseStudyId: string) => void;
}

function ProjectGallery({ projectId }: { projectId: string }) {
  const [slideIdx, setSlideIdx] = useState(0);

  // Define unique high-fidelity code-rendered slides for each project
  const slides: Record<string, { title: string; subtitle: string; badge: string; node: React.ReactNode }[]> = {
    "ppt-gen": [
      {
        title: "System Architecture Flow",
        subtitle: "How generative outlines compile safely into presentation files",
        badge: "ARCH DIAGRAM",
        node: (
          <div className="h-full flex flex-col justify-center px-4 space-y-4 font-mono text-[9px] sm:text-10px">
            <div className="flex items-center justify-between gap-2">
              <div className="p-2 bg-white/5 border border-white/10 rounded text-white flex flex-col items-center w-24 text-center">
                <span className="text-[#E5FF45]">User Prompt</span>
                <span className="text-white/30 text-[8px] mt-0.5">"Create deep AI deck..."</span>
              </div>
              
              <div className="h-0.5 flex-grow bg-gradient-to-r from-[#E5FF45]/30 to-white/10 relative">
                <span className="absolute -top-1 left-1.5 w-1.5 h-1.5 rounded-full bg-[#E5FF45] animate-ping" />
              </div>

              <div className="p-2 bg-[#E5FF45]/15 border border-[#E5FF45]/20 rounded text-[#E5FF45] flex flex-col items-center w-24 text-center">
                <Cpu size={12} className="mb-0.5" />
                <span>FastAPI Compiler</span>
              </div>

              <div className="h-0.5 flex-grow bg-gradient-to-r from-white/10 to-[#E5FF45]/30 relative">
                <span className="absolute -top-1 right-2.5 w-1.5 h-1.5 rounded-full bg-[#E5FF45] animate-ping delay-500" />
              </div>

              <div className="p-2 bg-white/5 border border-white/10 rounded text-white flex flex-col items-center w-24 text-center">
                <span className="text-[#E5FF45] font-bold">.PPTX File</span>
                <span className="text-white/30 text-[8px] mt-0.5">Downloaded Natively</span>
              </div>
            </div>

            <div className="p-2 bg-black/40 border border-white/5 rounded flex items-center justify-center gap-1.5 text-white/55 text-center text-[9px]">
              <Database size={10} className="text-[#E5FF45]" />
              <span>Context Sync: Integrated MCP Directories mapping slide structures</span>
            </div>
          </div>
        )
      },
      {
        title: "Interactive Slides Viewer",
        subtitle: "Programmatic template alignment showing slide dimensions",
        badge: "USER VIEWPORT MOCK",
        node: (
          <div className="h-full flex gap-3 text-10px overflow-hidden">
            {/* Slide List Sidebar */}
            <div className="w-1/4 bg-black/50 border border-white/5 p-1.5 rounded flex flex-col gap-1.5">
              <div className="h-4 bg-white/10 rounded flex items-center px-1 text-[8px]">Slide 1: Intro</div>
              <div className="h-4 bg-[#E5FF45]/15 border border-[#E5FF45]/20 rounded flex items-center px-1 text-[8px] text-[#E5FF45]">Slide 2: System</div>
              <div className="h-4 bg-white/5 rounded flex items-center px-1 text-[8px] text-white/30">Slide 3: End</div>
            </div>
            {/* Slide active preview canvas */}
            <div className="flex-1 bg-black/30 border border-white/10 rounded-lg p-3 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-1 right-1 px-1.5 py-0.5 bg-black/60 rounded text-[7px] text-[#E5FF45]">16:9 SCREEN</div>
              <div>
                <span className="text-[8px] font-mono text-[#E5FF45] block uppercase">// ACTIVE SLIDE FRAME</span>
                <h4 className="text-xs font-semibold text-white mt-0.5 font-display">Deep Learning Agentic AI</h4>
                <p className="text-white/40 text-[8px] mt-1 leading-relaxed font-sans">
                  • Decentralized multi-node execution networks.<br />
                  • Real-time local filesystem search via MCP.
                </p>
              </div>
              <div className="flex justify-between items-center text-[8px] text-white/30 border-t border-white/5 pt-1.5 font-mono">
                <span>Layout: Vertical Two-Column</span>
                <span>Page 02 / 08</span>
              </div>
            </div>
          </div>
        )
      },
      {
        title: "MCP Core Router Terminal",
        subtitle: "FastAPI server logging slide compilation tasks",
        badge: "COMPILER TERMINAL",
        node: (
          <div className="h-full bg-black/70 rounded-lg p-3.5 font-mono text-[9px] text-[#E5FF45] flex flex-col justify-between border border-white/5">
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 border-b border-white/5 pb-1 text-white/30">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/30" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/30" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/30" />
                <span className="ml-1 text-[8px]">mcp-server-stdout.log</span>
              </div>
              <p className="text-white/30 pt-1">$ python3 main.py --compile --output=dl_agentic.pptx</p>
              <p className="text-white/85">✔ [02:14:02Z] Established LLM presentation agent connection.</p>
              <p className="text-[#E5FF45]">✔ [02:14:03Z] MCP mapping completed: 4 directories scanned.</p>
              <p className="text-white/95 text-[8.5px]">✔ [02:14:04Z] python-pptx rendering 8 slides (Cosmic Slate theme)...</p>
            </div>
            <div className="text-right text-[8px] text-white/30">
              SUCCESS • 256ms • PORT 3000
            </div>
          </div>
        )
      }
    ],
    "fangs-ent": [
      {
        title: "Cyber Game Lobby Portal",
        subtitle: "Engaging dashboard illustrating gamified trivia portals",
        badge: "GAME PLATFORM",
        node: (
          <div className="h-full flex flex-col justify-between">
            <div className="flex justify-between items-center bg-black/40 p-2 border border-white/5 rounded-lg font-mono">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[9px] text-white font-medium">LOBBY CONNECTED</span>
              </div>
              <span className="text-[10px] text-[#E5FF45] font-black">Active Score: 8,420 XP</span>
            </div>

            <div className="grid grid-cols-2 gap-3 py-1 font-mono text-[9px]">
              <div className="p-2 bg-[#E5FF45]/5 hover:bg-[#E5FF45]/10 border border-[#E5FF45]/20 rounded-xl flex items-center justify-between">
                <span>🎮 Code Maze loop</span>
                <span className="text-[#E5FF45] font-semibold text-[8px]">Play</span>
              </div>
              <div className="p-2 bg-white/5 hover:bg-white/10 border border-white/5 rounded-xl flex items-center justify-between">
                <span>🧠 Pop Trivia</span>
                <span className="text-white/40 text-[8px]">Open</span>
              </div>
            </div>

            <div className="text-[8px] text-white/30 font-mono text-center pb-0.5">
              React dynamic client state retains scores and completions local-first.
            </div>
          </div>
        )
      },
      {
        title: "Arcade Brainteaser Frame",
        subtitle: "High responsiveness and interactive choices viewport",
        badge: "USER INTERFACE MOCK",
        node: (
          <div className="h-full bg-black/35 border border-white/5 rounded-lg p-3 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center text-[7.5px] font-mono text-white/40 mb-1">
                <span>SESSION STATUS: ACTIVE</span>
                <span className="text-[#E5FF45] font-semibold">TIMER: 45 SEC</span>
              </div>
              <h4 className="text-xs font-semibold text-white font-display">Logic Challenge #02:</h4>
              <p className="text-white/70 text-[9px] mt-1 leading-snug font-sans">
                Detect the leaking closure inside high-frequency REST rendering callbacks:
              </p>
            </div>

            <div className="space-y-1.5 font-mono text-[8px] sm:text-[9px]">
              <div className="w-full text-left bg-black/50 border border-white/5 rounded px-2.5 py-1 text-white/70">
                A) Bind custom state references outside useEffect hook.
              </div>
              <div className="w-full text-left bg-[#E5FF45]/10 border border-[#E5FF45]/20 rounded px-2.5 py-1 text-[#E5FF45] flex items-center justify-between">
                <span>B) Stabilize array variables in memo dependency keys.</span>
                <span className="text-[8px] text-[#E5FF45] font-bold">✔ OK</span>
              </div>
            </div>
          </div>
        )
      },
      {
        title: "Client Cache Controller State",
        subtitle: "Visual connection pipeline of local storage synchronizations",
        badge: "CACHE ARCHITECTURE",
        node: (
          <div className="h-full flex flex-col justify-center space-y-3 font-mono text-[9px] px-2">
            <div className="grid grid-cols-3 gap-2 items-center text-center">
              <div className="p-2 bg-white/5 border border-white/10 rounded">
                <Monitor size={12} className="mx-auto text-white/60 mb-1" />
                <span className="text-white/80 block text-[8px]">UI View</span>
                <span className="text-white/30 text-[7px]">React.js</span>
              </div>

              <div className="text-[9px] font-bold text-[#E5FF45]">
                <span>◄───►</span>
                <span className="block text-[7px] text-white/40 mt-0.5">Local Sync</span>
              </div>

              <div className="p-2 bg-[#E5FF45]/10 border border-[#E5FF45]/20 rounded text-[#E5FF45]">
                <HardDrive size={12} className="mx-auto mb-1 text-[#E5FF45]" />
                <span className="font-semibold block text-[8px]">Cache Disk</span>
                <span className="text-[#E5FF45]/50 text-[7px]">LocalStorage</span>
              </div>
            </div>

            <div className="p-1.5 bg-black/40 border border-white/5 rounded-lg flex items-center justify-center gap-1.5 text-white/50 text-[8px] text-center">
              <CheckCircle2 size={10} className="text-[#E5FF45]" />
              <span>Session recovery metrics commit real-time: 0ms latencies.</span>
            </div>
          </div>
        )
      }
    ]
  };

  const projectSlides = slides[projectId] || [];

  const handleNext = () => {
    setSlideIdx((prev) => (prev + 1) % projectSlides.length);
  };

  const handlePrev = () => {
    setSlideIdx((prev) => (prev - 1 + projectSlides.length) % projectSlides.length);
  };

  if (projectSlides.length === 0) return null;

  const currentSlide = projectSlides[slideIdx];

  return (
    <div id={`carousel-${projectId}`} className="w-full bg-[#181818] border border-white/10 rounded-2xl p-4 mb-6 shadow-md select-none relative group/carousel transition-all">
      <div className="flex justify-between items-start mb-3 gap-4">
        <div>
          <span className="text-[8px] font-mono text-[#E5FF45] tracking-wider uppercase bg-[#E5FF45]/15 border border-[#E5FF45]/20 px-2 py-0.5 rounded-full font-bold">
            {currentSlide.badge}
          </span>
          <h4 className="text-xs font-semibold text-white font-display mt-2">
            {currentSlide.title}
          </h4>
          <p className="text-[9px] text-white/40 mt-0.5">
            {currentSlide.subtitle}
          </p>
        </div>

        {/* Slide Counter info */}
        <span className="text-[9px] font-mono text-white/30 shrink-0 select-none pt-0.5">
          {slideIdx + 1} / {projectSlides.length}
        </span>
      </div>

      {/* RENDER DYNAMIC COMPONENT PANEL CANVAS */}
      <div className="h-[148px] bg-[#0c0c0c] border border-white/5 rounded-xl p-3 flex flex-col justify-center relative overflow-hidden transition-all duration-300">
        {currentSlide.node}
      </div>

      {/* Indicators tray */}
      <div className="flex items-center justify-between mt-3.5 pt-1 border-t border-white/5">
        <div className="flex gap-1">
          {projectSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setSlideIdx(i)}
              className={`h-1 cursor-pointer transition-all duration-300 rounded-full ${
                i === slideIdx ? "w-5 bg-[#E5FF45]" : "w-1.5 bg-white/10 hover:bg-white/20"
              }`}
              title={`Jump to Slide ${i + 1}`}
            />
          ))}
        </div>

        <div className="flex items-center gap-1.5">
          <button
            onClick={handlePrev}
            className="p-1 bg-black/40 border border-white/10 hover:border-[#E5FF45]/30 rounded text-white/60 hover:text-white transition-all cursor-pointer"
            title="Previous Visual Mock"
          >
            <ChevronLeft size={13} />
          </button>
          <button
            onClick={handleNext}
            className="p-1 bg-black/40 border border-white/10 hover:border-[#E5FF45]/30 rounded text-white/60 hover:text-[#E5FF45] transition-all cursor-pointer"
            title="Next Visual Mock"
          >
            <ChevronRight size={13} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Projects({ onSelectCaseStudy }: ProjectsProps) {
  const [filter, setFilter] = useState<"All" | "AI" | "Web">("All");

  const filteredProjects = ProjectsData.filter(
    (proj) => filter === "All" || proj.category === filter
  );

  return (
    <section id="projects" className="py-16 px-4 md:px-8 max-w-7xl mx-auto border-t border-white/10">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <span className="text-xs font-mono text-[#E5FF45] tracking-wider uppercase font-semibold">
            // Showcase
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-medium text-white tracking-tight mt-1">
            Featured Interlock Systems
          </h2>
          <p className="text-white/55 text-sm mt-1.5 max-w-lg">
            High-efficiency architectures built manually focusing on modern layout speedups, automation logic, and UI design.
          </p>
        </div>

        {/* Filter Categories */}
        <div id="projects-filter-chips" className="flex items-center gap-1.5 p-1 bg-[#121212] border border-white/10 rounded-lg self-start">
          {(["All", "AI", "Web"] as const).map((cat) => (
            <button
              key={cat}
              id={`filter-${cat}`}
              onClick={() => setFilter(cat)}
              className={`px-4 py-1.5 text-xs font-mono rounded-md uppercase tracking-wider transition-all duration-300 ${
                filter === cat
                  ? "bg-[#E5FF45]/15 text-[#E5FF45] border border-[#E5FF45]/25"
                  : "text-white/50 hover:text-white border border-transparent"
              }`}
            >
              {cat === "All" ? "All Systems" : cat === "AI" ? "AI & Agents" : "Web & Portal"}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {filteredProjects.map((project, idx) => (
          <div
            key={project.id}
            id={`project-card-${project.id}`}
            className="flex flex-col bg-[#121212] border border-white/10 hover:border-[#E5FF45]/30 rounded-2xl p-6 md:p-8 transition-all duration-300 hover:bg-[#121212]/95 shadow-xl group hover:shadow-2xl"
          >
            {/* Header */}
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center gap-3">
                <div
                  id={`project-icon-${project.id}`}
                  className={`p-2.5 rounded-xl border ${
                    project.category === "AI"
                      ? "bg-[#E5FF45]/10 text-[#E5FF45] border-[#E5FF45]/20"
                      : "bg-white/5 text-white border-white/10"
                  }`}
                >
                  {project.category === "AI" ? <Cpu size={20} /> : <Globe size={20} />}
                </div>
                <div>
                  <span className="text-10px font-mono text-[#E5FF45] tracking-widest uppercase">
                    {project.period} • {project.role}
                  </span>
                  <h3 className="text-xl md:text-2xl font-display font-medium text-white group-hover:text-[#E5FF45] transition-colors duration-300 mt-0.5">
                    {project.title}
                  </h3>
                </div>
              </div>
              <span className="text-xs font-mono px-3 py-1 bg-white/5 text-white/50 border border-white/10 rounded-full">
                {project.category}
              </span>
            </div>

            {/* Main Desc */}
            <p className="text-white/70 text-sm leading-relaxed mb-6 font-light">
              {project.description}
            </p>

            {/* Visual Carousel/Gallery of System Architecture Mocks */}
            <ProjectGallery projectId={project.id} />

            {/* Bullets */}
            <ul className="space-y-2.5 mb-6 flex-grow">
              {project.bullets.map((bullet, bIdx) => (
                <li key={bIdx} className="flex items-start gap-2.5 text-xs text-white/60 leading-normal">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E5FF45] mt-1.5 shrink-0" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            {/* Metrics Dashboard */}
            {project.metrics && (
              <div
                id={`project-metrics-${project.id}`}
                className="grid grid-cols-3 gap-3 p-4 bg-black/30 rounded-xl border border-white/5 mb-6"
              >
                {project.metrics.map((metric, mIdx) => (
                  <div key={mIdx} className="text-center">
                    <span className="block text-xs font-mono text-white/40 uppercase tracking-wider">
                      {metric.label}
                    </span>
                    <span className="block text-base font-display font-semibold text-white mt-1">
                      {metric.value}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* Tags Grid */}
            <div className="flex flex-wrap gap-1.5 mb-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-mono bg-black px-2.5 py-1 rounded text-white/50 border border-white/5"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Footer Actions */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-5 border-t border-white/10">
              <div className="flex items-center gap-3">
                {project.github && (
                  <a
                    id={`project-git-${project.id}`}
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 px-4 py-2 bg-white/3 border border-white/10 hover:border-white/30 text-xs font-mono text-white/80 hover:text-white rounded-xl transition-all duration-300 cursor-pointer hover:shadow-[0_0_15px_rgba(255,255,255,0.05)]"
                  >
                    <Github size={13} />
                    <span>Repository</span>
                  </a>
                )}
              </div>

              <button
                id={`project-case-action-${project.id}`}
                onClick={() => onSelectCaseStudy(project.caseStudyId)}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#E5FF45]/10 hover:bg-[#E5FF45] text-[#E5FF45] hover:text-black border border-[#E5FF45]/20 hover:border-[#E5FF45] text-xs font-mono font-bold uppercase rounded-xl tracking-wider hover:shadow-[0_0_20px_rgba(229,255,69,0.35)] transition-all duration-300 cursor-pointer group/btn"
              >
                <span>Explore Case Study</span>
                <MoveRight size={13} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
