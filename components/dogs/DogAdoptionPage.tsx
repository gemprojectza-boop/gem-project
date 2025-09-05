
import React, { useEffect } from 'react';
import { MediaContent } from '../../types.ts';
import CtaButton from '../CtaButton.tsx';
import { PageHero, ContentSection } from '../PageComponents.tsx';
import { PawIcon } from '../icons.tsx';
import { sampleDogs } from '../../data/dogs.ts';
import DogProfileCard from './DogProfileCard.tsx';
import EditableMedia from '../EditableMedia.tsx';

interface DogAdoptionPageProps {
  mediaContent: MediaContent;
  isEditMode: boolean;
  onMediaUpdate: (key: string, url: string) => void;
}

const DogAdoptionPage: React.FC<DogAdoptionPageProps> = (props) => {
  const adoptableDogs = sampleDogs.filter(dog => dog.status === 'Available');
  
  useEffect(() => {
    // Extremely aggressive white text forcing
    const forceWhiteText = () => {
      // Try multiple selectors
      const selectors = [
        'h2',
        '.bg-brand-primary h2',
        'section h2',
        '[class*="bg-brand-primary"] h2',
        '.py-20 h2'
      ];
      
      selectors.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach((el) => {
          if (el.textContent && el.textContent.includes('Ready to change a life?')) {
            // Change the text to confirm JS is working
            el.textContent = 'JAVASCRIPT IS WORKING - WHITE TEXT';
            
            // Remove all possible red classes
            el.className = 'text-white text-3xl md:text-4xl font-bold mb-8';
            
            // Force styles in every possible way
            el.style.cssText = 'color: #ffffff !important; background-color: green !important; -webkit-text-fill-color: #ffffff !important; text-shadow: none !important; font-weight: bold !important;';
            el.setAttribute('style', 'color: #ffffff !important; background-color: green !important; -webkit-text-fill-color: #ffffff !important; text-shadow: none !important; font-weight: bold !important;');
            
            // Direct style property override
            Object.assign(el.style, {
              color: '#ffffff !important',
              backgroundColor: 'green !important',
              webkitTextFillColor: '#ffffff !important',
              textShadow: 'none !important'
            });
            
            console.log('Found and modified element:', el);
          }
        });
      });
    };
    
    // Run multiple times with different delays
    forceWhiteText();
    setTimeout(forceWhiteText, 50);
    setTimeout(forceWhiteText, 200);
    setTimeout(forceWhiteText, 500);
    const timer = setInterval(forceWhiteText, 100);
    
    // Also run on any DOM changes
    const observer = new MutationObserver(forceWhiteText);
    observer.observe(document.body, { childList: true, subtree: true, attributes: true });
    
    // Cleanup
    return () => {
      clearInterval(timer);
      observer.disconnect();
    };
  }, []);
  
  return (
    <div className="bg-brand-bg-main dog-page-override">
      <PageHero
        title="Every Dog Deserves a Home"
        subtitle="Adoption is one of the most powerful ways to transform a life."
        mediaKey="adoption_hero"
        alt="A cute, adoptable dog"
        {...props}
      />

      <section id="adoptable-dogs" className="py-16 md:py-20 bg-brand-bg-main">
        <center><div className="container mx-auto px-6 max-w-7xl" style={{ textAlign: 'center !important', margin: '0 auto !important', display: 'flex !important', flexDirection: 'column !important', alignItems: 'center !important', justifyContent: 'center !important' }}>
            <center><div className="content-bubble text-center max-w-4xl mx-auto" style={{ textAlign: 'center !important', margin: '0 auto !important', display: 'flex !important', flexDirection: 'column !important', alignItems: 'center !important', justifyContent: 'center !important' }}>
                <center><PawIcon className="w-10 h-10 text-brand-primary mx-auto mb-4" /></center>
                <center><h2 className="text-3xl md:text-4xl font-bold text-brand-primary" style={{ textAlign: 'center !important', margin: '0 auto !important' }}>Meet Our Adoptable Dogs</h2></center>
                <center><p className="mt-2 text-lg text-gray-600" style={{ textAlign: 'center !important', margin: '0 auto !important', display: 'block !important' }}>Find your new best friend.</p></center>
            </div></center>
        </div></center>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 my-12 stagger-children">
              {adoptableDogs.map(dog => (
                <DogProfileCard key={dog.id} dog={dog} {...props} />
              ))}
            </div>
            {adoptableDogs.length === 0 && (
                <div className="content-bubble text-center max-w-4xl mx-auto mt-12">
                  <div className="p-6">
                    <p className="text-lg text-gray-700">We don't have any dogs available for adoption at this moment. Please check back soon!</p>
                  </div>
                </div>
            )}
        </div>
      </section>

      <ContentSection title="Your New Best Friend is Waiting">
        <p className="text-center">At The Gem Project Sanctuary we believe that adoption is one of the most powerful ways to transform a life. While some animals stay with us for life, many of our dogs are looking for loving homes where they can continue their journey of healing.</p>
        <div className="my-6 rounded-lg overflow-hidden">
          <EditableMedia
            mediaKey="about_dog_walk"
            mediaUrl={props.mediaContent.about_dog_walk!}
            alt="A happy dog on a walk"
            isEditMode={props.isEditMode}
            onUpdate={props.onMediaUpdate}
          />
        </div>
        <p className="text-center">All dogs available for adoption have received comprehensive veterinary care and behavioural support. They are vaccinated, sterilised and assessed by our team to ensure they are emotionally and physically ready for a new start. Each dog goes through daily enrichment, structured training and one-on-one socialisation to prepare them for life in a home environment.</p>
      </ContentSection>

      <ContentSection title="Our Adoption Process" className="bg-brand-bg-subtle">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-center">Our adoption process is designed to ensure that each dog is placed in a home where they will thrive. We are committed to full transparency and ongoing support.</p>
            <ol className="list-decimal list-inside space-y-4 text-lg mt-4">
                <li><strong>Submit an Application:</strong> Let us know about your lifestyle, experience and what you are looking for.</li>
                <li><strong>Chat with Our Team:</strong> We'll get in touch to recommend dogs that may be a good fit for you.</li>
                <li><strong>Meet Your Match:</strong> Visit the sanctuary to spend quality time with the dog you're interested in.</li>
                <li><strong>Home Check and Support:</strong> We conduct a home check to ensure the environment is safe and suitable for a new arrival.</li>
                <li><strong>Welcoming Home:</strong> We provide guidance on transitioning your new family member and helping them adjust.</li>
            </ol>
            <p className="mt-6 text-base italic">Note: Not all dogs are suited for adoption. Some may be available only for sponsorship or Hands-On Care. We always prioritize the animal's wellbeing.</p>
          </div>
          <div className="rounded-lg overflow-hidden">
            <EditableMedia
              mediaKey="stories_honey"
              mediaUrl={props.mediaContent.stories_honey!}
              alt="A happy adopted dog"
              isEditMode={props.isEditMode}
              onUpdate={props.onMediaUpdate}
            />
          </div>
        </div>
      </ContentSection>

       <ContentSection title="Why Adopt from Us?">
        <p className="text-center">We do things differently. Our dogs live in family-style units, not in kennels. They receive daily enrichment, personalised training and consistent care. We get to know them deeply—their quirks, their joys and their ideal home environment.</p>
        <p className="text-center">By adopting from us, you are not just saving a life. You are joining a journey of love and transformation.</p>
        <div className="mt-8">
            <h3 className="text-2xl font-bold text-brand-primary mb-4">Benefits of Adopting from The Gem Project Sanctuary:</h3>
            <ul className="list-disc list-inside space-y-2">
                <li>Every dog receives comprehensive veterinary checks, vaccinations, and sterilisation.</li>
                <li>Behavioural and training support is provided before and after adoption.</li>
                <li>We offer ongoing guidance to help the transition go smoothly.</li>
                <li>You can meet and get to know the dog before making a decision.</li>
                <li>You receive an animal who is emotionally and physically prepared for family life.</li>
            </ul>
        </div>
        <p className="mt-6 text-base italic">Please note: While we remain available to offer guidance and advice after adoption, any ongoing behavioural or training services required would need to be arranged and funded independently.</p>
      </ContentSection>

      <center><section className="py-8 bg-brand-primary" style={{ textAlign: 'center !important', display: 'flex !important', flexDirection: 'column !important', alignItems: 'center !important', justifyContent: 'center !important' }}>
        <center><div className="container mx-auto px-6 text-center text-white" style={{ textAlign: 'center !important', margin: '0 auto !important', display: 'flex !important', flexDirection: 'column !important', alignItems: 'center !important', justifyContent: 'center !important' }}>
          <center><PawIcon className="w-10 h-10 text-white mx-auto mb-4" /></center>
          <center><h2 
            className="text-3xl md:text-4xl font-bold mb-8" 
            style={{ 
              color: '#ffffff !important', 
              textAlign: 'center !important', 
              margin: '0 auto !important', 
              display: 'block !important', 
              fontWeight: 'bold !important',
              WebkitTextFillColor: '#ffffff !important',
              MozTextFillColor: '#ffffff !important'
            }}
            ref={(el) => {
              if (el) {
                el.style.setProperty('color', '#ffffff', 'important');
                el.style.setProperty('-webkit-text-fill-color', '#ffffff', 'important');
              }
            }}
          >Ready to change a life?</h2></center>
          <div className="flex flex-wrap justify-center gap-4">
            <CtaButton href="/contact?subject=AdoptionApplication" className="bg-brand-secondary hover:bg-brand-secondary-hover text-white btn-pulse">Start the Adoption Process</CtaButton>
            <CtaButton href="/faq" className="border border-white text-white hover:bg-brand-primary hover:border-brand-primary">Adoption FAQs</CtaButton>
            <CtaButton href="/contact" className="border border-white text-white hover:bg-brand-primary hover:border-brand-primary">Contact Us</CtaButton>
          </div>
        </div>
      </section>

    </div>
  );
};

export default DogAdoptionPage;