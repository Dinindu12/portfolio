import React from 'react';

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
  },
  {
    id: 5,
    title: 'Social Downloader Pro',
    desc: 'One-tap video & photo downloader from YouTube, TikTok, Instagram, Facebook, Twitter, Pinterest, Reddit, Snapchat and more. No watermark, fast and free.',
    tech: ['HTML', 'CSS', 'JS', 'API'],
    link: 'https://dinindu12.github.io/social/',
    icon: 'fa-download'
  },
  {
    id: 6,
    title: 'QR Code Generator',
    desc: 'Generate QR codes instantly for any URL or text. Download in high quality and share with anyone.',
    tech: ['HTML', 'CSS', 'JS', 'API'],
    link: 'https://dinindu12.github.io/qr_generator/',
    icon: 'fa-qrcode'
  }
];

function Projects() {
  return (
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
  );
}

export default Projects;