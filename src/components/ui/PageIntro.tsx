"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * PageIntro — Phase C1
 * One-time-per-session branded wipe transition on first page load.
 * A navy panel wipes downward off-screen via clipPath, revealing the Hero.
 *
 * sessionStorage flag: runs once per browser session — never replays on
 * navigation, scroll-to-top, or re-renders. Incognito = fresh play.
 *
 * Total duration: 750ms + 100ms delay = ~850ms — under the 1s rule.
 * pointer-events-none: Hero entrance animation runs concurrently, not blocked.
 * onAnimationComplete: unmounts the element cleanly — no lingering DOM node.
 *
 * Colors: navy-DEFAULT background, sand-DEFAULT monogram — existing tokens.
 * z-[100]: above everything during the wipe, gone immediately afterward.
 */
export function PageIntro() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Deliberately not a lazy useState initializer: sessionStorage is a
    // browser-only API. Reading it during the initial render would produce
    // a different value on the server (always "unseen") than on the client
    // (may already be "seen"), causing a hydration mismatch. Gating this in
    // an effect guarantees the server-rendered markup and the first client
    // render agree (show=false), and only updates after hydration completes.
    if (!sessionStorage.getItem("intro_seen")) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setShow(true);
      sessionStorage.setItem("intro_seen", "1");
    }
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ clipPath: "inset(0% 0% 0% 0%)" }}
          animate={{ clipPath: "inset(0% 0% 100% 0%)" }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          onAnimationComplete={() => setShow(false)}
          className="fixed inset-0 z-[100] bg-navy-DEFAULT flex items-center justify-center pointer-events-none"
        >
          {/* Simple monogram — existing tokens, no new colors */}
          <span className="text-3xl font-bold tracking-tight text-sand-DEFAULT font-sans select-none opacity-60">
            MS
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
