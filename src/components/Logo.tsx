type LogoProps = {
  variant?: 'primary' | 'mark' | 'mono'
  className?: string
}

export function Logo({ variant = 'primary', className }: LogoProps) {
  const stroke = variant === 'mono' ? 'currentColor' : '#3a2418'
  const accent = variant === 'mono' ? 'currentColor' : '#8d74b0'
  const fill = variant === 'mono' ? 'none' : '#f8f4ec'

  return (
    <span className={className} aria-hidden="true">
      <svg
        viewBox={variant === 'mark' ? '0 0 48 48' : '0 0 168 48'}
        className={variant === 'mark' ? 'logo-mark' : 'logo-full'}
        fill="none"
      >
        <circle cx="24" cy="24" r="17.5" stroke={stroke} strokeWidth="1.4" />
        <path
          d="M30.5 18.2c-3.2-2.4-8.4-1.6-10.2 2.2-1.8 3.8.2 8.2 4.4 9.4"
          stroke={accent}
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <circle cx="24" cy="24" r="3.1" fill={variant === 'mono' ? 'currentColor' : '#c9d7b8'} stroke={stroke} strokeWidth="0.8" />
        {variant !== 'mark' ? (
          <text
            x="52"
            y="32"
            fill={stroke}
            fontFamily="Cormorant Garamond, serif"
            fontSize="28"
            fontWeight="500"
            letterSpacing="4"
          >
            ТИШЬ
          </text>
        ) : (
          <circle cx="24" cy="24" r="22" fill={fill} fillOpacity="0" />
        )}
      </svg>
    </span>
  )
}
