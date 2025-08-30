





import React, { useState, useEffect, useCallback } from 'react';
import { MediaContent, HeroConfig } from './types.ts';
import { NavigationProvider, useSafeNavigation } from './contexts/NavigationContext.tsx';

// Import shared components directly
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';
import SplashScreen from './components/SplashScreen.tsx';
import DebugFocalPoints from './components/DebugFocalPoints.tsx';

// Direct import all page components
import HomePage from './components/HomePage.tsx';
import AboutPage from './components/AboutPage.tsx';
import DogsLandingPage from './components/dogs/DogsLandingPage.tsx';
import DogProfilePage from './components/dogs/DogProfilePage.tsx';
import HorsesLandingPage from './components/horses/HorsesLandingPage.tsx';
import HorseProfilePage from './components/horses/HorseProfilePage.tsx';
import CommunityPage from './components/CommunityPage.tsx';
import GetInvolvedLandingPage from './components/get-involved/GetInvolvedLandingPage.tsx';
import GalleryPage from './components/GalleryPage.tsx';
import ContactPage from './components/ContactPage.tsx';
import FAQPage from './components/FAQPage.tsx';
import PartnersPage from './components/PartnersPage.tsx';
import PlaceholderPage from './components/PlaceholderPage.tsx';
import DogStoriesPage from './components/DogStoriesPage.tsx';
import AnimalHealthPage from './components/AnimalHealthPage.tsx';
import DogOutingsPage from './components/DogOutingsPage.tsx';
import DogTrainingPage from './components/DogTrainingPage.tsx';
import DogWishlistPage from './components/DogWishlistPage.tsx';
import HandsOnDogsPage from './components/dogs/HandsOnDogsPage.tsx';
import DogAdoptionPage from './components/DogAdoptionPage.tsx';
import DogSponsorshipPage from './components/dogs/DogSponsorshipPage.tsx';
import ForeverDogsPage from './components/ForeverDogsPage.tsx';
import HorseFacilitiesPage from './components/horses/HorseFacilitiesPage.tsx';
import HorseTrainingPage from './components/horses/HorseTrainingPage.tsx';
import TeamPage from './components/TeamPage.tsx';
import HorseSuccessStoriesPage from './components/horses/HorseSuccessStoriesPage.tsx';
import HorseNeedsPage from './components/horses/HorseNeedsPage.tsx';
import HorseRehabilitationPage from './components/horses/HorseRehabilitationPage.tsx';
import YouthProgrammePage from './components/YouthProgrammePage.tsx';
import DonatePage from './components/DonatePage.tsx';


