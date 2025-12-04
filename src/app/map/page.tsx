import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { mapPoints } from "@/lib/data";

const MapPage = () => {
  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Карта</p>
        <h1 className="text-3xl font-semibold text-foreground sm:text-4xl">Ориентиры Судака</h1>
        <p className="text-base text-muted">
          Быстрый обзор ключевых точек. Позже здесь появится интерактивная карта с треками и жильём.
        </p>
      </header>
      <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="relative overflow-hidden rounded-2xl border border-primary/40 bg-gradient-to-br from-primary/80 via-secondary/70 to-accent/70 p-[1px] shadow-lg">
          <div className="h-full min-h-[320px] rounded-2xl bg-white p-6 text-sm text-muted">
            <p className="mb-4 font-semibold text-foreground">Тёплая карта Судака</p>
            <p>
              Здесь будет карта с отметками маршрутов, пляжей и жилья. Пока — мягкий фон и обещание красивых переходов между
              морем, крепостью и виноградниками.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3 text-xs sm:grid-cols-3">
              <span className="rounded-lg bg-primary/10 px-3 py-2 text-primary">морские прогулки</span>
              <span className="rounded-lg bg-secondary/40 px-3 py-2 text-secondary-foreground">история крепости</span>
              <span className="rounded-lg bg-accent/10 px-3 py-2 text-accent">встречи заката</span>
              <span className="rounded-lg bg-primary/10 px-3 py-2 text-primary">тропа Голицына</span>
              <span className="rounded-lg bg-secondary/40 px-3 py-2 text-secondary-foreground">местное вино</span>
              <span className="rounded-lg bg-accent/10 px-3 py-2 text-accent">панорамы бухты</span>
            </div>
          </div>
        </div>
        <div className="space-y-3">
          {mapPoints.map((point) => (
            <Card key={point.id}>
              <CardHeader className="flex flex-row items-start justify-between">
                <div>
                  <CardTitle>{point.title}</CardTitle>
                  <CardDescription>{point.description}</CardDescription>
                </div>
                <Badge variant="outline">{point.category}</Badge>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted">
                  Точка сохранена для будущей интерактивной карты — уже можно планировать остановки и фотографии.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MapPage;
