import { useState } from 'react'
import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Blocks,
  Code2,
  Github,
  GraduationCap,
  MapPin,
  Menu,
  X,
} from 'lucide-react'

const navigation = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
]

const projects = [
  {
    number: '01',
    name: 'KeyShield',
    category: 'BLOCKCHAIN WALLET SECURITY',
    description:
      'A blockchain wallet security project exploring safer interactions with Ethereum smart contracts.',
    technologies: ['Solidity', 'Ethereum'],
    href: null,
    visual: 'keyshield',
    icon: Blocks,
  },
  {
    number: '02',
    name: 'EDU-FOCUS-TUBE',
    category: 'EDUCATIONAL VIDEO PLATFORM',
    description:
      'An educational video platform built with the MERN stack and YouTube API.',
    technologies: ['MERN Stack', 'YouTube API'],
    href: 'https://github.com/Akkash20/edu-tube-app',
    visual: 'edu',
    icon: Code2,
  },
  {
    number: '03',
    name: 'Skin Cancer Detection',
    category: 'MACHINE LEARNING',
    description:
      'A CNN-based classification project built with Python, TensorFlow, and Flask.',
    technologies: ['Python', 'TensorFlow', 'Flask'],
    href: null,
    visual: 'skin',
    icon: Code2,
  },
  {
    number: '04',
    name: 'Quiet Room',
    category: 'ANONYMOUS PEER SUPPORT',
    description:
      'An anonymous peer support project built with React, Node.js, and MongoDB.',
    technologies: ['React', 'Node.js', 'MongoDB'],
    href: null,
    visual: 'quiet',
    icon: Code2,
  },
  {
    number: '05',
    name: 'No-Notes',
    category: 'NOTES APPLICATION',
    description: 'A notes application made with HTML, CSS, and JavaScript.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    href: null,
    visual: 'notes',
    icon: Code2,
  },
]

const skillGroups = [
  {
    name: 'LANGUAGES',
    skills: ['Java', 'JavaScript', 'Python', 'SQL'],
  },
  {
    name: 'FRONTEND',
    skills: ['React.js', 'HTML', 'CSS', 'Tailwind CSS'],
  },
  {
    name: 'BACKEND',
    skills: ['Node.js', 'Express.js', 'Spring Boot'],
  },
  {
    name: 'DATABASES',
    skills: ['MongoDB', 'MySQL'],
  },
  {
    name: 'TOOLS & WEB3',
    skills: ['Solidity', 'Git', 'GitHub'],
  },
]

