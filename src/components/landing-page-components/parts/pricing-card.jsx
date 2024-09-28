import React from 'react';
import { CardSpotlight } from "../../aceternity/card-spotlight";
import { useIsMobile } from '../context-providers/mobile-context-provider';
import PrimaryButton from '@site/src/components/landing-page-components/parts/landing-page-button-primary';


const PricingCard = ({
  title,
  description,
  bulletPoints,
  buttonTitle,
  href
}) => {
  const isMobile = useIsMobile();

  return (
    <div
      className={isMobile ?
        "w-full p-[1.25rem]"
        :
        "p-[2rem]"
      }

      style={{
        backdropFilter: "blur(12.5px)",
        background: "linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.00) 100%)",
        border: "2px solid rgba(255, 255, 255, 0.20)",
        boxShadow: "0px -2px 10px 0px rgba(233, 223, 255, 0.30), 0px -2px 40px 0px rgba(187, 155, 255, 0.15)",
      }}
    >
      <div
        className={isMobile ?
          "mb-[0.625rem] text-[1.25rem] font-medium z-10 relative"
          :
          "mb-[0.625rem] text-[2rem] font-medium z-10 relative"
        }
      >
        {title}
      </div>
      <div
        className="relative z-10 font-medium"
      >
        {description}
      </div>
    <ul className="relative z-10 mt-4 list-disc list-inside">
        {bulletPoints.map((point, index) => (
            <li key={index} className="mb-2">
                {point}
            </li>
        ))}
    </ul>
    <PrimaryButton onClick={() => window.open(href, '_blank')} className="mt-4 z-[8000]">{buttonTitle}</PrimaryButton>
    </div>
  );
};

export default PricingCard