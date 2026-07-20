"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SkillBadge } from "@/components/ui/SkillBadge";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { ProjectModal, ProjectDetailData } from "@/components/ui/ProjectModal";
import { 
  ArrowRight, 
  Mail, 
  Code2, 
  Sparkles, 
  GraduationCap, 
  Briefcase, 
  Award, 
  ExternalLink, 
  ChevronRight,
  Database,
  Layers,
  Cpu,
  Maximize2
} from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

// Rich Project Data for Modals
const projectsData: (ProjectDetailData & { id: string; shortDesc: string; image: string; tags: string[]; liveUrl?: string; githubUrl: string })[] = [
  {
    id: "pnp-crm",
    title: "PNP CRM",
    category: "Web App / CRM",
    shortDesc: "Full-stack interior design CRM platform. Manages customer lifecycles, automated PDF quotes, and project kanban boards with NextAuth.js access control.",
    description: "Full-stack interior design CRM platform. Manages customer lifecycles, automated PDF quotes, and project kanban boards with NextAuth.js access control.",
    fullOverview: "PNP CRM is a production-grade Customer Relationship Management system built specifically for interior design businesses. It streamlines the end-to-end client lifecycle from initial lead capture and interactive Drag-and-Drop (@dnd-kit) kanban pipelines to dynamic PDF quote generation and client contract tracking.",
    architectureDetails: [
      "Next.js App Router with TypeScript for type-safe server & client components",
      "Prisma ORM connected to PostgreSQL for relational client & quote data modeling",
      "NextAuth.js authentication with role-based access control (RBAC)",
      "Interactive Kanban boards built with @dnd-kit for visual project stage movement",
      "Automated client PDF invoice & quote generation engine"
    ],
    keyImpact: [
      "Reduced invoice creation time by 75% for interior client projects",
      "Zero data loss across multi-stage project pipelines"
    ],
    image: "/images/pnp_crm_logo.png",
    tags: ["Next.js", "TypeScript", "Prisma", "@dnd-kit", "PostgreSQL"],
    githubUrl: "https://github.com/ManavSurani/PNP_crm",
    videoTitle: "PNP CRM - Interactive Kanban & Quote Generation Workflow"
  },
  {
    id: "finteam",
    title: "FinTeam | FaaS",
    category: "SaaS Platform",
    shortDesc: "Finance as a Service SaaS platform with marketing site and admin analytics portal. Features Gemini AI email draft generation and custom session auth.",
    description: "Finance as a Service SaaS platform with marketing site and admin analytics portal. Features Gemini AI email draft generation and custom session auth.",
    fullOverview: "FinTeam is a modern Finance-as-a-Service (FaaS) platform combining a public-facing customer marketing portal with a secure, real-time admin analytics dashboard. Built on Neon Serverless PostgreSQL and Recharts, it integrates Google Gemini AI for automated financial client email generation and reporting.",
    architectureDetails: [
      "Next.js App Router deployed on Vercel with server-side rendered analytics",
      "Serverless PostgreSQL database hosted on Neon with session-based authentication",
      "Google Gemini 2.5 Flash API integration for instant AI email drafting",
      "Recharts integration for dynamic financial metrics & revenue visual analytics",
      "Tailwind CSS responsive design with dark & light custom theme system"
    ],
    keyImpact: [
      "Instant AI email generation for financial reports",
      "Real-time chart visualization for subscription metrics"
    ],
    image: "/images/finteam_logo.svg",
    tags: ["Next.js", "PostgreSQL", "Gemini API", "Recharts", "Neon DB"],
    liveUrl: "https://finteam-f3qv.vercel.app",
    githubUrl: "https://github.com/ManavSurani/Finteam",
    videoTitle: "FinTeam FaaS - Live Analytics & Gemini AI Drafting Demo"
  },
  {
    id: "furnish-florish",
    title: "Furnish & Florish",
    category: "Web Application",
    shortDesc: "Responsive web portal for interior furniture domain built using the ASP.NET framework with C# business logic and custom styled UI.",
    description: "Responsive web portal for interior furniture domain built using the ASP.NET framework with C# business logic and custom styled UI.",
    fullOverview: "Furnish & Florish is a robust web portal designed for furniture browsing, custom interior cataloging, and inventory management. Developed with ASP.NET C# code-behind and SQL Server data binding, it provides seamless catalog navigation and multi-tier product filtering.",
    architectureDetails: [
      "ASP.NET C# Framework with structured object-oriented business logic layer",
      "SQL Server database for catalog schemas and order management",
      "Custom CSS3 responsive UI grid with multi-device styling",
      "ADO.NET data readers for high-speed catalog query execution"
    ],
    keyImpact: [
      "Structured product catalog navigation",
      "Clean separation of UI presentation and C# backend logic"
    ],
    image: "/images/furnish_logo.jpg",
    tags: ["ASP.NET", "C#", "SQL Server", "CSS3", "ADO.NET"],
    githubUrl: "https://github.com/ManavSurani/Furnish-Florish",
    videoTitle: "Furnish & Florish - ASP.NET Catalog & Management Portal"
  },
  {
    id: "print-folder",
    title: "Print-any-folder",
    category: "Desktop Utility",
    shortDesc: "Desktop software that parses visual directory trees and extracts file contents into structured prompts for LLM context windows. Handles 100+ extensions.",
    description: "Desktop software that parses visual directory trees and extracts file contents into structured prompts for LLM context windows. Handles 100+ extensions.",
    fullOverview: "Print-any-folder-and-file is a developer utility built in Python and PyQt5. It parses complex workspace directory trees and compiles multi-file codebases into structured, token-optimized text blocks specifically formatted for ingestion into Large Language Model (LLM) context windows.",
    architectureDetails: [
      "PyQt5 desktop UI with real-time directory tree visualization",
      "PyPDF2 and raw text parsers supporting over 100+ programming & document file formats",
      "Token-aware prompt formatter tailored for Gemini, Claude, and GPT-4 context windows",
      "Standalone executable compiled using PyInstaller for Windows zero-dependency distribution"
    ],
    keyImpact: [
      "Saves developers hours of manually copying files into LLM prompts",
      "Zero installation required via standalone PyInstaller build"
    ],
    image: "/images/print_folder_logo.ico",
    tags: ["Python", "PyQt5", "PyPDF2", "PyInstaller", "LLM Utility"],
    githubUrl: "https://github.com/ManavSurani/Print-any-folder",
    videoTitle: "Print-any-folder - Codebase Parsing & Prompt Formatting Showcase"
  },
  {
    id: "blog-bot",
    title: "VN Code Pro Blog Bot",
    category: "AI Autonomous Tool",
    shortDesc: "Autonomous AI blog generation engine using Python & FastAPI to synthesize, fact-check, and publish SEO-optimized articles automatically.",
    description: "Autonomous AI blog generation engine using Python & FastAPI to synthesize, fact-check, and publish SEO-optimized articles automatically.",
    fullOverview: "The VN Code Pro Blog Bot is an autonomous AI content orchestration pipeline built with Python and FastAPI. It uses dual LLMs—Groq (Llama 70B) for high-speed generation and Google Gemini 2.5 Flash for verification—combined with Tavily search for live web fact-checking before publishing directly to Supabase and CMS endpoints.",
    architectureDetails: [
      "FastAPI asynchronous backend with background queue worker management",
      "Groq Llama 70B integration for high-speed primary article drafting",
      "Tavily AI search integration for live web factual verification",
      "Google Gemini 2.5 Flash for post-draft refinement and SEO meta generation",
      "Custom multi-key API rotation engine with exponential backoff algorithm",
      "Supabase PostgreSQL database integration for automated scheduled publishing"
    ],
    keyImpact: [
      "Fully autonomous content generation with 0 manual intervention required",
      "Automatic API key failover handling 10,000+ daily requests"
    ],
    image: "/images/blog_bot_logo.jpg",
    tags: ["FastAPI", "Python", "Groq Llama 70B", "Gemini 2.5", "Supabase", "Tavily API"],
    githubUrl: "https://github.com/ManavSurani/PNP_Image_rendaring_bot",
    videoTitle: "Blog Bot - Asynchronous Multi-LLM AI Content Pipeline Workflow"
  },
  {
    id: "furniture-mgmt",
    title: "Furniture Management",
    category: "Enterprise Desktop",
    shortDesc: "Windows Desktop Application streamlining retail operations with automated inventory, customer billing, and dynamic .rdlc reporting.",
    description: "Windows Desktop Application streamlining retail operations with automated inventory, customer billing, and dynamic .rdlc reporting.",
    fullOverview: "Furniture Management System is a comprehensive enterprise WinForms application engineered in VB.NET. It manages retail furniture inventory, automated customer invoice calculations, tax formatting, and exports styled print reports via Microsoft Visual Studio RDLC Report Viewer.",
    architectureDetails: [
      "VB.NET Windows Forms architecture with event-driven GUI design",
      "SQL Server backend with stored procedures for transaction safety",
      "Microsoft RDLC Report Viewer integration for printable customer invoices",
      "Automated inventory recalculation triggers and stock alert thresholds"
    ],
    keyImpact: [
      "Automated billing calculations and instant printable RDLC reports",
      "Streamlined retail store stock tracking and item management"
    ],
    image: "/images/furniture_app_logo.jpg",
    tags: ["VB.NET", "WinForms", "SQL Server", "RDLC Reports"],
    githubUrl: "https://github.com/ManavSurani/Furniture-Management-System",
    videoTitle: "Furniture Management - Retail Billing & RDLC Reporting Demo"
  }
];

