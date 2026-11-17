import { projectsSection } from '../data/projects';
import Badge from './Badge';
import SectionHeader from './SectionHeader';

export default function Projects() {
  const { eyebrow, title, description, projects } = projectsSection;

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
              <h3 className="text-[var(--fs-card-title)] font-bold text-[var(--text-primary)] mb-1.5">
                {project.title}
              </h3>
              <p className="text-[var(--fs-body)] text-[var(--text-muted)] leading-relaxed mb-3">
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
    </section>
  );
}
