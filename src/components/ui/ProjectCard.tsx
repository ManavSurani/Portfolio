"use client";

import { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Maximize2 } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { Button } from "./Button";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  className?: string;
  category?: string;
  onOpenModal?: () => void;
}

/**
 * useCanHover — bugfix pass
 * Real hover-capability check via matchMedia, rather than assuming touch
 * devices never fire `mousemove`. Many mobile browsers synthesize a single
 * mousemove+click sequence after a tap for legacy compatibility, which
 * would otherwise cause a one-frame tilt "snap" right before the modal
 * opens. Also correctly allows hybrid devices (trackpad-equipped
 * tablets/laptops) to get the effect, rather than a blanket touch check.
 */
function useCanHover() {
  const [canHover, setCanHover] = useState(false);
  useEffect(() => {
    // Not a lazy useState initializer for the same reason as PageIntro:
    // matchMedia is unavailable during SSR, and checking it immediately on
    // the client's first render (rather than after mount) would make that
    // first render's `style`/handler output disagree with the server-
    // rendered markup — a hydration mismatch. Effect-gating keeps the
    // server and first-client-render output identical (canHover=false),
    // updating only after hydration completes.
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCanHover(mq.matches);
    const handler = (e: MediaQueryListEvent) => setCanHover(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return canHover;
}

/**
 * 2.3 — useTiltHandlers
 * Cursor-driven 3D tilt effect. Gated to real hover-capable pointers by
 * useCanHover() at the call site below, not by this hook itself.
 * Max tilt: ±4 degrees (premium subtlety, not a game UI).
 * useSpring smooths raw mouse values → fluid, not jittery.
 */
function useTiltHandlers() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [4, -4]), {
    stiffness: 150,
    damping: 15,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-4, 4]), {
    stiffness: 150,
    damping: 15,
  });
  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const onMouseLeave = () => {
    x.set(0);
    y.set(0);
  };
  return { rotateX, rotateY, onMouseMove, onMouseLeave };
}

export function ProjectCard({
  title,
  description,
  image,
  tags,
  liveUrl,
  githubUrl,
  className,
  category = "Featured Software",
  onOpenModal,
}: ProjectCardProps) {
  const { rotateX, rotateY, onMouseMove, onMouseLeave } = useTiltHandlers();
  const canHover = useCanHover();

  return (
    <motion.div
      onClick={onOpenModal}
      onMouseMove={canHover ? onMouseMove : undefined}
      onMouseLeave={canHover ? onMouseLeave : undefined}
      style={canHover ? { rotateX, rotateY, transformPerspective: 800 } : undefined}
      whileHover={{
        y: -5,
        boxShadow: "0 20px 35px -10px rgba(27,42,74,0.08), 0 0 1px 1px rgba(27,42,74,0.05)",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className={cn(
        // card-hover removed — lift+shadow now handled by whileHover above (same motion system as tilt)
        "glass-card rounded-[24px] p-7 border border-border/80 flex flex-col justify-between h-full min-h-[400px] relative overflow-hidden group cursor-pointer",
        className
      )}
    >
      {/* Decorative top ambient bar */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-navy-DEFAULT via-steel-DEFAULT to-sand-dark opacity-80 group-hover:opacity-100 transition-opacity duration-300" />

      <div>
        {/* Header row with un-stretched logo icon badge & category tag */}
        <div className="flex items-start justify-between gap-4 mb-5 pt-1">
          <div className="w-16 h-16 rounded-2xl bg-white border border-sand-DEFAULT p-3 shadow-xs flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300 overflow-hidden">
            <Image
              src={image}
              alt={`${title} logo`}
              width={48}
              height={48}
              className="object-contain max-h-full max-w-full"
            />
          </div>
          {category && (
            <span className="text-[11px] font-mono font-semibold tracking-wider uppercase text-steel-DEFAULT bg-steel-DEFAULT/10 border border-steel-DEFAULT/15 px-3 py-1 rounded-full">
              {category}
            </span>
          )}
        </div>

        {/* Title & Description */}
        <h3 className="text-2xl font-bold tracking-tight text-navy-DEFAULT mb-3 group-hover:text-navy-light transition-colors">
          {title}
        </h3>
        <p className="text-muted text-sm leading-relaxed mb-6 line-clamp-3">
          {description}
        </p>
      </div>

      <div>
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-background border border-border/70 text-foreground/80"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Buttons - Uniform across all cards */}
        <div className="flex items-center gap-2 pt-4 border-t border-border/40">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
              onClick={(e) => e.stopPropagation()}
            >
              <Button variant="outline" size="sm" className="w-full gap-1.5 text-xs px-3">
                <FaGithub size={13} />
                <span>Source</span>
              </Button>
            </a>
          )}

          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
              onClick={(e) => e.stopPropagation()}
            >
              <Button variant="primary" size="sm" className="w-full gap-1.5 text-xs px-3">
                <span>Live</span>
                <ArrowUpRight size={13} />
              </Button>
            </a>
          )}

          <Button
            variant="ghost"
            size="sm"
            className="gap-1 text-xs text-navy-DEFAULT hover:bg-navy-DEFAULT/10 shrink-0 px-3"
            onClick={(e) => {
              e.stopPropagation();
              onOpenModal?.();
            }}
          >
            <Maximize2 size={13} />
            <span>Details</span>
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
