
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

const TrainingSection: React.FC<SectionProps> = (props) => {
  return (
    <section id="training" className="py-16 md:py-20 bg-brand-bg-main">
        <div className="container mx-auto px-6 max-w-4xl">
            <div className="content-bubble text-center">
                <div className="p-6 md:p-8">
                  <PawIcon className="w-10 h-10 text-brand-secondary mx-auto mb-4" />
                  <h2 className="text-3xl md:text-4xl font-bold text-brand-secondary">Behaviour & Training</h2>
                  <p className="mt-2 text-lg text-gray-600">Helping our dogs rediscover trust, confidence, and joy.</p>
                </div>
            </div>
             <div className="content-bubble">
                <EditableMedia
                    mediaKey="training_hero"
                    mediaUrl={props.mediaContent.training_hero!}
                    alt="A person training a dog with positive reinforcement"
                    isEditMode={props.isEditMode}
                    onUpdate={props.onMediaUpdate}
                    className="rounded-t-lg aspect-video"
                />
                <div className="p-6 md:p-8 space-y-4 text-lg text-gray-700">
                    <p className="text-center">At The Gem Project Sanctuary, behaviour and training are at the heart of our rehabilitation work. Many of the dogs who come to us carry emotional and behavioural scars shaped by trauma, neglect, fear and isolation.</p>
                    <p className="text-center">Our programme focuses on how dogs think, learn and respond. We use positive, science-based methods to teach desirable behaviours and help them unlearn survival-based habits. Whether they're preparing for adoption, entering therapy or service training, or staying with us as forever residents, every dog deserves a chance to thrive.</p>
                </div>
            </div>

            <div className="content-bubble">
              <div className="p-6 md:p-8">
                <PawIcon className="w-8 h-8 text-brand-secondary mb-2" />
                <h3 className="text-2xl font-bold text-brand-secondary">Our Training Approach</h3>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-8 -mt-4">
                <div className="content-bubble">
                    <div className="p-6 md:p-8">
                        <h3 className="text-xl font-bold mb-4 text-brand-secondary">What We Focus On</h3>
                        <p className="text-gray-700">Each training journey is tailored to the dog's unique needs, considering breed, genetics, past experiences, environment and health. We engage their natural instincts—sniffing, chewing, digging, scratching, vocalising and bonding—encouraging curiosity and confidence.</p>
                         <p className="mt-4 text-gray-700">Training offered includes basic obedience, behaviour rehabilitation, social integration, agility skills, and preparation for emotional support roles.</p>
                    </div>
                </div>
                 <div className="content-bubble">
                    <div className="p-6 md:p-8">
                        <h3 className="text-xl font-bold mb-4 text-brand-secondary">Our Golden Rules</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Reward-based training:</strong> Celebrate and reinforce what's right.</li>
                            <li><strong>Consistency:</strong> Use the same cues, gestures, and outcomes.</li>
                            <li><strong>Timing matters:</strong> Immediate rewards build understanding.</li>
                            <li><strong>Keep it short and fun:</strong> Frequent mini sessions work best.</li>
                            <li><strong>No punishment:</strong> Fear breaks trust. We never use it.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="content-bubble text-lg text-gray-700 space-y-4">
                <div className="p-6 md:p-8">
                    <PawIcon className="w-8 h-8 text-brand-secondary mb-2" />
                    <h3 className="text-2xl font-bold text-brand-secondary">Behaviour Transformation</h3>
                    <p className="text-center">Many of our dogs came from isolated lives, confined in enclosures with little human interaction. Some blossom quickly with love and care, while others need patience, space and gentle structure.</p>
                    <p className="text-center">Through ongoing work, we've seen remarkable changes. Dogs once too shy to make eye contact now run joyfully in packs. Some sleep soundly beside our staff, curled up in warm homes with people who understand their needs.</p>
                    <p className="text-center">Their true personalities emerge when they feel safe. And once they do, they shine.</p>
                </div>
            </div>
            
             <div className="content-bubble">
                <div className="p-6 md:p-8">
                    <PawIcon className="w-8 h-8 text-brand-secondary mb-2" />
                    <h3 className="text-2xl font-bold text-brand-secondary">Environmental Enrichment: More Than Just Play</h3>
                    <p className="text-lg text-gray-700">Enrichment isn't a luxury; it's essential for a healthy mind. Our dogs need stimulation, exploration and meaningful experiences beyond food and shelter. We've developed a comprehensive enrichment programme to keep their minds and bodies active.</p>
                    <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-base text-gray-700">
                        <div className="p-4 border bg-brand-surface rounded-lg"><strong>Sensory Stimulation:</strong> Scent trails, 'sniffaris', and calming soundscapes.</div>
                        <div className="p-4 border bg-brand-surface rounded-lg"><strong>Food-Based Fun:</strong> KONGs, puzzle feeders, and lick mats for relaxation.</div>
                        <div className="p-4 border bg-brand-surface rounded-lg"><strong>Cognitive Workouts:</strong> Trick training, hide-and-seek, and agility courses.</div>
                        <div className="p-4 border bg-brand-surface rounded-lg"><strong>Social Enrichment:</strong> Supervised play sessions and quiet time with humans.</div>
                        <div className="p-4 border bg-brand-surface rounded-lg"><strong>Physical Activity:</strong> Long walks, dig pits, ramps, and swimming.</div>
                        <div className="p-4 border bg-brand-surface rounded-lg"><strong>Canine Good Citizen (CGC):</strong> Onsite training to prepare dogs for adoption or advanced roles.</div>
                    </div>
                </div>
            </div>


            <div className="content-bubble text-center mt-8 bg-brand-primary text-white">
                <div className="p-6 md:p-8">
                    <PawIcon className="w-10 h-10 text-white mx-auto mb-4" />
                    <h2 className="text-3xl font-bold mb-4 text-brand-secondary">Support a Dog's Training Journey</h2>
                    <p className="max-w-3xl mx-auto text-lg text-gray-200 mb-8">
                        Your donation can provide enrichment toys, training tools, or sponsor a session with a behavioural expert.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <CtaButton href="/dog-wishlist" className="bg-brand-secondary text-white hover:bg-brand-secondary-hover">Donate Enrichment Toys</CtaButton>
                        <CtaButton href="/dogs/sponsorship" className="bg-brand-secondary text-white hover:bg-brand-secondary-hover">Sponsor Training</CtaButton>
                        <CtaButton href="/get-involved#volunteer" className="border border-white text-white hover:bg-white hover:text-brand-text-primary">Volunteer With Us</CtaButton>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default TrainingSection;
