import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Database,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Menu,
  Phone,
  Wrench,
  X,
  ChevronDown
} from 'lucide-react';

const nav = [
  ['Home', 'home'],
  ['About', 'about'],
  ['Experience', 'experience'],
  ['Skills', 'skills'],
  ['Projects', 'projects'],
  ['Contact', 'contact']
];

const skills = {
  Backend: ['Java', 'Spring Boot', 'Spring MVC', 'Spring Data JPA', 'Hibernate', 'REST APIs', 'Microservices'],
  Frontend: ['JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'Responsive UI'],
  Database: ['MySQL', 'SQL Server', 'JDBC', 'Database Design', 'Query Optimization'],
  'Tools & DevOps': ['Git', 'GitHub', 'Docker', 'Maven', 'Postman', 'GitHub Copilot']
};

const experience = [
  {
    period: 'Mar 2026 — Jul 2026',
    company: 'Nimblix OPC Technologies Pvt. Ltd.',
    role: 'Software Developer — Java',
    technologies: ['Java', 'Git', 'GitHub Copilot'],
    points: [
      'Analyzed, developed and maintained Java applications and backend components.',
      'Used GitHub Copilot and AI-assisted workflows to support development and vulnerability remediation.',
      'Supported feature implementation, testing and application maintenance.'
    ]
  },
  {
    period: 'Nov 2025 — Feb 2026',
    company: 'Zaalima Development Pvt. Ltd.',
    role: 'Java Full Stack Developer Intern',
    technologies: ['Java', 'Spring Boot', 'Hibernate', 'MySQL', 'REST APIs', 'JavaScript'],
    points: [
      'Developed full-stack modules using Java, Spring Boot, Servlets, JSP, Hibernate and MySQL.',
      'Integrated REST APIs with frontend JavaScript components.',
      'Participated in Agile sprints, code reviews, bug fixing and feature deployments.'
    ]
  },
  {
    period: 'Aug 2024 — Aug 2025',
    company: 'Bharat Electronics Limited',
    role: 'Graduate Apprentice — Software Engineering',
    technologies: ['Java', 'SQL', 'Enterprise Applications'],
    points: [
      'Contributed to SAMVAD, an internal training-management application covering programs, schedules, faculty, participation, training hours, costs and assessments.',
      'Supported analysis, development, debugging, testing and maintenance of internal Java-based software tools with senior engineers.'
    ]
  }
];

const projects = [
  {
    icon: <BriefcaseBusiness size={20} />,
    title: 'SAMVAD',
    label: 'Employee Training Management',
    text: 'Training-management functionality for programs, schedules, faculty, participation, training hours, costs and assessments.',
    stack: ['Java', 'Enterprise Application', 'SQL']
  },
  {
    icon: <Code2 size={20} />,
    title: 'E-Commerce Web Application',
    label: 'Full Stack Application',
    text: 'Product listing, authentication, cart and order-processing modules with responsive web components.',
    stack: ['Java', 'Spring Boot', 'Hibernate', 'MySQL']
  },
  {
    icon: <Database size={20} />,
    title: 'Hospital Management System',
    label: 'Web Application',
    text: 'Hospital-management application built around Java, Spring MVC and MySQL concepts.',
    stack: ['Java', 'Spring MVC', 'MySQL']
  }
];

const fade = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } }
};

function SectionHeading({ number, label, children, description }) {
  return (
    <motion.div
      className="section-heading"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={fade}
    >
      <span className="section-kicker">{number} — {label}</span>
      <h2>{children}</h2>
      {description && <p>{description}</p>}
    </motion.div>
  );
}

