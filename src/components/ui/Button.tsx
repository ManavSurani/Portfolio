import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    const variants = {
      primary:
        "bg-coral-500/20 text-coral-300 border border-coral-500/50 hover:bg-coral-500/30 hover:glow-coral transition-all duration-300",
      secondary:
        "bg-teal-500/20 text-teal-300 border border-teal-500/50 hover:bg-teal-500/30 hover:glow-teal transition-all duration-300",
      outline:
        "bg-transparent text-foreground border border-border hover:bg-surface-hover hover:border-foreground/30 transition-all duration-300",
      ghost:
        "bg-transparent hover:bg-surface text-foreground/80 hover:text-foreground transition-all duration-300",
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
          "inline-flex items-center justify-center rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-coral-500/50",
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
