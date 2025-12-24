import React from 'react';
import '../styles/About.css';

const About = () => {
  const features = [
    {
      id: 1,
      title: 'Certified & Awards Winner',
      icon: (
        <svg viewBox="0 0 64 64" fill="currentColor">
          <path d="M32 8L34 18L44 20L34 22L32 32L30 22L20 20L30 18L32 8Z"/>
          <rect x="28" y="30" width="8" height="16" rx="2"/>
          <circle cx="32" cy="22" r="10" fill="none" stroke="currentColor" strokeWidth="2"/>
          <path d="M29 22L31 24L35 20" fill="none" stroke="currentColor" strokeWidth="2"/>
        </svg>
      )
    },
    {
      id: 2,
      title: 'Best Quality Service',
      icon: (
        <svg viewBox="0 0 64 64" fill="currentColor">
          <circle cx="32" cy="32" r="24" fill="none" stroke="currentColor" strokeWidth="3"/>
          <path d="M20 32L28 40L44 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="32" cy="32" r="16" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.3"/>
        </svg>
      )
    }
  ];

  return (
    <section id="about" className="about-section">
      {/* Background Decorative SVG */}
      <div className="background-decoration">
        <img 
          src="/assets/images/stylish-line.svg"
          alt="" 
          className="decorative-svg"
        />
      </div>
      
      <div className="about-container">
        <div className="content-left">
          <span className="section-label">About Us</span>
          <h2 className="section-heading">Manage Your Workforce</h2>
          
          <p className="description-text">
            Streamline resource management with our all-in-one platform, designed to handle
            everything from personnel tracking to equipment logistics. Streamline resource
            management with our all-in-one platform, designed to handle everything from
            personnel tracking to equipment logistics.
          </p>

          <div className="features-badges">
            {features.map((feature) => (
              <div key={feature.id} className="feature-badge">
                <div className="feature-icon">{feature.icon}</div>
                <span className="feature-title">{feature.title}</span>
              </div>
            ))}
          </div>

          <p className="additional-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna
          </p>

          <button className="discover-button">Discover</button>
        </div>

        <div className="content-right">
          <div className="team-image-wrapper">
            <img 
              src="/assets/images/about-us-image.png"
              alt="Professional team" 
              className="team-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;