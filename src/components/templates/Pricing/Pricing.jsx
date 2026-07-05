'use client';
import Link from 'next/link';

import { motion } from 'motion/react';
import { Check } from 'lucide-react';

import { landingPageTiers } from '@/data';

function Pricing() {
  return (
    <section id="pricing" className="bg-ink-800/40 py-14 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-gold-500 text-xs font-bold tracking-widest uppercase">
            هزینه و CPM
          </span>
          <h2 className="font-display text-paper mt-3 text-2xl font-bold sm:text-4xl">
            تو تعیین می‌کنی، نه یک قیمت ثابت
          </h2>
          <p className="text-mist mt-4 text-sm leading-7 sm:text-base">
            پرداخت بر اساس CPM (هزینه به‌ازای هر هزار بازدید) انجام می‌شود؛ حداقل ۰٫۱ تون. آگهی تا
            زمانی که بودجه تمام نشده، در کانال‌های انتخابی نمایش داده می‌شود. اعداد زیر صرفاً مثال
            هستند و بسته به رقابت هر کانال تغییر می‌کنند.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-14 sm:gap-6 md:grid-cols-3">
          {landingPageTiers.map((tiers, i) => (
            <motion.div
              key={tiers.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 0.5,
                delay: i * 0.08,
                ease: [0.23, 1, 0.32, 1],
              }}
              className={`relative rounded-2xl border p-5 sm:p-7 ${
                tiers.featured
                  ? 'border-gold-500/40 from-gold-500/10 to-ink-700/40 bg-linear-to-b'
                  : 'bg-ink-700/40 border-white/10'
              }`}
            >
              {tiers.featured && (
                <span className="bg-gold-500 text-ink absolute -top-3 right-5 rounded-full px-3 py-1 text-[11px] font-bold sm:right-7">
                  پرکاربردترین
                </span>
              )}
              <p className="text-mist text-sm font-bold">{tiers.name}</p>
              <p className="text-paper mt-3 font-mono text-3xl font-bold">{tiers.budget}</p>
              <p className="mt-1 font-mono text-xs text-teal-300">{tiers.reach}</p>

              <div className="text-mist mt-5 flex items-start gap-2 border-t border-white/10 pt-5 text-xs leading-6">
                <Check className="text-gold-400 mt-1 size-4 shrink-0" />
                {tiers.fit}
              </div>

              <Link
                href={`/new-ad?budget=${tiers.budgetValue}`}
                className={`mt-6 block rounded-full py-4 text-center text-sm font-bold transition-transform duration-160 ease-out active:scale-[0.97] ${
                  tiers.featured
                    ? 'bg-gold-500 text-ink shadow-button-primary hover:bg-gold-400'
                    : 'text-paper shadow-button-secondary border border-white/15 hover:bg-white/10'
                }`}
              >
                شروع با این بودجه
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
