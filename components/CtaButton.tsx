

import React from 'react';
import { useSafeNavigation } from '../contexts/NavigationContext.tsx';

interface CtaButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: (event?: React.MouseEvent<HTMLButtonElement>) => void;
}

const baseStyle = "font-bold py-3 px-6 rounded-full transition-all duration-300 ease-in-out text-center transform hover:-translate-y-1 hover:scale-105 hover:shadow-lg";

const CtaButton: React.FC<CtaButtonProps> = ({ href, children, className, style, onClick }) => {
    const { navigate } = useSafeNavigation();

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (onClick) {
            onClick(event);
        }
        navigate(href);
    };

    return (
        <button
            type="button"
            onClick={handleClick}
            className={`${baseStyle} ${className}`}
            style={style}
        >
            {children}
        </button>
    );
};

export default CtaButton;