"use client";

import { useMemo, useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import type { Accommodation } from "@/types/accommodation";

import { AccommodationCard } from "./accommodation-card";

type AccommodationFiltersProps = {
  accommodations: Accommodation[];
};

export const AccommodationFilters = ({ accommodations }: AccommodationFiltersProps) => {
  const minPrice = Math.min(...accommodations.map((item) => item.price));
  const maxPrice = Math.max(...accommodations.map((item) => item.price));
  const maxSeaDistance = Math.max(...accommodations.map((item) => item.distanceToSea));
  const maxFortressDistance = Math.max(...accommodations.map((item) => item.distanceToFortress));

  const [priceRange, setPriceRange] = useState<[number, number]>([minPrice, maxPrice]);
  const [seaDistance, setSeaDistance] = useState<number>(maxSeaDistance);
  const [fortressDistance, setFortressDistance] = useState<number>(maxFortressDistance);
  const [type, setType] = useState<Accommodation["type"] | "all">("all");

  const filtered = useMemo(
    () =>
      accommodations.filter(
        (item) =>
          item.price >= priceRange[0] &&
          item.price <= priceRange[1] &&
          item.distanceToSea <= seaDistance &&
          item.distanceToFortress <= fortressDistance &&
          (type === "all" || item.type === type)
      ),
    [accommodations, fortressDistance, priceRange, seaDistance, type]
  );

  return (
    <div className="space-y-6">
      <div className="grid gap-4 rounded-2xl border border-border bg-white/80 p-4 shadow-sm sm:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-3">
          <div className="flex items-center justify-between text-sm font-semibold text-foreground">
            <span>Бюджет</span>
            <Badge variant="outline">{priceRange[0].toLocaleString("ru-RU")}–{priceRange[1].toLocaleString("ru-RU")} ₽</Badge>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <Input
              type="number"
              value={priceRange[0]}
              min={0}
              onChange={(event) => {
                const next = Number(event.target.value) || 0;
                setPriceRange(([, max]) => [Math.min(next, max), max]);
              }}
              placeholder="от"
            />
            <Input
              type="number"
              value={priceRange[1]}
              min={priceRange[0]}
              onChange={(event) => {
                const next = Number(event.target.value) || priceRange[0];
                setPriceRange(([min]) => [min, Math.max(next, min)]);
              }}
              placeholder="до"
            />
          </div>
          <Slider
            min={minPrice}
            max={maxPrice}
            step={100}
            value={[priceRange[1]]}
            onValueChange={([value]) => setPriceRange(([min]) => [min, Math.max(value, min)])}
          />
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between text-sm font-semibold text-foreground">
            <span>До моря</span>
            <Badge variant="outline">до {seaDistance} м</Badge>
          </div>
          <Slider
            min={0}
            max={maxSeaDistance}
            step={50}
            value={[seaDistance]}
            onValueChange={([value]) => setSeaDistance(value)}
          />
          <p className="text-xs text-muted">Подойдёт для тех, кто любит завтракать у воды.</p>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between text-sm font-semibold text-foreground">
            <span>До крепости</span>
            <Badge variant="outline">до {fortressDistance} м</Badge>
          </div>
          <Slider
            min={0}
            max={maxFortressDistance}
            step={100}
            value={[fortressDistance]}
            onValueChange={([value]) => setFortressDistance(value)}
          />
          <p className="text-xs text-muted">Чтобы встречать рассвет у башен и не тратить время в пути.</p>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between text-sm font-semibold text-foreground">
            <span>Тип жилья</span>
            <Badge variant="outline">{type === "all" ? "Любой" : type === "guesthouse" ? "Гостевой дом" : type === "apartment" ? "Апартаменты" : "Комната"}</Badge>
          </div>
          <Select value={type} onChange={(event) => setType(event.target.value as Accommodation["type"] | "all")}>
            <option value="all">Любой вариант</option>
            <option value="guesthouse">Гостевой дом</option>
            <option value="apartment">Апартаменты</option>
            <option value="room">Комната</option>
          </Select>
          <p className="text-xs text-muted">Подберите атмосферу — от камерных двориков до просторных лофтов.</p>
        </div>
      </div>

      <div className="section-grid">
        {filtered.length ? (
          filtered.map((stay) => <AccommodationCard key={stay.id} accommodation={stay} />)
        ) : (
          <div className="col-span-full flex flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-border bg-white/70 p-6 text-center text-sm text-muted">
            <span className="text-lg font-semibold text-foreground">Нет вариантов по текущим фильтрам</span>
            <p>Попробуйте увеличить диапазон цены или расстояний.</p>
          </div>
        )}
      </div>
    </div>
  );
};
