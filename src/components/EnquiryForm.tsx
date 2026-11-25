import { useRef, useState, type FormEvent } from 'react'
import { CircleCheck, Send } from 'lucide-react'
import { enquiryForm, site } from '../lib/site'
import { getVenture, ventures } from '../lib/ventures'

type Status = { status: 'idle' } | { status: 'pending' } | { status: 'error' } | {
  status: 'success'
  ventureName: string
}

export type EnquiryFormProps = {
  ventureSlug: string
  onVentureChange: (slug: string) => void
}

export function EnquiryForm({ ventureSlug, onVentureChange }: EnquiryFormProps) {
  const [state, setState] = useState<Status>({ status: 'idle' })
  const submitting = useRef(false)
  const ventureName = getVenture(ventureSlug)?.name ?? 'সাধারণ জিজ্ঞাসা'

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (submitting.current || state.status === 'success') return

    const body = new URLSearchParams()
    new FormData(event.currentTarget).forEach((value, key) => body.append(key, String(value)))
    const sentFor = ventureName

    submitting.current = true
    setState({ status: 'pending' })
    try {
      const res = await fetch(enquiryForm.endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
        signal: AbortSignal.timeout(15_000),
      })
      // If Netlify did not intercept the POST we get the raw registration page back.
      if (!res.ok || /\bdata-netlify\s*=/i.test(await res.text())) {
        throw new Error('Enquiry was not accepted')
      }
      setState({ status: 'success', ventureName: sentFor })
    } catch {
      setState({ status: 'error' })
    } finally {
      submitting.current = false
    }
  }

  if (state.status === 'success') {
    return (
      <div
        role="status"
        className="flex min-h-[28rem] flex-col items-start justify-center rounded-[2rem] bg-white/70 p-8 ring-1 ring-forest/10 sm:p-10"
      >
        <CircleCheck className="text-forest" size={44} strokeWidth={1.6} />
        <h3 className="mt-5 text-2xl font-bold text-forest-deep">ধন্যবাদ! আপনার বার্তা পৌঁছেছে।</h3>
        <p className="mt-3 max-w-md text-ink-soft">
          “{state.ventureName}” বিষয়ে আমাদের দল সাধারণত এক কর্মদিবসের মধ্যে যোগাযোগ করে। জরুরি হলে
          লিখুন {site.email} ঠিকানায়।
        </p>
        <button
          type="button"
          className="btn-ghost mt-8"
          onClick={() => setState({ status: 'idle' })}
        >
          আরেকটি বার্তা পাঠান
        </button>
      </div>
    )
  }

  const pending = state.status === 'pending'

  return (
    <form
      name={enquiryForm.name}
      method="POST"
      action={enquiryForm.endpoint}
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      aria-busy={pending}
      className="rounded-[2rem] bg-white/70 p-6 ring-1 ring-forest/10 backdrop-blur sm:p-10"
    >
      <input type="hidden" name="form-name" value={enquiryForm.name} />
      <input type="hidden" name="subject" value={`নতুন জিজ্ঞাসা: ${ventureName}`} />
      <input type="hidden" name="venture-name" value={ventureName} />
      <p hidden>
        <label>
          এটি খালি রাখুন
          <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      <fieldset disabled={pending} className="grid gap-5 sm:grid-cols-2">
        <legend className="sr-only">আপনার জিজ্ঞাসা</legend>

        <div className="sm:col-span-2">
          <label htmlFor="enquiry-venture" className="form-label">
            কোন বিষয়ে কথা বলতে চান?
          </label>
          <select
            id="enquiry-venture"
            name="venture"
            value={ventureSlug}
            onChange={(e) => onVentureChange(e.target.value)}
            className="form-input"
          >
            {ventures.map((v) => (
              <option key={v.slug} value={v.slug}>
                {v.category} — {v.name}
              </option>
            ))}
            <option value="general">সাধারণ জিজ্ঞাসা / অংশীদারিত্ব</option>
          </select>
        </div>

        <div>
          <label htmlFor="enquiry-name" className="form-label">
            আপনার নাম
          </label>
          <input
            id="enquiry-name"
            name="name"
            autoComplete="name"
            required
            maxLength={100}
            placeholder="যেমন: তানজিলা রহমান"
            className="form-input"
          />
        </div>

        <div>
          <label htmlFor="enquiry-phone" className="form-label">
            মোবাইল নম্বর
          </label>
          <input
            id="enquiry-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            maxLength={20}
            placeholder="০১৭XXXXXXXX"
            className="form-input"
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="enquiry-email" className="form-label">
            ইমেইল
          </label>
          <input
            id="enquiry-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={254}
            placeholder="you@company.com"
            className="form-input"
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="enquiry-message" className="form-label">
            আপনার প্রয়োজন সম্পর্কে লিখুন
          </label>
          <textarea
            id="enquiry-message"
            name="message"
            required
            minLength={10}
            maxLength={2000}
            rows={5}
            placeholder="প্রকল্প, পণ্য বা সেবা সম্পর্কে সংক্ষেপে বলুন…"
            className="form-input resize-y"
          />
        </div>

        <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
          <button type="submit" className="btn-primary">
            {pending ? 'পাঠানো হচ্ছে…' : 'বার্তা পাঠান'}
            <Send size={16} />
          </button>
          <p className="text-sm text-ink-soft">কোনো খরচ বা বাধ্যবাধকতা নেই।</p>
        </div>
      </fieldset>

      <p role="status" className="sr-only">
        {pending ? 'আপনার বার্তা পাঠানো হচ্ছে…' : ''}
      </p>

      {state.status === 'error' && (
        <p role="alert" className="mt-5 rounded-2xl bg-clay/10 px-4 py-3 text-clay">
          বার্তাটি পাঠানো যায়নি। আপনার লেখা ঠিক আছে — অনুগ্রহ করে আবার চেষ্টা করুন, অথবা সরাসরি{' '}
          {site.email} ঠিকানায় লিখুন।
        </p>
      )}
    </form>
  )
}
