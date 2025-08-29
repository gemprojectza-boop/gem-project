import React from 'react';
import { MediaContent } from '../../types.ts';
import { sampleHorses } from '../../data/horses.ts';
import HorseProfileCard from './HorseProfileCard.tsx';

interface SectionProps {
  mediaContent: MediaContent;
  isEditMode: boolean;
  onMediaUpdate: (key: string, url: string) => void;
}

const FutureAdoptableSection: React.FC<SectionProps> = (props) => {
  const futureAdoptableHorses = sampleHorses.filter(horse => horse.status === 'Future Adoptable');

  if (futureAdoptableHorses.length === 0) {
    return null;
  }

  return (
    <section id="future-adoptable" className="py-16 md:py-20 bg-teal-50 animate-on-scroll" style={{textAlign: 'center'}}>
        <div className="container mx-auto px-6 max-w-6xl" style={{textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <div className="content-bubble text-center max-w-4xl mx-auto" style={{textAlign: 'center', margin: '0 auto'}}>
                <h2 className="text-3xl md:text-4xl font-bold" style={{textAlign: 'center', color: '#16a34a !important'}}>Future Adoptable Horses</h2>
                <p className="mt-2 text-lg text-gray-600" style={{textAlign: 'center'}}>These horses are currently in rehabilitation and will be available soon. Watch their progress!</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-12 stagger-children">
              {futureAdoptableHorses.map(horse => (
                <HorseProfileCard key={horse.id} horse={horse} {...props} />
              ))}
            </div>
        </div>
    </section>
  );
};

export default FutureAdoptableSection;