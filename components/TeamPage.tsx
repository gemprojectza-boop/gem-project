
import React from 'react';
import { MediaContent } from '../types.ts';
import EditableMedia from './EditableMedia.tsx';
import { PageHero } from './PageComponents.tsx';

interface TeamPageProps {
  mediaContent: MediaContent;
  isEditMode: boolean;
  onMediaUpdate: (key: string, url: string) => void;
}

const teamMembers = [
    { name: 'Kim Harvey', mediaKey: 'kim_harvey' },
    { name: 'Carina Bodenstein', mediaKey: 'carina_bodenstein' },
    { name: 'Allan Khondla', mediaKey: 'allan_khondla' },
    { name: 'Bongani George', mediaKey: 'bongani_george' },
    { name: 'Cosmos Yotswana', mediaKey: 'cosmos_yotswana' },
    { name: 'Phumlani Jevu', mediaKey: 'phumlani_jevu' },
    { name: 'Gudla Mzoliswa', mediaKey: 'gudla_mzoliswa' },
    { name: 'Sizwe Mboyiyana', mediaKey: 'sizwe_mboyiyana' },
    { name: 'Samkele Jevu', mediaKey: 'samkele_jevu' },
    { name: 'Fezile Mtyisha', mediaKey: 'fezile_mtyisha' },
    { name: 'Annestacia Van Rooi', mediaKey: 'annestacia_van_rooi' },
    { name: 'Pinda Masiza', mediaKey: 'pinda_masiza' },
    { name: 'Malcolm Mouton', mediaKey: 'malcolm_mouton' },
    { name: 'Keenen Brandt', mediaKey: 'keenen_brandt' },
    { name: 'Andile Khumla', mediaKey: 'andile_khumla' },
    { name: 'David Van de Westhuizen', mediaKey: 'david_van_de_westhuizen' },
    { name: 'Lawrence Nkotha', mediaKey: 'lawrence_nkotha' },
    { name: 'Theo Arendolf', mediaKey: 'theo_arendolf' },
];

const TeamMemberCard: React.FC<{
    name: string;
    mediaKey: string;
    mediaUrl: string | null;
    isEditMode: boolean;
    onMediaUpdate: (key: string, url: string) => void;
}> = ({ name, mediaKey, mediaUrl, isEditMode, onMediaUpdate }) => {
    const newStaffMembers = [
        'Annestacia Van Rooi',
        'Pinda Masiza', 
        'Malcolm Mouton',
        'Keenen Brandt',
        'Andile Khumla',
        'David Van de Westhuizen',
        'Lawrence Nkotha',
        'Theo Arendolf'
    ];
    
    const isNewStaff = newStaffMembers.includes(name);
    
    return (
    <div className="content-bubble text-center transition-all duration-300 hover:shadow-xl group animate-on-scroll" style={{ margin: 0, padding: 0 }}>
        <div className="relative w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 mx-auto overflow-hidden">
            {mediaUrl ? (
                <EditableMedia
                    mediaKey={mediaKey}
                    mediaUrl={mediaUrl}
                    alt={`Photo of ${name}`}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                    isEditMode={isEditMode}
                    onUpdate={onMediaUpdate}
                />
            ) : <div className="w-full h-full bg-gray-200"></div>}
        </div>
        <div className="p-4">
            <h3 className="text-xl font-bold" style={{ color: isNewStaff ? '#E30613' : '#39B54A' }}>{name}</h3>
        </div>
    </div>
    );
};


const TeamPage: React.FC<TeamPageProps> = (props) => {
    return (
        <div className="bg-brand-bg-main">
            <PageHero
                title="Meet the Team"
                subtitle="The dedicated individuals who provide our animals with love, care, and expertise every day."
                mediaKey="horse_team_hero"
                alt="A team member smiling while caring for a horse"
                {...props}
            />

            <section className="py-16 md:py-20">
              <div className="container mx-auto px-6 max-w-7xl">
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 stagger-children">
                      {teamMembers.map(member => (
                          <TeamMemberCard
                              key={member.name}
                              name={member.name}
                              mediaKey={member.mediaKey}
                              mediaUrl={props.mediaContent[member.mediaKey]}
                              {...props}
                          />
                      ))}
                  </div>
              </div>
            </section>
        </div>
    );
};

export default TeamPage;
