import { cn } from "@/lib/utils";

export interface SkillBadgeProps {
  name: string;
  className?: string;
  glow?: "coral" | "teal" | "none";
}

export function SkillBadge({ name, className, glow = "coral" }: SkillBadgeProps) {
  const glowStyles = {
    coral: "hover:glow-coral border-coral-500/30 text-coral-200",
    teal: "hover:glow-teal border-teal-500/30 text-teal-200",
    none: "border-border text-foreground/80",
  };

  return (
    <div
      className={cn(
        "glass px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-default",
        glowStyles[glow],
        className
      )}
    >
      {name}
    </div>
  );
}
