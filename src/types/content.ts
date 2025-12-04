export type Route = {
  id: string;
  title: string;
  duration: string;
  distance: string;
  description: string;
  tags: string[];
};

export type Place = {
  id: string;
  title: string;
  category: string;
  description: string;
  location: string;
};

export type Accommodation = {
  id: string;
  name: string;
  type: string;
  priceFrom: number;
  distance: string;
  perks: string[];
};

export type MapPoint = {
  id: string;
  title: string;
  description: string;
  category: string;
};
