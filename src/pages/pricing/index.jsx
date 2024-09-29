import React from 'react';

import LandingPageFooter from '../../components/landing-page-components/sections/landing-page-footer';
import { MobileContextProvider, useIsMobile } from '../../components/landing-page-components/context-providers/mobile-context-provider';
import LandingPageHeader from '../../components/landing-page-components/sections/landing-page-header';
import LandingPageFaqCard from '../../components/landing-page-components/sections/landing-page-faq';
import LandingPageCard from '../../components/landing-page-components/parts/landing-page-card';
import LandingPageFeatureCard from '../../components/landing-page-components/parts/pricing-card';




const FEATURES = [
  {
    title: "Byte Plan (free tier)",
    description: "Everything you need to get started with Dev-Docs",
    bulletPoints: [
      "No cc required",
      "Access to Dev-Docs' native web app features",
      "Use Dev-Docs in VS Code or GitHub Codespaces",
      "Generate the content you need from your codebase",
      "Leverage Dev-Docs Chrome Extension to generate step by step guides",
      "Get 2,000,000 input credits and 500,000 output credits to use as you see fit",
    ],
    buttonTitle: "Get started",
    href: "https://docs.dev/docs"
  },
  {
    title: "Megabyte Plan (pro tier)",
    description: "Get even more out of Dev-Docs",
    bulletPoints: [
      "Everything from the free plan",
      "Starting with 10,000,000 input credits and 2,000,000 output credits per month",
      "Integrate Dev-Docs into your CI/CD to fully automate the process",
      "Sync Dev-Docs up with your Confluence, Google Drive or Notion",
      "Dedicated support" 
    ],
    buttonTitle: "Get In Touch",
    href: "https://dub.sh/devdocs"
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
          "mt-[3rem] flex justify-center items-center gap-[1rem]"
          :
          "mt-[3rem] flex flex-col flex-wrap gap-[1.25rem] justify-center w-full"
        }
        style={{"alignItems": "stretch"}}
      >
        {FEATURES.map((feature, idx) => (
          <div
            key={`landing-page-features-card-feature-card-${idx}`}
            className={isMobile ?
              "flex flex-row justify-center align-items-stretch"
              :
              "flex flex-row justify-center h-[23rem] align-items-stretch"
            }
          >
            <LandingPageFeatureCard
              iconSrc={feature.iconSrc}
              title={feature.title}
              description={feature.description}
              bulletPoints={feature.bulletPoints}
              href={feature.href}
              buttonTitle={feature.buttonTitle}
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
