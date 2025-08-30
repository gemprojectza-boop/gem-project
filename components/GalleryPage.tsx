import React, { useState } from 'react';
import { MediaContent } from '../types.ts';
import { PageHero } from './PageComponents.tsx';
import CtaButton from './CtaButton.tsx';
import EditableMedia from './EditableMedia.tsx';
import { FacebookIcon, InstagramIcon, PawIcon, ChevronLeftIcon, ChevronRightIcon } from './icons.tsx';

interface GalleryPageProps {
  mediaContent: MediaContent;
  isEditMode: boolean;
  onMediaUpdate: (key: string, url: string) => void;
}

type MediaItem = {
    mediaKey: string;
    type: 'image' | 'video';
}

// Animal photos only - horses and dogs
const allGalleryItems: MediaItem[] = [
    // Main horse images with animals
    { mediaKey: 'horses_landing_hero', type: 'image' },
    { mediaKey: 'horses_intro', type: 'image' },
    { mediaKey: 'horses_mission', type: 'image' },
    { mediaKey: 'horses_adoptable_cta', type: 'image' },
    { mediaKey: 'horses_forever_cta', type: 'image' },
    { mediaKey: 'horses_rescue_cta', type: 'image' },
    { mediaKey: 'horses_training_cta', type: 'image' },
    { mediaKey: 'horses_enrichment_cta', type: 'image' },
    { mediaKey: 'horses_facilities_cta_alt', type: 'image' },
    { mediaKey: 'horses_success_cta', type: 'image' },
    { mediaKey: 'horses_sponsor_cta', type: 'image' },
    { mediaKey: 'horses_future_cta', type: 'image' },
    { mediaKey: 'horses_contact_cta', type: 'image' },
    
    // Individual horse profiles
    { mediaKey: 'spirit_main', type: 'image' },
    { mediaKey: 'spirit_story', type: 'image' },
    { mediaKey: 'spirit_video', type: 'video' },
    { mediaKey: 'willow_main', type: 'image' },
    { mediaKey: 'willow_story', type: 'image' },
    { mediaKey: 'willow_video', type: 'video' },
    { mediaKey: 'titan_main', type: 'image' },
    { mediaKey: 'titan_story', type: 'image' },
    { mediaKey: 'titan_video', type: 'video' },
    { mediaKey: 'charlie_profile_main', type: 'image' },
    { mediaKey: 'charlie_profile_story', type: 'image' },
    { mediaKey: 'charlie_profile_gallery_1', type: 'image' },
    { mediaKey: 'charlie_profile_gallery_2', type: 'image' },
    { mediaKey: 'charlie_profile_gallery_3', type: 'image' },
    { mediaKey: 'charlie_profile_video', type: 'video' },
    { mediaKey: 'freddy_main', type: 'image' },
    { mediaKey: 'freddy_story', type: 'image' },
    { mediaKey: 'freddy_gallery_1', type: 'image' },
    { mediaKey: 'freddy_gallery_2', type: 'image' },
    { mediaKey: 'freddy_video', type: 'video' },
    { mediaKey: 'jasmin_main', type: 'image' },
    { mediaKey: 'jasmin_story', type: 'image' },
    { mediaKey: 'jasmin_gallery_1', type: 'image' },
    { mediaKey: 'jasmin_gallery_2', type: 'image' },
    { mediaKey: 'jasmin_video', type: 'video' },
    { mediaKey: 'peekaboo_main', type: 'image' },
    { mediaKey: 'peekaboo_story', type: 'image' },
    { mediaKey: 'peekaboo_gallery_1', type: 'image' },
    { mediaKey: 'peekaboo_gallery_2', type: 'image' },
    { mediaKey: 'peekaboo_video', type: 'video' },
    { mediaKey: 'rare_prophet_main', type: 'image' },
    { mediaKey: 'rare_prophet_story', type: 'image' },
    { mediaKey: 'rare_prophet_gallery_1', type: 'image' },
    { mediaKey: 'rare_prophet_gallery_2', type: 'image' },
    { mediaKey: 'rare_prophet_video', type: 'video' },
    { mediaKey: 'sashay_main', type: 'image' },
    { mediaKey: 'sashay_story', type: 'image' },
    { mediaKey: 'sashay_gallery_1', type: 'image' },
    { mediaKey: 'sashay_gallery_2', type: 'image' },
    { mediaKey: 'sashay_video', type: 'video' },
    { mediaKey: 'shadow_main', type: 'image' },
    { mediaKey: 'shadow_story', type: 'image' },
    { mediaKey: 'shadow_gallery_1', type: 'image' },
    { mediaKey: 'shadow_gallery_2', type: 'image' },
    { mediaKey: 'shadow_gallery_3', type: 'image' },
    { mediaKey: 'shadow_video', type: 'video' },
    { mediaKey: 'bubblegum_main', type: 'image' },
    { mediaKey: 'bubblegum_story', type: 'image' },
    { mediaKey: 'bubblegum_gallery_1', type: 'image' },
    { mediaKey: 'bubblegum_gallery_2', type: 'image' },
    { mediaKey: 'bubblegum_video', type: 'video' },
    
    // New forever horses
    { mediaKey: 'beyonce_new_main', type: 'image' },
    { mediaKey: 'sensation_main', type: 'image' },
    { mediaKey: 'rare_prophet_new_main', type: 'image' },
    { mediaKey: 'flashing_sparkles_main', type: 'image' },
    { mediaKey: 'dundees_star_main', type: 'image' },
    { mediaKey: 'bubblegum_new_main', type: 'image' },
    { mediaKey: 'charlie_new_main', type: 'image' },
    { mediaKey: 'princess_of_monaco_main', type: 'image' },
    { mediaKey: 'peekaboo_new_main', type: 'image' },
    
    // New adoptable/future horses
    { mediaKey: 'stella_main', type: 'image' },
    { mediaKey: 'stella_story', type: 'image' },
    { mediaKey: 'sashay_future_main', type: 'image' },
    { mediaKey: 'sashay_future_story', type: 'image' },
    { mediaKey: 'freddy_future_main', type: 'image' },
    { mediaKey: 'freddy_future_story', type: 'image' },
    { mediaKey: 'spice_main', type: 'image' },
    { mediaKey: 'spice_story', type: 'image' },
    { mediaKey: 'jazz_main', type: 'image' },
    { mediaKey: 'jazz_story', type: 'image' },
    { mediaKey: 'roxy_main', type: 'image' },
    { mediaKey: 'roxy_story', type: 'image' },
    
    // Horse success stories
    { mediaKey: 'stella_success_before_1', type: 'image' },
    { mediaKey: 'stella_success_before_2', type: 'image' },
    { mediaKey: 'stella_success_before_3', type: 'image' },
    { mediaKey: 'stella_success_after_1', type: 'image' },
    { mediaKey: 'stella_success_after_2', type: 'image' },
    { mediaKey: 'charlie_success_before_1', type: 'image' },
    { mediaKey: 'charlie_success_before_2', type: 'image' },
    { mediaKey: 'charlie_success_before_3', type: 'image' },
    { mediaKey: 'charlie_success_after_1', type: 'image' },
    { mediaKey: 'charlie_success_after_2', type: 'image' },
    { mediaKey: 'peaches_success_before_1', type: 'image' },
    { mediaKey: 'peaches_success_before_2', type: 'image' },
    { mediaKey: 'peaches_success_before_3', type: 'image' },
    { mediaKey: 'peaches_success_before_4', type: 'image' },
    { mediaKey: 'peaches_success_after_1', type: 'image' },
    { mediaKey: 'peaches_success_after_2', type: 'image' },
    { mediaKey: 'beyonce_success_before_1', type: 'image' },
    { mediaKey: 'beyonce_success_before_2', type: 'image' },
    { mediaKey: 'beyonce_success_after_1', type: 'image' },
    { mediaKey: 'peekaboo_success_before_1', type: 'image' },
    { mediaKey: 'peekaboo_success_after_1', type: 'image' },
    { mediaKey: 'sashay_success_before_1', type: 'image' },
    { mediaKey: 'sashay_success_after_1', type: 'image' },
    
    // Dog main images with animals
    { mediaKey: 'dogs_hero_banner', type: 'image' },
    { mediaKey: 'dogs_intro', type: 'image' },
    { mediaKey: 'adoption_hero', type: 'image' },
    { mediaKey: 'forever_dogs_hero', type: 'image' },
    { mediaKey: 'forever_dogs_day_in_life', type: 'image' },
    { mediaKey: 'stories_ruby', type: 'image' },
    { mediaKey: 'stories_honey', type: 'image' },
    { mediaKey: 'stories_queenie', type: 'image' },
    { mediaKey: 'therapy_dog_01', type: 'image' },
    { mediaKey: 'therapy_dog_02', type: 'image' },
    { mediaKey: 'therapy_dog_03', type: 'image' },
    { mediaKey: 'health_louis_story', type: 'image' },
    
    // Individual dog profiles
    { mediaKey: 'alex_main', type: 'image' },
    { mediaKey: 'alex_video', type: 'video' },
    { mediaKey: 'amber_main', type: 'image' },
    { mediaKey: 'amber_story', type: 'image' },
    { mediaKey: 'amber_video', type: 'video' },
    { mediaKey: 'bagheera_main', type: 'image' },
    { mediaKey: 'bagheera_video', type: 'video' },
    { mediaKey: 'benji_main', type: 'image' },
    { mediaKey: 'benji_video', type: 'video' },
    { mediaKey: 'blake_main', type: 'image' },
    { mediaKey: 'blake_video', type: 'video' },
    { mediaKey: 'bobi_main', type: 'image' },
    { mediaKey: 'bobi_video', type: 'video' },
    { mediaKey: 'bobby_main', type: 'image' },
    { mediaKey: 'bobby_story', type: 'image' },
    { mediaKey: 'bobby_gallery_1', type: 'image' },
    { mediaKey: 'bobby_gallery_2', type: 'image' },
    { mediaKey: 'bobby_video', type: 'video' },
    { mediaKey: 'brooklyn_main', type: 'image' },
    { mediaKey: 'brooklyn_video', type: 'video' },
    { mediaKey: 'buddy_main', type: 'image' },
    { mediaKey: 'buddy_video', type: 'video' },
    { mediaKey: 'chandra_main', type: 'image' },
    { mediaKey: 'chandra_video', type: 'video' },
    { mediaKey: 'chloe_main', type: 'image' },
    { mediaKey: 'chloe_story', type: 'image' },
    { mediaKey: 'chloe_video', type: 'video' },
    { mediaKey: 'cooper_main', type: 'image' },
    { mediaKey: 'cooper_story', type: 'image' },
    { mediaKey: 'cooper_gallery_1', type: 'image' },
    { mediaKey: 'cooper_gallery_2', type: 'image' },
    { mediaKey: 'cooper_gallery_3', type: 'image' },
    { mediaKey: 'cooper_video', type: 'video' },
    { mediaKey: 'daisy_main', type: 'image' },
    { mediaKey: 'daisy_story', type: 'image' },
    { mediaKey: 'daisy_video', type: 'video' },
    { mediaKey: 'honey_main', type: 'image' },
    { mediaKey: 'honey_video', type: 'video' },
    { mediaKey: 'jerry_main', type: 'image' },
    { mediaKey: 'jerry_video', type: 'video' },
    { mediaKey: 'jesse_main', type: 'image' },
    { mediaKey: 'jesse_video', type: 'video' },
    { mediaKey: 'lady_main', type: 'image' },
    { mediaKey: 'lady_video', type: 'video' },
    { mediaKey: 'lee_main', type: 'image' },
    { mediaKey: 'lee_story', type: 'image' },
    { mediaKey: 'lee_gallery_1', type: 'image' },
    { mediaKey: 'lee_gallery_2', type: 'image' },
    { mediaKey: 'lee_gallery_3', type: 'image' },
    { mediaKey: 'lee_video', type: 'video' },
    { mediaKey: 'lexi_main', type: 'image' },
    { mediaKey: 'lexi_video', type: 'video' },
    { mediaKey: 'maple_main', type: 'image' },
    { mediaKey: 'maple_video', type: 'video' },
    { mediaKey: 'max_main', type: 'image' },
    { mediaKey: 'max_story', type: 'image' },
    { mediaKey: 'max_video', type: 'video' },
    { mediaKey: 'fifi_main', type: 'image' },
    { mediaKey: 'fifi_video', type: 'video' },
    { mediaKey: 'rexi_main', type: 'image' },
    { mediaKey: 'rexi_video', type: 'video' },
    { mediaKey: 'ruth_main', type: 'image' },
    { mediaKey: 'ruth_video', type: 'video' },
    { mediaKey: 'simba_main', type: 'image' },
    { mediaKey: 'simba_video', type: 'video' },
    { mediaKey: 'snoopy_main', type: 'image' },
    { mediaKey: 'snoopy_story', type: 'image' },
    { mediaKey: 'snoopy_gallery_1', type: 'image' },
    { mediaKey: 'snoopy_video', type: 'video' },
    { mediaKey: 'stacey_main', type: 'image' },
    { mediaKey: 'stacey_story', type: 'image' },
    { mediaKey: 'stacey_video', type: 'video' },
    { mediaKey: 'whitney_main', type: 'image' },
    { mediaKey: 'whitney_video', type: 'video' },
    { mediaKey: 'xeno_main', type: 'image' },
    { mediaKey: 'xeno_video', type: 'video' },
    { mediaKey: 'zarra_main', type: 'image' },
    { mediaKey: 'zarra_video', type: 'video' },
    { mediaKey: 'casper_main', type: 'image' },
    { mediaKey: 'casper_video', type: 'video' },
    { mediaKey: 'misty_main', type: 'image' },
    { mediaKey: 'misty_video', type: 'video' },
    { mediaKey: 'doughnut_main', type: 'image' },
    { mediaKey: 'doughnut_story', type: 'image' },
    { mediaKey: 'maxi_main', type: 'image' },
    { mediaKey: 'coco_main', type: 'image' },
    { mediaKey: 'foxy_main', type: 'image' },
    { mediaKey: 'hazel_main', type: 'image' },
    { mediaKey: 'angel_main', type: 'image' },
    { mediaKey: 'pretty_main', type: 'image' },
    { mediaKey: 'ruby_main', type: 'image' },
    
    // Gallery animal images
    { mediaKey: 'gallery_dog_1', type: 'image' },
    { mediaKey: 'gallery_dog_2', type: 'image' },
    { mediaKey: 'gallery_dog_3', type: 'image' },
    { mediaKey: 'gallery_dog_4', type: 'image' },
    { mediaKey: 'gallery_dog_5', type: 'image' },
    { mediaKey: 'gallery_dog_6', type: 'image' },
    { mediaKey: 'gallery_dog_video', type: 'video' },
    { mediaKey: 'gallery_horse_1', type: 'image' },
    { mediaKey: 'gallery_horse_2', type: 'image' },
    { mediaKey: 'gallery_horse_3', type: 'image' },
    { mediaKey: 'gallery_horse_4', type: 'image' },
    { mediaKey: 'gallery_horse_5', type: 'image' },
    { mediaKey: 'gallery_horse_6', type: 'image' },
    { mediaKey: 'gallery_horse_video', type: 'video' },
    { mediaKey: 'gallery_sanctuary_1', type: 'image' },
    { mediaKey: 'gallery_sanctuary_2', type: 'image' },
    { mediaKey: 'gallery_sanctuary_3', type: 'image' },
    { mediaKey: 'gallery_bella_before', type: 'image' },
    { mediaKey: 'gallery_bella_after', type: 'image' },
];

