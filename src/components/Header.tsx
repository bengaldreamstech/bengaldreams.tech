import { useEffect, useState } from 'react'
import { Link } from '@tanstack/react-router'
import { AnimatePresence, motion } from 'motion/react'
import { Menu, X } from 'lucide-react'
import { site } from '../lib/site'
import { Logo } from './Logo'
import { EASE_CALM } from './Reveal'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ease-calm ${
        scrolled || open
          ? 'bg-paper/85 shadow-[0_1px_0_rgba(31,77,64,0.08)] backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <Link to="/" aria-label="BengalDreams হোম" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav aria-label="প্রধান" className="hidden items-center gap-8 md:flex">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative text-[15px] text-ink-soft transition hover:text-forest after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-forest after:transition-transform after:duration-500 hover:after:scale-x-100"
            >
              {item.label}
            </a>
          ))}
          <a href="/#contact" className="btn-primary px-5 py-2.5 text-sm">
            আলাপ শুরু করুন
          </a>
        </nav>

        <button
          type="button"
          className="grid size-11 place-items-center rounded-full border border-forest/15 text-forest md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'মেনু বন্ধ করুন' : 'মেনু খুলুন'}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-nav"
            aria-label="মোবাইল"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.45, ease: EASE_CALM }}
            className="overflow-hidden md:hidden"
          >
            <div className="flex flex-col gap-1 px-5 pb-6">
              {site.nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-4 py-3 text-lg text-ink hover:bg-forest/5"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
