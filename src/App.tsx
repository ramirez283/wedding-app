import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        {/* Fase 4: página de invitación */}
        {/* <Route path="/invitation/:id" element={<Invitation />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
