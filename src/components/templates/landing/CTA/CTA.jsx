'use client';
import Link from 'next/link';

import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';

function CTA() {
  return (
    <section id="start" className="mx-auto max-w-6xl px-5 pb-14 sm:px-8 sm:pb-20 lg:pb-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        className="via-ink-700 to-gold-500/10 relative overflow-hidden rounded-3xl border border-white/10 bg-linear-to-l from-teal-500/10 px-6 py-12 text-center sm:px-16 sm:py-16"
      >
        <div
          aria-hidden
          className="motion-safe:animate-pulse-soft bg-grid-glow pointer-events-none absolute inset-0"
        />
        <div className="relative">
          <h2 className="font-display text-paper text-2xl font-bold sm:text-4xl">
            آماده‌ای اولین آگهی‌ات را بسازی؟
          </h2>
          <p className="text-mist mx-auto mt-4 max-w-md text-sm leading-7 sm:text-base">
            چند دقیقه وقت بگذار، کانال‌ها را انتخاب کن، با TON پرداخت کن و از همان روز اول آمار
            بازدید را ببین.
          </p>
          <Link
            href="/new-ad"
            className="bg-gold-500 text-ink shadow-button-primary hover:bg-gold-400 mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full px-8 py-4 text-sm font-bold transition-transform duration-160 ease-out active:scale-[0.97] sm:mt-8 sm:w-auto"
          >
            شروع ساخت آگهی
            <ArrowLeft className="size-4 shrink-0" />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

export default CTA;
