

import React, { useEffect } from 'react';
import { MediaContent } from '../types.ts';
import CtaButton from './CtaButton.tsx';
import { PageHero, ContentSection } from './PageComponents.tsx';
import { PawIcon } from './icons.tsx';

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
            <PawIcon className="w-8 h-8 text-brand-text-primary mr-3" />
            <h3 className="text-2xl font-bold text-brand-text-primary">{title}</h3>
        </div>
        <div className="text-4xl font-bold my-4 text-brand-primary">{price}</div>
        <p className="text-brand-text-secondary mb-6 flex-grow">{description}</p>
        <ul className="space-y-3 mb-8">
            {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                    <PawIcon className="w-5 h-5 text-brand-primary mr-3 mt-1 flex-shrink-0" />
                    <span className="text-brand-text-primary">{feature}</span>
                </li>
            ))}
        </ul>
        <div className="mt-auto text-center">
            <CtaButton href="/contact?subject=CarePackage" className="bg-brand-primary text-white hover:bg-brand-primary-hover w-full">Choose this Package</CtaButton>
        </div>
    </div>
);


const HandsOnDogsPage: React.FC<HandsOnDogsPageProps> = (props) => {
  useEffect(() => {
    // Force white text on footer headings
    const forceWhiteText = () => {
      const elements = document.querySelectorAll('h2');
      elements.forEach((el) => {
        if (el.textContent && (
          el.textContent.includes('Ready to change a life?') || 
          el.textContent.includes('Ready to make a difference?') ||
          el.textContent.includes('Ready to transform lives?') ||
          el.textContent.includes('Ready for an adventure?') ||
          el.textContent.includes('Ready to help?') ||
          el.textContent.includes('Ready to build a bond that matters?')
        )) {
          el.style.setProperty('color', '#ffffff', 'important');
          el.style.setProperty('-webkit-text-fill-color', '#ffffff', 'important');
          el.style.setProperty('text-shadow', 'none', 'important');
          el.style.removeProperty('background-color');
          
          // Remove any red classes
          el.classList.remove('text-brand-secondary', 'text-red-600');
          el.classList.add('text-white');
        }
      });
    };
    
    forceWhiteText();
    const timer = setInterval(forceWhiteText, 100);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-brand-bg-main dog-page-override">
            <PageHero
        title="Part-Owning Programme"
        subtitle="Experience the joy of having your own dog or horse without full adoption."
        mediaKey="outreach_hero"
        alt="Community outreach program in action"
        mediaContent={{
          ...props.mediaContent,
          hands_on_care_hero: "https://i.ibb.co/xq5z223g/DSC06243.jpg"
        }}
        isEditMode={props.isEditMode}
        onMediaUpdate={props.onMediaUpdate}
      />

      <ContentSection>
        <p className="text-center">You might live somewhere that doesn't allow animals. Or your schedule could be too full for daily care. Perhaps your heart is open, but your life just isn't set up for it right now. That's why we created our Part-Owning Programme.</p>
        <p className="font-semibold text-brand-text-primary">Choose a dog or horse who lives safely at our sanctuary and becomes yours in every way that matters. Build a real relationship through visits, bonding time and shared routines. Watch as they begin to recognise your voice and light up each time you arrive.</p>
        <p className="text-center">This is your animal companion. Your connection. Your joy. We take care of their daily needs including food, shelter and vet care while you experience the love, presence and companionship of having your own dog or horse.</p>
        <div className="mt-4 p-4 bg-brand-primary/10 border-l-4 border-brand-primary text-brand-text-secondary rounded">
            <p className="text-center"><strong>Part of a company or team?</strong> We offer unforgettable corporate team building experiences that combine connection, purpose and impact. Spend time together in a beautiful setting, bond through dog-friendly activities, and make a lasting difference in the lives of rescued animals.</p>
        </div>
      </ContentSection>

      <ContentSection title="Choose a Part-Owning Package" className="bg-brand-bg-subtle">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CarePackageCard 
                title="Make-a-Day"
                price="R80"
                description="Spend three meaningful hours with one of our beloved sanctuary animals. A once-off experience without any ongoing commitment."
                features={["One-time 3-hour visit", "Walk, brush, and relax with a dog or gentle horse", "Perfect for a single day of connection"]}
            />
            <CarePackageCard 
                title="Part-Owner"
                price="R300/mo"
                description="Enjoy two calm hours per week getting to know your chosen sanctuary animal through relaxed walks and quiet companionship."
                features={["One visit per week (2 hours)", "Your animal's story", "Digital part-owner certificate"]}
                isPopular={true}
            />
            <CarePackageCard 
                title="Part-Owner Plus"
                price="R600/mo"
                description="Deepen your relationship with your animal across two visits and three hours per week of calm interaction and light enrichment."
                features={["Two visits per week (3 hours total)", "Access to occasional training sessions", "Includes certificate & story"]}
            />
             <CarePackageCard 
                title="Enrichment Champion"
                price="R900/mo"
                description="Spend up to five hours a week deepening your bond through scent work, food puzzles, and structured enrichment activities."
                features={["Up to three visits per week (5 hours total)", "Priority scheduling", "Behind-the-scenes access", "Printed certificate & surprise gift"]}
            />
             <CarePackageCard 
                title="Tailored Part-Owner"
                price="Custom"
                description="Design a custom experience with your chosen animal. Ideal for senior animals, trauma recovery or therapeutic goals."
                features={["Personalised schedule", "Guided sessions available", "Welcome call with our team", "Perfect for specific needs"]}
            />
        </div>
        <div className="mt-12 text-center text-brand-text-secondary italic">
            <p className="text-center">Every package supports your chosen animal's daily food, medical care, enrichment and safety. You're not just visiting. You're stepping into a role that matters – to them and to you.</p>
        </div>
      </ContentSection>

      <ContentSection title="Corporate Team Building Days">
        <p className="text-center">Looking for a powerful way to bring your team together while making a real impact? Spend a full day at our peaceful sanctuary and reconnect with purpose, nature and each other through meaningful, guided activities:</p>
        <ul className="list-disc list-inside space-y-3 my-6">
            <li>Animal-friendly obstacle courses and collaborative team challenges</li>
            <li>Fun group games and shared bonding experiences</li>
            <li>Gentle, hands-on involvement in enrichment and animal care</li>
            <li>Interactive sessions with both dogs and gentle horses</li>
            <li>Optional catered lunch or a relaxed picnic setup at our sanctuary</li>
        </ul>
        <p className="text-center">Your team will leave feeling energised, united and fulfilled, knowing they’ve made a real difference for animals who need it most.</p>
        <p className="font-semibold mt-4">Custom pricing based on group size and visit duration.</p>
      </ContentSection>

       <section className="py-20 bg-brand-primary">
        <div className="container mx-auto px-6 text-center text-white">
            <PawIcon className="w-10 h-10 text-white mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to build a bond that matters?</h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-200 mb-8">
                Email us to choose your animal companion and begin your part-owning journey today.
            </p>
            <CtaButton href="/contact?subject=BecomeAPartOwner" className="bg-white text-brand-text-primary hover:bg-gray-200">
                Become a Part-Owner
            </CtaButton>
        </div>
      </section>

    </div>
  );
};

export default HandsOnDogsPage;