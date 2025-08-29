

import React from 'react';
import { MediaContent } from '../../types.ts';
import EditableMedia from '../EditableMedia.tsx';
import CtaButton from '../CtaButton.tsx';
import { PageHero, ContentSection } from '../PageComponents.tsx';
import { SafeLink } from '../SafeLink.tsx';

interface HorseTrainingPageProps {
  mediaContent: MediaContent;
  isEditMode: boolean;
  onMediaUpdate: (key: string, url: string) => void;
}

const ExploreMoreCard: React.FC<{title: string, links: {href: string, text: string}[]}> = ({ title, links }) => (
    <div className="content-bubble h-full">
        <div className="p-6 md:p-8">
            <h3 className="text-xl font-bold text-green-800 mb-4">{title}</h3>
            <ul className="space-y-3">
                {links.map(link => (
                    <li key={link.href}>
                        <SafeLink href={link.href} className="text-sanctuary-purple hover:underline font-semibold">
                            {link.text}
                        </SafeLink>
                    </li>
                ))}
            </ul>
        </div>
    </div>
);

const TrainingSectionCard: React.FC<HorseTrainingPageProps & {title: string, mediaKey: string, alt: string, children: React.ReactNode}> = ({ title, mediaKey, alt, children, ...props}) => (
    <div className="content-bubble">
        <EditableMedia mediaKey={mediaKey} mediaUrl={props.mediaContent[mediaKey]!} alt={alt} {...props} className="rounded-t-lg aspect-video"/>
        <div className="p-6 md:p-8">
            <h2 className="text-3xl font-bold text-green-800 mb-4 text-center">{title}</h2>
            <div className="text-lg text-gray-700 space-y-4">
                {children}
            </div>
        </div>
    </div>
);

