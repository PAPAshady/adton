import Link from 'next/link';

import { Menu, ArrowLeft } from 'lucide-react';

import Logo from '@modules/Logo/Logo';

const links = [
  { href: '#how', label: 'چطور کار می‌کند' },
  { href: '#channels', label: 'کانال‌ها' },
  { href: '#pricing', label: 'هزینه و CPM' },
  { href: '#faq', label: 'سوالات متداول' },
];

function Navbar() {
  return (
    <header className="bg-ink/80 sticky top-0 z-50 border-b border-white/5 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-8 sm:py-3.5">
        <a href="#top" className="flex items-center gap-2">
          <Logo className="h-8 w-8 sm:h-9 sm:w-9" />
          <span className="font-display text-paper text-base font-extrabold tracking-tight sm:text-lg">
            اد<span className="text-gold-500">تون</span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="text-mist hover:text-paper text-sm transition-colors">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <a
          href="#start"
          className="bg-gold-500 text-ink hover:bg-gold-400 hidden items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold transition-transform duration-160 ease-out active:scale-[0.97] md:inline-flex"
        >
          ساخت آگهی
          <ArrowLeft className="size-4" />
        </a>

        <button className="text-paper grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-white/10 active:scale-[0.95] md:hidden">
          <Menu className="h-5 w-5" />
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