// Internship Detail Data for Modal
const internshipModalData: ProjectDetailData = {
  title: "Software Engineering Intern - AI Autonomous Pipeline",
  category: "VN Code Pro • Summer Internship",
  description: "Architected and deployed an autonomous AI blog generation pipeline using Python, FastAPI, Groq Llama 70B, Gemini 2.5 Flash, Tavily, and Supabase.",
  fullOverview: "During my Summer Internship at VN Code Pro, I took ownership of designing and deploying an end-to-end autonomous AI blog generation and publishing system ('VN Code Pro Blog Bot'). The engine operates 24/7, continuously generating SEO-optimized technical content, cross-verifying facts against live web data, and publishing directly to CMS endpoints.",
  architectureDetails: [
    "Built asynchronous FastAPI REST services handling content generation queues",
    "Implemented dual-LLM orchestration: Groq (Llama 70B) for drafting + Gemini 2.5 Flash for SEO editing",
    "Integrated Tavily AI Search API to fact-check generated claims against live internet sources",
    "Designed an automated multi-key API rotator with exponential backoff algorithms to bypass rate limits",
    "Connected pipeline outputs directly to Supabase DB and custom headless CMS endpoints"
  ],
  keyImpact: [
    "Successfully automated 100% of weekly blog content creation",
    "Built zero-downtime key rotation handling over 10k+ daily AI requests"
  ],
  image: "/images/blog_bot_logo.jpg",
  tags: ["FastAPI", "Python", "Groq Llama 70B", "Gemini 2.5 Flash", "Tavily API", "Supabase"],
  githubUrl: "https://github.com/ManavSurani/PNP_Image_rendaring_bot",
  videoTitle: "VN Code Pro Internship - AI Blog Bot Pipeline Demonstration"
};

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<ProjectDetailData | null>(null);

  return (
    <>
      <Navbar />

      <main className="flex-grow pt-24 md:pt-32 pb-16 overflow-hidden">
        {/* HERO SECTION - 100% UNTOUCHED & PRESERVED */}
        <section id="hero" className="min-h-[85vh] flex items-center container mx-auto px-6 max-w-7xl relative">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#E5D9CE]/40 via-[#FAF7F2]/60 to-transparent rounded-full blur-3xl -z-10 pointer-events-none" />

          <div className="w-full grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            <motion.div 
              className="lg:col-span-7 space-y-8"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-sand-DEFAULT shadow-xs">
                <span className="w-2 h-2 rounded-full bg-navy-DEFAULT animate-pulse" />
                <span className="text-xs font-mono font-semibold tracking-wider uppercase text-navy-DEFAULT">
                  Available for Software Engineering Roles
                </span>
              </motion.div>

              <motion.div variants={fadeUp} className="space-y-4">
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-navy-DEFAULT leading-[1.08]">
                  Engineering Scalable Systems & <span className="text-gradient-navy">AI Intelligence.</span>
                </h1>
                <p className="text-lg sm:text-xl text-muted max-w-xl font-normal leading-relaxed">
                  Hi, I'm <strong className="text-navy-DEFAULT font-semibold">Manav Surani</strong> — an MSc Information Technology scholar & Full-Stack Engineer specializing in Next.js, Python, and autonomous AI pipelines.
                </p>
              </motion.div>

              <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4 pt-2">
                <a href="#projects">
                  <Button variant="primary" size="lg" className="gap-2 text-sm shadow-md">
                    <span>Explore Featured Projects</span>
                    <ArrowRight size={18} />
                  </Button>
                </a>
                <a href="#contact">
                  <Button variant="outline" size="lg" className="gap-2 text-sm">
                    <Mail size={18} />
                    <span>Get in Touch</span>
                  </Button>
                </a>
              </motion.div>

              <motion.div variants={fadeUp} className="pt-6 grid grid-cols-3 gap-6 border-t border-border/60 max-w-lg">
                <div>
                  <div className="text-2xl lg:text-3xl font-bold text-navy-DEFAULT tracking-tight">8.45</div>
                  <div className="text-xs font-mono text-muted mt-1 uppercase tracking-wider">BSc IT CGPA</div>
                </div>
                <div>
                  <div className="text-2xl lg:text-3xl font-bold text-navy-DEFAULT tracking-tight">6+</div>
                  <div className="text-xs font-mono text-muted mt-1 uppercase tracking-wider">Featured Apps</div>
                </div>
                <div>
                  <div className="text-2xl lg:text-3xl font-bold text-navy-DEFAULT tracking-tight">Groq/Gemini</div>
                  <div className="text-xs font-mono text-muted mt-1 uppercase tracking-wider">AI Pipelines</div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div 
              className="lg:col-span-5 flex justify-center lg:justify-end"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            >
              <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-[32px] p-3 bg-white border border-sand-DEFAULT/90 shadow-[0_20px_50px_-10px_rgba(27,42,74,0.12)] group">
                <div className="w-full h-full rounded-[24px] overflow-hidden bg-gradient-to-b from-[#EAE3DB] to-[#F6F3EE] relative">
                  <Image
                    src="/images/profile_suite.png"
                    alt="Manav Surani - Executive Portrait"
                    fill
                    sizes="(max-width: 768px) 100vw, 420px"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-DEFAULT/15 via-transparent to-transparent pointer-events-none" />
                </div>

                <div className="absolute -bottom-4 right-6 bg-white/95 backdrop-blur-md border border-sand-DEFAULT px-4 py-2.5 rounded-2xl shadow-lg flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-navy-DEFAULT/10 flex items-center justify-center text-navy-DEFAULT">
                    <Sparkles size={16} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-navy-DEFAULT">MSc IT Scholar</div>
                    <div className="text-[10px] font-mono text-muted">MSU Baroda • 2025–2027</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ABOUT & EDUCATION SECTION - PRESERVED */}
        <section id="about" className="py-24 container mx-auto px-6 max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            <SectionHeading 
              badge="Background & Education"
              title="Architecting Scalable Engineering Solutions" 
              subtitle="Driven Information Technology graduate student passionate about full-stack web architectures, desktop systems, and production AI integrations."
            />
            
            <div className="grid md:grid-cols-12 gap-8 mt-12">
              <div className="md:col-span-7 glass-card p-8 md:p-10 rounded-[28px] flex flex-col justify-between">
                <div className="space-y-6">
                  <div className="w-12 h-12 rounded-2xl bg-navy-DEFAULT/10 flex items-center justify-center text-navy-DEFAULT mb-2">
                    <Code2 size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-navy-DEFAULT tracking-tight">Engineering Mindset & Full-Stack Core</h3>
                  <p className="text-muted leading-relaxed text-base font-normal">
                    I build end-to-end digital applications with robust databases, high-performance APIs, and intuitive frontends. My expertise spans modern frameworks like <strong className="text-navy-DEFAULT font-semibold">Next.js & React</strong>, Python backend systems with <strong className="text-navy-DEFAULT font-semibold">FastAPI</strong>, and enterprise desktop solutions using <strong className="text-navy-DEFAULT font-semibold">.NET & C#</strong>.
                  </p>
                  <p className="text-muted leading-relaxed text-base font-normal">
                    During my recent internship, I engineered autonomous AI content pipelines utilizing Groq (Llama 70B) and Gemini models with Tavily web-search verification, managing API key rotation and automated database syncs.
                  </p>
                </div>
              </div>

              <div className="md:col-span-5 space-y-6">
                <div className="glass-card p-7 rounded-[24px] border-l-4 border-l-navy-DEFAULT">
                  <div className="flex items-center gap-3 text-navy-DEFAULT mb-3">
                    <GraduationCap size={22} />
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-steel-DEFAULT">Postgraduate Degree</span>
                  </div>
                  <h4 className="text-xl font-bold text-navy-DEFAULT">Master of Science (MSc) in IT</h4>
                  <p className="text-xs font-mono text-navy-light mt-1 mb-3">2025 – 2027 • MSU Baroda (Faculty of Science)</p>
                  <p className="text-muted text-sm leading-relaxed">
                    Currently in 2nd Year (3rd Sem). Advanced coursework in Mobile Computing, High-Performance Databases, and Enterprise Software Systems.
                  </p>
                </div>

                <div className="glass-card p-7 rounded-[24px] border-l-4 border-l-steel-DEFAULT">
                  <div className="flex items-center gap-3 text-steel-DEFAULT mb-3">
                    <GraduationCap size={22} />
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-steel-DEFAULT">Undergraduate Degree</span>
                  </div>
                  <h4 className="text-xl font-bold text-navy-DEFAULT">Bachelor of Science (BSc) in IT</h4>
                  <p className="text-xs font-mono text-navy-light mt-1 mb-3">Jul 2022 – May 2025 • CVM University</p>
                  <p className="text-muted text-sm leading-relaxed">
                    Graduated with a distinction score of <strong className="text-navy-DEFAULT font-semibold">8.45 CGPA</strong>. Built core foundations in Software Architecture and System Analysis.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* TECHNICAL ARSENAL SECTION - PRESERVED */}
        <section id="skills" className="py-24 bg-cream-card/60 border-y border-border/60 relative">
          <div className="container mx-auto px-6 max-w-7xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <SectionHeading 
                badge="Technical Capabilities"
                title="Technology Stack & Tooling" 
                subtitle="Curated collection of languages, frameworks, and AI tools I leverage to build production systems."
              />
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                <motion.div variants={fadeUp} className="glass-card p-7 rounded-[24px]">
                  <div className="flex items-center gap-3 mb-6 pb-3 border-b border-border/60">
                    <Code2 size={20} className="text-navy-DEFAULT" />
                    <h3 className="text-lg font-bold text-navy-DEFAULT">Languages</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["Python", "TypeScript", "JavaScript", "C#", "C++", "Java", "PHP"].map(skill => (
                      <SkillBadge key={skill} name={skill} variant="navy" />
                    ))}
                  </div>
                </motion.div>

                <motion.div variants={fadeUp} className="glass-card p-7 rounded-[24px]">
                  <div className="flex items-center gap-3 mb-6 pb-3 border-b border-border/60">
                    <Layers size={20} className="text-navy-DEFAULT" />
                    <h3 className="text-lg font-bold text-navy-DEFAULT">Frameworks</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["Next.js 14", "React", "FastAPI", "ASP.NET", ".NET (WinForms)", "Tailwind CSS"].map(skill => (
                      <SkillBadge key={skill} name={skill} variant="steel" />
                    ))}
                  </div>
                </motion.div>

                <motion.div variants={fadeUp} className="glass-card p-7 rounded-[24px]">
                  <div className="flex items-center gap-3 mb-6 pb-3 border-b border-border/60">
                    <Database size={20} className="text-navy-DEFAULT" />
                    <h3 className="text-lg font-bold text-navy-DEFAULT">Databases</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["PostgreSQL", "SQL Server", "MySQL", "Supabase", "Prisma ORM"].map(skill => (
                      <SkillBadge key={skill} name={skill} variant="navy" />
                    ))}
                  </div>
                </motion.div>

                <motion.div variants={fadeUp} className="glass-card p-7 rounded-[24px]">
                  <div className="flex items-center gap-3 mb-6 pb-3 border-b border-border/60">
                    <Cpu size={20} className="text-navy-DEFAULT" />
                    <h3 className="text-lg font-bold text-navy-DEFAULT">AI & DevTools</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["Google Gemini API", "Groq (Llama 70B)", "Tavily AI", "Git/GitHub", "Vercel", "PyInstaller"].map(skill => (
                      <SkillBadge key={skill} name={skill} variant="steel" />
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* PROFESSIONAL EXPERIENCE SECTION WITH CLICKABLE INTERNSHIP MODAL */}
        <section id="experience" className="py-24 container mx-auto px-6 max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            <SectionHeading 
              badge="Industry Experience"
              title="Professional Work & Internships" 
              subtitle="Practical software engineering experience delivering production autonomous pipelines and enterprise tools."
            />

            <div className="mt-12 max-w-4xl mx-auto">
              <div 
                onClick={() => setSelectedProject(internshipModalData)}
                className="glass-card p-8 sm:p-10 rounded-[28px] border border-sand-DEFAULT shadow-md relative overflow-hidden card-hover cursor-pointer group"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-border/60">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-navy-DEFAULT text-white flex items-center justify-center shrink-0 shadow-sm font-bold text-xl group-hover:scale-105 transition-transform duration-300">
                      VN
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-navy-DEFAULT group-hover:text-navy-light transition-colors">Software Engineering Intern</h3>
                      <div className="text-sm font-semibold text-steel-DEFAULT">VN Code Pro</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold tracking-wider text-navy-DEFAULT bg-navy-DEFAULT/10 px-4 py-2 rounded-full self-start sm:self-center">
                      Summer Internship
                    </span>
                    <Button variant="ghost" size="sm" className="gap-1 text-xs text-navy-DEFAULT group-hover:bg-navy-DEFAULT/10">
                      <Maximize2 size={14} />
                      <span>Details</span>
                    </Button>
                  </div>
                </div>

                <ul className="space-y-4 text-muted text-sm sm:text-base leading-relaxed">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-navy-DEFAULT mt-2 shrink-0" />
                    <span>Architected and deployed the <strong>"VN Code Pro Blog Bot,"</strong> an autonomous AI blog generation and publishing pipeline using Python and FastAPI.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-navy-DEFAULT mt-2 shrink-0" />
                    <span>Orchestrated <strong>Groq (Llama 70B)</strong> and <strong>Google Gemini 2.5 Flash</strong> for real-time article synthesis, integrating Tavily API for live web fact-checking.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-navy-DEFAULT mt-2 shrink-0" />
                    <span>Engineered a robust multi-key API key rotation system with exponential backoff to handle rate limits seamlessly.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-navy-DEFAULT mt-2 shrink-0" />
                    <span>Connected backend outputs directly to Supabase and custom CMS endpoints for automated scheduled publishing.</span>
                  </li>
                </ul>

                <div className="mt-8 pt-6 border-t border-border/40 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    {["FastAPI", "Python", "Groq Llama 70B", "Gemini 2.5", "Tavily API", "Supabase"].map(tech => (
                      <SkillBadge key={tech} name={tech} variant="minimal" />
                    ))}
                  </div>
                  <span className="text-xs font-mono font-semibold text-navy-DEFAULT flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    View AI Architecture Modal <ChevronRight size={14} />
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* FEATURED PROJECTS SECTION - EQUAL HEIGHT CARDS & INTERACTIVE MODAL */}
        <section id="projects" className="py-24 bg-cream-card/60 border-y border-border/60">
          <div className="container mx-auto px-6 max-w-7xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <SectionHeading 
                badge="Portfolio Showcase"
                title="Featured Software Projects" 
                subtitle="Selected web applications, AI tools, and desktop software built with un-compromised attention to detail. Click any card for detailed architecture."
              />

              {/* Grid of cards with FIXED EQUAL HEIGHTS & UNIFORM ACTION BUTTONS */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                {projectsData.map((project) => (
                  <motion.div key={project.id} variants={fadeUp} className="h-full">
                    <ProjectCard
                      title={project.title}
                      description={project.shortDesc}
                      image={project.image}
                      tags={project.tags}
                      liveUrl={project.liveUrl}
                      githubUrl={project.githubUrl}
                      category={project.category}
                      onOpenModal={() => setSelectedProject(project)}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CERTIFICATIONS SECTION - PRESERVED */}
        <section className="py-24 container mx-auto px-6 max-w-7xl">
          <motion.div
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, margin: "-100px" }}
             variants={staggerContainer}
          >
            <SectionHeading 
              badge="Continuous Learning"
              title="Verified Certifications" 
              subtitle="Professional certificates earned across programming languages, AI, and database management."
            />
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {[
                { title: "Create a Simple Desktop App with VB.NET", org: "Coursera Verification", link: "https://coursera.org/verify/WFGTCRX37Y5U" },
                { title: "Introduction to Artificial Intelligence (AI)", org: "Coursera Verification", link: "https://coursera.org/verify/DDJMXN8R8I7K" },
                { title: "Introduction to Java", org: "Coursera Verification", link: "https://coursera.org/verify/YB5UHWVEU5SU" },
                { title: "Introduction to Python", org: "Coursera Verification", link: "https://coursera.org/verify/A62WU69BGJZN" },
                { title: "Introduction to R Programming for Data Science", org: "Coursera Verification", link: "https://coursera.org/verify/KPM8SU4Y6H28" },
                { title: "Using MySQL Database with PHP", org: "Coursera Verification", link: "https://coursera.org/verify/DRZX5OUPKU3O" }
              ].map((cert, index) => (
                <motion.a 
                  key={index}
                  variants={fadeUp}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card p-6 rounded-[20px] border border-border/80 hover:border-steel-DEFAULT/40 card-hover group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-8 h-8 rounded-lg bg-navy-DEFAULT/10 flex items-center justify-center text-navy-DEFAULT mb-4">
                      <Award size={18} />
                    </div>
                    <h4 className="font-bold text-navy-DEFAULT group-hover:text-navy-light transition-colors leading-snug">{cert.title}</h4>
                    <p className="text-xs font-mono font-medium text-steel-DEFAULT mt-2">{cert.org}</p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-border/40 text-xs font-medium text-navy-DEFAULT flex items-center justify-between">
                    <span>Verify Credential</span>
                    <ExternalLink size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </section>

        {/* CONTACT SECTION - PRESERVED */}
        <section id="contact" className="py-24 bg-navy-DEFAULT text-white relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-navy-light/30 rounded-full blur-3xl pointer-events-none" />

          <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="space-y-6"
            >
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-sand-DEFAULT/90 bg-white/10 px-4 py-1.5 rounded-full inline-block">
                Start a Conversation
              </span>

              <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
                Let's Build Something Extraordinary.
              </h2>
              
              <p className="text-lg md:text-xl text-sand-DEFAULT/80 max-w-2xl mx-auto font-light leading-relaxed">
                Whether you have an open software engineering role, a project opportunity, or just want to discuss AI pipelines — my inbox is always open.
              </p>
              
              <div className="pt-6">
                <a href="mailto:manavsurani982@gmail.com">
                  <Button variant="primary" size="lg" className="bg-white text-navy-DEFAULT hover:bg-cream-DEFAULT border-none text-base px-10 py-4 shadow-lg hover:shadow-xl">
                    <Mail size={18} className="mr-2" />
                    <span>manavsurani982@gmail.com</span>
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* PROJECT & INTERNSHIP DETAIL MODAL */}
      <ProjectModal
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
        project={selectedProject}
      />

      <Footer />
    </>
  );
}
