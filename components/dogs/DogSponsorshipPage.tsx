
import React from 'react';
import { MediaContent } from '../../types.ts';
import CtaButton from '../CtaButton.tsx';
import { PageHero, ContentSection } from '../PageComponents.tsx';
import { PawIcon, HeartIcon, BowlIcon, VetIcon } from '../icons.tsx';
import EditableMedia from '../EditableMedia.tsx';

interface DogSponsorshipPageProps {
  mediaContent: MediaContent;
  isEditMode: boolean;
  onMediaUpdate: (key: string, url: string) => void;
}

const TierCard: React.FC<{
    icon: React.ReactElement<{ className?: string }>;
    title: string;
    price: string;
    description: string;
}> = ({ icon, title, price, description }) => (
    <div className="content-bubble flex flex-col h-full p-6 md:p-8">
        <div className="mx-auto w-16 h-16 bg-brand-secondary/10 rounded-full flex items-center justify-center mb-4">
            {React.cloneElement(icon, { className: 'w-8 h-8 text-brand-secondary' })}
        </div>
        <h3 className="text-2xl font-bold text-brand-secondary text-center">{title}</h3>
        <p className="text-brand-secondary font-bold text-3xl my-4 text-center">{price}</p>
        <p className="text-brand-text-secondary flex-grow mb-6 text-left">{description}</p>
        <div className="mt-auto">
            <CtaButton href="/contact?subject=Sponsorship" className="bg-brand-secondary text-white hover:bg-brand-secondary-hover w-full">
                Choose Tier
            </CtaButton>
        </div>
    </div>
);


