import { useTranslation } from 'react-i18next'
import { Briefcase, GraduationCap } from 'lucide-react'
import { SectionTitle } from '../ui/SectionTitle'
import { Badge } from '../ui/Badge'
import { useInView } from '../../hooks/useInView'

const stack = ['Java', 'Spring Boot', 'Angular', 'TypeScript', 'JavaScript', 'MySQL', 'Flutter']

export function Experience() {
  const { t } = useTranslation()
  const expRef = useInView(0)
  const eduRef = useInView(120)

  return (
    <section id="experiencia" className="py-24 md:py-32" style={{ background: 'var(--color-bg-surface)' }}>
      <div className="max-w-[1100px] mx-auto px-6 md:px-10">
        <SectionTitle label={t('experience.label')} title={t('experience.title')} />

        <div className="grid md:grid-cols-2 gap-8">
          {/* Professional Experience Column */}
          <div ref={expRef as React.RefObject<HTMLDivElement>} className="fade-up flex flex-col gap-4">
            <div className="flex items-center gap-2 mb-2">
              <Briefcase size={16} style={{ color: 'var(--color-purple-light)' }} />
              <span className="text-xs font-grotesk font-medium uppercase tracking-widest" style={{ color: 'var(--color-text-muted)' }}>
                {t('experience.professional')}
              </span>
            </div>

            <div
              className="p-6 rounded-2xl border relative overflow-hidden"
              style={{ background: 'var(--color-bg-base)', borderColor: 'var(--color-border)' }}
            >
              <div
                className="absolute top-0 left-0 w-0.5 h-full"
                style={{ background: 'linear-gradient(to bottom, var(--color-purple-glow), transparent)' }}
              />
              <div className="flex items-start justify-between gap-4 flex-wrap sm:flex-nowrap">
                <div>
                  <h3 className="font-grotesk font-semibold text-base" style={{ color: 'var(--color-text-primary)' }}>
                    {t('experience.groupRole')}
                  </h3>
                  <p className="text-sm mt-0.5 font-medium" style={{ color: 'var(--color-text-secondary)' }}>
                    {t('experience.groupCompany')}
                  </p>
                  <p className="text-xs mt-2 font-inter leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                    {t('experience.groupDetail')}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {stack.map(s => (
                      <Badge key={s} variant="tech">{s}</Badge>
                    ))}
                  </div>
                </div>
                <span className="text-xs font-inter shrink-0" style={{ color: 'var(--color-text-muted)' }}>
                  {t('experience.groupPeriod')}
                </span>
              </div>
            </div>
          </div>

          {/* Academic Experience Column */}
          <div ref={eduRef as React.RefObject<HTMLDivElement>} className="fade-up flex flex-col gap-4">
            <div className="flex items-center gap-2 mb-2">
              <GraduationCap size={16} style={{ color: 'var(--color-purple-light)' }} />
              <span className="text-xs font-grotesk font-medium uppercase tracking-widest" style={{ color: 'var(--color-text-muted)' }}>
                {t('experience.academic')}
              </span>
            </div>

            <div
              className="p-6 rounded-2xl border relative overflow-hidden"
              style={{ background: 'var(--color-bg-base)', borderColor: 'var(--color-border)' }}
            >
              <div
                className="absolute top-0 left-0 w-0.5 h-full"
                style={{ background: 'linear-gradient(to bottom, var(--color-purple-glow), transparent)' }}
              />
              <div className="flex items-start justify-between gap-4 flex-wrap sm:flex-nowrap">
                <div>
                  <h3 className="font-grotesk font-semibold text-base" style={{ color: 'var(--color-text-primary)' }}>
                    {t('experience.unibhCourse')}
                  </h3>
                  <p className="text-sm mt-0.5 font-medium" style={{ color: 'var(--color-text-secondary)' }}>
                    {t('experience.unibhInstitution')}
                  </p>
                  <p className="text-xs mt-2 font-inter leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                    {t('experience.unibhDetail')}
                  </p>
                </div>
                <span className="text-xs font-inter shrink-0" style={{ color: 'var(--color-text-muted)' }}>
                  {t('experience.unibhPeriod')}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
