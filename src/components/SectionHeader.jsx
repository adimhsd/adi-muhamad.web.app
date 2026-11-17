export default function SectionHeader({ eyebrow, title, subtitle, description }) {
  return (
    <div className="mb-4 md:mb-5">
      <div className="font-mono text-[0.66rem] md:text-xs uppercase tracking-widest text-[var(--accent-cyan)] mb-1">
        {eyebrow}
      </div>
      <h2 className="text-[length:var(--fs-section-title)] font-extrabold tracking-tight leading-tight text-[var(--text-primary)]">
        {title}
      </h2>
      {subtitle && (
        <p className="text-xs md:text-sm font-medium text-[var(--accent-cyan)] mt-1">
          {subtitle}
        </p>
      )}
      {description && (
        <p className="text-[0.78rem] md:text-[0.92rem] leading-relaxed text-[var(--text-muted)] mt-1.5">
          {description}
        </p>
      )}
    </div>
  );
}
