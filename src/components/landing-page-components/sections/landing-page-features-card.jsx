import React from 'react';
import LandingPageCard from '../parts/landing-page-card';
import LandingPageFeatureCard from '../parts/landing-page-feature-card';
import { useIsMobile } from '../context-providers/mobile-context-provider';

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
  },
  {
    iconSrc: "/landing-page/output-icon.png",
    title: "Configure your output",
    description: "You choose what code you want documented, what questions you want answered, and where you want the content stored. Doc teams guide the AI.",
  },
  {
    iconSrc: "/landing-page/documentation-icon.png",
    title: "Bring your own docs or use ours",
    description: "Plug in your existing docs repo if you have one. Starting from scratch? Use our free docs template generated for you by default.",
  },
  {
    iconSrc: "/landing-page/human-icon.png",
    title: "Human-in-the-loop",
    description: "You have editing and publishing powers. We don’t replace humans, we empower them. The final say is always yours!",
  },
  {
    iconSrc: "/landing-page/ui-icon.png",
    title: "Create step-by-step guides",
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