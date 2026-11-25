import { describe, expect, it } from 'vitest'
import { toBnDigits } from './bn'
import { getVenture, imageUrl, ventures } from './ventures'

describe('toBnDigits', () => {
  it('converts ASCII digits to Bangla digits', () => {
    expect(toBnDigits(2026)).toBe('২০২৬')
    expect(toBnDigits('01/8')).toBe('০১/৮')
  })
})

describe('ventures', () => {
  it('has eight ventures with unique slugs', () => {
    expect(ventures).toHaveLength(8)
    expect(new Set(ventures.map((v) => v.slug)).size).toBe(8)
  })

  it('looks ventures up by slug', () => {
    expect(getVenture('agro')?.brand).toBe('Agro')
    expect(getVenture('nope')).toBeUndefined()
  })

  it('builds Netlify Image CDN URLs', () => {
    expect(imageUrl('/img/agro.png', 900)).toBe(
      '/.netlify/images?url=%2Fimg%2Fagro.png&w=900&fm=webp&q=78',
    )
  })
})
