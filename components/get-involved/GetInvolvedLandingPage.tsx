

import React from 'react';
import { MediaContent } from '../../types.ts';
import EditableMedia from '../EditableMedia.tsx';
import CtaButton from '../CtaButton.tsx';
import VolunteerSection from './VolunteerSection.tsx';
import { useSafeNavigation } from '../../contexts/NavigationContext.tsx';
import { PawIcon } from '../icons.tsx';

// Note: Wishlist content is currently in the Dog's section.
// This could be moved to a shared component if a general wishlist is needed.
import WishlistSection from '../dogs/WishlistSection.tsx'; 

interface GetInvolvedLandingPageProps {
  mediaContent: MediaContent;
  isEditMode: boolean;
  onMediaUpdate: (key: string, url: string) => void;
}

const Hero: React.FC<GetInvolvedLandingPageProps> = (props) => (
    <section className="relative bg-sanctuary-dark text-white py-20 md:py-32 text-center">
        <div className="absolute inset-0">
          {props.mediaContent['final_cta_image'] && (
            <EditableMedia 
                mediaKey="final_cta_image" 
                mediaUrl={props.mediaContent['final_cta_image']!} 
                alt="Volunteers with sanctuary animals"
                className="w-full h-full object-cover" 
                isEditMode={props.isEditMode} 
                onUpdate={props.onMediaUpdate}
            />
          )}
        </div>
        <div style={{position: 'relative', maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
          <div style={{maxWidth: '64rem', margin: '0 auto', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            <div style={{padding: '3rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
              <h1 className="text-white" style={{textAlign: 'center', fontSize: '4rem', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '-0.025em', textShadow: '3px 3px 6px rgba(0,0,0,0.8), 1px 1px 3px rgba(0,0,0,0.6)'}}>
                Get Involved
              </h1>
              <p className="text-white" style={{textAlign: 'center', margin: '1rem auto 0 auto', fontSize: '1.25rem', lineHeight: '1.6', maxWidth: '48rem', textShadow: '2px 2px 4px rgba(0,0,0,0.8), 1px 1px 2px rgba(0,0,0,0.6)'}}>
                Your support is vital. Become part of their story.
              </p>
            </div>
          </div>
        </div>
    </section>
);

const HandsOnCareSection: React.FC<GetInvolvedLandingPageProps> = (props) => {
    const { mediaContent, isEditMode, onMediaUpdate } = props;
    const { navigate } = useSafeNavigation();
    return (
        <section id="hands-on-care" className="py-16 md:py-20 bg-brand-bg-main animate-on-scroll">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="content-bubble text-center">
                    <div className="p-6 md:p-8">
                      <PawIcon className="w-10 h-10 text-brand-primary mx-auto mb-4" />
                      <h2 className="text-3xl md:text-4xl font-bold text-brand-primary">Hands-On Care Programme</h2>
                      <p className="mt-2 text-lg text-gray-600">Form a profound bond without the commitment of ownership.</p>
                    </div>
                </div>

                <div className="content-bubble mt-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <div>
                            {mediaContent['hands_on_01'] && (
                                <EditableMedia
                                    mediaKey="hands_on_01"
                                    mediaUrl={mediaContent['hands_on_01']!}
                                    alt="Caregiver walking with a sanctuary dog"
                                    isEditMode={isEditMode}
                                    onUpdate={onMediaUpdate}
                                    className="w-full h-auto object-cover rounded-lg aspect-video"
                                />
                            )}
                        </div>
                        <div className="p-6 md:p-8 flex flex-col justify-center">
                            <h3 className="text-4xl font-bold text-brand-primary mb-6">Part-Owning Programme</h3>
                            <div className="text-lg text-brand-text-secondary space-y-6 leading-relaxed flex-grow">
                                <p>Our Hands-On Care programme is a unique part-owning experience that allows you to form a deep, personal connection with one of our dogs or horses.</p>
                                <p>You become a co-caregiver, sharing responsibility for their daily care, enrichment, and wellbeing while they remain safely in our sanctuary.</p>
                            </div>
                            <div className="flex flex-wrap gap-4 mt-8">
                                <button onClick={() => navigate('/hands-on-dogs')} className="bg-brand-secondary text-white font-bold py-4 px-8 rounded-full transition duration-300 hover:bg-brand-secondary-hover text-lg">
                                    Hands-On – Dogs
                                </button>
                                <button onClick={() => navigate('/horses#hands-on')} className="bg-brand-accent text-white font-bold py-4 px-8 rounded-full transition duration-300 hover:bg-brand-accent-hover text-lg">
                                    Hands-On – Horses
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

const GetInvolvedLandingPage: React.FC<GetInvolvedLandingPageProps> = (props) => {
  return (
    <div className="bg-brand-bg-main">
      <Hero {...props} />
      
      <VolunteerSection {...props} />
      <HandsOnCareSection {...props} />
      <WishlistSection {...props} />

      {/* Mobile Vet Clinic Section */}
      <section id="mobile-vet-clinic" className="py-16 md:py-20 bg-white animate-on-scroll">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="content-bubble text-center">
            <div className="p-6 md:p-8">
              <PawIcon className="w-10 h-10 text-brand-primary mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-brand-primary">Mobile Veterinary Clinic</h2>
              <p className="mt-2 text-lg text-gray-600">Supporting community health through accessible veterinary care.</p>
            </div>
          </div>

          <div className="content-bubble mt-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1">
                {props.mediaContent['community_vet_clinic'] && (
                  <EditableMedia
                    mediaKey="community_vet_clinic"
                    mediaUrl={props.mediaContent['community_vet_clinic']!}
                    alt="Mobile veterinary clinic in action"
                    isEditMode={props.isEditMode}
                    onUpdate={props.onMediaUpdate}
                    className="w-full h-auto object-cover rounded-lg aspect-video"
                  />
                )}
              </div>
              <div className="order-1 lg:order-2 p-6 md:p-8 flex flex-col justify-center">
                <h3 className="text-4xl font-bold text-brand-primary mb-6">Community Health</h3>
                <div className="text-lg text-brand-text-secondary leading-relaxed mb-8">
                  <p>Our mobile veterinary clinic brings essential veterinary services directly to underserved communities. We provide vaccinations, basic health checks, and emergency care to ensure all animals have access to proper healthcare, regardless of their owners' circumstances.</p>
                </div>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-brand-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-lg text-brand-text-secondary">Free vaccinations and health screenings</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-brand-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-lg text-brand-text-secondary">Emergency veterinary care</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-brand-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-lg text-brand-text-secondary">Community education programs</p>
                  </div>
                </div>
                <div>
                  <CtaButton href="/contact" className="bg-brand-accent text-white hover:bg-brand-accent-hover px-8 py-4 text-lg">
                    Support Our Mobile Clinic
                  </CtaButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donate Section */}
       <section id="donate" className="py-16 md:py-20 bg-brand-bg-main">
            <div className="container mx-auto px-6 text-center max-w-4xl">
                 <div className="content-bubble">
                    <div className="p-6 md:p-8">
                        <PawIcon className="w-10 h-10 text-brand-primary mx-auto mb-4" />
                        <h2 className="text-3xl md:text-4xl font-bold text-brand-primary">Donate</h2>
                        <p className="text-lg text-gray-700 my-6">Your financial support helps us rescue, rehabilitate, and care for animals in need. Every donation makes a direct impact on the lives we save.</p>
                         <CtaButton href="/donate" className="bg-brand-primary text-white hover:bg-brand-primary-hover">
                            Make a Donation
                        </CtaButton>
                    </div>
                </div>
            </div>
       </section>
    </div>
  );
};

export default GetInvolvedLandingPage;