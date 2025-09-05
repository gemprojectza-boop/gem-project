import React from 'react';
import { MediaContent } from '../types.ts';
import CtaButton from './CtaButton.tsx';
import EditableMedia from './EditableMedia.tsx';

interface DonatePageProps {
  mediaContent: MediaContent;
  isEditMode: boolean;
  onMediaUpdate: (key: string, url: string) => void;
}

const DonatePage: React.FC<DonatePageProps> = ({ mediaContent, isEditMode, onMediaUpdate }) => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="hero relative min-h-[80vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${mediaContent.donate_hero})` }}
      >
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 
            className="text-5xl md:text-6xl lg:text-7xl font-black mb-6"
            ref={(el) => { if (el) { el.style.setProperty('color', 'white', 'important'); } }}
            style={{ color: 'white !important' }}
          >
            Support Our Mission
          </h1>
          <p 
            className="text-xl md:text-2xl mb-8 font-light"
            ref={(el) => { if (el) { el.style.setProperty('color', 'white', 'important'); } }}
            style={{ color: 'white !important' }}
          >
            Your donation makes a direct impact on the lives of rescued animals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CtaButton href="#donate-now" size="large" className="bg-brand-accent hover:bg-brand-accent-hover text-white">
              Donate Now
            </CtaButton>
            <CtaButton href="#monthly-giving" variant="outline" size="large" className="border-white text-white hover:bg-white hover:text-brand-primary">
              Monthly Giving
            </CtaButton>
          </div>
        </div>
        <EditableMedia
          mediaKey="donate_hero"
          currentUrl={mediaContent.donate_hero!}
          isEditMode={isEditMode}
          onUpdate={onMediaUpdate}
          className="absolute top-4 left-4"
        />
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-brand-bg-main">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-brand-primary mb-6">Your Impact</h2>
            <p className="text-xl text-brand-text-primary max-w-3xl mx-auto text-center">
              Every donation directly supports our rescue, rehabilitation, and care programs for animals in need.
            </p>
          </div>


          {/* Success Stories */}
          <div className="bg-brand-bg-alt rounded-lg p-8 mb-16">
            <h3 className="text-3xl font-bold text-brand-primary mb-6 text-center">Recent Success Stories</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-center gap-4">
                <EditableMedia
                  mediaKey="donate_story_1"
                  currentUrl={mediaContent.donate_story_1!}
                  isEditMode={isEditMode}
                  onUpdate={onMediaUpdate}
                  className="w-20 h-20 rounded-full object-cover flex-shrink-0"
                />
                <div>
                  <h4 className="text-xl font-bold text-brand-primary mb-2">Charlie's Recovery</h4>
                  <p className="text-brand-text-primary text-center">
                    Thanks to donor support, Charlie received life-saving surgery and is now thriving in his forever home.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <EditableMedia
                  mediaKey="donate_story_2"
                  currentUrl={mediaContent.donate_story_2!}
                  isEditMode={isEditMode}
                  onUpdate={onMediaUpdate}
                  className="w-20 h-20 rounded-full object-cover flex-shrink-0"
                />
                <div>
                  <h4 className="text-xl font-bold text-brand-primary mb-2">Bella's Journey</h4>
                  <p className="text-brand-text-primary text-center">
                    From malnourished rescue to healthy companion - your donations made Bella's transformation possible.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Options */}
      <section id="donate-now" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-brand-primary mb-6">Choose Your Donation</h2>
            <p className="text-xl text-brand-text-primary text-center mx-auto max-w-3xl">
              Select the option that works best for you
            </p>
          </div>

          {/* One-Time Donation */}
          <div className="bg-brand-bg-alt rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-brand-primary mb-6">One-Time Donation</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <button className="bg-white border-2 border-brand-primary text-brand-primary font-bold py-3 px-4 rounded hover:bg-brand-primary hover:text-white transition-colors">
                R50
              </button>
              <button className="bg-white border-2 border-brand-primary text-brand-primary font-bold py-3 px-4 rounded hover:bg-brand-primary hover:text-white transition-colors">
                R100
              </button>
              <button className="bg-white border-2 border-brand-primary text-brand-primary font-bold py-3 px-4 rounded hover:bg-brand-primary hover:text-white transition-colors">
                R200
              </button>
              <button className="bg-white border-2 border-brand-primary text-brand-primary font-bold py-3 px-4 rounded hover:bg-brand-primary hover:text-white transition-colors">
                R500
              </button>
            </div>
            <div className="flex gap-4 mb-6">
              <input 
                type="number" 
                placeholder="Custom amount (R)" 
                className="flex-1 px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-brand-primary"
              />
              <CtaButton className="bg-brand-accent hover:bg-brand-accent-hover text-white">
                Donate Now
              </CtaButton>
            </div>
          </div>

          {/* Monthly Giving */}
          <div id="monthly-giving" className="bg-brand-primary rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">Monthly Giving Program</h3>
            <p className="text-lg mb-6 opacity-90 text-center">
              Join our monthly giving program for sustained impact. Monthly donors provide consistent support that helps us plan long-term care and rehabilitation programs.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-white bg-opacity-10 rounded-lg p-4 text-center">
                <h4 className="text-xl font-bold mb-2">Guardian</h4>
                <p className="text-3xl font-bold mb-2">R50/month</p>
                <p className="text-sm opacity-80">Basic care for rescued animals</p>
              </div>
              <div className="bg-brand-accent rounded-lg p-4 text-center">
                <h4 className="text-xl font-bold mb-2">Protector</h4>
                <p className="text-3xl font-bold mb-2">R100/month</p>
                <p className="text-sm opacity-80">Medical care & rehabilitation</p>
              </div>
              <div className="bg-white bg-opacity-10 rounded-lg p-4 text-center">
                <h4 className="text-xl font-bold mb-2">Champion</h4>
                <p className="text-3xl font-bold mb-2">R200/month</p>
                <p className="text-sm opacity-80">Full care & adoption program</p>
              </div>
            </div>
            <div className="text-center">
              <CtaButton className="bg-white text-brand-primary hover:bg-gray-100">
                Start Monthly Giving
              </CtaButton>
            </div>
          </div>
        </div>
      </section>

      {/* Other Ways to Help */}
      <section className="py-20 bg-brand-bg-main">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-brand-primary mb-6">Other Ways to Help</h2>
            <p className="text-xl text-brand-text-primary max-w-3xl mx-auto text-center">
              There are many ways to support our mission beyond financial donations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-lg text-center">
              <EditableMedia
                mediaKey="donate_volunteer"
                currentUrl={mediaContent.donate_volunteer!}
                isEditMode={isEditMode}
                onUpdate={onMediaUpdate}
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <h3 className="text-2xl font-bold text-brand-primary mb-4">Volunteer</h3>
              <p className="text-brand-text-primary mb-6 text-center">
                Donate your time and skills to help care for our rescued animals
              </p>
              <CtaButton href="/get-involved" className="bg-brand-primary hover:bg-brand-primary-hover">
                Learn More
              </CtaButton>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg text-center">
              <EditableMedia
                mediaKey="donate_sponsor"
                currentUrl={mediaContent.donate_sponsor!}
                isEditMode={isEditMode}
                onUpdate={onMediaUpdate}
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <h3 className="text-2xl font-bold text-brand-primary mb-4">Sponsor an Animal</h3>
              <p className="text-brand-text-primary mb-6 text-center">
                Provide ongoing support for a specific animal in our care
              </p>
              <CtaButton href="/dogs/sponsorship" className="bg-brand-primary hover:bg-brand-primary-hover">
                Sponsor Now
              </CtaButton>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg text-center">
              <EditableMedia
                mediaKey="donate_wishlist"
                currentUrl={mediaContent.donate_wishlist!}
                isEditMode={isEditMode}
                onUpdate={onMediaUpdate}
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <h3 className="text-2xl font-bold text-brand-primary mb-4">Wishlist Items</h3>
              <p className="text-brand-text-primary mb-6 text-center">
                Donate specific items we need for daily animal care and operations
              </p>
              <CtaButton href="/dog-wishlist" className="bg-brand-primary hover:bg-brand-primary-hover">
                View Wishlist
              </CtaButton>
            </div>
          </div>
        </div>
      </section>

      {/* Contact for Large Donations */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-brand-primary mb-6">Planning a Large Gift?</h2>
          <p className="text-xl text-brand-text-primary mb-8 max-w-3xl mx-auto text-center">
            For major donations, planned giving, or corporate partnerships, we'd love to discuss how your contribution can create maximum impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CtaButton href="/contact" className="bg-brand-primary hover:bg-brand-primary-hover">
              Contact Us
            </CtaButton>
            <CtaButton href="mailto:info@gemanimalsanctuary.org" variant="outline" className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white bg-white">
              <span 
                ref={(el) => { if (el) { el.style.setProperty('color', '#16a34a', 'important'); } }}
                style={{ color: '#16a34a !important' }}
              >
                Email Directly
              </span>
            </CtaButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DonatePage;