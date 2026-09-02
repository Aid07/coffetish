const photos = import.meta.glob('../assets/menu/*.jpg', {
  eager: true,
  import: 'default',
}) as Record<string, string>

export function productImageSrc(slug: string): string {
  const match = Object.entries(photos).find(([path]) => path.endsWith(`/${slug}.jpg`))
  return match?.[1] ?? ''
}
