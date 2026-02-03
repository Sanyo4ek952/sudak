import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function GuestHomePage() {
  return (
    <main className="container-page py-12">
      <h1 className="font-display text-3xl">Личный кабинет гостя</h1>
      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {[
          { title: 'Мои брони', href: '/guest/bookings' },
          { title: 'Сообщения', href: '/guest/messages' },
          { title: 'Избранное', href: '/guest/favorites' }
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
