import React from 'react';
import LandingPageCard from '../parts/landing-page-card';
import LandingPageFeatureCard from '../parts/landing-page-feature-card';
import { useIsMobile } from '../context-providers/mobile-context-provider';

const FEATURES = [
  {
    iconSrc: "/landing-page/chat-icon.png",
    title: "AI Chat",
    description: "Organize your docs and make them searchable, so you always find the right information when needed.",
  },
  {
    iconSrc: "/landing-page/update-icon.png",
    title: "Real-time updates",
    description: "Syncs with your CI/CD pipeline to keep everything up-to-date as you ship new code.",
  },
  {
    iconSrc: "/landing-page/documentation-icon.png",
    title: "Effortless documentation",
    description: "Whether it’s for internal teams or your end users, Dev-Docs has your back!",
  },
  {
    iconSrc: "/landing-page/update-icon.png",
    title: "Contextual docs",
    description: "Bring your own .md supported docs framework, and go from 0 to deployed in minutes.",
  },
  {
    iconSrc: "/landing-page/chat-icon.png",
    title: "AI Chat",
    description: "Organize your docs and make them searchable, so you always find the right information when needed.",
  },
  {
    iconSrc: "/landing-page/update-icon.png",
    title: "Real-time updates",
    description: "Syncs with your CI/CD pipeline to keep everything up-to-date as you ship new code.",
  },
];

const LandingPageFeaturesCard = () => {
  const isMobile = useIsMobile();

  return (
    <LandingPageCard>
      <div
        className={isMobile ?
          "font-extrabold text-[2rem] max-w-[24rem] text-center font-pixel"
          :
          "font-extrabold text-[3rem] max-w-[24rem] text-center font-pixel"
        }
        style={{
          fontFeatureSettings: "'liga' off, 'clig' off",
        }}
      >
        Benefits built for your success
      </div>

      <div
        className={isMobile ?
          "mt-[3rem] flex flex-wrap gap-[1.25rem] justify-center items-center w-full"
          :
          "mt-[3rem] flex flex-wrap gap-x-[1.5rem] gap-y-[5rem] justify-center items-center"
        }
      >
        {FEATURES.map((feature, idx) => (
          <div
            key={`landing-page-features-card-feature-card-${idx}`}
            className={isMobile ?
              "flex justify-center w-full"
              :
              "flex justify-center max-w-[24rem] h-[31rem]"
            }
            style={{
              flexBasis: 'calc(33.33% - 1.5rem)',
              margin: '1rem',
            }}
          >
            <LandingPageFeatureCard
              iconSrc={feature.iconSrc}
              title={feature.title}
              description={feature.description}
            />
          </div>
        ))}
      </div>
    </LandingPageCard>
  );
};

export default LandingPageFeaturesCard;