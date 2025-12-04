import { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionProps = {
  title: string;
  description?: string;
  action?: ReactNode;
  className?: string;
  children: ReactNode;
};

export const Section = ({ title, description, action, className, children }: SectionProps) => {
  return (
    <section className={cn("space-y-5", className)}>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-2">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Судак Гид</p>
          <h2 className="text-2xl font-semibold leading-tight text-foreground sm:text-3xl">{title}</h2>
          {description ? <p className="max-w-2xl text-base text-muted">{description}</p> : null}
        </div>
        {action ? <div className="flex-shrink-0">{action}</div> : null}
      </div>
      {children}
    </section>
  );
};
