'use client';
import { motion } from 'motion/react';
import { Users, TrendingUp } from 'lucide-react';

import { landingPageChannles } from '@/data';

function Channels() {
  return (
    <section id="channels" className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20 lg:py-24">
      <div className="flex flex-col items-center gap-4 text-center">
        <div>
          <span className="text-xs font-bold tracking-widest text-teal-400 uppercase">
            کانال‌های نمونه
          </span>
          <h2 className="font-display text-paper mt-3 text-2xl font-bold sm:text-4xl">
            دقیقاً جایی که مخاطبت هست
          </h2>
        </div>
        <p className="text-mist max-w-sm text-sm leading-7">
          نمونه‌ای از دسته‌بندی‌های موجود؛ کانال‌های واقعی هدف خودت را در فرم ساخت آگهی جست‌وجو و
          اضافه می‌کنی.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
        {landingPageChannles.map((channel, i) => (
          <motion.div
            key={channel.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{
              duration: 0.5,
              delay: (i % 3) * 0.06,
              ease: [0.23, 1, 0.32, 1],
            }}
            className="bg-ink-700/40 flex items-center gap-4 rounded-2xl border border-white/8 p-4 transition-colors hover:border-white/15 sm:p-5"
          >
            <div
              className={`grid size-12 shrink-0 place-items-center rounded-full bg-linear-to-br ${channel.color} text-ink text-sm font-bold`}
            >
              {channel.initials}
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-paper truncate text-sm font-bold">{channel.name}</p>
              <p className="text-mist mt-1 text-xs">{channel.category}</p>
              <div className="text-mist mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px]">
                <span className="flex items-center gap-1">
                  <Users className="size-3" /> <span className="font-mono">{channel.members}</span>{' '}
                  عضو
                </span>
                <span className="text-gold-400 flex items-center gap-1">
                  <TrendingUp className="size-3" /> میانگین CPM{' '}
                  <span className="font-mono">{channel.cpm}</span> TON
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Channels;
