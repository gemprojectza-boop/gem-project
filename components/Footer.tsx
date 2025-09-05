import React from 'react';
import { PawIcon, FacebookIcon, InstagramIcon, TwitterIcon } from './icons.tsx';
import { SafeLink } from './SafeLink.tsx';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-text-primary text-white">
      <div className="max-content-width py-8">
        <div className="flex flex-col items-center space-y-4 text-center">
          <SafeLink href="/" className="hover:opacity-80 transition-opacity">
            <span ref={(el) => { if (el) { el.style.setProperty('color', 'white', 'important'); } }} style={{color: 'white !important'}} className="font-bold">The Gem Project Sanctuary</span>
          </SafeLink>

          <div className="flex items-center space-x-4">
            <SafeLink href="https://facebook.com" className="hover:opacity-80 transition-opacity" aria-label="Facebook">
              <FacebookIcon ref={(el) => { if (el) { el.style.setProperty('color', 'white', 'important'); } }} style={{color: 'white !important'}} className="w-6 h-6" />
            </SafeLink>
            <SafeLink href="https://instagram.com" className="hover:opacity-80 transition-opacity" aria-label="Instagram">
              <InstagramIcon ref={(el) => { if (el) { el.style.setProperty('color', 'white', 'important'); } }} style={{color: 'white !important'}} className="w-6 h-6" />
            </SafeLink>
            <SafeLink href="https://twitter.com" className="hover:opacity-80 transition-opacity" aria-label="Twitter">
              <TwitterIcon ref={(el) => { if (el) { el.style.setProperty('color', 'white', 'important'); } }} style={{color: 'white !important'}} className="w-6 h-6" />
            </SafeLink>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8">
            <div className="text-center">
                <h4 ref={(el) => { if (el) { el.style.setProperty('color', 'white', 'important'); } }} style={{color: 'white !important'}} className="text-base font-semibold">Quick Links</h4>
                <ul className="mt-4 space-y-2">
                    <li><SafeLink href="/about" className="hover:opacity-80"><span ref={(el) => { if (el) { el.style.setProperty('color', 'white', 'important'); } }} style={{color: 'white !important'}}>About Us</span></SafeLink></li>
                    <li><SafeLink href="/contact" className="hover:opacity-80"><span ref={(el) => { if (el) { el.style.setProperty('color', 'white', 'important'); } }} style={{color: 'white !important'}}>Contact</span></SafeLink></li>
                    <li><SafeLink href="/faq" className="hover:opacity-80"><span ref={(el) => { if (el) { el.style.setProperty('color', 'white', 'important'); } }} style={{color: 'white !important'}}>FAQ</span></SafeLink></li>
                </ul>
            </div>
            <div className="text-center">
                <h4 ref={(el) => { if (el) { el.style.setProperty('color', 'white', 'important'); } }} style={{color: 'white !important'}} className="text-base font-semibold">Get Involved</h4>
                <ul className="mt-4 space-y-2">
                    <li><SafeLink href="/get-involved#volunteer" className="hover:opacity-80"><span ref={(el) => { if (el) { el.style.setProperty('color', 'white', 'important'); } }} style={{color: 'white !important'}}>Volunteer</span></SafeLink></li>
                    <li><SafeLink href="/donate" className="hover:opacity-80"><span ref={(el) => { if (el) { el.style.setProperty('color', 'white', 'important'); } }} style={{color: 'white !important'}}>Donate</span></SafeLink></li>
                    <li><SafeLink href="/dog-wishlist" className="hover:opacity-80"><span ref={(el) => { if (el) { el.style.setProperty('color', 'white', 'important'); } }} style={{color: 'white !important'}}>Dog Wishlist</span></SafeLink></li>
                    <li><SafeLink href="/horse-wishlist" className="hover:opacity-80"><span ref={(el) => { if (el) { el.style.setProperty('color', 'white', 'important'); } }} style={{color: 'white !important'}}>Horse Wishlist</span></SafeLink></li>
                </ul>
            </div>
            <div className="text-center">
                <h4 ref={(el) => { if (el) { el.style.setProperty('color', 'white', 'important'); } }} style={{color: 'white !important'}} className="text-base font-semibold">Our Animals</h4>
                <ul className="mt-4 space-y-2">
                    <li><SafeLink href="/dogs" className="hover:opacity-80"><span ref={(el) => { if (el) { el.style.setProperty('color', 'white', 'important'); } }} style={{color: 'white !important'}}>Our Dogs</span></SafeLink></li>
                    <li><SafeLink href="/horses" className="hover:opacity-80"><span ref={(el) => { if (el) { el.style.setProperty('color', 'white', 'important'); } }} style={{color: 'white !important'}}>Our Horses</span></SafeLink></li>
                    <li><SafeLink href="/community" className="hover:opacity-80"><span ref={(el) => { if (el) { el.style.setProperty('color', 'white', 'important'); } }} style={{color: 'white !important'}}>Our Community</span></SafeLink></li>
                </ul>
            </div>
            <div className="text-center">
                <h4 ref={(el) => { if (el) { el.style.setProperty('color', 'white', 'important'); } }} style={{color: 'white !important'}} className="text-base font-semibold">Legal</h4>
                <ul className="mt-4 space-y-2">
                    <li><SafeLink href="/privacy-policy" className="hover:opacity-80"><span ref={(el) => { if (el) { el.style.setProperty('color', 'white', 'important'); } }} style={{color: 'white !important'}}>Privacy Policy</span></SafeLink></li>
                    <li><SafeLink href="/terms-of-service" className="hover:opacity-80"><span ref={(el) => { if (el) { el.style.setProperty('color', 'white', 'important'); } }} style={{color: 'white !important'}}>Terms of Service</span></SafeLink></li>
                </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p className="text-center text-sm" ref={(el) => { if (el) { el.style.setProperty('color', 'white', 'important'); } }} style={{color: 'white !important'}}>
              A sanctuary for rescued dogs and horses, providing them with a forever home and a second chance at life.
            </p>
            <p className="text-center text-xs mt-2" ref={(el) => { if (el) { el.style.setProperty('color', 'white', 'important'); } }} style={{color: 'white !important'}}>
              © 2024 The Gem Project Sanctuary. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;