import { useState, useRef } from 'react'
import { PageHero } from '../components/Hero'
import Breadcrumb from '../components/Breadcrumb'
import Tabs from '../components/Tabs'

/* ===== STUDENT FEEDBACK DATA ===== */
const SKILLS = [
  "Area of Triangle & Parallelogram",
  "Area of Trapezium",
  "Composite Rectangle",
  "Circle",
  "Pythagoras",
  "Unit Conversion",
  "Reverse Area",
  "Collec Like Term"
]

const FROST_CODES = {
  "Area of Triangle & Parallelogram": "139, 140",
  "Area of Trapezium": "184 a, b",
  "Composite Rectangle": "181",
  "Circle": "209",
  "Pythagoras": "288a",
  "Unit Conversion": "120",
  "Reverse Area": "133",
  "Collec Like Term": "150"
}

const FROST_URLS = {
  "Area of Triangle & Parallelogram": "https://www.drfrostmaths.com/homework/do-homework.php?aaid=139",
  "Area of Trapezium": "https://www.drfrostmaths.com/homework/do-homework.php?aaid=184",
  "Composite Rectangle": "https://www.drfrostmaths.com/homework/do-homework.php?aaid=181",
  "Circle": "https://www.drfrostmaths.com/homework/do-homework.php?aaid=209",
  "Pythagoras": "https://www.drfrostmaths.com/homework/do-homework.php?aaid=288",
  "Unit Conversion": "https://www.drfrostmaths.com/homework/do-homework.php?aaid=120",
  "Reverse Area": "https://www.drfrostmaths.com/homework/do-homework.php?aaid=133",
  "Collec Like Term": "https://www.drfrostmaths.com/homework/do-homework.php?aaid=150",
}

const STUDENTS = [
  { name: "Anieke",  scores: [3,1,1,1,1,2,1,1], total: 4 },
  { name: "Annie",   scores: [3,1,1,2,3,3,3,2], total: 10 },
  { name: "Ariana",  scores: [2,3,1,2,1,2,2,2], total: 8 },
  { name: "Caleb",   scores: [3,1,1,2,3,2,2,3], total: 9 },
  { name: "Edward",  scores: [2,3,1,2,3,1,1,3], total: 8 },
  { name: "Hanna",   scores: [3,3,3,3,3,3,3,3], total: 15 },
  { name: "Harper",  scores: [3,1,1,2,3,1,2,1], total: 6 },
  { name: "Henry",   scores: [2,3,3,2,1,1,2,2], total: 7 },
  { name: "Hollie",  scores: [2,1,1,1,2,1,1,1], total: 3 },
  { name: "Imogen",  scores: [3,3,1,3,3,3,3,2], total: 12 },
  { name: "Isla",    scores: [3,3,3,2,3,3,3,3], total: 13 },
  { name: "Jack",    scores: [2,3,1,1,1,2,1,3], total: 7 },
  { name: "Jadon",   scores: [3,3,1,2,1,2,2,2], total: 9 },
  { name: "Joshua",  scores: [2,1,3,3,2,3,2,2], total: 9 },
  { name: "Joy",     scores: [2,3,1,2,1,2,2,1], total: 6 },
  { name: "Leiya",   scores: [3,1,1,2,1,1,3,2], total: 7 },
  { name: "Luca",    scores: [2,1,1,3,1,2,2,3], total: 8 },
  { name: "Mathew",  scores: [2,1,1,2,1,1,1,2], total: 3 },
  { name: "Meah",    scores: [2,1,1,1,1,1,2,1], total: 3 },
  { name: "Oscar",   scores: [3,1,1,3,3,3,3,3], total: 13 },
  { name: "Skye",    scores: [2,3,1,1,1,2,1,3], total: 7 },
  { name: "Te Paea", scores: [3,3,1,2,1,2,2,2], total: 8 },
  { name: "Tom",     scores: [2,3,1,2,1,1,2,1], total: 6 }
]