const initialMediaContent: MediaContent = {
  hero_banner_03: 'https://i.ibb.co/kgGLTcRx/DSC00096-1.jpg',
  welcome_section_01: 'https://i.ibb.co/0RRZkBQn/DSC03228-2.jpg',
  welcome_intro_video: 'https://videos.pexels.com/video-files/2886287/2886287-hd_1280_720_25fps.mp4',
  forever_animals_01: 'https://i.ibb.co/svS8mMXX/DSC03012.jpg',
  sponsorship_01: 'https://i.ibb.co/xqfGVkv3/DSC03088.jpg',
  wishlist_01: 'https://i.ibb.co/jPZXQBFs/DSC03204.jpg',
  volunteer_01: 'https://i.ibb.co/5g6Ss0Ps/DSC09944.jpg',
  youth_apprenticeship_01: 'https://i.ibb.co/yBFj9WnZ/DSC03629-2.jpg',
  hands_on_01: 'https://i.ibb.co/38X4vg9/DSC03223.jpg',
  community_image: 'https://i.ibb.co/C5XgywDr/DSC03284.jpg',
  final_cta_image: 'https://i.ibb.co/0RRZkBQn/DSC03228-2.jpg',
  about_hero: 'https://i.ibb.co/XfPq7BMz/DSC03353-2.jpg',
  about_welcome_gate: 'https://i.ibb.co/XZrt0nR2/DSC00848.jpg',
  about_mobile_vet: 'https://i.ibb.co/yFsK5D7T/DSC06133.jpg',
  about_sleeping_dogs: 'https://i.ibb.co/BVD7R6Nm/DSC00774.jpg',
  about_dog_walk: 'https://i.ibb.co/Y475WXP4/DSC01099.jpg',
  about_drone_shot: 'https://i.ibb.co/fzqVKSRZ/DSC09212.jpg',
  
  // --- HORSE IMAGES ---
  horses_gallery_01: 'https://i.ibb.co/k6PstKp0/DSC00279.jpg',
  horse_facilities_hero: 'https://i.ibb.co/VpVjgdGk/DSC00406.jpg',
  horse_facilities_paddock_run: 'https://i.ibb.co/ycdxhLbx/image.png',
  horse_facilities_training: 'https://i.ibb.co/84Smg3bG/DSC02276.jpg',
  horse_facilities_shelter: 'https://i.ibb.co/mVW6Z5Gw/image.png',
  horse_facilities_stable: 'https://i.ibb.co/7tX8xjd4/DSC00980.jpg',
  horse_facilities_grooming: 'https://i.ibb.co/j9djT4Bv/image.png',
  horse_facilities_nuzzle: 'https://i.ibb.co/MktMfbHF/DSC01444.jpg',
  horse_facilities_cta: 'https://i.ibb.co/5xjpbCrT/DSC01660.jpg',
  horse_training_hero: 'https://i.ibb.co/1g4v2vd/DSC02009.jpg',
  horse_training_liberty: 'https://i.ibb.co/84Smg3bG/DSC02276.jpg',
  horse_training_desensitisation: 'https://i.ibb.co/V0MH0zfm/DSC02334.jpg',
  horse_training_schooling: 'https://i.ibb.co/YFkT8FBH/DSC02336.jpg',
  horse_training_emotional: 'https://i.ibb.co/nMmm0h60/DSC02351.jpg',
  horse_training_final: 'https://i.ibb.co/C3bCGhwk/DSC02383.jpg',
  horse_team_hero: 'https://i.ibb.co/rftF6tYJ/DSC02469.jpg',
  kim_harvey: 'https://i.ibb.co/MycM5MgZ/image.png',
  carina_bodenstein: 'https://i.ibb.co/SwsZGzJb/image.png',
  allan_khondla: 'https://i.ibb.co/W4KBkbSz/image.png',
  bongani_george: 'https://i.ibb.co/1JjW4mGw/image.png',
  cosmos_yotswana: 'https://i.ibb.co/RkN8P9fh/image.png',
  phumlani_jevu: 'https://i.ibb.co/MxLjndxw/image.png',
  gudla_mzoliswa: 'https://i.ibb.co/nNCCLdw2/image.png',
  sizwe_mboyiyana: 'https://i.ibb.co/LXRyrQxh/image.png',
  samkele_jevu: 'https://i.ibb.co/5gThQYs9/image.png',
  fezile_mtyisha: 'https://i.ibb.co/sJHw3LNG/image.png',
  annestacia_van_rooi: 'https://i.ibb.co/d0DNNm7K/image.png',
  pinda_masiza: 'https://i.ibb.co/Xfh3gKkf/image.png',
  malcolm_mouton: 'https://i.ibb.co/tpxvyq7r/image.png',
  keenen_brandt: 'https://i.ibb.co/5hBT7Fjk/image.png',
  andile_khumla: 'https://i.ibb.co/Zp7nk39X/image.png',
  david_van_de_westhuizen: 'https://i.ibb.co/5WZPxR0g/image.png',
  lawrence_nkotha: 'https://i.ibb.co/HDxdGf1n/image.png',
  theo_arendolf: 'https://i.ibb.co/PZk08VDP/image.png',
  horse_stories_hero: 'https://i.ibb.co/ZRkShpwp/DSC02785.jpg',
  beyonce_story_main: 'https://i.ibb.co/Cpvbd3QR/DSC04102-2.jpg',
  beyonce_story_story: 'https://i.ibb.co/svZS4rDL/DSC08049.jpg',
  beyonce_story_gallery_1: 'https://i.ibb.co/WvVYJNRF/DSC08062.jpg',
  beyonce_story_gallery_2: 'https://i.ibb.co/x8LYrgfW/DSC08102.jpg',
  beyonce_story_video: 'https://videos.pexels.com/video-files/3129959/3129959-hd_1920_1080_25fps.mp4',
  horse_stories_cta_banner: 'https://i.ibb.co/9HcvmZTd/DSC08557.jpg',
  horse_needs_hero: 'https://i.ibb.co/fGr1QNQF/DSC08838.jpg',
  horse_needs_horsebox: 'https://i.ibb.co/wZy0Nckw/DSC09052.jpg',
  horses_landing_hero: 'https://i.ibb.co/fzqVKSRZ/DSC09212.jpg',
  horses_intro: 'https://i.ibb.co/x85W5PmX/DSC00803.jpg', // Replaced broken link
  horse_hands_on_hero: 'https://i.ibb.co/GvwgC6Fp/DSC01400.jpg', // Replaced broken link
  horses_mission: 'https://i.ibb.co/x85W5PmX/DSC00803.jpg',
  horses_adoptable_cta: 'https://i.ibb.co/GQzHvkpj/DSC00806.jpg',
  horses_forever_cta: 'https://i.ibb.co/tMtVTn79/DSC00876.jpg',
  horses_rescue_cta: 'https://i.ibb.co/JWhbJqqn/DSC01380.jpg',
  horses_training_cta: 'https://i.ibb.co/XfSXRVmq/DSC01535.jpg',
  horses_enrichment_cta: 'https://i.ibb.co/Pbt3hRh/DSC01612.jpg',
  horses_facilities_cta_alt: 'https://i.ibb.co/HpLFFgQp/DSC01788.jpg',
  horses_success_cta: 'https://i.ibb.co/LD5NRMFh/DSC01804.jpg',
  horses_sponsor_cta: 'https://i.ibb.co/yrWjZn0/DSC01896.jpg',
  horses_future_cta: 'https://i.ibb.co/spVxcsky/DSC01959.jpg',
  horses_contact_cta: 'https://i.ibb.co/zTmfBh7C/DSC01988.jpg',
  spirit_main: 'https://i.ibb.co/Kp0twMWb/DSC02130.jpg',
  spirit_story: 'https://i.ibb.co/h1TsBLSp/DSC02233.jpg',
  spirit_video: 'https://videos.pexels.com/video-files/2886287/2886287-hd_1280_720_25fps.mp4',
  willow_main: 'https://i.ibb.co/Hp4MPv48/DSC02447.jpg',
  willow_story: 'https://i.ibb.co/GQ3cwpyV/DSC02595.jpg',
  willow_video: 'https://videos.pexels.com/video-files/3129959/3129959-hd_1920_1080_25fps.mp4',
  titan_main: 'https://i.ibb.co/Qvf2Yd72/DSC02761.jpg',
  titan_story: 'https://i.ibb.co/bRCffGqt/DSC02841.jpg',
  titan_video: 'https://videos.pexels.com/video-files/2886287/2886287-hd_1280_720_25fps.mp4',
  charlie_profile_main: 'https://i.ibb.co/9k5KjBbF/DSC03214.jpg',
  charlie_profile_story: 'https://i.ibb.co/gFz4f9vp/DSC03226.jpg',
  charlie_profile_gallery_1: 'https://i.ibb.co/27xDp06N/DSC03489.jpg',
  charlie_profile_gallery_2: 'https://i.ibb.co/BVvLSC77/DSC03534.jpg',
  charlie_profile_gallery_3: 'https://i.ibb.co/93sJSbKN/DSC03560.jpg',
  charlie_profile_video: 'https://videos.pexels.com/video-files/2886287/2886287-hd_1280_720_25fps.mp4',
  freddy_main: 'https://i.ibb.co/WWSpTXXf/DSC03577.jpg',
  freddy_story: 'https://i.ibb.co/qLP2hLn2/DSC07739.jpg',
  freddy_gallery_1: 'https://i.ibb.co/cXpgH0T9/DSC08013.jpg',
  freddy_gallery_2: 'https://i.ibb.co/G4sCvT5p/DSC08017.jpg',
  freddy_video: 'https://videos.pexels.com/video-files/5267077/5267077-hd_1920_1080_25fps.mp4',
  jasmin_main: 'https://i.ibb.co/MDZrcqZ3/DSC08135.jpg',
  jasmin_story: 'https://i.ibb.co/v65CLzHY/DSC08397.jpg',
  jasmin_gallery_1: 'https://i.ibb.co/SXXnpxTm/DSC08488.jpg',
  jasmin_gallery_2: 'https://i.ibb.co/q3M6NkL9/DSC08570.jpg',
  jasmin_video: 'https://videos.pexels.com/video-files/3254011/3254011-hd_1920_1080_25fps.mp4',
  peekaboo_main: 'https://i.ibb.co/qLCTp7Z5/DSC08607.jpg',
  peekaboo_story: 'https://i.ibb.co/jkJ0rJB7/DSC08616.jpg',
  peekaboo_gallery_1: 'https://i.ibb.co/RTX6KxDJ/DSC08635.jpg',
  peekaboo_gallery_2: 'https://i.ibb.co/CxLdcJ5/DSC08830.jpg',
  peekaboo_video: 'https://videos.pexels.com/video-files/3209228/3209228-hd_1920_1080_25fps.mp4',
  rare_prophet_main: 'https://i.ibb.co/k6PstKp0/DSC00279.jpg',
  rare_prophet_story: 'https://i.ibb.co/VpVjgdGk/DSC00406.jpg',
  rare_prophet_gallery_1: 'https://i.ibb.co/wFz4LXz1/DSC00523.jpg',
  rare_prophet_gallery_2: 'https://i.ibb.co/pvR5ZbbY/DSC00619.jpg',
  rare_prophet_video: 'https://videos.pexels.com/video-files/3209210/3209210-hd_1920_1080_25fps.mp4',
  sashay_main: 'https://i.ibb.co/7tX8xjd4/DSC00980.jpg',
  sashay_story: 'https://i.ibb.co/GvwgC6Fp/DSC01400.jpg',
  sashay_gallery_1: 'https://i.ibb.co/MktMfbHF/DSC01444.jpg',
  sashay_gallery_2: 'https://i.ibb.co/5xjpbCrT/DSC01660.jpg',
  sashay_video: 'https://videos.pexels.com/video-files/5267077/5267077-hd_1920_1080_25fps.mp4',
  shadow_main: 'https://i.ibb.co/1g4v2vd/DSC02009.jpg',
  shadow_story: 'https://i.ibb.co/84Smg3bG/DSC02276.jpg',
  shadow_gallery_1: 'https://i.ibb.co/V0MH0zfm/DSC02334.jpg',
  shadow_gallery_2: 'https://i.ibb.co/YFkT8FBH/DSC02336.jpg',
  shadow_gallery_3: 'https://i.ibb.co/nMmm0h60/DSC02351.jpg',
  shadow_video: 'https://videos.pexels.com/video-files/3254011/3254011-hd_1920_1080_25fps.mp4',
  bubblegum_main: 'https://i.ibb.co/C3bCGhwk/DSC02383.jpg',
  bubblegum_story: 'https://i.ibb.co/rftF6tYJ/DSC02469.jpg',
  bubblegum_gallery_1: 'https://i.ibb.co/ZRkShpwp/DSC02785.jpg',
  bubblegum_gallery_2: 'https://i.ibb.co/B2ftWzXg/DSC02888.jpg',
  bubblegum_video: 'https://videos.pexels.com/video-files/5267077/5267077-hd_1920_1080_25fps.mp4',
  // --- NEW FOREVER HORSES ---
  beyonce_new_main: 'https://i.ibb.co/bMxz1Pkp/image.png',
  sensation_main: 'https://i.ibb.co/4gd4L8Qm/image.png',
  rare_prophet_new_main: 'https://i.ibb.co/yT9hsk4/image.png',
  flashing_sparkles_main: 'https://i.ibb.co/GfB1RhvG/image.png',
  dundees_star_main: 'https://i.ibb.co/pjycL83L/image.png',
  bubblegum_new_main: 'https://i.ibb.co/JFK803kk/image.png',
  charlie_new_main: 'https://i.ibb.co/WN1VNHV7/image.png',
  princess_of_monaco_main: 'https://i.ibb.co/yFymgC3g/image.png',
  peekaboo_new_main: 'https://i.ibb.co/5hfLCsHB/image.png',
  // --- NEW ADOPTABLE/FUTURE HORSES ---
  stella_main: 'https://i.ibb.co/xK4x0K7X/image.png',
  stella_story: 'https://i.ibb.co/RkVphBnF/image.png',
  sashay_future_main: 'https://i.ibb.co/04pRr93/image.png',
  sashay_future_story: 'https://i.ibb.co/cSH9D1Js/image.png',
  freddy_future_main: 'https://i.ibb.co/bR8DX3g7/image.png',
  freddy_future_story: 'https://i.ibb.co/gb2cnL5L/image.png',
  spice_main: 'https://i.ibb.co/39T4PdyN/image.png',
  spice_story: 'https://i.ibb.co/sJwCjdnM/image.png',
  jazz_main: 'https://i.ibb.co/3mjcpWBq/image.png',
  jazz_story: 'https://i.ibb.co/DH3NqzGz/image.png',
  roxy_main: 'https://i.ibb.co/S4XFgWqq/image.png',
  roxy_story: 'https://i.ibb.co/LdFFgcmQ/image.png',
  // --- HORSE SUCCESS STORIES (NEW) ---
  stella_success_before_1: 'https://i.ibb.co/gKK8zhG/image.png',
  stella_success_before_2: 'https://i.ibb.co/CpP6ZTXX/image.png',
  stella_success_before_3: 'https://i.ibb.co/N6z7j5F4/image.png',
  stella_success_after_1: 'https://i.ibb.co/d4zGr8MK/image.png',
  stella_success_after_2: 'https://i.ibb.co/93Ng2H6F/image.png',
  charlie_success_before_1: 'https://i.ibb.co/7JdDz0kZ/image.png',
  charlie_success_before_2: 'https://i.ibb.co/tTgnMW6q/image.png',
  charlie_success_before_3: 'https://i.ibb.co/wZ2qKsQQ/image.png',
  charlie_success_after_1: 'https://i.ibb.co/TxYHCM5s/image.png',
  charlie_success_after_2: 'https://i.ibb.co/WN1VNHV7/image.png',
  peaches_success_before_1: 'https://i.ibb.co/0ysR5QLP/image.png',
  peaches_success_before_2: 'https://i.ibb.co/239swGGk/image.png',
  peaches_success_before_3: 'https://i.ibb.co/tTt4JHkC/image.png',
  peaches_success_before_4: 'https://i.ibb.co/5fJK3NT/image.png',
  peaches_success_after_1: 'https://i.ibb.co/DHPycRGf/image.png',
  peaches_success_after_2: 'https://i.ibb.co/cSWRxzHM/image.png',
  beyonce_success_before_1: 'https://i.ibb.co/4gRc046T/image.png',
  beyonce_success_before_2: 'https://i.ibb.co/MyGq5MVf/image.png',
  beyonce_success_after_1: 'https://i.ibb.co/v4mj0ZBn/image.png',
  peekaboo_success_before_1: 'https://i.ibb.co/0y5JHJv8/image.png',
  peekaboo_success_after_1: 'https://i.ibb.co/rRPVtnyL/image.png',
  sashay_success_before_1: 'https://i.ibb.co/KzKbRjgZ/image.png',
  sashay_success_after_1: 'https://i.ibb.co/cSH9D1Js/image.png',
  // --- NEW HORSE REHABILITATION IMAGES ---
  horse_rehab_hero: 'https://i.ibb.co/SXF11c3P/image.png',
  horse_rehab_farrier: 'https://i.ibb.co/qFY5XDWN/image.png',
  horse_rehab_behaviour: 'https://i.ibb.co/ccSZJmyn/image.png',
  horse_rehab_groundwork: 'https://i.ibb.co/6RrGdCQm/image.png',
  horse_rehab_desensitisation: 'https://i.ibb.co/BVqypRgY/image.png',

  // --- DOG IMAGES (UPDATED) ---
  dogs_hero_banner: 'https://i.ibb.co/svS8mMXX/DSC03012.jpg',
  dogs_intro: 'https://i.ibb.co/xqfGVkv3/DSC03088.jpg',
  adoption_hero: 'https://i.ibb.co/jPZXQBFs/DSC03204.jpg',
  forever_dogs_hero: 'https://i.ibb.co/38X4vg9/DSC03223.jpg',
  forever_dogs_day_in_life: 'https://i.ibb.co/0RRZkBQn/DSC03228-2.jpg',
  stories_ruby: 'https://i.ibb.co/pjgyd2Kr/image.png',
  stories_honey: 'https://i.ibb.co/BVD7R6Nm/DSC00774.jpg',
  stories_queenie: 'https://i.ibb.co/Y475WXP4/DSC01099.jpg',
  therapy_dog_01: 'https://i.ibb.co/kVHsDb0G/image.png',
  therapy_dog_02: 'https://i.ibb.co/MkgxrVN9/image.png',
  therapy_dog_03: 'https://images.pexels.com/photos/8434679/pexels-photo-8434679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  health_louis_story: 'https://i.ibb.co/zTqXSvvC/DSC01232.jpg',
  outings_hero: 'https://i.ibb.co/5g6Ss0Ps/DSC09944.jpg',
  training_hero: 'https://i.ibb.co/MQwNTVT/DSC02148.jpg',
  wishlist_hero: 'https://i.ibb.co/LX5p3T9M/DSC02248-2.jpg',
  hands_on_care_hero: 'https://i.ibb.co/kVBXnqQx/DSC02450.jpg',
  volunteer_hero: 'https://i.ibb.co/ZRLCnTXH/DSC02563-2.jpg',
  outreach_hero: 'https://i.ibb.co/RkbQB8t2/image.png',
  outreach_education: 'https://i.ibb.co/ymVjwrFX/image.png',
  outreach_mobile_clinic: 'https://i.ibb.co/qhJsmsM/DSC06176.jpg',
  outreach_adoption_days: 'https://i.ibb.co/pBH6nDqv/image.png',
  outreach_responsible_ownership: 'https://i.ibb.co/PsH1t3GH/image.png',
  youth_program_aim: 'https://i.ibb.co/h1M5DsWF/image.png',
  youth_program_offers: 'https://i.ibb.co/7J0v5gXs/image.png',
  alex_main: 'https://i.ibb.co/k22L58w9/image.png',
  alex_video: 'https://videos.pexels.com/video-files/3701445/3701445-hd_1920_1080_25fps.mp4',
  amber_main: 'https://i.ibb.co/nNCGtBp2/image.png',
  amber_story: 'https://i.ibb.co/r2mph7qs/image.png',
  amber_video: 'https://videos.pexels.com/video-files/8539009/8539009-hd_1920_1080_25fps.mp4',
  bagheera_main: 'https://i.ibb.co/mVFgBwWy/image.png',
  bagheera_video: 'https://videos.pexels.com/video-files/5890333/5890333-hd_1920_1080_25fps.mp4',
  benji_main: 'https://i.ibb.co/4ZcF3t74/image.png',
  benji_video: 'https://videos.pexels.com/video-files/7190369/7190369-hd_1920_1080_25fps.mp4',
  blake_main: 'https://i.ibb.co/7djRnyqf/image.png',
  blake_video: 'https://videos.pexels.com/video-files/5992441/5992441-uhd_3840_2160_25fps.mp4',
  bobi_main: 'https://i.ibb.co/27L2XcrW/image.png',
  bobi_video: 'https://videos.pexels.com/video-files/5257769/5257769-hd_1920_1080_25fps.mp4',
  bobby_main: 'https://i.ibb.co/ksk9xPhB/image.png',
  bobby_story: 'https://i.ibb.co/svS8mMXX/DSC03012.jpg',
  bobby_gallery_1: 'https://i.ibb.co/xqfGVkv3/DSC03088.jpg',
  bobby_gallery_2: 'https://i.ibb.co/jPZXQBFs/DSC03204.jpg',
  bobby_video: 'https://videos.pexels.com/video-files/5257769/5257769-hd_1920_1080_25fps.mp4',
  brooklyn_main: 'https://i.ibb.co/Kp6J0DYZ/image.png',
  brooklyn_video: 'https://videos.pexels.com/video-files/8259344/8259344-hd_1920_1080_25fps.mp4',
  buddy_main: 'https://i.ibb.co/zVd58gSX/image.png',
  buddy_video: 'https://videos.pexels.com/video-files/4588220/4588220-hd_1920_1080_25fps.mp4',
  chandra_main: 'https://i.ibb.co/QjtH2HsP/image.png',
  chandra_video: 'https://videos.pexels.com/video-files/5495856/5495856-hd_1920_1080_25fps.mp4',
  chloe_main: 'https://i.ibb.co/SXBz7fn3/image.png',
  chloe_story: 'https://i.ibb.co/nMkpQ5tX/image.png',
  chloe_video: 'https://videos.pexels.com/video-files/5257769/5257769-hd_1920_1080_25fps.mp4',
  cooper_main: 'https://i.ibb.co/6RNQ2Bc5/image.png',
  cooper_story: 'https://i.ibb.co/BVD7R6Nm/DSC00774.jpg',
  cooper_gallery_1: 'https://i.ibb.co/Y475WXP4/DSC01099.jpg',
  cooper_gallery_2: 'https://i.ibb.co/zTqXSvvC/DSC01232.jpg',
  cooper_gallery_3: 'https://i.ibb.co/67GQM4Jj/DSC01382.jpg',
  cooper_video: 'https://videos.pexels.com/video-files/7190369/7190369-hd_1920_1080_25fps.mp4',
  daisy_main: 'https://i.ibb.co/TMNsf5kk/image.png',
  daisy_story: 'https://i.ibb.co/jP9YSRL4/image.png',
  daisy_video: 'https://videos.pexels.com/video-files/3701445/3701445-hd_1920_1080_25fps.mp4',
  honey_main: 'https://i.ibb.co/qMJw6td6/image.png',
  honey_video: 'https://videos.pexels.com/video-files/8539009/8539009-hd_1920_1080_25fps.mp4',
  jerry_main: 'https://i.ibb.co/jZxRdkdW/image.png',
  jerry_video: 'https://videos.pexels.com/video-files/5890333/5890333-hd_1920_1080_25fps.mp4',
  jesse_main: 'https://i.ibb.co/bgnS7Xrw/image.png',
  jesse_video: 'https://videos.pexels.com/video-files/5992441/5992441-uhd_3840_2160_25fps.mp4',
  lady_main: 'https://i.ibb.co/99jSTDj6/image.png',
  lady_video: 'https://videos.pexels.com/video-files/8259344/8259344-hd_1920_1080_25fps.mp4',
  lee_main: 'https://i.ibb.co/wr2pZnPP/image.png',
  lee_story: 'https://i.ibb.co/ZRLCnTXH/DSC02563-2.jpg',
  lee_gallery_1: 'https://i.ibb.co/4w20RgcW/DSC02792.jpg',
  lee_gallery_2: 'https://i.ibb.co/GQG9nDY3/DSC02859-2.jpg',
  lee_gallery_3: 'https://i.ibb.co/Q3tRgvGG/DSC02919-2.jpg',
  lee_video: 'https://videos.pexels.com/video-files/4588220/4588220-hd_1920_1080_25fps.mp4',
  lexi_main: 'https://i.ibb.co/V0nCzWvP/image.png',
  lexi_video: 'https://videos.pexels.com/video-files/5495856/5495856-hd_1920_1080_25fps.mp4',
  maple_main: 'https://i.ibb.co/PGQhv7yb/image.png',
  maple_video: 'https://videos.pexels.com/video-files/5257769/5257769-hd_1920_1080_25fps.mp4',
  max_main: 'https://i.ibb.co/Q7RRynVj/image.png',
  max_story: 'https://i.ibb.co/nqK2Fc8g/image.png',
  max_video: 'https://videos.pexels.com/video-files/7190369/7190369-hd_1920_1080_25fps.mp4',
  fifi_main: 'https://i.ibb.co/Lz38HPWX/image.png',
  fifi_video: 'https://videos.pexels.com/video-files/5992441/5992441-uhd_3840_2160_25fps.mp4',
  rexi_main: 'https://i.ibb.co/G4Zr6F7J/image.png',
  rexi_video: 'https://videos.pexels.com/video-files/5257769/5257769-hd_1920_1080_25fps.mp4',
  ruth_main: 'https://i.ibb.co/bMsNVmkF/image.png',
  ruth_video: 'https://videos.pexels.com/video-files/8259344/8259344-hd_1920_1080_25fps.mp4',
  simba_main: 'https://i.ibb.co/fRTB5nK/image.png',
  simba_video: 'https://videos.pexels.com/video-files/4588220/4588220-hd_1920_1080_25fps.mp4',
  snoopy_main: 'https://i.ibb.co/Z1J1KLfT/image.png',
  snoopy_story: 'https://i.ibb.co/7dVxLmPW/image.png',
  snoopy_gallery_1: 'https://i.ibb.co/BVJHqHXc/image.png',
  snoopy_video: 'https://videos.pexels.com/video-files/5495856/5495856-hd_1920_1080_25fps.mp4',
  stacey_main: 'https://i.ibb.co/TDRxK7cw/image.png',
  stacey_story: 'https://i.ibb.co/Mx2znzgj/image.png',
  stacey_video: 'https://videos.pexels.com/video-files/5257769/5257769-hd_1920_1080_25fps.mp4',
  whitney_main: 'https://i.ibb.co/0p6BknjP/image.png',
  whitney_video: 'https://videos.pexels.com/video-files/7190369/7190369-hd_1920_1080_25fps.mp4',
  xeno_main: 'https://i.ibb.co/4nDNkR2z/image.png',
  xeno_video: 'https://videos.pexels.com/video-files/5992441/5992441-uhd_3840_2160_25fps.mp4',
  zarra_main: 'https://i.ibb.co/k6V7Jq1L/image.png',
  zarra_video: 'https://videos.pexels.com/video-files/5257769/5257769-hd_1920_1080_25fps.mp4',
  casper_main: 'https://i.ibb.co/JjJg6Tr2/image.png',
  casper_video: 'https://videos.pexels.com/video-files/5257769/5257769-hd_1920_1080_25fps.mp4',
  misty_main: 'https://i.ibb.co/kgLt4Fm4/image.png',
  misty_video: 'https://videos.pexels.com/video-files/5495856/5495856-hd_1920_1080_25fps.mp4',
  doughnut_main: 'https://i.ibb.co/Z6L4X4ss/image.png',
  doughnut_story: 'https://i.ibb.co/wvNKvth/image.png',
  maxi_main: 'https://i.ibb.co/39sSvLsZ/DSC03004-2.jpg',
  coco_main: 'https://i.ibb.co/tMr5VJQM/image.png',
  foxy_main: 'https://i.ibb.co/VW5z60MY/image.png',
  hazel_main: 'https://i.ibb.co/sp4qDqNT/image.png',
  angel_main: 'https://i.ibb.co/Wp7586Fs/image.png',
  pretty_main: 'https://i.ibb.co/4RQrkL6c/image.png',
  ruby_main: 'https://i.ibb.co/pjgyd2Kr/image.png',


  // --- GALLERY AND OTHER PAGES (Dog images updated) ---
  faq_hero: 'https://images.pexels.com/photos/7210639/pexels-photo-7210639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  faq_about: 'https://i.ibb.co/fzqVKSRZ/DSC09212.jpg',
  faq_programs: 'https://i.ibb.co/C5XgywDr/DSC03284.jpg',
  faq_adoption: 'https://i.ibb.co/GQG9nDY3/DSC02859-2.jpg',
  faq_sponsorship: 'https://i.ibb.co/Q3tRgvGG/DSC02919-2.jpg',
  faq_help: 'https://i.ibb.co/9HCc21mq/DSC03298.jpg',
  faq_contact: 'https://i.ibb.co/27xDp06N/DSC03489.jpg',
  contact_hero: 'https://i.ibb.co/9HkSDNm9/DSC00598.jpg',
  contact_cta_bg: 'https://i.ibb.co/fzqVKSRZ/DSC09212.jpg',
  partners_hero: 'https://i.ibb.co/4w20RgcW/DSC02792.jpg',
  partners_cta: 'https://i.ibb.co/9HCc21mq/DSC03298.jpg',
  gallery_hero: 'https://i.ibb.co/tM1vj3DB/DSC03309.jpg',
  gallery_dog_1: 'https://i.ibb.co/39sSvLsZ/DSC03004-2.jpg',
  gallery_dog_2: 'https://i.ibb.co/svS8mMXX/DSC03012.jpg',
  gallery_dog_3: 'https://i.ibb.co/xqfGVkv3/DSC03088.jpg',
  gallery_dog_4: 'https://i.ibb.co/jPZXQBFs/DSC03204.jpg',
  gallery_dog_5: 'https://i.ibb.co/38X4vg9/DSC03223.jpg',
  gallery_dog_6: 'https://i.ibb.co/0RRZkBQn/DSC03228-2.jpg',
  gallery_dog_video: 'https://videos.pexels.com/video-files/3701445/3701445-hd_1920_1080_25fps.mp4',
  gallery_horse_1: 'https://i.ibb.co/R43Cg3yY/DSC03341.jpg',
  gallery_horse_2: 'https://i.ibb.co/VcLM0LWK/DSC04065-2.jpg',
  gallery_horse_3: 'https://i.ibb.co/Cpvbd3QR/DSC04102-2.jpg',
  gallery_horse_4: 'https://i.ibb.co/svZS4rDL/DSC08049.jpg',
  gallery_horse_5: 'https://i.ibb.co/WvVYJNRF/DSC08062.jpg',
  gallery_horse_6: 'https://i.ibb.co/x8LYrgfW/DSC08102.jpg',
  gallery_horse_video: 'https://videos.pexels.com/video-files/2886287/2886287-hd_1280_720_25fps.mp4',
  gallery_community_1: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  gallery_community_2: 'https://i.ibb.co/0ysR5QLP/image.png',
  gallery_community_3: 'https://i.ibb.co/tM1vj3DB/DSC03309.jpg',
  gallery_vet_1: 'https://i.ibb.co/mK3B41K/DSC08108.jpg',
  gallery_vet_2: 'https://i.ibb.co/gFftZfwx/DSC08417.jpg',
  gallery_sanctuary_1: 'https://i.ibb.co/fzqVKSRZ/DSC09212.jpg',
  gallery_sanctuary_2: 'https://i.ibb.co/QFbVtgCs/DSC08441.jpg',
  gallery_sanctuary_3: 'https://i.ibb.co/BVD7R6Nm/DSC00774.jpg', // Replaced mismatched image with a photo of napping dogs.
  gallery_bella_before: 'https://i.ibb.co/XfPq7BMz/DSC03353-2.jpg',
  gallery_bella_after: 'https://i.ibb.co/BVD7R6Nm/DSC00774.jpg',
  community_hero: 'https://i.ibb.co/9HkSDNm9/DSC00598.jpg',
  community_matters: 'https://i.ibb.co/R43Cg3yY/DSC03341.jpg',
  community_outreach: 'https://i.ibb.co/yBFj9WnZ/DSC03629-2.jpg',
  community_vet_clinic: 'https://i.ibb.co/vvMM03Nr/DSC08463.jpg',
  community_youth_programme: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  community_hands_on: 'https://images.pexels.com/photos/4588052/pexels-photo-4588052.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  
  // --- DONATE PAGE IMAGES ---
  donate_hero: 'https://i.ibb.co/kgGLTcRx/DSC00096-1.jpg',
  donate_story_1: 'https://i.ibb.co/9k5KjBbF/DSC03214.jpg',
  donate_story_2: 'https://i.ibb.co/qMJw6td6/image.png',
  donate_volunteer: 'https://i.ibb.co/5g6Ss0Ps/DSC09944.jpg',
  donate_sponsor: 'https://i.ibb.co/xqfGVkv3/DSC03088.jpg',
  donate_wishlist: 'https://i.ibb.co/jPZXQBFs/DSC03204.jpg',
};

