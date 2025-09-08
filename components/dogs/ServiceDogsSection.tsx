
import React from 'react';
import { MediaContent } from '../../types.ts';
import CtaButton from '../CtaButton.tsx';
import EditableMedia from '../EditableMedia.tsx';
import { PawIcon, VetIcon } from '../icons.tsx';

interface SectionProps {
  mediaContent: MediaContent;
  isEditMode: boolean;
  onMediaUpdate: (key: string, url: string) => void;
}

const ServiceDogsSection: React.FC<SectionProps> = (props) => {
  return (
    <section id="service" className="py-16 md:py-20 bg-brand-bg-subtle">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="content-bubble text-center">
          <div className="p-6 md:p-8">
            <PawIcon className="w-10 h-10 text-brand-secondary mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-brand-secondary">Service Dogs</h2>
            <p className="mt-2 text-lg text-gray-600">Trained to serve. Born to care.</p>
          </div>
        </div>
        
        <div className="content-bubble">
          <EditableMedia
            mediaKey="training_hero"
            mediaUrl="https://i.ibb.co/MQwNTVT/DSC02148.jpg"
            alt="A calm, trained service dog looking attentively"
            isEditMode={props.isEditMode}
            onUpdate={props.onMediaUpdate}
            className="rounded-t-lg aspect-video"
          />
          <div className="p-6 md:p-8 space-y-4 text-lg text-gray-700">
            <p className="text-center">At The Gem Project Sanctuary we are proud to partner with leading specialists in medical service dog training to give select dogs the opportunity to transform lives. These exceptional animals are carefully chosen and professionally trained to support individuals living with disabilities or chronic medical conditions by performing vital task-specific work.</p>
            <p className="text-center">Service dogs are protected by South African law and allowed in public spaces such as restaurants shops and transport systems where pets are not typically permitted. Their legal access ensures that individuals living with disabilities can move freely and with dignity alongside their trained partner.</p>
            <p className="text-center">These are not emotional support or therapy animals. Service dogs are highly trained working dogs with responsibilities that meet their handler’s specific medical or physical needs. They undergo rigorous professional training socialisation and real-world exposure to ensure they can remain calm alert and obedient in any environment. Their behaviour and focus must be exceptional to safely share public spaces and respond appropriately in emergencies.</p>
          </div>
        </div>

        <div className="content-bubble">
          <div className="p-6 md:p-8">
            <div className="flex flex-col items-center justify-center text-center mb-4">
              <PawIcon className="w-10 h-10 text-brand-secondary mb-4" />
              <h3 className="text-3xl font-bold text-brand-secondary">Our Training Focus Areas</h3>
            </div>
            <p className="mt-4 text-lg text-gray-700">We currently train dogs in three core categories of service. Each type plays a unique and critical role in the life of their handler.</p>
            
            <div className="mt-8 space-y-8">
              <div>
                <h4 className="flex items-center text-2xl font-bold text-brand-secondary mb-3"><PawIcon className="w-6 h-6 mr-3 text-brand-secondary"/>Mobility Assistance Dogs</h4>
                <p className="text-gray-700">These dogs help people with limited mobility including wheelchair users and individuals recovering from injury or surgery. They provide physical support and enhance independence by performing practical daily tasks.</p>
                <ul className="list-disc list-inside space-y-2 mt-4 text-gray-700 ml-4">
                  <li>Open and close doors</li>
                  <li>Retrieve dropped or out-of-reach items</li>
                  <li>Press elevator or automatic door buttons</li>
                  <li>Assist with balance</li>
                  <li>Carry lightweight bags or tools</li>
                </ul>
              </div>

              <div>
                <h4 className="flex items-center text-2xl font-bold text-brand-secondary mb-3"><VetIcon className="w-6 h-6 mr-3 text-brand-secondary"/>Medical Alert Dogs</h4>
                <p className="text-gray-700">These dogs are trained to detect and respond to specific medical conditions. Their sense of smell allows them to identify subtle chemical changes in a handler’s body before symptoms become dangerous. They offer life-saving support and peace of mind for individuals with chronic conditions.</p>
                <div className="mt-4 pl-4 border-l-4 border-brand-secondary/30">
                  <h5 className="font-semibold text-brand-secondary">Our medical alert training areas include:</h5>
                  <p className="font-bold mt-2">Diabetic Alert Dogs:</p>
                  <p className="text-gray-700">Trained to detect low blood sugar levels by smell and alert their handler in advance</p>
                  <p className="mt-2 text-gray-700">These dogs use subtle cues like pawing nudging or licking to signal a problem. They may also retrieve medication activate alert systems or seek help if needed.</p>
                </div>
              </div>
            </div>
          </div>
<p className="content-bubble mt-8 bg-white text-black">Each dog represents a pathway to a more empowered life. They are more than trained helpers. They are trusted companions and lifelines.</p>
<p className="content-bubble mt-8 bg-white text-black">Each dog represents a pathway to a more empowered life. They are more than trained helpers. They are trusted companions and lifelines.</p>
        </div>
        
        <div className="content-bubble">
          <div className="p-6 md:p-8">
            <PawIcon className="w-10 h-10 text-brand-secondary mb-4" />
            <h3 className="text-3xl font-bold text-brand-secondary">Why It Matters</h3>
            <div className="mt-4 text-lg text-gray-700 space-y-4">
                <p className="text-center">The work these dogs do goes beyond functional assistance. They offer freedom confidence and emotional safety. With a trained service dog by their side many individuals are able to live independently pursue education or employment and navigate public spaces with greater security.</p>
                <p className="content-bubble mt-8 bg-brand-primary text-white">Each dog represents a pathway to a more empowered life. They are more than trained helpers. They are trusted companions and lifelines.</p>
            </div>
          </div>
        </div>

        <div className="content-bubble mt-8 bg-white text-white">
          <div className="p-8 text-center">
            <PawIcon className="w-10 h-10 text-white mx-auto mb-4" />
            <h3 className="text-3xl font-bold mb-4 text-brand-secondary">How You Can Help</h3>
            <p className="text-gray-200 mb-6 max-w-2xl mx-auto">Service dog training requires extensive time professional expertise and ongoing support. Each dog receives one to two years of dedicated instruction socialisation and healthcare before being matched with a handler. You can be part of this life-changing journey.</p>
            <ul className="text-center max-w-md mx-auto space-y-2 mb-8">
                <li className="flex items-start"><PawIcon className="w-5 h-5 text-white mr-3 mt-1.5 flex-shrink-0" />Sponsor a Service Dog: Support one dog’s training and care needs</li>
                <li className="flex items-start"><PawIcon className="w-5 h-5 text-white mr-3 mt-1.5 flex-shrink-0" />Donate to the Program: Every contribution funds food vet care gear and travel</li>
                <li className="flex items-start"><PawIcon className="w-5 h-5 text-white mr-3 mt-1.5 flex-shrink-0" />Spread Awareness: Share this work with others and help expand access to those in need</li>
            </ul>
            <div className="flex flex-wrap justify-center gap-4">
                <CtaButton href="/dogs/sponsorship" className="bg-brand-secondary hover:bg-brand-secondary-hover text-white">Sponsor a Service Dog</CtaButton>
                <CtaButton href="/donate" className="border-2 border-white text-white hover:bg-white hover:text-brand-text-primary">Donate to the Program</CtaButton>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ServiceDogsSection;
