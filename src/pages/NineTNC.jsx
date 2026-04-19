import { useState, useRef } from 'react'
import Tabs from '../components/Tabs'

/* ================================================================
   TERM 1 SKILLS & PRACTICE LINKS  (from row 33 of spreadsheet)
================================================================ */
const SKILLS = [
  "Name the Parts of Circle",
  "Find Circumference",
  "Perimeter of Composite Shapes",
  "Area of Parallelogram & Triangles",
  "Area of Trapezium",
  "Volume of Prism",
  "Working Backwards",
]

const SKILL_FULL = [
  "Name the Parts of Circle",
  "Find Circumference (Circle, Semicircle & Quadrant)",
  "Perimeter of Composite Shapes",
  "Area of Parallelogram & Triangles",
  "Area of Trapezium",
  "Volume of Prism",
  "Working Backwards",
]

// Row 33 practice links — shown when a student scores 1 or 2 on that skill
const PRACTICE_LINKS = [
  { label: "MathsPad",             url: "https://www.mathspad.co.uk/app/task.php?task=15022" },
  { label: "Dr. Frost #209, 211b", url: "https://www.drfrost.org/explorer.php?cuid=282754&skid=575" },
  { label: "Dr. Frost #180",       url: "https://www.drfrost.org/explorer.php?cuid=282747&skid=1179" },
  { label: "Dr. Frost #139",       url: "https://www.drfrost.org/explorer.php?cuid=282747&skid=703" },
  { label: "Dr. Frost #184a, b",   url: "https://www.drfrost.org/explorer.php?cuid=282747&skid=137" },
  { label: "Dr. Frost #231",       url: "https://www.drfrost.org/explorer.php?cuid=282753&skid=125" },
  { label: "Dr. Frost #209d",      url: "https://www.drfrost.org/explorer.php?cuid=282754&skid=575" },
]

/* ================================================================
   STUDENT DATA  (rows 2–31, scores match SKILLS order above)
   Scores: 1 = Needs Improvement, 2 = Developing, 3 = Achieved
   Total: out of 27
================================================================ */
const STUDENTS = [
  { name: "Amelia Adams",           scores: [1,2,2,3,1,3,3], total: 17 },
  { name: "Digantara Balachandran", scores: [2,2,1,3,2,1,2], total: 11 },
  { name: "Caleb Blaikie",          scores: [3,3,3,2,3,3,3], total: 26 },
  { name: "Gracie Brewer",          scores: [1,1,1,1,1,1,1], total: 5  },
  { name: "Hudson Brovelli",        scores: [3,2,2,2,1,2,3], total: 20 },
  { name: "Kasper Campbell",        scores: [2,2,1,2,1,1,2], total: 12 },
  { name: "Ollie Conlan",           scores: [1,1,1,1,1,1,1], total: 6  },
  { name: "Quinn Davy",             scores: [2,2,1,2,2,3,2], total: 16 },
  { name: "Maddie Deidda",          scores: [2,2,1,3,1,1,2], total: 10 },
  { name: "Cam Dix",                scores: [2,3,2,2,3,1,2], total: 19 },
  { name: "Isla Edmond",            scores: [2,2,3,2,2,1,3], total: 16 },
  { name: "Hamish Ferguson",        scores: [1,1,2,2,1,1,1], total: 8  },
  { name: "David Haines",           scores: [2,2,1,3,2,2,3], total: 15 },
  { name: "Jessie Hemapo",          scores: [2,1,1,1,1,1,1], total: 9  },
  { name: "Mila Hibbert",           scores: [3,2,1,1,3,3,2], total: 18 },
  { name: "Holly Kendrick",         scores: [3,2,2,3,3,3,3], total: 25 },
  { name: "Samuel Lal",             scores: [2,2,1,1,1,2,2], total: 12 },
  { name: "Hank Liu",               scores: [2,3,2,3,3,3,3], total: 20 },
  { name: "Charlotte McAdam",       scores: [2,2,2,2,1,1,2], total: 11 },
  { name: "Isla McEntyre",          scores: [2,1,2,2,1,1,1], total: 9  },
  { name: "Emma Mitchell",          scores: [2,2,2,1,1,1,1], total: 8  },
  { name: "Sam Scorringe",          scores: [1,1,1,3,1,1,1], total: 6  },
  { name: "Ngahuia Simon",          scores: [1,2,1,1,1,1,1], total: 7  },
  { name: "Laurence Tagle",         scores: [2,3,2,3,2,3,2], total: 21 },
  { name: "Nancy Thorpe",           scores: [2,2,1,2,1,1,1], total: 10 },
  { name: "Robin van Hoof",         scores: [3,2,3,3,2,3,2], total: 21 },
  { name: "Tessa Whitaker",         scores: [3,3,2,2,2,3,3], total: 24 },
  { name: "Hugo Whitley",           scores: [3,3,3,2,3,3,3], total: 25 },
  { name: "JP Wilson",              scores: [2,3,2,3,3,3,3], total: 23 },
  { name: "Viraj Yadav",            scores: [1,2,3,3,3,3,3], total: 20 },
]

