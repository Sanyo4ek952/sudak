import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

export default function HostCalendarPage() {
  return (
    <main className="container-page py-12">
      <h1 className="font-display text-3xl">Календарь цен и доступности</h1>
      <p className="mt-2 text-sm text-ink-700">
        Выберите даты, задайте цену, минимальные ночи или закройте продажи.
      </p>
      <div className="mt-6 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Card>
          <div className="h-80 rounded-xl bg-pearl-100" />
          <p className="mt-3 text-xs text-ink-700">Массовое выделение дат, шаблоны сезонов.</p>
        </Card>
        <Card>
          <h2 className="text-lg font-semibold">Правило</h2>
          <div className="mt-4 grid gap-3">
            <Input placeholder="Диапазон дат" />
            <Input placeholder="Цена за ночь" />
            <Input placeholder="Минимум ночей" />
            <label className="flex items-center gap-2 text-sm text-ink-700">
              <input type="checkbox" /> Закрыть продажи
            </label>
            <Button>Применить</Button>
          </div>
        </Card>
      </div>
    </main>
  );
}
