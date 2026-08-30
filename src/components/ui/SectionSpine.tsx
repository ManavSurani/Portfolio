"use client";

import { useRef } from "react";
import { motion, useScroll } from "framer-motion";

/**
 * SectionSpine — Phase 2.2
 * A 2px vertical reading spine that fills navy top-to-bottom
 * as the user scrolls through the About→Projects sections.
 *
 * Desktop-only: hidden xl:block — no spare gutter below xl breakpoint.
 * Positioning: absolute left-0 inside a relative wrapper that spans
 * the About→Projects block in page.tsx. The wrapper sits outside
 * max-w-7xl so the spine lives in the page margin, never overlapping content.
 *
 * Colors: sand-DEFAULT track, navy-DEFAULT fill — existing tokens only.
 * Animation: scaleY only (GPU transform). No looping.
 */
export function SectionSpine() {
  const spineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: spineRef,
    offset: ["start center", "end center"],
  });

  return (
    <div
      ref={spineRef}
      className="hidden xl:block absolute left-8 top-0 bottom-0 w-[2px] bg-sand-DEFAULT pointer-events-none"
    >
      <motion.div
        style={{ scaleY: scrollYProgress, transformOrigin: "top" }}
        className="w-full h-full bg-navy-DEFAULT"
      />
    </div>
  );
}
