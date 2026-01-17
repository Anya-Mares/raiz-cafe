export interface Coffee {
  id: number;
  name: string;
  origin: string;
  notes: string;
  image: string;
}

export const coffees: Coffee[] = [
  {
    id: 1,
    name: "Sierra Madre",
    origin: "Chiapas, México",
    notes: "Chocolate oscuro y nuez",
    image: "/coffee-1.jpg",
  },
  {
    id: 2,
    name: "Altura Andina",
    origin: "Colombia",
    notes: "Caramelo y cítricos",
    image: "/coffee-2.jpg",
  },
  {
    id: 3,
    name: "Monte Azul",
    origin: "Veracruz, México",
    notes: "Vainilla y cacao",
    image: "/coffee-3.jpg",
  },
];
