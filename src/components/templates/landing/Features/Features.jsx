'use client';
import { motion } from 'motion/react';

import { landingPageFeatures } from '@/data';

function Features() {
  return (
    <section className="bg-ink-800/40 py-14 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-gold-500 text-xs font-bold tracking-widest uppercase">
            چرا ادتون
          </span>
          <h2 className="font-display text-paper mt-3 text-2xl font-bold sm:text-4xl">
            همان زیرساخت تلگرام، تجربه‌ای بهتر
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {landingPageFeatures.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 0.5,
                delay: (i % 3) * 0.06,
                ease: [0.23, 1, 0.32, 1],
              }}
              className="group bg-ink-700/40 rounded-2xl border border-white/25 p-5 transition-colors hover:border-teal-500/25 sm:p-7"
            >
              <div className="to-gold-500/10 grid h-12 w-12 place-items-center rounded-xl bg-linear-to-br from-teal-500/15 text-teal-300">
                <feature.icon className="size-5" />
              </div>
              <h3 className="text-paper mt-5 text-base font-bold">{feature.title}</h3>
              <p className="text-mist mt-3 text-sm leading-7">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
