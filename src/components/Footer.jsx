import { contactData } from '../data/profile';
import SectionHeader from './SectionHeader';

function ContactIcon({ id }) {
  if (id === 'email') {
    return (
      <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#E95420" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    );
  }
  if (id === 'whatsapp') {
    return (
      <svg width="19" height="19" viewBox="0 0 24 24" fill="#25D366" aria-hidden="true">
        <path d="M12.031 2c-5.516 0-9.969 4.453-9.969 9.969 0 1.766.469 3.484 1.344 5l-1.406 5.156 5.281-1.375c1.469.797 3.109 1.219 4.75 1.219 5.516 0 9.969-4.453 9.969-9.969S17.547 2 12.031 2Zm5.813 14.125c-.25.703-1.438 1.344-2 1.422-.516.078-1.172.109-1.891-.125-.438-.141-1-.328-1.719-.641-3.031-1.313-5-4.375-5.156-4.578-.156-.203-1.234-1.641-1.234-3.125 0-1.484.781-2.219 1.063-2.516.281-.297.609-.375.813-.375.203 0 .406.016.578.016.188 0 .438-.078.688.516.25.609.859 2.094.938 2.25.078.156.125.344.031.547-.094.203-.141.328-.297.5-.156.172-.313.391-.453.516-.156.156-.313.328-.141.625.172.297.781 1.281 1.672 2.078 1.156 1.031 2.125 1.344 2.422 1.5.297.156.469.125.641-.078.172-.203.75-.875.953-1.172.203-.297.406-.25.672-.156.266.094 1.719.813 2.016.953.297.156.484.219.563.344.078.125.078.734-.172 1.438Z" />
      </svg>
    );
  }
  if (id === 'linkedin') {
    return (
      <svg width="19" height="19" viewBox="0 0 24 24" fill="#0A66C2" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065Zm1.782 13.019H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" />
      </svg>
    );
  }
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="#E4405F" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069ZM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z" />
    </svg>
  );
}

export default function Footer() {
  const { eyebrow, title, description, cards, officialLinks, map, infraBadge } = contactData;
  const currentYear = new Date().getFullYear();

  return (
    <footer id="kontak" className="border-t border-[var(--border-subtle)] mt-6 py-6 md:py-8">
      <div className="max-w-[1140px] mx-auto px-4 md:px-6">
        <SectionHeader eyebrow={eyebrow} title={title} description={description} />

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-4 items-stretch">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {cards.map((card) => (
              <a
                key={card.id}
                href={card.href}
                target={card.external ? '_blank' : undefined}
                rel={card.external ? 'noopener noreferrer' : undefined}
                className="group flex items-center gap-3 bg-[var(--bg-card)] border border-[var(--border-subtle)] hover:border-[var(--border-highlight)] rounded-xl p-3.5 transition-all hover:-translate-y-0.5"
              >
                <div className="w-10 h-10 rounded-lg bg-[var(--bg-tag)] border border-[var(--border-subtle)] flex items-center justify-center shrink-0">
                  <ContactIcon id={card.id} />
                </div>
                <div className="min-w-0">
                  <span className="block font-mono text-[0.68rem] font-semibold uppercase tracking-wider text-[var(--text-muted)]">
                    {card.label}
                  </span>
                  <span className="block text-[0.8rem] md:text-sm font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent-cyan)] truncate transition-colors">
                    {card.value}
                  </span>
                </div>
              </a>
            ))}
          </div>

          <div className="w-full bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-xl overflow-hidden flex flex-col justify-between">
            <iframe
              src={map.embedUrl}
              width="100%"
              height="150"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Peta Lokasi Adi Muhamad Muhsidi"
              className="w-full min-h-[135px] border-0 block flex-1"
            />
            <div className="flex items-center justify-between gap-2 px-3.5 py-2 border-t border-[var(--border-subtle)] text-xs">
              <span className="text-[var(--text-muted)] font-medium">{map.locationLabel}</span>
              <a
                href={map.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--accent-cyan)] font-semibold whitespace-nowrap hover:underline"
              >
                Buka di Google Maps &rarr;
              </a>
            </div>
          </div>
        </div>

        {/* Official Links & Social Pills */}
        <div className="flex flex-wrap justify-center gap-1.5 md:gap-2 mt-5">
          {officialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 rounded-full text-[0.72rem] md:text-xs font-medium bg-[var(--bg-card)] border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:border-[var(--border-highlight)] hover:text-[var(--accent-cyan)] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="mt-5 pt-4 border-t border-[var(--border-subtle)] flex flex-col items-center gap-1 text-center text-xs md:text-sm text-[var(--text-muted)]">
          <span>&copy; {currentYear} Adi Muhamad Muhsidi. All rights reserved.</span>
          <span className="font-mono text-xs text-[var(--accent-cyan)]">{infraBadge}</span>
        </div>
      </div>
    </footer>
  );
}
