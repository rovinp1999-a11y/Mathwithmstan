import { PageHero } from '../components/Hero'
import Breadcrumb from '../components/Breadcrumb'
import Tabs from '../components/Tabs'
import ButtonRow from '../components/ButtonRow'
import InfoBox from '../components/InfoBox'
import DriveEmbed from '../components/DriveEmbed'
import { FileText } from '../components/Icons'

const papers = [2024, 2023, 2022, 2021]
const examUrl = (y) => `https://www.nzqa.govt.nz/nqfdocs/ncea-resource/exams/${y}/91262-exm-${y}.pdf`
const scheduleUrl = (y) => `https://www.nzqa.govt.nz/nqfdocs/ncea-resource/schedules/${y}/91262-ass-${y}.pdf`

function LessonContent() {
  return (
    <>
      <section className="section">
        <h2 className="section-title">Sketch Gradient / Equation Graph</h2>
        <DriveEmbed name="Sketch Gradient or Equation Function Graphs.pdf" />
        <ButtonRow justify="flex-start" buttons={[
          { text: 'Practice', href: 'https://docs.google.com/document/d/1dKcK6Yxc7-kBB31n-HYiRZsl7WRlnfLe/edit?usp=sharing&ouid=103743749530420065675&rtpof=true&sd=true' },
        ]} />
      </section>
      <section className="section">
        <h2 className="section-title">Basic Polynomial Differentiation</h2>
        <DriveEmbed name="Basic Differentiation Notes.pdf" />
        <ButtonRow justify="flex-start" buttons={[
          { text: 'Practice', href: 'https://www.interactive-maths.com/differentiating-polynomials-qqi-worksheets.html' },
        ]} />
      </section>
      <section className="section">
        <h2 className="section-title">Practice & Answers</h2>
        <ButtonRow justify="flex-start" buttons={[
          { text: 'Practice (Skill 1 to 3)', href: 'https://drive.google.com/file/d/1qjs1sfNX1zg6h2WiFe7HdDtdrZ1PrTYa/view?usp=sharing' },
          { text: 'Practice (ANS)', href: 'https://drive.google.com/file/d/1Y_m5XcU9ntQD4RpufVsMuCFKwsBF3_mq/view?usp=sharing', variant: 'outline' },
        ]} />
      </section>
      <section className="section">
        <h2 className="section-title">Notes</h2>
        <DriveEmbed name="Notes - Turning Points & Its Nature.pdf" />
        <DriveEmbed name="Notes - Ranges of Values for Increasing or Decreasing Gradients.pdf" />
      </section>
      <section className="section">
        <InfoBox title="Video Lessons Coming Soon">
          <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>Video lessons will be uploaded to the <a href="https://www.youtube.com/@Mstan0928" target="_blank" rel="noopener noreferrer">MsTan YouTube channel</a> as the term progresses.</p>
        </InfoBox>
      </section>
    </>
  )
}

function Skills() {
  return (
    <section className="section">
      <InfoBox title="Coming Soon">
        <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>Calculus skills content will be added as the term progresses. Check back regularly for updates.</p>
      </InfoBox>
    </section>
  )
}

function PastPapers() {
  return (
    <>
      <section className="section">
        <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
          Official NZQA examination papers for Achievement Standard 91262 (2.7 Calculus). Use these to practise under exam conditions.
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
            <li><strong>Source:</strong> All papers from <a href="https://www.nzqa.govt.nz/ncea/assessment/view-detailed.do?standardNumber=91262" target="_blank" rel="noopener noreferrer">NZQA</a>.</li>
          </ul>
        </InfoBox>
      </section>
    </>
  )
}

export default function Calculus() {
  return (
    <>
      <PageHero title="Calculus" subtitle="91262 2.7 Calculus" />
      <main className="main">
        <Breadcrumb items={[{ label: 'Home', to: '/' }, { label: 'Calculus' }]} />
        <Tabs tabs={[
          { label: 'Lesson Content', content: <LessonContent /> },
          { label: 'Skills', content: <Skills /> },
          { label: 'Past Papers', content: <PastPapers /> },
        ]} />
      </main>
    </>
  )
}
