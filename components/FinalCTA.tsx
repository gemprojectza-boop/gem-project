


import React from 'react';
import { MediaContent } from '../types.ts';
import EditableMedia from './EditableMedia.tsx';
import CtaButton from './CtaButton.tsx';
import { PawIcon } from './icons.tsx';

interface SectionProps {
  mediaContent: MediaContent;
  isEditMode: boolean;
  onMediaUpdate: (key: string, url: string) => void;
}

const FinalCTA: React.FC<SectionProps> = ({ mediaContent, isEditMode, onMediaUpdate }) => {
  const mediaKey = 'final_cta_image'; // Updated to use new Final CTA Banner image
  const mediaUrl = mediaContent[mediaKey];

  return (
    <>
        {/* Final Call to Action */}
        <section id="final_cta" className="relative py-24 md:py-40 text-white bg-brand-text-primary animate-on-scroll">
        {mediaUrl && (
            <div className="absolute inset-0">
            <EditableMedia
                mediaKey={mediaKey}
                mediaUrl={mediaUrl}
                alt="Collage of sanctuary animals and volunteers"
                className="w-full h-full object-cover"
                isEditMode={isEditMode}
                onUpdate={onMediaUpdate}
            />
            </div>
        )}
        <div className="relative container mx-auto px-6 text-center" style={{textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            <div className="content-bubble content-bubble-inverted max-w-4xl mx-auto" style={{background: 'rgba(0,0,0,0.3)', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
              <div className="p-6 md:p-8" style={{textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                <h2 className="text-3xl md:text-5xl font-black uppercase tracking-wider text-brand-primary text-shadow-strong" style={{textAlign: 'center', margin: '0 auto'}}>
                  <span>Give them what they've never had—a future.</span>
                </h2>
                  <p className="text-lg my-6 text-shadow-custom" style={{textAlign: 'center', margin: '0 auto'}}>
                  Every dog and horse in our care has come from hardship, but with your help, their story doesn't end there. Your support helps create the safety, love and second chances they deserve.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4" style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', textAlign: 'center', margin: '0 auto'}}>
                      <CtaButton href="/get-involved#hands-on-care" className="bg-brand-secondary hover:bg-brand-secondary-hover text-white">Hands-On Care - Dogs</CtaButton>
                      <CtaButton href="/horses#hands-on" className="bg-brand-accent hover:bg-brand-accent-hover text-white">Hands-On Care - Horses</CtaButton>
                      <CtaButton href="/dogs/sponsorship" className="bg-brand-secondary hover:bg-brand-secondary-hover text-white btn-pulse">Sponsor a Dog</CtaButton>
                      <CtaButton href="/horses#sponsor" className="bg-brand-accent hover:bg-brand-accent-hover text-white btn-pulse">Sponsor a Horse</CtaButton>
                      <CtaButton href="/donate" className="bg-brand-primary hover:bg-brand-primary-hover text-white btn-pulse">Donate</CtaButton>
                      <CtaButton href="/dogs" className="bg-brand-secondary hover:bg-brand-secondary-hover text-white">Adopt a Dog</CtaButton>
                      <CtaButton href="/horses" className="bg-brand-accent hover:bg-brand-accent-hover text-white">Adopt a Horse</CtaButton>
                      <CtaButton href="/get-involved#volunteer" className="bg-brand-yellow hover:bg-brand-yellow-hover text-brand-text-primary">Volunteer</CtaButton>
                  </div>
              </div>
            </div>
        </div>
        </section>
    </>
  );
};

export default FinalCTA;