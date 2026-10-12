// Fixed decorative backdrop: faint grid + two soft gradient glows.
export function Background() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="bg-grid absolute inset-0" />
      <div className="absolute -top-40 left-1/2 size-[42rem] -translate-x-1/2 rounded-full bg-accent/20 blur-[120px]" />
      <div className="absolute top-1/3 -right-40 size-[28rem] rounded-full bg-accent-2/15 blur-[120px]" />
    </div>
  )
}
