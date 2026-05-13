import { PageHero } from '../components/Hero'
import Tabs from '../components/Tabs'
import Card from '../components/Card'
import Collapsible from '../components/Collapsible'
import DriveEmbed from '../components/DriveEmbed'
import ButtonRow from '../components/ButtonRow'
import InfoBox from '../components/InfoBox'
import { FileText, Presentation, Pencil, Book, Users, Folder, YouTube } from '../components/Icons'

/* ================================================================
   PROGRAMME
================================================================ */
function Programme() {
  return (
    <>
      <div className="btn-row" style={{ justifyContent: 'flex-start', marginTop: '1.25rem' }}>
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
              <tr><td>2</td><td>2–6 Feb <em className="note">(Waitangi Day)</em></td><td className="topic-cell" rowSpan="6">91259 2.4 Trigonometry<br /><span style={{ fontWeight: 400, fontSize: '0.78rem' }}>Including Trig Graphs</span></td><td></td></tr>
              <tr><td>3</td><td>9–13 Feb</td><td></td></tr>
              <tr><td>4</td><td>16–20 Feb</td><td></td></tr>
              <tr><td>5</td><td>23–27 Feb</td><td rowSpan="3" style={{ fontSize: '0.78rem' }}>Week 7 Internal Assessment<br />3 credits<br /><em>Resit before the end of term</em></td></tr>
              <tr><td>6</td><td>2–6 Mar</td></tr>
              <tr><td>7</td><td>9–13 Mar</td></tr>
              <tr><td>8</td><td>16–20 Mar</td><td className="topic-cell" rowSpan="3">91261 2.6 Algebra</td><td></td></tr>
              <tr><td>9</td><td>23–27 Mar</td><td></td></tr>
              <tr><td>10</td><td>30–3 Apr <em className="note">(Good Friday)</em></td><td></td></tr>

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

/* ================================================================
   TRIGONOMETRY
================================================================ */
function TrigLessons() {
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

function TrigInfo() {
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
        <InfoBox title="Internal Assessment — Week 7">
          <ul>
            <li><strong>Standard:</strong> 91259 2.4 Trigonometry</li>
            <li><strong>Credits:</strong> 3 (Internal)</li>
            <li><strong>Resit:</strong> Before the end of Term 1.</li>
          </ul>
        </InfoBox>
      </section>
    </>
  )
}

function TrigRevision() {
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

/* ================================================================
   ALGEBRA
================================================================ */
const algebraPapers = [2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012]
const algebraExamUrl = (y) => `/pdfs/algebra/nzqa/91261-exm-${y}.pdf`
const algebraScheduleUrl = (y) => `/pdfs/algebra/nzqa/91261-ass-${y}.pdf`
const algebraSolutionsUrl = {
  2023: '/pdfs/algebra/nzqa/91261-exm-2023-drd-some-solutions.pdf',
  2022: '/pdfs/algebra/nzqa/91261-exm-2022-some-solutions.pdf',
  2021: '/pdfs/algebra/nzqa/91261-exm-2021-drd-solutions.pdf',
  2019: '/pdfs/algebra/nzqa/91261-exm-2019-drd-solutions.pdf',
}
const ytSearch = (q) => `https://www.youtube.com/results?search_query=${encodeURIComponent(q)}`

function AlgebraLessons() {
  return (
    <>
      <section className="section">
        <h2 className="section-title">Course Workbook</h2>
        <DriveEmbed name="WalkerMaths Algebra Workbook (Level 2)" href="/pdfs/algebra/workbooks/walkermath-workbook.pdf" />
        <ButtonRow justify="flex-start" buttons={[
          { text: 'Open WalkerMaths Workbook', href: '/pdfs/algebra/workbooks/walkermath-workbook.pdf' },
        ]} />
      </section>
      <section className="section">
        <h2 className="section-title">Number & Algebra Foundations</h2>
        <div className="cards">
          <Card title="Exponent Rules" note="WalkerMath pg 11–17" links={[
            { icon: <Presentation />, text: 'Power Point', href: 'https://docs.google.com/presentation/d/1deARycbh04LuYqSjGHXjGcwAQc4vf7gj/edit?usp=drive_link&ouid=103743749530420065675&rtpof=true&sd=true' },
            { icon: <YouTube />, text: 'YouTube Lesson', href: ytSearch('exponent rules NCEA Level 2 algebra tutorial') },
          ]} />
          <Card title="Algebraic Fractions" note="WalkerMath pg 36–40" links={[
            { icon: <Presentation />, text: 'Power Point', href: 'https://docs.google.com/presentation/d/1YTdGlj6UBObFJ2TSFlnms-LK9UqvT6ftEtkIQQ37VX4/edit?slide=id.g3dd6480a5b4_0_8#slide=id.g3dd6480a5b4_0_8' },
            { icon: <YouTube />, text: 'YouTube Lesson', href: ytSearch('simplifying algebraic fractions level 2 tutorial') },
          ]} />
          <Card title="Solve Linear Equations & Inequalities" note="WalkerMath pg 41–42" links={[
            { icon: <Presentation />, text: 'Power Point', href: 'https://docs.google.com/presentation/d/1o0Z4jrs0GCfvXCbUHaAUorBY5EiiPUiCehj4PlN5-b8/edit?slide=id.g3dd6480a567_0_0#slide=id.g3dd6480a567_0_0' },
            { icon: <YouTube />, text: 'YouTube Lesson', href: ytSearch('solving linear equations and inequalities algebra') },
          ]} />
        </div>
      </section>
      <section className="section">
        <h2 className="section-title">Logarithms</h2>
        <div className="cards">
          <Card title="Logarithm Rules" note="WalkerMath pg 19–23" links={[
            { icon: <Presentation />, text: 'Power Point', href: 'https://docs.google.com/presentation/d/1WDfWrcYykOhR0xb9qkmkqv3IuinA5ezb0Vy-M2tA76Y/edit' },
            { icon: <Pencil />, text: 'Exam Questions', href: 'https://drive.google.com/file/d/1yTtGbB3lwIipOo7_zNJsffsxrf8pbroF/view' },
            { icon: <YouTube />, text: 'YouTube Lesson', href: ytSearch('logarithm rules laws explained tutorial') },
          ]} />
          <Card title="Solve Logarithms" note="WalkerMath pg 24–28" links={[
            { icon: <Presentation />, text: 'Power Point', href: 'https://docs.google.com/presentation/d/1iokBbSVGAepIMBnTrreNUrGFACZEJi9A/edit?slide=id.g34a2646f259_0_7#slide=id.g34a2646f259_0_7' },
            { icon: <Pencil />, text: 'Nulake pg 27–28', href: 'https://drive.google.com/file/d/1qMwNyA1fZL3UJ6JHLFye0QacJj-KYowN/view?usp=drive_link' },
            { icon: <YouTube />, text: 'YouTube Lesson', href: ytSearch('solving logarithmic equations tutorial') },
          ]} />
        </div>
      </section>
      <section className="section">
        <h2 className="section-title">Quadratic Graphs & Equations</h2>
        <div className="cards">
          <Card title="Graphing Parabolas & Cubics" links={[
            { icon: <Presentation />, text: 'Power Point', href: 'https://docs.google.com/presentation/d/1gm3gZls2hkc2lxAA1bHsO0NkMRFMQ3siWz-3e5SkCnQ/edit' },
            { icon: <FileText />, text: 'Year 12 Graphing Booklet (with answers)', href: 'https://drive.google.com/file/d/1X821xtZFQ5zD0cuY02b6N-AW00rnSTte/view' },
            { icon: <YouTube />, text: 'YouTube Lesson', href: ytSearch('graphing parabolas and cubics NCEA Level 2') },
          ]} />
          <Card title="Quadratic Equations & Inequalities" links={[
            { icon: <Presentation />, text: 'Power Point', href: 'https://docs.google.com/presentation/d/1BRu9PWcrKR6B9NJkqGDED7dQr0_JxTjnITOOsu36S6Y/edit?slide=id.p11#slide=id.p11' },
            { icon: <Pencil />, text: 'AC Method Practice', href: 'https://corbettmaths.com/wp-content/uploads/2018/11/Factorising-harder-quadratics-pdf.pdf' },
            { icon: <Folder />, text: 'Quadratic Inequalities', href: 'https://drive.google.com/drive/folders/16LyWyqDckXxBfxKKXvcHcEDFmdai8lCB' },
            { icon: <YouTube />, text: 'YouTube Lesson', href: ytSearch('factorising quadratics AC method and quadratic inequalities') },
          ]} />
          <Card title="Form & Solve Quadratic Equations" links={[
            { icon: <Presentation />, text: 'Power Point', href: 'https://docs.google.com/presentation/d/1qXhGvQmQNIcodH7qVIpDx9oZDGs_XyG3/edit' },
            { icon: <YouTube />, text: 'YouTube Lesson', href: ytSearch('forming and solving quadratic equations word problems') },
          ]} />
        </div>
      </section>
      <section className="section">
        <h2 className="section-title">Solving Quadratics — Advanced Methods</h2>
        <div className="cards">
          <Card title="Completing the Square" links={[
            { icon: <Presentation />, text: 'Power Point', href: 'https://docs.google.com/presentation/d/1H2PgUJlaiD3lbIZI0gD4P-hhuPQAsNCy/edit?slide=id.p10#slide=id.p10' },
            { icon: <Folder />, text: 'Completing the Square (Practice)', href: 'https://drive.google.com/drive/folders/1kHFzbdCskOueBcCcqXRWhouQAaSQpyUO' },
            { icon: <YouTube />, text: 'YouTube Lesson', href: ytSearch('completing the square quadratic equation tutorial') },
          ]} />
          <Card title="Quadratic Formula" links={[
            { icon: <Presentation />, text: 'Power Point', href: 'https://docs.google.com/presentation/d/1padqR-StLlggH8gBsv9uQYXX8WIHyE-r/edit?slide=id.p17#slide=id.p17' },
            { icon: <YouTube />, text: 'YouTube Lesson', href: ytSearch('quadratic formula word problems tutorial') },
          ]} />
          <Card title="Discriminant (Nature of Roots)" note="WalkerMath pg 60–69" links={[
            { icon: <Presentation />, text: 'Power Point (Intro)', href: 'https://docs.google.com/presentation/d/1-33LTtppdsHxUsbLFTWoYkSeHw13lRH3/edit?slide=id.p9#slide=id.p9' },
            { icon: <Presentation />, text: 'Power Point (Harder)', href: 'https://docs.google.com/presentation/d/1u_tVqBX4tw98S9aExyJqcFjrpf5KSoc3/edit?slide=id.p4#slide=id.p4' },
            { icon: <Folder />, text: 'Discriminants (Nature of Roots)', href: 'https://drive.google.com/drive/folders/1g_WIU25vP1amAAt4RcoukOzwHpdvOHJk' },
            { icon: <YouTube />, text: 'YouTube Lesson', href: ytSearch('discriminant nature of roots quadratic tutorial') },
          ]} />
        </div>
      </section>
    </>
  )
}

/* ----- Skills Tracking ----- */
const algebraSkills = [
  { group: '1. Expanding' },
  { name: 'a. Basic Expanding', walker: 'p.43', frost: '525, 299', theta: 'pg 83-84', extra: { text: 'Transum', href: 'https://www.transum.org/software/sw/starter_of_the_day/students/Brackets.asp?Level=8' } },
  { name: 'b. Expand three brackets', walker: 'p.45-46', frost: '300', theta: '', extra: { text: 'Transum', href: 'https://www.transum.org/software/sw/starter_of_the_day/students/Brackets.asp?Level=10' } },

  { group: '2. Factorising' },
  { name: 'a. Common Factor', walker: '', frost: '232 d-e', theta: '', extra: { text: 'Transum', href: 'https://www.transum.org/software/sw/starter_of_the_day/students/Factorising.asp?Level=3' } },
  { name: 'b. Grouping of pairs', walker: 'p.47', frost: '363', theta: '', extra: '' },
  { name: 'c. Simple Quadratics', walker: 'p.47', frost: '362', theta: '', extra: { text: 'Transum', href: 'https://www.transum.org/Software/SW/Starter_of_the_day/Students/Factorising.asp?Level=7' } },
  { name: 'd. Special case Quadratics', walker: 'p.48', frost: '364', theta: '', extra: '' },
  { name: 'e. Complex (AC method)', walker: 'p.50-51', frost: '365', theta: '', extra: { text: 'Transum', href: 'https://www.transum.org/Software/SW/Starter_of_the_day/Students/Factorising.asp?Level=8' } },

  { group: '3. Exponents' },
  { name: 'a. Negative indices', walker: 'p.13', frost: '298', theta: 'pg 107-110', extra: '' },
  { name: 'b. Fractional indices', walker: 'p.14, 17-18', frost: '394', theta: '', extra: { text: 'Transum', href: 'https://www.transum.org/software/sw/starter_of_the_day/students/Indices.asp?Level=6' } },

  { group: '4. Changing the Subject' },
  { name: 'a. Basic', walker: '', frost: '201', theta: 'pg 97-100', extra: { text: 'Transum', href: 'https://www.transum.org/software/SW/Starter_of_the_day/Students/Changing_The_Subject_Multiple_Choice.asp?Level=4' } },
  { name: 'b. Fractional / Exponents', walker: 'p.16', frost: '260, 391', theta: '', extra: { text: 'Transum', href: 'https://www.transum.org/software/SW/Starter_of_the_day/Students/Changing_The_Subject_drag.asp?Level=8' } },

  { group: '5. Logarithms' },
  { name: 'a. Convert Exponents ↔ Logs', walker: 'p.21-22', frost: '527 b-c', theta: 'pg 111', extra: { text: 'Transum', href: 'https://www.transum.org/Maths/Exercise/Logarithms/Default.asp?Level=2' } },
  { name: 'b. Manipulate using log rules', walker: 'p.24', frost: '527 f-g', theta: 'pg 112-113', extra: { text: 'Transum', href: 'https://www.transum.org/Maths/Exercise/Logarithms/Default.asp?Level=3' } },
  { name: 'c. Solve Equations using logs', walker: 'p.25-28', frost: '527 i-j, n', theta: 'pg 114-116', extra: { text: 'Transum', href: 'https://www.transum.org/Maths/Exercise/Logarithms/Default.asp?Level=4' } },

  { group: '6. Rational Expressions' },
  { name: 'a. Simplifying', walker: 'p.29-30', frost: '', theta: 'pg 91-94', extra: { text: 'Transum', href: 'https://www.transum.org/software/sw/starter_of_the_day/students/Algebraic_Fractions.asp?Level=4' } },
  { name: 'b. Operations (+ − × ÷)', walker: 'p.32-33', frost: '388, 389', theta: '', extra: { text: 'Transum', href: 'https://www.transum.org/software/sw/starter_of_the_day/students/Algebraic_Fractions.asp?Level=2' } },

  { group: '7. Solve Equations' },
  { name: 'a. Linear', walker: 'p.35-39', frost: '', theta: 'pg 85-86', extra: { text: 'Transum', href: 'https://www.transum.org/Maths/Exercise/Algebra/Fraquations/Default.asp?Level=3' } },
  { name: 'b. Linear Inequations', walker: 'p.41-42', frost: '', theta: 'pg 87-88', extra: { text: 'Transum', href: 'https://www.transum.org/software/SW/Starter_of_the_day/Students/InequalitiesC.asp?Level=6' } },
  { name: 'c. Quadratics', walker: 'p.44-47', frost: '', theta: 'pg 101-102', extra: '' },
  { name: 'd. Completing the square', walker: '', frost: '', theta: 'pg 103', extra: '' },
  { name: 'e. Quadratic Formula', walker: 'p.49-51', frost: '', theta: 'pg 104', extra: '' },

  { group: '8. Nature of the Roots of a Quadratic' },
  { name: 'a. Use Discriminant to determine nature', walker: 'p.53-54', frost: '', theta: 'pg 106', extra: '' },

  { group: '9. Excellence Questions' },
  { name: 'a. Multi-step word problems for excellence', walker: 'p.55-58', frost: '', theta: 'Logs pg 115-116; Quadratics pg 102, 105', extra: '' },
]

function AlgebraSkills() {
  return (
    <>
      <section className="section">
        <h2 className="section-title">MAT201 Algebra — Skills Tracking Sheet</h2>
        <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '0.75rem', lineHeight: 1.6 }}>
          Use this sheet to track which skills you've mastered. Each row points you to relevant practice in the WalkerMaths workbook, Dr Frost question codes, the Theta workbook, and additional online practice.
        </p>
        <div className="btn-row" style={{ justifyContent: 'flex-start', marginBottom: '1rem' }}>
          <a href="https://drive.google.com/file/d/1A6dafEl1rx9ChhZUBTf_V9u-lHKnBTw7/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn btn-outline">Theta Workbook (Drive)</a>
          <a href="/pdfs/algebra/workbooks/walkermath-workbook.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline">WalkerMaths Workbook</a>
          <a href="/pdfs/algebra/workbooks/theta-workbook.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline">Theta Workbook (PDF)</a>
        </div>
        <div className="table-scroll">
          <table className="skills-table">
            <thead>
              <tr>
                <th>Skill</th>
                <th>WalkerMaths</th>
                <th>Dr Frost</th>
                <th>Theta</th>
                <th>More Practice</th>
              </tr>
            </thead>
            <tbody>
              {algebraSkills.map((row, i) =>
                row.group ? (
                  <tr className="skills-group" key={i}><td colSpan="5">{row.group}</td></tr>
                ) : (
                  <tr key={i}>
                    <td className="skill-name">{row.name}</td>
                    <td>{row.walker || '—'}</td>
                    <td>{row.frost || '—'}</td>
                    <td>{row.theta || '—'}</td>
                    <td>
                      {row.extra && row.extra.href ? (
                        <a href={row.extra.href} target="_blank" rel="noopener noreferrer">{row.extra.text}</a>
                      ) : '—'}
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </section>
      <section className="section">
        <InfoBox title="How to Use This Sheet">
          <ul>
            <li><strong>Self-check:</strong> After each lesson, find the matching row and try the suggested questions.</li>
            <li><strong>Need more practice?</strong> Click the Transum link in the right-hand column for instant interactive practice.</li>
            <li><strong>Stuck?</strong> Bring the question to a lunch tutorial in S3.</li>
          </ul>
        </InfoBox>
      </section>
    </>
  )
}

function AlgebraInfo() {
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

function AlgebraPapers() {
  return (
    <>
      <section className="section">
        <h2 className="section-title">Workbooks</h2>
        <div className="cards">
          <Card title="Theta Mathematics Workbook" links={[
            { icon: <FileText />, text: 'Open Workbook', href: '/pdfs/algebra/workbooks/theta-workbook.pdf' },
          ]} />
          <Card title="Algebra Greenbook Workbook" links={[
            { icon: <FileText />, text: 'Open Workbook', href: '/pdfs/algebra/workbooks/greenbook-workbook.pdf' },
          ]} />
        </div>
      </section>
      <section className="section">
        <h2 className="section-title">Revision Resources</h2>
        <div className="cards">
          <Card title="10 Revision Sheets (with answers)" links={[
            { icon: <FileText />, text: 'Open PDF', href: '/pdfs/algebra/revision/10-revision-sheets-with-answers.pdf' },
          ]} />
          <Card title="Algebra Excellence Questions" links={[
            { icon: <FileText />, text: 'Open PDF', href: '/pdfs/algebra/revision/algebra-excellence-questions.pdf' },
          ]} />
          <Card title="QuickMaths — 2.6 Algebraic Concepts" note="A, M, E questions from past papers" links={[
            { icon: <Book />, text: 'Open Website', href: 'https://www.quickmaths.co.nz/ncea-exam-resources/2-6-algebraic-concepts' },
          ]} />
          <Card title="Infinity Plus One — NCEA Exams Walkthrough" note="Level 2 · 2.6 Algebra" links={[
            { icon: <Book />, text: 'Open Website', href: 'https://www.infinityplusone.co.nz/level-2/2-6-algebra' },
          ]} />
        </div>
      </section>
      <section className="section">
        <h2 className="section-title">Formative Assessment (Term 2)</h2>
        <div className="cards">
          <Card title="Formative (Term 2) 2024" links={[
            { icon: <FileText />, text: 'Paper (Non-Write-On)', href: '/pdfs/algebra/formative/formative-2024.pdf' },
            { icon: <FileText />, text: 'Schedule', href: '/pdfs/algebra/formative/formative-2024-schedule.pdf' },
          ]} />
          <Card title="Formative (Term 2) 2023" links={[
            { icon: <FileText />, text: 'Paper', href: '/pdfs/algebra/formative/formative-term2-2023.pdf' },
            { icon: <FileText />, text: 'Answers', href: '/pdfs/algebra/formative/formative-term2-2023-answers.pdf' },
          ]} />
          <Card title="Formative (Term 2) 2026" links={[
            { icon: <FileText />, text: 'Paper', href: '/pdfs/algebra/formative/formative-2026.pdf' },
            { icon: <FileText />, text: 'Marking Schedule', href: '/pdfs/algebra/formative/formative-2026-schedule.pdf' },
          ]} />
        </div>
      </section>
      <section className="section">
        <h2 className="section-title">CHS School Exams</h2>
        <div className="cards">
          <Card title="2022 School Exam" links={[
            { icon: <FileText />, text: 'Exam', href: '/pdfs/algebra/chs-exams/2022-school-exam.pdf' },
            { icon: <FileText />, text: 'Solutions', href: '/pdfs/algebra/chs-exams/2022-school-exam-solutions.pdf' },
          ]} />
        </div>
      </section>
      <section className="section">
        <h2 className="section-title">NZQA Past Papers</h2>
        <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
          Official NZQA examination papers for Achievement Standard 91261 (2.6 Algebra).
        </p>
        <div className="papers-grid">
          {algebraPapers.map(year => (
            <div className="paper-card" key={year}>
              <div className="paper-year">{year}</div>
              <div className="paper-links">
                <a href={algebraExamUrl(year)} target="_blank" rel="noopener noreferrer" className="paper-btn paper-btn--exam"><FileText /><span>Exam Paper</span></a>
                <a href={algebraScheduleUrl(year)} target="_blank" rel="noopener noreferrer" className="paper-btn paper-btn--schedule"><FileText /><span>Assessment Schedule</span></a>
                {algebraSolutionsUrl[year] && (
                  <a href={algebraSolutionsUrl[year]} target="_blank" rel="noopener noreferrer" className="paper-btn paper-btn--schedule"><FileText /><span>Worked Solutions</span></a>
                )}
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

/* ================================================================
   CALCULUS
================================================================ */
const calculusPapers = [2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012]
const calculusExamUrl = (y) => `/pdfs/calculus/nzqa/91262-exm-${y}.pdf`
const calculusScheduleUrl = (y) => `/pdfs/calculus/nzqa/91262-ass-${y}.pdf`
const calculusSolutionsUrl = {
  2020: '/pdfs/calculus/nzqa/91262-exm-2020-drd-solutions-partial.pdf',
  2019: '/pdfs/calculus/nzqa/91262-exm-2019-q3c-drd-solution.pdf',
  2015: '/pdfs/calculus/nzqa/91262-exm-2015-drd-solutions.pdf',
  2014: '/pdfs/calculus/nzqa/91262-exm-2014-drd-solutions.pdf',
}

function CalculusLessons() {
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

/* ----- Skills Tracking ----- */
/* ----- Skills Tracking ----- */
const calculusSkills = [
  { group: '1. Introduction & Gradient Functions' },
  { name: 'a. Gradient revision', walker: 'p.6', youtube: '', cVideo: '', cPractice: '', cAnswers: '' },
  { name: 'b. Gradient function of a parabola', walker: 'p.8', youtube: '', cVideo: '', cPractice: '', cAnswers: '' },
  { name: 'c. Sketching gradient functions of curves', walker: 'p.9', youtube: '', cVideo: '', cPractice: '', cAnswers: '' },
  { name: 'd. Calculus — the mathematics of change (Introduction to Differentiation)', walker: 'p.13', youtube: '', cVideo: 'https://corbettmaths.com/2013/12/07/introduction-to-differentiation/', cPractice: 'https://corbettmaths.com/wp-content/uploads/2019/07/Differentiation-pdf-1.pdf', cAnswers: 'https://corbettmaths.com/wp-content/uploads/2019/10/Differentiation-answers.pdf' },

  { group: '2. Differentiation' },
  { name: 'a. Differentiating a polynomial — Part 1', walker: 'p.15', youtube: 'https://youtu.be/RE0xTvnEURs', cVideo: 'https://corbettmaths.com/2019/06/24/differentiation/', cPractice: 'https://corbettmaths.com/wp-content/uploads/2019/07/Differentiation-pdf-1.pdf', cAnswers: 'https://corbettmaths.com/wp-content/uploads/2019/10/Differentiation-answers.pdf' },
  { name: 'b. Differentiating a polynomial — Part 2 (after rearranging)', walker: 'p.15', youtube: 'https://youtu.be/tUNzHBCQAGI', cVideo: 'https://corbettmaths.com/2019/06/25/differentiation-after-rearranging/', cPractice: 'https://corbettmaths.com/wp-content/uploads/2019/07/Differentiation-pdf-1.pdf', cAnswers: 'https://corbettmaths.com/wp-content/uploads/2019/10/Differentiation-answers.pdf' },
  { name: 'c. Calculate gradient — given x-value', walker: 'p.18', youtube: 'https://youtu.be/VFhnW3_Lo8Q', cVideo: 'https://corbettmaths.com/2019/12/31/gradient-of-a-curve-video/', cPractice: 'https://corbettmaths.com/wp-content/uploads/2019/07/Gradient-of-a-Curve-pdf.pdf', cAnswers: 'https://corbettmaths.com/wp-content/uploads/2019/10/Gradient-of-Curve-answers.pdf' },
  { name: 'd. Calculate gradient — given y-value', walker: 'p.20', youtube: 'https://youtu.be/cUNegbHQr8Y', cVideo: 'https://corbettmaths.com/2019/12/31/gradient-of-a-curve-video/', cPractice: 'https://corbettmaths.com/wp-content/uploads/2019/07/Gradient-of-a-Curve-pdf.pdf', cAnswers: 'https://corbettmaths.com/wp-content/uploads/2019/10/Gradient-of-Curve-answers.pdf' },
  { name: 'e. Equation of a tangent', walker: 'p.22', youtube: 'https://youtu.be/FmnfYXq0fWI', cVideo: 'https://corbettmaths.com/2019/04/26/equation-of-a-tangent-to-a-curve/', cPractice: 'https://corbettmaths.com/wp-content/uploads/2019/07/Equation-of-a-Tangent.pdf', cAnswers: 'https://corbettmaths.com/wp-content/uploads/2019/10/Equation-of-a-Tangent-answers.pdf' },
  { name: 'f. Find points on curve given gradient', walker: 'p.24', youtube: 'https://youtu.be/vlkDHIvldNM', cVideo: 'https://corbettmaths.com/2019/12/31/gradient-of-a-curve-video/', cPractice: 'https://corbettmaths.com/wp-content/uploads/2019/07/Gradient-of-a-Curve-pdf.pdf', cAnswers: 'https://corbettmaths.com/wp-content/uploads/2019/10/Gradient-of-Curve-answers.pdf' },
  { name: 'g. Putting it all together', walker: 'p.26', youtube: '', cVideo: '', cPractice: '', cAnswers: '' },
  { name: 'h. Turning / stationary points & their nature', walker: 'p.28', youtube: 'https://youtu.be/GdX2ftDWvDA', cVideo: 'https://corbettmaths.com/2019/12/02/stationary-points-video/', cPractice: 'https://corbettmaths.com/wp-content/uploads/2019/11/Stationary-Points.pdf', cAnswers: 'https://corbettmaths.com/wp-content/uploads/2019/11/Stationary-Points-1.pdf' },
  { name: 'i. Turning points & double differentiation', walker: 'p.28', youtube: 'https://youtu.be/wdtFfml8GSI', cVideo: 'https://corbettmaths.com/2019/12/02/stationary-points-video/', cPractice: 'https://corbettmaths.com/wp-content/uploads/2019/11/Stationary-Points.pdf', cAnswers: 'https://corbettmaths.com/wp-content/uploads/2019/11/Stationary-Points-1.pdf' },
  { name: 'j. Increasing & decreasing functions', walker: 'p.31', youtube: 'https://youtu.be/xhN_wfyUHaY', cVideo: 'https://corbettmaths.com/2019/11/28/increasing-decreasing-functions-video/', cPractice: 'https://corbettmaths.com/wp-content/uploads/2019/11/Increasing-Decreasing-Function.pdf', cAnswers: 'https://corbettmaths.com/wp-content/uploads/2019/11/Increasing-Decreasing-Functions.pdf' },
  { name: 'k. Increasing & decreasing functions — questions', walker: 'p.31', youtube: 'https://youtu.be/VJauHw-GWV0', cVideo: 'https://corbettmaths.com/2019/11/28/increasing-decreasing-functions-video/', cPractice: 'https://corbettmaths.com/wp-content/uploads/2019/11/Increasing-Decreasing-Function.pdf', cAnswers: 'https://corbettmaths.com/wp-content/uploads/2019/11/Increasing-Decreasing-Functions.pdf' },

  { group: '3. Applications' },
  { name: 'a. Rates of change', walker: 'p.33', youtube: 'https://youtu.be/D_oxxlKput8', cVideo: 'https://corbettmaths.com/2019/12/31/application-of-differentiation-video/', cPractice: 'https://corbettmaths.com/wp-content/uploads/2019/11/Application-of-Differentiation-pdf-1.pdf', cAnswers: 'https://corbettmaths.com/wp-content/uploads/2019/11/Applying-Differentiation-Answers.pdf' },
  { name: 'b. Rate of change — given y-value', walker: 'p.33', youtube: 'https://youtu.be/j0BME5bJt28', cVideo: 'https://corbettmaths.com/2019/12/31/application-of-differentiation-video/', cPractice: 'https://corbettmaths.com/wp-content/uploads/2019/11/Application-of-Differentiation-pdf-1.pdf', cAnswers: 'https://corbettmaths.com/wp-content/uploads/2019/11/Applying-Differentiation-Answers.pdf' },
  { name: 'c. Rate of change — given the rate', walker: 'p.33', youtube: 'https://youtu.be/JzdtfzTAVzg', cVideo: 'https://corbettmaths.com/2019/12/31/application-of-differentiation-video/', cPractice: 'https://corbettmaths.com/wp-content/uploads/2019/11/Application-of-Differentiation-pdf-1.pdf', cAnswers: 'https://corbettmaths.com/wp-content/uploads/2019/11/Applying-Differentiation-Answers.pdf' },
  { name: 'd. Optimisation — Part 1', walker: 'p.39', youtube: 'https://youtu.be/7qr8ThvlO6U', cVideo: 'https://corbettmaths.com/2019/12/31/application-of-differentiation-video/', cPractice: 'https://corbettmaths.com/wp-content/uploads/2019/11/Application-of-Differentiation-pdf-1.pdf', cAnswers: 'https://corbettmaths.com/wp-content/uploads/2019/11/Applying-Differentiation-Answers.pdf' },
  { name: 'e. Optimisation — Part 2 (related variables)', walker: 'p.42', youtube: 'https://youtu.be/AmH62ymgwGU', cVideo: 'https://corbettmaths.com/2019/12/31/application-of-differentiation-video/', cPractice: 'https://corbettmaths.com/wp-content/uploads/2019/11/Application-of-Differentiation-pdf-1.pdf', cAnswers: 'https://corbettmaths.com/wp-content/uploads/2019/11/Applying-Differentiation-Answers.pdf' },

  { group: '4. Anti-differentiation' },
  { name: 'a. Anti-differentiating a polynomial', walker: 'p.52', youtube: '', cVideo: 'https://drive.google.com/open?id=150DTpEcplMgbIO0-ZPfKaPqez-T6bHqb', cPractice: '', cAnswers: '' },
  { name: 'b. Calculating c — given a point on the original curve', walker: 'p.55', youtube: '', cVideo: '', cPractice: '', cAnswers: '' },
  { name: 'c. Calculating c — given a point in a rate of change problem', walker: 'p.60', youtube: '', cVideo: '', cPractice: '', cAnswers: '' },
  { name: 'd. Sketch original curve from gradient function graph', walker: 'p.63', youtube: '', cVideo: '', cPractice: '', cAnswers: '' },

  { group: '5. Kinematics' },
  { name: 'a. Introduction & terminology', walker: 'p.67', youtube: '', cVideo: '', cPractice: '', cAnswers: '' },
  { name: 'b. Differentiation in kinematics', walker: 'p.68', youtube: '', cVideo: '', cPractice: '', cAnswers: '' },
  { name: 'c. Anti-differentiation — once to calculate c', walker: 'p.73', youtube: '', cVideo: '', cPractice: '', cAnswers: '' },
  { name: 'd. Anti-differentiation — twice to find distance from acceleration', walker: 'p.78', youtube: '', cVideo: '', cPractice: '', cAnswers: '' },
]

function CalculusSkills() {
  return (
    <>
      <section className="section">
        <h2 className="section-title">MAT201 Calculus — Skills Tracking Sheet</h2>
        <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '0.75rem', lineHeight: 1.6 }}>
          Use this sheet to track which skills you've mastered. Each row points you to the relevant section in the WalkerMaths Calculus workbook, the infinityplusone video walkthrough, and matching Corbettmaths video + practice questions.
        </p>
        <div className="btn-row" style={{ justifyContent: 'flex-start', marginBottom: '1rem', flexWrap: 'wrap' }}>
          <a href="/pdfs/calculus/workbooks/greenbook.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline">WalkerMaths Calculus Workbook</a>
          <a href="https://www.youtube.com/playlist?list=PLGHMh2fiud5cX_4zKxn-PSgZ8jzw67kNL" target="_blank" rel="noopener noreferrer" className="btn btn-outline">Full YouTube Playlist</a>
          <a href="https://corbettmaths.com/" target="_blank" rel="noopener noreferrer" className="btn btn-outline">Corbettmaths Website</a>
        </div>
        <div className="table-scroll">
          <table className="skills-table">
            <thead>
              <tr>
                <th>Skill</th>
                <th>WalkerMaths</th>
                <th>YouTube</th>
                <th>Corbett Video</th>
                <th>Practice</th>
                <th>Answers</th>
              </tr>
            </thead>
            <tbody>
              {calculusSkills.map((row, i) =>
                row.group ? (
                  <tr className="skills-group" key={i}><td colSpan="6">{row.group}</td></tr>
                ) : (
                  <tr key={i}>
                    <td className="skill-name">{row.name}</td>
                    <td>{row.walker || '—'}</td>
                    <td>{row.youtube ? <a href={row.youtube} target="_blank" rel="noopener noreferrer"><YouTube /> Watch</a> : '—'}</td>
                    <td>{row.cVideo ? <a href={row.cVideo} target="_blank" rel="noopener noreferrer">Video</a> : '—'}</td>
                    <td>{row.cPractice ? <a href={row.cPractice} target="_blank" rel="noopener noreferrer">PDF</a> : '—'}</td>
                    <td>{row.cAnswers ? <a href={row.cAnswers} target="_blank" rel="noopener noreferrer">PDF</a> : '—'}</td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </section>
      <section className="section">
        <InfoBox title="How to Use This Sheet">
          <ul>
            <li><strong>Self-check:</strong> After each lesson, find the matching row and watch the videos.</li>
            <li><strong>WalkerMaths:</strong> Open the workbook to the listed page for written practice.</li>
            <li><strong>YouTube:</strong> Walkthroughs by infinityplusone (Subash Chandar K).</li>
            <li><strong>Corbettmaths:</strong> Short video + printable practice sheet + answers.</li>
            <li><strong>Stuck?</strong> Bring the question to a lunch tutorial in S3.</li>
          </ul>
        </InfoBox>
      </section>
    </>
  )
}

function CalculusPapers() {
  return (
    <>
      <section className="section">
        <h2 className="section-title">Workbooks</h2>
        <div className="cards">
          <Card title="Nulake Calculus Workbook" links={[
            { icon: <FileText />, text: 'Open Workbook', href: '/pdfs/calculus/workbooks/nulake-calculus.pdf' },
          ]} />
          <Card title="Calculus Greenbook (Achieve & Merit)" links={[
            { icon: <FileText />, text: 'Open Workbook', href: '/pdfs/calculus/workbooks/greenbook.pdf' },
          ]} />
        </div>
      </section>
      <section className="section">
        <h2 className="section-title">Revision Resources</h2>
        <h3 style={{ color: '#d04a4a', marginTop: '1rem', marginBottom: '0.5rem' }}>Achieve & Merit</h3>
        <div className="cards">
          <Card variant="red" title="Achieve & Merit — Revision Sheets (with answers)" links={[
            { icon: <FileText />, text: 'Open PDF', href: '/pdfs/calculus/revision/revision-sheets-with-answers.pdf' },
          ]} />
          <Card variant="red" title="ManvsMaths" note="Skills practice questions" links={[
            { icon: <Book />, text: 'Open Website', href: 'https://www.manvsmaths.com/12/12_externals.html' },
          ]} />
        </div>
        <h3 style={{ color: '#4a6bd0', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Exam-like Questions</h3>
        <div className="cards">
          <Card variant="blue" title="QuickMaths" note="A, M, E questions differentiated" links={[
            { icon: <Book />, text: 'Open Website', href: 'https://www.quickmaths.co.nz/ncea-exam-resources/2-7-calculus' },
          ]} />
          <Card variant="blue" title="SnedMaths" note="Extra exam-like practice papers" links={[
            { icon: <Book />, text: 'Open Website', href: 'https://sites.google.com/view/snedmaths/level-2/2-7-calculus-methods' },
          ]} />
        </div>
      </section>
      <section className="section">
        <h2 className="section-title">Extra Online Resources & Further Exploration</h2>
        <div className="cards">
          <Card title="MathIsFun" note="Explanation for Calculus concepts" links={[
            { icon: <Book />, text: 'Open Website', href: 'https://www.mathsisfun.com/calculus/' },
          ]} />
          <Card title="Infinity Plus One" note="Walkthroughs by Subash Chandar K (creator of the Skills videos)" links={[
            { icon: <Book />, text: 'Open Website', href: 'https://sites.google.com/view/infinityplusone/level-2/2-7-calculus' },
          ]} />
          <Card title="CushlaThompson's YouTube" note="Calculus video playlist" links={[
            { icon: <YouTube />, text: 'Open Playlist', href: 'https://youtube.com/playlist?list=PLQpSTxqCx238Hgyvg6CqURz3GxN6M39ZX&si=Nfb--gOzww_vL92c' },
          ]} />
        </div>
      </section>
      <section className="section">
        <h2 className="section-title">NZQA Past Papers</h2>
        <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
          Official NZQA examination papers for Achievement Standard 91262 (2.7 Calculus).
        </p>
        <div className="papers-grid">
          {calculusPapers.map(year => (
            <div className="paper-card" key={year}>
              <div className="paper-year">{year}</div>
              <div className="paper-links">
                <a href={calculusExamUrl(year)} target="_blank" rel="noopener noreferrer" className="paper-btn paper-btn--exam"><FileText /><span>Exam Paper</span></a>
                <a href={calculusScheduleUrl(year)} target="_blank" rel="noopener noreferrer" className="paper-btn paper-btn--schedule"><FileText /><span>Assessment Schedule</span></a>
                {calculusSolutionsUrl[year] && (
                  <a href={calculusSolutionsUrl[year]} target="_blank" rel="noopener noreferrer" className="paper-btn paper-btn--schedule"><FileText /><span>Worked Solutions</span></a>
                )}
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

/* ================================================================
   MAIN PAGE
================================================================ */
export default function MAT201() {
  return (
    <>
      <PageHero title="MAT201" subtitle="Mathematics & Statistics — Year 12" />
      <main className="main">
        <Tabs variant="primary" tabs={[
          { label: '2026 Programme', content: <Programme /> },
          {
            label: '91259 Trigonometry', content: (
              <Tabs showChibi={false} tabs={[
                { label: 'Notes', content: <TrigLessons /> },
                { label: 'General Info', content: <TrigInfo /> },
                { label: 'Revision', content: <TrigRevision /> },
              ]} />
            )
          },
          {
            label: '91261 Algebra', content: (
              <Tabs showChibi={false} tabs={[
                { label: 'Notes', content: <AlgebraLessons /> },
                { label: 'Skills', content: <AlgebraSkills /> },
                { label: 'General Info', content: <AlgebraInfo /> },
                { label: 'Revision Resources & Past Papers', content: <AlgebraPapers /> },
              ]} />
            )
          },
          {
            label: '91262 Calculus', content: (
              <Tabs showChibi={false} tabs={[
                { label: 'Notes', content: <CalculusLessons /> },
                { label: 'Skills', content: <CalculusSkills /> },
                { label: 'Revision Resources & Past Papers', content: <CalculusPapers /> },
              ]} />
            )
          },
        ]} />
      </main>
    </>
  )
}
