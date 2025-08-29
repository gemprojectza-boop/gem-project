

import React from 'react';
import { useSafeNavigation } from '../contexts/NavigationContext.tsx';

interface SafeLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

const SafeLink: React.FC<SafeLinkProps> = ({ href, children, className, onClick }) => {
  const { navigate } = useSafeNavigation();

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      onClick(event);
      return; // Assume onClick handles everything, including preventDefault and navigation
    }

    const isExternal = href.startsWith('http') || href.startsWith('//');
    if (!isExternal && !event.ctrlKey && !event.metaKey) {
      event.preventDefault();
      navigate(href);
    }
  };

  return (
    <a 
      href={href} 
      onClick={handleClick} 
      className={className}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
    >
      {children}
    </a>
  );
};

export { SafeLink };