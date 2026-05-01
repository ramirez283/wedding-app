import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import HowItWorks from '../components/HowItWorks'
import Features from '../components/Features'
import ExamplesShowcase from '../components/ExamplesShowcase'

export default function Landing() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <ExamplesShowcase />

        <footer className="py-12 text-center" style={{ backgroundColor: '#213F99' }}>
          <p className="text-2xl font-bold text-white mb-2">
            My<span style={{ color: '#9F7A33' }}>Invitia</span>
          </p>
          <p className="text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>
            Invitaciones de boda digitales que enamoran
          </p>
          <p className="text-xs mt-6" style={{ color: 'rgba(255,255,255,0.35)' }}>
            © 2025 My Invitia. Hecho con ❤️
          </p>
        </footer>
      </main>
    </>
  )
}