const DogSponsorshipPage: React.FC<DogSponsorshipPageProps> = (props) => {
  return (
    <div className="bg-brand-bg-main">
      <PageHero
        title="Sponsorship Programme – Dogs"
        subtitle="Not everyone can adopt, but everyone can help a dog feel safe, seen and loved."
        mediaKey="sponsorship_01"
        alt="A warm photo of a sponsored dog receiving affection"
        titleColorClass="text-white"
        {...props}
      />

      <ContentSection>
        <p>At The Gem Project Sanctuary, we care for over 50 dogs, each one rescued from circumstances no animal should ever endure. Some were abandoned on roadsides. Others were pulled from neglect or surrendered in crisis. Many arrived shut down and withdrawn, uncertain of gentle touch and unsure if they were finally safe.</p>
        <p>Here, their healing begins. Some will go on to find forever homes. Others will remain with us for life due to age, medical needs or emotional trauma. But they will not just exist. They will live as cherished members of our sanctuary family.</p>
        <p className="font-semibold text-brand-secondary">We give each dog what they need most: time, safety, care and love. A second chance. But we cannot do it without you.</p>
         <div className="my-8 rounded-lg overflow-hidden shadow-lg">
          <EditableMedia
            mediaKey="about_dog_walk"
            mediaUrl={props.mediaContent.about_dog_walk!}
            alt="Dogs playing and receiving affection"
            isEditMode={props.isEditMode}
            onUpdate={props.onMediaUpdate}
          />
        </div>
        <p>When you sponsor a dog, you walk alongside them in their recovery. You help fill their bowl, fund their medical care, support their training and offer comfort they may never have known before.</p>
        <p className="text-xl font-bold text-center mt-6 text-brand-secondary">You may not be able to adopt. But you can still change everything.</p>
      </ContentSection>

      <section id="sponsorship-tiers" className="py-16 md:py-20 bg-brand-bg-subtle">
        <div className="container mx-auto px-6 max-w-5xl">
            <div className="text-center mb-12">
                <PawIcon className="w-10 h-10 text-brand-secondary mx-auto mb-4" />
                <h2 className="text-3xl md:text-4xl font-bold text-brand-secondary">Choose Your Sponsorship Tier</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <TierCard 
                    icon={<BowlIcon />}
                    title="Kind Companion"
                    price="R200/month"
                    description="Helps cover the basics: food, shelter, enrichment treats and daily care."
                />
                <TierCard 
                    icon={<VetIcon />}
                    title="Healing Partner"
                    price="R400/month"
                    description="Supports daily care and contributes to grooming, veterinary visits and emotional recovery."
                />
                <TierCard 
                    icon={<HeartIcon />}
                    title="Lifeline Sponsor"
                    price="R600/month"
                    description="Covers the full cost of care for one dog including food, medication, vet care, enrichment, training and sanctuary support."
                />
            </div>
            <div className="content-bubble text-center mt-12">
                <div className="p-6">
                    <h3 className="text-2xl font-bold text-brand-secondary">Choose Your Own Amount</h3>
                    <p className="my-4 text-brand-text-secondary text-left">Every gift, big or small, helps us provide the safety and love every dog deserves.</p>
                     <CtaButton href="/contact?subject=Sponsorship" className="bg-brand-secondary hover:bg-brand-secondary-hover text-white">
                        Start Sponsoring Today
                    </CtaButton>
                </div>
            </div>
             <p className="text-lg mt-8 text-brand-text-secondary text-left mx-auto max-w-4xl">You can sponsor a dog that speaks to your heart or allow us to match you with one most in need.</p>
        </div>
      </section>
      
      <ContentSection title="What You Will Receive" titleColorClass="text-brand-secondary">
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
                <ul className="space-y-4 text-lg text-left">
                    <li className="flex items-start"><PawIcon className="w-5 h-5 text-brand-secondary mr-3 mt-1.5 flex-shrink-0" />A personalised welcome email with the story and photo of your sponsored dog</li>
                    <li className="flex items-start"><PawIcon className="w-5 h-5 text-brand-secondary mr-3 mt-1.5 flex-shrink-0" />Quarterly updates including progress notes and new photos</li>
                    <li className="flex items-start"><PawIcon className="w-5 h-5 text-brand-secondary mr-3 mt-1.5 flex-shrink-0" />An official digital sponsorship certificate</li>
                    <li className="flex items-start"><PawIcon className="w-5 h-5 text-brand-secondary mr-3 mt-1.5 flex-shrink-0" />Optional name recognition on our Sponsor Wall</li>
                    <li className="flex items-start"><PawIcon className="w-5 h-5 text-brand-secondary mr-3 mt-1.5 flex-shrink-0" />The quiet joy of knowing you have changed a life</li>
                </ul>
                <div className="mt-8">
                     <CtaButton href="/forever-dogs" className="bg-brand-secondary text-white hover:bg-brand-secondary-hover">
                        View Our Sanctuary Dogs
                    </CtaButton>
                </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
                <EditableMedia
                    mediaKey="gallery_dog_1"
                    mediaUrl={props.mediaContent.gallery_dog_1!}
                    alt="Example of a sponsorship update photo"
                    isEditMode={props.isEditMode}
                    onUpdate={props.onMediaUpdate}
                />
            </div>
        </div>
      </ContentSection>

       <section className="py-16 md:py-20 bg-brand-bg-subtle">
        <div className="container mx-auto px-6 max-w-4xl">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="rounded-lg overflow-hidden md:order-2 shadow-lg">
                    <EditableMedia
                        mediaKey="stories_ruby"
                        mediaUrl={props.mediaContent.stories_ruby!}
                        alt="Before and after photo of a rescued dog"
                        isEditMode={props.isEditMode}
                        onUpdate={props.onMediaUpdate}
                    />
                </div>
                <div className="md:order-1">
                    <h2 className="text-3xl font-bold text-brand-secondary mb-4">Want to see the impact your sponsorship can have?</h2>
                    <p className="text-lg text-brand-text-secondary mb-6">Read how your support changes lives every day. From fear to freedom, our dogs’ journeys are only possible because of people like you.</p>
                    <CtaButton href="/dog-stories" className="bg-brand-primary text-white hover:bg-brand-primary-hover">
                        Read Our Dog Success Stories
                    </CtaButton>
                </div>
            </div>
        </div>
       </section>
      
       <section className="py-20 bg-brand-primary">
        <div className="container mx-auto px-6 text-center text-white">
            <PawIcon className="w-10 h-10 text-white mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-secondary">Sponsor a Dog Today</h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-200 mb-8">
                When you sponsor, you become part of a powerful healing journey. You help us give each dog the peace, dignity and care they were always meant to know. Many of our dogs are still waiting for a sponsor. Will you be the one to walk beside them?
            </p>
            <CtaButton href="/contact?subject=Sponsorship" className="bg-brand-secondary hover:bg-brand-secondary-hover text-white btn-pulse">
                Start Sponsoring Today
            </CtaButton>
        </div>
      </section>
    </div>
  );
};

export default DogSponsorshipPage;
