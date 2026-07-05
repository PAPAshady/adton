import { useState, useMemo } from 'react';

import { Search, Check, Users, TrendingUp, SearchX } from 'lucide-react';
import clsx from 'clsx';

import { channelCategories, allChannels } from '@/data';

function Channels({ formData, setFormData }) {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('همه');

  const filtered = useMemo(() => {
    return allChannels.filter((channel) => {
      const matchesCategory = category === 'همه' || channel.category === category;
      const matchesSearch = channel.name.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [search, category]);

  const toggleChannel = (id) => {
    setFormData((prev) => ({
      ...prev,
      channels: prev.channels.includes(id)
        ? prev.channels.filter((c) => c !== id)
        : [...prev.channels, id],
    }));
  };

  return (
    <div className="mx-auto max-w-2xl px-4 py-6 sm:px-8 sm:py-8">
      <div className="relative mb-4">
        <Search className="text-mist pointer-events-none absolute top-1/2 right-4 h-4 w-4 -translate-y-1/2" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="جست‌وجوی نام کانال..."
          className="bg-ink-700/60 text-paper placeholder:text-mist/60 focus:border-gold-500/40 focus:ring-gold-500/20 w-full rounded-2xl border border-white/10 py-4 pr-11 pl-4 text-sm focus:ring-2 focus:outline-none"
        />
      </div>

      <div className="mb-6 flex gap-2 overflow-x-auto pb-1">
        {channelCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={clsx(
              'shrink-0 rounded-full border px-4 py-2 text-xs font-bold transition-colors',
              category === cat
                ? 'border-gold-500/40 bg-gold-500/10 text-gold-400'
                : 'bg-ink-700/40 text-mist border-white/10 hover:border-white/20'
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mb-4 flex items-center justify-between">
        <p className="text-paper text-sm font-bold">کانال‌های موجود</p>
        <p className="text-gold-400 font-mono text-xs">
          {formData.channels.length} کانال انتخاب شده
        </p>
      </div>

      {filtered.length === 0 ? (
        <div className="bg-ink-700/40 flex flex-col items-center gap-3 rounded-2xl border border-white/10 px-6 py-12 text-center">
          <SearchX className="text-mist size-8" />
          <p className="text-paper text-sm font-bold">کانالی پیدا نشد</p>
          <p className="text-mist text-xs leading-6">دسته یا عبارت جست‌وجوی دیگری را امتحان کن.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {filtered.map((channel) => {
            const selected = formData.channels.includes(channel.id);
            return (
              <button
                key={channel.id}
                onClick={() => toggleChannel(channel.id)}
                className={`flex w-full items-center gap-4 rounded-2xl border p-4 text-right transition-colors ${
                  selected
                    ? 'border-gold-500/40 bg-gold-500/5'
                    : 'bg-ink-700/40 border-white/10 hover:border-white/20'
                }`}
              >
                <div
                  className={`grid h-12 w-12 shrink-0 place-items-center rounded-full bg-linear-to-br ${channel.color} text-ink text-sm font-bold`}
                >
                  {channel.initials}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-paper truncate text-sm font-bold">{channel.name}</p>
                  <p className="text-mist mt-1 text-xs">{channel.category}</p>
                  <div className="text-mist mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs">
                    <span className="flex items-center gap-1">
                      <Users className="size-3" />
                      <span className="font-mono">{channel.members}</span> عضو
                    </span>
                    <span className="text-gold-400 flex items-center gap-1">
                      <TrendingUp className="size-3" />
                      <span className="font-mono">{channel.cpm}</span> TON
                    </span>
                  </div>
                </div>
                <div
                  className={clsx(
                    'grid size-6 shrink-0 place-items-center rounded-full border-2',
                    selected ? 'border-gold-500 bg-gold-500 text-ink' : 'border-white/20'
                  )}
                >
                  {selected && <Check className="size-4" />}
                </div>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Channels;
