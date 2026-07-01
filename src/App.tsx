import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useLayoutEffect } from 'react'
import Landing from './pages/Landing'
import Invitation from './pages/Invitation'

// Evita que el navegador restaure el scroll al navegar en SPA
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual'
}

function ScrollToTop() {
  const { pathname } = useLocation()
  useLayoutEffect(() => {
    const html = document.documentElement
    html.style.scrollBehavior = 'auto'
    html.scrollTop = 0
    document.body.scrollTop = 0
    html.style.scrollBehavior = ''
  }, [pathname])
  return null
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/invitation/:slug" element={<Invitation />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
