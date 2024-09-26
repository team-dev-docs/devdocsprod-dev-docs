import React from 'react';
import LandingPageCard from '../parts/landing-page-card';
import LandingPageLink from '../parts/landing-page-link';
import { useIsMobile } from '../context-providers/mobile-context-provider';

const INTEGRATIONS = [
  {
    name: "VS Code Extension",
    description: "Leverage the VS Code extension to quickly start generating markdown files from your existing code.",
    screenshotSrc: "/landing-page/screenshot-vs-code.png",
  },
  {
    name: "GitHub App",
    description: "Integrate Dev-Docs into your CI/CD to fully automate the generation and maintenance of your docs.",
    screenshotSrc: "/landing-page/screenshot-github-app.png",
  },
  {
    name: "Chrome Extension",
    description: "Generate markdown files for UI-driven workflows!",
    screenshotSrc: "/landing-page/screenshot-chrome-extension.png",
  },
  {
    name: "Docusaurus Template",
    description: "Don't have an existing documentation-hosting framework? Leverage our open-source Docusaurus template to get up and running in just minutes!",
    screenshotSrc: "/landing-page/screenshot-docusaurus-template.png",
  },
];

const LandingPageIntegrationsCard = () => {
  const isMobile = useIsMobile();

  const [selectedIndex, setSelectedIndex] = React.useState(0);

  return (
    <LandingPageCard>
      <div
        className={isMobile ?
          "font-extrabold text-[2rem] text-center font-pixel"
          :
          "font-extrabold text-[3rem] text-center font-pixel"
        }
        style={{
          fontFeatureSettings: "'liga' off, 'clig' off",
        }}
      >
        Developed with your needs in mind
      </div>

      <div
        className="flex gap-[0.625rem] rounded-[3.75rem] mt-[2.81rem]"
        style={{
          background: "rgba(27, 27, 30, 0.50)",
        }}
      >
        {INTEGRATIONS.map((integration, idx) => (
          <button
            key={`landing-page-integrations-selection-${idx}`}
            className="py-[0.625rem] px-[1.25rem] rounded-[3.75rem]"
            style={{
              background: selectedIndex === idx ? "rgba(255, 255, 255, 0.15)" : "transparent",
            }}
            onClick={() => setSelectedIndex(idx)}
          >
            {integration.name}
          </button>
        ))}
      </div>

      <div
        className="mt-[2.81rem]"
      >
        {INTEGRATIONS[selectedIndex].description}
      </div>

      <img
        className="mt-[2.81rem] w-full"
        src={INTEGRATIONS[selectedIndex].screenshotSrc}
      />
    </LandingPageCard>
  );
};

export default LandingPageIntegrationsCard;