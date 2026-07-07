import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import ScrollToTop from './components/ScrollToTop'
import MAT201 from './pages/MAT201'
import MAT101 from './pages/MAT101'
import MAT102 from './pages/MAT102'
import NineTNC from './pages/NineTNC'
import NinePEM from './pages/NinePEM'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/mat201" replace />} />
        <Route path="/mat201" element={<MAT201 />} />
        <Route path="/mat101" element={<MAT101 />} />
        <Route path="/mat102" element={<MAT102 />} />
        <Route path="/9tnc" element={<NineTNC />} />
        <Route path="/9pem" element={<NinePEM />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <BackToTop />
    </>
  )
}
