

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
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative container mx-auto px-6">
          <div className="content-bubble content-bubble-inverted max-w-4xl mx-auto" style={{background: 'rgba(0,0,0,0.3)'}}>
            <div className="p-6 md:p-8">
              <h1 className="text-4xl md:text-6xl font-black uppercase text-brand-primary text-shadow-strong">
                <span>Get Involved</span>
              </h1>
              <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-shadow-custom">
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

                <div className="content-bubble grid grid-cols-1 md:grid-cols-2 items-stretch mt-8">
                    <div className="h-full">
                        {mediaContent['hands_on_01'] && (
                            <EditableMedia
                                mediaKey="hands_on_01"
                                mediaUrl={mediaContent['hands_on_01']!}
                                alt="Caregiver walking with a sanctuary dog"
                                isEditMode={isEditMode}
                                onUpdate={onMediaUpdate}
                                className="w-full h-full object-cover min-h-[300px]"
                            />
                        )}
                    </div>
                    <div className="p-6 md:p-8 flex flex-col justify-center">
                      <h3 className="text-3xl font-bold text-brand-primary">Build a Bond</h3>
                      <p className="text-brand-text-secondary space-y-4 my-6 flex-grow">
                         Build a meaningful, long-term bond with one of our forever sanctuary animals. This is more than visiting—it’s becoming personally involved in the life of a specific animal.
                      </p>
                      <div className="flex flex-wrap gap-3 mt-auto">
                          <button onClick={() => navigate('/hands-on-dogs')} className="inline-block bg-brand-secondary text-white font-bold py-3 px-6 rounded-full transition duration-300 hover:bg-brand-secondary-hover">
                              Hands-On – Dogs
                          </button>
                           <button onClick={() => navigate('/horses#hands-on')} className="inline-block bg-brand-accent text-white font-bold py-3 px-6 rounded-full transition duration-300 hover:bg-brand-accent-hover">
                              Hands-On – Horses
                          </button>
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

      {/* Placeholder for Donate Section */}
       <section id="donate" className="py-16 md:py-20 bg-brand-bg-main">
            <div className="container mx-auto px-6 text-center max-w-4xl">
                 <div className="content-bubble">
                    <div className="p-6 md:p-8">
                        <PawIcon className="w-10 h-10 text-brand-primary mx-auto mb-4" />
                        <h2 className="text-3xl md:text-4xl font-bold text-brand-primary">Donate</h2>
                        <p className="text-lg text-gray-700 my-6">Our donation systems are being set up. Please check back soon for a secure way to contribute financially to our mission. For now, please consider supporting us through our wishlist or by volunteering your time.</p>
                         <CtaButton href="/contact" className="bg-brand-primary text-white hover:bg-brand-primary-hover">
                            Contact us for other ways to give
                        </CtaButton>
                    </div>
                </div>
            </div>
       </section>
    </div>
  );
};

export default GetInvolvedLandingPage;