import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import App from '../../App';

// Mock components to avoid loading dependencies
vi.mock('../../components/Header', () => ({
  default: () => <div>Header</div>
}));

vi.mock('../../components/Footer', () => ({
  default: () => <div>Footer</div>
}));

vi.mock('../../components/SplashScreen', () => ({
  default: ({ isVisible }: { isVisible: boolean }) => 
    isVisible ? <div>Splash Screen</div> : null
}));

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
    expect(screen.getByText('Header')).toBeInTheDocument();
    expect(screen.getByText('Footer')).toBeInTheDocument();
  });
});