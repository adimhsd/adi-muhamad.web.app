import { techStackSection } from '../data/techStack';
import Badge from './Badge';
import SectionHeader from './SectionHeader';

export default function TechStack() {
  const { eyebrow, title, subtitle, description, items } = techStackSection;

  return (
    <section id="tech-stack" className="py-[var(--section-pad)]">
      <SectionHeader
        eyebrow={eyebrow}
        title={title}
        subtitle={subtitle}
        description={description}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 md:gap-4">
        {items.map((item) => (
          <div
            key={item.title}
            className="bg-[var(--bg-card)] border border-[var(--border-subtle)] hover:border-[var(--border-highlight)] rounded-xl p-4 md:p-5 shadow-[var(--shadow-card)] transition-colors"
          >
            <Badge variant={item.badgeVariant}>{item.badge}</Badge>
            <h3 className="text-[var(--fs-card-title)] font-bold text-[var(--text-primary)] mb-1">
              {item.title}
            </h3>
            <div className="font-mono text-xs text-[var(--accent-cyan)] font-semibold mb-1.5">
              {item.tools}
            </div>
            <p className="text-[var(--fs-body)] text-[var(--text-muted)] leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
