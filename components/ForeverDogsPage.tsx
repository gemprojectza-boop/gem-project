
import React, { useEffect } from 'react';
import { MediaContent } from '../types.ts';
import EditableMedia from './EditableMedia.tsx';
import CtaButton from './CtaButton.tsx';
import { PageHero, ContentSection } from './PageComponents.tsx';
import { PawIcon } from './icons.tsx';
import { sampleDogs } from '../data/dogs.ts';
import DogProfileCard from './dogs/DogProfileCard.tsx';

interface ForeverDogsPageProps {
  mediaContent: MediaContent;
  isEditMode: boolean;
  onMediaUpdate: (key: string, url: string) => void;
}

const ForeverDogsPage: React.FC<ForeverDogsPageProps> = (props) => {
  const foreverDogs = sampleDogs.filter(dog => dog.status === 'Forever Sanctuary');

  useEffect(() => {
    // Force white text on footer headings
    const forceWhiteText = () => {
      const elements = document.querySelectorAll('h2');
      elements.forEach((el) => {
        if (el.textContent && (
          el.textContent.includes('Support a Lifelong') ||
          el.textContent.includes('Forever Residents') ||
          el.textContent.includes('Lifelong Resident') ||
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
        title="Forever Sanctuary Dogs"
        subtitle="They are not waiting to be chosen. They already have been."
        mediaKey="about_hero"
        alt="Sanctuary landscape"
        titleColorClass="text-brand-secondary"
        {...props}
      />

      <ContentSection>
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
                <p className="text-center">Some dogs arrive at our gates carrying silent stories. Wounds we can see and many more that we cannot. They have known hunger, fear and abandonment. But the moment they step through our gates, everything changes. This is not a stop along the way. This is home.</p>
                <p className="font-bold text-brand-secondary mt-4">A forever sanctuary dog is one who will remain with us for life. Whether because of past trauma, complex behaviour, chronic illness or advanced age, these dogs are not up for adoption. They are not waiting for someone to choose them. They have already been chosen by us. By The Gem Project Sanctuary.</p>
            </div>
            <div className="rounded-lg overflow-hidden">
                <EditableMedia
                    mediaKey="forever_animals_01"
                    mediaUrl={props.mediaContent.forever_animals_01!}
                    alt="A senior dog resting peacefully"
                    isEditMode={props.isEditMode}
                    onUpdate={props.onMediaUpdate}
                />
            </div>
        </div>
      </ContentSection>
      
      <section id="forever-dogs-list" className="py-16 md:py-20 bg-brand-bg-main">
        <div className="container mx-auto px-6 max-w-7xl">
            <div className="content-bubble text-center max-w-4xl mx-auto">
                <PawIcon className="w-10 h-10 text-brand-secondary mx-auto mb-4" />
                <h2 className="text-3xl md:text-4xl font-bold text-brand-secondary">Meet Our Forever Residents</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 my-12 stagger-children">
              {foreverDogs.map(dog => (
                <DogProfileCard key={dog.id} dog={dog} {...props} />
              ))}
            </div>
            {foreverDogs.length === 0 && (
                <div className="content-bubble text-center max-w-4xl mx-auto mt-12">
                  <div className="p-6">
                    <p className="text-lg text-gray-700">We will be featuring our beloved forever sanctuary residents here soon. Please check back!</p>
                  </div>
                </div>
            )}
        </div>
      </section>

      <ContentSection title="A Day in the Life of a Forever Dog" className="bg-brand-bg-subtle" titleColorClass="text-brand-secondary">
        <p className="text-center">Forever sanctuary dogs live at the heart of our sanctuary. They are not kept in kennels or isolated. They live in shared homes alongside other animals and the people who care for them. Some sleep beside the staff in the office, others relax in sunny courtyards or nestle beneath desks while we work. Their lives are woven into the rhythm of the sanctuary.</p>
        <div className="py-8 rounded-lg overflow-hidden">
            <EditableMedia
                mediaKey="forever_dogs_day_in_life"
                mediaUrl={props.mediaContent.forever_dogs_day_in_life!}
                alt="Dog sleeping near a person working on a laptop"
                isEditMode={props.isEditMode}
                onUpdate={props.onMediaUpdate}
            />
        </div>
        <p className="text-center">Their mornings begin slowly with unhurried walks, gentle brushing and a warm breakfast. They sniff the air, explore favourite paths or curl up in their favourite spots. Many enjoy resting in the presence of those they trust, never far from a kind hand or soothing voice.</p>
        <p className="text-center">Throughout the day they may engage in enrichment activities, play with chosen friends or simply watch the world go by. Every interaction is built on choice. We never force participation. These dogs set the pace. We follow with love and patience.</p>
        <p className="text-center">At night they are tucked into warm beds with blankets, toys and sometimes their best friends. There is no barking, no stress, no loneliness. Only safety, comfort and peace.</p>
      </ContentSection>

      <ContentSection title="A Promise for Life" titleColorClass="text-brand-secondary">
          <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="md:order-2">
                   <h3 className="text-2xl font-bold text-brand-secondary mb-4">Why Some Dogs Stay Forever</h3>
                   <p className="text-center">Not every dog can or should be rehomed. Some have complex needs that make it difficult to place them safely in a traditional home. Others have lived for so long in institutional settings or trauma responses that change would do more harm than good.</p>
                   <p className="mt-4">At The Gem Project Sanctuary we honour those realities. We do not force healing into timelines or expect every animal to move on. Some just need a place to be. To feel love without pressure. To exist without expectation. That is what forever sanctuary means to us.</p>
              </div>
              <div className="rounded-lg overflow-hidden md:order-1">
                  <EditableMedia
                      mediaKey="sponsorship_01"
                      mediaUrl={props.mediaContent.sponsorship_01!}
                      alt="A caregiver with a forever sanctuary dog"
                      isEditMode={props.isEditMode}
                      onUpdate={props.onMediaUpdate}
                  />
              </div>
          </div>
          <div className="mt-8">
              <h3 className="text-2xl font-bold text-brand-secondary mb-4">What Makes Them Special</h3>
              <p className="text-center">Our forever dogs are our teachers. They show us what patience looks like. What quiet trust sounds like. They ask us to slow down, to pay attention, to sit still long enough to be worthy of their love. They are resilient, wise and deeply attuned to those who care for them. Each one is a gem in every sense of the word.</p>
              <p className="font-bold text-brand-secondary text-xl mt-4">They are not just residents. They are our elders. Our companions. Our reminders of what matters most. Every single one is seen, known and adored for exactly who they are.</p>
          </div>
      </ContentSection>
      
      <section className="py-20 bg-brand-primary">
        <div className="container mx-auto px-6 text-center text-white">
            <PawIcon className="w-10 h-10 text-white mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-secondary">Support a Lifelong Resident</h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-200 mb-8">
                Your sponsorship provides continuous care for our forever dogs, giving them the safety and comfort they deserve for the rest of their lives.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
                <CtaButton href="/dogs/sponsorship" className="bg-brand-secondary hover:bg-brand-secondary-hover text-white">Sponsor a Dog</CtaButton>
                <CtaButton href="#forever-dogs-list" className="border border-white text-white hover:bg-brand-secondary hover:border-brand-secondary">Meet Our Forever Dogs</CtaButton>
                <CtaButton href="/donate" className="border border-white text-white hover:bg-brand-primary hover:border-brand-primary">Donate Monthly</CtaButton>
            </div>
        </div>
      </section>
    </div>
  );
};

export default ForeverDogsPage;
