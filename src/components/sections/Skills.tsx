import { useTranslation } from 'react-i18next'
import { SectionTitle } from '../ui/SectionTitle'
import { useInView } from '../../hooks/useInView'
import { hardSkills } from '../../data/skills'

export function Skills() {
  const { t } = useTranslation()
  const workRef = useInView(0)
  const personalRef = useInView(120)

  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="max-w-[1100px] mx-auto px-6 md:px-10">
        <SectionTitle
          label={t('skills.label')}
          title={t('skills.title')}
          subtitle={t('skills.subtitle')}
        />

        <div className="flex flex-col gap-10">
          <div className="grid md:grid-cols-2 gap-6">
            <div
              ref={workRef as React.RefObject<HTMLDivElement>}
              className="fade-up p-6 rounded-2xl border"
              style={{ background: 'var(--color-bg-surface)', borderColor: 'var(--color-border)' }}
            >
              <p className="text-xs font-grotesk font-medium uppercase tracking-widest mb-4" style={{ color: 'var(--color-text-muted)' }}>
                {t('skills.work')}
              </p>
              <div className="flex flex-wrap gap-2">
                {hardSkills.work.map(skill => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg text-sm font-grotesk font-medium border"
                    style={{
                      background: 'var(--color-bg-subtle)',
                      borderColor: 'var(--color-border)',
                      color: 'var(--color-text-secondary)',
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div
              ref={personalRef as React.RefObject<HTMLDivElement>}
              className="fade-up p-6 rounded-2xl border"
              style={{ background: 'var(--color-bg-surface)', borderColor: 'var(--color-border)' }}
            >
              <p className="text-xs font-grotesk font-medium uppercase tracking-widest mb-4" style={{ color: 'var(--color-text-muted)' }}>
                {t('skills.personal')}
              </p>
              <div className="flex flex-wrap gap-2">
                {hardSkills.personal.map(skill => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg text-sm font-grotesk font-medium border"
                    style={{
                      background: 'var(--color-bg-subtle)',
                      borderColor: 'var(--color-border)',
                      color: 'var(--color-text-secondary)',
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
