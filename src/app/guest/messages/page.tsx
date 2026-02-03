import { Card } from '@/components/ui/card';

export default function GuestMessagesPage() {
  return (
    <main className="container-page py-12">
      <h1 className="font-display text-3xl">Сообщения</h1>
      <div className="mt-6 grid gap-4 lg:grid-cols-[1fr_1.2fr]">
        <Card>
          <h2 className="text-lg font-semibold">Чаты</h2>
          <div className="mt-4 space-y-3 text-sm text-ink-700">
            <div className="rounded-xl bg-pearl-100 p-3">Хозяин · Апартаменты</div>
          </div>
        </Card>
        <Card>
          <h2 className="text-lg font-semibold">Диалог</h2>
          <div className="mt-4 space-y-3 text-sm text-ink-700">
            <div className="rounded-xl bg-pearl-100 p-3">Гость: Можно ранний заезд?</div>
            <div className="rounded-xl bg-white p-3 shadow-soft">Хозяин: Да, подготовим.</div>
          </div>
        </Card>
      </div>
    </main>
  );
}
