import React, { createContext, useState, useEffect, useContext } from 'react';

const MobileContext = createContext(true);

export const MobileContextProvider = ({ children }) => {
  const [isMobile, setIsMobile] = useState(true);
  const [isTablet, setIsTablet] = useState(true);

  useEffect(() => {
    if (!window) return;
    const handleResize = () => {
      setIsMobile(window.innerWidth < 896);
      setIsTablet(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      if (!window) return;
      return window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <MobileContext.Provider value={{isMobile, isTablet}}>
      {children}
    </MobileContext.Provider>
  );
};
export const useIsMobile = () => useContext(MobileContext);