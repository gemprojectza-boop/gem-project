
import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';

const IS_SANDBOXED = window.self !== window.top;

const getLocation = () => {
  if (IS_SANDBOXED) {
    const hash = window.location.hash; // e.g., "#/dogs#adoption"
    
    // The full virtual path stored in the hash is everything after the initial '#'.
    // If hash is "#/dogs#adoption", fullVirtualPath is "/dogs#adoption".
    // If hash is empty or just "#", it defaults to "/".
    const fullVirtualPath = (hash.startsWith('#/') ? hash.substring(1) : hash.substring(1)) || '/';

    // The routing path for the main page switch is the part before any section anchor.
    // If fullVirtualPath is "/dogs#adoption", routingPath is "/dogs".
    // If fullVirtualPath is "/about", routingPath is "/about".
    const routingPath = fullVirtualPath.split('#')[0] || '/';

    return {
        path: routingPath,
        fullPath: fullVirtualPath,
    };
  }
  // Outside the sandbox, use standard browser location properties.
  // Handle the /gem-project/ base path from Vite
  let pathname = window.location.pathname;
  if (pathname.startsWith('/gem-project/')) {
    pathname = pathname.substring('/gem-project'.length) || '/';
  }
  
  return {
      path: pathname,
      fullPath: pathname + window.location.search + window.location.hash,
  };
};

interface NavigationContextType {
  path: string;       // Just the pathname part for routing logic
  fullPath: string;   // The full path, including query and hash, for keys and effects
  navigate: (to: string) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const NavigationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [{ path, fullPath }, setLocation] = useState(getLocation());

  // This function will be called whenever the URL changes.
  const handleLocationChange = useCallback(() => {
    setLocation(getLocation());
  }, []);

  // Listen for browser navigation events (back/forward buttons)
  useEffect(() => {
    window.addEventListener('popstate', handleLocationChange);
    // In sandbox mode, we also need to listen for hash changes.
    if (IS_SANDBOXED) {
      window.addEventListener('hashchange', handleLocationChange);
    }
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      if (IS_SANDBOXED) {
        window.removeEventListener('hashchange', handleLocationChange);
      }
    };
  }, [handleLocationChange]);

  const navigate = useCallback((to: string) => {
    // Open external links in a new tab.
    if (to.startsWith('http') || to.startsWith('//')) {
        window.open(to, '_blank', 'noopener noreferrer');
        return;
    }
    
    if (IS_SANDBOXED) {
      // For sandboxed environments, we manipulate the hash to navigate.
      // Ensure the path starts with a slash.
      const targetHash = to.startsWith('/') ? to : `/${to}`;
      // Don't navigate if we're already there.
      if (`#${targetHash}` === window.location.hash) {
        // Even if the hash is the same, we might want to re-trigger scroll.
        // So we call handleLocationChange manually.
        handleLocationChange();
        return;
      }
      window.location.hash = targetHash;
    } else {
      // For normal environments, we use the History API.
      // Handle the /gem-project/ base path from Vite
      const basePath = '/gem-project';
      const targetFullPath = basePath + (to.startsWith('/') ? to : '/' + to);
      const currentFullPath = window.location.pathname + window.location.search + window.location.hash;
       if (targetFullPath === currentFullPath) {
        handleLocationChange();
        return;
      }
      history.pushState({}, '', targetFullPath);
      // Manually dispatch a popstate event because pushState doesn't trigger it automatically.
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  }, [handleLocationChange]);
  
  // Scroll to anchor links or top of page when path changes
  useEffect(() => {
    const parts = fullPath.split('#');
    const anchorId = parts.length > 1 ? parts[parts.length - 1] : null;

    if (anchorId) {
      // Use a short timeout to allow the page and elements to render
      const scrollTimer = setTimeout(() => {
        const element = document.getElementById(anchorId);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }, 100);
      return () => clearTimeout(scrollTimer);
    } else {
      // For new page navigations without an anchor, scroll to the top.
      window.scrollTo(0, 0);
    }
  }, [fullPath]); // Re-run whenever the full path or anchor changes


  const value = { path, fullPath, navigate };

  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useSafeNavigation = () => {
  const context = useContext(NavigationContext);
  if (context === undefined) {
    throw new Error('useSafeNavigation must be used within a NavigationProvider');
  }
  return context;
};
