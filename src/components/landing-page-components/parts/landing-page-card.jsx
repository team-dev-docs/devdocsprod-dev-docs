import React from 'react';
import { useIsMobile } from '../context-providers/mobile-context-provider';

const LandingPageCard = ({
  className = '',
  children,
}) => {
  const { isMobile } = useIsMobile();

  // test tes

  return (
    <div
      className={isMobile ?
        `mx-[1.125rem] my-[2rem] flex flex-col items-center p-[1.88rem] gap-[1rem] rounded-[1.25rem] ${className}`
        :
        `mx-[5rem] my-[7.81rem] flex flex-col items-center p-[3.75rem] gap-[1rem] rounded-[1.25rem] ${className}`
      }
      style={{
        backdropFilter: "blur(12.5px)",
        background: "linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.00) 100%)",
        border: "2px solid rgba(255, 255, 255, 0.20)",
        boxShadow: "0px -2px 10px 0px rgba(233, 223, 255, 0.30), 0px -2px 40px 0px rgba(187, 155, 255, 0.15)",

      }}
    >
      {children}
    </div>
  );
};

export default LandingPageCard;
