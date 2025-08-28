import React from 'react';
import CtaButton from './CtaButton.tsx';
import { PawIcon } from './icons.tsx';

interface PlaceholderPageProps {
  title: string;
}

const PlaceholderPage: React.FC<PlaceholderPageProps> = ({ title }) => {
  const formattedTitle = title
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return (
    <div className="bg-brand-bg-subtle py-20 md:py-40">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="content-bubble">
            <PawIcon className="w-16 h-16 text-brand-primary mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-brand-text-primary mb-4">
              {formattedTitle}
            </h1>
            <p className="text-2xl text-brand-text-secondary mb-2">
              Content Coming Soon!
            </p>
            <p className="text-lg text-brand-text-secondary mb-10">
              We're working hard to bring this section to life. Please check back soon for more information about our {formattedTitle.toLowerCase()}.
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
    </div>
  );
};

export default PlaceholderPage;