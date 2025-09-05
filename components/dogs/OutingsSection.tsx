
import React from 'react';
import { MediaContent } from '../../types.ts';
import CtaButton from '../CtaButton.tsx';
import EditableMedia from '../EditableMedia.tsx';
import { PawIcon } from '../icons.tsx';

interface SectionProps {
  mediaContent: MediaContent;
  isEditMode: boolean;
  onMediaUpdate: (key: string, url: string) => void;
}

const OutingsSection: React.FC<SectionProps> = (props) => {
  return (
    <section id="outings" className="py-16 md:py-20 bg-sanctuary-subtle-bg">
        <div className="container mx-auto px-6 max-w-4xl">
            <div className="content-bubble text-center">
                <div className="p-6 md:p-8">
                  <PawIcon className="w-10 h-10 text-brand-secondary mx-auto mb-4" />
                  <h2 className="text-3xl md:text-4xl font-bold text-brand-secondary">Dog Outings</h2>
                  <p className="mt-2 text-lg text-gray-600">Where healing meets freedom.</p>
                </div>
            </div>
             <div className="content-bubble">
                <EditableMedia
                    mediaKey="outings_hero"
                    mediaUrl={props.mediaContent.outings_hero!}
                    alt="A happy dog running on a beach"
                    isEditMode={props.isEditMode}
                    onUpdate={props.onMediaUpdate}
                    className="rounded-t-lg aspect-video"
                />
                <div className="p-6 md:p-8 space-y-4 text-lg text-gray-700">
                    <p className="text-center">At The Gem Project Sanctuary, healing doesn't just happen within our gates. It unfolds on beaches, in parks, and along quiet trails. With every pawprint in the sand and every tail wag in the wind, our dogs rediscover what it means to feel alive.</p>
                    <p className="text-center">These outings are more than a break from routine. They are moments of pure joy, growth, and connection. For dogs who have survived trauma, neglect, or confinement, stepping into the world again—safely and gently—is a powerful part of their recovery journey.</p>
                </div>
            </div>

            <div className="content-bubble">
                <div className="p-6 md:p-8">
                    <PawIcon className="w-8 h-8 text-brand-secondary mb-2" />
                    <h3 className="text-2xl font-bold text-brand-secondary">What Our Outings Look Like</h3>
                    <div className="text-lg text-gray-700 space-y-4 mt-4">
                      <p className="text-center">Once a week, our team carefully selects small groups of dogs to enjoy tailored excursions to local beaches, parks and wide-open spaces. Outings are planned with each dog's temperament, behaviour and energy level in mind.</p>
                      <p className="text-center">Some outings are peaceful walks for shy or senior dogs who need quiet confidence-building. Others are joyful adventures for playful souls who thrive on running and exploring. Every dog gets the chance to experience freedom and fun on their own terms.</p>
                      <p className="text-center">Outings are led by experienced caregivers who understand trauma, read canine body language, and are deeply bonded with each dog. Safety is our top priority. We transport dogs in secure vehicles. On site, they are walked using fitted harnesses and long leads to ensure control and comfort.</p>
                    </div>
                </div>
            </div>
            
            <div className="content-bubble">
              <div className="p-6 md:p-8">
                <PawIcon className="w-8 h-8 text-brand-secondary mb-2" />
                <h3 className="text-2xl font-bold text-brand-secondary">Why It Matters</h3>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-8 text-base -mt-4">
                <div className="content-bubble">
                    <div className="p-6">
                        <h3 className="font-bold text-xl mb-2 text-brand-secondary">Social Growth</h3>
                        <p className="text-center">Dogs practice walking on a lead, develop confidence in new environments, and learn how to share space calmly with people and other dogs.</p>
                    </div>
                </div>
                 <div className="content-bubble">
                    <div className="p-6">
                        <h3 className="font-bold text-xl mb-2 text-brand-secondary">Mental Stimulation</h3>
                        <p className="text-center">Every scent, texture, and sound is a spark for curiosity. From sniffing seaweed to watching birds, outings stimulate the brain in healthy, non-overwhelming ways.</p>
                    </div>
                </div>
                 <div className="content-bubble">
                    <div className="p-6">
                        <h3 className="font-bold text-xl mb-2 text-brand-secondary">Emotional Healing</h3>
                        <p className="text-center">Outings create trust-building moments. Nervous dogs realise that the world is not a scary place. Shared joy deepens the bond between dogs and caregivers.</p>
                    </div>
                </div>
                 <div className="content-bubble">
                    <div className="p-6">
                        <h3 className="font-bold text-xl mb-2 text-brand-secondary">Physical Health</h3>
                        <p className="text-center">Walks, runs, and swimming help improve muscle tone, joint mobility, and overall health. It also allows dogs to release built-up energy and anxiety.</p>
                    </div>
                </div>
            </div>

            <div className="content-bubble">
                <div className="p-6 md:p-8">
                    <PawIcon className="w-8 h-8 text-brand-secondary mb-2" />
                    <h3 className="text-2xl font-bold text-brand-secondary">Our Favourite Spots</h3>
                    <p className="text-lg text-gray-700">We choose our locations carefully to ensure a positive and safe experience for every dog.</p>
                    <ul className="list-disc list-inside space-y-2 mt-4 text-gray-700">
                        <li><strong>Melkbosstrand Beach:</strong> perfect for early morning walks and gentle waves</li>
                        <li><strong>Philadelphia greenbelt trails:</strong> safe, quiet and calming for sensitive dogs</li>
                        <li><strong>Durbanville parks:</strong> grassy and spacious, ideal for active dogs</li>
                        <li><strong>Private farms (with permission):</strong> calm, low-stimulation environments for dogs in early rehabilitation</li>
                    </ul>
                </div>
            </div>
            
            <div className="content-bubble text-center mt-8 bg-brand-primary text-white">
                <div className="p-6 md:p-8">
                    <PawIcon className="w-10 h-10 text-white mx-auto mb-4" />
                    <h2 className="text-3xl font-bold mb-4 text-brand-secondary">Help Fund an Adventure</h2>
                    <p className="max-w-3xl mx-auto text-lg text-gray-200 mb-8">
                        Your donation helps cover the costs of fuel, gear, and supplies, making these joyful and therapeutic outings possible for our dogs.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <CtaButton href="/dogs/sponsorship" className="bg-brand-secondary text-white hover:bg-brand-secondary-hover">Sponsor a Dog Outing</CtaButton>
                        <CtaButton href="/dogs/sponsorship" className="border border-white text-white hover:bg-brand-secondary hover:border-brand-secondary">Donate Toward Transport Costs</CtaButton>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default OutingsSection;
