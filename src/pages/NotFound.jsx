import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <main className="main">
      <div className="not-found">
        <h1>404</h1>
        <p>The page you're looking for doesn't exist or has been moved.</p>
        <Link to="/" className="btn btn-primary">Back to Home</Link>
      </div>
    </main>
  )
}
