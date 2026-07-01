import { motion } from 'framer-motion'

const features = [
  { icon: '⏱️', title: 'Cuenta regresiva',     description: 'Reloj animado en tiempo real que muestra los días, horas y minutos para el gran día.' },
  { icon: '📸', title: 'Galería de fotos',      description: 'Carrusel elegante con las fotos de la pareja. Tus invitados verán los mejores momentos.' },
  { icon: '📍', title: 'Ubicación del evento',  description: 'Dirección clara y enlace a Google Maps para que nadie se pierda.' },
  { icon: '🎵', title: 'Canción de la pareja',  description: 'Muestra su canción especial con enlace a Spotify. El detalle que enamora.' },
  { icon: '📋', title: 'Itinerario del día',    description: 'Timeline visual de todos los eventos: recepción, ceremonia, cena y brindis.' },
  { icon: '🎁', title: 'Mesa de regalos',       description: 'Enlace directo a la lista de regalos. Cómodo para los invitados, sin incomodidades.' },
  { icon: '👗', title: 'Código de vestimenta',  description: 'Comunica el dress code de forma elegante para que todos lleguen perfectos.' },
  { icon: '📱', title: '100% responsive',       description: 'Se ve perfecto en celulares, tablets y computadoras. Sin necesidad de app.' },
]

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

export default function Features() {
  return (
    <section
      id="caracteristicas"
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
          style={{ textAlign: 'center', marginBottom: '48px' }}
        >
          <span style={{ color: '#9F7A33', fontSize: '12px', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', fontFamily: 'Lato, sans-serif' }}>
            ✦ Todo incluido ✦
          </span>
          <h2 style={{ color: '#213F99', marginTop: '12px', fontSize: 'clamp(32px, 5vw, 48px)', fontFamily: "'Playfair Display', serif" }}>
            Características principales
          </h2>
          <p style={{ fontSize: '17px', marginTop: '12px', color: '#666', maxWidth: '460px', margin: '12px auto 0', fontFamily: 'Lato, sans-serif', fontWeight: 300 }}>
            Todo lo que necesitas para una invitación perfecta, en un solo lugar.
          </p>
        </motion.div>


        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              whileHover={{ y: -4, boxShadow: '0 8px 28px rgba(33,63,153,0.12)' }}
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
                cursor: 'default',
                transition: 'box-shadow 0.25s, transform 0.25s',
              }}
            >
              {/* Círculo icono */}
              <div style={{
                width: '58px', height: '58px', borderRadius: '50%',
                border: '1.5px solid rgba(33,63,153,0.35)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '22px', marginBottom: '14px', flexShrink: 0,
                backgroundColor: 'transparent', overflow: 'hidden',
              }}>
                {feature.icon}
              </div>
              <h3 style={{ fontSize: '15px', fontWeight: 600, color: '#213F99', marginBottom: '10px', fontFamily: "'Playfair Display', serif" }}>
                {feature.title}
              </h3>
              <p style={{ fontSize: '13px', lineHeight: '1.65', color: '#777', fontFamily: 'Lato, sans-serif', fontWeight: 300 }}>
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
