import { useState } from "react";
import { ExperienceData, EducationData } from "../data";
import { Briefcase, School, MapPin, Calendar, CheckCircle2, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Timeline() {
  const [activeTab, setActiveTab] = useState<"all" | "experience" | "education">("all");

  const filteredExperience = ExperienceData;
  const filteredEducation = EducationData;

  return (
    <section id="timeline" className="py-16 px-4 md:px-8 max-w-7xl mx-auto border-t border-white/10">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <span className="text-xs font-mono text-[#E5FF45] tracking-wider uppercase">// Journey Path</span>
          <h2 className="text-3xl md:text-4xl font-display font-medium text-white tracking-tight mt-1">
            Experience & Education
          </h2>
        </div>
        <div className="flex items-center gap-1 p-1 bg-[#121212] border border-white/10 rounded-lg self-start">
          {(["all", "experience", "education"] as const).map((tab) => (
            <button
              key={tab}
              id={`tab-timeline-${tab}`}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 text-xs font-mono uppercase rounded-md tracking-wider transition-all duration-300 ${
                activeTab === tab
                  ? "bg-[#E5FF45]/15 text-[#E5FF45] border border-[#E5FF45]/25 font-semibold"
                  : "text-white/60 hover:text-white border border-transparent"
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
              <div className="flex items-center gap-3 pb-4 border-b border-white/10">
                <div id="experience-icon-container" className="p-2.5 bg-[#E5FF45]/10 text-[#E5FF45] border border-[#E5FF45]/20 rounded-lg">
                  <Briefcase size={20} />
                </div>
                <h3 className="text-xl font-display text-white font-medium">Work & Internships</h3>
              </div>

              <div className="relative pl-6 border-l border-white/10 space-y-12">
                {filteredExperience.map((exp) => (
                  <div key={exp.id} id={exp.id} className="relative group">
                    {/* Timeline Node Icon */}
                    <div className="absolute -left-[35px] top-1.5 p-1 bg-[#080808] border border-white/10 text-[#E5FF45] group-hover:border-[#E5FF45] rounded-full transition-all duration-300">
                      <div className="w-2 h-2 rounded-full bg-[#E5FF45] group-hover:scale-125 transition-transform duration-300" />
                    </div>

                    <div className="bg-[#121212] hover:bg-[#121212]/95 border border-white/10 hover:border-[#E5FF45]/30 rounded-xl p-6 transition-all duration-300 hover:shadow-xl">
                      <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
                        <div>
                          <h4 className="text-lg font-semibold text-white group-hover:text-[#E5FF45] transition-colors duration-300">
                            {exp.role}
                          </h4>
                          <p className="text-white/70 text-sm font-medium mt-0.5">{exp.company}</p>
                        </div>
                        <div className="flex flex-col items-end text-right">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/5 text-white/80 text-xs font-mono rounded-full border border-white/10">
                            <Calendar size={12} />
                            {exp.period}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-1 text-xs text-white/50 font-mono mb-4">
                        <MapPin size={12} className="text-white/40" />
                        <span>{exp.location}</span>
                        <span className="mx-1">•</span>
                        <span className="text-[#E5FF45] font-semibold uppercase">{exp.type}</span>
                      </div>

                      <ul className="space-y-3 mb-5">
                        {exp.bullets.map((bullet, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-white/70 text-sm leading-relaxed font-light">
                            <ChevronRight size={14} className="text-[#E5FF45] min-w-[14px] mt-1" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/10">
                        {exp.skills.map((skill) => (
                          <span
                            key={skill}
                            className="text-[10px] font-mono bg-black text-white/60 border border-white/5 px-2.5 py-0.5 rounded"
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
              <div className="flex items-center gap-3 pb-4 border-b border-white/10">
                <div id="education-icon-container" className="p-2.5 bg-white/5 text-white border border-white/10 rounded-lg">
                  <School size={20} />
                </div>
                <h3 className="text-xl font-display text-white font-medium">Academic Foundation</h3>
              </div>

              <div className="relative pl-6 border-l border-white/10 space-y-12">
                {filteredEducation.map((edu) => (
                  <div key={edu.id} id={edu.id} className="relative group">
                    {/* Timeline Node Icon */}
                    <div className="absolute -left-[35px] top-1.5 p-1 bg-[#080808] border border-white/10 text-white rounded-full group-hover:border-[#E5FF45] transition-all duration-300">
                      <div className="w-2 h-2 rounded-full bg-white group-hover:scale-125 transition-transform duration-300" />
                    </div>

                    <div className="bg-[#121212] hover:bg-[#121212]/95 border border-white/10 hover:border-white/20 rounded-xl p-6 transition-all duration-300 hover:shadow-xl">
                      <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
                        <div>
                          <h4 className="text-lg font-semibold text-white group-hover:text-[#E5FF45] transition-colors duration-300">
                            {edu.degree}
                          </h4>
                          <p className="text-white/70 text-sm font-medium mt-0.5">{edu.institution}</p>
                        </div>
                        <div className="flex flex-col items-end text-right">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#E5FF45]/10 text-[#E5FF45] text-xs font-mono rounded-full border border-[#E5FF45]/10">
                            <Calendar size={12} />
                            {edu.period}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 mb-4">
                        <span className="px-2.5 py-0.5 bg-white/5 text-white text-xs font-mono border border-white/10 rounded">
                          {edu.scoreLabel}: {edu.score}
                        </span>
                      </div>

                      {edu.details && (
                        <p className="text-white/75 text-sm leading-relaxed mt-2 pt-3 border-t border-white/10 font-light">
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
