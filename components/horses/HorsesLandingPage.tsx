

import React from 'react';
import { MediaContent } from '../../types.ts';
import EditableMedia from '../EditableMedia.tsx';
import CtaButton from '../CtaButton.tsx';

import AdoptionSection from './AdoptionSection.tsx';
import ForeverHorsesSection from './ForeverHorsesSection.tsx';
import HandsOnSection from './HandsOnSection.tsx';
import FutureAdoptableSection from './FutureAdoptableSection.tsx';

interface HorsesLandingPageProps {
  mediaContent: MediaContent;
  isEditMode: boolean;
  onMediaUpdate: (key: string, url: string) => void;
}

const Hero: React.FC<HorsesLandingPageProps> = (props) => (
    <section className="hero relative bg-brand-text-primary text-white py-20 md:py-32 text-center">
        <div className="absolute inset-0">
          {props.mediaContent['horses_landing_hero'] && (
            <EditableMedia 
                mediaKey="horses_landing_hero" 
                mediaUrl={props.mediaContent['horses_landing_hero']!} 
                alt="Horses grazing peacefully in the paddocks. Light through trees"
                className="w-full h-full object-cover" 
                isEditMode={props.isEditMode} 
                onUpdate={props.onMediaUpdate}
                loading="eager"
            />
          )}
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative container mx-auto px-6">
          <div className="content-bubble content-bubble-inverted max-w-4xl mx-auto" style={{background: 'rgba(0,0,0,0.3)'}}>
            <div className="p-6 md:p-8">
              <h1 className="text-4xl md:text-6xl font-black uppercase text-brand-accent text-shadow-strong">
                <span>Horses at The Gem Project Sanctuary</span>
              </h1>
            </div>
          </div>
        </div>
    </section>
);

