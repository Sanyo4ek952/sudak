import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { Accommodation } from "@/types/accommodation";

const typeLabels: Record<Accommodation["type"], string> = {
  guesthouse: "Гостевой дом",
  apartment: "Апартаменты",
  room: "Комната",
};

export const AccommodationCard = ({ accommodation }: { accommodation: Accommodation }) => {
  return (
    <Card className="flex flex-col gap-4 overflow-hidden border-secondary/40 bg-white/90">
      <div
        className="aspect-[4/2.3] w-full bg-cover bg-center"
        style={{ backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0) 35%, rgba(0,0,0,0.3) 100%), url(${accommodation.image})` }}
      />
      <CardHeader className="space-y-3">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="default">от {accommodation.price.toLocaleString("ru-RU")} ₽</Badge>
          <Badge variant="outline">{typeLabels[accommodation.type]}</Badge>
          <span className="text-xs text-accent font-semibold">★ {accommodation.rating.toFixed(1)}</span>
        </div>
        <CardTitle>{accommodation.title}</CardTitle>
        <CardDescription>{accommodation.description}</CardDescription>
      </CardHeader>
      <CardContent className="grid grid-cols-1 gap-2 text-sm text-muted sm:grid-cols-2">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-2 w-2 rounded-full bg-primary/70" />
          <span>До моря: {accommodation.distanceToSea} м</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex h-2 w-2 rounded-full bg-accent/80" />
          <span>До крепости: {accommodation.distanceToFortress} м</span>
        </div>
      </CardContent>
    </Card>
  );
};
