
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
    <div className="content-bubble h-full p-4">
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
                
                <div className="content-bubble grid grid-cols-1 md:grid-cols-2 items-stretch">
                    <div className="h-full">
                        <EditableMedia
                            mediaKey="wishlist_01"
                            mediaUrl={props.mediaContent.wishlist_01!}
                            alt="Dogs enjoying their daily care at the sanctuary"
                            isEditMode={props.isEditMode}
                            onUpdate={props.onMediaUpdate}
                            className="w-full h-full object-cover min-h-[300px]"
                        />
                    </div>
                    <div className="p-6 md:p-8 flex flex-col justify-center">
                        <div className="text-lg text-gray-700 space-y-4">
                            <p>In-kind donations are just as vital as financial gifts. From bowls of food to warm bedding and training tools, every donated item helps us care for the dogs who call our sanctuary home.</p>
                            <p>These practical gifts stretch our resources and bring immediate comfort and support to dogs on their healing journey.</p>
                        </div>
                    </div>
                </div>
                 <div className="content-bubble text-center">
                    <PawIcon className="w-10 h-10 text-brand-secondary mx-auto mb-4" />
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-secondary">What Our Dogs Need Most</h2>
                </div>
            </div>
            
            <div className="card-grid gap-6 mt-8">
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
            
            <div className="content-bubble grid grid-cols-1 md:grid-cols-2 items-stretch mt-12">
                <div className="p-6 md:p-8 flex flex-col justify-center">
                    <PawIcon className="w-10 h-10 text-brand-secondary mb-4" />
                    <h3 className="text-2xl font-bold text-brand-secondary mb-4">Ready to Help?</h3>
                    <div className="text-lg text-gray-700 space-y-4 flex-grow">
                        <p>Every donated item makes a direct impact on a dog's comfort and happiness. You can drop off items at our sanctuary or contact us to arrange collection.</p>
                        <p>Your generosity helps us focus our resources on rescue, rehabilitation, and giving these deserving animals the second chance they need.</p>
                    </div>
                    <div className="mt-6">
                        <CtaButton href="/contact?subject=Wishlist%20Donation" className="bg-brand-secondary text-white hover:bg-brand-secondary-hover">
                            Contact Us About Donations
                        </CtaButton>
                    </div>
                </div>
                <div className="h-full">
                    <EditableMedia
                        mediaKey="donate_story_2"
                        mediaUrl={props.mediaContent.donate_story_2!}
                        alt="Happy dogs with donated supplies"
                        isEditMode={props.isEditMode}
                        onUpdate={props.onMediaUpdate}
                        className="w-full h-full object-cover min-h-[300px]"
                    />
                </div>
            </div>
            
        </div>
    </section>
  );
};

export default WishlistSection;
