import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

export default function ListingPage() {
  return (
    <main className="container-page py-12">
      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <Badge>Суперхозяин</Badge>
            <Badge>All-in цена</Badge>
          </div>
          <h1 className="font-display text-4xl">Апартаменты с видом на море</h1>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="h-40 rounded-xl bg-pearl-100" />
            <div className="h-40 rounded-xl bg-pearl-100" />
            <div className="h-40 rounded-xl bg-pearl-100" />
          </div>
          <Card>
            <h2 className="text-lg font-semibold">Описание</h2>
            <p className="mt-2 text-sm text-ink-700">
              Светлые апартаменты в 7 минутах от моря. Включено: Wi-Fi, кондиционер, парковка,
              мини-кухня. Отмены по правилам заранее.
            </p>
          </Card>
          <Card>
            <h2 className="text-lg font-semibold">Удобства</h2>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-ink-700">
              <Badge>Wi-Fi</Badge>
              <Badge>Парковка</Badge>
              <Badge>Вид на море</Badge>
              <Badge>Кухня</Badge>
            </div>
          </Card>
          <Card>
            <h2 className="text-lg font-semibold">Отзывы</h2>
            <p className="mt-2 text-sm text-ink-700">“Чисто, быстрое заселение, цена прозрачная.”</p>
          </Card>
        </div>

        <Card className="h-fit">
          <h2 className="text-lg font-semibold">Забронировать</h2>
          <p className="mt-2 text-sm text-ink-700">Итог: 24 600 ₽ · 3 ночи · все включено</p>
          <div className="mt-4 grid gap-3">
            <Input placeholder="Заезд" />
            <Input placeholder="Выезд" />
            <Input placeholder="Гостей" />
            <Button>Перейти к оплате</Button>
          </div>
          <div className="mt-4 rounded-xl bg-pearl-100 p-3 text-xs text-ink-700">
            Бесплатная отмена за 7 дней до заезда. Поддержка 24/7.
          </div>
        </Card>
      </div>
    </main>
  );
}
