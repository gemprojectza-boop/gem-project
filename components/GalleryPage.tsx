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

// Categorize gallery items by type
const dogGalleryItems: MediaItem[] = [
    // Dog main images
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
    { mediaKey: 'gallery_dog_1', type: 'image' },
    { mediaKey: 'gallery_dog_2', type: 'image' },
    { mediaKey: 'gallery_dog_3', type: 'image' },
    { mediaKey: 'gallery_dog_4', type: 'image' },
    { mediaKey: 'gallery_dog_5', type: 'image' },
    { mediaKey: 'gallery_dog_6', type: 'image' },
    { mediaKey: 'gallery_dog_video', type: 'video' },
    
    // Individual dog profiles
    { mediaKey: 'ace_main', type: 'image' },
    { mediaKey: 'ace_video', type: 'video' },
    { mediaKey: 'alex_main', type: 'image' },
    { mediaKey: 'alex_video', type: 'video' },
    { mediaKey: 'angel_main', type: 'image' },
    { mediaKey: 'bella_main', type: 'image' },
    { mediaKey: 'bella_video', type: 'video' },
    { mediaKey: 'bingo_main', type: 'image' },
    { mediaKey: 'bingo_video', type: 'video' },
    { mediaKey: 'bobby_main', type: 'image' },
    { mediaKey: 'bobby_video', type: 'video' },
    { mediaKey: 'bounty_main', type: 'image' },
    { mediaKey: 'bounty_video', type: 'video' },
    { mediaKey: 'casper_main', type: 'image' },
    { mediaKey: 'casper_video', type: 'video' },
    { mediaKey: 'coco_main', type: 'image' },
    { mediaKey: 'doughnut_main', type: 'image' },
    { mediaKey: 'doughnut_story', type: 'image' },
    { mediaKey: 'fifi_main', type: 'image' },
    { mediaKey: 'fifi_video', type: 'video' },
    { mediaKey: 'foxy_main', type: 'image' },
    { mediaKey: 'hazel_main', type: 'image' },
    { mediaKey: 'jerry_main', type: 'image' },
    { mediaKey: 'jerry_video', type: 'video' },
    { mediaKey: 'lexi_main', type: 'image' },
    { mediaKey: 'lexi_video', type: 'video' },
    { mediaKey: 'maple_main', type: 'image' },
    { mediaKey: 'maple_video', type: 'video' },
    { mediaKey: 'max_main', type: 'image' },
    { mediaKey: 'max_story', type: 'image' },
    { mediaKey: 'max_video', type: 'video' },
    { mediaKey: 'maxi_main', type: 'image' },
    { mediaKey: 'misty_main', type: 'image' },
    { mediaKey: 'misty_video', type: 'video' },
    { mediaKey: 'pretty_main', type: 'image' },
    { mediaKey: 'rexi_main', type: 'image' },
    { mediaKey: 'rexi_video', type: 'video' },
    { mediaKey: 'ruby_main', type: 'image' },
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
];

const horseGalleryItems: MediaItem[] = [
    // Main horse images
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
    { mediaKey: 'gallery_horse_1', type: 'image' },
    { mediaKey: 'gallery_horse_2', type: 'image' },
    { mediaKey: 'gallery_horse_3', type: 'image' },
    { mediaKey: 'gallery_horse_4', type: 'image' },
    { mediaKey: 'gallery_horse_5', type: 'image' },
    { mediaKey: 'gallery_horse_6', type: 'image' },
    { mediaKey: 'gallery_horse_video', type: 'video' },
    
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
    { mediaKey: 'beyonce_new_main', type: 'image' },
    { mediaKey: 'sensation_main', type: 'image' },
    { mediaKey: 'rare_prophet_new_main', type: 'image' },
    { mediaKey: 'flashing_sparkles_main', type: 'image' },
    { mediaKey: 'dundees_star_main', type: 'image' },
    { mediaKey: 'bubblegum_new_main', type: 'image' },
    { mediaKey: 'charlie_new_main', type: 'image' },
    { mediaKey: 'princess_of_monaco_main', type: 'image' },
    { mediaKey: 'peekaboo_new_main', type: 'image' },
];

