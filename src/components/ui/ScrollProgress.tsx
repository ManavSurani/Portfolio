"use client";

import { motion, useScroll } from "framer-motion";

/**
 * ScrollProgress — Phase 1.2
 * A 2px gradient bar fixed to the top of the viewport.
 * Fills left-to-right proportional to page scroll depth.
 * z-[60]: sits above the navbar (z-50) at all times.
 * No transition/spring — direct 1:1 tracking is intentional.
 */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      style={{ scaleX: scrollYProgress }}
      className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-navy-light via-navy-DEFAULT to-steel-DEFAULT origin-left z-[60] pointer-events-none"
    />
  );
}
