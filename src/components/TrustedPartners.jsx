import React from "react";
import "../styles/TrustedPartners.css";

const TrustedPartners = () => {
  const partners = [
    {
      id: 1,
      name: "AESIR",
      image: "/assets/images/client-image-1.svg"
    },
    {
      id: 2,
      name: "INAS",
      image: "/assets/images/client-image-2.svg"
    },
    {
      id: 3,
      name: "Pure",
      image: "/assets/images/client-image-3.svg"
    },
    {
      id: 4,
      name: "Twaajd",
      image: "/assets/images/client-image-4.svg"
    },
    {
      id: 5,
      name: "MARCADO",
      image: "/assets/images/client-image-5.svg"
    }
  ];

  return (
    <section className="trusted-partners-section">
      <div className="trusted-partners-container">
        <div className="partners-grid">
          {partners.map((partner) => (
            <div key={partner.id} className="partner-card">
              <img 
                src={partner.image} 
                alt={partner.name}
                className="partner-logo"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedPartners;