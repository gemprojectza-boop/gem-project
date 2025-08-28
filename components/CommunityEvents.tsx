import React from 'react';
import { MediaContent } from '../types.ts';
import EditableMedia from './EditableMedia.tsx';
import { useSafeNavigation } from '../contexts/NavigationContext.tsx';
import { PawIcon } from './icons.tsx';

interface SectionProps {
  mediaContent: MediaContent;
  isEditMode: boolean;
  onMediaUpdate: (key: string, url: string) => void;
}

const CommunityEvents: React.FC<SectionProps> = ({ mediaContent, isEditMode, onMediaUpdate }) => {
    const { navigate } = useSafeNavigation();
    return (
        <section id="community" className="py-20 md:py-24 bg-brand-bg-main animate-on-scroll">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch stagger-children">
                    <div className="content-bubble grid grid-cols-1 md:grid-cols-2 items-stretch animate-on-scroll">
                         {mediaContent['community_image'] && (
                            <EditableMedia
                                mediaKey="community_image"
                                mediaUrl={mediaContent['community_image']!}
                                alt="Community members with a rescued animal"
                                isEditMode={isEditMode}
                                onUpdate={onMediaUpdate}
                                className="w-full h-full object-cover min-h-[300px]"
                            />
                        )}
                        <div className="p-6 md:p-8 flex flex-col justify-center">
                            <PawIcon className="w-10 h-10 text-brand-primary mb-4 icon-interactive" />
                            <h2 className="text-3xl font-bold text-brand-primary">Community Outreach</h2>
                            <div className="space-y-4 text-brand-text-secondary my-6">
                                <p>We believe in working together to create lasting change. We collaborate with communities, welfare groups, and local organisations that share our values.</p>
                                <p className="text-sm italic">Mdzananda Animal Clinic, Animal Welfare Society, African Tails, Honey’s Garden, Just Dogs, Paws A While, SPCA, PDSA, Pit Pals, and more.</p>
                            </div>
                            <div className="flex flex-wrap gap-3 mt-auto">
                                 <button onClick={() => navigate('/community')} className="inline-block bg-brand-yellow text-brand-text-primary font-bold py-3 px-8 rounded-full transition duration-300 hover:bg-brand-yellow-hover">
                                    Our Community Work
                                </button>
                            </div>
                        </div>
                    </div>
                     <div className="animate-on-scroll">
                        <div className="content-bubble h-full flex flex-col">
                            <div className="p-6 md:p-8 flex flex-col flex-grow justify-center">
                             <PawIcon className="w-10 h-10 text-brand-primary mb-4 icon-interactive" />
                             <h2 className="text-3xl font-bold text-brand-primary">A Note From Us</h2>
                            <div className="space-y-4 text-brand-text-secondary my-8">
                                <p>Building a sanctuary from the ground up is a journey of passion, resilience, and community. Every fence post, every water trough, and every bag of feed represents a promise kept to an animal in need.</p>
                                <p className="font-semibold text-brand-text-primary">Thank you for being part of our story. Together, we are creating a legacy of compassion.</p>
                            </div>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CommunityEvents;