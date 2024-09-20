import React from 'react';
import LandingPageCard from '../parts/landing-page-card';
import LandingPageFeatureCard from '../parts/landing-page-feature-card';

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
];

const LandingPageFeaturesCard = () => {
  return (
    <LandingPageCard>
      <div
        className="font-extrabold text-[3rem] max-w-[24rem] text-center"
        style={{
          fontFeatureSettings: "'liga' off, 'clig' off",
          fontFamily: "Puffin Arcade",
        }}
      >
        Benefits built for your success
      </div>

      <div
        className="text-[1.125rem] max-w-[30rem] text-center"
      >
        Check out our amazing features and experience the power of Dev-Docs for yourself.
      </div>

      <div
        className="mt-[3rem] flex flex-wrap gap-x-[1.5rem] gap-y-[5rem] justify-center items-center"
      >
        {FEATURES.map((feature, idx) => (
          <div
            key={`landing-page-features-card-feature-card-${idx}`}
            className="flex justify-center"
            style={{
              flexBasis: 'calc(50% - 1rem)'
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