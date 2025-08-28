import React, { useState, useEffect, useRef, useCallback } from 'react';
import { PawTrailIcon } from './icons.tsx';

interface Paw {
  id: number;
  x: number;
  y: number;
  rotation: number;
  side: 'left' | 'right';
}

interface PawPrintTrailProps {
  isEnabled: boolean;
}

const PawPrintTrail: React.FC<PawPrintTrailProps> = ({ isEnabled }) => {
  const [paws, setPaws] = useState<Paw[]>([]);
  const lastScrollY = useRef(0);
  const lastPawY = useRef(0);
  const animationFrameId = useRef<number | null>(null);

  const addPaw = useCallback(() => {
    // Position next to the scrollbar (right side)
    const paddingFromEdge = 60; // How far from the right edge
    const horizontalJitter = 20; // Random horizontal variation
    const verticalPadding = 80; // Padding from top/bottom of viewport

    const newPaw: Paw = {
      id: Date.now() + Math.random(),
      x: window.innerWidth - paddingFromEdge + (Math.random() * horizontalJitter - horizontalJitter / 2),
      y: Math.random() * (window.innerHeight - verticalPadding * 2) + verticalPadding,
      rotation: Math.random() * 40 - 20, // Random rotation between -20 and 20 degrees
      side: 'right', // Not used for positioning anymore, but kept for interface
    };

    setPaws(prevPaws => [...prevPaws, newPaw]);

    // Auto-remove the paw after animation
    setTimeout(() => {
      setPaws(prevPaws => prevPaws.filter(p => p.id !== newPaw.id));
    }, 1500); // Paw visible for 1.5s
  }, []);

  useEffect(() => {
    if (!isEnabled) {
      setPaws([]);
    }
  }, [isEnabled]);

  const handleScroll = useCallback(() => {
    if (!isEnabled) {
      animationFrameId.current = null;
      return;
    }

    const currentScrollY = window.scrollY;
    
    // Check for scroll down and sufficient distance
    if (currentScrollY > lastScrollY.current && currentScrollY > lastPawY.current + 80) {
        addPaw();
        lastPawY.current = currentScrollY;
    }

    lastScrollY.current = currentScrollY;
    animationFrameId.current = null;
  }, [isEnabled, addPaw]);

  const throttledScrollHandler = useCallback(() => {
    if (animationFrameId.current === null) {
      animationFrameId.current = requestAnimationFrame(handleScroll);
    }
  }, [handleScroll]);

  useEffect(() => {
    lastScrollY.current = window.scrollY; // Set initial scroll position
    window.addEventListener('scroll', throttledScrollHandler, { passive: true });
    return () => {
      window.removeEventListener('scroll', throttledScrollHandler);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [throttledScrollHandler]);

  if (!isEnabled && paws.length === 0) {
    return null;
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]" aria-hidden="true">
      {paws.map(paw => (
        <PawTrailIcon
          key={paw.id}
          className="paw-print text-black"
          style={{
            position: 'absolute',
            top: `${paw.y}px`,
            left: `${paw.x}px`,
            width: '30px',
            height: '30px',
            '--rotation': `${paw.rotation}deg`,
          } as React.CSSProperties}
        />
      ))}
      <style>{`
        @keyframes paw-fade-in-out {
          0% { opacity: 0; transform: translate(-50%, -50%) scale(1.2) rotate(var(--rotation)); }
          15% { opacity: 0.7; transform: translate(-50%, -50%) scale(1) rotate(var(--rotation)); }
          85% { opacity: 0.7; transform: translate(-50%, -50%) scale(1) rotate(var(--rotation)); }
          100% { opacity: 0; transform: translate(-50%, -50%) scale(0.8) rotate(var(--rotation)); }
        }
        .paw-print {
          --rotation: 0deg; /* Will be overridden by inline style */
          animation: paw-fade-in-out 1.5s ease-out forwards;
          transform-origin: center;
        }
        @media (min-width: 768px) {
          .paw-print {
            width: 40px;
            height: 40px;
          }
        }
      `}</style>
    </div>
  );
};

export default PawPrintTrail;