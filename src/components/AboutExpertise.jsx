import { expertiseSection } from '../data/expertise';
import Badge from './Badge';
import SectionHeader from './SectionHeader';

export default function AboutExpertise() {
  const { eyebrow, title, description, cards, quoteBanner } = expertiseSection;

  return (
    <section id="tentang" className="py-[var(--section-pad)]">
      <SectionHeader eyebrow={eyebrow} title={title} description={description} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 md:gap-4">
        {cards.map((card) => (
          <div
            key={card.title}
            className="bg-[var(--bg-card)] border border-[var(--border-subtle)] hover:border-[var(--border-highlight)] rounded-xl p-4 md:p-5 shadow-[var(--shadow-card)] transition-colors"
          >
            <Badge variant={card.badgeVariant}>{card.badge}</Badge>
            <h3 className="text-[var(--fs-card-title)] font-bold text-[var(--text-primary)] mb-1.5">
              {card.title}
            </h3>
            <p className="text-[var(--fs-body)] text-[var(--text-muted)] leading-relaxed mb-3">
              {card.description}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {card.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-[var(--bg-tag)] border border-[var(--border-subtle)] text-[var(--text-secondary)] text-[0.72rem] md:text-xs font-medium px-2.5 py-1 rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 rounded-xl border border-[var(--border-subtle)] bg-[image:var(--bg-quote)] p-4 md:p-5">
        <blockquote className="text-[0.82rem] md:text-base italic font-medium text-[var(--text-primary)] leading-relaxed mb-1.5">
          {quoteBanner.quote}
        </blockquote>
        <cite className="block not-italic font-mono text-[0.74rem] md:text-xs font-semibold text-[var(--accent-cyan)] mb-2">
          {quoteBanner.attribution}
        </cite>
        <p className="text-[var(--fs-body)] text-[var(--text-secondary)] leading-relaxed">
          {quoteBanner.reflection}
        </p>
      </div>
    </section>
  );
}
