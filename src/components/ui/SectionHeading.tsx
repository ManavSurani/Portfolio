import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  title,
  subtitle,
  className,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-20 space-y-4",
        align === "center" ? "text-center" : "text-left",
        className
      )}
    >
      <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-magenta-500">
          {title}
        </span>
      </h2>
      {subtitle && (
        <p className="text-beige-DEFAULT/80 text-lg md:text-xl max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
