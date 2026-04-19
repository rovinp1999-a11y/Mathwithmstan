import Tabs from '../components/Tabs'
import DriveEmbed from '../components/DriveEmbed'
import ButtonRow from '../components/ButtonRow'
import { FileText, ExternalLink, YouTube } from '../components/Icons'

const p = (file) => `/pdfs/mat101/algebra/${file}`
const drive = (id) => `https://drive.google.com/file/d/${id}/view?usp=drive_link`
const gdoc  = (id) => `https://docs.google.com/document/d/${id}/view`
const gslides = (id) => `https://docs.google.com/presentation/d/${id}/view`

/* ----------------------------------------------------------------
   DATA — sections → skills
   videoId from infinityplusone.co.nz Skills | 1.2 Algebra MCAT
   walker / eas / drFrost from CHS Level 1 Skills Practice page
---------------------------------------------------------------- */
const algebraSections = [
  {
    title: 'Manipulating and Simplifying Expressions',
    skills: [
      {
        name: 'Add / Subtract Like Terms',
        videoId: '2WNtGxBSGvY',
        walker: '—',
        drFrost: '—',
        eas: 'p122–123',
        practices: [
          { label: 'Simplifying Expressions', href: p('simplifying-expressions.pdf') },
        ],
      },
      {
        name: 'Substitution in Formula',
        videoId: 'AxJAeWnljzs',
        walker: 'p.28',
        drFrost: '136c, 196b, 197f',
        eas: 'p130–132',
        practices: [],
      },
      {
        name: 'Rearrange Formula',
        videoId: 'gRbortS-ZqA',
        walker: 'p.96–99',
        drFrost: '201a–f, 391a, 260a–d',
        eas: 'p138–139',
        practices: [
          { label: 'Rearrange L1', href: p('rearrange-l1.pdf') },
          { label: 'Rearrange L2', href: p('rearrange-l2.pdf') },
          { label: 'Rearrange L3', href: p('rearrange-l3.pdf') },
        ],
      },
      {
        name: 'Multiplying Powers',
        videoId: 'N4xh_0x5pfw',
        walker: 'p.15–22',
        drFrost: '194d–j',
        eas: 'p124–128',
        practices: [
          { label: 'Exponents L1', href: p('exponent-rules-l1.pdf') },
          { label: 'Exponents L2', href: p('exponent-rules-l2.pdf') },
        ],
      },
      {
        name: 'Dividing Powers',
        videoId: 'wiSNZgB2q_E',
        walker: 'p.15–22',
        drFrost: '194d–j',
        eas: 'p124–128',
        practices: [
          { label: 'Exponents L1', href: p('exponent-rules-l1.pdf') },
          { label: 'Exponentials 1', href: p('exponentials-1.pdf') },
        ],
      },
      {
        name: 'Powers of Powers',
        videoId: 'hU8RCF1g7GY',
        walker: 'p.15–22',
        drFrost: '194d–j',
        eas: 'p124–128',
        practices: [
          { label: 'Exponentials 3', href: p('exponentials-3.pdf') },
          { label: 'Merit Exponents', href: p('merit-exponents.pdf') },
        ],
      },
      {
        name: 'Expand Brackets (Single)',
        videoId: '4s1LeBLXyR0',
        walker: 'p.50–51',
        drFrost: '252a–j, 299a–e',
        eas: 'p176–178',
        practices: [
          { label: 'Expand Routine', href: p('expand-routine.pdf') },
        ],
      },
      {
        name: 'Expand Quadratics (Double Brackets)',
        videoId: '2dx9aKleAWI',
        walker: 'p.50–51',
        drFrost: '252a–j, 299a–e',
        eas: 'p176–178',
        practices: [
          { label: 'Expand Harder', href: p('expand-harder.pdf') },
        ],
      },
      {
        name: 'Factorise into One Bracket',
        videoId: 'Ydn3Vuw0V2I',
        walker: 'p.52–54',
        drFrost: '253a–c',
        eas: 'p182–183',
        practices: [
          { label: 'Factorising', href: p('factorising.pdf') },
          { label: 'Factorise Basic', href: p('factorise-basic.pdf') },
        ],
      },
      {
        name: 'Factorise Quadratics (2 Brackets)',
        videoId: 'P8xNZnUMRGs',
        walker: 'p.52–54',
        drFrost: '362a–d, 363ab',
        eas: 'p182–185',
        practices: [
          { label: 'Factorise Harder', href: p('factorise-harder.pdf') },
        ],
      },
      {
        name: 'Factorise Quadratics — Common Factor',
        videoId: 'BDgN0GfRr2A',
        walker: 'p.52–54',
        drFrost: '362a–d, 363ab',
        eas: 'p182–185',
        practices: [
          { label: 'Factorise Harder', href: p('factorise-harder.pdf') },
        ],
      },
      {
        name: 'Factorise Quadratics — x² Coefficient ≠ 1',
        videoId: '9VkWK8qQPRU',
        walker: 'p.55–56',
        drFrost: '364a–d',
        eas: 'p186',
        practices: [
          { label: 'Factorise Harder', href: p('factorise-harder.pdf') },
        ],
      },
    ],
  },
  {
    title: 'Inequations',
    skills: [
      {
        name: 'Inequations',
        videoId: 'JuMgvn9QBrg',
        walker: 'p.37–42',
        drFrost: '339b,c,f',
        eas: 'p167–168',
        practices: [],
      },
      {
        name: 'Solving Inequations',
        videoId: 'Qp_6sA6AYRo',
        walker: 'p.37–42',
        drFrost: '339b,c,f, 340ab',
        eas: 'p167–168',
        practices: [],
      },
    ],
  },
  {
    title: 'Quadratic Equations',
    skills: [
      {
        name: 'Solving Quadratic Equations',
        videoId: 'xZOcgf9UGkA',
        walker: 'p.59–62',
        drFrost: '421ab',
        eas: 'p35–37',
        practices: [],
      },
      {
        name: 'Solve by Factorising',
        videoId: 'f76Wvrb_FEg',
        walker: 'p.59–62',
        drFrost: '421ab',
        eas: 'p35–37',
        practices: [
          { label: 'Factorise Harder', href: p('factorise-harder.pdf') },
        ],
      },
      {
        name: 'Rearranging to Solve',
        videoId: 'aGmECHbTtGE',
        walker: 'p.59–62',
        drFrost: '421ab',
        eas: 'p35–37',
        practices: [],
      },
      {
        name: 'Forming Quadratic Equations',
        videoId: 'zeXkrXG653E',
        walker: 'p.59–62',
        drFrost: '421ab',
        eas: 'p35–37',
        practices: [
          { label: 'Practice Paper 1', href: p('practice-paper-1.pdf') },
          { label: 'Practice Paper 1 Answers', href: p('practice-paper-1-answers.pdf') },
        ],
      },
    ],
  },
  {
    title: 'Simultaneous Linear Equations with Two Unknowns',
    skills: [
      {
        name: 'Elimination Method',
        videoId: 'kj5cgBX-CtQ',
        walker: 'p.43–48',
        drFrost: '275a, 276a–k',
        eas: 'p162',
        practices: [],
      },
      {
        name: "Elimination Method — Adjusting Coefficients",
        videoId: 'PACyLF94EXo',
        walker: 'p.43–48',
        drFrost: '275a, 276a–k',
        eas: 'p162',
        practices: [],
      },
      {
        name: 'Substitution Method',
        videoId: 'vdvJ2mapv-8',
        walker: 'p.43–48',
        drFrost: '275a, 276a–k',
        eas: 'p164',
        practices: [],
      },
      {
        name: 'Solving Problems with Simultaneous Equations',
        videoId: 'Qr8TcSeONNA',
        walker: 'p.43–48',
        drFrost: '276a–k',
        eas: 'p165–166',
        practices: [],
      },
    ],
  },
]

