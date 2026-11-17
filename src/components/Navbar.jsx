import { navLinks, profileData } from '../data/profile';

export default function Navbar({ theme, onToggleTheme }) {
  const isLight = theme === 'light';

  return (
    <header className="sticky top-0 z-50 bg-[var(--bg-navbar)] backdrop-blur-md border-b border-[var(--border-subtle)] transition-colors duration-200">
      <div className="max-w-[1140px] mx-auto px-4 md:px-6 flex items-center justify-between h-14 md:h-[64px]">
        <a
          href="#"
          className="flex items-center gap-2.5 font-bold text-[0.9rem] md:text-base tracking-tight whitespace-nowrap shrink-0 text-[var(--text-primary)]"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent-cyan)] shadow-[0_0_12px_var(--accent-cyan)] shrink-0" />
          <span>{profileData.brandName}</span>
        </a>

        <div className="flex items-center gap-3">
          <nav className="hidden lg:flex items-center gap-1 text-[0.84rem] font-medium text-[var(--text-secondary)]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="whitespace-nowrap px-3 py-1.5 rounded-lg transition-colors hover:text-[var(--accent-cyan)] hover:bg-[var(--bg-tag)]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            onClick={onToggleTheme}
            aria-label="Ganti Tema Terang/Gelap"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--text-primary)] text-xs font-semibold cursor-pointer transition-all hover:border-[var(--border-highlight)] hover:-translate-y-0.5 shadow-[var(--shadow-card)] whitespace-nowrap shrink-0"
          >
            <span>{isLight ? '🌙' : '☀️'}</span>
            <span>{isLight ? 'Dark' : 'Light'}</span>
          </button>
        </div>
      </div>
    </header>
  );
}
