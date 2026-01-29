type CampingSpots = {
  id: number;
  name: string;
  location: string;
  type: string; // Beaches, Waterfalls, Creeks, Lakes, Mountains, Forests, Deserts
  description: string;  
  image: string;
  mapUrl: string;
  top: boolean;
}

export const campingSpots: CampingSpots[] = [
  {
    id: 1,
    name: "TIZA",
    location: "Tizi Ouzou, Tigzirt",
    type: "Mountain",
    description: "Beautiful mountain camping area",
    image: "/spots/atlas.jpg",
    mapUrl: "https://maps.google.com/?q=atlas+mountains",
    top: true,
  },
  {
    id: 2,
    name: "Kabylie Forest",
    location: "Setif, Setif",
    type: "Forest",
    description: "Peaceful forest camping",
    image: "/spots/kabylie.jpg",
    mapUrl: "https://maps.google.com/?q=kabylie+forest",
    top: false,
  },
];