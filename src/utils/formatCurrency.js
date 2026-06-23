/**
 * Formats a number into the "From ₹649" style label used on cards.
 * Returns null if price is null/undefined so callers can fall back
 * to a badge (e.g. "Invites Only") instead.
 */
export function formatPriceFrom(amount) {
  if (amount === null || amount === undefined) return null
  return `From ₹${amount.toLocaleString('en-IN')}`
}
