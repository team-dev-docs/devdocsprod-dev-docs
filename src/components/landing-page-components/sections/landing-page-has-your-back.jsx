import React from 'react';
import { useIsMobile } from '../context-providers/mobile-context-provider';

const LandingPageHasYourBack = () => {
  const isMobile = useIsMobile();

  return (
    <div
          className={isMobile ?
            "text-[1.125rem] font-medium text-center tracking-[-0.06375rem] px-[3rem]"
            :
            "text-[2.5rem] font-medium text-center tracking-[-0.075rem]"
          }
          style={{ color: '#ECECEC' }}
        >
          Whether you need content for internal teams or your end users, Dev-Docs has your back!
        </div>
  );
};

export default LandingPageHasYourBack;