const HorseTrainingPage: React.FC<HorseTrainingPageProps> = (props) => {
    return (
        <div className="bg-brand-bg-main">
            <section className="hero relative bg-brand-text-primary text-white py-20 md:py-32 text-center">
                <div className="absolute inset-0">
                    {props.mediaContent.horse_training_hero && <EditableMedia mediaKey="horse_training_hero" mediaUrl={props.mediaContent.horse_training_hero} alt="Calm training moment between caregiver and horse" className="w-full h-full object-cover" isEditMode={props.isEditMode} onUpdate={props.onMediaUpdate}/>}
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                </div>
                <div style={{position: 'relative', maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                    <div style={{background: 'rgba(0,0,0,0.6)', maxWidth: '64rem', margin: '0 auto', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '1rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                        <div style={{padding: '3rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                            <h1 ref={(el) => { if (el) { el.style.setProperty('color', 'white', 'important'); el.style.setProperty('text-shadow', '2px 2px 4px rgba(0,0,0,0.8)', 'important'); } }} style={{color: 'white !important', textShadow: '2px 2px 4px rgba(0,0,0,0.8)', textAlign: 'center', fontSize: '4rem', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '-0.025em'}}>
                                <span ref={(el) => { if (el) { el.style.setProperty('color', 'white', 'important'); } }} style={{color: 'white !important'}}>Healing Through Trust-Based Training</span>
                            </h1>
                            <div style={{marginTop: '2rem', textAlign: 'center', display: 'flex', justifyContent: 'center'}}>
                                 <CtaButton href="/horses#sponsor" className="bg-brand-accent hover:bg-brand-accent-hover text-white">
                                    Sponsor a Training Session
                                </CtaButton>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="py-16 md:py-20 bg-brand-bg-subtle">
                <div className="container mx-auto px-6 max-w-4xl space-y-12">
                     <TrainingSectionCard title="Our Approach" mediaKey="horse_training_liberty" alt="Horse engaging in liberty work in a round pen" {...props}>
                        <p>At The Gem Project Sanctuary, rehabilitation means far more than physical recovery. It’s about emotional healing too. Our training is based on observation, patience and positive reinforcement not punishment or dominance.</p>
                        <p>We assess each horse’s background and behavioural signals before creating a tailored training plan. Many of the horses we care for were previously overworked, handled with force or neglected entirely. Some arrive unhaltered or untouched. Others flinch at every movement. We meet them where they are. We honour their past and help them feel safe in the present.</p>
                        <p>There is no rigid timeline. We move at their speed, giving them space to express themselves. Trust is earned step by step.</p>
                    </TrainingSectionCard>
                    
                    <TrainingSectionCard title="Desensitisation and Groundwork" mediaKey="horse_training_desensitisation" alt="Close-up of gentle haltering of a horse" {...props}>
                         <p>Many horses arrive fearful of touch or unfamiliar objects. We begin with gentle desensitisation, using our voices, body language and patience to teach them that they are safe. Groundwork builds communication from the ground up.</p>
                        <p>This phase includes:</p>
                        <ul className="list-disc list-inside space-y-2 my-4">
                            <li>Calm haltering and leading in a familiar space</li>
                            <li>Touch work with brushes and ropes to increase comfort</li>
                            <li>Fence-line bonding sessions for highly anxious horses</li>
                            <li>Basic liberty work to encourage voluntary interaction</li>
                        </ul>
                        <p>Progress can be subtle. A horse that once froze may finally take a step forward. Another may drop their head and release a breath. These moments are the building blocks of trust.</p>
                    </TrainingSectionCard>

                    <TrainingSectionCard title="Backing, Schooling and Re-Schooling" mediaKey="horse_training_schooling" alt="Quiet connection between rider and horse during groundwork" {...props}>
                         <p>For horses who are ready, we carefully introduce light schooling. Many have never been ridden before. Others need to unlearn harsh or fear-based training.</p>
                        <p>This stage includes:</p>
                        <ul className="list-disc list-inside space-y-2 my-4">
                            <li>Long-lining and lunge work to build strength and responsiveness</li>
                            <li>Voice cues to create calm communication</li>
                            <li>Backing with a gentle rider only when the horse shows readiness</li>
                            <li>Rebuilding confidence in horses with past training trauma</li>
                        </ul>
                        <p>We never push a horse past their comfort. Riding is not the end goal it is only pursued if it benefits the horse mentally and physically. Horses who cannot be ridden still receive daily care, attention and enrichment for life.</p>
                    </TrainingSectionCard>

                     <TrainingSectionCard title="Emotional Recovery Through Structure" mediaKey="horse_training_emotional" alt="Horse standing quietly with trainer" {...props}>
                        <p>Healing takes more than training it takes consistency. Predictable routines help horses feel secure and build confidence. Our caregivers work with each horse daily, offering:</p>
                        <ul className="list-disc list-inside space-y-2 my-4">
                            <li>Calm feeding routines</li>
                            <li>Consistent caregivers for familiar interaction</li>
                            <li>Low-stimulation environments for anxious horses</li>
                        </ul>
                        <p>For many, this is the first time they have known what it means to feel safe. Emotional rehabilitation is a key part of our training programme and we measure progress not by performance but by comfort and trust.</p>
                    </TrainingSectionCard>

                    <TrainingSectionCard title="Why It Matters" mediaKey="horse_training_final" alt="Horse walking freely beside trainer in warm sunset light" {...props}>
                        <p>Some of our horses will go on to find forever homes. Others will remain with us for life due to medical or behavioural reasons. Regardless of their journey, every horse deserves dignity and confidence.</p>
                        <p>Rehabilitation training builds their ability to form safe relationships with people, reduces fear-based behaviours and gives them tools to navigate the world more comfortably. We have seen shutdown horses come alive again. We’ve watched the fearful approach for a touch. These moments are our reward.</p>
                        <p>Your support helps make it all possible. From basic halter training to advanced re-schooling, every stage matters and your donations ensure we never have to rush the process.</p>
                    </TrainingSectionCard>
                </div>
            </section>
            
            <section className="py-16 md:py-20 bg-brand-bg-main">
                <div className="container mx-auto px-6 max-w-6xl">
                  <div className="content-bubble">
                    <div className="p-6 md:p-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-8 text-center">Explore More of Our Horse Sanctuary</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            <ExploreMoreCard 
                                title="Adoption & Rehoming"
                                links={[
                                    { href: "/horses#adoption", text: "Adoptable Horses" },
                                    { href: "/horses/success-stories", text: "Success Stories" },
                                    { href: "/horses#forever", text: "Forever Sanctuary Horses" },
                                ]}
                            />
                             <ExploreMoreCard 
                                title="Care & Rehabilitation"
                                links={[
                                    { href: "/horses#hands-on", text: "Hands-On Care Programme" },
                                    { href: "/horses/enrichment", text: "Enrichment and Daily Life" },
                                    { href: "/horses#day-in-life", text: "A Day in the Life" },
                                ]}
                            />
                             <ExploreMoreCard 
                                title="Support & Impact"
                                links={[
                                    { href: "/horses#sponsor", text: "Sponsor a Horse" },
                                    { href: "/get-involved#donate", text: "Donation and Vet Support" },
                                    { href: "/get-involved#wishlist", text: "Wishlist and Supplies" },
                                ]}
                            />
                        </div>
                      </div>
                  </div>
                </div>
            </section>
        </div>
    );
};

export default HorseTrainingPage;