/* ================================================================
   SKILLS CHECKLIST (self-assessment, Term 1 skills)
================================================================ */
const CHECKLIST_SKILLS = [
  { name: 'Name the Parts of Circle',         desc: 'Identify and label the radius, diameter, circumference, arc, sector, segment, chord, and tangent.', link: PRACTICE_LINKS[0] },
  { name: 'Find Circumference',               desc: 'Calculate the circumference of full circles, semicircles and quadrants using C = πd or C = 2πr.',   link: PRACTICE_LINKS[1] },
  { name: 'Perimeter of Composite Shapes',    desc: 'Find the total perimeter of shapes with both straight edges and circular arcs.',                      link: PRACTICE_LINKS[2] },
  { name: 'Area of Parallelogram & Triangles',desc: 'Apply A = bh (parallelogram) and A = ½bh (triangle) correctly.',                                      link: PRACTICE_LINKS[3] },
  { name: 'Area of Trapezium',                desc: 'Use the formula A = ½(a + b)h to find the area of trapeziums.',                                        link: PRACTICE_LINKS[4] },
  { name: 'Volume of Prism',                  desc: 'Calculate volume using V = area of cross-section × length.',                                           link: PRACTICE_LINKS[5] },
  { name: 'Working Backwards',               desc: 'Find a missing dimension (height or base) when given the area or volume.',                              link: PRACTICE_LINKS[6] },
]

/* ================================================================
   HELPERS
================================================================ */
const MAX_TOTAL = 27

function pillClass(t)  { return t >= 20 ? 'fb-pill-high' : t >= 12 ? 'fb-pill-mid' : 'fb-pill-low' }
function scoreClass(s) { return s === 3 ? 'fb-score-3'  : s === 2  ? 'fb-score-2'  : 'fb-score-1'  }
function feedbackText(s) {
  return s === 3 ? 'Excellent — well done!'
       : s === 2 ? 'Good effort — a bit more practice needed.'
       :           'Needs improvement — use the practice link below.'
}

