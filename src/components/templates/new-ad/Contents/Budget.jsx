import { Coins, Wallet2, CalendarClock, Zap } from 'lucide-react';
import clsx from 'clsx';

const cpmPresets = ['۰٫۱', '۰٫۳', '۰٫۵', '۰٫۷'];
const budgetPresets = [20, 100, 500];

function Budget({ formData, setFormData }) {
  const estimatedReach = formData.cpm > 0 ? Math.round((formData.budget / formData.cpm) * 1000) : 0;

  return (
    <div className="mx-auto max-w-2xl px-4 py-6 sm:px-8 sm:py-8">
      <div className="mb-8">
        <label className="text-paper mb-3 flex items-center gap-2 text-sm font-bold">
          <Coins className="text-gold-400 size-4" />
          حداکثر CPM (به ازای هزار بازدید)
        </label>
        <div className="mb-3 flex gap-2">
          {cpmPresets.map((p) => (
            <button
              key={p}
              onClick={() =>
                setFormData((prev) => ({ ...prev, cpm: parseFloat(p.replace('٫', '.')) }))
              }
              className={clsx(
                'flex-1 rounded-2xl border py-3 font-mono text-sm font-bold transition-colors',
                formData.cpm === parseFloat(p.replace('٫', '.'))
                  ? 'border-gold-500/40 bg-gold-500/10 text-gold-400'
                  : 'bg-ink-700/40 text-mist border-white/10 hover:border-white/20'
              )}
            >
              {p}
            </button>
          ))}
        </div>
        <div className="bg-ink-700/60 flex items-center gap-3 rounded-2xl border border-white/10 px-4 py-3">
          <input
            type="number"
            min="0.1"
            step="0.1"
            value={formData.cpm}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, cpm: parseFloat(e.target.value) || 0 }))
            }
            className="text-paper w-full bg-transparent font-mono text-sm focus:outline-none"
          />
          <span className="text-mist shrink-0 text-xs font-bold">TON</span>
        </div>
      </div>

      <div className="mb-8">
        <label className="text-paper mb-3 flex items-center gap-2 text-sm font-bold">
          <Wallet2 className="text-gold-400 h-4 w-4" />
          بودجه کل کمپین
        </label>
        <div className="mb-3 flex gap-2">
          {budgetPresets.map((b) => (
            <button
              key={b}
              onClick={() => setFormData((prev) => ({ ...prev, budget: b }))}
              className={clsx(
                'flex-1 rounded-2xl border py-3 font-mono text-sm font-bold transition-colors',
                formData.budget === b
                  ? 'border-gold-500/40 bg-gold-500/10 text-gold-400'
                  : 'bg-ink-700/40 text-mist border-white/10 hover:border-white/20'
              )}
            >
              {b}
            </button>
          ))}
        </div>
        <div className="bg-ink-700/60 flex items-center gap-3 rounded-2xl border border-white/10 px-4 py-3">
          <input
            type="number"
            min="1"
            value={formData.budget}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, budget: parseFloat(e.target.value) || 0 }))
            }
            className="text-paper w-full bg-transparent font-mono text-sm focus:outline-none"
          />
          <span className="text-mist shrink-0 text-xs font-bold">TON</span>
        </div>
      </div>

      <div className="mb-8">
        <label className="text-paper mb-3 flex items-center gap-2 text-sm font-bold">
          <CalendarClock className="text-gold-400 h-4 w-4" />
          زمان‌بندی
        </label>
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => setFormData((prev) => ({ ...prev, schedule: 'now' }))}
            className={clsx(
              'rounded-2xl border px-4 py-3 text-xs font-bold transition-colors',
              formData.schedule === 'now'
                ? 'border-gold-500/40 bg-gold-500/10 text-gold-400'
                : 'bg-ink-700/40 text-mist border-white/10 hover:border-white/20'
            )}
          >
            بلافاصله پس از تأیید
          </button>
          <button
            onClick={() => setFormData((prev) => ({ ...prev, schedule: 'later' }))}
            className={clsx(
              'rounded-2xl border px-4 py-3 text-xs font-bold transition-colors',
              formData.schedule === 'later'
                ? 'border-gold-500/40 bg-gold-500/10 text-gold-400'
                : 'bg-ink-700/40 text-mist border-white/10 hover:border-white/20'
            )}
          >
            زمان‌بندی برای تاریخ خاص
          </button>
        </div>

        {formData.schedule === 'later' && (
          <input
            type="date"
            value={formData.scheduleDate}
            onChange={(e) => setFormData((prev) => ({ ...prev, scheduleDate: e.target.value }))}
            className="bg-ink-700/60 text-paper focus:border-gold-500/40 focus:ring-gold-500/20 mt-3 w-full rounded-2xl border border-white/10 px-4 py-3 font-mono text-sm focus:ring-2 focus:outline-none"
          />
        )}
      </div>

      <div className="rounded-2xl border border-teal-500/20 bg-teal-500/5 p-5">
        <p className="mb-2 flex items-center gap-2 text-xs font-bold text-teal-300">
          <Zap className="size-4" />
          تخمین بازدید کمپین
        </p>
        <p className="text-paper font-mono text-3xl font-bold tabular-nums">{estimatedReach}</p>
        <p className="text-mist mt-1 text-xs">
          بازدید تخمینی؛ عدد نهایی به رقابت لحظه‌ای کانال‌های انتخابی بستگی دارد.
        </p>
      </div>
    </div>
  );
}

export default Budget;
