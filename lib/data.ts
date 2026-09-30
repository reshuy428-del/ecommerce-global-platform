export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  stock: number;
  badge: string;
  description: string;
  image: string;
  colors: string[];
  features: string[];
  shipping: string;
};

export const categories = [
  'All',
  'Electronics',
  'Home',
  'Fashion',
  'Beauty',
  'Sports',
  'Grocery',
  'Office',
];

export const products: Product[] = [
  {
    id: '1',
    name: 'AeroMax Smartwatch Pro',
    category: 'Electronics',
    price: 249,
    originalPrice: 329,
    rating: 4.8,
    reviews: 1284,
    stock: 48,
    badge: 'Best Seller',
    description: 'Premium smartwatch with GPS, sleep tracking, heart monitoring, and 7-day battery life.',
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=900&q=80',
    colors: ['Midnight', 'Silver', 'Rose Gold'],
    features: ['GPS + 4G', '14-day battery', 'Water resistant'],
    shipping: 'Free delivery in 2-4 days',
  },
  {
    id: '2',
    name: 'VitaNest Air Purifier',
    category: 'Home',
    price: 189,
    originalPrice: 239,
    rating: 4.7,
    reviews: 942,
    stock: 32,
    badge: 'Eco Choice',
    description: 'HEPA air purifier designed for bedrooms and open-plan homes with smart app controls.',
    image: 'https://images.unsplash.com/photo-1585518419759-7fe2e0fbf8a6?auto=format&fit=crop&w=900&q=80',
    colors: ['White', 'Pearl', 'Black'],
    features: ['True HEPA', 'Smart sensor', 'Quiet mode'],
    shipping: 'Ships globally in 3 days',
  },
  {
    id: '3',
    name: 'NovaBeam Projector X8',
    category: 'Electronics',
    price: 689,
    originalPrice: 899,
    rating: 4.9,
    reviews: 514,
    stock: 17,
    badge: 'Top Rated',
    description: 'Ultra-bright projector with cinematic resolution and voice assistant integration.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80',
    colors: ['Black', 'Graphite'],
    features: ['4K support', '300 ANSI lumens', 'Auto focus'],
    shipping: 'Free international shipping',
  },
  {
    id: '4',
    name: 'Summit Pro Backpack',
    category: 'Fashion',
    price: 129,
    rating: 4.6,
    reviews: 860,
    stock: 76,
    badge: 'New Arrival',
    description: 'Weather-resistant carry-all with laptop compartment, anti-theft pockets, and premium fabrics.',
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80',
    colors: ['Navy', 'Olive', 'Sand'],
    features: ['Laptop sleeve', 'Waterproof', 'Expandable'],
    shipping: 'Delivery in 4-6 days',
  },
  {
    id: '5',
    name: 'GlowLab LED Beauty Kit',
    category: 'Beauty',
    price: 89,
    originalPrice: 119,
    rating: 4.5,
    reviews: 643,
    stock: 94,
    badge: 'Hot Deal',
    description: 'Complete skincare and serum kit for daily radiance with dermatologist-tested ingredients.',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=80',
    colors: ['Rose', 'Ivory', 'Cocoa'],
    features: ['Vitamin C', 'Derm-approved', 'Travel-ready'],
    shipping: 'Free shipping over $80',
  },
  {
    id: '6',
    name: 'Velocity Pro Runner',
    category: 'Sports',
    price: 159,
    originalPrice: 210,
    rating: 4.8,
    reviews: 712,
    stock: 51,
    badge: 'Performance',
    description: 'Responsive running shoe with cushioned support and lightweight mesh upper.',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80',
    colors: ['Red', 'Black', 'White'],
    features: ['Responsive foam', 'Breathable mesh', 'Daily training'],
    shipping: '2-day express available',
  },
  {
    id: '7',
    name: 'Harvest Box Organic Set',
    category: 'Grocery',
    price: 59,
    rating: 4.7,
    reviews: 482,
    stock: 120,
    badge: 'Fresh Pick',
    description: 'Curated organic food essentials sourced from sustainable farms across multiple regions.',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=900&q=80',
    colors: ['Green', 'Natural'],
    features: ['Farm direct', 'No additives', 'Monthly delivery'],
    shipping: 'Next-day delivery in select countries',
  },
  {
    id: '8',
    name: 'WorkDesk Pro Monitor',
    category: 'Office',
    price: 419,
    originalPrice: 549,
    rating: 4.9,
    reviews: 327,
    stock: 24,
    badge: 'Office Pick',
    description: '4K high-contrast desktop monitor for creators, remote workers, and modern studios.',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=80',
    colors: ['Black', 'Silver'],
    features: ['27-inch 4K', 'USB-C hub', 'Low blue light'],
    shipping: 'Delivered in 3-5 days',
  },
];

export const dealProducts = products.slice(0, 4);
