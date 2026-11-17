import { statsData } from '../data/profile';

export default function StatsBar() {
  return (
    <div className="grid grid-cols-3 lg:grid-cols-6 gap-2 md:gap-3 my-4 md:my-5">
      {statsData.map((stat) => (
        <div
          key={stat.label}
          className="bg-[var(--bg-card)] border border-[var(--border-subtle)] hover:border-[var(--border-highlight)] rounded-xl p-2.5 md:p-3.5 text-center shadow-[var(--shadow-card)] transition-colors"
        >
          <div className="text-[var(--fs-stat-val)] font-extrabold text-[var(--accent-cyan)] leading-none mb-1">
            {stat.value}
          </div>
          <div className="text-[0.64rem] md:text-xs text-[var(--text-muted)] font-medium uppercase tracking-wider">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}
