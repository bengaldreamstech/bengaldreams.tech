import { Suspense, lazy, useEffect, useState } from 'react'
import { ventures } from '../lib/ventures'

// Remotion only ever loads in the browser, after mount, so SSR is unaffected.
const OrbitPlayer = lazy(() => import('../remotion/OrbitPlayer'))

export function HeroVisual() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return (
    <div
      role="img"
      aria-label={`বেঙ্গলড্রিমস গ্রুপের প্রতিষ্ঠানসমূহ: ${ventures.map((v) => v.category).join(', ')}`}
      className="relative aspect-[5/6] w-full overflow-hidden rounded-[2.25rem] bg-forest-deep shadow-[0_40px_80px_-40px_rgba(20,52,43,0.75)] ring-1 ring-forest/10"
    >
      {mounted ? (
        <Suspense fallback={<HeroFallback />}>
          <OrbitPlayer />
        </Suspense>
      ) : (
        <HeroFallback />
      )}
    </div>
  )
}

function HeroFallback() {
  return (
    <div className="absolute inset-0 grid place-items-center bg-[radial-gradient(120%_90%_at_50%_35%,#24594a_0%,#17392f_55%,#10291f_100%)]">
      <div className="size-1/4 animate-pulse rounded-full bg-paper/90" />
    </div>
  )
}
