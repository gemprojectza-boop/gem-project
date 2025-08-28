
import React from 'react';
import { MediaContent } from '../types.ts';
import CtaButton from './CtaButton.tsx';
import { PageHero, ContentSection } from './PageComponents.tsx';
import EditableMedia from './EditableMedia.tsx';
import { PawIcon } from './icons.tsx';

interface DogTrainingPageProps {
  mediaContent: MediaContent;
  isEditMode: boolean;
  onMediaUpdate: (key: string, url: string) => void;
}

const DogTrainingPage: React.FC<DogTrainingPageProps> = (props) => {
  return (
    <div className="bg-brand-bg-main">
      <PageHero
        title="Behaviour & Training"
        subtitle="Helping our dogs rediscover trust, confidence, and joy."
        mediaKey="training_hero"
        alt="A person training a dog with positive reinforcement"
        titleColorClass="text-brand-secondary"
        {...props}
      />

      <ContentSection>
        <div className="content-bubble">
          <EditableMedia mediaKey="training_hero" mediaUrl={props.mediaContent.training_hero!} alt="Training a dog" isEditMode={props.isEditMode} onUpdate={props.onMediaUpdate} className="rounded-t-lg aspect-video" />
          <div className="p-6 md:p-8">
            <p>At The Gem Project Sanctuary, behaviour and training are at the heart of our rehabilitation work. Many of the dogs who come to us carry emotional and behavioural scars shaped by trauma, neglect, fear and isolation.</p>
            <p>Our programme focuses on how dogs think, learn and respond. We use positive, science-based methods to teach desirable behaviours and help them unlearn survival-based habits. Whether they're preparing for adoption, entering therapy or service training, or staying with us as forever residents, every dog deserves a chance to thrive.</p>
          </div>
        </div>
      </ContentSection>

      <ContentSection title="Our Training Approach" className="bg-brand-bg-subtle" titleColorClass="text-brand-secondary">
        <div className="grid md:grid-cols-2 gap-8">
            <div>
                <PawIcon className="w-8 h-8 text-brand-secondary mb-2" />
                <h3 className="text-2xl font-bold mb-4 text-brand-secondary">What We Focus On</h3>
                <p>Each training journey is tailored to the dog's unique needs, considering breed, genetics, past experiences, environment and health. We engage their natural instincts—sniffing, chewing, digging, scratching, vocalising and bonding—encouraging curiosity and confidence.</p>
                 <p className="mt-4">Training offered includes basic obedience, behaviour rehabilitation, social integration, agility skills, and preparation for emotional support roles.</p>
            </div>
             <div>
                <PawIcon className="w-8 h-8 text-brand-secondary mb-2" />
                <h3 className="text-2xl font-bold mb-4 text-brand-secondary">Our Golden Rules</h3>
                <ul className="list-disc list-inside space-y-2">
                    <li><strong>Reward-based training:</strong> Celebrate and reinforce what's right.</li>
                    <li><strong>Consistency:</strong> Use the same cues, gestures, and outcomes.</li>
                    <li><strong>Timing matters:</strong> Immediate rewards build understanding.</li>
                    <li><strong>Keep it short and fun:</strong> Frequent mini sessions work best.</li>
                    <li><strong>No punishment:</strong> Fear breaks trust. We never use it.</li>
                </ul>
            </div>
        </div>
      </ContentSection>

      <ContentSection title="Behaviour Transformation" titleColorClass="text-brand-secondary">
        <p>Many of our dogs came from isolated lives, confined in enclosures with little human interaction. Some blossom quickly with love and care, while others need patience, space and gentle structure.</p>
        <p>Through ongoing work, we've seen remarkable changes. Dogs once too shy to make eye contact now run joyfully in packs. Some sleep soundly beside our staff, curled up in warm homes with people who understand their needs.</p>
        <p>Their true personalities emerge when they feel safe. And once they do, they shine.</p>
      </ContentSection>

      <ContentSection title="Environmental Enrichment: More Than Just Play" className="bg-brand-bg-subtle" titleColorClass="text-brand-secondary">
        <p>Enrichment isn't a luxury; it's essential for a healthy mind. Our dogs need stimulation, exploration and meaningful experiences beyond food and shelter. We've developed a comprehensive enrichment programme to keep their minds and bodies active.</p>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-base">
            <div className="p-4 border bg-brand-surface rounded-lg"><strong>Sensory Stimulation:</strong> Scent trails, 'sniffaris', and calming soundscapes.</div>
            <div className="p-4 border bg-brand-surface rounded-lg"><strong>Food-Based Fun:</strong> KONGs, puzzle feeders, and lick mats for relaxation.</div>
            <div className="p-4 border bg-brand-surface rounded-lg"><strong>Cognitive Workouts:</strong> Trick training, hide-and-seek, and agility courses.</div>
            <div className="p-4 border bg-brand-surface rounded-lg"><strong>Social Enrichment:</strong> Supervised play sessions and quiet time with humans.</div>
            <div className="p-4 border bg-brand-surface rounded-lg"><strong>Physical Activity:</strong> Long walks, dig pits, ramps, and swimming.</div>
            <div className="p-4 border bg-brand-surface rounded-lg"><strong>Canine Good Citizen (CGC):</strong> Onsite training to prepare dogs for adoption or advanced roles.</div>
        </div>
      </ContentSection>
      
      <ContentSection title="Our Partners in Behaviour" className="bg-brand-text-primary text-white" textClassName="text-gray-300" titleClassName="text-white" titleColorClass="text-brand-secondary">
        <p className="text-center">With expert support from Honey's Garden Medical Alert Dog Services and other external behaviourists, we continue to grow our capacity to support complex behavioural needs.</p>
      </ContentSection>

       <section className="py-20 bg-brand-primary">
        <div className="container mx-auto px-6 text-center text-white">
            <PawIcon className="w-10 h-10 text-white mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-brand-secondary">Support a Dog's Training Journey</h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-200 mb-8">
                Your donation can provide enrichment toys, training tools, or sponsor a session with a behavioural expert.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
                <CtaButton href="/dog-wishlist" className="bg-brand-secondary text-white hover:bg-brand-secondary-hover">Donate Enrichment Toys</CtaButton>
                <CtaButton href="/dogs/sponsorship" className="bg-brand-secondary hover:bg-brand-secondary-hover text-white">Sponsor Training</CtaButton>
                <CtaButton href="/get-involved#volunteer" className="bg-brand-yellow hover:bg-brand-yellow-hover text-brand-text-primary">Volunteer With Us</CtaButton>
            </div>
        </div>
      </section>
    </div>
  );
};

export default DogTrainingPage;
