import React from 'react';
import LandingPageCard from '../parts/landing-page-card';
import LandingPageLink from '../parts/landing-page-link';
import { useIsMobile } from '../context-providers/mobile-context-provider';

const LandingPageDemoCard = () => {
  const isMobile = useIsMobile();

  return (
    <LandingPageCard>
      <div
        className={isMobile ?
          "font-extrabold text-[2rem] text-center font-pixel"
          :
          "font-extrabold text-[3rem] text-center font-pixel"
        }
        style={{
          fontFeatureSettings: "'liga' off, 'clig' off",
        }}
      >
        See Dev-Docs in action
      </div>

      <div
        className="w-full pb-[62.5%] relative"
      >
        <object
          data="https://www.loom.com/embed/243da2f19de445e3a8d66ca8c5dc61cc"
          type="text/html"
          className="absolute top-0 left-0 w-full h-full rounded-[1.5rem]"
        >
          <LandingPageLink
            href="https://www.loom.com/share/243da2f19de445e3a8d66ca8c5dc61cc"
          >
            Watch Here
          </LandingPageLink>
        </object>
      </div>
    </LandingPageCard>
  );
};

export default LandingPageDemoCard;