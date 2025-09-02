
import React from 'react';
import { MediaContent } from '../types.ts';
import CtaButton from './CtaButton.tsx';
import { PageHero, ContentSection } from './PageComponents.tsx';
import { PawIcon } from './icons.tsx';

interface DogWishlistPageProps {
  mediaContent: MediaContent;
  isEditMode: boolean;
  onMediaUpdate: (key: string, url: string) => void;
}

const WishlistCategory: React.FC<{title: string; items: string[]}> = ({title, items}) => (
    <div className="bg-brand-surface p-6 md:p-8 rounded-xl shadow-lg h-full flex flex-col">
        <div className="flex items-center mb-6">
            <PawIcon className="w-8 h-8 text-brand-secondary mr-3" />
            <h3 className="text-2xl md:text-3xl font-bold text-brand-secondary">{title}</h3>
        </div>
        <ul className="list-disc list-inside space-y-3 text-gray-700 text-base md:text-lg leading-relaxed flex-grow">
            {items.map(item => <li key={item} className="leading-relaxed">{item}</li>)}
        </ul>
    </div>
)

const DogWishlistPage: React.FC<DogWishlistPageProps> = (props) => {
  return (
    <div className="bg-brand-bg-main">
      <PageHero
        title="Our Dog Wishlist"
        subtitle="Help Us Meet Their Daily Needs"
        mediaKey="about_sleeping_dogs"
        alt="Peaceful sleeping dog"
        titleColorClass="text-brand-secondary"
        {...props}
      />

      <ContentSection>
        <p>In-kind donations are just as vital as financial gifts. From bowls of food to warm bedding and training tools, every donated item helps us care for the dogs who call our sanctuary home. These practical gifts stretch our resources and bring immediate comfort and support to dogs on their healing journey.</p>
      </ContentSection>
      
      <section className="py-16 md:py-20 bg-brand-bg-subtle">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-12">
            <PawIcon className="w-16 h-16 text-brand-secondary mx-auto mb-8" />
            <h2 className="text-5xl md:text-6xl font-bold text-brand-secondary mb-6">What Our Dogs Need Most</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-brand-secondary to-brand-primary mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Every donation makes a direct impact on the daily comfort and wellbeing of our rescued dogs</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
            <WishlistCategory 
              title="Food & Basic Care"
              items={[
                "Quality dry and wet dog food (all formulas)",
                "Stainless steel dog bowls",
                "Durable collars, leads, and harnesses",
                "Soft blankets and pet beds",
                "Dog jerseys and raincoats (all sizes)",
                "Towels and large water buckets",
                "Shade cloth and outdoor kennels"
              ]}
            />
            <WishlistCategory 
              title="Health & Hygiene"
              items={[
                "Tick, flea, and deworming treatments",
                "Dog-safe shampoo and grooming brushes",
                "Nail clippers and ear cleaning solution",
                "Heavy-duty cleaning supplies (disinfectant, mops)",
                "Poop scoopers and biodegradable waste bags",
                "Latex gloves"
              ]}
            />
          </div>
          
          <div className="flex justify-center mt-10">
            <div className="max-w-md">
              <WishlistCategory 
                title="Enrichment & Training"
                items={[
                  "Durable chew toys (e.g., KONG)",
                  "Rope toys and enrichment puzzles",
                  "Licki mats and slow feeders",
                  "Sensory toys and training aids",
                  "Treat pouches and clickers",
                  "Agility equipment"
                ]}
              />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default DogWishlistPage;
