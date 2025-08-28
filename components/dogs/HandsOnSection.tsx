import React from 'react';
import { MediaContent } from '../../types.ts';
import CtaButton from '../CtaButton.tsx';
import { PawIcon } from '../icons.tsx';
import EditableMedia from '../EditableMedia.tsx';

interface SectionProps {
  mediaContent: MediaContent;
  isEditMode: boolean;
  onMediaUpdate: (key: string, url: string) => void;
}

const CarePackageCard: React.FC<{
    title: string;
    price: string;
    description: string;
    features: string[];
    isPopular?: boolean;
}> = ({ title, price, description, features, isPopular }) => (
    <div className={`content-bubble flex flex-col h-full ${isPopular ? 'border-2 border-brand-primary' : ''}`}>
        <div className="p-6 md:p-8 flex flex-col flex-grow">
            {isPopular && <div className="text-center mb-4"><span className="bg-brand-primary text-white text-sm font-bold px-3 py-1 rounded-full">Most Popular</span></div>}
            <PawIcon className="w-8 h-8 text-sanctuary-dark mx-auto mb-2" />
            <h3 className="text-2xl font-bold text-sanctuary-dark text-center">{title}</h3>
            <div className="text-4xl font-bold text-center my-4 text-brand-primary">{price}</div>
            <p className="text-gray-600 text-center mb-6 flex-grow">{description}</p>
            <ul className="space-y-3 mb-8">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                        <PawIcon className="w-5 h-5 text-brand-primary mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                    </li>
                ))}
            </ul>
            <div className="mt-auto text-center">
                <CtaButton href="/contact?subject=CarePackage" className="bg-brand-primary text-white hover:bg-brand-primary-hover w-full">Choose this Package</CtaButton>
            </div>
        </div>
    </div>
);


const HandsOnSection: React.FC<SectionProps> = (props) => {
  return (
    <section id="hands-on" className="py-16 md:py-20 bg-brand-bg-main">
        <div className="container mx-auto px-6 max-w-6xl">
            <div className="max-w-4xl mx-auto">
                <div className="content-bubble text-center">
                    <div className="p-6 md:p-8">
                      <PawIcon className="w-10 h-10 text-sanctuary-dark mx-auto mb-4" />
                      <h2 className="text-3xl md:text-4xl font-bold text-sanctuary-dark">Hands-On Care Programme</h2>
                      <p className="mt-2 text-lg text-gray-600">Not able or ready to adopt? We have a great option for you.</p>
                    </div>
                </div>
                 <div className="content-bubble">
                    <EditableMedia
                        mediaKey="hands_on_care_hero"
                        mediaUrl={props.mediaContent.hands_on_care_hero!}
                        alt="A person gently petting a sanctuary dog"
                        isEditMode={props.isEditMode}
                        onUpdate={props.onMediaUpdate}
                        className="rounded-t-lg aspect-video"
                    />
                    <div className="p-6 md:p-8 text-lg text-gray-700 space-y-4">
                        <p>You might live somewhere that doesn’t allow animals. Or your schedule could be too full for daily care. Perhaps your heart is open, but your life just isn’t set up for it right now. That’s why we created the Hands-On Care Programme.</p>
                        <p className="font-semibold text-sanctuary-dark">Choose a dog who lives safely at our sanctuary and becomes yours in every way that matters. Build a real relationship through visits, bonding time and shared routines. Watch as they begin to recognise your voice and light up each time you arrive.</p>
                        <p>This is your dog. Your connection. Your joy. We take care of their daily needs including food, shelter and vet care while you experience the love, presence and companionship of having your own dog.</p>
                    </div>
                </div>
                <div className="content-bubble mt-8 p-4 bg-blue-100 border-l-4 border-blue-500 text-blue-800">
                    <div className="p-4">
                      <p><strong>Part of a company or team?</strong> We offer unforgettable corporate team building experiences that combine connection, purpose and impact. Spend time together in a beautiful setting, bond through dog-friendly activities, and make a lasting difference in the lives of rescued animals.</p>
                    </div>
                </div>

                <div className="content-bubble text-center mt-12">
                  <div className="p-6 md:p-8">
                    <PawIcon className="w-10 h-10 text-sanctuary-dark mx-auto mb-4" />
                    <h2 className="text-3xl font-bold text-sanctuary-dark">Choose a Hands-On Caregiver Package</h2>
                  </div>
                </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                <CarePackageCard 
                    title="Make-a-Day"
                    price="R80"
                    description="Spend three meaningful hours with one of our beloved sanctuary dogs. A once-off experience without any ongoing commitment."
                    features={["One-time 3-hour visit", "Walk, brush, and relax with a dog", "Perfect for a single day of connection"]}
                />
                <CarePackageCard 
                    title="Caregiver"
                    price="R300/mo"
                    description="Enjoy two calm hours per week getting to know your chosen sanctuary dog through relaxed walks and quiet companionship."
                    features={["One visit per week (2 hours)", "Your dog’s story", "Digital caregiver certificate"]}
                    isPopular={true}
                />
                <CarePackageCard 
                    title="Caregiver Plus"
                    price="R600/mo"
                    description="Deepen your relationship with your dog across two visits and three hours per week of calm interaction and light enrichment."
                    features={["Two visits per week (3 hours total)", "Access to occasional training sessions", "Includes certificate & story"]}
                />
                 <CarePackageCard 
                    title="Enrichment Champion"
                    price="R900/mo"
                    description="Spend up to five hours a week deepening your bond through scent work, food puzzles, and structured enrichment."
                    features={["Up to three visits per week (5 hours total)", "Priority scheduling", "Behind-the-scenes access", "Printed certificate & surprise gift"]}
                />
                 <CarePackageCard 
                    title="Tailored Caregiver"
                    price="Custom"
                    description="Design a custom experience with your chosen dog. Ideal for senior dogs, trauma recovery or therapeutic goals."
                    features={["Personalised schedule", "Guided sessions available", "Welcome call with our team", "Perfect for specific needs"]}
                />
                 <div className="content-bubble text-center flex flex-col justify-center">
                   <div className="p-6 md:p-8 flex flex-col flex-grow">
                    <PawIcon className="w-8 h-8 text-sanctuary-dark mx-auto mb-2" />
                    <h3 className="text-xl font-bold text-sanctuary-dark">Corporate Team Building</h3>
                    <p className="text-gray-600 mt-4 flex-grow">Custom pricing based on group size and visit duration. Contact us to plan a memorable day.</p>
                   </div>
                </div>
            </div>
            <div className="content-bubble italic text-center mt-12 max-w-4xl mx-auto">
                <div className="p-6 md:p-8">
                    <p>Every package supports your chosen dog’s daily food, medical care, enrichment and safety. You’re not just visiting. You’re stepping into a role that matters – to them and to you.</p>
                </div>
            </div>
            
            <div className="content-bubble text-center mt-8 bg-brand-primary text-white max-w-4xl mx-auto">
                <div className="p-6 md:p-8">
                    <PawIcon className="w-10 h-10 text-white mx-auto mb-4" />
                    <h2 className="text-3xl font-bold mb-4">Ready to build a bond that matters?</h2>
                    <p className="max-w-2xl mx-auto text-lg text-gray-200 mb-8">
                        Email us to choose your dog and begin your journey today.
                    </p>
                    <CtaButton href="/contact?subject=BecomeACaregiver" className="bg-brand-accent text-white hover:bg-brand-accent-hover">
                        Become a Caregiver
                    </CtaButton>
                </div>
            </div>
        </div>
    </section>
  );
};

export default HandsOnSection;