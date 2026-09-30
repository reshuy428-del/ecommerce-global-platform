import { Activity, DollarSign, Package, Users, ArrowUpRight } from 'lucide-react';

const stats = [
  { label: 'Revenue', value: '$1.28M', change: '+12.4%', icon: DollarSign },
  { label: 'Orders', value: '8,436', change: '+9.1%', icon: Package },
  { label: 'Visitors', value: '62.8K', change: '+18.5%', icon: Users },
  { label: 'Conversion', value: '4.8%', change: '+1.2%', icon: Activity },
];

const activity = [
  { name: 'AeroMax Smartwatch Pro', sales: '198 sold', value: '$49,902' },
  { name: 'NovaBeam Projector X8', sales: '104 sold', value: '$71,456' },
  { name: 'Summit Pro Backpack', sales: '221 sold', value: '$28,609' },
  { name: 'GlowLab Beauty Kit', sales: '143 sold', value: '$12,727' },
];

export default function AdminPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Dashboard</p>
          <h1 className="mt-2 text-4xl font-black text-slate-900">Marketplace admin</h1>
        </div>
        <button className="rounded-2xl bg-primary px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700">
          Export report
        </button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {stats.map(({ label, value, change, icon: Icon }) => (
          <div key={label} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="rounded-2xl bg-blue-50 p-3 text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2 py-1 text-xs font-semibold text-emerald-700">
                <ArrowUpRight className="h-3 w-3" />
                {change}
              </span>
            </div>
            <p className="mt-6 text-sm text-slate-500">{label}</p>
            <p className="mt-2 text-3xl font-black text-slate-900">{value}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 grid gap-8 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-black text-slate-900">Performance overview</h2>
            <span className="text-sm text-slate-500">This month</span>
          </div>

          <div className="grid h-64 grid-cols-7 items-end gap-3">
            {[28, 44, 36, 61, 59, 80, 100].map((height, idx) => (
              <div key={idx} className="flex flex-col items-center justify-end gap-3">
                <div className="w-full rounded-t-2xl bg-gradient-to-t from-primary to-blue-300" style={{ height: `${height}%` }} />
                <span className="text-xs text-slate-400">{['M', 'T', 'W', 'T', 'F', 'S', 'S'][idx]}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm">
          <h2 className="text-2xl font-black text-slate-900">Top sellers</h2>
          <div className="mt-6 space-y-4">
            {activity.map((item) => (
              <div key={item.name} className="flex items-center justify-between rounded-2xl bg-slate-50 p-4">
                <div>
                  <p className="font-semibold text-slate-900">{item.name}</p>
                  <p className="text-sm text-slate-500">{item.sales}</p>
                </div>
                <p className="text-sm font-bold text-slate-900">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
