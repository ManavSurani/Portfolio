import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  badge?: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  title,
  badge,
  subtitle,
  className,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16 space-y-3",
        align === "center" ? "text-center" : "text-left",
        className
      )}
    >
      {badge && (
        <div className={cn("inline-block", align === "center" && "mx-auto")}>
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-steel-DEFAULT bg-steel-DEFAULT/10 border border-steel-DEFAULT/15 px-3.5 py-1 rounded-full">
            {badge}
          </span>
        </div>
      )}

      <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-navy-DEFAULT">
        {title}
      </h2>

      {subtitle && (
        <p className="text-muted text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-normal">
          {subtitle}
        </p>
      )}
    </div>
  );
}
