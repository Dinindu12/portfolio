// ===== PROJECTS DATA with CATEGORY =====
const projects = [
  {
    id: 1,
    title: 'Royal Birthday Wishes',
    desc: 'උපන්දින සුභ පැතුම් කළමනාකරණය කරන Web App එකක්. Admin Panel සහ Cloud Loading සහිතයි.',
    tech: ['HTML', 'CSS', 'JS', 'Cloud'],
    link: 'https://hirushi12.github.io/Birthday_wish/',
    icon: 'fa-birthday-cake',
    category: 'web'
  },
  {
    id: 2,
    title: 'ZORO LIVE - Top-Up Store',
    desc: 'ගේම් ඩයමන්ඩ් Top-Up කිරීමේ Online Store එක. 24/7 Service, WhatsApp Integration.',
    tech: ['HTML', 'CSS', 'JS', 'Dashboard'],
    link: 'https://hirushi12.github.io/zoro-topup/',
    icon: 'fa-gamepad',
    category: 'web'
  },
  {
    id: 3,
    title: 'Annual Trip - Sri Lanka',
    desc: 'ශ්‍රී ලංකාවේ සංචාරක ගමනාන්ත සොයාගැනීමේ Platform එක. YouTube Vlog Integration.',
    tech: ['HTML', 'CSS', 'JS', 'API'],
    link: 'https://dinindu12.github.io/annual_trip/',
    icon: 'fa-umbrella-beach',
    category: 'web'
  },
  {
    id: 4,
    title: 'TechZone Gadget Store',
    desc: 'ඉලෙක්ට්‍රොනික භාණ්ඩ අලෙවි කරන Online Store. Stock Status සහිත UI එකක්.',
    tech: ['HTML', 'CSS', 'JS', 'E-commerce'],
    link: 'https://dinindu12.github.io/techzone/',
    icon: 'fa-laptop',
    category: 'web'
  },
  {
    id: 5,
    title: 'Social Downloader Pro',
    desc: 'One-tap video & photo downloader from YouTube, TikTok, Instagram, Facebook, Twitter, Pinterest, Reddit, Snapchat and more. No watermark, fast and free.',
    tech: ['HTML', 'CSS', 'JS', 'API'],
    link: 'https://dinindu12.github.io/social/',
    icon: 'fa-download',
    category: 'web'
  },
  {
    id: 6,
    title: 'QR Code Generator',
    desc: 'Generate QR codes instantly for any URL or text. Download in high quality and share with anyone.',
    tech: ['HTML', 'CSS', 'JS', 'API'],
    link: 'https://dinindu12.github.io/qr_generator/',
    icon: 'fa-qrcode',
    category: 'web'
  },
  {
    id: 7,
    title: 'Weather Forecast App',
    desc: 'Real-time weather updates with 3-day forecast. Search any city and get temperature, humidity, wind speed, and more.',
    tech: ['HTML', 'CSS', 'JS', 'API'],
    link: 'https://dinindu12.github.io/weather-app/',
    icon: 'fa-cloud-sun',
    category: 'web'
  },
  {
    id: 8,
    title: 'Currency Converter',
    desc: 'Real-time currency converter with live exchange rates. Convert between 20+ currencies with instant results.',
    tech: ['HTML', 'CSS', 'JS', 'API'],
    link: 'https://dinindu12.github.io/Currency-Converter/',
    icon: 'fa-money-bill-wave',
    category: 'web'
  },
  {
    id: 10,
    title: '3D Product Viewer',
    desc: 'Interactive 3D model viewer with rotation, zoom, color customization, and model gallery. Built with Three.js.',
    tech: ['Three.js', 'HTML', 'CSS', 'JS'],
    link: 'https://dinindu12.github.io/3d-product-viewer/',
    icon: 'fa-cube',
    category: '3d'
  },
  {
    id: 12,
    title: 'Bot Analytics Dashboard',
    desc: 'Real-time bot analytics dashboard with user growth, command usage, performance metrics, and message activity tracking. Full CRUD operations with live data.',
    tech: ['HTML', 'CSS', 'JS', 'Chart.js'],
    link: 'https://dinindu12.github.io/bot-analytics/',
    icon: 'fa-chart-line',
    category: 'bot'
  },
  {
    id: 13,
    title: 'YouTube Music Player',
    desc: 'Search and play YouTube music with real-time playback, queue management, favorites, offline detection, and download features.',
    tech: ['HTML', 'CSS', 'JS', 'YouTube API'],
    link: 'https://dinindu12.github.io/youtube-music-player/',
    icon: 'fa-youtube',
    category: 'web'
  },
  {
    id: 14,
    title: 'Aruna Book Shop',
    desc: 'Online Book Shop - Visit and Order books easily.',
    tech: ['HTML', 'CSS', 'JS', 'Vercel'],
    link: 'https://bookshop-customer.vercel.app/',
    icon: 'fa-book',
    category: 'web'
  },
  {
  id: 15,
  title: 'Student Management',
  desc: 'Full POS System - Student Management System.',
  tech: ['HTML', 'CSS', 'JS', 'Supabase'],
  link: 'https://dinindu12.github.io/student-management/',
  icon: 'fa-user-graduate',   // <-- changed to this
  category: 'web'
  }
];