const achievements = [
  'Hacktoberfest 2023',
  'GirlScript Summer of Code',
  'Unfold24',
  'Hack Onchain Day',
  'IBM Z Datathon',
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <header className="site-header">
        <div className="header-inner">
          <a className="brand" href="#top" onClick={closeMenu} aria-label="Akkash H, home">
            akkash<span>.</span>
          </a>

          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>

          <nav
            className={`navigation${menuOpen ? ' navigation-open' : ''}`}
            id="primary-navigation"
            aria-label="Main navigation"
          >
            {navigation.map((item) => (
              <a href={item.href} key={item.label} onClick={closeMenu}>
                {item.label}
              </a>
            ))}
            <a className="navigation-contact" href="#contact" onClick={closeMenu}>
              Let’s talk <ArrowUpRight size={15} />
            </a>
          </nav>
        </div>
      </header>

      <main id="main">
        <section className="hero section-shell" id="top">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="availability-dot" />
              SOFTWARE DEVELOPER <span className="eyebrow-divider">/</span> FULL-STACK
            </p>
            <h1>
              I build for the
              <br />
              <span className="hero-accent">curious</span> and the
              <br />
              <span className="hero-outline">ambitious.</span>
            </h1>
            <p className="hero-intro">
              I’m Akkash — a software developer who enjoys turning complex
              ideas into practical, polished digital experiences.
            </p>
            <div className="hero-cta-row">
              <a className="button button-primary" href="#projects">
                Explore my work <ArrowDownRight size={17} />
              </a>
              <a className="button button-quiet" href="#contact">
                Get in touch <ArrowUpRight size={16} />
              </a>
            </div>
          </div>

          <div className="hero-art" aria-label="Decorative Akkash monogram illustration">
            <div className="art-coordinate coordinate-one">13°05' N</div>
            <div className="art-coordinate coordinate-two">80°16' E</div>
            <div className="art-ring ring-one" />
            <div className="art-ring ring-two" />
            <div className="art-ring ring-three" />
            <div className="art-orbit orbit-a" />
            <div className="art-orbit orbit-b" />
            <div className="art-center">
              <span>AH</span>
              <i />
            </div>
            <span className="art-star star-one">✳</span>
            <span className="art-star star-two">✳</span>
            <span className="art-caption">THOUGHTFUL BY DESIGN</span>
          </div>

          <div className="hero-bottom">
            <span className="location-label">
              <MapPin size={14} /> CHENNAI, INDIA
            </span>
            <a href="#about" className="scroll-cue">
              SCROLL TO DISCOVER <ArrowDown size={14} />
            </a>
            <span className="year-label">PORTFOLIO — 2026</span>
          </div>
        </section>

        <section className="about-section section-shell section-grid" id="about">
          <div className="section-title-block">
            <p className="eyebrow">01 / THE PERSON BEHIND THE CODE</p>
            <h2>
              Good software
              <br />
              starts with <span className="text-muted">good questions.</span>
            </h2>
          </div>
          <div className="about-content">
            <p className="lead-copy">
              I’m a Chennai-based developer interested in the sweet spot
              between thoughtful engineering and useful products.
            </p>
            <p className="body-copy">
              My interests span full-stack development, backend engineering,
              and the possibilities of blockchain and Web3. I like learning
              how systems fit together, solving problems step by step, and
              building things that feel as good to use as they are to maintain.
            </p>
            <div className="interest-list">
              <span>Full-stack development</span>
              <span>Backend engineering</span>
              <span>Blockchain & Web3</span>
              <span>Problem solving</span>
            </div>
            <a className="inline-link" href="https://github.com/Akkash20" target="_blank" rel="noreferrer">
              More about what I build <ArrowUpRight size={15} />
            </a>
          </div>
        </section>

        <section className="experience-section" id="experience">
          <div className="section-shell section-grid experience-grid">
            <div className="section-title-block">
              <p className="eyebrow">02 / EXPERIENCE</p>
              <h2>
                Learning by
                <br />
                <span className="text-muted">doing the work.</span>
              </h2>
            </div>
            <article className="experience-card">
              <div className="experience-meta">
                <span>MAR 2025 — SEP 2025</span>
                <span className="experience-marker" aria-hidden="true" />
              </div>
              <div className="experience-details">
                <p className="experience-company">YUBI</p>
                <h3>Software Developer Intern</h3>
                <p>Software developer internship experience at Yubi.</p>
              </div>
              <ArrowUpRight className="experience-arrow" size={20} />
            </article>
          </div>
        </section>

        <section className="projects-section section-shell" id="projects">
          <div className="projects-heading">
            <div className="section-title-block">
              <p className="eyebrow">03 / A FEW THINGS I’VE BUILT</p>
              <h2>
                Projects with
                <br />
                <span className="hero-accent">a purpose.</span>
              </h2>
            </div>
            <a className="inline-link all-projects-link" href="https://github.com/Akkash20" target="_blank" rel="noreferrer">
              Find me on GitHub <ArrowUpRight size={15} />
            </a>
          </div>

          <div className="project-grid">
            {projects.map((project) => {
              const ProjectIcon = project.icon
              return (
                <article className="project-card" key={project.name}>
                  {project.href ? (
                    <a
                      className={`project-art project-art-${project.visual}`}
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`View ${project.name} on GitHub`}
                    >
                      <span className="project-index">{project.number}</span>
                      <div className="project-graphic" aria-hidden="true">
                        <ProjectIcon size={34} strokeWidth={1.15} />
                        <span className="graphic-orbit" />
                      </div>
                      <span className="project-visit">
                        <ArrowUpRight size={17} />
                      </span>
                    </a>
                  ) : (
                    <div
                      className={`project-art project-art-${project.visual}`}
                      aria-hidden="true"
                    >
                      <span className="project-index">{project.number}</span>
                      <div className="project-graphic">
                        <ProjectIcon size={34} strokeWidth={1.15} />
                        <span className="graphic-orbit" />
                      </div>
                    </div>
                  )}
                  <div className="project-copy">
                    <p className="project-category">{project.category}</p>
                    <h3>{project.name}</h3>
                    <p className="project-description">{project.description}</p>
                    <div className="tag-row">
                      {project.technologies.map((technology) => (
                        <span className="technology-tag" key={technology}>
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </section>

        <section className="skills-section" id="skills">
          <div className="section-shell section-grid skills-grid">
            <div className="section-title-block">
              <p className="eyebrow">04 / MY TOOLKIT</p>
              <h2>
                A toolbox
                <br />
                <span className="text-muted">that keeps growing.</span>
              </h2>
              <p className="skills-intro">
                The right tool for the problem — and always something new to learn.
              </p>
            </div>
            <div className="skills-list">
              {skillGroups.map((group) => (
                <div className="skill-row" key={group.name}>
                  <h3>{group.name}</h3>
                  <div className="skill-tags">
                    {group.skills.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="education-section section-shell section-grid" id="education">
          <div className="section-title-block">
            <p className="eyebrow">05 / EDUCATION</p>
            <h2>
              Foundations
              <br />
              <span className="text-muted">for what’s next.</span>
            </h2>
          </div>
          <article className="education-card">
            <div className="education-icon">
              <GraduationCap size={21} strokeWidth={1.4} />
            </div>
            <div className="education-details">
              <p className="education-date">GRADUATED 2025</p>
              <h3>B.E. Computer Science and Engineering</h3>
              <p>Jaya Engineering College</p>
              <span className="cgpa-chip">CGPA <strong>8.405</strong></span>
            </div>
            <span className="education-year">’25</span>
          </article>
        </section>

        <section className="recognition-section">
          <div className="section-shell recognition-inner">
            <div>
              <p className="eyebrow">06 / COMMUNITY & RECOGNITION</p>
              <h2>Show up. Build. <span className="hero-accent">Contribute.</span></h2>
            </div>
            <div className="achievement-list">
              {achievements.map((achievement, index) => (
                <div className="achievement-item" key={achievement}>
                  <span className="achievement-number">0{index + 1}</span>
                  <span>{achievement}</span>
                  <ArrowUpRight size={15} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-shell contact-inner">
            <p className="eyebrow">07 / YOUR TURN</p>
            <h2>
              Let’s make
              <br />
              something <span className="hero-accent">matter.</span>
            </h2>
            <p className="contact-description">
              Interested in building something together or just want to talk tech?
              Find me on your favorite corner of the internet.
            </p>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/akkash-h-8098a7249/" target="_blank" rel="noreferrer">
                LinkedIn <ArrowUpRight size={16} />
              </a>
              <a href="https://github.com/Akkash20" target="_blank" rel="noreferrer">
                GitHub <Github size={16} />
              </a>
              <a href="https://leetcode.com/u/Akkash_H/" target="_blank" rel="noreferrer">
                LeetCode <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer section-shell">
        <a className="brand" href="#top">
          akkash<span>.</span>
        </a>
        <p>Designed & built by Akkash H <span>·</span> Chennai, India</p>
        <a className="back-to-top" href="#top">
          BACK TO TOP <ArrowRight size={13} />
        </a>
      </footer>
    </>
  )
}

export default App
