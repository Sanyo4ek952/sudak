import Link from "next/link";

import { Button } from "@/components/ui/button";
import { navLinks } from "@/lib/data";
import { cn } from "@/lib/utils";

export const Header = () => {
  return (
    <header className="sticky top-0 z-20 backdrop-blur-md">
      <div className="border-b border-border/60 bg-white/80 shadow-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-3 text-lg font-semibold tracking-tight">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary shadow-inner shadow-primary/20">
              SG
            </div>
            <div className="leading-tight">
              <div className="text-sm text-muted">Судак</div>
              <div className="text-base">Sudoq Guide</div>
            </div>
          </Link>
          <nav className="hidden items-center gap-1 rounded-full border border-border/80 bg-white/70 px-2 py-1 shadow-sm md:flex">
            {navLinks.map((link) => (
              <NavLink key={link.href} href={link.href} label={link.label} />
            ))}
          </nav>
          <div className="hidden md:block">
            <Button asChild size="sm" variant="secondary">
              <Link href="/routes">Запланировать день</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

const NavLink = ({ href, label }: { href: string; label: string }) => {
  return (
    <Link
      href={href}
      className={cn(
        "rounded-full px-4 py-2 text-sm font-medium text-foreground/80 transition hover:bg-primary/10 hover:text-foreground"
      )}
    >
      {label}
    </Link>
  );
};
