"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '@/components/CartProvider';

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart, subtotal } = useCart();

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Your cart</p>
          <h1 className="mt-2 text-4xl font-black text-slate-900">Shopping bag</h1>
        </div>
        <Link href="/products" className="text-sm font-semibold text-primary hover:text-blue-700">
          Continue shopping
        </Link>
      </div>

      {cart.length === 0 ? (
        <div className="rounded-[2rem] border border-dashed border-slate-300 bg-white p-12 text-center shadow-sm">
          <h2 className="text-2xl font-black text-slate-900">Your cart is empty</h2>
          <p className="mt-2 text-slate-600">Add a few premium items to get started.</p>
          <Link href="/products" className="mt-6 inline-flex rounded-2xl bg-primary px-6 py-3 font-semibold text-white hover:bg-blue-700">
            Explore products
          </Link>
        </div>
      ) : (
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            {cart.map((item) => (
              <div key={item.id} className="flex flex-col gap-4 rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm sm:flex-row sm:items-center">
                <div className="relative h-28 w-full overflow-hidden rounded-2xl sm:w-32">
                  <Image src={item.image} alt={item.name} fill className="object-cover" />
                </div>

                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">{item.name}</h3>
                      <p className="mt-1 text-sm text-slate-500">{item.category}</p>
                    </div>
                    <button onClick={() => removeFromCart(item.id)} className="text-slate-400 hover:text-red-500">
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>

                  <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-3 rounded-full border border-slate-200 bg-slate-50 px-2 py-1.5">
                      <button onClick={() => updateQuantity(item.id, 'decrease')} className="rounded-full bg-white p-2 hover:bg-slate-100">
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="min-w-8 text-center text-sm font-semibold">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, 'increase')} className="rounded-full bg-white p-2 hover:bg-slate-100">
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>

                    <p className="text-2xl font-black text-slate-900">${item.price * item.quantity}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <aside className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-black text-slate-900">Summary</h2>

            <div className="mt-6 space-y-4 text-sm text-slate-600">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between">
                <span>Tax</span>
                <span>$14.90</span>
              </div>
            </div>

            <div className="mt-6 border-t border-slate-200 pt-5">
              <div className="flex items-center justify-between text-lg font-bold text-slate-900">
                <span>Total</span>
                <span>${(subtotal + 14.9).toFixed(2)}</span>
              </div>
            </div>

            <Link href="/checkout" className="mt-8 block rounded-2xl bg-primary px-5 py-3.5 text-center font-semibold text-white hover:bg-blue-700">
              Proceed to checkout
            </Link>
          </aside>
        </div>
      )}
    </div>
  );
}
