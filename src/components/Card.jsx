export default function Card({ title, note, links }) {
  return (
    <div className="card">
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
