'use client';
import { motion } from 'motion/react';

import { howItWorksSteps } from '@/data';

function HowItWorks() {
  return (
    <section id="how" className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-xs font-bold tracking-widest text-teal-400">مسیر ساخت آگهی</span>
        <h2 className="font-display text-paper mt-3 text-2xl font-bold sm:text-4xl">
          از ایده تا نمایش در کانال، در پنج قدم
        </h2>
        <p className="text-mist mt-4 text-sm leading-7 sm:text-base">
          همان زیرساخت رسمی تبلیغات تلگرام روی بلاکچین TON، با رابطی ساده و فارسی.
        </p>
      </div>

      <div className="relative mt-10 grid grid-cols-1 gap-5 sm:mt-16 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-5">
        {howItWorksSteps.map((step, i) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{
              duration: 0.5,
              delay: i * 0.06,
              ease: [0.23, 1, 0.32, 1],
            }}
            className="bg-ink-700/50 relative rounded-2xl border border-white/8 p-6"
          >
            <span className="font-display text-gold-500/70 text-xs font-bold tabular-nums">
              {String(i + 1).padStart(2, '0')}
            </span>
            <div className="mt-4 grid h-11 w-11 place-items-center rounded-xl bg-teal-500/10 text-teal-300">
              <step.icon className="h-5 w-5" />
            </div>
            <h3 className="text-paper mt-4 text-sm font-bold">{step.title}</h3>
            <p className="text-mist mt-2 text-xs leading-6">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default HowItWorks;
