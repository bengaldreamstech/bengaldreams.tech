import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import { motion } from 'motion/react'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { toBnDigits } from '../lib/bn'
import { site } from '../lib/site'
import { imageUrl, ventures, type Venture } from '../lib/ventures'
import { ContactSection } from './ContactSection'
import { Footer } from './Footer'
import { Header } from './Header'
import { HeroVisual } from './HeroVisual'
import { EASE_CALM, Reveal } from './Reveal'

export function HomePage() {
  const [ventureSlug, setVentureSlug] = useState(ventures[0].slug)

  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <Marquee />
        <VenturesSection />
        <WhySection />
        <ProcessSection />
        <ContactSection ventureSlug={ventureSlug} onVentureChange={setVentureSlug} />
      </main>
      <Footer />
    </>
  )
}

function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 lg:pb-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-32 size-[34rem] rounded-full bg-sage/35 blur-[120px]" />
        <div className="absolute top-40 right-[-10rem] size-[28rem] rounded-full bg-sand/25 blur-[120px]" />
        <div className="alpana absolute inset-x-0 top-0 h-[28rem] opacity-40 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.12fr_0.88fr] lg:gap-10">
        <div>
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE_CALM }}
          >
            <span className="size-2 rounded-full bg-clay" />
            {site.domain} · এক গ্রুপ, {toBnDigits(ventures.length)} প্রতিষ্ঠান
          </motion.p>

          <motion.h1
            className="heading-xl mt-7 text-forest-deep"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: EASE_CALM }}
          >
            স্বপ্ন থেকে বাস্তবে —{' '}
            <span className="relative whitespace-nowrap text-forest">
              এক ঠিকানায়
              <svg
                aria-hidden="true"
                viewBox="0 0 300 20"
                preserveAspectRatio="none"
                className="absolute -bottom-2 left-0 h-3 w-full"
              >
                <motion.path
                  d="M4 14 C 80 2, 180 2, 296 12"
                  fill="none"
                  stroke="#c06a4d"
                  strokeWidth="5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.4, delay: 0.8, ease: EASE_CALM }}
                />
              </svg>
            </span>{' '}
            প্রযুক্তি, বাণিজ্য ও কৃষি।
          </motion.h1>

          <motion.p
            className="mt-8 max-w-xl text-lg text-ink-soft sm:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.25, ease: EASE_CALM }}
          >
            BengalDreams সাস সফটওয়্যার, ই-কমার্স, কাস্টম ওয়েবসাইট, সফটওয়্যার সেবা, কৃষি,
            কারখানা ও আইটি পরামর্শ — সবকিছু একই দলের হাতে, একই যত্নে।
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: EASE_CALM }}
          >
            <a href="#ventures" className="btn-primary">
              প্রতিষ্ঠানগুলো দেখুন <ArrowRight size={18} />
            </a>
            <a href="https://bengaldreams.com" target="_blank" rel="noreferrer" className="btn-ghost">
              bengaldreams.com <ArrowUpRight size={18} />
            </a>
          </motion.div>

          <motion.dl
            className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-forest/10 pt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.6, ease: EASE_CALM }}
          >
            {site.stats.slice(0, 3).map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="text-3xl font-bold text-forest-deep">{s.value}</dd>
                <dd className="mt-1 text-sm leading-snug text-ink-soft">{s.label}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.div
          className="relative mx-auto w-full max-w-md lg:max-w-none"
          initial={{ opacity: 0, scale: 0.96, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.3, delay: 0.2, ease: EASE_CALM }}
        >
          <HeroVisual />
          <motion.a
            href="https://bengaldreams.com"
            target="_blank"
            rel="noreferrer"
            className="absolute -bottom-6 -left-4 hidden items-center gap-3 rounded-2xl bg-paper px-5 py-4 shadow-[0_20px_50px_-20px_rgba(20,52,43,0.5)] ring-1 ring-forest/10 sm:flex lg:-left-10"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1, ease: EASE_CALM }}
          >
            <span className="relative flex size-3">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-forest/50" />
              <span className="relative inline-flex size-3 rounded-full bg-forest" />
            </span>
            <span className="leading-tight">
              <span className="block text-sm font-bold text-forest-deep">আমাদের সাস পণ্য</span>
              <span className="text-xs text-ink-soft">bengaldreams.com এ চালু</span>
            </span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

function Marquee() {
  const items = [...ventures, ...ventures]
  return (
    <div
      className="overflow-hidden border-y border-forest/10 bg-paper-2/60 py-5"
      aria-hidden="true"
    >
      <div className="marquee-track flex w-max">
        {items.map((v, i) => {
          const Icon = v.icon
          return (
            <span
              key={`${v.slug}-${i}`}
              className="flex items-center gap-3 pr-10 text-lg whitespace-nowrap text-forest"
            >
              <Icon size={20} strokeWidth={1.6} className="text-clay" />
              {v.category}
              <span className="ml-7 size-1.5 rounded-full bg-sand" />
            </span>
          )
        })}
      </div>
    </div>
  )
}

