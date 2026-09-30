"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Star, ShoppingCart } from 'lucide-react';
import { useCart } from '@/components/CartProvider';
import type { Product } from '@/lib/data';

export function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();

  return (
    <div className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
      <div className="relative overflow-hidden">
        <Link href={`/product/${product.id}`}>
          <Image
            src={product.image}
            alt={product.name}
            width={800}
            height={800}
            className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </Link>
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-700">
          {product.badge}
        </span>
      </div>

      <div className="space-y-4 p-5">
        <div className="flex items-center justify-between">
          <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-slate-500">
            {product.category}
          </span>
          <div className="flex items-center gap-1 text-sm text-amber-500">
            <Star className="h-4 w-4 fill-current" />
            <span className="font-semibold text-slate-800">{product.rating}</span>
          </div>
        </div>

        <Link href={`/product/${product.id}`} className="block text-xl font-bold text-slate-900 hover:text-primary">
          {product.name}
        </Link>

        <p className="text-sm text-slate-600">{product.description}</p>

        <div className="flex items-center justify-between">
          <div>
            <p className="text-2xl font-black text-slate-900">${product.price}</p>
            {product.originalPrice ? (
              <p className="text-sm text-slate-400 line-through">${product.originalPrice}</p>
            ) : null}
          </div>
          <p className="text-xs text-emerald-600">{product.stock} in stock</p>
        </div>

        <div className="flex gap-3">
          <Link
            href={`/product/${product.id}`}
            className="flex-1 rounded-2xl border border-slate-200 px-4 py-3 text-center text-sm font-semibold text-slate-800 transition hover:border-slate-300 hover:bg-slate-50"
          >
            View item
          </Link>
          <button
            onClick={() => addToCart(product)}
            className="flex items-center justify-center rounded-2xl bg-primary px-4 py-3 text-white transition hover:bg-blue-700"
            aria-label={`Add ${product.name} to cart`}
          >
            <ShoppingCart className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
