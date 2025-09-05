
import React from 'react';
import CtaButton from '../CtaButton.tsx';
import { PawIcon } from '../icons.tsx';

interface PlaceholderSectionProps {
  sectionId: string;
  title: string;
}

const PlaceholderSection: React.FC<PlaceholderSectionProps> = ({ sectionId, title }) => {
  return (
    <section id={sectionId} className="py-16 md:py-20 bg-sanctuary-subtle-bg last-of-type:bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
            <div className="content-bubble">
                <PawIcon className="w-16 h-16 text-sanctuary-purple mx-auto mb-6" />
                <h2 className="text-3xl md:text-4xl font-bold text-sanctuary-dark mb-4 text-center">
                    {title}
                </h2>
                <p className="text-2xl text-gray-600 mb-2 text-center">
                    Content Coming Soon!
                </p>
                <p className="text-lg text-gray-700 mb-10 text-center">
                    We're working hard to bring this section to life. Please check back soon for more information about our {title.toLowerCase()}.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                    <CtaButton href="/" className="bg-sanctuary-purple hover:bg-sanctuary-purple/80 text-white">
                    Return Home
                    </CtaButton>
                    <CtaButton href="/contact" className="bg-white hover:bg-gray-200 text-sanctuary-dark">
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