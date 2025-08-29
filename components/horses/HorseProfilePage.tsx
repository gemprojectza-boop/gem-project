import React from 'react';
import { sampleHorses } from '../../data/horses.ts';
import { MediaContent } from '../../types.ts';
import EditableMedia from '../EditableMedia.tsx';
import { SafeLink } from '../SafeLink.tsx';
import { MailIcon } from '../icons.tsx';
import CtaButton from '../CtaButton.tsx';

interface HorseProfilePageProps {
    horseId: string;
    mediaContent: MediaContent;
    isEditMode: boolean;
    onMediaUpdate: (key: string, url: string) => void;
}

const InfoTable: React.FC<{ title: string; data: Record<string, string> }> = ({ title, data }) => (
    <div className="bg-brand-surface p-6 rounded-lg shadow-md border">
        <h3 className="text-xl font-bold mb-4" style={{color: '#16a34a !important'}}>{title}</h3>
        <dl className="space-y-2">
            {Object.entries(data).map(([key, value]) => (
                <div key={key} className="flex justify-between text-sm">
                    <dt className="font-semibold text-gray-600 capitalize">{key}:</dt>
                    <dd className="text-brand-text-primary text-right">{value}</dd>
                </div>
            ))}
        </dl>
    </div>
);

const HorseProfilePage: React.FC<HorseProfilePageProps> = ({ horseId, mediaContent, isEditMode, onMediaUpdate }) => {
    const horse = sampleHorses.find(h => h.id === horseId);

    if (!horse) {
        return (
            <div className="text-center py-20">
                <h1 className="text-2xl font-bold">Horse not found</h1>
                <SafeLink href="/horses" className="text-brand-primary hover:underline mt-4 inline-block">
                    Back to all horses
                </SafeLink>
            </div>
        );
    }

    const mainPhotoUrl = mediaContent[horse.media.mainPhotoKey];
    const storyPhotoUrl = mediaContent[horse.media.storyPhotoKey];
    const videoUrl = mediaContent[horse.media.videoKey];

    const ctaBlock = horse.status === 'Forever Sanctuary' ? (
        <>
            <h3 className="text-xl font-bold text-center mb-4" style={{color: '#16a34a !important'}}>Support {horse.name}'s Journey</h3>
            <p className="text-center text-brand-text-secondary mb-6 text-sm">{horse.petInfo.gender === 'Mare' ? 'She\'s' : 'He\'s'} found a forever home with us, but {horse.petInfo.gender === 'Mare' ? 'she\'d' : 'he\'d'} love your support.</p>
            <div className="space-y-3">
                <CtaButton href="/horses#sponsor" className="w-full bg-brand-accent hover:bg-brand-accent-hover text-white">
                    Sponsor {horse.name}
                </CtaButton>
                <CtaButton href="/horses#hands-on" className="w-full bg-brand-accent hover:bg-brand-accent-hover text-white">
                    Join Hands-On Care
                </CtaButton>
            </div>
        </>
    ) : (
         <>
            <h3 className="text-xl font-bold text-center mb-4" style={{color: '#16a34a !important'}}>Want to meet {horse.name}?</h3>
            <p className="text-center text-brand-text-secondary mb-6 text-sm">
                {horse.status === 'Future Adoptable'
                    ? "He's preparing for his new life. Contact us to learn more about his journey."
                    : horse.petInfo.gender === 'Mare' ? "She's ready for a new chapter — could it be with you?" : "He's ready for a new chapter — could it be with you?"
                }
            </p>
            <CtaButton href={`/contact?subject=Learn more about ${horse.name}`} className="w-full bg-brand-accent hover:bg-brand-accent-hover text-white">
                <MailIcon className="w-5 h-5 inline-block mr-2"/>
                {horse.status === 'Future Adoptable' ? `Learn More About ${horse.name}` : 'Enquire About Adoption'}
            </CtaButton>
        </>
    );

    return (
        <div className="bg-brand-bg-subtle font-sans">
            {/* Hero Section */}
            <section className="relative h-[60vh] md:h-[70vh] bg-brand-text-primary flex items-center justify-center text-white">
                {mainPhotoUrl && (
                    <EditableMedia
                        mediaKey={horse.media.mainPhotoKey}
                        mediaUrl={mainPhotoUrl}
                        alt={`Photo of ${horse.name}`}
                        className="absolute top-0 left-0 w-full h-full object-cover"
                        isEditMode={isEditMode}
                        onUpdate={onMediaUpdate}
                        loading="eager"
                    />
                )}
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="relative z-10 text-center p-4">
                    <p className="text-lg text-gray-200 font-semibold">Meet</p>
                    <h1 className="text-6xl md:text-8xl font-black uppercase text-brand-primary text-shadow-strong">{horse.name}</h1>
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
                                    mediaKey={horse.media.storyPhotoKey}
                                    mediaUrl={storyPhotoUrl}
                                    alt={`Candid photo of ${horse.name}`}
                                    className="rounded-t-lg aspect-video object-cover"
                                    isEditMode={isEditMode}
                                    onUpdate={onMediaUpdate}
                                />
                            )}
                            <div className="p-6 md:p-8">
                                <h2 className="text-3xl font-bold mb-3" style={{color: '#16a34a !important'}}>{horse.story.title}</h2>
                                <p className="text-brand-text-secondary leading-relaxed">{horse.story.text}</p>
                            </div>
                        </div>

                        {/* Personality & Traits */}
                        <div className="content-bubble">
                            <div className="p-6 md:p-8">
                                <h2 className="text-3xl font-bold mb-3" style={{color: '#16a34a !important'}}>{horse.personality.title}</h2>
                                <p className="text-brand-text-secondary leading-relaxed mb-6">{horse.personality.text}</p>

                                <h3 className="text-2xl font-bold mb-3" style={{color: '#16a34a !important'}}>{horse.specialTrait.title}</h3>
                                <ul className="space-y-2">
                                    {horse.specialTrait.points.map((point, index) => (
                                        <li key={index} className="flex items-start">
                                            <span className="text-brand-accent mr-3 mt-1">🐴</span>
                                            <span className="text-brand-text-secondary">{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="content-bubble">
                            <div className="p-6 md:p-8">
                                <h2 className="text-3xl font-bold mb-3" style={{color: '#16a34a !important'}}>{horse.loveReason.title}</h2>
                                <p className="text-brand-text-secondary leading-relaxed">{horse.loveReason.text}</p>
                            </div>
                        </div>
                    </div>


                    {/* Right Column (Info Cards) */}
                    <div className="lg:col-span-1 space-y-8">
                        <InfoTable title="Pet Info" data={horse.petInfo} />
                        <div className="bg-brand-surface p-6 rounded-lg shadow-md border">
                            <h3 className="text-xl font-bold mb-4 text-center" style={{color: '#16a34a !important'}}>Ideal Home</h3>
                            <p className="text-brand-text-secondary">{horse.idealHome}</p>
                        </div>
                         <div className="sticky top-28 bg-brand-surface p-6 rounded-lg shadow-lg border border-brand-primary">
                            {ctaBlock}
                        </div>
                    </div>
                </div>

                {/* Additional Media */}
                 <div className="my-12">
                     <h2 className="text-3xl font-bold mb-6 text-center" style={{color: '#16a34a !important'}}>More Photos & Videos of {horse.name}</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {horse.media.galleryKeys.map(key => {
                            const url = mediaContent[key];
                            return url ? <EditableMedia key={key} mediaKey={key} mediaUrl={url} alt={`Gallery photo of ${horse.name}`} isEditMode={isEditMode} onUpdate={onMediaUpdate} className="aspect-video object-cover"/> : null
                        })}
                    </div>
                    {videoUrl && (
                         <div className="mt-8">
                            <EditableMedia mediaKey={horse.media.videoKey} mediaUrl={videoUrl} alt={`Video of ${horse.name}`} isVideo isEditMode={isEditMode} onUpdate={onMediaUpdate} className="w-full aspect-video" videoAutoPlay={true}/>
                        </div>
                    )}
                </div>

            </main>
        </div>
    );
};

export default HorseProfilePage;