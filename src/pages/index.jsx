import React from 'react';

import LandingPageInitial from '../components/landing-page-components/sections/landing-page-initial';
import LandingPageDemoCard from '../components/landing-page-components/sections/landing-page-demo-card';
import LandingPageHasYourBack from '../components/landing-page-components/sections/landing-page-has-your-back';
import LandingPageFeaturesCard from '../components/landing-page-components/sections/landing-page-features-card';
import LandingPageIntegrationsCard from '../components/landing-page-components/sections/landing-page-integrations-card';
import LandingPageWorkflowCard from '../components/landing-page-components/sections/landing-page-workflow-card';
import LandingPageCallToAction from '../components/landing-page-components/sections/landing-page-call-to-action';
// import LandingPageCommunityCard from '../components/landing-page-components/sections/landing-page-community';
import LandingPageQuotes from '../components/landing-page-components/sections/landing-page-quotes';
import LandingPageEnd from '../components/landing-page-components/sections/landing-page-end';
import LandingPageFooter from '../components/landing-page-components/sections/landing-page-footer';
import { MobileContextProvider } from '../components/landing-page-components/context-providers/mobile-context-provider';

import "../css/landingpage.scss";
import LandingPageHeader from '../components/landing-page-components/sections/landing-page-header';

const LandingPage = () => {
  return (
    <MobileContextProvider>
      <div
        className={"w-full font-sans bg-repeat-y bg-cover bg-landing-page text-[#ECECEC] flex flex-col"}
      >
        <LandingPageInitial />
        <LandingPageDemoCard />
        <LandingPageHasYourBack />
        <LandingPageFeaturesCard />
        <LandingPageWorkflowCard />
        <LandingPageIntegrationsCard />
        <LandingPageQuotes />
        <LandingPageCallToAction />
        {/* <LandingPageCommunityCard /> */}
        <div
          className='w-full mt-[2rem]'
        >
          <LandingPageEnd />
          <LandingPageFooter />
        </div>
      </div>
    </MobileContextProvider>
  );
};

export default LandingPage;
