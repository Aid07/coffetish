import './Loading.css'

export function Loading() {
  return (
    <div className="loading-screen" role="status" aria-live="polite">
      <span className="loading-mark" />
      <span className="sr-only">ТИШЬ</span>
    </div>
  )
}
