import { useTranslation } from 'react-i18next'
import { useState, useRef, useEffect } from 'react'

export function LanguageSwitcher() {
  const { i18n } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const languages = [
    { code: 'pt', label: 'PT', flag: '🇧🇷' },
    { code: 'en', label: 'EN', flag: '🇺🇸' },
    { code: 'es', label: 'ES', flag: '🇪🇸' },
  ]

  const currentLang = languages.find(l => i18n.language?.startsWith(l.code)) || languages[0]

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleOutsideClick)
    return () => document.removeEventListener('mousedown', handleOutsideClick)
  }, [])

  const selectLanguage = (code: string) => {
    i18n.changeLanguage(code)
    setIsOpen(false)
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-2.5 py-1.5 rounded-lg border text-xs font-grotesk font-bold tracking-wider flex items-center gap-1.5 transition-all duration-200"
        style={{
          borderColor: 'var(--color-border)',
          color: 'var(--color-text-secondary)',
          background: 'var(--color-bg-surface)',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.color = 'var(--color-purple-light)'
          e.currentTarget.style.borderColor = 'var(--color-purple-main)'
        }}
        onMouseLeave={e => {
          if (!isOpen) {
            e.currentTarget.style.color = 'var(--color-text-secondary)'
            e.currentTarget.style.borderColor = 'var(--color-border)'
          }
        }}
      >
        <span>{currentLang.flag}</span>
        <span>{currentLang.label}</span>
      </button>

      {isOpen && (
        <div
          className="absolute right-0 mt-1.5 w-24 rounded-lg border overflow-hidden flex flex-col z-50 shadow-xl"
          style={{
            background: 'var(--color-bg-surface)',
            borderColor: 'var(--color-border)',
          }}
        >
          {languages.map(lang => (
            <button
              key={lang.code}
              onClick={() => selectLanguage(lang.code)}
              className="px-3 py-2 text-left text-xs font-grotesk font-bold tracking-wider flex items-center gap-2 transition-colors duration-150"
              style={{
                color: lang.code === currentLang.code ? 'var(--color-purple-light)' : 'var(--color-text-secondary)',
                background: lang.code === currentLang.code ? 'var(--color-bg-subtle)' : 'transparent',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'var(--color-bg-subtle)'
                e.currentTarget.style.color = 'var(--color-text-primary)'
              }}
              onMouseLeave={e => {
                if (lang.code !== currentLang.code) {
                  e.currentTarget.style.background = 'transparent'
                  e.currentTarget.style.color = 'var(--color-text-secondary)'
                } else {
                  e.currentTarget.style.background = 'var(--color-bg-subtle)'
                  e.currentTarget.style.color = 'var(--color-purple-light)'
                }
              }}
            >
              <span>{lang.flag}</span>
              <span>{lang.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
