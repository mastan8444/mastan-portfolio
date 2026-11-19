import { SkillsData, CertificationsData, AchievementsData } from "../data";
import { Code2, Layers, Cpu, Cloud, Database, Award, ShieldCheck, Trophy, Star } from "lucide-react";

export default function Skills() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Code2":
        return <Code2 className="text-lime-700 dark:text-[#E5FF45]" size={18} />;
      case "Layers":
        return <Layers className="text-neutral-700 dark:text-white/75" size={18} />;
      case "Cpu":
        return <Cpu className="text-lime-700 dark:text-[#E5FF45]" size={18} />;
      case "Cloud":
        return <Cloud className="text-neutral-700 dark:text-white/75" size={18} />;
      case "Database":
        return <Database className="text-lime-700 dark:text-[#E5FF45]" size={18} />;
      default:
        return <Star className="text-neutral-500" size={18} />;
    }
  };

  const getCertificationLogo = (certName: string) => {
    const lower = certName.toLowerCase();

    if (lower.includes("azure") || lower.includes("microsoft")) {
      return (
        <svg
          viewBox="0 0 24 24"
          className="w-5 h-5"
          fill="none"
          role="img"
          aria-label="Microsoft Azure logo"
        >
          <path
            d="M13.05 3.2L5.2 17.85H2.4L9.2 5.35C9.6 4.6 10.35 3.2 11.4 3.2H13.05Z"
            fill="#50E6FF"
          />
          <path
            d="M13.55 3.2L21.6 18.8H11.15L14.5 14.9H16.95L12.1 5.95L13.55 3.2Z"
            fill="#0078D4"
          />
          <path
            d="M8.4 18.8L13.15 9.85L16.35 15.65H10.5L8.4 18.8Z"
            fill="#005BA1"
          />
        </svg>
      );
    }

    if (lower.includes("python")) {
      return (
        <svg
          viewBox="0 0 24 24"
          className="w-5 h-5"
          fill="none"
          role="img"
          aria-label="Python logo"
        >
          <path
            d="M11.9 2.5C7.15 2.5 7.45 4.55 7.45 4.55V6.7H12.05V7.35H5.6C5.6 7.35 2.5 7 2.5 11.9C2.5 16.8 5.2 16.65 5.2 16.65H6.8V14.35C6.8 14.35 6.7 11.65 9.45 11.65H14C14 11.65 16.55 11.7 16.55 9.2V5.05C16.55 5.05 16.95 2.5 11.9 2.5ZM9.35 4C9.82 4 10.2 4.38 10.2 4.85C10.2 5.32 9.82 5.7 9.35 5.7C8.88 5.7 8.5 5.32 8.5 4.85C8.5 4.38 8.88 4 9.35 4Z"
            fill="#3776AB"
          />
          <path
            d="M12.1 21.5C16.85 21.5 16.55 19.45 16.55 19.45V17.3H11.95V16.65H18.4C18.4 16.65 21.5 17 21.5 12.1C21.5 7.2 18.8 7.35 18.8 7.35H17.2V9.65C17.2 9.65 17.3 12.35 14.55 12.35H10C10 12.35 7.45 12.3 7.45 14.8V18.95C7.45 18.95 7.05 21.5 12.1 21.5ZM14.65 20C14.18 20 13.8 19.62 13.8 19.15C13.8 18.68 14.18 18.3 14.65 18.3C15.12 18.3 15.5 18.68 15.5 19.15C15.5 19.62 15.12 20 14.65 20Z"
            fill="#FFD43B"
          />
        </svg>
      );
    }

    if (lower.includes("wipro") || lower.includes("java")) {
      return (
        <svg
          viewBox="0 0 24 24"
          className="w-5 h-5"
          fill="none"
          role="img"
          aria-label="Wipro Java Full Stack logo"
        >
          <circle cx="8.2" cy="4.2" r="1.15" fill="#00A4EF" />
          <circle cx="11.4" cy="3.1" r="1.15" fill="#7FBA00" />
          <circle cx="14.6" cy="4.2" r="1.15" fill="#F25022" />
          <circle cx="16.4" cy="6.8" r="1.05" fill="#FFB900" />
          <path
            d="M5.5 10.5H15.2V14.2C15.2 16.3 13.5 18 11.4 18H9.3C7.2 18 5.5 16.3 5.5 14.2V10.5Z"
            fill="#5382A1"
          />
          <path
            d="M15.2 11.3H16.8C18.05 11.3 19 12.2 19 13.4C19 14.6 18.05 15.5 16.8 15.5H15.2"
            stroke="#5382A1"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path
            d="M4.5 20.2C7.4 21.1 13.6 21.1 16.5 20.2"
            stroke="#E76F00"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
          <path
            d="M10.4 6.2C9.6 7.1 11.1 7.9 10.3 9"
            stroke="#E76F00"
            strokeWidth="1.35"
            strokeLinecap="round"
          />
        </svg>
      );
    }

    if (lower.includes("aws")) {
      return (
        <svg
          viewBox="0 0 24 24"
          className="w-5 h-5"
          fill="none"
          role="img"
          aria-label="AWS logo"
        >
          <text
            x="12"
            y="12.5"
            textAnchor="middle"
            fontSize="8.5"
            fontWeight="800"
            fontFamily="ui-sans-serif, system-ui, sans-serif"
            className="fill-neutral-900 dark:fill-white"
          >
            aws
          </text>
          <path
            d="M4.5 16.2C7.8 18.6 14.4 18.8 18.6 16.5"
            stroke="#FF9900"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M17.2 15.2L19.4 16.1L18.4 18.3"
            stroke="#FF9900"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    }

    if (lower.includes("mongodb")) {
      return (
        <svg
          viewBox="0 0 24 24"
          className="w-5 h-5"
          fill="none"
          role="img"
          aria-label="MongoDB logo"
        >
          <path
            d="M12 2.5C12 2.5 7 7.6 7 13.1C7 16.5 9.1 19 11.4 20L12 21.8L12.6 20C14.9 19 17 16.5 17 13.1C17 7.6 12 2.5 12 2.5Z"
            fill="#10AA50"
          />
          <path
            d="M12 5.2V19.6"
            stroke="#E8F9EE"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        </svg>
      );
    }

    return <ShieldCheck size={18} className="text-lime-700 dark:text-[#E5FF45]" />;
  };

  return (
    <section id="skills-section" className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-10 pb-6 border-b border-black/10 dark:border-white/10">
        <span className="text-[11px] font-mono uppercase tracking-[0.16em] text-lime-700 dark:text-[#E5FF45] font-semibold block">
          Capabilities &amp; Verified Credentials
        </span>
        <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-neutral-950 dark:text-white tracking-tight mt-1">
          Technical Stack, Certifications &amp; Achievements
        </h2>
        <p className="text-neutral-600 dark:text-white/55 text-sm sm:text-base mt-2 max-w-2xl">
          Multi-cloud AI certifications across Microsoft Azure and AWS, paired with hands-on engineering achievements in RAG, full-stack Java/Python systems, and machine learning deployment.
        </p>
      </div>

      {/* Top Row: Key Achievements */}
      <div className="mb-10">
        <div className="flex items-center gap-2.5 mb-5">
          <Trophy size={18} className="text-lime-700 dark:text-[#E5FF45]" />
          <h3 className="text-lg font-display font-bold text-neutral-950 dark:text-white">
            Key Achievements
          </h3>
        </div>

        <div id="achievements-card" className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {AchievementsData.map((achieve, idx) => {
            const isPrimary = idx === 0;
            return (
              <div
                key={achieve.text}
                id={`achievement-item-${idx}`}
                className={`relative overflow-hidden rounded-2xl p-6 border transition-all duration-200 flex flex-col justify-between ${
                  isPrimary
                    ? "lg:col-span-2 bg-[#0E0E0E] dark:bg-[#121212] border-white/10 text-white shadow-sm"
                    : "bg-white dark:bg-[#121212] border-black/10 dark:border-white/10 hover:border-lime-600/50 dark:hover:border-[#E5FF45]/45"
                }`}
              >
                {isPrimary && (
                  <div className="pointer-events-none absolute -top-12 -right-12 w-48 h-48 rounded-full bg-[#E5FF45] blur-[100px] opacity-20" />
                )}
                <div className="relative z-10">
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <span
                      className={`text-[11px] font-mono uppercase tracking-[0.14em] font-semibold ${
                        isPrimary ? "text-[#E5FF45]" : "text-lime-700 dark:text-[#E5FF45]"
                      }`}
                    >
                      {isPrimary ? "Featured AI Systems Achievement" : `Milestone 0${idx + 1}`}
                    </span>
                    {isPrimary && (
                      <span className="text-xs font-mono text-[#E5FF45] font-semibold tabular-nums">
                        -40% Validation Latency
                      </span>
                    )}
                  </div>
                  <h4
                    className={`font-display font-bold leading-snug ${
                      isPrimary
                        ? "text-xl sm:text-2xl text-white"
                        : "text-base text-neutral-950 dark:text-white"
                    }`}
                  >
                    {achieve.text}
                  </h4>
                  {achieve.subtext && (
                    <p
                      className={`mt-2 leading-relaxed ${
                        isPrimary
                          ? "text-sm sm:text-base text-white/65 max-w-4xl"
                          : "text-sm text-neutral-600 dark:text-white/55"
                      }`}
                    >
                      {achieve.subtext}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Main Split: Technical Inventory + Certifications */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Skills Grid (7 cols) */}
        <div id="skills-bento" className="lg:col-span-7">
          <div className="flex items-center gap-2.5 mb-5">
            <Code2 size={18} className="text-lime-700 dark:text-[#E5FF45]" />
            <h3 className="text-lg font-display font-bold text-neutral-950 dark:text-white">
              Technical Skills
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {SkillsData.map((category, catIdx) => (
              <div
                key={category.category}
                id={`skill-cat-${catIdx}`}
                className="bg-white dark:bg-[#121212] border border-black/10 dark:border-white/10 hover:border-lime-600/50 dark:hover:border-[#E5FF45]/45 rounded-2xl p-5 transition-colors duration-200"
              >
                <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-black/10 dark:border-white/10">
                  {getIcon(category.icon)}
                  <h4 className="font-display text-neutral-950 dark:text-white font-bold text-sm sm:text-base">
                    {category.category}
                  </h4>
                </div>

                <div className="space-y-3.5">
                  {category.items.map((skill, skIdx) => (
                    <div key={skill.name} id={`skill-item-${catIdx}-${skIdx}`} className="space-y-1.5">
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-neutral-800 dark:text-white/90 font-medium">{skill.name}</span>
                        <span className="font-mono text-[11px] text-neutral-500 dark:text-white/45">
                          {skill.level === 5 ? "Expert" : skill.level === 4 ? "Advanced" : "Proficient"}
                        </span>
                      </div>
                      <div className="w-full h-1.5 bg-black/[0.06] dark:bg-white/10 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full ${
                            catIdx % 2 === 0
                              ? "bg-lime-600 dark:bg-[#E5FF45]"
                              : "bg-neutral-900 dark:bg-white/75"
                          }`}
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

        {/* Certifications Panel (5 cols) */}
        <div id="creds-bento" className="lg:col-span-5">
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2.5">
              <Award size={18} className="text-lime-700 dark:text-[#E5FF45]" />
              <h3 className="text-lg font-display font-bold text-neutral-950 dark:text-white">
                Certifications
              </h3>
            </div>
            <span className="text-xs font-mono text-neutral-500 dark:text-white/45 tabular-nums">
              {CertificationsData.length} Verified
            </span>
          </div>

          <div
            id="certifications-card"
            className="bg-white dark:bg-[#121212] border border-black/10 dark:border-white/10 rounded-2xl divide-y divide-black/10 dark:divide-white/10 overflow-hidden"
          >
            {CertificationsData.map((cert, idx) => (
              <div
                key={cert.name}
                id={`cert-item-${idx}`}
                className="flex items-center gap-3.5 p-4 sm:p-5 hover:bg-black/[0.02] dark:hover:bg-white/[0.03] transition-colors duration-150"
              >
                <div className="w-10 h-10 rounded-xl bg-neutral-100 dark:bg-[#080808] border border-black/10 dark:border-white/10 flex items-center justify-center shrink-0">
                  {getCertificationLogo(cert.name)}
                </div>
                <div className="min-w-0">
                  <h4 className="text-sm font-semibold text-neutral-950 dark:text-white leading-snug">
                    {cert.name}
                  </h4>
                  <p className="text-neutral-500 dark:text-white/45 text-xs font-mono mt-1 tabular-nums">
                    {cert.issuer} <span className="mx-1 text-neutral-300 dark:text-white/20">·</span> {cert.year}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
