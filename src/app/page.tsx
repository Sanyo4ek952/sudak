import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

const quests = [
  'Выберите настроение: приключение или релакс',
  'Сколько времени готовы провести на пляже?',
  'Нужен ли вид на крепость?',
  'Любите ли гастро-места?',
  'Выберите темп прогулок'
];

export default function HomePage() {
  return (
    <main>
      <section className="hero-gradient">
        <div className="container-page flex flex-col gap-10 py-20">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-6">
              <Badge>All-in цена · Судак</Badge>
              <h1 className="font-display text-4xl leading-tight text-ink-900 md:text-6xl">
                Премиальное бронирование жилья у моря — быстро, прозрачно, без сюрпризов.
              </h1>
              <p className="max-w-xl text-base text-ink-700">
                Минимализм, доверие и скорость. Итоговая цена видна сразу, а 3D-панорама
                Судака загружается только на сильных устройствах.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button>Найти жильё</Button>
                <Button variant="outline">Сдать объект</Button>
              </div>
            </div>
            <Card className="relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-500/20 via-transparent to-sage-500/20" />
              <div className="relative space-y-4">
                <p className="text-xs uppercase tracking-[0.24em] text-ink-700">3D сцена</p>
                <h2 className="font-display text-2xl">Морской объект</h2>
                <p className="text-sm text-ink-700">
                  WebGL включается только при достаточной производительности. На слабых устройствах —
                  статичный арт.
                </p>
                <div className="h-52 w-full rounded-xl bg-pearl-100" />
              </div>
            </Card>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { title: 'Прозрачная цена', text: 'Ни одной скрытой комиссии — итоговая сумма сразу.' },
              { title: 'Локальный сервис', text: 'Знаем Судак и лично проверяем хозяев.' },
              { title: 'Гарантия поддержки', text: '24/7 чат и правила отмены на одном экране.' }
            ].map((item) => (
              <Card key={item.title} className="h-full">
                <h3 className="text-lg font-semibold text-ink-900">{item.title}</h3>
                <p className="mt-2 text-sm text-ink-700">{item.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page grid gap-10 py-16 lg:grid-cols-[1fr_1fr]">
        <Card>
          <h2 className="font-display text-3xl">Судакский квест</h2>
          <p className="mt-2 text-sm text-ink-700">
            5 быстрых вопросов — и персональный маршрут с чек-листом. Бесплатно.
          </p>
          <div className="mt-6 space-y-4">
            {quests.map((quest, index) => (
              <div key={quest} className="flex items-center justify-between rounded-xl bg-pearl-100 p-4">
                <span className="text-sm text-ink-900">
                  {index + 1}. {quest}
                </span>
                <Button variant="ghost">Ответить</Button>
              </div>
            ))}
          </div>
          <div className="mt-6 grid gap-3">
            <Input placeholder="Email или Telegram" />
            <label className="flex items-start gap-2 text-xs text-ink-700">
              <input type="checkbox" className="mt-1" />
              Согласен с условиями обработки данных
            </label>
            <div className="flex gap-3">
              <Button>Получить маршрут</Button>
              <Button variant="outline">Скопировать результат</Button>
            </div>
          </div>
        </Card>

        <Card>
          <h2 className="font-display text-3xl">Калькулятор бюджета</h2>
          <p className="mt-2 text-sm text-ink-700">
            Введите даты и уровень комфорта — получите диапазон бюджета и подборку объектов.
          </p>
          <div className="mt-6 grid gap-4">
            <div className="grid gap-3 md:grid-cols-2">
              <Input placeholder="Дата заезда" />
              <Input placeholder="Дата выезда" />
            </div>
            <div className="grid gap-3 md:grid-cols-2">
              <Input placeholder="Гостей" />
              <Input placeholder="Тип жилья" />
            </div>
            <div className="grid gap-3 md:grid-cols-2">
              <Input placeholder="Уровень комфорта" />
              <Input placeholder="Опции (парковка/вид)" />
            </div>
            <div className="flex gap-3">
              <Button>Рассчитать</Button>
              <Button variant="outline">Скопировать расчёт</Button>
            </div>
            <div className="rounded-xl bg-pearl-100 p-4 text-sm text-ink-700">
              Диапазон: 42 000 – 58 000 ₽ · Рекомендовано: 3 объекта рядом с крепостью.
            </div>
          </div>
        </Card>
      </section>
    </main>
  );
}
