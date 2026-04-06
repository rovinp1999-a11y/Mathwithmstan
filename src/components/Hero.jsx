import MathSymbols from './MathSymbols'

export function HomeHero() {
  return (
    <header className="hero">
      <MathSymbols count={35} />
      <div className="hero-content">
        <img src="/logo-banner.png" alt="Math with Ms Tan" className="hero-logo" />
      </div>
    </header>
  )
}

export function PageHero({ title, subtitle }) {
  return (
    <header className="page-hero">
      <MathSymbols count={20} />
      <div className="hero-content">
        <h1>{title}</h1>
        {subtitle && <p className="subtitle">{subtitle}</p>}
      </div>
    </header>
  )
}
