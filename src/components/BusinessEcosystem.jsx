import { businessSection } from '../data/business';
import Badge from './Badge';
import SectionHeader from './SectionHeader';

export default function BusinessEcosystem() {
  const {
    eyebrow,
    title,
    descriptionPrefix,
    mainUrl,
    mainDomainLabel,
    descriptionSuffix,
    units,
  } = businessSection;

  return (
    <section id="perusahaan" className="py-[var(--section-pad)]">
      <SectionHeader
        eyebrow={eyebrow}
        title={title}
        description={
          <>
            {descriptionPrefix}
            <a
              href={mainUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--accent-cyan)] underline hover:opacity-80"
            >
              {mainDomainLabel}
            </a>
            {descriptionSuffix}
          </>
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3.5">
        {units.map((unit) => (
          <div
            key={unit.key}
            className="flex flex-col justify-between bg-[var(--bg-card)] border border-[var(--border-subtle)] hover:border-[var(--border-highlight)] rounded-xl p-4 md:p-5 shadow-[var(--shadow-card)] transition-colors"
          >
            <div>
              <Badge variant={unit.badgeVariant}>{unit.badge}</Badge>
              <h3 className="text-[var(--fs-card-title)] font-bold text-[var(--text-primary)] mb-1">
                {unit.title}
              </h3>
              <div className="font-mono text-[0.7rem] text-[var(--text-muted)] mb-2">
                {unit.subdomain}
              </div>
              <p className="text-[var(--fs-body)] text-[var(--text-muted)] leading-relaxed mb-3">
                {unit.description}
              </p>
            </div>
            <a
              href={unit.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs md:text-sm font-semibold text-[var(--accent-cyan)] hover:underline"
            >
              {mainDomainLabel} &rarr;
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
