"use client";

import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/components/CartProvider';
import type { Product } from '@/lib/data';

export function AddToCartButton({ product }: { product: Product }) {
  const { addToCart } = useCart();

  return (
    <button
      type="button"
      onClick={() => addToCart(product)}
      className="inline-flex items-center gap-2 rounded-2xl bg-primary px-6 py-3.5 text-base font-semibold text-white transition hover:bg-blue-700"
    >
      <ShoppingCart className="h-4 w-4" />
      Add to cart
    </button>
  );
}
