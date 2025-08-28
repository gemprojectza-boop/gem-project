

import React from 'react';
import { MediaContent } from '../../types.ts';
import CtaButton from '../CtaButton.tsx';
import { sampleHorses } from '../../data/horses.ts';
import HorseProfileCard from './HorseProfileCard.tsx';

interface SectionProps {
  mediaContent: MediaContent;
  isEditMode: boolean;
  onMediaUpdate: (key: string, url: string) => void;
}

const ForeverHorsesSection: React.FC<SectionProps> = (props) => {
  const foreverHorses = sampleHorses.filter(horse => horse.status === 'Forever Sanctuary');

  return (
    <section id="forever" className="py-16 md:py-20 bg-brand-bg-main animate-on-scroll">
        <div className="container mx-auto px-6 max-w-6xl">
            <div className="content-bubble text-center max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-green-800">Forever Sanctuary Horses</h2>
                <p className="mt-2 text-lg text-gray-600">They are not waiting for a home. They are already home.</p>
            </div>
            
            <div className="content-bubble max-w-4xl mx-auto text-lg text-gray-700 space-y-4">
                <p>Not every horse that comes through our gates is suitable for rehoming—and that’s okay. Some horses have ongoing medical needs, trauma that requires continued specialized care, or simply thrive best in the safe, familiar environment of our sanctuary. These beloved residents are our Forever Gems.</p>
                <p>They are not up for adoption, but they are still deeply deserving of love, support, and recognition. Each of them has a story of survival and resilience, and they continue to touch lives every day—from comforting new rescues to connecting with visitors and volunteers.</p>
                <p>Our commitment to these horses is lifelong. They will remain under our care for the rest of their days, receiving everything they need:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>Quality nutrition and veterinary care</li>
                    <li>Therapeutic support (body work, hoof care, and more)</li>
                    <li>Emotional stability in a safe, loving environment</li>
                    <li>Enrichment and companionship to live with dignity and joy</li>
                </ul>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-12 stagger-children">
              {foreverHorses.map(horse => (
                <HorseProfileCard key={horse.id} horse={horse} {...props} />
              ))}
            </div>
            {foreverHorses.length === 0 && (
                <div className="content-bubble text-center max-w-4xl mx-auto">
                    <p className="text-lg text-gray-700">We will be featuring our beloved forever sanctuary residents here soon. Please check back!</p>
                </div>
            )}

            <div className="content-bubble text-center mt-8 bg-brand-primary text-white max-w-4xl mx-auto">
                <div className="p-6 md:p-8">
                    <h2 className="text-3xl font-bold mb-2">Support a Lifelong Resident</h2>
                    <p className="max-w-3xl mx-auto text-lg text-gray-200 mb-6">
                        Your sponsorship provides continuous care for our forever horses, giving them the safety, comfort, and specialized care they deserve for the rest of their lives.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <CtaButton href="/horses#sponsor" className="bg-brand-secondary text-white hover:bg-brand-secondary-hover">Sponsor a Horse</CtaButton>
                        <CtaButton href="/donate" className="border border-white text-white hover:bg-brand-secondary hover:border-brand-secondary">Donate Monthly</CtaButton>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default ForeverHorsesSection;