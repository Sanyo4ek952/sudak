import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

const listings = [
  {
    id: '1',
    name: 'Панорама на Генуэзскую крепость',
    price: '7 800 ₽ / ночь',
    area: 'Центр'
  },
  {
    id: '2',
    name: 'Семейный номер у моря',
    price: '6 200 ₽ / ночь',
    area: 'Набережная'
  },
  {
    id: '3',
    name: 'Гостевой дом с садом',
    price: '5 100 ₽ / ночь',
    area: 'Новый Свет'
  }
];

export default function SearchPage() {
  return (
    <main className="container-page py-12">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="font-display text-3xl">Поиск жилья</h1>
          <p className="text-sm text-ink-700">Итоговая цена считается сразу.</p>
        </div>
        <Badge>Судак · лето</Badge>
      </div>

      <div className="mt-6 grid gap-4 rounded-2xl border border-pearl-200 bg-white p-6 shadow-soft md:grid-cols-5">
        <Input placeholder="Заезд" />
        <Input placeholder="Выезд" />
        <Input placeholder="Гостей" />
        <Input placeholder="Тип жилья" />
        <Button>Найти</Button>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-[280px_1fr]">
        <Card className="h-fit">
          <h2 className="text-lg font-semibold">Фильтры</h2>
          <div className="mt-4 space-y-3 text-sm text-ink-700">
            <label className="flex items-center gap-2">
              <input type="checkbox" /> Вид на море
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" /> Парковка
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" /> Завтрак
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" /> Питомцы
            </label>
          </div>
        </Card>

        <div className="grid gap-6">
          {listings.map((listing) => (
            <Card key={listing.id} className="flex flex-col gap-4 md:flex-row">
              <div className="h-32 w-full rounded-xl bg-pearl-100 md:w-48" />
              <div className="flex-1 space-y-2">
                <h3 className="text-lg font-semibold text-ink-900">{listing.name}</h3>
                <p className="text-sm text-ink-700">Район: {listing.area}</p>
                <p className="text-sm text-ink-900">{listing.price}</p>
                <div className="flex gap-3">
                  <Button asChild>
                    <a href={`/listings/${listing.id}`}>Открыть</a>
                  </Button>
                  <Button variant="ghost">В избранное</Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
