import { SkillsData, CertificationsData, AchievementsData } from "../data";
import { Code2, Layers, Cpu, Cloud, Database, Award, Star, ShieldCheck, Zap } from "lucide-react";

export default function Skills() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Code2":
        return <Code2 className="text-[#E5FF45]" size={18} />;
      case "Layers":
        return <Layers className="text-white" size={18} />;
      case "Cpu":
        return <Cpu className="text-[#E5FF45]" size={18} />;
      case "Cloud":
        return <Cloud className="text-white" size={18} />;
      case "Database":
        return <Database className="text-[#E5FF45]" size={18} />;
      default:
        return <Star className="text-white/70" size={18} />;
    }
  };

  const getBorderColorClass = (idx: number) => {
    return "border-white/10 hover:border-[#E5FF45]/30";
  };

  const getBarColorClass = (idx: number) => {
    return idx % 2 === 0 ? "bg-[#E5FF45]" : "bg-white";
  };

  const getGlowColorClass = (idx: number) => {
    return "shadow-black/50 shadow-2xl";
  };

  return (
    <section id="skills-section" className="py-16 px-4 md:px-8 max-w-7xl mx-auto border-t border-white/10">
      <div className="mb-12">
        <span className="text-xs font-mono text-[#E5FF45] tracking-wider uppercase">// Arsenal</span>
        <h2 className="text-3xl md:text-4xl font-display font-medium text-white tracking-tight mt-1">
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
                className={`bg-[#121212] border ${getBorderColorClass(catIdx)} ${getGlowColorClass(
                  catIdx
                )} rounded-xl p-6 transition-all duration-300 hover:bg-[#121212]/95 shadow-lg`}
              >
                <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-white/10">
                  {getIcon(category.icon)}
                  <h3 className="font-display text-white font-medium text-base">{category.category}</h3>
                </div>

                <div className="space-y-4">
                  {category.items.map((skill, skIdx) => (
                    <div key={skill.name} id={`skill-item-${catIdx}-${skIdx}`} className="space-y-1">
                      <div className="flex justify-between items-center text-xs font-mono">
                        <span className="text-white/80 font-medium">{skill.name}</span>
                        <span className="text-white/40">
                          {skill.level === 5 ? "Expert" : skill.level === 4 ? "Advanced" : "Proficient"}
                        </span>
                      </div>
                      <div className="w-full h-1.5 bg-black rounded-full overflow-hidden">
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
            className="bg-[#121212] border border-white/10 shadow-lg rounded-xl p-6 hover:border-[#E5FF45]/20 hover:bg-[#121212]/95 transition-all duration-300"
          >
            <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-white/10">
              <Award className="text-[#E5FF45]" size={18} />
              <h3 className="font-display text-white font-medium text-base">Certifications</h3>
            </div>

            <div className="space-y-4">
              {CertificationsData.map((cert, idx) => (
                <div
                  key={cert.name}
                  id={`cert-item-${idx}`}
                  className="flex items-start gap-3 p-3 bg-black/35 rounded-lg border border-white/5 transition-all duration-300 hover:border-white/15"
                >
                  <div className="p-1.5 bg-[#E5FF45]/10 rounded border border-[#E5FF45]/10 text-[#E5FF45] mt-1">
                    <ShieldCheck size={14} />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-white leading-snug">{cert.name}</h4>
                    <p className="text-white/40 text-xs font-mono mt-0.5">
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
            className="bg-[#121212] border border-white/10 shadow-lg rounded-xl p-6 hover:border-white/20 hover:bg-[#121212]/95 transition-all duration-300"
          >
            <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-white/10">
              <Zap className="text-white" size={18} />
              <h3 className="font-display text-white font-medium text-base">Key Achievements</h3>
            </div>

            <div className="space-y-4">
              {AchievementsData.map((achieve, idx) => (
                <div
                  key={achieve.text}
                  id={`achievement-item-${idx}`}
                  className="flex items-start gap-3 p-3 bg-black/35 rounded-lg border border-white/5 transition-all duration-300 hover:border-white/15"
                >
                  <div className="p-1.5 bg-white/5 rounded border border-white/10 text-white mt-1">
                    <Star size={14} />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-white/95 leading-snug">{achieve.text}</h4>
                    {achieve.subtext && (
                      <p className="text-white/50 text-xs mt-0.5 leading-relaxed font-light">{achieve.subtext}</p>
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
