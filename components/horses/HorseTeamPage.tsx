
import React from 'react';
import { MediaContent } from '../../types.ts';
import EditableMedia from '../EditableMedia.tsx';
import CtaButton from '../CtaButton.tsx';
import { PageHero } from '../PageComponents.tsx';

interface HorseTeamPageProps {
  mediaContent: MediaContent;
  isEditMode: boolean;
  onMediaUpdate: (key: string, url: string) => void;
}

const TeamMemberCard: React.FC<{
    name: string;
    role: string;
    mediaKey: string;
    mediaUrl: string | null;
    isEditMode: boolean;
    onMediaUpdate: (key: string, url: string) => void;
}> = ({ name, role, mediaKey, mediaUrl, isEditMode, onMediaUpdate }) => (
    <div className="content-bubble text-center transition-all duration-300 hover:shadow-xl group" style={{ margin: 0 }}>
        <div className="relative w-full h-64 mx-auto overflow-hidden">
            {mediaUrl ? (
                <EditableMedia
                    mediaKey={mediaKey}
                    mediaUrl={mediaUrl}
                    alt={`Headshot of ${name}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    isEditMode={isEditMode}
                    onUpdate={onMediaUpdate}
                />
            ) : <div className="w-full h-full bg-gray-200"></div>}
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl font-bold">{name}</h3>
                <p className="text-brand-primary-light font-semibold">{role}</p>
            </div>
        </div>
    </div>
);

const TeamSection: React.FC<{ title: string; children: React.ReactNode; gridCols?: string }> = ({ title, children, gridCols = 'md:grid-cols-2' }) => (
    <section className="py-12">
        <div className="container mx-auto px-6 max-w-5xl">
            <h2 className="text-3xl font-bold text-green-800 text-center mb-8">{title}</h2>
            <div className={`grid grid-cols-1 ${gridCols} lg:grid-cols-2 gap-8`}>
                {children}
            </div>
        </div>
    </section>
);


const HorseTeamPage: React.FC<HorseTeamPageProps> = (props) => {
    return (
        <div className="bg-brand-bg-main">
            <PageHero
                title="Meet the Horse Team"
                subtitle="The dedicated individuals who provide our horses with love, care, and expertise every day."
                mediaKey="horse_team_hero"
                alt="A team member smiling while caring for a horse"
                titleColorClass="text-white"
                {...props}
            />

            <div className="container mx-auto px-6">
                <div className="content-bubble text-center max-w-4xl mx-auto my-12">
                    <div className="p-6 md:p-8">
                      <p className="text-lg text-gray-700">At The Gem Project Sanctuary, caring for our horses is a team effort rooted in trust, experience and deep respect for every animal. Our dedicated horse care team works tirelessly to ensure each horse receives the love, attention and individual care they deserve. From experienced grooms to young trainees learning the ropes, every person plays a vital role in our sanctuary family.</p>
                    </div>
                </div>
            </div>
            
            <div className="divide-y-2 divide-brand-bg-main bg-brand-surface">
                <TeamSection title="Management Team">
                    <TeamMemberCard name="Kim Harvey" role="Manager" mediaKey="kim_harvey" mediaUrl={props.mediaContent.kim_harvey} {...props} />
                    <TeamMemberCard name="Carina Bodenstein" role="Horse Care Co-ordinator" mediaKey="carina_bodenstein" mediaUrl={props.mediaContent.carina_bodenstein} {...props} />
                </TeamSection>

                <TeamSection title="Leadership" gridCols="md:grid-cols-1 lg:grid-cols-1">
                     <div className="flex justify-center">
                        <div className="md:w-1/2">
                             <TeamMemberCard name="Allan Khondla" role="Head Groom" mediaKey="allan_khondla" mediaUrl={props.mediaContent.allan_khondla} {...props} />
                        </div>
                    </div>
                </TeamSection>
                
                <TeamSection title="Drivers & Senior Grooms">
                    <TeamMemberCard name="Bongani George" role="Driver / Groom" mediaKey="bongani_george" mediaUrl={props.mediaContent.bongani_george} {...props} />
                    <TeamMemberCard name="Cosmos Yotswana" role="Driver / Groom" mediaKey="cosmos_yotswana" mediaUrl={props.mediaContent.cosmos_yotswana} {...props} />
                </TeamSection>

                <TeamSection title="Grooms" gridCols="md:grid-cols-3 lg:grid-cols-3">
                    <TeamMemberCard name="Phumlani Jevu" role="Groom" mediaKey="phumlani_jevu" mediaUrl={props.mediaContent.phumlani_jevu} {...props} />
                    <TeamMemberCard name="Gudla Mzoliswa" role="Groom" mediaKey="gudla_mzoliswa" mediaUrl={props.mediaContent.gudla_mzoliswa} {...props} />
                    <TeamMemberCard name="Sizwe Mboyiyana" role="Groom" mediaKey="sizwe_mboyiyana" mediaUrl={props.mediaContent.sizwe_mboyiyana} {...props} />
                </TeamSection>

                <TeamSection title="Trainee Grooms">
                    <TeamMemberCard name="Samkele Jevu" role="Trainee Groom" mediaKey="samkele_jevu" mediaUrl={props.mediaContent.samkele_jevu} {...props} />
                    <TeamMemberCard name="Fezile Mtyisha" role="Trainee Groom" mediaKey="fezile_mtyisha" mediaUrl={props.mediaContent.fezile_mtyisha} {...props} />
                </TeamSection>
            </div>

            <section className="py-20 bg-brand-primary">
                <div className="container mx-auto px-6 text-center text-white">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Want to support our horse team?</h2>
                    <p className="max-w-3xl mx-auto text-lg text-gray-200 mb-8">
                        Your donations, sponsorships and volunteer time help us train, grow and sustain this dedicated group.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <CtaButton href="/horses#sponsor" className="bg-brand-accent hover:bg-brand-accent-hover text-white">Sponsor a Horse</CtaButton>
                        <CtaButton href="/get-involved#volunteer" className="bg-brand-yellow hover:bg-brand-yellow-hover text-brand-text-primary">Volunteer With the Horse Team</CtaButton>
                        <CtaButton href="/get-involved#donate" className="bg-brand-primary hover:bg-brand-primary-hover text-white">Donate for Training & Care</CtaButton>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HorseTeamPage;