/* ----------------------------------------------------------------
   SKILL CARD
---------------------------------------------------------------- */
function SkillCard({ skill }) {
  return (
    <div className="skill-lesson-card">
      <div className="skill-card-title">{skill.name}</div>

      {/* Embedded YouTube video */}
      <div className="skill-card-video">
        <iframe
          src={`https://www.youtube.com/embed/${skill.videoId}`}
          title={skill.name}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>

      {/* Walker / Dr Frost / EAS strip */}
      <div className="skill-card-meta">
        <div className="skill-card-meta-item">
          <strong>WalkerMaths</strong>
          {skill.walker}
        </div>
        <div className="skill-card-meta-item">
          <strong>Dr Frost</strong>
          {skill.drFrost === '—' ? '—' : <code>{skill.drFrost}</code>}
        </div>
        <div className="skill-card-meta-item">
          <strong>EAS Workbook</strong>
          {skill.eas}
        </div>
      </div>

      {/* Practice PDFs + Watch link */}
      {(skill.practices.length > 0) && (
        <div className="skill-card-links">
          {skill.practices.map((pr, i) => (
            <a key={i} href={pr.href} target="_blank" rel="noopener noreferrer" className="skill-card-pdf">
              <FileText /> {pr.label}
            </a>
          ))}
        </div>
      )}
    </div>
  )
}

