import React from 'react';
import CtaButton from '../CtaButton.tsx';
import { PawIcon } from '../icons.tsx';

interface PlaceholderSectionProps {
  sectionId: string;
  title: string;
}

const PlaceholderSection: React.FC<PlaceholderSectionProps> = ({ sectionId, title }) => {
  return (
    <section id={sectionId} className="py-16 md:py-20 bg-brand-bg-subtle odd:bg-brand-bg-main">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-2xl mx-auto">
            <div className="content-bubble">
                <PawIcon className="w-16 h-16 text-brand-primary mx-auto mb-6" />
                <h2 className="text-3xl md:text-4xl font-bold text-sanctuary-dark mb-4">
                    {title}
                </h2>
                <p className="text-2xl text-gray-600 mb-2">
                    Content Coming Soon!
                </p>
                <p className="text-lg text-gray-700 mb-10">
                    We're working hard to bring this section to life. Please check back soon for more information about our {title.toLowerCase()}.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                    <CtaButton href="/" className="bg-brand-primary hover:bg-brand-primary-hover text-white">
                    Return Home
                    </CtaButton>
                    <CtaButton href="/contact" className="bg-transparent border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white">
                    Contact Us
                    </CtaButton>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default PlaceholderSection;