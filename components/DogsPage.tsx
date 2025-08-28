

import React from 'react';
import { MediaContent } from '../types.ts';
import EditableMedia from './EditableMedia.tsx';
import CtaButton from './CtaButton.tsx';
import { PageHero, ContentSection } from './PageComponents.tsx';

interface DogsPageProps {
  mediaContent: MediaContent;
  isEditMode: boolean;
  onMediaUpdate: (key: string, url: string) => void;
}

const DogsPage: React.FC<DogsPageProps> = ({ mediaContent, isEditMode, onMediaUpdate }) => {
  return (
    <div className="bg-white">
      <PageHero
        title="Our Dogs"
        subtitle="Rescue, Rebuild, Rehome – and sometimes, provide sanctuary for life."
        mediaKey="dogs_hero_banner"
        mediaContent={mediaContent}
        isEditMode={isEditMode}
        onMediaUpdate={onMediaUpdate}
        alt="Happy dogs in a field with a staff member"
      />

       <div className="container mx-auto px-6 py-12 text-center">
            <div className="flex flex-wrap justify-center gap-4">
                <CtaButton href="/adopt-dog" className="bg-sanctuary-purple text-white hover:bg-sanctuary-purple/80">Meet Our Dogs</CtaButton>
                <CtaButton href="/sponsor-dog" className="bg-sanctuary-green text-white hover:bg-sanctuary-green/80">Sponsor a Dog</CtaButton>
                <CtaButton href="/hands-on-dogs" className="bg-sanctuary-light-purple text-sanctuary-dark hover:bg-sanctuary-light-purple/80">Hands-On Care</CtaButton>
                <CtaButton href="/adopt-dog" className="bg-white text-sanctuary-dark hover:bg-gray-200 border border-sanctuary-dark">Adopt Today</CtaButton>
            </div>
        </div>

      <ContentSection title="Introduction to Our Dog Sanctuary">
        <p>The Gem Project's Dog Sanctuary is an all-breed animal rescue based in Cape Town. Our work is driven by a clear and powerful mission: to protect dogs from neglect, abuse and exploitation. We provide the care, healing and love they need to recover and thrive.</p>
        <p>We rescue dogs from a wide range of situations including abandonment, abuse, neglect and medical or behavioural challenges. Every dog that enters our sanctuary receives tailored support: rehabilitation, veterinary care, behavioural guidance and emotional healing. Some go on to find loving adoptive homes. Others, who may not be suitable for rehoming, live out their days with us in safety, surrounded by people who value and care for them deeply.</p>
        <div className="pt-6">
            <EditableMedia
                mediaKey="dogs_intro"
                mediaUrl={mediaContent.dogs_intro!}
                alt="Hopeful dog looking at camera"
                isEditMode={isEditMode}
                onUpdate={onMediaUpdate}
            />
        </div>
        <p>Our sanctuary provides a permanent home for dogs who cannot be rehomed due to age, trauma or health needs. Here, they are not just sheltered. They are part of a family.</p>
        <p>Beyond direct rescue and care, we are committed to uplifting the communities around us. Through our outreach programme, we provide animal care education and basic training in under-resourced areas, while partnering with other organisations to deliver support and resources where they're needed most.</p>
        <p>We are currently in the implementation phase of our Recycling-for-Care Token Programme – a community initiative that will allow individuals to exchange recyclable materials for essential animal supplies such as food, health products and pet accessories. This initiative not only supports pet owners but also promotes environmental responsibility and fosters pride, dignity and empowerment in underserved communities.</p>
        <p>Some of our dogs also take part in specialised training to support therapy work, emotional support services and other community-based assistance roles. At every stage, we remain focused on ensuring the wellbeing of our animals and deepening the connection between people and the dogs who change their lives.</p>
      </ContentSection>

      <ContentSection title="Our Mission" className="bg-sanctuary-bg">
        <p>We rescue dogs who have been abandoned, neglected, surrendered, abused or simply unwanted. These are the ones who have nowhere else to go. Then we rebuild their world. Adoption is a vital part of our mission. We carefully match dogs with loving families who can offer safety, understanding and a true sense of home.</p>
        <p>But not every dog is ready to leave. Some carry deeper wounds or need lifelong medical or emotional support. For these dogs, we provide permanent sanctuary. They become our beloved <a href="/forever-dogs" className="text-sanctuary-purple hover:underline">Forever Sanctuary family members</a>, living in small groups with dedicated human care, enrichment and the freedom to be themselves.</p>
        <p>We treat every dog as an individual. Whether staying with us temporarily or for life, they receive structure, companionship and love until the day they feel whole again.</p>
      </ContentSection>

      <ContentSection title="Our Vision">
        <p>Every dog deserves to feel wanted, cherished and free. At The Gem Project Sanctuary, our vision is simple but powerful. We are here for the dogs no one else saw, no one else wanted and we will never let them be forgotten. Whether adopted into a loving home or embraced as one of our beloved Forever Sanctuary family members, each dog is given the chance to recover, feel safe and know they matter. We see the gem in every soul and give them the life they were always meant to have.</p>
      </ContentSection>

       <ContentSection title="Why It Matters" className="bg-sanctuary-dark text-white" textClassName="text-gray-300" titleClassName="text-white">
        <p>Many of our dogs arrived with fear in their eyes, scars on their bodies or no one to call their own. Some were simply unwanted. Here, that changes. They find hands that heal, hearts that see them and a place to call home even if that home is with us forever.</p>
        <p>Some are adopted and begin new lives. Others stay here, deeply loved and never alone again.</p>
        <p className="font-bold text-white text-xl text-center pt-4">The Gem Project Sanctuary is where broken spirits are restored. Where the unwanted become treasured. Where every dog is more than a rescue. They are a reminder that love can transform everything.</p>
      </ContentSection>
    </div>
  );
};

export default DogsPage;