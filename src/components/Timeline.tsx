import { useState } from "react";
import { ExperienceData, EducationData } from "../data";
import { Briefcase, School, MapPin, Calendar, CheckCircle2, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Timeline() {
  const [activeTab, setActiveTab] = useState<"all" | "experience" | "education">("all");

  const filteredExperience = ExperienceData;
  const filteredEducation = EducationData;

  return (
    <section id="timeline" className="py-16 px-4 md:px-8 max-w-7xl mx-auto border-t border-slate-200 dark:border-slate-800">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <span className="text-xs font-mono text-lime-700 dark:text-lime-400 tracking-wider uppercase font-extrabold block">// Journey Path</span>
          <h2 className="text-3xl md:text-4xl font-display font-medium text-slate-900 dark:text-white tracking-tight mt-1">
            Experience & Education
          </h2>
        </div>
        <div className="flex items-center gap-1 p-1 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg self-start">
          {(["all", "experience", "education"] as const).map((tab) => (
            <button
              key={tab}
              id={`tab-timeline-${tab}`}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 text-xs font-mono uppercase rounded-md tracking-wider transition-all duration-300 cursor-pointer ${
                activeTab === tab
                  ? "bg-slate-900 dark:bg-[#E5FF45] text-white dark:text-black font-semibold"
                  : "text-slate-500 dark:text-slate-450 hover:text-slate-900 dark:hover:text-white border border-transparent"
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
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-8"
            >
              <div className="flex items-center gap-3 pb-4 border-b border-slate-200 dark:border-slate-800">
                <div id="experience-icon-container" className="p-2.5 bg-lime-500/10 dark:bg-lime-400/5 text-lime-700 dark:text-[#E5FF45] border border-lime-500/20 dark:border-lime-400/10 rounded-lg">
                  <Briefcase size={20} />
                </div>
                <h3 className="text-xl font-display text-slate-900 dark:text-white font-medium">Work & Internships</h3>
              </div>

              <div className="relative pl-6 border-l border-slate-200 dark:border-slate-800 space-y-12">
                {filteredExperience.map((exp) => (
                  <div key={exp.id} id={exp.id} className="relative group">
                    {/* Timeline Node Icon */}
                    <div className="absolute -left-[35px] top-1.5 p-1 bg-white dark:bg-black border border-slate-200 dark:border-slate-800 text-lime-600 group-hover:border-lime-500 rounded-full transition-all duration-300 shadow-xs">
                      <div className="w-2 h-2 rounded-full bg-lime-500 group-hover:scale-125 transition-transform duration-300" />
                    </div>

                    <div className="bg-white dark:bg-[#121212] border border-slate-200/80 dark:border-slate-800/80 rounded-xl p-6 transition-all duration-300 shadow-sm hover:shadow-md hover:border-lime-500/30 dark:hover:border-lime-400/30">
                      <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
                        <div>
                          <h4 className="text-lg font-semibold text-slate-950 dark:text-white group-hover:text-lime-700 transition-colors duration-300">
                            {exp.role}
                          </h4>
                          <p className="text-slate-600 dark:text-slate-400 text-sm font-medium mt-0.5">{exp.company}</p>
                        </div>
                        <div className="flex flex-col items-end text-right">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-400 text-xs font-mono rounded-full border border-slate-200 dark:border-slate-800 select-none">
                            <Calendar size={12} className="text-slate-400" />
                            {exp.period}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400 font-mono mb-4">
                        <MapPin size={12} className="text-slate-400" />
                        <span>{exp.location}</span>
                        <span className="mx-1">•</span>
                        <span className="text-lime-700 dark:text-lime-404 font-bold uppercase">{exp.type}</span>
                      </div>

                      <ul className="space-y-3 mb-5">
                        {exp.bullets.map((bullet, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-slate-600 dark:text-slate-350 text-sm leading-relaxed font-light">
                            <ChevronRight size={14} className="text-lime-600 min-w-[14px] mt-1" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100 dark:border-slate-800">
                        {exp.skills.map((skill) => (
                          <span
                            key={skill}
                            className="text-[10px] font-mono bg-slate-50 dark:bg-slate-900/60 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 px-2.5 py-0.5 rounded shadow-2xs"
                          >
                            {skill}
                          </span>
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
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-8"
            >
              <div className="flex items-center gap-3 pb-4 border-b border-slate-200 dark:border-slate-800">
                <div id="education-icon-container" className="p-2.5 bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-300 border border-slate-200 dark:border-slate-800 rounded-lg">
                  <School size={20} />
                </div>
                <h3 className="text-xl font-display text-slate-900 dark:text-white font-medium">Academic Foundation</h3>
              </div>

              <div className="relative pl-6 border-l border-slate-200 dark:border-slate-800 space-y-12">
                {filteredEducation.map((edu) => (
                  <div key={edu.id} id={edu.id} className="relative group">
                    {/* Timeline Node Icon */}
                    <div className="absolute -left-[35px] top-1.5 p-1 bg-white dark:bg-black border border-slate-200 dark:border-slate-800 text-slate-400 rounded-full group-hover:border-lime-500 transition-all duration-300 shadow-xs">
                      <div className="w-2 h-2 rounded-full bg-slate-400 group-hover:bg-lime-500 group-hover:scale-125 transition-transform duration-300" />
                    </div>

                    <div className="bg-white dark:bg-[#121212] border border-slate-200/80 dark:border-slate-800/80 rounded-xl p-6 transition-all duration-300 shadow-sm hover:shadow-md hover:border-lime-500/30 dark:hover:border-lime-400/30">
                      <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
                        <div>
                          <h4 className="text-lg font-semibold text-slate-950 dark:text-white group-hover:text-lime-700 transition-colors duration-300">
                            {edu.degree}
                          </h4>
                          <p className="text-slate-600 dark:text-slate-400 text-sm font-medium mt-0.5">{edu.institution}</p>
                        </div>
                        <div className="flex flex-col items-end text-right">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-lime-500/10 dark:bg-lime-400/5 text-lime-800 dark:text-[#E5FF45] text-xs font-mono rounded-full border border-lime-500/10 dark:border-lime-450/10 select-none">
                            <Calendar size={12} className="text-lime-700/80 dark:text-[#E5FF45]/80" />
                            {edu.period}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 mb-4">
                        <span className="px-2.5 py-0.5 bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-300 text-xs font-mono border border-slate-200 dark:border-slate-800 rounded font-semibold">
                          {edu.scoreLabel}: {edu.score}
                        </span>
                      </div>

                      {edu.details && (
                        <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mt-2 pt-3 border-t border-slate-100 dark:border-slate-800 font-light">
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
