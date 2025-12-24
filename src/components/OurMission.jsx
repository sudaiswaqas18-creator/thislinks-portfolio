import React from 'react';
import '../styles/OurMission.css';

const OurMission = () => {
  return (
    <section className="our-mission-section">      
      <div className="our-mission-container">
            <div className="image-item image-top">
              <img 
                src="/assets/images/our-mission.png" 
                alt="AI Technology" 
              />
            </div>

        {/* Right Side - Mission Text */}
        <div className="content-right">
          <span className="section-label">Our Mission</span>
          <h2 className="section-heading">
            To improve communication and information flow in business
          </h2>
          
          <p className="description-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>

          <p className="description-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
            
      {/* Crane Illustration - Top Right */}
      <div className="crane-illustration">
        <img 
          src="/assets/images/crane-frame.svg"
          alt=""
        />
      </div>
    </section>
    
  );
};

export default OurMission;