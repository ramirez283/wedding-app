import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const examples = [
  {
    id: '1',
    couple: 'María & Juan',
    date: '15 Jun 2025',
    theme: 'elegant',
    label: 'Elegante clásico',
    colors: 'from-amber-50 to-yellow-100',
    accent: 'text-amber-700',
    badge: 'bg-amber-100 text-amber-700',
    emoji: '👑',
  },
  {
    id: '2',
    couple: 'Sofía & Carlos',
    date: '22 Aug 2025',
    theme: 'minimal',
    label: 'Minimalista',
    colors: 'from-gray-50 to-slate-100',
    accent: 'text-slate-700',
    badge: 'bg-slate-100 text-slate-700',
    emoji: '◆',
  },
  {
    id: '3',
    couple: 'Valeria & Diego',
    date: '5 Oct 2025',
    theme: 'bohemian',
    label: 'Bohemio',
    colors: 'from-orange-50 to-amber-100',
    accent: 'text-orange-700',
    badge: 'bg-orange-100 text-orange-700',
    emoji: '🌿',
  },
  {
    id: '4',
    couple: 'Isabella & Mateo',
    date: '14 Feb 2026',
    theme: 'floral',
    label: 'Floral',
    colors: 'from-pink-50 to-rose-100',
    accent: 'text-pink-700',
    badge: 'bg-pink-100 text-pink-700',
    emoji: '🌸',
  },
  {
    id: '5',
    couple: 'Camila & Andrés',
    date: '1 May 2026',
    theme: 'playful',
    label: 'Colorido',
    colors: 'from-violet-50 to-purple-100',
    accent: 'text-violet-700',
    badge: 'bg-violet-100 text-violet-700',
    emoji: '🎉',
  },
]

export default function ExamplesShowcase() {
  return (
    <section id="ejemplos" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: '#9F7A33' }}>
            Explora estilos
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3">
            Ejemplos de invitaciones
          </h2>
          <p className="text-gray-500 text-lg mt-4 max-w-xl mx-auto">
            5 temas únicos para que encuentres el que refleja la personalidad de su boda.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {examples.map((ex, i) => (
            <motion.div
              key={ex.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                to={`/invitation/${ex.id}`}
                className={`block bg-gradient-to-br ${ex.colors} rounded-3xl p-8 hover:scale-105 hover:shadow-xl transition-all duration-300 group`}
              >
                <div className="flex items-start justify-between mb-6">
                  <span className="text-4xl">{ex.emoji}</span>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${ex.badge}`}>
                    {ex.label}
                  </span>
                </div>

                <div className="mb-4">
                  <h3 className={`text-2xl font-bold ${ex.accent} mb-1`}>
                    {ex.couple}
                  </h3>
                  <p className="text-gray-500 text-sm flex items-center gap-1">
                    <span>📅</span> {ex.date}
                  </p>
                </div>

                <div className="flex items-center gap-2 mt-6">
                  <span className={`text-sm font-semibold ${ex.accent} group-hover:underline`}>
                    Ver invitación →
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
