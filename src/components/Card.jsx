const variantStyles = {
  red: { borderTop: '4px solid #d04a4a' },
  blue: { borderTop: '4px solid #4a6bd0' },
}

export default function Card({ title, note, links, variant }) {
  return (
    <div className="card" style={variant ? variantStyles[variant] : undefined}>
      <h3>{title}</h3>
      {note && <p className="note">{note}</p>}
      <div className="card-links">
        {links.map((link, i) => (
          <a key={i} href={link.href} target="_blank" rel="noopener noreferrer" className="card-link">
            {link.icon}
            {link.text}
          </a>
        ))}
      </div>
    </div>
  )
}
