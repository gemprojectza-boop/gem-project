
import React from 'react';
import { MediaContent } from '../types.ts';
import { PageHero } from './PageComponents.tsx';
import CtaButton from './CtaButton.tsx';
import EditableMedia from './EditableMedia.tsx';
import { PawIcon } from './icons.tsx';

interface CommunityPageProps {
  mediaContent: MediaContent;
  isEditMode: boolean;
  onMediaUpdate: (key: string, url: string) => void;
}

const CommunitySection: React.FC<CommunityPageProps & { id: string; title: string; mediaKey: string; alt: string; cta: { href: string, text: string }; children: React.ReactNode; reversed?: boolean }> = ({ id, title, mediaKey, alt, cta, children, reversed = false, ...props }) => (
    <section id={id} className="py-12 md:py-16">
        <div className="container mx-auto px-6 max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className={`content-bubble ${reversed ? 'md:order-2' : ''}`} style={{ margin: 0 }}>
                    <div className="w-64 h-48 md:w-80 md:h-60 lg:w-96 lg:h-72">
                        <EditableMedia
                            mediaKey={mediaKey}
                            mediaUrl={props.mediaContent[mediaKey]!}
                            alt={alt}
                            isEditMode={props.isEditMode}
                            onUpdate={props.onMediaUpdate}
                            className="w-full h-full rounded-t-lg object-contain"
                        />
                    </div>
                </div>
                <div className={`text-center md:text-left ${reversed ? 'md:order-1' : ''}`}>
                    <PawIcon className="w-10 h-10 text-brand-primary mb-4 mx-auto md:mx-0" />
                    <h2 className="text-3xl font-bold text-brand-primary mb-4">{title}</h2>
                    <div className="text-lg text-brand-text-secondary space-y-4 mb-6">
                        {children}
                    </div>
                    <CtaButton href={cta.href} className="bg-brand-yellow hover:bg-brand-yellow-hover text-brand-text-primary">
                        {cta.text}
                    </CtaButton>
                </div>
            </div>
        </div>
    </section>
);


const CommunityPage: React.FC<CommunityPageProps> = (props) => {
  return (
    <div className="bg-brand-bg-main">
      <PageHero
        title="Together We Create Change"
        subtitle="Where rescue meets mentorship and lives are transformed—together."
        mediaKey="horses_landing_hero"
        alt="A diverse group of volunteers and youth working together with sanctuary animals"
        {...props}
      />

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-6 max-w-4xl">
            <div className="content-bubble text-center">
                <div className="p-6 md:p-8">
                    <PawIcon className="w-12 h-12 text-brand-primary mx-auto mb-4" />
                    <h2 className="text-3xl font-bold text-brand-primary">Why Community Matters</h2>
                    <div className="text-lg text-brand-text-secondary space-y-4 my-6">
                        <p>At The Gem Project Sanctuary, rescue is not a single moment. It is a shared journey rooted in compassion and connection. While we care deeply for the animals who call our sanctuary home, we are equally committed to the people and communities around them. Adoption is also a vital part of this connection, helping rescued animals heal and begin new lives as cherished family members.</p>
                        <p>Our dual focus is what sets us apart. Through our growing outreach, we build meaningful partnerships with animal organisations, support families in crisis, and offer youth the chance to gain purpose and practical skills. It is about lifting one another up and creating a ripple effect of healing.</p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      <div className="divide-y-8 divide-brand-bg-main bg-brand-bg-subtle">
        <CommunitySection
            id="outreach"
            title="Community Outreach & Support"
            mediaKey="dogs_intro"
            alt="Staff assisting with outreach in a local community"
            cta={{ href: "/get-involved#donate", text: "Support Outreach & Care" }}
            {...props}
        >
            <p>We are proud to be part of a compassionate network of animal welfare organisations. When space allows, we foster dogs and horses from partner groups, offering them care and stability. We also walk alongside families facing challenges in caring for their animals. Though still growing, every connection builds a bridge of trust.</p>
        </CommunitySection>
        
        <CommunitySection
            id="mobile-vet-clinic"
            title="Mobile Vet Clinic"
            mediaKey="horses_facilities_cta_alt"
            alt="A mobile vet unit parked in a community setting"
            cta={{ href: "/animal-health", text: "Learn About Our Veterinary Services" }}
            reversed
            {...props}
        >
            <p>Our Mobile Vet Clinic serves under-resourced communities, providing vaccinations, basic treatment, and emergency care to animals who might otherwise go without help. This project eases the burden on struggling families and improves animal wellbeing across Cape Town.</p>
        </CommunitySection>

        <CommunitySection
            id="youth"
            title="Youth Apprenticeship Programme"
            mediaKey="horses_training_cta"
            alt="A youth apprentice learning to groom a horse with a mentor"
            cta={{ href: "/youth", text: "Join Our Youth Programme" }}
            {...props}
        >
            <p>This mentorship programme offers young people hands-on experience with animals while gaining life skills, structure, and confidence. Open to in-school and out-of-school youth, it encourages empathy and responsibility through real engagement, supported by staff mentors.</p>
        </CommunitySection>

         <CommunitySection
            id="hands-on-care"
            title="Hands-On Caregiver Programme"
            mediaKey="forever_dogs_day_in_life"
            alt="A participant in the Hands-On Care program bonding with a dog"
            cta={{ href: "/dogs/hands-on", text: "Start a Life-Changing Bond" }}
            reversed
            {...props}
        >
            <p>This unique programme allows individuals to form a deep, long-term bond with a specific dog or horse. Participants walk, groom, and spend meaningful time with their chosen animal, becoming a trusted companion in their healing journey. It's a powerful experience that offers connection without replacing the need for permanent homes.</p>
        </CommunitySection>
      </div>

    </div>
  );
};

export default CommunityPage;