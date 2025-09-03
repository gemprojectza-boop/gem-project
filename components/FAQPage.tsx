
import React, { useState } from 'react';
import { MediaContent } from '../types.ts';
import { PageHero, ContentSection } from './PageComponents.tsx';
import CtaButton from './CtaButton.tsx';
import EditableMedia from './EditableMedia.tsx';
import { ChevronDownIcon, PawIcon } from './icons.tsx';

interface FAQPageProps {
  mediaContent: MediaContent;
  isEditMode: boolean;
  onMediaUpdate: (key: string, url: string) => void;
}

const AccordionItem: React.FC<{ question: string; children: React.ReactNode }> = ({ question, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const isDogQuestion = question.toLowerCase().includes('dog');

    return (
        <div className="border-b last:border-b-0 border-gray-200">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center text-left py-5 px-6 hover:bg-brand-primary/10 transition-colors"
                aria-expanded={isOpen}
            >
                <h3 className={`text-lg font-semibold ${isDogQuestion ? 'text-brand-secondary' : 'text-brand-text-primary'}`}>{question}</h3>
                <ChevronDownIcon className={`w-6 h-6 transform transition-transform ${isDogQuestion ? 'text-brand-secondary' : 'text-brand-primary'} ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <div
                className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
            >
                <div className="overflow-hidden">
                    <div className="p-6 pt-0 text-brand-text-secondary space-y-4 text-base leading-relaxed text-left">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

const FAQPage: React.FC<FAQPageProps> = (props) => {
  return (
    <div className="bg-brand-bg-main">
      <PageHero
        title="Frequently Asked Questions"
        subtitle="Your questions, answered. Learn more about our sanctuary, animals, and how you can help."
        mediaKey="faq_hero"
        alt="Closeup of a rescued dog and horse side by side"
        {...props}
      />

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-6 max-w-4xl">
            <div className="content-bubble text-center">
                 <div className="p-6 md:p-8">
                    <p className="text-lg text-left">Whether you are thinking of adopting, sponsoring, volunteering, donating or just learning more, this page covers the questions we get asked most often. Still wondering about something? Reach out. We are happy to help.</p>
                    <div className="flex flex-wrap justify-center gap-4 mt-8">
                        <CtaButton href="/dogs" className="bg-brand-secondary text-white hover:bg-brand-secondary-hover">Meet the Dogs</CtaButton>
                        <CtaButton href="/horses" className="bg-brand-primary text-white hover:bg-brand-primary-hover">Meet the Horses</CtaButton>
                    </div>
                </div>
            </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-brand-bg-subtle">
        <div className="container mx-auto px-6 max-w-4xl space-y-12">

          {/* About the Sanctuary Section */}
          <div className="content-bubble" style={{margin:0, padding: 0}}>
            <h2 className="text-3xl font-bold text-brand-primary p-6 border-b">About the Sanctuary</h2>
            <AccordionItem question="What is The Gem Project Sanctuary?">
                <p>The Gem Project Sanctuary is a nonprofit organisation just outside Cape Town that provides adoption, healing and lifelong care for dogs and horses in need. We help animals who have been abandoned, neglected or mistreated find new beginnings through rehoming or, where needed, lifelong sanctuary. Many of those we help are the unwanted  the ones overlooked, surrendered or forgotten. Some are adopted into loving homes. Others stay with us when their medical or emotional needs are too great. Every animal is given the chance to recover and thrive.</p>
                <p>Our name reflects our purpose. We find the overlooked gems  often hidden beneath trauma or fear  and help them shine again through patient, compassionate care.</p>
                 <EditableMedia mediaKey="faq_about" mediaUrl={props.mediaContent.faq_about!} alt="Aerial view of the sanctuary" {...props} className="my-4 rounded-lg" />
            </AccordionItem>
            <AccordionItem question="What is your mission and vision?">
                 <p>We envision a world where every dog and horse knows safety, comfort and belonging.</p>  
                 <p>Our mission is to rescue, rehabilitate and rehome animals in need while also providing lifelong care to those who cannot be adopted. We build meaningful partnerships and create a culture of compassion through adoption, sanctuary and community engagement.</p>
            </AccordionItem>
            <AccordionItem question="How is a sanctuary different from a shelter?">
                <p>Unlike traditional shelters, we commit to animals for life. While we do rehome many animals, others remain with us permanently due to age, medical needs or trauma. We are their forever home when no other is possible.</p>
            </AccordionItem>
             <AccordionItem question="What makes you different from other sanctuaries or rescues?">
                <p>We provide both longterm sanctuary and a thoughtful adoption process. Every animal lives in a homelike setting. Dogs stay in familystyle units and enjoy daily walks, enrichment and outings. Horses roam open paddocks and receive consistent loving care.</p>
            </AccordionItem>
          </div>
          
          {/* Our Work and Programmes Section */}
          <div className="content-bubble" style={{margin:0, padding: 0}}>
            <h2 className="text-3xl font-bold text-brand-primary p-6 border-b">Our Work and Programmes</h2>
             <AccordionItem question="What kind of animals do you care for?">
                <p>We care for dogs and horses of all breeds, ages and backgrounds including those with special medical or behavioural needs.</p>
            </AccordionItem>
             <AccordionItem question="What services do you offer?">
                <ul className="list-disc list-inside space-y-2">
                    <li>Rescue, rehabilitation and adoption</li>
                    <li>Forever care for sanctuary animals</li>
                    <li>Behavioural support and enrichment</li>
                    <li>Youth Apprenticeship Programme</li>
                    <li>HandsOn Caregiver Programme</li>
                    <li>Sponsorship opportunities</li>
                    <li>Pack Drives and donation campaigns</li>
                    <li>PopUp Awareness Stands</li>
                    <li>RecyclingforCare Token Programme</li>
                </ul>
            </AccordionItem>
            <AccordionItem question="Do you work with other organisations?">
                <p>Yes. We support overburdened shelters by fostering animals in need of urgent placement. We also offer behavioural help for challenging cases and collaborate on shared outreach efforts.</p>
            </AccordionItem>
            <AccordionItem question="What is the Youth Apprenticeship Programme?">
                <p>It is a structured initiative offering handson experience in animal care to local youth. Participants learn valuable life skills while building empathy and responsibility.</p>
            </AccordionItem>
            <AccordionItem question="What is the HandsOn Caregiver Programme?">
                 <p>The HandsOn Caregiver Programme allows individuals to become partowners in the daily life of a sanctuary animal. Caregivers form deep bonds through regular visits, feeding, grooming and companionship. It is perfect for those who want meaningful connection without fulltime responsibility. Caregivers are honoured as part of each animal’s extended family.</p>
                 <EditableMedia mediaKey="faq_programs" mediaUrl={props.mediaContent.faq_programs!} alt="A young person brushing a horse" {...props} className="my-4 rounded-lg" />
            </AccordionItem>
          </div>
          
          {/* Adoption Section */}
           <div className="content-bubble" style={{margin:0, padding: 0}}>
            <h2 className="text-3xl font-bold text-brand-primary p-6 border-b">Adoption</h2>
             <AccordionItem question="Can I adopt a dog or horse?">
                <p>Yes. Adoption is central to our mission. We carefully match each animal with a suitable home. Every adoption is guided by the best interests of the animal and the adopter.</p>
            </AccordionItem>
             <AccordionItem question="What is the adoption process like?">
                <p>After submitting an application, we conduct interviews and home checks to ensure the animal will be safe, loved and wellmatched. Some animals are available only for sponsorship.</p>
            </AccordionItem>
             <AccordionItem question="Can I meet the animals before adopting?">
                <p>Yes. Visits can be arranged for adopters, sponsors and HandsOn Caregivers. We also share regular photos, videos and updates online.</p>
                 <EditableMedia mediaKey="faq_adoption" mediaUrl={props.mediaContent.faq_adoption!} alt="Adoption day photo of a dog going to a new home" {...props} className="my-4 rounded-lg" />
            </AccordionItem>
          </div>

           {/* Sponsorship Section */}
           <div className="content-bubble" style={{margin:0, padding: 0}}>
            <h2 className="text-3xl font-bold text-brand-primary p-6 border-b">Sponsorship</h2>
             <AccordionItem question="Can I sponsor a specific animal?">
                <p>Yes. Sponsorship helps cover the cost of food, care and enrichment for one of our dogs or horses.</p>
            </AccordionItem>
             <AccordionItem question="What do sponsors receive?">
                <ul className="list-disc list-inside space-y-2">
                    <li>A welcome letter and photo of your sponsored animal</li>
                    <li>Regular updates and stories</li>
                    <li>The chance to visit and connect with your sponsored animal</li>
                </ul>
            </AccordionItem>
             <AccordionItem question="What if I want to help but cannot adopt or sponsor?">
                <p>You can still support us by donating, volunteering, sharing our work or joining a programme. Every bit helps.</p>
                 <EditableMedia mediaKey="faq_sponsorship" mediaUrl={props.mediaContent.faq_sponsorship!} alt="A person with their sponsored sanctuary dog" {...props} className="my-4 rounded-lg" />
            </AccordionItem>
          </div>
          
          {/* Ways to Help Section */}
           <div className="content-bubble" style={{margin:0, padding: 0}}>
            <h2 className="text-3xl font-bold text-brand-primary p-6 border-b">Ways to Help</h2>
             <AccordionItem question="How can I support The Gem Project Sanctuary?">
                <ul className="list-disc list-inside space-y-2">
                  <li>Adopt a dog or horse</li>
                  <li>Sponsor an animal</li>
                  <li>Volunteer your time or skills</li>
                  <li>Donate funds or supplies</li>
                  <li>Join the HandsOn Caregiver Programme</li>
                  <li>Share our work online or with friends</li>
                </ul>
            </AccordionItem>
             <AccordionItem question="What do you need most?">
                <p>Monetary donations, dog food, flea treatments, supplements, grooming supplies and cleaning products are always needed.</p>
                 <EditableMedia mediaKey="faq_help" mediaUrl={props.mediaContent.faq_help!} alt="Donated supplies for the animals" {...props} className="my-4 rounded-lg" />
            </AccordionItem>
             <AccordionItem question="Can I volunteer at the sanctuary?">
                <p>Yes. Volunteers help with care, admin, outreach, fundraising and events.</p>
            </AccordionItem>
             <AccordionItem question="Can I help without visiting the sanctuary?">
                <p>Yes. You can assist by donating, sharing our posts or helping with outreach and grant writing.</p>
            </AccordionItem>
             <AccordionItem question="How can I stay connected?">
                <p>Follow us on social media and sign up for updates to see daily life at the sanctuary.</p>
            </AccordionItem>
          </div>

        </div>
      </section>

      {/* Still Have Questions? */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-6 max-w-4xl">
            <div className="content-bubble">
                <div className="p-6 md:p-8 text-center">
                    <PawIcon className="w-12 h-12 text-brand-primary mx-auto mb-4" />
                    <h2 className="text-3xl font-bold text-brand-primary">Still Have Questions?</h2>
                    <p className="my-6 text-lg text-left">We would love to hear from you. Whether you are ready to adopt, want to help or just want to learn more our team is here.</p>
                     <div className="flex flex-wrap justify-center gap-4">
                        <CtaButton href="/contact" className="bg-brand-primary text-white hover:bg-brand-primary-hover">Contact the Team</CtaButton>
                        <CtaButton href="/get-involved#donate" className="bg-brand-secondary text-white hover:bg-brand-secondary-hover">Donate Now</CtaButton>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;
