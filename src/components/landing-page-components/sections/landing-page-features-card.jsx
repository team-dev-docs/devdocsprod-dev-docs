import React from 'react';
import LandingPageCard from '../parts/landing-page-card';
import LandingPageFeatureCard from '../parts/landing-page-feature-card';
import { useIsMobile } from '../context-providers/mobile-context-provider';

const FEATURES = [
  {
    iconSrc: "/landing-page/docs-icon.png",
    title: "Contextual docs",
    description: "Automatically generate and maintain contextual information on your codebase.",
  },
  {
    iconSrc: "/landing-page/update-icon.png",
    title: "Real-time updates",
    description: "Syncs with your CI/CD pipeline to keep everything up-to-date as you ship new code. Your docs stay great -- and acurate -- as you build your product.",
  },
  {
    iconSrc: "/landing-page/output-icon.png",
    title: "Configure your output",
    description: "You choose what code you want documented, what questions you want answered, and where you want the content stored.",
  },
  {
    iconSrc: "/landing-page/documentation-icon.png",
    title: "Integrates where you work",
    description: "Auto-generate content from where you’re already working. Store it where it’s already being consumed.",
  },
  {
    iconSrc: "/landing-page/human-icon.png",
    title: "Human in the loop",
    description: "You have editing and publishing powers. We don’t replace humans, we empower them. The final say is always yours!",
  },
  {
    iconSrc: "/landing-page/ui-icon.png",
    title: "Document UI workflows",
    description: "Great UI speaks for itself, but Dev-Docs’ Chrome extension is built for those times you need to document it for your users.",
  },
];

const LandingPageFeaturesCard = () => {
  const isMobile = useIsMobile();

  return (
    <LandingPageCard
      className={isMobile ?
        ""
        :
        "px-0"
      }
    >
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
          "mt-[3rem] flex flex-wrap gap-x-[1rem] gap-y-[5rem] justify-center items-center"
        }
      >
        {FEATURES.map((feature, idx) => (
          <div
            key={`landing-page-features-card-feature-card-${idx}`}
            className={isMobile ?
              "flex justify-center w-full"
              :
              "flex justify-center max-w-[20rem] h-[23rem]"
            }
            style={isMobile ?
              {}
              :
              {
                // flexBasis: 'calc(33.33% - 1.5rem)',
                // margin: '1rem',
              }
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
    </LandingPageCard>
  );
};

export default LandingPageFeaturesCard;