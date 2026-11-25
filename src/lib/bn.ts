const BN_DIGITS = '০১২৩৪৫৬৭৮৯'

/** Convert ASCII digits in a number or string to Bangla digits. */
export function toBnDigits(value: number | string): string {
  return String(value).replace(/\d/g, (d) => BN_DIGITS[Number(d)])
}
