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
    partnerVenture,
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
              <h3 className="text-[length:var(--fs-card-title)] font-bold text-[var(--text-primary)] mb-1">
                {unit.title}
              </h3>
              <div className="font-mono text-[0.7rem] text-[var(--text-muted)] mb-2">
                {unit.subdomain}
              </div>
              <p className="text-[length:var(--fs-body)] text-[var(--text-muted)] leading-relaxed mb-3">
                {unit.description}
              </p>
            </div>
            <a
              href={unit.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white transition-colors self-start"
            >
              Akses Pustaka Karya ID
            </a>
          </div>
        ))}
      </div>

      {partnerVenture && (
        <div className="mt-3.5 bg-[var(--bg-card)] border border-[var(--border-subtle)] hover:border-[var(--border-highlight)] rounded-xl p-4 md:p-5 shadow-[var(--shadow-card)] transition-colors flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div>
            <Badge variant={partnerVenture.badgeVariant}>{partnerVenture.badge}</Badge>
            <h3 className="text-[length:var(--fs-card-title)] font-bold text-[var(--text-primary)] mb-1">
              {partnerVenture.title}
            </h3>
            <p className="text-[length:var(--fs-body)] text-[var(--text-muted)] leading-relaxed">
              {partnerVenture.description}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href={partnerVenture.platformUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs md:text-sm font-semibold bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white transition-colors"
            >
              {partnerVenture.platformLabel} &rarr;
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
