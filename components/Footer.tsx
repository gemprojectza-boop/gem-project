
import React from 'react';
import { PawIcon, FacebookIcon, InstagramIcon, TwitterIcon } from './icons.tsx';
import { SafeLink } from './SafeLink.tsx';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-text-primary text-white">
      <div className="max-content-width py-8">
        <div className="flex flex-col items-center space-y-4 text-center">
          <SafeLink href="/" className="text-white hover:opacity-80 transition-opacity">
            <span className="font-bold">The Gem Project Sanctuary</span>
          </SafeLink>

          <div className="flex items-center space-x-4">
            <SafeLink href="https://facebook.com" className="text-gray-200 hover:text-white transition-colors" aria-label="Facebook">
              <FacebookIcon className="w-6 h-6" />
            </SafeLink>
            <SafeLink href="https://instagram.com" className="text-gray-200 hover:text-white transition-colors" aria-label="Instagram">
              <InstagramIcon className="w-6 h-6" />
            </SafeLink>
            <SafeLink href="https://twitter.com" className="text-gray-200 hover:text-white transition-colors" aria-label="Twitter">
              <TwitterIcon className="w-6 h-6" />
            </SafeLink>
          </div>

          <p className="text-sm text-gray-200">&copy; {new Date().getFullYear()} The Gem Project. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;