import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function HostBookingsPage() {
  return (
    <main className="container-page py-12">
      <h1 className="font-display text-3xl">Бронирования</h1>
      <div className="mt-6 grid gap-4">
        {[
          { guest: 'Ирина', dates: '10–14 июля', status: 'ожидает подтверждения' },
          { guest: 'Алексей', dates: '20–23 июля', status: 'подтверждено' }
        ].map((booking) => (
          <Card key={booking.guest} className="flex flex-col justify-between gap-4 md:flex-row">
            <div>
              <h2 className="text-lg font-semibold">{booking.guest}</h2>
              <p className="text-sm text-ink-700">{booking.dates}</p>
            </div>
            <div className="flex items-center gap-3">
              <Badge>{booking.status}</Badge>
              <Button variant="outline">Детали</Button>
            </div>
          </Card>
        ))}
      </div>
    </main>
  );
}
