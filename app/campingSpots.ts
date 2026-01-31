type CampingSpots = {
  id: number;
  name: string;
  location: string;
  type: string; // Beaches, Waterfalls, Creeks, Lakes, Mountains, Forests, Deserts
  description: string;
  image1: string;
  image2: string;
  image3: string;
  mapUrl: string;
  rating: number;
  top: boolean;
};

export const campingSpots: CampingSpots[] = [
  {
    id: 1,
    name: "SIDI AKKACHA",
    location: "Skikda, El Marsa",
    type: "Beach",
    description: "Beautiful beach camping area",
    image1: "/spotsImages/sidi-akkacha-1.jpg",
    image2: "/spotsImages/sidi-akkacha-2.jpg",
    image3: "/spotsImages/sidi-akkacha-3.jpg",
    mapUrl: "https://maps.app.goo.gl/akUgNsCzfwqFjefSA",
    rating: 4.5,
    top: false,
  },
  {
    id: 2,
    name: "OUED DASS",
    location: "Bejaia, Aftis",
    type: "Beach",
    description: "Beautiful beach camping area",
    image1: "/spotsImages/oued-dass-1.jpg",
    image2: "/spotsImages/oued-dass-2.jpg",
    image3: "/spotsImages/oued-dass-3.jpg",
    mapUrl: "https://maps.app.goo.gl/3dCWsthzXJY867Ka8",
    rating: 4.5,
    top: false,
  },
  {
    id: 3,
    name: "TAMARIS",
    location: "Algeria, Ain Taya",
    type: "Beach",
    description: "Beautiful beach camping area",
    image1: "/spotsImages/tamaris-1.jpg",
    image2: "/spotsImages/tamaris-2.jpg",
    image3: "/spotsImages/tamaris-3.jpg",
    mapUrl: "https://maps.app.goo.gl/ovs59mR5PhCZLPcP7",
    rating: 4.5,
    top: false,
  },
  {
    id: 4,
    name: "TAGHZOULT",
    location: "Chlef, Sidi Abderrahmane",
    type: "Beach",
    description: "Beautiful beach camping area",
    image1: "/spotsImages/taghzoult-1.jpg",
    image2: "/spotsImages/taghzoult-2.jpg",
    image3: "/spotsImages/taghzoult-3.jpg",
    mapUrl: "https://maps.app.goo.gl/LgUaj9snNuR8vrzc7",
    rating: 4.5,
    top: false,
  },
  {
    id: 5,
    name: "SIDI MEROUAN",
    location: "Chlef, Tenes",
    type: "Beach",
    description: "Beautiful beach camping area",
    image1: "/spotsImages/sidi-merouan-1.jpg",
    image2: "/spotsImages/sidi-merouan-2.jpg",
    image3: "/spotsImages/sidi-merouan-3.jpg",
    mapUrl: "https://maps.app.goo.gl/Jqir3GbKNo2md1dL7",
    rating: 4.5,
    top: false,
  },
  {
    id: 6,
    name: "CAP DE FERE",
    location: "Skikda, El Marsa",
    type: "Beach",
    description: "Beautiful beach camping area",
    image1: "/spotsImages/cap-de-fere-1.jpg",
    image2: "/spotsImages/cap-de-fere-2.jpg",
    image3: "/spotsImages/cap-de-fere-3.jpg",
    mapUrl: "https://maps.app.goo.gl/EVRJssF1gt59Ksrq5",
    rating: 4.5,
    top: false,
  },
];
