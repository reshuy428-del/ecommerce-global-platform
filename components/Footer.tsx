"use client";

import Link from 'next/link';
import { ShoppingCart, Search, Menu, ChevronDown } from 'lucide-react';
import { useCart } from '@/components/CartProvider';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'Deals', href: '/products' },
  { label: 'Support', href: '#' },
];

export function Header() {
  const { cartCount } = useCart();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-xl">
      <div className="bg-brand text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 text-xs sm:px-6 lg:px-8">
          <p>Worldwide shipping • Free delivery over $120</p>
          <div className="hidden items-center gap-3 md:flex">
            <span>Sell on GlobalCart</span>
            <span>Customer Service</span>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          <button className="rounded-xl border border-slate-200 p-2 md:hidden" aria-label="Open menu">
            <Menu className="h-5 w-5" />
          </button>

          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-lg font-black text-white">
              G
            </div>
            <div>
              <div className="text-lg font-black tracking-tight text-slate-900">GlobalCart</div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-slate-500">Market</div>
            </div>
          </Link>

          <div className="hidden flex-1 items-center rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2 md:flex">
            <div className="flex items-center gap-2 border-r border-slate-200 pr-3 text-sm text-slate-600">
              All categories
              <ChevronDown className="h-4 w-4" />
            </div>
            <input
              placeholder="Search for products, brands, and categories"
              className="w-full bg-transparent px-3 text-sm text-slate-700 outline-none placeholder:text-slate-400"
            />
            <button className="rounded-xl bg-accent p-2 text-slate-900 transition hover:bg-yellow-500">
              <Search className="h-4 w-4" />
            </button>
          </div>

          <div className="ml-auto flex items-center gap-3">
            <div className="hidden rounded-xl border border-slate-200 px-3 py-2 text-sm text-slate-700 md:block">
              EN <span className="text-slate-400">|</span> USD
            </div>
            <Link href="/admin" className="hidden rounded-xl border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 md:block">
              Admin
            </Link>
            <Link href="/cart" className="relative rounded-2xl bg-slate-100 p-3 text-slate-800 transition hover:bg-slate-200">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white">
                {cartCount}
              </span>
            </Link>
          </div>
        </div>

        <div className="mt-4 hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-slate-700 transition hover:text-primary">
              {item.label}
            </Link>
          ))}
          <div className="ml-auto flex items-center gap-4 text-sm text-slate-600">
            <span>Flash Deals</span>
            <span>Trending</span>
            <span>Marketplace</span>
          </div>
        </div>
      </div>
    </header>
  );
}