/* ===== YEAR 9 SKILLS CHECKLIST DATA ===== */
const CHECKLIST_SKILLS = [
  { name: 'Unit Conversions (Length)', desc: 'Convert between mm, cm, m, and km.', code: '107', url: 'https://www.drfrostmaths.com/homework/do-homework.php?aaid=107' },
  { name: 'Unit Conversions (Area & Volume)', desc: 'Convert units such as cm\u00B2 to m\u00B2 etc.', code: '323', formula: '/formulas/image5.png', url: 'https://www.drfrostmaths.com/homework/do-homework.php?aaid=323' },
  { name: 'Perimeter & Area (Rectilinear)', desc: 'Calculate the total perimeter and internal space of composite L-shapes.', code: '181', url: 'https://www.drfrostmaths.com/homework/do-homework.php?aaid=181' },
  { name: 'Area of Triangles', desc: 'Use A = \u00BDbh correctly for all triangle types.', code: '140', formula: '/formulas/image1.png', url: 'https://www.drfrostmaths.com/homework/do-homework.php?aaid=140' },
  { name: 'Area of Special Quadrilaterals', desc: 'Calculate area for Parallelograms (A = bh) and Trapeziums.', code: '139, 184a,b', formula: '/formulas/image4.png', url: 'https://www.drfrostmaths.com/homework/do-homework.php?aaid=139' },
  { name: 'Circumference of a Circle', desc: 'Calculate C = \u03C0d or C = 2\u03C0r.', code: '209', formula: '/formulas/image3.png', url: 'https://www.drfrostmaths.com/homework/do-homework.php?aaid=209' },
  { name: 'Perimeter of Semicircles/Quarters', desc: 'Calculate the arc length (\u00BD C or \u00BC C) plus the straight edges.', code: '211b', url: 'https://www.drfrostmaths.com/homework/do-homework.php?aaid=211' },
  { name: 'Pythagoras\' Theorem (Hypotenuse)', desc: 'Find the longest side using a\u00B2 + b\u00B2 = c\u00B2.', code: '288a', formula: '/formulas/image2.png', url: 'https://www.drfrostmaths.com/homework/do-homework.php?aaid=288' },
  { name: 'Algebra: Collecting Like Terms', desc: 'Simplify expressions by grouping terms with the same variables/powers.', code: '193', url: 'https://www.drfrostmaths.com/homework/do-homework.php?aaid=193' },
  { name: 'Working Backwards (Geometry)', desc: 'Find the missing height or base when given the total Area.', code: '140b, 184b, 139c', url: 'https://www.drfrostmaths.com/homework/do-homework.php?aaid=140' },
  { name: 'Volume', desc: 'Volume of cuboid or prisms given the cross-sectional area. V = Area x length.', code: '145, 231a,b', url: 'https://www.drfrostmaths.com/homework/do-homework.php?aaid=145' },
  { name: 'Substitution', desc: 'Replacing the variables in an algebraic expression.', code: '136, 196, 197', url: 'https://www.drfrostmaths.com/homework/do-homework.php?aaid=136' },
]

/* ===== HELPERS ===== */
function pillClass(total) {
  if (total >= 12) return 'fb-pill-high'
  if (total >= 7) return 'fb-pill-mid'
  return 'fb-pill-low'
}
function scoreClass(s) { return s === 3 ? 'fb-score-3' : s === 2 ? 'fb-score-2' : 'fb-score-1' }
function feedbackText(s) { return s === 3 ? 'Excellent -- well done!' : s === 2 ? 'Good effort -- a bit more practice needed.' : 'Needs improvement -- see practice tasks below.' }

