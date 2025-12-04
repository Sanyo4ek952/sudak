export type Accommodation = {
  id: string;
  title: string;
  description: string;
  price: number;
  distanceToSea: number;
  distanceToFortress: number;
  type: "guesthouse" | "apartment" | "room";
  image: string;
  rating: number;
};
