import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import fondoImg from '../assets/invitations/fondo-hoja.png'
import coupleImg from '../assets/banner/b2.jpg'
import buhoImg from '../assets/invitations/buho-pergamino.png'
import b4 from '../assets/banner/b4.jpg'
import f1 from '../assets/invitations/f1.jpg'
import f2 from '../assets/invitations/f2.jpg'
import f3 from '../assets/invitations/f3.jpg'
import f4 from '../assets/invitations/f4.jpg'
import iglesiaImg from '../assets/invitations/iglesia.jpg'
import salonImg from '../assets/invitations/salon.png'

const galleryPhotos = [f4, f2, f3, coupleImg, f1, b4]

const WEDDING_DATE = new Date('2026-09-14T16:00:00')

const LUGARES = [
  {
    tipo:      'Ceremonia',
    emoji:     '⛪',
    nombre:    'Parroquia San Francisco',
    direccion: 'Av. Principal 456, Col. Centro',
    ciudad:    'Ciudad de México, México',
    hora:      '16:00 hrs',
    mapsUrl:   'https://maps.google.com/?q=Parroquia+San+Francisco+Ciudad+de+Mexico',
    imagen:    iglesiaImg,
  },
  {
    tipo:      'Recepción',
    emoji:     '🥂',
    nombre:    'Salón Jardines del Lago',
    direccion: 'Calle Reforma 789, Col. Jardines',
    ciudad:    'Ciudad de México, México',
    hora:      '19:00 hrs',
    mapsUrl:   'https://maps.google.com/?q=Jardines+del+Lago+Ciudad+de+Mexico',
    imagen:    salonImg,
  },
]

const VESTIMENTA = {
  codigo:      'Formal',
  descripcion: 'Solicitamos a nuestros invitados asistir en vestimenta formal. Los caballeros con traje y las damas con vestido de gala o cocktail.',
  evitar:      'Por favor evitar el color blanco y el negro.',
  hombres:     '👔 Traje y corbata',
  mujeres:     '👗 Vestido formal o de gala',
}

const HOSPEDAJE = [
  {
    nombre:    'Hotel Gran Plaza',
    estrellas: '⭐⭐⭐⭐',
    distancia: '5 min del salón',
    precio:    'Desde $1,200 MXN / noche',
    telefono:  '+52 55 1234 5678',
    link:      'https://www.google.com',
  },
  {
    nombre:    'Hotel Boutique Central',
    estrellas: '⭐⭐⭐',
    distancia: '10 min del salón',
    precio:    'Desde $800 MXN / noche',
    telefono:  '+52 55 8765 4321',
    link:      'https://www.google.com',
  },
]

const REGALOS = [
  {
    tienda:  'Amazon',
    logo:    '📦',
    color:   '#FF9900',
    bgColor: '#FFF8EC',
    link:    'https://www.amazon.com.mx',
    texto:   'Ver lista en Amazon',
  },
  {
    tienda:  'Liverpool',
    logo:    '🛍️',
    color:   '#C8102E',
    bgColor: '#FFF0F2',
    link:    'https://www.liverpool.com.mx',
    texto:   'Ver lista en Liverpool',
  },
]

const ITINERARIO = [
  { hora: '15:30', icono: '🎊', titulo: 'Llegada de invitados',   descripcion: 'Bienvenida y acomodo en la iglesia' },
  { hora: '16:00', icono: '💒', titulo: 'Ceremonia religiosa',    descripcion: 'Unión de Isabella y Alejandro' },
  { hora: '17:30', icono: '📸', titulo: 'Sesión de fotos',        descripcion: 'Momentos que duran para siempre' },
  { hora: '18:00', icono: '🥂', titulo: 'Cocktail',               descripcion: 'Brindis de bienvenida en el salón' },
  { hora: '19:00', icono: '🍽️', titulo: 'Cena',                   descripcion: 'Disfruta del banquete con nosotros' },
  { hora: '20:00', icono: '💃', titulo: 'Primer baile',           descripcion: 'El momento más esperado' },
  { hora: '20:30', icono: '✨', titulo: 'Brindis',                descripcion: 'Palabras de los novios e invitados' },
  { hora: '21:00', icono: '🎶', titulo: 'Fiesta',                 descripcion: '¡A bailar toda la noche!' },
]