const Welcome: React.FC = () => (
    <section className="py-16 md:py-20 bg-brand-bg-main">
        <div className="container mx-auto px-6 max-w-4xl">
            <div className="content-bubble">
                <div className="p-6 md:p-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-text-primary text-center mb-6">Welcome to Our Herd</h2>
                    <div className="text-lg text-brand-text-secondary space-y-4">
                        <p>At The Gem Project Sanctuary, our herd is at the heart of who we are. Every horse that arrives carries a story, stories of neglect, abandonment, hardship or quiet resilience. But here, every story is rewritten with care, patience and purpose.</p>
                        <p>Our sanctuary is home to 20 incredible horses, each with a name, a voice and a journey. Some are here for rehabilitation, others for life. What unites them is the promise that they will never again be forgotten. From the first gentle touch to the first pain-free trot, every small milestone is a victory we celebrate together.</p>
                        <p>This is more than a place of rescue. It is a place of restoration, of dignity, of connection. It is where broken bodies heal and weary spirits rise. Whether they are learning to trust again or simply enjoying the peace of a soft bed and a full bucket, our horses know they are safe. They are home.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

interface InfoCardProps extends HorsesLandingPageProps {
    mediaKey: string;
    title: string;
    text: React.ReactNode;
    cta?: { href: string; text: string; className?: string }[];
    alt: string;
    reversed?: boolean;
    sectionId?: string;
    bgClass?: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ mediaKey, title, text, cta, alt, reversed = false, sectionId, bgClass, ...props }) => {
    return (
        <section id={sectionId} className={`py-16 md:py-20 ${bgClass}`}>
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className={`content-bubble ${reversed ? 'md:order-2' : ''}`}>
                        {props.mediaContent[mediaKey] && 
                            <EditableMedia
                            mediaKey={mediaKey}
                            mediaUrl={props.mediaContent[mediaKey]!}
                            alt={alt}
                            isEditMode={props.isEditMode}
                            onUpdate={props.onMediaUpdate}
                            className="rounded-t-lg aspect-video"
                            />
                        }
                    </div>
                    <div className={`content-bubble ${reversed ? 'md:order-1' : ''}`}>
                        <div className="p-6 md:p-8">
                            <h3 className="text-3xl font-bold text-brand-text-primary">{title}</h3>
                            <div className="text-brand-text-secondary space-y-4 my-4 text-lg">{text}</div>
                            {cta && cta.length > 0 && (
                                <div className="flex flex-wrap gap-3">
                                    {cta.map(item => (
                                        <CtaButton key={item.href} href={item.href} className={item.className || 'bg-brand-primary text-white hover:bg-brand-primary-hover'}>
                                            {item.text}
                                        </CtaButton>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const TextCard: React.FC<{ sectionId?: string, title: string, text: string, cta: {href: string, text: string} }> = ({ sectionId, title, text, cta }) => (
    <section id={sectionId} className="py-16 md:py-20 bg-brand-bg-main">
        <div className="container mx-auto px-6">
            <div className="content-bubble max-w-4xl mx-auto">
                <div className="p-6 md:p-8">
                    <h3 className="text-3xl font-bold text-brand-text-primary">{title}</h3>
                    <p className="text-brand-text-secondary my-4 text-lg">{text}</p>
                     <CtaButton href={cta.href} className="bg-brand-yellow text-brand-text-primary hover:bg-brand-yellow-hover">
                        {cta.text}
                    </CtaButton>
                </div>
            </div>
        </div>
    </section>
);

const HorsesLandingPage: React.FC<HorsesLandingPageProps> = (props) => {
  return (
    <div className="bg-brand-bg-main">
      <Hero {...props} />
      <Welcome />
      
      <InfoCard 
        bgClass="bg-brand-bg-subtle"
        mediaKey="horses_mission"
        title="Mission and Vision"
        text={<>
            <p>At The Gem Project Sanctuary, our mission is to be a voice for the voiceless. To protect, heal and advocate for equines who have suffered neglect, abuse, abandonment or hardship. We exist to offer them not just survival, but a full and meaningful life.</p>
            <p>We are committed to: Rescuing horses in need, rehabilitating body and spirit, providing lifelong sanctuary, and educating the public.</p>
            <p>Our vision is a world where no horse is forgotten. Looking ahead, we aim to establish an onsite equine clinic, launch a mobile ambulance, and build deeper community partnerships.</p>
        </>}
        cta={[{href: "/about", text: "Learn More About Our Mission"}]}
        alt="A horse standing calmly with a caregiver, morning light behind them"
        reversed={true}
        {...props}
      />
      
      <AdoptionSection {...props} />
      <FutureAdoptableSection {...props} />
      <ForeverHorsesSection {...props} />
      
      <InfoCard 
        bgClass="bg-brand-bg-subtle"
        mediaKey="horses_rescue_cta"
        title="Rescue and Rehabilitation"
        text="Every rescue begins with a call for help. We act fast, offering emergency care, transport, veterinary support and a place to heal. Rehabilitation includes body work, nutrition, trust-building, and expert handling."
        cta={[{href: "/horses/success-stories", text: "See Our Rescue Stories", className: "bg-brand-accent hover:bg-brand-accent-hover text-white"}]}
        alt="Horse being gently guided off a rescue trailer"
        {...props}
      />
      
      <InfoCard 
        bgClass="bg-brand-bg-main"
        mediaKey="horses_training_cta"
        title="Training and Recovery"
        text="Healing is more than physical. Our horses receive consistent groundwork, positive reinforcement training, and trust-building exercises to help them feel safe. It’s about confidence, communication and calm."
        cta={[{href: "/horses/training", text: "Learn About Our Approach", className: "bg-brand-accent hover:bg-brand-accent-hover text-white"}]}
        alt="Horse in liberty work session with caregiver"
        reversed={true}
        {...props}
      />
      
      <InfoCard 
        bgClass="bg-brand-bg-subtle"
        sectionId="enrichment"
        mediaKey="horses_enrichment_cta"
        title="Enrichment and Daily Life"
        text={<p>Our sanctuary offers more than safety; it offers joy. Enrichment is built into every day: sensory activities, puzzle feeders, liberty games and social time. We believe healing is not only about survival, but about happiness.</p>}
        cta={[{href: "/horses-enrichment", text: "Explore Horse Enrichment", className: "bg-brand-accent hover:bg-brand-accent-hover text-white"}]}
        alt="Horse playing with enrichment toy"
        {...props}
      />
      
      <InfoCard 
        bgClass="bg-brand-bg-main"
        mediaKey="horses_facilities_cta_alt"
        title="Our Facilities"
        text="Our horses live in safe, open spaces designed for healing and freedom. Large paddocks, clean stables, and dedicated rehab zones support daily care. Every design decision reflects our commitment to wellbeing."
        cta={[{href: "/horses/facilities", text: "See Our Facilities", className: "bg-brand-accent hover:bg-brand-accent-hover text-white"}]}
        alt="Clean stables and large open paddocks"
        reversed={true}
        {...props}
      />

      <HandsOnSection {...props} />

      <InfoCard 
        bgClass="bg-brand-bg-subtle"
        sectionId="sponsor"
        mediaKey="horses_sponsor_cta"
        title="Sponsor a Horse"
        text={<p>Make a lasting impact by sponsoring one of our forever horses. Your monthly support covers feed, veterinary care, hoof trimming and more. You’ll receive updates, photos and the joy of knowing you’re part of their journey.</p>}
        cta={[{href: "/horses#sponsor", text: "Sponsor Now", className: "bg-brand-accent hover:bg-brand-accent-hover text-white"}]}
        alt="Sponsored horse with printed photo"
        {...props}
      />
      
      <InfoCard 
        bgClass="bg-brand-bg-main"
        sectionId="future-vision"
        mediaKey="horses_future_cta"
        title="Looking Ahead – Expanding Our Reach"
        text={<p>Our vision includes building an onsite equine clinic and launching a mobile ambulance service. These will bring essential care to horses in underserved communities. We are working toward a future where no horse is left without help.</p>}
        cta={[{href: "/horses-future-vision", text: "Support Future Projects", className: "bg-brand-primary hover:bg-brand-primary-hover text-white"}]}
        alt="Concept image of future equine clinic"
        reversed={true}
        {...props}
      />
      
      <TextCard 
        sectionId="partnerships"
        title="Partnerships"
        text="At The Gem Project Sanctuary, we believe that meaningful change happens when compassionate people and organisations come together. We are actively open to collaborating with like-minded organisations and individuals who share our commitment to equine welfare, ethical care and community upliftment."
        cta={{href: "/contact", text: "Partner With Us"}}
      />
      
      <InfoCard 
        bgClass="bg-brand-bg-subtle"
        sectionId="contact"
        mediaKey="horses_contact_cta"
        title="Contact Us"
        text="Interested in adopting? Want to get involved? Reach out. We’d love to hear from you."
        cta={[{href: "/contact", text: "Contact Us"}]}
        alt="Close-up of a horse nose nuzzling caregiver’s hand"
        {...props}
      />
    </div>
  );
};

export default HorsesLandingPage;