/* ===== STUDENT CARD (for Student Reports tab) ===== */
function StudentCard({ student }) {
  const weakSkills = SKILLS.map((sk, i) => ({ skill: sk, score: student.scores[i], code: FROST_CODES[sk], url: FROST_URLS[sk] })).filter(x => x.score < 3)
  return (
    <div className="fb-card">
      <div className="fb-card-header">
        <h2>{student.name}</h2>
        <span className={`fb-total ${pillClass(student.total)}`}>{student.total} / 15</span>
      </div>
      <div className="table-scroll" style={{ marginTop: 0 }}>
        <table className="fb-table">
          <thead><tr><th>Skill</th><th>Score</th><th>Feedback</th></tr></thead>
          <tbody>
            {SKILLS.map((sk, i) => (
              <tr key={sk}>
                <td className="fb-skill-name">{sk}</td>
                <td style={{ textAlign: 'center' }}><span className={`fb-score-badge ${scoreClass(student.scores[i])}`}>{student.scores[i]}</span></td>
                <td className="fb-feedback-text">{feedbackText(student.scores[i])}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {weakSkills.length > 0 && (
        <div className="fb-needs-work">
          <h3>Skills to Work On</h3>
          <div className="fb-needs-list">
            {weakSkills.map(w => (
              <div className="fb-needs-item" key={w.skill}>
                <span className={`fb-score-badge ${scoreClass(w.score)}`}>{w.score}</span>
                <span className="fb-needs-skill">{w.skill}</span>
                <a href={w.url} target="_blank" rel="noopener noreferrer" className="fb-frost-code fb-frost-link">Dr. Frost: {w.code}</a>
              </div>
            ))}
          </div>
          <div className="fb-frost-note">Click on the Dr. Frost codes above to go directly to the practice page!</div>
        </div>
      )}
    </div>
  )
}

/* ===== STUDENT FEEDBACK TAB ===== */
function StudentFeedback() {
  const [selected, setSelected] = useState('')

  return (
    <div>
      <select
        className="fb-select"
        value={selected}
        onChange={e => setSelected(e.target.value)}
      >
        <option value="">-- Select your name --</option>
        {STUDENTS.map(s => (
          <option key={s.name} value={s.name}>{s.name}</option>
        ))}
      </select>
      <div className="fb-content" style={{ marginTop: '1.25rem' }}>
        {selected ? (
          <StudentCard student={STUDENTS.find(s => s.name === selected)} />
        ) : (
          <div className="fb-welcome">
            <div className="fb-welcome-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" />
                <rect x="9" y="3" width="6" height="4" rx="1" />
                <path d="M9 14l2 2 4-4" />
              </svg>
            </div>
            <h2>Select a Student</h2>
            <p>Choose a name from the dropdown to view their feedback report and practice recommendations.</p>
          </div>
        )}
      </div>
    </div>
  )
}

/* ===== SKILLS CHECKLIST TAB ===== */
function SkillsChecklist() {
  const [ratings, setRatings] = useState({})
  const [selectedName, setSelectedName] = useState('')
  const [showReport, setShowReport] = useState(false)
  const reportRef = useRef(null)

  const setRating = (idx, val) => setRatings(prev => ({ ...prev, [idx]: val }))
  const allRated = Object.keys(ratings).length === CHECKLIST_SKILLS.length
  const student = STUDENTS.find(s => s.name === selectedName)

  const handleGenerate = () => {
    if (selectedName && student) setShowReport(true)
  }

  const handlePrint = () => {
    const el = reportRef.current
    if (!el) return
    const w = window.open('', '_blank')
    w.document.write(`<!DOCTYPE html><html><head><title>Report - ${selectedName}</title>
      <style>
        * { margin:0; padding:0; box-sizing:border-box; }
        body { font-family: 'Nunito', Arial, sans-serif; padding: 2rem; color: #1a1a2e; }
        h1 { font-size: 1.6rem; margin-bottom: 0.25rem; }
        .badge { display:inline-block; padding:2px 12px; border-radius:12px; font-weight:700; font-size:0.85rem; margin-left:8px; }
        .high { background:#c6efce; color:#006100; }
        .mid { background:#ffeb9c; color:#9c6500; }
        .low { background:#ffc7ce; color:#9c0006; }
        h2 { font-size:1.1rem; margin:1.5rem 0 0.5rem; padding-bottom:0.3rem; border-bottom:2px solid #2e75b6; color:#2e75b6; }
        table { width:100%; border-collapse:collapse; margin:0.5rem 0 1rem; font-size:0.85rem; }
        th { background:#2e75b6; color:white; padding:8px 10px; text-align:left; }
        td { padding:8px 10px; border-bottom:1px solid #e8e8e8; }
        .score { display:inline-block; width:28px; height:28px; line-height:28px; text-align:center; border-radius:50%; font-weight:700; font-size:0.85rem; }
        .s3 { background:#c6efce; color:#006100; }
        .s2 { background:#ffeb9c; color:#9c6500; }
        .s1 { background:#ffc7ce; color:#9c0006; }
        .item { display:flex; align-items:center; gap:10px; padding:6px 0; border-bottom:1px solid #f0f0f0; font-size:0.85rem; }
        .item:last-child { border-bottom:none; }
        .skill-name { flex:1; font-weight:600; }
        .code { font-family:monospace; font-weight:700; color:#2e75b6; background:#ebf4ff; padding:2px 10px; border-radius:4px; }
        .note { background:#ebf4ff; padding:10px 14px; border-radius:6px; color:#2e75b6; font-size:0.82rem; margin-top:0.75rem; }
        .section-box { border-left:3px solid #2e75b6; padding:0.75rem 1rem; margin:0.5rem 0; background:#f8fbff; border-radius:6px; }
        .section-box.warn { border-left-color:#e53e3e; background:#fff5f5; }
        .section-box h3 { font-size:0.95rem; margin-bottom:0.5rem; }
        .footer { margin-top:1.5rem; font-size:0.75rem; color:#999; text-align:center; }
        a { color:#2e75b6; }
      </style></head><body>`)

    const bc = (t) => t >= 12 ? 'high' : t >= 7 ? 'mid' : 'low'
    const sc = (s) => s === 3 ? 's3' : s === 2 ? 's2' : 's1'
    const teacherWeak = SKILLS.map((sk, i) => ({ skill: sk, score: student.scores[i], code: FROST_CODES[sk], url: FROST_URLS[sk] })).filter(x => x.score < 3)
    const selfWeak = CHECKLIST_SKILLS.filter((_, i) => ratings[i] !== 'confident')

    w.document.write(`<h1>${student.name} <span class="badge ${bc(student.total)}">${student.total}/15</span></h1>`)
    w.document.write(`<p style="color:#666;font-size:0.85rem">Year 9 Mathematics - Term 1 Skills Report</p>`)

    // Teacher scores table
    w.document.write(`<h2>Teacher Assessment</h2><table><tr><th>Skill</th><th style="text-align:center;width:70px">Score</th></tr>`)
    SKILLS.forEach((sk, i) => {
      w.document.write(`<tr><td>${sk}</td><td style="text-align:center"><span class="score ${sc(student.scores[i])}">${student.scores[i]}</span></td></tr>`)
    })
    w.document.write(`</table>`)

    // Teacher weak skills
    if (teacherWeak.length > 0) {
      w.document.write(`<div class="section-box warn"><h3>Teacher: Skills to Work On</h3>`)
      teacherWeak.forEach(s => {
        w.document.write(`<div class="item"><span class="score ${sc(s.score)}">${s.score}</span><span class="skill-name">${s.skill}</span><a href="${s.url}" class="code">Dr. Frost: ${s.code}</a></div>`)
      })
      w.document.write(`</div>`)
    }

    // Self-assessment weak skills
    if (selfWeak.length > 0) {
      w.document.write(`<div class="section-box" style="margin-top:1rem"><h3>Self-Assessment: Skills to Practise</h3>`)
      selfWeak.forEach(s => {
        const r = ratings[CHECKLIST_SKILLS.indexOf(s)]
        w.document.write(`<div class="item"><span class="score ${r === 'help' ? 's1' : 's2'}">${r === 'help' ? '!' : '~'}</span><span class="skill-name">${s.name}</span><a href="${s.url}" class="code">Dr. Frost: ${s.code}</a></div>`)
      })
      w.document.write(`</div>`)
    }

    w.document.write(`<div class="note">Click the Dr. Frost codes or go to <strong>drfrostmaths.com</strong> and enter the codes to start practising!</div>`)
    w.document.write(`<div class="footer">Math with Ms Tan - CHS MAT201 - Generated ${new Date().toLocaleDateString()}</div>`)
    w.document.write(`</body></html>`)
    w.document.close()
    w.print()
  }

  const handleReset = () => {
    setRatings({})
    setSelectedName('')
    setShowReport(false)
  }

  // ===== REPORT VIEW =====
  if (showReport && student) {
    const teacherWeak = SKILLS.map((sk, i) => ({ skill: sk, score: student.scores[i], code: FROST_CODES[sk], url: FROST_URLS[sk] })).filter(x => x.score < 3)
    const selfWeak = CHECKLIST_SKILLS.filter((_, i) => ratings[i] !== 'confident')

    return (
      <div className="fb-card" ref={reportRef}>
        <div className="fb-card-header">
          <h2>{student.name}'s Report</h2>
          <span className={`fb-total ${pillClass(student.total)}`}>{student.total} / 15</span>
        </div>

        <div className="fb-needs-work" style={{ borderLeftColor: 'var(--primary)' }}>
          <h3 style={{ color: 'var(--primary-light)', background: 'var(--accent-soft)' }}>Teacher Assessment -- Areas to Improve</h3>
          {teacherWeak.length > 0 ? (
            <div className="fb-needs-list">
              {teacherWeak.map(w => (
                <div className="fb-needs-item" key={w.skill}>
                  <span className={`fb-score-badge ${scoreClass(w.score)}`}>{w.score}</span>
                  <span className="fb-needs-skill">{w.skill}</span>
                  <a href={w.url} target="_blank" rel="noopener noreferrer" className="fb-frost-code fb-frost-link">Dr. Frost: {w.code}</a>
                </div>
              ))}
            </div>
          ) : (
            <div style={{ padding: '0.75rem 1rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>All skills at top level -- great work!</div>
          )}
        </div>

        <div className="fb-needs-work" style={{ marginTop: '1rem', borderLeftColor: '#ffb74d' }}>
          <h3 style={{ color: '#ffb74d', background: 'rgba(255,183,77,0.06)' }}>Self-Assessment -- Skills You Want to Practise</h3>
          {selfWeak.length > 0 ? (
            <div className="fb-needs-list">
              {selfWeak.map(sk => (
                <div className="fb-needs-item" key={sk.name}>
                  <span className={`fb-score-badge ${ratings[CHECKLIST_SKILLS.indexOf(sk)] === 'help' ? 'fb-score-1' : 'fb-score-2'}`}>
                    {ratings[CHECKLIST_SKILLS.indexOf(sk)] === 'help' ? '!' : '~'}
                  </span>
                  <span className="fb-needs-skill">{sk.name}</span>
                  <a href={sk.url} target="_blank" rel="noopener noreferrer" className="fb-frost-code fb-frost-link">Dr. Frost: {sk.code}</a>
                </div>
              ))}
            </div>
          ) : (
            <div style={{ padding: '0.75rem 1rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>You marked everything as confident!</div>
          )}
        </div>

        <div className="fb-frost-note" style={{ marginTop: '1rem', borderRadius: 'var(--radius)', border: '1px solid var(--border)' }}>
          Click the Dr. Frost codes above to go directly to the practice page!
        </div>

        <div style={{ display: 'flex', gap: '0.6rem', marginTop: '1.25rem', flexWrap: 'wrap' }}>
          <button className="btn btn-primary" onClick={handlePrint}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9V2h12v7"/><path d="M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>
            Print / Save as PDF
          </button>
          <button className="btn btn-outline" onClick={handleReset}>Start Over</button>
        </div>
      </div>
    )
  }

  // ===== CHECKLIST VIEW =====
  return (
    <>
      <section className="section">
        <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '1.25rem', lineHeight: 1.6 }}>
          Rate your confidence for each skill. Once you've rated all 12, select your name to generate your personalised practice report.
        </p>
        <div className="checklist-grid">
          {CHECKLIST_SKILLS.map((skill, i) => (
            <div className={`checklist-card${ratings[i] ? ` checklist-${ratings[i]}` : ''}`} key={i}>
              <div className="checklist-card-top">
                <h3>{skill.name}</h3>
                <p>{skill.desc}</p>
                {skill.formula && <img src={skill.formula} alt={skill.name} className="checklist-formula" />}
              </div>
              <div className="checklist-btns">
                <button className={`ck-btn ck-confident${ratings[i] === 'confident' ? ' ck-selected' : ''}`} onClick={() => setRating(i, 'confident')}>Confident</button>
                <button className={`ck-btn ck-practice${ratings[i] === 'practice' ? ' ck-selected' : ''}`} onClick={() => setRating(i, 'practice')}>Need Practice</button>
                <button className={`ck-btn ck-help${ratings[i] === 'help' ? ' ck-selected' : ''}`} onClick={() => setRating(i, 'help')}>Need Help</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {allRated && (
        <section className="section" style={{ animation: 'fadeInUp 0.4s ease' }}>
          <h2 className="section-title">Generate Your Report</h2>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
            Select your name to generate your combined teacher + self-assessment report.
          </p>
          <select
            className="fb-select"
            value={selectedName}
            onChange={e => setSelectedName(e.target.value)}
          >
            <option value="">-- Select your name --</option>
            {STUDENTS.map(s => (
              <option key={s.name} value={s.name}>{s.name}</option>
            ))}
          </select>
          {selectedName && (
            <div style={{ marginTop: '1rem' }}>
              <button className="btn btn-primary" onClick={handleGenerate}>
                Generate Report for {selectedName}
              </button>
            </div>
          )}
        </section>
      )}

      {!allRated && (
        <div style={{ textAlign: 'center', padding: '1rem', color: 'var(--text-muted)', fontSize: '0.82rem' }}>
          {Object.keys(ratings).length} / {CHECKLIST_SKILLS.length} skills rated
        </div>
      )}
    </>
  )
}

/* ===== MAIN PAGE ===== */
export default function Feedback() {
  return (
    <>
      <PageHero title="Student Feedback" subtitle="Skills Assessment & Self-Check" />
      <main className="main">
        <Breadcrumb items={[{ label: 'Home', to: '/' }, { label: 'Feedback' }]} />
        <Tabs tabs={[
          { label: 'Student Reports', content: <StudentFeedback /> },
          { label: 'Skills Checklist', content: <SkillsChecklist /> },
        ]} />
      </main>
    </>
  )
}
