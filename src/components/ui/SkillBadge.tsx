import { cn } from "@/lib/utils";

export interface SkillBadgeProps {
  name: string;
  className?: string;
  variant?: "navy" | "steel" | "minimal";
  icon?: React.ReactNode;
}

export function SkillBadge({ name, className, variant = "navy", icon }: SkillBadgeProps) {
  const styles = {
    navy: "bg-surface border-border/80 text-navy-DEFAULT hover:border-navy-DEFAULT/30 hover:bg-cream-hover hover:shadow-sm",
    steel: "bg-steel-DEFAULT/5 border-steel-DEFAULT/15 text-steel-DEFAULT hover:border-steel-DEFAULT/30 hover:bg-steel-DEFAULT/10",
    minimal: "bg-background border-border/60 text-foreground/80 hover:text-navy-DEFAULT hover:border-navy-DEFAULT/20",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium border transition-all duration-300 cursor-default select-none",
        styles[variant],
        className
      )}
    >
      {icon && <span className="opacity-70">{icon}</span>}
      <span>{name}</span>
    </div>
  );
}
