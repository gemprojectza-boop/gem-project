import { FocalPoint, FocalPointData } from '../types';

const FOCAL_POINT_STORAGE_KEY = 'gem-project-focal-points';

/**
 * Loads focal point data from localStorage
 */
export const loadFocalPoints = (): FocalPointData => {
  try {
    const stored = localStorage.getItem(FOCAL_POINT_STORAGE_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch (error) {
    console.warn('Failed to load focal points from localStorage:', error);
    return {};
  }
};

/**
 * Saves focal point data to localStorage
 */
export const saveFocalPoints = (focalPoints: FocalPointData): void => {
  try {
    localStorage.setItem(FOCAL_POINT_STORAGE_KEY, JSON.stringify(focalPoints));
  } catch (error) {
    console.warn('Failed to save focal points to localStorage:', error);
  }
};

/**
 * Gets the focal point for a specific media key
 */
export const getFocalPoint = (mediaKey: string): FocalPoint => {
  const focalPoints = loadFocalPoints();
  return focalPoints[mediaKey] || { x: 0.5, y: 0.5 }; // Default to center
};

/**
 * Sets the focal point for a specific media key
 */
export const setFocalPoint = (mediaKey: string, focalPoint: FocalPoint): void => {
  const focalPoints = loadFocalPoints();
  focalPoints[mediaKey] = focalPoint;
  saveFocalPoints(focalPoints);
};

/**
 * Converts focal point to CSS object-position value
 */
export const focalPointToObjectPosition = (focalPoint: FocalPoint): string => {
  return `${focalPoint.x * 100}% ${focalPoint.y * 100}%`;
};

/**
 * Creates CSS style object with focal point positioning
 */
export const createFocalPointStyles = (focalPoint: FocalPoint): React.CSSProperties => {
  return {
    objectPosition: focalPointToObjectPosition(focalPoint)
  };
};