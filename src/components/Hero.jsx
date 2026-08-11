import React from 'react';

function Hero() {
  return (
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
            <a href="https://github.com/dinindu12" target="_blank" rel="noreferrer" aria-label="GitHub"><i className="fab fa-github"></i></a>
            <a href="#" target="_blank" rel="noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
            <a href="#" target="_blank" rel="noreferrer" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
            <a href="#" target="_blank" rel="noreferrer" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-avatar">
            <span>👨‍💻</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;