

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
    <section className="hero relative bg-red-600 text-white py-20 md:py-32 text-center overflow-hidden min-h-[70vh] flex items-center justify-center">
        <div className="absolute inset-0">
          {props.mediaContent['dogs_hero_banner'] && (
            <EditableMedia 
                mediaKey="dogs_hero_banner" 
                mediaUrl={props.mediaContent['dogs_hero_banner']!} 
                alt="Happy dogs in a field with a staff member"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
                isEditMode={props.isEditMode} 
                onUpdate={props.onMediaUpdate}
            />
          )}
        </div>
        <div style={{position: 'relative', maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem', zIndex: 10, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
          <div style={{textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', maxWidth: '80rem', margin: '0 auto'}}>
            <div style={{padding: '3rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
              <h1 className="text-white" style={{textAlign: 'center', margin: '0 auto', fontSize: '4rem', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '-0.025em', marginBottom: '2rem', textShadow: '3px 3px 6px rgba(0,0,0,0.8), 1px 1px 3px rgba(0,0,0,0.6)'}}>
                Our Dogs
              </h1>
              <p className="text-white" style={{textAlign: 'center', margin: '0 auto', fontSize: '1.25rem', lineHeight: '1.6', maxWidth: '56rem', textShadow: '2px 2px 4px rgba(0,0,0,0.8), 1px 1px 2px rgba(0,0,0,0.6)'}}>
                Rescue, Rebuild, Rehome – and sometimes, provide sanctuary for life.
              </p>
            </div>
          </div>
        </div>
    </section>
);

const Intro: React.FC<DogsLandingPageProps> = (props) => (
  <section id="intro" className="py-20 md:py-24 bg-gradient-to-br from-brand-bg-main to-brand-bg-subtle">
    <div className="container mx-auto px-6 max-w-6xl" style={{textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
        <div className="content-bubble bg-white/95 backdrop-blur-sm shadow-2xl rounded-3xl border border-gray-100" style={{textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            <EditableMedia
                mediaKey="dogs_intro"
                mediaUrl={props.mediaContent.dogs_intro!}
                alt="Hopeful dog looking at camera"
                isEditMode={props.isEditMode}
                onUpdate={props.onMediaUpdate}
                className="rounded-t-3xl aspect-video w-full object-cover"
            />
            <div className="p-10 md:p-12 text-center" style={{textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
              <PawIcon className="w-14 h-14 text-brand-secondary mx-auto mb-6 icon-interactive" style={{margin: '0 auto 1.5rem auto'}} />
              <h2 className="text-4xl md:text-5xl font-black text-brand-secondary text-center mb-8" style={{textAlign: 'center !important', margin: '0 auto 2rem auto', display: 'block', width: '100%'}}>Introduction to Our Dog Sanctuary</h2>
              <div className="text-xl text-brand-text-secondary space-y-6 leading-relaxed max-w-4xl" style={{textAlign: 'center !important', margin: '0 auto', display: 'block', width: '100%'}}>
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

const MeetTheTeamSection: React.FC<DogsLandingPageProps> = (props) => (
    <section id="team" className="py-20 md:py-24 bg-gradient-to-br from-brand-bg-subtle to-brand-bg-main">
        <div className="container mx-auto px-6 text-center" style={{textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            <div className="max-w-4xl mx-auto">
                <div className="content-bubble bg-white/95 backdrop-blur-sm shadow-2xl rounded-3xl border border-gray-100" style={{textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                    {props.mediaContent['dog_team_photo'] && (
                        <EditableMedia
                            mediaKey="dog_team_photo"
                            mediaUrl={props.mediaContent['dog_team_photo']}
                            alt="Dog team members"
                            isEditMode={props.isEditMode}
                            onUpdate={props.onMediaUpdate}
                            className="rounded-t-3xl w-full h-auto object-contain"
                            loading="eager"
                        />
                    )}
                    <div className="p-10 md:p-12" style={{textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                        <PawIcon className="w-16 h-16 text-brand-primary mx-auto mb-6 icon-interactive" style={{margin: '0 auto 1.5rem auto'}} />
                        <h2 className="text-4xl md:text-5xl font-black text-brand-text-primary mb-6" style={{textAlign: 'center !important', margin: '0 auto 1.5rem auto', display: 'block', width: '100%'}}>
                            Meet Our Dedicated Team
                        </h2>
                        <p className="text-xl text-brand-text-secondary my-8 leading-relaxed" style={{textAlign: 'center !important', margin: '2rem auto', display: 'block', width: '100%'}}>
                            Our work is only possible thanks to the passionate individuals who care for our animals every single day.
                        </p>
                        <CtaButton href="/team" className="bg-brand-primary hover:bg-brand-primary-hover text-white shadow-lg btn-pulse" style={{backgroundColor: '#39B54A', color: 'white', border: 'none', padding: '1rem 2rem', fontSize: '1.125rem'}}>
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
      
      {/* Enhanced CTA Section with better spacing */}
      <section className="py-12 bg-gradient-to-br from-brand-bg-main to-brand-bg-subtle">
        <div className="container mx-auto px-6 text-center" style={{textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            <div className="content-bubble bg-white/90 backdrop-blur-sm shadow-xl rounded-2xl border border-gray-100 inline-block max-w-4xl" style={{textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
              <div className="p-8" style={{textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                <h2 className="text-2xl md:text-3xl font-bold text-brand-text-primary mb-6" style={{textAlign: 'center', margin: '0 auto 1.5rem auto'}}>Get Involved Today</h2>
                <div className="flex flex-wrap justify-center gap-4" style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', textAlign: 'center', margin: '0 auto'}}>
                  <CtaButton href="/adopt-a-dog" className="btn-pulse shadow-lg" style={{backgroundColor: '#E30613', color: 'white', border: 'none', padding: '1rem 2rem'}}>🐕 Meet Our Dogs</CtaButton>
                  <CtaButton href="/dogs/sponsorship" className="btn-pulse shadow-lg" style={{backgroundColor: '#E30613', color: 'white', border: 'none', padding: '1rem 2rem'}}>💝 Sponsor a Dog</CtaButton>
                  <CtaButton href="/get-involved#hands-on-care" className="shadow-lg" style={{backgroundColor: '#39B54A', color: 'white', border: 'none', padding: '1rem 2rem'}}>🤝 Hands-On Care</CtaButton>
                  <CtaButton href="/adopt-a-dog" className="shadow-lg" style={{backgroundColor: '#E30613', color: 'white', border: 'none', padding: '1rem 2rem'}}>🏡 Adopt Today</CtaButton>
                </div>
              </div>
            </div>
        </div>
      </section>
      
      {/* Main content sections with tighter spacing */}
      <div className="space-y-8">
        <Intro {...props} />
        <TherapyDogsSection {...props} />
        <ServiceDogsSection {...props} />
        <OutreachProgramSection {...props} />
        <TrainingSection {...props} />
        <StoriesSection {...props} />
        <MeetTheTeamSection {...props} />
        
        {/* Full width sections for better readability */}
        <OutingsSection {...props} />
        <HealthSection {...props} />
        <WishlistSection {...props} />
      </div>
    </div>
  );
};

export default DogsLandingPage;