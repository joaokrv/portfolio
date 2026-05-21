import { useTranslation } from 'react-i18next'

export function Footer() {
  const { t } = useTranslation()
  return (
    <footer
      className="py-6 border-t"
      style={{ borderColor: 'var(--color-border)', background: 'var(--color-bg-surface)' }}
    >
      <div className="max-w-[1100px] mx-auto px-6 md:px-10 text-center">
        <p className="text-xs font-inter" style={{ color: 'var(--color-text-muted)' }}>
          {t('footer.text')}{' '}
          <span style={{ color: 'var(--color-purple-light)' }}>João Victor</span>
        </p>
      </div>
    </footer>
  )
}
