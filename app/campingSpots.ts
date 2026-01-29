type CampingSpots = {
  id: number;
  name: string;
  type: string;
  image: string;
  mapUrl: string;
  description: string;  
}

export const campingSpots: CampingSpots[] = [
  {
    id: 1,
    name: "Atlas Mountains",
    type: "Mountain",
    image: "/spots/atlas.jpg",
    mapUrl: "https://maps.google.com/?q=...",
    description: "Beautiful mountain camping area",
  },
  {
    id: 2,
    name: "Sahara Camp",
    type: "Desert",
    image: "/spots/sahara.jpg",
    mapUrl: "https://maps.google.com/?q=...",
    description: "Peaceful desert night experience",
  },
];