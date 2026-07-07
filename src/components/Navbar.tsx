import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import logoImg from '../assets/icons/my-invitia-2.png'

const navLinks = [
  {
    label: 'Inicio', href: '#inicio',
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>,
  },
  {
    label: 'Cómo funciona', href: '#como-funciona',
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>,
  },
  {
    label: 'Características', href: '#caracteristicas',
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>,
  },
  {
    label: 'Ejemplos', href: '#ejemplos',
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>,
  },
  {
    label: 'Precios', href: '#precios',
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A2 2 0 013 12V7a4 4 0 014-4z" /></svg>,
  },
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
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <>
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

    </header>

    {/* Drawer fuera del header via portal para evitar clipping de backdrop-filter */}
    {createPortal(
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              style={{ background: 'rgba(6,11,28,0.55)', backdropFilter: 'blur(2px)' }}
              onClick={() => setMenuOpen(false)}
            />

            <motion.div
              className="fixed top-0 left-0 h-screen z-50 flex flex-col"
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              style={{
                width: '85vw',
                maxWidth: '340px',
                background: '#FDFAF9',
                boxShadow: '8px 0 48px rgba(33,63,153,0.18)',
              }}
            >
              {/* Header con logo centrado */}
              <div
                className="relative flex flex-col items-center justify-center pt-10 pb-7"
                style={{ background: 'linear-gradient(160deg, #F2D4D6 0%, #FBF0DC 100%)' }}
              >
                <button
                  onClick={() => setMenuOpen(false)}
                  className="absolute right-4 top-4 w-8 h-8 flex items-center justify-center rounded-full"
                  style={{ backgroundColor: 'rgba(33,63,153,0.1)', color: '#213F99' }}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <img src={logoImg} alt="My Invitia" style={{ height: '150px', mixBlendMode: 'multiply' }} />
                {/* <p className="text-xs mt-2" style={{ color: 'rgba(33,63,153,0.45)', letterSpacing: '0.08em' }}>Invitaciones digitales</p> */}
              </div>

              {/* Separador dorado */}
              <div style={{ height: '1.5px', background: 'linear-gradient(90deg, transparent, #C49A3C 30%, #C49A3C 70%, transparent)' }} />

              {/* Links */}
              <nav style={{ padding: '32px 20px 32px 20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: i * 0.07 }}
                    onClick={() => handleNavClick(link.href)}
                    className="w-full flex items-center rounded-2xl text-left transition-all duration-150"
                    style={{ color: '#213F99', gap: '16px', padding: '18px 20px 18px 28px' }}
                    onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'rgba(225,176,172,0.2)')}
                    onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
                  >
                    <span
                      className="w-9 h-9 flex items-center justify-center rounded-xl flex-shrink-0"
                      style={{ backgroundColor: 'rgba(159,122,51,0.1)', color: '#9F7A33' }}
                    >
                      {link.icon}
                    </span>
                    <span className="text-base font-semibold">{link.label}</span>
                    <svg className="w-4 h-4 ml-auto opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.button>
                ))}
              </nav>

              {/* Instagram centrado debajo de los links */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2, delay: 0.32 }}
                className="flex flex-col items-center gap-3 px-6 pt-2 pb-6"
              >
                <div style={{ height: '1px', width: '100%', background: 'linear-gradient(90deg, transparent, rgba(196,154,60,0.45), transparent)', marginBottom: '8px' }} />
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 transition-opacity hover:opacity-70"
                  style={{ color: '#213F99' }}
                >
                  <span
                    className="w-12 h-12 flex items-center justify-center rounded-2xl"
                    style={{ backgroundColor: 'rgba(225,176,172,0.25)', border: '1px solid rgba(225,176,172,0.5)' }}
                  >
                    <InstagramIcon />
                  </span>
                  <span className="text-xs font-medium" style={{ color: 'rgba(33,63,153,0.5)' }}>@myinvitia</span>
                </a>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>,
      document.body
    )}
    </>
  )
}
