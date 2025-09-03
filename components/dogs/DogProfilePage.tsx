
import React from 'react';
import { sampleDogs } from '../../data/dogs.ts';
import { MediaContent } from '../../types.ts';
import EditableMedia from '../EditableMedia.tsx';
import { SafeLink } from '../SafeLink.tsx';
import { MailIcon, PawIcon } from '../icons.tsx';
import CtaButton from '../CtaButton.tsx';

interface DogProfilePageProps {
    dogId: string;
    mediaContent: MediaContent;
    isEditMode: boolean;
    onMediaUpdate: (key: string, url: string) => void;
}

const InfoTable: React.FC<{ title: string; data: Record<string, string> }> = ({ title, data }) => (
    <div className="bg-brand-surface p-6 rounded-lg shadow-md border">
        <PawIcon className="w-8 h-8 text-brand-secondary mb-2" />
        <h3 className="text-xl font-bold text-brand-secondary mb-4">{title}</h3>
        <dl className="space-y-2">
            {Object.entries(data).map(([key, value]) => (
                <div key={key} className="flex justify-between text-sm">
                    <dt className="font-semibold text-gray-600 capitalize">{key}:</dt>
                    <dd className="text-brand-text-primary">{value}</dd>
                </div>
            ))}
        </dl>
    </div>
);

