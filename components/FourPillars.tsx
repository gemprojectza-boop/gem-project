import React from 'react';
import { MediaContent } from '../types.ts';
import EditableMedia from './EditableMedia.tsx';

interface SectionProps {
  mediaContent: MediaContent;
  isEditMode: boolean;
  onMediaUpdate: (key: string, url: string) => void;
}

interface PillarCardProps extends SectionProps {
  title: string;
  mediaKey: string;
  alt: string;
  description: string;
}

const PillarCard: React.FC<PillarCardProps> = ({ title, mediaKey, alt, description, mediaContent, isEditMode, onMediaUpdate }) => {
  const mediaUrl = mediaContent[mediaKey];

  return (
    <div className="pillar-card content-bubble animate-on-scroll">
      <div className="overflow-hidden rounded-t-lg">
        {mediaUrl && (
          <EditableMedia
            mediaKey={mediaKey}
            mediaUrl={mediaUrl}
            alt={alt}
            isEditMode={isEditMode}
            onUpdate={onMediaUpdate}
            className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
          />
        )}
      </div>
      <div className="p-6">
        <h4 className="text-xl font-bold text-sanctuary-dark mb-3">{title}</h4>
        <p className="text-brand-text-secondary">{description}</p>
      </div>
    </div>
  );
};

const FourPillars: React.FC<SectionProps> = (props) => {
  const pillars = [
    {
      title: "Rescue & Sanctuary",
      mediaKey: "pillar_rescue_sanctuary",
      alt: "Handler caring for multiple dogs",
      description: "We provide a safe haven for abandoned and neglected animals, offering them the care and protection they need to heal."
    },
    {
      title: "Healing Connection", 
      mediaKey: "pillar_healing_connection",
      alt: "White dog running with joy",
      description: "Through patient rehabilitation and love, we help animals rediscover trust and joy while building bonds with their caregivers."
    },
    {
      title: "Community Impact",
      mediaKey: "pillar_community_impact", 
      alt: "Handler bonding with horse",
      description: "Our work extends beyond our gates, creating positive change through education, outreach, and community partnerships."
    },
    {
      title: "Seeds of Change",
      mediaKey: "pillar_seeds_of_change",
      alt: "Golden dog running playfully",
      description: "Every rescue, every adoption, every act of kindness plants seeds of hope that grow into lasting transformation."
    }
  ];

  return (
    <section id="four-pillars" className="section-padding bg-brand-bg-subtle">
      <div className="max-content-width">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-primary mb-4">Our Four Pillars</h2>
          <p className="text-lg text-brand-text-secondary max-w-3xl mx-auto">
            These four principles guide everything we do, from the moment an animal arrives to the day they find their forever home or become part of our permanent family.
          </p>
        </div>

        <div className="pillars-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
          {pillars.map(pillar => (
            <PillarCard key={pillar.title} {...pillar} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FourPillars;