

import React from 'react';
import { MediaContent } from '../../types.ts';
import CtaButton from '../CtaButton.tsx';
import { PawIcon } from '../icons.tsx';
import EditableMedia from '../EditableMedia.tsx';

interface SectionProps {
  mediaContent: MediaContent;
  isEditMode: boolean;
  onMediaUpdate: (key: string, url: string) => void;
}

const CarePackageCard: React.FC<{
    title: string;
    price: string;
    description: string;
    features: string[];
}> = ({ title, price, description, features }) => (
    <div className="content-bubble flex flex-col h-full p-6">
        <div className="flex items-center mb-2">
            <PawIcon className="w-8 h-8 text-brand-text-primary mr-3" />
            <h3 className="text-2xl font-bold text-green-800">{title}</h3>
        </div>
        <div className="text-4xl font-bold my-4 text-green-600">{price}</div>
        <p className="text-brand-text-secondary mb-6 flex-grow">{description}</p>
        <ul className="space-y-3 mb-8">
            {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                    <PawIcon className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-brand-text-primary">{feature}</span>
                </li>
            ))}
        </ul>
        <div className="mt-auto text-center">
            <CtaButton href="/contact?subject=HorseCarePackage" className="bg-brand-primary text-white hover:bg-brand-primary-hover w-full">Choose this Package</CtaButton>
        </div>
    </div>
);


const HandsOnSection: React.FC<SectionProps> = (props) => {
  return (
    <section id="hands-on" className="py-16 md:py-20 bg-brand-bg-main">
        <div className="container mx-auto px-6 max-w-6xl">
            <div className="max-w-4xl mx-auto">
                <div className="content-bubble text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-text-primary">Hands-On Care Programme – Horses</h2>
                    <p className="mt-2 text-lg text-brand-text-secondary">Form a profound bond without the commitment of ownership.</p>
                </div>
                 <div className="content-bubble">
                     <div className="mb-6 rounded-lg overflow-hidden">
                        <EditableMedia
                            mediaKey="horse_hands_on_hero"
                            mediaUrl={props.mediaContent.horse_hands_on_hero!}
                            alt="A person gently grooming a sanctuary horse"
                            isEditMode={props.isEditMode}
                            onUpdate={props.onMediaUpdate}
                        />
                    </div>
                    <div className="text-lg text-brand-text-secondary space-y-4">
                        <p>The Hands-On Care Programme allows you to build a meaningful, long-term relationship with one of our sanctuary horses. This is more than just visiting—it’s becoming personally involved in the life of a specific horse through regular grooming, groundwork, and quiet companionship.</p>
                        <p className="font-semibold text-brand-text-primary">This is your horse. Your connection. Your peace. We take care of their daily needs while you experience the profound bond that only a horse can offer.</p>
                    </div>
                </div>

                <div className="content-bubble text-center mt-12">
                  <h2 className="text-3xl font-bold text-brand-text-primary">Choose Your Caregiver Package</h2>
                </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                <CarePackageCard 
                    title="Gentle Groomer"
                    price="R400/mo"
                    description="Spend one hour per week with your chosen horse, focusing on gentle grooming and quiet bonding time."
                    features={["One visit per week (1 hour)", "Your horse’s story & updates", "Digital caregiver certificate"]}
                />
                <CarePackageCard 
                    title="Pasture Pal"
                    price="R750/mo"
                    description="Enjoy two hours per week with your horse, including grooming and guided groundwork or liberty sessions."
                    features={["One visit per week (2 hours)", "Participate in basic groundwork", "Certificate & story included"]}
                />
                <CarePackageCard 
                    title="Sanctuary Supporter"
                    price="R1200/mo"
                    description="Deepen your connection with up to three hours per week, joining in on training, enrichment, and herd observation."
                    features={["Up to two visits per week (3 hours total)", "Behind-the-scenes access", "Printed certificate & surprise gift"]}
                />
            </div>
             <div className="content-bubble text-center mt-8 bg-brand-primary text-white max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-4">Ready to Build a Bond?</h2>
                <p className="max-w-2xl mx-auto text-lg text-gray-200 mb-8">
                    Email us to choose your horse and begin a journey of connection and healing.
                </p>
                <CtaButton href="/contact?subject=BecomeAHorseCaregiver" className="bg-brand-accent text-white hover:bg-brand-accent-hover">
                    Become a Horse Caregiver
                </CtaButton>
            </div>
        </div>
    </section>
  );
};

export default HandsOnSection;