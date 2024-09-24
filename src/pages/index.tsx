import React from 'react';

import LandingPageInitial from '../components/landing-page-components/sections/landing-page-initial';
import LandingPageDemoCard from '../components/landing-page-components/sections/landing-page-demo-card';
import LandingPageFeaturesCard from '../components/landing-page-components/sections/landing-page-features-card';
import LandingPageWorkflowCard from '../components/landing-page-components/sections/landing-page-workflow-card';
import LandingPageCallToAction from '../components/landing-page-components/sections/landing-page-call-to-action';
import LandingPageCommunityCard from '../components/landing-page-components/sections/landing-page-community';
import LandingPageFaqCard from '../components/landing-page-components/sections/landing-page-faq';
import LandingPageQuotes from '../components/landing-page-components/sections/landing-page-quotes';
import LandingPageFooter from '../components/landing-page-components/sections/landing-page-footer';
import { MobileContextProvider, useIsMobile } from '../components/landing-page-components/context-providers/mobile-context-provider';

import "../css/landingpage.scss";

const LandingPage = () => {
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
        <LandingPageInitial />
        <LandingPageDemoCard />
        <LandingPageFeaturesCard />
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
        <LandingPageWorkflowCard />
        <LandingPageQuotes />
        <LandingPageCallToAction />
        <LandingPageCommunityCard />
        <LandingPageFaqCard />
        <LandingPageFooter />
      </div>
    </MobileContextProvider>
  );
};

export default LandingPage;
