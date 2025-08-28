
import React, { useState, useEffect, useCallback } from 'react';
import { XIcon, ChevronLeftIcon, ChevronRightIcon } from './icons.tsx';

export interface LightboxImage {
    src: string;
    caption: string;
}

interface LightboxProps {
    images: LightboxImage[];
    startIndex: number;
    onClose: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({ images, startIndex, onClose }) => {
    const [currentIndex, setCurrentIndex] = useState(startIndex);

    const goToPrevious = useCallback(() => {
        setCurrentIndex(prevIndex => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    }, [images.length]);

    const goToNext = useCallback(() => {
        setCurrentIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, [images.length]);
    
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowLeft') goToPrevious();
            if (e.key === 'ArrowRight') goToNext();
            if (e.key === 'Escape') onClose();
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [goToPrevious, goToNext, onClose]);

    if (!images || images.length === 0) return null;

    const currentImage = images[currentIndex];

    return (
        <div 
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 animate-fade-in"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-label="Image gallery"
        >
            {/* Main Content */}
            <div className="relative max-w-screen-lg max-h-full flex flex-col" onClick={e => e.stopPropagation()}>
                <img 
                    src={currentImage.src} 
                    alt={currentImage.caption} 
                    className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
                />
                {currentImage.caption && (
                     <div className="text-center text-white mt-3 p-2 bg-black/30 rounded-b-lg">
                        <p>{currentImage.caption}</p>
                    </div>
                )}
            </div>

            {/* Close Button */}
            <button
                onClick={onClose}
                className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/80 transition-colors"
                aria-label="Close gallery"
            >
                <XIcon className="w-6 h-6" />
            </button>

            {/* Navigation Buttons */}
            {images.length > 1 && (
                <>
                    <button
                        onClick={goToPrevious}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/50 rounded-full p-2 hover:bg-black/80 transition-colors"
                        aria-label="Previous image"
                    >
                        <ChevronLeftIcon className="w-8 h-8" />
                    </button>
                    <button
                        onClick={goToNext}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/50 rounded-full p-2 hover:bg-black/80 transition-colors"
                        aria-label="Next image"
                    >
                        <ChevronRightIcon className="w-8 h-8" />
                    </button>
                </>
            )}

             <style>{`
                @keyframes animate-fade-in {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                .animate-fade-in {
                    animation: animate-fade-in 0.3s ease-out;
                }
            `}</style>
        </div>
    );
};

export default Lightbox;
