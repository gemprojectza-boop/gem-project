

export interface FocalPoint {
  x: number;
  y: number;
}

export interface MediaContent {
  [key: string]: string | null;
}

export interface FocalPointData {
  [mediaKey: string]: FocalPoint;
}

export type SectionKey = 'welcome' | 'impact_stats' | 'animal_sections' | 'community' | 'youth' | 'get_involved' | 'final_cta';

export interface HeroMedia {
  url: string;
  focalPoint: { x: number; y: number };
}

export interface HeroConfig {
  media: HeroMedia[];
}

export interface AdoptableHorse {
  id: string;
  name: string;
  status: 'Available' | 'Adoption Pending' | 'Adopted' | 'Forever Sanctuary' | 'Future Adoptable';
  petInfo: {
    age: string;
    breed: string;
    gender: 'Stallion' | 'Mare' | 'Gelding';
    size: string;
  };
  idealHome: string;
  story: {
    title: string;
    text: string;
  };
  personality: {
    title: string;
    text: string;
  };
  specialTrait: {
    title:string;
    points: string[];
  };
  loveReason: {
    title: string;
    text: string;
  };
  media: {
    mainPhotoKey: string;
    storyPhotoKey: string;
    galleryKeys: string[];
    videoKey: string;
  };
}

export interface AdoptableDog {
  id: string;
  name: string;
  status: 'Available' | 'Adoption Pending' | 'Adopted' | 'Forever Sanctuary';
  petInfo: {
    age: string;
    breed: string;
    gender: string;
    sterilised: 'Yes' | 'No' | 'Too Young';
    size: 'Small' | 'Medium' | 'Large' | 'Extra Large';
  };
  compatibility: {
    kids: 'Yes' | 'No' | 'Older Kids Only' | 'Unknown';
    dogs: 'Yes' | 'No' | 'With Proper Introduction' | 'Unknown';
    cats: 'Yes' | 'No' | 'Unknown';
  };
  idealHome: string;
  story: {
    title: string;
    text: string;
  };
  personality: {
    title: string;
    text: string;
  };
  specialTrait: {
    title: string;
    points: string[];
  };
  loveReason: {
    title: string;
    text: string;
  };
  media: {
    mainPhotoKey: string;
    storyPhotoKey: string;
    galleryKeys: string[];
    videoKey: string;
  };
}