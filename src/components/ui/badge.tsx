import * as React from "react";

import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "outline" | "accent";
}

export const Badge = ({ className, variant = "default", ...props }: BadgeProps) => {
  const baseClasses = "inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold";
  const variants: Record<Required<BadgeProps>["variant"], string> = {
    default: "bg-primary/15 text-primary ring-1 ring-primary/30",
    outline: "border border-border text-foreground",
    accent: "bg-accent/15 text-accent ring-1 ring-accent/30",
  };

  return <span className={cn(baseClasses, variants[variant], className)} {...props} />;
};
