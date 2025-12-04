import Link from "next/link";

import { Section } from "@/components/layout/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { accommodations } from "@/lib/data";

export const AccommodationSection = () => {
  return (
    <Section
      title="Жильё для отдыха"
      description="Выбирайте уютные варианты рядом с морем или в тишине виноградников."
      action={
        <Button asChild variant="outline" size="sm">
          <Link href="/accommodation">Все варианты</Link>
        </Button>
      }
    >
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
    </Section>
  );
};
