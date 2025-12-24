import React from 'react';
import '../styles/HowItWorks.css';

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      number: '01',
      title: 'Information Collection',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...'
    },
    {
      id: 2,
      number: '02',
      title: 'Project Report Analysis',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...'
    },
    {
      id: 3,
      number: '03',
      title: 'Project Procedure',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...'
    }
  ];

  return (
    <section className="how-it-works-section">
      <div className="how-it-works-container">
        
        <div className="how-it-works-left">
          <span className="section-label">Who Work</span>
          <h2 className="section-title">How This Links Work</h2>
          
          <div className="steps-list">
            {steps.map((step) => (
              <div key={step.id} className="step-item">
                <div className="step-number">{step.number}</div>
                <div className="step-content">
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-description">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="how-it-works-right">
          <div className="video-wrapper">
            <img 
              src="/assets/images/heart-picture.svg"
              alt="Construction Site"
              className="construction-image"
            />
            <button 
              className="play-button" 
              onClick={() => console.log('Play video')}
              aria-label="Play video"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;