import React from 'react';

function Skills() {
  return (
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
  );
}

export default Skills;