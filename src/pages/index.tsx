import React from 'react';

import LandingPageInitial from '../components/landing-page-components/sections/landing-page-0-initial';
import LandingPageDemoCard from '../components/landing-page-components/sections/landing-page-1-demo-card';
import LandingPageFeaturesCard from '../components/landing-page-components/sections/landing-page-2-features-card';

const LandingPage = () => {
  return (
    <div
      className="w-full font-sans bg-repeat-y bg-cover bg-landing-page text-[#ECECEC] gap-[15.62rem] flex flex-col"
    >
      <LandingPageInitial />
      <LandingPageDemoCard />
      <LandingPageFeaturesCard />
    </div>
  );
};

export default LandingPage;
