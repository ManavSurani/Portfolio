import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="border-t border-border/80 bg-background py-12">
      <div className="container mx-auto px-6 max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2.5 mb-2">
            <div className="w-7 h-7 rounded-full bg-navy-DEFAULT text-white flex items-center justify-center font-bold text-xs">
              MS
            </div>
            <h3 className="text-lg font-bold tracking-tight text-navy-DEFAULT">
              Manav Surani
            </h3>
          </div>
          <p className="text-muted text-xs font-medium">
            Full-Stack Software Engineer & AI Integrator • MSc IT Scholar
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="mailto:manavsurani982@gmail.com"
            title="Email"
            className="w-10 h-10 rounded-full bg-white border border-border text-navy-DEFAULT hover:bg-navy-DEFAULT hover:text-white hover:border-navy-DEFAULT flex items-center justify-center transition-all duration-300 shadow-sm"
          >
            <Mail size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/manav-surani-5a658b372"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
            className="w-10 h-10 rounded-full bg-white border border-border text-navy-DEFAULT hover:bg-navy-DEFAULT hover:text-white hover:border-navy-DEFAULT flex items-center justify-center transition-all duration-300 shadow-sm"
          >
            <FaLinkedin size={18} />
          </a>
          <a
            href="https://github.com/ManavSurani"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
            className="w-10 h-10 rounded-full bg-white border border-border text-navy-DEFAULT hover:bg-navy-DEFAULT hover:text-white hover:border-navy-DEFAULT flex items-center justify-center transition-all duration-300 shadow-sm"
          >
            <FaGithub size={18} />
          </a>
        </div>
      </div>
      
      <div className="mt-8 pt-6 border-t border-border/40 container mx-auto px-6 max-w-7xl flex flex-col sm:flex-row items-center justify-between text-xs text-muted">
        <p>&copy; {new Date().getFullYear()} Manav Surani. Built with Next.js & Tailwind CSS.</p>
        <p className="mt-2 sm:mt-0 font-mono text-[11px]">Surat, Gujarat, India</p>
      </div>
    </footer>
  );
}