/* ----------------------------------------------------------------
   ALGEBRA LESSONS
---------------------------------------------------------------- */
function AlgebraLessons() {
  return (
    <>
      {algebraSections.map((section, i) => (
        <section key={i} className="section">
          <h2 className="section-title">{section.title}</h2>
          <div className="skill-cards-grid">
            {section.skills.map((skill, j) => (
              <SkillCard key={j} skill={skill} />
            ))}
          </div>
        </section>
      ))}
    </>
  )
}

/* ----------------------------------------------------------------
   DATA — Course Info (from MAT101 STINFO 2026)
---------------------------------------------------------------- */
const yearPlan = [
  {
    term: 'Term 1',
    length: '10 weeks',
    color: 'var(--primary)',
    rows: [
      { weeks: 'Wks 2–5',  topic: 'Mission to Mars',       detail: 'Number / Measurement',         assessment: '' },
      { weeks: 'Wks 6–9',  topic: 'Making Connections',    detail: 'Algebra Fundamentals',          assessment: '' },
      { weeks: 'Wk 10',    topic: '3D Challenges',         detail: 'Spatial / Measurement',         assessment: '' },
    ],
  },
  {
    term: 'Term 2',
    length: '11 weeks',
    color: '#2e7d9e',
    rows: [
      { weeks: 'Wks 1–2',  topic: "Pythagoras' & Trig",    detail: '',                              assessment: '' },
      { weeks: 'Wks 3–6',  topic: 'Making Connections',    detail: 'Extending algebraic thinking',  assessment: 'Skills Check' },
      { weeks: 'Wks 7–11', topic: 'Statistics & Prob.',    detail: 'Exploring worlds through data', assessment: '' },
    ],
  },
  {
    term: 'Term 3',
    length: '10 weeks',
    color: '#5a6ea0',
    rows: [
      { weeks: 'Wks 1–4',  topic: 'Continued + Revision',  detail: 'School exam revision',          assessment: '' },
      { weeks: 'Wk 5',     topic: 'School Examinations',   detail: '',                              assessment: 'AS1.4 & AS1.3' },
      { weeks: 'Wk 6',     topic: 'Internal Assessment',   detail: '',                              assessment: 'AS1.2 (& AS1.1)' },
      { weeks: 'Wks 7–10', topic: 'Math Investigations',   detail: '',                              assessment: '' },
    ],
  },
  {
    term: 'Term 4',
    length: '9 weeks',
    color: '#7a5195',
    rows: [
      { weeks: 'Wks 1–3',  topic: 'Exam Revision',         detail: '',                              assessment: '' },
      { weeks: 'Wk 4+',    topic: 'NCEA Examinations',     detail: '',                              assessment: 'NCEA Exams' },
    ],
  },
]

