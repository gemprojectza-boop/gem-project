
import React from 'react';
import { MediaContent } from '../types.ts';
import EditableMedia from './EditableMedia.tsx';
import CtaButton from './CtaButton.tsx';
import { PageHero, ContentSection } from './PageComponents.tsx';
import { PawIcon } from './icons.tsx';

interface DogStoriesPageProps {
  mediaContent: MediaContent;
  isEditMode: boolean;
  onMediaUpdate: (key: string, url: string) => void;
}

interface StoryProps extends DogStoriesPageProps {
    name: string;
    mediaKey: string;
    alt: string;
    children: React.ReactNode;
}

const Story: React.FC<StoryProps> = ({ name, mediaKey, alt, children, ...props }) => (
    <article className="magazine-story-layout max-w-7xl mx-auto relative overflow-hidden">
        
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
            {/* Left Page - Large Hero Image */}
            <div className="bg-white p-4 lg:p-6 flex items-center justify-center">
                <div className="w-full">
                    <div className="aspect-[4/5] overflow-hidden rounded-3xl relative">
                        <EditableMedia
                            mediaKey={mediaKey}
                            mediaUrl={props.mediaContent[mediaKey]!}
                            alt={alt}
                            isEditMode={props.isEditMode}
                            onUpdate={props.onMediaUpdate}
                            className="w-full h-full object-cover"
                        />
                        {/* Photo frame effect */}
                        <div className="absolute inset-0 border-6 border-white rounded-3xl pointer-events-none"></div>
                    </div>
                </div>
            </div>
            
            {/* Right Page - Multi-column text with circular photo callouts */}
            <div className="bg-gradient-to-bl from-red-50 to-white p-8 lg:p-12 relative">
                {/* Large Headline Treatment */}
                <header className="mb-8">
                    <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-sanctuary-dark rounded-full flex items-center justify-center mr-4">
                            <PawIcon className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-sm font-bold text-sanctuary-dark uppercase tracking-wider bg-white px-3 py-1 rounded-full">Success Story</span>
                    </div>
                    <h3 className="text-4xl lg:text-5xl font-black text-sanctuary-dark leading-tight">{name}'s Story</h3>
                    <div className="w-24 h-2 bg-sanctuary-dark rounded-full mt-4"></div>
                </header>
                
                {/* Multi-column Text Layout */}
                <div className="space-y-6 text-lg text-brand-text-primary leading-relaxed">
                    {children}
                </div>
                
                {/* Sidebar Section with Distinct Background */}
                <div className="mt-8">
                    <div className="flex items-center mb-3">
                        <PawIcon className="w-5 h-5 text-sanctuary-dark mr-3" />
                        <span className="font-bold text-sanctuary-dark">Transformation Complete</span>
                    </div>
                    <p className="text-sm text-brand-text-secondary">This rescue story represents the power of patience, care, and second chances.</p>
                </div>
            </div>
        </div>
    </article>
)


