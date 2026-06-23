/**
 * Formats an ISO date string ("2026-06-20") into the display
 * style used on event cards: "20 Jun 2026"
 */
export function formatDate(isoDate) {
  const date = new Date(isoDate)
  if (Number.isNaN(date.getTime())) return isoDate

  return date.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  })
}
