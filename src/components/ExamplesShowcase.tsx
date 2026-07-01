import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import invitacionImg from '../assets/invitations/invitacion.png'
import React from 'react'

function CornerFlourish({ position }: { position: 'tl' | 'tr' | 'bl' | 'br' }) {
  const transforms: Record<string, string> = { tl: 'none', tr: 'scaleX(-1)', bl: 'scaleY(-1)', br: 'scale(-1,-1)' }
  const corners: Record<string, React.CSSProperties> = { tl: { top: 16, left: 16 }, tr: { top: 16, right: 16 }, bl: { bottom: 16, left: 16 }, br: { bottom: 16, right: 16 } }
  return (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none"
      style={{ position: 'absolute', opacity: 0.18, transform: transforms[position], ...corners[position] }}>
      <path d="M4 4 L4 28 Q4 4 28 4 Z" stroke="#213F99" strokeWidth="1" fill="none" />
      <path d="M4 4 C4 4 20 4 28 12 C36 20 36 36 36 36" stroke="#9F7A33" strokeWidth="0.8" fill="none" strokeLinecap="round"/>
      <path d="M14 4 C14 4 14 14 4 14" stroke="#213F99" strokeWidth="0.7" fill="none" strokeLinecap="round"/>
      <circle cx="36" cy="36" r="2" fill="#9F7A33" opacity="0.7"/>
      <circle cx="28" cy="12" r="1.2" fill="#213F99" opacity="0.6"/>
    </svg>
  )
}

export default function ExamplesShowcase() {
  return (
    <section
      id="ejemplos"
      className="py-24"
      style={{ background: 'linear-gradient(90deg, #F2D4D6 0%, #FBF0DC 50%, #F2D4D6 100%)', position: 'relative', overflow: 'hidden' }}
    >
      <CornerFlourish position="tl" />
      <CornerFlourish position="tr" />
      <CornerFlourish position="bl" />
      <CornerFlourish position="br" />

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 10 }}>

        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '48px' }}
        >
          <span style={{ color: '#9F7A33', fontSize: '12px', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', fontFamily: 'Lato, sans-serif' }}>
            ✦ Explora estilos ✦
          </span>
          <h2 style={{ color: '#213F99', marginTop: '12px', fontSize: 'clamp(32px, 5vw, 48px)', fontFamily: "'Playfair Display', serif" }}>
            Ejemplo de invitación
          </h2>
          <p style={{ fontSize: '17px', marginTop: '12px', color: '#666', maxWidth: '460px', margin: '12px auto 0', fontFamily: 'Lato, sans-serif', fontWeight: 300 }}>
            Así luce una invitación digital creada con My Invitia.
          </p>
        </motion.div>


        {/* Mockup de celular centrado */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '36px' }}
        >
          {/* Phone frame */}
          <div style={{
            width: '280px',
            borderRadius: '44px',
            padding: '12px',
            background: 'linear-gradient(145deg, #2a2a2a 0%, #111111 100%)',
            boxShadow: [
              '0 40px 80px rgba(0,0,0,0.35)',
              '0 16px 32px rgba(0,0,0,0.2)',
              'inset 0 1px 0 rgba(255,255,255,0.12)',
              'inset 0 -1px 0 rgba(0,0,0,0.5)',
            ].join(', '),
            position: 'relative',
          }}>
            <div style={{ position: 'absolute', left: '-3px', top: '80px',  width: '3px', height: '32px', borderRadius: '2px 0 0 2px', background: '#1a1a1a' }} />
            <div style={{ position: 'absolute', left: '-3px', top: '124px', width: '3px', height: '56px', borderRadius: '2px 0 0 2px', background: '#1a1a1a' }} />
            <div style={{ position: 'absolute', right: '-3px', top: '100px', width: '3px', height: '64px', borderRadius: '0 2px 2px 0', background: '#1a1a1a' }} />

            <div style={{ borderRadius: '34px', overflow: 'hidden', position: 'relative', backgroundColor: '#000' }}>
              <div style={{
                position: 'absolute', top: '10px', left: '50%', transform: 'translateX(-50%)',
                width: '80px', height: '24px', background: '#111', borderRadius: '12px', zIndex: 10,
              }} />
              <img src={invitacionImg} alt="Ejemplo de invitación" style={{ width: '100%', display: 'block', objectFit: 'cover' }} draggable={false} />
            </div>
          </div>

          {/* Info + botón */}
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '2.5px', color: '#9F7A33', textTransform: 'uppercase', marginBottom: '10px', fontFamily: 'Lato, sans-serif' }}>
              ✦ Estilo elegante ✦
            </p>
            <h3 style={{ fontSize: '26px', fontWeight: 600, color: '#213F99', marginBottom: '6px', fontFamily: "'Playfair Display', serif" }}>
              Isabella & Alejandro
            </h3>
            <p style={{ fontSize: '14px', color: '#888', marginBottom: '32px', fontFamily: 'Lato, sans-serif', fontWeight: 300 }}>
              Sábado, 14 de septiembre de 2024
            </p>

            <Link
              to="/invitation/isabella-y-alejandro"
              style={{
                display: 'inline-block',
                padding: '14px 44px',
                borderRadius: '999px',
                background: 'linear-gradient(135deg, #9F7A33 0%, #C49A3C 100%)',
                color: '#fff',
                fontWeight: 700,
                fontSize: '15px',
                textDecoration: 'none',
                letterSpacing: '0.5px',
                fontFamily: 'Lato, sans-serif',
                boxShadow: '0 6px 24px rgba(159,122,51,0.3)',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.transform = 'scale(1.05)'
                ;(e.currentTarget as HTMLElement).style.boxShadow = '0 10px 32px rgba(159,122,51,0.45)'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.transform = 'scale(1)'
                ;(e.currentTarget as HTMLElement).style.boxShadow = '0 6px 24px rgba(159,122,51,0.3)'
              }}
            >
              Ver invitación completa
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
