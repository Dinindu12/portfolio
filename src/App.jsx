import React from 'react';
import './App.css';

// Projects Data (ඔබගේ වැඩ 4)
const projects = [
  {
    id: 1,
    title: 'Royal Birthday Wishes',
    desc: 'උපන්දින සුභ පැතුම් කළමනාකරණය කරන Web App එකක්. Admin Panel සහ Cloud Loading සහිතයි.',
    tech: ['HTML', 'CSS', 'JS', 'Cloud'],
    link: 'https://hirushi12.github.io/Birthday_wish/',
    icon: 'fa-birthday-cake'
  },
  {
    id: 2,
    title: 'ZORO LIVE - Top-Up Store',
    desc: 'ගේම් ඩයමන්ඩ් Top-Up කිරීමේ Online Store එක. 24/7 Service, WhatsApp Integration.',
    tech: ['HTML', 'CSS', 'JS', 'Dashboard'],
    link: 'https://hirushi12.github.io/zoro-topup/',
    icon: 'fa-gamepad'
  },
  {
    id: 3,
    title: 'Annual Trip - Sri Lanka',
    desc: 'ශ්‍රී ලංකාවේ සංචාරක ගමනාන්ත සොයාගැනීමේ Platform එක. YouTube Vlog Integration.',
    tech: ['HTML', 'CSS', 'JS', 'API'],
    link: 'https://dinindu12.github.io/annual_trip/',
    icon: 'fa-umbrella-beach'
  },
  {
    id: 4,
    title: 'TechZone Gadget Store',
    desc: 'ඉලෙක්ට්‍රොනික භාණ්ඩ අලෙවි කරන Online Store. Stock Status සහිත UI එකක්.',
    tech: ['HTML', 'CSS', 'JS', 'E-commerce'],
    link: 'https://dinindu12.github.io/techzone/',
    icon: 'fa-laptop'
  }
];

function App() {
  return (
    <div className="App">
      {/* ===== NAVBAR ===== */}
      <nav className="navbar">
        <div className="container nav-container">
          <div className="logo">
            <span className="logo-icon">DJH</span>
            <span className="logo-text">Dinindu</span>
          </div>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* ===== HERO SECTION ===== */}
      <section id="home" className="hero">
        <div className="container hero-container">
          <div className="hero-content">
            <p className="hero-greeting">Hi, I'm</p>
            <h1 className="hero-name">Dinindu Jayampathi <br /> Hettiarachchi</h1>
            <p className="hero-title">
              <span className="typed-text">Developer</span> | <span>3D Designer</span> | <span>Bot Creator</span>
            </p>
            <p className="hero-desc">
              Software Engineering Undergraduate at NIBM. I build web apps, 3D models, and automation bots.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">View My Work</a>
              <a href="#contact" className="btn btn-secondary">Contact Me</a>
            </div>
            <div className="hero-social">
              <a href="https://github.com/dinindu12" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
              <a href="#" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
              <a href="#" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a>
              <a href="#" target="_blank" rel="noreferrer"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-avatar">
              <span>👨‍💻</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">About <span>Me</span></h2>
          <div className="about-grid">
            <div className="about-card">
              <i className="fas fa-user-graduate about-icon"></i>
              <h3>Education</h3>
              <p>BSc (Hons) in Software Engineering</p>
              <p style={{ color: '#6c63ff' }}>NIBM - Sri Lanka</p>
            </div>
            <div className="about-card">
              <i className="fas fa-code about-icon"></i>
              <h3>Experience</h3>
              <p>Full-Stack Development</p>
              <p style={{ color: '#6c63ff' }}>3D Modeling & Bot Development</p>
            </div>
            <div className="about-card">
              <i className="fas fa-globe about-icon"></i>
              <h3>Interests</h3>
              <p>MTA Model Designs</p>
              <p style={{ color: '#6c63ff' }}>Game Top-ups & Automation</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SKILLS ===== */}
      <section id="skills" className="skills">
        <div className="container">
          <h2 className="section-title">My <span>Skills</span></h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3><i className="fas fa-laptop-code"></i> Coding</h3>
              <div className="skill-tags">
                <span>HTML</span><span>CSS</span><span>JavaScript</span>
                <span>Python</span><span>C#</span><span>SQL</span>
                <span>React.js</span><span>Node.js</span><span>WordPress</span>
              </div>
            </div>
            <div className="skill-category">
              <h3><i className="fas fa-cube"></i> Design & 3D</h3>
              <div className="skill-tags">
                <span>Blender</span><span>SketchUp</span>
                <span>MTA Modeling</span><span>UI/UX</span>
              </div>
            </div>
            <div className="skill-category">
              <h3><i className="fas fa-robot"></i> Bots & Automation</h3>
              <div className="skill-tags">
                <span>Discord Bots</span><span>Telegram Bots</span>
                <span>Deployment</span><span>APIs</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROJECTS ===== */}
      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">My <span>Projects</span></h2>
          <div className="projects-grid">
            {projects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-icon">
                  <i className={`fas ${project.icon}`}></i>
                </div>
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <div className="project-tech">
                  {project.tech.map((t, idx) => (
                    <span key={idx}>{t}</span>
                  ))}
                </div>
                <a href={project.link} target="_blank" rel="noreferrer" className="btn btn-primary project-btn">
                  Live Demo <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Contact <span>Me</span></h2>
          <div className="contact-container">
            <div className="contact-info">
              <h3>Let's Connect</h3>
              <p>I'm always open to discussing new projects, creative ideas, or opportunities.</p>
              <div className="contact-detail">
                <i className="fas fa-envelope"></i>
                <span>dinindu@example.com</span> {/* ඔබගේ Email එක දාන්න */}
              </div>
              <div className="contact-detail">
                <i className="fas fa-map-marker-alt"></i>
                <span>Colombo, Sri Lanka</span>
              </div>
              <div className="contact-social">
                <a href="https://github.com/dinindu12" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
                <a href="#" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
                <a href="#" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a>
                <a href="#" target="_blank" rel="noreferrer"><i className="fab fa-youtube"></i></a>
              </div>
            </div>
            <form className="contact-form" action="https://formspree.io/f/yourFormID" method="POST">
              <input type="text" name="name" placeholder="Your Name" required />
              <input type="email" name="email" placeholder="Your Email" required />
              <textarea name="message" rows="5" placeholder="Your Message"></textarea>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="footer">
        <div className="container">
          <p>© 2026 Dinindu Jayampathi Hettiarachchi. All rights reserved.</p>
          <p>Built with <i className="fas fa-heart" style={{ color: '#ff6584' }}></i> using React</p>
        </div>
      </footer>
    </div>
  );
}

export default App;