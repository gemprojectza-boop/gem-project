
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
                  <h2 className="text-3xl md:text-4xl font-bold text-brand-primary">Volunteer With Our Dogs and Horses</h2>
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
                    <p className="text-center">At The Gem Project Sanctuary every helping hand matters. Whether you are passionate about dogs, horses, or both, volunteering with our rescued animals is a meaningful way to support healing, trust-building, and a second chance at life.</p>
                    <p className="text-center">Our Volunteer Packages offer something for everyone working with both dogs and horses. From basic care and playtime to advanced behavioural support. Choose the tier that suits your skills, availability and passion.</p>
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
                          <p className="text-gray-600">Perfect for newcomers, youth, or anyone without prior animal handling experience.</p>
                        </div>
                    </div>
                    <div className="card-grid gap-6">
                        <TierCard title="Junior Dog & Horse Helpers" subtitle="Ages 12-15" roles={[
                            { title: "Roles", description: "Brushing dogs and gentle horses • Food prep and filling toys • Assisting with calm animal walks • Basic barn maintenance" },
                            { title: "Skills Gained", description: "Animal care basics • Confidence around dogs and horses • Empathy and responsibility" }
                        ]}/>
                        <TierCard title="Beginner Animal Buddies" subtitle="Ages 16+ | No Experience" roles={[
                            { title: "Roles", description: "Cleaning kennels and horse stalls • Feeding both dogs and horses • Enrichment activities • Walking calm dogs and leading gentle horses" },
                            { title: "Opportunities", description: "Learn animal body language • Attend training demos for both species • Basic grooming techniques" }
                        ]}/>
                        <TierCard title="Practical Heroes" subtitle="All Ages | No Animal Experience" roles={[
                            { title: "Roles", description: "Repairing kennels, fences, and horse facilities • Building enrichment zones for both species • General sanctuary upkeep • Maintenance projects" },
                            { title: "Ideal for", description: "Builders • Repair workers • DIY enthusiasts • Handy volunteers" }
                        ]}/>
                        <TierCard title="Creative Collaborators" subtitle="All Ages & Skills" roles={[
                            { title: "Roles", description: "Photography of dogs and horses • Videography for sanctuary stories • Writing animal stories • Social media content design • Marketing materials" },
                            { title: "Extras", description: "Credit on all materials • Build professional portfolio • Feature in sanctuary media" }
                        ]}/>
                    </div>
                </div>

                 {/* Intermediate Tier */}
                <div>
                    <div className="content-bubble">
                        <div className="p-6 md:p-8">
                          <PawIcon className="w-8 h-8 text-brand-primary mb-2" />
                          <h3 className="text-2xl font-bold text-brand-primary">Intermediate Tier</h3>
                          <p className="text-gray-600">For volunteers with basic animal-handling confidence or who have progressed from the Basic Tier.</p>
                        </div>
                    </div>
                    <div className="card-grid gap-6">
                        <TierCard title="Confident Animal Companions" subtitle="Able to work more independently" roles={[
                             { title: "Roles", description: "Walking dogs with moderate energy • Leading horses on trails • Structured play sessions • Behaviour observation for both species • Basic training assistance" },
                             { title: "Skills Needed", description: "Comfortable with animal handling • Able to read body language • Good physical fitness" }
                        ]}/>
                        <TierCard title="Emotional Support Ambassadors" subtitle="Compassion-Focused" roles={[
                             { title: "Roles", description: "One-on-one calming sessions with traumatized animals • Low-stimulus walks and gentle interactions • Trust-building activities • Quiet companionship sessions" },
                             { title: "Perfect For", description: "Patient volunteers • Those with calm energy • Experience with trauma recovery" }
                        ]}/>
                    </div>
                </div>

                 {/* Advanced Tier */}
                <div>
                    <div className="content-bubble">
                        <div className="p-6 md:p-8">
                          <PawIcon className="w-8 h-8 text-brand-primary mb-2" />
                          <h3 className="text-2xl font-bold text-brand-primary">Advanced Tier</h3>
                          <p className="text-gray-600">For experienced animal handlers and professional-level volunteers.</p>
                        </div>
                    </div>
                     <div className="card-grid gap-6">
                        <TierCard title="Behaviour & Training Volunteers" subtitle="Experienced handlers/professionals" roles={[
                             { title: "Roles", description: "Behaviour assessments for dogs and horses • Desensitisation work with traumatized animals • Socialisation assistance • Advanced training protocols • Rehabilitation support" },
                             { title: "Requirements", description: "Proven animal experience • Professional qualifications preferred • Understanding of trauma responses" },
                             { title: "Extras", description: "Guide transformation journeys • Featured in sanctuary media • Work with specialist cases" }
                        ]}/>
                        <TierCard title="Specialised Support Volunteers" subtitle="Offer your professional expertise" roles={[
                             { title: "Areas Needed", description: "Veterinary nurses • Animal physiotherapists • Professional groomers • Equine specialists • Fundraising experts • PR & communications professionals" },
                             { title: "Benefits", description: "Use skills for meaningful impact • Flexible scheduling • Professional development opportunities" }
                        ]}/>
                    </div>
                </div>
            </div>

            <div className="content-bubble grid grid-cols-1 md:grid-cols-2 items-stretch mt-12">
                <div className="h-full">
                    <EditableMedia
                        mediaKey="volunteer_01"
                        mediaUrl={props.mediaContent.volunteer_01!}
                        alt="Volunteer working with dogs at the sanctuary"
                        isEditMode={props.isEditMode}
                        onUpdate={props.onMediaUpdate}
                        className="w-full h-full"
                    />
                </div>
                <div className="p-6 md:p-8 flex flex-col justify-center text-center">
                    <PawIcon className="w-10 h-10 text-brand-primary mx-auto mb-4" />
                    <h2 className="text-3xl font-bold text-brand-primary mb-4">Ready to Join Us?</h2>
                    <p className="mx-auto text-lg text-gray-700 mb-6 flex-grow">
                       Whether you want to walk a dog, build a kennel, or help tell their story, you belong here. Every moment you give is part of changing a life.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 mt-auto">
                        <CtaButton href="/contact?subject=Volunteer" className="bg-brand-yellow text-brand-text-primary hover:bg-brand-yellow-hover">
                            Contact Us to Volunteer
                        </CtaButton>
                         <CtaButton href="/dogs" className="bg-brand-secondary border-2 border-brand-secondary text-white hover:bg-brand-secondary-hover">
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