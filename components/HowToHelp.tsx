

import React from 'react';
import { MediaContent } from '../types.ts';
import EditableMedia from './EditableMedia.tsx';
import { useSafeNavigation } from '../contexts/NavigationContext.tsx';
import { PawIcon } from './icons.tsx';

interface SectionProps {
  mediaContent: MediaContent;
  isEditMode: boolean;
  onMediaUpdate: (key: string, url: string) => void;
}

const SectionCard: React.FC<{
    title: string;
    mediaKey: string;
    imageAlt: string;
    children: React.ReactNode;
    mediaContent: MediaContent;
    buttons: { href: string; text: string; className?: string }[];
    isEditMode: boolean;
    onMediaUpdate: (key: string, url: string) => void;
    titleColorClass?: string;
}> = ({ title, mediaKey, imageAlt, children, mediaContent, buttons, isEditMode, onMediaUpdate, titleColorClass }) => {
    const { navigate } = useSafeNavigation();
    return (
        <div className="content-bubble animate-on-scroll flex flex-col">
            {mediaContent[mediaKey] && (
                <EditableMedia
                    mediaKey={mediaKey}
                    mediaUrl={mediaContent[mediaKey]!}
                    alt={imageAlt}
                    className="w-full h-48 md:h-56 object-cover"
                    isEditMode={isEditMode}
                    onUpdate={onMediaUpdate}
                />
            )}
            <div className="flex flex-col flex-grow p-4">
                <PawIcon className={`w-6 h-6 ${titleColorClass || 'text-brand-primary'} mb-2 icon-interactive`} />
                <h4 className={`text-lg font-bold ${titleColorClass || 'text-brand-primary'} mb-2`}>{title}</h4>
                <div className="text-brand-text-secondary space-y-2 mb-4 flex-grow text-sm">{children}</div>
                 <div className="flex flex-wrap gap-2 mt-auto">
                    {buttons.map(btn => (
                         <button key={btn.href} onClick={() => navigate(btn.href)} className={`inline-block text-white font-semibold py-1.5 px-3 rounded-full transition duration-300 text-xs ${btn.className}`}>
                            {btn.text}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};


const HowToHelp: React.FC<SectionProps> = (props) => {
  return (
    <section id="get-involved" className="compact-section bg-brand-bg-main">
        <div className="max-content-width">
            <div className="text-center mb-12 animate-on-scroll">
                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight uppercase text-brand-secondary">
                    <span>Change a Life,</span>{' '}
                    <span>Be the Change</span>
                </h2>
                <p className="mt-3 text-container mx-auto text-lg text-brand-text-secondary">
                    Every act of kindness creates a ripple of hope. Discover the many ways you can contribute to our mission and make a lasting difference in an animal's life.
                </p>
            </div>

            <div className="compact-grid grid grid-cols-1 lg:grid-cols-3 stagger-children">
                <SectionCard
                    title="Our Forever Animals"
                    mediaKey="horse_hands_on_hero"
                    imageAlt="A calm, happy horse being petted"
                    titleColorClass="text-brand-secondary"
                    buttons={[
                        { href: '/dogs/sponsorship', text: 'Sponsor a Dog', className: 'bg-brand-secondary hover:bg-brand-secondary-hover text-white' },
                        { href: '/horses#sponsor', text: 'Sponsor a Horse', className: 'bg-brand-accent hover:bg-brand-accent-hover text-white' },
                    ]}
                    {...props}
                >
                    <p>Some animals remain with us for life. Your sponsorship provides them with food, shelter, veterinary care and enrichment, ensuring they live out their days in comfort and dignity.</p>
                </SectionCard>
                 <SectionCard
                    title="Our Wishlist"
                    mediaKey="wishlist_01"
                    imageAlt="A collection of donated pet supplies"
                    titleColorClass="text-brand-secondary"
                    buttons={[
                        { href: '/dog-wishlist', text: 'View Dog Wishlist', className: 'bg-brand-secondary hover:bg-brand-secondary-hover' },
                        { href: '/horses/needs', text: 'View Horse Wishlist', className: 'bg-brand-accent hover:bg-brand-accent-hover' },
                    ]}
                    {...props}
                >
                    <p>In-kind donations are vital. From food and bedding to medical supplies and enrichment toys, every item on our wishlist directly supports the daily care of our animals.</p>
                </SectionCard>
                <SectionCard
                    title="Volunteer Your Time"
                    mediaKey="volunteer_01"
                    imageAlt="Volunteer walking a sanctuary dog"
                    titleColorClass="text-brand-secondary"
                    buttons={[
                        { href: '/get-involved#volunteer', text: 'Volunteer with Dogs', className: 'bg-brand-yellow hover:bg-brand-yellow-hover text-brand-text-primary' },
                        { href: '/get-involved#volunteer', text: 'Volunteer with Horses', className: 'bg-brand-yellow hover:bg-brand-yellow-hover text-brand-text-primary' },
                    ]}
                    {...props}
                >
                    <p>Your time is one of the most valuable gifts you can give. Join our team of dedicated volunteers and help with daily care, enrichment, events, or administrative tasks.</p>
                </SectionCard>
            </div>
        </div>
    </section>
  );
};

export default HowToHelp;