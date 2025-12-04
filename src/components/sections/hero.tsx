import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const Hero = () => {
  return (
    <section className="overflow-hidden rounded-2xl border border-border/70 bg-white/80 p-8 shadow-md md:p-12">
      <div className="grid items-center gap-8 md:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <Badge variant="accent">Тёплый маршрут</Badge>
          <div className="space-y-3">
            <h1 className="text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
              Твой тёплый гид по Судаку
            </h1>
            <p className="text-lg text-muted sm:text-xl">
              Море и крепость, мягкие закаты на Меганоме, тропы Голицына и прогулки по набережной. Мы собрали самое
              тёплое, что есть в Судаке.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Button asChild size="lg">
              <Link href="/routes">Посмотреть маршруты</Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="/accommodation">Найти жильё</Link>
            </Button>
          </div>
          <div className="flex flex-wrap gap-2 text-sm text-muted">
            <span className="flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-primary">
              Море рядом
            </span>
            <span className="flex items-center gap-2 rounded-full bg-secondary/30 px-3 py-1 text-secondary-foreground">
              Горы и тропы
            </span>
            <span className="flex items-center gap-2 rounded-full bg-accent/15 px-3 py-1 text-accent">
              Виноградники и гастро
            </span>
          </div>
        </div>
        <div className="relative h-full rounded-2xl bg-gradient-to-br from-primary/90 via-secondary/80 to-accent/80 p-[1px] shadow-lg">
          <div className="h-full rounded-2xl bg-white p-6 md:p-7">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Настроение Судака</p>
              <div className="grid gap-3 text-sm text-foreground">
                <InfoRow label="Температура моря" value="+24°" />
                <InfoRow label="Закаты" value="Меганом" accent />
                <InfoRow label="Главная прогулка" value="Тропа Голицына" />
                <InfoRow label="Лучшие виды" value="Башни Генуэзской крепости" />
              </div>
              <div className="rounded-xl bg-muted p-4 text-sm text-muted">
                Оставь время на медленные вечера: море, воздух и бокал из Нового Света.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const InfoRow = ({ label, value, accent }: { label: string; value: string; accent?: boolean }) => (
  <div className="flex items-center justify-between rounded-lg border border-border/60 bg-white/80 px-4 py-3 shadow-sm">
    <span className="text-muted">{label}</span>
    <span className={accent ? "font-semibold text-accent" : "font-semibold text-foreground"}>{value}</span>
  </div>
);