const communityGalleryItems: MediaItem[] = [
    // Community and sanctuary photos
    { mediaKey: 'community_image', type: 'image' },
    { mediaKey: 'about_hero', type: 'image' },
    { mediaKey: 'about_welcome_gate', type: 'image' },
    { mediaKey: 'about_mobile_vet', type: 'image' },
    { mediaKey: 'about_sleeping_dogs', type: 'image' },
    { mediaKey: 'about_dog_walk', type: 'image' },
    { mediaKey: 'about_drone_shot', type: 'image' },
    { mediaKey: 'volunteer_hero', type: 'image' },
    { mediaKey: 'volunteer_01', type: 'image' },
    { mediaKey: 'hands_on_care_hero', type: 'image' },
    { mediaKey: 'outreach_hero', type: 'image' },
    { mediaKey: 'outreach_education', type: 'image' },
    { mediaKey: 'outreach_mobile_clinic_1', type: 'image' },
    { mediaKey: 'outreach_mobile_clinic_2', type: 'image' },
    { mediaKey: 'outreach_adoption_days', type: 'image' },
    { mediaKey: 'outreach_responsible_ownership', type: 'image' },
    { mediaKey: 'gallery_sanctuary_1', type: 'image' },
    { mediaKey: 'gallery_sanctuary_2', type: 'image' },
    { mediaKey: 'gallery_sanctuary_3', type: 'image' },
    { mediaKey: 'gallery_bella_before', type: 'image' },
    { mediaKey: 'gallery_bella_after', type: 'image' },
    { mediaKey: 'youth_apprenticeship_01', type: 'image' },
    { mediaKey: 'youth_apprenticeship_02', type: 'image' },
    { mediaKey: 'youth_apprenticeship_03', type: 'image' },
    { mediaKey: 'youth_apprenticeship_04', type: 'image' },
];

// Legacy array for backward compatibility - combining all items
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
    { mediaKey: 'bobby_main', type: 'image' },
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

type GallerySection = 'dogs' | 'horses' | 'community';

