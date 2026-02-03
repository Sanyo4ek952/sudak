import type { HTMLAttributes } from 'react';
import { clsx } from 'clsx';

export function Badge({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-full bg-pearl-100 px-3 py-1 text-xs font-medium text-ink-700',
        className
      )}
      {...props}
    />
  );
}
