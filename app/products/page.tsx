import Link from 'next/link';
import { ArrowRight, ShieldCheck, Truck, Percent, Sparkles, Zap } from 'lucide-react';
import { ProductCard } from '@/components/ProductCard';
import { products, dealProducts } from '@/lib/data';

const trustBadges = [
  { icon: ShieldCheck, title: 'Trusted brands', text: 'Curated catalog from global leaders' },
  { icon: Truck, title: 'Fast shipping', text: 'Deliveries to 120+ countries' },
  { icon: Percent, title: 'Exclusive pricing', text: 'Members save up to 60%' },
];

export default function HomePage() {
  return (
    <div>
      <section className="bg-slate-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-24">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-200">
              <Sparkles className="h-4 w-4" />
              Global shopping made smarter
            </span>

            <div className="space-y-5">
              <h1 className="max-w-xl text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
                Shop premium essentials for every lifestyle.
              </h1>
              <p className="max-w-lg text-lg text-slate-300">
                Discover award-winning products, seasonal deals, premium electronics, home essentials, fashion, and curated bundles shipped worldwide.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Link href="/products" className="inline-flex items-center gap-2 rounded-2xl bg-accent px-6 py-3.5 font-semibold text-slate-900 transition hover:bg-yellow-500">
                Shop now
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/admin" className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10">
                Explore marketplace
              </Link>
            </div>

            <div className="grid max-w-xl grid-cols-3 gap-6 pt-4">
              <div>
                <p className="text-3xl font-black">2.4M+</p>
                <p className="text-sm text-slate-400">happy shoppers</p>
              </div>
              <div>
                <p className="text-3xl font-black">120+</p>
                <p className="text-sm text-slate-400">countries served</p>
              </div>
              <div>
                <p className="text-3xl font-black">4.9/5</p>
                <p className="text-sm text-slate-400">average rating</p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-4 shadow-soft backdrop-blur">
            <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-900">
              <img
                src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80"
                alt="Shopping showcase"
                className="h-[420px] w-full object-cover"
              />
            </div>
            <div className="mt-5 grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-white/5 p-4">
                <div className="mb-2 inline-flex rounded-xl bg-primary/20 p-2 text-primary">
                  <Zap className="h-5 w-5" />
                </div>
                <p className="text-lg font-bold">Flash deals</p>
                <p className="mt-1 text-sm text-slate-300">up to 60% off trending picks</p>
              </div>
              <div className="rounded-2xl bg-white/5 p-4">
                <div className="mb-2 inline-flex rounded-xl bg-emerald-500/20 p-2 text-emerald-300">
                  <Truck className="h-5 w-5" />
                </div>
                <p className="text-lg font-bold">Express delivery</p>
                <p className="mt-1 text-sm text-slate-300">to 120+ global markets</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {trustBadges.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-4 inline-flex rounded-2xl bg-blue-50 p-3 text-primary">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Deals of the day</p>
              <h2 className="mt-2 text-3xl font-black text-slate-900">Trending picks</h2>
            </div>
            <Link href="/products" className="text-sm font-semibold text-primary hover:text-blue-700">
              See all deals →
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {dealProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] bg-gradient-to-r from-slate-950 via-slate-900 to-blue-900 p-8 text-white shadow-soft md:p-12">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">Membership</p>
              <h2 className="mt-2 text-3xl font-black">Join GlobalCart Plus</h2>
              <p className="mt-3 max-w-lg text-slate-300">
                Unlock free delivery, low-price guarantees, and access to premium offers across every category.
              </p>
            </div>
            <Link href="/products" className="inline-flex items-center justify-center rounded-2xl bg-accent px-6 py-3.5 font-semibold text-slate-900 hover:bg-yellow-500">
              Unlock savings
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Featured</p>
              <h2 className="mt-2 text-3xl font-black text-slate-900">Most loved products</h2>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {products.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
