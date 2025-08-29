
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
        'Available': 'bg-green-600',
        'Adoption Pending': 'bg-brand-text-secondary',
        'Adopted': 'bg-brand-secondary',
        'Forever Sanctuary': 'bg-green-600',
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
            {imageUrl && (
                <EditableMedia 
                    mediaKey={horse.media.mainPhotoKey}
                    mediaUrl={imageUrl}
                    alt={`${horse.name} - ${horse.breed}`}
                    className="w-full aspect-video object-cover rounded-t-lg"
                    isEditMode={isEditMode}
                    onUpdate={onMediaUpdate}
                />
            )}
            
            <div className="p-4 flex-grow">
                <h3 className="text-xl font-bold mb-2" style={{color: '#16a34a !important'}}>{horse.name}</h3>
                <p className="text-sm" style={{color: '#6b7280'}}>{horse.breed}</p>
            </div>
        </div>
    );
}

export default HorseProfileCard;