const achievementStandards = [
  {
    code: 'AS 91945',
    label: '1.2',
    title: 'Use mathematical methods to explore problems that relate to life in Aotearoa NZ / Pacific',
    type: 'Internal',
    credits: 3,
    detail: 'Assessed internally during the year. One externally moderated task completed in class.',
  },
  {
    code: 'AS 91946',
    label: '1.3',
    title: 'Interpret and apply mathematical and statistical information in context',
    type: 'External',
    credits: 3,
    detail: 'Assessed in the NCEA external examination at the end of the year (Term 4).',
  },
  {
    code: 'AS 91947',
    label: '1.4',
    title: 'Demonstrate mathematical reasoning',
    type: 'External',
    credits: 5,
    detail: 'Assessed in the NCEA external examination at the end of the year (Term 4). Covers algebra, equations, and mathematical reasoning.',
  },
]

/* ----------------------------------------------------------------
   COURSE INFO COMPONENTS
---------------------------------------------------------------- */
function YearPlanCard({ term }) {
  return (
    <div className="year-plan-card">
      <div className="year-plan-header" style={{ background: term.color }}>
        <span className="year-plan-term">{term.term}</span>
        <span className="year-plan-weeks">{term.length}</span>
      </div>
      <div className="year-plan-rows">
        {term.rows.map((row, i) => (
          <div key={i} className="year-plan-row">
            <span className="yp-weeks">{row.weeks}</span>
            <div className="yp-topic">
              <span className="yp-topic-name">{row.topic}</span>
              {row.detail && <span className="yp-detail">{row.detail}</span>}
            </div>
            {row.assessment && <span className="yp-assessment">{row.assessment}</span>}
          </div>
        ))}
      </div>
    </div>
  )
}

function StandardCard({ std }) {
  return (
    <div className="standard-card">
      <div className="standard-header">
        <code className="standard-code">{std.code}</code>
        <span className={`standard-badge ${std.type === 'Internal' ? 'internal' : 'external'}`}>
          {std.type}
        </span>
      </div>
      <div className="standard-meta">
        <span>Level {std.label}</span>
        <span>{std.credits} credits</span>
      </div>
      <p className="standard-title">{std.title}</p>
      <p className="standard-detail">{std.detail}</p>
    </div>
  )
}

