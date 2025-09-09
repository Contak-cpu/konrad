export interface Property {
  id: number;
  title: string;
  address: string;
  type: 'Monoambiente' | 'Departamento' | 'Casa' | 'Local comercial' | 'Lote' | 'Galpón';
  rooms: number;
  price: number;
  additionalCosts?: number | string;
  description: string;
  available: 'Inmediato' | 'Septiembre' | 'En construcción' | 'A terminar';
  features: string[];
  imageUrl: string;
  // Add more images for a gallery view
  images?: string[];
  // Add property operation type
  operation: 'Alquiler' | 'Venta';
  // Add hidden property to hide properties without real photos
  hidden?: boolean;
}

export interface Filters {
  searchTerm: string;
  type: string;
  rooms: string;
  availability: string;
  priceRange: string; // Replaced priceMin and priceMax
  priceMin: string; // Custom price range
  priceMax: string; // Custom price range
  operation: string; // Add operation filter
}

export type SortOption = 'default' | 'price_asc' | 'price_desc';

export interface FaqItem {
  question: string;
  answer: string;
}
