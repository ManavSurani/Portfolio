"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail } from "lucide-react";

/**
 * MobileCTA — Phase B1 & B3
 * Slim fixed bar at the bottom of the viewport, mobile-only (md:hidden).
 * Appears after scrolling 500px past the top (past the Hero).
 * Slides up from y:100 → y:0 on appear, reverses on hide.
 * Uses safe-area-inset-bottom for correct iPhone home-bar handling.
 *
 * B3 Polish:
 * Gives a single subtle scale pulse on first appearance, never repeating
 * on subsequent scroll triggers.
 */
export function MobileCTA() {
  const [visible, setVisible] = useState(false);
  const hasAnimated = useRef(false);

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
          onAnimationComplete={() => {
            if (!hasAnimated.current) {
              hasAnimated.current = true;
            }
          }}
          className="md:hidden fixed bottom-0 left-0 right-0 z-40 px-4 pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom,0px))] bg-background/90 backdrop-blur-md border-t border-border/60"
        >
          <a href="#contact" className="block">
            <motion.button
              animate={!hasAnimated.current ? { scale: [1, 1.05, 1] } : {}}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.35 }}
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
