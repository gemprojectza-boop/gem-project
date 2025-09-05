

import React from 'react';
import { MediaContent } from '../../types.ts';
import { sampleHorses } from '../../data/horses.ts';
import HorseProfileCard from './HorseProfileCard.tsx';

interface SectionProps {
  mediaContent: MediaContent;
  isEditMode: boolean;
  onMediaUpdate: (key: string, url: string) => void;
}

const AdoptionSection: React.FC<SectionProps> = (props) => {
  const adoptableHorses = sampleHorses.filter(horse => horse.status === 'Available');

  return (
    <section id="adoption" className="py-16 md:py-20 bg-sanctuary-subtle-bg animate-on-scroll" style={{textAlign: 'center'}}>
        <div className="container mx-auto px-6 max-w-6xl" style={{textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <div className="content-bubble text-center max-w-4xl mx-auto" style={{textAlign: 'center', margin: '0 auto'}}>
                <h2 className="text-3xl md:text-4xl font-bold text-center" style={{textAlign: 'center', color: '#16a34a !important'}}>Meet Our Adoptable Horses</h2>
                <p className="mt-2 text-lg text-gray-600 text-center" style={{textAlign: 'left'}}>Could your pasture be their forever home?</p>
            </div>

            <div className="content-bubble max-w-4xl mx-auto text-lg text-gray-700 space-y-4 text-center" style={{textAlign: 'left', margin: '0 auto', display: 'block'}}>
                <p className="text-center" style={{textAlign: 'left'}}>At The Gem Project Sanctuary, our highest goal is to see once-forgotten horses thrive in safe, loving, and permanent homes. The horses listed here have completed their rehabilitation journey—they have regained their health, confidence, and trust in people—and are now ready to start a new chapter with the right adopter.</p>
                <p className="text-center" style={{textAlign: 'left'}}>Each adoptable horse has been:</p>
                <div style={{textAlign: 'center', display: 'flex', justifyContent: 'center'}}>
                    <ul className="list-disc list-inside space-y-2 text-center inline-block" style={{textAlign: 'left', display: 'inline-block'}}>
                        <li>Fully assessed by our veterinary and behavioural team</li>
                        <li>Socialised and trained through groundwork and gentle handling</li>
                        <li>Matched with clear guidelines for ongoing care, suitability, and compatibility</li>
                    </ul>
                </div>
                <p className="text-center" style={{textAlign: 'left'}}>We are looking for homes where these horses will be treated with kindness, respect, and lifelong commitment. Their needs—physical, emotional, and social—must be fully met, and their well-being always put first.</p>
                <p className="text-center" style={{textAlign: 'left'}}>When you adopt from us, you're not just giving a horse a second chance—you're becoming part of their story, a story that began in hardship and continues in hope.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-12 stagger-children">
              {adoptableHorses.map(horse => (
                <HorseProfileCard key={horse.id} horse={horse} {...props} />
              ))}
            </div>
            {adoptableHorses.length === 0 && (
                <div className="content-bubble text-center max-w-4xl mx-auto" style={{textAlign: 'center', margin: '0 auto'}}>
                    <p className="text-lg text-gray-700 text-center" style={{textAlign: 'left'}}>We don't have any horses available for adoption at this moment. Please check back soon or meet our forever sanctuary residents!</p>
                </div>
            )}
        </div>
    </section>
  );
};

export default AdoptionSection;