// ===== TESTIMONIALS DATA =====
const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    title: 'CEO, TechStart',
    avatar: '👨‍💼',
    text: 'Dinindu delivered our website in record time. His attention to detail and coding skills are impressive. Highly recommended!',
    stars: 5
  },
  {
    id: 2,
    name: 'Sarah Smith',
    title: 'Founder, Creative Studio',
    avatar: '👩‍💼',
    text: 'Working with Dinindu was a pleasure. He understood our vision perfectly and executed it flawlessly. Will definitely work with him again.',
    stars: 5
  },
  {
    id: 3,
    name: 'Mike Johnson',
    title: 'Project Manager, AppWorks',
    avatar: '🧑‍💻',
    text: 'Professional, responsive, and highly skilled. Dinindu is the developer you want on your team. He delivers quality work on time.',
    stars: 5
  }
];

// ===== FAQ DATA =====
const faqs = [
  {
    question: 'How long does it take to build a website?',
    answer: 'The timeline depends on the complexity of the project. A simple website can take 2-3 days, while a complex web application may take 2-4 weeks. I will provide a clear timeline during our discovery call.'
  },
  {
    question: 'What is your pricing structure?',
    answer: 'I offer fixed-price packages based on project scope and complexity. Contact me for a free consultation and custom quote tailored to your specific needs.'
  },
  {
    question: 'Do you offer support after the project is complete?',
    answer: 'Yes! I provide 30 days of free support after launch. I also offer ongoing maintenance packages if you need long-term support.'
  },
  {
    question: 'Can you work with my existing website?',
    answer: 'Absolutely! I can work with existing codebases, improve performance, add new features, or completely redesign your website.'
  },
  {
    question: 'What technologies do you specialize in?',
    answer: 'I specialize in HTML, CSS, JavaScript, React.js, Node.js, Python, C#, Blender, SketchUp, and bot development (Discord, Telegram). I also work with WordPress and SQL databases.'
  }
];

// ===== RENDER PROJECTS =====
function renderProjects(filter = 'all') {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  const filtered = filter === 'all' ? projects : projects.filter(p => p.category === filter);

  grid.innerHTML = filtered.map(project => `
    <div class="project-card" data-category="${project.category}">
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

// ===== PROJECT FILTER =====
function setupFilter() {
  const buttons = document.querySelectorAll('.filter-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', function() {
      buttons.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      const filter = this.dataset.filter;
      renderProjects(filter);
    });
  });
}

// ===== RENDER TESTIMONIALS =====
function renderTestimonials() {
  const grid = document.getElementById('testimonials-grid');
  if (!grid) return;

  grid.innerHTML = testimonials.map(t => `
    <div class="testimonial-card">
      <div class="stars">
        ${'<i class="fas fa-star"></i>'.repeat(t.stars)}
      </div>
      <blockquote>"${t.text}"</blockquote>
      <div class="client-info">
        <div class="client-avatar">${t.avatar}</div>
        <div>
          <div class="client-name">${t.name}</div>
          <div class="client-title">${t.title}</div>
        </div>
      </div>
    </div>
  `).join('');
}

// ===== RENDER FAQ =====
function renderFAQ() {
  const container = document.getElementById('faq-container');
  if (!container) return;

  container.innerHTML = faqs.map((faq, index) => `
    <div class="faq-item">
      <div class="faq-question" onclick="toggleFAQ(this)">
        <span>${faq.question}</span>
        <span class="faq-icon"><i class="fas fa-chevron-down"></i></span>
      </div>
      <div class="faq-answer">${faq.answer}</div>
    </div>
  `).join('');
}

// ===== FAQ TOGGLE =====
function toggleFAQ(element) {
  const item = element.closest('.faq-item');
  const isActive = item.classList.contains('active');

  // Close all
  document.querySelectorAll('.faq-item').forEach(el => el.classList.remove('active'));

  // Open clicked if it was closed
  if (!isActive) {
    item.classList.add('active');
  }
}

// ===== SCROLL TO HOME ON PAGE LOAD =====
window.addEventListener('load', function() {
  window.scrollTo({
    top: 0,
    behavior: 'instant'
  });

  setTimeout(function() {
    const homeSection = document.getElementById('home');
    if (homeSection) {
      homeSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }, 200);
});

// ===== MAIN INIT =====
document.addEventListener('DOMContentLoaded', function() {
  renderProjects('all');
  renderTestimonials();
  renderFAQ();
  setupFilter();

  const hamburger = document.getElementById('hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function() {
      navLinks.classList.toggle('active');
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });
  }

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

  const contactForm = document.querySelector('.contact-form');

  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();

      const submitBtn = this.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = 'Sending...';
      submitBtn.disabled = true;

      const name = this.querySelector('input[name="name"]').value;
      const email = this.querySelector('input[name="email"]').value;
      const message = this.querySelector('textarea[name="message"]').value;

      const now = new Date();
      const time = now.toLocaleString('en-US', {
        dateStyle: 'full',
        timeStyle: 'short'
      });

      const templateParams = {
        name: name,
        email: email,
        message: message,
        time: time
      };

      emailjs.send('service_fdygfbu', 'template_zbeheni', templateParams)
        .then(function(response) {
          alert('✅ Message sent successfully! I will get back to you soon.');
          contactForm.reset();
          submitBtn.textContent = originalText;
          submitBtn.disabled = false;
        })
        .catch(function(error) {
          alert('❌ Something went wrong. Please try again.');
          console.error('Error:', error);
          submitBtn.textContent = originalText;
          submitBtn.disabled = false;
        });
    });
  }
});

window.toggleFAQ = toggleFAQ;
