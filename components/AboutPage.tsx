


import React from 'react';
import { MediaContent } from '../types.ts';
import EditableMedia from './EditableMedia.tsx';
import CtaButton from './CtaButton.tsx';
import { PawIcon } from './icons.tsx';

interface AboutPageProps {
  mediaContent: MediaContent;
  isEditMode: boolean;
  onMediaUpdate: (key: string, url: string) => void;
}

const AboutPage: React.FC<AboutPageProps> = ({ mediaContent, isEditMode, onMediaUpdate }) => {
  return (
    <div className="bg-brand-bg-main">
      {/* Hero Section */}
      <section className="relative bg-brand-text-primary text-white py-20 md:py-32 text-center">
        <div className="absolute inset-0">
          {mediaContent.about_hero && <EditableMedia mediaKey="about_hero" mediaUrl={mediaContent.about_hero} alt="Sanctuary landscape" className="w-full h-full object-cover" isEditMode={isEditMode} onUpdate={onMediaUpdate}/>}
        </div>
        <div className="relative container mx-auto px-6" style={{textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
          <div className="content-bubble content-bubble-inverted max-w-4xl mx-auto animate-fade-in-up" style={{background: 'rgba(0,0,0,0.3)', animationDelay: '0.3s', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            <h1 className="text-4xl md:text-6xl font-black uppercase text-brand-primary text-shadow-strong" style={{textAlign: 'center', margin: '0 auto'}}>
              <span>About The Sanctuary</span>
            </h1>
            <p className="mt-4 text-lg md:text-xl text-shadow-custom" style={{textAlign: 'center', margin: '0 auto'}}>
              A promise to animals. A commitment to healing. A home for life and hope for adoption.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 md:py-24 bg-brand-bg-subtle">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center stagger-children">
          <div className="content-bubble animate-on-scroll">
            <div className="p-6 md:p-8">
              <PawIcon className="w-10 h-10 text-brand-primary mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-brand-primary">Who We Are</h2>
              <div className="text-lg text-brand-text-secondary space-y-4">
                <p>The Gem Project Sanctuary is a nonprofit organisation just outside Cape Town that offers refuge to dogs and horses in need. We provide adoption, lifelong sanctuary, rehabilitation and community support all in one place.</p>
                <p>Our name reflects our mission. We find the overlooked gems among animals and people. Whether it’s a frightened dog, a withdrawn horse or a young person searching for direction, we believe every life holds value. Like diamonds in the rough we help them shine.</p>
                <p>We are proudly one of the few true animal sanctuaries in the Western Cape. Our work honours two equally important paths: Adoption and Sanctuary.</p>
              </div>
            </div>
          </div>
          <div className="content-bubble animate-on-scroll">
            {mediaContent.about_welcome_gate && <EditableMedia mediaKey="about_welcome_gate" mediaUrl={mediaContent.about_welcome_gate} alt="Animal being welcomed to the sanctuary" isEditMode={isEditMode} onUpdate={onMediaUpdate} className="rounded-t-lg" />}
          </div>
        </div>
      </section>

      {/* Community Programmes */}
      <section className="py-20 md:py-24 bg-brand-bg-main">
        <div className="container mx-auto px-6" style={{textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
          <div className="max-w-3xl mx-auto content-bubble text-center animate-on-scroll" style={{textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            <div className="p-6 md:p-8" style={{textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
              <PawIcon className="w-10 h-10 text-brand-primary mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-brand-primary" style={{textAlign: 'center', margin: '0 auto'}}>Community Programmes</h2>
              <p className="text-lg text-brand-text-secondary" style={{textAlign: 'center', margin: '0 auto'}}>Our care extends beyond the animals. We invest in people too.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8 stagger-children">
            <div className="content-bubble animate-on-scroll">
              <div className="p-4 md:p-6">
                <div className="flex items-start">
                  <PawIcon className="w-6 h-6 text-brand-primary mr-2 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold mb-2">Mobile Vet Clinic</h3>
                    <p className="text-brand-text-secondary text-sm">Brings essential care to communities with limited veterinary access.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-bubble animate-on-scroll">
               <div className="p-4 md:p-6">
                <div className="flex items-start">
                  <PawIcon className="w-6 h-6 text-brand-primary mr-2 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold mb-2">Youth Apprenticeship Programme</h3>
                    <p className="text-brand-text-secondary text-sm">A mentorship opportunity for youth to gain life skills, empathy and real-world experience.</p>
                  </div>
                </div>
               </div>
            </div>
            <div className="content-bubble animate-on-scroll">
               <div className="p-4 md:p-6">
                <div className="flex items-start">
                    <PawIcon className="w-6 h-6 text-brand-primary mr-2 flex-shrink-0 mt-1" />
                    <div>
                        <h3 className="text-lg font-bold mb-2">Hands-On Caregiver Programme</h3>
                        <p className="text-brand-text-secondary text-sm">Connects people directly with animals in our care for walking, bonding, and support.</p>
                    </div>
                </div>
               </div>
            </div>
          </div>
          <div className="mt-12 content-bubble animate-on-scroll">
            {mediaContent.about_mobile_vet && <EditableMedia mediaKey="about_mobile_vet" mediaUrl={mediaContent.about_mobile_vet} alt="Youth helping with animal care" isEditMode={isEditMode} onUpdate={onMediaUpdate} className="rounded-t-lg" />}
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 md:py-24 bg-brand-bg-subtle">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center stagger-children">
          <div className="md:order-2 content-bubble animate-on-scroll">
            <div className="p-6 md:p-8">
              <PawIcon className="w-10 h-10 text-brand-primary mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-brand-primary">What Makes Us Different</h2>
              <div className="text-lg text-brand-text-secondary space-y-4">
                <p>Trust. Time. A home-like environment where no one is forgotten. The Gem Project Sanctuary is designed to offer something most animals have never known: the time and space to truly heal.</p>
                <p>Dogs sleep indoors on warm beds. Horses roam in bonded herds. Every animal receives a care plan tailored to their medical, emotional and behavioural needs. Our sanctuary is a community of animals and people, built on compassion, respect and second chances.</p>
              </div>
            </div>
          </div>
          <div className="md:order-1 content-bubble animate-on-scroll">
            {mediaContent.about_sleeping_dogs && <EditableMedia mediaKey="about_sleeping_dogs" mediaUrl={mediaContent.about_sleeping_dogs} alt="Peaceful sleeping dog" isEditMode={isEditMode} onUpdate={onMediaUpdate} className="rounded-t-lg" />}
          </div>
        </div>
      </section>
      
      {/* Life at the Sanctuary */}
      <section className="py-20 md:py-24 bg-brand-bg-main">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center stagger-children">
          <div className="content-bubble animate-on-scroll">
            <div className="p-6 md:p-8">
              <PawIcon className="w-10 h-10 text-brand-primary mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-brand-primary">Life at the Sanctuary</h2>
              <div className="text-lg text-brand-text-secondary space-y-4">
                <p>Each day is filled with purpose, routine and love. Our animals wake up in peace surrounded by people who know them. This is not just care. It is what home was always meant to be. A home-like environment where healing can truly begin.</p>
                 <ul className="list-disc list-inside space-y-2 mt-4">
                  <li>Soft bedding and warm sleeping areas</li>
                  <li>Specialised meals and consistent vet care</li>
                  <li>Enrichment activities like walks and puzzles</li>
                  <li>Time, love and emotional safety</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="content-bubble animate-on-scroll">
            {mediaContent.about_dog_walk && <EditableMedia mediaKey="about_dog_walk" mediaUrl={mediaContent.about_dog_walk} alt="Group dog walk on the beach" isEditMode={isEditMode} onUpdate={onMediaUpdate} className="rounded-t-lg" />}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-20 md:py-24 bg-brand-bg-subtle">
        <div className="container mx-auto px-6" style={{textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%'}}>
          <div className="max-w-3xl mx-auto content-bubble text-center" style={{textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%', margin: '0 auto'}}>
            <div className="p-6 md:p-8" style={{textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%'}}>
              <PawIcon className="w-10 h-10 text-brand-primary mx-auto mb-4" style={{margin: '0 auto'}} />
              <h2 className="text-3xl md:text-4xl font-bold text-brand-primary" style={{textAlign: 'center !important', margin: '0 auto', display: 'block', width: '100%', textAlignLast: 'center'}}>Our Facilities</h2>
              <p className="text-lg text-brand-text-secondary" style={{textAlign: 'center !important', margin: '0 auto', display: 'block', width: '100%', textAlignLast: 'center'}}>Built for healing. Designed with heart. Every corner of our sanctuary reflects our belief that healing starts with feeling safe, seen and loved.</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-stretch mt-8">
            <div className="content-bubble">
                <div className="p-6 md:p-8">
                 <PawIcon className="w-8 h-8 text-brand-primary mb-2" />
                 <h3 className="text-2xl font-bold mb-4">Dog Sanctuary Features</h3>
                 <ul className="list-disc list-inside space-y-2 text-brand-text-secondary">
                    <li>Indoor sleeping rooms with home-style comfort</li>
                    <li>Outdoor fields for play and exploration</li>
                    <li>Medical, quarantine and grooming stations</li>
                    <li>Enrichment zones and interaction areas</li>
                    <li>Onsite overnight staff presence</li>
                 </ul>
                </div>
            </div>
            <div className="content-bubble">
                 <div className="p-6 md:p-8">
                 <PawIcon className="w-8 h-8 text-brand-primary mb-2" />
                 <h3 className="text-2xl font-bold mb-4">Horse Sanctuary Features</h3>
                 <ul className="list-disc list-inside space-y-2 text-brand-text-secondary">
                    <li>Large shaded paddocks and rest areas</li>
                    <li>Gentle training yards and grooming stations</li>
                    <li>Covered stables and soft ground shelters</li>
                    <li>Space to roam, bond and recover</li>
                 </ul>
                </div>
            </div>
          </div>
           <div className="mt-12 content-bubble">
            {mediaContent.about_drone_shot && <EditableMedia mediaKey="about_drone_shot" mediaUrl={mediaContent.about_drone_shot} alt="Aerial view of the sanctuary facilities" isEditMode={isEditMode} onUpdate={onMediaUpdate} className="rounded-t-lg"/>}
          </div>
        </div>
      </section>
      
      {/* Final CTA */}
      <section className="py-20 md:py-24 bg-brand-bg-main">
        <div className="container mx-auto px-6 text-center">
          <div className="content-bubble">
            <div className="p-6 md:p-8">
              <PawIcon className="w-10 h-10 text-brand-primary mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-brand-primary">Get Involved</h2>
              <div className="flex flex-wrap justify-center gap-4 max-w-6xl mx-auto mt-8">
                  <CtaButton href="/dogs" className="bg-brand-secondary text-white hover:bg-brand-secondary-hover px-8">Meet the Dogs</CtaButton>
                  <CtaButton href="/horses" className="bg-brand-accent text-white hover:bg-brand-accent-hover px-8">Meet the Horses</CtaButton>
                  <CtaButton href="/community#youth" className="bg-brand-yellow text-brand-text-primary hover:bg-brand-yellow-hover px-8">Our Youth Programme</CtaButton>
                  <CtaButton href="/dogs/sponsorship" className="bg-brand-secondary text-white hover:bg-brand-secondary-hover px-8">Sponsor a Dog</CtaButton>
                  <CtaButton href="/horses#sponsor" className="bg-brand-accent text-white hover:bg-brand-accent-hover px-8">Sponsor a Horse</CtaButton>
                  <CtaButton href="/get-involved#hands-on-care" className="bg-brand-secondary text-white hover:bg-brand-secondary-hover px-8">Hands-On Care (Dogs)</CtaButton>
                  <CtaButton href="/horses#hands-on" className="bg-brand-accent text-white hover:bg-brand-accent-hover px-8">Hands-On Care (Horses)</CtaButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;