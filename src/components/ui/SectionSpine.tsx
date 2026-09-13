"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";

/**
 * SectionSpine — Phase A3 & B2
 * Adds scroll-linked progress nodes at each section entry point with hover tooltips.
 * Each node transitions sand→navy and scales up when its section is active.
 *
 * Visual:
 * - left-16 (64px) margin from edge — clear separation from browser UI
 * - w-[3px] rounded-full with sand-DEFAULT/60 track
 *
 * Robustness:
 * - Recomputes on font ready + 500ms timeout fallback for layout stabilization
 *
 * Tooltip (Phase B2):
 * - Hovering node displays label (About, Skills, Experience, Projects)
 *
 * Desktop-only: hidden xl:block. Passive indicators (no second navigation system).
 */

const SPINE_SECTIONS = ["about", "skills", "experience", "projects"];

const SECTION_LABELS: Record<string, string> = {
  about: "About",
  skills: "Skills",
  experience: "Experience",
  projects: "Projects",
};

export function SectionSpine() {
  const spineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: spineRef,
    offset: ["start center", "end center"],
  });

  const [nodeOffsets, setNodeOffsets] = useState<Record<string, number>>({});
  const [totalHeight, setTotalHeight] = useState(0);
  const [activeSection, setActiveSection] = useState("");

  // Compute node positions & wrapper height once on mount (relative to spine wrapper top)
  useEffect(() => {
    const wrapper = spineRef.current;
    if (!wrapper) return;

    const computeOffsets = () => {
      const wrapperTop = wrapper.getBoundingClientRect().top + window.scrollY;
      const wrapperHeight = wrapper.getBoundingClientRect().height;
      setTotalHeight(wrapperHeight);

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

    // A3 Robustness: Recompute when fonts/images settle
    if (typeof document !== "undefined" && document.fonts) {
      document.fonts.ready.then(computeOffsets);
    }
    const timeout = setTimeout(computeOffsets, 500);

    // Recompute if window resizes (content reflows)
    window.addEventListener("resize", computeOffsets, { passive: true });
    return () => {
      clearTimeout(timeout);
      window.removeEventListener("resize", computeOffsets);
    };
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

  const pathD = `M 1.5 0 L 1.5 ${totalHeight || 1000}`;


  return (
    <div
      ref={spineRef}
      className="hidden xl:block absolute left-16 top-0 bottom-0 pointer-events-none"
    >
      {/* SVG S-curve line (Part 3) */}
      {totalHeight > 0 && (
        <svg
          className="absolute left-0 top-0 z-10 pointer-events-none overflow-visible"
          width="3"
          height={totalHeight}
          viewBox={`0 0 3 ${totalHeight}`}
        >
          {/* Track (replaces the old sand-colored div) */}
          <path
            d={pathD}
            stroke="var(--color-sand-DEFAULT)"
            strokeOpacity={0.6}
            strokeWidth={3}
            strokeLinecap="round"
            fill="none"
          />
          {/* Scroll-linked fill (pathLength handles curve natively) */}
          <motion.path
            d={pathD}
            stroke="var(--color-navy-DEFAULT)"
            strokeWidth={3}
            strokeLinecap="round"
            fill="none"
            style={{ pathLength: scrollYProgress }}
          />
        </svg>
      )}

      {/* C4 / B2 — Section progress nodes & hover tooltips */}
      {SPINE_SECTIONS.map((id) =>
        nodeOffsets[id] !== undefined ? (
          <div
            key={id}
            className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
            style={{ left: "1.5px", top: nodeOffsets[id] }}
          >
            <div className="group relative flex items-center justify-center p-1 cursor-default">
              <motion.div
                className="w-2.5 h-2.5 rounded-full"
                animate={{
                  backgroundColor:
                    activeSection === id
                      ? "var(--color-navy-DEFAULT)"
                      : "var(--color-sand-DEFAULT)",
                  scale: activeSection === id ? 1.4 : 1,
                }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              />

              {/* B2 — Tooltip label on hover */}
              <span className="absolute left-6 top-1/2 -translate-y-1/2 whitespace-nowrap text-[11px] font-mono font-semibold text-navy-DEFAULT bg-white/95 border border-sand-DEFAULT px-2.5 py-1 rounded-md shadow-sm pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                {SECTION_LABELS[id]}
              </span>
            </div>
          </div>
        ) : null
      )}
    </div>
  );
}
