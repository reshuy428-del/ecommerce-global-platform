import Link from 'next/link';
import { ProductCard } from '@/components/ProductCard';
import { categories, products } from '@/lib/data';

export default function ProductsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Shop all</p>
          <h1 className="mt-2 text-4xl font-black text-slate-900">Curated global essentials</h1>
        </div>
        <div className="rounded-full border border-slate-200 bg-white px-3 py-2 text-sm text-slate-600">
          {products.length}+ products available
        </div>
      </div>

      <div className="mb-8 flex flex-wrap gap-3">
        {categories.map((category) => (
          <button
            key={category}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
              category === 'All'
                ? 'border-primary bg-primary text-white'
                : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="mt-12 flex items-center justify-center">
        <Link href="/checkout" className="rounded-2xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800">
          Proceed to checkout
        </Link>
      </div>
    </div>
  );
}
