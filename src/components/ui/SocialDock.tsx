import { useTranslation } from 'react-i18next'
import { FileDown } from 'lucide-react'
import { GithubIcon, LinkedinIcon, InstagramIcon } from './SocialIcons'

export function SocialDock() {
  const { t } = useTranslation()
  const baseUrl = import.meta.env.BASE_URL

  const links = [
    {
      href: 'https://github.com/joaokrv',
      icon: <GithubIcon size={18} />,
      label: 'GitHub',
      external: true,
    },
    {
      href: 'https://linkedin.com/in/joaokrv',
      icon: <LinkedinIcon size={18} />,
      label: 'LinkedIn',
      external: true,
    },
    {
      href: 'https://instagram.com/joaokrv',
      icon: <InstagramIcon size={18} />,
      label: 'Instagram',
      external: true,
    },
    {
      href: `${baseUrl}assets/docs/curriculo.pdf`,
      download: 'curriculo-joao-victor.pdf',
      icon: <FileDown size={18} />,
      label: t('hero.downloadCv') || 'CV',
      external: false,
    },
  ]

  return (
    <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-40 flex flex-col gap-3">
      {links.map((link, idx) => {
        return (
          <div key={idx} className="relative group flex items-center justify-end">
            {/* Tooltip */}
            <span
              className="absolute right-full mr-3 px-2.5 py-1.5 rounded-lg border text-[10px] font-grotesk font-bold tracking-widest uppercase opacity-0 pointer-events-none translate-x-2 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0 whitespace-nowrap shadow-lg"
              style={{
                background: 'var(--color-bg-surface)',
                borderColor: 'var(--color-border)',
                color: 'var(--color-text-primary)',
              }}
            >
              {link.label}
            </span>

            {/* Circular Button */}
            <a
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              download={link.download}
              className="w-12 h-12 rounded-full flex items-center justify-center border transition-all duration-300 hover:scale-110"
              style={{
                background: 'var(--color-bg-surface)',
                borderColor: 'var(--color-border)',
                color: 'var(--color-text-secondary)',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'var(--color-purple-main)'
                e.currentTarget.style.color = 'var(--color-purple-light)'
                e.currentTarget.style.boxShadow = '0 0 16px rgba(124, 58, 237, 0.4)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--color-border)'
                e.currentTarget.style.color = 'var(--color-text-secondary)'
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)'
              }}
            >
              {link.icon}
            </a>
          </div>
        )
      })}
    </div>
  )
}