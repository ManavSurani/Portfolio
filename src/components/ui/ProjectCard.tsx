"use client";

import Image from "next/image";
import { ExternalLink, ArrowUpRight } from "lucide-react";
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
}: ProjectCardProps) {
  return (
    <div
      className={cn(
        "glass-card rounded-[24px] p-8 border border-border/80 flex flex-col justify-between card-hover relative overflow-hidden group",
        className
      )}
    >
      {/* Decorative top ambient bar */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-navy-DEFAULT via-steel-DEFAULT to-sand-dark opacity-80 group-hover:opacity-100 transition-opacity duration-300" />

      <div>
        {/* Header row with un-stretched logo icon badge & category tag */}
        <div className="flex items-start justify-between gap-4 mb-6 pt-1">
          <div className="w-16 h-16 rounded-2xl bg-white border border-sand-DEFAULT p-3 shadow-[0_4px_12px_rgba(27,42,74,0.06)] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300 overflow-hidden">
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

        {/* Action Buttons */}
        <div className="flex items-center gap-3 pt-2 border-t border-border/40">
          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
              <Button variant="primary" size="sm" className="w-full gap-2 text-xs">
                <span>Live Demo</span>
                <ArrowUpRight size={14} />
              </Button>
            </a>
          )}
          {githubUrl && (
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className={liveUrl ? "" : "flex-1"}>
              <Button variant="outline" size="sm" className={cn("gap-2 text-xs", !liveUrl && "w-full")}>
                <FaGithub size={14} />
                <span>Source</span>
              </Button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
