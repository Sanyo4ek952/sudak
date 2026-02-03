import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function AdminPage() {
  return (
    <main className="container-page py-12">
      <h1 className="font-display text-3xl">Админ-панель</h1>
      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {[
          { title: 'Модерация объектов', action: 'Проверить' },
          { title: 'Справочник районов', action: 'Редактировать' },
          { title: 'Спорные брони', action: 'Разобрать' }
        ].map((item) => (
          <Card key={item.title} className="flex flex-col justify-between gap-4">
            <h2 className="text-lg font-semibold">{item.title}</h2>
            <Button variant="outline">{item.action}</Button>
          </Card>
        ))}
      </div>
    </main>
  );
}
