



import React, { useState } from 'react';
import { MediaContent, HeroConfig, SectionKey } from '../types.ts';

import Hero from './Hero.tsx';
import About from './About.tsx';
import ImpactStats from './ImpactStats.tsx';
import MeetTheAnimals from './MeetTheAnimals.tsx';
import HowToHelp from './HowToHelp.tsx';
import YouthProgramme from './YouthProgramme.tsx';
import CommunityEvents from './CommunityEvents.tsx';
import FinalCTA from './FinalCTA.tsx';
import EditableSection from './EditableSection.tsx';

interface HomePageProps {
    mediaContent: MediaContent;
    isEditMode: boolean;
    heroConfig: HeroConfig;
    onMediaUpdate: (key: string, url: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ mediaContent, isEditMode, heroConfig, onMediaUpdate }) => {
    const [sections, setSections] = useState<SectionKey[]>(['welcome', 'impact_stats', 'animal_sections', 'community', 'youth', 'get_involved', 'final_cta']);

    const handleMove = (fromIndex: number, toIndex: number) => {
        if (toIndex < 0 || toIndex >= sections.length) return;
        const newSections = [...sections];
        const [movedItem] = newSections.splice(fromIndex, 1);
        newSections.splice(toIndex, 0, movedItem);
        setSections(newSections);
    };

    const sectionComponents: Record<SectionKey, React.ReactNode> = {
        welcome: <About mediaContent={mediaContent} isEditMode={isEditMode} onMediaUpdate={onMediaUpdate} />,
        impact_stats: <ImpactStats />,
        animal_sections: <MeetTheAnimals mediaContent={mediaContent} isEditMode={isEditMode} onMediaUpdate={onMediaUpdate} />,
        community: <CommunityEvents mediaContent={mediaContent} isEditMode={isEditMode} onMediaUpdate={onMediaUpdate} />,
        youth: <YouthProgramme mediaContent={mediaContent} isEditMode={isEditMode} onMediaUpdate={onMediaUpdate} />,
        get_involved: <HowToHelp mediaContent={mediaContent} isEditMode={isEditMode} onMediaUpdate={onMediaUpdate} />,
        final_cta: <FinalCTA mediaContent={mediaContent} isEditMode={isEditMode} onMediaUpdate={onMediaUpdate} />,
    };

    return (
        <>
            <Hero 
                media={heroConfig.media}
                isEditMode={isEditMode}
            />
            {sections.map((key, index) => (
                <EditableSection
                    key={key}
                    title={key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                    isEditMode={isEditMode}
                    isFirst={index === 0}
                    isLast={index === sections.length - 1}
                    onMoveUp={() => handleMove(index, index - 1)}
                    onMoveDown={() => handleMove(index, index + 1)}
                >
                    {sectionComponents[key]}
                </EditableSection>
            ))}
        </>
    );
};

export default HomePage;