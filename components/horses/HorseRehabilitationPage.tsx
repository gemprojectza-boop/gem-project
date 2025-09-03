

import React from 'react';
import { MediaContent } from '../../types.ts';
import EditableMedia from '../EditableMedia.tsx';
import CtaButton from '../CtaButton.tsx';
import { PageHero, ContentSection } from '../PageComponents.tsx';
import { PawIcon } from '../icons.tsx';

// Props interface
interface HorseRehabilitationPageProps {
  mediaContent: MediaContent;
  isEditMode: boolean;
  onMediaUpdate: (key: string, url: string) => void;
}

// Reusable component for each step with an image
const ProcessStep: React.FC<HorseRehabilitationPageProps & { title: string; mediaKey: string; alt: string; children: React.ReactNode; reversed?: boolean }> = ({ title, mediaKey, alt, children, reversed = false, ...props }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className={`content-bubble ${reversed ? 'md:order-2' : ''}`} style={{ margin: 0 }}>
            <div className="w-64 h-48 md:w-80 md:h-60 lg:w-96 lg:h-72">
                <EditableMedia
                    mediaKey={mediaKey}
                    mediaUrl={props.mediaContent[mediaKey]!}
                    alt={alt}
                    isEditMode={props.isEditMode}
                    onUpdate={props.onMediaUpdate}
                    className="w-full h-full rounded-lg object-contain"
                />
            </div>
        </div>
        <div className={reversed ? 'md:order-1' : ''}>
            <h3 className="text-2xl font-bold text-green-800 mb-4 text-center">{title}</h3>
            <div className="text-lg text-brand-text-secondary space-y-4 text-left">
                {children}
            </div>
        </div>
    </div>
);

// Main page component
const HorseRehabilitationPage: React.FC<HorseRehabilitationPageProps> = (props) => {
    return (
        <div className="bg-brand-bg-main">
            <PageHero
                title="Healing Through Trust-Based Training"
                subtitle="REHABILITATION"
                mediaKey="horse_rehab_hero"
                alt="A horse being gently trained in a field"
                titleColorClass="text-white"
                {...props}
            />

            <ContentSection title="The Rehabilitation Process">
                <p>A full overview of how we help horses recover physically, mentally, and emotionally from trauma and neglect.</p>
            </ContentSection>

            <section className="py-16 md:py-20 bg-brand-bg-subtle">
                <div className="container mx-auto px-6 max-w-5xl space-y-16">
                    {/* Sections with no images, grouped together */}
                    <div className="content-bubble">
                        <div className="p-6 md:p-8 space-y-10">
                            <div>
                                <h3 className="text-2xl font-bold text-green-800 mb-4 text-center">Veterinary Assessment</h3>
                                <div className="text-lg text-brand-text-secondary space-y-4 text-left">
                                    <p>Every new horse undergoes a comprehensive health evaluation by a vet. This vital first step allows us to understand their condition, uncover hidden issues, and develop individualized care plans. It is the cornerstone of responsible, compassionate, and effective care, ensuring every horse receives the best chance at a healthy life.</p>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-green-800 mb-4 text-center">Dentistry</h3>
                                <div className="text-lg text-brand-text-secondary space-y-4 text-left">
                                     <p>Dental care is vital to a horse’s health. Many rescues arrive with painful dental issues. We work with skilled equine dental professionals to correct problems, which also helps us determine a horse's age when their history is unknown, allowing for better-informed care decisions.</p>
                                </div>
                            </div>
                             <div>
                                <h3 className="text-2xl font-bold text-green-800 mb-4 text-center">Physical Healing</h3>
                                <div className="text-lg text-brand-text-secondary space-y-4 text-left">
                                     <p>Physical healing is at the heart of every horse’s recovery. Many arrive with injuries, wounds, or emaciation. Our approach is holistic and patient, providing structured nutrition plans, rest, medical care, and supportive therapies to nurture each horse back to health, dignity, and vitality.</p>
                                </div>
                            </div>
                             <div>
                                <h3 className="text-2xl font-bold text-green-800 mb-4 text-center">Body Work</h3>
                                <div className="text-lg text-brand-text-secondary space-y-4 text-left">
                                     <p>Healing the body goes beyond medical treatment. We integrate therapeutic body work, including massage, chiropractic adjustments, and stretching, to address muscle tension and pain. This not only accelerates physical healing but also helps horses feel more comfortable and connected in their bodies.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sections with images */}
                    <ProcessStep title="Farrier and Corrective Hoof Management" mediaKey="horse_rehab_farrier" alt="Farrier caring for a horse's hoof" {...props}>
                         <p>The old saying, “No hoof, no horse,” is true. Many rescues arrive with painful, neglected hooves. Our experienced farrier team works patiently to rebalance hooves, address conditions like laminitis, and restore freedom of movement. This crucial step is often one of the first turning points in their healing journey.</p>
                    </ProcessStep>
                    
                     <ProcessStep title="Behaviour Healing" mediaKey="horse_rehab_behaviour" alt="Gentle interaction between a horse and a caregiver" reversed {...props}>
                         <p>Trauma often leaves invisible scars. Our approach to behavior healing is rooted in patience, empathy, and respect. We focus on building trust, creating safe routines, and using positive reinforcement. Every step forward brings a horse closer to a life of calm, trust, and genuine connection.</p>
                    </ProcessStep>

                    <ProcessStep title="Ground Work" mediaKey="horse_rehab_groundwork" alt="Horse and handler performing groundwork exercises" {...props}>
                         <p>Ground work is a fundamental part of rehabilitation. These exercises build trust, communication, and mutual respect. For traumatized horses, it gently reintroduces handling in a non-threatening way, preparing them for future training and strengthening the human-animal bond.</p>
                    </ProcessStep>

                    <ProcessStep title="Element Exposure (Desensitisation)" mediaKey="horse_rehab_desensitisation" alt="Horse calmly being exposed to a new object" reversed {...props}>
                         <p>This is a crucial step in helping rescued horses overcome fear. In a calm, controlled environment, we gently introduce horses to various everyday sights, sounds, and objects. The goal is to build their confidence, reduce panic responses, and improve their overall quality of life.</p>
                    </ProcessStep>
                </div>
            </section>
            
            <section className="py-20 bg-green-600">
                <div className="container mx-auto px-6 text-white">
                    <PawIcon className="w-10 h-10 text-white mx-auto mb-4" />
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white text-center">Be Part of the Healing</h2>
                    <p className="text-lg text-gray-200 mb-8 text-left">
                        Your support makes these detailed rehabilitation processes possible. From farrier care to specialized training, your contribution helps us give every horse the time and resources they need to heal.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <CtaButton href="/horses#sponsor" className="bg-brand-accent hover:bg-brand-accent-hover text-white">Sponsor a Horse's Recovery</CtaButton>
                        <CtaButton href="/donate" className="bg-white text-brand-primary hover:bg-gray-200">Donate for Vet Care</CtaButton>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HorseRehabilitationPage;
