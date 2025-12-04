import * as React from "react";

import { cn } from "@/lib/utils";

type SliderProps = {
  value: number[];
  min?: number;
  max?: number;
  step?: number;
  onValueChange?: (value: number[]) => void;
  className?: string;
};

export const Slider = ({ value, min = 0, max = 100, step = 1, onValueChange, className }: SliderProps) => {
  return (
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      value={value[0]}
      onChange={(event) => onValueChange?.([Number(event.target.value)])}
      className={cn(
        "h-2 w-full cursor-pointer appearance-none rounded-full bg-muted/70 accent-primary transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60",
        className
      )}
    />
  );
};
