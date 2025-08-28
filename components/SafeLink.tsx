

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
    event.preventDefault();

    if (onClick) {
      // If an onClick is provided, it's now fully responsible for navigation.
      onClick(event);
    } else {
      // Otherwise, perform the default navigation.
      navigate(href);
    }
  };

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
};

export { SafeLink };