"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail } from "lucide-react";

/**
 * MobileCTA — Phase B1 & B3 (bugfix pass)
 * Slim fixed bar at the bottom of the viewport, mobile-only (md:hidden).
 * Appears after scrolling 500px past the top (past the Hero).
 * Slides up from y:100 → y:0 on appear, reverses on hide.
 * Uses safe-area-inset-bottom for correct iPhone home-bar handling.
 *
 * B3 Polish:
 * Gives a single subtle scale pulse on first appearance, never repeating
 * on subsequent scroll triggers.
 *
 * Bugfix: `hasAnimated` is state, not a ref — a ref mutation never
 * schedules a re-render, so reading `.current` inside JSX (the previous
 * version) only "worked" by coincidence of an unrelated re-render.
 * The flag is now flipped by the BUTTON's own onAnimationComplete
 * (fires at delay 0.35s + duration 0.4s ≈ 750ms), not the outer
 * wrapper's slide-in (which finishes at 300ms) — flipping it that early
 * would have cut the pulse off before it ever started playing.
 */
export function MobileCTA() {
  const [visible, setVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="md:hidden fixed bottom-0 left-0 right-0 z-40 px-4 pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom,0px))] bg-background/90 backdrop-blur-md border-t border-border/60"
        >
          <a href="#contact" className="block">
            <motion.button
              animate={!hasAnimated ? { scale: [1, 1.05, 1] } : {}}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.35 }}
              onAnimationComplete={() => setHasAnimated(true)}
              className="w-full bg-navy-DEFAULT text-white text-sm font-semibold py-3 rounded-2xl flex items-center justify-center gap-2 shadow-md active:opacity-90 transition-opacity"
            >
              <Mail size={16} />
              Get in Touch
            </motion.button>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
