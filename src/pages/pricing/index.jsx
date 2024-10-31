import React from 'react';

import LandingPageFooter from '../../components/landing-page-components/sections/landing-page-footer';
import { MobileContextProvider, useIsMobile } from '../../components/landing-page-components/context-providers/mobile-context-provider';
import LandingPageHeader from '../../components/landing-page-components/sections/landing-page-header';
import LandingPageFaqCard from '../../components/landing-page-components/sections/landing-page-faq';
import LandingPageCard from '../../components/landing-page-components/parts/landing-page-card';
import LandingPageFeatureCard from '../../components/landing-page-components/parts/landing-page-feature-card.jsx';


const FEATURES = [
  {
    iconSrc: "/landing-page/docs-icon.png",
    title: "Markdown docs by default",
    description: "We believe developer content should live as code, aka markdown. Your content lives right next to your codebase or in a documentation framework.",
  },
  {
    iconSrc: "/landing-page/update-icon.png",
    title: "Real-time updates",
    description: "Syncs with your CI/CD pipeline to keep everything up-to-date as you ship new code. Your docs stay great -- and acurate -- as you build your product.",
  }
];


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

        <div
        className={isMobile ?
          "mt-[3rem] flex flex-col flex-wrap gap-[1.25rem] justify-center items-center w-full"
          :
          "mt-[3rem] flex flex-col flex-wrap gap-x-[1rem] gap-y-[5rem] justify-center items-center"
        }
      >
        {FEATURES.map((feature, idx) => (
          <div
            key={`landing-page-features-card-feature-card-${idx}`}
            className={isMobile ?
              "flex flex-row justify-center"
              :
              "flex flex-row justify-center h-[23rem]"
            }
          >
            <LandingPageFeatureCard
              iconSrc={feature.iconSrc}
              title={feature.title}
              description={feature.description}
            />
          </div>
        ))}
      </div>

        <LandingPageFaqCard />
        <LandingPageFooter />
      </div>
    </MobileContextProvider>
  );
};

export default PricingPage;
