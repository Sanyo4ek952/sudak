import Link from "next/link";

import { navLinks } from "@/lib/data";

export const Footer = () => {
  return (
    <footer className="border-t border-border/70 bg-white/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 md:flex-row md:items-center md:justify-between md:px-6 lg:px-8">
        <div>
          <p className="text-sm font-semibold text-foreground">Судак Гид</p>
          <p className="text-sm text-muted">Море, крепость, горы и тёплые прогулки</p>
        </div>
        <div className="flex flex-wrap items-center gap-3 text-sm text-muted">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-primary">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};
