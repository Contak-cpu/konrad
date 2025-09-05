export interface Property {
  id: number;
  title: string;
  address: string;
  type: 'Monoambiente' | 'Departamento' | 'Casa' | 'Local comercial';
  rooms: number;
  price: number;
  additionalCosts?: number | string;
  description: string;
  available: 'Inmediato' | 'Septiembre';
  features: string[];
  imageUrl: string;
  // Add more images for a gallery view
  images?: string[]; 
}

export interface Filters {
  searchTerm: string;
  type: string;
  rooms: string;
  availability: string;
  priceRange: string; // Replaced priceMin and priceMax
}

export type SortOption = 'default' | 'price_asc' | 'price_desc';

export interface FaqItem {
  question: string;
  answer: string;
}
