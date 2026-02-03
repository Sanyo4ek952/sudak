import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import type { ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
  variant?: 'primary' | 'ghost' | 'outline';
};

export function Button({ asChild, className, variant = 'primary', ...props }: ButtonProps) {
  const Comp = asChild ? Slot : 'button';
  return (
    <Comp
      className={clsx(
        'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition',
        {
          'bg-ink-900 text-pearl-50 hover:bg-ink-700': variant === 'primary',
          'border border-ink-900 text-ink-900 hover:bg-ink-900 hover:text-pearl-50':
            variant === 'outline',
          'text-ink-700 hover:text-ink-900': variant === 'ghost'
        },
        className
      )}
      {...props}
    />
  );
}