/* ================================================================
   WELCOME TAB
================================================================ */
function Welcome() {
  return (
    <div className="cls-panel cls-panel--9tnc" style={{ marginTop: '1.25rem' }}>
      <div className="cls-welcome-row">
        <div className="cls-welcome-text">
          <h2 className="cls-panel-title">Welcome, 9TNC! 🌟</h2>
          <p className="cls-panel-sub">Your class hub — Term 1 results, feedback, and skills practice all in one place.</p>
        </div>
        <a href="https://classroom.google.com/c/ODE4ODU3MjA2NjYx?cjc=qojpugb3" target="_blank" rel="noopener noreferrer" className="cls-btn cls-btn--9tnc">
          Our Google Classroom
        </a>
      </div>
      <div className="cls-cards">
        <div className="cls-card" style={{ cursor: 'default' }}>
          <div className="cls-card-icon">📋</div>
          <div>
            <h3>Student Feedback</h3>
            <p>View your Term 1 test scores and personalised practice links. Use the tabs above.</p>
          </div>
        </div>
        <div className="cls-card" style={{ cursor: 'default' }}>
          <div className="cls-card-icon">✅</div>
          <div>
            <h3>Skills Checklist</h3>
            <p>Rate your own confidence for each Term 1 skill and generate a practice report.</p>
          </div>
        </div>
        <div className="cls-card cls-card--soon">
          <div className="cls-card-icon">📚</div>
          <div>
            <h3>Lesson Resources</h3>
            <p>Notes, worksheets and videos — coming soon as the term progresses.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ================================================================
   STUDENT FEEDBACK TAB
================================================================ */
function StudentCard({ student }) {
  const practiceSkills = SKILLS.map((sk, i) => ({
    skill: SKILL_FULL[i],
    shortName: sk,
    score: student.scores[i],
    link: PRACTICE_LINKS[i],
  })).filter(x => x.score < 3)

  return (
    <div className="fb-card">
      <div className="fb-card-header">
        <h2>{student.name}</h2>
        <span className={`fb-total ${pillClass(student.total)}`}>{student.total} / {MAX_TOTAL}</span>
      </div>

      {/* Score table */}
      <div className="table-scroll" style={{ marginTop: 0 }}>
        <table className="fb-table">
          <thead>
            <tr><th>Skill</th><th>Score</th><th>Feedback</th></tr>
          </thead>
          <tbody>
            {SKILLS.map((sk, i) => (
              <tr key={sk}>
                <td className="fb-skill-name">{SKILL_FULL[i]}</td>
                <td style={{ textAlign: 'center' }}>
                  <span className={`fb-score-badge ${scoreClass(student.scores[i])}`}>{student.scores[i]}</span>
                </td>
                <td className="fb-feedback-text">{feedbackText(student.scores[i])}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Practice recommendations for scores < 3 */}
      {practiceSkills.length > 0 && (
        <div className="fb-needs-work">
          <h3>Skills to Practise — Next Steps</h3>
          <div className="fb-needs-list">
            {practiceSkills.map(w => (
              <div className="fb-needs-item" key={w.skill}>
                <span className={`fb-score-badge ${scoreClass(w.score)}`}>{w.score}</span>
                <span className="fb-needs-skill">{w.skill}</span>
                <a
                  href={w.link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="fb-frost-code fb-frost-link"
                >
                  {w.link.label}
                </a>
              </div>
            ))}
          </div>
          <div className="fb-frost-note">
            Click the practice links above to go directly to the activity. You can also find them at MathsPad or drfrost.org.
          </div>
        </div>
      )}

      {practiceSkills.length === 0 && (
        <div className="fb-needs-work" style={{ borderLeftColor: '#48c78e' }}>
          <h3 style={{ color: '#48c78e', background: 'rgba(72,199,142,0.06)' }}>All Skills — Excellent work! 🎉</h3>
          <div style={{ padding: '0.75rem 1rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
            You scored 3 on every skill. Keep it up!
          </div>
        </div>
      )}
    </div>
  )
}

function StudentFeedback() {
  const [selected, setSelected] = useState('')

  return (
    <div style={{ marginTop: '1.25rem' }}>
      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: 1.6 }}>
        Select your name to view your Term 1 test results and personalised next-step practice links.
      </p>
      <select className="fb-select" value={selected} onChange={e => setSelected(e.target.value)}>
        <option value="">— Select your name —</option>
        {STUDENTS.map(s => <option key={s.name} value={s.name}>{s.name}</option>)}
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
            <h2>Select Your Name</h2>
            <p>Choose your name from the dropdown above to view your Term 1 test scores and practice recommendations.</p>
          </div>
        )}
      </div>
    </div>
  )
}

/* ================================================================
   SKILLS CHECKLIST TAB (self-assessment)
================================================================ */
function SkillsChecklist() {
  const [ratings, setRatings]       = useState({})
  const [selectedName, setSelectedName] = useState('')
  const [showReport, setShowReport] = useState(false)
  const reportRef = useRef(null)

  const setRating = (idx, val) => setRatings(prev => ({ ...prev, [idx]: val }))
  const allRated  = Object.keys(ratings).length === CHECKLIST_SKILLS.length
  const student   = STUDENTS.find(s => s.name === selectedName)

  /* ---- PRINT ---- */
  const handlePrint = () => {
    const w = window.open('', '_blank')
    const bc = (t) => t >= 20 ? 'high' : t >= 12 ? 'mid' : 'low'
    const sc = (s) => s === 3 ? 's3' : s === 2 ? 's2' : 's1'
    const teacherWeak = SKILLS.map((sk, i) => ({ skill: SKILL_FULL[i], score: student.scores[i], link: PRACTICE_LINKS[i] })).filter(x => x.score < 3)
    const selfWeak    = CHECKLIST_SKILLS.filter((_, i) => ratings[i] !== 'confident')

    w.document.write(`<!DOCTYPE html><html><head><title>Report — ${selectedName}</title>
    <style>*{margin:0;padding:0;box-sizing:border-box}body{font-family:Arial,sans-serif;padding:2rem;color:#1a1a2e}
    h1{font-size:1.6rem;margin-bottom:.25rem}.badge{display:inline-block;padding:2px 12px;border-radius:12px;font-weight:700;font-size:.85rem;margin-left:8px}
    .high{background:#c6efce;color:#006100}.mid{background:#ffeb9c;color:#9c6500}.low{background:#ffc7ce;color:#9c0006}
    h2{font-size:1.1rem;margin:1.5rem 0 .5rem;padding-bottom:.3rem;border-bottom:2px solid #d97706;color:#d97706}
    table{width:100%;border-collapse:collapse;margin:.5rem 0 1rem;font-size:.85rem}th{background:#d97706;color:#fff;padding:8px 10px;text-align:left}
    td{padding:8px 10px;border-bottom:1px solid #e8e8e8}.score{display:inline-block;width:28px;height:28px;line-height:28px;text-align:center;border-radius:50%;font-weight:700;font-size:.85rem}
    .s3{background:#c6efce;color:#006100}.s2{background:#ffeb9c;color:#9c6500}.s1{background:#ffc7ce;color:#9c0006}
    .item{display:flex;align-items:center;gap:10px;padding:6px 0;border-bottom:1px solid #f0f0f0;font-size:.85rem}.item:last-child{border-bottom:none}
    .skill-name{flex:1;font-weight:600}.code{font-family:monospace;font-weight:700;color:#d97706;background:#fffde7;padding:2px 10px;border-radius:4px;text-decoration:none}
    .section-box{border-left:3px solid #d97706;padding:.75rem 1rem;margin:.5rem 0;background:#fffde7;border-radius:6px}
    .section-box.warn{border-left-color:#e53e3e;background:#fff5f5}
    .note{background:#fffde7;padding:10px 14px;border-radius:6px;color:#92400e;font-size:.82rem;margin-top:.75rem}
    .footer{margin-top:1.5rem;font-size:.75rem;color:#999;text-align:center}</style></head><body>`)

    w.document.write(`<h1>${student.name} <span class="badge ${bc(student.total)}">${student.total}/${MAX_TOTAL}</span></h1>`)
    w.document.write(`<p style="color:#666;font-size:.85rem">9TNC — Term 1 Skills Report</p>`)
    w.document.write(`<h2>Teacher Assessment</h2><table><tr><th>Skill</th><th style="text-align:center;width:70px">Score</th></tr>`)
    SKILLS.forEach((sk, i) => w.document.write(`<tr><td>${SKILL_FULL[i]}</td><td style="text-align:center"><span class="score ${sc(student.scores[i])}">${student.scores[i]}</span></td></tr>`))
    w.document.write(`</table>`)

    if (teacherWeak.length > 0) {
      w.document.write(`<div class="section-box warn"><h3 style="margin-bottom:.5rem;color:#9a3412">Skills to Practise</h3>`)
      teacherWeak.forEach(s => w.document.write(`<div class="item"><span class="score ${sc(s.score)}">${s.score}</span><span class="skill-name">${s.skill}</span><a href="${s.link.url}" class="code">${s.link.label}</a></div>`))
      w.document.write(`</div>`)
    }

    if (selfWeak.length > 0) {
      w.document.write(`<div class="section-box" style="margin-top:1rem"><h3 style="margin-bottom:.5rem">Self-Assessment — Skills I Want to Practise</h3>`)
      selfWeak.forEach(s => {
        const r = ratings[CHECKLIST_SKILLS.indexOf(s)]
        w.document.write(`<div class="item"><span class="score ${r === 'help' ? 's1' : 's2'}">${r === 'help' ? '!' : '~'}</span><span class="skill-name">${s.name}</span><a href="${s.link.url}" class="code">${s.link.label}</a></div>`)
      })
      w.document.write(`</div>`)
    }

    w.document.write(`<div class="note">Click the practice links above, or go to <strong>mathspad.co.uk</strong> or <strong>drfrost.org</strong> to practise!</div>`)
    w.document.write(`<div class="footer">Math with Ms Tan — CHS 9TNC — Generated ${new Date().toLocaleDateString()}</div></body></html>`)
    w.document.close()
    w.print()
  }

  /* ---- REPORT VIEW ---- */
  if (showReport && student) {
    const teacherWeak = SKILLS.map((sk, i) => ({ skill: SKILL_FULL[i], score: student.scores[i], link: PRACTICE_LINKS[i] })).filter(x => x.score < 3)
    const selfWeak    = CHECKLIST_SKILLS.filter((_, i) => ratings[i] !== 'confident')

    return (
      <div className="fb-card" ref={reportRef} style={{ marginTop: '1.25rem' }}>
        <div className="fb-card-header">
          <h2>{student.name}'s Report</h2>
          <span className={`fb-total ${pillClass(student.total)}`}>{student.total} / {MAX_TOTAL}</span>
        </div>

        <div className="fb-needs-work" style={{ borderLeftColor: 'var(--primary)' }}>
          <h3 style={{ color: 'var(--primary-light)', background: 'var(--accent-soft)' }}>Teacher Assessment — Areas to Improve</h3>
          {teacherWeak.length > 0 ? (
            <div className="fb-needs-list">
              {teacherWeak.map(w => (
                <div className="fb-needs-item" key={w.skill}>
                  <span className={`fb-score-badge ${scoreClass(w.score)}`}>{w.score}</span>
                  <span className="fb-needs-skill">{w.skill}</span>
                  <a href={w.link.url} target="_blank" rel="noopener noreferrer" className="fb-frost-code fb-frost-link">{w.link.label}</a>
                </div>
              ))}
            </div>
          ) : <div style={{ padding: '0.75rem 1rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>All skills at top level — excellent work! 🎉</div>}
        </div>

        <div className="fb-needs-work" style={{ marginTop: '1rem', borderLeftColor: '#ffb74d' }}>
          <h3 style={{ color: '#ffb74d', background: 'rgba(255,183,77,0.06)' }}>Self-Assessment — Skills You Want to Practise</h3>
          {selfWeak.length > 0 ? (
            <div className="fb-needs-list">
              {selfWeak.map(sk => (
                <div className="fb-needs-item" key={sk.name}>
                  <span className={`fb-score-badge ${ratings[CHECKLIST_SKILLS.indexOf(sk)] === 'help' ? 'fb-score-1' : 'fb-score-2'}`}>
                    {ratings[CHECKLIST_SKILLS.indexOf(sk)] === 'help' ? '!' : '~'}
                  </span>
                  <span className="fb-needs-skill">{sk.name}</span>
                  <a href={sk.link.url} target="_blank" rel="noopener noreferrer" className="fb-frost-code fb-frost-link">{sk.link.label}</a>
                </div>
              ))}
            </div>
          ) : <div style={{ padding: '0.75rem 1rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>You marked everything as confident!</div>}
        </div>

        <div style={{ display: 'flex', gap: '0.6rem', marginTop: '1.25rem', flexWrap: 'wrap' }}>
          <button className="btn btn-primary" onClick={handlePrint}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9V2h12v7"/><path d="M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>
            Print / Save as PDF
          </button>
          <button className="btn btn-outline" onClick={() => { setRatings({}); setSelectedName(''); setShowReport(false) }}>Start Over</button>
        </div>
      </div>
    )
  }

  /* ---- CHECKLIST VIEW ---- */
  return (
    <div style={{ marginTop: '1.25rem' }}>
      <section className="section">
        <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '1.25rem', lineHeight: 1.6 }}>
          Rate your own confidence for each Term 1 skill. Once all 7 are rated, select your name to generate your combined report.
        </p>
        <div className="checklist-grid">
          {CHECKLIST_SKILLS.map((skill, i) => (
            <div className={`checklist-card${ratings[i] ? ` checklist-${ratings[i]}` : ''}`} key={i}>
              <div className="checklist-card-top">
                <h3>{skill.name}</h3>
                <p>{skill.desc}</p>
              </div>
              <div className="checklist-btns">
                <button className={`ck-btn ck-confident${ratings[i] === 'confident' ? ' ck-selected' : ''}`} onClick={() => setRating(i, 'confident')}>Confident</button>
                <button className={`ck-btn ck-practice${ratings[i] === 'practice'  ? ' ck-selected' : ''}`} onClick={() => setRating(i, 'practice')}>Need Practice</button>
                <button className={`ck-btn ck-help${ratings[i] === 'help'      ? ' ck-selected' : ''}`} onClick={() => setRating(i, 'help')}>Need Help</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {allRated && (
        <section className="section" style={{ animation: 'fadeInUp 0.4s ease' }}>
          <h2 className="section-title">Generate Your Report</h2>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
            Select your name to combine your self-assessment with your teacher's scores.
          </p>
          <select className="fb-select" value={selectedName} onChange={e => setSelectedName(e.target.value)}>
            <option value="">— Select your name —</option>
            {STUDENTS.map(s => <option key={s.name} value={s.name}>{s.name}</option>)}
          </select>
          {selectedName && (
            <div style={{ marginTop: '1rem' }}>
              <button className="btn btn-primary" onClick={() => setShowReport(true)}>
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
    </div>
  )
}

/* ================================================================
   MAIN PAGE
================================================================ */
export default function NineTNC() {
  return (
    <>
      <header className="cls-hero cls-hero--9tnc">
        <div className="cls-hero-inner">
          <p className="cls-hero-label">Year 9 Mathematics</p>
          <h1 className="cls-hero-title">9TNC</h1>
          <p className="cls-hero-sub">Cashmere High School</p>
        </div>
      </header>
      <main className="main">
        <Tabs showChibi={false} tabs={[
          { label: 'Welcome',          content: <Welcome /> },
          { label: 'Student Feedback', content: <StudentFeedback /> },
          { label: 'Skills Checklist', content: <SkillsChecklist /> },
        ]} />
      </main>
    </>
  )
}
