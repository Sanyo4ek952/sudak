import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { Place } from "@/types/place";

const categoryLabels: Record<Place["category"], string> = {
  fortress: "Крепость",
  beach: "Пляж",
  mountain: "Гора",
  view: "Смотровая",
  museum: "Музей",
};

export const PlaceCard = ({ place }: { place: Place }) => {
  return (
    <Card className="flex flex-col gap-4 overflow-hidden border-primary/20 bg-white/90">
      <div className="relative overflow-hidden rounded-xl">
        <div
          className="aspect-[4/3] w-full bg-cover bg-center transition duration-500 ease-out group-hover:scale-105"
          style={{ backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,0.35) 100%), url(${place.image})` }}
        />
      </div>
      <CardHeader className="gap-3">
        <div className="flex items-center gap-2">
          <Badge variant="accent">{categoryLabels[place.category]}</Badge>
          <span className="text-xs uppercase tracking-[0.18em] text-muted">{`${place.latitude.toFixed(4)}, ${place.longitude.toFixed(4)}`}</span>
        </div>
        <CardTitle>{place.title}</CardTitle>
        <CardDescription>{place.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-2 text-xs text-muted">
          <span className="inline-flex h-2 w-2 rounded-full bg-primary/70" />
          <span>Маркер сохранён для будущей карты и аудиогида</span>
        </div>
      </CardContent>
    </Card>
  );
};
