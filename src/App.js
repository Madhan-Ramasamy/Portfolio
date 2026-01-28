import React, { useEffect, useRef } from 'react';
import './App.scss';
import profilePic from './profile.jpeg'; 

// Icons
const PhoneIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>;
const MailIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>;
const LinkedInIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>;
const GithubIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>;

const App = () => {
  const cursorDot = useRef(null);
  const cursorOutline = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      const posX = e.clientX;
      const posY = e.clientY;
      if (cursorDot.current) { cursorDot.current.style.left = `${posX}px`; cursorDot.current.style.top = `${posY}px`; }
      if (cursorOutline.current) { cursorOutline.current.animate({ left: `${posX}px`, top: `${posY}px` }, { duration: 500, fill: "forwards" }); }
    };
    window.addEventListener("mousemove", moveCursor);

    const handleHover = () => cursorOutline.current.classList.add("hover-active");
    const handleLeave = () => cursorOutline.current.classList.remove("hover-active");
    const handleImgHover = () => cursorOutline.current.classList.add("image-active");
    const handleImgLeave = () => cursorOutline.current.classList.remove("image-active");

    const interactables = document.querySelectorAll('a, button, .nav-item, .skill-card');
    interactables.forEach(el => { el.addEventListener("mouseenter", handleHover); el.addEventListener("mouseleave", handleLeave); });

    const images = document.querySelectorAll('.hero-image img');
    images.forEach(el => { el.addEventListener("mouseenter", handleImgHover); el.addEventListener("mouseleave", handleImgLeave); });

    return () => { window.removeEventListener("mousemove", moveCursor); };
  }, []);

  const skills = [
    { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'ReactJS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Sass', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg' },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'Flask', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg' },
    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  ];

  return (
    <div className="portfolio">
      <div className="cursor-dot" ref={cursorDot}></div>
      <div className="cursor-outline" ref={cursorOutline}></div>
      <div className="bg-spotlight"></div>

      {/* Navbar with Fade In Animation */}
      <nav className="navbar animate-fade-down">
        <div className="container nav-flex">
          <h1 className="logo">MADHAN<span className="dot">.</span></h1>
          <div className="nav-items">
            <a href="#about" className="nav-item">About</a>
            <a href="#skills" className="nav-item">Skills</a>
            <a href="#projects" className="nav-item">Projects</a>
            <a href="#contact" className="nav-item contact-btn">Contact</a>
          </div>
        </div>
      </nav>

      <header className="hero" id="home">
        <div className="container hero-content">
          <div className="hero-text">
            <div className="reveal-mask"><h3 className="welcome-tag">PORTFOLIO</h3></div>
            
            <div className="reveal-mask">
              <h1 className="big-name">
                <span className="highlight-name">Madhan</span> 
                <span className="last-name"> Ramasamy</span>
              </h1>
            </div>

            <div className="reveal-mask"><h2 className="gradient-text">Full Stack Developer</h2></div>
            <div className="reveal-mask"><p>
              I design and build high-performance web applications. 
              Specialized in the MERN Stack and Python backend logic.
            </p></div>
            <div className="cta-buttons reveal-mask">
              <a href="#contact" className="btn btn-primary">Hire Me</a>
              <a href="#projects" className="btn btn-glass">Projects</a>
            </div>
          </div>
          
          <div className="hero-image animate-fade-in">
            <div className="img-container">
              <div className="img-frame">
                <img src={profilePic} alt="Madhan Ramasamy" />
              </div>
              
              <div className="code-chip c1">{'<React />'}</div>
              <div className="code-chip c2">{'npm install'}</div>
              <div className="code-chip c3">{'git push'}</div>
              <div className="code-chip c4">{'Python'}</div>
            </div>
          </div>
        </div>
      </header>

      <section className="skills section" id="skills">
        <div className="container">
          <h2 className="section-title">Technical Skills</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div className="skill-card" key={index}>
                <img src={skill.icon} alt={skill.name} />
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="projects section" id="projects">
        <div className="container">
          <h2 className="section-title">Featured Works</h2>
          
          <div className="project-grid">
            <a href="https://dev-vault-react-2u7w.vercel.app/" target="_blank" rel="noopener noreferrer" className="project-card">
              <div className="card-vis gradient-1">
                <div className="vis-content">
                  <h3>DevVault</h3>
                  <span className="live-badge">Live Demo &bull;</span>
                </div>
              </div>
              <div className="card-info">
                <p>Cloud-based code snippet manager.</p>
                <div className="tags">
                  <span>React</span><span>SCSS</span><span>Flask</span>
                </div>
              </div>
            </a>

            <div className="project-card">
              <div className="card-vis gradient-2">
                <div className="vis-content">
                  <h3>Email Tool</h3>
                </div>
              </div>
              <div className="card-info">
                <p>Direct browser-based email dispatcher.</p>
                <div className="tags">
                  <span>React</span><span>SCSS</span><span>Flask</span>
                </div>
              </div>
            </div>
          </div>

          <div className="github-wrapper">
            <a href="https://github.com/Madhan-Ramasamy" target="_blank" rel="noopener noreferrer" className="github-link">
               <GithubIcon />
               <span>Explore my Codebase</span>
            </a>
          </div>
        </div>
      </section>

      <section className="contact section" id="contact">
        <div className="container">
          <div className="contact-card-glass">
            <h2 className="section-title">Let's Connect</h2>
            <div className="contact-grid">
              <a href="tel:+919597386180" className="contact-pill"><PhoneIcon /><span>+91 95973 86180</span></a>
              <a href="mailto:madhanramasamy52@gmail.com" className="contact-pill"><MailIcon /><span>madhanramasamy52@gmail.com</span></a>
              <a href="https://www.linkedin.com/in/madhan-ramasamy-a380b0293/" target="_blank" rel="noopener noreferrer" className="contact-pill"><LinkedInIcon /><span>LinkedIn</span></a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer"><p>© 2026 Madhan Ramasamy</p></footer>
    </div>
  );
};

export default App;