import { Eye, UserPlus, Bot, ShoppingBag, Pencil } from 'lucide-react';
import AdPreviewCard from './AdPreviewCard.jsx';

const MAX_CHARS = 160;

const ctaOptions = [
  { key: 'view', label: 'مشاهده کانال', icon: Eye },
  { key: 'join', label: 'عضویت', icon: UserPlus },
  { key: 'bot', label: 'شروع ربات', icon: Bot },
  { key: 'buy', label: 'خرید', icon: ShoppingBag },
  { key: 'custom', label: 'سفارشی', icon: Pencil },
];

function AdContent({ formData, setFormData }) {
  const remaining = MAX_CHARS - formData.text.length;
  const counterColor =
    remaining < 0 ? 'text-red-400' : remaining < 20 ? 'text-gold-400' : 'text-mist';

  const activeCtaLabel =
    formData.ctaKey === 'custom'
      ? formData.customCta
      : ctaOptions.find((o) => o.key === formData.ctaKey)?.label;

  return (
    <div className="mx-auto max-w-2xl px-4 py-6 sm:px-8 sm:py-8">
      <div className="mb-8">
        <label className="text-paper mb-3 block text-sm font-bold">متن آگهی</label>
        <textarea
          value={formData.text}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, text: e.target.value.slice(0, MAX_CHARS) }))
          }
          rows={4}
          placeholder="مثلاً: کیف‌پول تون خودت رو در ۳۰ ثانیه بساز و اولین تراکنش رو کارمزد صفر انجام بده."
          className="bg-ink-700/60 text-paper placeholder:text-mist/60 focus:border-gold-500/40 focus:ring-gold-500/20 w-full resize-none rounded-2xl border border-white/10 p-4 text-sm leading-7 focus:ring-2 focus:outline-none"
        />
        <p className={`mt-2 text-left font-mono text-xs ${counterColor}`}>
          {remaining.toLocaleString('fa-IR')} کاراکتر باقی‌مانده
        </p>
      </div>

      <div className="mb-8">
        <label className="text-paper mb-3 block text-sm font-bold">لینک مقصد</label>
        <input
          type="text"
          value={formData.link}
          onChange={(e) => setFormData((prev) => ({ ...prev, link: e.target.value }))}
          placeholder="@channel_username یا t.me/yourchannel"
          dir="ltr"
          className="bg-ink-700/60 text-paper placeholder:text-mist/60 focus:border-gold-500/40 focus:ring-gold-500/20 w-full rounded-2xl border border-white/10 p-4 text-left text-sm focus:ring-2 focus:outline-none"
        />
        <p className="text-mist mt-2 text-xs">
          فقط لینک‌های تلگرامی (کانال، ربات یا اپلیکیشن) پذیرفته می‌شود.
        </p>
      </div>

      <div className="mb-8">
        <label className="text-paper mb-3 block text-sm font-bold">دکمه فراخوان به عمل</label>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {ctaOptions.map((opt) => {
            const Icon = opt.icon;
            const active = formData.ctaKey === opt.key;
            return (
              <button
                key={opt.key}
                onClick={() => setFormData((prev) => ({ ...prev, ctaKey: opt.key }))}
                className={`flex items-center gap-2 rounded-2xl border px-4 py-3 text-xs font-bold transition-colors ${
                  active
                    ? 'border-gold-500/40 bg-gold-500/10 text-gold-400'
                    : 'bg-ink-700/40 text-mist border-white/10 hover:border-white/20'
                }`}
              >
                <Icon className="h-4 w-4 shrink-0" />
                {opt.label}
              </button>
            );
          })}
        </div>

        {formData.ctaKey === 'custom' && (
          <input
            type="text"
            value={formData.customCta}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, customCta: e.target.value.slice(0, 20) }))
            }
            placeholder="متن دکمه دلخواه"
            className="bg-ink-700/60 text-paper placeholder:text-mist/60 focus:border-gold-500/40 focus:ring-gold-500/20 mt-3 w-full rounded-2xl border border-white/10 p-4 text-sm focus:ring-2 focus:outline-none"
          />
        )}
      </div>

      <div>
        <p className="text-paper mb-3 text-sm font-bold">پیش‌ نمایش زنده</p>
        <AdPreviewCard text={formData.text} ctaLabel={activeCtaLabel} />
      </div>
    </div>
  );
}

export default AdContent;
