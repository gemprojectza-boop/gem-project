
import React, { useState } from 'react';
import { MediaContent } from '../types.ts';
import { PageHero } from './PageComponents.tsx';
import CtaButton from './CtaButton.tsx';
import EditableMedia from './EditableMedia.tsx';
import Lightbox, { LightboxImage } from './Lightbox.tsx';
import { FacebookIcon, InstagramIcon, PawIcon } from './icons.tsx';

interface GalleryPageProps {
  mediaContent: MediaContent;
  isEditMode: boolean;
  onMediaUpdate: (key: string, url: string) => void;
}

type MediaItem = {
    mediaKey: string;
    type: 'image' | 'video';
    caption: string;
}

const galleryData: Record<string, { title: string; items: MediaItem[]; titleColorClass?: string }> = {
    dogs: {
        title: "Our Dogs",
        titleColorClass: "text-brand-secondary",
        items: [
            { mediaKey: 'gallery_dog_1', type: 'image', caption: 'Honey enjoying her first ever beach walk.' },
            { mediaKey: 'gallery_dog_2', type: 'image', caption: 'Sanctuary dogs playing together in the open run.' },
            { mediaKey: 'gallery_dog_3', type: 'image', caption: 'Queenie with her pups, safe at last.' },
            { mediaKey: 'gallery_dog_video', type: 'video', caption: 'A day out at the park for enrichment.' },
            { mediaKey: 'gallery_dog_4', type: 'image', caption: 'Quiet moments and gentle cuddles.' },
            { mediaKey: 'gallery_dog_5', type: 'image', caption: 'Grooming time with our dedicated volunteers.' },
            { mediaKey: 'gallery_dog_6', type: 'image', caption: 'Alex looking handsome and happy.' },
        ],
    },
    horses: {
        title: "Our Horses",
        items: [
            { mediaKey: 'gallery_horse_1', type: 'image', caption: 'Bonding through grooming and care.' },
            { mediaKey: 'gallery_horse_2', type: 'image', caption: 'Freedom and peace in the upper paddocks.' },
            { mediaKey: 'gallery_horse_3', type: 'image', caption: 'Charlie receiving a wellness check.' },
            { mediaKey: 'gallery_horse_video', type: 'video', caption: 'Gentle training session in the round pen.' },
            { mediaKey: 'gallery_horse_4', type: 'image', caption: 'Spirit, our resilient rescue.' },
            { mediaKey: 'gallery_horse_5', type: 'image', caption: 'Daily health checks are part of our routine.' },
            { mediaKey: 'gallery_horse_6', type: 'image', caption: 'Titan enjoying the sunshine.' },
        ],
    },
    community: {
        title: "Community and Youth",
        items: [
            { mediaKey: 'gallery_community_1', type: 'image', caption: 'Young animal advocates in training.' },
            { mediaKey: 'gallery_community_2', type: 'image', caption: 'Volunteers are the heart of our sanctuary.' },
            { mediaKey: 'gallery_community_3', type: 'image', caption: 'Helping hands during feed time.' },
        ],
    },
    vet_clinic: {
        title: "Mobile Vet Clinic",
        items: [
            { mediaKey: 'gallery_vet_1', type: 'image', caption: 'Bringing help directly to communities in need.' },
            { mediaKey: 'gallery_vet_2', type: 'image', caption: 'Helping a dog in crisis with on-site care.' },
        ],
    },
    sanctuary_life: {
        title: "Around the Sanctuary",
        items: [
            { mediaKey: 'gallery_sanctuary_1', type: 'image', caption: 'A quiet morning moment over the paddocks.' },
            { mediaKey: 'gallery_sanctuary_2', type: 'image', caption: 'Lunchtime in the horse yard.' },
            { mediaKey: 'gallery_sanctuary_3', type: 'image', caption: 'Nap time is a serious business here.' },
        ],
    }
};

