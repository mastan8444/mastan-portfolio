import { useState, useRef, useEffect, type ReactNode } from "react";
import { Message } from "../types";
import { Bot, User, Send, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const SYSTEM_WELCOME = `Hello! I'm **Shaik's AI Assistant**, trained on Shaik Mastan Saheb's verified resume, projects, engineering achievements, and certifications.

Ask me anything about his AI agent work, cloud certifications, internships, or projects — or choose one of the quick questions below.`;

const QUICK_PROMPTS = [
  "Tell me about the Insurance Claim Pre-Assessment Agent",
  "List Shaik's verified certifications",
  "Summarize Shaik's AI Internship at Calibo",
  "How was the Iris ML API deployed to Azure?",
  "Why should our team hire Shaik?"
];

const getLocalResponse = (input: string): string => {
  const query = input.toLowerCase();

  if (
    query.includes("claim") ||
    query.includes("insurance") ||
    query.includes("rag") ||
    query.includes("vector") ||
    query.includes("guardrail") ||
    query.includes("achieve")
  ) {
    return `### Key Achievement — **Autonomous Insurance Claim Pre-Assessment Agent**:
- **Architecture**: Engineered an autonomous Insurance Claim Pre-Assessment Agent combining **RAG**, **vector search**, and **LLM tool calling**.
- **Measurable Impact**: Cut policy validation latency by **40%** compared to manual verification flows.
- **Safety & Reliability**: Built-in **AI guardrails** and **output evaluation** to keep policy assessments accurate and compliant.
- **Other Milestones**: Awarded a **Merit Scholarship** at KL University and secured **127th Statewide Rank** in AP ECET 2024.`;
  }

  if (
    query.includes("cert") ||
    query.includes("azure") ||
    query.includes("microsoft") ||
    query.includes("aws") ||
    query.includes("wipro") ||
    query.includes("mongo") ||
    query.includes("data science")
  ) {
    return `### Shaik's Verified Certifications:
- **Microsoft Certified: Azure AI Fundamentals** (Microsoft · 2025)
- **AWS Certified Machine Learning Engineer – Associate** (Amazon Web Services · 2025)
- **Wipro TalentNext Java Full Stack** (Wipro TalentNext · 2025)
- **Data Science Using Python** (Python Data Science Certification · 2024)
- **AWS Certified Cloud Practitioner** (Amazon Web Services · 2024)
- **MongoDB Associate Database Administrator** (MongoDB Inc. · 2024)`;
  }

  if (query.includes("iris") || query.includes("docker") || query.includes("ml api") || query.includes("acr") || query.includes("aca")) {
    return `### **Iris ML API Deployment** (2026):
- **ML Serving**: Built a type-safe **FastAPI** and **Scikit-learn** prediction API for Iris species classification with **<15ms** inference latency.
- **Container Optimization**: Used multi-stage **Docker** builds to shrink the image footprint from 1.2GB to **280MB**.
- **Cloud Hosting**: Deployed using **Azure Container Registry (ACR)** and **Azure Container Apps (ACA)** with health-check and Swagger endpoints.
- **Live Swagger Docs**: Available at **https://iris-deploy-mastan.onrender.com/docs**`;
  }

  if (query.includes("calibo") || query.includes("intern") || query.includes("work") || query.includes("experience")) {
    return `### Work Experience — **AI Intern at Calibo** (2025):
- **Analytics Interfaces**: Built responsive AI-enabled web portals in **React.js** to query large structured databases.
- **Backend Microservices**: Optimized **Python** microservices for faster execution and stronger prompt validation.
- **Cloud Releases**: Orchestrated deployments across **AWS** and **Render** with automated integration tests to prevent regressions.
- **Prior Experience**: **Networking Intern at BSNL** (2023), supporting fiber-optic installations and router diagnostics.`;
  }

  if (query.includes("ppt") || query.includes("powerpoint") || query.includes("generator") || query.includes("presentation") || query.includes("mcp")) {
    return `### **AI-Powered PPT Generator** (2026):
- **Core Pipeline**: Compiles structured LLM markdown outlines directly into editable PowerPoint decks using **FastAPI** and **python-pptx**.
- **Agentic Context**: Integrated **Model Context Protocol (MCP)** servers so agents safely read local templates and assets.
- **Impact**: Cuts manual presentation preparation effort by **80%** with **5× faster** slide assembly.`;
  }

  if (query.includes("fangs") || query.includes("entertainment") || query.includes("game") || query.includes("portal")) {
    return `### **Fangs Entertainment Portal** (2024):
- **Interactive Web Hub**: Gamified trivia, logic puzzles, and interactive stories built in **React.js**, **Tailwind CSS**, and **REST APIs**.
- **Performance**: Achieved **0.8s** initial load time, **+45%** interaction rate, and **60%** user return rate using local state persistence.`;
  }

  if (query.includes("skill") || query.includes("competenc") || query.includes("language") || query.includes("stack") || query.includes("tech")) {
    return `### Core Technical Skills:
- **Languages**: Java, Python, C, SQL
- **Full-Stack**: React.js, Spring Boot, FastAPI, Node.js / Express
- **Agentic AI & ML**: RAG, Vector Search, LLM Tool Calling, AI Guardrails & Output Evaluation, MCP Servers, Scikit-Learn
- **Cloud & DevOps**: AWS, Microsoft Azure (Azure AI, ACR, ACA), Docker, Render, Git/GitHub
- **Core CS**: Data Structures & Algorithms, OOP Design, DBMS, Operating Systems`;
  }

  if (query.includes("academ") || query.includes("educat") || query.includes("university") || query.includes("klu") || query.includes("polytechnic")) {
    return `### Academic Background:
- **KL University, Vijayawada** (2024 – 2027): B.Tech in CSE (Machine Learning) — **9.6 / 10 CGPA** (Merit Scholar)
- **AANM & VVRSR Polytechnic, Gudlavalleru** (2021 – 2024): Diploma in CSE — **92%**
- **Sri Chaitanya High School, Tiruvuru** (2021): SSC Class X — **98%**`;
  }

  if (query.includes("hire") || query.includes("pitch") || query.includes("why") || query.includes("contact")) {
    return `### Why Hire Shaik Mastan Saheb?
- **Proven Agentic AI Delivery**: Built an autonomous **Insurance Claim Pre-Assessment Agent** using RAG, vector search, LLM tool calling, and guardrails — cutting policy validation latency by **40%**.
- **Multi-Cloud & Full-Stack Verified**: Holds **Microsoft Azure AI Fundamentals**, **AWS ML Engineer – Associate**, **Wipro TalentNext Java Full Stack**, and **MongoDB DBA** certifications.
- **Production Internship Track Record**: Shipped React analytics portals and Python microservices as an **AI Intern at Calibo**.
- **Direct Contact**: Reach Shaik at **mastan8957@gmail.com** or **+91 9494909195** (LinkedIn: **linkedin.com/in/shaikmastansaheb** · GitHub: **github.com/mastan8444**).`;
  }

  return `Thanks for asking about "${input}".

Here is a quick snapshot of **Shaik Mastan Saheb**:
- **Key Achievement**: Engineered an autonomous **Insurance Claim Pre-Assessment Agent** (RAG, vector search, LLM tool calling, AI guardrails & output evaluation) cutting policy validation latency by **40%**.
- **Certifications**: Microsoft Azure AI Fundamentals, AWS ML Engineer – Associate, Wipro TalentNext Java Full Stack, Data Science Using Python, AWS Cloud Practitioner, and MongoDB Associate DBA.
- **Experience & Projects**: AI Intern at **Calibo**, plus deployed projects including **AI-Powered PPT Generator** and **Iris ML API Deployment** on Azure.

Try asking about his **Insurance Claim Agent**, **Certifications**, **Calibo Internship**, or **Iris ML API** for deeper details.`;
};

export default function AIAgent() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "msg-welcome",
      role: "model",
      text: SYSTEM_WELCOME,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isSending, setIsSending] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isSending]);

  const handleSend = async (textToSend: string) => {
    if (!textToSend.trim() || isSending) return;

    const userMsg: Message = {
      id: `msg-user-${Date.now()}`,
      role: "user",
      text: textToSend,
      timestamp: new Date()
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsSending(true);

    try {
      const payloadMessages = [...messages, userMsg].map((m) => ({
        role: m.role,
        text: m.text
      }));

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: payloadMessages })
      });

      if (!res.ok) {
        throw new Error("Assistant endpoint unavailable");
      }

      const data = await res.json();
      const botText = data.isDemo
        ? getLocalResponse(textToSend)
        : data.text || getLocalResponse(textToSend);

      setMessages((prev) => [
        ...prev,
        {
          id: `msg-bot-${Date.now()}`,
          role: "model",
          text: botText,
          timestamp: new Date()
        }
      ]);
    } catch {
      const botText = getLocalResponse(textToSend);
      setMessages((prev) => [
        ...prev,
        {
          id: `msg-bot-fallback-${Date.now()}`,
          role: "model",
          text: botText,
          timestamp: new Date()
        }
      ]);
    } finally {
      setIsSending(false);
    }
  };

  const renderFormattedText = (text: string) => {
    return text.split("\n").map((line, lIdx) => {
      if (!line.trim()) return <div key={lIdx} className="h-1.5" />;

      let content = line;
      let lineClass = "text-sm leading-relaxed my-1";

      if (line.startsWith("###")) {
        content = line.replace("###", "").trim();
        lineClass = "text-sm sm:text-base font-display font-bold text-neutral-950 dark:text-white mt-3 mb-1.5 first:mt-0";
      } else if (line.startsWith("##")) {
        content = line.replace("##", "").trim();
        lineClass = "text-base font-display font-bold text-neutral-950 dark:text-white mt-3 mb-1.5 first:mt-0";
      }

      const isBullet = line.trim().startsWith("-") || line.trim().startsWith("*");
      if (isBullet) {
        content = line.trim().replace(/^[-*]\s*/, "");
        lineClass = "pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-lime-700 dark:before:text-[#E5FF45] my-1 text-sm leading-relaxed";
      }

      const boldRegex = /\*\*(.*?)\*\*/g;
      const parts: ReactNode[] = [];
      let lastIdx = 0;
      let match;

      while ((match = boldRegex.exec(content)) !== null) {
        if (match.index > lastIdx) {
          parts.push(content.substring(lastIdx, match.index));
        }
        parts.push(
          <strong key={match.index} className="font-semibold text-neutral-950 dark:text-[#E5FF45]">
            {match[1]}
          </strong>
        );
        lastIdx = boldRegex.lastIndex;
      }
      if (lastIdx < content.length) {
        parts.push(content.substring(lastIdx));
      }

      return (
        <p key={lIdx} className={lineClass}>
          {parts.length > 0 ? parts : content}
        </p>
      );
    });
  };

  return (
    <section id="ai-agent" className="py-14 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <div className="mb-8 pb-6 border-b border-black/10 dark:border-white/10">
        <span className="text-[11px] font-mono uppercase tracking-[0.16em] text-lime-700 dark:text-[#E5FF45] font-semibold block">
          Interactive Recruiter Assistant
        </span>
        <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-neutral-950 dark:text-white tracking-tight mt-1">
          Ask Shaik&apos;s AI Copilot
        </h2>
        <p className="text-neutral-600 dark:text-white/55 text-sm sm:text-base mt-2 max-w-2xl">
          Get instant, structured answers about Shaik&apos;s RAG and AI agent projects, multi-cloud certifications, and engineering experience.
        </p>
      </div>

      <div className="bg-white dark:bg-[#121212] border border-black/10 dark:border-white/10 rounded-2xl overflow-hidden shadow-sm flex flex-col h-[580px]">
        {/* Header Bar */}
        <div className="px-5 py-4 bg-neutral-50 dark:bg-[#0D0D0D] border-b border-black/10 dark:border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-neutral-950 dark:bg-[#E5FF45] text-[#E5FF45] dark:text-black flex items-center justify-center shrink-0">
              <Bot size={18} />
            </div>
            <div>
              <h3 className="text-sm font-display font-bold text-neutral-950 dark:text-white">
                Shaik&apos;s Portfolio Assistant
              </h3>
              <p className="text-xs text-neutral-500 dark:text-white/45">
                Resume, projects, certifications &amp; architecture Q&amp;A
              </p>
            </div>
          </div>
        </div>

        {/* Messages Viewport */}
        <div
          id="ai-chat-viewport"
          className="flex-grow p-4 sm:p-6 overflow-y-auto space-y-4 bg-[#F6F6F3]/60 dark:bg-[#080808]/60"
        >
          <AnimatePresence initial={false}>
            {messages.map((msg) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className={`flex gap-3 max-w-[88%] ${
                  msg.role === "user" ? "ml-auto flex-row-reverse" : "mr-auto"
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-lg shrink-0 flex items-center justify-center border ${
                    msg.role === "user"
                      ? "bg-neutral-950 dark:bg-white text-white dark:text-black border-neutral-950 dark:border-white"
                      : "bg-lime-500/10 dark:bg-[#E5FF45]/10 text-lime-700 dark:text-[#E5FF45] border-lime-600/25 dark:border-[#E5FF45]/25"
                  }`}
                >
                  {msg.role === "user" ? <User size={15} /> : <Bot size={15} />}
                </div>

                <div
                  className={`rounded-2xl px-4 py-3 border ${
                    msg.role === "user"
                      ? "bg-neutral-950 dark:bg-[#E5FF45] text-white dark:text-black border-neutral-950 dark:border-[#E5FF45]"
                      : "bg-white dark:bg-[#121212] border-black/10 dark:border-white/10 text-neutral-700 dark:text-white/75"
                  }`}
                >
                  <div>
                    {msg.role === "user" ? (
                      <p className="text-sm leading-relaxed font-medium">{msg.text}</p>
                    ) : (
                      renderFormattedText(msg.text)
                    )}
                  </div>
                  <span
                    className={`block text-[10px] font-mono mt-2 text-right tabular-nums ${
                      msg.role === "user" ? "text-white/60 dark:text-black/60" : "text-neutral-400 dark:text-white/35"
                    }`}
                  >
                    {msg.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                  </span>
                </div>
              </motion.div>
            ))}

            {isSending && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex gap-3 mr-auto"
              >
                <div className="w-8 h-8 rounded-lg shrink-0 bg-lime-500/10 dark:bg-[#E5FF45]/10 border border-lime-600/25 dark:border-[#E5FF45]/25 text-lime-700 dark:text-[#E5FF45] flex items-center justify-center">
                  <Bot size={15} />
                </div>
                <div className="rounded-2xl px-4 py-3 bg-white dark:bg-[#121212] border border-black/10 dark:border-white/10 flex items-center gap-2.5">
                  <Loader2 size={14} className="text-lime-700 dark:text-[#E5FF45] animate-spin" />
                  <span className="text-xs text-neutral-500 dark:text-white/50">Drafting response...</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Prompts */}
        <div className="px-4 py-2.5 bg-neutral-50 dark:bg-[#0D0D0D] border-t border-black/10 dark:border-white/10 overflow-x-auto whitespace-nowrap flex items-center gap-2 shrink-0">
          <span className="text-[11px] font-mono text-neutral-400 dark:text-white/40 uppercase tracking-wider shrink-0">
            Suggested:
          </span>
          {QUICK_PROMPTS.map((prompt, idx) => (
            <button
              key={idx}
              id={`quick-prompt-btn-${idx}`}
              type="button"
              onClick={() => handleSend(prompt)}
              className="px-3 py-1.5 bg-white dark:bg-[#161616] hover:border-lime-600/50 dark:hover:border-[#E5FF45]/50 border border-black/10 dark:border-white/10 rounded-lg text-neutral-700 dark:text-white/75 hover:text-lime-800 dark:hover:text-[#E5FF45] text-xs font-medium inline-block transition-colors duration-150 cursor-pointer"
            >
              {prompt}
            </button>
          ))}
        </div>

        {/* Input Form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend(inputValue);
          }}
          className="p-3.5 bg-white dark:bg-[#121212] border-t border-black/10 dark:border-white/10 flex gap-2.5 shrink-0"
        >
          <input
            id="ai-agent-chat-input"
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Ask about certifications, the Insurance Claim Agent, Calibo internship..."
            className="flex-grow bg-neutral-50 dark:bg-[#080808] border border-black/10 dark:border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-white/30 focus:outline-none focus:border-lime-600 dark:focus:border-[#E5FF45] focus:ring-2 focus:ring-[#E5FF45]/20 transition-colors"
            disabled={isSending}
          />
          <button
            id="ai-agent-submit"
            type="submit"
            disabled={!inputValue.trim() || isSending}
            className="bg-neutral-950 hover:bg-neutral-800 dark:bg-[#E5FF45] dark:hover:bg-[#d8f332] text-[#E5FF45] dark:text-black rounded-xl px-4 py-2.5 text-xs font-mono font-bold uppercase tracking-wider transition-colors duration-150 flex items-center gap-1.5 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed shrink-0"
          >
            <span>Send</span>
            <Send size={13} />
          </button>
        </form>
      </div>
    </section>
  );
}
