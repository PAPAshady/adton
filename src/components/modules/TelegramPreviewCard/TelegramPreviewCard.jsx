'use client';
import { motion } from 'motion/react';
import { Users, Megaphone, ExternalLink, MoveUpRight } from 'lucide-react';

function TelegramPreviewCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28, rotate: -3 }}
      animate={{ opacity: 1, y: 0, rotate: -2 }}
      transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1], delay: 0.15 }}
      className="motion-safe:animate-float-card bg-ink-700/90 shadow-soft relative mx-auto w-full max-w-75 rounded-3xl border border-white/10 p-2 sm:max-w-95"
    >
      {/* channel header */}
      <div className="bg-ink-600/70 flex items-center gap-3 rounded-t-2xl border-b border-white/5 px-4 py-3">
        <div className="text-ink grid h-10 w-10 shrink-0 place-items-center rounded-full bg-linear-to-br from-teal-400 to-teal-600 text-sm font-bold">
          تر
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-paper truncate text-sm font-bold">تک‌رسان | اخبار فناوری</p>
          <p className="text-mist flex items-center gap-1 text-xs">
            <Users className="h-3 w-3" />
            <span className="font-mono tabular-nums">۴۲٬۳۰۰</span> عضو · کانال عمومی
          </p>
        </div>
      </div>

      {/* chat body */}
      <div className="bg-ink-800/60 space-y-3 px-4 py-4">
        <div className="bg-ink-600/80 text-mist max-w-[85%] rounded-2xl rounded-tr-md px-4 py-3 text-xs leading-6">
          نسخه جدید مرورگر با پشتیبانی از تراکنش‌های TON منتشر شد 🚀
        </div>

        {/* sponsored message */}
        <div className="border-gold-500/20 from-gold-500/10 relative max-w-[92%] rounded-2xl rounded-tr-md border bg-linear-to-b to-transparent px-4 py-3">
          <span className="text-gold-400 mb-2 flex items-center gap-1 text-xs font-bold">
            <Megaphone className="h-3 w-3" /> پیام اسپانسری
          </span>
          <p className="text-paper/90 text-xs leading-6">
            کیف‌پول تون خودت رو در ۳۰ ثانیه بساز و اولین تراکنش رو کارمزد صفر انجام بده.
          </p>
          <div className="bg-ink/70 mt-3 flex items-center justify-between gap-2 rounded-lg px-3 py-2">
            <span className="text-xs font-bold text-teal-300">مشاهده کانال</span>
            <ExternalLink className="h-3 w-3 text-teal-300" />
          </div>
        </div>
      </div>

      {/* floating stat chip */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="motion-safe:animate-drift bg-ink-700/95 shadow-card absolute -top-4 -left-3 flex items-center gap-2 rounded-2xl border border-white/10 px-3 py-2 sm:-top-6 sm:-left-12 sm:px-4"
      >
        <div className="relative grid h-8 w-8 place-items-center rounded-full bg-teal-500/15 text-teal-300">
          <MoveUpRight className="h-4 w-4" />
          <span className="motion-safe:animate-pulse-soft absolute -top-1 -right-1 h-2 w-2 rounded-full bg-teal-400" />
        </div>
        <div>
          <p className="text-mist text-xs">بازدید امروز</p>
          <p className="text-paper font-mono text-sm font-bold tabular-nums">۱۲٬۴۸۰</p>
        </div>
      </motion.div>

      {/* floating TON price chip */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.75 }}
        className="motion-safe:animate-drift-slow border-gold-500/20 bg-ink-700/95 shadow-card absolute -right-2 -bottom-4 rounded-2xl border px-4 py-2 sm:-right-8 sm:-bottom-5"
      >
        <p className="text-mist text-xs">حداقل CPM</p>
        <p className="text-gold-400 font-mono text-sm font-bold tabular-nums">۰٫۱ TON</p>
      </motion.div>
    </motion.div>
  );
}

export default TelegramPreviewCard;
