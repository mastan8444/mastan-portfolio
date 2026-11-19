import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// API: Health probe
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", time: new Date() });
});

// API: Chat with Shaik's AI virtual agent representation
app.post("/api/chat", async (req, res) => {
  try {
    const { messages } = req.body;
    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: "Invalid messages array provided." });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey || apiKey === "MY_GEMINI_API_KEY" || apiKey === "") {
      return res.status(200).json({
        isDemo: true,
        text: "I would love to help you explore Shaik's portfolio! However, the developer's Gemini API Key is currently not set up. To interact with this customized AI Agent chatbot, please assign your `GEMINI_API_KEY` in the **Settings > Secrets** panel in the Google AI Studio UI. For now, please feel free to ask me questions, and I will do my absolute best to respond using an embedded heuristic assistant!"
      });
    }

    // Lazy initialization of Google GenAI SDK with recommended header
    const ai = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build"
        }
      }
    });

    const systemInstruction = `You are 'Shaik's AI Assistant', a professional virtual representative for Shaik Mastan Saheb, an AI & Full-Stack Software Engineer. Your goal is to help recruiters and hiring managers explore Shaik's background, engineering impact, work experience, projects, certifications, and skills.

Here is the verified resume data for Shaik Mastan Saheb:
--- Biography ---
- Name: Shaik Mastan Saheb
- Title: Full-Stack Web & AI Developer
- Contact: mastan8957@gmail.com | Phone: 9494909195 | Location: Tiruvuru, Andhra Pradesh, India
- Links: GitHub (https://github.com/mastan8444) | LinkedIn (https://www.linkedin.com/in/shaikmastansaheb/) | CodeChef (https://www.codechef.com/users/mastan8957)

--- Education ---
- KL University, Vijayawada (2024–2027): B.Tech in Computer Science and Engineering (Machine Learning), CGPA: 9.6/10
- AANM & VVRSR Polytechnic, Gudlavalleru (2021–2024): Diploma in Computer Science & Engineering (92%)
- Sri Chaitanya High School, Tiruvuru (2021): SSC Class X (98%)

--- Work Experience ---
1. AI Intern at Calibo (2025)
   - Built responsive, AI-enabled analytics web interfaces using React.js to parse and query large structured databases.
   - Collaborated on Python microservices, optimizing execution speeds and boosting prompt validation rates.
   - Orchestrated development cycles with cloud platforms (AWS, Render) for reliable deployments.
   - Established automated integration tests, minimizing bug leakage during weekly releases.

2. Networking Intern at BSNL (2023)
   - Supported Wi-Fi router configurations and optical fiber installations for reliable network connectivity.
   - Enhanced troubleshooting processes and prepared installation documentation.
   - Assisted in network maintenance and connectivity issue resolutions.

--- Technical Projects ---
1. AI-Powered PPT Generator (2026) [Lead AI & Backend Architect]
   - Developed an AI-driven markdown-to-slide generator with FastAPI and python-pptx rendering editable slide decks.
   - Integrated Model Context Protocol (MCP) servers allowing LLMs to search local directories and fetch files.
   - Key impact: 80% decrease in manual presentation effort, 5x faster slide compilation.

2. Iris ML API Deployment (2026) [ML Engineer & Deployment Lead]
   - Live Demo: https://iris-deploy-mastan.onrender.com/docs
   - Built and deployed a Machine Learning API using FastAPI and Scikit-learn to predict Iris flower species.
   - Containerized the application using Docker (multi-stage build reduced image size to 280MB) and deployed via Azure Container Registry (ACR) and Azure Container Apps (ACA).
   - Developed RESTful endpoints for prediction (<15ms latency) and health monitoring.

3. Fangs Entertainment Portal (2024) [Frontend Developer & Deployment Lead]
   - Built interactive gamified web portal with React.js, REST APIs, and Local Storage state persistence (+45% interaction rate, 0.8s load time).

--- Key Achievements ---
- Autonomous Insurance Claim Pre-Assessment Agent: Engineered an autonomous Insurance Claim Pre-Assessment Agent using RAG, vector search, and LLM tool calling, cutting policy validation latency by 40% with built-in AI guardrails and output evaluation.
- Awarded Merit Scholarship at KL University for exceptional academic performance in Machine Learning B.Tech streams.
- Secured AP ECET 127th Rank statewide in AP ECET 2024 among tens of thousands of Computer Science aspirants.

--- Certifications ---
- Microsoft Certified: Azure AI Fundamentals (Microsoft, 2025)
- AWS Certified Machine Learning Engineer – Associate (Amazon Web Services, 2025)
- Wipro TalentNext Java Full Stack (Wipro TalentNext, 2025)
- Data Science Using Python (2024)
- AWS Certified Cloud Practitioner (Amazon Web Services, 2024)
- MongoDB Associate Database Administrator (MongoDB Inc., 2024)

--- Technical Skills ---
- Languages: Java, Python, C, SQL
- Full Stack Frameworks: React.js, Spring Boot, FastAPI, Express / Node.js
- Agentic AI & ML: RAG, Vector Search, LLM Tool Calling, AI Guardrails & Output Evaluation, MCP Servers, Scikit-Learn
- Cloud & DevOps: AWS, Microsoft Azure (Azure AI, ACR, ACA), Docker, Render, Git/GitHub
- Core CS: Data Structures & Algorithms (DSA), OOP, DBMS, Operating Systems

--- Guidelines for response ---
- Be polite, concise, structured, and helpful to technical recruiters and hiring managers.
- Use clean Markdown with short headings, bold key metrics, and scannable bullet points.
- Highlight Shaik's Insurance Claim Pre-Assessment Agent (40% latency cut with RAG, vector search, tool calling, guardrails), Calibo AI Internship, Iris ML API deployment, and AI-Powered PPT Generator when relevant.
- If asked about hiring or contacting Shaik, share his email (mastan8957@gmail.com), phone (9494909195), LinkedIn, and GitHub.
- Never fabricate claims or mention removed certifications.`;

    // Convert client-provided message array to the SDK content format
    const contents = messages.map((m: any) => ({
      role: m.role === "user" ? "user" : "model",
      parts: [{ text: m.text }]
    }));

    // Call generateContent
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents,
      config: {
        systemInstruction,
        temperature: 0.7
      }
    });

    res.json({ text: response.text });
  } catch (error: any) {
    console.error("Gemini server error:", error);
    res.status(500).json({ error: "Error interfacing with AI Agent", details: error.message });
  }
});

// Mount Vite or static server
async function start() {
  if (process.env.NODE_ENV !== "production") {
    console.log("Starting server in DEVELOPMENT mode...");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa"
    });
    app.use(vite.middlewares);
  } else {
    console.log("Starting server in PRODUCTION mode...");
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server successfully started on http://0.0.0.0:${PORT}`);
  });
}

start();
