import { useTranslation } from 'react-i18next'
import { SectionTitle } from '../ui/SectionTitle'
import { useInView } from '../../hooks/useInView'

export function About() {
  const { t } = useTranslation()
  const p1 = useInView(0)
  const p2 = useInView(80)
  const p3 = useInView(160)
  const statsRef = useInView(240)

  const stats = [
    { value: '3', label: t('about.stats.projects') },
    { value: '6°', label: t('about.stats.semester') },
  ]

  return (
    <section id="sobre" className="py-24 md:py-32">
      <div className="max-w-[1100px] mx-auto px-6 md:px-10">
        <SectionTitle label={t('about.label')} title={t('about.title')} />

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="flex flex-col gap-5">
            <p
              ref={p1 as React.RefObject<HTMLParagraphElement>}
              className="fade-up text-base leading-relaxed font-inter"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              {t('about.p1')}
            </p>
            <p
              ref={p2 as React.RefObject<HTMLParagraphElement>}
              className="fade-up text-base leading-relaxed font-inter"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              {t('about.p2')}
            </p>
            <p
              ref={p3 as React.RefObject<HTMLParagraphElement>}
              className="fade-up text-base leading-relaxed font-inter"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              {t('about.p3Start')}
              <span style={{ color: 'var(--color-text-primary)', fontWeight: 500 }}>
                {t('about.p3Highlight')}
              </span>
            </p>
          </div>

          <div
            ref={statsRef as React.RefObject<HTMLDivElement>}
            className="fade-up grid grid-cols-2 gap-4"
          >
            {stats.map(stat => (
              <div
                key={stat.label}
                className="flex flex-col gap-1 p-5 rounded-2xl border"
                style={{
                  background: 'var(--color-bg-surface)',
                  borderColor: 'var(--color-border)',
                }}
              >
                <span
                  className="font-grotesk font-bold text-3xl"
                  style={{ color: 'var(--color-purple-light)' }}
                >
                  {stat.value}
                </span>
                <span
                  className="text-xs font-inter leading-snug"
                  style={{ color: 'var(--color-text-muted)' }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
