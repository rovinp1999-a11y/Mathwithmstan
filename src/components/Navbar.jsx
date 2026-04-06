import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu } from './Icons'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Trigonometry', to: '/trigonometry' },
  { label: 'Algebra', to: '/algebra' },
  { label: 'Calculus', to: '/calculus' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const navRef = useRef(null)

  const isActive = (to) => {
    if (to === '/') return pathname === '/'
    return pathname.startsWith(to)
  }

  useEffect(() => {
    const handler = (e) => {
      if (open && navRef.current && !navRef.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [open])

  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <nav className="nav" ref={navRef}>
      <div className="nav-inner">
        <Link to="/" className="nav-brand">CHS MAT201</Link>
        <button className="nav-toggle" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          <Menu />
        </button>
        <ul className={`nav-links${open ? ' open' : ''}`}>
          {navItems.map(item => (
            <li key={item.to}>
              <Link to={item.to} className={isActive(item.to) ? 'active' : ''}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
