import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    icon: '✨',
    title: 'Elige tu tema',
    description: 'Selecciona entre 5 estilos únicos: elegante, minimalista, bohemio, floral o divertido.',
  },
  {
    number: '02',
    icon: '📝',
    title: 'Personaliza los datos',
    description: 'Agrega nombres, fecha, lugar, fotos, itinerario, canción y todo lo que hace especial tu día.',
  },
  {
    number: '03',
    icon: '🔗',
    title: 'Comparte el enlace',
    description: 'Envía el link a tus invitados por WhatsApp, email o redes sociales. Sin imprimir nada.',
  },
  {
    number: '04',
    icon: '💌',
    title: 'Recibe confirmaciones',
    description: 'Tus invitados confirman asistencia directamente desde la invitación digital.',
  },
]

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: '#9F7A33' }}>
            Simple y rápido
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3">
            ¿Cómo funciona?
          </h2>
          <p className="text-gray-500 text-lg mt-4 max-w-xl mx-auto">
            En 4 pasos sencillos tendrás tu invitación digital lista para compartir.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative text-center group"
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div
                  className="hidden lg:block absolute top-10 left-1/2 w-full h-0.5 z-0"
                  style={{ backgroundColor: '#F2D4D6' }}
                />
              )}

              <div className="relative z-10">
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 text-3xl transition-colors duration-200"
                  style={{ backgroundColor: '#F2D4D6' }}
                >
                  {step.icon}
                </div>
                <span className="text-xs font-bold tracking-widest" style={{ color: '#9F7A33' }}>
                  PASO {step.number}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
