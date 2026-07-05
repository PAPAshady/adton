'use client';
import Link from 'next/link';

import { motion } from 'motion/react';
import { ArrowLeft, Play, Sparkles } from 'lucide-react';

import TelegramPreviewCard from '@/components/modules/TelegramPreviewCard/TelegramPreviewCard';

export default function Hero() {
  return (
    <section
      id="top"
      className="bg-grid-glow relative overflow-hidden pt-8 pb-14 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-28"
    >
      <div
        aria-hidden
        className="motion-safe:animate-drift-slow pointer-events-none absolute -top-24 right-[-20%] h-56 w-56 rounded-full bg-teal-500/10 blur-3xl sm:right-[-10%] sm:h-72 sm:w-72"
      />
      <div
        aria-hidden
        className="motion-safe:animate-drift bg-gold-glow pointer-events-none absolute -bottom-16 left-[-20%] h-64 w-64 rounded-full blur-3xl sm:left-[-8%] sm:h-80 sm:w-80"
      />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 px-4 sm:px-8 lg:grid-cols-2 lg:gap-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="text-center lg:text-right"
        >
          <span className="border-gold-500/20 bg-gold-500/5 text-gold-400 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-bold">
            <Sparkles className="h-4 w-4 shrink-0" />
            تبلیغات اسپانسری تلگرام · پرداخت با TON
          </span>

          <h1 className="font-display text-paper mt-4 text-[2.1rem] leading-[1.3] font-bold sm:mt-6 sm:text-5xl sm:leading-tight lg:text-[3.4rem] lg:leading-[1.2]">
            آگهی‌ات را دقیقاً در{' '}
            <span className="from-gold-400 bg-linear-to-l to-teal-300 bg-clip-text text-transparent">
              کانال‌های واقعی
            </span>{' '}
            تلگرام نشان بده
          </h1>

          <p className="text-mist mx-auto mt-4 max-w-xl text-[15px] leading-7 sm:mt-4 sm:text-base sm:leading-8 lg:mx-0">
            به‌جای کلنجار رفتن با پنل انگلیسی تلگرام، آگهی‌ات را همین‌جا بساز، کانال‌های هدف را خودت
            انتخاب کن، با TON پرداخت کن و نتیجه را لحظه‌به‌لحظه ببین.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:justify-center lg:justify-start">
            <Link
              href="/new-ad"
              className="bg-gold-500 text-ink shadow-button-primary hover:bg-gold-400 inline-flex w-full items-center justify-center gap-2 rounded-full px-8 py-4 text-sm font-bold transition-transform duration-160 ease-out active:scale-[0.97] sm:w-auto"
            >
              ساخت اولین آگهی
              <ArrowLeft className="h-4 w-4 shrink-0" />
            </Link>
            <a
              href="#how"
              className="text-paper shadow-button-secondary inline-flex w-full items-center justify-center gap-2 rounded-full border border-teal-400/20 bg-teal-500/5 px-8 py-4 text-sm font-bold transition-colors hover:bg-teal-500/10 active:scale-[0.97] sm:w-auto"
            >
              <Play className="h-4 w-4 shrink-0" />
              ببین چطور کار می‌کند
            </a>
          </div>

          <div className="text-mist mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:mt-8 sm:gap-x-8 lg:justify-start">
            <p>بدون کارت بانکی بین‌المللی</p>
            <span className="bg-mist/40 hidden h-1 w-1 rounded-full sm:block" />
            <p>شروع از چند TON</p>
            <span className="bg-mist/40 hidden h-1 w-1 rounded-full sm:block" />
            <p>کاربران واقعی، نه ربات</p>
          </div>
        </motion.div>

        <div className="px-2 pt-4 sm:px-0 sm:pt-2">
          <TelegramPreviewCard />
        </div>
      </div>
    </section>
  );
}
