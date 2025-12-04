import type { Accommodation, MapPoint, Place, Route } from "@/types/content";

export type NavLink = {
  href: string;
  label: string;
};

export const navLinks: NavLink[] = [
  { href: "/", label: "Главная" },
  { href: "/map", label: "Карта" },
  { href: "/routes", label: "Маршруты" },
  { href: "/places", label: "Достопримечательности" },
  { href: "/accommodation", label: "Жильё" },
];

export const routes: Route[] = [
  {
    id: "genoese",
    title: "Крепость и старый порт",
    duration: "2.5 часа",
    distance: "4.5 км",
    description: "Маршрут от набережной к Генуэзской крепости с панорамой бухты и уютными улочками старого города.",
    tags: ["история", "панорамы"],
  },
  {
    id: "novyi-svet",
    title: "Тропой Голицына в Новый Свет",
    duration: "3 часа",
    distance: "6 км",
    description: "Классическая тропа вдоль скал, гротов и смотровых площадок, с финишем на пляже Нового Света.",
    tags: ["море", "скалы"],
  },
  {
    id: "meganom",
    title: "На закат к мысу Меганом",
    duration: "1.5 часа",
    distance: "3 км",
    description: "Прогулка к маяку и виноградникам, чтобы встретить мягкий закат у самого края Крымской степи.",
    tags: ["закат", "виноградники"],
  },
];

export const places: Place[] = [
  {
    id: "fortress",
    title: "Генуэзская крепость",
    category: "История",
    description: "Главный символ Судака XIV века, мощные стены и башни над морем.",
    location: "ул. Генуэзская крепость, 1",
  },
  {
    id: "golitsyn",
    title: "Грот Голицына",
    category: "Природа",
    description: "Небольшая пещера на скальной тропе с видом на бухты Нового Света.",
    location: "Тропа Голицына",
  },
  {
    id: "promenade",
    title: "Набережная Судака",
    category: "Город",
    description: "Тёплые вечера, рестораны у моря и прогулки вдоль песчаных пляжей.",
    location: "Набережная Али-Баба",
  },
  {
    id: "meganom-sun",
    title: "Мыс Меганом",
    category: "Пейзажи",
    description: "Полуостров с футуристичными пейзажами, дайвингом и идеальными рассветами.",
    location: "Меганом",
  },
];

export const accommodations: Accommodation[] = [
  {
    id: "villa",
    name: "Villa Lazure",
    type: "Бутик-отель",
    priceFrom: 5200,
    distance: "5 минут до моря",
    perks: ["бассейн", "вид на бухту"],
  },
  {
    id: "guesthouse",
    name: "Солнечный дворик",
    type: "Гостевой дом",
    priceFrom: 3200,
    distance: "7 минут до набережной",
    perks: ["тенистый сад", "домашние завтраки"],
  },
  {
    id: "apart",
    name: "Серферские апартаменты",
    type: "Апартаменты",
    priceFrom: 2800,
    distance: "10 минут до пляжа Сурож",
    perks: ["кухня", "терраса"],
  },
];

export const mapPoints: MapPoint[] = [
  {
    id: "fortress",
    title: "Генуэзская крепость",
    description: "Историческая доминанта города",
    category: "История",
  },
  {
    id: "novyi-svet",
    title: "Новый Свет",
    description: "Маршруты, шампанское и пляжи",
    category: "Маршрут",
  },
  {
    id: "meganom",
    title: "Мыс Меганом",
    description: "Лучшие рассветы и дайв-сайты",
    category: "Пейзаж",
  },
];
