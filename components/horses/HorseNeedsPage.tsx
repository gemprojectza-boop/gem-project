

import React from 'react';
import { MediaContent } from '../../types.ts';
import EditableMedia from '../EditableMedia.tsx';
import CtaButton from '../CtaButton.tsx';
import { PageHero, ContentSection } from '../PageComponents.tsx';
import { PawIcon } from '../icons.tsx';

interface HorseNeedsPageProps {
  mediaContent: MediaContent;
  isEditMode: boolean;
  onMediaUpdate: (key: string, url: string) => void;
}

const NeedsCategory: React.FC<{title: string; intro: string; items: string[]}> = ({title, intro, items}) => (
    <div className="content-bubble h-full flex flex-col">
        <div className="p-4 md:p-6 flex-grow flex flex-col">
            <h3 className="text-xl md:text-2xl font-bold mb-3 text-sanctuary-purple">{title}</h3>
            <p className="text-gray-600 text-sm md:text-base mb-4 leading-relaxed">{intro}</p>
            <ul className="space-y-3">
                {items.map(item => (
                    <li key={item} className="flex items-start">
                        <PawIcon className="w-4 h-4 text-sanctuary-purple mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm md:text-base leading-relaxed">{item}</span>
                    </li>
                ))}
            </ul>
        </div>
    </div>
)

