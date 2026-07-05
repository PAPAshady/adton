import clsx from 'clsx';

function Logo({ className = 'w-9 h-9' }) {
  return (
    <div className={clsx('relative', className)}>
      <svg viewBox="0 0 40 40" fill="none" className="h-full w-full">
        <rect
          x="1"
          y="1"
          width="38"
          height="38"
          rx="11"
          className="fill-ink-600"
          stroke="url(#logo-stroke)"
          strokeWidth="1.5"
        />
        <path
          d="M20 8L30 20L20 32L10 20L20 8Z"
          className="fill-teal-500/20"
          stroke="#4FE1D2"
          strokeWidth="1.4"
        />
        <path d="M13 19.5L27 14.5L22.5 27L19 21.7L13 19.5Z" fill="#F5B301" />
        <path d="M19 21.7L22 19.2L22.5 27L19 21.7Z" fill="#CC8E00" />
        <defs>
          <linearGradient id="logo-stroke" x1="0" y1="0" x2="40" y2="40">
            <stop offset="0" stopColor="#4FE1D2" />
            <stop offset="1" stopColor="#F5B301" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export default Logo;
