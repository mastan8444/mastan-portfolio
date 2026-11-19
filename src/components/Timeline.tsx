import React, { useState } from "react";
import { ExperienceData, EducationData } from "../data";
import { Briefcase, GraduationCap, MapPin, Calendar, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Timeline() {
  const [activeTab, setActiveTab] = useState<"all" | "experience" | "education">("all");

  return (
    <section id="timeline" className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6 pb-6 border-b border-black/10 dark:border-white/10">
        <div>
          <span className="text-[11px] font-mono uppercase tracking-[0.16em] text-lime-700 dark:text-[#E5FF45] font-semibold block">
            Background
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-neutral-950 dark:text-white tracking-tight mt-1">
            Experience &amp; Education
          </h2>
          <p className="text-neutral-600 dark:text-white/55 text-sm sm:text-base mt-2 max-w-xl">
            Hands-on AI engineering internships paired with strong academic performance in Machine Learning and Computer Science.
          </p>
        </div>

        <div className="inline-flex items-center gap-1 p-1 bg-black/[0.04] dark:bg-[#121212] border border-black/10 dark:border-white/10 rounded-xl self-start">
          {(["all", "experience", "education"] as const).map((tab) => (
            <button
              key={tab}
              id={`tab-timeline-${tab}`}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider rounded-lg transition-colors duration-150 cursor-pointer ${
                activeTab === tab
                  ? "bg-neutral-950 dark:bg-[#E5FF45] text-[#E5FF45] dark:text-black font-bold"
                  : "text-neutral-600 dark:text-white/55 hover:text-neutral-950 dark:hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Experience Column */}
        <AnimatePresence mode="popLayout">
          {(activeTab === "all" || activeTab === "experience") && (
            <motion.div
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3 pb-3 border-b border-black/10 dark:border-white/10">
                <div
                  id="experience-icon-container"
                  className="p-2 rounded-xl bg-lime-500/10 dark:bg-[#E5FF45]/10 text-lime-700 dark:text-[#E5FF45] border border-lime-600/25 dark:border-[#E5FF45]/25"
                >
                  <Briefcase size={18} />
                </div>
                <h3 className="text-lg font-display font-bold text-neutral-950 dark:text-white">
                  Work &amp; Internships
                </h3>
              </div>

              <div className="relative pl-6 border-l border-black/10 dark:border-white/10 space-y-8">
                {ExperienceData.map((exp) => (
                  <div key={exp.id} id={exp.id} className="relative">
                    <div className="absolute -left-[29px] top-6 w-2.5 h-2.5 rounded-full bg-lime-600 dark:bg-[#E5FF45] ring-4 ring-[#F6F6F3] dark:ring-[#080808]" />

                    <div className="bg-white dark:bg-[#121212] border border-black/10 dark:border-white/10 hover:border-lime-600/50 dark:hover:border-[#E5FF45]/45 rounded-2xl p-6 transition-colors duration-200">
                      <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                        <div>
                          <h4 className="text-lg font-display font-bold text-neutral-950 dark:text-white">
                            {exp.role}
                          </h4>
                          <p className="text-neutral-700 dark:text-white/75 text-sm font-medium mt-0.5">
                            {exp.company}
                          </p>
                        </div>
                        <span className="inline-flex items-center gap-1.5 text-xs font-mono text-neutral-500 dark:text-white/45 tabular-nums">
                          <Calendar size={12} />
                          {exp.period}
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5 text-xs font-mono text-neutral-500 dark:text-white/45 mb-4">
                        <MapPin size={12} />
                        <span>{exp.location}</span>
                        <span className="text-neutral-300 dark:text-white/20">·</span>
                        <span className="text-lime-700 dark:text-[#E5FF45] font-semibold uppercase">
                          {exp.type}
                        </span>
                      </div>

                      <ul className="space-y-2.5 mb-5">
                        {exp.bullets.map((bullet, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-neutral-600 dark:text-white/65 text-sm leading-relaxed">
                            <ChevronRight size={14} className="text-lime-700 dark:text-[#E5FF45] shrink-0 mt-1" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="pt-3 border-t border-black/10 dark:border-white/10 text-xs font-mono text-neutral-500 dark:text-white/45 leading-relaxed">
                        {exp.skills.map((skill, sIdx) => (
                          <React.Fragment key={skill}>
                            <span className="text-neutral-800 dark:text-white/75">{skill}</span>
                            {sIdx < exp.skills.length - 1 && (
                              <span className="mx-2 text-neutral-300 dark:text-white/20">·</span>
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Education Column */}
        <AnimatePresence mode="popLayout">
          {(activeTab === "all" || activeTab === "education") && (
            <motion.div
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3 pb-3 border-b border-black/10 dark:border-white/10">
                <div
                  id="education-icon-container"
                  className="p-2 rounded-xl bg-neutral-100 dark:bg-white/[0.06] text-neutral-800 dark:text-white/80 border border-black/10 dark:border-white/10"
                >
                  <GraduationCap size={18} />
                </div>
                <h3 className="text-lg font-display font-bold text-neutral-950 dark:text-white">
                  Academic Foundation
                </h3>
              </div>

              <div className="relative pl-6 border-l border-black/10 dark:border-white/10 space-y-8">
                {EducationData.map((edu) => (
                  <div key={edu.id} id={edu.id} className="relative">
                    <div className="absolute -left-[29px] top-6 w-2.5 h-2.5 rounded-full bg-neutral-400 dark:bg-white/40 ring-4 ring-[#F6F6F3] dark:ring-[#080808]" />

                    <div className="bg-white dark:bg-[#121212] border border-black/10 dark:border-white/10 hover:border-lime-600/50 dark:hover:border-[#E5FF45]/45 rounded-2xl p-6 transition-colors duration-200">
                      <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                        <div>
                          <h4 className="text-lg font-display font-bold text-neutral-950 dark:text-white">
                            {edu.degree}
                          </h4>
                          <p className="text-neutral-600 dark:text-white/70 text-sm font-medium mt-0.5">
                            {edu.institution}
                          </p>
                        </div>
                        <span className="inline-flex items-center gap-1.5 text-xs font-mono text-neutral-500 dark:text-white/45 tabular-nums shrink-0">
                          <Calendar size={12} />
                          {edu.period}
                        </span>
                      </div>

                      <div className="text-xs font-mono text-lime-700 dark:text-[#E5FF45] font-semibold mb-3 tabular-nums">
                        {edu.scoreLabel}: {edu.score}
                      </div>

                      {edu.details && (
                        <p className="text-neutral-600 dark:text-white/60 text-sm leading-relaxed pt-3 border-t border-black/10 dark:border-white/10">
                          {edu.details}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
