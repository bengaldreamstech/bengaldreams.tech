import { useState } from 'react'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { EnquiryForm } from './EnquiryForm'

function Harness() {
  const [slug, setSlug] = useState('agro')
  return <EnquiryForm ventureSlug={slug} onVentureChange={setSlug} />
}

function fillAndSubmit() {
  fireEvent.change(screen.getByLabelText('আপনার নাম'), { target: { value: 'তানজিলা' } })
  fireEvent.change(screen.getByLabelText('ইমেইল'), { target: { value: 'a@b.com' } })
  fireEvent.change(screen.getByLabelText('আপনার প্রয়োজন সম্পর্কে লিখুন'), {
    target: { value: 'একটি ওয়েবসাইট দরকার।' },
  })
  fireEvent.submit(screen.getByRole('button', { name: /বার্তা পাঠান/ }).closest('form')!)
}

afterEach(() => vi.unstubAllGlobals())

describe('EnquiryForm', () => {
  it('posts url-encoded data to the Netlify form endpoint and shows success', async () => {
    const fetchMock = vi.fn().mockResolvedValue(new Response('ok', { status: 200 }))
    vi.stubGlobal('fetch', fetchMock)

    render(<Harness />)
    fillAndSubmit()

    expect(await screen.findByText('ধন্যবাদ! আপনার বার্তা পৌঁছেছে।')).toBeInTheDocument()
    expect(screen.getByText(/বেঙ্গলড্রিমস অ্যাগ্রো/)).toBeInTheDocument()

    const [url, init] = fetchMock.mock.calls[0]
    expect(url).toBe('/__forms.html')
    const body = new URLSearchParams(init.body)
    expect(body.get('form-name')).toBe('bengaldreams-enquiry')
    expect(body.get('venture')).toBe('agro')
    expect(body.get('venture-name')).toBe('বেঙ্গলড্রিমস অ্যাগ্রো')
  })

  it('shows an error when Netlify returns the unprocessed form page', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue(new Response('<form data-netlify="true">', { status: 200 })),
    )

    render(<Harness />)
    fillAndSubmit()

    await waitFor(() => expect(screen.getByRole('alert')).toBeInTheDocument())
  })

  it('updates the subject when the topic changes', () => {
    render(<Harness />)
    fireEvent.change(screen.getByLabelText('কোন বিষয়ে কথা বলতে চান?'), {
      target: { value: 'general' },
    })
    const subject = document.querySelector<HTMLInputElement>('input[name="subject"]')!
    expect(subject.value).toBe('নতুন জিজ্ঞাসা: সাধারণ জিজ্ঞাসা')
  })
})
