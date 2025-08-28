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

const OutreachProgramSection: React.FC<SectionProps> = (props) => {
  return (
    <section id="outreach" className="py-16 md:py-20 bg-brand-bg-main">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="content-bubble text-center">
          <div className="p-6 md:p-8">
            <PawIcon className="w-10 h-10 text-brand-secondary mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-brand-secondary">Outreach Program</h2>
            <p className="mt-2 text-lg text-gray-600">Connecting Communities. Uplifting Lives.</p>
          </div>
        </div>

        <div className="content-bubble">
          <div className="p-6 md:p-8 space-y-4 text-lg text-gray-700">
            <p>At The Gem Project Sanctuary our Outreach Program is more than education. It is connection. We believe that every animal deserves a life of dignity and every person deserves the tools and knowledge to help create that world. Our outreach is rooted in compassion and action reaching beyond our sanctuary walls to uplift communities through awareness hands-on care and meaningful support.</p>
            {props.mediaContent['outreach_hero'] && (
                <EditableMedia
                    mediaKey="outreach_hero"
                    mediaUrl={props.mediaContent['outreach_hero']}
                    alt="Community outreach event with dogs and people."
                    isEditMode={props.isEditMode}
                    onUpdate={props.onMediaUpdate}
                    className="rounded-lg my-4"
                />
            )}
            <h3 className="text-2xl font-bold text-brand-secondary pt-4">Our Mission</h3>
            <ul className="list-disc list-inside space-y-2">
                <li>Raise awareness about compassionate responsible dog ownership</li>
                <li>Promote animal health and wellbeing through accessible services</li>
                <li>Reduce the number of stray neglected and abandoned animals</li>
                <li>Encourage sterilisation adoption and lifelong care</li>
                <li>Build strong lasting human-animal bonds within communities</li>
            </ul>
          </div>
        </div>

        <div className="content-bubble">
            <div className="p-6 md:p-8">
                <PawIcon className="w-10 h-10 text-brand-secondary mb-4" />
                <h3 className="text-3xl font-bold text-brand-secondary">Program Elements</h3>
                
                <div className="mt-8 space-y-8">
                    {/* 1. Community Education */}
                    <div>
                        <h4 className="text-2xl font-bold text-brand-secondary mb-3">1. Community Education Workshops</h4>
                        <p className="text-lg text-gray-700">We would like to host interactive workshops in schools community halls open spaces and at the sanctuary. These sessions are designed to empower attendees with knowledge and practical tools to care for their dogs with compassion.</p>
                         {props.mediaContent['outreach_education'] && (
                            <EditableMedia
                                mediaKey="outreach_education"
                                mediaUrl={props.mediaContent['outreach_education']}
                                alt="A community education workshop about dog care."
                                isEditMode={props.isEditMode}
                                onUpdate={props.onMediaUpdate}
                                className="rounded-lg my-4"
                            />
                        )}
                        <ul className="list-disc list-inside space-y-2 mt-4 text-gray-700 ml-4">
                            <li>Basic dog care: feeding grooming exercise</li>
                            <li>Understanding behaviour and safe interaction</li>
                            <li>Importance of vaccinations parasite prevention and hygiene</li>
                            <li>Why spaying and neutering matters</li>
                        </ul>
                    </div>

                    {/* 2. Mobile Wellness */}
                    <div>
                        <h4 className="text-2xl font-bold text-brand-secondary mb-3">2. Mobile Wellness Days</h4>
                        <p className="text-lg text-gray-700">In partnership with local veterinarians and sponsors we would like to bring essential services into under-resourced communities. These days are lifelines for dogs and families who cannot access regular veterinary care.</p>
                         {props.mediaContent['outreach_mobile_clinic'] && (
                            <EditableMedia
                                mediaKey="outreach_mobile_clinic"
                                mediaUrl={props.mediaContent['outreach_mobile_clinic']}
                                alt="Vet treating a dog at pop-up mobile clinic."
                                isEditMode={props.isEditMode}
                                onUpdate={props.onMediaUpdate}
                                className="rounded-lg my-4"
                            />
                        )}
                        <ul className="list-disc list-inside space-y-2 mt-4 text-gray-700 ml-4">
                            <li>Free or low-cost vaccinations deworming and tick treatments</li>
                            <li>Referrals and assistance for sterilisation</li>
                            <li>Grooming basic health checks and pet food support</li>
                        </ul>
                    </div>

                    {/* 3. Adoption Days */}
                    <div>
                        <h4 className="text-2xl font-bold text-brand-secondary mb-3">3. Adoption and Foster Awareness Days</h4>
                        <p className="text-lg text-gray-700">These events bring our sanctuary dogs into the spotlight sharing their stories and helping them find loving homes.</p>
                         {props.mediaContent['outreach_adoption_days'] && (
                            <EditableMedia
                                mediaKey="outreach_adoption_days"
                                mediaUrl={props.mediaContent['outreach_adoption_days']}
                                alt="An adoptable dog being showcased at an event."
                                isEditMode={props.isEditMode}
                                onUpdate={props.onMediaUpdate}
                                className="rounded-lg my-4"
                            />
                        )}
                        <ul className="list-disc list-inside space-y-2 mt-4 text-gray-700 ml-4">
                            <li>Showcase adoptable dogs</li>
                            <li>Share transformation stories</li>
                            <li>Recruit supporters</li>
                        </ul>
                    </div>
                    
                    {/* 4. Responsible Ownership */}
                    <div>
                        <h4 className="text-2xl font-bold text-brand-secondary mb-3">4. Responsible Dog Ownership Campaigns</h4>
                        <p className="text-lg text-gray-700">We use social media to promote responsible ownership. These campaigns are localised and multilingual reaching families where they are.</p>
                         {props.mediaContent['outreach_responsible_ownership'] && (
                            <EditableMedia
                                mediaKey="outreach_responsible_ownership"
                                mediaUrl={props.mediaContent['outreach_responsible_ownership']}
                                alt="Social media graphic for responsible dog ownership."
                                isEditMode={props.isEditMode}
                                onUpdate={props.onMediaUpdate}
                                className="rounded-lg my-4"
                            />
                        )}
                        <ul className="list-disc list-inside space-y-2 mt-4 text-gray-700 ml-4">
                            <li>Leash laws and proper identification</li>
                            <li>Cleaning up after dogs</li>
                            <li>Showing kindness and consistency in care</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
        
        <div className="content-bubble">
            <div className="p-6 md:p-8 grid md:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-2xl font-bold text-brand-secondary mb-4">Who We Serve</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Families and dog owners in surrounding communities</li>
                        <li>Youth groups and local schools</li>
                        <li>Individuals caring for dogs with limited access to vet care</li>
                        <li>Animal lovers who want to learn more</li>
                        <li>Other organisations seeking support for overflow cases</li>
                    </ul>
                </div>
                 <div>
                    <h3 className="text-2xl font-bold text-brand-secondary mb-4">What Makes It Work</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Deep community trust built through consistency</li>
                        <li>Partnerships with schools veterinarians and trainers</li>
                        <li>Skilled and committed volunteers</li>
                        <li>Tailored educational materials available in multiple languages</li>
                        <li>Donations and sponsorships that fund vital work</li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="content-bubble mt-8 bg-brand-primary text-white">
          <div className="p-8 text-center">
            <PawIcon className="w-10 h-10 text-white mx-auto mb-4" />
            <h3 className="text-3xl font-bold mb-4 text-brand-secondary">Get Involved</h3>
            <p className="text-gray-200 mb-6 max-w-2xl mx-auto">Our outreach work is made possible through collective effort. You can help us bring dignity health and hope to animals and the people who love them. Whether through sponsorship supplies volunteering or education partnerships your support makes a difference.</p>
            <div className="flex flex-wrap justify-center gap-4">
                <CtaButton href="/contact?subject=OutreachSupport" className="bg-brand-secondary hover:bg-brand-secondary-hover text-white">Support Our Outreach</CtaButton>
                <CtaButton href="/get-involved#volunteer" className="border-2 border-white text-white hover:bg-white hover:text-brand-text-primary">Volunteer</CtaButton>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default OutreachProgramSection;
