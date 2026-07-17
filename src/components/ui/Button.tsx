import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    const variants = {
      primary:
        "bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 hover:bg-cyan-500/30 hover:neon-glow-cyan transition-all duration-300",
      secondary:
        "bg-magenta-500/20 text-magenta-300 border border-magenta-500/50 hover:bg-magenta-500/30 hover:neon-glow-magenta transition-all duration-300",
      outline:
        "bg-transparent text-foreground border border-border hover:bg-surface-hover hover:border-foreground/30 transition-all duration-300",
    };

    const sizes = {
      sm: "px-3 py-1.5 text-sm",
      md: "px-6 py-2.5 text-base font-medium",
      lg: "px-8 py-3.5 text-lg font-semibold",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
