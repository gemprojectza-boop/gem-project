import React from 'react';
import { MediaContent } from '../types.ts';
import { PageHero, ContentSection } from './PageComponents.tsx';
import CtaButton from './CtaButton.tsx';
import EditableMedia from './EditableMedia.tsx';
import { PawIcon } from './icons.tsx';

interface YouthProgrammePageProps {
  mediaContent: MediaContent;
  isEditMode: boolean;
  onMediaUpdate: (key: string, url: string) => void;
}

const YouthProgrammePage: React.FC<YouthProgrammePageProps> = (props) => {
  return (
    <div className="bg-brand-bg-main">
      <PageHero
        title="Youth Apprentice Program"
        subtitle="Inspiring compassion. Teaching care. Transforming lives."
        mediaKey="youth_apprenticeship_01"
        mediaContent={{
          ...props.mediaContent,
          youth_apprenticeship_01: "https://i.ibb.co/yBFj9WnZ/DSC03629-2.jpg"
        }}
        isEditMode={props.isEditMode}
        onMediaUpdate={props.onMediaUpdate}
        alt="Youth interacting with a sanctuary animal"
      />

      <ContentSection>
        <p className="text-center">At The Gem Project Sanctuary we believe that education is a powerful tool for creating a kinder world. Our Youth Apprentice Program brings young people into a safe structured and inspiring environment. By fostering empathy emotional development and responsible care through hands-on learning we help shape the next generation of animal advocates.</p>
        <p className="text-center">This program is not just about animals. It is about connection healing and growth. Through every interaction with our dogs children learn how to build trust regulate emotions improve social skills and care for another living being. These experiences stay with them long after the session ends laying the foundation for a lifetime of compassion and confidence.</p>
      </ContentSection>

      <ContentSection title="AIM of the Youth Apprentice Program" className="bg-brand-bg-subtle">
        <p className="text-center">The Aim of the program is to find Gems in our youth and support them in their endeavors. We are Heavily Life Skills focused to train and equip the youth to become responsible young adults and ambassadors for animal in there communities. Once the apprentices have proven they are ‘Gems” then we are happy to assist them and go the extra mile for them in their endeavors and hopes:</p>
        
        <div className="my-8 rounded-lg overflow-hidden">
          <EditableMedia
            mediaKey="youth_program_aim"
            mediaUrl="https://i.ibb.co/C3GjGqL4/DSC00801.jpg"
            alt="Youth learning about animal care"
            isEditMode={props.isEditMode}
            onUpdate={props.onMediaUpdate}
            className="w-full rounded-lg"
          />
        </div>

        <div className="space-y-6">
            <div>
                <h3 className="text-2xl font-bold text-brand-primary mb-2">In-school youth</h3>
                <p className="text-center">Our apprenticeship program is carried out in the school holidays and weekends. It is about supporting youth to stay in school and support them as much as possible to be focused and motivated students. The heavy Life Skills aspect of the program is to also educate them about making healthy and responsible choices. We teach drug awareness, safe sex choices, personal empowerment and standing up to peer pressure. Once they have proved they are Gems and have worked hard and attended regularly we are happy to assist them with school sponsorship needs for fees and/or school materials or assist in supporting their extra-curricular interests and talents. In return we expect these young Gem’s to become Animal Ambassadors in their communities and to inspire and motivate other young people as role models.</p>
            </div>
             <div>
                <h3 className="text-2xl font-bold text-brand-primary mb-2">Out-of-school youth</h3>
                <p className="text-center">For these apprentices the program is then more vocationally focused and can be the start of Work Place Learning and Experience. Along with all the Life Skills and learning their craft caring for the animals we also assist with their curriculum vitae, interview techniques, workplace etiquette and basic computing to be able to search for jobs and post curriculum vitae and write application forms.</p>
            </div>
        </div>
      </ContentSection>

      <ContentSection title="What the Program Offers">
        <EditableMedia
          mediaKey="youth_apprentice_hero"
          mediaUrl="https://i.ibb.co/yBFj9WnZ/DSC03629-2.jpg"
          alt="Youth apprenticeship program in action"
          isEditMode={props.isEditMode}
          onUpdate={props.onMediaUpdate}
          className="w-full rounded-lg mb-6"
        />
        <p className="text-center">Our dogs become co-educators in classrooms learning centres and community spaces. They are chosen for their calm nature and trained for safety and positive interaction. Each session is designed with care using research-backed methods to support literacy social-emotional learning and animal care education.</p>
        <p className="text-center">We tailor each visit to meet the needs of the group whether that means encouraging a reluctant reader to share a story offering comfort to a child working through big feelings or teaching a hands-on grooming session to build confidence. The flexibility of this program is one of its strengths. It can reach children of all abilities backgrounds and needs.</p>
      </ContentSection>

      <ContentSection title="Program Goals" className="bg-brand-bg-subtle">
        <p className="text-center">We partner with educators youth leaders and families to achieve the following goals:</p>
        <ul className="list-disc list-inside space-y-2 mt-4">
            <li>Build empathy and responsible behaviour</li>
            <li>Support reading development and communication confidence</li>
            <li>Encourage emotional regulation and healthy expression</li>
            <li>Teach practical dog care skills in a safe environment</li>
            <li>Offer gentle exposure to animals to reduce fear and anxiety</li>
        </ul>
        <p className="mt-4">Each goal is woven into engaging interactive sessions that meet children where they are—offering encouragement without pressure and companionship without judgment.</p>
      </ContentSection>
      
      <ContentSection title="Core Learning Activities">
        <div className="space-y-6">
            <div>
                <h3 className="text-2xl font-bold text-brand-primary mb-2">Canine Care and Responsibility Workshops</h3>
                <p className="text-center">These hands-on lessons teach children how to feed groom walk and care for dogs in a gentle safe manner. Children build confidence by learning how to give clear commands meet a dog’s needs and anticipate signs of stress or happiness. They walk away empowered and informed about what it takes to be a responsible caregiver.</p>
            </div>
            <div>
                <h3 className="text-2xl font-bold text-brand-primary mb-2">Social-Emotional Learning with Dogs</h3>
                <p className="text-center">Children explore emotions through guided interaction with our dogs. Activities might include practicing patience while brushing a dog expressing joy during a play session or recognizing signs of nervousness in themselves and in the dog. Dogs mirror emotions and provide immediate honest feedback making them ideal partners.</p>
            </div>
            <div>
                <h3 className="text-2xl font-bold text-brand-primary mb-2">Creative Writing and Storytelling</h3>
                <p className="text-center">Children are encouraged to write stories inspired by the dogs they meet. This not only promotes literacy and creativity but also gives children a safe way to explore themes like friendship courage or overcoming fears. The dogs often become characters that help them express inner thoughts they might otherwise keep hidden.</p>
            </div>
        </div>
      </ContentSection>
      
      <ContentSection title="Safety and Supervision" className="bg-brand-bg-subtle">
        <p className="text-center">We place the safety and wellbeing of children and animals at the heart of this program. Every activity is supervised and structured to ensure calm respectful interaction. We also offer support for children who may be fearful or allergic to animals.</p>
        <p className="mt-4 font-semibold text-brand-primary">Our standards include:</p>
         <ul className="list-disc list-inside space-y-2 mt-2">
            <li>Dogs are health-checked temperament-tested and trained for public interaction</li>
            <li>Handlers are trained in supervision safety and canine behaviour</li>
            <li>Parental or guardian consent is obtained for every child</li>
            <li>Quiet areas are available for children who need a calm space or have sensitivities</li>
        </ul>
      </ContentSection>

      <section className="py-20 bg-brand-primary">
        <div className="container mx-auto px-6 text-center text-white">
            <PawIcon className="w-10 h-10 text-white mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Bring the Program to Your Community</h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-200 mb-8">
                We work with schools and community groups to deliver this life-changing experience. Whether you want to book a single visit or run a full six-week program we are ready to work with you to create something meaningful. If you are an educator, youth leader or parent interested in our Youth Apprentice Program please get in touch. We also welcome sponsorships that allow us to bring the program to underserved communities where compassion is most needed.
            </p>
            <CtaButton href="/contact?subject=YouthProgram" className="bg-brand-yellow hover:bg-brand-yellow-hover text-brand-text-primary">
                Get in Touch
            </CtaButton>
        </div>
      </section>
    </div>
  );
};

export default YouthProgrammePage;
