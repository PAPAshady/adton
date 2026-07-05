'use client';
import { useRouter } from 'next/navigation';

import { ArrowRight, X } from 'lucide-react';
import clsx from 'clsx';

const stepTitles = {
  1: 'محتوای آگهی',
  2: 'انتخاب کانال‌ها',
  3: 'بودجه و زمان‌بندی',
  4: 'بازبینی و پرداخت',
};

function ProgressHeader({
  step = 1,
  totalSteps = Object.keys(stepTitles).length,
  onBack = () => {},
}) {
  const router = useRouter();

  return (
    <header className="bg-ink/90 sticky top-0 z-40 border-b border-white/5 backdrop-blur-md">
      <div className="mx-auto flex max-w-2xl items-center justify-between px-4 py-3 sm:px-8">
        <button
          onClick={onBack}
          className="text-paper grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-white/10 active:scale-[0.95]"
          aria-label="بازگشت"
        >
          <ArrowRight className="h-5 w-5" />
        </button>

        <div className="text-center">
          <p className="text-paper text-sm font-bold">{stepTitles[step]}</p>
          <p className="text-mist mt-1 font-mono text-xs">
            مرحله {step} از {totalSteps}
          </p>
        </div>

        <button
          onClick={() => router.push('/')}
          className="text-paper grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-white/10 active:scale-[0.95]"
          aria-label="بستن و بازگشت به صفحه اصلی"
        >
          <X className="size-5" />
        </button>
      </div>

      <div className="mx-auto flex max-w-2xl gap-2 px-4 pb-3 sm:px-8">
        {Array.from({ length: totalSteps }).map((_, i) => (
          <span
            key={i}
            className={clsx(
              'h-1 flex-1 rounded-full transition-colors duration-300',
              i < step ? 'bg-gold-500' : 'bg-white/10'
            )}
          />
        ))}
      </div>
    </header>
  );
}

export default ProgressHeader;
