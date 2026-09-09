"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ProjectCard } from "./ProjectCard";
import { ProjectDetailData } from "./ProjectModal";

type ProjectItem = ProjectDetailData & {
  id: string;
  shortDesc: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl: string;
  videoUrl?: string;
};

interface ProjectsHorizontalScrollProps {
  projects: ProjectItem[];
  onOpenModal: (project: ProjectItem) => void;
}

/**
 * ProjectsHorizontalScroll — Part 2
 * Desktop-only (xl:+) horizontal pin-scroll sequence.
 * Tuned specifically for 5 cards at 250vh wrapper height.
 * Sticky container stays pinned while cards pan horizontally across screen.
 */
export function ProjectsHorizontalScroll({
  projects,
  onOpenModal,
}: ProjectsHorizontalScrollProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end end"],
  });

  // 5 cards @ 420px + 4 gaps @ 32px (~2228px total row width).
  // Translates smoothly from starting left offset to flush end on right edge.
  const x = useTransform(scrollYProgress, [0, 1], ["2vw", "-110vw"]);

  return (
    <div
      ref={wrapperRef}
      className="hidden xl:block relative"
      style={{ height: "250vh" }}
    >
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        {/* Header anchor inside pinned screen */}
        <div className="container mx-auto px-6 max-w-7xl mb-2">
          <span className="text-xs font-mono font-bold tracking-wider text-steel-DEFAULT uppercase bg-steel-DEFAULT/10 border border-steel-DEFAULT/20 px-3.5 py-1.5 rounded-full inline-block">
            More Featured Systems
          </span>
          <h3 className="text-2xl lg:text-3xl font-bold tracking-tight text-navy-DEFAULT mt-3">
            Full-Stack, Desktop & AI Architectures
          </h3>
          <p className="text-sm text-muted mt-1">
            Scroll down to pan through production web applications and desktop utilities.
          </p>
        </div>

        {/* Panning cards track */}
        <motion.div style={{ x }} className="flex gap-8 mt-6 pl-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))] will-change-transform">
          {projects.map((project) => (
            <div key={project.id} className="w-[420px] shrink-0">
              <ProjectCard
                title={project.title}
                description={project.shortDesc}
                image={project.image}
                tags={project.tags}
                liveUrl={project.liveUrl}
                githubUrl={project.githubUrl}
                category={project.category}
                onOpenModal={() => onOpenModal(project)}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
