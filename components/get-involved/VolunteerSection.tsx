
import React from 'react';
import { MediaContent } from '../../types.ts';
import CtaButton from '../CtaButton.tsx';
import EditableMedia from '../EditableMedia.tsx';
import { PawIcon } from '../icons.tsx';

interface SectionProps {
  mediaContent: MediaContent;
  isEditMode: boolean;
  onMediaUpdate: (key: string, url: string) => void;
}

const TierCard: React.FC<{ title: string, subtitle: string, roles: { title: string, description: string }[] }> = ({ title, subtitle, roles }) => (
    <div className="content-bubble h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2 transform">
        <div className="p-6 md:p-8">
            <PawIcon className="w-8 h-8 text-sanctuary-purple mb-2" />
            <h3 className="text-2xl font-bold text-sanctuary-purple text-center">{title}</h3>
            <p className="text-gray-500 mb-6">{subtitle}</p>
            <div className="space-y-4">
                {roles.map(role => (
                    <div key={role.title}>
                        <h4 className="font-bold text-sanctuary-dark">{role.title}</h4>
                        <p className="text-sm text-gray-600">{role.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
);


const VolunteerSection: React.FC<SectionProps> = (props) => {
  return (
    <section id="volunteer" className="py-16 md:py-20 bg-brand-bg-subtle">
        <div className="container mx-auto px-6 max-w-4xl">
            <div className="content-bubble text-center">
                <div className="p-6 md:p-8">
                  <PawIcon className="w-10 h-10 text-brand-primary mx-auto mb-4" />
                  <h2 className="text-3xl md:text-4xl font-bold text-brand-primary">Volunteer With Our Dogs</h2>
                  <p className="mt-2 text-lg text-gray-600">You Can Be Part of Their Healing Journey</p>
                </div>
            </div>
             <div className="content-bubble">
                <EditableMedia
                    mediaKey="volunteer_hero"
                    mediaUrl={props.mediaContent.volunteer_hero!}
                    alt="Volunteer gently brushing a dog"
                    isEditMode={props.isEditMode}
                    onUpdate={props.onMediaUpdate}
                    className="rounded-t-lg aspect-video"
                />
                <div className="p-6 md:p-8 space-y-4 text-lg text-gray-700">
                    <p>At The Gem Project Sanctuary every helping hand matters. Whether you are a lifelong dog lover or simply someone with time and heart to give volunteering with our rescued dogs is a meaningful way to support healing trust-building and a second chance at life.</p>
                    <p>Our Dog Volunteer Packages offer something for everyone. From basic care and playtime to advanced behavioural support. Choose the tier that suits your skills availability and passion.</p>
                </div>
            </div>

            {/* Tiers */}
            <div className="space-y-12 mt-12">
                {/* Basic Tier */}
                <div>
                    <div className="content-bubble">
                        <div className="p-6 md:p-8">
                          <PawIcon className="w-8 h-8 text-brand-primary mb-2" />
                          <h3 className="text-2xl font-bold text-brand-primary">Basic Tier</h3>
                          <p className="text-gray-600">Perfect for newcomers, youth, or anyone without prior dog handling experience.</p>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <TierCard title="Junior Dog Helpers" subtitle="Ages 12-15" roles={[
                            { title: "Roles", description: "Brushing, food prep, filling toys, assisting walks." },
                            { title: "Skills Gained", description: "Dog care basics, confidence, empathy." }
                        ]}/>
                        <TierCard title="Beginner Dog Buddies" subtitle="Ages 16+ | No Experience" roles={[
                            { title: "Roles", description: "Cleaning, feeding, enrichment, walking calm dogs." },
                            { title: "Opportunities", description: "Learn canine body language, attend training demos." }
                        ]}/>
                        <TierCard title="Practical Heroes" subtitle="All Ages | No Dog Experience" roles={[
                            { title: "Roles", description: "Repairing kennels/fences, building enrichment zones, general upkeep." },
                            { title: "Ideal for", description: "Builders, repair workers, DIYers." }
                        ]}/>
                        <TierCard title="Creative Collaborators" subtitle="All Ages & Skills" roles={[
                            { title: "Roles", description: "Photography, videography, writing stories, social media design." },
                            { title: "Extras", description: "Credit on materials, build portfolio." }
                        ]}/>
                    </div>
                </div>

                 {/* Intermediate Tier */}
                <div>
                    <div className="content-bubble">
                        <div className="p-6 md:p-8">
                          <PawIcon className="w-8 h-8 text-brand-primary mb-2" />
                          <h3 className="text-2xl font-bold text-brand-primary">Intermediate Tier</h3>
                          <p className="text-gray-600">For volunteers with basic dog-handling confidence or who have progressed from the Basic Tier.</p>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <TierCard title="Confident Canine Companions" subtitle="Able to work more independently" roles={[
                             { title: "Roles", description: "Walking dogs with moderate energy, structured play, behaviour observation." }
                        ]}/>
                        <TierCard title="Emotional Support Ambassadors" subtitle="Compassion-Focused" roles={[
                             { title: "Roles", description: "One-on-one calming sessions, low-stimulus walks, building trust." }
                        ]}/>
                    </div>
                </div>

                 {/* Advanced Tier */}
                <div>
                    <div className="content-bubble">
                        <div className="p-6 md:p-8">
                          <PawIcon className="w-8 h-8 text-brand-primary mb-2" />
                          <h3 className="text-2xl font-bold text-brand-primary">Advanced Tier</h3>
                          <p className="text-gray-600">For experienced dog handlers and professional-level volunteers.</p>
                        </div>
                    </div>
                     <div className="grid md:grid-cols-2 gap-8">
                        <TierCard title="Behaviour & Training Volunteers" subtitle="Experienced handlers/professionals" roles={[
                             { title: "Roles", description: "Behaviour assessments, desensitisation work, assisting with socialisation." },
                             { title: "Extras", description: "Guide transformation journeys, be featured in our media." }
                        ]}/>
                        <TierCard title="Specialised Support Volunteers" subtitle="Offer your professional expertise" roles={[
                             { title: "Areas Needed", description: "Vet nurses, physios, groomers, fundraising specialists, PR & comms pros." }
                        ]}/>
                    </div>
                </div>
            </div>

            <div className="content-bubble text-center mt-12">
                <div className="p-6 md:p-8">
                    <PawIcon className="w-10 h-10 text-brand-primary mx-auto mb-4" />
                    <h2 className="text-3xl font-bold text-brand-primary mb-4">Ready to Join Us?</h2>
                    <p className="mx-auto text-lg text-gray-700 mb-6">
                       Whether you want to walk a dog, build a kennel, or help tell their story, you belong here. Every moment you give is part of changing a life.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <CtaButton href="/contact?subject=Volunteer" className="bg-brand-yellow text-brand-text-primary hover:bg-brand-yellow-hover">
                            Contact Us to Volunteer
                        </CtaButton>
                         <CtaButton href="/dogs" className="bg-transparent border-2 border-brand-secondary text-brand-secondary hover:bg-brand-secondary hover:text-white">
                            Learn More About Our Dogs
                        </CtaButton>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default VolunteerSection;