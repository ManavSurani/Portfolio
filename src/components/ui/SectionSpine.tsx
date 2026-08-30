"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";

/**
 * SectionSpine — Phase C4 upgrade
 * Adds scroll-linked progress nodes at each section entry point.
 * Each node transitions sand→navy and scales up when its section is active.
 *
 * Uses its own lightweight IntersectionObserver scoped to the 4 spine sections
 * (about, skills, experience, projects). This is intentionally separate from
 * Navbar's observer — Navbar tracks its own active pill, SectionSpine tracks
 * its own node state. Both disconnect cleanly on unmount.
 *
 * Node positions: computed once on mount via getBoundingClientRect, relative
 * to the spine wrapper — never hardcoded pixel values.
 *
 * Desktop-only: hidden xl:block. Nodes are passive "you are here" indicators,
 * not clickable/navigable (no second navigation system).
 */

const SPINE_SECTIONS = ["about", "skills", "experience", "projects"];

export function SectionSpine() {
  const spineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: spineRef,
    offset: ["start center", "end center"],
  });

  const [nodeOffsets, setNodeOffsets] = useState<Record<string, number>>({});
  const [activeSection, setActiveSection] = useState("");

  // Compute node positions once on mount (relative to spine wrapper top)
  useEffect(() => {
    const wrapper = spineRef.current;
    if (!wrapper) return;

    const computeOffsets = () => {
      const wrapperTop = wrapper.getBoundingClientRect().top + window.scrollY;
      const offsets: Record<string, number> = {};
      SPINE_SECTIONS.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          offsets[id] = el.getBoundingClientRect().top + window.scrollY - wrapperTop;
        }
      });
      setNodeOffsets(offsets);
    };

    computeOffsets();
    // Recompute if window resizes (content reflows)
    window.addEventListener("resize", computeOffsets, { passive: true });
    return () => window.removeEventListener("resize", computeOffsets);
  }, []);

  // Lightweight IntersectionObserver for active section highlighting
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
    );

    SPINE_SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={spineRef}
      className="hidden xl:block absolute left-8 top-0 bottom-0 w-[2px] bg-sand-DEFAULT pointer-events-none"
    >
      {/* Scroll-fill line */}
      <motion.div
        style={{ scaleY: scrollYProgress, transformOrigin: "top" }}
        className="w-full h-full bg-navy-DEFAULT"
      />

      {/* C4 — Section progress nodes */}
      {SPINE_SECTIONS.map((id) =>
        nodeOffsets[id] !== undefined ? (
          <motion.div
            key={id}
            className="absolute left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full"
            style={{ top: nodeOffsets[id] }}
            animate={{
              backgroundColor:
                activeSection === id
                  ? "var(--color-navy-DEFAULT)"
                  : "var(--color-sand-DEFAULT)",
              scale: activeSection === id ? 1.4 : 1,
            }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          />
        ) : null
      )}
    </div>
  );
}