const AppContent: React.FC = () => {
    const { path } = useSafeNavigation();
    
    const [mountSplash, setMountSplash] = useState(!sessionStorage.getItem('splashShown'));
    const [isSplashVisible, setIsSplashVisible] = useState(mountSplash);

    useEffect(() => {
      if (mountSplash) {
        sessionStorage.setItem('splashShown', 'true');
        document.body.style.overflow = 'hidden';

        const visibilityTimer = setTimeout(() => {
          setIsSplashVisible(false);
        }, 2000); // Visible for 2 seconds

        const mountTimer = setTimeout(() => {
          setMountSplash(false);
          document.body.style.overflow = '';
        }, 2500); // Unmount after 2s + 500ms fade out

        return () => {
          clearTimeout(visibilityTimer);
          clearTimeout(mountTimer);
          document.body.style.overflow = '';
        };
      }
    }, [mountSplash]);

    const [mediaContent, setMediaContent] = useState<MediaContent>(initialMediaContent);
    const [isEditMode, setIsEditMode] = useState(false);
    const [heroConfig, setHeroConfig] = useState<HeroConfig>({
        media: [
            { url: initialMediaContent.hero_banner_03!, focalPoint: { x: 0.6, y: 0.5 } },
            { url: initialMediaContent.horses_landing_hero!, focalPoint: { x: 0.5, y: 0.6 } },
            { url: initialMediaContent.dogs_hero_banner!, focalPoint: { x: 0.4, y: 0.4 } },
            { url: initialMediaContent.about_hero!, focalPoint: { x: 0.5, y: 0.5 } },
        ]
    });
    
    const handleMediaUpdate = useCallback((key: string, url: string) => {
        setMediaContent(prev => ({ ...prev, [key]: url }));
    }, []);

    const handleSaveChanges = useCallback((changes: Record<string, string>) => {
        setMediaContent(prev => ({ ...prev, ...changes }));
        
        // Generate code for persistent changes
        const updatedMedia = { ...mediaContent, ...changes };
        const codeUpdate = `
// Updated Media Content - Replace in App.tsx initialMediaContent
const initialMediaContent: MediaContent = {
${Object.entries(updatedMedia).map(([key, url]) => `  ${key}: '${url}',`).join('\n')}
};
        `.trim();
        
        // Log to console for now (in production, this could save to a file)
        console.log('🔄 Media Content Update Code:');
        console.log(codeUpdate);
        
        // Show success message
        alert('Changes saved! Check the browser console for the code to update your App.tsx file.');
    }, [mediaContent]);

    const toggleEditMode = useCallback(() => {
        setIsEditMode(prev => !prev);
    }, []);
    
    useEffect(() => {
        // Apply page-specific CSS classes and force colors
        const body = document.body;
        body.classList.remove('horse-page-override', 'dog-page-override');
        
        if (path.includes('/horses') || path === '/horses') {
            body.classList.add('horse-page-override');
            
            // Force green colors on horse pages with JavaScript
            setTimeout(() => {
                const forceGreenColor = () => {
                    const elements = document.querySelectorAll('.horse-page-override h1:not(.hero h1), .horse-page-override h2:not(.hero h2), .horse-page-override h3:not(.hero h3), .horse-page-override .text-3xl:not(.hero *), .horse-page-override .text-4xl:not(.hero *), .horse-page-override .text-5xl:not(.hero *), .horse-page-override .font-bold:not(.hero *), .horse-page-override .font-black:not(.hero *)');
                    elements.forEach((el: Element) => {
                        const htmlEl = el as HTMLElement;
                        if (!htmlEl.style.color?.includes('white')) {
                            htmlEl.style.setProperty('color', '#16a34a', 'important');
                        }
                    });
                };
                forceGreenColor();
                // Re-apply every 100ms to catch dynamically loaded content
                const interval = setInterval(forceGreenColor, 100);
                setTimeout(() => clearInterval(interval), 2000);
            }, 50);
            
        } else if (path.includes('/dogs') || path === '/dogs' || path.includes('/dog-') || path === '/adopt-a-dog' || path === '/forever-dogs') {
            body.classList.add('dog-page-override');
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        const targets = document.querySelectorAll('.animate-on-scroll');
        document.querySelectorAll('.stagger-children').forEach(container => {
            const children = container.querySelectorAll('.animate-on-scroll');
            children.forEach((child, index) => {
                (child as HTMLElement).style.transitionDelay = `${index * 100}ms`;
            });
        });
        targets.forEach(target => observer.observe(target));

        return () => {
            targets.forEach(target => observer.unobserve(target));
            // Clean up classes when component unmounts
            body.classList.remove('horse-page-override', 'dog-page-override');
        };
    }, [path]);
    
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.ctrlKey && e.key === 'e') {
                e.preventDefault();
                toggleEditMode();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [toggleEditMode]);

    const pageProps = { mediaContent, isEditMode, onMediaUpdate: handleMediaUpdate };

    const renderPage = () => {
        // Handle specific paths first to avoid being caught by dynamic routes
        switch (path) {
            case '/': return <HomePage heroConfig={heroConfig} {...pageProps} />;
            case '/about': return <AboutPage {...pageProps} />;
            case '/team': return <TeamPage {...pageProps} />;
            case '/dogs': return <DogsLandingPage {...pageProps} />;
            case '/horses': return <HorsesLandingPage {...pageProps} />;
            case '/community': return <CommunityPage {...pageProps} />;
            case '/get-involved': return <GetInvolvedLandingPage {...pageProps} />;
            case '/gallery': return <GalleryPage {...pageProps} />;
            case '/contact': return <ContactPage {...pageProps} />;
            case '/faq': return <FAQPage {...pageProps} />;
            case '/partners': return <PartnersPage {...pageProps} />;
            
            case '/adopt-a-dog': return <DogAdoptionPage {...pageProps} />;
            case '/forever-dogs': return <ForeverDogsPage {...pageProps} />;
            case '/dogs/sponsorship': return <DogSponsorshipPage {...pageProps} />;
            case '/dog-stories': return <DogStoriesPage {...pageProps} />;
            case '/animal-health': return <AnimalHealthPage {...pageProps} />;
            case '/dog-outings': return <DogOutingsPage {...pageProps} />;
            case '/dog-training': return <DogTrainingPage {...pageProps} />;
            case '/dog-wishlist': return <DogWishlistPage {...pageProps} />;
            case '/hands-on-dogs': return <HandsOnDogsPage {...pageProps} />;

            case '/horses/facilities': return <HorseFacilitiesPage {...pageProps} />;
            case '/horses/training': return <HorseTrainingPage {...pageProps} />;
            case '/horses/success-stories': return <HorseSuccessStoriesPage {...pageProps} />;
            case '/horses/needs': return <HorseNeedsPage {...pageProps} />;
            case '/horses/rehabilitation': return <HorseRehabilitationPage {...pageProps} />;

            case '/youth': return <YouthProgrammePage {...pageProps} />;
            
            case '/donate': return <DonatePage {...pageProps} />;
            case '/horses-enrichment': return <PlaceholderPage title="Horse Enrichment" />;
            case '/horses-future-vision': return <PlaceholderPage title="Our Future Vision" />;
        }

        // Then, handle dynamic routes
        const dogProfileMatch = path.match(/^\/dogs\/([a-zA-Z0-9_-]+)$/);
        if (dogProfileMatch) {
            return <DogProfilePage dogId={dogProfileMatch[1]} {...pageProps} />;
        }
        
        const horseProfileMatch = path.match(/^\/horses\/view\/([a-zA-Z0-9_-]+)$/);
        if (horseProfileMatch) {
            return <HorseProfilePage horseId={horseProfileMatch[1]} {...pageProps} />;
        }

        // Fallback for any unmatched route
        return <HomePage heroConfig={heroConfig} {...pageProps} />;
    };

    return (
        <div className="bg-brand-bg-main text-brand-text-primary font-sans transition-colors duration-300 min-h-screen">
            {mountSplash && <SplashScreen isVisible={isSplashVisible} />}
            <DebugFocalPoints />
            <Header />
            <main className="pt-[88px] animate-page-fade max-content-width-lg" key={path}>
                {renderPage()}
            </main>
            <Footer />
        </div>
    );
};


const App: React.FC = () => {
  return (
    <NavigationProvider>
        <AppContent />
    </NavigationProvider>
  );
};

export default App;