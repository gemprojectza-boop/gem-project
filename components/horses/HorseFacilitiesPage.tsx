

import React from 'react';
import { MediaContent } from '../../types.ts';
import EditableMedia from '../EditableMedia.tsx';
import CtaButton from '../CtaButton.tsx';
import { PageHero, ContentSection } from '../PageComponents.tsx';

interface HorseFacilitiesPageProps {
  mediaContent: MediaContent;
  isEditMode: boolean;
  onMediaUpdate: (key: string, url: string) => void;
}

const FacilitySection: React.FC<HorseFacilitiesPageProps & { title: string; mediaKey: string; alt: string; children: React.ReactNode }> = ({ title, mediaKey, alt, children, ...props }) => (
    <div className="content-bubble">
        <EditableMedia
            mediaKey={mediaKey}
            mediaUrl={props.mediaContent[mediaKey]!}
            alt={alt}
            isEditMode={props.isEditMode}
            onUpdate={props.onMediaUpdate}
            className="rounded-t-lg aspect-video"
        />
        <div className="p-6 md:p-8">
            <h2 className="text-3xl font-bold text-green-800 mb-4">{title}</h2>
            <div className="text-lg text-gray-700 space-y-4">
                {children}
            </div>
        </div>
    </div>
);


const HorseFacilitiesPage: React.FC<HorseFacilitiesPageProps> = (props) => {
    return (
        <div className="bg-brand-bg-main">
            <PageHero
                title="Horse Facilities"
                subtitle="Where safety meets healing. Where design meets dignity."
                mediaKey="horse_facilities_hero"
                alt="Horses grazing freely in a sunny paddock with the sanctuary in the background"
                titleColorClass="text-brand-accent"
                {...props}
            />

            <ContentSection>
                <p>At The Gem Project Sanctuary, our horses are not just housed. They are home. Every paddock, shelter and stable has been designed with care to ensure each horse’s physical and emotional wellbeing. These aren’t simply facilities. They are spaces of safety, recovery and peace.</p>
            </ContentSection>

            <section className="py-16 md:py-20 bg-brand-bg-subtle">
                <div className="container mx-auto px-6 max-w-4xl space-y-12">
                    <FacilitySection title="Open Paddocks for Freedom and Trust" mediaKey="horse_facilities_paddock_run" alt="Horses walking or running together across a paddock" {...props}>
                        <p>Our sanctuary offers spacious, open paddocks where horses can roam, graze and interact as a natural herd. Here, they rediscover what it means to move freely and choose their own pace. Many arrive having lived in cramped or isolated conditions. This space is often the first step in their healing.</p>
                        <p>Horses are carefully grouped to ensure compatibility and low stress. Each paddock is equipped with clean water troughs and natural shade, encouraging healthy routines and calm social bonds.</p>
                    </FacilitySection>

                    <FacilitySection title="Safe Shelters in Every Paddock" mediaKey="horse_facilities_shelter" alt="Horse standing peacefully under a sturdy shelter" {...props}>
                        <p>Each of our paddocks includes secure shelters to protect against sun, wind and rain. Whether a horse needs rest during a hot day or shelter from a sudden Cape storm, these structures provide comfort and predictability.</p>
                        <p className="mt-4">Shelters are designed with open visibility to prevent trapped feelings and allow each horse to feel safe while still connected to their environment.</p>
                    </FacilitySection>

                    <FacilitySection title="Rehabilitation and Training Zones" mediaKey="horse_facilities_training" alt="Staff member doing liberty work or groundwork with a horse" {...props}>
                        <p>Some of our horses come to us with behavioural trauma, anxiety or medical conditions that limit mobility. For these horses, we have created dedicated rehabilitation and training zones. These calm, quiet spaces allow for groundwork, desensitisation, liberty work and light schooling.</p>
                        <p>The goal is not obedience, but trust. Here, horses are never pushed beyond their limits. They are guided with patience, consistency and compassion.</p>
                    </FacilitySection>

                    <FacilitySection title="Grooming Bays for Bonding and Care" mediaKey="horse_facilities_grooming" alt="Caregiver gently brushing or washing a horse in grooming bay" {...props}>
                        <p>Grooming is a daily part of life at the sanctuary. Our secure grooming bays are set up for safe, relaxed interaction. Whether it’s brushing, washing or medical checks, each grooming session is a moment of connection.</p>
                        <p>These bays are especially important for horses still learning to accept touch or recovering from past trauma. We use positive reinforcement and calming techniques to ensure every horse feels safe and respected.</p>
                    </FacilitySection>
                </div>
            </section>
            
            <ContentSection title="Thoughtful Design for Holistic Healing" className="bg-brand-bg-main">
                <div className="content-bubble">
                     <EditableMedia
                        mediaKey="horse_facilities_nuzzle"
                        mediaUrl={props.mediaContent.horse_facilities_nuzzle!}
                        alt="Close-up of horse nuzzling a caregiver or calm herd interaction"
                        isEditMode={props.isEditMode}
                        onUpdate={props.onMediaUpdate}
                        className="rounded-t-lg aspect-video"
                    />
                    <div className="p-6 md:p-8">
                        <p>Every pathway, gate and feeding routine has been created with our horses in mind. Our team works to reduce stress triggers, avoid unnecessary confinement and promote natural behaviours.</p>
                        <p>While our horses live in a sanctuary, their lives mirror as closely as possible the rhythm of safe, supported freedom. Daily human interaction, structured enrichment, herd companionship and choice form the heart of their days.</p>
                        <p className="font-bold mt-4">Because here, space is not just something they have. It’s something that heals.</p>
                    </div>
                </div>
            </ContentSection>


            <section className="relative py-24 md:py-40 text-white bg-brand-text-primary">
                 <div className="absolute inset-0">
                    <EditableMedia
                        mediaKey="horse_facilities_cta"
                        mediaUrl={props.mediaContent.horse_facilities_cta!}
                        alt="Wide landscape of sanctuary with horses grazing peacefully under a warm sky"
                        className="w-full h-full object-cover"
                        isEditMode={props.isEditMode}
                        onUpdate={props.onMediaUpdate}
                    />
                    <div className="absolute inset-0 bg-brand-text-primary opacity-70"></div>
                </div>
                <div className="relative container mx-auto px-6 text-center">
                    <div className="content-bubble max-w-4xl mx-auto" style={{background: 'rgba(0,0,0,0.3)', color: 'white'}}>
                        <div className="p-6 md:p-8">
                          <h2 className="text-3xl md:text-4xl font-bold text-white">Be Part of the Healing</h2>
                          <p className="text-lg text-gray-200 my-6">Your support makes it possible to maintain and improve these life-changing spaces. Whether through donations, sponsorship or volunteering, your contribution helps keep our sanctuary safe, peaceful and purpose-built for healing.</p>
                          <div className="flex flex-wrap justify-center gap-4">
                              <CtaButton href="/horses/facilities" className="bg-brand-primary hover:bg-brand-primary-hover text-white">See Our Facilities</CtaButton>
                              <CtaButton href="/horses#sponsor" className="bg-brand-yellow hover:bg-brand-yellow-hover text-brand-text-primary">Sponsor a Horse</CtaButton>
                              <CtaButton href="/contact" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-brand-text-primary">Contact Us</CtaButton>
                          </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HorseFacilitiesPage;