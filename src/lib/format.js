const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

// '2024-03' -> 'Mar 2024', '2024' -> '2024', '' -> 'Present'
export function formatDate(value) {
  if (!value) return 'Present'
  const [year, month] = value.split('-')
  return month ? `${MONTHS[Number(month) - 1]} ${year}` : year
}

export function formatRange(start, end) {
  if (start === end) return formatDate(start)
  return `${formatDate(start)} — ${formatDate(end)}`
}

export function initials(name) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join('')
}
