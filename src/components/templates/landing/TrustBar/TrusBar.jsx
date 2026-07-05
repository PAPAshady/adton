const stats = [
  { value: '۰٫۱ TON', label: 'حداقل CPM هر هزار بازدید' },
  { value: '۱۶۰', label: 'کاراکتر، حداکثر متن هر آگهی' },
  { value: '+۱٬۰۰۰', label: 'حداقل عضو کانال‌های هدف' },
  { value: '+۱۰۰', label: 'کشور با امکان تبلیغ‌دهی' },
];

function TrustBar() {
  return (
    <section className="bg-ink-800/60 border-y border-white/25">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-y-8 px-5 py-10 sm:px-8 md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="text-paper font-mono text-2xl font-bold tabular-nums sm:text-3xl">
              {stat.value}
            </p>
            <p className="text-mist mx-auto mt-2 max-w-40 text-xs leading-5">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TrustBar;
