

import React from 'react';
import { MediaContent } from '../../types.ts';
import EditableMedia from '../EditableMedia.tsx';
import CtaButton from '../CtaButton.tsx';

interface SectionProps {
  mediaContent: MediaContent;
  isEditMode: boolean;
  onMediaUpdate: (key: string, url: string) => void;
}

const SummaryCard: React.FC<SectionProps & { mediaKey: string, title: string, text: string, link: string, linkText: string, alt: string, reversed?: boolean }> = ({ mediaKey, title, text, link, linkText, alt, reversed = false, ...props }) => {
    return (
        <section className="py-16 md:py-20 bg-brand-bg-main odd:bg-brand-bg-subtle animate-on-scroll">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className={`rounded-lg overflow-hidden ${reversed ? 'md:order-2' : ''}`}>
                        {props.mediaContent[mediaKey] && 
                            <EditableMedia
                            mediaKey={mediaKey}
                            mediaUrl={props.mediaContent[mediaKey]!}
                            alt={alt}
                            isEditMode={props.isEditMode}
                            onUpdate={props.onMediaUpdate}
                            className="aspect-video"
                            />
                        }
                    </div>
                    <div className={`content-bubble ${reversed ? 'md:order-1' : ''}`}>
                        <h3 className="text-3xl font-bold text-brand-text-primary text-center">{title}</h3>
                        <p className="text-brand-text-secondary space-y-4 my-4">{text}</p>
                        <CtaButton href={link} className="bg-brand-primary text-white hover:bg-brand-primary-hover">
                            {linkText}
                        </CtaButton>
                    </div>
                </div>
            </div>
        </section>
    );
};


export const FacilitiesSection: React.FC<SectionProps> = (props) => (
    <SummaryCard
        mediaKey="horse_facilities_hero"
        title="Our Facilities"
        text="Where safety meets healing. Every paddock, shelter and stable has been designed to ensure each horse’s physical and emotional wellbeing. These aren’t just facilities; they are spaces of safety, recovery and peace."
        link="/horses/facilities"
        linkText="Explore Our Facilities"
        alt="A sunny paddock at the horse sanctuary"
        {...props}
    />
);

export const TrainingSection: React.FC<SectionProps> = (props) => (
    <SummaryCard
        mediaKey="horse_training_hero"
        title="Rehabilitation & Training"
        text="Healing is more than physical. Our horses receive consistent groundwork and trust-building exercises to help them feel safe. It’s about confidence, communication and calm."
        link="/horses/training"
        linkText="Learn About Our Approach"
        alt="Horse in liberty work session with caregiver"
        reversed={true}
        {...props}
    />
);