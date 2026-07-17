import { cn } from "@/lib/utils";

interface SkillBadgeProps {
  name: string;
  className?: string;
  glow?: "cyan" | "magenta" | "none";
}

export function SkillBadge({ name, className, glow = "cyan" }: SkillBadgeProps) {
  const glowClasses = {
    cyan: "hover:neon-glow-cyan border-cyan-500/30 text-cyan-200",
    magenta: "hover:neon-glow-magenta border-magenta-500/30 text-magenta-200",
    none: "border-border text-foreground",
  };

  return (
    <div
      className={cn(
        "glass px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-default",
        glowClasses[glow],
        className
      )}
    >
      {name}
    </div>
  );
}
