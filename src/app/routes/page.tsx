import { headers } from "next/headers";

import { RouteCard } from "@/components/sections/route-card";
import type { Route } from "@/types/route";

const getBaseUrl = () => {
  const headerList = headers();
  const protocol = headerList.get("x-forwarded-proto") ?? "http";
  const host = headerList.get("x-forwarded-host") ?? headerList.get("host") ?? "localhost:3000";
  return `${protocol}://${host}`;
};

const RoutesPage = async () => {
  const response = await fetch(`${getBaseUrl()}/api/routes`, { cache: "no-store" });
  const data = (await response.json()) as Route[];

  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Маршруты</p>
        <h1 className="text-3xl font-semibold text-foreground sm:text-4xl">Прогулки по Судаку</h1>
        <p className="text-base text-muted">
          Подготовленные треки по набережной, крепости, тропе Голицына и виноградникам Нового Света.
        </p>
      </header>
      <div className="section-grid">
        {data.map((route) => (
          <RouteCard key={route.id} route={route} />
        ))}
      </div>
    </div>
  );
};

export default RoutesPage;
