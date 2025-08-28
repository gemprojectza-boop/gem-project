
import React from 'react';
import { AdoptableHorse, MediaContent } from '../../types.ts';
import EditableMedia from '../EditableMedia.tsx';
import { useSafeNavigation } from '../../contexts/NavigationContext.tsx';

interface HorseProfileCardProps {
  horse: AdoptableHorse;
  mediaContent: MediaContent;
  isEditMode: boolean;
  onMediaUpdate: (key: string, url:string) => void;
}

const HorseProfileCard: React.FC<HorseProfileCardProps> = ({ horse, mediaContent, isEditMode, onMediaUpdate }) => {
    const { navigate } = useSafeNavigation();
    const imageUrl = mediaContent[horse.media.mainPhotoKey];

    const statusColor = {
        'Available': 'bg-brand-accent',
        'Adoption Pending': 'bg-brand-text-secondary',
        'Adopted': 'bg-brand-secondary',
        'Forever Sanctuary': 'bg-brand-primary',
        'Future Adoptable': 'bg-teal-500' // Kept teal for distinction, can be changed
    };

    return (
        <div 
            className="content-bubble flex flex-col h-full group cursor-pointer transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl animate-on-scroll"
            onClick={() => navigate(`/horses/view/${horse.id}`)}
            style={{ padding: '0', overflow: 'hidden', margin: 0 }}
            role="link"
            aria-label={`View profile for ${horse.name}`}
        >
            <div className="relative">
                {imageUrl ? (
                    <EditableMedia
                        mediaKey={horse.media.mainPhotoKey}
                        mediaUrl={imageUrl}
                        alt={`Photo of ${horse.name}`}
                        isEditMode={isEditMode}
                        onUpdate={onMediaUpdate}
                        className="aspect-square w-full h-full object-cover"
                    />
                ) : (
                    <div className="aspect-square w-full bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-500">No Image</span>
                    </div>
                )}
                <div className={`absolute top-2 right-2 px-3 py-1 text-xs font-bold text-white rounded-full shadow-lg ${statusColor[horse.status]}`}>
                    {horse.status}
                </div>
            </div>
            <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-brand-text-primary group-hover:text-brand-primary transition-colors">{horse.name}</h3>
                <p className="text-brand-text-secondary text-sm mb-2">{horse.petInfo.breed}</p>
                <p className="text-brand-text-secondary text-sm mb-4 flex-grow">{horse.idealHome}</p>
                <button className="mt-auto w-full bg-brand-primary text-white font-bold py-2 px-4 rounded-full transition-colors duration-300 hover:bg-brand-primary-hover">
                    Meet {horse.name}
                </button>
            </div>
        </div>
    );
}

export default HorseProfileCard;