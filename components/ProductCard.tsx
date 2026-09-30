import Link from 'next/link';

export function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-slate-950 text-slate-200">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-5 lg:px-8">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 font-black text-white">
              G
            </div>
            <div>
              <div className="text-xl font-black tracking-tight text-white">GlobalCart</div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-slate-400">Market</div>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm text-slate-400">
            Delivering premium products and trusted shopping experiences to customers in 120+ countries.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Shop</h3>
          <ul className="space-y-3 text-sm text-slate-300">
            <li><Link href="/products">All Products</Link></li>
            <li><Link href="/products">Featured Deals</Link></li>
            <li><Link href="/products">Trending</Link></li>
            <li><Link href="/products">New Arrivals</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Company</h3>
          <ul className="space-y-3 text-sm text-slate-300">
            <li>About</li>
            <li>Journal</li>
            <li>Careers</li>
            <li>Press</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Support</h3>
          <ul className="space-y-3 text-sm text-slate-300">
            <li>Help Center</li>
            <li>Shipping</li>
            <li>Returns</li>
            <li>Policy</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-800 px-4 py-5 text-center text-sm text-slate-400 sm:px-6 lg:px-8">
        © 2026 GlobalCart. All rights reserved.
      </div>
    </footer>
  );
}
