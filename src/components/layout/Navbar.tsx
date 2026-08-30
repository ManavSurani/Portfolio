"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/Button";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const triggerRef = useRef<HTMLButtonElement>(null);

  // Scroll background listener
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Keyboard Escape listener for mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && menuOpen) {
        setMenuOpen(false);
        triggerRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  // Desktop active section IntersectionObserver
  useEffect(() => {
    const sectionIds = ["about", "skills", "experience", "projects"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: 0,
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
        scrolled ? "glass-nav py-3.5" : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        <Link href="#" className="flex items-center gap-2.5 group">
          {/* Profile Photo — replaces MS initials */}
          <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-sand-DEFAULT shadow-sm group-hover:ring-2 group-hover:ring-navy-DEFAULT/25 transition-all duration-300 shrink-0">
            <Image
              src="/images/profile_suite.png"
              alt="Manav Surani"
              width={36}
              height={36}
              className="object-cover object-top w-full h-full"
            />
          </div>
          {/* Two-line stacked name identity */}
          <div className="hidden sm:flex flex-col leading-none">
            <span className="text-sm font-bold tracking-tight text-navy-DEFAULT">
              Manav Surani
            </span>
            <span className="text-[10px] font-mono font-semibold text-steel-DEFAULT uppercase tracking-widest mt-0.5">
              Full-Stack Engineer
            </span>
          </div>
        </Link>

        {/* Desktop Navigation with Active Section Pill */}
        <nav className="hidden md:flex items-center gap-1 bg-white/70 backdrop-blur-md border border-sand-DEFAULT/60 p-1.5 rounded-full shadow-sm">
          {navLinks.map((link) => {
            const sectionId = link.href.slice(1);
            const isActive = activeSection === sectionId;
            return (
              <Link
                key={link.name}
                href={link.href}
                className="relative px-4 py-2 rounded-full text-xs font-mono font-medium z-10"
              >
                {isActive && (
                  <motion.span
                    layoutId="active-pill"
                    className="absolute inset-0 bg-cream-hover rounded-full -z-10"
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  />
                )}
                <span
                  className={cn(
                    "transition-colors duration-150",
                    isActive
                      ? "text-navy-DEFAULT font-bold"
                      : "text-foreground/80 hover:text-navy-DEFAULT"
                  )}
                >
                  {link.name}
                </span>
              </Link>
            );
          })}
        </nav>

        {/* Desktop Action & Mobile Trigger */}
        <div className="flex items-center gap-3">
          <a href="#contact" className="hidden sm:inline-block">
            <Button variant="primary" size="sm" className="shadow-sm text-xs px-5">
              Get in Touch
            </Button>
          </a>

          {/* Mobile Hamburger Button */}
          <button
            ref={triggerRef}
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            className="md:hidden w-9 h-9 rounded-full bg-white border border-sand-DEFAULT flex items-center justify-center text-navy-DEFAULT shadow-sm focus:outline-hidden focus-visible:ring-2 focus-visible:ring-navy-DEFAULT/40 transition-colors"
          >
            <motion.div
              initial={false}
              animate={{ rotate: menuOpen ? 90 : 0 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="flex items-center justify-center"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </motion.div>
          </button>
        </div>
      </div>

      {/* Mobile Slide-Down Menu Panel */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden glass-nav rounded-2xl mt-2 mx-6 border border-sand-DEFAULT/80 shadow-lg"
          >
            <motion.nav
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
              className="flex flex-col p-3"
            >
              {navLinks.map((link) => (
                <motion.div
                  key={link.name}
                  variants={{
                    hidden: { opacity: 0, y: 12 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block px-4 py-3 text-sm font-mono font-medium text-foreground/80 hover:text-navy-DEFAULT hover:bg-cream-hover rounded-xl transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="pt-2 px-2 pb-1 border-t border-sand-DEFAULT/40 mt-1"
              >
                <a href="#contact" onClick={() => setMenuOpen(false)}>
                  <Button variant="primary" size="sm" className="w-full text-xs shadow-sm">
                    Get in Touch
                  </Button>
                </a>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