function VenturesSection() {
  const bySlug = Object.fromEntries(ventures.map((v) => [v.slug, v]))

  return (
    <section id="ventures" className="scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-end">
          <Reveal>
            <p className="text-sm font-bold text-clay">আমাদের প্রতিষ্ঠানসমূহ</p>
            <h2 className="mt-3 text-4xl leading-tight font-bold text-forest-deep sm:text-5xl">
              একটি গ্রুপ, আটটি পথ —<br className="hidden sm:block" /> একই লক্ষ্যে।
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-lg text-lg text-ink-soft lg:ml-auto">
              প্রতিটি প্রতিষ্ঠান আলাদা দক্ষতায় গড়া, কিন্তু একসাথে কাজ করে। তাই আপনার ওয়েবসাইট,
              সফটওয়্যার, পণ্য সরবরাহ কিংবা কাঁচামাল — সব সমাধান এখানেই।
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-5 lg:grid-cols-12">
          <Reveal className="lg:col-span-7 lg:row-span-2">
            <FeatureCard venture={bySlug.saas} />
          </Reveal>
          <Reveal className="lg:col-span-5" delay={0.08}>
            <PhotoCard venture={bySlug.shop} />
          </Reveal>
          <Reveal className="lg:col-span-5" delay={0.14}>
            <TileCard venture={bySlug['web-studio']} wide />
          </Reveal>
          <Reveal className="lg:col-span-5" delay={0.05}>
            <PhotoCard venture={bySlug.agro} />
          </Reveal>
          <Reveal className="lg:col-span-7" delay={0.1}>
            <PhotoCard venture={bySlug.factory} landscape />
          </Reveal>
          <Reveal className="sm:grid sm:grid-cols-2 sm:gap-5 max-sm:space-y-5 lg:col-span-6">
            <TileCard venture={bySlug.software} />
            <TileCard venture={bySlug['software-services']} />
          </Reveal>
          <Reveal className="lg:col-span-6" delay={0.1}>
            <TileCard venture={bySlug['it-consulting']} wide />
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ venture }: { venture: Venture }) {
  return (
    <article className="group relative flex h-full min-h-[34rem] flex-col justify-end overflow-hidden rounded-[2rem] bg-forest-deep text-paper">
      <img
        src={imageUrl(venture.image, 1200)}
        alt={venture.imageAlt}
        loading="lazy"
        className="absolute inset-0 size-full object-cover opacity-45 transition duration-[1.6s] ease-calm group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/70 to-forest-deep/10" />
      <div className="relative p-8 sm:p-10">
        <span className="rounded-full bg-sand px-3 py-1 text-sm font-bold text-forest-deep">
          মূল পণ্য · {venture.category}
        </span>
        <h3 className="mt-5 text-4xl font-bold sm:text-5xl">{venture.brand}</h3>
        <p className="mt-4 max-w-md text-lg text-paper/80">{venture.description}</p>
        <ul className="mt-6 flex flex-wrap gap-2">
          {venture.offerings.map((o) => (
            <li
              key={o}
              className="rounded-full border border-paper/20 px-3 py-1 text-sm text-paper/85"
            >
              {o}
            </li>
          ))}
        </ul>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={venture.externalUrl}
            target="_blank"
            rel="noreferrer"
            className="btn bg-paper text-forest-deep hover:bg-sand"
          >
            সাইট দেখুন <ArrowUpRight size={18} />
          </a>
          <Link
            to="/ventures/$slug"
            params={{ slug: venture.slug }}
            className="btn border border-paper/25 text-paper hover:bg-paper/10"
          >
            বিস্তারিত
          </Link>
        </div>
      </div>
    </article>
  )
}

function PhotoCard({ venture, landscape = false }: { venture: Venture; landscape?: boolean }) {
  const Icon = venture.icon
  return (
    <Link
      to="/ventures/$slug"
      params={{ slug: venture.slug }}
      className="group relative block h-full overflow-hidden rounded-[2rem] bg-paper-2 ring-1 ring-forest/10"
    >
      <div className={`overflow-hidden ${landscape ? 'aspect-[16/8]' : 'aspect-[16/10]'}`}>
        <img
          src={imageUrl(venture.image, 900)}
          alt={venture.imageAlt}
          loading="lazy"
          className="size-full object-cover transition duration-[1.6s] ease-calm group-hover:scale-105"
        />
      </div>
      <div className="flex items-start justify-between gap-4 p-6 sm:p-7">
        <div>
          <p className="flex items-center gap-2 text-sm text-clay">
            <Icon size={16} /> {venture.category}
          </p>
          <h3 className="mt-2 text-2xl font-bold text-forest-deep">{venture.name}</h3>
          <p className="mt-1 text-ink-soft">{venture.tagline}</p>
        </div>
        <span className="grid size-11 shrink-0 place-items-center rounded-full border border-forest/15 text-forest transition duration-500 group-hover:rotate-45 group-hover:bg-forest group-hover:text-paper">
          <ArrowUpRight size={18} />
        </span>
      </div>
    </Link>
  )
}

