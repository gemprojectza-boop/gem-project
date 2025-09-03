
import React from 'react';
import { MediaContent } from '../types.ts';
import EditableMedia from './EditableMedia.tsx';
import { PawIcon } from './icons.tsx';

interface PageHeroProps {
  title: string;
  subtitle: string;
  mediaKey: string;
  mediaContent: MediaContent;
  isEditMode: boolean;
  onMediaUpdate: (key: string, url: string) => void;
  alt: string;
  titleColorClass?: string;
}

export const PageHero: React.FC<PageHeroProps> = ({
  title,
  subtitle,
  mediaKey,
  mediaContent,
  isEditMode,
  onMediaUpdate,
  alt,
  titleColorClass = 'text-brand-primary'
}) => {
  const mediaUrl = mediaContent[mediaKey];

  return (
    <section className="hero relative bg-brand-text-primary text-white section-padding-xl text-center overflow-hidden min-h-[60vh] flex items-center justify-center">
      <div className="absolute inset-0">
        {mediaUrl ? (
          <EditableMedia
            mediaKey={mediaKey}
            mediaUrl={mediaUrl}
            alt={alt}
            className="w-full h-full object-contain transition-transform duration-700 hover:scale-105"
            isEditMode={isEditMode}
            onUpdate={onMediaUpdate}
            loading="eager"
          />
        ) : <div className="w-full h-full bg-brand-text-primary" />}
      </div>
      <div className="relative container mx-auto px-6 z-10 flex items-center justify-center w-full" style={{textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
        <div className="max-w-6xl mx-auto animate-on-scroll text-center" style={{textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
          <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <h1 className={`text-heading-xl uppercase tracking-tight mb-8 text-white`} style={{textAlign: 'center', margin: '0 auto', textShadow: '3px 3px 6px rgba(0,0,0,0.8), 1px 1px 3px rgba(0,0,0,0.6)'}}>
              {title}
            </h1>
            <p className="text-body-lg max-w-4xl mx-auto leading-relaxed text-white" style={{textAlign: 'center', margin: '0 auto', textShadow: '2px 2px 4px rgba(0,0,0,0.8), 1px 1px 2px rgba(0,0,0,0.6)'}}>
              {subtitle}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};


interface ContentSectionProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
  titleClassName?: string;
  textClassName?: string;
  id?: string;
  titleColorClass?: string;
}

export const ContentSection: React.FC<ContentSectionProps> = ({
  title,
  children,
  className = "",
  titleClassName,
  titleColorClass,
  textClassName,
  id,
}) => {
  const isDarkBg = className.includes('bg-brand-dark') || className.includes('bg-brand-text-primary');
  const finalTitleColorClass = titleColorClass
    ? titleColorClass
    : (isDarkBg ? '' : 'text-brand-primary');
  
  return (
      <section id={id} className={`section-padding ${className} animate-on-scroll`} style={{textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
          <div className="container mx-auto px-6 max-w-6xl" style={{textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
              <div className={`content-bubble p-10 md:p-16 rounded-2xl ${isDarkBg ? 'content-bubble-inverted' : 'bg-white border border-gray-100'}`} style={{textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                  {title && (
                    <div className={`mb-12 text-center`} style={{textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                      <PawIcon className={`w-14 h-14 mb-8 icon-interactive mx-auto ${finalTitleColorClass || 'text-brand-primary'}`} />
                      <h2 className={`text-heading-lg mb-6 ${titleClassName || ''} ${finalTitleColorClass} text-center`} style={{textAlign: 'center', margin: '0 auto'}}>{title}</h2>
                      <div className={`w-24 h-1 rounded-full ${finalTitleColorClass ? finalTitleColorClass.replace('text-', 'bg-') : 'bg-brand-primary'} mx-auto`}></div>
                    </div>
                  )}
                  <div className={`space-y-8 text-body leading-relaxed ${textClassName}`} style={{textAlign: 'center', margin: '0 auto'}}>
                      {children}
                  </div>
              </div>
          </div>
      </section>
  );
};