function useCountdown(target: Date) {
  const calc = () => {
    const diff = Math.max(0, target.getTime() - Date.now())
    return {
      dias:     Math.floor(diff / 86400000),
      horas:    Math.floor((diff % 86400000) / 3600000),
      minutos:  Math.floor((diff % 3600000) / 60000),
      segundos: Math.floor((diff % 60000) / 1000),
    }
  }
  const [time, setTime] = useState(calc)
  useEffect(() => {
    const id = setInterval(() => setTime(calc()), 1000)
    return () => clearInterval(id)
  }, [])
  return time
}

const pad = (n: number) => String(n).padStart(2, '0')

function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [playing, setPlaying]   = useState(false)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)

  const toggle = () => {
    const a = audioRef.current
    if (!a) return
    if (playing) { a.pause() } else { a.play() }
    setPlaying(p => !p)
  }

  const onTimeUpdate = () => {
    const a = audioRef.current
    if (!a || !a.duration) return
    setCurrentTime(a.currentTime)
    setProgress((a.currentTime / a.duration) * 100)
  }

  const seek = (e: React.MouseEvent<HTMLDivElement>) => {
    const a = audioRef.current
    if (!a) return
    const rect = e.currentTarget.getBoundingClientRect()
    a.currentTime = ((e.clientX - rect.left) / rect.width) * a.duration
  }

  const fmt = (s: number) => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`

  return (
    <div style={{
      width: '100%', maxWidth: '340px',
      margin: '0 auto',
      background: 'rgba(255,255,255,0.75)',
      border: '1px solid rgba(159,122,51,0.3)',
      borderRadius: '20px', padding: '16px 18px',
      backdropFilter: 'blur(10px)',
      boxShadow: '0 6px 24px rgba(159,122,51,0.12)',
    }}>
      <audio
        ref={audioRef}
        src="/music/Mi Corazón Encantado - Dragon Ball GT  Piano Tutorial 2024 (pollonuel).mp3"
        onTimeUpdate={onTimeUpdate}
        onLoadedMetadata={e => { setDuration(e.currentTarget.duration); e.currentTarget.volume = 0.5 }}
        onEnded={() => { setPlaying(false); setProgress(0); setCurrentTime(0) }}
      />

      {/* Título */}
      <p style={{ fontFamily: "'Great Vibes', cursive", fontSize: '20px', color: '#213F99', textAlign: 'center', marginBottom: '12px' }}>
        ♪ Mi corazón encantado
      </p>

      {/* Barra de progreso */}
      <div onClick={seek} style={{ height: '4px', borderRadius: '2px', background: 'rgba(33,63,153,0.12)', cursor: 'pointer', marginBottom: '8px', position: 'relative' }}>
        <div style={{ height: '100%', borderRadius: '2px', width: `${progress}%`, background: 'linear-gradient(90deg, #9F7A33, #C49A3C)', transition: 'width 0.25s linear', position: 'relative' }}>
          {/* Círculo de posición */}
          <div style={{ position: 'absolute', right: '-5px', top: '-4px', width: '10px', height: '10px', borderRadius: '50%', background: '#9F7A33', boxShadow: '0 0 4px rgba(159,122,51,0.5)' }} />
        </div>
      </div>

      {/* Tiempo */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '14px' }}>
        <span style={{ fontSize: '10px', color: '#888', fontFamily: 'Lato, sans-serif' }}>{fmt(currentTime)}</span>
        <span style={{ fontSize: '10px', color: '#888', fontFamily: 'Lato, sans-serif' }}>{duration ? fmt(duration) : '--:--'}</span>
      </div>

      {/* Controles */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px' }}>
        {/* Retroceder 10s */}
        <button onClick={() => { if (audioRef.current) audioRef.current.currentTime -= 10 }}
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#9F7A33', fontSize: '18px', padding: '4px' }}>
          ↺
        </button>

        {/* Play / Pause */}
        <button onClick={toggle} style={{
          width: '48px', height: '48px', borderRadius: '50%', border: 'none', cursor: 'pointer',
          background: 'linear-gradient(135deg, #9F7A33, #C49A3C)',
          color: '#fff', fontSize: '18px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 4px 12px rgba(159,122,51,0.35)',
        }}>
          {playing ? '⏸' : '▶'}
        </button>

        {/* Avanzar 10s */}
        <button onClick={() => { if (audioRef.current) audioRef.current.currentTime += 10 }}
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#9F7A33', fontSize: '18px', padding: '4px' }}>
          ↻
        </button>
      </div>
    </div>
  )
}

function CountdownBox({ value, label }: { value: string; label: string }) {
  return (
    <div style={{
      position: 'relative',
      backgroundColor: '#ffffff',
      border: '1px solid rgba(33,63,153,0.35)',
      padding: '28px 20px 20px',
      textAlign: 'center',
      minWidth: '110px',
    }}>
      {/* Ornamentos en esquinas */}
      {(['tl','tr','bl','br'] as const).map(pos => (
        <div key={pos} style={{
          position: 'absolute',
          width: '10px', height: '10px',
          ...(pos === 'tl' ? { top: 3, left: 3, borderTop: '2px solid #213F99', borderLeft: '2px solid #213F99' } : {}),
          ...(pos === 'tr' ? { top: 3, right: 3, borderTop: '2px solid #213F99', borderRight: '2px solid #213F99' } : {}),
          ...(pos === 'bl' ? { bottom: 3, left: 3, borderBottom: '2px solid #213F99', borderLeft: '2px solid #213F99' } : {}),
          ...(pos === 'br' ? { bottom: 3, right: 3, borderBottom: '2px solid #213F99', borderRight: '2px solid #213F99' } : {}),
        }} />
      ))}

      {/* Número */}
      <div style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: 'clamp(44px, 11vw, 62px)',
        fontWeight: 300,
        color: '#9F7A33',
        lineHeight: 1,
        letterSpacing: '-1px',
      }}>
        {value}
      </div>

      {/* Label */}
      <div style={{
        fontFamily: 'Lato, sans-serif',
        fontSize: '10px',
        fontWeight: 700,
        letterSpacing: '2.5px',
        color: '#213F99',
        marginTop: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '6px',
      }}>
        <span style={{ flex: 1, height: '1px', background: 'rgba(33,63,153,0.3)', display: 'block' }} />
        {label}
        <span style={{ flex: 1, height: '1px', background: 'rgba(33,63,153,0.3)', display: 'block' }} />
      </div>
    </div>
  )
}

export default function Invitation() {
  const { dias, horas, minutos, segundos } = useCountdown(WEDDING_DATE)

  return (
    <div style={{
      minHeight: '100vh',
      backgroundImage: `url(${fondoImg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>

      {/* ── Foto de la pareja ── */}
      <motion.div
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        style={{ width: '100%', maxWidth: '480px', position: 'relative', overflow: 'hidden' }}
      >
        <img src={coupleImg} alt="Isabella & Alejandro"
          style={{ width: '100%', display: 'block', objectFit: 'cover', maxHeight: '60vh' }}
          draggable={false}
        />
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: '40%',
          background: 'linear-gradient(to bottom, transparent, rgba(255,253,248,0.97))',
          pointerEvents: 'none',
        }} />
      </motion.div>

      {/* ── Nombres y fecha ── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        style={{ textAlign: 'center', padding: '8px 32px 40px', maxWidth: '480px', width: '100%' }}
      >
        <p style={{ color: '#9F7A33', fontSize: '20px', letterSpacing: '4px', marginBottom: '8px' }}>✦</p>

        <h1 style={{ fontFamily: "'Great Vibes', cursive", fontSize: 'clamp(48px, 13vw, 72px)', color: '#213F99', lineHeight: 1.1, marginBottom: '0px' }}>
          Isabella
        </h1>
        <p style={{ fontFamily: "'Great Vibes', cursive", fontSize: 'clamp(24px, 6vw, 36px)', color: '#9F7A33', margin: '0 0 0px', letterSpacing: '2px' }}>
          &amp;
        </p>
        <h1 style={{ fontFamily: "'Great Vibes', cursive", fontSize: 'clamp(48px, 13vw, 72px)', color: '#213F99', lineHeight: 1.1, marginBottom: '24px' }}>
          Alejandro
        </h1>

        <div style={{ height: '1.5px', background: 'linear-gradient(90deg, transparent, #E1B0AC 20%, #9F7A33 50%, #E1B0AC 80%, transparent)', maxWidth: '240px', margin: '0 auto 20px' }} />

        <p style={{ fontFamily: "'Great Vibes', cursive", fontSize: 'clamp(20px, 5vw, 26px)', color: '#555', letterSpacing: '1px', marginBottom: '24px' }}>
          Sábado, 14 de septiembre de 2026
        </p>

        <MusicPlayer />
      </motion.div>

      {/* ── Countdown ── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.9 }}
        style={{ textAlign: 'center', padding: '0 24px 64px', maxWidth: '520px', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        {/* Búho */}
        <img src={buhoImg} alt="" style={{ width: '200px', mixBlendMode: 'multiply', marginBottom: '8px' }} draggable={false} />

        {/* Texto script */}
        <p style={{ fontFamily: "'Great Vibes', cursive", fontSize: 'clamp(28px, 8vw, 40px)', color: '#213F99', lineHeight: 1.3, marginBottom: '28px' }}>
          Contando los días<br />para el gran día
        </p>

        {/* 4 cajas — fila en desktop, 2×2 en móvil */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full" style={{ maxWidth: '520px' }}>
          <CountdownBox value={pad(dias)}     label="DÍAS" />
          <CountdownBox value={pad(horas)}    label="HORAS" />
          <CountdownBox value={pad(minutos)}  label="MINUTOS" />
          <CountdownBox value={pad(segundos)} label="SEGUNDOS" />
        </div>
      </motion.div>

      {/* ── Galería ── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
        style={{ width: '100%', maxWidth: '480px', padding: '0 16px 64px' }}
      >
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <div style={{ height: '1.5px', background: 'linear-gradient(90deg, transparent, #E1B0AC 20%, #9F7A33 50%, #E1B0AC 80%, transparent)', marginBottom: '16px' }} />
          <p style={{ fontFamily: "'Great Vibes', cursive", fontSize: 'clamp(28px, 8vw, 38px)', color: '#213F99', lineHeight: 1.2 }}>
            Nuestra historia
          </p>
          <div style={{ height: '1.5px', background: 'linear-gradient(90deg, transparent, #E1B0AC 20%, #9F7A33 50%, #E1B0AC 80%, transparent)', marginTop: '16px' }} />
        </div>

        <div className="columns-2 md:columns-3" style={{ gap: '10px' }}>
          {galleryPhotos.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              style={{ marginBottom: '10px', breakInside: 'avoid', overflow: 'hidden', borderRadius: '6px' }}
              whileHover={{ scale: 1.02 }}
            >
              <img
                src={src}
                alt=""
                style={{
                  width: '100%',
                  display: 'block',
                  borderRadius: '6px',
                  border: '1px solid rgba(159,122,51,0.15)',
                }}
                draggable={false}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ── Ubicación ── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ width: '100%', maxWidth: '480px', padding: '0 16px 72px' }}
      >
        {/* Título */}
        <div style={{ textAlign: 'center', marginBottom: '28px' }}>
          <div style={{ height: '1.5px', background: 'linear-gradient(90deg, transparent, #E1B0AC 20%, #9F7A33 50%, #E1B0AC 80%, transparent)', marginBottom: '18px' }} />
          <p style={{ fontFamily: "'Great Vibes', cursive", fontSize: 'clamp(28px, 8vw, 38px)', color: '#213F99' }}>
            Dónde nos casamos
          </p>
          <div style={{ height: '1.5px', background: 'linear-gradient(90deg, transparent, #E1B0AC 20%, #9F7A33 50%, #E1B0AC 80%, transparent)', marginTop: '18px' }} />
        </div>

        {/* Cards de lugares */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {LUGARES.map((lugar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              style={{
                borderRadius: '16px', overflow: 'hidden',
                background: 'rgba(255,255,255,0.75)',
                border: '1px solid rgba(159,122,51,0.2)',
                boxShadow: '0 4px 20px rgba(159,122,51,0.1)',
              }}
            >
              {/* Imagen del lugar */}
              <div style={{ width: '100%', height: '180px', overflow: 'hidden', position: 'relative' }}>
                <img
                  src={lugar.imagen}
                  alt={lugar.nombre}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  onError={e => { (e.currentTarget as HTMLImageElement).style.display = 'none' }}
                />
                {/* Badge tipo */}
                <div style={{
                  position: 'absolute', top: '12px', left: '12px',
                  background: 'rgba(33,63,153,0.85)', backdropFilter: 'blur(6px)',
                  color: '#fff', borderRadius: '999px',
                  padding: '4px 14px',
                  fontFamily: 'Lato, sans-serif', fontWeight: 700,
                  fontSize: '11px', letterSpacing: '2px',
                }}>
                  {lugar.emoji} {lugar.tipo.toUpperCase()}
                </div>
              </div>

              {/* Info */}
              <div style={{ padding: '20px 20px 20px' }}>
                <p style={{ fontFamily: "'Playfair Display', serif", fontSize: '20px', fontWeight: 600, color: '#1a1a2e', marginBottom: '6px' }}>
                  {lugar.nombre}
                </p>
                <p style={{ fontFamily: 'Lato, sans-serif', fontWeight: 300, fontSize: '13px', color: '#666', lineHeight: 1.6, marginBottom: '2px' }}>
                  📍 {lugar.direccion}
                </p>
                <p style={{ fontFamily: 'Lato, sans-serif', fontWeight: 300, fontSize: '13px', color: '#888', marginBottom: '2px' }}>
                  🏙️ {lugar.ciudad}
                </p>
                <p style={{ fontFamily: 'Lato, sans-serif', fontWeight: 700, fontSize: '13px', color: '#9F7A33', marginBottom: '16px' }}>
                  🕐 {lugar.hora}
                </p>

                <a
                  href={lugar.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '8px',
                    padding: '10px 24px', borderRadius: '999px',
                    background: 'linear-gradient(135deg, #213F99, #2d56cc)',
                    color: '#fff', textDecoration: 'none',
                    fontFamily: 'Lato, sans-serif', fontWeight: 700,
                    fontSize: '13px', letterSpacing: '0.5px',
                    boxShadow: '0 4px 14px rgba(33,63,153,0.3)',
                  }}
                >
                  🗺️ Cómo llegar
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ── Itinerario ── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ width: '100%', maxWidth: '480px', padding: '0 24px 80px' }}
      >
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <div style={{ height: '1.5px', background: 'linear-gradient(90deg, transparent, #E1B0AC 20%, #9F7A33 50%, #E1B0AC 80%, transparent)', marginBottom: '18px' }} />
          <p style={{ fontFamily: "'Great Vibes', cursive", fontSize: 'clamp(28px, 8vw, 38px)', color: '#213F99' }}>
            El gran día
          </p>
          <div style={{ height: '1.5px', background: 'linear-gradient(90deg, transparent, #E1B0AC 20%, #9F7A33 50%, #E1B0AC 80%, transparent)', marginTop: '18px' }} />
        </div>

        {/* Timeline */}
        <div style={{ position: 'relative', paddingLeft: '20px' }}>
          {/* Línea vertical */}
          <div style={{
            position: 'absolute', left: '39px', top: '20px', bottom: '20px',
            width: '1.5px',
            background: 'linear-gradient(180deg, #9F7A33, #E1B0AC, #9F7A33)',
          }} />

          {ITINERARIO.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: i < ITINERARIO.length - 1 ? '20px' : '0' }}
            >
              {/* Círculo con icono */}
              <div style={{
                width: '40px', height: '40px', borderRadius: '50%', flexShrink: 0,
                background: i % 2 === 0 ? 'linear-gradient(135deg, #213F99, #2d56cc)' : 'linear-gradient(135deg, #9F7A33, #C49A3C)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '18px', position: 'relative', zIndex: 1,
                boxShadow: '0 2px 10px rgba(0,0,0,0.12)',
              }}>
                {item.icono}
              </div>

              {/* Card */}
              <div style={{
                flex: 1,
                background: 'rgba(255,255,255,0.72)',
                borderRadius: '12px', padding: '12px 16px',
                border: '1px solid rgba(159,122,51,0.18)',
                boxShadow: '0 2px 12px rgba(159,122,51,0.07)',
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                  <p style={{ fontFamily: "'Playfair Display', serif", fontSize: '15px', fontWeight: 600, color: '#1a1a2e' }}>
                    {item.titulo}
                  </p>
                  <span style={{ fontFamily: 'Lato, sans-serif', fontWeight: 700, fontSize: '12px', color: '#9F7A33', whiteSpace: 'nowrap', marginLeft: '8px' }}>
                    {item.hora}
                  </span>
                </div>
                <p style={{ fontFamily: 'Lato, sans-serif', fontWeight: 300, fontSize: '13px', color: '#777', lineHeight: 1.5 }}>
                  {item.descripcion}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ── Código de vestimenta ── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ width: '100%', maxWidth: '480px', padding: '0 24px 56px' }}
      >
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <div style={{ height: '1.5px', background: 'linear-gradient(90deg, transparent, #E1B0AC 20%, #9F7A33 50%, #E1B0AC 80%, transparent)', marginBottom: '18px' }} />
          <p style={{ fontFamily: "'Great Vibes', cursive", fontSize: 'clamp(28px, 8vw, 38px)', color: '#213F99' }}>Código de vestimenta</p>
          <div style={{ height: '1.5px', background: 'linear-gradient(90deg, transparent, #E1B0AC 20%, #9F7A33 50%, #E1B0AC 80%, transparent)', marginTop: '18px' }} />
        </div>

        <div style={{ background: 'rgba(255,255,255,0.75)', borderRadius: '16px', padding: '24px', border: '1px solid rgba(159,122,51,0.2)', boxShadow: '0 4px 20px rgba(159,122,51,0.08)', textAlign: 'center' }}>
          <p style={{ fontSize: '40px', marginBottom: '8px' }}>👔👗</p>
          <p style={{ fontFamily: "'Playfair Display', serif", fontSize: '22px', fontWeight: 600, color: '#213F99', marginBottom: '12px' }}>
            {VESTIMENTA.codigo}
          </p>
          <p style={{ fontFamily: 'Lato, sans-serif', fontWeight: 300, fontSize: '14px', color: '#666', lineHeight: 1.7, marginBottom: '16px' }}>
            {VESTIMENTA.descripcion}
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginBottom: '16px', flexWrap: 'wrap' }}>
            {[VESTIMENTA.hombres, VESTIMENTA.mujeres].map(v => (
              <span key={v} style={{ background: 'rgba(33,63,153,0.07)', border: '1px solid rgba(33,63,153,0.15)', borderRadius: '999px', padding: '6px 16px', fontFamily: 'Lato, sans-serif', fontSize: '13px', color: '#213F99', fontWeight: 600 }}>
                {v}
              </span>
            ))}
          </div>
          <p style={{ fontFamily: 'Lato, sans-serif', fontStyle: 'italic', fontSize: '13px', color: '#E1B0AC', fontWeight: 400 }}>
            ✦ {VESTIMENTA.evitar} ✦
          </p>
        </div>
      </motion.div>

      {/* ── Hospedaje ── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ width: '100%', maxWidth: '480px', padding: '0 24px 56px' }}
      >
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <div style={{ height: '1.5px', background: 'linear-gradient(90deg, transparent, #E1B0AC 20%, #9F7A33 50%, #E1B0AC 80%, transparent)', marginBottom: '18px' }} />
          <p style={{ fontFamily: "'Great Vibes', cursive", fontSize: 'clamp(28px, 8vw, 38px)', color: '#213F99' }}>Sugerencias de hospedaje</p>
          <div style={{ height: '1.5px', background: 'linear-gradient(90deg, transparent, #E1B0AC 20%, #9F7A33 50%, #E1B0AC 80%, transparent)', marginTop: '18px' }} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {HOSPEDAJE.map((hotel, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{ background: 'rgba(255,255,255,0.75)', borderRadius: '14px', padding: '18px 20px', border: '1px solid rgba(159,122,51,0.2)', boxShadow: '0 4px 16px rgba(159,122,51,0.07)' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                <p style={{ fontFamily: "'Playfair Display', serif", fontSize: '17px', fontWeight: 600, color: '#1a1a2e' }}>{hotel.nombre}</p>
                <span style={{ fontSize: '13px' }}>{hotel.estrellas}</span>
              </div>
              <p style={{ fontFamily: 'Lato, sans-serif', fontWeight: 300, fontSize: '13px', color: '#888', marginBottom: '4px' }}>📍 {hotel.distancia}</p>
              <p style={{ fontFamily: 'Lato, sans-serif', fontWeight: 700, fontSize: '13px', color: '#9F7A33', marginBottom: '12px' }}>💰 {hotel.precio}</p>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <a href={`tel:${hotel.telefono}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '8px 16px', borderRadius: '999px', border: '1px solid rgba(33,63,153,0.3)', color: '#213F99', textDecoration: 'none', fontFamily: 'Lato, sans-serif', fontSize: '13px', fontWeight: 700 }}>
                  📞 Llamar
                </a>
                <a href={hotel.link} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '8px 16px', borderRadius: '999px', background: 'linear-gradient(135deg, #213F99, #2d56cc)', color: '#fff', textDecoration: 'none', fontFamily: 'Lato, sans-serif', fontSize: '13px', fontWeight: 700 }}>
                  🌐 Ver hotel
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ── Mesa de regalos ── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ width: '100%', maxWidth: '480px', padding: '0 24px 80px' }}
      >
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <div style={{ height: '1.5px', background: 'linear-gradient(90deg, transparent, #E1B0AC 20%, #9F7A33 50%, #E1B0AC 80%, transparent)', marginBottom: '18px' }} />
          <p style={{ fontFamily: "'Great Vibes', cursive", fontSize: 'clamp(28px, 8vw, 38px)', color: '#213F99' }}>Mesa de regalos</p>
          <div style={{ height: '1.5px', background: 'linear-gradient(90deg, transparent, #E1B0AC 20%, #9F7A33 50%, #E1B0AC 80%, transparent)', marginTop: '18px' }} />
        </div>

        <p style={{ fontFamily: 'Lato, sans-serif', fontWeight: 300, fontSize: '14px', color: '#777', textAlign: 'center', lineHeight: 1.7, marginBottom: '24px' }}>
          Tu presencia es nuestro mejor regalo. Si deseas obsequiarnos algo, aquí encontrarás nuestra lista.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {REGALOS.map((tienda, i) => (
            <motion.a
              key={i}
              href={tienda.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              style={{
                display: 'flex', alignItems: 'center', gap: '16px',
                background: tienda.bgColor,
                borderRadius: '14px', padding: '18px 20px',
                border: `1px solid ${tienda.color}30`,
                boxShadow: `0 4px 16px ${tienda.color}15`,
                textDecoration: 'none',
              }}
            >
              <span style={{ fontSize: '32px' }}>{tienda.logo}</span>
              <div style={{ flex: 1 }}>
                <p style={{ fontFamily: "'Playfair Display', serif", fontSize: '18px', fontWeight: 600, color: '#1a1a2e', marginBottom: '2px' }}>
                  {tienda.tienda}
                </p>
                <p style={{ fontFamily: 'Lato, sans-serif', fontWeight: 300, fontSize: '13px', color: '#888' }}>
                  {tienda.texto}
                </p>
              </div>
              <span style={{ color: tienda.color, fontSize: '20px', fontWeight: 700 }}>→</span>
            </motion.a>
          ))}
        </div>
      </motion.div>

    </div>
  )
}
