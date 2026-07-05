import Link from 'next/link';

import Logo from '@modules/Logo/Logo';
import { footerColumns } from '@/data.js';

function Footer() {
  return (
    <footer className="bg-ink-800/60 border-t border-white/5">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <Logo className="size-9" />
              <span className="font-primary text-paper text-lg font-extrabold">
                اد<span className="text-gold-500">تون</span>
              </span>
            </div>
            <p className="text-mist mt-4 max-w-xs text-xs leading-6">
              رابط ساده و فارسی برای ثبت آگهی‌های اسپانسری روی زیرساخت رسمی تبلیغات تلگرام و پرداخت
              با TON.
            </p>
          </div>

          {footerColumns.map((col) => (
            <div key={col.title}>
              <p className="text-paper text-sm font-bold">{col.title}</p>
              <ul className="mt-4 space-y-3">
                {col.links.map((l) => (
                  <li key={l}>
                    <Link href="#" className="text-mist hover:text-paper text-xs transition-colors">
                      {l}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-mist mt-14 flex flex-col gap-4 border-t border-white/5 pt-8 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>© ۱۴۰۴ ادتون. تمامی حقوق محفوظ است.</p>
          <p className="max-w-lg leading-6">
            ادتون یک سرویس مستقل است و وابسته به تلگرام یا بنیاد TON نیست؛ صرفاً رابطی ساده‌تر برای
            استفاده از امکانات رسمی تبلیغات تلگرام ارائه می‌دهد.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
