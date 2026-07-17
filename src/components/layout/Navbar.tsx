"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
        scrolled ? "glass-nav py-3.5" : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        <Link href="#" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-full bg-navy-DEFAULT text-white flex items-center justify-center font-bold text-sm shadow-sm group-hover:bg-navy-dark transition-colors">
            MS
          </div>
          <span className="text-base font-bold tracking-tight text-navy-DEFAULT hidden sm:inline-block">
            Manav Surani
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1 bg-white/70 backdrop-blur-md border border-sand-DEFAULT/60 p-1.5 rounded-full shadow-sm">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-xs font-mono font-medium text-foreground/80 hover:text-navy-DEFAULT hover:bg-cream-hover px-4 py-2 rounded-full transition-all"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href="#contact">
            <Button variant="primary" size="sm" className="shadow-sm text-xs px-5">
              Get in Touch
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
}
