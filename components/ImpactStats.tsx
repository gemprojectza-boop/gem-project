
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { PawIcon } from './icons.tsx';

// A custom hook for the count-up animation
const useCountUp = (end: number, duration: number, isVisible: boolean) => {
    const [count, setCount] = useState(0);
    const frameRef = useRef<number | null>(null);
    const startTimeRef = useRef<number | null>(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        if (!isVisible || hasAnimated.current) return;

        hasAnimated.current = true;

        const animate = (timestamp: number) => {
            if (!startTimeRef.current) {
                startTimeRef.current = timestamp;
            }
            const progress = timestamp - startTimeRef.current;
            const percentage = Math.min(progress / duration, 1);
            // Ease-out function
            const easedPercentage = 1 - Math.pow(1 - percentage, 3);
            const currentCount = Math.floor(end * easedPercentage);
            
            setCount(currentCount);

            if (progress < duration) {
                frameRef.current = requestAnimationFrame(animate);
            } else {
                setCount(end); // Ensure it ends on the exact value
            }
        };

        frameRef.current = requestAnimationFrame(animate);

        return () => {
            if (frameRef.current) {
                cancelAnimationFrame(frameRef.current);
            }
            startTimeRef.current = null;
        };
    }, [isVisible, end, duration]);

    return count;
};

const StatCard: React.FC<{ value: number, label: string, isVisible: boolean }> = ({ value, label, isVisible }) => {
    const count = useCountUp(value, 2000, isVisible);
    return (
        <div className="text-center p-6">
            <p className="text-4xl md:text-5xl font-bold text-brand-primary tracking-tight">{count.toLocaleString()}+</p>
            <p className="mt-2 text-sm md:text-base text-brand-text-secondary uppercase tracking-wider font-semibold">{label}</p>
        </div>
    );
};

const ImpactStats: React.FC = () => {
    const statsRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.5,
            }
        );

        const currentRef = statsRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);
    
    const stats = [
        { value: 150, label: 'Animals Rescued' },
        { value: 75, label: 'Successful Adoptions' },
        { value: 73, label: 'Sanctuary Residents' },
        { value: 1000, label: 'Community Members Helped' },
    ];

    return (
        <section ref={statsRef} id="impact-stats" className="py-20 md:py-24 bg-brand-bg-subtle animate-on-scroll">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                     <PawIcon className="w-12 h-12 text-brand-primary mx-auto mb-4 icon-interactive" />
                     <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-brand-text-primary">
                        Our Impact, By the Numbers
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-brand-text-secondary">
                        Every number tells a story of a life changed. Here's a look at the difference we make, together.
                    </p>
                </div>
                <div className="content-bubble">
                    <div className="grid grid-cols-2 md:grid-cols-4 md:divide-x divide-y md:divide-y-0 divide-brand-primary/10">
                        {stats.map(stat => (
                            <StatCard key={stat.label} value={stat.value} label={stat.label} isVisible={isVisible} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ImpactStats;
