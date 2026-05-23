export interface Project {
  id: string;
  title: string;
  period: string;
  role: string;
  description: string;
  bullets: string[];
  tags: string[];
  category: "AI" | "Web" | "FullStack";
  github?: string;
  demo?: string;
  caseStudyId: string;
  metrics?: { label: string; value: string }[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  type: "work" | "internship";
  bullets: string[];
  skills: string[];
  location: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  period: string;
  score?: string;
  scoreLabel?: string;
  details?: string;
}

export interface SkillCategory {
  category: string;
  items: { name: string; level: number }[]; // level: 1-5
  icon: string;
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
}

export interface Achievement {
  text: string;
  subtext?: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  problem: string;
  solution: string;
  architecture: {
    nodes: { id: string; label: string; role: string; type: "client" | "server" | "api" | "storage" }[];
    connections: { from: string; to: string; label: string }[];
  };
  keyChallenges: { title: string; desc: string; resolution: string }[];
  impact: { title: string; desc: string; value: string }[];
  technologiesUsed: string[];
}

export interface Message {
  id: string;
  role: "user" | "model" | "system";
  text: string;
  timestamp: Date;
  suggestedPrompts?: string[];
}
