import React from 'react';
import { MediaContent } from '../../types.ts';
import EditableMedia from '../EditableMedia.tsx';
import CtaButton from '../CtaButton.tsx';
import { useSafeNavigation } from '../../contexts/NavigationContext.tsx';
import { PawIcon } from '../icons.tsx';

interface GetInvolvedLandingPageProps {
  mediaContent: MediaContent;
  isEditMode: boolean;
  onMediaUpdate: (key: string, url: string) => void;
}

// Step 1: Hero Banner
const Hero: React.FC<GetInvolvedLandingPageProps> = (props) => (
    <section className="relative bg-sanctuary-dark text-white py-20 md:py-32 text-center">
        <div className="absolute inset-0">
          {props.mediaContent['get_involved_hero'] && (
            <EditableMedia 
                mediaKey="get_involved_hero" 
                mediaUrl={props.mediaContent['get_involved_hero']!} 
                alt="Dog's face with caring hand - Get Involved hero"
                className="w-full h-full object-cover" 
                isEditMode={props.isEditMode} 
                onUpdate={props.onMediaUpdate}
            />
          )}
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div style={{position: 'relative', maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', zIndex: 10}}>
          <div style={{maxWidth: '64rem', margin: '0 auto', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            <div style={{padding: '3rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
              <h1 className="text-white" style={{textAlign: 'center', fontSize: '4rem', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '-0.025em', textShadow: '3px 3px 6px rgba(0,0,0,0.8), 1px 1px 3px rgba(0,0,0,0.6)'}}>
                Get Involved
              </h1>
              <p className="text-white" style={{textAlign: 'center', margin: '1rem auto 0 auto', fontSize: '1.25rem', lineHeight: '1.6', maxWidth: '48rem', textShadow: '2px 2px 4px rgba(0,0,0,0.8), 1px 1px 2px rgba(0,0,0,0.6)'}}>
                Your support is vital. Become part of their story.
              </p>
              <div className="mt-6 p-4 bg-black bg-opacity-50 rounded-lg">
                <p className="text-white text-lg font-semibold" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>
                  Ready to Help? Your support brings comfort and care to our dogs
                </p>
              </div>
            </div>
          </div>
        </div>
    </section>
);

// Steps 2-3: Volunteer Sections
const VolunteerSections: React.FC<GetInvolvedLandingPageProps> = (props) => {
  const { navigate } = useSafeNavigation();
  
  return (
    <>
      {/* Step 2: Volunteer With Our Dogs */}
      <section className="py-16 md:py-20 bg-brand-bg-main animate-on-scroll">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="content-bubble">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1">
                {props.mediaContent['volunteer_dogs_section'] && (
                  <EditableMedia
                    mediaKey="volunteer_dogs_section"
                    mediaUrl={props.mediaContent['volunteer_dogs_section']!}
                    alt="Tan dog with tennis ball"
                    isEditMode={props.isEditMode}
                    onUpdate={props.onMediaUpdate}
                    className="w-full h-auto object-cover rounded-lg aspect-video"
                  />
                )}
              </div>
              <div className="order-1 lg:order-2 p-6 md:p-8 flex flex-col justify-center">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-secondary mb-6">Volunteer With Our Dogs</h2>
                <p className="text-lg text-brand-text-secondary leading-relaxed mb-8 text-center">
                  At The Gem Project Sanctuary, every helping hand matters. Volunteering with our dogs is a meaningful way to support healing, trust-building, and a second chance at life. From basic care and playtime to advanced behavioural support, there is a place for every volunteer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step 3: Volunteer With Our Horses */}
      <section className="py-16 md:py-20 bg-white animate-on-scroll">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="content-bubble">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="order-1 lg:order-1">
                {props.mediaContent['volunteer_horses_section'] && (
                  <EditableMedia
                    mediaKey="volunteer_horses_section"
                    mediaUrl={props.mediaContent['volunteer_horses_section']!}
                    alt="Chestnut horse with white blaze"
                    isEditMode={props.isEditMode}
                    onUpdate={props.onMediaUpdate}
                    className="w-full h-auto object-cover rounded-lg aspect-video"
                  />
                )}
              </div>
              <div className="order-2 lg:order-2 p-6 md:p-8 flex flex-col justify-center">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-accent mb-6">Volunteer With Our Horses</h2>
                <p className="text-lg text-brand-text-secondary leading-relaxed mb-8 text-center">
                  Our horses have overcome neglect and hardship. Volunteering with them is a way to restore trust, rebuild strength, and prepare them for a brighter future. From feeding and grooming to rehabilitation and training, volunteers play a vital role in their daily care and recovery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

// Step 4: Volunteer Tiers
const VolunteerTiers: React.FC<GetInvolvedLandingPageProps> = (props) => {
  return (
    <>
      {/* Dog Volunteer Tiers */}
      <section className="py-16 md:py-20 bg-brand-bg-subtle animate-on-scroll">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="content-bubble text-center mb-12">
            <div className="p-6 md:p-8">
              <PawIcon className="w-10 h-10 text-brand-secondary mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-brand-secondary mb-4">Dog Volunteer Tiers</h2>
              <p className="text-lg text-brand-text-secondary">Find the perfect volunteer role that matches your skills and experience.</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Junior Dog Helpers */}
            <div className="content-bubble text-center animate-on-scroll">
              <div className="p-6">
                {props.mediaContent['junior_dog_helpers'] && (
                  <EditableMedia
                    mediaKey="junior_dog_helpers"
                    mediaUrl={props.mediaContent['junior_dog_helpers']!}
                    alt="Scruffy dog with toy"
                    isEditMode={props.isEditMode}
                    onUpdate={props.onMediaUpdate}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                )}
                <h3 className="text-xl font-bold text-brand-secondary mb-2">Junior Dog Helpers</h3>
                <p className="text-brand-text-secondary text-center">Learn the basics of dog care by helping with feeding, cleaning, and play. This is the perfect entry point for first-time volunteers.</p>
              </div>
            </div>

            {/* Beginner Animal Buddies */}
            <div className="content-bubble text-center animate-on-scroll">
              <div className="p-6">
                {props.mediaContent['beginner_animal_buddies'] && (
                  <EditableMedia
                    mediaKey="beginner_animal_buddies"
                    mediaUrl={props.mediaContent['beginner_animal_buddies']!}
                    alt="Group of dogs running"
                    isEditMode={props.isEditMode}
                    onUpdate={props.onMediaUpdate}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                )}
                <h3 className="text-xl font-bold text-brand-secondary mb-2">Beginner Animal Buddies</h3>
                <p className="text-brand-text-secondary text-center">Support our dogs with enrichment and safe socialising. From ball games to gentle walks, you'll build trust and confidence.</p>
              </div>
            </div>

            {/* Practical Heroes */}
            <div className="content-bubble text-center animate-on-scroll">
              <div className="p-6">
                {props.mediaContent['practical_heroes_dogs'] && (
                  <EditableMedia
                    mediaKey="practical_heroes_dogs"
                    mediaUrl={props.mediaContent['practical_heroes_dogs']!}
                    alt="Man playing tug with tan dog"
                    isEditMode={props.isEditMode}
                    onUpdate={props.onMediaUpdate}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                )}
                <h3 className="text-xl font-bold text-brand-secondary mb-2">Practical Heroes</h3>
                <p className="text-brand-text-secondary text-center">Step into hands-on care with grooming, kennel upkeep, and health checks. You'll be part of the dogs' daily routine.</p>
              </div>
            </div>

            {/* Creative Collaborators */}
            <div className="content-bubble text-center animate-on-scroll">
              <div className="p-6">
                {props.mediaContent['creative_collaborators'] && (
                  <EditableMedia
                    mediaKey="creative_collaborators"
                    mediaUrl={props.mediaContent['creative_collaborators']!}
                    alt="Dog with handler in beanie"
                    isEditMode={props.isEditMode}
                    onUpdate={props.onMediaUpdate}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                )}
                <h3 className="text-xl font-bold text-brand-secondary mb-2">Creative Collaborators</h3>
                <p className="text-brand-text-secondary text-center">Bring enrichment and stimulation to life through activities, toys, and creative training. Perfect for volunteers who love ideas and interaction.</p>
              </div>
            </div>

            {/* Confident Companions */}
            <div className="content-bubble text-center animate-on-scroll">
              <div className="p-6">
                {props.mediaContent['confident_companions'] && (
                  <EditableMedia
                    mediaKey="confident_companions"
                    mediaUrl={props.mediaContent['confident_companions']!}
                    alt="Tan dog mid-lick"
                    isEditMode={props.isEditMode}
                    onUpdate={props.onMediaUpdate}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                )}
                <h3 className="text-xl font-bold text-brand-secondary mb-2">Confident Companions</h3>
                <p className="text-brand-text-secondary text-center">Handle dogs with higher energy or unique needs. Provide advanced walks, guided training, and extra support for their wellbeing.</p>
              </div>
            </div>

            {/* Emotional Support Ambassadors */}
            <div className="content-bubble text-center animate-on-scroll">
              <div className="p-6">
                {props.mediaContent['emotional_support_ambassadors'] && (
                  <EditableMedia
                    mediaKey="emotional_support_ambassadors"
                    mediaUrl={props.mediaContent['emotional_support_ambassadors']!}
                    alt="Dog in training posture"
                    isEditMode={props.isEditMode}
                    onUpdate={props.onMediaUpdate}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                )}
                <h3 className="text-xl font-bold text-brand-secondary mb-2">Emotional Support Ambassadors</h3>
                <p className="text-brand-text-secondary text-center">Offer calm presence and gentle companionship to shy or recovering dogs. These roles focus on emotional connection and rebuilding trust.</p>
              </div>
            </div>

            {/* Behaviour & Training (Dogs) */}
            <div className="content-bubble text-center animate-on-scroll">
              <div className="p-6">
                {props.mediaContent['behaviour_training_dogs'] && (
                  <EditableMedia
                    mediaKey="behaviour_training_dogs"
                    mediaUrl={props.mediaContent['behaviour_training_dogs']!}
                    alt="Dog with handler in obedience stance"
                    isEditMode={props.isEditMode}
                    onUpdate={props.onMediaUpdate}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                )}
                <h3 className="text-xl font-bold text-brand-secondary mb-2">Behaviour & Training (Dogs)</h3>
                <p className="text-brand-text-secondary text-center">Work alongside handlers to reinforce obedience and basic training. Help dogs prepare for successful adoptions.</p>
              </div>
            </div>

            {/* Specialised Support (Dogs) */}
            <div className="content-bubble text-center animate-on-scroll">
              <div className="p-6">
                {props.mediaContent['specialised_support_dogs'] && (
                  <EditableMedia
                    mediaKey="specialised_support_dogs"
                    mediaUrl={props.mediaContent['specialised_support_dogs']!}
                    alt="Dog with handler in close partnership"
                    isEditMode={props.isEditMode}
                    onUpdate={props.onMediaUpdate}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                )}
                <h3 className="text-xl font-bold text-brand-secondary mb-2">Specialised Support (Dogs)</h3>
                <p className="text-brand-text-secondary text-center">Support with advanced behaviour work or medical cases. These roles require commitment and consistency to help the most vulnerable dogs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Horse Volunteer Tiers */}
      <section className="py-16 md:py-20 bg-white animate-on-scroll">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="content-bubble text-center mb-12">
            <div className="p-6 md:p-8">
              <PawIcon className="w-10 h-10 text-brand-accent mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-brand-accent mb-4">Horse Volunteer Tiers</h2>
              <p className="text-lg text-brand-text-secondary">Discover meaningful ways to contribute to equine rehabilitation and care.</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Junior Horse Helpers */}
            <div className="content-bubble text-center animate-on-scroll">
              <div className="p-6">
                {props.mediaContent['junior_horse_helpers'] && (
                  <EditableMedia
                    mediaKey="junior_horse_helpers"
                    mediaUrl={props.mediaContent['junior_horse_helpers']!}
                    alt="Pony with handler"
                    isEditMode={props.isEditMode}
                    onUpdate={props.onMediaUpdate}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                )}
                <h3 className="text-xl font-bold text-brand-accent mb-2">Junior Horse Helpers</h3>
                <p className="text-brand-text-secondary text-center">Start with safe daily tasks such as grooming, feeding, and stable care. Ideal for volunteers new to horses.</p>
              </div>
            </div>

            {/* Beginner Horse Buddies */}
            <div className="content-bubble text-center animate-on-scroll">
              <div className="p-6">
                {props.mediaContent['beginner_horse_buddies'] && (
                  <EditableMedia
                    mediaKey="beginner_horse_buddies"
                    mediaUrl={props.mediaContent['beginner_horse_buddies']!}
                    alt="Horses with handler"
                    isEditMode={props.isEditMode}
                    onUpdate={props.onMediaUpdate}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                )}
                <h3 className="text-xl font-bold text-brand-accent mb-2">Beginner Horse Buddies</h3>
                <p className="text-brand-text-secondary text-center">Assist with paddock checks, leading calm horses, and enrichment activities. Build confidence in handling.</p>
              </div>
            </div>

            {/* Practical Heroes (Horses) */}
            <div className="content-bubble text-center animate-on-scroll">
              <div className="p-6">
                {props.mediaContent['practical_heroes_horses'] && (
                  <EditableMedia
                    mediaKey="practical_heroes_horses"
                    mediaUrl={props.mediaContent['practical_heroes_horses']!}
                    alt="Horse stable maintenance"
                    isEditMode={props.isEditMode}
                    onUpdate={props.onMediaUpdate}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                )}
                <h3 className="text-xl font-bold text-brand-accent mb-2">Practical Heroes (Horses)</h3>
                <p className="text-brand-text-secondary text-center">Help with mucking stables, feeding routines, and general yard work. Essential hands-on support for the herd.</p>
              </div>
            </div>

            {/* Confident Horse Companions */}
            <div className="content-bubble text-center animate-on-scroll">
              <div className="p-6">
                {props.mediaContent['confident_horse_companions'] && (
                  <EditableMedia
                    mediaKey="confident_horse_companions"
                    mediaUrl={props.mediaContent['confident_horse_companions']!}
                    alt="White horse"
                    isEditMode={props.isEditMode}
                    onUpdate={props.onMediaUpdate}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                )}
                <h3 className="text-xl font-bold text-brand-accent mb-2">Confident Horse Companions</h3>
                <p className="text-brand-text-secondary text-center">Work with horses that require confident handling on walks, in grooming, and during turnout.</p>
              </div>
            </div>

            {/* Behaviour & Training (Horses) */}
            <div className="content-bubble text-center animate-on-scroll">
              <div className="p-6">
                {props.mediaContent['behaviour_training_horses'] && (
                  <EditableMedia
                    mediaKey="behaviour_training_horses"
                    mediaUrl={props.mediaContent['behaviour_training_horses']!}
                    alt="Horse trotting in paddock"
                    isEditMode={props.isEditMode}
                    onUpdate={props.onMediaUpdate}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                )}
                <h3 className="text-xl font-bold text-brand-accent mb-2">Behaviour & Training (Horses)</h3>
                <p className="text-brand-text-secondary text-center">Support handlers in reinforcing training cues, groundwork, and positive behaviour. Helps prepare horses for adoption or long-term care.</p>
              </div>
            </div>

            {/* Specialised Horse Support */}
            <div className="content-bubble text-center animate-on-scroll">
              <div className="p-6">
                {props.mediaContent['specialised_horse_support'] && (
                  <EditableMedia
                    mediaKey="specialised_horse_support"
                    mediaUrl={props.mediaContent['specialised_horse_support']!}
                    alt="Handler leading horse from stable"
                    isEditMode={props.isEditMode}
                    onUpdate={props.onMediaUpdate}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                )}
                <h3 className="text-xl font-bold text-brand-accent mb-2">Specialised Horse Support</h3>
                <p className="text-brand-text-secondary text-center">Advanced roles requiring expertise in equine therapy, veterinary assistance, or transport coordination.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

// Step 5: Ready to Join Us CTA
const ReadyToJoinCTA: React.FC<GetInvolvedLandingPageProps> = (props) => {
  return (
    <section className="py-16 md:py-20 bg-brand-bg-main animate-on-scroll">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="content-bubble">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="order-2 lg:order-1">
              {props.mediaContent['get_involved_ready_to_join'] && (
                <EditableMedia
                  mediaKey="get_involved_ready_to_join"
                  mediaUrl={props.mediaContent['get_involved_ready_to_join']!}
                  alt="Dog walker with pack of dogs"
                  isEditMode={props.isEditMode}
                  onUpdate={props.onMediaUpdate}
                  className="w-full h-auto object-cover rounded-lg aspect-video"
                />
              )}
            </div>
            <div className="order-1 lg:order-2 p-6 md:p-8 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-6">Ready to Join Us?</h2>
              <p className="text-lg text-brand-text-secondary leading-relaxed mb-8 text-center">
                Whether you want to walk a dog, muck a stable, or help tell their story, you belong here. Every moment you give is part of changing a life.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <CtaButton href="/contact" className="bg-brand-secondary text-white font-bold py-4 px-6 rounded-full transition duration-300 hover:bg-brand-secondary-hover text-lg">
                  Contact Us to Volunteer
                </CtaButton>
                <CtaButton href="/dogs" className="bg-brand-primary text-white font-bold py-4 px-6 rounded-full transition duration-300 hover:bg-brand-primary-hover text-lg">
                  Learn More About Our Dogs
                </CtaButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Steps 6-7: Hands-On Care Programme
const HandsOnCareSection: React.FC<GetInvolvedLandingPageProps> = (props) => {
  return (
    <>
      {/* Step 6: Hands-On Care Programme (Dogs) */}
      <section className="py-16 md:py-20 bg-white animate-on-scroll">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="content-bubble">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="order-1 lg:order-1">
                {props.mediaContent['hands_on_dogs_programme'] && (
                  <EditableMedia
                    mediaKey="hands_on_dogs_programme"
                    mediaUrl={props.mediaContent['hands_on_dogs_programme']!}
                    alt="Dog cuddle"
                    isEditMode={props.isEditMode}
                    onUpdate={props.onMediaUpdate}
                    className="w-full h-auto object-cover rounded-lg aspect-video"
                  />
                )}
              </div>
              <div className="order-2 lg:order-2 p-6 md:p-8 flex flex-col justify-center">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-secondary mb-6">Hands-On Care Programme (Dogs)</h2>
                <p className="text-lg text-brand-text-secondary leading-relaxed mb-8 text-center">
                  Our Hands-On Care Programme lets you form a profound bond without the commitment of ownership. As a co-caregiver, you will share in the daily care, enrichment, and wellbeing of one of our dogs, building trust and companionship that lasts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step 7: Hands-On Care Programme (Horses) */}
      <section className="py-16 md:py-20 bg-brand-bg-subtle animate-on-scroll">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="content-bubble">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1">
                {props.mediaContent['hands_on_horses_programme'] && (
                  <EditableMedia
                    mediaKey="hands_on_horses_programme"
                    mediaUrl={props.mediaContent['hands_on_horses_programme']!}
                    alt="Horse being fed by hand"
                    isEditMode={props.isEditMode}
                    onUpdate={props.onMediaUpdate}
                    className="w-full h-auto object-cover rounded-lg aspect-video"
                  />
                )}
              </div>
              <div className="order-1 lg:order-2 p-6 md:p-8 flex flex-col justify-center">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-accent mb-6">Hands-On Care Programme (Horses)</h2>
                <p className="text-lg text-brand-text-secondary leading-relaxed mb-8 text-center">
                  For those who feel called to connect deeply with a horse, our Hands-On Care Programme offers a unique chance to bond while they remain in the sanctuary's care. You will share responsibility for feeding, grooming, training enrichment, and daily wellbeing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

// Steps 8-9: Wishlist Sections
const WishlistSections: React.FC<GetInvolvedLandingPageProps> = (props) => {
  return (
    <section className="py-16 md:py-20 bg-white animate-on-scroll">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="content-bubble text-center mb-12">
          <div className="p-6 md:p-8">
            <PawIcon className="w-10 h-10 text-brand-primary mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">Support Our Animals</h2>
            <p className="text-lg text-brand-text-secondary">In-kind donations are just as vital as financial gifts.</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Step 8: Dog Wishlist */}
          <div className="content-bubble">
            <div className="p-6 md:p-8">
              <h3 className="text-2xl font-bold text-brand-secondary mb-6 text-center">Our Dog Wishlist</h3>
              {props.mediaContent['dog_wishlist_section'] && (
                <EditableMedia
                  mediaKey="dog_wishlist_section"
                  mediaUrl={props.mediaContent['dog_wishlist_section']!}
                  alt="Dog with toys"
                  isEditMode={props.isEditMode}
                  onUpdate={props.onMediaUpdate}
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />
              )}
              <p className="text-lg text-brand-text-secondary leading-relaxed mb-6 text-center">
                In-kind donations are just as vital as financial gifts. Every item donated stretches our resources and brings comfort to the dogs in our care.
              </p>
              <ul className="space-y-2 text-brand-text-secondary">
                <li className="flex items-center"><span className="w-2 h-2 bg-brand-secondary rounded-full mr-3"></span>Food & Basic Care</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-brand-secondary rounded-full mr-3"></span>Health & Hygiene</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-brand-secondary rounded-full mr-3"></span>Enrichment & Training</li>
              </ul>
            </div>
          </div>

          {/* Step 9: Horse Wishlist */}
          <div className="content-bubble">
            <div className="p-6 md:p-8">
              <h3 className="text-2xl font-bold text-brand-accent mb-6 text-center">Our Horse Wishlist</h3>
              {props.mediaContent['horse_wishlist_section'] && (
                <EditableMedia
                  mediaKey="horse_wishlist_section"
                  mediaUrl={props.mediaContent['horse_wishlist_section']!}
                  alt="Two horses eating hay"
                  isEditMode={props.isEditMode}
                  onUpdate={props.onMediaUpdate}
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />
              )}
              <p className="text-lg text-brand-text-secondary leading-relaxed mb-6 text-center">
                Our horses thrive on dedicated care and practical support. Each donated item directly improves their health, comfort, and training environment.
              </p>
              <ul className="space-y-2 text-brand-text-secondary">
                <li className="flex items-center"><span className="w-2 h-2 bg-brand-accent rounded-full mr-3"></span>Food & Basic Care</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-brand-accent rounded-full mr-3"></span>Health & Hygiene</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-brand-accent rounded-full mr-3"></span>Enrichment & Training</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Step 10: Ready to Help CTA
const ReadyToHelpCTA: React.FC<GetInvolvedLandingPageProps> = (props) => {
  return (
    <section className="py-16 md:py-20 bg-brand-bg-main animate-on-scroll">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="content-bubble text-center mb-8">
          <div className="p-6 md:p-8">
            <PawIcon className="w-10 h-10 text-brand-primary mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">Ready to Help?</h2>
            <p className="text-lg text-brand-text-secondary leading-relaxed max-w-4xl mx-auto">
              Every donated item makes a direct impact on an animal's comfort and happiness. You can drop off items at the sanctuary or contact us to arrange collection.
            </p>
          </div>
        </div>
        <div className="content-bubble">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              {props.mediaContent['get_involved_ready_help_dog'] && (
                <EditableMedia
                  mediaKey="get_involved_ready_help_dog"
                  mediaUrl={props.mediaContent['get_involved_ready_help_dog']!}
                  alt="Dog lying in grass with tongue out"
                  isEditMode={props.isEditMode}
                  onUpdate={props.onMediaUpdate}
                  className="w-full h-auto object-cover rounded-lg aspect-video"
                />
              )}
            </div>
            <div>
              {props.mediaContent['get_involved_ready_help_horse'] && (
                <EditableMedia
                  mediaKey="get_involved_ready_help_horse"
                  mediaUrl={props.mediaContent['get_involved_ready_help_horse']!}
                  alt="Horse with calm expression close-up"
                  isEditMode={props.isEditMode}
                  onUpdate={props.onMediaUpdate}
                  className="w-full h-auto object-cover rounded-lg aspect-video"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Step 11: Mobile Veterinary Clinic
const MobileVetClinicSection: React.FC<GetInvolvedLandingPageProps> = (props) => {
  return (
    <section className="py-16 md:py-20 bg-white animate-on-scroll">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="content-bubble">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="order-2 lg:order-1">
              {props.mediaContent['community_vet_clinic'] && (
                <EditableMedia
                  mediaKey="community_vet_clinic"
                  mediaUrl={props.mediaContent['community_vet_clinic']!}
                  alt="Vet treating dog on table"
                  isEditMode={props.isEditMode}
                  onUpdate={props.onMediaUpdate}
                  className="w-full h-auto object-cover rounded-lg aspect-video"
                />
              )}
            </div>
            <div className="order-1 lg:order-2 p-6 md:p-8 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-6">Mobile Veterinary Clinic</h2>
              <p className="text-lg text-brand-text-secondary leading-relaxed mb-8 text-center">
                Our mobile veterinary clinic brings essential veterinary services directly to underserved communities. We provide vaccinations, basic health checks, and emergency care to ensure animals receive the healthcare they need.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-brand-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-lg text-brand-text-secondary">Free vaccinations and health screenings</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-brand-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-lg text-brand-text-secondary">Emergency veterinary care</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-brand-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-lg text-brand-text-secondary">Community education programmes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Step 12: Final Donate CTA
const FinalDonateCTA: React.FC<GetInvolvedLandingPageProps> = (props) => {
  return (
    <section className="py-16 md:py-20 bg-brand-bg-subtle animate-on-scroll">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="content-bubble text-center mb-8">
          <div className="p-6 md:p-8">
            <PawIcon className="w-10 h-10 text-brand-primary mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">Make a Difference Today</h2>
            <p className="text-lg text-brand-text-secondary leading-relaxed max-w-4xl mx-auto mb-8">
              Your financial support helps us rescue, rehabilitate, and care for animals in need. Every donation makes a direct impact on the lives we save.
            </p>
          </div>
        </div>
        <div className="content-bubble mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              {props.mediaContent['get_involved_final_dogs'] && (
                <EditableMedia
                  mediaKey="get_involved_final_dogs"
                  mediaUrl={props.mediaContent['get_involved_final_dogs']!}
                  alt="Three dogs running directly toward the camera"
                  isEditMode={props.isEditMode}
                  onUpdate={props.onMediaUpdate}
                  className="w-full h-auto object-cover rounded-lg aspect-video"
                />
              )}
            </div>
            <div>
              {props.mediaContent['get_involved_final_horses'] && (
                <EditableMedia
                  mediaKey="get_involved_final_horses"
                  mediaUrl={props.mediaContent['get_involved_final_horses']!}
                  alt="Carer kissing a small brown horse gently on the nose"
                  isEditMode={props.isEditMode}
                  onUpdate={props.onMediaUpdate}
                  className="w-full h-auto object-cover rounded-lg aspect-video"
                />
              )}
            </div>
          </div>
        </div>
        <div className="text-center">
          <CtaButton href="/donate" className="bg-brand-primary text-white font-bold py-4 px-8 rounded-full transition duration-300 hover:bg-brand-primary-hover text-xl shadow-lg">
            Make a Donation
          </CtaButton>
        </div>
      </div>
    </section>
  );
};

const GetInvolvedLandingPage: React.FC<GetInvolvedLandingPageProps> = (props) => {
  return (
    <div className="bg-brand-bg-main">
      <Hero {...props} />
      <VolunteerSections {...props} />
      <VolunteerTiers {...props} />
      <ReadyToJoinCTA {...props} />
      <HandsOnCareSection {...props} />
      <WishlistSections {...props} />
      <ReadyToHelpCTA {...props} />
      <MobileVetClinicSection {...props} />
      <FinalDonateCTA {...props} />
    </div>
  );
};

export default GetInvolvedLandingPage;