const GallerySection: React.FC<GalleryPageProps & {
    title: string;
    items: MediaItem[];
    onImageClick: (images: LightboxImage[], startIndex: number) => void;
    titleColorClass?: string;
}> = ({ title, items, onImageClick, titleColorClass, ...props }) => {
    
    const imageItems = items
        .map((item, index) => ({ ...item, originalIndex: index }))
        .filter(item => item.type === 'image');
    
    return (
        <section className="py-12">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="content-bubble">
                    <div className="p-6 md:p-8">
                        <PawIcon className={`w-10 h-10 ${titleColorClass || 'text-brand-primary'} mb-4`} />
                        <h2 className={`text-3xl font-bold ${titleColorClass || 'text-brand-primary'} mb-6`}>{title}</h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {items.map((item, index) => {
                                const url = props.mediaContent[item.mediaKey];
                                if (!url) return null;

                                const handleItemClick = () => {
                                    const clickedImageIndex = imageItems.findIndex(img => img.originalIndex === index);
                                    if(clickedImageIndex !== -1) {
                                      const lightboxImages = imageItems.map(imgItem => ({
                                          src: props.mediaContent[imgItem.mediaKey]!,
                                          caption: imgItem.caption,
                                      }));
                                      onImageClick(lightboxImages, clickedImageIndex);
                                    }
                                };
                                
                                return (
                                    <div key={item.mediaKey} className="group relative rounded-lg overflow-hidden w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 content-bubble" style={{margin: 0}}>
                                        <EditableMedia
                                            mediaKey={item.mediaKey}
                                            mediaUrl={url}
                                            alt={item.caption}
                                            isVideo={item.type === 'video'}
                                            videoAutoPlay={false}
                                            isEditMode={props.isEditMode}
                                            onUpdate={props.onMediaUpdate}
                                            className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                                        />
                                        <div 
                                            onClick={item.type === 'image' ? handleItemClick : undefined} 
                                            className={`absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4 ${item.type === 'image' ? 'cursor-pointer' : ''}`}
                                        >
                                            <p className="text-white text-sm">{item.caption}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};


const GalleryPage: React.FC<GalleryPageProps> = (props) => {
    const [lightbox, setLightbox] = useState<{ images: LightboxImage[]; startIndex: number } | null>(null);

    const openLightbox = (images: LightboxImage[], startIndex: number) => {
        setLightbox({ images, startIndex });
    };

  return (
    <div className="bg-brand-bg-main">
        {lightbox && (
            <Lightbox 
                images={lightbox.images}
                startIndex={lightbox.startIndex}
                onClose={() => setLightbox(null)}
            />
        )}
      <PageHero
        title="Moments That Matter"
        subtitle="A glimpse into the love, care, and second chances that define life at the sanctuary."
        mediaKey="gallery_hero"
        alt="A horse being gently groomed in the afternoon sun"
        {...props}
      />
        
        <div className="divide-y-8 divide-brand-bg-main">
            {Object.values(galleryData).map(section => (
                <GallerySection key={section.title} {...section} {...props} onImageClick={openLightbox} />
            ))}

             {/* Special Moments and Events */}
            <section className="py-12 bg-brand-bg-subtle">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="content-bubble">
                        <div className="p-6 md:p-8">
                            <PawIcon className="w-10 h-10 text-brand-secondary mb-4" />
                            <h2 className="text-3xl font-bold text-brand-secondary mb-6">Featured Transformation: Bella's Journey</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                                <div className="md:col-span-1 grid grid-cols-2 gap-4">
                                    <div className="text-center">
                                        <EditableMedia mediaKey="gallery_bella_before" mediaUrl={props.mediaContent.gallery_bella_before!} alt="Bella before her recovery" {...props} className="aspect-square object-cover rounded-lg" />
                                        <p className="mt-2 font-semibold text-gray-600">Before</p>
                                    </div>
                                    <div className="text-center">
                                        <EditableMedia mediaKey="gallery_bella_after" mediaUrl={props.mediaContent.gallery_bella_after!} alt="Bella after her recovery" {...props} className="aspect-square object-cover rounded-lg" />
                                        <p className="mt-2 font-semibold text-brand-accent">After</p>
                                    </div>
                                </div>
                                <div className="md:col-span-2 text-lg text-gray-700 space-y-4">
                                    <p>Bella arrived scared and emaciated, her coat dull and her spirit nearly broken. She had never known a kind hand or a full meal. With months of dedicated veterinary care, proper nutrition, and patient, gentle handling, she began to blossom.</p>
                                    <p>Today, Bella is a picture of health and happiness. Her story is a testament to the resilience of animals and the power of compassionate care. She reminds us every day why we do what we do.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        
        <section className="py-20 bg-brand-primary">
            <div className="container mx-auto px-6 text-center text-white">
                <PawIcon className="w-10 h-10 text-white mx-auto mb-4" />
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Want to See More?</h2>
                <p className="max-w-2xl mx-auto text-lg text-gray-200 mb-8">
                    Join us on our journey as we capture more stories of love and healing. Follow our social media for daily updates.
                </p>
                <div className="flex justify-center items-center gap-8">
                   <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-white hover:text-brand-primary-light transition-colors"><FacebookIcon className="w-10 h-10"/></a>
                   <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white hover:text-brand-primary-light transition-colors"><InstagramIcon className="w-10 h-10"/></a>
                </div>
            </div>
      </section>
    </div>
  );
};

export default GalleryPage;
