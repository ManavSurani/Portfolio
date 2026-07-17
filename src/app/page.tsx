"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SkillBadge } from "@/components/ui/SkillBadge";
import { ProjectCard } from "@/components/ui/ProjectCard";
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
  Cpu
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

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="flex-grow pt-24 md:pt-32 pb-16 overflow-hidden">
        {/* HERO SECTION */}
        <section id="hero" className="min-h-[85vh] flex items-center container mx-auto px-6 max-w-7xl relative">
          {/* Ambient background lighting matching portrait */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#E5D9CE]/40 via-[#FAF7F2]/60 to-transparent rounded-full blur-3xl -z-10 pointer-events-none" />

          <div className="w-full grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Copy */}
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

              {/* Action Buttons (Download Resume REMOVED) */}
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

              {/* Metrics Bar */}
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

            {/* Right Suit Portrait Integration */}
            <motion.div 
              className="lg:col-span-5 flex justify-center lg:justify-end"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            >
              <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-[32px] p-3 bg-white border border-sand-DEFAULT/90 shadow-[0_20px_50px_-10px_rgba(27,42,74,0.12)] group">
                {/* Seamless photo backdrop blend container */}
                <div className="w-full h-full rounded-[24px] overflow-hidden bg-gradient-to-b from-[#EAE3DB] to-[#F6F3EE] relative">
                  <Image
                    src="/images/profile_suite.png"
                    alt="Manav Surani - Executive Portrait"
                    fill
                    sizes="(max-width: 768px) 100vw, 420px"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                    priority
                  />
                  {/* Subtle vignette & soft warm highlight blending */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-DEFAULT/15 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Subtle Floating Badge */}
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

        {/* ABOUT & EDUCATION SECTION */}
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
              {/* About Summary Box */}
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

              {/* Education Stack */}
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

        {/* TECHNICAL ARSENAL SECTION */}
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

        {/* PROFESSIONAL EXPERIENCE SECTION */}
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
              <div className="glass-card p-8 sm:p-10 rounded-[28px] border border-sand-DEFAULT shadow-md relative overflow-hidden">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-border/60">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-navy-DEFAULT text-white flex items-center justify-center shrink-0 shadow-sm font-bold text-xl">
                      VN
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-navy-DEFAULT">Software Engineering Intern</h3>
                      <div className="text-sm font-semibold text-steel-DEFAULT">VN Code Pro</div>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-bold tracking-wider text-navy-DEFAULT bg-navy-DEFAULT/10 px-4 py-2 rounded-full self-start sm:self-center">
                    Summer Internship
                  </span>
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

                <div className="mt-8 pt-6 border-t border-border/40 flex flex-wrap gap-2">
                  {["FastAPI", "Python", "Groq Llama 70B", "Gemini 2.5", "Tavily API", "Supabase"].map(tech => (
                    <SkillBadge key={tech} name={tech} variant="minimal" />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* FEATURED PROJECTS SECTION */}
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
                subtitle="Selected web applications, AI tools, and desktop software built with un-compromised attention to detail."
              />

              {/* Grid of cards with FIXED non-stretched logo containers */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                <motion.div variants={fadeUp}>
                  <ProjectCard
                    title="PNP CRM"
                    description="Full-stack interior design CRM platform. Manages customer lifecycles, automated PDF quotes, and project kanban boards with NextAuth.js access control."
                    image="/images/pnp_crm_logo.png"
                    tags={["Next.js", "TypeScript", "Prisma", "@dnd-kit"]}
                    category="Web App / CRM"
                  />
                </motion.div>

                <motion.div variants={fadeUp}>
                  <ProjectCard
                    title="FinTeam | FaaS"
                    description="Finance as a Service SaaS platform with marketing site and admin analytics portal. Features Gemini AI email draft generation and custom session auth."
                    image="/images/finteam_logo.svg"
                    tags={["Next.js", "PostgreSQL", "Gemini API", "Recharts"]}
                    liveUrl="https://finteam-f3qv.vercel.app"
                    category="SaaS Platform"
                  />
                </motion.div>

                <motion.div variants={fadeUp}>
                  <ProjectCard
                    title="Furnish & Florish"
                    description="Responsive web portal for interior furniture domain built using the ASP.NET framework with C# business logic and custom styled UI."
                    image="/images/furnish_logo.jpg"
                    tags={["ASP.NET", "C#", "SQL Server", "CSS"]}
                    githubUrl="https://github.com/ManavSurani/Furnish-Florish"
                    category="Web Application"
                  />
                </motion.div>
                
                <motion.div variants={fadeUp}>
                  <ProjectCard
                    title="Print-any-folder"
                    description="Desktop software that parses visual directory trees and extracts file contents into structured prompts for LLM context windows. Handles 100+ extensions."
                    image="/images/print_folder_logo.ico"
                    tags={["Python", "PyQt5", "PyPDF2", "PyInstaller"]}
                    category="Desktop Utility"
                  />
                </motion.div>
                
                <motion.div variants={fadeUp}>
                  <ProjectCard
                    title="VN Code Pro Blog Bot"
                    description="Autonomous AI blog generation engine using Python & FastAPI to synthesize, fact-check, and publish SEO-optimized articles automatically."
                    image="/images/blog_bot_logo.jpg"
                    tags={["FastAPI", "Python", "Groq", "Supabase"]}
                    category="AI Autonomous Tool"
                  />
                </motion.div>
                
                <motion.div variants={fadeUp}>
                  <ProjectCard
                    title="Furniture Management"
                    description="Windows Desktop Application streamlining retail operations with automated inventory, customer billing, and dynamic .rdlc reporting."
                    image="/images/furniture_app_logo.jpg"
                    tags={["VB.NET", "WinForms", "SQL Server"]}
                    category="Enterprise Desktop"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CERTIFICATIONS SECTION */}
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

        {/* CONTACT SECTION */}
        <section id="contact" className="py-24 bg-navy-DEFAULT text-white relative overflow-hidden">
          {/* Subtle background glow */}
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

      <Footer />
    </>
  );
}
