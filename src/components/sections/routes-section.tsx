import Link from "next/link";

import { Section } from "@/components/layout/section";
import { RouteCard } from "@/components/sections/route-card";
import { Button } from "@/components/ui/button";
import { routes } from "@/lib/data";

export const RoutesSection = () => {
  return (
    <Section
      title="Прогулки по побережью"
      description="Три настроения: лёгкая набережная, средний подъём к крепости и сложный трек к вершине Сокола."
      action={
        <Button asChild variant="outline" size="sm">
          <Link href="/routes">Все маршруты</Link>
        </Button>
      }
    >
      <div className="section-grid">
        {routes.slice(0, 3).map((route) => (
          <RouteCard key={route.id} route={route} />
        ))}
      </div>
    </Section>
  );
};
