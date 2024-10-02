import React from 'react';
import { useIsMobile } from '../context-providers/mobile-context-provider';

const LandingPageHasYourBack = () => {
  const { isMobile } = useIsMobile();

  return (
    <div
          className={isMobile ?
            "text-[1.125rem] font-medium text-center tracking-[-0.06375rem] px-[3rem]"
            :
            "text-[2.5rem] font-medium text-center tracking-[-0.075rem] px-[18.75rem]"
          }
          style={{ color: '#ECECEC' }}
        >
          With Dev-Docs, you consistently get reliable documentation that helps your internal team and end users get up to speed swiftly.
        </div>
  );
};

export default LandingPageHasYourBack;