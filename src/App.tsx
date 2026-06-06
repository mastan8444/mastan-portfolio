import React, { useState, useEffect } from "react";
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
  X,
  Sun,
  Moon
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
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("portfolio-theme");
      return saved === "dark";
    }
    return false;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("portfolio-theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("portfolio-theme", "light");
    }
  }, [darkMode]);

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
    <div id="app-root-container" className="min-h-screen bg-[#F6F6F3] dark:bg-black text-slate-800 dark:text-slate-200 font-sans grid-pattern relative selection:bg-[#E5FF45] selection:text-black transition-colors duration-300">
      
      {/* Absolute Ambient Light decorations */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-lime-400/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-sky-400/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-slate-200/40 rounded-full blur-[100px] pointer-events-none" />

      {/* Floating Animated Dots background decor (simulation of Agentic nodes) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="floating-dot absolute left-[10%] bottom-[-5%] w-1.5 h-1.5 rounded-full bg-lime-500 opacity-30" />
        <div className="floating-dot absolute left-[30%] bottom-[-8%] w-2 h-2 rounded-full bg-slate-400 opacity-30" style={{ animationDelay: "2s" }} />
        <div className="floating-dot absolute left-[75%] bottom-[-4%] w-1.5 h-1.5 rounded-full bg-lime-500 opacity-25" style={{ animationDelay: "4s" }} />
        <div className="floating-dot absolute left-[90%] bottom-[-6%] w-2.5 h-2.5 rounded-full bg-slate-400 opacity-20" style={{ animationDelay: "6s" }} />
      </div>

      {/* STICKY HEADER & HIGHLIGHTED NAVIGATION */}
      <header id="app-main-navbar" className="sticky top-0 z-50 bg-[#F6F6F3]/90 dark:bg-black/90 backdrop-blur-xl border-b border-slate-200/80 dark:border-slate-800/80 px-4 md:px-8 transition-colors duration-350">
        <div className="max-w-7xl mx-auto flex items-center justify-between py-4">
          
          {/* Logo Name block */}
          <div className="flex items-center gap-3">
            <div id="nav-logo-widget" className="p-2.5 bg-slate-900 dark:bg-slate-800 rounded-xl flex items-center justify-center text-[#E5FF45] shadow-md">
              <MessageSquareCode size={18} className="stroke-[2.5px]" />
            </div>
            <div>
              <span className="text-10px font-mono text-lime-600 dark:text-lime-450 tracking-widest block font-bold">// SHAIK.DEV</span>
              <h1 className="text-sm sm:text-base font-display font-black text-slate-900 dark:text-white tracking-wide uppercase">
                Shaik Mastan Saheb
              </h1>
            </div>
          </div>

          {/* Desktop dynamic Navigation tabs */}
          <nav className="hidden lg:flex items-center gap-1 p-1 bg-slate-200/60 dark:bg-slate-900/40 border border-slate-300/40 dark:border-slate-800 rounded-xl">
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
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono rounded-lg tracking-wide uppercase transition-all duration-300 relative cursor-pointer border border-transparent hover:text-slate-900 dark:hover:text-white ${
                    isActive
                      ? "text-white dark:text-slate-950 font-bold z-10"
                      : "text-slate-600 dark:text-slate-400"
                  }`}
                >
                  {tab.icon}
                  <span className="relative z-10">{tab.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-slate-900 dark:bg-[#E5FF45] rounded-lg"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Core Controls Block (Theme Toggle & Hamburger) */}
          <div className="flex items-center gap-2">
            
            {/* Elegant Dark/Light Mode Toggle */}
            <button
              id="theme-toggle-btn"
              onClick={() => setDarkMode(!darkMode)}
              className="p-2.5 bg-white dark:bg-[#121212] border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-[#E5FF45] hover:text-lime-600 dark:hover:text-lime-300 rounded-xl transition-all duration-300 flex items-center justify-center cursor-pointer shadow-xs"
              title={darkMode ? "Activate Light Theme" : "Activate Dark Theme"}
            >
              {darkMode ? <Sun size={17} /> : <Moon size={17} />}
            </button>

            {/* Mobile hamburger menu toggle */}
            <button
              id="mobile-hamburger-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 bg-white dark:bg-[#121212] border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 hover:text-lime-600 dark:hover:text-lime-400 rounded-xl transition-all duration-300 flex items-center justify-center cursor-pointer shadow-xs"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>

          </div>
        </div>

        {/* Mobile slide-out dynamic navigation menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="lg:hidden border-t border-slate-200 dark:border-slate-800 overflow-hidden bg-white/98 dark:bg-black/95 pb-4 shadow-xl"
            >
              <nav className="pt-3 space-y-1 flex flex-col px-2">
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
                          ? "bg-slate-900 dark:bg-[#E5FF45] text-white dark:text-black border-slate-900 dark:border-[#E5FF45] font-bold"
                          : "bg-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-900/40 border-transparent"
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
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-lime-500/10 dark:bg-lime-400/10 border border-lime-500/20 dark:border-lime-400/20 text-lime-700 dark:text-lime-400 font-mono text-xs rounded-full">
                      <Sparkles size={12} className="animate-pulse" />
                      <span>Open to Opportunities & Internships</span>
                    </div>

                    <h2 className="text-5xl md:text-7xl font-display font-black text-slate-900 dark:text-white tracking-tighter leading-[0.95]">
                      Building Smart <span className="text-lime-600 dark:text-lime-400">AI Agents</span> & Modern Web Apps
                    </h2>

                    <p className="text-slate-600 dark:text-slate-300 text-base md:text-lg leading-relaxed max-w-2xl font-sans font-light">
                      {ShaikProfile.summary}
                    </p>

                    {/* TACTICAL PROFILE DATA TERMINAL - HIGH IMPACT CONTACTS */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2 max-w-2xl">
                      
                      {/* Name Card */}
                      <div className="p-3.5 bg-white dark:bg-[#121212] border border-slate-200/80 dark:border-slate-800/80 hover:border-lime-500/80 dark:hover:border-lime-400 rounded-2xl flex items-center gap-3 transition-all duration-300 group/contact hover:shadow-md">
                        <div className="w-9 h-9 rounded-xl bg-lime-500/10 dark:bg-lime-400/10 text-lime-700 dark:text-lime-450 border border-lime-500/20 dark:border-lime-400/20 flex items-center justify-center group-hover/contact:bg-lime-600 group-hover/contact:text-white transition-all duration-300">
                          <Bot size={15} />
                        </div>
                        <div className="min-w-0">
                          <span className="text-[9px] font-mono text-slate-400 dark:text-slate-500 block font-bold">// ABOUT ME</span>
                          <span className="text-xs font-mono font-bold text-slate-800 dark:text-slate-100 truncate block">Shaik Mastan Saheb</span>
                        </div>
                      </div>

                      {/* Phone Card */}
                      <a href={`tel:${ShaikProfile.phone}`} className="p-3.5 bg-white dark:bg-[#121212] border border-slate-200/80 dark:border-slate-800/80 hover:border-lime-500/80 dark:hover:border-lime-400 rounded-2xl flex items-center gap-3 transition-all duration-300 group/contact hover:shadow-md cursor-pointer">
                        <div className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 flex items-center justify-center group-hover/contact:bg-lime-600 group-hover/contact:text-white group-hover/contact:border-lime-600 transition-all duration-300">
                          <Phone size={14} />
                        </div>
                        <div className="min-w-0">
                          <span className="text-[9px] font-mono text-slate-400 dark:text-slate-50 block font-bold">// PHONE CONTACT</span>
                          <span className="text-xs font-mono text-slate-800 dark:text-slate-300 truncate block group-hover:text-lime-700 dark:group-hover:text-lime-400 transition-colors font-semibold">{ShaikProfile.phone}</span>
                        </div>
                      </a>

                      {/* Email Card */}
                      <a href={`mailto:${ShaikProfile.email}`} className="p-3.5 bg-white dark:bg-[#121212] border border-slate-200/80 dark:border-slate-800/80 hover:border-lime-500/80 dark:hover:border-lime-400 rounded-2xl flex items-center gap-3 transition-all duration-300 group/contact hover:shadow-md cursor-pointer">
                        <div className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 flex items-center justify-center group-hover/contact:bg-lime-600 group-hover/contact:text-white group-hover/contact:border-lime-600 transition-all duration-300">
                          <Mail size={14} />
                        </div>
                        <div className="min-w-0">
                          <span className="text-[9px] font-mono text-slate-400 dark:text-slate-50 block font-bold">// EMAIL CONTACT</span>
                          <span className="text-xs font-mono text-slate-800 dark:text-slate-300 truncate block group-hover:text-lime-700 dark:group-hover:text-lime-400 transition-colors font-semibold">{ShaikProfile.email}</span>
                        </div>
                      </a>

                      {/* LinkedIn Card */}
                      <a href={ShaikProfile.linkedin} target="_blank" rel="noreferrer" className="p-3.5 bg-white dark:bg-[#121212] border border-slate-200/80 dark:border-slate-800/80 hover:border-lime-500/80 dark:hover:border-lime-400 rounded-2xl flex items-center gap-3 transition-all duration-300 group/contact hover:shadow-md cursor-pointer">
                        <div className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 flex items-center justify-center group-hover/contact:bg-lime-600 group-hover/contact:text-white group-hover/contact:border-lime-600 transition-all duration-300">
                          <Linkedin size={14} />
                        </div>
                        <div className="min-w-0">
                          <span className="text-[9px] font-mono text-slate-400 dark:text-slate-500 font-bold uppercase block">// LINKEDIN PROFILE</span>
                          <span className="text-xs font-mono text-slate-800 dark:text-slate-300 truncate block group-hover:text-lime-700 dark:group-hover:text-lime-400 transition-colors font-semibold">Shaik Mastan Saheb</span>
                        </div>
                      </a>

                      {/* GitHub Card */}
                      <a href={ShaikProfile.github} target="_blank" rel="noreferrer" className="p-3.5 bg-white dark:bg-[#121212] border border-slate-200/80 dark:border-slate-800/80 hover:border-lime-500/80 dark:hover:border-lime-400 rounded-2xl flex items-center gap-3 transition-all duration-300 group/contact hover:shadow-md cursor-pointer sm:col-span-2">
                        <div className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 flex items-center justify-center group-hover/contact:bg-lime-600 group-hover/contact:text-white group-hover/contact:border-lime-600 transition-all duration-300">
                          <Github size={14} />
                        </div>
                        <div className="min-w-0">
                          <span className="text-[9px] font-mono text-slate-400 dark:text-slate-500 block font-bold">// GITHUB PROFILE</span>
                          <span className="text-xs font-mono text-slate-800 dark:text-slate-300 group-hover:text-lime-700 dark:group-hover:text-lime-400 transition-colors truncate block font-semibold">github.com/mastan8444</span>
                        </div>
                      </a>

                    </div>

                    {/* Quick navigation to interactive agent and projects */}
                    <div id="quick-view-controls" className="flex flex-wrap items-center gap-4 pt-4">
                      <button
                        onClick={() => setActiveTab("projects")}
                        className="bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-800 px-5 py-3 text-xs font-mono font-bold uppercase rounded-xl tracking-wider transition-all duration-300 hover:shadow-sm cursor-pointer flex items-center gap-1.5"
                      >
                        <span>View Projects</span>
                        <ChevronRight size={12} className="text-slate-500" />
                      </button>
                      <button
                        onClick={() => setActiveTab("ai-agent")}
                        className="bg-slate-900 dark:bg-[#E5FF45] hover:bg-slate-800 dark:hover:bg-lime-350 text-white dark:text-black border border-slate-900 dark:border-[#E5FF45] px-5 py-3 text-xs font-mono font-bold uppercase rounded-xl tracking-wider transition-all duration-300 hover:shadow-md cursor-pointer flex items-center gap-1.5"
                      >
                        <Bot size={13} className="text-lime-400 dark:text-slate-950" />
                        <span>Talk with AI Agent</span>
                      </button>
                    </div>
                  </div>

                  {/* Right Column: Premium Tactical Message Dispatch Terminal */}
                  <div className="lg:col-span-5">
                    <form 
                      onSubmit={handleTransmitPayload}
                      id="contact-dispatch-deck" 
                      className="bg-white dark:bg-[#121212] border border-slate-200/80 dark:border-slate-800 rounded-3xl p-6 md:p-8 space-y-4 shadow-xl relative overflow-hidden transition-all duration-300"
                    >
                      <div className="absolute top-0 right-0 w-32 h-32 bg-lime-400/5 rounded-full blur-2xl pointer-events-none" />
                      
                      {/* Terminal header */}
                      <div className="border-b border-slate-100 dark:border-slate-800 pb-4">
                        <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500 tracking-wider block uppercase font-bold">
                          // LEAVE A MESSAGE
                        </span>
                        <h3 className="text-xl font-display font-medium text-slate-900 dark:text-white mt-1">Direct Message Hub</h3>
                        <p className="text-xs font-mono text-lime-700 dark:text-lime-400 mt-0.5">Email: mastan8957@gmail.com</p>
                      </div>

                      {/* Inputs */}
                      <div className="space-y-3 pt-2">
                        <div>
                          <label className="block text-[9px] font-mono text-slate-500 dark:text-slate-400 uppercase mb-1 font-bold">
                            Your Name
                          </label>
                          <input
                            type="text"
                            required
                            value={senderName}
                            onChange={(e) => setSenderName(e.target.value)}
                            placeholder="Enter Name..."
                            className="w-full bg-slate-50 dark:bg-[#0a0a0a] border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-2.5 text-xs text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-lime-500 dark:focus:border-lime-400 focus:ring-1 focus:ring-lime-500/20 font-mono"
                          />
                        </div>

                        <div>
                          <label className="block text-[9px] font-mono text-slate-500 dark:text-slate-400 uppercase mb-1 font-bold">
                            Your Email
                          </label>
                          <input
                            type="email"
                            required
                            value={senderEmail}
                            onChange={(e) => setSenderEmail(e.target.value)}
                            placeholder="Enter Email Address..."
                            className="w-full bg-slate-50 dark:bg-[#0a0a0a] border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-2.5 text-xs text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-lime-500 dark:focus:border-lime-400 focus:ring-1 focus:ring-lime-500/20 font-mono"
                          />
                        </div>

                        <div>
                          <label className="block text-[9px] font-mono text-slate-500 dark:text-slate-400 uppercase mb-1 font-bold">
                            Subject
                          </label>
                          <select
                            value={messageSubject}
                            onChange={(e) => setMessageSubject(e.target.value)}
                            className="w-full bg-slate-50 dark:bg-[#0a0a0a] border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-2.5 text-xs text-slate-800 dark:text-slate-100 focus:outline-none focus:border-lime-500 dark:focus:border-lime-400 focus:ring-1 focus:ring-lime-500/20 font-mono cursor-pointer"
                          >
                            <option value="Collaboration">Collaboration</option>
                            <option value="Hiring / Job Opening">Hiring / Job Opening</option>
                            <option value="Technical Consulting">Technical Consulting</option>
                            <option value="General Inquiry">General Inquiry</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-[9px] font-mono text-slate-500 dark:text-slate-400 uppercase mb-1 font-bold">
                            Your Message
                          </label>
                          <textarea
                            required
                            rows={3}
                            value={messageText}
                            onChange={(e) => setMessageText(e.target.value)}
                            placeholder="Type direct message details..."
                            className="w-full bg-slate-50 dark:bg-[#0a0a0a] border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-2.5 text-xs text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-lime-500 dark:focus:border-lime-400 focus:ring-1 focus:ring-lime-500/20 font-sans resize-none"
                          />
                        </div>
                      </div>

                      {/* Transmit action */}
                      <div className="pt-3">
                        <button
                          type="submit"
                          disabled={isTransmitting || !senderName || !senderEmail || !messageText}
                          className="w-full bg-slate-900 hover:bg-slate-800 dark:bg-[#E5FF45] dark:hover:bg-lime-300 text-white dark:text-black disabled:opacity-40 font-mono text-xs font-semibold uppercase tracking-wider py-3 rounded-xl transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 shadow-md"
                        >
                          {isTransmitting ? (
                            <>
                              <Loader2 size={13} className="animate-spin text-lime-400 dark:text-slate-950" />
                              <span>Sending Message...</span>
                            </>
                          ) : (
                            <span>Send Message</span>
                          )}
                        </button>
                      </div>

                      {/* User success UI feedback inside the card */}
                      {transmittedSuccessfully && (
                        <div className="mt-2 p-3 bg-lime-500/10 border border-lime-500/20 rounded-xl text-center text-[11px] text-lime-800 font-mono animate-fade-in">
                          📡 Secure payload compiled! Opening default mail client...
                        </div>
                      )}

                      {/* Code platforms quick triggers */}
                      <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-2.5">
                        <span className="text-[9px] font-mono text-slate-400 dark:text-slate-500 tracking-widest uppercase font-bold">// SOCIALS:</span>
                        <div className="flex items-center gap-2">
                          <a
                            id="quick-link-github"
                            href={ShaikProfile.github}
                            target="_blank"
                            rel="noreferrer"
                            className="p-2 bg-slate-50 dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-850 border border-slate-200 dark:border-slate-800 rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-[#E5FF45] transition-all shadow-2xs"
                            title="GitHub"
                          >
                            <Github size={13} />
                          </a>
                          <a
                            id="quick-link-linkedin"
                            href={ShaikProfile.linkedin}
                            target="_blank"
                            rel="noreferrer"
                            className="p-2 bg-slate-50 dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-850 border border-slate-200 dark:border-slate-800 rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-[#E5FF45] transition-all shadow-2xs"
                            title="LinkedIn"
                          >
                            <Linkedin size={13} />
                          </a>
                          <a
                            id="quick-link-codechef"
                            href={ShaikProfile.codechef}
                            target="_blank"
                            rel="noreferrer"
                            className="p-2 bg-slate-50 dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-850 border border-slate-200 dark:border-slate-800 rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-[#E5FF45] transition-all shadow-2xs"
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
                <section id="academic-milestones" className="bg-white/85 dark:bg-[#121212]/85 py-10 px-4 md:px-8 max-w-7xl mx-auto border-t border-b border-slate-200 dark:border-slate-800 grid grid-cols-2 lg:grid-cols-4 gap-6 rounded-2xl shadow-sm mb-8 transition-colors duration-300">
                  <div className="text-center md:text-left">
                    <span className="block text-[10px] font-mono text-slate-400 dark:text-slate-500 uppercase tracking-widest font-semibold">// CLOUD FOCUS</span>
                    <span className="block text-lg font-display font-bold text-slate-800 dark:text-slate-200 mt-1 uppercase">Cloud Practitioner</span>
                  </div>
                  <div className="text-center md:text-left">
                    <span className="block text-[10px] font-mono text-slate-400 dark:text-slate-500 uppercase tracking-widest font-semibold">// AI FOCUS</span>
                    <span className="block text-lg font-display font-bold text-lime-700 dark:text-[#E5FF45] mt-1 uppercase">GenAI Specialist</span>
                  </div>
                  <div className="text-center md:text-left">
                    <span className="block text-[10px] font-mono text-slate-400 dark:text-slate-500 uppercase tracking-widest font-semibold">// WORK HISTORY</span>
                    <span className="block text-lg font-display font-bold text-slate-800 dark:text-slate-200 mt-1 uppercase">Calibo AI Intern</span>
                  </div>
                  <div className="text-center md:text-left">
                    <span className="block text-[10px] font-mono text-slate-400 dark:text-slate-500 uppercase tracking-widest font-semibold">// CODE FOCUS</span>
                    <span className="block text-lg font-display font-bold text-lime-700 dark:text-[#E5FF45] mt-1 uppercase">Full-Stack Systems</span>
                  </div>
                </section>

                {/* BRIEF TEASER OF PROJECTS SHOWCASE */}
                <Projects onSelectCaseStudy={handleSelectCaseStudy} />
                
                {/* BRIEF RETRO TIMELINE LINK block */}
                <div className="text-center pb-20 pt-4">
                  <button
                    id="cta-full-timeline"
                    onClick={() => setActiveTab("timeline")}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-[#121212] hover:bg-slate-50 dark:hover:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-mono text-slate-500 dark:text-slate-400 hover:text-lime-700 dark:hover:text-[#E5FF45] rounded-lg uppercase tracking-wider transition-all duration-300 cursor-pointer shadow-xs"
                  >
                    <span>View Full Timeline</span>
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
      <footer id="app-footer" className="py-12 border-t border-slate-800 dark:border-slate-900 bg-slate-950 text-slate-400 text-center text-xs font-mono mt-10">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-400">© 2026 Shaik Mastan Saheb. Designed with simple, reliable standards.</p>
          <div className="flex items-center gap-4 text-slate-400">
            <a href={`mailto:${ShaikProfile.email}`} className="hover:text-lime-400 transition-colors cursor-pointer text-[10px] uppercase tracking-wide">Email Shaik</a>
            <span>•</span>
            <a href={ShaikProfile.github} target="_blank" rel="noreferrer" className="hover:text-lime-400 transition-colors cursor-pointer text-[10px] uppercase tracking-wide">GitHub Profile</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