export default function App() {
  const [menu, setMenu] = useState(false);
  const [active, setActive] = useState('home');

  const go = id => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setActive(id);
    setMenu(false);
  };

  return (
    <div className="site">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />

      <header className="navbar">
        <a
          className="brand"
          href="#home"
          onClick={event => {
            event.preventDefault();
            go('home');
          }}
        >
          <span className="brand-mark">K</span>
          <span>Kiran K</span>
        </a>
        <nav id="primary-navigation" className={menu ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">
          {nav.map(([label, id]) => (
            <a
              key={id}
              className={active === id ? 'active' : ''}
              href={`#${id}`}
              onClick={event => {
                event.preventDefault();
                go(id);
              }}
            >
              {label}
            </a>
          ))}
          <a className="nav-cta" href="/Kiran_K_Resume.pdf" download>
            <Download size={15} />
            Resume
          </a>
        </nav>
        <button
          className="menu-btn"
          type="button"
          onClick={() => setMenu(!menu)}
          aria-label={menu ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menu}
          aria-controls="primary-navigation"
        >
          {menu ? <X size={21} /> : <Menu size={21} />}
        </button>
      </header>

      <main>
        <section id="home" className="hero section">
          <motion.div className="hero-copy" initial="hidden" animate="show" variants={stagger}>
            <motion.div className="eyebrow" variants={fade}>
              <span className="status-dot" />
              Open to Java / Full Stack opportunities
            </motion.div>
            <motion.h1 variants={fade}>
              Building reliable <span>Java applications</span> that solve real business problems.
            </motion.h1>
            <motion.p className="hero-intro" variants={fade}>
              Java Full Stack Developer focused on Spring Boot, REST APIs, microservices, database-driven applications and clean, maintainable software.
            </motion.p>
            <motion.div className="hero-actions" variants={fade}>
              <a className="btn btn-primary" href="#projects" onClick={event => { event.preventDefault(); go('projects'); }}>
                View My Work <ArrowUpRight size={17} />
              </a>
              <a className="btn btn-secondary" href="/Kiran_K_Resume.pdf" download>
                Download Resume <Download size={16} />
              </a>
            </motion.div>
            <motion.div className="quick-stats" variants={fade} aria-label="Core technology focus">
              <div><strong>Java</strong><span>Core expertise</span></div>
              <div><strong>Spring Boot</strong><span>Backend focus</span></div>
              <div><strong>REST APIs</strong><span>API development</span></div>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
          >
            <div className="hero-image-accent" aria-hidden="true" />
            <div className="hero-photo">
              <img src="/images/kk.jpg" alt="Kiran K outdoors" />
            </div>
          </motion.div>
        </section>

        <section id="about" className="section">
          <SectionHeading number="01" label="About">Engineering mindset with a full-stack perspective.</SectionHeading>
          <div className="about-grid">
            <motion.div
              className="about-image-wrap"
              initial={{ opacity: 0, x: -14 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img src="/images/profile.jpg" alt="Kiran K professional portrait" className="about-image" />
            </motion.div>
            <motion.div
              className="about-content"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="lead">
                I am a Java Full Stack Developer with hands-on experience across Java, Spring Boot, Spring MVC, JPA/Hibernate, REST APIs, MySQL and modern web technologies.
              </p>
              <p>
                My experience includes backend development, API integration, CRUD applications, database design, debugging, Agile delivery and enterprise application features. I enjoy turning requirements into dependable, maintainable software.
              </p>
              <div className="education-card">
                <div className="mini-icon"><Code2 size={19} /></div>
                <div><strong>B.E. — Computer Science &amp; Engineering</strong><span>2019 — 2023</span></div>
              </div>
              <div className="strengths">
                <h3>Professional strengths</h3>
                <div className="chips">
                  {['Problem solving', 'Clean code', 'Agile collaboration', 'Debugging & testing'].map(strength => (
                    <span key={strength}>{strength}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="experience" className="section">
          <SectionHeading number="02" label="Experience">Experience that translates into delivery.</SectionHeading>
          <div className="timeline">
            {experience.map((item, index) => (
              <motion.article
                className="timeline-item"
                key={item.company}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
              >
                <div className="timeline-meta">{item.period}</div>
                <div className="experience-card">
                  <div className="role-row">
                    <div>
                      <h3>{item.role}</h3>
                      <p className="company">{item.company}</p>
                    </div>
                    <BriefcaseBusiness className="muted-icon" size={21} aria-hidden="true" />
                  </div>
                  <ul>{item.points.map(point => <li key={point}>{point}</li>)}</ul>
                  <div className="experience-tech">
                    <span>Technologies</span>
                    <div className="chips">{item.technologies.map(technology => <span key={technology}>{technology}</span>)}</div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="skills" className="section skills-section">
          <SectionHeading number="03" label="Skills">A practical stack for modern Java applications.</SectionHeading>
          <div className="skills-grid">
            {Object.entries(skills).map(([group, items], index) => (
              <motion.article
                className="skill-card"
                key={group}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <div className="skill-icon" aria-hidden="true">
                  {index === 0 ? <Code2 size={19} /> : index === 1 ? <ArrowUpRight size={19} /> : index === 2 ? <Database size={19} /> : <Wrench size={19} />}
                </div>
                <h3>{group}</h3>
                <div className="chips">{items.map(skill => <span key={skill}>{skill}</span>)}</div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <SectionHeading number="04" label="Projects">Selected work and application experience.</SectionHeading>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.article
                className="project-card"
                key={project.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                whileHover={{ y: -4 }}
              >
                <div className="project-top">
                  <div className="project-icon">{project.icon}</div>
                  <span className="project-label">{project.label}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.text}</p>
                <div className="chips">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="section recruiter-section" aria-label="Recruiter snapshot">
          <motion.div
            className="recruiter-box"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <div className="recruiter-copy">
              <span className="section-kicker">RECRUITER SNAPSHOT</span>
              <h2>Java full-stack development, grounded in reliable backend engineering.</h2>
              <p>Core strengths across application development, service integration and relational data.</p>
            </div>
            <div className="snapshot-skills">
              {['Java', 'Spring Boot', 'REST APIs', 'Microservices', 'MySQL', 'Full Stack Development'].map(skill => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </motion.div>
        </section>

        <section id="contact" className="section">
          <SectionHeading
            number="05"
            label="Contact"
            description="For opportunities, project discussions or technical collaboration, feel free to connect."
          >
            Let’s build something useful.
          </SectionHeading>
          <div className="contact-grid">
            <a className="contact-card" href="mailto:kiran.k.software.eng@gmail.com">
              <Mail size={19} /><span><small>Email</small><strong>kiran.k.software.eng@gmail.com</strong></span><ExternalLink size={15} />
            </a>
            <a className="contact-card" href="tel:+919108025215">
              <Phone size={19} /><span><small>Phone</small><strong>+91 9108025215</strong></span><ExternalLink size={15} />
            </a>
            <a className="contact-card" href="https://www.linkedin.com/in/kiran-k-1252581b8" target="_blank" rel="noreferrer">
              <Linkedin size={19} /><span><small>LinkedIn</small><strong>linkedin.com/in/kiran-k-1252581b8</strong></span><ExternalLink size={15} />
            </a>
            <a className="contact-card" href="https://github.com/TechyKiran" target="_blank" rel="noreferrer">
              <Github size={19} /><span><small>GitHub</small><strong>github.com/TechyKiran</strong></span><ExternalLink size={15} />
            </a>
          </div>
        </section>
      </main>

      <footer>
        <span>© {new Date().getFullYear()} Kiran K</span>
        <span>Java Full Stack Developer</span>
        <a href="#home" onClick={event => { event.preventDefault(); go('home'); }} aria-label="Back to top">
          <ChevronDown className="rotate-up" size={17} />
        </a>
      </footer>
    </div>
  );
}
