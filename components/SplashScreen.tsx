import React from 'react';

interface SplashScreenProps {
  isVisible: boolean;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ isVisible }) => {
  return (
    <div
      className={`fixed inset-0 z-[100] bg-brand-text-primary flex items-center justify-center transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      aria-hidden={!isVisible}
    >
      <img
        src="https://i.ibb.co/7xDmbgRW/gem-new-logo-removebg-preview.png"
        alt="The Gem Project Sanctuary Logo"
        className="w-48 md:w-64 h-auto animate-pulse-gentle"
      />
    </div>
  );
};

export default SplashScreen;