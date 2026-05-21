import { clsx } from 'clsx'

type BadgeVariant = 'active' | 'academic' | 'tech'

interface BadgeProps {
  children: React.ReactNode
  variant?: BadgeVariant
  className?: string
}

export function Badge({ children, variant = 'tech', className }: BadgeProps) {
  return (
    <span
      className={clsx(
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border font-grotesk tracking-wide',
        variant === 'active' && 'bg-[color-mix(in_srgb,var(--color-purple-main)_15%,transparent)] text-[var(--color-purple-light)] border-[color-mix(in_srgb,var(--color-purple-main)_40%,transparent)]',
        variant === 'academic' && 'bg-[color-mix(in_srgb,var(--color-text-muted)_10%,transparent)] text-[var(--color-text-secondary)] border-[var(--color-border)]',
        variant === 'tech' && 'bg-transparent text-[var(--color-text-muted)] border-[var(--color-border)]',
        className
      )}
    >
      {children}
    </span>
  )
}
