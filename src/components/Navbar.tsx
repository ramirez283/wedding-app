import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import logoImg from '../assets/icons/my-invitia-2.png'

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Cómo funciona', href: '#como-funciona' },
  { label: 'Características', href: '#caracteristicas' },
  { label: 'Ejemplos', href: '#ejemplos' },
]

function InstagramIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? '#ffffff' : 'rgba(242,212,214,0.95)',
        backdropFilter: 'blur(12px)',
        borderBottom: `1px solid ${scrolled ? '#F2D4D6' : 'rgba(225,176,172,0.5)'}`,
        boxShadow: scrolled ? '0 2px 16px rgba(33,63,153,0.08)' : 'none',
      }}
    >
      <nav className="w-full h-16 px-8 lg:px-16 flex items-center justify-between md:justify-center relative">
        {/* Desktop: todo centrado en una fila */}
        <ul className="hidden md:flex items-center gap-8">
          {/* Logo */}
          <li>
            <button
              onClick={() => handleNavClick('#inicio')}
              className="transition-opacity hover:opacity-80"
            >
              <img src={logoImg} alt="My Invitia" style={{ height: '48px', mixBlendMode: 'multiply' }} />
            </button>
          </li>

          {/* Nav links */}
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-medium transition-opacity hover:opacity-70 whitespace-nowrap"
                style={{ color: '#213F99' }}
              >
                {link.label}
              </button>
            </li>
          ))}

          {/* Instagram */}
          <li>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="transition-opacity hover:opacity-70 flex items-center"
              style={{ color: '#213F99' }}
            >
              <InstagramIcon />
            </a>
          </li>
        </ul>

        {/* Mobile: logo centrado absolutamente */}
        <div className="md:hidden absolute left-0 right-0 flex justify-center pointer-events-none">
          <button
            onClick={() => handleNavClick('#inicio')}
            className="transition-opacity hover:opacity-80 pointer-events-auto"
          >
            <img src={logoImg} alt="My Invitia" style={{ height: '42px', mixBlendMode: 'multiply' }} />
          </button>
        </div>
        <button
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          className="flex md:hidden w-9 h-9 flex-col justify-center items-center gap-1.5 rounded-lg transition-colors"
          style={{ backgroundColor: menuOpen ? 'rgba(33,63,153,0.1)' : 'transparent' }}
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
            className="block w-5 h-0.5 rounded-full origin-center"
            style={{ backgroundColor: '#213F99' }}
          />
          <motion.span
            animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.15 }}
            className="block w-5 h-0.5 rounded-full"
            style={{ backgroundColor: '#213F99' }}
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
            className="block w-5 h-0.5 rounded-full origin-center"
            style={{ backgroundColor: '#213F99' }}
          />
        </button>
      </nav>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22 }}
            className="md:hidden overflow-hidden"
            style={{
              backgroundColor: 'rgba(242,212,214,0.97)',
              borderTop: '1px solid rgba(225,176,172,0.4)',
            }}
          >
            <ul className="px-8 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="w-full text-left px-4 py-3 text-sm font-medium rounded-xl transition-colors"
                    style={{ color: '#213F99' }}
                    onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'rgba(33,63,153,0.08)')}
                    onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
