'use client';
import { useState } from 'react';

import { motion, AnimatePresence } from 'motion/react';
import { Plus } from 'lucide-react';
import clsx from 'clsx';

import { landingPageFaqs } from '@/data';

function FaqItem({ item, isOpen, onToggle }) {
  return (
    <div className="border-b border-white/10">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 py-5 text-right"
      >
        <span className="text-paper text-sm font-bold sm:text-base">{item.question}</span>
        <span
          className={clsx(
            'grid size-8 shrink-0 place-items-center rounded-full border transition-transform duration-200 ease-out',
            isOpen ? 'border-gold-500/40 text-gold-400 rotate-45' : 'text-mist border-white/10'
          )}
        >
          <Plus className="size-4" />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
            className="overflow-hidden"
          >
            <p className="text-mist pb-5 text-sm leading-7">{item.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="mx-auto max-w-3xl px-5 py-14 sm:px-8 sm:py-20 lg:py-24">
      <div className="text-center">
        <span className="text-xs font-bold tracking-widest text-teal-400 uppercase">
          سوالات متداول
        </span>
        <h2 className="font-display text-paper mt-3 text-2xl font-bold sm:text-4xl">
          هرچی لازمه بدونی
        </h2>
      </div>

      <div className="mt-6 sm:mt-10">
        {landingPageFaqs.map((item, i) => (
          <FaqItem
            key={item.question}
            item={item}
            isOpen={openIndex === i}
            onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
          />
        ))}
      </div>
    </section>
  );
}

export default FAQ;
