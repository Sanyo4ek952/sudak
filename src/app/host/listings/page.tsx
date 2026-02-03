import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

export default function HostListingsPage() {
  return (
    <main className="container-page py-12">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h1 className="font-display text-3xl">Мои объекты</h1>
        <Button>Добавить объект</Button>
      </div>

      <Card className="mt-6">
        <h2 className="text-lg font-semibold">Создание объекта</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          <Input placeholder="Название" />
          <Input placeholder="Тип жилья" />
          <Input placeholder="Адрес/район" />
          <Input placeholder="Вместимость" />
          <Input placeholder="Базовая цена" />
          <Input placeholder="Правила" />
        </div>
        <div className="mt-4">
          <Button>Сохранить черновик</Button>
        </div>
      </Card>

      <div className="mt-8 grid gap-4">
        {['Апартаменты у моря', 'Гостевой дом с садом'].map((item) => (
          <Card key={item} className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold">{item}</h3>
              <p className="text-sm text-ink-700">Статус: черновик</p>
            </div>
            <Button variant="outline">Редактировать</Button>
          </Card>
        ))}
      </div>
    </main>
  );
}
