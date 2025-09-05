



import React, { useState, useEffect } from 'react';
import { MediaContent, HeroConfig, SectionKey } from '../types.ts';

import Hero from './Hero.tsx';
import About from './About.tsx';
import FourPillars from './FourPillars.tsx';
import MeetTheAnimals from './MeetTheAnimals.tsx';
import HowToHelp from './HowToHelp.tsx';
import YouthProgramme from './YouthProgramme.tsx';
import CommunityEvents from './CommunityEvents.tsx';
import FinalCTA from './FinalCTA.tsx';
import EditableSection from './EditableSection.tsx';
import DraggableWrapper from './DraggableWrapper.tsx';
import DropZone from './DropZone.tsx';
import { useDragDrop } from '../contexts/DragDropContext.tsx';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';

interface HomePageProps {
    mediaContent: MediaContent;
    isEditMode: boolean;
    heroConfig: HeroConfig;
    onMediaUpdate: (key: string, url: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ mediaContent, isEditMode, heroConfig, onMediaUpdate }) => {
    const { state, actions } = useDragDrop();
    const [sections, setSections] = useState<SectionKey[]>(['welcome', 'pillars', 'animal_sections', 'community', 'youth', 'get_involved', 'final_cta']);

    // Initialize drag drop items for sections if not already done
    useEffect(() => {
        sections.forEach((sectionKey, index) => {
            if (!state.items[sectionKey]) {
                actions.addItem({
                    id: sectionKey,
                    type: 'section',
                    content: { 
                        title: sectionKey.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
                        index 
                    }
                });
            }
        });
    }, [sections, state.items, actions]);

    const handleMove = (fromIndex: number, toIndex: number) => {
        if (toIndex < 0 || toIndex >= sections.length) return;
        const newSections = [...sections];
        const [movedItem] = newSections.splice(fromIndex, 1);
        newSections.splice(toIndex, 0, movedItem);
        setSections(newSections);
        actions.updateLayout(newSections);
    };

    const sectionComponents: Record<SectionKey, React.ReactNode> = {
        welcome: <About mediaContent={mediaContent} isEditMode={isEditMode} onMediaUpdate={onMediaUpdate} />,
        pillars: <FourPillars mediaContent={mediaContent} isEditMode={isEditMode} onMediaUpdate={onMediaUpdate} />,
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
            <DropZone 
                id="main-content"
                allowedTypes={['section', 'component']}
                className="min-h-screen"
            >
                <SortableContext 
                    items={sections}
                    strategy={verticalListSortingStrategy}
                >
                    {sections.map((key, index) => (
                        <DraggableWrapper
                            key={key}
                            id={key}
                            type="section"
                            onEdit={() => {
                                // Handle section editing
                                console.log('Edit section:', key);
                            }}
                            onDelete={() => {
                                // Handle section deletion
                                if (confirm(`Delete section "${key.replace(/_/g, ' ')}"?`)) {
                                    const newSections = sections.filter(s => s !== key);
                                    setSections(newSections);
                                    actions.removeItem(key);
                                }
                            }}
                        >
                            <EditableSection
                                title={key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                                isEditMode={isEditMode}
                                isFirst={index === 0}
                                isLast={index === sections.length - 1}
                                onMoveUp={() => handleMove(index, index - 1)}
                                onMoveDown={() => handleMove(index, index + 1)}
                            >
                                {sectionComponents[key]}
                            </EditableSection>
                        </DraggableWrapper>
                    ))}
                </SortableContext>
            </DropZone>
        </>
    );
};

export default HomePage;