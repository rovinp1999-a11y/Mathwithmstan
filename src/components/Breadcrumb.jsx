import { Link } from 'react-router-dom'

export default function Breadcrumb({ items }) {
  return (
    <nav className="breadcrumb" aria-label="Breadcrumb">
      {items.map((item, i) => (
        <span key={i}>
          {i > 0 && <span className="sep" style={{ marginRight: '0.35rem' }}>/</span>}
          {item.to
            ? <Link to={item.to}>{item.label}</Link>
            : <span aria-current="page">{item.label}</span>
          }
        </span>
      ))}
    </nav>
  )
}
