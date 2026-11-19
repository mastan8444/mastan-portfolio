import React, { useState, useEffect } from "react";
import { ShaikProfile, AchievementsData, CertificationsData } from "./data";
import {
  Bot,
  Mail,
  Phone,
  Github,
  Linkedin,
  Code2,
  ArrowRight,
  ArrowUpRight,
  Loader2,
  Menu,
  X,
  Sun,
  Moon,
  ShieldCheck,
  CheckCircle2,
  MapPin
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

import Projects from "./components/Projects";
import CaseStudies from "./components/CaseStudies";
import Timeline from "./components/Timeline";
import Skills from "./components/Skills";
import AIAgent from "./components/AIAgent";

type TabId = "about" | "projects" | "case-studies" | "timeline" | "skills" | "ai-agent";

export default function App() {
  const [activeTab, setActiveTab] = useState<TabId>("about");
  const [selectedCaseId, setSelectedCaseId] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("portfolio-theme-v2");
      if (saved === "light") return false;
      return true;
    }
    return true;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("portfolio-theme-v2", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("portfolio-theme-v2", "light");
    }
  }, [darkMode]);

  // Direct Message Form State
  const [senderName, setSenderName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [messageSubject, setMessageSubject] = useState("Hiring / Role Opportunity");
  const [messageText, setMessageText] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [sentSuccess, setSentSuccess] = useState(false);

  const handleSendDirectMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!senderName.trim() || !senderEmail.trim() || !messageText.trim()) return;

    setIsSending(true);
    const emailSubject = `[Portfolio Inquiry] ${messageSubject} — ${senderName}`;
    const emailBody = `Hello Shaik Mastan Saheb,\n\nI reached out via your engineering portfolio.\n\nName: ${senderName}\nEmail: ${senderEmail}\nTopic: ${messageSubject}\n\nMessage:\n${messageText}\n`;
    const mailtoUri = `mailto:${ShaikProfile.email}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

    setTimeout(() => {
      window.location.href = mailtoUri;
      setIsSending(false);
      setSentSuccess(true);
      setTimeout(() => setSentSuccess(false), 7000);
    }, 500);
  };

  const handleSelectCaseStudy = (caseStudyId: string) => {
    setSelectedCaseId(caseStudyId);
    setActiveTab("case-studies");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navigateTo = (tab: TabId) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    if (tab !== "case-studies") {
      setSelectedCaseId(null);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const tabs: { id: TabId; num: string; label: string }[] = [
    { id: "about", num: "01", label: "Overview" },
    { id: "projects", num: "02", label: "Projects" },
    { id: "case-studies", num: "03", label: "Case Studies" },
    { id: "timeline", num: "04", label: "Experience" },
    { id: "skills", num: "05", label: "Skills & Certs" },
    { id: "ai-agent", num: "06", label: "AI Copilot" }
  ];

  const featuredAchievement = AchievementsData[0];

  return (
    <div
      id="app-root-container"
      className="min-h-screen bg-[#F6F6F3] dark:bg-[#080808] text-neutral-900 dark:text-neutral-100 font-sans editorial-grid relative selection:bg-[#E5FF45] selection:text-black transition-colors duration-200 flex flex-col"
    >
      {/* Subtle architectural ambient radiance */}
      <div className="pointer-events-none fixed -top-32 right-1/4 w-[520px] h-[520px] rounded-full bg-[#E5FF45]/[0.07] dark:bg-[#E5FF45]/[0.06] blur-[140px] z-0" />

      {/* 3-ZONE STICKY TOP BAR */}
      <header
        id="app-main-navbar"
        className="sticky top-0 z-50 bg-[#F6F6F3]/90 dark:bg-[#080808]/90 backdrop-blur-xl border-b border-black/10 dark:border-white/10 transition-colors duration-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-4">
          {/* Zone 1: Brand Wordmark */}
          <button
            type="button"
            onClick={() => navigateTo("about")}
            className="flex items-center gap-3 text-left shrink-0 group cursor-pointer"
          >
            <div className="w-9 h-9 rounded-xl bg-neutral-950 dark:bg-[#E5FF45] text-[#E5FF45] dark:text-black font-display font-extrabold text-sm flex items-center justify-center tracking-tight transition-transform duration-200 group-hover:scale-[1.04]">
              SM
            </div>
            <div className="leading-tight">
              <span className="block font-display font-extrabold text-sm sm:text-base text-neutral-950 dark:text-white tracking-tight uppercase whitespace-nowrap">
                SHAIK.MASTAN
              </span>
              <span className="hidden sm:block text-[10px] font-mono uppercase tracking-[0.14em] text-neutral-500 dark:text-white/45 whitespace-nowrap">
                AI &amp; Full-Stack Engineer
              </span>
            </div>
          </button>

          {/* Zone 2: Clean Editorial Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Primary navigation">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  id={`nav-btn-${tab.id}`}
                  type="button"
                  onClick={() => navigateTo(tab.id)}
                  className={`relative py-6 text-xs font-mono uppercase tracking-[0.12em] whitespace-nowrap transition-colors duration-200 cursor-pointer flex items-center gap-1.5 ${
                    isActive
                      ? "text-neutral-950 dark:text-[#E5FF45] font-semibold"
                      : "text-neutral-500 dark:text-white/55 hover:text-neutral-950 dark:hover:text-white"
                  }`}
                >
                  <span className="text-[10px] opacity-60 tabular-nums">{tab.num}</span>
                  <span>{tab.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeNavUnderline"
                      className="absolute bottom-0 inset-x-0 h-[2px] bg-neutral-950 dark:bg-[#E5FF45]"
                      transition={{ type: "spring", stiffness: 420, damping: 34 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Theme Toggle & Mobile Menu Trigger */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              id="theme-toggle-btn"
              type="button"
              onClick={() => setDarkMode(!darkMode)}
              className="h-9 px-3 rounded-xl bg-white dark:bg-[#121212] border border-black/10 dark:border-white/15 text-neutral-800 dark:text-[#E5FF45] hover:border-black/30 dark:hover:border-[#E5FF45]/60 transition-colors duration-200 flex items-center gap-2 text-xs font-mono uppercase tracking-wider cursor-pointer whitespace-nowrap"
              title={darkMode ? "Switch to Light Mode" : "Switch to Elegant Dark"}
              aria-label={darkMode ? "Switch to Light Mode" : "Switch to Elegant Dark"}
            >
              {darkMode ? <Sun size={14} /> : <Moon size={14} />}
              <span className="hidden sm:inline">{darkMode ? "Light" : "Dark"}</span>
            </button>

            <button
              id="mobile-hamburger-btn"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden h-9 w-9 rounded-xl bg-white dark:bg-[#121212] border border-black/10 dark:border-white/15 text-neutral-900 dark:text-white hover:border-[#E5FF45]/60 transition-colors duration-200 flex items-center justify-center cursor-pointer"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="lg:hidden border-t border-black/10 dark:border-white/10 overflow-hidden bg-white dark:bg-[#0D0D0D]"
            >
              <nav className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-1">
                {tabs.map((tab) => {
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => navigateTo(tab.id)}
                      className={`w-full text-left px-3.5 py-3 rounded-xl text-xs font-mono uppercase tracking-[0.12em] transition-colors duration-150 cursor-pointer flex items-center justify-between ${
                        isActive
                          ? "bg-neutral-950 dark:bg-[#E5FF45] text-[#E5FF45] dark:text-black font-bold"
                          : "text-neutral-600 dark:text-white/65 hover:bg-black/5 dark:hover:bg-white/5"
                      }`}
                    >
                      <span className="flex items-center gap-2.5">
                        <span className="opacity-60 tabular-nums">{tab.num}</span>
                        <span>{tab.label}</span>
                      </span>
                      {isActive && <ArrowRight size={14} />}
                    </button>
                  );
                })}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* MAIN CONTENT VIEWPORT */}
      <main id="app-main-content" className="relative z-10 flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {activeTab === "about" && (
              <div id="overview-view">
                {/* SPLIT-SCREEN EDITORIAL HERO */}
                <section
                  id="hero-bento-hero"
                  className="pt-12 pb-12 md:pt-16 md:pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
                    {/* Left Column: Oversized Typographic Narrative, CTAs & Contact Grid */}
                    <div className="lg:col-span-7 space-y-6">
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-mono uppercase tracking-[0.16em] text-lime-700 dark:text-[#E5FF45] font-semibold">
                        <span>Portfolio 2026</span>
                        <span className="text-neutral-300 dark:text-white/20">/</span>
                        <span className="text-neutral-600 dark:text-white/55">Available for Hire &amp; Internships</span>
                      </div>

                      <h1 className="text-4xl sm:text-5xl lg:text-[4.15rem] font-display font-extrabold text-neutral-950 dark:text-white tracking-[-0.035em] leading-[0.98]">
                        Building Practical{" "}
                        <span className="font-serif italic font-normal text-lime-700 dark:text-[#E5FF45]">
                          AI Agents
                        </span>{" "}
                        &amp; Production Systems.
                      </h1>

                      <p className="text-neutral-600 dark:text-white/60 text-base sm:text-lg leading-relaxed max-w-2xl">
                        {ShaikProfile.summary}
                      </p>

                      {/* Primary Action Buttons */}
                      <div id="quick-view-controls" className="flex flex-wrap items-center gap-3 pt-1">
                        <button
                          type="button"
                          onClick={() => navigateTo("projects")}
                          className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-neutral-950 dark:bg-[#E5FF45] hover:bg-neutral-800 dark:hover:bg-[#d8f332] text-[#E5FF45] dark:text-black text-xs font-mono font-bold uppercase tracking-[0.12em] transition-all duration-200 cursor-pointer shadow-sm group"
                        >
                          <span>Explore Projects</span>
                          <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1" />
                        </button>

                        <button
                          type="button"
                          onClick={() => navigateTo("ai-agent")}
                          className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white dark:bg-[#121212] hover:bg-neutral-50 dark:hover:bg-white/[0.06] text-neutral-900 dark:text-white border border-black/15 dark:border-white/15 hover:border-black/40 dark:hover:border-[#E5FF45]/50 text-xs font-mono font-semibold uppercase tracking-[0.12em] transition-all duration-200 cursor-pointer"
                        >
                          <Bot size={15} className="text-lime-700 dark:text-[#E5FF45]" />
                          <span>Ask AI Copilot</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => navigateTo("skills")}
                          className="inline-flex items-center gap-1.5 px-3 py-3 text-xs font-mono uppercase tracking-[0.1em] text-neutral-600 dark:text-white/60 hover:text-lime-700 dark:hover:text-[#E5FF45] transition-colors duration-200 cursor-pointer"
                        >
                          <span>{CertificationsData.length} Certifications</span>
                          <ArrowUpRight size={14} />
                        </button>
                      </div>

                      {/* Scannable Direct Contact Grid */}
                      <div className="pt-5 border-t border-black/10 dark:border-white/10">
                        <div className="flex items-center justify-between mb-3.5">
                          <span className="text-[11px] font-mono uppercase tracking-[0.15em] text-neutral-500 dark:text-white/45 font-semibold">
                            Direct Channels
                          </span>
                          <span className="inline-flex items-center gap-1.5 text-xs text-neutral-500 dark:text-white/45">
                            <MapPin size={12} className="text-lime-700 dark:text-[#E5FF45]" />
                            Tiruvuru, Andhra Pradesh
                          </span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <a
                            href={`mailto:${ShaikProfile.email}`}
                            className="p-3.5 rounded-xl bg-white dark:bg-[#121212] border border-black/10 dark:border-white/10 hover:border-lime-600/60 dark:hover:border-[#E5FF45]/55 transition-all duration-200 flex items-center justify-between gap-3 group"
                          >
                            <div className="flex items-center gap-3 min-w-0">
                              <div className="w-9 h-9 rounded-lg bg-neutral-100 dark:bg-white/[0.06] text-neutral-800 dark:text-white/80 group-hover:bg-neutral-950 dark:group-hover:bg-[#E5FF45] group-hover:text-[#E5FF45] dark:group-hover:text-black transition-colors duration-200 flex items-center justify-center shrink-0">
                                <Mail size={15} />
                              </div>
                              <div className="min-w-0">
                                <span className="block text-[10px] font-mono uppercase tracking-wider text-neutral-500 dark:text-white/40">Email</span>
                                <span className="block text-xs sm:text-sm font-medium text-neutral-900 dark:text-white truncate">
                                  {ShaikProfile.email}
                                </span>
                              </div>
                            </div>
                            <ArrowUpRight size={15} className="text-neutral-400 dark:text-white/30 group-hover:text-lime-700 dark:group-hover:text-[#E5FF45] shrink-0 transition-colors" />
                          </a>

                          <a
                            href={`tel:${ShaikProfile.phone}`}
                            className="p-3.5 rounded-xl bg-white dark:bg-[#121212] border border-black/10 dark:border-white/10 hover:border-lime-600/60 dark:hover:border-[#E5FF45]/55 transition-all duration-200 flex items-center justify-between gap-3 group"
                          >
                            <div className="flex items-center gap-3 min-w-0">
                              <div className="w-9 h-9 rounded-lg bg-neutral-100 dark:bg-white/[0.06] text-neutral-800 dark:text-white/80 group-hover:bg-neutral-950 dark:group-hover:bg-[#E5FF45] group-hover:text-[#E5FF45] dark:group-hover:text-black transition-colors duration-200 flex items-center justify-center shrink-0">
                                <Phone size={15} />
                              </div>
                              <div className="min-w-0">
                                <span className="block text-[10px] font-mono uppercase tracking-wider text-neutral-500 dark:text-white/40">Phone</span>
                                <span className="block text-xs sm:text-sm font-mono font-medium text-neutral-900 dark:text-white tabular-nums truncate">
                                  +91 {ShaikProfile.phone}
                                </span>
                              </div>
                            </div>
                            <ArrowUpRight size={15} className="text-neutral-400 dark:text-white/30 group-hover:text-lime-700 dark:group-hover:text-[#E5FF45] shrink-0 transition-colors" />
                          </a>

                          <a
                            href={ShaikProfile.linkedin}
                            target="_blank"
                            rel="noreferrer"
                            className="p-3.5 rounded-xl bg-white dark:bg-[#121212] border border-black/10 dark:border-white/10 hover:border-lime-600/60 dark:hover:border-[#E5FF45]/55 transition-all duration-200 flex items-center justify-between gap-3 group"
                          >
                            <div className="flex items-center gap-3 min-w-0">
                              <div className="w-9 h-9 rounded-lg bg-neutral-100 dark:bg-white/[0.06] text-neutral-800 dark:text-white/80 group-hover:bg-neutral-950 dark:group-hover:bg-[#E5FF45] group-hover:text-[#E5FF45] dark:group-hover:text-black transition-colors duration-200 flex items-center justify-center shrink-0">
                                <Linkedin size={15} />
                              </div>
                              <div className="min-w-0">
                                <span className="block text-[10px] font-mono uppercase tracking-wider text-neutral-500 dark:text-white/40">LinkedIn</span>
                                <span className="block text-xs sm:text-sm font-medium text-neutral-900 dark:text-white truncate">
                                  in/shaikmastansaheb
                                </span>
                              </div>
                            </div>
                            <ArrowUpRight size={15} className="text-neutral-400 dark:text-white/30 group-hover:text-lime-700 dark:group-hover:text-[#E5FF45] shrink-0 transition-colors" />
                          </a>

                          <a
                            href={ShaikProfile.github}
                            target="_blank"
                            rel="noreferrer"
                            className="p-3.5 rounded-xl bg-white dark:bg-[#121212] border border-black/10 dark:border-white/10 hover:border-lime-600/60 dark:hover:border-[#E5FF45]/55 transition-all duration-200 flex items-center justify-between gap-3 group"
                          >
                            <div className="flex items-center gap-3 min-w-0">
                              <div className="w-9 h-9 rounded-lg bg-neutral-100 dark:bg-white/[0.06] text-neutral-800 dark:text-white/80 group-hover:bg-neutral-950 dark:group-hover:bg-[#E5FF45] group-hover:text-[#E5FF45] dark:group-hover:text-black transition-colors duration-200 flex items-center justify-center shrink-0">
                                <Github size={15} />
                              </div>
                              <div className="min-w-0">
                                <span className="block text-[10px] font-mono uppercase tracking-wider text-neutral-500 dark:text-white/40">GitHub</span>
                                <span className="block text-xs sm:text-sm font-medium text-neutral-900 dark:text-white truncate">
                                  github.com/mastan8444
                                </span>
                              </div>
                            </div>
                            <ArrowUpRight size={15} className="text-neutral-400 dark:text-white/30 group-hover:text-lime-700 dark:group-hover:text-[#E5FF45] shrink-0 transition-colors" />
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Right Column: Signature Bento Direct Message Card */}
                    <div className="lg:col-span-5">
                      <form
                        onSubmit={handleSendDirectMessage}
                        id="contact-dispatch-deck"
                        className="relative overflow-hidden bg-white dark:bg-[#121212] border border-black/10 dark:border-white/10 rounded-2xl p-6 sm:p-7 shadow-sm space-y-4"
                      >
                        <div className="pointer-events-none absolute -top-12 -right-12 w-44 h-44 rounded-full bg-[#E5FF45] blur-[90px] opacity-20 dark:opacity-15" />

                        <div className="relative z-10 pb-4 border-b border-black/10 dark:border-white/10">
                          <span className="block text-[10px] font-mono uppercase tracking-[0.16em] text-lime-700 dark:text-[#E5FF45] font-semibold">
                            Quick Contact
                          </span>
                          <h2 className="text-xl font-display font-bold text-neutral-950 dark:text-white mt-1">
                            Send a Direct Message
                          </h2>
                          <p className="text-xs text-neutral-500 dark:text-white/45 mt-1">
                            Dispatches directly to{" "}
                            <span className="font-mono text-neutral-800 dark:text-white/80">{ShaikProfile.email}</span>
                          </p>
                        </div>

                        <div className="relative z-10 space-y-3.5">
                          <div>
                            <label htmlFor="contact-name" className="block text-[11px] font-mono uppercase tracking-wider text-neutral-600 dark:text-white/55 mb-1.5">
                              Your Name
                            </label>
                            <input
                              id="contact-name"
                              type="text"
                              required
                              value={senderName}
                              onChange={(e) => setSenderName(e.target.value)}
                              placeholder="Alex Morgan"
                              className="w-full bg-neutral-50 dark:bg-[#080808] border border-black/10 dark:border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-white/30 focus:outline-none focus:border-lime-600 dark:focus:border-[#E5FF45] focus:ring-2 focus:ring-[#E5FF45]/20 transition-colors"
                            />
                          </div>

                          <div>
                            <label htmlFor="contact-email" className="block text-[11px] font-mono uppercase tracking-wider text-neutral-600 dark:text-white/55 mb-1.5">
                              Your Email
                            </label>
                            <input
                              id="contact-email"
                              type="email"
                              required
                              value={senderEmail}
                              onChange={(e) => setSenderEmail(e.target.value)}
                              placeholder="alex@company.com"
                              className="w-full bg-neutral-50 dark:bg-[#080808] border border-black/10 dark:border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-white/30 focus:outline-none focus:border-lime-600 dark:focus:border-[#E5FF45] focus:ring-2 focus:ring-[#E5FF45]/20 transition-colors"
                            />
                          </div>

                          <div>
                            <label htmlFor="contact-subject" className="block text-[11px] font-mono uppercase tracking-wider text-neutral-600 dark:text-white/55 mb-1.5">
                              Subject
                            </label>
                            <select
                              id="contact-subject"
                              value={messageSubject}
                              onChange={(e) => setMessageSubject(e.target.value)}
                              className="w-full bg-neutral-50 dark:bg-[#080808] border border-black/10 dark:border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-neutral-900 dark:text-white focus:outline-none focus:border-lime-600 dark:focus:border-[#E5FF45] focus:ring-2 focus:ring-[#E5FF45]/20 transition-colors cursor-pointer"
                            >
                              <option value="Hiring / Role Opportunity">Hiring / Role Opportunity</option>
                              <option value="Collaboration">Project Collaboration</option>
                              <option value="Technical Consulting">Technical Consulting</option>
                              <option value="General Inquiry">General Inquiry</option>
                            </select>
                          </div>

                          <div>
                            <label htmlFor="contact-message" className="block text-[11px] font-mono uppercase tracking-wider text-neutral-600 dark:text-white/55 mb-1.5">
                              Message
                            </label>
                            <textarea
                              id="contact-message"
                              required
                              rows={3}
                              value={messageText}
                              onChange={(e) => setMessageText(e.target.value)}
                              placeholder="Share role details, interview availability, or project notes..."
                              className="w-full bg-neutral-50 dark:bg-[#080808] border border-black/10 dark:border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-white/30 focus:outline-none focus:border-lime-600 dark:focus:border-[#E5FF45] focus:ring-2 focus:ring-[#E5FF45]/20 transition-colors resize-none"
                            />
                          </div>
                        </div>

                        <button
                          type="submit"
                          disabled={isSending || !senderName.trim() || !senderEmail.trim() || !messageText.trim()}
                          className="relative z-10 w-full py-3.5 px-4 rounded-xl bg-neutral-950 hover:bg-neutral-800 dark:bg-[#E5FF45] dark:hover:bg-[#d8f332] text-[#E5FF45] dark:text-black text-xs font-mono font-bold uppercase tracking-[0.12em] disabled:opacity-40 disabled:cursor-not-allowed transition-colors duration-200 cursor-pointer flex items-center justify-center gap-2"
                        >
                          {isSending ? (
                            <>
                              <Loader2 size={14} className="animate-spin" />
                              <span>Preparing Email...</span>
                            </>
                          ) : (
                            <>
                              <Mail size={14} />
                              <span>Send Direct Email</span>
                            </>
                          )}
                        </button>

                        {sentSuccess && (
                          <div className="relative z-10 p-3 rounded-xl bg-lime-500/10 border border-lime-600/30 dark:border-[#E5FF45]/30 text-lime-900 dark:text-[#E5FF45] text-xs flex items-center gap-2">
                            <CheckCircle2 size={15} className="shrink-0" />
                            <span>Mail client opened with your message addressed to {ShaikProfile.email}.</span>
                          </div>
                        )}

                        <div className="relative z-10 pt-3 border-t border-black/10 dark:border-white/10 flex items-center justify-between">
                          <span className="text-[10px] font-mono uppercase tracking-[0.14em] text-neutral-400 dark:text-white/35">
                            Social Links
                          </span>
                          <div className="flex items-center gap-2">
                            <a
                              id="quick-link-github"
                              href={ShaikProfile.github}
                              target="_blank"
                              rel="noreferrer"
                              className="w-8 h-8 rounded-full border border-black/10 dark:border-white/15 flex items-center justify-center text-neutral-600 dark:text-white/65 hover:text-neutral-950 dark:hover:text-[#E5FF45] hover:border-black/30 dark:hover:border-[#E5FF45]/50 transition-colors"
                              title="GitHub"
                              aria-label="GitHub"
                            >
                              <Github size={14} />
                            </a>
                            <a
                              id="quick-link-linkedin"
                              href={ShaikProfile.linkedin}
                              target="_blank"
                              rel="noreferrer"
                              className="w-8 h-8 rounded-full border border-black/10 dark:border-white/15 flex items-center justify-center text-neutral-600 dark:text-white/65 hover:text-neutral-950 dark:hover:text-[#E5FF45] hover:border-black/30 dark:hover:border-[#E5FF45]/50 transition-colors"
                              title="LinkedIn"
                              aria-label="LinkedIn"
                            >
                              <Linkedin size={14} />
                            </a>
                            <a
                              id="quick-link-codechef"
                              href={ShaikProfile.codechef}
                              target="_blank"
                              rel="noreferrer"
                              className="w-8 h-8 rounded-full border border-black/10 dark:border-white/15 flex items-center justify-center text-neutral-600 dark:text-white/65 hover:text-neutral-950 dark:hover:text-[#E5FF45] hover:border-black/30 dark:hover:border-[#E5FF45]/50 transition-colors"
                              title="CodeChef"
                              aria-label="CodeChef"
                            >
                              <Code2 size={14} />
                            </a>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </section>

                {/* FULL-WIDTH RECRUITER METRICS BAR */}
                <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-10">
                  <div
                    id="academic-milestones"
                    className="bg-white dark:bg-[#121212] border border-black/10 dark:border-white/10 rounded-2xl grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 divide-x-0 sm:divide-x divide-black/10 dark:divide-white/10"
                  >
                    <div className="p-6">
                      <span className="block text-[10px] font-mono uppercase tracking-[0.16em] text-neutral-500 dark:text-white/40">
                        Agentic AI Impact
                      </span>
                      <span className="block text-2xl sm:text-3xl font-display font-extrabold text-lime-700 dark:text-[#E5FF45] mt-1.5 tabular-nums">
                        -40% Latency
                      </span>
                      <span className="block text-xs text-neutral-500 dark:text-white/50 mt-1">
                        Insurance Claim RAG Agent
                      </span>
                    </div>

                    <div className="p-6">
                      <span className="block text-[10px] font-mono uppercase tracking-[0.16em] text-neutral-500 dark:text-white/40">
                        Cloud &amp; AI Verified
                      </span>
                      <span className="block text-2xl sm:text-3xl font-display font-extrabold text-neutral-950 dark:text-white mt-1.5 tabular-nums">
                        Azure + AWS
                      </span>
                      <span className="block text-xs text-neutral-500 dark:text-white/50 mt-1">
                        {CertificationsData.length} Industry Certifications
                      </span>
                    </div>

                    <div className="p-6">
                      <span className="block text-[10px] font-mono uppercase tracking-[0.16em] text-neutral-500 dark:text-white/40">
                        Work Experience
                      </span>
                      <span className="block text-2xl sm:text-3xl font-display font-extrabold text-neutral-950 dark:text-white mt-1.5">
                        Calibo AI
                      </span>
                      <span className="block text-xs text-neutral-500 dark:text-white/50 mt-1">
                        React &amp; Python Microservices
                      </span>
                    </div>

                    <div className="p-6">
                      <span className="block text-[10px] font-mono uppercase tracking-[0.16em] text-neutral-500 dark:text-white/40">
                        Automation Output
                      </span>
                      <span className="block text-2xl sm:text-3xl font-display font-extrabold text-lime-700 dark:text-[#E5FF45] mt-1.5 tabular-nums">
                        80% Faster
                      </span>
                      <span className="block text-xs text-neutral-500 dark:text-white/50 mt-1">
                        MCP &amp; FastAPI Slide Pipelines
                      </span>
                    </div>
                  </div>
                </section>

                {/* FEATURED ENGINEERING ACHIEVEMENT BENTO CARD */}
                {featuredAchievement && (
                  <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-8">
                    <div className="relative overflow-hidden bg-[#0E0E0E] dark:bg-[#121212] border border-white/10 rounded-2xl p-6 sm:p-8 lg:p-10 text-white flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                      <div className="pointer-events-none absolute -top-16 -right-16 w-64 h-64 rounded-full bg-[#E5FF45] blur-[120px] opacity-20" />

                      <div className="relative z-10 space-y-3 max-w-3xl">
                        <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.16em] text-[#E5FF45] font-semibold">
                          <ShieldCheck size={14} />
                          <span>Key Engineering Achievement</span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-display font-bold tracking-tight text-white">
                          {featuredAchievement.text}
                        </h2>
                        <p className="text-white/65 text-sm sm:text-base leading-relaxed">
                          {featuredAchievement.subtext}
                        </p>
                        <div className="pt-2 text-xs font-mono text-white/50">
                          RAG <span className="mx-1.5 text-white/25">·</span> Vector Search{" "}
                          <span className="mx-1.5 text-white/25">·</span> LLM Tool Calling{" "}
                          <span className="mx-1.5 text-white/25">·</span> AI Guardrails{" "}
                          <span className="mx-1.5 text-white/25">·</span> Output Evaluation
                        </div>
                      </div>

                      <div className="relative z-10 flex lg:flex-col items-baseline lg:items-end justify-between lg:justify-center gap-4 lg:pl-8 lg:border-l lg:border-white/10 shrink-0">
                        <div className="lg:text-right">
                          <span className="block text-4xl sm:text-5xl font-display font-extrabold text-[#E5FF45] tabular-nums tracking-tight">
                            -40%
                          </span>
                          <span className="block text-[11px] font-mono uppercase tracking-[0.14em] text-white/50 mt-1">
                            Policy Validation Latency
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={() => navigateTo("skills")}
                          className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-white hover:text-[#E5FF45] transition-colors cursor-pointer whitespace-nowrap"
                        >
                          <span>Credentials &amp; Achievements</span>
                          <ArrowRight size={14} />
                        </button>
                      </div>
                    </div>
                  </section>
                )}

                {/* PROJECTS SHOWCASE ON OVERVIEW */}
                <Projects onSelectCaseStudy={handleSelectCaseStudy} />

                {/* BOTTOM NAVIGATION CTA */}
                <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-20 pt-4 flex flex-wrap items-center justify-center gap-4">
                  <button
                    id="cta-full-timeline"
                    type="button"
                    onClick={() => navigateTo("timeline")}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white dark:bg-[#121212] border border-black/10 dark:border-white/15 hover:border-black/40 dark:hover:border-[#E5FF45]/60 text-xs font-mono uppercase tracking-[0.12em] text-neutral-800 dark:text-white/80 hover:text-neutral-950 dark:hover:text-[#E5FF45] transition-colors cursor-pointer"
                  >
                    <span>Explore Experience &amp; Education</span>
                    <ArrowRight size={14} />
                  </button>
                  <button
                    type="button"
                    onClick={() => navigateTo("skills")}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white dark:bg-[#121212] border border-black/10 dark:border-white/15 hover:border-black/40 dark:hover:border-[#E5FF45]/60 text-xs font-mono uppercase tracking-[0.12em] text-neutral-800 dark:text-white/80 hover:text-neutral-950 dark:hover:text-[#E5FF45] transition-colors cursor-pointer"
                  >
                    <span>Inspect Skills &amp; Certifications</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            )}

            {activeTab === "projects" && <Projects onSelectCaseStudy={handleSelectCaseStudy} />}
            {activeTab === "case-studies" && <CaseStudies initialCaseStudyId={selectedCaseId} />}
            {activeTab === "timeline" && <Timeline />}
            {activeTab === "skills" && <Skills />}
            {activeTab === "ai-agent" && <AIAgent />}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* CLEAN EDITORIAL FOOTER */}
      <footer
        id="app-footer"
        className="relative z-10 border-t border-black/10 dark:border-white/10 bg-white dark:bg-[#080808] transition-colors duration-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-7 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono uppercase tracking-[0.14em] text-neutral-500 dark:text-white/40">
          <p>© 2026 Shaik Mastan Saheb · Based in Andhra Pradesh</p>
          <div className="flex items-center gap-6">
            <a
              href={`mailto:${ShaikProfile.email}`}
              className="hover:text-neutral-950 dark:hover:text-[#E5FF45] transition-colors"
            >
              Email
            </a>
            <a
              href={ShaikProfile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-neutral-950 dark:hover:text-[#E5FF45] transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={ShaikProfile.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-neutral-950 dark:hover:text-[#E5FF45] transition-colors"
            >
              GitHub
            </a>
            <a
              href={ShaikProfile.codechef}
              target="_blank"
              rel="noreferrer"
              className="hover:text-neutral-950 dark:hover:text-[#E5FF45] transition-colors"
            >
              CodeChef
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
