import { SkillsData, CertificationsData, AchievementsData } from "../data";
import { Code2, Layers, Cpu, Cloud, Database, Award, Star, ShieldCheck, Zap } from "lucide-react";

export default function Skills() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Code2":
        return <Code2 className="text-lime-700 dark:text-[#E5FF45]" size={18} />;
      case "Layers":
        return <Layers className="text-slate-850 dark:text-slate-300" size={18} />;
      case "Cpu":
        return <Cpu className="text-lime-700 dark:text-[#E5FF45]" size={18} />;
      case "Cloud":
        return <Cloud className="text-slate-850 dark:text-slate-300" size={18} />;
      case "Database":
        return <Database className="text-lime-700 dark:text-[#E5FF45]" size={18} />;
      default:
        return <Star className="text-slate-500" size={18} />;
    }
  };

  const getBorderColorClass = (idx: number) => {
    return "border-slate-200 dark:border-slate-805 hover:border-lime-500/35 dark:hover:border-lime-400/35 hover:shadow-md";
  };

  const getBarColorClass = (idx: number) => {
    return idx % 2 === 0 ? "bg-lime-600 dark:bg-[#E5FF45]" : "bg-slate-900 dark:bg-slate-300";
  };

  const getGlowColorClass = (idx: number) => {
    return "shadow-sm";
  };

  return (
    <section id="skills-section" className="py-16 px-4 md:px-8 max-w-7xl mx-auto border-t border-slate-200 dark:border-slate-800">
      <div className="mb-12">
        <span className="text-xs font-mono text-lime-700 dark:text-lime-400 tracking-wider uppercase font-extrabold block">// Arsenal</span>
        <h2 className="text-3xl md:text-4xl font-display font-medium text-slate-900 dark:text-white tracking-tight mt-1">
          Technical Inventory & Credentials
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Skills Bento List */}
        <div id="skills-bento" className="lg:col-span-2 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SkillsData.map((category, catIdx) => (
              <div
                key={category.category}
                id={`skill-cat-${catIdx}`}
                className={`bg-white dark:bg-[#121212] border ${getBorderColorClass(catIdx)} ${getGlowColorClass(
                  catIdx
                )} rounded-xl p-6 transition-all duration-300`}
              >
                <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-slate-100 dark:border-slate-800">
                  {getIcon(category.icon)}
                  <h3 className="font-display text-slate-900 dark:text-white font-bold text-base">{category.category}</h3>
                </div>

                <div className="space-y-4">
                  {category.items.map((skill, skIdx) => (
                    <div key={skill.name} id={`skill-item-${catIdx}-${skIdx}`} className="space-y-1">
                      <div className="flex justify-between items-center text-xs font-mono">
                        <span className="text-slate-800 dark:text-slate-200 font-bold select-none">{skill.name}</span>
                        <span className="text-slate-500 dark:text-slate-400">
                          {skill.level === 5 ? "Expert" : skill.level === 4 ? "Advanced" : "Proficient"}
                        </span>
                      </div>
                      <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden border border-slate-200/40 dark:border-slate-800">
                        <div
                          className={`h-full ${getBarColorClass(catIdx)} rounded-full`}
                          style={{ width: `${(skill.level / 5) * 100}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Credentials, Certifications & Achievements */}
        <div id="creds-bento" className="space-y-6">
          {/* Certifications Card */}
          <div
            id="certifications-card"
            className="bg-white dark:bg-[#121212] border border-slate-200 dark:border-slate-800 shadow-sm rounded-xl p-6 hover:border-lime-500/20 dark:hover:border-lime-400/20 transition-all duration-300 hover:shadow-md"
          >
            <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-slate-100 dark:border-slate-800">
              <Award className="text-lime-700 dark:text-[#E5FF45]" size={18} />
              <h3 className="font-display text-slate-900 dark:text-white font-bold text-base">Certifications</h3>
            </div>

            <div className="space-y-4">
              {CertificationsData.map((cert, idx) => (
                <div
                  key={cert.name}
                  id={`cert-item-${idx}`}
                  className="flex items-start gap-3 p-3 bg-slate-50/65 dark:bg-slate-900/40 rounded-lg border border-slate-205/50 dark:border-slate-800/60 transition-all duration-300 hover:border-slate-300/80 dark:hover:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-900/80"
                >
                  <div className="p-1.5 bg-lime-500/10 dark:bg-lime-400/5 rounded border border-lime-500/20 dark:border-lime-400/20 text-lime-700 dark:text-[#E5FF45] mt-1 shrink-0">
                    <ShieldCheck size={14} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100 leading-snug">{cert.name}</h4>
                    <p className="text-slate-500 dark:text-slate-400 text-xs font-mono mt-0.5">
                      {cert.issuer} • {cert.year}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements Card */}
          <div
            id="achievements-card"
            className="bg-white dark:bg-[#121212] border border-slate-200 dark:border-slate-800 shadow-sm rounded-xl p-6 hover:border-slate-350 transition-all duration-300 hover:shadow-md"
          >
            <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-slate-100 dark:border-slate-800">
              <Zap className="text-slate-800 dark:text-[#E5FF45]" size={18} />
              <h3 className="font-display text-slate-900 dark:text-white font-bold text-base">Key Achievements</h3>
            </div>

            <div className="space-y-4">
              {AchievementsData.map((achieve, idx) => (
                <div
                  key={achieve.text}
                  id={`achievement-item-${idx}`}
                  className="flex items-start gap-3 p-3 bg-slate-50/60 dark:bg-slate-900/40 rounded-lg border border-slate-200/50 dark:border-slate-800/60 transition-all duration-300 hover:border-slate-300/80 dark:hover:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-900/80"
                >
                  <div className="p-1.5 bg-slate-100 dark:bg-slate-900 rounded border border-slate-250 dark:border-slate-800 text-slate-600 dark:text-slate-400 mt-1 shrink-0">
                    <Star size={14} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-815 dark:text-slate-200 leading-snug">{achieve.text}</h4>
                    {achieve.subtext && (
                      <p className="text-slate-550 dark:text-slate-400 text-xs mt-0.5 leading-relaxed font-light">{achieve.subtext}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
