import { headers } from "next/headers";

import { AccommodationFilters } from "@/components/sections/accommodation-filters";
import type { Accommodation } from "@/types/accommodation";

const getBaseUrl = () => {
  const headerList = headers();
  const protocol = headerList.get("x-forwarded-proto") ?? "http";
  const host = headerList.get("x-forwarded-host") ?? headerList.get("host") ?? "localhost:3000";
  return `${protocol}://${host}`;
};

const AccommodationPage = async () => {
  const response = await fetch(`${getBaseUrl()}/api/accommodation`, { cache: "no-store" });
  const data = (await response.json()) as Accommodation[];

  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Жильё</p>
        <h1 className="text-3xl font-semibold text-foreground sm:text-4xl">Где остановиться в Судаке</h1>
        <p className="text-base text-muted">
          Подборка уютных гостевых домов, апартаментов и комнат рядом с морем, крепостью и виноградниками.
        </p>
      </header>

      <AccommodationFilters accommodations={data} />
    </div>
  );
};

export default AccommodationPage;
