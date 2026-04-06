import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Trigonometry from './pages/Trigonometry'
import Algebra from './pages/Algebra'
import Calculus from './pages/Calculus'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trigonometry" element={<Trigonometry />} />
        <Route path="/algebra" element={<Algebra />} />
        <Route path="/calculus" element={<Calculus />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <BackToTop />
    </>
  )
}
