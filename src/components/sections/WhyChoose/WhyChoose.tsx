import React from 'react';
import { Button } from '../../Button';
import { SectionTitle } from '../../ui/SectionTitle';
import { WhyChooseContent } from './WhyChooseContent';
import { GridBackground } from '../../effects/GridBackground';

export function WhyChoose() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-gray-900 to-black overflow-hidden">
      <GridBackground />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Why Choose RapidX.AI"
          description="Experience the future of business automation with our specialized AI teams"
          gradient
        />
        
        <WhyChooseContent />
        
        <div className="mt-16 text-center">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 font-medium tracking-wide"
          >
            Book a Call to Learn More About Our Teams
          </Button>
        </div>
      </div>
    </section>
  );
}