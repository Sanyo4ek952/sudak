import Link from "next/link";

import { Section } from "@/components/layout/section";
import { PlaceCard } from "@/components/sections/place-card";
import { Button } from "@/components/ui/button";
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
        {places.slice(0, 3).map((place) => (
          <PlaceCard key={place.id} place={place} />
        ))}
      </div>
    </Section>
  );
};
