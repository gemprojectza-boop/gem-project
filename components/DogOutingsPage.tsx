
import React, { useEffect } from 'react';
import { MediaContent } from '../types.ts';
import CtaButton from './CtaButton.tsx';
import { PageHero, ContentSection } from './PageComponents.tsx';
import EditableMedia from './EditableMedia.tsx';
import { PawIcon } from './icons.tsx';

interface DogOutingsPageProps {
  mediaContent: MediaContent;
  isEditMode: boolean;
  onMediaUpdate: (key: string, url: string) => void;
}

const DogOutingsPage: React.FC<DogOutingsPageProps> = (props) => {
  useEffect(() => {
    // Force white text on footer headings
    const forceWhiteText = () => {
      const elements = document.querySelectorAll('h2');
      elements.forEach((el) => {
        if (el.textContent && (
          el.textContent.includes('Help Fund') ||
          el.textContent.includes('Adventure') ||
          el.textContent.includes('Ready to change a life?') || 
          el.textContent.includes('Ready to make a difference?') ||
          el.textContent.includes('Ready to transform lives?') ||
          el.textContent.includes('Ready for an adventure?') ||
          el.textContent.includes('Ready to help?')
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
        title="Dog Outings"
        subtitle="Where healing meets freedom."
        mediaKey="outings_hero"
        alt="A happy dog running on a beach"
        titleColorClass="text-brand-secondary"
        {...props}
      />

      <ContentSection>
        <p className="text-center">At The Gem Project Sanctuary, healing doesn't just happen within our gates. It unfolds on beaches, in parks, and along quiet trails. With every pawprint in the sand and every tail wag in the wind, our dogs rediscover what it means to feel alive.</p>
        <p className="text-center">These outings are more than a break from routine. They are moments of pure joy, growth, and connection. For dogs who have survived trauma, neglect, or confinement, stepping into the world again—safely and gently—is a powerful part of their recovery journey.</p>
      </ContentSection>

      <ContentSection title="What Our Outings Look Like" className="bg-brand-bg-subtle" titleColorClass="text-brand-secondary">
        <div className="content-bubble">
           <EditableMedia 
            mediaKey="outings_hero" 
            mediaUrl="https://i.ibb.co/5g6Ss0Ps/DSC09944.jpg" 
            alt="Happy dogs on an outing" 
            isEditMode={props.isEditMode} 
            onUpdate={props.onMediaUpdate} 
            className="rounded-t-lg aspect-video" 
          />
           <div className="p-6 md:p-8">
            <p className="text-center">Once a week, our team carefully selects small groups of dogs to enjoy tailored excursions to local beaches, parks and wide-open spaces. Outings are planned with each dog's temperament, behaviour and energy level in mind.</p>
            <p className="text-center">Some outings are peaceful walks for shy or senior dogs who need quiet confidence-building. Others are joyful adventures for playful souls who thrive on running and exploring. Every dog gets the chance to experience freedom and fun on their own terms.</p>
            <p className="text-center">Outings are led by experienced caregivers who understand trauma, read canine body language, and are deeply bonded with each dog. Safety is our top priority. We transport dogs in secure vehicles. On site, they are walked using fitted harnesses and long leads to ensure control and comfort.</p>
           </div>
        </div>
      </ContentSection>

      <ContentSection title="Why It Matters" titleColorClass="text-brand-secondary">
        <div className="grid md:grid-cols-2 gap-8 text-base">
            <div className="bg-brand-surface p-6 rounded-lg border">
                <PawIcon className="w-8 h-8 text-brand-secondary mb-2" />
                <h3 className="font-bold text-xl mb-2 text-brand-secondary">Social Growth</h3>
                <p className="text-center">Dogs practice walking on a lead, develop confidence in new environments, and learn how to share space calmly with people and other dogs.</p>
            </div>
             <div className="bg-brand-surface p-6 rounded-lg border">
                <PawIcon className="w-8 h-8 text-brand-secondary mb-2" />
                <h3 className="font-bold text-xl mb-2 text-brand-secondary">Mental Stimulation</h3>
                <p className="text-center">Every scent, texture, and sound is a spark for curiosity. From sniffing seaweed to watching birds, outings stimulate the brain in healthy, non-overwhelming ways.</p>
            </div>
             <div className="bg-brand-surface p-6 rounded-lg border">
                <PawIcon className="w-8 h-8 text-brand-secondary mb-2" />
                <h3 className="font-bold text-xl mb-2 text-brand-secondary">Emotional Healing</h3>
                <p className="text-center">Outings create trust-building moments. Nervous dogs realise that the world is not a scary place. Shared joy deepens the bond between dogs and caregivers.</p>
            </div>
             <div className="bg-brand-surface p-6 rounded-lg border">
                <PawIcon className="w-8 h-8 text-brand-secondary mb-2" />
                <h3 className="font-bold text-xl mb-2 text-brand-secondary">Physical Health</h3>
                <p className="text-center">Walks, runs, and swimming help improve muscle tone, joint mobility, and overall health. It also allows dogs to release built-up energy and anxiety.</p>
            </div>
        </div>
      </ContentSection>

      <ContentSection title="Our Favourite Spots" className="bg-brand-bg-subtle text-center" titleColorClass="text-brand-secondary">
        <p className="text-center">We choose our locations carefully to ensure a positive and safe experience for every dog.</p>
        <ul className="list-disc list-inside space-y-2 mt-4 text-center">
            <li><strong>Melkbosstrand Beach:</strong> perfect for early morning walks and gentle waves</li>
            <li><strong>Philadelphia greenbelt trails:</strong> safe, quiet and calming for sensitive dogs</li>
            <li><strong>Durbanville parks:</strong> grassy and spacious, ideal for active dogs</li>
            <li><strong>Private farms (with permission):</strong> calm, low-stimulation environments for dogs in early rehabilitation</li>
        </ul>
      </ContentSection>

       <ContentSection title="Behind Every Adventure" titleColorClass="text-brand-secondary">
        <p className="text-center">These experiences don't just happen. They take planning, resources and heart. To make each outing safe and enriching we need:</p>
        <ul className="list-disc list-inside space-y-2 mt-4">
            <li>A reliable, roadworthy vehicle</li>
            <li>Fuel and maintenance for transport</li>
            <li>Crates, harnesses, and safety leads</li>
            <li>Water bowls, treats, and towels</li>
            <li>Dedicated, trained caregivers with time, patience, and love</li>
        </ul>
      </ContentSection>

       <section className="py-20 bg-brand-primary">
        <div className="container mx-auto px-6 text-center text-white">
            <PawIcon className="w-10 h-10 text-white mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-brand-secondary">Help Fund an Adventure</h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-200 mb-8">
                Your donation helps cover the costs of fuel, gear, and supplies, making these joyful and therapeutic outings possible for our dogs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
                <CtaButton href="/dogs/sponsorship" className="bg-brand-secondary text-white hover:bg-brand-secondary-hover">Sponsor a Dog Outing</CtaButton>
                <CtaButton href="/dogs/sponsorship" className="border border-white text-white hover:bg-brand-secondary hover:border-brand-secondary">Donate Toward Transport Costs</CtaButton>
            </div>
        </div>
      </section>

    </div>
  );
};

export default DogOutingsPage;
