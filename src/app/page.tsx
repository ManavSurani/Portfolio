"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SkillBadge } from "@/components/ui/SkillBadge";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Download, ChevronRight, ExternalLink } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="flex-grow pt-24 pb-12">
        {/* HERO SECTION */}
        <section id="hero" className="min-h-[85vh] flex items-center container mx-auto px-6 max-w-7xl">
          <div className="w-full flex flex-col md:flex-row items-center justify-between gap-12">
            <motion.div 
              className="flex-1 space-y-8"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div variants={fadeUp}>
                <h2 className="text-cyan-400 font-medium tracking-wider mb-2 uppercase">Hello, World!</h2>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 leading-tight">
                  Hi, I'm <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-magenta-500">
                    Manav Surani
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-beige-DEFAULT/90 max-w-lg font-light">
                  Full-Stack Software Engineer & AI Integrator.
                </p>
              </motion.div>

              <motion.div variants={fadeUp} className="flex flex-wrap gap-4 pt-4">
                <a href="#projects">
                  <Button variant="primary" size="lg" className="gap-2">
                    View Projects <ChevronRight size={20} />
                  </Button>
                </a>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="lg" className="gap-2 text-magenta-300 border-magenta-500/50 hover:bg-magenta-500/10">
                    <Download size={20} /> Download Resume
                  </Button>
                </a>
              </motion.div>
            </motion.div>

            <motion.div 
              className="flex-1 flex justify-center md:justify-end"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full p-2 bg-gradient-to-tr from-cyan-500 via-surface to-magenta-500 neon-glow-cyan">
                <div className="w-full h-full rounded-full overflow-hidden bg-background relative border-4 border-background">
                  <Image
                    src="/images/profile.jpg"
                    alt="Manav Surani"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    priority
                  />
                  {/* Subtle overlay to match theme */}
                  <div className="absolute inset-0 bg-cyan-900/10 mix-blend-overlay"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ABOUT & EDUCATION SECTION */}
        <section id="about" className="py-24 container mx-auto px-6 max-w-7xl relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            <SectionHeading 
              title="About Me" 
              subtitle="Passionate about building scalable databases, responsive user interfaces, and managing end-to-end project execution."
            />
            
            <div className="grid md:grid-cols-2 gap-12 mt-16">
              <div className="glass p-8 rounded-2xl border-l-4 border-l-cyan-500">
                <h3 className="text-2xl font-bold mb-4 text-cyan-100">My Journey</h3>
                <p className="text-beige-DEFAULT/80 leading-relaxed mb-4">
                  I am a motivated Information Technology student with strong foundations in full-stack web development, desktop applications, and cutting-edge AI integrations.
                </p>
                <p className="text-beige-DEFAULT/80 leading-relaxed">
                  Currently seeking a challenging software engineering placement to leverage my skills in Next.js, Python, and the .NET ecosystem to build impactful digital solutions.
                </p>
              </div>

              <div className="space-y-6">
                <div className="glass p-6 rounded-2xl border-l-4 border-l-magenta-500">
                  <h4 className="text-xl font-bold text-magenta-100">Master of Science (MSc) in IT</h4>
                  <p className="text-sm text-cyan-300 font-mono mb-2">2025 – 2027 • The Maharaja Sayajirao University of Baroda</p>
                  <p className="text-beige-DEFAULT/80 text-sm">Currently in 2nd Year, 3rd Semester. Coursework: Mobile Computing, Data Structures, Database Management.</p>
                </div>
                <div className="glass p-6 rounded-2xl border-l-4 border-l-cyan-500/50">
                  <h4 className="text-xl font-bold text-cyan-100/80">Bachelor of Science (BSc) in IT</h4>
                  <p className="text-sm text-magenta-300 font-mono mb-2">Jul 2022 – May 2025 • CVM University</p>
                  <p className="text-beige-DEFAULT/80 text-sm">Graduated with a stellar 8.45 CGPA.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="py-24 bg-surface/30 relative">
          <div className="container mx-auto px-6 max-w-7xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <SectionHeading title="Technical Arsenal" />
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
                <motion.div variants={fadeUp} className="glass p-6 rounded-2xl">
                  <h3 className="text-xl font-semibold mb-6 text-cyan-300 border-b border-border pb-2">Languages</h3>
                  <div className="flex flex-wrap gap-3">
                    {["Python", "TypeScript", "JavaScript", "C#", "C++", "Java", "PHP"].map(skill => (
                      <SkillBadge key={skill} name={skill} glow="cyan" />
                    ))}
                  </div>
                </motion.div>

                <motion.div variants={fadeUp} className="glass p-6 rounded-2xl">
                  <h3 className="text-xl font-semibold mb-6 text-magenta-300 border-b border-border pb-2">Frameworks</h3>
                  <div className="flex flex-wrap gap-3">
                    {["Next.js", "React", "FastAPI", "ASP.NET", ".NET (WinForms)", "Tailwind CSS"].map(skill => (
                      <SkillBadge key={skill} name={skill} glow="magenta" />
                    ))}
                  </div>
                </motion.div>

                <motion.div variants={fadeUp} className="glass p-6 rounded-2xl">
                  <h3 className="text-xl font-semibold mb-6 text-cyan-300 border-b border-border pb-2">Databases</h3>
                  <div className="flex flex-wrap gap-3">
                    {["PostgreSQL", "SQL Server", "MySQL", "Supabase", "Prisma ORM"].map(skill => (
                      <SkillBadge key={skill} name={skill} glow="cyan" />
                    ))}
                  </div>
                </motion.div>

                <motion.div variants={fadeUp} className="glass p-6 rounded-2xl">
                  <h3 className="text-xl font-semibold mb-6 text-magenta-300 border-b border-border pb-2">Tools & AI</h3>
                  <div className="flex flex-wrap gap-3">
                    {["Git/GitHub", "Vercel", "Google Gemini API", "Groq (Llama)", "Tavily API", "PyInstaller"].map(skill => (
                      <SkillBadge key={skill} name={skill} glow="magenta" />
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="py-24 container mx-auto px-6 max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            <SectionHeading title="Professional Experience" />

            <div className="mt-16 relative before:absolute before:inset-0 before:ml-5 md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-cyan-500 before:via-magenta-500 before:to-transparent">
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-cyan-500 shadow shadow-cyan-500/50 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 ml-[2px] md:ml-0 z-10 neon-glow-cyan"></div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass p-8 rounded-2xl shadow-xl ml-4 md:ml-0">
                  <div className="flex flex-col mb-4">
                    <span className="text-cyan-400 font-mono text-sm mb-1">Summer Internship</span>
                    <h3 className="text-2xl font-bold text-foreground">Software Engineering Intern</h3>
                    <h4 className="text-lg font-medium text-magenta-300">VN Code Pro</h4>
                  </div>
                  <ul className="space-y-3 text-beige-DEFAULT/80 text-sm list-disc pl-4">
                    <li>Developed the "VN Code Pro Blog Bot," an autonomous AI blog generation pipeline using Python and FastAPI.</li>
                    <li>Integrated Groq (Llama 70B) and Google Gemini 2.5 Flash for content generation and fact-checking via Tavily.</li>
                    <li>Engineered custom API key manager with automatic rotation and exponential backoff.</li>
                    <li>Connected backend to Supabase and custom CMS API for automated publishing.</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="py-24 bg-surface/30">
          <div className="container mx-auto px-6 max-w-7xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <SectionHeading title="Featured Projects" />

              <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mt-12">
                <motion.div variants={fadeUp}>
                  <ProjectCard
                    title="PNP CRM"
                    description="Full-stack CRM platform for an interior design live client. Manages customer lifecycle, PDF quotes, and project tracking with secure NextAuth.js access control."
                    image="/images/pnp_crm_logo.png"
                    tags={["Next.js", "TypeScript", "Prisma", "@dnd-kit"]}
                    glowColor="cyan"
                  />
                </motion.div>

                <motion.div variants={fadeUp}>
                  <ProjectCard
                    title="FinTeam | Finance As A Service"
                    description="SaaS platform with customer marketing site and secure admin dashboard. Features Gemini AI email draft generation and custom session-based auth."
                    image="/images/finteam_logo.svg"
                    tags={["Next.js", "PostgreSQL (Neon)", "Gemini API", "Recharts"]}
                    liveUrl="https://finteam-f3qv.vercel.app"
                    glowColor="magenta"
                  />
                </motion.div>

                <motion.div variants={fadeUp}>
                  <ProjectCard
                    title="Furnish & Florish"
                    description="Responsive web application for the furniture and interior domain utilizing ASP.NET framework and C# logic with custom CSS styling."
                    image="/images/furnish_logo.jpg"
                    tags={["ASP.NET", "C#", "CSS"]}
                    githubUrl="https://github.com/ManavSurani/Furnish-Florish"
                    glowColor="cyan"
                  />
                </motion.div>
                
                <motion.div variants={fadeUp}>
                  <ProjectCard
                    title="Print-any-folder-and-file"
                    description="Modern Python/PyQt5 desktop app that generates visual directory structures and extracts file contents for LLM context. Supports 100+ extensions and PDFs."
                    image="/images/print_folder_logo.ico"
                    tags={["Python", "PyQt5", "PyPDF2", "PyInstaller"]}
                    glowColor="magenta"
                  />
                </motion.div>
                
                <motion.div variants={fadeUp}>
                  <ProjectCard
                    title="VN Code Pro Blog Bot"
                    description="Fully autonomous AI blog generation pipeline built with Python and FastAPI to write, fact-check, and publish SEO-optimized content."
                    image="/images/blog_bot_logo.jpg"
                    tags={["Python", "FastAPI", "Groq", "Gemini 2.5", "Supabase"]}
                    glowColor="cyan"
                  />
                </motion.div>
                
                <motion.div variants={fadeUp}>
                  <ProjectCard
                    title="Furniture Management System"
                    description="Robust Windows Desktop Application to streamline furniture business operations with billing, automated pricing, and .rdlc report generation."
                    image="/images/furniture_app_logo.jpg"
                    tags={["VB.NET", "WinForms", "SQL Server"]}
                    glowColor="magenta"
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
            <SectionHeading title="Certifications" />
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {[
                { title: "Create a Simple Desktop App with VB.NET", org: "Coursera", link: "https://coursera.org/verify/WFGTCRX37Y5U" },
                { title: "Introduction to Artificial Intelligence (AI)", org: "Coursera", link: "https://coursera.org/verify/DDJMXN8R8I7K" },
                { title: "Introduction to Java", org: "Coursera", link: "https://coursera.org/verify/YB5UHWVEU5SU" },
                { title: "Introduction to Python", org: "Coursera", link: "https://coursera.org/verify/A62WU69BGJZN" },
                { title: "Introduction to R Programming for Data Science", org: "Coursera", link: "https://coursera.org/verify/KPM8SU4Y6H28" },
                { title: "Using MySQL Database with PHP", org: "Coursera", link: "https://coursera.org/verify/DRZX5OUPKU3O" }
              ].map((cert, index) => (
                <motion.a 
                  key={index}
                  variants={fadeUp}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass p-6 rounded-xl border border-border/50 hover:border-cyan-500/50 hover:neon-glow-cyan transition-all duration-300 group flex flex-col justify-between h-full"
                >
                  <div>
                    <h4 className="font-bold text-foreground group-hover:text-cyan-200 transition-colors">{cert.title}</h4>
                    <p className="text-magenta-400 text-sm mt-2">{cert.org}</p>
                  </div>
                  <div className="mt-4 text-xs text-beige-DEFAULT/60 flex items-center gap-1">
                    <ExternalLink size={12} /> Verify Credential
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-24 bg-surface/30 border-t border-border/50">
          <div className="container mx-auto px-6 max-w-3xl text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-magenta-500">
                Let's Build Something Great
              </h2>
              <p className="text-lg text-beige-DEFAULT/80 mb-10">
                I'm currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is always open!
              </p>
              
              <a href="mailto:manavsurani982@gmail.com">
                <Button variant="primary" size="lg" className="text-lg px-12 py-4">
                  Say Hello
                </Button>
              </a>
            </motion.div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
