const VARIANT_CLASSES = {
  cyan: 'bg-[#E95420]/10 text-[var(--color-primary)] border-[#E95420]/30',
  indigo: 'bg-[#77216F]/15 text-[var(--badge-aubergine-text)] border-[#77216F]/35',
  emerald: 'bg-[#26A269]/10 text-[var(--accent-emerald)] border-[#26A269]/30',
  amber: 'bg-[#E99B00]/10 text-[var(--accent-amber)] border-[#E99B00]/30',
};

export default function Badge({ variant = 'cyan', children }) {
  const variantClass = VARIANT_CLASSES[variant] || VARIANT_CLASSES.cyan;

  return (
    <span
      className={`inline-block font-mono text-[0.64rem] md:text-[0.7rem] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md border mb-2 ${variantClass}`}
    >
      {children}
    </span>
  );
}
