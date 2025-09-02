

import React from 'react';
import { useSafeNavigation } from '../contexts/NavigationContext.tsx';

interface CtaButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: (event?: React.MouseEvent<HTMLButtonElement>) => void;
}

const baseStyle = "btn font-semibold text-center";

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
            ref={(el) => { if (el) { el.style.setProperty('color', 'white', 'important'); } }}
        >
            <span ref={(el) => { if (el) { el.style.setProperty('color', 'white', 'important'); } }} style={{color: 'white !important'}}>{children}</span>
        </button>
    );
};

export default CtaButton;