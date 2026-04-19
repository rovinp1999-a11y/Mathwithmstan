import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu } from './Icons'

const navItems = [
  { label: 'MAT201', to: '/mat201', cls: 'nav-mat201' },
  { label: 'MAT101', to: '/mat101', cls: 'nav-mat101' },
  { label: 'MAT102', to: '/mat102', cls: 'nav-mat102' },
  { label: '9TNC',   to: '/9tnc',   cls: 'nav-9tnc'   },
  { label: '9PEM',   to: '/9pem',   cls: 'nav-9pem'   },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const navRef = useRef(null)

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
        <Link to="/mat201" className="nav-brand">Math with Ms Tan</Link>
        <button className="nav-toggle" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          <Menu />
        </button>
        <ul className={`nav-links${open ? ' open' : ''}`}>
          {navItems.map(item => (
            <li key={item.to}>
              <Link
                to={item.to}
                className={[item.cls, pathname === item.to ? 'active' : ''].filter(Boolean).join(' ')}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
