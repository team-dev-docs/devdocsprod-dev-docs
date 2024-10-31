import React, { createContext, useState, useEffect, useContext } from 'react';

const MobileContext = createContext(true);

export const MobileContextProvider = ({ children }) => {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 896);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      if (!window) return;
      return window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <MobileContext.Provider value={isMobile}>
      {children}
    </MobileContext.Provider>
  );
};
export const useIsMobile = () => useContext(MobileContext);