import type { Accommodation, MapPoint, Place, Route } from "@/types/content";

type NavLink = {
  href: string;
  label: string;
};

export const navLinks: NavLink[] = [
  {
    href: "/",
    label: "Главная",
  },
  {
    href: "/routes",
    label: "Маршруты",
  },
  {
    href: "/places",
    label: "Места",
  },
  {
    href: "/accommodation",
    label: "Жильё",
  },
  {
    href: "/map",
    label: "Карта",
  },
];

export const places: Place[] = [
  {
    id: "genoese-fortress",
    title: "Генуэзская крепость",
    description: "Символ Судака XIV века с мощными стенами, башнями и панорамой на бухту.",
    image: "https://images.unsplash.com/photo-1505764706515-aa95265c5abc?auto=format&fit=crop&w=1200&q=80",
    latitude: 44.8481,
    longitude: 34.9761,
    category: "fortress",
  },
  {
    id: "sudak-promenade",
    title: "Набережная Судака",
    description: "Пешеходная линия вдоль песчаного пляжа с кафе, патио и мягкими закатами.",
    image: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=1200&q=80",
    latitude: 44.8495,
    longitude: 34.9789,
    category: "beach",
  },
  {
    id: "sokol-view",
    title: "Гора Сокол",
    description: "Скалистый массив над Новым Светом и видом на лазурную бухту и тропу Голицына.",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    latitude: 44.8619,
    longitude: 34.9707,
    category: "mountain",
  },
  {
    id: "meganom-panorama",
    title: "Мыс Меганом",
    description: "Полуостров с футуристичными пейзажами, дайв-сайтами и прозрачной водой.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    latitude: 44.8174,
    longitude: 35.0223,
    category: "view",
  },
  {
    id: "golitsyn-grotto",
    title: "Грот Голицына",
    description: "Небольшая пещера в скале с деревянными настилами и видом на изумрудные бухты Нового Света.",
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80",
    latitude: 44.8276,
    longitude: 34.9173,
    category: "view",
  },
  {
    id: "local-history-museum",
    title: "Краеведческий музей Судака",
    description: "Экспозиции о морской торговле, виноделии и истории крепости в уютном здании у центра города.",
    image: "https://images.unsplash.com/photo-1529429617124-aee7499edc87?auto=format&fit=crop&w=1200&q=80",
    latitude: 44.8505,
    longitude: 34.986,
    category: "museum",
  },
];

export const routes: Route[] = [
  {
    id: "to-fortress",
    title: "Тропа к Генуэзской крепости",
    description: "Маршрут от набережной через виноградники и старый порт к крепости с лучшей обзорной площадкой.",
    duration: "2 часа",
    difficulty: "medium",
    points: [
      { lat: 44.8495, lng: 34.9789 },
      { lat: 44.8481, lng: 34.9761 },
      { lat: 44.8473, lng: 34.9748 },
    ],
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "seafront-walk",
    title: "Прогулка по набережной",
    description: "Лёгкий маршрут вдоль песчаных пляжей, кафе и вечерних огней, идеален для первого знакомства.",
    duration: "1.5 часа",
    difficulty: "easy",
    points: [
      { lat: 44.8472, lng: 34.9831 },
      { lat: 44.8495, lng: 34.9789 },
      { lat: 44.852, lng: 34.9756 },
    ],
    image: "https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "sokol-peak",
    title: "Подъём на гору Сокол",
    description: "Крутой набор высоты по каменным ступеням и тропе с видом на Новый Свет и Кара-Даг.",
    duration: "3 часа",
    difficulty: "hard",
    points: [
      { lat: 44.8572, lng: 34.9438 },
      { lat: 44.8619, lng: 34.9707 },
      { lat: 44.8651, lng: 34.9801 },
    ],
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "meganom-sunset",
    title: "Закат на мысе Меганом",
    description: "Поездка к маяку и каменистым пляжам Меганома, чтобы увидеть розовые волны и бескрайнее море.",
    duration: "2.5 часа",
    difficulty: "medium",
    points: [
      { lat: 44.81, lng: 34.99 },
      { lat: 44.8174, lng: 35.0223 },
      { lat: 44.8211, lng: 35.0418 },
    ],
    image: "https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=1200&q=80",
  },
];

export const accommodations: Accommodation[] = [
  {
    id: "sea-guesthouse",
    title: "Гостевой дом у моря",
    description: "Тихий дворик с кипарисами, верандами и домашними завтраками рядом с пляжем.",
    price: 4200,
    distanceToSea: 250,
    distanceToFortress: 1800,
    type: "guesthouse",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
    rating: 4.7,
  },
  {
    id: "embankment-apartment",
    title: "Квартира у набережной",
    description: "Светлые апартаменты с кухней, большой лоджией и видом на залив.",
    price: 5200,
    distanceToSea: 120,
    distanceToFortress: 1500,
    type: "apartment",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
    rating: 4.8,
  },
  {
    id: "fortress-room",
    title: "Комната рядом с крепостью",
    description: "Уютный номер в старом квартале с видом на башни и виноградные террасы.",
    price: 3100,
    distanceToSea: 900,
    distanceToFortress: 600,
    type: "room",
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80",
    rating: 4.5,
  },
  {
    id: "vineyard-loft",
    title: "Лофт среди виноградников",
    description: "Стильный лофт с панорамными окнами и террасой, окружённый виноградом.",
    price: 5800,
    distanceToSea: 1800,
    distanceToFortress: 2200,
    type: "apartment",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    rating: 4.9,
  },
  {
    id: "bay-sunrise",
    title: "Комната с видом на бухту",
    description: "Мини-отель с коворкингом, быстрым интернетом и мягким утренним светом.",
    price: 3600,
    distanceToSea: 400,
    distanceToFortress: 1200,
    type: "room",
    image: "https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=1200&q=80",
    rating: 4.6,
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
