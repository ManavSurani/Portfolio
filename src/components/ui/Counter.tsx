"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

interface CounterProps {
  to: number;
  decimals?: number;
  suffix?: string;
}

/**
 * Counter — Phase 1.3
 * Animates a number from 0 to `to` on mount.
 * duration: 1.2s, ease: "easeOut" — number "settles" into place.
 * [to] dep array: prevents re-trigger on unrelated re-renders.
 */
export function Counter({ to, decimals = 0, suffix = "" }: CounterProps) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => v.toFixed(decimals) + suffix);

  useEffect(() => {
    const controls = animate(count, to, { duration: 1.2, ease: "easeOut" });
    return controls.stop;
  }, [to]);

  return <motion.span>{rounded}</motion.span>;
}
