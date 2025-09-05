import React from 'react';
import { MediaContent } from '../types.ts';
import CtaButton from './CtaButton.tsx';
import { PageHero, ContentSection } from './PageComponents.tsx';
import { PawIcon } from './icons.tsx';

interface HorseWishlistPageProps {
  mediaContent: MediaContent;
  isEditMode: boolean;
  onMediaUpdate: (key: string, url: string) => void;
}

const WishlistCategory: React.FC<{title: string; items: string[]}> = ({title, items}) => (
    <div className="bg-brand-surface p-6 md:p-8 rounded-xl shadow-lg h-full flex flex-col">
        <div className="flex items-center mb-6">
            <PawIcon className="w-8 h-8 text-brand-accent mr-3" />
            <h3 className="text-2xl md:text-3xl font-bold text-brand-accent">{title}</h3>
        </div>
        <ul className="list-disc list-inside space-y-3 text-gray-700 text-base md:text-lg leading-relaxed flex-grow">
            {items.map(item => <li key={item} className="leading-relaxed">{item}</li>)}
        </ul>
    </div>
)

const HorseWishlistPage: React.FC<HorseWishlistPageProps> = (props) => {
  return (
    <div className="bg-brand-bg-main">
      <PageHero
        title="Our Horse Wishlist"
        subtitle="Help Us Care for Our Gentle Giants"
        mediaKey="horse_facilities_hero"
        alt="Horses in paddock with care items"
        titleColorClass="text-brand-accent"
        {...props}
      />

      <ContentSection>
        <p className="text-center">Caring for horses requires specialized equipment, feed, and medical supplies. Your in-kind donations make it possible for us to provide the best care for these gentle giants who have found sanctuary with us. Every donation, whether large or small, directly impacts their daily comfort and wellbeing.</p>
      </ContentSection>
      
      <section className="py-16 md:py-20 bg-brand-bg-subtle">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="content-bubble">
            <div className="p-8 md:p-12">
              <PawIcon className="w-12 h-12 text-brand-accent mx-auto mb-6" />
              <h2 className="text-4xl md:text-5xl font-bold text-brand-accent mb-16 text-center">What Our Horses Need Most</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <WishlistCategory 
                      title="Feed & Nutrition"
                      items={[
                          "Quality hay (lucerne/alfalfa)",
                          "Pasture cubes",
                          "Chaff and bran",
                          "Horse feed pellets",
                          "Salt blocks",
                          "Supplements (joint, digestive)",
                          "Molasses",
                          "Carrots and apples"
                      ]}
                  />
                  <WishlistCategory 
                      title="Grooming & Care"
                      items={[
                          "Body brushes",
                          "Hoof picks",
                          "Curry combs",
                          "Mane and tail brushes",
                          "Fly spray",
                          "Wound care supplies",
                          "Hoof oil",
                          "Shampoo and conditioner"
                      ]}
                  />
                  <WishlistCategory 
                      title="Tack & Equipment"
                      items={[
                          "Halters (various sizes)",
                          "Lead ropes",
                          "Blankets and rugs",
                          "Saddle pads",
                          "Bridles",
                          "Lunging equipment",
                          "Safety equipment",
                          "Training aids"
                      ]}
                  />
                  <WishlistCategory 
                      title="Shelter & Comfort"
                      items={[
                          "Straw bedding",
                          "Rubber mats",
                          "Water buckets",
                          "Feed bins",
                          "Hay nets",
                          "Shelter materials",
                          "Fence repairs",
                          "Gate hardware"
                      ]}
                  />
                  <WishlistCategory 
                      title="Medical Supplies"
                      items={[
                          "Bandages",
                          "Antiseptic solutions",
                          "Thermometers",
                          "Syringes",
                          "Dewormers",
                          "First aid supplies",
                          "Prescription medications",
                          "Hoof care products"
                      ]}
                  />
                  <WishlistCategory 
                      title="Tools & Maintenance"
                      items={[
                          "Wheelbarrows",
                          "Pitchforks and rakes",
                          "Hoses and sprinklers",
                          "Fence tools",
                          "Building materials",
                          "Paint and brushes",
                          "Power tools",
                          "Vehicle maintenance"
                      ]}
                  />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-brand-bg-main">
        <div className="container mx-auto px-6">
          <div className="content-bubble text-center max-w-4xl mx-auto">
            <div className="p-6 md:p-8">
              <PawIcon className="w-10 h-10 text-brand-accent mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-brand-accent mb-6">How to Donate Items</h2>
              <div className="text-lg text-gray-700 space-y-4 mb-8">
                <p className="text-center">Donating is easy! Contact us to arrange drop-off times or to discuss large donations. We're grateful for items in good condition that can make a real difference in our horses' lives.</p>
                <p className="text-center">For perishable items like feed, please coordinate with us first to ensure freshness and storage space.</p>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                <CtaButton href="/contact" className="bg-brand-accent text-white hover:bg-brand-accent-hover">
                  Contact Us About Donations
                </CtaButton>
                <CtaButton href="/donate" className="bg-brand-primary text-white hover:bg-brand-primary-hover">
                  Make a Financial Donation
                </CtaButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-brand-bg-subtle">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <div className="content-bubble">
            <div className="p-6 md:p-8">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-accent mb-6">Other Ways to Help</h2>
              <div className="flex flex-wrap justify-center gap-4">
                <CtaButton href="/horses#sponsor" className="bg-brand-accent text-white hover:bg-brand-accent-hover">
                  Sponsor a Horse
                </CtaButton>
                <CtaButton href="/horses#hands-on" className="bg-brand-accent text-white hover:bg-brand-accent-hover">
                  Hands-On Care Program
                </CtaButton>
                <CtaButton href="/get-involved#volunteer" className="bg-brand-yellow text-brand-text-primary hover:bg-brand-yellow-hover">
                  Volunteer
                </CtaButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HorseWishlistPage;