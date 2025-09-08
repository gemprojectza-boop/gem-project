
import React from 'react';
import { MediaContent } from '../types.ts';
import EditableMedia from './EditableMedia.tsx';
import { PageHero } from './PageComponents.tsx';

interface TeamPageProps {
  mediaContent: MediaContent;
  isEditMode: boolean;
  onMediaUpdate: (key: string, url: string) => void;
}

const horseTeamMembers = [
    { name: 'Kim Harvey', mediaKey: 'kim_harvey', role: null }, // TODO: Add role
    { name: 'Carina Bodenstein', mediaKey: 'carina_bodenstein', role: null }, // TODO: Add role
    { name: 'Allan Khondla', mediaKey: 'allan_khondla', role: null }, // TODO: Add role
    { name: 'Bongani George', mediaKey: 'bongani_george', role: null }, // TODO: Add role
    { name: 'Cosmos Yotswana', mediaKey: 'cosmos_yotswana', role: null }, // TODO: Add role
    { name: 'Phumlani Jevu', mediaKey: 'phumlani_jevu', role: null }, // TODO: Add role
    { name: 'Gudla Mzoliswa', mediaKey: 'gudla_mzoliswa', role: null }, // TODO: Add role
    { name: 'Sizwe Mboyiyana', mediaKey: 'sizwe_mboyiyana', role: null }, // TODO: Add role
    { name: 'Samkele Jevu', mediaKey: 'samkele_jevu', role: null }, // TODO: Add role
    { name: 'Blue-Shirt Man', mediaKey: 'blue_shirt_man', role: null }, // TODO: Add role and get photo
];

const dogTeamMembers = [
    { name: 'Fezile Mtjyisha', mediaKey: 'fezile_mtjyisha', role: null }, // TODO: Add role
    { name: 'Annestacia Van Rooi', mediaKey: 'annestacia_van_rooi', role: null }, // TODO: Add role
    { name: 'Pinda Masiza', mediaKey: 'pinda_masiza', role: null }, // TODO: Add role
    { name: 'Malcolm Mouton', mediaKey: 'malcolm_mouton', role: null }, // TODO: Add role
    { name: 'Keenen Brandt', mediaKey: 'keenen_brandt', role: null }, // TODO: Add role
    { name: 'Andile Khumla', mediaKey: 'andile_khumla', role: null }, // TODO: Add role
    { name: 'David Van de Westhuizen', mediaKey: 'david_van_de_westhuizen', role: null }, // TODO: Add role
    { name: 'Lawrence Nkotha', mediaKey: 'lawrence_nkotha', role: null }, // TODO: Add role
    { name: 'Theo Arendoff', mediaKey: 'theo_arendoff', role: null }, // TODO: Add role
    { name: 'Jody Africa', mediaKey: 'jody_africa', role: null }, // TODO: Add role and get photo
    { name: 'Sheldon', mediaKey: 'sheldon', role: null }, // TODO: Add role and get photo
];

const TeamMemberCard: React.FC<{
    name: string;
    mediaKey: string;
    mediaUrl: string | null;
    role: string | null;
    isEditMode: boolean;
    onMediaUpdate: (key: string, url: string) => void;
    teamColor: string;
}> = ({ name, mediaKey, mediaUrl, role, isEditMode, onMediaUpdate, teamColor }) => {
    
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
            <h3 className="text-xl font-bold" style={{ color: teamColor }}>{name}</h3>
            {role && <p className="text-sm text-brand-text-secondary mt-1 text-center">{role}</p>}
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

            {/* Dog Team */}
            <section className="py-16 md:py-20">
              <div className="container mx-auto px-6 max-w-7xl">
                  <div className="content-bubble text-center mb-12">
                      <div className="p-6 md:p-8">
                          <h2 className="text-3xl md:text-4xl font-bold text-brand-secondary mb-4">Dog Team</h2>
                          <p className="text-lg text-brand-text-secondary text-center">Our dedicated dog care specialists who provide daily love and attention to our canine residents.</p>
                      </div>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 stagger-children">
                      {dogTeamMembers.map(member => (
                          <TeamMemberCard
                              key={member.name}
                              name={member.name}
                              mediaKey={member.mediaKey}
                              mediaUrl={props.mediaContent[member.mediaKey]}
                              role={member.role}
                              teamColor="#E30613"
                              {...props}
                          />
                      ))}
                  </div>
              </div>
            </section>

            {/* Horse Team */}
            <section className="py-16 md:py-20 bg-brand-bg-subtle">
              <div className="container mx-auto px-6 max-w-7xl">
                  <div className="content-bubble text-center mb-12">
                      <div className="p-6 md:p-8">
                          <h2 className="text-3xl md:text-4xl font-bold text-brand-accent mb-4">Horse Team</h2>
                          <p className="text-lg text-brand-text-secondary text-center">Our skilled horse care professionals who work with our equine friends on rehabilitation and daily care.</p>
                      </div>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 stagger-children">
                      {horseTeamMembers.map(member => (
                          <TeamMemberCard
                              key={member.name}
                              name={member.name}
                              mediaKey={member.mediaKey}
                              mediaUrl={props.mediaContent[member.mediaKey]}
                              role={member.role}
                              teamColor="#39B54A"
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
