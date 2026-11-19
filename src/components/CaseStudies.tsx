import React, { useState, useEffect } from "react";
import { CaseStudiesData } from "../data";
import { Target, Lightbulb, ShieldAlert, Cpu, CheckCircle2, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface CaseStudiesProps {
  initialCaseStudyId?: string | null;
}

export default function CaseStudies({ initialCaseStudyId }: CaseStudiesProps) {
  const [activeCaseId, setActiveCaseId] = useState<string>(
    initialCaseStudyId || CaseStudiesData[0].id
  );

  useEffect(() => {
    if (initialCaseStudyId) {
      setActiveCaseId(initialCaseStudyId);
    }
  }, [initialCaseStudyId]);

  const selectedCase =
    CaseStudiesData.find((study) => study.id === activeCaseId) || CaseStudiesData[0];

  return (
    <section id="case-studies" className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6 pb-6 border-b border-black/10 dark:border-white/10">
        <div>
          <span className="text-[11px] font-mono uppercase tracking-[0.16em] text-lime-700 dark:text-[#E5FF45] font-semibold block">
            Architecture Deep Dives
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-neutral-950 dark:text-white tracking-tight mt-1">
            Engineering Case Studies
          </h2>
          <p className="text-neutral-600 dark:text-white/55 text-sm sm:text-base mt-2 max-w-xl">
            System topologies, technical constraints, and measurable outcomes across AI and full-stack deployments.
          </p>
        </div>

        {/* Selector Controls */}
        <div
          id="case-study-selectors"
          className="inline-flex flex-wrap items-center gap-1 p-1 bg-black/[0.04] dark:bg-[#121212] border border-black/10 dark:border-white/10 rounded-xl self-start"
        >
          {CaseStudiesData.map((study) => (
            <button
              key={study.id}
              id={`select-case-${study.id}`}
              type="button"
              onClick={() => setActiveCaseId(study.id)}
              className={`px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider rounded-lg transition-colors duration-150 cursor-pointer whitespace-nowrap ${
                activeCaseId === study.id
                  ? "bg-neutral-950 dark:bg-[#E5FF45] text-[#E5FF45] dark:text-black font-bold"
                  : "text-neutral-600 dark:text-white/55 hover:text-neutral-950 dark:hover:text-white"
              }`}
            >
              {study.title}
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={selectedCase.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.22 }}
          className="space-y-10"
        >
          {/* Overview Banner */}
          <div className="relative overflow-hidden bg-white dark:bg-[#121212] border border-black/10 dark:border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="pointer-events-none absolute -top-12 -right-12 w-44 h-44 rounded-full bg-[#E5FF45] blur-[95px] opacity-15" />
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-neutral-950 dark:text-white tracking-tight">
                {selectedCase.title}
              </h3>
              <p className="text-lime-700 dark:text-[#E5FF45] text-sm font-medium mt-1.5">
                {selectedCase.subtitle}
              </p>
            </div>
            <div className="relative z-10 text-xs font-mono text-neutral-500 dark:text-white/45 max-w-md lg:text-right leading-relaxed">
              {selectedCase.technologiesUsed.map((tech, idx) => (
                <React.Fragment key={tech}>
                  <span className="text-neutral-800 dark:text-white/75">{tech}</span>
                  {idx < selectedCase.technologiesUsed.length - 1 && (
                    <span className="mx-2 text-neutral-300 dark:text-white/20">·</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Problem vs Solution */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div
              id="case-problem-card"
              className="bg-white dark:bg-[#121212] border border-black/10 dark:border-white/10 rounded-2xl p-6 sm:p-7"
            >
              <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-black/10 dark:border-white/10">
                <Target size={18} className="text-neutral-500 dark:text-white/50" />
                <h4 className="font-display text-neutral-950 dark:text-white font-bold text-base sm:text-lg">
                  The Engineering Challenge
                </h4>
              </div>
              <p className="text-neutral-600 dark:text-white/65 text-sm leading-relaxed">
                {selectedCase.problem}
              </p>
            </div>

            <div
              id="case-solution-card"
              className="bg-white dark:bg-[#121212] border border-black/10 dark:border-white/10 rounded-2xl p-6 sm:p-7"
            >
              <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-black/10 dark:border-white/10">
                <Lightbulb size={18} className="text-lime-700 dark:text-[#E5FF45]" />
                <h4 className="font-display text-neutral-950 dark:text-white font-bold text-base sm:text-lg">
                  Architectural Solution
                </h4>
              </div>
              <p className="text-neutral-600 dark:text-white/65 text-sm leading-relaxed">
                {selectedCase.solution}
              </p>
            </div>
          </div>

          {/* Infrastructure Topology */}
          <div
            id="case-topology-map"
            className="bg-white dark:bg-[#121212] border border-black/10 dark:border-white/10 rounded-2xl p-6 sm:p-8"
          >
            <div className="flex flex-wrap justify-between items-center gap-2 mb-6 pb-4 border-b border-black/10 dark:border-white/10">
              <div className="flex items-center gap-2.5">
                <Cpu size={18} className="text-lime-700 dark:text-[#E5FF45]" />
                <h4 className="font-display text-neutral-950 dark:text-white font-bold text-base sm:text-lg">
                  System Topology
                </h4>
              </div>
              <span className="text-[11px] font-mono uppercase tracking-[0.14em] text-neutral-500 dark:text-white/40">
                Client → Service → Storage Flow
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Tier 1: Client */}
              <div id="tier-client" className="space-y-3">
                <span className="text-[11px] font-mono uppercase tracking-[0.14em] text-neutral-500 dark:text-white/45 font-semibold block">
                  01 · Client Tier
                </span>
                {selectedCase.architecture.nodes
                  .filter((n) => n.type === "client")
                  .map((node) => (
                    <div
                      key={node.id}
                      id={`node-${node.id}`}
                      className="p-4 bg-neutral-50 dark:bg-[#080808] border border-black/10 dark:border-white/10 rounded-xl"
                    >
                      <h5 className="text-sm font-display font-bold text-neutral-950 dark:text-white">
                        {node.label}
                      </h5>
                      <p className="text-neutral-600 dark:text-white/55 text-xs leading-relaxed mt-1.5">
                        {node.role}
                      </p>
                    </div>
                  ))}
              </div>

              {/* Tier 2: Core Service Logic */}
              <div id="tier-api" className="space-y-3">
                <span className="text-[11px] font-mono uppercase tracking-[0.14em] text-lime-700 dark:text-[#E5FF45] font-semibold block">
                  02 · Core Services &amp; API
                </span>
                {selectedCase.architecture.nodes
                  .filter((n) => n.type === "api" || (n.type === "server" && n.id !== "mcp-server"))
                  .map((node) => (
                    <div
                      key={node.id}
                      id={`node-${node.id}`}
                      className="p-4 bg-lime-500/[0.06] dark:bg-[#E5FF45]/[0.05] border border-lime-600/25 dark:border-[#E5FF45]/25 rounded-xl"
                    >
                      <h5 className="text-sm font-display font-bold text-neutral-950 dark:text-white">
                        {node.label}
                      </h5>
                      <p className="text-neutral-600 dark:text-white/65 text-xs leading-relaxed mt-1.5">
                        {node.role}
                      </p>
                    </div>
                  ))}
              </div>

              {/* Tier 3: Storage & Integrations */}
              <div id="tier-storage" className="space-y-3">
                <span className="text-[11px] font-mono uppercase tracking-[0.14em] text-neutral-500 dark:text-white/45 font-semibold block">
                  03 · Storage &amp; MCP Integrations
                </span>
                {selectedCase.architecture.nodes
                  .filter((n) => n.type === "storage" || n.id === "mcp-server")
                  .map((node) => (
                    <div
                      key={node.id}
                      id={`node-${node.id}`}
                      className="p-4 bg-neutral-50 dark:bg-[#080808] border border-black/10 dark:border-white/10 rounded-xl"
                    >
                      <h5 className="text-sm font-display font-bold text-neutral-950 dark:text-white">
                        {node.label}
                      </h5>
                      <p className="text-neutral-600 dark:text-white/55 text-xs leading-relaxed mt-1.5">
                        {node.role}
                      </p>
                    </div>
                  ))}
              </div>
            </div>

            {/* Data Flow Summary */}
            <div className="mt-6 pt-4 border-t border-black/10 dark:border-white/10 flex flex-wrap items-center gap-2 text-xs font-mono text-neutral-500 dark:text-white/45">
              <span>Client Interface</span>
              <ArrowRight size={12} className="text-lime-700 dark:text-[#E5FF45]" />
              <span>REST / API Layer</span>
              <ArrowRight size={12} className="text-lime-700 dark:text-[#E5FF45]" />
              <span>Orchestration &amp; Storage</span>
            </div>
          </div>

          {/* Technical Bottlenecks & Resolutions */}
          <div className="space-y-5">
            <div className="flex items-center gap-2.5 pb-2 border-b border-black/10 dark:border-white/10">
              <ShieldAlert size={18} className="text-lime-700 dark:text-[#E5FF45]" />
              <h4 className="font-display text-neutral-950 dark:text-white font-bold text-lg">
                Key Bottlenecks &amp; Resolutions
              </h4>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {selectedCase.keyChallenges.map((challenge, idx) => (
                <div
                  key={idx}
                  id={`challenge-item-${idx}`}
                  className="bg-white dark:bg-[#121212] border border-black/10 dark:border-white/10 rounded-2xl overflow-hidden flex flex-col"
                >
                  <div className="p-6 bg-neutral-50/70 dark:bg-[#080808]/60 border-b border-black/10 dark:border-white/10">
                    <span className="text-[11px] font-mono uppercase tracking-[0.14em] text-neutral-500 dark:text-white/45 font-semibold">
                      Challenge 0{idx + 1}
                    </span>
                    <h5 className="text-base font-display font-bold text-neutral-950 dark:text-white mt-1.5">
                      {challenge.title}
                    </h5>
                    <p className="text-neutral-600 dark:text-white/55 text-sm leading-relaxed mt-2">
                      {challenge.desc}
                    </p>
                  </div>
                  <div className="p-6 flex-grow">
                    <span className="text-[11px] font-mono uppercase tracking-[0.14em] text-lime-700 dark:text-[#E5FF45] font-semibold">
                      Resolution
                    </span>
                    <p className="text-neutral-700 dark:text-white/70 text-sm leading-relaxed mt-2">
                      {challenge.resolution}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Measurable Impact */}
          <div className="space-y-5">
            <div className="flex items-center gap-2.5 pb-2 border-b border-black/10 dark:border-white/10">
              <CheckCircle2 size={18} className="text-lime-700 dark:text-[#E5FF45]" />
              <h4 className="font-display text-neutral-950 dark:text-white font-bold text-lg">
                Measurable Impact
              </h4>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {selectedCase.impact.map((metric, idx) => (
                <div
                  key={idx}
                  id={`impact-card-${idx}`}
                  className="bg-white dark:bg-[#121212] border border-black/10 dark:border-white/10 rounded-2xl p-6 text-center"
                >
                  <span className="block text-3xl sm:text-4xl font-display font-extrabold text-lime-700 dark:text-[#E5FF45] tabular-nums mb-2">
                    {metric.value}
                  </span>
                  <span className="block text-sm font-display font-bold text-neutral-950 dark:text-white mb-1.5">
                    {metric.title}
                  </span>
                  <p className="text-neutral-600 dark:text-white/55 text-xs leading-relaxed">
                    {metric.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
