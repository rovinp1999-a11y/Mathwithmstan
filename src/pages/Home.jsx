import { useState } from 'react'
import { HomeHero } from '../components/Hero'
import { Users } from '../components/Icons'

/* ===== MAT201 Tab ===== */
function MAT201Tab() {
  return (
    <>
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
              {/* Term 1 */}
              <tr className="term-header"><td colSpan="4">Term 1 (10 Weeks)</td></tr>
              <tr><td>2</td><td>2–6 Feb <em className="note">(Waitangi Day)</em></td><td className="topic-cell" rowSpan="6">91259 2.4 Trigonometry<br /><span style={{ fontWeight: 400, fontSize: '0.78rem' }}>Including Trig Graphs</span></td><td></td></tr>
              <tr><td>3</td><td>9–13 Feb</td><td></td></tr>
              <tr><td>4</td><td>16–20 Feb</td><td></td></tr>
              <tr><td>5</td><td>23–27 Feb</td><td rowSpan="3" style={{ fontSize: '0.78rem' }}>Week 7 Internal Assessment<br />3 credits<br /><em>Resit before the end of term</em></td></tr>
              <tr><td>6</td><td>2–6 Mar</td></tr>
              <tr><td>7</td><td>9–13 Mar</td></tr>
              <tr><td>8</td><td>16–20 Mar</td><td className="topic-cell" rowSpan="3">91261 2.6 Algebra</td><td></td></tr>
              <tr><td>9</td><td>23–27 Mar</td><td></td></tr>
              <tr><td>10</td><td>30–3 Apr <em className="note">(Good Friday)</em></td><td></td></tr>

              {/* Term 2 */}
              <tr className="term-header"><td colSpan="4">Term 2 (11 Weeks)</td></tr>
              <tr><td>1</td><td>20–24 Apr</td><td className="topic-cell" rowSpan="3">91261 2.6 Algebra (cont)</td><td rowSpan="3" style={{ fontSize: '0.78rem' }}>Algebra Formative<br />(4 credits external)</td></tr>
              <tr><td>2</td><td>27–1 May <em className="note">(ANZAC Day)</em></td></tr>
              <tr><td>3</td><td>4–8 May</td></tr>
              <tr><td>4</td><td>11–15 May</td><td className="topic-cell">Other Graphs</td><td></td></tr>
              <tr><td>5</td><td>18–22 May</td><td className="topic-cell" rowSpan="6">91262 2.7 Calculus</td><td style={{ fontSize: '0.78rem' }}>Calculus Formative<br />(5 credits external)</td></tr>
              <tr><td>6</td><td>25–29 May</td><td></td></tr>
              <tr><td>7</td><td>1–5 Jun <em className="note">(King's Bday)</em></td><td></td></tr>
              <tr><td>8</td><td>8–12 Jun</td><td></td></tr>
              <tr><td>9</td><td>15–19 Jun</td><td></td></tr>
              <tr><td>10</td><td>22–26 Jun</td><td></td></tr>
              <tr><td>11</td><td>29–3 Jul</td><td className="topic-cell">91267 2.12 Probability</td><td></td></tr>

              {/* Term 3 */}
              <tr className="term-header"><td colSpan="4">Term 3 (10 Weeks)</td></tr>
              <tr><td>1</td><td>20–24 Jul</td><td className="topic-cell" rowSpan="2">91267 2.12 Probability (cont)</td><td></td></tr>
              <tr><td>2</td><td>27–31 Jul</td><td></td></tr>
              <tr><td>3</td><td>3–7 Aug</td><td className="topic-cell" rowSpan="2">Revision</td><td></td></tr>
              <tr><td>4</td><td>10–14 Aug</td><td></td></tr>
              <tr><td>5</td><td>17–21 Aug</td><td className="topic-cell">Senior exam week</td><td></td></tr>
              <tr><td>6</td><td>24–28 Aug</td><td className="topic-cell" style={{ fontSize: '0.78rem' }}>Monday and Tuesday still exams</td><td></td></tr>
              <tr><td>7</td><td>31 Aug–4 Sep</td><td className="topic-cell" rowSpan="2">91267 2.12 Probability (cont)</td><td style={{ fontSize: '0.78rem' }}>Probability Formative<br />(4 credits external)</td></tr>
              <tr><td>8</td><td>7–11 Sep</td><td></td></tr>
              <tr><td>9</td><td>14–18 Sep</td><td className="topic-cell" rowSpan="2">Revision</td><td></td></tr>
              <tr><td>10</td><td>21–25 Sep</td><td></td></tr>

              {/* Term 4 */}
              <tr className="term-header"><td colSpan="4">Term 4 (9.4 Weeks)</td></tr>
              <tr><td>1</td><td>12–16 Oct</td><td className="topic-cell" rowSpan="2">Revision</td><td></td></tr>
              <tr><td>2</td><td>19–23 Oct</td><td></td></tr>
              <tr><td>3</td><td>26–30 Oct <em className="note">(Labour Day)</em></td><td className="topic-cell">Senior Prizegiving</td><td></td></tr>
              <tr><td>4</td><td>2–6 Nov</td><td className="topic-cell" rowSpan="7">NCEA examinations</td><td></td></tr>
              <tr><td>5</td><td>9–13 Nov <em className="note">(Show Day)</em></td><td></td></tr>
              <tr><td>6</td><td>16–20 Nov</td><td></td></tr>
              <tr><td>7</td><td>23–27 Nov</td><td></td></tr>
              <tr><td>8</td><td>30 Nov–4 Dec</td><td></td></tr>
              <tr><td>9</td><td>7–11 Dec</td><td></td></tr>
              <tr><td>10</td><td>14–15 Dec</td><td></td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  )
}

/* ===== 9TNC Tab ===== */
function NineTNCTab() {
  return (
    <div className="tnc-panel">
      <div className="tnc-welcome">
        <div className="tnc-welcome-icon">🌟</div>
        <h2 className="tnc-welcome-title">Welcome, 9TNC!</h2>
        <p className="tnc-welcome-sub">Your class hub — resources, feedback, and skills practice all in one place.</p>
        <a
          href="https://classroom.google.com/c/ODE4ODU3MjA2NjYx?cjc=qojpugb3"
          target="_blank" rel="noopener noreferrer"
          className="tnc-btn"
        >
          <Users /> Our Google Classroom
        </a>
      </div>

      <div className="tnc-cards">
        <a href="/feedback" className="tnc-card">
          <div className="tnc-card-icon">📋</div>
          <div>
            <h3>Student Feedback</h3>
            <p>View your skills scores and personalised practice recommendations.</p>
          </div>
        </a>
        <div className="tnc-card tnc-card--soon">
          <div className="tnc-card-icon">📚</div>
          <div>
            <h3>Lesson Resources</h3>
            <p>Notes, worksheets and videos — coming soon as the term progresses.</p>
          </div>
        </div>
        <div className="tnc-card tnc-card--soon">
          <div className="tnc-card-icon">✏️</div>
          <div>
            <h3>Homework</h3>
            <p>Weekly homework tasks and due dates will appear here.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ===== Home Page ===== */
export default function Home() {
  const [activeClass, setActiveClass] = useState('mat201')

  return (
    <>
      <HomeHero />
      <main className="main">
        {/* Class tab switcher */}
        <div className="class-tabs">
          <button
            className={`class-tab-btn${activeClass === 'mat201' ? ' class-tab-active' : ''}`}
            onClick={() => setActiveClass('mat201')}
          >
            MAT201
          </button>
          <button
            className={`class-tab-btn class-tab-btn--tnc${activeClass === '9tnc' ? ' class-tab-active class-tab-active--tnc' : ''}`}
            onClick={() => setActiveClass('9tnc')}
          >
            9TNC
          </button>
        </div>

        {activeClass === 'mat201' ? <MAT201Tab /> : <NineTNCTab />}
      </main>
    </>
  )
}
