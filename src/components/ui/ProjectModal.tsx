"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Play, CheckCircle2, Cpu, Database, Layers, Code2 } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Button } from "./Button";
import { SkillBadge } from "./SkillBadge";

export interface ProjectDetailData {
  title: string;
  category: string;
  description: string;
  fullOverview: string;
  architectureDetails: string[];
  keyImpact: string[];
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  videoThumbnail?: string;
  videoTitle?: string;
  galleryImages?: string[];
}

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: ProjectDetailData | null;
}

export function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-navy-dark/65 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-4xl max-h-[88vh] bg-[#F6F3EE] rounded-[32px] border border-sand-DEFAULT shadow-[0_25px_60px_-15px_rgba(27,42,74,0.3)] flex flex-col overflow-hidden z-10"
          >
            {/* Modal Header */}
            <div className="p-6 sm:p-8 bg-white/80 backdrop-blur-md border-b border-border/80 flex items-start justify-between gap-4 shrink-0">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-2xl bg-white border border-sand-DEFAULT p-3 shadow-xs flex items-center justify-center shrink-0 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={`${project.title} logo`}
                    width={48}
                    height={48}
                    className="object-contain max-h-full max-w-full"
                  />
                </div>
                <div>
                  <span className="text-[11px] font-mono font-bold tracking-wider uppercase text-steel-DEFAULT bg-steel-DEFAULT/10 border border-steel-DEFAULT/15 px-3 py-1 rounded-full inline-block mb-2">
                    {project.category}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-navy-DEFAULT">
                    {project.title}
                  </h2>
                </div>
              </div>

              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-white border border-sand-DEFAULT text-navy-DEFAULT hover:bg-navy-DEFAULT hover:text-white flex items-center justify-center transition-all shadow-xs shrink-0"
                aria-label="Close Modal"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Body (Scrollable) */}
            <div className="p-6 sm:p-8 space-y-8 overflow-y-auto flex-1 custom-scrollbar">
              {/* Media & Video Demonstration Container */}
              <div className="space-y-3">
                <h3 className="text-xs font-mono font-bold tracking-widest uppercase text-steel-DEFAULT">
                  Application Demonstration & Screenshots
                </h3>

                <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden bg-navy-dark/90 border border-sand-DEFAULT shadow-md group">
                  <Image
                    src={project.videoThumbnail || project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 1200px) 100vw, 900px"
                    className="object-cover opacity-85 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-DEFAULT/90 via-navy-DEFAULT/30 to-transparent" />

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 text-white">
                    <div className="w-16 h-16 rounded-full bg-white/95 text-navy-DEFAULT shadow-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                      <Play size={26} className="ml-1 fill-navy-DEFAULT" />
                    </div>
                    <span className="text-sm font-semibold tracking-wide drop-shadow-sm">
                      {project.videoTitle || `Watch ${project.title} Live Demo Video`}
                    </span>
                    <span className="text-xs text-sand-DEFAULT/80 font-mono mt-1">
                      Interactive Showcase & Workflow
                    </span>
                  </div>
                </div>
              </div>

              {/* Overview Section */}
              <div className="glass-card p-6 sm:p-8 rounded-2xl space-y-3">
                <div className="flex items-center gap-2 text-navy-DEFAULT">
                  <Code2 size={20} />
                  <h3 className="text-lg font-bold">System Purpose & Overview</h3>
                </div>
                <p className="text-muted leading-relaxed text-sm sm:text-base font-normal">
                  {project.fullOverview}
                </p>
              </div>

              {/* Engineering Highlights */}
              <div className="glass-card p-6 sm:p-8 rounded-2xl space-y-4">
                <div className="flex items-center gap-2 text-navy-DEFAULT">
                  <Cpu size={20} />
                  <h3 className="text-lg font-bold">Key Engineering Highlights & Architecture</h3>
                </div>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {project.architectureDetails.map((item, index) => (
                    <li key={index} className="flex items-start gap-2.5 text-sm text-muted">
                      <CheckCircle2 size={16} className="text-navy-DEFAULT shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies Used */}
              <div className="space-y-3">
                <h3 className="text-xs font-mono font-bold tracking-widest uppercase text-steel-DEFAULT">
                  Technologies & Frameworks
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <SkillBadge key={tag} name={tag} variant="navy" />
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer Actions */}
            <div className="p-6 bg-white/90 border-t border-border/80 flex flex-wrap items-center justify-between gap-4 shrink-0">
              <div className="flex items-center gap-3">
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="gap-2">
                      <FaGithub size={16} />
                      <span>Source Code</span>
                    </Button>
                  </a>
                )}
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="primary" size="sm" className="gap-2">
                      <ExternalLink size={16} />
                      <span>Launch Live App</span>
                    </Button>
                  </a>
                )}
              </div>

              <Button variant="ghost" size="sm" onClick={onClose}>
                Close Details
              </Button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
