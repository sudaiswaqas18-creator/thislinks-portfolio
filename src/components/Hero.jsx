import React, { useState } from 'react';
import '../styles/Hero.css';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      content: (
        <>
          We have <span className="highlight-green">over 80 years</span> of experience
          designing and constructing high-quality pipe systems worldwide.
        </>
      )
    },
    {
      id: 2,
      content: (
        <>
          Our <span className="highlight-green">expert team</span> delivers reliable
          engineering solutions for global clients and constructing high-quality.
        </>
      )
    },
    {
      id: 3,
      content: (
        <>
          Trusted by <span className="highlight-green">hundreds</span> of companies for
          innovative infrastructure solutions and constructing high-quality pipe systems worldwide.
        </>
      )
    }
  ];

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="hero-section">
      <div className="hero-container">
        
        {/* Left Content - White Background */}
        <div className="hero-left">
          <h1 className="hero-title">
            Tradition <span className="highlight">&</span><br />
            Experience
          </h1>
          <button className="hero-button">Take Our Service</button>
        </div>

        {/* Right Content - Image + Overlapping Card */}
        <div className="hero-right">
          {/* Background Image */}
          <div className="hero-image">
            <img src="/assets/images/hero-background-CPHqS_EQ.png" alt="Construction" />
          </div>

          {/* Overlapping Stats Card */}
          <div className="stats-card">
            <p className="stats-text">
              {slides[currentSlide].content}
            </p>
            <div className="arrow-indicators">
              <button className="arrow-btn arrow-prev" onClick={handlePrev} aria-label="Previous">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="arrow-btn arrow-next" onClick={handleNext} aria-label="Next">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;