import { useTranslation } from 'react-i18next'
import { SectionTitle } from '../ui/SectionTitle'
import { ProjectCard } from '../ui/ProjectCard'
import { useInView } from '../../hooks/useInView'
import { projects } from '../../data/projects'

export function Projects() {
  const { t } = useTranslation()
  const featuredRef = useInView(0)
  const grid1Ref = useInView(100)
  const grid2Ref = useInView(180)

  const featured = projects.find(p => p.featured)!
  const others = projects.filter(p => !p.featured)

  return (
    <section id="projetos" className="py-24 md:py-32" style={{ background: 'var(--color-bg-surface)' }}>
      <div className="max-w-[1100px] mx-auto px-6 md:px-10">
        <SectionTitle
          label={t('projects.label')}
          title={t('projects.title')}
          subtitle={t('projects.subtitle')}
        />

        <div className="flex flex-col gap-5">
          <div ref={featuredRef as React.RefObject<HTMLDivElement>} className="fade-up">
            <ProjectCard project={featured} featured />
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {others[0] && (
              <div ref={grid1Ref as React.RefObject<HTMLDivElement>} className="fade-up">
                <ProjectCard project={others[0]} />
              </div>
            )}
            {others[1] && (
              <div ref={grid2Ref as React.RefObject<HTMLDivElement>} className="fade-up">
                <ProjectCard project={others[1]} />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
