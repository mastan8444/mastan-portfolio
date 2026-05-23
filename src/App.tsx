import React, { useState } from "react";
import { ShaikProfile } from "./data";
import { 
  Bot, 
  Cpu, 
  Layers, 
  Briefcase, 
  Code2, 
  Mail, 
  Phone, 
  Github, 
  Link, 
  Linkedin, 
  Calendar, 
  MapPin, 
  Sparkles, 
  ChevronRight, 
  Terminal, 
  ArrowUpRight,
  ExternalLink,
  MessageSquareCode,
  Loader2,
  Menu,
  X
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

// Import modular children components
import Projects from "./components/Projects";
import CaseStudies from "./components/CaseStudies";
import Timeline from "./components/Timeline";
import Skills from "./components/Skills";
import AIAgent from "./components/AIAgent";

export default function App() {
  const [activeTab, setActiveTab] = useState<"about" | "projects" | "case-studies" | "timeline" | "skills" | "ai-agent">("about");
  const [selectedCaseId, setSelectedCaseId] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Direct Mail Dispatch Deck States
  const [senderName, setSenderName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [messageSubject, setMessageSubject] = useState("Collaboration Inquiry");
  const [messageText, setMessageText] = useState("");
  const [isTransmitting, setIsTransmitting] = useState(false);
  const [transmittedSuccessfully, setTransmittedSuccessfully] = useState(false);

  // Secure Mail Client trigger mailto build
  const handleTransmitPayload = (e: React.FormEvent) => {
    e.preventDefault();
    if (!senderName || !senderEmail || !messageText) return;

    setIsTransmitting(true);

    const emailSubject = `[Portfolio Secure Link] ${messageSubject} - from ${senderName}`;
    const emailBody = `Hello Shaik Mastan Saheb,\n\nI reached out through your agentic full-stack portfolio.\n\nSender Name: ${senderName}\nSender Email: ${senderEmail}\nSubject Area: ${messageSubject}\n\nMessage Payload:\n${messageText}\n\n---\nTransmission processed securely client-side.`;
    
    const mailtoUri = `mailto:mastan8957@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    
    setTimeout(() => {
      window.location.href = mailtoUri;
      setIsTransmitting(false);
      setTransmittedSuccessfully(true);
      setTimeout(() => setTransmittedSuccessfully(false), 8000);
    }, 900);
  };

  // Callback to jump instantly to Case Studies tab and focus a specific project
  const handleSelectCaseStudy = (caseStudyId: string) => {
    setSelectedCaseId(caseStudyId);
    setActiveTab("case-studies");
    
    // Smooth scroll back to top of main frame container
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Contacts grid under contact details
  const contactLinks = [
    { label: "Email", icon: <Mail size={16} />, href: `mailto:${ShaikProfile.email}`, displayText: ShaikProfile.email },
    { label: "Phone", icon: <Phone size={16} />, href: `tel:${ShaikProfile.phone}`, displayText: ShaikProfile.phone },
    { label: "GitHub", icon: <Github size={16} />, href: ShaikProfile.github, displayText: "Shaik-Mastan-Saheb" },
    { label: "LinkedIn", icon: <Linkedin size={16} />, href: ShaikProfile.linkedin, displayText: "Shaik Mastan Saheb" }
  ];

  const tabs = [
    { id: "about", label: "Overview", icon: <Terminal size={14} /> },
    { id: "projects", label: "Projects", icon: <Layers size={14} /> },
    { id: "case-studies", label: "Case Studies", icon: <Cpu size={14} /> },
    { id: "timeline", label: "Timeline", icon: <Briefcase size={14} /> },
    { id: "skills", label: "Skills & Credentials", icon: <Code2 size={14} /> },
    { id: "ai-agent", label: "AI Agent Chat", icon: <Bot size={14} /> }
  ] as const;

  return (
    <div id="app-root-container" className="min-h-screen bg-[#080808] text-white font-sans grid-pattern relative selection:bg-[#E5FF45]/25 selection:text-[#E5FF45]">
      
      {/* Absolute Ambient Glow decorations */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#E5FF45]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-[#E5FF45]/3 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-white/2 rounded-full blur-[100px] pointer-events-none" />

      {/* Floating Animated Dots background decor (simulation of Agentic nodes) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="floating-dot absolute left-[10%] bottom-[-5%] w-1.5 h-1.5 rounded-full bg-[#E5FF45] opacity-20" />
        <div className="floating-dot absolute left-[30%] bottom-[-8%] w-2 h-2 rounded-full bg-white opacity-20" style={{ animationDelay: "2s" }} />
        <div className="floating-dot absolute left-[75%] bottom-[-4%] w-1.5 h-1.5 rounded-full bg-[#E5FF45] opacity-10" style={{ animationDelay: "4s" }} />
        <div className="floating-dot absolute left-[90%] bottom-[-6%] w-2.5 h-2.5 rounded-full bg-white opacity-10" style={{ animationDelay: "6s" }} />
      </div>

      {/* STICKY HEADER & HIGHLIGHTED NAVIGATION */}
      <header id="app-main-navbar" className="sticky top-0 z-50 bg-[#080808]/90 backdrop-blur-xl border-b border-white/10 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between py-4">
          
          {/* Logo Name block */}
          <div className="flex items-center gap-3">
            <div id="nav-logo-widget" className="p-2.5 bg-[#E5FF45] rounded-xl flex items-center justify-center text-black shadow-[0_0_15px_rgba(229,255,69,0.25)]">
              <MessageSquareCode size={18} className="stroke-[2.5px]" />
            </div>
            <div>
              <span className="text-10px font-mono text-[#E5FF45] tracking-widest block font-bold">// SHAIK.DEV</span>
              <h1 className="text-sm sm:text-base font-display font-black text-white tracking-wide uppercase">
                Shaik Mastan Saheb
              </h1>
            </div>
          </div>

          {/* Desktop dynamic Navigation tabs */}
          <nav className="hidden lg:flex items-center gap-1.5 p-1 bg-[#121212]/90 border border-white/10 rounded-xl">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  id={`nav-btn-${tab.id}`}
                  onClick={() => {
                    setActiveTab(tab.id);
                    if (tab.id !== "case-studies") {
                      setSelectedCaseId(null);
                    }
                  }}
                  className={`flex items-center gap-1.5 px-3 py-2 text-xs font-mono rounded-lg tracking-wide uppercase transition-all duration-300 relative cursor-pointer border border-transparent hover:border-white/5 hover:text-white ${
                    isActive
                      ? "text-[#E5FF45] font-bold shadow-[0_0_15px_rgba(229,255,69,0.05)]"
                      : "text-white/60"
                  }`}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-[#E5FF45]/10 border border-[#E5FF45]/20 rounded-lg -z-10"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Mobile hamburger menu toggle */}
          <button
            id="mobile-hamburger-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 bg-[#121212] border border-white/10 text-white hover:text-[#E5FF45] hover:border-[#E5FF45]/30 rounded-xl transition-all duration-300 flex items-center justify-center cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {/* Mobile slide-out dynamic navigation menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="lg:hidden border-t border-white/10 overflow-hidden bg-[#0c0c0c]/98 pb-4"
            >
              <nav className="pt-3 space-y-1.5 flex flex-col">
                {tabs.map((tab) => {
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => {
                        setActiveTab(tab.id);
                        setMobileMenuOpen(false);
                        if (tab.id !== "case-studies") {
                          setSelectedCaseId(null);
                        }
                      }}
                      className={`flex items-center gap-2.5 px-4 py-3 rounded-xl text-xs font-mono tracking-wider uppercase transition-all duration-200 cursor-pointer border ${
                        isActive
                          ? "bg-[#E5FF45]/10 text-[#E5FF45] border-[#E5FF45]/20 font-bold"
                          : "bg-transparent text-white/60 hover:text-white hover:bg-white/5 border-transparent"
                      }`}
                    >
                      {tab.icon}
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* CORE VIEWPORT CARDS */}
      <main id="app-main-content" className="relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
          >
            {/* TABS 1: ABOUT (THE MAIN HOME OVERVIEW WITH HERO INFO) */}
            {activeTab === "about" && (
              <div id="overview-view">
                
                {/* HERO SECTION MODULE */}
                <section id="hero-bento-hero" className="py-20 px-4 md:px-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                  
                  {/* Left Column Profile text */}
                  <div className="lg:col-span-7 space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#E5FF45]/15 border border-[#E5FF45]/20 text-[#E5FF45] font-mono text-xs rounded-full">
                      <Sparkles size={12} className="animate-pulse" />
                      <span>Ready for Impact Opportunities</span>
                    </div>

                    <h2 className="text-5xl md:text-7xl font-display font-black text-white tracking-tighter leading-[0.95]">
                      CRAFTING MODERN <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#E5FF45]">AGENTIC AI</span> & FULL-STACK SYSTEMS
                    </h2>

                    <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-2xl font-sans font-light">
                      {ShaikProfile.summary}
                    </p>

                    {/* TACTICAL PROFILE DATA TERMINAL - HIGH IMPACT SECURE CONTACTS IN THE MAIN HERO AREA */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2 max-w-2xl">
                      
                      {/* Name Card */}
                      <div className="p-3.5 bg-white/3 border border-white/10 hover:border-[#E5FF45]/30 rounded-2xl flex items-center gap-3 transition-all duration-300 group/contact hover:shadow-[0_0_15px_rgba(229,255,69,0.08)]">
                        <div className="w-9 h-9 rounded-xl bg-[#E5FF45]/10 text-[#E5FF45] border border-[#E5FF45]/20 flex items-center justify-center group-hover/contact:bg-[#E5FF45] group-hover/contact:text-black transition-all duration-300">
                          <Bot size={15} />
                        </div>
                        <div className="min-w-0">
                          <span className="text-[9px] font-mono text-white/40 block">// SYSTEM OWNER</span>
                          <span className="text-xs font-mono font-bold text-white truncate block">Shaik Mastan Saheb</span>
                        </div>
                      </div>

                      {/* Phone Card */}
                      <a href={`tel:${ShaikProfile.phone}`} className="p-3.5 bg-white/3 border border-white/10 hover:border-[#E5FF45]/30 rounded-2xl flex items-center gap-3 transition-all duration-300 group/contact hover:shadow-[0_0_15px_rgba(229,255,69,0.08)] cursor-pointer">
                        <div className="w-9 h-9 rounded-xl bg-white/5 text-white border border-white/10 flex items-center justify-center group-hover/contact:bg-[#E5FF45] group-hover/contact:text-black group-hover/contact:border-[#E5FF45] transition-all duration-300">
                          <Phone size={14} />
                        </div>
                        <div className="min-w-0">
                          <span className="text-[9px] font-mono text-white/40 block">// SECURE VOICE LINE</span>
                          <span className="text-xs font-mono text-white group-hover:text-[#E5FF45] transition-colors truncate block">{ShaikProfile.phone}</span>
                        </div>
                      </a>

                      {/* Email Card */}
                      <a href={`mailto:${ShaikProfile.email}`} className="p-3.5 bg-white/3 border border-white/10 hover:border-[#E5FF45]/30 rounded-2xl flex items-center gap-3 transition-all duration-300 group/contact hover:shadow-[0_0_15px_rgba(229,255,69,0.08)] cursor-pointer">
                        <div className="w-9 h-9 rounded-xl bg-white/5 text-white border border-white/10 flex items-center justify-center group-hover/contact:bg-[#E5FF45] group-hover/contact:text-black group-hover/contact:border-[#E5FF45] transition-all duration-300">
                          <Mail size={14} />
                        </div>
                        <div className="min-w-0">
                          <span className="text-[9px] font-mono text-white/40 block">// SECURE DIRECT MAIL</span>
                          <span className="text-xs font-mono text-white group-hover:text-[#E5FF45] transition-colors truncate block">{ShaikProfile.email}</span>
                        </div>
                      </a>

                      {/* LinkedIn Card */}
                      <a href={ShaikProfile.linkedin} target="_blank" rel="noreferrer" className="p-3.5 bg-white/3 border border-white/10 hover:border-[#E5FF45]/30 rounded-2xl flex items-center gap-3 transition-all duration-300 group/contact hover:shadow-[0_0_15px_rgba(229,255,69,0.08)] cursor-pointer">
                        <div className="w-9 h-9 rounded-xl bg-white/5 text-white border border-white/10 flex items-center justify-center group-hover/contact:bg-[#E5FF45] group-hover/contact:text-black group-hover/contact:border-[#E5FF45] transition-all duration-300">
                          <Linkedin size={14} />
                        </div>
                        <div className="min-w-0">
                          <span className="text-[9px] font-mono text-white/40 block">// NETWORK HANDSHAKE</span>
                          <span className="text-xs font-mono text-white truncate block group-hover:text-[#E5FF45] transition-colors">Shaik Mastan Saheb</span>
                        </div>
                      </a>

                      {/* GitHub Card */}
                      <a href={ShaikProfile.github} target="_blank" rel="noreferrer" className="p-3.5 bg-white/3 border border-white/10 hover:border-[#E5FF45]/30 rounded-2xl flex items-center gap-3 transition-all duration-300 group/contact hover:shadow-[0_0_15px_rgba(229,255,69,0.08)] cursor-pointer sm:col-span-2">
                        <div className="w-9 h-9 rounded-xl bg-white/5 text-white border border-white/10 flex items-center justify-center group-hover/contact:bg-[#E5FF45] group-hover/contact:text-black group-hover/contact:border-[#E5FF45] transition-all duration-300">
                          <Github size={14} />
                        </div>
                        <div className="min-w-0">
                          <span className="text-[9px] font-mono text-white/40 block">// SYSTEM CODEBASE HUB</span>
                          <span className="text-xs font-mono text-white group-hover:text-[#E5FF45] transition-colors truncate block">github.com/Shaik-Mastan-Saheb</span>
                        </div>
                      </a>

                    </div>

                    {/* Quick navigation to interactive agent and projects */}
                    <div id="quick-view-controls" className="flex flex-wrap items-center gap-4 pt-4">
                      <button
                        onClick={() => setActiveTab("projects")}
                        className="bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-[#E5FF45]/40 px-5 py-3 text-xs font-mono font-bold uppercase rounded-xl tracking-wider transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,255,255,0.08)] cursor-pointer flex items-center gap-1.5"
                      >
                        <span>Inspect Systems</span>
                        <ChevronRight size={12} />
                      </button>
                      <button
                        onClick={() => setActiveTab("ai-agent")}
                        className="bg-[#E5FF45]/10 hover:bg-[#E5FF45]/20 text-[#E5FF45] border border-[#E5FF45]/20 hover:border-[#E5FF45]/60 px-5 py-3 text-xs font-mono font-bold uppercase rounded-xl tracking-wider transition-all duration-300 hover:shadow-[0_0_20px_rgba(229,255,69,0.12)] cursor-pointer flex items-center gap-1.5"
                      >
                        <Bot size={13} />
                        <span>Query Neural Copilot</span>
                      </button>
                    </div>
                  </div>

                  {/* Right Column: Premium Tactical Message Dispatch Terminal */}
                  <div className="lg:col-span-5">
                    <form 
                      onSubmit={handleTransmitPayload}
                      id="contact-dispatch-deck" 
                      className="bg-[#121212] border border-white/10 hover:border-[#E5FF45]/20 rounded-3xl p-6 md:p-8 space-y-4 shadow-2xl relative overflow-hidden backdrop-blur-md transition-all duration-300"
                    >
                      <div className="absolute top-0 right-0 w-32 h-32 bg-[#E5FF45]/5 rounded-full blur-2xl pointer-events-none" />
                      
                      {/* Terminal header */}
                      <div className="border-b border-white/10 pb-4">
                        <span className="text-[10px] font-mono text-white/40 tracking-wider block uppercase">
                          // SECURE PAYLOAD DISPATCH STATION
                        </span>
                        <h3 className="text-xl font-display font-medium text-white mt-1">Direct Communication Hub</h3>
                        <p className="text-xs font-mono text-[#E5FF45] mt-0.5">TARGET: mastan8957@gmail.com</p>
                      </div>

                      {/* Inputs */}
                      <div className="space-y-3 pt-2">
                        <div>
                          <label className="block text-[9px] font-mono text-white/40 uppercase mb-1">
                            Sender Identification (Your Name)
                          </label>
                          <input
                            type="text"
                            required
                            value={senderName}
                            onChange={(e) => setSenderName(e.target.value)}
                            placeholder="Enter Name..."
                            className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-white/20 focus:outline-none focus:border-[#E5FF45]/50 focus:ring-1 focus:ring-[#E5FF45]/20 font-mono"
                          />
                        </div>

                        <div>
                          <label className="block text-[9px] font-mono text-white/40 uppercase mb-1">
                            Sender Pathway (Your Email)
                          </label>
                          <input
                            type="email"
                            required
                            value={senderEmail}
                            onChange={(e) => setSenderEmail(e.target.value)}
                            placeholder="Enter Email Address..."
                            className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-white/20 focus:outline-none focus:border-[#E5FF45]/50 focus:ring-1 focus:ring-[#E5FF45]/20 font-mono"
                          />
                        </div>

                        <div>
                          <label className="block text-[9px] font-mono text-white/40 uppercase mb-1">
                            Transmission Subject
                          </label>
                          <select
                            value={messageSubject}
                            onChange={(e) => setMessageSubject(e.target.value)}
                            className="w-full bg-[#1c1c1c] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#E5FF45]/50 focus:ring-1 focus:ring-[#E5FF45]/20 font-mono cursor-pointer"
                          >
                            <option value="System Collaboration">System Collaboration</option>
                            <option value="Hiring / Recruitment">Hiring / Recruitment</option>
                            <option value="Technical Consultation">Technical Consultation</option>
                            <option value="AI Integration Handshake">AI Integration Handshake</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-[9px] font-mono text-white/40 uppercase mb-1">
                            Payload Content (Your Message)
                          </label>
                          <textarea
                            required
                            rows={3}
                            value={messageText}
                            onChange={(e) => setMessageText(e.target.value)}
                            placeholder="Type secure message details..."
                            className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-white/20 focus:outline-none focus:border-[#E5FF45]/50 focus:ring-1 focus:ring-[#E5FF45]/20 font-sans resize-none"
                          />
                        </div>
                      </div>

                      {/* Transmit action */}
                      <div className="pt-3">
                        <button
                          type="submit"
                          disabled={isTransmitting || !senderName || !senderEmail || !messageText}
                          className="w-full bg-[#E5FF45] hover:bg-[#d4f036] text-black disabled:opacity-40 font-mono text-xs font-semibold uppercase tracking-wider py-3 rounded-xl transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 shadow-lg shadow-[#E5FF45]/10"
                        >
                          {isTransmitting ? (
                            <>
                              <Loader2 size={13} className="animate-spin" />
                              <span>Compiling Payload...</span>
                            </>
                          ) : (
                            <span>Transmit Secured Message</span>
                          )}
                        </button>
                      </div>

                      {/* User success UI feedback inside the card */}
                      {transmittedSuccessfully && (
                        <div className="mt-2 p-3 bg-[#E5FF45]/10 border border-[#E5FF45]/20 rounded-xl text-center text-[11px] text-[#E5FF45] font-mono animate-fade-in">
                          📡 Secure payload compiled! Opening default mail client...
                        </div>
                      )}

                      {/* Code platforms quick triggers */}
                      <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-2.5">
                        <span className="text-[9px] font-mono text-white/30 tracking-widest uppercase">// CHANNELS:</span>
                        <div className="flex items-center gap-2">
                          <a
                            id="quick-link-github"
                            href={ShaikProfile.github}
                            target="_blank"
                            rel="noreferrer"
                            className="p-2 bg-black/40 hover:bg-white/5 border border-white/5 hover:border-[#E5FF45]/20 rounded-lg text-white/55 hover:text-[#E5FF45] transition-all"
                            title="GitHub"
                          >
                            <Github size={13} />
                          </a>
                          <a
                            id="quick-link-linkedin"
                            href={ShaikProfile.linkedin}
                            target="_blank"
                            rel="noreferrer"
                            className="p-2 bg-black/40 hover:bg-white/5 border border-white/5 hover:border-[#E5FF45]/20 rounded-lg text-white/55 hover:text-[#E5FF45] transition-all"
                            title="LinkedIn"
                          >
                            <Linkedin size={13} />
                          </a>
                          <a
                            id="quick-link-codechef"
                            href={ShaikProfile.codechef}
                            target="_blank"
                            rel="noreferrer"
                            className="p-2 bg-black/40 hover:bg-white/5 border border-white/5 hover:border-[#E5FF45]/20 rounded-lg text-white/55 hover:text-[#E5FF45] transition-all"
                            title="CodeChef"
                          >
                            <Code2 size={13} />
                          </a>
                        </div>
                      </div>

                    </form>
                  </div>

                </section>

                {/* HIGHLIGHTED STATS OR COMPREHENSIVE SUB-ROWS */}
                <section id="academic-milestones" className="bg-[#080808] py-10 px-4 md:px-8 max-w-7xl mx-auto border-t border-b border-white/10 grid grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center md:text-left">
                    <span className="block text-[10px] font-mono text-white/40 uppercase tracking-widest">// AWS CERTIFICATION</span>
                    <span className="block text-lg font-display font-bold text-white mt-1 uppercase">Cloud Practitioner</span>
                  </div>
                  <div className="text-center md:text-left">
                    <span className="block text-[10px] font-mono text-white/40 uppercase tracking-widest">// ORACLE CLOUD</span>
                    <span className="block text-lg font-display font-bold text-[#E5FF45] mt-1 uppercase">GenAI Specialist</span>
                  </div>
                  <div className="text-center md:text-left">
                    <span className="block text-[10px] font-mono text-white/40 uppercase tracking-widest">// PROFESSIONAL EXPERIENCE</span>
                    <span className="block text-lg font-display font-bold text-white mt-1 uppercase">Calibo AI Intern</span>
                  </div>
                  <div className="text-center md:text-left">
                    <span className="block text-[10px] font-mono text-white/40 uppercase tracking-widest">// ARCHITECTURE DESIGN</span>
                    <span className="block text-lg font-display font-bold text-[#E5FF45] mt-1 uppercase">High Utility Systems</span>
                  </div>
                </section>

                {/* BRIEF TEASER OF PROJECTS SHOWCASE */}
                <Projects onSelectCaseStudy={handleSelectCaseStudy} />
                
                {/* BRIEF RETRO TIMELINE LINK block */}
                <div className="text-center pb-20 pt-4">
                  <button
                    id="cta-full-timeline"
                    onClick={() => setActiveTab("timeline")}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#121212] hover:bg-white/5 border border-white/10 text-xs font-mono text-white/60 hover:text-[#E5FF45] rounded-lg uppercase tracking-wider transition-all duration-300 cursor-pointer"
                  >
                    <span>Inspect Professional Timeline & Path</span>
                    <ChevronRight size={14} />
                  </button>
                </div>

              </div>
            )}

            {/* TABS 2: PROJECTS VIEW */}
            {activeTab === "projects" && (
              <Projects onSelectCaseStudy={handleSelectCaseStudy} />
            )}

            {/* TABS 3: CASE STUDIES EXPLORER */}
            {activeTab === "case-studies" && (
              <CaseStudies initialCaseStudyId={selectedCaseId} />
            )}

            {/* TABS 4: CAREER TIMELINE */}
            {activeTab === "timeline" && (
              <Timeline />
            )}

            {/* TABS 5: SKILLS AND INVENTORY */}
            {activeTab === "skills" && (
              <Skills />
            )}

            {/* TABS 6: INTERACTIVE AI AGENT COMPANION */}
            {activeTab === "ai-agent" && (
              <AIAgent />
            )}

          </motion.div>
        </AnimatePresence>
      </main>

      {/* FOOTER WIDGET */}
      <footer id="app-footer" className="py-12 border-t border-white/10 bg-[#080808] text-white/40 text-center text-xs font-mono mt-10">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 Shaik Mastan Saheb. Powered securely under premium high utility architecture.</p>
          <div className="flex items-center gap-4">
            <a href={`mailto:${ShaikProfile.email}`} className="hover:text-[#E5FF45] transition-colors cursor-pointer text-[10px] uppercase tracking-wide">Email Shaik</a>
            <span>•</span>
            <a href={ShaikProfile.github} target="_blank" rel="noreferrer" className="hover:text-[#E5FF45] transition-colors cursor-pointer text-[10px] uppercase tracking-wide">GitHub Codebase</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
