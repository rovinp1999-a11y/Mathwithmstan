import { useState } from 'react'
import { ChevronDown, ExternalLink } from './Icons'

export default function Collapsible({ title, links }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`collapsible${open ? ' open' : ''}`} style={{ marginTop: '1rem' }}>
      <button
        className="collapsible-header"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        {title}
        <ChevronDown />
      </button>
      <div className="collapsible-body" role="region">
        <div className="link-list">
          {links.map((link, i) => (
            <a key={i} href={link.href} target="_blank" rel="noopener noreferrer" className="link-item">
              <ExternalLink />
              {link.text}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
