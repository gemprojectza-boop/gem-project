

import React from 'react';
import { AdoptableDog, MediaContent } from '../../types.ts';
import EditableMedia from '../EditableMedia.tsx';
import { useSafeNavigation } from '../../contexts/NavigationContext.tsx';

interface DogProfileCardProps {
  dog: AdoptableDog;
  mediaContent: MediaContent;
  isEditMode: boolean;
  onMediaUpdate: (key: string, url:string) => void;
}

const DogProfileCard: React.FC<DogProfileCardProps> = ({ dog, mediaContent, isEditMode, onMediaUpdate }) => {
    const { navigate } = useSafeNavigation();
    const imageUrl = mediaContent[dog.media.mainPhotoKey];


    return (
        <div 
            className="content-bubble flex flex-col h-full group cursor-pointer transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl animate-on-scroll"
            onClick={() => navigate(`/dogs/${dog.id}`)}
            style={{ padding: '0', overflow: 'hidden', margin: 0 }}
            role="link"
            aria-label={`View profile for ${dog.name}`}
        >
            <div className="relative">
                {imageUrl ? (
                    <EditableMedia
                        mediaKey={dog.media.mainPhotoKey}
                        mediaUrl={imageUrl}
                        alt={`Photo of ${dog.name}`}
                        isEditMode={isEditMode}
                        onUpdate={onMediaUpdate}
                        className="aspect-square w-full h-full object-cover"
                    />
                ) : (
                    <div className="aspect-square w-full bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-500">No Image</span>
                    </div>
                )}
            </div>
            <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-brand-text-primary group-hover:text-brand-primary transition-colors text-center">{dog.name}</h3>
                <p className="text-brand-text-secondary text-sm mb-2 text-center">{dog.petInfo.breed}</p>
                <p className="text-brand-text-secondary text-sm mb-4 flex-grow text-center">{dog.idealHome}</p>
                <button className="mt-auto w-full bg-brand-primary text-white font-bold py-2 px-4 rounded-full transition-colors duration-300 hover:bg-brand-primary-hover">
                    Meet {dog.name}
                </button>
            </div>
        </div>
    );
}

export default DogProfileCard;