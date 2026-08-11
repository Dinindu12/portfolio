import React from 'react';

function About() {
  return (
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
  );
}

export default About;