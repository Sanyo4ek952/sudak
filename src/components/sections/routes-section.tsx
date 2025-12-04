import Link from "next/link";

import { Section } from "@/components/layout/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { routes } from "@/lib/data";

export const RoutesSection = () => {
  return (
    <Section
      title="Популярные маршруты"
      description="Лёгкие прогулки и насыщенные тропы, чтобы почувствовать Судак с первой минуты."
      action={
        <Button asChild variant="outline" size="sm">
          <Link href="/routes">Все маршруты</Link>
        </Button>
      }
    >
      <div className="section-grid">
        {routes.map((route) => (
          <Card key={route.id}>
            <CardHeader>
              <Badge variant="default">{route.distance}</Badge>
              <CardTitle>{route.title}</CardTitle>
              <CardDescription>{route.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between text-sm text-muted">
                <span>{route.duration}</span>
                <div className="flex flex-wrap gap-2">
                  {route.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
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
