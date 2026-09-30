"use client";

import Link from 'next/link';
import { useCart } from '@/components/CartProvider';

export default function CheckoutPage() {
  const { cart, subtotal } = useCart();
  const shipping = cart.length ? 0 : 0;
  const tax = subtotal * 0.08;

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Checkout</p>
        <h1 className="mt-2 text-4xl font-black text-slate-900">Secure payment</h1>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm">
          <h2 className="text-2xl font-black text-slate-900">Shipping details</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <label className="text-sm font-medium text-slate-700">
              First name
              <input className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-primary" placeholder="John" />
            </label>
            <label className="text-sm font-medium text-slate-700">
              Last name
              <input className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-primary" placeholder="Doe" />
            </label>
            <label className="text-sm font-medium text-slate-700 sm:col-span-2">
              Email
              <input className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-primary" placeholder="you@example.com" />
            </label>
            <label className="text-sm font-medium text-slate-700 sm:col-span-2">
              Delivery address
              <input className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-primary" placeholder="530 Market Street, New York" />
            </label>
          </div>

          <div className="mt-10">
            <h2 className="text-2xl font-black text-slate-900">Payment method</h2>
            <div className="mt-6 space-y-3">
              <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <span className="font-medium text-slate-700">Visa ending in 2048</span>
                <span className="text-xs uppercase tracking-[0.2em] text-slate-500">Preferred</span>
              </div>
              <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-4">
                <span className="font-medium text-slate-700">PayPal</span>
                <span className="text-xs uppercase tracking-[0.2em] text-slate-500">Alternate</span>
              </div>
            </div>
          </div>
        </div>

        <aside className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm">
          <h2 className="text-2xl font-black text-slate-900">Order summary</h2>

          <div className="mt-6 space-y-4">
            {cart.length === 0 ? (
              <p className="text-sm text-slate-600">Your cart is empty.</p>
            ) : (
              cart.map((item) => (
                <div key={item.id} className="flex items-center justify-between gap-4 text-sm text-slate-700">
                  <span>
                    {item.name} x {item.quantity}
                  </span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))
            )}
          </div>

          <div className="mt-6 space-y-3 border-t border-slate-200 pt-5 text-sm text-slate-600">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
            </div>
            <div className="flex justify-between">
              <span>Tax</span>
              <span>${tax.toFixed(2)}</span>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between border-t border-slate-200 pt-5 text-lg font-black text-slate-900">
            <span>Total</span>
            <span>${(subtotal + tax + shipping).toFixed(2)}</span>
          </div>

          <button className="mt-8 w-full rounded-2xl bg-primary px-5 py-3.5 font-semibold text-white hover:bg-blue-700">
            Place order
          </button>
          <Link href="/products" className="mt-4 block text-center text-sm font-medium text-primary hover:text-blue-700">
            Return to products
          </Link>
        </aside>
      </div>
    </div>
  );
}
