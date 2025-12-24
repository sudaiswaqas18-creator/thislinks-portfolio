const fs = require("fs");
const path = require("path");

console.log("🚀 Setting up THIS-LINKS Portfolio Project...\n");

// ====== FOLDER STRUCTURE ======
const folders = [
  "src/components",
  "src/styles",
  "src/pages",
  "public/assets/images",
];

// ====== FILES TO CREATE ======
const files = {
  // ========== COMPONENTS ==========

  "src/components/Navbar.jsx": `import React, { useState } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <div className="logo-icon">
            <svg viewBox="0 0 50 50" className="logo-svg">
              <circle cx="25" cy="25" r="20" fill="#22c55e" opacity="0.2"/>
              <path d="M15 25 L25 15 L35 25 L25 35 Z" fill="#22c55e"/>
            </svg>
          </div>
          <div className="logo-text">
            <h1>THIS-LINKS</h1>
            <p>CONSTRUCTION COMPANY</p>
          </div>
        </div>

        <ul className={\`navbar-menu \${isOpen ? 'active' : ''}\`}>
          <li><a href="#about">About</a></li>
          <li><a href="#mission">Our Mission</a></li>
          <li><a href="#what-we-do">What We Do</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <button className="login-btn">
          <span>Login</span>
          <div className="user-icon">
            <svg viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="8" r="4" stroke="white" strokeWidth="2"/>
              <path d="M4 20c0-4 3-7 8-7s8 3 8 7" stroke="white" strokeWidth="2"/>
            </svg>
          </div>
        </button>

        <div className="mobile-menu-icon" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;`,

  "src/components/Hero.jsx": `import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Welcome to THIS-LINKS</h1>
        <p className="hero-subtitle">Building Your Dreams, One Project at a Time</p>
        <button className="hero-btn">Get Started</button>
      </div>
    </section>
  );
};

export default Hero;`,

  "src/components/About.jsx": `import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="section-title">About Us</h2>
        <p className="section-text">Leading construction company delivering excellence since 2010.</p>
      </div>
    </section>
  );
};

export default About;`,

  "src/components/Services.jsx": `import React from 'react';
import '../styles/Services.css';

const Services = () => {
  return (
    <section id="what-we-do" className="services section">
      <div className="container">
        <h2 className="section-title">What We Do</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3>Construction</h3>
            <p>Professional construction services</p>
          </div>
          <div className="service-card">
            <h3>Renovation</h3>
            <p>Complete renovation solutions</p>
          </div>
          <div className="service-card">
            <h3>Consulting</h3>
            <p>Expert construction consulting</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;`,

  "src/components/Projects.jsx": `import React from 'react';
import '../styles/Projects.css';

const Projects = () => {
  return (
    <section className="projects section">
      <div className="container">
        <h2 className="section-title">Our Projects</h2>
        <p className="section-text">Explore our completed projects and ongoing work.</p>
      </div>
    </section>
  );
};

export default Projects;`,

  "src/components/Contact.jsx": `import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact section">
      <div className="container">
        <h2 className="section-title">Contact Us</h2>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" className="form-input" />
          <input type="email" placeholder="Your Email" className="form-input" />
          <textarea placeholder="Your Message" className="form-textarea"></textarea>
          <button type="submit" className="form-btn">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;`,

  "src/components/Footer.jsx": `import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; 2024 THIS-LINKS Construction Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;`,

  // ========== PAGES ==========

  "src/pages/.jsx": `import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const  = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Projects />
      <Contact />
    </>
  );
};

export default ;`,

  "src/pages/AboutPage.jsx": `import React from 'react';

const AboutPage = () => {
  return (
    <div className="page">
      <div className="container">
        <h1>About Page</h1>
        <p>Detailed about information coming soon...</p>
      </div>
    </div>
  );
};

export default AboutPage;`,

  "src/pages/MissionPage.jsx": `import React from 'react';

const MissionPage = () => {
  return (
    <div className="page">
      <div className="container">
        <h1>Our Mission</h1>
        <p>Our mission and values coming soon...</p>
      </div>
    </div>
  );
};

export default MissionPage;`,

  "src/pages/WhatWeDoPage.jsx": `import React from 'react';

const WhatWeDoPage = () => {
  return (
    <div className="page">
      <div className="container">
        <h1>What We Do</h1>
        <p>Detailed services information coming soon...</p>
      </div>
    </div>
  );
};

export default WhatWeDoPage;`,

  "src/pages/ContactPage.jsx": `import React from 'react';

const ContactPage = () => {
  return (
    <div className="page">
      <div className="container">
        <h1>Contact Page</h1>
        <p>Contact form and details coming soon...</p>
      </div>
    </div>
  );
};

export default ContactPage;`,

  // ========== STYLES ==========

  "src/styles/Global.css": `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Inter, sans-serif;
}

:root {
  --primary-green: #22c55e;
  --primary-dark: #16a34a;
  --text-dark: #0f172a;
  --text-medium: #475569;
  --text-light: #64748b;
  --background-light: #f0f9ff;
  --background-lighter: #e0f2fe;
  --white: #ffffff;
  --spacing-xs: 0.5rem;
  --spacing-sm: 1rem;
  --spacing-md: 2rem;
  --spacing-lg: 3rem;
  --spacing-xl: 4rem;
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 20px;
  --radius-full: 50px;
  --shadow-sm: 0 2px 10px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 15px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 30px rgba(0, 0, 0, 0.15);
  --transition-fast: 0.2s ease;
  --transition-normal: 0.3s ease;
  --transition-slow: 0.5s ease;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
  color: var(--text-dark);
  line-height: 1.6;
  overflow-x: hidden;
}

h1, h2, h3, h4, h5, h6 {
  font-weight: 700;
  line-height: 1.2;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
}

.section {
  padding: var(--spacing-xl) 0;
}

.section-title {
  font-size: 2.5rem;
  margin-bottom: var(--spacing-md);
  text-align: center;
  color: var(--text-dark);
}

.section-text {
  font-size: 1.1rem;
  color: var(--text-medium);
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
}`,

  "src/styles/Navbar.css": `.navbar {
  background: linear-gradient(135deg, var(--background-light) 0%, var(--background-lighter) 100%);
  padding: var(--spacing-xs) 0;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: var(--shadow-sm);
}

.navbar-container {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 var(--spacing-md);
}

.navbar-logo {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  cursor: pointer;
}

.logo-icon {
  width: 50px;
  height: 50px;
}

.logo-svg {
  width: 100%;
  height: 100%;
}

.logo-text h1 {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-dark);
  margin: 0;
  letter-spacing: -0.5px;
}

.logo-text p {
  font-size: 0.7rem;
  color: var(--text-light);
  margin: 0;
  letter-spacing: 1px;
  font-weight: 500;
}

.navbar-menu {
  display: flex;
  list-style: none;
  gap: 2.5rem;
  margin: 0;
  padding: 0;
}

.navbar-menu li {
  position: relative;
}

.navbar-menu a {
  color: var(--text-medium);
  font-size: 1rem;
  font-weight: 500;
  transition: color var(--transition-normal);
  position: relative;
}

.navbar-menu a:hover {
  color: var(--primary-green);
}

.navbar-menu a::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--primary-green);
  transition: width var(--transition-normal);
}

.navbar-menu a:hover::after {
  width: 100%;
}

.login-btn {
  background: var(--primary-green);
  color: var(--white);
  padding: 0.7rem 1.5rem;
  border-radius: var(--radius-full);
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  font-size: 1rem;
  font-weight: 600;
  transition: all var(--transition-normal);
  box-shadow: 0 4px 15px rgba(34, 197, 94, 0.3);
}

.login-btn:hover {
  background: var(--primary-dark);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(34, 197, 94, 0.4);
}

.user-icon {
  width: 24px;
  height: 24px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
}

.mobile-menu-icon {
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
}

.mobile-menu-icon span {
  width: 25px;
  height: 3px;
  background: var(--text-dark);
  border-radius: 3px;
  transition: all var(--transition-normal);
}

@media (max-width: 768px) {
  .navbar-menu {
    position: absolute;
    top: 70px;
    left: 0;
    right: 0;
    background: var(--white);
    flex-direction: column;
    padding: var(--spacing-md);
    gap: 1.5rem;
    box-shadow: var(--shadow-lg);
    transform: translateX(-100%);
    transition: transform var(--transition-normal);
  }

  .navbar-menu.active {
    transform: translateX(0);
  }

  .mobile-menu-icon {
    display: flex;
  }

  .login-btn {
    display: none;
  }
}`,

  "src/styles/Hero.css": `.hero {
  min-height: 90vh;
  background: linear-gradient(135deg, var(--background-light) 0%, var(--background-lighter) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-md);
}

.hero-content {
  text-align: center;
  max-width: 800px;
}

.hero-title {
  font-size: 3rem;
  color: var(--text-dark);
  margin-bottom: var(--spacing-sm);
  animation: fadeInUp 0.8s ease;
}

.hero-subtitle {
  font-size: 1.3rem;
  color: var(--text-light);
  margin-bottom: var(--spacing-md);
  animation: fadeInUp 1s ease;
}

.hero-btn {
  background: var(--primary-green);
  color: var(--white);
  padding: 1rem 2rem;
  border-radius: var(--radius-full);
  font-size: 1.1rem;
  font-weight: 600;
  transition: all var(--transition-normal);
  animation: fadeInUp 1.2s ease;
}

.hero-btn:hover {
  background: var(--primary-dark);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(34, 197, 94, 0.4);
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2rem;
  }
  .hero-subtitle {
    font-size: 1rem;
  }
}`,

  "src/styles/About.css": `.about {
  background: var(--white);
}`,

  "src/styles/Services.css": `.services {
  background: var(--background-light);
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-md);
  margin-top: var(--spacing-md);
}

.service-card {
  background: var(--white);
  padding: var(--spacing-md);
  border-radius: var(--radius-md);
  text-align: center;
  box-shadow: var(--shadow-sm);
  transition: transform var(--transition-normal);
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-md);
}`,

  "src/styles/Projects.css": `.projects {
  background: var(--white);
}`,

  "src/styles/Contact.css": `.contact {
  background: var(--background-light);
}

.contact-form {
  max-width: 600px;
  margin: var(--spacing-md) auto 0;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.form-input,
.form-textarea {
  padding: var(--spacing-sm);
  border: 2px solid #e2e8f0;
  border-radius: var(--radius-sm);
  font-size: 1rem;
  transition: border-color var(--transition-normal);
}

.form-input:focus,
.form-textarea:focus {
  outline: none;
  border-color: var(--primary-green);
}

.form-textarea {
  min-height: 150px;
  resize: vertical;
}

.form-btn {
  background: var(--primary-green);
  color: var(--white);
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--radius-sm);
  font-size: 1rem;
  font-weight: 600;
  transition: all var(--transition-normal);
}

.form-btn:hover {
  background: var(--primary-dark);
}`,

  "src/styles/Footer.css": `.footer {
  background: var(--text-dark);
  color: var(--white);
  padding: var(--spacing-md) 0;
  text-align: center;
}`,

  // ========== MAIN APP FILES ==========

  "src/App.js": `import React from 'react';
import Navbar from './components/Navbar';
import  from './pages/';
import Footer from './components/Footer';
import './styles/Global.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      < />
      <Footer />
    </div>
  );
}

export default App;`,

  "src/index.js": `import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/Global.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);`,
};

// ====== CREATE FOLDERS ======
console.log("📁 Creating folders...\n");
folders.forEach((folder) => {
  const folderPath = path.join(process.cwd(), folder);
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
    console.log(`   ✅ ${folder}`);
  } else {
    console.log(`   ⏭️  ${folder} (already exists)`);
  }
});

// ====== CREATE FILES ======
console.log("\n📄 Creating files...\n");
Object.keys(files).forEach((filePath) => {
  const fullPath = path.join(process.cwd(), filePath);
  fs.writeFileSync(fullPath, files[filePath]);
  console.log(`   ✅ ${filePath}`);
});

console.log("\n" + "=".repeat(50));
console.log("✅ SETUP COMPLETE!");
console.log("=".repeat(50));
console.log("\n🚀 Next steps:\n");
console.log("   1. npm install react-router-dom");
console.log("   2. npm start\n");
console.log("🎉 Your portfolio is ready to code!\n");
