import React, { useState } from "react";
import { ProjectsData } from "../data";
import {
  Cpu,
  Globe,
  Github,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Database,
  Monitor,
  HardDrive,
  CheckCircle2,
  ExternalLink
} from "lucide-react";

interface ProjectsProps {
  onSelectCaseStudy: (caseStudyId: string) => void;
}

function ProjectGallery({ projectId }: { projectId: string }) {
  const [slideIdx, setSlideIdx] = useState(0);

  const slides: Record<string, { title: string; subtitle: string; label: string; node: React.ReactNode }[]> = {
    "ppt-gen": [
      {
        title: "System Architecture Flow",
        subtitle: "How generative outlines compile safely into editable PowerPoint files",
        label: "Architecture",
        node: (
          <div className="h-full flex flex-col justify-center px-3 space-y-3.5 font-mono text-[10px]">
            <div className="flex items-center justify-between gap-2">
              <div className="p-2 bg-white/[0.04] border border-white/10 rounded-lg text-white flex flex-col items-center w-24 text-center">
                <span className="text-[#E5FF45] font-semibold">User Prompt</span>
                <span className="text-white/40 text-[8.5px] mt-0.5">Topic &amp; outline</span>
              </div>

              <div className="h-px flex-grow bg-gradient-to-r from-[#E5FF45]/60 to-white/15" />

              <div className="p-2 bg-[#E5FF45]/10 border border-[#E5FF45]/30 rounded-lg text-[#E5FF45] flex flex-col items-center w-24 text-center">
                <Cpu size={13} className="mb-0.5 text-[#E5FF45]" />
                <span className="font-semibold">FastAPI</span>
              </div>

              <div className="h-px flex-grow bg-gradient-to-r from-white/15 to-[#E5FF45]/60" />

              <div className="p-2 bg-white/[0.04] border border-white/10 rounded-lg text-white flex flex-col items-center w-24 text-center">
                <span className="text-white font-semibold">.PPTX Deck</span>
                <span className="text-white/40 text-[8.5px] mt-0.5">Native export</span>
              </div>
            </div>

            <div className="p-2 bg-white/[0.03] border border-white/10 rounded-lg flex items-center justify-center gap-2 text-white/60 text-[9.5px]">
              <Database size={11} className="text-[#E5FF45] shrink-0" />
              <span>MCP Directory Sync mapping slide templates &amp; assets</span>
            </div>
          </div>
        )
      },
      {
        title: "Programmatic Slide Preview",
        subtitle: "Automatic layout balancing and dynamic typography scaling",
        label: "Slide Engine",
        node: (
          <div className="h-full flex gap-3 text-[10px] overflow-hidden">
            <div className="w-1/4 bg-white/[0.03] border border-white/10 p-1.5 rounded-lg flex flex-col gap-1.5 font-mono">
              <div className="h-5 bg-white/[0.06] rounded flex items-center px-1.5 text-[8.5px] text-white/50">01 Intro</div>
              <div className="h-5 bg-[#E5FF45]/15 border border-[#E5FF45]/35 rounded flex items-center px-1.5 text-[8.5px] text-[#E5FF45] font-semibold">02 System</div>
              <div className="h-5 bg-white/[0.03] rounded flex items-center px-1.5 text-[8.5px] text-white/35">03 Impact</div>
            </div>
            <div className="flex-1 bg-white/[0.03] border border-white/10 rounded-lg p-3 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-[8px] font-mono text-white/40">
                  <span className="text-[#E5FF45] uppercase font-semibold">Active Slide</span>
                  <span>16:9 Widescreen</span>
                </div>
                <h4 className="text-xs font-semibold text-white mt-1 font-display">Agentic Architecture</h4>
                <p className="text-white/55 text-[9px] mt-1 leading-relaxed">
                  · Structured outline parsing via LLM tool calls
                  <br />· Sandboxed local asset search over MCP
                </p>
              </div>
              <div className="flex justify-between items-center text-[8px] text-white/40 border-t border-white/10 pt-1.5 font-mono tabular-nums">
                <span>Two-Column Grid</span>
                <span>02 / 08</span>
              </div>
            </div>
          </div>
        )
      },
      {
        title: "MCP Compiler Output",
        subtitle: "FastAPI pipeline compiling structured markdown into binary slides",
        label: "Build Log",
        node: (
          <div className="h-full bg-[#050505] rounded-lg p-3 font-mono text-[9.5px] flex flex-col justify-between border border-white/10">
            <div className="space-y-1">
              <div className="flex items-center justify-between border-b border-white/10 pb-1 text-white/40 text-[8.5px]">
                <span>mcp-compiler.log</span>
                <span className="text-[#E5FF45]">200 OK</span>
              </div>
              <p className="text-white/45 pt-0.5">$ python3 main.py --compile --out=deck.pptx</p>
              <p className="text-white/80">Connected to presentation orchestration agent.</p>
              <p className="text-[#E5FF45]">MCP directory scan complete (4 template sources).</p>
              <p className="text-white/90">python-pptx rendered 8 editable slides in 256ms.</p>
            </div>
            <div className="text-right text-[8.5px] text-white/40 tabular-nums">
              80% manual effort saved
            </div>
          </div>
        )
      }
    ],
    "iris-ml": [
      {
        title: "Model Prediction Endpoint",
        subtitle: "FastAPI inference route returning validated species classification",
        label: "OpenAPI / Swagger",
        node: (
          <div className="h-full flex flex-col justify-between font-mono text-[9.5px]">
            <div className="flex items-center justify-between border-b border-white/10 pb-1.5">
              <span className="text-[#E5FF45] font-semibold">POST /predict</span>
              <span className="text-white/45 text-[8.5px] tabular-nums">&lt;15ms p95</span>
            </div>

            <div className="p-2.5 bg-white/[0.04] border border-white/10 rounded-lg text-white/85 text-[8.5px] leading-relaxed">
              {"{ \"sepal_length\": 5.1, \"sepal_width\": 3.5, \"petal_length\": 1.4, \"petal_width\": 0.2 }"}
            </div>

            <div className="flex items-center justify-between text-[9px] text-[#E5FF45] font-medium">
              <span>200 OK → Iris Setosa</span>
              <span className="tabular-nums text-white/50">confidence: 0.985</span>
            </div>
          </div>
        )
      },
      {
        title: "Multi-Stage Docker Build",
        subtitle: "Optimized container layers reducing image footprint by over 75%",
        label: "Containerization",
        node: (
          <div className="h-full flex flex-col justify-center space-y-2 font-mono text-[9.5px] leading-relaxed">
            <div className="flex items-center gap-2">
              <span className="text-white font-semibold">STAGE 1</span>
              <span className="text-white/65">FROM python:3.10-slim AS builder</span>
            </div>
            <div className="pl-4 text-white/40 text-[8.5px]">
              pip wheel fastapi scikit-learn uvicorn numpy
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#E5FF45] font-semibold">STAGE 2</span>
              <span className="text-white/65">Runtime image (wheels + serialized model)</span>
            </div>
            <div className="pl-4 text-[#E5FF45] font-semibold text-[9px] tabular-nums">
              Final image: 280 MB (down from 1.2 GB)
            </div>
          </div>
        )
      },
      {
        title: "Azure Container Apps Routing",
        subtitle: "ACR image registry to managed autoscaling cloud container apps",
        label: "Cloud Deploy",
        node: (
          <div className="h-full flex flex-col justify-between font-mono">
            <div className="flex justify-between items-center bg-white/[0.04] px-2.5 py-1.5 border border-white/10 rounded-lg text-[9px]">
              <span className="text-white/60">Azure Container Registry → ACA</span>
              <span className="text-[#E5FF45] font-semibold">Healthy</span>
            </div>

            <div className="flex items-center justify-around py-2">
              <div className="text-center">
                <span className="block text-white/40 text-[8px] uppercase">Registry</span>
                <span className="text-[10px] font-semibold text-white">Azure ACR</span>
              </div>
              <span className="text-[#E5FF45] font-bold">→</span>
              <div className="text-center">
                <span className="block text-white/40 text-[8px] uppercase">Runtime</span>
                <span className="text-[10px] font-semibold text-[#E5FF45]">FastAPI Service</span>
              </div>
            </div>

            <div className="text-[8.5px] text-white/40 text-center truncate">
              iris-deploy-mastan.onrender.com/docs
            </div>
          </div>
        )
      }
    ],
    "fangs-ent": [
      {
        title: "Interactive Game Hub",
        subtitle: "Low-latency React state management with persistent user scoring",
        label: "Frontend UI",
        node: (
          <div className="h-full flex flex-col justify-between font-mono">
            <div className="flex justify-between items-center bg-white/[0.04] px-2.5 py-1.5 border border-white/10 rounded-lg">
              <span className="text-[9px] text-white/75 font-medium">Session Ready</span>
              <span className="text-[10px] text-[#E5FF45] font-semibold tabular-nums">8,420 XP</span>
            </div>

            <div className="grid grid-cols-2 gap-2.5 text-[9.5px]">
              <div className="p-2 bg-[#E5FF45]/10 border border-[#E5FF45]/30 rounded-lg flex items-center justify-between text-white">
                <span>Code Maze</span>
                <span className="text-[#E5FF45] font-semibold text-[8.5px]">Play</span>
              </div>
              <div className="p-2 bg-white/[0.04] border border-white/10 rounded-lg flex items-center justify-between text-white/75">
                <span>Pop Trivia</span>
                <span className="text-white/45 text-[8.5px]">Open</span>
              </div>
            </div>

            <div className="text-[8.5px] text-white/45 text-center">
              0.8s first paint · +45% interactive session engagement
            </div>
          </div>
        )
      },
      {
        title: "Logic Challenge Viewport",
        subtitle: "Responsive timed coding trivia with instant answer validation",
        label: "Game Loop",
        node: (
          <div className="h-full bg-white/[0.03] border border-white/10 rounded-lg p-3 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center text-[8px] font-mono text-white/45 mb-1">
                <span>Challenge 02</span>
                <span className="text-[#E5FF45] font-semibold tabular-nums">45s Timer</span>
              </div>
              <p className="text-white/85 text-[9.5px] leading-snug">
                Stabilize callback references inside high-frequency React renders:
              </p>
            </div>

            <div className="space-y-1.5 font-mono text-[8.5px]">
              <div className="w-full bg-black/50 border border-white/10 rounded px-2.5 py-1 text-white/50">
                A) Mutate shared ref objects during render
              </div>
              <div className="w-full bg-[#E5FF45]/10 border border-[#E5FF45]/35 rounded px-2.5 py-1 text-[#E5FF45] flex items-center justify-between">
                <span>B) Memoize dependency keys cleanly</span>
                <span className="font-semibold">Correct</span>
              </div>
            </div>
          </div>
        )
      },
      {
        title: "Client Persistence Pipeline",
        subtitle: "Zero-latency browser sync preserving player progression",
        label: "State Sync",
        node: (
          <div className="h-full flex flex-col justify-center space-y-3 font-mono text-[9.5px] px-2">
            <div className="grid grid-cols-3 gap-2 items-center text-center">
              <div className="p-2 bg-white/[0.04] border border-white/10 rounded-lg">
                <Monitor size={12} className="mx-auto text-white/60 mb-1" />
                <span className="text-white/85 block text-[8.5px]">React UI</span>
              </div>

              <div className="text-[9px] font-semibold text-[#E5FF45]">
                <span>↔</span>
                <span className="block text-[7.5px] text-white/45 mt-0.5">Local Sync</span>
              </div>

              <div className="p-2 bg-[#E5FF45]/10 border border-[#E5FF45]/30 rounded-lg text-[#E5FF45]">
                <HardDrive size={12} className="mx-auto mb-1 text-[#E5FF45]" />
                <span className="font-semibold block text-[8.5px]">LocalStorage</span>
              </div>
            </div>

            <div className="p-1.5 bg-white/[0.03] border border-white/10 rounded-lg flex items-center justify-center gap-1.5 text-white/55 text-[8.5px]">
              <CheckCircle2 size={10} className="text-[#E5FF45] shrink-0" />
              <span>60% returning player session recovery</span>
            </div>
          </div>
        )
      }
    ]
  };

  const projectSlides = slides[projectId] || [];
  if (projectSlides.length === 0) return null;

  const currentSlide = projectSlides[slideIdx];
  const handleNext = () => setSlideIdx((prev) => (prev + 1) % projectSlides.length);
  const handlePrev = () => setSlideIdx((prev) => (prev - 1 + projectSlides.length) % projectSlides.length);

  return (
    <div
      id={`carousel-${projectId}`}
      className="w-full bg-[#0A0A0A] border border-white/10 rounded-xl p-4 mb-6 select-none"
    >
      <div className="flex justify-between items-start mb-3 gap-4">
        <div className="min-w-0">
          <div className="text-[10px] font-mono uppercase tracking-[0.14em] text-[#E5FF45] font-semibold">
            {currentSlide.label}
          </div>
          <h4 className="text-sm font-semibold text-white font-display mt-0.5 truncate">
            {currentSlide.title}
          </h4>
          <p className="text-[11px] text-white/45 mt-0.5 line-clamp-1">{currentSlide.subtitle}</p>
        </div>

        <span className="text-[11px] font-mono text-white/40 shrink-0 tabular-nums">
          0{slideIdx + 1} / 0{projectSlides.length}
        </span>
      </div>

      <div className="h-[144px] bg-[#060606] border border-white/10 rounded-lg p-3 flex flex-col justify-center overflow-hidden">
        {currentSlide.node}
      </div>

      <div className="flex items-center justify-between mt-3 pt-2.5 border-t border-white/10">
        <div className="flex gap-1.5">
          {projectSlides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setSlideIdx(i)}
              className={`h-1.5 cursor-pointer transition-all duration-200 rounded-full ${
                i === slideIdx ? "w-6 bg-[#E5FF45]" : "w-1.5 bg-white/20 hover:bg-white/35"
              }`}
              aria-label={`View slide ${i + 1}`}
            />
          ))}
        </div>

        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={handlePrev}
            className="p-1.5 bg-white/[0.04] border border-white/10 hover:border-[#E5FF45]/50 rounded-md text-white/60 hover:text-[#E5FF45] transition-colors cursor-pointer"
            aria-label="Previous preview"
          >
            <ChevronLeft size={13} />
          </button>
          <button
            type="button"
            onClick={handleNext}
            className="p-1.5 bg-white/[0.04] border border-white/10 hover:border-[#E5FF45]/50 rounded-md text-white/60 hover:text-[#E5FF45] transition-colors cursor-pointer"
            aria-label="Next preview"
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
    <section id="projects" className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6 pb-6 border-b border-black/10 dark:border-white/10">
        <div>
          <span className="text-[11px] font-mono uppercase tracking-[0.16em] text-lime-700 dark:text-[#E5FF45] font-semibold block">
            Selected Work
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-neutral-950 dark:text-white tracking-tight mt-1">
            Featured Engineering Projects
          </h2>
          <p className="text-neutral-600 dark:text-white/55 text-sm sm:text-base mt-2 max-w-xl">
            Production-ready AI automation pipelines, containerized cloud ML APIs, and responsive full-stack applications.
          </p>
        </div>

        {/* Segmented Category Filter */}
        <div
          id="projects-filter-chips"
          className="inline-flex items-center gap-1 p-1 bg-black/[0.04] dark:bg-[#121212] border border-black/10 dark:border-white/10 rounded-xl self-start"
        >
          {(["All", "AI", "Web"] as const).map((cat) => (
            <button
              key={cat}
              id={`filter-${cat}`}
              type="button"
              onClick={() => setFilter(cat)}
              className={`px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider rounded-lg transition-colors duration-150 cursor-pointer whitespace-nowrap ${
                filter === cat
                  ? "bg-neutral-950 dark:bg-[#E5FF45] text-[#E5FF45] dark:text-black font-bold"
                  : "text-neutral-600 dark:text-white/55 hover:text-neutral-950 dark:hover:text-white"
              }`}
            >
              {cat === "All" ? "All Projects" : cat === "AI" ? "AI & ML" : "Web Apps"}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <article
            key={project.id}
            id={`project-card-${project.id}`}
            className="relative overflow-hidden flex flex-col bg-white dark:bg-[#121212] border border-black/10 dark:border-white/10 hover:border-lime-600/50 dark:hover:border-[#E5FF45]/45 rounded-2xl p-6 sm:p-7 transition-all duration-200 shadow-xs hover:shadow-md group"
          >
            <div className="pointer-events-none absolute -top-16 -right-16 w-40 h-40 rounded-full bg-[#E5FF45] blur-[90px] opacity-0 group-hover:opacity-15 transition-opacity duration-300" />

            {/* Card Header */}
            <div className="relative z-10 flex items-start justify-between gap-4 mb-4">
              <div className="flex items-start gap-3.5">
                <div
                  id={`project-icon-${project.id}`}
                  className={`p-2.5 rounded-xl border shrink-0 ${
                    project.category === "AI"
                      ? "bg-lime-500/10 dark:bg-[#E5FF45]/10 text-lime-700 dark:text-[#E5FF45] border-lime-600/25 dark:border-[#E5FF45]/25"
                      : "bg-neutral-100 dark:bg-white/[0.06] text-neutral-800 dark:text-white/80 border-black/10 dark:border-white/10"
                  }`}
                >
                  {project.category === "AI" ? <Cpu size={19} /> : <Globe size={19} />}
                </div>
                <div>
                  <div className="text-[11px] font-mono text-neutral-500 dark:text-white/45 tabular-nums">
                    <span>{project.period}</span>
                    <span className="mx-1.5 text-neutral-300 dark:text-white/20">·</span>
                    <span>{project.role}</span>
                  </div>
                  <h3 className="text-xl font-display font-bold text-neutral-950 dark:text-white mt-0.5 tracking-tight">
                    {project.title}
                  </h3>
                </div>
              </div>

              <span className="text-[11px] font-mono uppercase tracking-[0.14em] text-lime-700 dark:text-[#E5FF45] font-semibold shrink-0 pt-1">
                {project.category}
              </span>
            </div>

            <p className="relative z-10 text-neutral-600 dark:text-white/60 text-sm leading-relaxed mb-5">
              {project.description}
            </p>

            {/* Interactive System Preview Gallery */}
            <div className="relative z-10">
              <ProjectGallery projectId={project.id} />
            </div>

            {/* Key Engineering Highlights */}
            <ul className="relative z-10 space-y-2 mb-6 flex-grow">
              {project.bullets.map((bullet, bIdx) => (
                <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-600 dark:text-white/65 leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-lime-600 dark:bg-[#E5FF45] mt-2 shrink-0" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            {/* Metrics Row */}
            {project.metrics && (
              <div
                id={`project-metrics-${project.id}`}
                className="relative z-10 grid grid-cols-3 gap-3 py-3.5 px-4 bg-neutral-50 dark:bg-[#080808] rounded-xl border border-black/10 dark:border-white/10 mb-5"
              >
                {project.metrics.map((metric, mIdx) => (
                  <div key={mIdx} className="text-center">
                    <span className="block text-base sm:text-lg font-display font-bold text-neutral-950 dark:text-[#E5FF45] tabular-nums">
                      {metric.value}
                    </span>
                    <span className="block text-[10px] font-mono uppercase tracking-wider text-neutral-500 dark:text-white/45 mt-0.5">
                      {metric.label}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* Clean Unboxed Tech Stack Metadata */}
            <div className="relative z-10 text-xs font-mono text-neutral-500 dark:text-white/45 mb-5 leading-relaxed">
              {project.tags.map((tag, tIdx) => (
                <React.Fragment key={tag}>
                  <span className="text-neutral-800 dark:text-white/75">{tag}</span>
                  {tIdx < project.tags.length - 1 && (
                    <span className="mx-2 text-neutral-300 dark:text-white/20">·</span>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Footer Action Row */}
            <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-black/10 dark:border-white/10">
              <div className="flex flex-wrap items-center gap-2">
                {project.github && (
                  <a
                    id={`project-git-${project.id}`}
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-mono uppercase tracking-wider bg-neutral-50 dark:bg-[#080808] border border-black/10 dark:border-white/15 text-neutral-700 dark:text-white/75 hover:text-neutral-950 dark:hover:text-[#E5FF45] hover:border-black/30 dark:hover:border-[#E5FF45]/50 rounded-xl transition-colors"
                  >
                    <Github size={14} />
                    <span>GitHub</span>
                  </a>
                )}

                {project.demo && (
                  <a
                    id={`project-demo-${project.id}`}
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-mono font-semibold uppercase tracking-wider bg-lime-500/10 dark:bg-[#E5FF45]/10 border border-lime-600/30 dark:border-[#E5FF45]/35 text-lime-800 dark:text-[#E5FF45] hover:bg-lime-500/20 dark:hover:bg-[#E5FF45]/20 rounded-xl transition-colors"
                  >
                    <ExternalLink size={13} />
                    <span>Live API Docs</span>
                  </a>
                )}
              </div>

              <button
                id={`project-case-action-${project.id}`}
                type="button"
                onClick={() => onSelectCaseStudy(project.caseStudyId)}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-neutral-950 dark:bg-[#E5FF45] hover:bg-neutral-800 dark:hover:bg-[#d8f332] text-[#E5FF45] dark:text-black text-xs font-mono font-bold uppercase tracking-wider rounded-xl transition-colors duration-200 cursor-pointer group/btn"
              >
                <span>Case Study</span>
                <ArrowRight size={13} className="transition-transform group-hover/btn:translate-x-0.5" />
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
