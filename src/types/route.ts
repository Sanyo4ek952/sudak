export type Route = {
  id: string;
  title: string;
  description: string;
  duration: string;
  difficulty: "easy" | "medium" | "hard";
  points: Array<{ lat: number; lng: number }>;
  image: string;
};
