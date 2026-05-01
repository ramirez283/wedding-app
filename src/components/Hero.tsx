import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import logoImg from '../assets/icons/my-invitia-2.png'

const modules = import.meta.glob('../assets/banner/*.{jpg,jpeg,png,webp,gif}', {
  eager: true,
}) as Record<string, { default: string }>

const images = Object.values(modules).map((m) => m.default)

export default function Hero() {
  const [perView, setPerView] = useState(3)
  const [current, setCurrent] = useState(0)
  const [transitioning, setTransitioning] = useState(true)

  // Actualizar perView según tamaño de pantalla
  useEffect(() => {
    const update = () => setPerView(window.innerWidth >= 768 ? 3 : 1)
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  // Resetear carrusel al cambiar perView para evitar posición inválida
  useEffect(() => {
    setCurrent(0)
    setTransitioning(false)
  }, [perView])

  // Re-habilitar transición tras reset
  useEffect(() => {
    if (!transitioning) {
      const raf = requestAnimationFrame(() => setTransitioning(true))
      return () => cancelAnimationFrame(raf)
    }
  }, [transitioning])

  // Auto-avance
  useEffect(() => {
    if (images.length === 0) return
    const timer = setInterval(() => setCurrent((c) => c + 1), 3500)
    return () => clearInterval(timer)
  }, [perView])

  // Cuando llega al final de las originales → reset sin animación
  useEffect(() => {
    if (current >= images.length) {
      const t = setTimeout(() => {
        setTransitioning(false)
        setCurrent(0)
      }, 650)
      return () => clearTimeout(t)
    }
  }, [current])

  if (images.length === 0) return null

  // Array extendido para loop seamless: originales + primeras `perView` copias
  const extended = [...images, ...images.slice(0, perView)]
  const itemW = 100 / perView // vw por imagen

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col overflow-hidden pt-16"
    >
      {/* ── Carrusel de imágenes ── */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          className="flex h-full"
          style={{
            width: `${extended.length * itemW}vw`,
            transform: `translateX(-${current * itemW}vw)`,
            transition: transitioning ? 'transform 0.65s ease-in-out' : 'none',
          }}
        >
          {extended.map((src, i) => (
            <div
              key={i}
              className="h-full flex-shrink-0 overflow-hidden"
              style={{ width: `${itemW}vw` }}
            >
              <img
                src={src}
                alt=""
                className="w-full h-full object-cover"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>

      {/* ── Overlay ligero para legibilidad ── */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            'linear-gradient(to bottom, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.55) 45%, rgba(255,255,255,0.50) 100%)',
        }}
      />

      {/* ── Contenido: grid 1×3 vertical ── */}
      <div
        className="relative z-20 w-full flex-1 px-6"
        style={{ display: 'grid', gridTemplateRows: 'auto 1fr auto', paddingTop: '40px', paddingBottom: '48px' }}
      >
        {/* Fila 1 — Logo sobre placa flotante */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <div
            style={{
              position: 'relative',
              width: '260px',
              height: '260px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'linear-gradient(145deg, rgba(255,253,245,0.62) 0%, rgba(251,246,230,0.52) 100%)',
              backdropFilter: 'blur(16px) saturate(1.3)',
              boxShadow: [
                '0 28px 70px rgba(0,0,0,0.18)',
                '0 8px 24px rgba(0,0,0,0.10)',
                'inset 0 1.5px 0 rgba(255,255,255,0.85)',
                'inset 0 -1px 0 rgba(180,155,100,0.15)',
              ].join(', '),
              border: '1px solid rgba(255,255,255,0.55)',
              overflow: 'hidden',
            }}
          >
            {/* Textura de seda */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: [
                  'repeating-linear-gradient(0deg, transparent, transparent 4px, rgba(255,255,255,0.06) 4px, rgba(255,255,255,0.06) 5px)',
                  'repeating-linear-gradient(90deg, transparent, transparent 4px, rgba(255,255,255,0.03) 4px, rgba(255,255,255,0.03) 5px)',
                ].join(', '),
                pointerEvents: 'none',
              }}
            />
            <img
              src={logoImg}
              alt="My Invitia"
              style={{ width: '220px', height: 'auto', mixBlendMode: 'multiply', position: 'relative', zIndex: 1 }}
            />
          </div>
        </motion.div>

        {/* Fila 2 — Centro libre */}
        <div />

        {/* Fila 3 — Título */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-5xl md:text-7xl font-bold leading-tight text-center"
          style={{ color: '#1a1a1a', textShadow: '0 2px 20px rgba(255,255,255,0.95)' }}
        >
          Crea momentos{' '}
          <span
            className="text-transparent bg-clip-text"
            style={{ backgroundImage: 'linear-gradient(90deg, #213F99, #9F7A33)' }}
          >
            inolvidables
          </span>
        </motion.h1>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20"
        style={{ color: '#9F7A33' }}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </motion.div>
    </section>
  )
}