const DogProfilePage: React.FC<DogProfilePageProps> = ({ dogId, mediaContent, isEditMode, onMediaUpdate }) => {
    const dog = sampleDogs.find(d => d.id === dogId);

    if (!dog) {
        return (
            <div className="text-center py-20">
                <h1 className="text-2xl font-bold">Dog not found</h1>
                <SafeLink href="/dogs#adoption" className="text-brand-primary hover:underline mt-4 inline-block">
                    Back to all adoptable dogs
                </SafeLink>
            </div>
        );
    }

    const mainPhotoUrl = mediaContent[dog.media.mainPhotoKey];
    const storyPhotoUrl = mediaContent[dog.media.storyPhotoKey];
    const videoUrl = mediaContent[dog.media.videoKey];

    const ctaBlock = dog.status === 'Forever Sanctuary' ? (
        <>
            <PawIcon className="w-8 h-8 text-brand-secondary mx-auto mb-2" />
            <h3 className="text-xl font-bold text-center text-brand-secondary mb-4">Support {dog.name}'s Journey</h3>
            <p className="text-center text-brand-text-secondary mb-6 text-sm">{dog.petInfo.gender === 'Female' ? 'She\'s' : 'He\'s'} found a forever home with us, but {dog.petInfo.gender === 'Female' ? 'she\'d' : 'he\'d'} love your support.</p>
            <div className="space-y-3">
                <CtaButton href="/dogs/sponsorship" className="w-full bg-brand-yellow hover:bg-brand-yellow-hover text-brand-text-primary">
                    Sponsor {dog.name}
                </CtaButton>
                <CtaButton href="/get-involved#hands-on-care" className="w-full bg-brand-secondary hover:bg-brand-secondary-hover text-white">
                    Join Hands-On Care
                </CtaButton>
            </div>
        </>
    ) : (
         <>
            <PawIcon className="w-8 h-8 text-brand-secondary mx-auto mb-2" />
            <h3 className="text-xl font-bold text-center text-brand-secondary mb-4">Want to meet {dog.name}?</h3>
            <p className="text-center text-brand-text-secondary mb-6 text-sm">{dog.petInfo.gender === 'Female' ? 'She\'s' : 'He\'s'} ready for a new chapter — could it be with you?</p>
            <CtaButton href={`/contact?subject=Meet ${dog.name}`} className="w-full bg-brand-secondary hover:bg-brand-secondary-hover text-white">
                <MailIcon className="w-5 h-5 inline-block mr-2"/>
                Get in Touch to Meet Me
            </CtaButton>
        </>
    );

    return (
        <div className="bg-brand-bg-subtle font-sans">
            {/* Hero Section */}
            <section className="relative h-[60vh] md:h-[70vh] bg-brand-text-primary flex items-center justify-center text-white">
                {mainPhotoUrl && (
                    <EditableMedia
                        mediaKey={dog.media.mainPhotoKey}
                        mediaUrl={mainPhotoUrl}
                        alt={`Photo of ${dog.name}`}
                        className="absolute top-0 left-0 w-full h-full object-cover"
                        isEditMode={isEditMode}
                        onUpdate={onMediaUpdate}
                        loading="eager"
                    />
                )}
                <div className="relative z-10 text-center p-4">
                    <p className="text-lg text-white font-semibold" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.8), 1px 1px 2px rgba(0,0,0,0.6)'}}>Meet</p>
                    <h1 className="text-6xl md:text-8xl font-black uppercase text-white" style={{textShadow: '3px 3px 6px rgba(0,0,0,0.8), 1px 1px 3px rgba(0,0,0,0.6)'}}>{dog.name}</h1>
                </div>
            </section>

            {/* Main Content */}
            <main className="container mx-auto p-4 md:p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column (Main Details) */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Story Section */}
                        <div className="content-bubble grid grid-cols-1">
                            {storyPhotoUrl && (
                                <EditableMedia
                                    mediaKey={dog.media.storyPhotoKey}
                                    mediaUrl={storyPhotoUrl}
                                    alt={`Candid photo of ${dog.name}`}
                                    className="rounded-t-lg aspect-video object-cover"
                                    isEditMode={isEditMode}
                                    onUpdate={onMediaUpdate}
                                />
                            )}
                            <div className="p-6 md:p-8">
                                <PawIcon className="w-10 h-10 text-brand-secondary mb-3" />
                                <h2 className="text-3xl font-bold text-brand-secondary mb-3">{dog.story.title}</h2>
                                <p className="text-brand-text-secondary leading-relaxed">{dog.story.text}</p>
                            </div>
                        </div>

                        {/* Personality & Traits */}
                        <div className="content-bubble">
                            <div className="p-6 md:p-8">
                                <PawIcon className="w-10 h-10 text-brand-secondary mb-3" />
                                <h2 className="text-3xl font-bold text-brand-secondary mb-3">{dog.personality.title}</h2>
                                <p className="text-brand-text-secondary leading-relaxed mb-6">{dog.personality.text}</p>

                                <h3 className="text-2xl font-bold text-brand-secondary mb-3">{dog.specialTrait.title}</h3>
                                <ul className="space-y-2">
                                    {dog.specialTrait.points.map((point, index) => (
                                        <li key={index} className="flex items-start">
                                            <span className="text-brand-accent mr-3 mt-1">🐾</span>
                                            <span className="text-brand-text-secondary">{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="content-bubble">
                            <div className="p-6 md:p-8">
                                <PawIcon className="w-10 h-10 text-brand-secondary mb-3" />
                                <h2 className="text-3xl font-bold text-brand-secondary mb-3">{dog.loveReason.title}</h2>
                                <p className="text-brand-text-secondary leading-relaxed">{dog.loveReason.text}</p>
                            </div>
                        </div>
                    </div>


                    {/* Right Column (Info Cards) */}
                    <div className="lg:col-span-1 space-y-8">
                        <InfoTable title="Pet Info" data={dog.petInfo} />
                        {dog.status !== 'Forever Sanctuary' && (
                            <div className="bg-brand-surface p-6 rounded-lg shadow-md border">
                                <PawIcon className="w-8 h-8 text-brand-secondary mb-2" />
                                <h3 className="text-xl font-bold text-brand-secondary mb-4">Ideal Home</h3>
                                <p className="text-brand-text-secondary">{dog.idealHome}</p>
                            </div>
                        )}
                         <div className="sticky top-28 bg-brand-surface p-6 rounded-lg shadow-lg border border-brand-primary">
                            {ctaBlock}
                        </div>
                    </div>
                </div>

                {/* Additional Media */}
                 <div className="my-12">
                     <PawIcon className="w-10 h-10 text-brand-secondary mx-auto mb-4" />
                     <h2 className="text-3xl font-bold text-brand-secondary mb-6 text-center">More Photos of {dog.name}</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {dog.media.galleryKeys.map(key => {
                            const url = mediaContent[key];
                            return url ? (
                                <div key={key} className="w-32 h-24 md:w-40 md:h-30 lg:w-48 lg:h-36">
                                    <EditableMedia 
                                        mediaKey={key} 
                                        mediaUrl={url} 
                                        alt={`Gallery photo of ${dog.name}`} 
                                        isEditMode={isEditMode} 
                                        onUpdate={onMediaUpdate} 
                                        className="w-full h-full object-contain rounded-lg"
                                    />
                                </div>
                            ) : null
                        })}
                    </div>
                    {videoUrl && (
                         <div className="mt-8">
                            <EditableMedia mediaKey={dog.media.videoKey} mediaUrl={videoUrl} alt={`Video of ${dog.name}`} isVideo isEditMode={isEditMode} onUpdate={onMediaUpdate} className="w-full aspect-video" videoAutoPlay={true}/>
                        </div>
                    )}
                </div>

            </main>
        </div>
    );
};

export default DogProfilePage;
