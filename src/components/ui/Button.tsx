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
        "bg-navy-DEFAULT text-white border border-navy-dark hover:bg-navy-dark shadow-[0_4px_14px_0_rgba(27,42,74,0.25)] hover:shadow-[0_6px_20px_rgba(27,42,74,0.35)] hover:-translate-y-0.5 transition-all duration-300 font-medium",
      secondary:
        "bg-steel-DEFAULT/10 text-navy-DEFAULT border border-steel-DEFAULT/20 hover:bg-steel-DEFAULT/20 hover:-translate-y-0.5 transition-all duration-300 font-medium",
      outline:
        "bg-transparent text-navy-DEFAULT border border-navy-DEFAULT/30 hover:bg-navy-DEFAULT/5 hover:border-navy-DEFAULT hover:-translate-y-0.5 transition-all duration-300 font-medium",
      ghost:
        "bg-transparent hover:bg-cream-hover text-foreground/80 hover:text-navy-DEFAULT transition-all duration-300 font-medium",
    };

    const sizes = {
      sm: "px-4 py-2 text-xs tracking-wide rounded-full",
      md: "px-6 py-2.5 text-sm tracking-wide rounded-full",
      lg: "px-8 py-3.5 text-base tracking-wide rounded-full",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-navy-DEFAULT/40",
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
