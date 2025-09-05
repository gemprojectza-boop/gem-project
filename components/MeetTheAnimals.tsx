


import React from 'react';
import { MediaContent } from '../types.ts';
import EditableMedia from './EditableMedia.tsx';
import { useSafeNavigation } from '../contexts/NavigationContext.tsx';
import { HeartIcon } from './icons.tsx';

interface SectionProps {
  mediaContent: MediaContent;
  isEditMode: boolean;
  onMediaUpdate: (key: string, url: string) => void;
}

interface ActionCardProps extends SectionProps {
    bgColor: string;
    heartColor: string;
    mediaKey: string;
    alt: string;
    buttonText: string;
    href: string;
}

const ActionCard: React.FC<ActionCardProps> = ({ bgColor, heartColor, mediaKey, alt, buttonText, href, mediaContent, isEditMode, onMediaUpdate }) => {
    const { navigate } = useSafeNavigation();
    const mediaUrl = mediaContent[mediaKey];
    
    const getButtonClasses = (text: string): string => {
        if (text === 'Adopt a Dog') {
            return 'bg-brand-secondary hover:bg-brand-secondary-hover text-white';
        }
        if (text === 'Adopt a Horse') {
            return 'bg-brand-accent hover:bg-brand-accent-hover text-white';
        }
        if (text === 'Get Involved') {
            return 'bg-brand-yellow hover:bg-brand-yellow-hover text-brand-text-primary';
        }
        return 'bg-brand-primary hover:bg-brand-primary-hover text-white'; // Default
    };

    return (
        <div className={`rounded-lg p-3 md:p-4 flex flex-col items-center animate-on-scroll ${bgColor}`}>
            <div className="relative w-24 h-24 md:w-28 md:h-28 mb-3">
                <div className="absolute w-full h-full">
                    {mediaUrl ? (
                        <EditableMedia
                            mediaKey={mediaKey}
                            mediaUrl={mediaUrl}
                            alt={alt}
                            isEditMode={isEditMode}
                            onUpdate={onMediaUpdate}
                            className="w-full h-full object-cover rounded-full shadow-lg border-4 border-white/50"
                        />
                    ) : (
                        <div className="w-full h-full bg-gray-300 rounded-full"></div>
                    )}
                </div>
                {/* Floating hearts */}
                <HeartIcon className={`absolute -top-1 -left-1 w-4 h-4 transform -rotate-12 ${heartColor}`} />
                <HeartIcon className={`absolute top-4 -right-2 w-5 h-5 transform rotate-12 ${heartColor}`} />
                <HeartIcon className={`absolute -bottom-1 -right-1 w-3 h-3 transform rotate-6 ${heartColor}`} />
                <HeartIcon className={`absolute bottom-3 -left-2 w-6 h-6 transform -rotate-20 ${heartColor}`} />
            </div>
            <button
                onClick={() => navigate(href)}
                className={`${getButtonClasses(buttonText)} font-bold uppercase tracking-wider text-xs py-1.5 px-4 rounded-md shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300`}
            >
                {buttonText}
            </button>
        </div>
    );
};

const MeetTheAnimals: React.FC<SectionProps> = (props) => {
  const cards = [
    {
      bgColor: 'bg-brand-secondary',
      heartColor: 'text-red-300/80',
      mediaKey: 'cta_adopt_dog', // Updated to use new CTA image - Close-up of hopeful dog's face
      alt: 'Close-up of hopeful dog\'s face',
      buttonText: 'Adopt a Dog',
      href: '/adopt-a-dog',
    },
    {
      bgColor: 'bg-brand-accent',
      heartColor: 'text-green-300/80',
      mediaKey: 'cta_adopt_horse', // Updated to use new CTA image - Horse looking out stable window
      alt: 'Horse looking out stable window',
      buttonText: 'Adopt a Horse',
      href: '/horses#adoption',
    },
    {
      bgColor: 'bg-brand-yellow',
      heartColor: 'text-yellow-300/80',
      mediaKey: 'cta_get_involved', // Updated to use new CTA image - Team walking dogs together
      alt: 'Team walking dogs together',
      buttonText: 'Get Involved',
      href: '/get-involved',
    },
  ];

  return (
    <section id="meet-animals" className="compact-section bg-brand-bg-subtle mt-16">
        <div className="max-content-width">
            <div className="text-center mb-12 animate-on-scroll">
                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight uppercase text-brand-primary">
                    <span>Be Part of</span>{' '}
                    <span>the Change</span>
                </h2>
                <p className="mt-3 text-container mx-auto text-lg text-brand-text-secondary text-center">
                    Your support gives them a second chance. Explore the ways you can make a difference today.
                </p>
            </div>
            <div className="compact-grid grid grid-cols-1 lg:grid-cols-3 stagger-children">
                {cards.map(card => (
                    <ActionCard key={card.buttonText} {...card} {...props} />
                ))}
            </div>
        </div>
    </section>
  );
};

export default MeetTheAnimals;