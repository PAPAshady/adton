import { Radar, Wallet2, CalendarClock, Zap, ShieldCheck } from 'lucide-react';

import AdPreviewCard from './AdPreviewCard.jsx';

const ctaLabels = {
  view: 'مشاهده کانال',
  join: 'عضویت',
  bot: 'شروع ربات',
  buy: 'خرید',
};

function Review({ formData, channelsData }) {
  const selected = channelsData.filter((c) => formData.channels.includes(c.id));
  const ctaLabel = formData.ctaKey === 'custom' ? formData.customCta : ctaLabels[formData.ctaKey];
  const estimatedReach = formData.cpm > 0 ? Math.round((formData.budget / formData.cpm) * 1000) : 0;
  const previewChannel = selected[0];

  const rows = [
    {
      icon: Radar,
      label: 'کانال‌های هدف',
      value:
        selected.length === 0
          ? 'انتخاب نشده'
          : selected.length === 1
            ? selected[0].name
            : `${selected.length} کانال`,
    },
    { icon: Wallet2, label: 'بودجه کل', value: `${formData.budget} TON` },
    { icon: Zap, label: 'حداکثر CPM', value: `${formData.cpm} TON` },
    {
      icon: CalendarClock,
      label: 'زمان‌بندی',
      value:
        formData.schedule === 'now'
          ? 'بلافاصله پس از تأیید'
          : formData.scheduleDate || 'تعیین‌نشده',
    },
  ];

  return (
    <div className="mx-auto max-w-2xl px-4 py-6 sm:px-8 sm:py-8">
      <p className="text-paper mb-3 text-sm font-bold">پیش‌نمایش نهایی</p>
      <AdPreviewCard
        channelName={previewChannel?.name}
        channelMembers={previewChannel?.members}
        text={formData.text}
        ctaLabel={ctaLabel}
      />

      <div className="bg-ink-700/40 mt-8 divide-y divide-white/8 rounded-2xl border border-white/8">
        {rows.map((row) => (
          <div key={row.label} className="flex items-center justify-between gap-3 px-5 py-4">
            <span className="text-mist flex items-center gap-2 text-xs">
              <row.icon className="text-gold-400 h-4 w-4" />
              {row.label}
            </span>
            <span className="text-paper font-mono text-sm font-bold">{row.value}</span>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-2xl border border-teal-500/20 bg-teal-500/5 p-5">
        <p className="flex items-center gap-2 text-xs font-bold text-teal-300">
          <Zap className="h-4 w-4" />
          تخمین بازدید کل
        </p>
        <p className="text-paper mt-2 font-mono text-2xl font-bold tabular-nums">
          {estimatedReach}
        </p>
      </div>

      <div className="bg-ink-700/30 mt-6 flex items-start gap-3 rounded-2xl border border-white/10 p-5">
        <ShieldCheck className="text-mist mt-1 h-4 w-4 shrink-0" />
        <p className="text-mist text-xs leading-6">
          پس از پرداخت، آگهی برای بررسی ارسال می‌شود و در صورت تأیید، طبق زمان‌بندی انتخابی نمایش
          داده خواهد شد. کاربران نسخه پرمیوم تلگرام این آگهی را نمی‌بینند.
        </p>
      </div>
    </div>
  );
}

export default Review;
