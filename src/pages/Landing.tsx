import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import HowItWorks from '../components/HowItWorks'
import Features from '../components/Features'
import ExamplesShowcase from '../components/ExamplesShowcase'
import Pricing from '../components/Pricing'
import GoldenDivider from '../components/GoldenDivider'

export default function Landing() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />

        {/* Hero → HowItWorks */}
        <div style={{ background: 'linear-gradient(90deg, #F2D4D6 0%, #FBF0DC 50%, #F2D4D6 100%)', padding: '32px 0' }}>
          <GoldenDivider />
        </div>

        <HowItWorks />

        {/* HowItWorks → Features */}
        <div style={{ background: 'linear-gradient(90deg, #F2D4D6 0%, #FBF0DC 50%, #F2D4D6 100%)', padding: '32px 0' }}>
          <GoldenDivider />
        </div>

        <Features />

        {/* Features → ExamplesShowcase */}
        <div style={{ background: 'linear-gradient(90deg, #F2D4D6 0%, #FBF0DC 50%, #F2D4D6 100%)', padding: '32px 0' }}>
          <GoldenDivider />
        </div>

        <ExamplesShowcase />

        <div style={{ background: 'linear-gradient(90deg, #F2D4D6 0%, #FBF0DC 50%, #F2D4D6 100%)', padding: '32px 0' }}>
          <GoldenDivider />
        </div>

        <Pricing />

        <div style={{ background: 'linear-gradient(90deg, #F2D4D6 0%, #FBF0DC 50%, #F2D4D6 100%)', padding: '32px 0' }}>
          <GoldenDivider />
        </div>

        <footer
          className="text-center relative overflow-hidden"
          style={{ background: 'linear-gradient(160deg, #060B1C 0%, #0C1440 100%)', paddingTop: '56px', paddingBottom: '48px' }}
        >
          {[...Array(20)].map((_, i) => (
            <div key={i} style={{
              position: 'absolute',
              width: i % 4 === 0 ? '2px' : '1px',
              height: i % 4 === 0 ? '2px' : '1px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255,255,255,0.7)',
              top: `${(i * 41 + 13) % 100}%`,
              left: `${(i * 67 + 9) % 100}%`,
              opacity: 0.3 + (i % 3) * 0.2,
            }} />
          ))}

          <div className="relative z-10" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
            <p className="text-2xl font-bold" style={{ color: '#F5EDD5' }}>
              My<span style={{ color: '#9F7A33' }}>Invitia</span>
            </p>
            <p className="text-sm" style={{ color: 'rgba(245,237,213,0.5)' }}>
              Invitaciones digitales que enamoran
            </p>
            <div style={{ margin: '16px auto', maxWidth: '320px', width: '100%' }}>
              <GoldenDivider dark />
            </div>
            <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
              <Link to="/aviso-privacidad" style={{ color: 'rgba(245,237,213,0.4)', fontSize: '12px', textDecoration: 'none' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'rgba(196,154,60,0.8)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(245,237,213,0.4)')}
              >Aviso de Privacidad</Link>
              <span style={{ color: 'rgba(196,154,60,0.25)', fontSize: '12px' }}>·</span>
              <Link to="/terminos" style={{ color: 'rgba(245,237,213,0.4)', fontSize: '12px', textDecoration: 'none' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'rgba(196,154,60,0.8)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(245,237,213,0.4)')}
              >Términos y Condiciones</Link>
            </div>
            <p className="text-xs" style={{ color: 'rgba(159,122,51,0.4)' }}>
              © 2026 My Invitia · Hecho con ✦
            </p>
          </div>
        </footer>
      </main>
    </>
  )
}
