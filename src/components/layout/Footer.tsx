import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background py-12">
      <div className="container mx-auto px-6 max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold tracking-tight mb-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-magenta-500">
            Manav Surani
          </h3>
          <p className="text-beige-DEFAULT/60 text-sm">
            Full-Stack Software Engineer & AI Integrator.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="mailto:manavsurani982@gmail.com"
            className="text-foreground/60 hover:text-cyan-400 transition-colors hover:neon-glow-cyan rounded-full p-2"
          >
            <Mail size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/manav-surani-5a658b372"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/60 hover:text-cyan-400 transition-colors hover:neon-glow-cyan rounded-full p-2"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://github.com/ManavSurani"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/60 hover:text-magenta-400 transition-colors hover:neon-glow-magenta rounded-full p-2"
          >
            <FaGithub size={24} />
          </a>
        </div>
      </div>
      
      <div className="mt-8 text-center text-xs text-foreground/40">
        &copy; {new Date().getFullYear()} Manav Surani. All rights reserved.
      </div>
    </footer>
  );
}
