


import React from 'react';
import { MediaContent } from '../types.ts';
import EditableMedia from './EditableMedia.tsx';
import { SafeLink } from './SafeLink.tsx';
import { HeartIcon, PawIcon, SanctuaryIcon, CommunityIcon, SparklesIcon } from './icons.tsx';

interface AboutProps {
  mediaContent: MediaContent;
  isEditMode: boolean;
  onMediaUpdate: (key: string, url: string) => void;
}

const InfoCard: React.FC<{
    icon: React.ReactElement<{ className?: string }>;
    title: string;
    text: string;
    bgColor: string;
    textColor: string;
}> = ({ icon, title, text, bgColor, textColor }) => {
    return (
        <div className="content-bubble p-6 text-center flex flex-col items-center h-full animate-on-scroll">
            <div className={`w-16 h-16 ${bgColor} rounded-full flex items-center justify-center mb-4`}>
                {React.cloneElement(icon, { className: `w-8 h-8 ${textColor} ${icon.props.className || ''}` })}
            </div>
            <h3 className="text-xl font-bold text-brand-text-primary mb-2">{title}</h3>
            <p className="text-brand-text-secondary text-sm flex-grow">{text}</p>
        </div>
    );
};

const About: React.FC<AboutProps> = ({ mediaContent, isEditMode, onMediaUpdate }) => {
  const infoCards = [
    {
        icon: <SanctuaryIcon />,
        title: "Rescue & Sanctuary",
        text: "We provide a place of healing and hope for rescued dogs and horses, offering safety, care, and second chances.",
        bgColor: "bg-brand-primary/20",
        textColor: "text-brand-primary",
    },
    {
        icon: <PawIcon className="icon-interactive" />,
        title: "Healing Connection",
        text: "Many animals find loving forever homes, while others with special needs become beloved permanent residents.",
        bgColor: "bg-yellow-400/20",
        textColor: "text-yellow-500",
    },
    {
        icon: <CommunityIcon />,
        title: "Community Impact",
        text: "Our work extends beyond our gates, uplifting communities through outreach, education, and support.",
        bgColor: "bg-brand-secondary/20",
        textColor: "text-brand-secondary",
    },
    {
        icon: <SparklesIcon />,
        title: "Seeds of Change",
        text: "Explore our site to meet our residents and discover how you can become part of something truly meaningful.",
        bgColor: "bg-brand-accent/20",
        textColor: "text-brand-accent",
    }
  ];

  return (
    <>
    <section id="about" className="section-padding bg-brand-bg-subtle animate-on-scroll">
      <div className="max-content-width">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl font-extrabold text-brand-primary mb-6 leading-tight">
                WELCOME TO<br />
                <span>THE GEM PROJECT SANCTUARY</span>
              </h2>
              <div className="text-lg text-brand-text-secondary space-y-4 text-container mx-auto lg:mx-0">
                  <p>The Gem Project Sanctuary is a place of healing and hope for rescued dogs and horses. Set on a spacious 14-hectare farm in Philadelphia, Cape Town, we provide safety, care and second chances to animals who have been abused, neglected, abandoned or surrendered.</p>
                  <p>Many of these animals go on to find loving forever homes. Others, who carry deep emotional scars or have lifelong health needs, become our beloved <SafeLink href="/forever-dogs" className="text-brand-primary hover:underline font-semibold cursor-pointer">Forever Sanctuary family members</SafeLink>. They are not waiting for a home. They are already home.</p>
              </div>
            </div>

            {/* Image Content */}
            <div className="relative flex justify-center items-center">
              <div className="relative w-72 h-72 sm:w-96 sm:h-96">
                  <EditableMedia
                    mediaKey="welcome_section_01"
                    mediaUrl={mediaContent.welcome_section_01!}
                    alt="Happy German Shepherd dog"
                    isEditMode={isEditMode}
                    onUpdate={onMediaUpdate}
                    className="w-full h-full object-cover rounded-full shadow-2xl"
                  />
                  <div className="absolute -bottom-4 -right-4 flex items-center">
                      <HeartIcon className="w-16 h-16 text-brand-secondary transform -rotate-12" />
                      <HeartIcon className="w-12 h-12 text-yellow-400 transform translate-x-[-20px] translate-y-[10px] rotate-12" />
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="section-padding bg-brand-bg-main animate-on-scroll">
        <div className="max-content-width">
            <div className="card-grid stagger-children">
                {infoCards.map(card => <InfoCard key={card.title} {...card} />)}
            </div>
        </div>
    </section>
    </>
  );
};

export default About;