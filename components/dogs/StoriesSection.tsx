
import React from 'react';
import { MediaContent } from '../../types.ts';
import EditableMedia from '../EditableMedia.tsx';
import CtaButton from '../CtaButton.tsx';
import { PawIcon } from '../icons.tsx';

interface SectionProps {
  mediaContent: MediaContent;
  isEditMode: boolean;
  onMediaUpdate: (key: string, url: string) => void;
}

interface StoryProps extends SectionProps {
    name: string;
    mediaKey: string;
    alt: string;
    children: React.ReactNode;
}

const Story: React.FC<StoryProps> = ({ name, mediaKey, alt, children, ...props }) => (
    <div className="content-bubble flex flex-col h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2 transform">
        <div className="mb-6 rounded-lg overflow-hidden">
            <EditableMedia
                mediaKey={mediaKey}
                mediaUrl={props.mediaContent[mediaKey]!}
                alt={alt}
                isEditMode={props.isEditMode}
                onUpdate={props.onMediaUpdate}
                className="aspect-video w-full object-cover"
            />
        </div>
        <div className="flex flex-col flex-grow p-6 pt-0">
            <PawIcon className="w-10 h-10 text-brand-secondary mb-4" />
            <h3 className="text-2xl font-bold text-brand-secondary mb-4">{name}'s Story</h3>
            <div className="space-y-4 text-gray-700 text-base flex-grow">
                {children}
            </div>
        </div>
    </div>
)


const StoriesSection: React.FC<SectionProps> = (props) => {
  return (
    <section id="stories" className="py-16 md:py-20 bg-sanctuary-subtle-bg">
        <div className="container mx-auto px-6 max-w-7xl">
            <div className="content-bubble text-center">
                <PawIcon className="w-10 h-10 text-brand-secondary mx-auto mb-4" />
                <h2 className="text-3xl md:text-4xl font-bold text-brand-secondary">Journeys of Healing</h2>
                <p className="mt-2 text-lg text-gray-600">Every dog who arrives at our sanctuary carries a story. These are just a few.</p>
            </div>
            <div className="content-bubble text-lg text-gray-700 space-y-4">
                <p>Every dog who arrives at our sanctuary carries a story. Some are quiet, some are heartbreaking and some are filled with surprising strength. While each journey is different they all have one thing in common: the chance to begin again.</p>
                <p>This page honours a few of the incredible dogs who've come through our gates, reminding us why we do this work and what's possible when care, patience and love come together.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                <Story name="Ruby" mediaKey="stories_ruby" alt="A sad, scared-looking dog" {...props}>
                    <p className="font-bold">From hopeless to thriving...</p>
                    <p>Ruby had likely gone her entire life without knowing kindness. She flinched at every sound and shied away from every human touch. At first, she would barely eat or move. We gave her a quiet space to settle with soft blankets and round-the-clock monitoring.</p>
                    <p>Ruby was suffering from a severe skin condition, malnourishment, and a heavy infestation of worms, ticks and fleas. She also had undiagnosed arthritis and deep social anxiety after a lifetime of isolation.</p>
                    <p>With dedicated veterinary care and slow, gentle rehabilitation, Ruby's health began to improve. As her physical strength returned, so did her personality. She started greeting caregivers with gentle tail wags and resting her head in our laps. Watching Ruby rediscover joy has been one of the most moving experiences at the sanctuary.</p>
                </Story>

                <Story name="Honey" mediaKey="stories_honey" alt="A resilient dog with one eye" {...props}>
                    <p className="font-bold">The dog who found us...</p>
                    <p>Honey came to us in a way we will never forget. She walked herself to the sanctuary gate and collapsed, as if knowing she needed help. The fact that she chose to come to us spoke volumes about her will to survive.</p>
                    <p>She had recently lost sight in one eye, was dangerously underweight, covered in ticks, and suffering from a skin condition and open wounds. In the first days, we focused on stabilising her, treating her wounds, and offering gentle reassurance.</p>
                    <p>Adapting to partial blindness has been difficult, but Honey continues to surprise us. Her physical health improved dramatically, and her emotional healing continues each day. She's developed strong bonds with a few of our long-term dogs and now walks confidently on familiar paths, slowly learning to trust the world again.</p>
                </Story>
                
                <Story name="Queenie" mediaKey="stories_queenie" alt="A mother dog and her puppies" {...props}>
                    <p className="font-bold">A mother's quiet strength...</p>
                    <p>Queenie and her puppies were among the dogs left behind by the previous owner of the farm where our sanctuary now stands. At the time, Queenie was undernourished and doing her best to care for her pups with almost nothing. Her resilience and devotion were undeniable.</p>
                    <p>From the very beginning, we knew we had to earn her trust. We gave her space, moved slowly, and ensured she felt secure. As food became regular and her pups grew stronger, Queenie began to soften.</p>
                    <p>We treated her for mange and malnutrition. Today, Queenie is still with us, a gentle and affectionate soul. Her puppies have grown into healthy, confident young dogs, and two have already found loving forever homes. Queenie's journey from fierce protector to peaceful companion remains one of our most beautiful transformations.</p>
                </Story>
            </div>
            
            <div className="content-bubble text-center mt-8">
                <PawIcon className="w-8 h-8 text-brand-secondary mx-auto mb-2" />
                <h2 className="text-2xl font-bold text-brand-secondary mb-4">More Stories Coming Soon</h2>
                <p className="max-w-3xl mx-auto text-lg text-gray-700 mb-6">
                    We are always updating this page as our dogs grow, heal, and show us what true resilience looks like. Keep checking back to follow the journeys of Angel, Jonah, and many others who are finding safety, comfort and joy at The Gem Project Sanctuary.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                    <CtaButton href="/dogs/sponsorship" className="bg-brand-secondary text-white hover:bg-brand-secondary-hover">Sponsor a Dog in Recovery</CtaButton>
                    <CtaButton href="/donate" className="bg-brand-secondary text-white hover:bg-brand-secondary-hover">Donate Toward Vet Care</CtaButton>
                    <CtaButton href="/adopt-a-dog" className="bg-brand-primary text-white hover:bg-brand-primary-hover">Meet Our Adoptable Dogs</CtaButton>
                </div>
            </div>
        </div>
    </section>
  );
};

export default StoriesSection;
