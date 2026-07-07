import { motion } from 'framer-motion'

const features = [
  { icon: '🖼️', text: 'Diseño personalizado con tus fotos' },
  { icon: '⏳', text: 'Cuenta regresiva hasta el gran día' },
  { icon: '📍', text: 'Mapa interactivo de ceremonia y recepción' },
  { icon: '🗓️', text: 'Itinerario del evento' },
  { icon: '👗', text: 'Sección de código de vestimenta' },
  { icon: '🎵', text: 'Música de fondo personalizada' },
  { icon: '💌', text: 'Lluvia de sobres y mesa de regalos' },
  { icon: '✅', text: 'Confirmación de asistencia por WhatsApp' },
  { icon: '🔗', text: 'Liga única para compartir (myinvitia.mx/...)' },
  { icon: '📱', text: 'Optimizada para móvil y escritorio' },
  { icon: '🚀', text: 'Entrega en 5 días hábiles' },
]

export default function Pricing() {
  return (
    <section id="precios" style={{ background: 'linear-gradient(90deg, #F2D4D6 0%, #FBF0DC 50%, #F2D4D6 100%)', padding: '96px 24px' }}>
      <div style={{ maxWidth: '960px', margin: '0 auto' }}>

        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: '56px' }}
        >
          <p style={{ color: '#9F7A33', fontSize: '13px', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '12px' }}>
            Precio de lanzamiento
          </p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(28px, 5vw, 42px)', color: '#213F99', marginBottom: '16px' }}>
            Un solo plan, todo incluido
          </h2>
          <p style={{ color: '#6B7280', fontSize: '16px', maxWidth: '480px', margin: '0 auto' }}>
            Sin sorpresas. Sin planes complicados. Todo lo que necesitas para una invitación perfecta.
          </p>
        </motion.div>

        {/* Tarjeta de precio */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          style={{
            background: '#ffffff',
            borderRadius: '28px',
            boxShadow: '0 8px 48px rgba(33,63,153,0.1), 0 2px 12px rgba(33,63,153,0.06)',
            overflow: 'hidden',
            border: '1px solid rgba(225,176,172,0.3)',
          }}
        >
          {/* Banner superior */}
          <div style={{ background: 'linear-gradient(90deg, #213F99 0%, #2d55c8 100%)', padding: '10px 24px', textAlign: 'center' }}>
            <p style={{ color: 'rgba(245,237,213,0.85)', fontSize: '13px', letterSpacing: '0.1em' }}>
              ✦ Precio especial de lanzamiento ✦
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>

            {/* Columna izquierda: precio */}
            <div style={{ padding: '48px 40px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', borderRight: '1px solid rgba(225,176,172,0.2)', textAlign: 'center' }}>
              <p style={{ color: '#9F7A33', fontSize: '13px', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '16px' }}>
                Invitación Digital
              </p>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '4px', marginBottom: '8px' }}>
                <span style={{ color: '#213F99', fontSize: '22px', fontWeight: '600', marginTop: '10px' }}>$</span>
                <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '80px', color: '#213F99', lineHeight: 1 }}>299</span>
                <span style={{ color: '#213F99', fontSize: '18px', alignSelf: 'flex-end', marginBottom: '12px' }}>MXN</span>
              </div>
              <p style={{ color: '#9CA3AF', fontSize: '14px', marginBottom: '32px' }}>Pago único · Sin mensualidades</p>

              <a
                href="https://wa.me/523329215960?text=Hola,%20me%20interesa%20contratar%20una%20invitación%20digital%20con%20My%20Invitia"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'linear-gradient(90deg, #213F99 0%, #2d55c8 100%)',
                  color: '#ffffff',
                  padding: '14px 32px',
                  borderRadius: '50px',
                  fontWeight: '600',
                  fontSize: '15px',
                  textDecoration: 'none',
                  boxShadow: '0 4px 20px rgba(33,63,153,0.3)',
                  transition: 'opacity 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '0.88')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
              >
                <svg style={{ width: '20px', height: '20px' }} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Contratar por WhatsApp
              </a>

              <p style={{ color: '#9CA3AF', fontSize: '12px', marginTop: '16px' }}>
                Respuesta en menos de 24 hrs
              </p>
            </div>

            {/* Columna derecha: features */}
            <div style={{ padding: '48px 40px' }}>
              <p style={{ color: '#213F99', fontWeight: '600', fontSize: '15px', marginBottom: '24px' }}>
                ¿Qué incluye?
              </p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '14px', listStyle: 'none', padding: 0, margin: 0 }}>
                {features.map((f, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '14px', color: '#374151' }}>
                    <span style={{ fontSize: '18px', flexShrink: 0 }}>{f.icon}</span>
                    {f.text}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </motion.div>

        {/* Nota al pie */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ textAlign: 'center', color: '#9CA3AF', fontSize: '13px', marginTop: '24px' }}
        >
          ¿Tienes preguntas? Escríbenos y con gusto te asesoramos sin compromiso.
        </motion.p>

      </div>
    </section>
  )
}
