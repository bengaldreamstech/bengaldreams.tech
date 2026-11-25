import { Link } from '@tanstack/react-router'
import { LogoMark } from './Logo'

export function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center px-6">
      <div className="max-w-md text-center">
        <LogoMark className="mx-auto size-14" />
        <p className="mt-8 text-sm font-bold text-clay">৪০৪</p>
        <h1 className="mt-2 text-4xl font-bold text-forest-deep">পাতাটি খুঁজে পাওয়া যায়নি</h1>
        <p className="mt-4 text-ink-soft">
          হয়তো ঠিকানাটি বদলে গেছে। আমাদের প্রতিষ্ঠানগুলো হোম পেজ থেকে দেখে নিন।
        </p>
        <Link to="/" className="btn-primary mt-8">
          হোম পেজে ফিরুন
        </Link>
      </div>
    </main>
  )
}
