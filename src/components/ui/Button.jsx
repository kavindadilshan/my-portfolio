const VARIANTS = {
  primary:
    'bg-gradient-to-r from-accent to-accent-2 text-white shadow-lg shadow-accent/25 hover:shadow-accent/40 hover:-translate-y-0.5',
  ghost: 'border border-border bg-surface text-fg hover:border-accent/50 hover:text-accent',
}

export function Button({ href, variant = 'primary', icon: Icon, children, ...rest }) {
  const external = href?.startsWith('http')
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${VARIANTS[variant]}`}
      {...rest}
    >
      {Icon && <Icon size={16} />}
      {children}
    </a>
  )
}
