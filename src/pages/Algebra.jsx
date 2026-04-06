import { PageHero } from '../components/Hero'
import Breadcrumb from '../components/Breadcrumb'
import Tabs from '../components/Tabs'
import ButtonRow from '../components/ButtonRow'
import InfoBox from '../components/InfoBox'
import VideoEmbed from '../components/VideoEmbed'
import { FileText } from '../components/Icons'

const lessons = [
  { title: 'Expanding Brackets (2–3 brackets)', videoId: 'SXaO3wyV9xs' },
  { title: 'Factorise Quadratic Equations (AC & Cross Method)', videoId: '1hUwjxFo-D4' },
  { title: 'Factorise Special Quadratics (Difference of Squares)', videoId: 'VVzfb48tsUM' },
  { title: 'Form Linear Equations from Table of Values', videoId: '6FgUKBUbTAU' },
  { title: 'Form Quadratic Equations from Table of Values', videoId: 'X7xGGQ4c7zE' },
  { title: 'Plotting Quadratics (Vertex Form) on Calculator', videoId: '62qLpB5f1FU' },
  { title: 'Plotting Quadratics (X-Intercept Form) on Calculator', videoId: 'C-CA3VogBmk' },
]


const papers = [2024, 2023, 2022, 2021]
const examUrl = (y) => `https://www.nzqa.govt.nz/nqfdocs/ncea-resource/exams/${y}/91261-exm-${y}.pdf`
const scheduleUrl = (y) => `https://www.nzqa.govt.nz/nqfdocs/ncea-resource/schedules/${y}/91261-ass-${y}.pdf`

function GeneralInfo() {
  return (
    <>
      <section className="section">
        <h2 className="section-title">Quick Links</h2>
        <ButtonRow justify="flex-start" buttons={[
          { text: 'Our Google Classroom', href: 'https://classroom.google.com/c/ODE4ODU3MjA2NjYx?cjc=qojpugb3' },
          { text: 'Calculator Function to Store Values', href: 'https://youtu.be/pfS5zzn4hwg?si=B9ZyslO9WOBeA9ge', variant: 'outline' },
        ]} />
      </section>
      <section className="section">
        <div style={{ marginBottom: '1rem' }}>
          <a href="https://docs.google.com/document/d/1nmtxOFb2U66GP-kUgWH9oEQJVkRgYaxRf9dGvB7XnkQ/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Algebra Assignment Information</a>
        </div>
        <InfoBox title="Information for Term 1 Algebra Homework">
          <ul>
            <li><strong>Due:</strong> Every Thursday (Term 1).</li>
            <li><strong>Format:</strong> Complete the tasks in your provided Algebra Booklet.</li>
          </ul>
        </InfoBox>
        <InfoBox title="Two Sections">
          <ul>
            <li><strong>Practice (The Training):</strong>
              <ul style={{ listStyle: 'none', padding: 0, marginTop: '0.25rem' }}>
                <li style={{ paddingLeft: '1.2rem' }}><strong>Goal:</strong> Learn and prepare for the assignment.</li>
                <li style={{ paddingLeft: '1.2rem' }}><strong>Help:</strong> Use friends, teachers, Google, or the worked solutions at the back.</li>
              </ul>
            </li>
            <li><strong>Assignment (The Test):</strong>
              <ul style={{ listStyle: 'none', padding: 0, marginTop: '0.25rem' }}>
                <li style={{ paddingLeft: '1.2rem' }}><strong>Goal:</strong> Prove your skills.</li>
                <li style={{ paddingLeft: '1.2rem' }}><strong>Rules:</strong> Solo and closed-book. No help allowed.</li>
              </ul>
            </li>
          </ul>
        </InfoBox>
        <InfoBox title="If you're struggling, get help early">
          <ul>
            <li><strong>Lunch Tutorials:</strong> Every day in Room S3</li>
            <li><strong>Show Workings:</strong> No working = No credit.</li>
            <li><strong>Be Neat:</strong> If it's messy or low-effort, you'll have to resubmit it.</li>
          </ul>
        </InfoBox>
      </section>
    </>
  )
}

function LessonContent() {
  return (
    <>
      {lessons.map((lesson, i) => (
        <section className="section" key={lesson.videoId}>
          <h2 className="section-title">{lesson.title}</h2>
          <VideoEmbed videoId={lesson.videoId} title={lesson.title} />
        </section>
      ))}
</>
  )
}

function PastPapers() {
  return (
    <>
      <section className="section">
        <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
          Official NZQA examination papers for Achievement Standard 91261 (2.6 Algebra). Use these to practise under exam conditions.
        </p>
        <div className="papers-grid">
          {papers.map(year => (
            <div className="paper-card" key={year}>
              <div className="paper-year">{year}</div>
              <div className="paper-links">
                <a href={examUrl(year)} target="_blank" rel="noopener noreferrer" className="paper-btn paper-btn--exam"><FileText /><span>Exam Paper</span></a>
                <a href={scheduleUrl(year)} target="_blank" rel="noopener noreferrer" className="paper-btn paper-btn--schedule"><FileText /><span>Assessment Schedule</span></a>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="section">
        <InfoBox title="How to Use Past Papers">
          <ul>
            <li><strong>Timed practice:</strong> Set a 60-minute timer and complete without notes.</li>
            <li><strong>Self-mark:</strong> Use the Assessment Schedule to check answers.</li>
            <li><strong>Focus areas:</strong> Revisit topics where you lost marks.</li>
            <li><strong>Source:</strong> All papers from <a href="https://www.nzqa.govt.nz/ncea/assessment/view-detailed.do?standardNumber=91261" target="_blank" rel="noopener noreferrer">NZQA</a>.</li>
          </ul>
        </InfoBox>
      </section>
    </>
  )
}

export default function Algebra() {
  return (
    <>
      <PageHero title="Algebra" subtitle="91261 2.6 Algebra" />
      <main className="main">
        <Breadcrumb items={[{ label: 'Home', to: '/' }, { label: 'Algebra' }]} />
        <Tabs tabs={[
          { label: 'Lesson Content', content: <LessonContent /> },
          { label: 'General Info', content: <GeneralInfo /> },
          { label: 'Past Papers', content: <PastPapers /> },
        ]} />
      </main>
    </>
  )
}
