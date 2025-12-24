import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import TrustedPartners from '../components/TrustedPartners';
import HowItWorks from '../components/HowItWorks';
import OurMission from '../components/OurMission';
import FeatureCards from '../components/FeatureCards';

const Home = () => {
  return (
    <>
      <Hero />
      <FeatureCards />  {/* ✅ Add this */}
      <OurMission />
      <About />
      <Services />
      <TrustedPartners />
      <HowItWorks />
      <Testimonials />
      <Contact />
    </>
  );
};

export default Home;