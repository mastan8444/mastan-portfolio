import { useState } from "react";
import { CaseStudiesData } from "../data";
import { Target, Lightbulb, ShieldAlert, Cpu, CheckCircle2, ChevronRight, Terminal, Layers, ArrowRight, ArrowDown } from "lucide-react";
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
    <section id="case-studies" className="py-16 px-4 md:px-8 max-w-7xl mx-auto border-t border-white/10">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <span className="text-xs font-mono text-[#E5FF45] tracking-wider uppercase font-semibold">
            // Deep-Dive Core
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-medium text-white tracking-tight mt-1">
            Case Studies Explorer
          </h2>
          <p className="text-white/60 text-sm mt-1.5 max-w-lg">
            Complete technical breakdowns, active network topologies, and resolutions of architectural bottlenecks.
          </p>
        </div>

        {/* Tab Controls */}
        <div id="case-study-selectors" className="flex items-center gap-1.5 p-1 bg-[#121212] border border-white/10 rounded-lg self-start">
          {CaseStudiesData.map((study) => (
            <button
              key={study.id}
              id={`select-case-${study.id}`}
              onClick={() => setActiveCaseId(study.id)}
              className={`px-4 py-1.5 text-xs font-mono rounded-md uppercase tracking-wider transition-all duration-300 ${
                activeCaseId === study.id
                  ? "bg-[#E5FF45]/15 text-[#E5FF45] border border-[#E5FF45]/25 font-semibold"
                  : "text-white/55 hover:text-white border border-transparent"
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
          <div className="bg-[#121212] border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-display font-medium text-white">
                {selectedCase.title}
              </h3>
              <p className="text-[#E5FF45] text-sm font-mono mt-1 font-semibold">// {selectedCase.subtitle}</p>
            </div>
            <div className="flex flex-wrap gap-1.5 max-w-md">
              {selectedCase.technologiesUsed.map((tech) => (
                <span
                  key={tech}
                  className="text-[10px] font-mono bg-black/35 border border-white/5 px-2.5 py-1 rounded text-white/70"
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
              className="bg-black/20 border border-white/10 hover:border-white/20 rounded-2xl p-6 md:p-8 transition-all duration-300 shadow-xl"
            >
              <div className="flex items-center gap-3 mb-5 text-white pb-3 border-b border-white/10">
                <Target size={20} className="text-white/50" />
                <h4 className="font-display text-white font-medium text-lg">The Technical Bottleneck</h4>
              </div>
              <p className="text-white/75 text-sm leading-relaxed font-light">{selectedCase.problem}</p>
            </div>

            <div
              id="case-solution-card"
              className="bg-black/20 border border-[#E5FF45]/15 hover:border-[#E5FF45]/30 rounded-2xl p-6 md:p-8 transition-all duration-300 shadow-xl"
            >
              <div className="flex items-center gap-3 mb-5 text-[#E5FF45] pb-3 border-b border-[#E5FF45]/15">
                <Lightbulb size={20} />
                <h4 className="font-display text-white font-medium text-lg">Architectural Solution</h4>
              </div>
              <p className="text-white/75 text-sm leading-relaxed font-light">{selectedCase.solution}</p>
            </div>
          </div>

          {/* Architecture Mapping (Fluid Flow UI Grid) */}
          <div
            id="case-topology-map"
            className="bg-[#121212] border border-white/10 rounded-2xl p-6 md:p-8 hover:border-white/20 transition-all duration-300"
          >
            <div className="flex justify-between items-center mb-8 pb-3 border-b border-white/10">
              <div className="flex items-center gap-3 text-[#E5FF45]">
                <Cpu size={20} />
                <h4 className="font-display text-white font-medium text-lg">Infrastructure Topology</h4>
              </div>
              <span className="text-xs font-mono text-white/40 uppercase">// Network Model Nodes</span>
            </div>

            {/* Topology Flow Layout - Custom styled pipeline */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
              {/* Client tier */}
              <div id="tier-client" className="space-y-4">
                <span className="text-10px font-mono text-white/40 tracking-wider uppercase block text-center md:text-left">
                  Frontend Interface
                </span>
                {selectedCase.architecture.nodes
                  .filter((n) => n.type === "client")
                  .map((node) => (
                    <div
                      key={node.id}
                      id={`node-${node.id}`}
                      className="p-5 bg-[#080808] border border-white/15 rounded-xl hover:border-white/30 transition-colors duration-250 cursor-default"
                    >
                      <div className="flex items-center gap-2 mb-2 pb-1.5 border-b border-white/10">
                        <span className="w-2 h-2 rounded-full bg-[#E5FF45] animate-pulse" />
                        <h5 className="text-sm font-semibold text-white font-display">{node.label}</h5>
                      </div>
                      <p className="text-white/60 text-xs leading-relaxed font-light">{node.role}</p>
                    </div>
                  ))}
              </div>

              {/* Connections Column 1: Client to API */}
              <div className="hidden md:flex flex-col justify-center items-center pointer-events-none relative">
                <div className="w-full h-px bg-gradient-to-r from-white/10 to-[#E5FF45]/10 relative" />
                <span className="text-[9px] font-mono text-white bg-[#080808] border border-white/10 px-2.5 py-1 rounded-full absolute -translate-y-1/2">
                  REST Requests
                </span>
              </div>

              {/* Server / API Tier */}
              <div id="tier-api" className="space-y-4">
                <span className="text-10px font-mono text-white/40 tracking-wider uppercase block text-center">
                  Core Service Logic
                </span>
                {selectedCase.architecture.nodes
                  .filter((n) => n.type === "api" || (n.type === "server" && n.id !== "mcp-server"))
                  .map((node) => (
                    <div
                      key={node.id}
                      id={`node-${node.id}`}
                      className="p-5 bg-[#080808] border border-[#E5FF45]/15 rounded-xl hover:border-[#E5FF45]/35 transition-colors duration-250 cursor-default"
                    >
                      <div className="flex items-center gap-2 mb-2 pb-1.5 border-b border-white/10">
                        <span className="w-2 h-2 rounded-full bg-[#E5FF45]" />
                        <h5 className="text-sm font-semibold text-white font-display">{node.label}</h5>
                      </div>
                      <p className="text-white/60 text-xs leading-relaxed font-light">{node.role}</p>
                    </div>
                  ))}
              </div>

              {/* Connections Column 2: API to Utilities / Storage */}
              <div className="hidden md:flex flex-col justify-center items-center pointer-events-none relative">
                <div className="w-full h-px bg-gradient-to-r from-[#E5FF45]/10 to-white/10 relative" />
                <span className="text-[9px] font-mono text-[#E5FF45] bg-[#080808] border border-white/10 px-2.5 py-1 rounded-full absolute -translate-y-1/2">
                  I/O Pipelines
                </span>
              </div>

              {/* Storage or Secondary Server Tier */}
              <div id="tier-storage" className="space-y-4">
                <span className="text-10px font-mono text-white/40 tracking-wider uppercase block text-center md:text-right">
                  Integration & Storage
                </span>
                {selectedCase.architecture.nodes
                  .filter((n) => n.type === "storage" || n.id === "mcp-server")
                  .map((node) => (
                    <div
                      key={node.id}
                      id={`node-${node.id}`}
                      className="p-5 bg-[#080808] border border-white/10 rounded-xl hover:border-white/30 transition-colors duration-250 cursor-default"
                    >
                      <div className="flex items-center gap-2 mb-2 pb-1.5 border-b border-white/10">
                        <span className="w-2 h-2 rounded-full bg-white" />
                        <h5 className="text-sm font-semibold text-white font-display">{node.label}</h5>
                      </div>
                      <p className="text-white/60 text-xs leading-relaxed font-light">{node.role}</p>
                    </div>
                  ))}
              </div>
            </div>

            {/* Mobile connections indicator */}
            <div className="flex md:hidden flex-col items-center gap-1.5 mt-6 py-2 border-t border-white/10">
              <span className="text-[10px] font-mono text-white/40">Pipeline Flow</span>
              <div className="flex items-center gap-2 text-xs font-mono text-white/60">
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
            <div className="flex items-center gap-3 text-white pb-2 border-b border-white/10">
              <ShieldAlert size={20} className="text-[#E5FF45]" />
              <h4 className="font-display text-white font-medium text-lg">Bottlenecks & Creative Solutions</h4>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {selectedCase.keyChallenges.map((challenge, idx) => (
                <div
                  key={idx}
                  id={`challenge-item-${idx}`}
                  className="bg-[#121212] border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden flex flex-col rounded-2xl"
                >
                  {/* challenge section */}
                  <div className="p-6 bg-[#080808]/40 border-b border-white/5">
                    <span className="text-[10px] font-mono font-medium text-white/70 bg-white/5 border border-white/10 px-2 py-0.5 rounded-full uppercase">
                      Problem Aspect {idx + 1}
                    </span>
                    <h5 className="text-base font-display font-medium text-white mt-3">{challenge.title}</h5>
                    <p className="text-white/60 text-sm leading-relaxed mt-2 font-light">{challenge.desc}</p>
                  </div>
                  {/* resolution section */}
                  <div className="p-6 bg-black/30 flex-grow">
                    <span className="text-[10px] font-mono font-medium text-[#E5FF45] bg-[#E5FF45]/10 border border-[#E5FF45]/10 px-2 py-0.5 rounded-full uppercase">
                      Technical Resolution
                    </span>
                    <p className="text-white/75 text-sm leading-relaxed mt-3 font-light">{challenge.resolution}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Measurable Strategic Impact */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 text-[#E5FF45] pb-2 border-b border-white/10">
              <CheckCircle2 size={20} />
              <h4 className="font-display text-white font-medium text-lg">Measurable Enterprise Impact</h4>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {selectedCase.impact.map((metric, idx) => (
                <div
                  key={idx}
                  id={`impact-card-${idx}`}
                  className="bg-[#121212] border border-white/10 hover:border-[#E5FF45]/20 text-center rounded-2xl p-6 md:p-8 transition-colors duration-300"
                >
                  <span className="block text-3xl md:text-4xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-[#E5FF45] to-white mb-2">
                    {metric.value}
                  </span>
                  <span className="block text-sm font-display font-semibold text-white mb-1.5 uppercase tracking-wide">{metric.title}</span>
                  <p className="text-white/40 text-xs leading-relaxed font-light">{metric.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
