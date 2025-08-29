import React from 'react';
import { MediaContent } from '../types.ts';
import EditableMedia from './EditableMedia.tsx';
import { useSafeNavigation } from '../contexts/NavigationContext.tsx';
import { PawIcon, CommunityIcon, HeartIcon, SparklesIcon } from './icons.tsx';

interface SectionProps {
  mediaContent: MediaContent;
  isEditMode: boolean;
  onMediaUpdate: (key: string, url: string) => void;
}

const CommunityEvents: React.FC<SectionProps> = ({ mediaContent, isEditMode, onMediaUpdate }) => {
    const { navigate } = useSafeNavigation();
    return (
        <section id="community" className="section-padding bg-gradient-to-br from-brand-bg-main to-brand-bg-subtle animate-on-scroll">
            <div className="max-content-width">
                {/* Section Header */}
                <div className="text-center mb-12 animate-on-scroll">
                    <h2 className="text-4xl md:text-5xl font-bold text-brand-primary mb-4">Our Community</h2>
                    <p className="text-lg text-brand-text-secondary max-w-2xl mx-auto">
                        Together, we create lasting change through collaboration, compassion, and shared purpose
                    </p>
                </div>

                {/* Enhanced Cards Layout */}
                <div className="compact-grid grid grid-cols-1 lg:grid-cols-3 items-stretch stagger-children">
                    {/* Community Outreach Card - Spans 2 columns */}
                    <div className="lg:col-span-2 animate-on-scroll">
                        <div className="group h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
                            <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                                <div className="relative overflow-hidden">
                                    {mediaContent['community_image'] && (
                                        <EditableMedia
                                            mediaKey="community_image"
                                            mediaUrl={mediaContent['community_image']!}
                                            alt="Community members with a rescued animal"
                                            isEditMode={isEditMode}
                                            onUpdate={onMediaUpdate}
                                            className="w-full h-full object-cover min-h-[350px] group-hover:scale-105 transition-transform duration-300"
                                        />
                                    )}
                                    {/* Overlay gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                                <div className="p-8 flex flex-col justify-center relative">
                                    {/* Background decoration */}
                                    <div className="absolute top-4 right-4 w-20 h-20 bg-brand-primary/5 rounded-full flex items-center justify-center">
                                        <CommunityIcon className="w-10 h-10 text-brand-primary/30" />
                                    </div>
                                    
                                    <div className="mb-6">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-12 h-12 bg-brand-primary rounded-xl flex items-center justify-center shadow-lg">
                                                <CommunityIcon className="w-6 h-6 text-white" />
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-bold text-brand-primary">Community Outreach</h3>
                                                <p className="text-sm text-brand-accent font-medium">Building bridges, changing lives</p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="space-y-4 text-brand-text-secondary mb-8 flex-grow">
                                        <p className="leading-relaxed">
                                            We believe in working together to create lasting change. We collaborate with communities, welfare groups, and local organisations that share our values.
                                        </p>
                                        
                                        {/* Partner Organizations */}
                                        <div className="bg-brand-bg-subtle/50 rounded-lg p-4 border-l-4 border-brand-accent">
                                            <p className="text-sm font-medium text-brand-text-primary mb-2">Our Trusted Partners:</p>
                                            <p className="text-xs text-brand-text-secondary leading-relaxed">
                                                Mdzananda Animal Clinic • Animal Welfare Society • African Tails • Honey's Garden • Just Dogs • Paws A While • SPCA • PDSA • Pit Pals
                                            </p>
                                        </div>
                                    </div>
                                    
                                    <button 
                                        onClick={() => navigate('/community')} 
                                        className="group/btn bg-gradient-to-r from-brand-yellow to-brand-accent text-brand-text-primary font-bold py-4 px-8 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center justify-center gap-2"
                                    >
                                        <span>Explore Our Community Work</span>
                                        <svg className="w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* A Note From Us Card */}
                    <div className="animate-on-scroll">
                        <div className="group h-full bg-gradient-to-br from-brand-primary to-brand-accent rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden relative">
                            {/* Background decorative elements */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full -ml-12 -mb-12"></div>
                            
                            <div className="relative p-8 h-full flex flex-col">
                                {/* Icon Header */}
                                <div className="mb-6">
                                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <HeartIcon className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-2">A Note From Us</h3>
                                    <div className="flex items-center gap-2 text-white/80">
                                        <SparklesIcon className="w-4 h-4" />
                                        <span className="text-sm font-medium">With gratitude & hope</span>
                                    </div>
                                </div>
                                
                                {/* Content */}
                                <div className="space-y-6 text-white/90 flex-grow">
                                    <p className="leading-relaxed text-base">
                                        Building a sanctuary from the ground up is a journey of passion, resilience, and community. Every fence post, every water trough, and every bag of feed represents a promise kept to an animal in need.
                                    </p>
                                    
                                    {/* Quote highlight */}
                                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border-l-4 border-white/30">
                                        <p className="font-semibold text-white italic text-lg">
                                            "Thank you for being part of our story. Together, we are creating a legacy of compassion."
                                        </p>
                                    </div>
                                </div>
                                
                                {/* Decorative bottom element */}
                                <div className="mt-8 flex items-center justify-center">
                                    <div className="flex gap-2">
                                        <div className="w-2 h-2 bg-white/40 rounded-full animate-pulse"></div>
                                        <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                                        <div className="w-2 h-2 bg-white/40 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                                    </div>
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