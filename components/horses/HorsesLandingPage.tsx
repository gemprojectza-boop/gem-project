

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
    <section className="hero relative bg-green-600 text-white py-20 md:py-32 text-center min-h-[70vh] flex items-center justify-center">
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
        </div>
        <div style={{position: 'relative', maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem', zIndex: 10, display: 'flex', justifyContent: 'center'}}>
          <div style={{maxWidth: '80rem', margin: '0 auto'}}>
            <div style={{padding: '3rem'}}>
              <h1 className="text-white" style={{textAlign: 'center', fontSize: '4rem', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '-0.025em', textShadow: '3px 3px 6px rgba(0,0,0,0.8), 1px 1px 3px rgba(0,0,0,0.6)'}}>
                Horses at The Gem Project Sanctuary
              </h1>
            </div>
          </div>
        </div>
    </section>
);

const Welcome: React.FC = () => (
    <section className="py-20 md:py-24 bg-gradient-to-br from-brand-bg-main to-brand-bg-subtle">
        <div className="container mx-auto px-6 max-w-6xl">
            <div className="content-bubble bg-white/95 backdrop-blur-sm shadow-2xl rounded-3xl border border-gray-100">
                <div className="p-10 md:p-12 text-center">
                    <div className="w-16 h-16 bg-brand-primary/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                        <svg className="w-8 h-8 text-brand-primary" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-brand-text-primary text-center mb-8">Welcome to Our Herd</h2>
                    <div className="text-xl text-brand-text-secondary space-y-6 leading-relaxed max-w-4xl mx-auto text-left">
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
        <section id={sectionId} className={`py-20 md:py-24 ${bgClass || 'bg-gradient-to-br from-brand-bg-main to-brand-bg-subtle'}`}>
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <div className={`${reversed ? 'lg:order-2' : ''}`}>
                        <div className="content-bubble bg-white/95 backdrop-blur-sm shadow-xl rounded-3xl border border-gray-100 overflow-hidden">
                            {props.mediaContent[mediaKey] && 
                                <EditableMedia
                                mediaKey={mediaKey}
                                mediaUrl={props.mediaContent[mediaKey]!}
                                alt={alt}
                                isEditMode={props.isEditMode}
                                onUpdate={props.onMediaUpdate}
                                className="w-full aspect-video object-cover"
                                />
                            }
                        </div>
                    </div>
                    <div className={`${reversed ? 'lg:order-1' : ''}`}>
                        <div className="content-bubble bg-white/95 backdrop-blur-sm shadow-xl rounded-3xl border border-gray-100">
                            <div className="p-8 md:p-12 text-center">
                                <div className="w-14 h-14 bg-brand-primary/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                                    <svg className="w-7 h-7 text-brand-primary" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                    </svg>
                                </div>
                                <h3 className="text-3xl md:text-4xl font-black text-brand-text-primary text-center mb-6">{title}</h3>
                                <div className="text-brand-text-secondary space-y-6 my-8 text-lg leading-relaxed text-left">{text}</div>
                                {cta && cta.length > 0 && (
                                    <div className="flex flex-wrap gap-4 justify-center">
                                        {cta.map(item => (
                                            <CtaButton key={item.href} href={item.href} className={`shadow-lg btn-pulse ${item.className || 'bg-brand-primary text-white hover:bg-brand-primary-hover'}`}>
                                                {item.text}
                                            </CtaButton>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const TextCard: React.FC<{ sectionId?: string, title: string, text: string, cta: {href: string, text: string} }> = ({ sectionId, title, text, cta }) => (
    <section id={sectionId} className="py-20 md:py-24 bg-gradient-to-br from-brand-bg-main to-brand-bg-subtle">
        <div className="container mx-auto px-6">
            <div className="content-bubble max-w-5xl mx-auto bg-white/95 backdrop-blur-sm shadow-2xl rounded-3xl border border-gray-100">
                <div className="p-10 md:p-12 text-center">
                    <div className="w-16 h-16 bg-brand-yellow/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                        <svg className="w-8 h-8 text-brand-yellow" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                    </div>
                    <h3 className="text-4xl md:text-5xl font-black text-brand-text-primary text-center mb-8">{title}</h3>
                    <p className="text-brand-text-secondary my-8 text-xl leading-relaxed text-left max-w-4xl mx-auto">{text}</p>
                     <CtaButton href={cta.href} className="bg-brand-yellow text-brand-text-primary hover:bg-brand-yellow-hover shadow-lg btn-pulse">
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
        text={<p>Our sanctuary offers more than safety; it offers joy and the freedom to truly be horses. Every day is enriched with social interaction, open space to move and play, and quiet moments where they can simply be themselves. We believe healing is not only about survival, but about happiness and the freedom to live as horses were meant to.</p>}
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
      
      <section id="partnerships" className="py-20 md:py-24 bg-gradient-to-br from-brand-bg-main to-brand-bg-subtle" style={{textAlign: 'center'}}>
        <div className="container mx-auto px-6" style={{textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <div className="content-bubble max-w-5xl mx-auto bg-white/95 backdrop-blur-sm shadow-2xl rounded-3xl border border-gray-100" style={{textAlign: 'center', margin: '0 auto'}}>
                <div className="p-10 md:p-12 text-center" style={{textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <div className="w-16 h-16 bg-brand-yellow/20 rounded-full flex items-center justify-center mb-6 mx-auto" style={{margin: '0 auto 1.5rem auto'}}>
                        <svg className="w-8 h-8 text-brand-yellow" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                    </div>
                    <h3 className="text-4xl md:text-5xl font-black text-brand-text-primary text-center mb-8" style={{textAlign: 'center', margin: '0 auto 2rem auto'}}>Partnerships</h3>
                    <p className="text-brand-text-secondary my-8 text-xl leading-relaxed text-left max-w-4xl mx-auto" style={{textAlign: 'left', margin: '2rem auto'}}>At The Gem Project Sanctuary, we believe that meaningful change happens when compassionate people and organisations come together. We are actively open to collaborating with like-minded organisations and individuals who share our commitment to equine welfare, ethical care and community upliftment.</p>
                     <CtaButton href="/contact" className="bg-brand-yellow text-brand-text-primary hover:bg-brand-yellow-hover shadow-lg btn-pulse" style={{margin: '0 auto'}}>
                        Partner With Us
                    </CtaButton>
                </div>
            </div>
        </div>
      </section>
      
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