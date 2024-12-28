import React from 'react';
import { Header } from './components/Header/Header';
import { Hero } from './components/sections/Hero/Hero';
import { Teams } from './components/sections/Teams/Teams';
import { WhyChoose } from './components/sections/WhyChoose/WhyChoose';
import { ServicesBreakdown } from './components/sections/ServicesBreakdown/ServicesBreakdown';
import { HowItWorks } from './components/sections/HowItWorks/HowItWorks';
import { SocialProof } from './components/sections/SocialProof/SocialProof';
import { About } from './components/sections/About/About';
import { Services } from './components/sections/Services/Services';
import { Testimonials } from './components/sections/Testimonials/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer/Footer';
import { MouseGlow } from './components/effects/MouseGlow';
import { GridBackground } from './components/effects/GridBackground';
import { CustomCursor } from './components/effects/CustomCursor';

export default function App() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden cursor-none">
      <CustomCursor />
      <div className="fixed inset-0 z-0">
        <GridBackground />
      </div>
      
      <MouseGlow />
      
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <Teams />
          <WhyChoose />
          <ServicesBreakdown />
          <HowItWorks />
          <SocialProof />
          <About />
          <Services />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}