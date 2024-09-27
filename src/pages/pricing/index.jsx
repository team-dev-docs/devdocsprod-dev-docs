import React from 'react';

import LandingPageFooter from '../../components/landing-page-components/sections/landing-page-footer';
import { MobileContextProvider, useIsMobile } from '../../components/landing-page-components/context-providers/mobile-context-provider';
import LandingPageHeader from '../../components/landing-page-components/sections/landing-page-header';
import LandingPageFaqCard from '../../components/landing-page-components/sections/landing-page-faq';

const PricingPage = () => {
  const isMobile = useIsMobile();

  return (
    <MobileContextProvider>
      <div
        className={isMobile ?
          "w-full font-sans bg-repeat-y bg-cover bg-landing-page text-[#ECECEC] gap-[4rem] flex flex-col"
          :
          "w-full font-sans bg-repeat-y bg-cover bg-landing-page text-[#ECECEC] gap-[15.62rem] flex flex-col"
        }
      >
        <LandingPageHeader />

        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </div>

        <LandingPageFaqCard />
        <LandingPageFooter />
      </div>
    </MobileContextProvider>
  );
};

export default PricingPage;
