/**
 * Truncates long strings (e.g. addresses) to a max length,
 * adding an ellipsis — matches the "..." cutoff seen on cards
 * with long location text.
 */
export function truncate(text, maxLength = 48) {
  if (!text || text.length <= maxLength) return text
  return `${text.slice(0, maxLength).trimEnd()}...`
}
