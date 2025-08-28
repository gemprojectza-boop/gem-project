
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

const WishlistCategory: React.FC<{title: string; items: string[]}> = ({title, items}) => (
    <div className="content-bubble h-full p-6">
        <PawIcon className="w-8 h-8 text-brand-secondary mb-2" />
        <h3 className="text-2xl font-bold mb-4 text-brand-secondary">{title}</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
            {items.map(item => <li key={item}>{item}</li>)}
        </ul>
    </div>
)

const WishlistSection: React.FC<SectionProps> = (props) => {
  return (
    <section id="wishlist" className="py-16 md:py-20 bg-sanctuary-subtle-bg">
        <div className="container mx-auto px-6 max-w-6xl">
            <div className="max-w-4xl mx-auto">
                <div className="content-bubble text-center">
                    <PawIcon className="w-10 h-10 text-brand-secondary mx-auto mb-4" />
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-secondary">Our Dog Wishlist</h2>
                    <p className="mt-2 text-lg text-gray-600">Help Us Meet Their Daily Needs</p>
                </div>
                <div className="content-bubble text-lg text-gray-700">
                    <p>In-kind donations are just as vital as financial gifts. From bowls of food to warm bedding and training tools, every donated item helps us care for the dogs who call our sanctuary home. These practical gifts stretch our resources and bring immediate comfort and support to dogs on their healing journey.</p>
                </div>
                 <div className="content-bubble text-center">
                    <PawIcon className="w-10 h-10 text-brand-secondary mx-auto mb-4" />
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-secondary">What Our Dogs Need Most</h2>
                </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
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
            
            <div className="content-bubble text-center mt-12 max-w-4xl mx-auto">
                <PawIcon className="w-10 h-10 text-brand-secondary mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-brand-secondary mb-4">How to Donate Supplies</h2>
                <p className="mx-auto text-lg text-gray-700 mb-6">
                   If you would like to arrange a drop-off or delivery, please contact us. We are happy to provide directions or help coordinate delivery times. You can also email us if you have gently used pet supplies you'd like to donate. Every act of kindness counts.
                </p>
                <CtaButton href="/contact?subject=WishlistDonation" className="bg-brand-accent text-white hover:bg-brand-accent-hover">
                    Contact Us to Arrange Donation
                </CtaButton>
            </div>
        </div>
    </section>
  );
};

export default WishlistSection;
