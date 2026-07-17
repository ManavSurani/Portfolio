"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
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
  glowColor?: "cyan" | "magenta";
}

export function ProjectCard({
  title,
  description,
  image,
  tags,
  liveUrl,
  githubUrl,
  className,
  glowColor = "cyan",
}: ProjectCardProps) {
  return (
    <div
      className={cn(
        "glass rounded-2xl overflow-hidden group transition-all duration-500",
        glowColor === "cyan" ? "hover:neon-glow-cyan" : "hover:neon-glow-magenta",
        className
      )}
    >
      <div className="relative w-full h-48 md:h-56 bg-surface">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="p-6 relative">
        <h3 className={cn(
          "text-2xl font-bold mb-2",
          glowColor === "cyan" ? "text-cyan-100" : "text-magenta-100"
        )}>
          {title}
        </h3>
        <p className="text-beige-DEFAULT/80 text-sm mb-6 line-clamp-3">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-md text-xs font-medium bg-surface-hover border border-border/50 text-foreground/80"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="primary" size="sm" className="gap-2">
                <ExternalLink size={16} /> Live Demo
              </Button>
            </a>
          )}
          {githubUrl && (
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm" className="gap-2">
                <FaGithub size={16} /> Source
              </Button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
