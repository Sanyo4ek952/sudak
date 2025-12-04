export type Place = {
  id: string;
  title: string;
  description: string;
  image: string;
  latitude: number;
  longitude: number;
  category: "fortress" | "beach" | "mountain" | "view" | "museum";
};
