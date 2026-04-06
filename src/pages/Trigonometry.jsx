import { PageHero } from '../components/Hero'
import Breadcrumb from '../components/Breadcrumb'
import Tabs from '../components/Tabs'
import Card from '../components/Card'
import Collapsible from '../components/Collapsible'
import DriveEmbed from '../components/DriveEmbed'
import ButtonRow from '../components/ButtonRow'
import InfoBox from '../components/InfoBox'
import { Presentation, FileText, Pencil, Book } from '../components/Icons'

function LessonContent() {
  return (
    <>
      <section className="section">
        <h2 className="section-title">Pythagoras & Right-Angled Trigonometry (2D & 3D)</h2>
        <div className="cards">
          <Card title="Pythagoras" links={[
            { icon: <Presentation />, text: 'Power Point', href: 'https://docs.google.com/presentation/d/1Y8xCMZQ80dOJzKP6ouNmnWGrBjfL2nhGaJ6SjfZcraE/edit?usp=sharing' },
          ]} />
          <Card title="Right-Angled Trigonometry" links={[
            { icon: <Presentation />, text: 'Power Point', href: 'https://docs.google.com/presentation/d/1WCZf6aK6smtPiSav4OK_CoQaKnjPjj8u_cOpszjpUrY/edit?usp=sharing' },
          ]} />
          <Card title="3D Pythagoras & Trigonometry" links={[
            { icon: <Presentation />, text: 'Power Point', href: 'https://docs.google.com/presentation/d/1en899xHRAnBcSWaMff-GVbHG5ZMtUZOQfsYifigkAz0/edit?usp=sharing' },
          ]} />
        </div>
        <div style={{ marginTop: '1rem' }}>
          <a href="https://sites.google.com/cashmere.school.nz/mat101-sil/right-angled-trianges?authuser=0" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ marginRight: '0.5rem' }}>More Notes & Practices</a>
          <a href="https://drive.google.com/file/d/1nPLUZyT12g3M2cs-QVpqHLjoA3SgCTwB/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="btn btn-outline">Walker Book pg 6-14</a>
        </div>
        <Collapsible title="Extra Resources & Further Exploration" links={[
          { text: 'Geogebra - True Meaning of Sine, Cosine, Tangent Ratios within Right Triangles', href: 'https://www.geogebra.org/m/UUrFubnN' },
          { text: 'Geogebra - The 3 Main Trigonometric Ratios', href: 'https://www.geogebra.org/m/emRAvdDn' },
          { text: 'Geogebra - Trig Ratio Estimations (Quiz: V1)', href: 'https://www.geogebra.org/m/rtkH5nbd' },
        ]} />
      </section>

      <section className="section">
        <h2 className="section-title">Non-Right Angle Triangle Trigonometry</h2>
        <div className="cards">
          <Card title="Sine Rule" links={[
            { icon: <Presentation />, text: 'Power Point', href: 'https://docs.google.com/presentation/d/1vuaONuyiJHBcnBojBEcVIEoMu-a37ZdxdNWor3bTLg4/edit?usp=sharing' },
            { icon: <FileText />, text: 'Walker Book pg 16-19', href: 'https://drive.google.com/file/d/1nPLUZyT12g3M2cs-QVpqHLjoA3SgCTwB/view?usp=drive_link' },
          ]} />
          <Card title="Cosine Rule" links={[
            { icon: <Presentation />, text: 'Power Point', href: 'https://docs.google.com/presentation/d/1ClZfSsA0TTpffVMqCkqDb_Zxh-_BsvUS/edit?usp=sharing&ouid=103743749530420065675&rtpof=true&sd=true' },
            { icon: <FileText />, text: 'Walker Book pg 23-30', href: 'https://drive.google.com/file/d/1nPLUZyT12g3M2cs-QVpqHLjoA3SgCTwB/view?usp=drive_link' },
          ]} />
          <Card title="Area of Triangle" links={[
            { icon: <Presentation />, text: 'Power Point', href: 'https://docs.google.com/presentation/d/1FfBPW-hhKKtnZTA7NsbhMgni5ieaatCE/edit?usp=sharing&ouid=103743749530420065675&rtpof=true&sd=true' },
            { icon: <FileText />, text: 'Walker Book pg 35-39', href: 'https://drive.google.com/file/d/1nPLUZyT12g3M2cs-QVpqHLjoA3SgCTwB/view?usp=drive_link' },
          ]} />
        </div>
        <Collapsible title="Extra Resources & Further Exploration" links={[
          { text: 'Brain-hurting Task - Semi-detached', href: 'https://nrich.maths.org/problems/semi-detached' },
          { text: 'Geogebra - The Ambiguous Case', href: 'https://www.geogebra.org/m/CvtkyRM5' },
          { text: 'Brain-hurting Task - Hexy-metry', href: 'https://nrich.maths.org/problems/hexy-metry' },
        ]} />
      </section>

      <section className="section">
        <h2 className="section-title">Radian, Arc Length & Area of Sector</h2>
        <div className="cards">
          <Card title="Radian, Arc Length & Area of Sector" links={[
            { icon: <Presentation />, text: 'Power Point', href: 'https://docs.google.com/presentation/d/1SKylnQ5XP-ji4GIiwDXaDjyy0kSgKnmy5a8UFst9vzE/edit?usp=sharing' },
            { icon: <FileText />, text: 'Walker Book pg 42-46', href: 'https://drive.google.com/file/d/1nPLUZyT12g3M2cs-QVpqHLjoA3SgCTwB/view?usp=drive_link' },
          ]} />
          <Card title="Trigonometry Graph" note="Not in the assessment." links={[
            { icon: <Presentation />, text: 'Power Point', href: 'https://docs.google.com/presentation/d/16JeATVT3Ksc6yj_l6i3bVBBFOJWL0JEe/edit?usp=sharing&ouid=103743749530420065675&rtpof=true&sd=true' },
            { icon: <Pencil />, text: 'Practice', href: 'https://corbettmaths.com/2018/04/04/trigonometric-graphs-2/' },
            { icon: <Book />, text: 'Online Reading', href: 'https://www.mathsisfun.com/geometry/unit-circle.html' },
          ]} />
          <Card title="Sine Rule Ambiguous Case" links={[
            { icon: <FileText />, text: 'Notes + Practices', href: 'https://drive.google.com/file/d/1EtMq0u0RSr8EoVWz-Bp1LaqwcQeBbpJC/view' },
            { icon: <Pencil />, text: 'Easier Practice', href: 'https://docs.google.com/document/d/1fRo7teOOE6EljYX1tpTft8XLIwS_my4p8N8UozJFhKI/edit?usp=sharing' },
            { icon: <Pencil />, text: 'Harder Practice (pg3-4)', href: 'https://drive.google.com/file/d/1Ru6pc-msohcG8nfA6ZniAo5udvSboYv3/view' },
          ]} />
        </div>
        <Collapsible title="Extra Resources & Further Exploration" links={[
          { text: 'What is a Function?', href: 'https://www.mathsisfun.com/sets/function.html' },
          { text: 'Transforming Trig Graphs', href: 'https://corbettmaths.com/2021/12/01/transforming-trig-graphs/' },
          { text: 'Brain-hurting Task - Arithmagons', href: 'https://nrich.maths.org/2670' },
          { text: 'Degrees vs Radians', href: 'https://mathwithbaddrawings.com/2013/05/02/degrees-vs-radians/' },
        ]} />
      </section>

      <section className="section">
        <DriveEmbed name="Guide to decide which formula to use.pdf" href="https://drive.google.com/file/d/1nPLUZyT12g3M2cs-QVpqHLjoA3SgCTwB/view?usp=drive_link" />
      </section>
    </>
  )
}

