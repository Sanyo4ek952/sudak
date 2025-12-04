import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { routes } from "@/lib/data";

const RoutesPage = () => {
  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Маршруты</p>
        <h1 className="text-3xl font-semibold text-foreground sm:text-4xl">Прогулки по Судаку</h1>
        <p className="text-base text-muted">
          Подготовленные треки по набережной, крепости, тропе Голицына и виноградникам Нового Света.
        </p>
      </header>
      <div className="section-grid">
        {routes.map((route) => (
          <Card key={route.id}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <Badge variant="default">{route.distance}</Badge>
                <span className="text-sm text-muted">{route.duration}</span>
              </div>
              <CardTitle>{route.title}</CardTitle>
              <CardDescription>{route.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 text-sm text-muted">
                {route.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RoutesPage;
