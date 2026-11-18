import { projectsSection } from '../data/projects';
import Badge from './Badge';
import SectionHeader from './SectionHeader';

export default function Projects() {
  const { eyebrow, title, description, projects, featuredProject } = projectsSection;

  return (
    <section id="proyek" className="py-[var(--section-pad)]">
      <SectionHeader eyebrow={eyebrow} title={title} description={description} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 md:gap-4">
        {projects.map((project) => (
          <div
            key={project.title}
            className="flex flex-col justify-between bg-[var(--bg-card)] border border-[var(--border-subtle)] hover:border-[var(--border-highlight)] rounded-xl p-4 md:p-5 shadow-[var(--shadow-card)] transition-colors"
          >
            <div>
              <Badge variant={project.badgeVariant}>{project.badge}</Badge>
              <h3 className="text-[length:var(--fs-card-title)] font-bold text-[var(--text-primary)] mb-1.5">
                {project.title}
              </h3>
              <p className="text-[length:var(--fs-body)] text-[var(--text-muted)] leading-relaxed mb-3">
                {project.description}
              </p>
            </div>
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs md:text-sm font-semibold text-[var(--accent-cyan)] hover:underline"
            >
              {project.linkLabel} &rarr;
            </a>
          </div>
        ))}
      </div>

      {featuredProject && (
        <div className="mt-3.5 bg-[var(--bg-card)] border border-[var(--border-subtle)] hover:border-[var(--border-highlight)] rounded-xl p-4 md:p-5 shadow-[var(--shadow-card)] transition-colors flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div>
            <Badge variant={featuredProject.badgeVariant}>{featuredProject.badge}</Badge>
            <h3 className="text-[length:var(--fs-card-title)] font-bold text-[var(--text-primary)] mb-1">
              {featuredProject.title}
            </h3>
            <p className="text-[length:var(--fs-body)] text-[var(--text-muted)] leading-relaxed">
              {featuredProject.description}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href={featuredProject.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs md:text-sm font-semibold bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white transition-colors"
            >
              {featuredProject.linkLabel} &rarr;
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
