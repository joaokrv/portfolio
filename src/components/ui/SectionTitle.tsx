import { useInView } from '../../hooks/useInView'

interface SectionTitleProps {
  label: string
  title: string
  subtitle?: string
}

export function SectionTitle({ label, title, subtitle }: SectionTitleProps) {
  const ref = useInView()

  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className="fade-up mb-12">
      <div className="flex items-center gap-3 mb-3">
        <div
          className="w-0.5 h-10 rounded-full"
          style={{ background: 'linear-gradient(to bottom, var(--color-purple-main), transparent)' }}
        />
        <span
          className="text-xs font-medium uppercase tracking-widest font-grotesk"
          style={{ color: 'var(--color-purple-light)' }}
        >
          {label}
        </span>
      </div>
      <h2
        className="text-3xl md:text-4xl font-bold font-grotesk tracking-tight"
        style={{ color: 'var(--color-text-primary)', letterSpacing: '-0.02em' }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base max-w-xl" style={{ color: 'var(--color-text-secondary)' }}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
