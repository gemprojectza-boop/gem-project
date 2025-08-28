
import React from 'react';
import { MediaContent } from '../types.ts';
import EditableMedia from './EditableMedia.tsx';
import CtaButton from './CtaButton.tsx';
import { PageHero, ContentSection } from './PageComponents.tsx';
import { VetIcon, SyringeIcon, BugIcon, BoneIcon, SparklesIcon, BedIcon, TennisBallIcon, ClipboardIcon, PawIcon } from './icons.tsx';

interface AnimalHealthPageProps {
  mediaContent: MediaContent;
  isEditMode: boolean;
  onMediaUpdate: (key: string, url: string) => void;
}

const HealthChecklistItem: React.FC<{ icon: React.ReactNode, title: string, children: React.ReactNode }> = ({ icon, title, children }) => (
    <div className="bg-brand-surface p-6 rounded-lg shadow-md flex items-start space-x-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 transform">
        <div className="flex-shrink-0 w-12 h-12 bg-brand-secondary/10 text-brand-secondary rounded-full flex items-center justify-center">
            {icon}
        </div>
        <div>
            <h3 className="text-xl font-bold mb-2 text-brand-secondary">{title}</h3>
            <p className="text-gray-600 text-base">{children}</p>
        </div>
    </div>
);

const AnimalHealthPage: React.FC<AnimalHealthPageProps> = (props) => {
  return (
    <div className="bg-brand-bg-main">
      <PageHero
        title="Animal Health & Wellbeing"
        subtitle="Caring for every part of every animal."
        mediaKey="health_louis_story"
        alt="A happy, healthy dog running in a field"
        titleColorClass="text-brand-secondary"
        {...props}
      />

      <ContentSection>
        <p>At The Gem Project Sanctuary, we believe true healing goes beyond rescue. It means ensuring every dog receives not just shelter, but the ongoing care, attention and love they need to thrive—physically, emotionally and behaviourally.</p>
        <p>We are deeply committed to animal health in all its forms. From veterinary care to enrichment and safe living spaces, our approach gives every dog a real chance at a full, joyful life.</p>
      </ContentSection>
      
      <section className="py-16 md:py-20 bg-brand-bg-subtle">
        <div className="container mx-auto px-6">
          <div className="content-bubble">
            <div className="p-6 md:p-8">
              <PawIcon className="w-10 h-10 text-brand-secondary mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-brand-secondary mb-12 text-center">Our 7-Point Comprehensive Care Approach</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <HealthChecklistItem icon={<VetIcon className="w-7 h-7" />} title="Preventive Veterinary Care">Vaccinations, parasite control, spaying/neutering, and regular checkups to detect issues early.</HealthChecklistItem>
                  <HealthChecklistItem icon={<BoneIcon className="w-7 h-7" />} title="Proper Nutrition">Balanced, species-appropriate diets and fresh, clean water available at all times, adjusted for age and health.</HealthChecklistItem>
                  <HealthChecklistItem icon={<SparklesIcon className="w-7 h-7" />} title="Hygiene and Grooming">Clean living spaces, regular bathing, brushing, nail trimming, and sanitized bowls and bedding.</HealthChecklistItem>
                  <HealthChecklistItem icon={<TennisBallIcon className="w-7 h-7" />} title="Mental & Behavioral Health">Daily social interaction, enrichment, and positive reinforcement training to build confidence.</HealthChecklistItem>
                  <HealthChecklistItem icon={<ClipboardIcon className="w-7 h-7" />} title="Recognizing Signs of Illness">Vigilant monitoring for changes in appetite, energy, or behaviour to address concerns promptly.</HealthChecklistItem>
                  <HealthChecklistItem icon={<BedIcon className="w-7 h-7" />} title="Safe Living Conditions">Warm, secure shelter, proper fencing, and safe play areas free from harmful substances.</HealthChecklistItem>
                   <HealthChecklistItem icon={<SyringeIcon className="w-7 h-7" />} title="Public and Zoonotic Health">Preventing disease transmission through strict hygiene practices and prompt veterinary reporting.</HealthChecklistItem>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContentSection title="Louis' Success Story" titleColorClass="text-brand-secondary">
        <div className="content-bubble">
            <EditableMedia
                mediaKey="health_louis_story"
                mediaUrl={props.mediaContent.health_louis_story!}
                alt="A happy golden retriever-like dog running"
                isEditMode={props.isEditMode}
                onUpdate={props.onMediaUpdate}
                className="rounded-t-lg aspect-video"
            />
            <div className="p-6 md:p-8">
                <div className="space-y-4 text-gray-700">
                    <p>Louis arrived with a quiet sadness in his eyes and a limp that betrayed the pain he was trying to hide. Once full of playful energy, his spirit had grown subdued under the weight of a severe cruciate ligament injury. Every step was a reminder of what he could no longer do.</p>
                    <p>But Louis was never alone in his struggle. He underwent surgery to repair the torn ligament, followed by weeks of hydrotherapy, gentle physiotherapy, and a careful rehabilitation plan. Through it all, Louis was surrounded by love.</p>
                    <p>Today, Louis is whole again. He bounds through the sanctuary with his trademark grin, soaking in the sun and greeting everyone with his joyful spirit. His body is healed and so is his heart. Louis isn't just a success story; he's a reminder of why we do this work and of what's possible when we refuse to give up on those who need us most.</p>
                </div>
            </div>
        </div>
      </ContentSection>

       <section className="py-20 bg-brand-primary">
        <div className="container mx-auto px-6 text-center text-white">
            <PawIcon className="w-10 h-10 text-white mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-brand-secondary">Help Us Heal More Dogs Like Louis</h2>
            <div className="flex flex-wrap justify-center gap-4">
                <CtaButton href="/donate" className="bg-brand-secondary hover:bg-brand-secondary-hover text-white">Donate for Medical Care</CtaButton>
                <CtaButton href="/dogs/sponsorship" className="bg-brand-secondary hover:bg-brand-secondary-hover text-white">Sponsor a Dog's Recovery</CtaButton>
            </div>
        </div>
      </section>
    </div>
  );
};

export default AnimalHealthPage;
