import { Mail, MapPin } from 'lucide-react'
import { site } from '../lib/site'
import { EnquiryForm, type EnquiryFormProps } from './EnquiryForm'
import { Reveal } from './Reveal'

const promises = [
  'এক কর্মদিবসের মধ্যে উত্তর',
  'প্রথম পরামর্শ সম্পূর্ণ বিনামূল্যে',
  'লিখিত প্রস্তাব ও স্বচ্ছ মূল্য',
]

export function ContactSection({
  ventureSlug,
  onVentureChange,
  title = 'চলুন, আপনার স্বপ্নের কথা শুনি।',
}: EnquiryFormProps & { title?: string }) {
  return (
    <section
      id="contact"
      className="relative scroll-mt-24 overflow-hidden bg-paper-2/70 py-24 sm:py-32"
    >
      <div
        aria-hidden="true"
        className="absolute bottom-0 -left-40 size-[30rem] rounded-full bg-sage/30 blur-[130px]"
      />
      <div className="relative mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal>
          <p className="text-sm font-bold text-clay">যোগাযোগ</p>
          <h2 className="mt-3 text-4xl leading-tight font-bold text-forest-deep sm:text-5xl">
            {title}
          </h2>
          <p className="mt-6 max-w-md text-lg text-ink-soft">
            সফটওয়্যার, ওয়েবসাইট, পণ্য সরবরাহ, কৃষি বা উৎপাদন — যেকোনো প্রয়োজনে লিখুন। সঠিক
            প্রতিষ্ঠানের দল আপনার সাথে যোগাযোগ করবে।
          </p>
          <ul className="mt-10 space-y-4">
            {promises.map((p) => (
              <li key={p} className="flex items-center gap-3 text-ink">
                <span className="size-2 rounded-full bg-forest" />
                {p}
              </li>
            ))}
          </ul>
          <div className="mt-10 space-y-3 border-t border-forest/10 pt-8 text-ink-soft">
            <a href={`mailto:${site.email}`} className="flex items-center gap-3 hover:text-forest">
              <Mail size={18} className="text-clay" /> {site.email}
            </a>
            <p className="flex items-center gap-3">
              <MapPin size={18} className="text-clay" /> {site.location}
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <EnquiryForm ventureSlug={ventureSlug} onVentureChange={onVentureChange} />
        </Reveal>
      </div>
    </section>
  )
}
