import Link from "next/link";

import { Section } from "@/components/layout/section";
import { AccommodationCard } from "@/components/sections/accommodation-card";
import { Button } from "@/components/ui/button";
import { accommodations } from "@/lib/data";

export const AccommodationSection = () => {
  return (
    <Section
      title="Уютное жильё у моря"
      description="Подборка проверенных вариантов с разным настроением: дворики у моря, лофты в виноградниках и комнаты рядом с крепостью."
      action={
        <Button asChild variant="outline" size="sm">
          <Link href="/accommodation">Все варианты</Link>
        </Button>
      }
    >
      <div className="section-grid">
        {accommodations.slice(0, 3).map((stay) => (
          <AccommodationCard key={stay.id} accommodation={stay} />
        ))}
      </div>
    </Section>
  );
};
