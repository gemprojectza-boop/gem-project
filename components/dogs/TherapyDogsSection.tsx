
import React from 'react';
import { MediaContent } from '../../types.ts';
import CtaButton from '../CtaButton.tsx';
import EditableMedia from '../EditableMedia.tsx';
import { PawIcon } from '../icons.tsx';

interface SectionProps {
  mediaContent: MediaContent;
  isEditMode: boolean;
  onMediaUpdate: (key: string, url: string) => void;
}

const supportOptions = [
  { text: 'Sponsor a Therapy Dog: Help cover costs of training gear transport and wellness' },
  { text: 'Fund a Therapy Visit: Make it possible for dogs and handlers to attend facilities in need' },
  { text: 'Donate Supplies: Toys treats grooming kits and calming aids' },
  { text: 'Volunteer: Assist in training or coordination of visits' },
];

const TherapyDogsSection: React.FC<SectionProps> = (props) => {
  return (
    <section id="therapy" className="py-16 md:py-20 bg-brand-bg-subtle">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="content-bubble text-center">
          <div className="p-6 md:p-8">
            <PawIcon className="w-10 h-10 text-brand-secondary mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-brand-secondary">Therapy Dogs</h2>
            <p className="mt-2 text-lg text-gray-600">Healing hearts one visit at a time.</p>
          </div>
        </div>
        
        <div className="content-bubble">
          <div className="p-6 md:p-8 space-y-4 text-lg text-gray-700">
            <p className="text-center">At The Gem Project Sanctuary we believe in the quiet power of a dog’s presence to soothe uplift and heal. Our Therapy Dog Program gives select dogs the chance to make a difference in the lives of people beyond our sanctuary, visiting hospitals care homes, schools and outreach programs to bring comfort joy and connection.</p>
            {props.mediaContent['dogs_hero_banner'] && (
                <EditableMedia
                    mediaKey="dogs_hero_banner"
                    mediaUrl={props.mediaContent['dogs_hero_banner']}
                    alt="A calm therapy dog."
                    isEditMode={props.isEditMode}
                    onUpdate={props.onMediaUpdate}
                    className="rounded-lg my-4"
                />
            )}
            <h3 className="text-2xl font-bold text-brand-secondary pt-4">What is a Therapy Dog?</h3>
            <p className="text-center">Therapy dogs are not service dogs. They do not perform medical tasks or assist with disabilities. Instead they are trained to offer emotional support through calm gentle interactions. They are friendly affectionate and well-behaved in a variety of public settings.</p>
            <p className="text-center">A therapy dog is chosen for their temperament. They must enjoy meeting new people be comfortable in busy or unfamiliar environments and respond reliably to commands. Each dog undergoes socialisation and training to prepare them for the unique role of bringing emotional relief to others.</p>
            
            <EditableMedia
                mediaKey="therapy_dog_02"
                mediaUrl="https://i.ibb.co/M5Dt51FL/DSC01987.jpg"
                alt="A gentle therapy dog interacting with a person."
                isEditMode={props.isEditMode}
                onUpdate={props.onMediaUpdate}
                className="rounded-lg my-4"
            />
            <h3 className="text-2xl font-bold text-brand-secondary pt-4">What Makes a Great Therapy Dog?</h3>
            <p className="text-center">A great therapy dog is calm, gentle and deeply in tune with people. These special dogs have a natural warmth that puts others at ease. They stay composed in busy environments, respond with affection not excitement and offer comfort without asking for anything in return.</p>
            <p className="text-center">Before they ever set paw into a hospital or school, each dog is temperament-tested and carefully trained. We make sure they’re not just well-behaved, but truly ready to bring peace, joy and connection to those who need it most.</p>
            <ul className="list-disc list-inside space-y-2 my-4">
                <li>Steady temperament and calm energy</li>
                <li>Affectionate and people-loving nature</li>
                <li>Comfortable in loud or high-stimulation environments</li>
                <li>Able to remain composed with wheelchairs hospital equipment or active children</li>
                <li>Happy to engage without jumping barking or demanding attention</li>
            </ul>
            <p className="text-center">These dogs are trained and temperament-tested before participating in visits. We prioritise safety comfort and mutual respect in every setting.</p>
             {props.mediaContent['forever_dogs_hero'] && (
                <EditableMedia
                    mediaKey="forever_dogs_hero"
                    mediaUrl={props.mediaContent['forever_dogs_hero']}
                    alt="Therapy dog being brushed or calmly lying near a group of children."
                    isEditMode={props.isEditMode}
                    onUpdate={props.onMediaUpdate}
                    className="rounded-lg my-4"
                />
            )}
            <h3 className="text-2xl font-bold text-brand-secondary pt-4">Where Our Therapy Dogs Visit</h3>
            <p className="text-center">Our therapy dogs are invited into a wide range of spaces where emotional wellbeing is needed most. Each visit is supervised by a trained handler and tailored to the needs of the setting.</p>
            <ul className="list-disc list-inside space-y-2 my-4">
                <li>Hospitals and clinics: offering comfort to patients before or after procedures</li>
                <li>Care homes: bringing companionship to elderly residents</li>
                <li>Schools and youth programs: supporting learners with focus anxiety or emotional challenges</li>
            </ul>

            <h3 className="text-2xl font-bold text-brand-secondary pt-4">Why It Matters</h3>
            <p className="text-center">A wagging tail. A calm presence. A soft head to stroke. These simple moments can transform an experience of fear into one of peace. For people facing medical stress emotional hardship or social isolation the presence of a therapy dog can be grounding reassuring and healing.</p>
            <p className="text-center">This program allows children to find courage to read aloud seniors reconnect with forgotten memories and hospital patients breathe more easily just by spending time with our therapy dogs. These are not small miracles. They are the power of presence.</p>
          </div>
        </div>

        <div className="content-bubble mt-8 bg-white text-black outline-slate-950">
          <div className="p-8 text-center">
            <PawIcon className="w-10 h-10 text-black mx-auto mb-4" />
            <h3 className="text-3xl font-bold mb-4 text-black">How You Can Support This Program</h3>
            <p className="text-black mb-6 max-w-2xl mx-auto">Every visit takes planning preparation training and resources. You can help us continue this work by supporting the therapy dog program directly.</p>
            <ul className="text-left max-w-md mx-auto space-y-2 mb-8">
              {supportOptions.map((option) => (
                <li key={option.text} className="flex items-start"><PawIcon className="w-5 h-5 text-black mr-3 mt-1.5 flex-shrink-0" />{option.text}</li>
              ))}
            </ul>
            <div className="flex flex-wrap justify-center gap-4">
                <CtaButton href="/dogs/sponsorship" className="bg-brand-secondary hover:bg-brand-secondary-hover text-white">Sponsor a Therapy Dog</CtaButton>
                <CtaButton href="/donate" className="border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white">Donate to the Program</CtaButton>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TherapyDogsSection;