import React from 'react';
import '../styles/Services.css';

const Services = () => {

  const services = [
    {
      id: 1,
      title: 'Manage Workforce',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
      type: 'white',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
        </svg>
      )
    },

    {
      id: 2,
      title: 'Manage Equipments',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
      type: 'dark',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/>
        </svg>
      )
    },

    {
      id: 3,
      title: 'Planning of Work',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
      type: 'mint',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M3 13h2v-2H3v2zm4 0h14v-2H7v2zm-4 6h2v-2H3v2zm4 0h14v-2H7v2zM3 7h2V5H3v2zm4 0h14V5H7v2z"/>
        </svg>
      )
    },

    {
      id: 4,
      title: 'Job Distribution',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
      type: 'dark',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M16 11V5H8v6H2l10 9 10-9h-6z"/>
        </svg>
      )
    },

    {
      id: 5,
      title: 'Sharing Data',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
      type: 'mint',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7 0-.24-.04-.47-.09-.7l7.02-4.11A3 3 0 1 0 15 5a3 3 0 0 0 .09.7L8.07 9.81A3 3 0 1 0 9 12c0-.24-.04-.47-.09-.7l7.12 4.19c.05.22.07.45.07.69A3 3 0 1 0 18 16.08z"/>
        </svg>
      )
    },

    {
      id: 6,
      title: 'Assign & Manage Workplace',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
      type: 'white',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L1 7l11 5 9-4.09V17h2V7L12 2zM3 17v2l9 4 9-4v-2l-9 4-9-4z"/>
        </svg>
      )
    }
  ];

  return (
    <section className="services-section">
      <div className="services-background-text">FEATURES</div>

      <div className="services-container">

        <div className="services-header">
          <span className="services-label">What We Do</span>
          <h2 className="services-title">
            Explore Our Software & <br /> App Features
          </h2>
          <p className="services-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br />
            sed do eiusmod tempor incididunt ut labore
          </p>
        </div>

        <div className="services-grid">
          {services.map(item => (
            <div
              key={item.id}
              className={`service-card ${item.type}`}
            >
              {item.icon && <div className="service-icon">{item.icon}</div>}

              <h3 className="service-title">{item.title}</h3>
              <p className="service-description">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
