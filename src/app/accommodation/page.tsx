import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { accommodations } from "@/lib/data";

const AccommodationPage = () => {
  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Жильё</p>
        <h1 className="text-3xl font-semibold text-foreground sm:text-4xl">Где остановиться в Судаке</h1>
        <p className="text-base text-muted">
          Подборка уютных гостиниц, апартаментов и гостевых домов рядом с морем и виноградниками.
        </p>
      </header>
      <div className="section-grid">
        {accommodations.map((stay) => (
          <Card key={stay.id}>
            <CardHeader>
              <Badge variant="default">от {stay.priceFrom}₽</Badge>
              <CardTitle>{stay.name}</CardTitle>
              <CardDescription>{stay.type}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm text-muted">
                <p>{stay.distance}</p>
                <div className="flex flex-wrap gap-2">
                  {stay.perks.map((perk) => (
                    <Badge key={perk} variant="outline">
                      {perk}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AccommodationPage;
