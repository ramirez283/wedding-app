import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'
import fondoImg from '../assets/invitations/fondo-hoja.png'
import backgroundImg from '../assets/invitations/background-hoja.png'
import buhoImg from '../assets/invitations/buho-pergamino.png'
import dressCodeImg from '../assets/invitations/dresscode1.png'
import lluviaSobresImg from '../assets/invitations/lluvia-sobres.svg'
import invitations from '../data/invitations'


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

function MusicPlayer({ src }: { src: string }) {
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
        src={src}
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
  const { slug } = useParams<{ slug: string }>()
  const data = invitations[slug ?? '']
  const { dias, horas, minutos, segundos } = useCountdown(
    data ? new Date(data.fechaContdown) : new Date()
  )

  if (!data) return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundImage: `url(${fondoImg})`, backgroundSize: 'cover' }}>
      <p style={{ fontFamily: "'Playfair Display', serif", fontSize: '28px', color: '#213F99' }}>Invitación no encontrada</p>
    </div>
  )

  return (
    <>
      {/* Fondo fijo — no se mueve ni escala */}
      <div style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }} />

      {/* Contenido scrolleable encima del fondo */}
      <div style={{
        position: 'relative',
        zIndex: 1,
        minHeight: '100vh',
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
        <img src={data.fotoPortada} alt={`${data.nombre1} & ${data.nombre2}`}
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
          {data.nombre1}
        </h1>
        <p style={{ fontFamily: "'Great Vibes', cursive", fontSize: 'clamp(24px, 6vw, 36px)', color: '#9F7A33', margin: '0 0 0px', letterSpacing: '2px' }}>
          &amp;
        </p>
        <h1 style={{ fontFamily: "'Great Vibes', cursive", fontSize: 'clamp(48px, 13vw, 72px)', color: '#213F99', lineHeight: 1.1, marginBottom: '24px' }}>
          {data.nombre2}
        </h1>

        <div style={{ height: '1.5px', background: 'linear-gradient(90deg, transparent, #E1B0AC 20%, #9F7A33 50%, #E1B0AC 80%, transparent)', maxWidth: '240px', margin: '0 auto 20px' }} />

        <p style={{ fontFamily: "'Great Vibes', cursive", fontSize: 'clamp(20px, 5vw, 26px)', color: '#555', letterSpacing: '1px', marginBottom: '24px' }}>
          {data.fecha}
        </p>

        <MusicPlayer src={data.cancion} />
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
          {data.galeria.map((src, i) => (
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
          {data.lugares.map((lugar, i) => (
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

          {data.itinerario.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: i < data.itinerario.length - 1 ? '20px' : '0' }}
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

        {/* Sin contenedor blanco — diseño abierto y premium */}
        <div style={{ textAlign: 'center' }}>

          {/* Ilustración protagonista */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1 }}
            style={{ position: 'relative', display: 'inline-block' }}
          >
            {/* Halo dorado detrás */}
            <div style={{
              position: 'absolute', inset: '-16px',
              borderRadius: '50%',
              background: 'radial-gradient(ellipse at center, rgba(159,122,51,0.12) 0%, transparent 70%)',
              pointerEvents: 'none',
            }} />
            <img
              src={dressCodeImg}
              alt="Código de vestimenta"
              style={{
                width: '300px',
                height: 'auto',
                display: 'block',
                mixBlendMode: 'multiply',
                filter: 'drop-shadow(0 8px 24px rgba(159,122,51,0.22)) drop-shadow(0 2px 6px rgba(33,63,153,0.10))',
                position: 'relative',
              }}
            />
          </motion.div>

          {/* Nombre del código */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            style={{ marginTop: '20px' }}
          >
            <p style={{
              fontFamily: "'Great Vibes', cursive",
              fontSize: 'clamp(30px, 8vw, 40px)',
              color: '#9F7A33',
              letterSpacing: '1px',
              marginBottom: '8px',
              textShadow: '0 1px 8px rgba(159,122,51,0.25)',
            }}>
              {data.vestimenta.codigo}
            </p>
            <p style={{
              fontFamily: 'Lato, sans-serif',
              fontWeight: 300,
              fontSize: '13px',
              color: '#888',
              letterSpacing: '0.3px',
              marginBottom: '20px',
            }}>
              Vestimenta formal elegante para celebrar con nosotros este gran día.
            </p>
          </motion.div>

          {/* Dos etiquetas */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.45 }}
            style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap', marginBottom: '20px' }}
          >
            {[data.vestimenta.hombres, data.vestimenta.mujeres].map(v => (
              <span key={v} style={{
                border: '1px solid rgba(159,122,51,0.45)',
                borderRadius: '999px',
                padding: '7px 22px',
                fontFamily: 'Lato, sans-serif',
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '1.5px',
                color: '#9F7A33',
                textTransform: 'uppercase',
              }}>
                {v}
              </span>
            ))}
          </motion.div>

          {/* Nota discreta */}
          <p style={{
            fontFamily: 'Lato, sans-serif',
            fontSize: '11px',
            color: 'rgba(33,63,153,0.45)',
            letterSpacing: '0.5px',
          }}>
            {/* Evitar tonos blanco y negro. */}
          </p>

        </div>
      </motion.div>

      {/* ── Solo adultos ── */}
      {data.soloAdultos && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ width: '100%', maxWidth: '480px', padding: '0 24px 56px', textAlign: 'center' }}
        >
          <div style={{ height: '1.5px', background: 'linear-gradient(90deg, transparent, #E1B0AC 20%, #9F7A33 50%, #E1B0AC 80%, transparent)', marginBottom: '28px' }} />

          {/* Tarjetita */}
          <div style={{
            position: 'relative',
            background: 'rgba(255,255,255,0.78)',
            border: '1px solid rgba(159,122,51,0.25)',
            borderRadius: '16px',
            padding: '32px 28px 28px',
            boxShadow: '0 4px 24px rgba(159,122,51,0.10)',
          }}>
            {/* Comillas decorativas arriba */}
            <div style={{
              position: 'absolute', top: '-18px', left: '50%', transform: 'translateX(-50%)',
              background: 'linear-gradient(135deg, #C49A3C, #9F7A33)',
              borderRadius: '50%', width: '36px', height: '36px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 2px 10px rgba(159,122,51,0.3)',
              fontSize: '18px', color: '#fff', fontWeight: 900, lineHeight: 1,
              fontFamily: 'Georgia, serif',
            }}>
              ❝
            </div>

            {/* Mensaje */}
            <p style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(15px, 4vw, 17px)',
              fontStyle: 'italic',
              color: '#2a2a2a',
              lineHeight: 1.85,
              marginBottom: '20px',
            }}>
              Adoramos a tus pequeños, sin embargo, este evento está destinado solo para adultos. ¡Esperamos tu comprensión!
            </p>

            {/* Firma dorada */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
              <span style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, transparent, rgba(159,122,51,0.4))' }} />
              <span style={{ fontFamily: 'Lato, sans-serif', fontWeight: 700, fontSize: '11px', letterSpacing: '2.5px', color: '#9F7A33', textTransform: 'uppercase' }}>
                Solo adultos
              </span>
              <span style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, rgba(159,122,51,0.4), transparent)' }} />
            </div>
          </div>

          <div style={{ height: '1.5px', background: 'linear-gradient(90deg, transparent, #E1B0AC 20%, #9F7A33 50%, #E1B0AC 80%, transparent)', marginTop: '28px' }} />
        </motion.div>
      )}

      {/* ── Hospedaje ── */}
      {data.hospedaje.length > 0 && <motion.div
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
          {data.hospedaje.map((hotel, i) => (
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
      </motion.div>}

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
          {data.regalos.map((tienda, i) => (
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

      {/* ── Lluvia de sobres ── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ width: '100%', maxWidth: '480px', padding: '0 24px 80px', textAlign: 'center' }}
      >
        <div style={{ height: '1.5px', background: 'linear-gradient(90deg, transparent, #E1B0AC 20%, #9F7A33 50%, #E1B0AC 80%, transparent)', marginBottom: '18px' }} />
        <p style={{ fontFamily: "'Great Vibes', cursive", fontSize: 'clamp(28px, 8vw, 38px)', color: '#213F99' }}>
          Lluvia de sobres
        </p>
        <div style={{ height: '1.5px', background: 'linear-gradient(90deg, transparent, #E1B0AC 20%, #9F7A33 50%, #E1B0AC 80%, transparent)', marginTop: '18px', marginBottom: '28px' }} />

        <motion.img
          src={lluviaSobresImg}
          alt="Lluvia de sobres"
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1 }}
          style={{
            width: '100%',
            maxWidth: '260px',
            height: 'auto',
            display: 'block',
            margin: '0 auto 24px',
            filter: 'drop-shadow(0 6px 18px rgba(159,122,51,0.2))',
          }}
        />

        <p style={{ fontFamily: 'Lato, sans-serif', fontWeight: 300, fontSize: '14px', color: '#666', lineHeight: 1.8, marginBottom: '20px', maxWidth: '340px', margin: '0 auto 20px' }}>
          Tu presencia es el mejor regalo. Si deseas hacernos un obsequio en efectivo,
          con mucho gusto lo recibiremos.
        </p>

        <p style={{ fontFamily: 'Lato, sans-serif', fontStyle: 'italic', fontSize: '12px', color: 'rgba(159,122,51,0.7)', letterSpacing: '0.5px' }}>
          ✦ Gracias por tu generosidad y cariño ✦
        </p>
      </motion.div>

      {/* ── Confirmar asistencia ── */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        style={{ width: '100%', maxWidth: '480px', padding: '0 24px 80px', textAlign: 'center' }}
      >
        {/* Divisor dorado */}
        <div style={{ height: '1.5px', background: 'linear-gradient(90deg, transparent, #E1B0AC 20%, #9F7A33 50%, #E1B0AC 80%, transparent)', marginBottom: '18px' }} />

        {/* Ornamento floral */}
        <div style={{ fontSize: '22px', color: '#C49A3C', marginBottom: '8px', letterSpacing: '8px' }}>✦ ❧ ✦</div>

        <p style={{ fontFamily: "'Great Vibes', cursive", fontSize: 'clamp(32px, 9vw, 44px)', color: '#213F99', lineHeight: 1.2, marginBottom: '4px' }}>
          Confirma tu asistencia
        </p>
        <p style={{ fontFamily: "'Great Vibes', cursive", fontSize: 'clamp(18px, 5vw, 24px)', color: '#9F7A33', marginBottom: '20px' }}>
          antes del 1 de octubre de 2026
        </p>

        <div style={{ height: '1.5px', background: 'linear-gradient(90deg, transparent, #E1B0AC 20%, #9F7A33 50%, #E1B0AC 80%, transparent)', marginBottom: '28px' }} />

        <p style={{ fontFamily: 'Lato, sans-serif', fontWeight: 300, fontSize: '14px', color: '#666', lineHeight: 1.8, maxWidth: '320px', margin: '0 auto 32px' }}>
          Nos encantaría contar con tu presencia en este día tan especial. Confírmanos tu asistencia por cualquiera de estos medios.
        </p>

        {/* Botones */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', maxWidth: '320px', margin: '0 auto' }}>

          {/* WhatsApp */}
          <motion.a
            href="https://wa.me/523141613998?text=Hola%2C%20confirmo%20mi%20asistencia%20a%20su%20boda%20%F0%9F%92%8D"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03, boxShadow: '0 8px 28px rgba(37,211,102,0.35)' }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px',
              padding: '16px 24px', borderRadius: '999px', textDecoration: 'none',
              background: 'linear-gradient(135deg, #25D366, #1da851)',
              boxShadow: '0 4px 18px rgba(37,211,102,0.28)',
            }}
          >
            {/* WhatsApp icon */}
            <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <span style={{ fontFamily: 'Lato, sans-serif', fontWeight: 700, fontSize: '15px', color: '#fff', letterSpacing: '0.5px' }}>
              Confirmar por WhatsApp
            </span>
          </motion.a>

          {/* Llamada */}
          <motion.a
            href="tel:3141613998"
            whileHover={{ scale: 1.03, boxShadow: '0 8px 28px rgba(33,63,153,0.25)' }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px',
              padding: '16px 24px', borderRadius: '999px', textDecoration: 'none',
              background: 'linear-gradient(135deg, #213F99, #2d56cc)',
              boxShadow: '0 4px 18px rgba(33,63,153,0.22)',
            }}
          >
            {/* Phone icon */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
            <span style={{ fontFamily: 'Lato, sans-serif', fontWeight: 700, fontSize: '15px', color: '#fff', letterSpacing: '0.5px' }}>
              Llamar al 314 161 3998
            </span>
          </motion.a>
        </div>

        {/* Nota final */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{ marginTop: '36px' }}
        >
          <div style={{ fontSize: '20px', color: '#C49A3C', letterSpacing: '6px', marginBottom: '12px' }}>✦ ✦ ✦</div>
          <p style={{ fontFamily: "'Great Vibes', cursive", fontSize: 'clamp(22px, 6vw, 30px)', color: '#9F7A33' }}>
            ¡Los esperamos con mucho amor!
          </p>
          <p style={{ fontFamily: "'Great Vibes', cursive", fontSize: 'clamp(28px, 8vw, 38px)', color: '#213F99', marginTop: '4px' }}>
            {data.nombre1} &amp; {data.nombre2}
          </p>
        </motion.div>

      </motion.div>

    </div>
    </>
  )
}
