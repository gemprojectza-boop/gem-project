
import React from 'react';
import { MediaContent } from '../../types.ts';
import CtaButton from '../CtaButton.tsx';
import { PageHero, ContentSection } from '../PageComponents.tsx';
import { PawIcon } from '../icons.tsx';

interface HandsOnDogsPageProps {
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
    <div className={`border-2 rounded-lg p-6 flex flex-col ${isPopular ? 'border-brand-primary' : 'border-gray-200'}`}>
        {isPopular && <div className="text-center mb-4"><span className="bg-brand-primary text-white text-sm font-bold px-3 py-1 rounded-full">Most Popular</span></div>}
        <div className="flex items-center mb-2">
            <PawIcon className="w-8 h-8 text-brand-secondary mr-3" />
            <h3 className="text-2xl font-bold text-brand-secondary">{title}</h3>
        </div>
        <div className="text-4xl font-bold my-4 text-brand-secondary">{price}</div>
        <p className="text-brand-text-secondary mb-6 flex-grow">{description}</p>
        <ul className="space-y-3 mb-8">
            {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                    <PawIcon className="w-5 h-5 text-brand-secondary mr-3 mt-1 flex-shrink-0" />
                    <span className="text-brand-text-primary">{feature}</span>
                </li>
            ))}
        </ul>
        <div className="mt-auto text-center">
            <CtaButton href="/contact?subject=CarePackage" className="bg-brand-secondary text-white hover:bg-brand-secondary-hover w-full">Choose this Package</CtaButton>
        </div>
    </div>
);


const HandsOnDogsPage: React.FC<HandsOnDogsPageProps> = (props) => {
  return (
    <div className="bg-brand-bg-main">
      <PageHero
        title="Hands-On Care Programme"
        subtitle="Not able or ready to adopt? We have a great option just for you."
        mediaKey="hands_on_care_hero"
        alt="A person gently petting a sanctuary dog"
        titleColorClass="text-brand-secondary"
        {...props}
      />

      <ContentSection>
        <p>You might live somewhere that doesn’t allow animals. Or your schedule could be too full for daily care. Perhaps your heart is open, but your life just isn’t set up for it right now. That’s why we created the Hands-On Care Programme.</p>
        <p className="font-semibold text-brand-secondary">Choose a dog who lives safely at our sanctuary and becomes yours in every way that matters. Build a real relationship through visits, bonding time and shared routines. Watch as they begin to recognise your voice and light up each time you arrive.</p>
        <p>This is your dog. Your connection. Your joy. We take care of their daily needs including food, shelter and vet care while you experience the love, presence and companionship of having your own dog.</p>
        <div className="mt-4 p-4 bg-brand-primary/10 border-l-4 border-brand-primary text-brand-text-secondary rounded">
            <p><strong>Part of a company or team?</strong> We offer unforgettable corporate team building experiences that combine connection, purpose and impact. Spend time together in a beautiful setting, bond through dog-friendly activities, and make a lasting difference in the lives of rescued animals.</p>
        </div>
      </ContentSection>

      <ContentSection title="Choose a Hands-On Caregiver Package" className="bg-brand-bg-subtle" titleColorClass="text-brand-secondary">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
        </div>
        <div className="mt-12 text-center text-brand-text-secondary italic">
            <p>Every package supports your chosen dog’s daily food, medical care, enrichment and safety. You’re not just visiting. You’re stepping into a role that matters – to them and to you.</p>
        </div>
      </ContentSection>

      <ContentSection title="Corporate Team Building Days" titleColorClass="text-brand-secondary">
        <p>Looking for a powerful way to bring your team together while making a real impact? Spend a full day at our peaceful sanctuary and reconnect with purpose, nature and each other through meaningful, guided activities:</p>
        <ul className="list-disc list-inside space-y-3 my-6">
            <li>Dog-friendly obstacle courses and collaborative team challenges</li>
            <li>Fun group games and shared bonding experiences</li>
            <li>Gentle, hands-on involvement in enrichment and dog care</li>
            <li>Optional catered lunch or a relaxed picnic setup at our sanctuary</li>
        </ul>
        <p>Your team will leave feeling energised, united and fulfilled, knowing they’ve made a real difference for animals who need it most.</p>
        <p className="font-semibold mt-4">Custom pricing based on group size and visit duration.</p>
      </ContentSection>

       <section className="py-20 bg-brand-primary">
        <div className="container mx-auto px-6 text-center text-white">
            <PawIcon className="w-10 h-10 text-white mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-secondary">Ready to build a bond that matters?</h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-200 mb-8">
                Email us to choose your dog and begin your journey today.
            </p>
            <CtaButton href="/contact?subject=BecomeACaregiver" className="bg-brand-secondary hover:bg-brand-secondary-hover text-white">
                Become a Caregiver
            </CtaButton>
        </div>
      </section>

    </div>
  );
};

export default HandsOnDogsPage;
