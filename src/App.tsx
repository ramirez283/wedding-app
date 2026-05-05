import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Invitation from './pages/Invitation'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/invitation/:slug" element={<Invitation />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