function GeneralInfo() {
  return (
    <>
      <section className="section">
        <h2 className="section-title">Quick Links</h2>
        <ButtonRow justify="flex-start" buttons={[
          { text: 'WalkerMaths Trigonometry Book', href: 'https://drive.google.com/file/d/1HsU6bLJ8MVuIdWw5vX2fU8yvPR6Pbome/view?usp=sharing' },
          { text: 'Our Google Classroom', href: 'https://classroom.google.com/c/ODE4ODU3MjA2NjYx?cjc=qojpugb3', variant: 'outline' },
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

function Revision() {
  return (
    <>
      <section className="section">
        <h2 className="section-title">Revision Resources</h2>
        <DriveEmbed name="WalkerMaths Trig Level 2 — pg 48-56" href="https://drive.google.com/file/d/1nPLUZyT12g3M2cs-QVpqHLjoA3SgCTwB/view?usp=sharing" />
        <ButtonRow justify="flex-start" buttons={[
          { text: 'Walker Book pg 48-56', href: 'https://drive.google.com/file/d/1nPLUZyT12g3M2cs-QVpqHLjoA3SgCTwB/view?usp=sharing' },
          { text: 'Solutions (Practice Tasks 1-8)', href: 'https://drive.google.com/file/d/1cLnN3KYU1DvJ-XScv4_pFZGxE_KXqSoO/view', variant: 'outline' },
        ]} />
      </section>
      <section className="section">
        <h2 className="section-title">Practice Assessment</h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1rem' }}>Show clear working</p>
        <DriveEmbed name="2.4 Trigonometry Practice Tasks (Google Drive Folder)" href="https://docs.google.com/folderview?authuser=0&id=1VN3dnqtFzSBxt6cX4Px_8K1vh5dxGcaA" type="folder" />
      </section>
    </>
  )
}

export default function Trigonometry() {
  return (
    <>
      <PageHero title="91259 2.4 Trigonometry" />
      <main className="main">
        <Breadcrumb items={[{ label: 'Home', to: '/' }, { label: 'Trigonometry' }]} />
        <Tabs tabs={[
          { label: 'Lesson Content', content: <LessonContent /> },
          { label: 'General Info', content: <GeneralInfo /> },
          { label: 'Revision', content: <Revision /> },
        ]} />
      </main>
    </>
  )
}