const Slideshow: React.FC<GalleryPageProps> = (props) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    
    // Filter out items that don't have media content
    const validItems = allGalleryItems.filter(item => props.mediaContent[item.mediaKey]);
    
    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % validItems.length);
    };
    
    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + validItems.length) % validItems.length);
    };
    
    if (validItems.length === 0) {
        return <div className="text-center py-20">No images available</div>;
    }
    
    const currentItem = validItems[currentIndex];
    const currentUrl = props.mediaContent[currentItem.mediaKey];
    
    return (
        <section className="py-16 bg-brand-bg-main">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="content-bubble">
                    <div className="p-8">
                        <PawIcon className="w-12 h-12 text-brand-primary mb-6 mx-auto" />
                        <h2 className="text-4xl font-bold text-brand-primary mb-8 text-center">Our Photo Gallery</h2>
                        
                        {/* Slideshow Container */}
                        <div className="relative bg-black rounded-lg overflow-hidden">
                            {/* Main Image/Video */}
                            <div className="relative aspect-video">
                                <EditableMedia
                                    mediaKey={currentItem.mediaKey}
                                    mediaUrl={currentUrl}
                                    alt="Gallery image"
                                    isVideo={currentItem.type === 'video'}
                                    videoAutoPlay={true}
                                    isEditMode={props.isEditMode}
                                    onUpdate={props.onMediaUpdate}
                                    className="w-full h-full object-contain"
                                />
                                
                                {/* Navigation Arrows */}
                                <button
                                    onClick={prevSlide}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors"
                                    aria-label="Previous image"
                                >
                                    <ChevronLeftIcon className="w-6 h-6" />
                                </button>
                                
                                <button
                                    onClick={nextSlide}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors"
                                    aria-label="Next image"
                                >
                                    <ChevronRightIcon className="w-6 h-6" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const GalleryPage: React.FC<GalleryPageProps> = (props) => {
  return (
    <div className="bg-brand-bg-main">
      <PageHero
        title="Stories in Pictures"
        subtitle="Every photograph captures a moment of healing, hope, and transformation. These are the faces and stories that inspire us every day - from first rescue to forever home, from fear to trust, from survival to thriving."
        mediaKey="horses_landing_hero"
        alt="A peaceful moment showcasing the beauty of sanctuary life"
        {...props}
      />
        
      <Slideshow {...props} />

        
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