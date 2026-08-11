import React, { Suspense, lazy } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import './App.css';

const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Contact = lazy(() => import('./components/Contact'));

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Dinindu Jayampathi | Portfolio - Software Engineer & 3D Designer</title>
        <meta name="description" content="Dinindu Jayampathi Hettiarachchi - Software Engineering Undergraduate at NIBM. Full-stack developer, 3D designer (Blender, SketchUp), and bot creator." />
        <meta name="keywords" content="Dinindu Jayampathi, Software Engineer, Web Developer, 3D Designer, Blender, React, Portfolio" />
        <meta property="og:title" content="Dinindu Jayampathi | Portfolio" />
        <meta property="og:description" content="Software Engineering Undergraduate at NIBM. I build web apps, 3D models, and automation bots." />
        <meta property="og:url" content="https://dinindu12.github.io/portfolio/" />
        <meta property="og:type" content="website" />
        <meta name="theme-color" content="#0a0a1a" />
      </Helmet>
      
      <Navbar />
      <Hero />
      <Suspense fallback={<div className="loading-spinner">Loading...</div>}>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </Suspense>
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