import React from 'react';
import { MediaContent } from '../../types.ts';
import CtaButton from '../CtaButton.tsx';
import { sampleDogs } from '../../data/dogs.ts';
import DogProfileCard from './DogProfileCard.tsx';
import { PawIcon } from '../icons.tsx';

interface SectionProps {
  mediaContent: MediaContent;
  isEditMode: boolean;
  onMediaUpdate: (key: string, url: string) => void;
}

const ForeverDogsSection: React.FC<SectionProps> = (props) => {
  const foreverDogs = sampleDogs.filter(dog => dog.status === 'Forever Sanctuary');

  return (
    <section id="forever" className="py-16 md:py-20 bg-brand-bg-main">
        <div className="container mx-auto px-6 max-w-6xl">
            <div className="content-bubble text-center max-w-4xl mx-auto">
                <PawIcon className="w-10 h-10 text-sanctuary-dark mx-auto mb-4" />
                <h2 className="text-3xl md:text-4xl font-bold text-sanctuary-dark">Forever Sanctuary Dogs</h2>
                <p className="mt-2 text-lg text-gray-600">They are not waiting to be chosen. They already have been.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 my-12">
              {foreverDogs.map(dog => (
                <DogProfileCard key={dog.id} dog={dog} {...props} />
              ))}
            </div>
            {foreverDogs.length === 0 && (
                <div className="content-bubble text-center max-w-4xl mx-auto">
                    <p className="text-lg text-gray-700">We will be featuring our beloved forever sanctuary residents here soon. Please check back!</p>
                </div>
            )}

            <div className="max-w-4xl mx-auto">
                <div className="content-bubble">
                    <div className="space-y-4 text-lg text-gray-700">
                        <p className="text-center">Some dogs arrive at our gates carrying silent stories. Wounds we can see and many more that we cannot. They have known hunger, fear and abandonment. But the moment they step through our gates, everything changes. This is not a stop along the way. This is home.</p>
                        <p className="font-bold text-sanctuary-dark">A forever sanctuary dog is one who will remain with us for life. Whether because of past trauma, complex behaviour, chronic illness or advanced age, these dogs are not up for adoption. They have already been chosen by us.</p>
                    </div>
                </div>

                <div className="content-bubble text-center mt-8 bg-brand-primary text-white">
                    <PawIcon className="w-10 h-10 text-white mx-auto mb-4" />
                    <h2 className="text-3xl font-bold mb-2">Support a Lifelong Resident</h2>
                    <p className="max-w-3xl mx-auto text-lg text-gray-200 mb-6">
                        Your sponsorship provides continuous care for our forever dogs, giving them the safety and comfort they deserve for the rest of their lives.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <CtaButton href="/dogs/sponsorship" className="bg-brand-secondary text-white hover:bg-brand-secondary-hover">Sponsor a Dog</CtaButton>
                        <CtaButton href="/donate" className="bg-transparent border-2 border-white text-white hover:bg-brand-secondary-hover hover:border-brand-secondary-hover">Donate Monthly</CtaButton>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default ForeverDogsSection;