const HorseNeedsPage: React.FC<HorseNeedsPageProps> = (props) => {
  return (
    <div className="bg-brand-bg-main">
      <PageHero
        title="Horse Needs List"
        subtitle="Help Us Care for Our Herd"
        mediaKey="horse_needs_hero"
        alt="Close-up of donated supplies with horses in the background"
        titleColorClass="text-white"
        {...props}
      />

      <ContentSection>
        <p>Caring for 20 horses—many of whom are recovering from trauma, illness or neglect—requires ongoing access to high-quality equipment, feed and medical supplies. While we provide a lifelong home for our equines, we rely on the generosity of donors and supporters to meet their daily and long-term needs.</p>
        <p className="mt-4">Below is a breakdown of the items we require on an ongoing basis, as well as some once-off larger donations that would significantly strengthen our operations.</p>
      </ContentSection>
      
      <section className="py-16 md:py-20 bg-brand-bg-subtle">
        <div className="container mx-auto px-6 max-w-7xl">
            <div className="content-bubble">
                <div className="p-6 md:p-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-12 text-center">What Our Horses Need Most</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <NeedsCategory 
                            title="General Needs"
                            intro="These essential tools help us keep the sanctuary clean, functional and safe for both horses and caregivers:"
                            items={[
                                "Soft brooms (for stables and shelters)",
                                "Heavy-duty plastic rakes (durable enough for paddock cleaning)",
                            ]}
                        />
                        <NeedsCategory 
                            title="Everyday Life Needs"
                            intro="Comfort, grooming and safe handling are a big part of a horse’s daily routine. These items are used regularly and we often need replacements as our herd grows or existing gear wears out:"
                            items={[
                                "Grooming equipment (brushes, curry combs, hoof picks)",
                                "Fly masks and fly sheets (Pony and Cob sizes)",
                                "Rope halters with leads (Pony and Cob sizes)",
                                "Gorilla flexi buckets (26L and 42L for feeding and water)",
                                "Horse shampoo (gentle and safe for sensitive skin)",
                                "1.8m to 2.0m round poles (for fencing, lunge rings and agility courses)",
                            ]}
                        />
                         <NeedsCategory 
                            title="Healthcare Needs"
                            intro="Our rehabilitation program relies on constant access to veterinary supplies and health products. These are always in high demand:"
                            items={[
                                "Horse dewormer (various types)",
                                "Vet wrap bandages",
                                "Elastoplast (for more secure wrapping)",
                                "Digital thermometers (essential for early detection of illness)",
                                "Vaseline (for wound protection and various treatments)",
                                "Ice Man (reusable ice packs or therapy boots)",
                                "Feed: Oat Hay, Lucerne, Teff (consumed daily by the herd)",
                            ]}
                        />
                    </div>
                </div>
            </div>
        </div>
      </section>

      <ContentSection title="Once-Off Donation Needs">
        <div className="content-bubble">
            <EditableMedia
                mediaKey="horse_needs_horsebox"
                mediaUrl={props.mediaContent.horse_needs_horsebox!}
                alt="Horsebox being loaded with supplies"
                isEditMode={props.isEditMode}
                onUpdate={props.onMediaUpdate}
                className="rounded-t-lg aspect-video"
            />
            <div className="p-6 md:p-8">
                <p>These larger items are incredibly important to our growth and long-term sustainability. If you or your company would like to contribute to a legacy project, these are impactful ways to give:</p>
                <ul className="list-disc list-inside space-y-2 my-4">
                    <li>Chaffer (for chopping and preparing hay or feed)</li>
                    <li>Tractor and trailer (to assist with land maintenance and hay transport)</li>
                    <li>Horsebox (2–3 berth) for safe transportation of horses to clinics or new environments</li>
                    <li>Equine scale to monitor weight, especially for horses in rehab</li>
                    <li>Vehicle (4x4) to support outreach, rescue missions and towing of horseboxes</li>
                </ul>
                <p className="mt-6 font-semibold">Every donation—no matter how small or large—directly impacts the lives of our horses. Whether it’s a single fly mask or a trailer to help us rescue a horse in distress, your generosity helps us keep our promise: to provide a life of dignity, care and love to every equine in our care.</p>
            </div>
        </div>
      </ContentSection>
      
      <ContentSection title="How You Can Help" className="bg-brand-bg-subtle">
        <div className="space-y-6">
            <div>
                <h4 className="text-xl font-bold text-sanctuary-dark">Item Donations</h4>
                <p>Donate items directly from our list above.</p>
            </div>
            <div>
                <h4 className="text-xl font-bold text-sanctuary-dark">Monetary Donations</h4>
                <p>One-time or recurring financial contributions allow us to cover urgent medical treatments, daily feeding and facility improvements.</p>
                <ul className="list-disc list-inside text-gray-600 pl-4 mt-2">
                    <li>Once-off EFTs or bank deposits</li>
                    <li>Monthly giving (sponsor a horse or fund a need)</li>
                </ul>
            </div>
            <div>
                <h4 className="text-xl font-bold text-sanctuary-dark">Corporate Giving</h4>
                <p>We welcome CSR partnerships, matching gift programs or in-kind donations from businesses.</p>
            </div>
            <div>
                <h4 className="text-xl font-bold text-sanctuary-dark text-center">Gift Donations</h4>
                <p>Donate on behalf of a friend or family member in honour of a birthday, anniversary or memorial.</p>
            </div>
            <div>
                <h4 className="text-xl font-bold text-sanctuary-dark">Legacy or Estate Gifts</h4>
                <p>Leave a lasting impact by including The Gem Project Sanctuary in your will or estate plan.</p>
            </div>
        </div>

        <div className="mt-8 p-4 bg-green-100 border-l-4 border-green-500 text-green-800 rounded-r-lg">
            <p><span className="font-bold">Tax-Deductible Giving:</span> We are a registered Public Benefit Organisation (PBO) and all qualifying monetary donations are eligible for a Section 18A tax certificate. This means your donation can be tax-deductible in South Africa. Simply let us know if you’d like a certificate issued.</p>
        </div>

        <p className="mt-6 font-semibold">Every contribution—big or small—changes a life. Because of you, a once-forgotten horse will know safety, kindness and healing.</p>

        <div className="flex flex-wrap justify-center gap-4 mt-8">
            <CtaButton href="/donate" className="bg-brand-primary hover:bg-brand-primary-hover text-white">Donate Now</CtaButton>
            <CtaButton href="/contact" className="bg-brand-primary hover:bg-brand-primary-hover text-white">Contact Us</CtaButton>
        </div>
      </ContentSection>
    </div>
  );
};

export default HorseNeedsPage;
