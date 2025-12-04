import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { Route } from "@/types/route";

const difficultyTone: Record<Route["difficulty"], string> = {
  easy: "bg-primary/10 text-primary",
  medium: "bg-secondary/60 text-secondary-foreground",
  hard: "bg-accent/10 text-accent",
};

export const RouteCard = ({ route }: { route: Route }) => {
  return (
    <Card className="flex flex-col gap-4 overflow-hidden border-accent/20 bg-white/90">
      <div
        className="aspect-[4/2.2] w-full bg-cover bg-center"
        style={{ backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0) 35%, rgba(0,0,0,0.35) 100%), url(${route.image})` }}
      />
      <CardHeader className="space-y-3">
        <div className="flex flex-wrap items-center gap-2">
          <Badge className={difficultyTone[route.difficulty]} variant="outline">
            {route.difficulty === "easy" && "Легко"}
            {route.difficulty === "medium" && "Средне"}
            {route.difficulty === "hard" && "Сложно"}
          </Badge>
          <Badge variant="outline">{route.duration}</Badge>
          <span className="text-xs uppercase tracking-[0.2em] text-muted">{route.points.length} точек</span>
        </div>
        <CardTitle>{route.title}</CardTitle>
        <CardDescription>{route.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 text-xs text-muted">
          {route.points.map((point, index) => (
            <span
              key={`${route.id}-${index}`}
              className="inline-flex items-center gap-1 rounded-full bg-muted/60 px-3 py-1"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {point.lat.toFixed(3)}, {point.lng.toFixed(3)}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
