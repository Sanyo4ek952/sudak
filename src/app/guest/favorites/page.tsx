import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function GuestFavoritesPage() {
  return (
    <main className="container-page py-12">
      <h1 className="font-display text-3xl">Избранное</h1>
      <div className="mt-6 grid gap-4">
        {['Номер у моря', 'Апартаменты с террасой'].map((item) => (
          <Card key={item} className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">{item}</h2>
            <Button variant="outline">Удалить</Button>
          </Card>
        ))}
      </div>
    </main>
  );
}
