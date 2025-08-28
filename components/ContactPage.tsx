

import React, { useState } from 'react';
import { MediaContent } from '../types.ts';
import { PageHero } from './PageComponents.tsx';
import CtaButton from './CtaButton.tsx';
import EditableMedia from './EditableMedia.tsx';
import { MailIcon, PhoneIcon, MapPinIcon, FacebookIcon, InstagramIcon, PawIcon } from './icons.tsx';
import { SafeLink } from './SafeLink.tsx';

interface ContactPageProps {
  mediaContent: MediaContent;
  isEditMode: boolean;
  onMediaUpdate: (key: string, url: string) => void;
}

const ContactInfoItem: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode; }> = ({ icon, title, children }) => (
    <div className="flex items-start space-x-4">
        <div className="flex-shrink-0 w-10 h-10 bg-brand-primary/10 text-brand-primary rounded-full flex items-center justify-center">
            {icon}
        </div>
        <div>
            <h4 className="font-bold text-brand-text-primary">{title}</h4>
            <div className="text-brand-text-secondary text-sm">{children}</div>
        </div>
    </div>
);

const ContactPage: React.FC<ContactPageProps> = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically handle form submission (e.g., send to an API)
        console.log({ name, email, phone, subject, message });
        setIsSubmitted(true);
    };

    const subjects = ["Adoption", "Sponsorship", "Donation", "Volunteering", "Hands-On Care", "Other"];

  return (
    <div className="bg-brand-bg-main">
      <PageHero
        title="Contact Us"
        subtitle="We would love to hear from you. Whether you are ready to adopt, sponsor an animal, donate supplies, or simply ask a question, our team is here to help."
        mediaKey="contact_hero"
        alt="The welcoming entrance to The Gem Project Sanctuary"
        {...props}
      />

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Left Column: Contact Details */}
                <div className="space-y-8">
                    <div className="content-bubble">
                        <div className="p-6 md:p-8 space-y-6">
                            <ContactInfoItem icon={<MapPinIcon className="w-6 h-6"/>} title="Location">
                                <p>Philadelphia, Atlantis, Western Cape, South Africa</p>
                                <p className="font-semibold text-brand-secondary">Visits are by appointment only.</p>
                            </ContactInfoItem>
                            <ContactInfoItem icon={<MailIcon className="w-6 h-6"/>} title="Email">
                                <a href="mailto:info@gemproject.org.za" className="hover:underline">info@gemproject.org.za</a>
                                <p>For all general enquiries including adoption, sponsorship, donations, volunteering and Hands-On Care.</p>
                            </ContactInfoItem>
                             <ContactInfoItem icon={<PhoneIcon className="w-6 h-6"/>} title="Phone">
                                <p>021 065 1691</p>
                                <p>We are available Monday to Friday from 9am to 5pm.</p>
                            </ContactInfoItem>
                        </div>
                    </div>
                     <div className="content-bubble">
                        <div className="p-6 md:p-8">
                            <PawIcon className="w-8 h-8 text-brand-primary mb-2" />
                            <h3 className="text-xl font-bold text-brand-primary mb-4">Follow Our Journey</h3>
                            <p className="text-brand-text-secondary mb-4">See the daily lives you are changing by following us on social media.</p>
                            <div className="flex space-x-4">
                               <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-brand-text-secondary hover:text-brand-primary transition-colors"><FacebookIcon className="w-8 h-8"/></a>
                               <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-brand-text-secondary hover:text-brand-primary transition-colors"><InstagramIcon className="w-8 h-8"/></a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column: Contact Form */}
                <div className="content-bubble">
                    <div className="p-6 md:p-8">
                        <PawIcon className="w-10 h-10 text-brand-primary mb-4" />
                        <h2 className="text-3xl font-bold text-brand-primary mb-2">Send Us a Message</h2>
                        <p className="text-brand-text-secondary mb-6">Fill in the form below and we will get back to you as soon as possible.</p>
                        
                        {isSubmitted ? (
                            <div className="text-center bg-brand-accent/20 text-brand-accent-hover p-8 rounded-lg">
                                <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                                <p>Your message has been sent. We aim to respond within 1 to 2 working days.</p>
                            </div>
                        ) : (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name*</label>
                                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-primary focus:ring-brand-primary bg-white text-brand-text-primary"/>
                            </div>
                             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email*</label>
                                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-primary focus:ring-brand-primary bg-white text-brand-text-primary"/>
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                                    <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-primary focus:ring-brand-primary bg-white text-brand-text-primary"/>
                                </div>
                            </div>
                             <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">I would like to get in touch about*</label>
                                <div className="flex flex-wrap gap-2">
                                    {subjects.map(s => (
                                        <button 
                                            key={s} 
                                            type="button"
                                            onClick={() => setSubject(s)}
                                            className={`px-3 py-1.5 text-sm rounded-full border-2 transition-colors ${subject === s ? 'bg-brand-primary border-brand-primary text-white' : 'bg-transparent border-gray-300 hover:border-brand-primary'}`}
                                        >
                                            {s}
                                        </button>
                                    ))}
                                </div>
                             </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message*</label>
                                <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} rows={5} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-primary focus:ring-brand-primary bg-white text-brand-text-primary"></textarea>
                            </div>
                            <div>
                                <button type="submit" className="w-full bg-brand-primary text-white font-bold py-3 px-4 rounded-md hover:bg-brand-primary-hover transition-colors">Submit</button>
                            </div>
                             <p className="text-xs text-gray-500 text-center pt-2">Your information will remain private and will never be shared.</p>
                        </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
      </section>
      
       <section className="py-16 md:py-20 bg-brand-bg-subtle">
        <div className="container mx-auto px-6 max-w-4xl">
             <div className="content-bubble">
                <div className="p-6 md:p-8 text-center">
                    <PawIcon className="w-12 h-12 text-brand-primary mx-auto mb-4" />
                    <h2 className="text-3xl font-bold text-brand-primary">Be Part of Something Life-Changing</h2>
                    <p className="my-6 text-lg">Every message opens the door to a kinder world. Whether you choose to adopt, sponsor or support in your own way, you are helping animals feel safe, seen and loved.</p>
                     <div className="flex flex-wrap justify-center gap-4">
                        <CtaButton href="/dogs" className="bg-brand-primary text-white hover:bg-brand-primary-hover">View Adoptable Dogs</CtaButton>
                        <CtaButton href="/horses" className="bg-brand-primary text-white hover:bg-brand-primary-hover">View Adoptable Horses</CtaButton>
                        <CtaButton href="/get-involved#donate" className="bg-brand-secondary text-white hover:bg-brand-secondary-hover">Make a Donation</CtaButton>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;