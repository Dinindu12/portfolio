import React from 'react';

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Contact <span>Me</span></h2>
        <div className="contact-container">
          <div className="contact-info">
            <h3>Let's Connect</h3>
            <p>I'm always open to discussing new projects, creative ideas, or opportunities.</p>
            <div className="contact-detail">
              <i className="fas fa-envelope"></i>
              <span>jayampathidinindu@gmail.com</span>
            </div>
            <div className="contact-detail">
              <i className="fas fa-map-marker-alt"></i>
              <span>Colombo, Sri Lanka</span>
            </div>
            <div className="contact-social">
              <a href="https://github.com/dinindu12" target="_blank" rel="noreferrer" aria-label="GitHub"><i className="fab fa-github"></i></a>
              <a href="#" target="_blank" rel="noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
              <a href="#" target="_blank" rel="noreferrer" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
              <a href="#" target="_blank" rel="noreferrer" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
          <form className="contact-form" action="https://formspree.io/f/yourFormID" method="POST">
            <input type="text" name="name" placeholder="Your Name" required aria-label="Your Name" />
            <input type="email" name="email" placeholder="Your Email" required aria-label="Your Email" />
            <textarea name="message" rows="5" placeholder="Your Message" aria-label="Your Message"></textarea>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;