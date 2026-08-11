// ===== PROJECTS DATA =====
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

// ===== RENDER PROJECTS =====
function renderProjects() {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  grid.innerHTML = projects.map(project => `
    <div class="project-card">
      <div class="project-icon">
        <i class="fas ${project.icon}"></i>
      </div>
      <h3>${project.title}</h3>
      <p>${project.desc}</p>
      <div class="project-tech">
        ${project.tech.map(t => `<span>${t}</span>`).join('')}
      </div>
      <a href="${project.link}" target="_blank" class="btn btn-primary project-btn">
        Live Demo <i class="fas fa-arrow-right"></i>
      </a>
    </div>
  `).join('');
}

// ===== HAMBURGER MENU =====
document.addEventListener('DOMContentLoaded', function() {
  renderProjects();

  const hamburger = document.getElementById('hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function() {
      navLinks.classList.toggle('active');
    });

    // Close menu when a link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });
  }
});

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href === '#') return;
    
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});