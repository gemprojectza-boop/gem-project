import React, { useState, useRef, useEffect } from 'react';
import CtaButton from './CtaButton.tsx';
import { HeroMedia } from '../types.ts';

interface HeroProps {
  media: HeroMedia[];
  isEditMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ media, isEditMode }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () => setCurrentIndex((prevIndex) => (prevIndex + 1) % media.length),
      5000 // Change slide every 5 seconds
    );

    return () => {
      resetTimeout();
    };
  }, [currentIndex, media.length]);
  
  const handleDotClick = (index: number) => {
      setCurrentIndex(index);
  };

  return (
    <>
      <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 z-10"></div>
        <div className="absolute top-0 left-0 w-full h-full">
            {media.map((mediaItem, index) => {
                 const cleanMediaUrl = mediaItem.url.split('#')[0];
                 const isVideo = cleanMediaUrl.match(/\.(mp4|webm|ogv)$/i);
                 const isActive = index === currentIndex;
                 const objectPosition = `${mediaItem.focalPoint.x * 100}% ${mediaItem.focalPoint.y * 100}%`;

                 return (
                    <div 
                        key={index}
                        className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${isActive ? 'opacity-100' : 'opacity-0'}`}
                        aria-hidden={!isActive}
                    >
                         {isVideo ? (
                             <video
                              autoPlay
                              loop
                              muted
                              playsInline
                              src={cleanMediaUrl}
                              className="w-full h-full object-cover"
                              style={{ objectPosition }}
                            ></video>
                        ) : (
                            <img 
                                src={cleanMediaUrl}
                                alt="Sanctuary hero background"
                                className="w-full h-full object-cover"
                                style={{ objectPosition }}
                                loading={index === 0 ? 'eager' : 'lazy'}
                                decoding="async"
                            />
                        )}
                    </div>
                 );
            })}
        </div>
        <div className="relative z-20 text-center px-4 max-content-width">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-wider mb-4 animate-fade-in-down text-brand-primary text-shadow-strong" style={{ animationDelay: '200ms' }}>
            <span>Rescue, Rebuild, Rehome</span>
          </h1>
          <p className="text-lg md:text-xl text-container mx-auto mb-8 animate-fade-in-up text-shadow-custom" style={{ animationDelay: '400ms' }}>
            Every animal’s journey is honoured. From those waiting for a forever home to our permanent residents, each one receives the love, care and dignity they deserve.
          </p>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              <CtaButton href="/dogs" className="bg-brand-secondary hover:bg-brand-secondary-hover text-white text-sm md:text-base btn-pulse animate-fade-in-up" style={{ animationDelay: '600ms' }}>Meet Our Dogs</CtaButton>
              <CtaButton href="/horses" className="bg-brand-accent hover:bg-brand-accent-hover text-white text-sm md:text-base btn-pulse animate-fade-in-up" style={{ animationDelay: '700ms' }}>Meet Our Horses</CtaButton>
              <CtaButton href="/get-involved#volunteer" className="bg-brand-yellow hover:bg-brand-yellow-hover text-brand-text-primary text-sm md:text-base animate-fade-in-up" style={{ animationDelay: '800ms' }}>Volunteer</CtaButton>
              <CtaButton href="/donate" className="bg-brand-primary hover:bg-brand-primary-hover text-white text-sm md:text-base btn-pulse animate-fade-in-up" style={{ animationDelay: '900ms' }}>Donate</CtaButton>
          </div>
        </div>
         {/* Navigation Dots */}
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
            {media.map((_, index) => (
                <button
                    key={index}
                    onClick={() => handleDotClick(index)}
                    aria-label={`Go to slide ${index + 1}`}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === index ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'}`}
                />
            ))}
        </div>
      </section>
    </>
  );
};

export default Hero;