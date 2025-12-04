import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { places } from "@/lib/data";

const PlacesPage = () => {
  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Достопримечательности</p>
        <h1 className="text-3xl font-semibold text-foreground sm:text-4xl">Места, которые хочется сохранить</h1>
        <p className="text-base text-muted">
          Исторические памятники, морские виды, виноградники и теплые прогулки по побережью.
        </p>
      </header>
      <div className="section-grid">
        {places.map((place) => (
          <Card key={place.id}>
            <CardHeader>
              <Badge variant="accent">{place.category}</Badge>
              <CardTitle>{place.title}</CardTitle>
              <CardDescription>{place.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-muted">{place.location}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PlacesPage;
