import { motion } from 'framer-motion'

const features = [
  { icon: '⏱️', title: 'Cuenta regresiva', description: 'Reloj animado en tiempo real que muestra los días, horas y minutos para el gran día.' },
  { icon: '📸', title: 'Galería de fotos', description: 'Carrusel elegante con las fotos de la pareja. Tus invitados verán los mejores momentos.' },
  { icon: '📍', title: 'Ubicación del evento', description: 'Dirección clara y enlace a Google Maps para que nadie se pierda.' },
  { icon: '🎵', title: 'Canción de la pareja', description: 'Muestra su canción especial con enlace a Spotify. El detalle que enamora.' },
  { icon: '📋', title: 'Itinerario del día', description: 'Timeline visual de todos los eventos: recepción, ceremonia, cena y brindis.' },
  { icon: '🎁', title: 'Mesa de regalos', description: 'Enlace directo a la lista de regalos. Cómodo para los invitados, sin incomodidades.' },
  { icon: '👗', title: 'Código de vestimenta', description: 'Comunica el dress code de forma elegante para que todos lleguen perfectos.' },
  { icon: '📱', title: '100% responsive', description: 'Se ve perfecto en celulares, tablets y computadoras. Sin necesidad de app.' },
]

export default function Features() {
  return (
    <section id="caracteristicas" className="py-24" style={{ background: 'linear-gradient(135deg, #F2D4D6 0%, #ffffff 60%)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: '#9F7A33' }}>
            Todo incluido
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3">
            Características principales
          </h2>
          <p className="text-gray-500 text-lg mt-4 max-w-xl mx-auto">
            Todo lo que necesitas para una invitación de boda perfecta, en un solo lugar.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-200 group cursor-default"
            >
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3
                className="text-lg font-bold text-gray-900 mb-2 transition-colors duration-200"
                style={{ '--hover-color': '#213F99' } as React.CSSProperties}
              >
                <span className="group-hover:text-[#213F99] transition-colors duration-200">
                  {feature.title}
                </span>
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
