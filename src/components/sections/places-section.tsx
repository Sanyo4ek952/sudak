import Link from "next/link";

import { Section } from "@/components/layout/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { places } from "@/lib/data";

export const PlacesSection = () => {
  return (
    <Section
      title="Места, которые стоит увидеть"
      description="Крепость, тропы, гроты и прогулки у моря — всё, что создаёт настроение Судака."
      action={
        <Button asChild variant="outline" size="sm">
          <Link href="/places">Все места</Link>
        </Button>
      }
    >
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
    </Section>
  );
};
