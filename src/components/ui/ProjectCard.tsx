import { ExternalLink } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { GithubIcon } from './SocialIcons'
import { Badge } from './Badge'
import type { Project } from '../../data/projects'

interface ProjectCardProps {
  project: Project
  featured?: boolean
}

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const { t } = useTranslation()
  const description = t(
    `projects.items.${project.id}.${featured ? 'long' : 'description'}`,
    { defaultValue: featured ? project.longDescription : project.description }
  )
  const statusLabel = project.status === 'active' ? t('projects.active') : t('projects.academic')
  const highlights = t(`projects.items.${project.id}.highlights`, {
    returnObjects: true,
    defaultValue: project.highlights,
  }) as string[]

  return (
    <div
      style={{
        background: featured ? 'linear-gradient(135deg, color-mix(in srgb, var(--color-purple-main) 8%, transparent) 0%, var(--color-bg-surface) 100%)' : 'var(--color-bg-surface)',
        border: featured ? '1px solid var(--color-purple-main)' : '1px solid var(--color-border)',
        borderRadius: '16px',
        padding: featured ? '32px' : '24px',
        transition: 'border-color 250ms ease, box-shadow 250ms ease, background 250ms ease',
      }}
      className="group flex flex-col gap-4"
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = 'var(--color-purple-main)'
        e.currentTarget.style.boxShadow = featured ? '0 0 40px rgba(124,58,237,0.3)' : '0 0 32px rgba(109,40,217,0.18)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = featured ? 'var(--color-purple-main)' : 'var(--color-border)'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-2">
            <Badge variant={project.status}>{statusLabel}</Badge>
          </div>
          <h3 className="font-grotesk font-bold text-xl md:text-2xl" style={{ color: 'var(--color-text-primary)' }}>
            {project.name}
          </h3>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg transition-colors duration-200"
              style={{ color: 'var(--color-text-muted)', border: '1px solid var(--color-border)' }}
              onMouseEnter={e => {
                e.currentTarget.style.color = 'var(--color-purple-light)'
                e.currentTarget.style.borderColor = 'var(--color-purple-main)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = 'var(--color-text-muted)'
                e.currentTarget.style.borderColor = 'var(--color-border)'
              }}
            >
              <GithubIcon size={18} />
            </a>
          )}
          {project.links.githubBackend && (
            <a
              href={project.links.githubBackend}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg transition-colors duration-200 flex items-center gap-1.5 text-xs font-grotesk font-semibold"
              style={{ color: 'var(--color-text-muted)', border: '1px solid var(--color-border)' }}
              onMouseEnter={e => {
                e.currentTarget.style.color = 'var(--color-purple-light)'
                e.currentTarget.style.borderColor = 'var(--color-purple-main)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = 'var(--color-text-muted)'
                e.currentTarget.style.borderColor = 'var(--color-border)'
              }}
              title="Backend API"
            >
              <GithubIcon size={16} />
              <span>API</span>
            </a>
          )}
          {project.links.githubFrontend && (
            <a
              href={project.links.githubFrontend}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg transition-colors duration-200 flex items-center gap-1.5 text-xs font-grotesk font-semibold"
              style={{ color: 'var(--color-text-muted)', border: '1px solid var(--color-border)' }}
              onMouseEnter={e => {
                e.currentTarget.style.color = 'var(--color-purple-light)'
                e.currentTarget.style.borderColor = 'var(--color-purple-main)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = 'var(--color-text-muted)'
                e.currentTarget.style.borderColor = 'var(--color-border)'
              }}
              title="Frontend Web"
            >
              <GithubIcon size={16} />
              <span>Web</span>
            </a>
          )}
          {project.links.live && !featured && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg transition-colors duration-200"
              style={{ color: 'var(--color-text-muted)', border: '1px solid var(--color-border)' }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'var(--color-purple-main)'
                e.currentTarget.style.color = 'var(--color-purple-light)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--color-border)'
                e.currentTarget.style.color = 'var(--color-text-muted)'
              }}
            >
              <ExternalLink size={18} />
            </a>
          )}
        </div>
      </div>

      <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
        {description}
      </p>

      {highlights && Array.isArray(highlights) && highlights.length > 0 && (
        <div className="flex flex-col gap-2 border-t border-[var(--color-border)] pt-4 my-1">
          <h4 className="text-xs uppercase tracking-wider font-bold font-grotesk" style={{ color: 'var(--color-text-muted)' }}>
            {t('projects.highlightsTitle', { defaultValue: 'Destaques Técnicos' })}
          </h4>
          <ul className="flex flex-col gap-2">
            {highlights.map((highlight, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2 text-[13px] leading-normal"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                <svg
                  className="mt-0.5 w-3.5 h-3.5 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                  style={{ color: 'var(--color-purple-light)' }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className={`flex flex-wrap gap-2 mt-auto pt-2 ${featured ? 'flex-col-reverse' : ''}`}>
        {featured && project.links.live && (
          <a
            href={project.links.live}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full px-6 py-3 rounded-lg font-grotesk font-bold text-sm flex items-center justify-center gap-2"
            style={{
              background: 'var(--color-purple-main)',
              color: '#fff',
              boxShadow: '0 4px 20px rgba(124, 58, 237, 0.3)',
              transition: 'background 250ms ease, box-shadow 250ms ease, transform 250ms ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'var(--color-purple-light)'
              e.currentTarget.style.boxShadow = '0 6px 28px rgba(124, 58, 237, 0.45)'
              e.currentTarget.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'var(--color-purple-main)'
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(124, 58, 237, 0.3)'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            <ExternalLink size={16} />
            {t('projects.liveDemo')}
          </a>
        )}
        <div className="flex flex-wrap gap-2 w-full">
          {project.stack.map(tech => (
            <Badge key={tech} variant="tech">{tech}</Badge>
          ))}
        </div>
      </div>
    </div>
  )
}
