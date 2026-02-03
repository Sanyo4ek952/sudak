import type { InputHTMLAttributes } from 'react';
import { clsx } from 'clsx';

export function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={clsx(
        'h-12 w-full rounded-xl border border-pearl-200 bg-white px-4 text-sm text-ink-900 focus:border-ink-700 focus:outline-none focus:ring-2 focus:ring-ink-700/20',
        className
      )}
      {...props}
    />
  );
}