function TileCard({ venture, wide = false }: { venture: Venture; wide?: boolean }) {
  const Icon = venture.icon
  return (
    <Link
      to="/ventures/$slug"
      params={{ slug: venture.slug }}
      className={`group relative flex h-full flex-col justify-between overflow-hidden rounded-[2rem] p-7 ring-1 ring-forest/10 transition duration-700 ease-calm hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(20,52,43,0.45)] ${
        wide ? 'min-h-[16rem] bg-mist' : 'min-h-[15rem] bg-white/60'
      }`}
    >
      <div
        aria-hidden="true"
        className="absolute -right-10 -bottom-10 size-40 rounded-full opacity-0 blur-2xl transition duration-700 group-hover:opacity-40"
        style={{ background: venture.tone }}
      />
      <div className="flex items-center justify-between">
        <span
          className="grid size-12 place-items-center rounded-2xl text-paper"
          style={{ background: venture.tone }}
        >
          <Icon size={22} strokeWidth={1.7} />
        </span>
        <span className="text-sm text-ink-soft">{venture.brand}</span>
      </div>
      <div className="relative mt-8">
        <h3 className="text-xl font-bold text-forest-deep">{venture.category}</h3>
        <p className="mt-2 text-ink-soft">{venture.tagline}</p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-forest">
          বিস্তারিত দেখুন
          <ArrowRight size={15} className="transition duration-500 group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  )
}

function WhySection() {
  return (
    <section
      id="why"
      className="relative scroll-mt-24 overflow-hidden bg-forest-deep py-24 text-paper sm:py-32"
    >
      <div className="alpana absolute inset-0 opacity-25" aria-hidden="true" />
      <div
        aria-hidden="true"
        className="absolute -top-32 right-0 size-[30rem] rounded-full bg-clay/20 blur-[140px]"
      />
      <div className="relative mx-auto grid max-w-7xl gap-16 px-5 sm:px-8 lg:grid-cols-[1fr_1.1fr]">
        <Reveal>
          <p className="text-sm font-bold text-sand">কেন বেঙ্গলড্রিমস</p>
          <h2 className="mt-3 text-4xl leading-tight font-bold sm:text-5xl">
            ধীরস্থির, স্বচ্ছ আর দীর্ঘমেয়াদি অংশীদারিত্ব।
          </h2>
          <p className="mt-6 max-w-md text-lg text-sage">
            আমরা দ্রুত ফলের প্রতিশ্রুতি দিই না — দিই টেকসই কাজের নিশ্চয়তা। মাঠের ধান থেকে ক্লাউডের
            ডেটা, সবখানেই একই মূল্যবোধ।
          </p>
          <dl className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-3xl bg-paper/10">
            {site.stats.map((s) => (
              <div key={s.label} className="bg-forest-deep p-6">
                <dt className="sr-only">{s.label}</dt>
                <dd className="text-4xl font-bold text-sand">{s.value}</dd>
                <dd className="mt-1 text-sm text-paper/70">{s.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <div className="space-y-4 lg:pt-10">
          {site.values.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.1}>
              <div
                className={`rounded-3xl border border-paper/10 bg-paper/[0.04] p-7 backdrop-blur sm:p-8 ${
                  i === 1 ? 'lg:ml-12' : ''
                }`}
              >
                <p className="text-sm text-sand">{toBnDigits(`0${i + 1}`)}</p>
                <h3 className="mt-2 text-2xl font-bold">{v.title}</h3>
                <p className="mt-2 text-paper/75">{v.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProcessSection() {
  return (
    <section id="process" className="scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-bold text-clay">কাজের ধারা</p>
          <h2 className="mt-3 text-4xl leading-tight font-bold text-forest-deep sm:text-5xl">
            প্রথম আলাপ থেকে চালু হওয়া পর্যন্ত — চারটি শান্ত ধাপ।
          </h2>
        </Reveal>

        <ol className="relative mt-16 grid gap-6 md:grid-cols-4">
          <div
            aria-hidden="true"
            className="absolute top-8 right-0 left-0 hidden h-px bg-gradient-to-r from-forest/0 via-forest/25 to-forest/0 md:block"
          />
          {site.process.map((p, i) => (
            <Reveal key={p.step} delay={i * 0.12} className={i % 2 === 1 ? 'md:mt-16' : ''}>
              <li className="relative list-none">
                <span className="relative z-10 grid size-16 place-items-center rounded-full bg-paper text-xl font-bold text-forest ring-1 ring-forest/20">
                  {p.step}
                </span>
                <h3 className="mt-6 text-2xl font-bold text-forest-deep">{p.title}</h3>
                <p className="mt-2 text-ink-soft">{p.description}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
