
import React from 'react';
import { MediaContent } from '../types.ts';
import { PageHero } from './PageComponents.tsx';
import CtaButton from './CtaButton.tsx';
import { PawIcon } from './icons.tsx';
import EditableMedia from './EditableMedia.tsx';

interface PartnersPageProps {
  mediaContent: MediaContent;
  isEditMode: boolean;
  onMediaUpdate: (key: string, url: string) => void;
}

const PartnerList: React.FC<{ title: string; partners: string[]; id: string }> = ({ title, partners, id }) => (
    <div id={id}>
        <div className="p-6 md:p-8">
            <PawIcon className="w-8 h-8 text-brand-primary mb-2" />
            <h2 className="text-2xl font-bold text-brand-primary mb-6">{title}</h2>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-4">
                {partners.map(partner => (
                    <li key={partner} className="flex items-center">
                        <PawIcon className="w-4 h-4 text-brand-primary mr-3 flex-shrink-0" />
                        <span className="text-brand-text-secondary">{partner}</span>
                    </li>
                ))}
            </ul>
        </div>
    </div>
);

const welfarePartners = [
    "Mdzananda Animal Clinic", "Animal Welfare Society", "African Tails", 
    "Honey’s Garden", "Just Dogs", "Paws A While", 
    "SPCA", "PDSA", "Pit Pals"
];

const vetPartners = [
    "Hillside Veterinary Clinic", "Cape Animal Medical Centre", "Blue Cross Veterinary Hospital",
    "Belmont Road Veterinary Clinic", "Tygerberg Animal Hospital", "Panorama Veterinary Clinic"
];

const PartnersPage: React.FC<PartnersPageProps> = (props) => {
  return (
    <div className="bg-brand-bg-main">
      <PageHero
        title="Our Partners"
        subtitle="Collaboration is at the heart of everything we do. We are stronger together."
        mediaKey="partners_hero"
        alt="A group of diverse volunteers working together"
        {...props}
      />

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-6 max-w-4xl">
            <div className="content-bubble text-center">
                <div className="p-6 md:p-8">
                    <PawIcon className="w-12 h-12 text-brand-primary mx-auto mb-4" />
                    <h2 className="text-3xl font-bold text-brand-primary">Stronger Together</h2>
                    <div className="text-lg text-brand-text-secondary space-y-4 my-6 text-left">
                        <p>No single organisation can solve the challenges facing animal welfare alone. That's why we are deeply committed to building meaningful partnerships with welfare organisations, veterinary clinics, and community groups who share our values. By working together, we extend our reach, share resources, and create a stronger safety net for animals in need.</p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-brand-bg-subtle">
        <div className="container mx-auto px-6 max-w-4xl space-y-12">
            <PartnerList id="organisations" title="Our Partner Organisations" partners={welfarePartners} />
            <PartnerList id="vets" title="Veterinary Support" partners={vetPartners} />
        </div>
      </section>

      <section className="relative py-24 md:py-40 text-white bg-brand-text-primary">
         <div className="absolute inset-0">
            <EditableMedia
                mediaKey="partners_cta"
                mediaUrl={props.mediaContent.partners_cta!}
                alt="A veterinarian caring for an animal"
                className="w-full h-full object-cover"
                isEditMode={props.isEditMode}
                onUpdate={props.onMediaUpdate}
            />
        </div>
        <div className="relative container mx-auto px-6 text-center">
            <div className="max-w-3xl mx-auto">
                <div className="p-6 md:p-8">
                    <h2 className="text-3xl font-bold text-white" style={{textShadow: '3px 3px 6px rgba(0,0,0,0.8), 1px 1px 3px rgba(0,0,0,0.6)'}}>Become a Partner</h2>
                    <p className="my-6 text-white text-left" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.8), 1px 1px 2px rgba(0,0,0,0.6)'}}>If your organisation shares our commitment to compassionate, ethical animal care, we would love to connect. Whether you are a welfare group, a veterinary practice, or a business with a heart for animals, there are many ways we can work together.</p>
                    <CtaButton href="/contact?subject=Partnership" className="bg-brand-accent hover:bg-brand-accent-hover text-white">
                        Partner With Us
                    </CtaButton>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default PartnersPage;