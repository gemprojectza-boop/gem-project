import React, { useState, useEffect, useRef } from 'react';
import { SafeLink } from './SafeLink.tsx';
import CtaButton from './CtaButton.tsx';
import { MenuIcon, XIcon, ChevronDownIcon } from './icons.tsx';
import { useSafeNavigation } from '../contexts/NavigationContext.tsx';

const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const { navigate } = useSafeNavigation();
    const timeoutRef = useRef<number | null>(null);
    const headerRef = useRef<HTMLElement>(null);
    const mobileMenuButtonRef = useRef<HTMLButtonElement>(null);

    const navLinks = [
        { name: 'Home', href: '/' },
        { 
            name: 'About', 
            href: '/about',
            dropdown: [
                { name: 'Our Story', href: '/about' },
                { name: 'Meet the Team', href: '/team' },
            ]
        },
        { 
            name: 'Dogs', 
            href: '/dogs',
            dropdown: [
                { name: 'Adopt a Dog', href: '/adopt-a-dog' },
                { name: 'Forever Sanctuary Dogs', href: '/forever-dogs' },
                { name: 'Hands-On Care', href: '/hands-on-dogs' },
                { name: 'Sponsor a Dog', href: '/dogs/sponsorship' },
                { name: 'Success Stories', href: '/dog-stories' },
                { name: 'Health & Wellbeing', href: '/animal-health' },
                { name: 'Training', href: '/dog-training' },
                { name: 'Dog Outings', href: '/dog-outings' },
                { name: 'Our Wishlist', href: '/dog-wishlist' },
            ]
        },
        {
            name: 'Horses',
            href: '/horses',
            dropdown: [
                { name: 'Adoptable Horses', href: '/horses#adoption' },
                { name: 'Forever Sanctuary Horses', href: '/horses#forever' },
                { name: 'Success Stories', href: '/horses/success-stories' },
                { name: 'Rehabilitation Process', href: '/horses/rehabilitation' },
                { name: 'Our Facilities', href: '/horses/facilities' },
                { name: 'Training', href: '/horses/training' },
                { name: 'Our Needs', href: '/horses/needs' },
            ]
        },
        { name: 'Community', href: '/community' },
        { name: 'Get Involved', href: '/get-involved' },
        { name: 'Gallery', href: '/gallery' },
        { name: 'Contact', href: '/contact' },
    ];

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (mobileMenuButtonRef.current && mobileMenuButtonRef.current.contains(event.target as Node)) {
                return;
            }
            if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
                setIsMobileMenuOpen(false);
            }
        };
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setIsMobileMenuOpen(false);
            }
        };

        if (isMobileMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        window.addEventListener('resize', handleResize);
        
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            window.removeEventListener('resize', handleResize);
        };
    }, [isMobileMenuOpen]);

    useEffect(() => {
        if (!isMobileMenuOpen) {
            setOpenDropdown(null);
        }
    }, [isMobileMenuOpen]);
    
    const closeMenuAndNavigate = (href: string) => {
        setIsMobileMenuOpen(false);
        setOpenDropdown(null);
        navigate(href);
    };

    const handleMouseEnter = (dropdownName: string) => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setOpenDropdown(dropdownName);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = window.setTimeout(() => {
            setOpenDropdown(null);
        }, 200);
    };

    const NavItem: React.FC<{ link: typeof navLinks[0], isMobile?: boolean }> = ({ link, isMobile }) => {
        const hasDropdown = !!link.dropdown?.length;

        if (isMobile) {
            if (hasDropdown) {
                const isOpen = openDropdown === link.name;
                return (
                    <div className="text-base font-semibold rounded-md hover:bg-brand-primary/5 transition-colors">
                        <div className="flex items-center justify-between">
                            <SafeLink 
                                href={link.href}
                                className="flex-grow py-3 px-3"
                                onClick={(e) => { e.preventDefault(); e.stopPropagation(); closeMenuAndNavigate(link.href); }}
                            >
                                {link.name}
                            </SafeLink>
                            <button
                                onClick={(e) => { e.stopPropagation(); setOpenDropdown(isOpen ? null : link.name); }}
                                className="p-3"
                                aria-expanded={isOpen}
                                aria-controls={`dropdown-${link.name}`}
                                aria-label={`${isOpen ? 'Close' : 'Open'} ${link.name} submenu`}
                            >
                                <ChevronDownIcon className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                            </button>
                        </div>
                        <div id={`dropdown-${link.name}`} className={`pl-4 static overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
                            {link.dropdown?.map(item => (
                                <SafeLink 
                                    key={item.name} 
                                    href={item.href} 
                                    className="block w-full text-left px-4 py-3 text-base text-brand-text-secondary hover:bg-brand-primary/20 hover:text-brand-text-primary transition-colors rounded-md"
                                    onClick={(e) => { e.preventDefault(); e.stopPropagation(); closeMenuAndNavigate(item.href); }}
                                >
                                    {item.name}
                                </SafeLink>
                            ))}
                        </div>
                    </div>
                );
            }
            return (
                <SafeLink href={link.href} className="block py-3 px-3 text-base font-semibold rounded-md hover:bg-brand-primary/10 transition-colors" onClick={(e) => { e.preventDefault(); e.stopPropagation(); closeMenuAndNavigate(link.href); }}>
                    {link.name}
                </SafeLink>
            );
        }

        if (hasDropdown) {
            return (
                <div className="relative" onMouseEnter={() => handleMouseEnter(link.name)} onMouseLeave={handleMouseLeave}>
                    <SafeLink href={link.href} className="flex items-center space-x-1 py-3 px-4 rounded-lg hover:bg-brand-primary/10 transition-all duration-300 font-medium">
                        <span>{link.name}</span>
                        <ChevronDownIcon className={`w-4 h-4 transition-transform duration-300 ${openDropdown === link.name ? 'rotate-180' : ''}`} />
                    </SafeLink>
                    <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 bg-white rounded-xl border border-gray-200/50 py-3 z-50 transition-all duration-300 ease-out ${openDropdown === link.name ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'}`}>
                        <div className="px-2">
                            {link.dropdown?.map(item => (
                                <SafeLink key={item.name} href={item.href} className="block w-full text-left px-4 py-3 text-sm text-brand-text-primary hover:bg-brand-primary/10 transition-all duration-200 rounded-lg font-medium">
                                    {item.name}
                                </SafeLink>
                            ))}
                        </div>
                    </div>
                </div>
            );
        }
        return (
            <SafeLink href={link.href} className="py-3 px-4 rounded-lg hover:bg-brand-primary/10 transition-all duration-300 font-medium">
                {link.name}
            </SafeLink>
        );
    };
    
    const headerClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMobileMenuOpen ? 'bg-white/95 backdrop-blur-sm border-b border-gray-200' : 'bg-transparent'}`;

    return (
      <header ref={headerRef} className={`${headerClasses} header-animate`}>
        <div className="nav-container py-4 lg:py-5 flex justify-between items-center">
          <SafeLink href="/" aria-label="The Gem Project Sanctuary homepage" className="flex items-center transition-all duration-300 hover:scale-105 z-10" onClick={() => closeMenuAndNavigate('/')}>
            <img 
                src="https://i.ibb.co/WvHMJfYM/logo-screen-1-3.png" 
                alt="The Gem Project Sanctuary Logo"
                className="h-14 lg:h-16 w-auto object-contain" 
            />
          </SafeLink>
          
          <nav className="hidden lg:flex items-center space-x-2 font-medium text-brand-text-primary mx-auto">
              {navLinks.map(link => <NavItem key={link.name} link={link} />)}
          </nav>
          
          <div className="hidden lg:flex items-center space-x-4">
            <CtaButton href="/donate" className="bg-gradient-to-r from-brand-primary to-brand-primary-hover hover:from-brand-primary-hover hover:to-brand-primary text-white !py-3 !px-8 text-sm font-bold btn-pulse transition-all duration-300 rounded-full">
              Donate Now
            </CtaButton>
          </div>

          <div className="lg:hidden flex items-center">
            <button ref={mobileMenuButtonRef} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 rounded-md hover:bg-brand-primary/10" aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"} aria-expanded={isMobileMenuOpen} aria-controls="mobile-menu">
                {isMobileMenuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>

        <div 
            id="mobile-menu"
            className={`lg:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-screen opacity-100 visible' : 'max-h-0 opacity-0 invisible'} overflow-hidden`}
        >
            <div className="bg-white border-t border-gray-200 absolute top-full left-0 w-full h-screen-minus-header overflow-y-auto">
                <nav className="flex flex-col space-y-1 p-4">
                    {navLinks.map(link => <NavItem key={link.name} link={link} isMobile />)}
                    <div className="pt-4">
                        <CtaButton 
                            href="/donate" 
                            className="w-full bg-brand-primary hover:bg-brand-primary-hover text-white" 
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Donate
                        </CtaButton>
                    </div>
                </nav>
            </div>
        </div>
        <style>{`.h-screen-minus-header { height: calc(100vh - 88px); }`}</style>
      </header>
    );
};

export default Header;