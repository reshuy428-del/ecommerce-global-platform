import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ShieldCheck, Truck, Star, Check } from 'lucide-react';
import { AddToCartButton } from '@/components/AddToCartButton';
import { products } from '@/lib/data';

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = products.find((item) => item.id === params.id);

  if (!product) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <Link href="/products" className="mb-8 inline-block text-sm font-medium text-primary hover:text-blue-700">
        ← Back to products
      </Link>

      <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-4 shadow-sm">
          <Image
            src={product.image}
            alt={product.name}
            width={1200}
            height={1200}
            className="h-[520px] w-full rounded-[1.5rem] object-cover"
          />
        </div>

        <div className="space-y-6 rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm">
          <div className="flex items-center justify-between gap-3">
            <span className="rounded-full bg-slate-100 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600">
              {product.category}
            </span>
            <div className="flex items-center gap-1 text-amber-500">
              <Star className="h-4 w-4 fill-current" />
              <span className="text-sm font-semibold text-slate-800">{product.rating} ({product.reviews})</span>
            </div>
          </div>

          <div>
            <h1 className="text-4xl font-black text-slate-900">{product.name}</h1>
            <p className="mt-4 text-slate-600">{product.description}</p>
          </div>

          <div className="flex items-end gap-3">
            <p className="text-4xl font-black text-slate-900">${product.price}</p>
            {product.originalPrice ? (
              <p className="text-xl text-slate-400 line-through">${product.originalPrice}</p>
            ) : null}
            <span className="rounded-full bg-emerald-100 px-2 py-1 text-xs font-bold text-emerald-700">Save 25%</span>
          </div>

          <div className="flex flex-wrap gap-3">
            {product.colors.map((color) => (
              <span key={color} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700">
                {color}
              </span>
            ))}
          </div>

          <div className="flex gap-3 pt-2">
            <AddToCartButton product={product} />
            <Link href="/checkout" className="rounded-2xl border border-slate-200 px-6 py-3.5 font-semibold text-slate-800 transition hover:bg-slate-50">
              Buy now
            </Link>
          </div>

          <div className="grid gap-3 rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">
            <div className="flex items-center gap-3">
              <Truck className="h-5 w-5 text-primary" />
              <span>{product.shipping}</span>
            </div>
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-5 w-5 text-primary" />
              <span>30-day returns and secure checkout</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm">
          <h2 className="text-2xl font-black text-slate-900">Highlights</h2>
          <ul className="mt-6 space-y-4">
            {product.features.map((feature) => (
              <li key={feature} className="flex items-center gap-3 text-slate-700">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                  <Check className="h-4 w-4" />
                </span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm">
          <h2 className="text-2xl font-black text-slate-900">Why shoppers choose it</h2>
          <p className="mt-4 text-slate-600">
            Designed for reliability, convenience, and style, this product combines premium materials, advanced functionality, and trusted performance. It is built to support everyday life and elevate modern routines.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl bg-blue-50 p-4 text-center">
              <p className="text-2xl font-black text-primary">4.9</p>
              <p className="mt-1 text-sm text-slate-600">Customer rating</p>
            </div>
            <div className="rounded-2xl bg-emerald-50 p-4 text-center">
              <p className="text-2xl font-black text-emerald-600">98%</p>
              <p className="mt-1 text-sm text-slate-600">Repeat buyers</p>
            </div>
            <div className="rounded-2xl bg-amber-50 p-4 text-center">
              <p className="text-2xl font-black text-amber-600">24/7</p>
              <p className="mt-1 text-sm text-slate-600">Support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