const DogStoriesPage: React.FC<DogStoriesPageProps> = (props) => {
  return (
    <>
      <PageHero
        title="Journeys of Healing"
        subtitle="Every dog who arrives at our sanctuary carries a story. These are just a few of them."
        mediaKey="stories_queenie"
        alt="A mother dog with her puppies"
        titleColorClass="text-sanctuary-dark"
        {...props}
      />
      <ContentSection className="bg-brand-bg-main">
        <p className="text-center">Every dog who arrives at our sanctuary carries a story. Some are quiet, some are heartbreaking and some are filled with surprising strength. While each journey is different they all have one thing in common: the chance to begin again.</p>
        <p className="text-center">This page honours a few of the incredible dogs who've come through our gates, reminding us why we do this work and what's possible when care, patience and love come together.</p>
      </ContentSection>

      <div className="space-y-0">
        {/* Ruby's Story */}
        <section className="relative py-16 lg:py-20 overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <Story name="Ruby" mediaKey="stories_ruby" alt="A sad, scared-looking dog" {...props}>
                    <p className="font-bold text-xl text-sanctuary-dark mb-4">From hopeless to thriving...</p>
                    <p className="mb-4 text-lg text-brand-text-primary">Ruby had likely gone her entire life without knowing kindness. She flinched at every sound and shied away from every human touch. At first, she would barely eat or move. We gave her a quiet space to settle with soft blankets and round-the-clock monitoring.</p>
                    <p className="mb-4 text-lg text-brand-text-primary">Ruby was suffering from a severe skin condition, malnourishment, and a heavy infestation of worms, ticks and fleas. She also had undiagnosed arthritis and deep social anxiety after a lifetime of isolation.</p>
                    <p className="text-lg text-brand-text-primary">With dedicated veterinary care and slow, gentle rehabilitation, Ruby's health began to improve. As her physical strength returned, so did her personality. She started greeting caregivers with gentle tail wags and resting her head in our laps. Watching Ruby rediscover joy has been one of the most moving experiences at the sanctuary.</p>
                </Story>
            </div>
        </section>

        {/* Honey's Story */}
        <section className="relative py-16 lg:py-20 overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <Story name="Honey" mediaKey="stories_honey" alt="A resilient dog with one eye" {...props}>
                    <p className="font-bold text-xl text-sanctuary-dark mb-4">The dog who found us...</p>
                    <p className="mb-4 text-lg text-brand-text-primary">Honey came to us in a way we will never forget. She walked herself to the sanctuary gate and collapsed, as if knowing she needed help. The fact that she chose to come to us spoke volumes about her will to survive.</p>
                    <p className="mb-4 text-lg text-brand-text-primary">She had recently lost sight in one eye, was dangerously underweight, covered in ticks, and suffering from a skin condition and open wounds. In the first days, we focused on stabilising her, treating her wounds, and offering gentle reassurance.</p>
                    <p className="text-lg text-brand-text-primary">Adapting to partial blindness has been difficult, but Honey continues to surprise us. Her physical health improved dramatically, and her emotional healing continues each day. She's developed strong bonds with a few of our long-term dogs and now walks confidently on familiar paths, slowly learning to trust the world again.</p>
                </Story>
            </div>
        </section>
        
        {/* Queenie's Story */}
        <section className="relative py-16 lg:py-20 overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <Story name="Queenie" mediaKey="stories_queenie" alt="A mother dog and her puppies" {...props}>
                    <p className="font-bold text-xl text-sanctuary-dark mb-4">A mother's quiet strength...</p>
                    <p className="mb-4 text-lg text-brand-text-primary">Queenie and her puppies were among the dogs left behind by the previous owner of the farm where our sanctuary now stands. At the time, Queenie was undernourished and doing her best to care for her pups with almost nothing. Her resilience and devotion were undeniable.</p>
                    <p className="mb-4 text-lg text-brand-text-primary">From the very beginning, we knew we had to earn her trust. We gave her space, moved slowly, and ensured she felt secure. As food became regular and her pups grew stronger, Queenie began to soften.</p>
                    <p className="text-lg text-brand-text-primary">We treated her for mange and malnutrition. Today, Queenie is still with us, a gentle and affectionate soul. Her puppies have grown into healthy, confident young dogs, and two have already found loving forever homes. Queenie's journey from fierce protector to peaceful companion remains one of our most beautiful transformations.</p>
                </Story>
            </div>
        </section>
      </div>

       <section className="py-20 bg-sanctuary-dark">
        <div className="container mx-auto px-6 text-center">
          <div>
            <PawIcon className="w-10 h-10 text-white mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">More Stories Coming Soon</h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-300 mb-10">
                We are always updating this page as our dogs grow, heal, and show us what true resilience looks like. Keep checking back to follow the journeys of Angel, Jonah, and many others who are finding safety, comfort and joy at The Gem Project Sanctuary.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
                <CtaButton href="/dogs/sponsorship" className="bg-sanctuary-purple hover:bg-sanctuary-purple/80 text-white">Sponsor a Dog in Recovery</CtaButton>
                <CtaButton href="/donate" className="bg-sanctuary-green hover:bg-sanctuary-green/80 text-white">Donate Toward Vet Care</CtaButton>
                <CtaButton href="/adopt-a-dog" className="bg-brand-secondary text-white hover:bg-brand-secondary-hover">Meet Our Adoptable Dogs</CtaButton>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default DogStoriesPage;
