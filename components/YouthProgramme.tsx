import React from 'react';
import { MediaContent } from '../types.ts';
import EditableMedia from './EditableMedia.tsx';
import { useSafeNavigation } from '../contexts/NavigationContext.tsx';

interface SectionProps {
  mediaContent: MediaContent;
  isEditMode: boolean;
  onMediaUpdate: (key: string, url: string) => void;
}

const YouthProgramme: React.FC<SectionProps> = ({ mediaContent, isEditMode, onMediaUpdate }) => {
    const { navigate } = useSafeNavigation();
    return (
        <section id="youth" className="compact-section bg-brand-bg-subtle animate-on-scroll">
            <div className="max-content-width">
                 <div className="max-w-5xl mx-auto stagger-children">
                    {/* Youth Apprenticeship Programme */}
                    <div className="content-bubble grid grid-cols-1 md:grid-cols-2 items-stretch animate-on-scroll">
                        <div className="p-6 md:p-8 flex flex-col justify-center">
                          <h3 className="text-3xl font-bold text-brand-primary">Youth Apprenticeship</h3>
                          <p className="text-brand-text-secondary space-y-4 my-6 flex-grow">
                              Our pilot programme offers local young people the chance to work with our team and experience what it means to care for animals with empathy and respect.
                          </p>
                          <button onClick={() => navigate('/youth')} className="inline-block self-start bg-brand-yellow text-brand-text-primary font-bold py-3 px-8 rounded-full transition duration-300 hover:bg-brand-yellow-hover mt-auto">
                              Read More
                          </button>
                        </div>
                        {mediaContent['youth_apprenticeship_01'] && (
                            <EditableMedia
                                mediaKey="youth_apprenticeship_01"
                                mediaUrl={mediaContent['youth_apprenticeship_01']!}
                                alt="Teenager working with a dog"
                                isEditMode={isEditMode}
                                onUpdate={onMediaUpdate}
                                className="w-full h-full"
                            />
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default YouthProgramme;