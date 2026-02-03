import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function HostHomePage() {
  return (
    <main className="container-page py-12">
      <h1 className="font-display text-4xl">Кабинет арендодателя</h1>
      <p className="mt-2 text-sm text-ink-700">
        Управляйте объектами, ценами и бронированиями в одном месте.
      </p>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {[
          { title: 'Мои объекты', href: '/host/listings' },
          { title: 'Календарь цен', href: '/host/calendar' },
          { title: 'Бронирования', href: '/host/bookings' }
        ].map((card) => (
          <Card key={card.title} className="flex flex-col justify-between gap-4">
            <h2 className="text-lg font-semibold">{card.title}</h2>
            <Button asChild>
              <a href={card.href}>Открыть</a>
            </Button>
          </Card>
        ))}
      </div>
    </main>
  );
}
