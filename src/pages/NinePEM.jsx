export default function NinePEM() {
  return (
    <>
      <header className="cls-hero cls-hero--9pem">
        <div className="cls-hero-inner">
          <p className="cls-hero-label">Year 9 Mathematics</p>
          <h1 className="cls-hero-title">9PEM</h1>
          <p className="cls-hero-sub">Cashmere High School</p>
        </div>
      </header>
      <main className="main">
        <div className="cls-panel cls-panel--9pem">
          <div className="cls-welcome-row">
            <div className="cls-welcome-text">
              <h2 className="cls-panel-title">Welcome, 9PEM!</h2>
              <p className="cls-panel-sub">Your class resources are being set up. Check back soon as content is added throughout the year.</p>
            </div>
            <a href="#" className="cls-btn cls-btn--9pem">Our Google Classroom</a>
          </div>
          <div className="cls-cards">
            <div className="cls-card cls-card--soon">
              <div className="cls-card-icon">📐</div>
              <div>
                <h3>Lesson Resources</h3>
                <p>Notes, worksheets and videos coming soon.</p>
              </div>
            </div>
            <div className="cls-card cls-card--soon">
              <div className="cls-card-icon">📋</div>
              <div>
                <h3>Student Feedback</h3>
                <p>Skills scores and practice recommendations coming soon.</p>
              </div>
            </div>
            <div className="cls-card cls-card--soon">
              <div className="cls-card-icon">✏️</div>
              <div>
                <h3>Homework</h3>
                <p>Weekly homework tasks and due dates will appear here.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
