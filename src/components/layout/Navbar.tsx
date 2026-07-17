"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-border/50 shadow-lg" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        <Link href="#" className="text-xl font-bold tracking-tighter">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-magenta-500">
            MS.
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-foreground/80 hover:text-cyan-300 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile menu could be added here later */}
        <div className="md:hidden">
           <span className="text-cyan-400 font-bold">MS.</span>
        </div>
      </div>
    </header>
  );
}
