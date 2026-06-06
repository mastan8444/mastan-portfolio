import { useState } from "react";
import { CaseStudiesData } from "../data";
import { Target, Lightbulb, ShieldAlert, Cpu, CheckCircle2, ChevronRight, Terminal, Layers, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface CaseStudiesProps {
  initialCaseStudyId?: string | null;
}

export default function CaseStudies({ initialCaseStudyId }: CaseStudiesProps) {
  const [activeCaseId, setActiveCaseId] = useState<string>(
    initialCaseStudyId || "ppt-generator"
  );

  const selectedCase =
    CaseStudiesData.find((study) => study.id === activeCaseId) ||
    CaseStudiesData[0];

  return (
    <section id="case-studies" className="py-16 px-4 md:px-8 max-w-7xl mx-auto border-t border-slate-200 dark:border-slate-800">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <span className="text-xs font-mono text-lime-700 dark:text-lime-400 tracking-wider uppercase font-extrabold block">
            // Deep-Dive Core
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-medium text-slate-900 dark:text-white tracking-tight mt-1">
            Case Studies Explorer
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-1.5 max-w-lg">
            Complete technical breakdowns, active network topologies, and resolutions of architectural bottlenecks.
          </p>
        </div>

        {/* Tab Controls */}
        <div id="case-study-selectors" className="flex items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg self-start">
          {CaseStudiesData.map((study) => (
            <button
              key={study.id}
              id={`select-case-${study.id}`}
              onClick={() => setActiveCaseId(study.id)}
              className={`px-4 py-1.5 text-xs font-mono rounded-md uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                activeCaseId === study.id
                  ? "bg-slate-900 dark:bg-[#E5FF45] text-white dark:text-black font-semibold"
                  : "text-slate-500 dark:text-slate-450 hover:text-slate-900 dark:hover:text-white border border-transparent"
              }`}
            >
              {study.title.split(" ")[0]} Project
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={selectedCase.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.35 }}
          className="space-y-12"
        >
          {/* Subtitle intro */}
          <div className="bg-white dark:bg-[#121212] border border-slate-200 dark:border-slate-800 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xs">
            <div>
              <h3 className="text-2xl md:text-3xl font-display font-medium text-slate-900 dark:text-white">
                {selectedCase.title}
              </h3>
              <p className="text-lime-700 dark:text-lime-400 text-sm font-mono mt-1 font-extrabold">// {selectedCase.subtitle}</p>
            </div>
            <div className="flex flex-wrap gap-1.5 max-w-md">
              {selectedCase.technologiesUsed.map((tech) => (
                <span
                  key={tech}
                  className="text-[10px] font-mono bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-2.5 py-1 rounded text-slate-650 dark:text-slate-400 shadow-2xs select-none"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Problem vs Solution cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div
              id="case-problem-card"
              className="bg-white dark:bg-[#121212] border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 rounded-2xl p-6 md:p-8 transition-all duration-300 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-5 text-slate-800 dark:text-slate-200 pb-3 border-b border-slate-100 dark:border-slate-800">
                <Target size={20} className="text-slate-400" />
                <h4 className="font-display text-slate-900 dark:text-white font-bold text-lg">The Technical Bottleneck</h4>
              </div>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed font-light">{selectedCase.problem}</p>
            </div>

            <div
              id="case-solution-card"
              className="bg-white dark:bg-[#121212] border border-slate-200 dark:border-slate-800 hover:border-lime-500/20 rounded-2xl p-6 md:p-8 transition-all duration-300 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-5 text-lime-700 dark:text-lime-400 pb-3 border-b border-lime-500/10 dark:border-slate-800">
                <Lightbulb size={20} />
                <h4 className="font-display text-slate-900 dark:text-white font-bold text-lg">Architectural Solution</h4>
              </div>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed font-light">{selectedCase.solution}</p>
            </div>
          </div>

          {/* Architecture Mapping (Fluid Flow UI Grid) */}
          <div
            id="case-topology-map"
            className="bg-white dark:bg-[#121212] border border-slate-200 dark:border-slate-800 rounded-2xl p-6 md:p-8 shadow-sm"
          >
            <div className="flex justify-between items-center mb-8 pb-3 border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-3 text-lime-700 dark:text-lime-400">
                <Cpu size={20} />
                <h4 className="font-display text-slate-950 dark:text-white font-bold text-lg">Infrastructure Topology</h4>
              </div>
              <span className="text-xs font-mono text-slate-400 dark:text-slate-500 uppercase font-semibold">// Network Model Nodes</span>
            </div>

            {/* Topology Flow Layout - Custom styled pipeline */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
              {/* Client tier */}
              <div id="tier-client" className="space-y-4">
                <span className="text-10px font-mono text-slate-400 dark:text-slate-500 tracking-wider uppercase block text-center md:text-left font-bold">
                  Frontend Interface
                </span>
                {selectedCase.architecture.nodes
                  .filter((n) => n.type === "client")
                  .map((node) => (
                    <div
                      key={node.id}
                      id={`node-${node.id}`}
                      className="p-5 bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 rounded-xl hover:border-slate-300 dark:hover:border-slate-700 transition-colors duration-250 cursor-default"
                    >
                      <div className="flex items-center gap-2 mb-2 pb-1.5 border-b border-slate-100 dark:border-slate-800">
                        <span className="w-2 h-2 rounded-full bg-lime-500 animate-pulse" />
                        <h5 className="text-sm font-semibold text-slate-900 dark:text-slate-100 font-display">{node.label}</h5>
                      </div>
                      <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed font-light">{node.role}</p>
                    </div>
                  ))}
              </div>

              {/* Connections Column 1: Client to API */}
              <div className="hidden md:flex flex-col justify-center items-center pointer-events-none relative">
                <div className="w-full h-px bg-slate-200 dark:bg-slate-800 relative" />
                <span className="text-[9px] font-mono text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-2.5 py-1 rounded-full absolute -translate-y-1/2 select-none">
                  REST Requests
                </span>
              </div>

              {/* Server / API Tier */}
              <div id="tier-api" className="space-y-4">
                <span className="text-10px font-mono text-slate-400 dark:text-slate-500 tracking-wider uppercase block text-center font-bold">
                  Core Service Logic
                </span>
                {selectedCase.architecture.nodes
                  .filter((n) => n.type === "api" || (n.type === "server" && n.id !== "mcp-server"))
                  .map((node) => (
                    <div
                      key={node.id}
                      id={`node-${node.id}`}
                      className="p-5 bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 rounded-xl hover:border-lime-500/20 dark:hover:border-lime-400/20 transition-colors duration-250 cursor-default"
                    >
                      <div className="flex items-center gap-2 mb-2 pb-1.5 border-b border-slate-100 dark:border-slate-800">
                        <span className="w-2 h-2 rounded-full bg-lime-600 dark:bg-lime-400" />
                        <h5 className="text-sm font-semibold text-slate-900 dark:text-slate-100 font-display">{node.label}</h5>
                      </div>
                      <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed font-light">{node.role}</p>
                    </div>
                  ))}
              </div>

              {/* Connections Column 2: API to Utilities / Storage */}
              <div className="hidden md:flex flex-col justify-center items-center pointer-events-none relative">
                <div className="w-full h-px bg-slate-200 dark:bg-slate-800 relative" />
                <span className="text-[9px] font-mono text-lime-800 dark:text-[#E5FF45] bg-lime-100/60 dark:bg-lime-950/40 border border-lime-200 dark:border-lime-800/80 px-2.5 py-1 rounded-full absolute -translate-y-1/2 select-none font-bold">
                  I/O Pipelines
                </span>
              </div>

              {/* Storage or Secondary Server Tier */}
              <div id="tier-storage" className="space-y-4">
                <span className="text-10px font-mono text-slate-400 dark:text-slate-500 tracking-wider uppercase block text-center md:text-right font-bold">
                  Integration & Storage
                </span>
                {selectedCase.architecture.nodes
                  .filter((n) => n.type === "storage" || n.id === "mcp-server")
                  .map((node) => (
                    <div
                      key={node.id}
                      id={`node-${node.id}`}
                      className="p-5 bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 rounded-xl hover:border-slate-300 dark:hover:border-slate-700 transition-colors duration-250 cursor-default"
                    >
                      <div className="flex items-center gap-2 mb-2 pb-1.5 border-b border-slate-100 dark:border-slate-800">
                        <span className="w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-500" />
                        <h5 className="text-sm font-semibold text-slate-900 dark:text-slate-100 font-display">{node.label}</h5>
                      </div>
                      <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed font-light">{node.role}</p>
                    </div>
                  ))}
              </div>
            </div>

            {/* Mobile connections indicator */}
            <div className="flex md:hidden flex-col items-center gap-1.5 mt-6 py-2 border-t border-slate-100 dark:border-slate-800">
              <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500">Pipeline Flow</span>
              <div className="flex items-center gap-2 text-xs font-mono text-slate-605 dark:text-slate-400">
                <span>UI Client</span>
                <ArrowRight size={12} />
                <span>API Middleware</span>
                <ArrowRight size={12} />
                <span>Compiler Hub</span>
              </div>
            </div>
          </div>

          {/* Key technical challenges */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 text-slate-900 dark:text-white pb-2 border-b border-slate-200 dark:border-slate-800">
              <ShieldAlert size={20} className="text-lime-700 dark:text-lime-400" />
              <h4 className="font-display text-slate-900 dark:text-white font-bold text-lg">Bottlenecks & Creative Solutions</h4>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {selectedCase.keyChallenges.map((challenge, idx) => (
                <div
                  key={idx}
                  id={`challenge-item-${idx}`}
                  className="bg-white dark:bg-[#121212] border border-slate-200 dark:border-slate-800 transition-all duration-300 overflow-hidden flex flex-col rounded-2xl shadow-sm hover:shadow"
                >
                  {/* challenge section */}
                  <div className="p-6 bg-slate-50/60 dark:bg-slate-900/40 border-b border-slate-100 dark:border-slate-800">
                    <span className="text-[10px] font-mono font-bold text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700 px-2.5 py-0.5 rounded-full uppercase">
                      Problem Aspect {idx + 1}
                    </span>
                    <h5 className="text-base font-display font-bold text-slate-900 dark:text-white mt-3">{challenge.title}</h5>
                    <p className="text-slate-550 dark:text-slate-400 text-sm leading-relaxed mt-2 font-light">{challenge.desc}</p>
                  </div>
                  {/* resolution section */}
                  <div className="p-6 bg-white dark:bg-[#121212] flex-grow">
                    <span className="text-[10px] font-mono font-bold text-lime-700 dark:text-[#E5FF45] bg-lime-500/10 dark:bg-lime-400/10 border border-lime-500/20 dark:border-lime-400/25 px-2.5 py-0.5 rounded-full uppercase">
                      Technical Resolution
                    </span>
                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mt-3 font-light">{challenge.resolution}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Measurable Strategic Impact */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 text-lime-700 dark:text-lime-400 pb-2 border-b border-slate-250 dark:border-slate-800">
              <CheckCircle2 size={20} />
              <h4 className="font-display text-slate-900 dark:text-white font-bold text-lg">Measurable Enterprise Impact</h4>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {selectedCase.impact.map((metric, idx) => (
                <div
                  key={idx}
                  id={`impact-card-${idx}`}
                  className="bg-white dark:bg-[#121212] border border-slate-200 dark:border-slate-800 text-center rounded-2xl p-6 md:p-8 transition-colors duration-300 shadow-sm hover:border-lime-500/15"
                >
                  <span className="block text-3xl md:text-4xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-lime-700 dark:from-[#E5FF45] to-slate-900 dark:to-white mb-2">
                    {metric.value}
                  </span>
                  <span className="block text-sm font-display font-bold text-slate-800 dark:text-slate-200 mb-1.5 uppercase tracking-wide">{metric.title}</span>
                  <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed font-light">{metric.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
