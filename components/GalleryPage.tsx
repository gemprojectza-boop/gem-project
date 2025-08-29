
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

const galleryData: Record<string, { title: string; items: MediaItem[]; titleColorClass?: string; description?: string }> = {
    dogs: {
        title: "Our Amazing Dogs",
        titleColorClass: "text-brand-secondary",
        description: "From playful pups to gentle seniors, every dog has a story worth celebrating.",
        items: [
            { mediaKey: 'dogs_hero_banner', type: 'image', caption: 'Happy dogs in their safe haven at the sanctuary.' },
            { mediaKey: 'dogs_intro', type: 'image', caption: 'Hopeful eyes looking toward a brighter future.' },
            { mediaKey: 'forever_dogs_hero', type: 'image', caption: 'Forever sanctuary dogs living their best lives.' },
            { mediaKey: 'forever_dogs_day_in_life', type: 'image', caption: 'A peaceful moment in the life of our sanctuary dogs.' },
            { mediaKey: 'gallery_dog_1', type: 'image', caption: 'Honey enjoying her first ever beach walk.' },
            { mediaKey: 'gallery_dog_2', type: 'image', caption: 'Sanctuary dogs playing together in the open run.' },
            { mediaKey: 'gallery_dog_3', type: 'image', caption: 'Queenie with her pups, safe at last.' },
            { mediaKey: 'gallery_dog_video', type: 'video', caption: 'A day out at the park for enrichment.' },
            { mediaKey: 'gallery_dog_4', type: 'image', caption: 'Quiet moments and gentle cuddles.' },
            { mediaKey: 'gallery_dog_5', type: 'image', caption: 'Grooming time with our dedicated volunteers.' },
        ],
    },
    horses: {
        title: "Our Magnificent Horses",
        titleColorClass: "text-brand-accent",
        description: "Witness the grace, healing, and transformation of our rescued horses.",
        items: [
            { mediaKey: 'horses_landing_hero', type: 'image', caption: 'Horses grazing peacefully in morning light.' },
            { mediaKey: 'horses_intro', type: 'image', caption: 'A moment of trust between horse and caregiver.' },
            { mediaKey: 'horses_mission', type: 'image', caption: 'Building bonds through gentle interaction.' },
            { mediaKey: 'horses_training_cta', type: 'image', caption: 'Liberty work session showcasing trust and communication.' },
            { mediaKey: 'horses_enrichment_cta', type: 'image', caption: 'Enrichment activities bringing joy to daily life.' },
            { mediaKey: 'horses_facilities_cta_alt', type: 'image', caption: 'Clean, safe facilities designed for healing.' },
            { mediaKey: 'gallery_horse_1', type: 'image', caption: 'Bonding through grooming and care.' },
            { mediaKey: 'gallery_horse_video', type: 'video', caption: 'Gentle training session in the round pen.' },
            { mediaKey: 'gallery_horse_4', type: 'image', caption: 'Spirit, our resilient rescue.' },
        ],
    },
    community: {
        title: "Community & Volunteers",
        titleColorClass: "text-brand-primary",
        description: "The heart of our sanctuary beats with the dedication of our volunteers and community support.",
        items: [
            { mediaKey: 'hands_on_care_hero', type: 'image', caption: 'Volunteers forming deep bonds with sanctuary animals.' },
            { mediaKey: 'gallery_community_1', type: 'image', caption: 'Young animal advocates in training.' },
            { mediaKey: 'gallery_community_2', type: 'image', caption: 'Volunteers are the heart of our sanctuary.' },
            { mediaKey: 'gallery_community_3', type: 'image', caption: 'Helping hands during feed time.' },
        ],
    },
    rescue_stories: {
        title: "Rescue & Recovery Stories",
        titleColorClass: "text-brand-yellow",
        description: "Every rescue tells a story of hope, healing, and second chances.",
        items: [
            { mediaKey: 'horses_rescue_cta', type: 'image', caption: 'A rescue moment - bringing hope to those in need.' },
            { mediaKey: 'horses_success_cta', type: 'image', caption: 'Success stories that inspire us every day.' },
            { mediaKey: 'gallery_vet_1', type: 'image', caption: 'Emergency care bringing immediate relief.' },
            { mediaKey: 'gallery_vet_2', type: 'image', caption: 'Mobile clinic reaching animals in remote areas.' },
        ],
    },
    daily_life: {
        title: "Life at the Sanctuary",
        titleColorClass: "text-brand-secondary",
        description: "Peaceful moments and daily routines that make our sanctuary a true home.",
        items: [
            { mediaKey: 'horses_sponsor_cta', type: 'image', caption: 'Quiet companionship - the essence of sanctuary life.' },
            { mediaKey: 'horses_contact_cta', type: 'image', caption: 'Gentle moments of connection and trust.' },
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
    description?: string;
}> = ({ title, items, onImageClick, titleColorClass, description, ...props }) => {
    
    const imageItems = items
        .map((item, index) => ({ ...item, originalIndex: index }))
        .filter(item => item.type === 'image');
    
    return (
        <section className="py-12">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="content-bubble">
                    <div className="p-6 md:p-8">
                        <PawIcon className={`w-12 h-12 ${titleColorClass || 'text-brand-primary'} mb-4 mx-auto`} />
                        <h2 className={`text-4xl md:text-5xl font-black ${titleColorClass || 'text-brand-primary'} mb-4 text-center`}>{title}</h2>
                        {description && (
                            <p className="text-lg text-brand-text-secondary mb-8 text-center max-w-3xl mx-auto">{description}</p>
                        )}
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
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
        title="Stories in Pictures"
        subtitle="Every photograph captures a moment of healing, hope, and transformation. These are the faces and stories that inspire us every day - from first rescue to forever home, from fear to trust, from survival to thriving."
        mediaKey="horses_landing_hero"
        alt="A peaceful moment showcasing the beauty of sanctuary life"
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
                            <h2 className="text-4xl font-black text-brand-secondary mb-6">Transformation Stories</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                                <div className="md:col-span-1 grid grid-cols-2 gap-4">
                                    <div className="text-center transform hover:scale-105 transition-transform duration-300">
                                        <EditableMedia mediaKey="dogs_intro" mediaUrl={props.mediaContent.dogs_intro!} alt="Before: A dog's journey begins" {...props} className="aspect-square object-cover rounded-xl shadow-lg" />
                                        <p className="mt-3 font-bold text-gray-600 text-lg">Day One</p>
                                        <p className="text-sm text-gray-500">Scared & Uncertain</p>
                                    </div>
                                    <div className="text-center transform hover:scale-105 transition-transform duration-300">
                                        <EditableMedia mediaKey="forever_dogs_day_in_life" mediaUrl={props.mediaContent.forever_dogs_day_in_life!} alt="After: Thriving in sanctuary life" {...props} className="aspect-square object-cover rounded-xl shadow-lg" />
                                        <p className="mt-3 font-bold text-brand-accent text-lg">Today</p>
                                        <p className="text-sm text-brand-accent">Happy & Healthy</p>
                                    </div>
                                </div>
                                <div className="md:col-span-2 text-lg text-gray-700 space-y-6">
                                    <div className="bg-brand-bg-main p-6 rounded-xl">
                                        <h3 className="text-2xl font-bold text-brand-secondary mb-3">The Power of Second Chances</h3>
                                        <p>Every animal that arrives at our sanctuary carries a story of hardship, but what happens next is pure magic. With patience, love, and dedicated care, we witness incredible transformations.</p>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="bg-white p-4 rounded-lg shadow-md">
                                            <h4 className="font-bold text-brand-secondary mb-2">🏥 Medical Care</h4>
                                            <p className="text-sm">Veterinary treatment, rehabilitation, and ongoing health monitoring</p>
                                        </div>
                                        <div className="bg-white p-4 rounded-lg shadow-md">
                                            <h4 className="font-bold text-brand-secondary mb-2">❤️ Emotional Healing</h4>
                                            <p className="text-sm">Building trust, providing comfort, and restoring confidence</p>
                                        </div>
                                        <div className="bg-white p-4 rounded-lg shadow-md">
                                            <h4 className="font-bold text-brand-secondary mb-2">🎯 Behavioral Support</h4>
                                            <p className="text-sm">Training, socialization, and enrichment activities</p>
                                        </div>
                                        <div className="bg-white p-4 rounded-lg shadow-md">
                                            <h4 className="font-bold text-brand-secondary mb-2">🏡 Forever Homes</h4>
                                            <p className="text-sm">Matching animals with perfect families or providing lifelong sanctuary</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

        {/* Impact Statistics */}
        <section className="py-20 bg-gradient-to-br from-brand-bg-subtle to-brand-bg-main">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="content-bubble text-center">
                    <div className="p-10 md:p-12">
                        <PawIcon className="w-16 h-16 text-brand-primary mx-auto mb-6" />
                        <h2 className="text-4xl md:text-5xl font-black text-brand-primary mb-8">Our Impact in Numbers</h2>
                        <p className="text-xl text-brand-text-secondary mb-12 max-w-3xl mx-auto">
                            Every photograph in our gallery represents a life changed, a story rewritten, and hope restored.
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            <div className="text-center p-6 bg-white rounded-2xl shadow-lg transform hover:scale-105 transition-transform">
                                <div className="text-4xl font-black text-brand-secondary mb-2">150+</div>
                                <div className="text-brand-text-secondary font-semibold">Dogs Rescued</div>
                            </div>
                            <div className="text-center p-6 bg-white rounded-2xl shadow-lg transform hover:scale-105 transition-transform">
                                <div className="text-4xl font-black text-brand-accent mb-2">25+</div>
                                <div className="text-brand-text-secondary font-semibold">Horses Saved</div>
                            </div>
                            <div className="text-center p-6 bg-white rounded-2xl shadow-lg transform hover:scale-105 transition-transform">
                                <div className="text-4xl font-black text-brand-primary mb-2">80+</div>
                                <div className="text-brand-text-secondary font-semibold">Forever Homes</div>
                            </div>
                            <div className="text-center p-6 bg-white rounded-2xl shadow-lg transform hover:scale-105 transition-transform">
                                <div className="text-4xl font-black text-brand-yellow mb-2">500+</div>
                                <div className="text-brand-text-secondary font-semibold">Lives Touched</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <section className="py-20 bg-brand-primary">
            <div className="container mx-auto px-6 text-center text-white">
                <PawIcon className="w-12 h-12 text-white mx-auto mb-6" />
                <h2 className="text-4xl md:text-5xl font-black mb-6">Be Part of Their Story</h2>
                <p className="max-w-3xl mx-auto text-xl text-gray-200 mb-10">
                    Every day brings new moments of hope, healing, and happiness. Follow our journey and see how your support creates the stories captured in these photos.
                </p>
                <div className="flex flex-wrap justify-center gap-6 mb-10">
                    <CtaButton href="/adopt-a-dog" className="bg-brand-secondary hover:bg-brand-secondary-hover text-white px-8 py-4 text-lg">
                        🐶 Adopt a Dog
                    </CtaButton>
                    <CtaButton href="/horses" className="bg-brand-accent hover:bg-brand-accent-hover text-white px-8 py-4 text-lg">
                        🐎 Meet Our Horses
                    </CtaButton>
                    <CtaButton href="/get-involved" className="bg-brand-yellow hover:bg-brand-yellow-hover text-brand-text-primary px-8 py-4 text-lg">
                        🤝 Get Involved
                    </CtaButton>
                </div>
                <div className="border-t border-white/20 pt-8">
                    <p className="text-lg mb-6">Follow our daily journey on social media</p>
                    <div className="flex justify-center items-center gap-8">
                       <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-white hover:text-brand-primary-light transition-all transform hover:scale-110"><FacebookIcon className="w-12 h-12"/></a>
                       <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white hover:text-brand-primary-light transition-all transform hover:scale-110"><InstagramIcon className="w-12 h-12"/></a>
                    </div>
                </div>
            </div>
      </section>
    </div>
  );
};

export default GalleryPage;
