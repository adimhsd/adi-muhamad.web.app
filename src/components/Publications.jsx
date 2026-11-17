import { useMemo, useState } from 'react';
import { publicationsSection } from '../data/publications';
import SectionHeader from './SectionHeader';

export default function Publications() {
  const { eyebrow, title, description, tabs, items } = publicationsSection;
  const [activeTab, setActiveTab] = useState(null);
  const [query, setQuery] = useState('');

  const handleTabClick = (tabId) => {
    if (activeTab === tabId) {
      setActiveTab(null);
    } else {
      setActiveTab(tabId);
    }
  };

  const filteredItems = useMemo(() => {
    const effectiveTab = activeTab || (query.trim() ? 'all' : null);
    if (!effectiveTab) return [];

    const normalizedQuery = query.trim().toLowerCase();
    return items.filter((item) => {
      const matchesTab = effectiveTab === 'all' || item.category === effectiveTab;
      if (!matchesTab) return false;
      if (!normalizedQuery) return true;
      return (
        item.title.toLowerCase().includes(normalizedQuery) ||
        item.meta.toLowerCase().includes(normalizedQuery) ||
        item.year.toLowerCase().includes(normalizedQuery)
      );
    });
  }, [activeTab, query, items]);

  const showList = activeTab !== null || query.trim().length > 0;

  return (
    <section id="publikasi" className="py-[var(--section-pad)]">
      <SectionHeader eyebrow={eyebrow} title={title} description={description} />

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
        <div className="flex flex-wrap gap-1.5 md:gap-2">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => handleTabClick(tab.id)}
                className={`px-3 py-1.5 md:px-3.5 md:py-2 rounded-lg text-[0.74rem] md:text-xs font-semibold border transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-[#e95420]/15 border-[var(--color-primary)] text-[var(--text-primary)]'
                    : 'bg-[var(--bg-card)] border-[var(--border-subtle)] text-[var(--text-secondary)] hover:bg-[#e95420]/15 hover:border-[var(--color-primary)] hover:text-[var(--text-primary)]'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        <div className="relative w-full sm:w-64 shrink-0">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Cari judul, penulis, tahun..."
            aria-label="Cari publikasi dan karya"
            className="w-full px-3 py-1.5 md:py-2 rounded-lg text-xs md:text-sm bg-[var(--bg-card)] border border-[var(--border-subtle)] text-[var(--text-primary)] placeholder:text-[var(--text-disabled)] focus:outline-none focus:border-[var(--color-primary)]"
          />
        </div>
      </div>

      {showList && (
        <div className="flex flex-col gap-2.5 mt-3.5">
          {filteredItems.length === 0 ? (
            <div className="bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-xl p-4 text-center text-xs md:text-sm text-[var(--text-muted)]">
              Tidak ada karya yang cocok dengan pencarian &ldquo;{query}&rdquo;.
            </div>
          ) : (
            filteredItems.map((item) => (
              <div
                key={`${item.category}-${item.title}`}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4 bg-[var(--bg-card)] border border-[var(--border-subtle)] hover:border-[var(--border-highlight)] hover:bg-[var(--bg-card-hover)] rounded-xl p-3.5 md:p-4 transition-colors"
              >
                <div className="min-w-0">
                  <div className="text-[0.82rem] md:text-[0.94rem] font-semibold text-[var(--text-primary)] leading-snug">
                    {item.title}
                  </div>
                  <div className="text-[0.72rem] md:text-xs text-[var(--text-muted)] mt-1 leading-relaxed">
                    {item.meta}
                  </div>
                </div>
                <span className="self-start sm:self-center shrink-0 font-mono text-[0.66rem] md:text-xs font-semibold text-[var(--accent-cyan)] bg-[var(--bg-tag)] border border-[var(--border-subtle)] px-2.5 py-1 rounded-md whitespace-nowrap">
                  {item.year}
                </span>
              </div>
            ))
          )}
        </div>
      )}
    </section>
  );
}
