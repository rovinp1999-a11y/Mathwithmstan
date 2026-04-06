import { HomeHero } from '../components/Hero'
import { Users } from '../components/Icons'

export default function Home() {
  return (
    <>
      <HomeHero />
      <main className="main">
        <div className="btn-row">
          <a href="https://classroom.google.com/c/ODE4ODU3MjA2NjYx?cjc=qojpugb3" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            <Users /> Our Google Classroom
          </a>
        </div>

        <section className="section">
          <h2 className="section-title">2026 Programme</h2>
          <div className="table-scroll">
          <table className="programme-table">
            <thead>
              <tr>
                <th style={{ width: 50 }}>Wk</th>
                <th>Date</th>
                <th>Topic</th>
                <th>Assessment</th>
              </tr>
            </thead>
            <tbody>
              <tr className="term-header"><td colSpan="4">Term 1 (10 Weeks)</td></tr>
              <tr><td>2</td><td>2–6 Feb <em className="note">(Waitangi Day)</em></td><td className="topic-cell" rowSpan="2">91259 2.4 Trigonometry<br /><span style={{ fontWeight: 400, fontSize: '0.78rem' }}>Including Trig Graphs</span></td><td></td></tr>
              <tr><td>3</td><td>9–13 Feb</td><td></td></tr>
              <tr><td>4</td><td>16–20 Feb</td><td></td><td></td></tr>
              <tr><td>5</td><td>23–27 Feb</td><td></td><td rowSpan="3" style={{ fontSize: '0.78rem' }}>Week 7 Internal Assessment<br />3 credits<br /><em>Resit before the end of term</em></td></tr>
              <tr><td>6</td><td>2–6 Mar</td><td></td></tr>
              <tr><td>7</td><td>9–13 Mar</td><td></td></tr>
              <tr><td>8</td><td>16–20 Mar</td><td className="topic-cell" rowSpan="3">91261 2.6 Algebra</td><td></td></tr>
              <tr><td>9</td><td>23–27 Mar</td><td></td></tr>
              <tr><td>10</td><td>30–3 Apr <em className="note">(Good Friday)</em></td><td></td></tr>

              <tr className="term-header"><td colSpan="4">Term 2 (11 Weeks)</td></tr>
              <tr><td>1</td><td>20–24 Apr</td><td className="topic-cell" rowSpan="3">91261 2.6 Algebra (cont)</td><td rowSpan="3" style={{ fontSize: '0.78rem' }}>Algebra Formative<br />(4 credits external)</td></tr>
              <tr><td>2</td><td>27–1 May <em className="note">(ANZAC Day)</em></td></tr>
              <tr><td>3</td><td>4–8 May</td></tr>
              <tr><td>4</td><td>11–15 May</td><td className="topic-cell">Other Graphs</td><td></td></tr>
              <tr><td>5</td><td>18–22 May</td><td></td><td></td></tr>
              <tr><td>6</td><td>25–29 May</td><td className="topic-cell" rowSpan="2">91262 2.7 Calculus</td><td></td></tr>
              <tr><td>7</td><td>1–5 Jun <em className="note">(King's Bday)</em></td><td></td></tr>
            </tbody>
          </table>
          </div>
        </section>
      </main>
    </>
  )
}
