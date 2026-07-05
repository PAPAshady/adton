import { Users, Megaphone, ExternalLink } from 'lucide-react';

function AdPreviewCard({ channelName, channelMembers, text, ctaLabel }) {
  return (
    <div className="bg-ink-700/90 shadow-soft mx-auto w-full max-w-85 rounded-3xl border border-white/10 p-2">
      {/* channel header */}
      <div className="bg-ink-600/70 flex items-center gap-3 rounded-t-2xl border-b border-white/5 px-4 py-3">
        <div className="text-ink grid h-10 w-10 shrink-0 place-items-center rounded-full bg-linear-to-br from-teal-400 to-teal-600 text-sm font-bold">
          {channelName ? channelName.slice(0, 2) : 'کن'}
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-paper truncate text-sm font-bold">{channelName || 'کانال هدف شما'}</p>
          <p className="text-mist flex items-center gap-1 text-xs">
            <Users className="h-3 w-3" />
            <span className="font-mono">{channelMembers || '—'}</span> عضو · کانال عمومی
          </p>
        </div>
      </div>

      {/* chat body */}
      <div className="bg-ink-800/60 space-y-3 px-4 py-4">
        <div className="bg-ink-600/80 text-mist max-w-[85%] rounded-2xl rounded-tr-md px-4 py-3 text-xs leading-6">
          آخرین پست کانال در همین لحظه اینجا نمایش داده می‌شود.
        </div>

        <div className="border-gold-500/20 from-gold-500/10 relative max-w-[95%] rounded-2xl rounded-tr-md border bg-linear-to-b to-transparent px-4 py-3">
          <span className="text-gold-400 mb-2 flex items-center gap-1 text-xs font-bold">
            <Megaphone className="h-3 w-3" /> پیام اسپانسری
          </span>
          <p className="text-paper/90 min-h-14 text-xs leading-6">
            {text || 'متن آگهی‌ات همین‌جا نمایش داده می‌شود؛ حداکثر ۱۶۰ کاراکتر.'}
          </p>
          <div className="bg-ink/70 mt-3 flex items-center justify-between gap-2 rounded-lg px-3 py-2">
            <span className="text-xs font-bold text-teal-300">{ctaLabel || 'مشاهده کانال'}</span>
            <ExternalLink className="h-3 w-3 text-teal-300" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdPreviewCard;
