import React from 'react';

import LandingPageInitial from '../components/landing-page-components/sections/landing-page-0-initial';
import LandingPageDemoCard from '../components/landing-page-components/sections/landing-page-1-demo-card';
import LandingPageFeaturesCard from '../components/landing-page-components/sections/landing-page-2-features-card';
import LandingPageWorkflowCard from '../components/landing-page-components/sections/landing-page-3-workflow-card';
import LandingPageCallToAction from '../components/landing-page-components/sections/landing-page-call-to-action';
import LandingPageCommunityCard from '../components/landing-page-components/sections/landing-page-community';
import LandingPageFaqCard from '../components/landing-page-components/sections/landing-page-faq';
import LandingPageQuotes from '../components/landing-page-components/sections/landing-page-quotes';
import LandingPageFooter from '../components/landing-page-components/sections/landing-page-footer';
import { MobileContextProvider } from '../components/landing-page-components/context-providers/mobile-context-provider';

const LandingPage = () => {
  return (
    <div
      className="w-full font-sans bg-repeat-y bg-cover bg-landing-page text-[#ECECEC] gap-[15.62rem] flex flex-col"
    >
      <MobileContextProvider>
        <LandingPageInitial />
        <LandingPageDemoCard />
        <LandingPageFeaturesCard />
        <div
          className="text-[2.5rem] font-medium text-center tracking-[-0.075rem]"
          style={{ color: '#ECECEC' }}
        >
          Whether it’s for internal teams or your end users, Dev-Docs has your back!
        </div>
        <LandingPageWorkflowCard />
        <LandingPageQuotes />
        <LandingPageCallToAction />
        <LandingPageCommunityCard />
        <LandingPageFaqCard />
        <LandingPageFooter />
      </MobileContextProvider>
    </div>
  );
};

export default LandingPage;
