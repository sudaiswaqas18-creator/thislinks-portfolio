import React from 'react';
import '../styles/FeatureCards.css';

const FeatureCards = () => {
  const features = [
    {
      id: 1,
      title: 'Register Your Business',
      image: '/assets/images/feature-card-1-bg.png',
      buttonText: 'Register',
      buttonLink: '#'
    },
    {
      id: 2,
      title: 'Why Should I Join?',
      image: '/assets/images/feature-card-2-bg.png',
      buttonText: 'Discover',
      buttonLink: '#'
    },
    {
      id: 3,
      title: 'Connect with new Technologies',
      image: '/assets/images/feature-card-3-bg.png',
      buttonText: 'Our Technologies',
      buttonLink: '#'
    }
  ];

  return (
    <section className="feature-cards-section">
      {/* Background Crane Decoration */}
      <div className="crane-background">
        <img src="/assets/images/stylish-line.svg" alt="" />
      </div>

      <div className="feature-cards-container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">
            All the features you need<br />
            in one place
          </h2>
          <p className="section-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="cards-grid">
          {features.map((feature) => (
            <div key={feature.id} className="feature-card">
              <div className="card-image-wrapper">
                {/* Background Image */}
                <img src={feature.image} alt={feature.title} className="card-bg-image" />
                
                {/* Arrow Icon - Top Right Corner */}
                <div className="arrow-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>

                {/* Content Overlay - Bottom Left */}
                <div className="card-overlay">
                  <h3 className="card-title">{feature.title}</h3>
                  <a href={feature.buttonLink} className="card-button">
                    {feature.buttonText}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;