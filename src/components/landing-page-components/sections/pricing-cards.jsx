import React from 'react';
import LandingPageCard from '../parts/landing-page-card';
import { useHistory } from 'react-router-dom';
import PricingCard from '../parts/pricing-card';
import PrimaryButton from '../parts/landing-page-button-primary';
import SecondaryButton from '../parts/landing-page-button-secondary';
import { LINK_CHAT_WITH_FOUNDERS, LINK_GET_STARTED } from '@site/src/constants/landing-page-links-constants';
import { useIsMobile } from '../context-providers/mobile-context-provider';

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
        "Dedicated support via a private slack channel"
      ],
      buttonTitle: "Get In Touch",
      href: "https://dub.sh/devdocs"
    }
  ];

const PricingCards = () => {
  const isMobile = useIsMobile()
  const history = useHistory();

  return (
    <LandingPageCard
      className={isMobile ? "" : "px-0 p-[2rem]"}

    >
      <div
        className={isMobile ? "font-extrabold text-[2rem] text-center font-pixel" : "font-extrabold text-[3rem] text-center font-pixel"}
        style={{
          fontFeatureSettings: "'liga' off, 'clig' off",
        }}
      >
        Start using Dev-Docs for free or get in touch to learn more
      </div>

      <div className={`${isMobile ? 'flex flex-col' : 'flex flex-row'} gap-[1em]`} style={{ alignItems: "stretch", background: "transparent" }}>
        {FEATURES.map((feature, idx) => (
          <div
            key={`landing-page-features-card-feature-card-${idx}`}
            className={`${isMobile ? 'w-full' : 'nothing-yo'}`}
            style={{ "flexGrow": 1 }}
          >
            <PricingCard
              title={feature.title}
              description={feature.description}
              bulletPoints={feature.bulletPoints}
              href={feature.href}
              buttonTitle={feature.buttonTitle}
            />
          </div>
        ))}
      </div>
    </LandingPageCard>
  );
};

export default PricingCards;