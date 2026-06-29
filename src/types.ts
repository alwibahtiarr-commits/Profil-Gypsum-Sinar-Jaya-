export interface Product {
  id: string;
  name: string;
  type: 'minimalis' | 'klasik';
  sizeInCm: number;
  pricePerMeter: number;
  isBestSeller: boolean;
  image: string;
  description: string;
  code?: string;
}

export interface SOPStep {
  number: number;
  title: string;
  description: string;
  badge?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  comment: string;
  rating: number;
  location?: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  image: string;
  type: string;
}
