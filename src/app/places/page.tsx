import { headers } from "next/headers";

import { PlaceCard } from "@/components/sections/place-card";
import type { Place } from "@/types/place";

const getBaseUrl = () => {
  const headerList = headers();
  const protocol = headerList.get("x-forwarded-proto") ?? "http";
  const host = headerList.get("x-forwarded-host") ?? headerList.get("host") ?? "localhost:3000";
  return `${protocol}://${host}`;
};

const PlacesPage = async () => {
  const response = await fetch(`${getBaseUrl()}/api/places`, { cache: "no-store" });
  const data = (await response.json()) as Place[];

  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Достопримечательности</p>
        <h1 className="text-3xl font-semibold text-foreground sm:text-4xl">Места, которые хочется сохранить</h1>
        <p className="text-base text-muted">
          Исторические памятники, морские виды и тёплые прогулки по побережью — выбирайте точку старта путешествия.
        </p>
      </header>
      <div className="section-grid">
        {data.map((place) => (
          <PlaceCard key={place.id} place={place} />
        ))}
      </div>
    </div>
  );
};

export default PlacesPage;
