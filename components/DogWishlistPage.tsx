
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
    <div className="bg-brand-surface p-4 md:p-6 rounded-lg shadow-md h-full flex flex-col">
        <div className="flex items-center mb-3">
            <PawIcon className="w-6 h-6 text-brand-secondary mr-2" />
            <h3 className="text-xl md:text-2xl font-bold text-brand-secondary">{title}</h3>
        </div>
        <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm md:text-base leading-tight flex-grow">
            {items.map(item => <li key={item} className="leading-tight">{item}</li>)}
        </ul>
    </div>
)

const DogWishlistPage: React.FC<DogWishlistPageProps> = (props) => {
  return (
    <div className="bg-brand-bg-main">
      <PageHero
        title="Our Dog Wishlist"
        subtitle="Help Us Meet Their Daily Needs"
        mediaKey="wishlist_hero"
        alt="A dog surrounded by toys and food donations"
        titleColorClass="text-brand-secondary"
        {...props}
      />

      <ContentSection>
        <p>In-kind donations are just as vital as financial gifts. From bowls of food to warm bedding and training tools, every donated item helps us care for the dogs who call our sanctuary home. These practical gifts stretch our resources and bring immediate comfort and support to dogs on their healing journey.</p>
      </ContentSection>
      
      <section className="py-16 md:py-20 bg-brand-bg-subtle">
        <div className="container mx-auto px-6">
          <div className="content-bubble">
            <div className="p-6 md:p-8">
              <PawIcon className="w-10 h-10 text-brand-secondary mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-brand-secondary mb-12 text-center">What Our Dogs Need Most</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
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
        </div>
      </section>

    </div>
  );
};

export default DogWishlistPage;
