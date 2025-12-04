import React, { cloneElement, isValidElement } from "react";

import { cn } from "@/lib/utils";

type ButtonVariant = "default" | "secondary" | "outline" | "ghost";
type ButtonSize = "default" | "sm" | "lg";

const variantClasses: Record<ButtonVariant, string> = {
  default: "bg-primary text-primary-foreground hover:bg-primary/90 ring-offset-background",
  secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/90 ring-offset-background",
  outline: "border border-border bg-card text-foreground hover:border-primary/60 hover:text-primary",
  ghost: "text-foreground hover:bg-muted/60",
};

const sizeClasses: Record<ButtonSize, string> = {
  default: "h-11 px-5",
  sm: "h-9 rounded-md px-4 text-sm",
  lg: "h-12 rounded-xl px-6 text-base",
};

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, children, type = "button", ...props }, ref) => {
    const classes = cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 shadow-sm",
      variantClasses[variant],
      sizeClasses[size],
      className
    );

    if (asChild && isValidElement(children)) {
      return cloneElement(children as React.ReactElement, {
        className: cn(classes, (children as React.ReactElement).props.className),
        ...props,
      });
    }

    return (
      <button className={classes} ref={ref} type={type} {...props}>
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
