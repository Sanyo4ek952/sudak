import { AccommodationSection } from "@/components/sections/accommodation-section";
import { Hero } from "@/components/sections/hero";
import { PlacesSection } from "@/components/sections/places-section";
import { RoutesSection } from "@/components/sections/routes-section";

export default function Home() {
  return (
    <div className="space-y-12 md:space-y-14">
      <Hero />
      <RoutesSection />
      <PlacesSection />
      <AccommodationSection />

    </div>
  );
}
