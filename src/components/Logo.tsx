export function LogoMark({ className = 'size-10' }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <rect width="48" height="48" rx="14" fill="#1f4d40" />
      <circle cx="24" cy="21" r="9" fill="#c06a4d" />
      <path
        d="M8 30 q4 -3 8 0 t8 0 t8 0 t8 0"
        fill="none"
        stroke="#f6f1e7"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <path
        d="M8 36 q4 -3 8 0 t8 0 t8 0 t8 0"
        fill="none"
        stroke="#9cb7a5"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="flex items-center gap-3">
      <LogoMark />
      <span
        className={`text-lg leading-none font-bold tracking-tight ${light ? 'text-paper' : 'text-forest-deep'}`}
      >
        BengalDreams
      </span>
    </span>
  )
}
