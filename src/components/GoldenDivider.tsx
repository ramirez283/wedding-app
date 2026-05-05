export default function GoldenDivider({ dark = false }: { dark?: boolean }) {
  const color = '#9F7A33'
  const starColor = dark ? 'rgba(159,122,51,0.9)' : color

  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '4px 24px' }}>
      <svg viewBox="0 0 700 52" style={{ width: '100%', maxWidth: '620px' }} fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* ── Left line ── */}
        <line x1="0" y1="26" x2="255" y2="26" stroke={color} strokeWidth="0.8" strokeLinecap="round" />

        {/* ── Left main scroll curl ── */}
        <path
          d="M 255 26 C 266 26 273 17 280 21 C 285 24 282 33 275 31 C 269 29 272 20 279 21"
          stroke={color} strokeWidth="1.1" strokeLinecap="round"
        />
        {/* Left lower tendril */}
        <path
          d="M 264 26 C 265 32 262 38 267 41"
          stroke={color} strokeWidth="0.7" strokeLinecap="round" opacity="0.55"
        />

        {/* ── Center ornament: diamond + ring ── */}
        <path d="M 344 16 L 350 26 L 344 36 L 338 26 Z" fill={color} />
        <circle cx="350" cy="26" r="4.5" fill="none" stroke={color} strokeWidth="0.75" opacity="0.5" />
        {/* Crosshair accent */}
        <line x1="350" y1="19" x2="350" y2="33" stroke={color} strokeWidth="0.5" opacity="0.35" />
        <line x1="343" y1="26" x2="357" y2="26" stroke={color} strokeWidth="0.5" opacity="0.35" />

        {/* ── Right main scroll curl ── */}
        <path
          d="M 445 26 C 434 26 427 17 420 21 C 415 24 418 33 425 31 C 431 29 428 20 421 21"
          stroke={color} strokeWidth="1.1" strokeLinecap="round"
        />
        {/* Right lower tendril */}
        <path
          d="M 436 26 C 435 32 438 38 433 41"
          stroke={color} strokeWidth="0.7" strokeLinecap="round" opacity="0.55"
        />

        {/* ── Right line ── */}
        <line x1="445" y1="26" x2="700" y2="26" stroke={color} strokeWidth="0.8" strokeLinecap="round" />

        {/* ── Sparkles ✦ ── */}
        <text x="108" y="21" fill={starColor} fontSize="13" opacity="0.85" fontFamily="serif">✦</text>
        <text x="572" y="21" fill={starColor} fontSize="13" opacity="0.85" fontFamily="serif">✦</text>
        <text x="178" y="35" fill={starColor} fontSize="8"  opacity="0.5"  fontFamily="serif">✦</text>
        <text x="508" y="35" fill={starColor} fontSize="8"  opacity="0.5"  fontFamily="serif">✦</text>
      </svg>
    </div>
  )
}
