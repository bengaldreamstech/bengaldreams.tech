import { Link } from '@tanstack/react-router'
import { ArrowUpRight, Mail, MapPin } from 'lucide-react'
import { toBnDigits } from '../lib/bn'
import { site } from '../lib/site'
import { ventures } from '../lib/ventures'
import { Logo } from './Logo'

export function Footer() {
  const year = toBnDigits(new Date().getFullYear())

  return (
    <footer className="relative overflow-hidden bg-forest-deep text-paper">
      <div className="alpana absolute inset-0 opacity-30" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-5 pt-20 pb-10 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo light />
            <p className="mt-6 max-w-sm text-sage">
              প্রযুক্তি, বাণিজ্য আর মাটির টানে গড়া একটি গ্রুপ। এক ঠিকানায় আপনার ব্যবসার প্রায় সব
              প্রয়োজন।
            </p>
            <div className="mt-6 space-y-2 text-paper/80">
              <a href={`mailto:${site.email}`} className="flex items-center gap-2 hover:text-sand">
                <Mail size={16} /> {site.email}
              </a>
              <p className="flex items-center gap-2">
                <MapPin size={16} /> {site.location}
              </p>
            </div>
          </div>

          <div>
            <h2 className="mb-4 text-sm font-bold text-sand">প্রতিষ্ঠানসমূহ</h2>
            <ul className="space-y-2">
              {ventures.slice(0, 4).map((v) => (
                <li key={v.slug}>
                  <Link
                    to="/ventures/$slug"
                    params={{ slug: v.slug }}
                    className="text-paper/80 hover:text-paper"
                  >
                    {v.category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-sm font-bold text-sand">আরও</h2>
            <ul className="space-y-2">
              {ventures.slice(4).map((v) => (
                <li key={v.slug}>
                  <Link
                    to="/ventures/$slug"
                    params={{ slug: v.slug }}
                    className="text-paper/80 hover:text-paper"
                  >
                    {v.category}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="https://bengaldreams.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-paper/80 hover:text-paper"
                >
                  bengaldreams.com <ArrowUpRight size={14} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p
          aria-hidden="true"
          className="mt-20 select-none text-center text-[19vw] leading-none font-bold tracking-tighter text-paper/[0.06] md:text-[11rem]"
        >
          BengalDreams
        </p>

        <div className="mt-6 flex flex-col gap-2 border-t border-paper/10 pt-6 text-sm text-paper/60 sm:flex-row sm:justify-between">
          <p>
            © {year} বেঙ্গলড্রিমস গ্রুপ · {site.domain}
          </p>
          <p>স্বপ্ন দেখি বাংলায়, গড়ি বিশ্বের জন্য।</p>
        </div>
      </div>
    </footer>
  )
}
