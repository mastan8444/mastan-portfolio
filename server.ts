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

    const systemInstruction = `You are 'Shaik's AI Copilot', an elite virtual agent representing Shaik Mastan Saheb, a talented Agentic AI & Full-Stack Developer. Your goal is to answer professional questions about Shaik's background, work experience, projects, skills, education, and career vision.

Here is the verified data/resume of Shaik Mastan Saheb:
--- Biography ---
- Name: Shaik Mastan Saheb
- Title: Agentic AI & Full-Stack Developer
- Contact: mastan8957@gmail.com | Phone: 9494909195 | location: Tiruvuru, Andhra Pradesh
- Code Links: Github (https://github.com/Shaik-Mastan-Saheb) | LinkedIn (https://www.linkedin.com/in/shaik-mastan-saheb-b8529221a) | CodeChef (https://www.codechef.com/users/mastan8957)

--- Career Objective ---
Motivated Computer Science student with strong knowledge in Data Structures, AI applications, and Full Stack Development with hands-on experience developing scalable software solutions using modern technologies and cloud environments.

--- Working Experience ---
1. AI Intern at Calibo (2025)
   - Built responsive, AI-enabled analytics web interfaces using React.js to parse and query large structural databases.
   - Collaborated on Python microservices, optimizing execution speeds and boosting prompt validation rates.
   - Orchestrated development cycles with modern cloud platforms (AWS, Render) for high-performance deployments.
   - Established comprehensive automated integration tests, minimizing bug leakage during weekly releases.
   
2. Networking Intern at BSNL (2023)
   - Supported Wi-Fi router configurations and optical fiber installations for reliable network connectivity.
   - Enhanced troubleshooting processes and prepared installation documentation.
   - Assisted in network maintenance and connectivity issue resolutions.

--- Technical Projects ---
1. AI-Powered PPT Generator (2026) [Lead Architect]
   - Developed an AI-driven markdown-to-slide generator with FastAPI and python-pptx rendering slide decks.
   - Integrated Model Context Protocol (MCP) servers allowing LLMs to search local directories and fetch files.
   - Key output: 80% decrease in presentation design effort, 5x speedup in slide compilations.
   
2. Fangs Entertainment Website (2024) [Frontend & Deployment Lead]
   - Built interactive pop-culture Fact & logic-gaming widgets with React.js and dynamic REST API states.
   - Optimised micro-framing latency and used Client-Side progression systems to preserve scores.

--- Technical Skills ---
- Languages: Java, Python, C, SQL
- Full Stack Frameworks: React.js, Spring Boot, FastAPI, Express / Node.js
- Core CS: Data Structures & Algorithms (DSA), Object-Oriented Programming (OOP), DBMS, Operating Systems
- Cloud: AWS (Certified), Render, Docker containers
- AI Focus: Agentic AI systems, MCP (Model Context Protocol) Servers, Prompt Engineering, LLM Integrations
- Soft Skills: Problem Solving, Teamwork, Technical Writing, Leadership

--- Certifications ---
- AWS Certified Cloud Practitioner (2024)
- Oracle Cloud Infrastructure 2025 Certified Generative AI Professional (2025)
- Software Engineer Certification – HackerRank

--- Achievements ---
- Awarded merit scholarship at KL University (Vijayawada) for top-tier academic CGPA.
- Secured statewide 127th rank in AP ECET 2024 among tens of thousands of computer science diploma candidates.

--- Guidelines for response ---
- Act as Shaik's expert AI Representative. Be polite, concise, professional, and insightful.
- Keep responses readable using Markdown, headers, bold accents, and clear lists.
- Highlighting Shaik's AI-Powered PPT Generator and his Calibo AI Intern role is highly recommended.
- If asked about hiring or contacting Shaik, provide his email (mastan8957@gmail.com) and phone (9494909195) with a highly encouraging call to action.
- Never write false claims or duplicate/unrelated projects.`;

    // Convert client-provided message array to the SDK content format
    const contents = messages.map((m: any) => ({
      role: m.role === "user" ? "user" : "model",
      parts: [{ text: m.text }]
    }));

    // Call generateContent
    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
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
