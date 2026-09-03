"use client";

import { useRef, useEffect } from "react";
import { motion, useInView, Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Button } from "./Button";
import { Counter } from "./Counter";
import { SkillBadge } from "./SkillBadge";
import { ProjectDetailData } from "./ProjectModal";
import { useCanHover, useTiltHandlers } from "./ProjectCard";

interface FlagshipProjectProps {
  project: ProjectDetailData & {
    id: string;
    shortDesc: string;
    image: string;
    tags: string[];
    liveUrl?: string;
    githubUrl: string;
    videoUrl?: string;
  };
  onOpenModal: () => void;
}

const flagshipStagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const badgeStagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.03 } },
};

const badgeFadeUp: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.25, ease: "easeOut" } },
};

export function FlagshipProject({ project, onOpenModal }: FlagshipProjectProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const mediaContainerRef = useRef<HTMLDivElement>(null);
  const isMediaInView = useInView(mediaContainerRef, { margin: "0px" });

  const canHover = useCanHover();
  const { rotateX, rotateY, onMouseMove, onMouseLeave } = useTiltHandlers(3);

  // Visibility-driven video playback — pause when scrolled out of view to preserve CPU/battery
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isMediaInView) {
      video.play().catch(() => {
        // Autoplay may be deferred or blocked by browser policy until interaction
      });
    } else {
      video.pause();
    }
  }, [isMediaInView]);

  return (
    <div className="relative rounded-[32px] p-6 sm:p-10 lg:p-12 glass-card border border-sand-DEFAULT shadow-[0_20px_50px_-15px_rgba(27,42,74,0.08)] overflow-hidden mb-16">
      {/* Part 5: Static ambient radial glow backdrop (1-shot fade-in, no infinite loops) */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute -inset-8 -z-10 bg-[radial-gradient(ellipse_at_center,var(--color-navy-DEFAULT)_0%,transparent_70%)] opacity-[0.04] pointer-events-none"
      />

      <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Part 2: Media Panel (Leads on mobile on top, left side on lg:+) */}
        <motion.div
          ref={mediaContainerRef}
          style={canHover ? { perspective: 1000, rotateX, rotateY } : undefined}
          onMouseMove={canHover ? onMouseMove : undefined}
          onMouseLeave={canHover ? onMouseLeave : undefined}
          className="lg:col-span-6 xl:col-span-7 transition-transform duration-200"
        >
          <motion.div
            initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
            whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative rounded-[24px] sm:rounded-[28px] overflow-hidden aspect-video bg-navy-DEFAULT shadow-md border border-sand-DEFAULT/80 group"
          >
            <video
              ref={videoRef}
              src={project.videoUrl || "/images/pnp_crm_demo.webm"}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-DEFAULT/30 via-transparent to-transparent pointer-events-none" />
          </motion.div>
        </motion.div>

        {/* Part 3: Content Panel with Sequenced Stagger */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={flagshipStagger}
          className="lg:col-span-6 xl:col-span-5 space-y-5 flex flex-col justify-between"
        >
          {/* 1. Eyebrow Badge */}
          <motion.div variants={fadeUp}>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-steel-DEFAULT/10 border border-steel-DEFAULT/20 text-steel-DEFAULT text-xs font-mono font-semibold uppercase tracking-wider">
              ✦ Flagship Project
            </span>
          </motion.div>

          {/* 2. Project Title */}
          <motion.h3
            variants={fadeUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-navy-DEFAULT leading-[1.1]"
          >
            {project.title}
          </motion.h3>

          {/* 3. Description */}
          <motion.p
            variants={fadeUp}
            className="text-muted text-sm sm:text-base leading-relaxed font-normal"
          >
            {project.shortDesc || project.description}
          </motion.p>

          {/* 4. Big Stat & Honest Before/After Visualizer */}
          <motion.div variants={fadeUp} className="py-2 space-y-3">
            <div className="flex items-center gap-5">
              <div className="text-4xl sm:text-5xl font-bold text-navy-DEFAULT tracking-tight">
                <Counter to={75} suffix="%" />
              </div>
              <div className="text-xs sm:text-sm text-muted leading-snug max-w-[200px]">
                faster invoice creation for interior design client projects
              </div>
            </div>

            {/* Before / After comparative bars (truthful 75% reduction visualization) */}
            <div className="space-y-2 pt-2 border-t border-border/40">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-muted w-14 shrink-0">Before</span>
                <div className="flex-1 h-2 rounded-full bg-sand-DEFAULT/60 overflow-hidden">
                  <div className="h-full w-full bg-steel-DEFAULT/50 rounded-full" />
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-muted w-14 shrink-0">After</span>
                <div className="flex-1 h-2 rounded-full bg-sand-DEFAULT/60 overflow-hidden">
                  <motion.div
                    initial={{ scaleX: 1 }}
                    whileInView={{ scaleX: 0.25 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                    style={{ transformOrigin: "left" }}
                    className="h-full bg-navy-DEFAULT rounded-full"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* 5. Technology Stack Tags */}
          <motion.div variants={badgeStagger} className="flex flex-wrap gap-2 pt-1">
            {project.tags.map((tag) => (
              <motion.div key={tag} variants={badgeFadeUp}>
                <SkillBadge name={tag} variant="minimal" />
              </motion.div>
            ))}
          </motion.div>

          {/* 6. CTA Action Buttons (Strict: No magnetic effect) */}
          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button variant="outline" size="md" className="gap-2 text-xs sm:text-sm">
                <FaGithub size={16} />
                <span>Source Code</span>
              </Button>
            </a>

            <Button
              onClick={onOpenModal}
              variant="primary"
              size="md"
              className="gap-2 text-xs sm:text-sm shadow-md"
            >
              <span>View Case Study</span>
              <ArrowUpRight size={16} />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
