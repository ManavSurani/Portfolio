"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
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
