

import React from 'react';
import { MediaContent } from '../../types.ts';
import EditableMedia from '../EditableMedia.tsx';
import CtaButton from '../CtaButton.tsx';

import HealthSection from './HealthSection.tsx';
import StoriesSection from './StoriesSection.tsx';
import TrainingSection from './TrainingSection.tsx';
import OutingsSection from './OutingsSection.tsx';
import WishlistSection from './WishlistSection.tsx';
import ServiceDogsSection from './ServiceDogsSection.tsx';
import TherapyDogsSection from './TherapyDogsSection.tsx';
import OutreachProgramSection from './OutreachProgramSection.tsx';
import { PawIcon } from '../icons.tsx';

interface DogsLandingPageProps {
  mediaContent: MediaContent;
  isEditMode: boolean;
  onMediaUpdate: (key: string, url: string) => void;
}

const Hero: React.FC<DogsLandingPageProps> = (props) => (
    <section className="hero relative bg-brand-text-primary text-white py-20 md:py-32 text-center">
        <div className="absolute inset-0">
          {props.mediaContent['dogs_hero_banner'] && (
            <EditableMedia 
                mediaKey="dogs_hero_banner" 
                mediaUrl={props.mediaContent['dogs_hero_banner']!} 
                alt="Happy dogs in a field with a staff member"
                className="w-full h-full object-cover" 
                isEditMode={props.isEditMode} 
                onUpdate={props.onMediaUpdate}
            />
          )}
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative container mx-auto px-6">
          <div className="content-bubble content-bubble-inverted max-w-4xl mx-auto" style={{background: 'rgba(0,0,0,0.3)'}}>
            <div className="p-6 md:p-8">
              <h1 className="text-4xl md:text-6xl font-black uppercase text-brand-secondary text-shadow-strong">
                <span>Our Dogs</span>
              </h1>
              <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-shadow-custom">
                Rescue, Rebuild, Rehome – and sometimes, provide sanctuary for life.
              </p>
            </div>
          </div>
        </div>
    </section>
);

const Intro: React.FC<DogsLandingPageProps> = (props) => (
  <section id="intro" className="py-16 md:py-20 bg-brand-bg-main">
    <div className="container mx-auto px-6 max-w-4xl">
        <div className="content-bubble">
            <EditableMedia
                mediaKey="dogs_intro"
                mediaUrl={props.mediaContent.dogs_intro!}
                alt="Hopeful dog looking at camera"
                isEditMode={props.isEditMode}
                onUpdate={props.onMediaUpdate}
                className="rounded-t-lg aspect-video"
            />
            <div className="p-6 md:p-8">
              <PawIcon className="w-10 h-10 text-brand-secondary mx-auto mb-4 icon-interactive" />
              <h2 className="text-3xl md:text-4xl font-bold text-brand-secondary text-center mb-6">Introduction to Our Dog Sanctuary</h2>
              <div className="text-lg text-brand-text-secondary space-y-4">
                  <p>The Gem Project's Dog Sanctuary is an all-breed animal rescue based in Cape Town. Our work is driven by a clear and powerful mission: to protect dogs from neglect, abuse and exploitation. We provide the care, healing and love they need to recover and thrive.</p>
                  <p>We rescue dogs from a wide range of situations including abandonment, abuse, neglect and medical or behavioural challenges. Every dog that enters our sanctuary receives tailored support: rehabilitation, veterinary care, behavioural guidance and emotional healing. Some go on to find loving adoptive homes. Others, who may not be suitable for rehoming, live out their days with us in safety, surrounded by people who value and care for them deeply.</p>
                  <p>Our sanctuary provides a permanent home for dogs who cannot be rehomed due to age, trauma or health needs. Here, they are not just sheltered. They are part of a family.</p>
                  <p>Beyond direct rescue and care, we are committed to uplifting the communities around us. Through our outreach programme, we provide animal care education and basic training in under-resourced areas, while partnering with other organisations to deliver support and resources where they're needed most.</p>
                  <p>We are currently in the implementation phase of our Recycling-for-Care Token Programme – a community initiative that will allow individuals to exchange recyclable materials for essential animal supplies such as food, health products and pet accessories. This initiative not only supports pet owners but also promotes environmental responsibility and fosters pride, dignity and empowerment in underserved communities.</p>
                  <p>Some of our dogs also take part in specialised training to support therapy work, emotional support services and other community-based assistance roles. At every stage, we remain focused on ensuring the wellbeing of our animals and deepening the connection between people and the dogs who change their lives.</p>
              </div>
            </div>
        </div>
    </div>
  </section>
);

const MeetTheTeamSection: React.FC = () => (
    <section id="team" className="py-16 md:py-20 bg-brand-bg-main">
        <div className="container mx-auto px-6 text-center">
            <div className="max-w-2xl mx-auto">
                <div className="content-bubble">
                    <div className="p-6 md:p-8">
                        <PawIcon className="w-12 h-12 text-brand-primary mx-auto mb-4 icon-interactive" />
                        <h2 className="text-3xl md:text-4xl font-bold text-brand-text-primary">
                            Meet Our Dedicated Team
                        </h2>
                        <p className="text-lg text-gray-700 my-6">
                            Our work is only possible thanks to the passionate individuals who care for our animals every single day.
                        </p>
                        <CtaButton href="/team" className="bg-brand-primary hover:bg-brand-primary-hover text-white">
                            Meet the Team
                        </CtaButton>
                    </div>
                </div>
            </div>
        </div>
    </section>
);


const DogsLandingPage: React.FC<DogsLandingPageProps> = (props) => {
  return (
    <div className="bg-brand-bg-main">
      <Hero {...props} />
      <div className="bg-brand-bg-main">
        <div className="container mx-auto px-6 py-12 text-center">
            <div className="content-bubble inline-block">
              <div className="p-4 flex flex-wrap justify-center gap-4">
                  <CtaButton href="/adopt-a-dog" className="bg-brand-secondary text-white hover:bg-brand-secondary-hover btn-pulse">Meet Our Dogs</CtaButton>
                  <CtaButton href="/dogs/sponsorship" className="bg-brand-secondary text-white hover:bg-brand-secondary-hover btn-pulse">Sponsor a Dog</CtaButton>
                  <CtaButton href="/hands-on-dogs" className="bg-brand-secondary text-white hover:bg-brand-secondary-hover">Hands-On Care</CtaButton>
                  <CtaButton href="/adopt-a-dog" className="bg-transparent border-2 border-brand-secondary text-brand-secondary hover:bg-brand-secondary hover:text-white">Adopt Today</CtaButton>
              </div>
            </div>
        </div>
      </div>
      
      <Intro {...props} />
      <TherapyDogsSection {...props} />
      <ServiceDogsSection {...props} />
      <OutreachProgramSection {...props} />
      <TrainingSection {...props} />
      <StoriesSection {...props} />
      <MeetTheTeamSection />
      <OutingsSection {...props} />
      <HealthSection {...props} />
      <WishlistSection {...props} />

    </div>
  );
};

export default DogsLandingPage;