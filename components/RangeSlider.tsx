

import React, { useCallback, useEffect, useState, useRef } from 'react';

interface RangeSliderProps {
  min: number;
  max: number;
  step: number;
  value: [number, number];
  onChange: (value: [number, number]) => void;
}

const RangeSlider: React.FC<RangeSliderProps> = ({ min, max, step, value, onChange }) => {
  const [minVal, setMinVal] = useState(value[0]);
  const [maxVal, setMaxVal] = useState(value[1]);
  const minValRef = useRef<HTMLInputElement>(null);
  const maxValRef = useRef<HTMLInputElement>(null);
  const range = useRef<HTMLDivElement>(null);

  // Convert to percentage
  const getPercent = useCallback(
    (val: number) => {
        if (max === min) {
            return 0;
        }
        return Math.round(((val - min) / (max - min)) * 100)
    },
    [min, max]
  );

  // Set width of the range to decrease from the left side
  useEffect(() => {
    if (maxValRef.current) {
      const minPercent = getPercent(minVal);
      const maxPercent = getPercent(+maxValRef.current.value); // Precede with '+' to convert the value from type string to type number

      if (range.current) {
        range.current.style.left = `${minPercent}%`;
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [minVal, getPercent]);

  // Set width of the range to decrease from the right side
  useEffect(() => {
    if (minValRef.current) {
      const minPercent = getPercent(+minValRef.current.value);
      const maxPercent = getPercent(maxVal);

      if (range.current) {
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [maxVal, getPercent]);
  
  useEffect(() => {
    setMinVal(value[0]);
    setMaxVal(value[1]);
  }, [value]);

  const handleMinChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(+event.target.value, maxVal - step);
    setMinVal(value);
    onChange([value, maxVal]);
  };

  const handleMaxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(+event.target.value, minVal + step);
    setMaxVal(value);
    onChange([minVal, value]);
  };

  return (
    <div className="relative h-10 flex items-center justify-center">
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={minVal}
        ref={minValRef}
        onChange={handleMinChange}
        className="thumb thumb--zindex-3"
      />
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={maxVal}
        ref={maxValRef}
        onChange={handleMaxChange}
        className="thumb thumb--zindex-4"
      />

      <div className="relative w-full">
        <div className="absolute rounded h-1 bg-gray-300 w-full z-10" />
        <div ref={range} className="absolute rounded h-1 bg-brand-primary z-20" />
      </div>

      <style>{`
        .thumb {
          pointer-events: none;
          position: absolute;
          height: 0;
          width: 100%;
          outline: none;
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
        }

        .thumb--zindex-3 {
          z-index: 3;
        }

        .thumb--zindex-4 {
          z-index: 4;
        }

        /* For Chrome, Safari, etc. */
        .thumb::-webkit-slider-thumb {
          -webkit-appearance: none;
          pointer-events: all;
          width: 16px;
          height: 16px;
          background-color: var(--brand-primary);
          border-radius: 50%;
          border: 2px solid white;
          box-shadow: 0 0 0 1px rgba(0,0,0,0.1);
          cursor: pointer;
        }

        /* For Firefox */
        .thumb::-moz-range-thumb {
          pointer-events: all;
          width: 16px;
          height: 16px;
          background-color: var(--brand-primary);
          border-radius: 50%;
          border: 2px solid white;
          box-shadow: 0 0 0 1px rgba(0,0,0,0.1);
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default RangeSlider;