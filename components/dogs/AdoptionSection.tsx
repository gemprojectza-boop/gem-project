

import React from 'react';
import { MediaContent } from '../../types.ts';
import EditableMedia from '../EditableMedia.tsx';
import CtaButton from '../CtaButton.tsx';
import { sampleDogs } from '../../data/dogs.ts';
import DogProfileCard from './DogProfileCard.tsx';
import { PawIcon } from '../icons.tsx';

interface SectionProps {
  mediaContent: MediaContent;
  isEditMode: boolean;
  onMediaUpdate: (key: string, url: string) => void;
}

const AdoptionSection: React.FC<SectionProps> = (props) => {
  return (
    <section id="adoption" className="py-16 md:py-20 bg-sanctuary-subtle-bg animate-on-scroll">
        <div className="container mx-auto px-6 max-w-6xl">
            <div className="content-bubble text-center max-w-4xl mx-auto">
                <PawIcon className="w-10 h-10 text-sanctuary-dark mx-auto mb-4" />
                <h2 className="text-3xl md:text-4xl font-bold text-sanctuary-dark">Meet Our Adoptable Dogs</h2>
                <p className="mt-2 text-lg text-gray-600">Find your new best friend.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 my-12 stagger-children">
              {sampleDogs.filter(dog => dog.status === 'Available').map(dog => (
                <DogProfileCard key={dog.id} dog={dog} {...props} />
              ))}
            </div>
            {sampleDogs.filter(dog => dog.status === 'Available').length === 0 && (
                <div className="content-bubble text-center max-w-4xl mx-auto">
                    <p className="text-lg text-gray-700">We don't have any dogs available for adoption at this moment. Please check back soon!</p>
                </div>
            )}

            <div className="max-w-4xl mx-auto">
                <div className="content-bubble">
                    <PawIcon className="w-8 h-8 text-sanctuary-dark mb-2" />
                    <h3 className="text-2xl font-bold text-sanctuary-dark">Our Adoption Process</h3>
                    <p className="text-lg text-gray-700">Our adoption process is designed to ensure that each dog is placed in a home where they will thrive. We are committed to full transparency and ongoing support.</p>
                    <ol className="list-decimal list-inside space-y-4 text-lg text-gray-700 mt-4">
                        <li><strong>Submit an Application:</strong> Let us know about your lifestyle, experience and what you are looking for.</li>
                        <li><strong>Chat with Our Team:</strong> We'll get in touch to recommend dogs that may be a good fit for you.</li>
                        <li><strong>Meet Your Match:</strong> Visit the sanctuary to spend quality time with the dog you're interested in.</li>
                        <li><strong>Home Check and Support:</strong> We conduct a home check to ensure the environment is safe and suitable for a new arrival.</li>
                        <li><strong>Welcoming Home:</strong> We provide guidance on transitioning your new family member and helping them adjust.</li>
                    </ol>
                    <p className="mt-6 text-base italic text-gray-500">Note: Not all dogs are suited for adoption. Some may be available only for sponsorship or Hands-On Care. We always prioritize the animal's wellbeing.</p>
                </div>
                
                <div className="content-bubble">
                    <PawIcon className="w-8 h-8 text-sanctuary-dark mb-2" />
                    <h3 className="text-2xl font-bold text-sanctuary-dark">Why Adopt from Us?</h3>
                    <p className="text-lg text-gray-700">We do things differently. Our dogs live in family-style units, not in kennels. They receive daily enrichment, personalised training and consistent care. We get to know them deeply—their quirks, their joys and their ideal home environment.</p>
                    <p className="text-lg text-gray-700">By adopting from us, you are not just saving a life. You are joining a journey of love and transformation.</p>
                    <h4 className="text-xl font-bold text-sanctuary-dark mt-8 mb-4">Benefits of Adopting from The Gem Project Sanctuary:</h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Every dog receives comprehensive veterinary checks, vaccinations, and sterilisation.</li>
                        <li>Behavioural and training support is provided before and after adoption.</li>
                        <li>We offer ongoing guidance to help the transition go smoothly.</li>
                        <li>You can meet and get to know the dog before making a decision.</li>
                        <li>You receive an animal who is emotionally and physically prepared for family life.</li>
                    </ul>
                    <p className="mt-6 text-base italic text-gray-500">Please note: While we remain available to offer guidance and advice after adoption, any ongoing behavioural or training services required would need to be arranged and funded independently.</p>
                </div>
            </div>
        </div>
    </section>
  );
};

export default AdoptionSection;