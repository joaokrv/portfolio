import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useTheme } from '../../hooks/useTheme'
import { scrollToSection } from '../../hooks/useScrollTo'
import { LanguageSwitcher } from '../ui/LanguageSwitcher'

export function Header() {
  const { theme, toggle } = useTheme()
  const { t } = useTranslation()
  const [scrolled, setScrolled] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      const total = document.body.scrollHeight - window.innerHeight
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { label: t('nav.about'), id: 'sobre' },
    { label: t('nav.experience'), id: 'experiencia' },
    { label: t('nav.skills'), id: 'skills' },
    { label: t('nav.projects'), id: 'projetos' },
    { label: t('nav.contact'), id: 'contato' },
  ]

  const handleNavClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault()
    scrollToSection(id)
  }

  return (
    <>
      <div id="scroll-progress" style={{ width: `${progress}%` }} />
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? 'var(--color-bg-base)' : 'transparent',
          borderBottom: scrolled ? '1px solid var(--color-border)' : '1px solid transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
        }}
      >
        <div className="max-w-[1100px] mx-auto px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
          <a
            href="#home"
            onClick={e => handleNavClick(e, 'home')}
            className="font-grotesk font-bold text-lg tracking-tight"
            style={{ color: 'var(--color-text-primary)' }}
          >
            jv<span style={{ color: 'var(--color-purple-main)' }}>.</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={e => handleNavClick(e, link.id)}
                className="text-sm font-inter transition-colors duration-200"
                style={{ color: 'var(--color-text-secondary)' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-text-primary)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-text-secondary)')}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <button
              onClick={toggle}
              className="p-2 rounded-lg border transition-all duration-200 flex items-center justify-center"
              style={{
                borderColor: 'var(--color-border)',
                color: 'var(--color-text-secondary)',
                background: 'var(--color-bg-surface)',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-purple-light)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-text-secondary)')}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </div>
        </div>
      </header>
    </>
  )
}
