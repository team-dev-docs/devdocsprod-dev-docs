import React from 'react';

import LandingPageFooter from '../../components/landing-page-components/sections/landing-page-footer';
import { MobileContextProvider, useIsMobile } from '../../components/landing-page-components/context-providers/mobile-context-provider';
import LandingPageHeader from '../../components/landing-page-components/sections/landing-page-header';
import LandingPageFaqCard from '../../components/landing-page-components/sections/landing-page-faq';
import LandingPageCard from '../../components/landing-page-components/parts/landing-page-card';
import LandingPageFeatureCard from '../../components/landing-page-components/parts/pricing-card';
import PricingCards from '@site/src/components/landing-page-components/sections/pricing-cards';



const PricingPage = () => {
  const isMobile = useIsMobile();

  return (
    <MobileContextProvider>
      <div
        className={`w-full font-sans bg-repeat-y bg-cover bg-landing-page text-[#ECECEC] flex flex-col ${isMobile ? 'gap-4' : 'gap-[15.62rem]'}`}
      >
        <LandingPageHeader />

        <PricingCards />

        <LandingPageFaqCard />
        <LandingPageFooter />
      </div>
    </MobileContextProvider>
  );
};

export default PricingPage;