function CourseInfo() {
  return (
    <>
      {/* About */}
      <section className="section">
        <h2 className="section-title">About This Course</h2>
        <p className="course-description">
          Mathematics is about exploring pattern and structure — logical analysis, deduction, and calculation within
          these patterns and structures. Statistics is about exploring and understanding data to examine differences
          between groups and predict outcomes. MAT101 develops the imagination, trains students to think clearly and
          logically, and builds skills in modelling, conjecturing, justifying, and generalising.
        </p>
      </section>

      {/* Year Plan */}
      <section className="section">
        <h2 className="section-title">2026 Year Plan</h2>
        <div className="year-plan-grid">
          {yearPlan.map((term, i) => (
            <YearPlanCard key={i} term={term} />
          ))}
        </div>
      </section>

      {/* Achievement Standards */}
      <section className="section">
        <h2 className="section-title">Achievement Standards</h2>
        <div className="standards-grid">
          {achievementStandards.map((std, i) => (
            <StandardCard key={i} std={std} />
          ))}
        </div>
        <p className="course-note">
          * Students may also have the opportunity to sit <strong>AS 91944 (1.1)</strong> as an additional internal achievement standard.
        </p>
      </section>

      {/* Quick Info */}
      <section className="section">
        <h2 className="section-title">Quick Info</h2>
        <div className="quick-info-grid">
          <div className="quick-info-card">
            <h3>Stationery &amp; Equipment</h3>
            <ul>
              <li>Exercise book</li>
              <li>Graphics calculator <em>(Casio FX-9750GII recommended)</em></li>
              <li>Pens, pencils and ruler</li>
              <li>BYOD device (fully charged)</li>
            </ul>
          </div>
          <div className="quick-info-card">
            <h3>Resources</h3>
            <ul>
              <li>WalkerMaths workbook (issued at start of year)</li>
              <li>Dr Frost — online skills practice</li>
              <li>Mathspad — online practice</li>
              <li>Google Classroom — notes &amp; resources</li>
            </ul>
          </div>
          <div className="quick-info-card">
            <h3>NCEA Requirements</h3>
            <ul>
              <li><strong>Numeracy:</strong> 10 credits via the co-requisite digital Numeracy Assessment</li>
              <li><strong>Course endorsement:</strong> 14 credits at Merit / Excellence (including ≥1 internal and ≥1 external at this level)</li>
            </ul>
          </div>
          <div className="quick-info-card">
            <h3>Entry to Level 2</h3>
            <ul>
              <li><strong>MAT201 (Calculus path):</strong> AS1.4 at Merit or above</li>
              <li><strong>MAS201 (Statistics path):</strong> Success in AS1.1 and / or AS1.3</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}

/* ----------------------------------------------------------------
   DATA — Past Papers & Exam Resources
---------------------------------------------------------------- */
const pastPapersSections = [
  {
    title: 'NZQA Exam 2023',
    resources: [
      { label: 'Exam Paper',    href: drive('1x2loEjd6JWX1zVtq_DwQ9OFjeUT94C6j'), type: 'pdf' },
      { label: 'Exam Schedule', href: drive('1ylmwWFDMendzphfnVreL3XbbYeg2rANq'), type: 'pdf' },
      { label: 'Exemplar',      href: drive('1CJSkwzsmlkhot7E6L77IvHeQk-2Xj67q'), type: 'pdf' },
      { label: 'Video Solutions', href: 'https://www.youtube.com/watch?v=sX4lTWpmj8k', type: 'youtube' },
    ],
  },
  {
    title: 'School Exam 2024',
    resources: [
      { label: 'Exam Paper',    href: drive('16D_kLqJkzk8VDKW8DXSZF0HgqxQ1nine'), type: 'pdf' },
      { label: 'Exam Schedule', href: drive('1SwXMUFOM75su8e4TwGxRyA_ZeRjP1mRa'), type: 'pdf' },
      { label: 'Exemplar',      href: drive('11ZXBjiZVIzgrJQ5742gKKqavf_jRzamk'), type: 'pdf' },
    ],
  },
  {
    title: 'School Exam 2023',
    resources: [
      { label: 'Exam Paper',    href: drive('1P9nBrdZ6d3pRvNsisf1mbjp7Q3Z8mEHi'), type: 'pdf' },
      { label: 'Exam Schedule', href: drive('17xmrrfoW95XJvS2AOvOwL1nOh15rekg9'), type: 'pdf' },
      { label: 'Exemplar A',    href: drive('1povsAkcg4fy6fAeSuYoLhWYibU0RukDs'), type: 'pdf' },
      { label: 'Exemplar B',    href: drive('15VfMqRWc2QDKFEtMLQV5y5vNE981y8-w'), type: 'pdf' },
    ],
  },
  {
    title: 'Other Practice Exams',
    resources: [
      { label: 'Exam A',          href: gdoc('1aYSW_-QeMrspoEEW-uM7Z3Oz-C4RKZbFUuAYMAnw8xk'), type: 'doc' },
      { label: 'Exam A Schedule', href: gdoc('1XdP2psIt0GDQbW7hdAZTZ4k3RI4kYnFvdnc-2AKFW18'), type: 'doc' },
      { label: 'Exam B',          href: gdoc('1iIwo8gDfeSDgJ-bu-MKHLmyARHZ6aHjcMHmx16QEj3w'), type: 'doc' },
      { label: 'Exam B Schedule', href: gdoc('1o1HQRHhP0097gDVSU0Uhd6kybe5UhPNBF9WyQIWsKHE'), type: 'doc' },
      { label: 'Further Exam Questions (with solutions)', href: gslides('1A4-OLJ0Sh3pb-97Bp7us965aMVXRYarbtvEgZD3OmYY'), type: 'doc' },
    ],
  },
]

/* ----------------------------------------------------------------
   EXAM RESOURCE CARD
---------------------------------------------------------------- */
function ExamResourceCard({ section }) {
  return (
    <div className="exam-resource-card">
      <div className="exam-card-title">{section.title}</div>
      <div className="exam-card-links">
        {section.resources.map((res, i) => (
          <a
            key={i}
            href={res.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`exam-resource-link${res.type === 'youtube' ? ' yt' : ''}`}
          >
            {res.type === 'youtube' ? <YouTube /> : <FileText />}
            {res.label}
          </a>
        ))}
      </div>
    </div>
  )
}

/* ----------------------------------------------------------------
   PAST PAPERS CONTENT
---------------------------------------------------------------- */
function PastPapers() {
  return (
    <>
      <section className="section">
        <h2 className="section-title">Formula Sheet</h2>
        <DriveEmbed
          name="2023 Formula Sheet (91947-res-2023)"
          href={drive('1gzZpciqpxiCdmQW1DoQabPZGJkqleJXa')}
        />
        <ButtonRow justify="flex-start" buttons={[
          { text: 'Open Formula Sheet', href: drive('1gzZpciqpxiCdmQW1DoQabPZGJkqleJXa') },
        ]} />
      </section>

      <section className="section">
        <h2 className="section-title">Exam Papers</h2>
        <div className="exam-resources-grid">
          {pastPapersSections.map((section, i) => (
            <ExamResourceCard key={i} section={section} />
          ))}
        </div>
      </section>
    </>
  )
}

/* ----------------------------------------------------------------
   MAIN PAGE
---------------------------------------------------------------- */
export default function MAT101() {
  return (
    <>
      <header className="cls-hero cls-hero--mat101">
        <div className="cls-hero-inner">
          <p className="cls-hero-label">Year 11 Mathematics</p>
          <h1 className="cls-hero-title">MAT101</h1>
          <p className="cls-hero-sub">Cashmere High School — AS1.4 Mathematical Reasoning (External Exam)</p>
        </div>
      </header>

      <main className="main">
        <Tabs showChibi={false} tabs={[
          {
            label: 'AS1.4 Algebra',
            content: (
              <>
                <section className="section">
                  <h2 className="section-title">Course Workbook</h2>
                  <DriveEmbed
                    name="L1 EAS Workbook (Algebra)"
                    href="https://drive.google.com/file/d/11ocE2FABDlYeL9QSV_h6akR8itUZaAvo/view?usp=drive_link"
                  />
                  <ButtonRow justify="flex-start" buttons={[
                    { text: 'Open EAS Workbook', href: 'https://drive.google.com/file/d/11ocE2FABDlYeL9QSV_h6akR8itUZaAvo/view?usp=drive_link' },
                    { text: 'Practice Paper 1', href: '/pdfs/mat101/algebra/practice-paper-1.pdf', variant: 'outline' },
                    { text: 'Practice Paper 1 Answers', href: '/pdfs/mat101/algebra/practice-paper-1-answers.pdf', variant: 'outline' },
                  ]} />
                </section>

                <AlgebraLessons />
              </>
            ),
          },
          {
            label: 'Past Papers & Exam Resources',
            content: <PastPapers />,
          },
          {
            label: 'Course Info',
            content: <CourseInfo />,
          },
        ]} />
      </main>
    </>
  )
}
