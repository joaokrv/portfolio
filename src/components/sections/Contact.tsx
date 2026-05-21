import { useTranslation } from 'react-i18next'
import { Mail } from 'lucide-react'
import { LinkedinIcon, InstagramIcon } from '../ui/SocialIcons'
import { useInView } from '../../hooks/useInView'

const EMAIL = 'joaovictooroc@gmail.com'

const links = [
  {
    label: 'LinkedIn',
    handle: '/in/joaokrv',
    href: 'https://linkedin.com/in/joaokrv',
    Icon: LinkedinIcon,
  },
  {
    label: 'Instagram',
    handle: '@joaokrv',
    href: 'https://instagram.com/joaokrv',
    Icon: InstagramIcon,
  },
]

export function Contact() {
  const { t } = useTranslation()
  const titleRef = useInView(0)
  const ctaRef = useInView(80)
  const linksRef = useInView(160)

  return (
    <section id="contato" className="py-24 md:py-32" style={{ background: 'var(--color-bg-surface)' }}>
      <div className="max-w-[680px] mx-auto px-6 md:px-10 text-center">

        <div ref={titleRef as React.RefObject<HTMLDivElement>} className="fade-up mb-10">
          <span
            className="text-xs font-medium uppercase tracking-widest font-grotesk"
            style={{ color: 'var(--color-purple-light)' }}
          >
            {t('contact.label')}
          </span>
          <h2
            className="font-grotesk font-bold leading-tight mt-3"
            style={{ fontSize: 'clamp(32px, 5vw, 48px)', letterSpacing: '-0.02em', color: 'var(--color-text-primary)' }}
          >
            {t('contact.title')}
          </h2>
          <p className="text-sm mt-3 leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
            {t('contact.subtitle')}
          </p>
        </div>

        {/* Primary CTA — email */}
        <div ref={ctaRef as React.RefObject<HTMLDivElement>} className="fade-up mb-10">
          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex items-center gap-3 px-7 py-4 rounded-xl font-grotesk font-semibold text-sm"
            style={{
              background: 'var(--color-purple-main)',
              color: '#fff',
              boxShadow: '0 4px 24px rgba(124, 58, 237, 0.3)',
              transition: 'background 250ms ease, box-shadow 250ms ease, transform 250ms ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'var(--color-purple-light)'
              e.currentTarget.style.boxShadow = '0 6px 32px rgba(124, 58, 237, 0.45)'
              e.currentTarget.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'var(--color-purple-main)'
              e.currentTarget.style.boxShadow = '0 4px 24px rgba(124, 58, 237, 0.3)'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            <Mail size={16} />
            {EMAIL}
          </a>
        </div>

        {/* Secondary — social links */}
        <div
          ref={linksRef as React.RefObject<HTMLDivElement>}
          className="fade-up flex items-center justify-center gap-4"
        >
          <span className="text-xs uppercase tracking-widest font-grotesk" style={{ color: 'var(--color-text-muted)' }}>
            {t('contact.or')}
          </span>
          {links.map(({ label, handle, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg border text-sm font-grotesk font-medium"
              style={{
                borderColor: 'var(--color-border)',
                background: 'var(--color-bg-base)',
                color: 'var(--color-text-secondary)',
                transition: 'border-color 200ms ease, color 200ms ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'var(--color-purple-main)'
                e.currentTarget.style.color = 'var(--color-purple-light)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--color-border)'
                e.currentTarget.style.color = 'var(--color-text-secondary)'
              }}
            >
              <Icon size={15} />
              {handle}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