const Slideshow: React.FC<GalleryPageProps> = (props) => {
    const [currentSection, setCurrentSection] = useState<GallerySection>('dogs');
    const [currentIndex, setCurrentIndex] = useState(0);
    
    const getCurrentItems = () => {
        switch (currentSection) {
            case 'dogs': return dogGalleryItems;
            case 'horses': return horseGalleryItems;
            case 'community': return communityGalleryItems;
            default: return dogGalleryItems;
        }
    };
    
    // Filter out items that don't have media content
    const validItems = getCurrentItems().filter(item => props.mediaContent[item.mediaKey]);
    
    // Reset index when section changes
    const handleSectionChange = (section: GallerySection) => {
        setCurrentSection(section);
        setCurrentIndex(0);
    };
    
    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % validItems.length);
    };
    
    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + validItems.length) % validItems.length);
    };
    
    if (validItems.length === 0) {
        return <div className="text-center py-20">No images available for this section</div>;
    }
    
    const currentItem = validItems[currentIndex];
    const currentUrl = props.mediaContent[currentItem.mediaKey];
    
    const getSectionTitle = () => {
        switch (currentSection) {
            case 'dogs': return 'Our Dogs';
            case 'horses': return 'Our Horses'; 
            case 'community': return 'Our Community';
            default: return 'Gallery';
        }
    };
    
    return (
        <section className="py-8 bg-brand-bg-main min-h-screen flex flex-col">
            <div className="container mx-auto px-4 max-w-6xl flex-grow flex flex-col">
                <div className="text-center mb-8">
                    <PawIcon className="w-12 h-12 text-brand-primary mb-4 mx-auto" />
                    <h2 className="text-4xl md:text-5xl font-bold text-brand-primary mb-3">Our Photo Gallery</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">Discover the heartwarming moments and incredible transformations</p>
                </div>
                <div className="content-bubble bg-white shadow-2xl flex-grow flex flex-col">
                    <div className="p-4 md:p-6 flex-grow flex flex-col">
                        
                        {/* Section Tabs */}
                        <div className="flex justify-center mb-6">
                            <div className="bg-gray-100 p-1.5 rounded-xl inline-flex gap-1">
                                <button
                                    onClick={() => handleSectionChange('dogs')}
                                    className={`px-6 py-3 rounded-lg font-bold text-base transition-all duration-300 ${
                                        currentSection === 'dogs'
                                            ? 'bg-brand-secondary text-white shadow-lg'
                                            : 'text-gray-600 hover:bg-white hover:shadow-md'
                                    }`}
                                >
                                    Dogs
                                </button>
                                <button
                                    onClick={() => handleSectionChange('horses')}
                                    className={`px-6 py-3 rounded-lg font-bold text-base transition-all duration-300 ${
                                        currentSection === 'horses'
                                            ? 'bg-brand-primary text-white shadow-lg'
                                            : 'text-gray-600 hover:bg-white hover:shadow-md'
                                    }`}
                                >
                                    Horses
                                </button>
                            </div>
                        </div>
                        
                        {/* Current Section Title */}
                        <div className="text-center mb-6">
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">{getSectionTitle()}</h3>
                            <div className="w-20 h-1 bg-gradient-to-r from-brand-primary to-brand-secondary mx-auto rounded-full"></div>
                        </div>
                        
                        
                        {/* Slideshow Container */}
                        <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl p-3">
                            {/* Main Image/Video */}
                            <div className="relative w-full group flex items-center justify-center">
                                <EditableMedia
                                    key={`${currentItem.mediaKey}-${currentIndex}`}
                                    mediaKey={currentItem.mediaKey}
                                    mediaUrl={currentUrl}
                                    alt="Gallery image"
                                    isVideo={currentItem.type === 'video'}
                                    videoAutoPlay={true}
                                    isEditMode={props.isEditMode}
                                    onUpdate={props.onMediaUpdate}
                                    className="block max-w-full h-auto object-contain transition-opacity duration-300 rounded-xl"
                                    style={{ maxHeight: '45vh', maxWidth: '100%' }}
                                />
                                
                                {/* Navigation Arrows - Enhanced styling */}
                                <button
                                    onClick={prevSlide}
                                    className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 bg-white/90 text-gray-800 p-4 rounded-full z-10 shadow-lg backdrop-blur-sm"
                                    aria-label="Previous image"
                                    style={{ width: '64px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                                >
                                    <ChevronLeftIcon className="w-8 h-8" />
                                </button>
                                
                                <button
                                    onClick={nextSlide}
                                    className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 bg-white/90 text-gray-800 p-4 rounded-full z-10 shadow-lg backdrop-blur-sm"
                                    aria-label="Next image"
                                    style={{ width: '64px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                                >
                                    <ChevronRightIcon className="w-8 h-8" />
                                </button>
                            </div>
                        </div>
                        
                        {/* Image Dots Navigation */}
                        <div className="flex justify-center mt-4 gap-2 overflow-x-auto pb-2">
                            {validItems.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                        currentIndex === index
                                            ? 'bg-gradient-to-r from-brand-primary to-brand-secondary scale-125 shadow-lg'
                                            : 'bg-gray-300 hover:bg-gray-400 hover:scale-110'
                                    }`}
                                    aria-label={`Go to image ${index + 1}`}
                                />
                            ))}
                        </div>
                        
                        {/* Section Title Bar */}
                        <div className="mt-4 text-center">
                            <div className="inline-flex items-center bg-gray-50 px-4 py-2 rounded-full text-sm">
                                <span className="font-medium text-gray-600">
                                    {getSectionTitle()}
                                </span>
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
        mediaKey="gallery_hero"
        alt="A peaceful moment showcasing the beauty of sanctuary life"
        {...props}
      />
        
      <Slideshow {...props} />

        
        <section className="py-24 bg-gradient-to-br from-brand-primary via-brand-primary to-brand-secondary relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-80 h-80 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
            </div>
            
            <div className="container mx-auto px-6 text-center text-white relative z-10">
                <div className="max-w-4xl mx-auto">
                    <PawIcon className="w-16 h-16 text-white mx-auto mb-8 opacity-90" />
                    <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight">Be Part of Their Story</h2>
                    <p className="text-xl md:text-2xl text-blue-100 mb-12 leading-relaxed">
                        Every day brings new moments of hope, healing, and happiness. Follow our journey and see how your support creates the stories captured in these photos.
                    </p>
                    
                    <div className="grid md:grid-cols-3 gap-6 mb-12">
                        <CtaButton href="/adopt-a-dog" className="bg-brand-secondary hover:bg-brand-secondary-hover text-white px-8 py-6 text-lg font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                            🐶 Adopt a Dog
                        </CtaButton>
                        <CtaButton href="/horses" className="bg-brand-accent hover:bg-brand-accent-hover text-white px-8 py-6 text-lg font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                            🐎 Meet Our Horses
                        </CtaButton>
                        <CtaButton href="/get-involved" className="bg-brand-yellow hover:bg-brand-yellow-hover text-brand-text-primary px-8 py-6 text-lg font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                            🤝 Get Involved
                        </CtaButton>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                        <p className="text-xl mb-6 text-blue-100">Follow our daily journey on social media</p>
                        <div className="flex justify-center items-center gap-8">
                           <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="bg-white/20 p-4 rounded-full text-white hover:bg-white hover:text-brand-primary transition-all duration-300 transform hover:scale-110 backdrop-blur-sm">
                               <FacebookIcon className="w-8 h-8"/>
                           </a>
                           <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="bg-white/20 p-4 rounded-full text-white hover:bg-white hover:text-brand-primary transition-all duration-300 transform hover:scale-110 backdrop-blur-sm">
                               <InstagramIcon className="w-8 h-8"/>
                           </a>
                        </div>
                    </div>
                </div>
            </div>
      </section>
    </div>
  );
};

export default GalleryPage;