import { useEffect, useId } from 'react'

type PageMetaProps = {
  title: string
  description: string
}

export function PageMeta({ title, description }: PageMetaProps) {
  const id = useId()

  useEffect(() => {
    const previousTitle = document.title
    document.title = title
    let meta = document.querySelector('meta[name="description"]')
    const created = !meta
    if (!meta) {
      meta = document.createElement('meta')
      meta.setAttribute('name', 'description')
      document.head.appendChild(meta)
    }
    const previous = meta.getAttribute('content')
    meta.setAttribute('content', description)
    meta.setAttribute('data-tish', id)

    return () => {
      document.title = previousTitle
      if (created && meta?.getAttribute('data-tish') === id) {
        meta.remove()
      } else if (previous) {
        meta?.setAttribute('content', previous)
      }
    }
  }, [title, description, id])

  return null
}
