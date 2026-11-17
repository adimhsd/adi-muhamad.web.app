import { useState } from 'react';
import { profileData } from '../data/profile';

function AcademicIcon({ id }) {
  if (id === 'scholar') {
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14Z" fill="#76A7FA" />
        <path d="M12 10a7 7 0 0 0-7 7h14a7 7 0 0 0-7-7Z" fill="#A0C3FF" />
        <path d="M12 3 1 9l4 2.18v5.56a7 7 0 0 1 14 0v-5.56L23 9 12 3Z" fill="#4285F4" />
        <path d="M12 3v8.45L19 9 12 3Z" fill="#356AC3" />
      </svg>
    );
  }
  if (id === 'sinta') {
    return (
      <img
        src="https://sinta.kemdiktisaintek.go.id/public/assets/img/brand_sinta.png"
        alt="SINTA"
        className="h-4 w-auto object-contain"
      />
    );
  }
  if (id === 'github') {
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z"
        />
      </svg>
    );
  }
  return (
    <svg width="16" height="16" viewBox="0 0 256 256" aria-hidden="true">
      <path fill="#A6CE39" d="M256 128c0 70.7-57.3 128-128 128S0 198.7 0 128 57.3 0 128 0s128 57.3 128 128Z" />
      <path
        fill="#FFF"
        d="M86.3 186.2H70.9V79.1h15.4v107.1Zm22.6-107.1h41.6c39.6 0 57 28.3 57 53.6 0 27.5-21.5 53.6-56.8 53.6h-41.8V79.1Zm15.4 93.3h24.5c34.9 0 42.9-26.5 42.9-39.7 0-21.5-13.7-39.7-43.7-39.7h-23.7v79.4ZM88.7 56.8c0 5.5-4.5 10.1-10.1 10.1s-10.1-4.6-10.1-10.1c0-5.6 4.5-10.1 10.1-10.1s10.1 4.6 10.1 10.1Z"
      />
    </svg>
  );
}

export default function Hero() {
  const [imgSrc, setImgSrc] = useState(profileData.avatarSrc);

  return (
    <section className="pt-6 pb-3 md:pt-8 md:pb-4">
      <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-5 md:gap-8 items-center text-center md:text-left">
        {/* Avatar */}
        <div className="relative w-[var(--avatar-size)] h-[var(--avatar-size)] mx-auto">
          <div className="absolute -inset-1.5 rounded-[28px] bg-gradient-to-br from-[#e95420] via-[#77216f] to-[#2c001e] opacity-75 blur-[8px] z-0" />
          <img
            src={imgSrc}
            alt={profileData.fullName}
            onError={() => setImgSrc(profileData.avatarFallback)}
            className="relative z-10 w-full h-full object-cover rounded-[24px] border-2 border-white/20 bg-[var(--bg-surface)]"
          />
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 z-20 whitespace-nowrap bg-[#242424] border border-[#26a269]/45 text-[#26a269] text-[0.68rem] md:text-xs font-semibold px-3 py-1 rounded-full inline-flex items-center gap-1.5 shadow-lg">
            <span className="w-1.5 h-1.5 rounded-full bg-[#26a269] status-dot-pulse" />
            <span>{profileData.statusText}</span>
          </div>
        </div>

        {/* Identity & CTAs */}
        <div className="min-w-0">
          <div className="inline-flex items-center gap-1.5 font-mono text-[0.7rem] md:text-xs text-[var(--color-primary)] bg-[#e95420]/10 border border-[#e95420]/30 px-2.5 py-1 rounded-full mb-2">
            <span>{profileData.personaTag}</span>
          </div>

          <h1 className="text-[var(--fs-hero-name)] font-extrabold leading-tight tracking-tight mb-1.5 md:whitespace-nowrap text-[var(--text-primary)]">
            {profileData.fullName}
          </h1>

          <ul className="list-none p-0 m-0 mb-2.5 flex flex-col items-center md:items-start gap-0.5 text-[var(--fs-hero-role)] text-[var(--text-secondary)] font-medium">
            {profileData.roles.map((role) => (
              <li
                key={role.highlight}
                className="flex items-center justify-center md:justify-start gap-2 md:before:content-['•'] md:before:text-[var(--accent-cyan)] md:before:font-extrabold md:before:text-lg md:before:leading-none"
              >
                <div>
                  {role.prefix}{' '}
                  <span className="text-[var(--accent-cyan)] font-semibold">{role.highlight}</span>
                </div>
              </li>
            ))}
          </ul>

          <p className="italic text-[var(--text-muted)] text-[0.78rem] md:text-[0.9rem] md:border-l-[3px] md:border-[var(--color-aubergine)] md:pl-3 mb-2.5">
            {profileData.heroQuote}
          </p>

          <p className="text-[var(--text-secondary)] text-[var(--fs-hero-bio)] leading-relaxed mb-4 max-w-[760px]">
            {profileData.bioPrefix}
            <strong>{profileData.bioHighlight1}</strong>
            {profileData.bioMid1}
            <strong>{profileData.bioHighlight2}</strong>
            {profileData.bioMid2}
            <strong>{profileData.bioHighlight3}</strong>
            {profileData.bioMid3}
            <strong>{profileData.bioHighlight4}</strong>
            {profileData.bioMid4}
            <strong>{profileData.bioHighlight5}</strong>
            {profileData.bioSuffix}
          </p>

          {/* Primary CTAs */}
          <div className="flex flex-wrap justify-center md:justify-start gap-2 md:gap-3">
            {profileData.primaryCtas.map((cta) => (
              <a
                key={cta.href}
                href={cta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 md:px-4 md:py-2.5 rounded-lg text-xs md:text-sm font-semibold bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] active:bg-[var(--color-primary-active)] text-white shadow-[0_6px_16px_-4px_rgba(233,84,32,0.45)] transition-all hover:-translate-y-0.5"
              >
                {cta.label}
              </a>
            ))}
          </div>

          {/* Academic Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-2 md:gap-2.5 mt-2.5">
            {profileData.academicProfiles.map((item) => (
              <a
                key={item.id}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 md:px-3.5 md:py-2 rounded-lg text-xs md:text-sm font-semibold border border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--text-primary)] hover:border-[var(--border-highlight)] hover:bg-[var(--bg-card-hover)] transition-all hover:-translate-y-0.5"
              >
                <AcademicIcon id={item.id} />
                <span>{item.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
