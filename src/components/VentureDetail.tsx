import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import { motion } from 'motion/react'
import { ArrowLeft, ArrowRight, ArrowUpRight, Check } from 'lucide-react'
import { toBnDigits } from '../lib/bn'
import { site } from '../lib/site'
import { imageUrl, ventures, type Venture } from '../lib/ventures'
import { ContactSection } from './ContactSection'
import { Footer } from './Footer'
import { Header } from './Header'
import { EASE_CALM, Reveal } from './Reveal'

export function VentureDetail({ venture }: { venture: Venture }) {
  const [ventureSlug, setVentureSlug] = useState(venture.slug)
  const Icon = venture.icon
  const index = ventures.findIndex((v) => v.slug === venture.slug)
  const next = ventures[(index + 1) % ventures.length]
  const others = ventures.filter((v) => v.slug !== venture.slug)

  return (
    <>
      <Header />
      <main>
        <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40">
          <div
            aria-hidden="true"
            className="absolute -top-32 -right-24 size-[30rem] rounded-full blur-[130px] opacity-30"
            style={{ background: venture.tone }}
          />
          <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
            <Link
              to="/"
              hash="ventures"
              className="inline-flex items-center gap-2 text-sm text-ink-soft hover:text-forest"
            >
              <ArrowLeft size={16} /> সব প্রতিষ্ঠান
            </Link>

            <div className="mt-8 grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-end">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: EASE_CALM }}
              >
                <p className="eyebrow">
                  <Icon size={15} className="text-clay" />
                  {venture.category} · {toBnDigits(index + 1)}/{toBnDigits(ventures.length)}
                </p>
                <h1 className="heading-xl mt-6 text-forest-deep">{venture.name}</h1>
                <p className="mt-6 text-2xl leading-relaxed text-forest">{venture.tagline}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.15, ease: EASE_CALM }}
              >
                <p className="text-lg text-ink-soft">{venture.description}</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a href="#contact" className="btn-primary">
                    এই বিষয়ে কথা বলুন <ArrowRight size={18} />
                  </a>
                  {venture.externalUrl && (
                    <a
                      href={venture.externalUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-ghost"
                    >
                      {venture.brand} <ArrowUpRight size={18} />
                    </a>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 sm:px-8">
          <motion.div
            className="overflow-hidden rounded-[2.25rem]"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.3, delay: 0.25, ease: EASE_CALM }}
          >
            <img
              src={imageUrl(venture.image, 1600)}
              alt={venture.imageAlt}
              className="aspect-[16/9] w-full object-cover sm:aspect-[21/9]"
            />
          </motion.div>
        </section>

        <section className="py-24 sm:py-28">
          <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
            <Reveal>
              <p className="text-sm font-bold text-clay">যা যা করি</p>
              <h2 className="mt-3 text-4xl leading-tight font-bold text-forest-deep">
                {venture.category} — আমাদের সেবাসমূহ
              </h2>
              <p className="mt-5 text-ink-soft">
                প্রতিটি কাজ শুরু হয় একটি বিনামূল্যের আলাপ দিয়ে। এরপর লিখিত প্রস্তাব, পরিষ্কার সময়সূচি
                আর নিয়মিত অগ্রগতি।
              </p>
            </Reveal>
            <ul className="grid gap-4 sm:grid-cols-2">
              {venture.offerings.map((o, i) => (
                <Reveal key={o} delay={i * 0.08}>
                  <li className="flex h-full list-none items-start gap-4 rounded-3xl bg-white/60 p-6 ring-1 ring-forest/10">
                    <span
                      className="grid size-10 shrink-0 place-items-center rounded-full text-paper"
                      style={{ background: venture.tone }}
                    >
                      <Check size={18} />
                    </span>
                    <span className="pt-1.5 text-lg font-bold text-forest-deep">{o}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        <section className="border-y border-forest/10 bg-mist/60 py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <Reveal>
              <h2 className="text-2xl font-bold text-forest-deep">
                {site.nameBn} গ্রুপের অন্য প্রতিষ্ঠানগুলো
              </h2>
            </Reveal>
            <div className="mt-8 flex snap-x gap-4 overflow-x-auto pb-4">
              {others.map((v) => {
                const OtherIcon = v.icon
                return (
                  <Link
                    key={v.slug}
                    to="/ventures/$slug"
                    params={{ slug: v.slug }}
                    className="group flex w-64 shrink-0 snap-start flex-col gap-6 rounded-3xl bg-paper p-6 ring-1 ring-forest/10 transition duration-500 hover:-translate-y-1"
                  >
                    <span
                      className="grid size-11 place-items-center rounded-2xl text-paper"
                      style={{ background: v.tone }}
                    >
                      <OtherIcon size={20} />
                    </span>
                    <span>
                      <span className="block font-bold text-forest-deep">{v.category}</span>
                      <span className="text-sm text-ink-soft">{v.name}</span>
                    </span>
                  </Link>
                )
              })}
            </div>
            <Link
              to="/ventures/$slug"
              params={{ slug: next.slug }}
              className="mt-6 inline-flex items-center gap-2 font-bold text-forest"
            >
              পরবর্তী: {next.name} <ArrowRight size={16} />
            </Link>
          </div>
        </section>

        <ContactSection
          ventureSlug={ventureSlug}
          onVentureChange={setVentureSlug}
          title={`${venture.category} নিয়ে কথা বলি?`}
        />
      </main>
      <Footer />
    </>
  )
}
