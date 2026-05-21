import { ArrowDown } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { scrollToSection } from '../../hooks/useScrollTo'
import { useEffect, useRef, useState } from 'react'

export function Hero() {
  const { t } = useTranslation()
  const containerRef = useRef<HTMLDivElement>(null)
  const [imageError, setImageError] = useState(false)
  const baseUrl = import.meta.env.BASE_URL

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    setTimeout(() => {
      el.querySelectorAll<HTMLElement>('.hero-item').forEach((item, i) => {
        setTimeout(() => item.classList.add('visible'), i * 110)
      })
    }, 80)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, var(--color-bg-base) 0%, color-mix(in srgb, var(--color-purple-main) 3%, var(--color-bg-base)) 100%)',
      }}
    >
      <div
        ref={containerRef}
        className="max-w-[1100px] mx-auto px-6 md:px-10 w-full grid md:grid-cols-2 gap-12 items-center py-20"
      >
        <div className="flex flex-col gap-6">
          <div className="hero-item fade-up">
            <h1
              className="font-grotesk font-bold leading-tight text-4xl sm:text-5xl md:text-6xl"
              style={{ letterSpacing: '-0.03em', color: 'var(--color-text-primary)' }}
            >
              João Victor
            </h1>
          </div>

          <p className="hero-item fade-up text-base md:text-lg leading-relaxed max-w-[480px]" style={{ color: 'var(--color-text-secondary)' }}>
            {t('hero.role')} <span className="font-semibold text-primary">{t('hero.company')}</span>{t('hero.tagline')}
          </p>

          <div className="hero-item fade-up flex flex-wrap gap-4 mt-2">
            <button
              onClick={() => scrollToSection('projetos')}
              className="px-6 py-3 rounded-lg font-grotesk font-bold text-sm transition-all duration-200"
              style={{
                background: 'var(--color-purple-main)',
                color: '#fff',
                boxShadow: '0 4px 20px rgba(124, 58, 237, 0.25)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'var(--color-purple-light)'
                e.currentTarget.style.boxShadow = '0 4px 24px rgba(124, 58, 237, 0.4)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'var(--color-purple-main)'
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(124, 58, 237, 0.25)'
              }}
            >
              {t('hero.seeProjects')}
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className="px-6 py-3 rounded-lg font-grotesk font-bold text-sm border transition-all duration-200"
              style={{
                borderColor: 'var(--color-border)',
                background: 'transparent',
                color: 'var(--color-text-secondary)',
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
              {t('hero.contact')}
            </button>
          </div>
        </div>

        {/* Right side - profile image */}
        <div className="hero-item fade-up flex justify-center md:justify-end">
          <div className="relative group w-[260px] h-[260px] md:w-[320px] md:h-[320px]">
            <div
              className="w-full h-full rounded-2xl overflow-hidden border flex items-center justify-center relative"
              style={{
                borderColor: 'var(--color-border)',
                background: 'var(--color-bg-surface)',
              }}
            >
              {!imageError ? (
                <img
                  src={`${baseUrl}assets/foto.png`}
                  alt="João Victor"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center relative">
                  {/* Fallback SVG avatar */}
                  <svg width="120" height="100" viewBox="0 0 120 100" fill="none" className="text-muted">
                    <rect x="10" y="10" width="100" height="80" rx="8" fill="url(#avatar-glow)" stroke="var(--color-purple-main)" strokeWidth="1.5" />
                    <circle cx="60" cy="40" r="16" stroke="var(--color-purple-light)" strokeWidth="1.5" />
                    <path d="M36 76C36 62.7452 46.7452 52 60 52C73.2548 52 84 62.7452 84 76" stroke="var(--color-purple-light)" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M98 45L106 53L98 61" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M14 45L6 53L14 61" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <defs>
                      <radialGradient id="avatar-glow" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" transform="translate(60 50) rotate(90) scale(16)">
                        <stop stopColor="var(--color-purple-light)" stopOpacity="0.4" />
                        <stop offset="1" stopColor="var(--color-purple-main)" stopOpacity="0" />
                      </radialGradient>
                    </defs>
                  </svg>
                </div>
              )}
            </div>
            
            {/* Decorative bottom/right accent line */}
            <div
              className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl -z-10 border transition-all duration-300 group-hover:-bottom-4 group-hover:-right-4"
              style={{
                borderColor: 'color-mix(in srgb, var(--color-purple-main) 40%, transparent)',
                pointerEvents: 'none',
              }}
            />
          </div>
        </div>
      </div>

      <a
        href="#sobre"
        onClick={e => { e.preventDefault(); scrollToSection('sobre') }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 transition-opacity duration-200 opacity-60 hover:opacity-100"
        style={{ color: 'var(--color-text-muted)' }}
      >
        <span className="text-xs font-inter tracking-widest uppercase">{t('hero.scroll')}</span>
        <ArrowDown size={14} className="animate-bounce" />
      </a>
    </section>
  )
}
