import { motion } from 'framer-motion'
import React from 'react'

const steps = [
  { number: '01', icon: '✨', title: 'Elige tu tema',        description: 'Selecciona entre estilos únicos: elegante, minimalista, bohemio, floral o divertido.' },
  { number: '02', icon: '📝', title: 'Personaliza los datos', description: 'Agrega nombres, fecha, lugar, fotos, itinerario, canción y todo lo que hace especial tu día.' },
  { number: '03', icon: '🔗', title: 'Comparte el enlace',   description: 'Envía el link a tus invitados por WhatsApp, email o redes sociales. Sin imprimir nada.' },
  { number: '04', icon: '💌', title: 'Recibe confirmaciones', description: 'Tus invitados confirman asistencia directamente desde la invitación digital.' },
]

function CornerFlourish({ position }: { position: 'tl' | 'tr' | 'bl' | 'br' }) {
  const transforms: Record<string, string> = {
    tl: 'none',
    tr: 'scaleX(-1)',
    bl: 'scaleY(-1)',
    br: 'scale(-1,-1)',
  }
  const corners: Record<string, React.CSSProperties> = {
    tl: { top: 16, left: 16 },
    tr: { top: 16, right: 16 },
    bl: { bottom: 16, left: 16 },
    br: { bottom: 16, right: 16 },
  }
  return (
    <svg
      width="64" height="64" viewBox="0 0 64 64" fill="none"
      style={{ position: 'absolute', opacity: 0.18, transform: transforms[position], ...corners[position] }}
    >
      <path d="M4 4 L4 28 Q4 4 28 4 Z" stroke="#213F99" strokeWidth="1" fill="none" />
      <path d="M4 4 C4 4 20 4 28 12 C36 20 36 36 36 36" stroke="#9F7A33" strokeWidth="0.8" fill="none" strokeLinecap="round"/>
      <path d="M14 4 C14 4 14 14 4 14" stroke="#213F99" strokeWidth="0.7" fill="none" strokeLinecap="round"/>
      <circle cx="36" cy="36" r="2" fill="#9F7A33" opacity="0.7"/>
      <circle cx="28" cy="12" r="1.2" fill="#213F99" opacity="0.6"/>
    </svg>
  )
}

export default function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="py-24"
      style={{ background: 'linear-gradient(90deg, #F2D4D6 0%, #FBF0DC 50%, #F2D4D6 100%)', position: 'relative', overflow: 'hidden' }}
    >
      <CornerFlourish position="tl" />
      <CornerFlourish position="tr" />
      <CornerFlourish position="bl" />
      <CornerFlourish position="br" />

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 10 }}>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '56px' }}
        >
          <span style={{ color: '#9F7A33', fontSize: '12px', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', fontFamily: 'Lato, sans-serif' }}>
            ✦ Simple y rápido ✦
          </span>
          <h2 style={{ color: '#213F99', marginTop: '12px', fontSize: 'clamp(32px, 5vw, 48px)', fontFamily: "'Playfair Display', serif" }}>
            ¿Cómo funciona?
          </h2>
          <p style={{ fontSize: '17px', marginTop: '12px', color: '#666', maxWidth: '460px', margin: '12px auto 0', fontFamily: 'Lato, sans-serif', fontWeight: 300 }}>
            En 4 pasos sencillos tendrás tu invitación lista para compartir.
          </p>
        </motion.div>

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{
                width: '210px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                borderRadius: '14px',
                padding: '32px 18px 28px',
                backgroundColor: '#ffffff',
                border: '1px solid rgba(33,63,153,0.18)',
                boxShadow: '0 2px 16px rgba(33,63,153,0.06)',
              }}
            >
              {/* Círculo icono — solo contorno */}
              <div style={{
                width: '58px', height: '58px', borderRadius: '50%',
                border: '1.5px solid rgba(33,63,153,0.35)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '22px', marginBottom: '14px', flexShrink: 0,
                backgroundColor: 'transparent',
              }}>
                {step.icon}
              </div>
              <span style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '2.5px', color: '#213F99', marginBottom: '10px', fontFamily: 'Lato, sans-serif' }}>
                PASO {step.number}
              </span>
              <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#1a1a2e', marginBottom: '10px', fontFamily: "'Playfair Display', serif" }}>
                {step.title}
              </h3>
              <p style={{ fontSize: '13px', lineHeight: '1.65', color: '#777', fontFamily: 'Lato, sans-serif', fontWeight: 300 }}>
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
