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
  const { isMobile } = useIsMobile();

  return (
    <div
      className={isMobile ?
        "w-full p-[1.25rem] rounded-[0.625rem]"
        :
        "p-[2rem] rounded-[0.625rem]"
      }

      style={{
        border: "2px solid rgba(255, 255, 255, 0.20)",
        boxShadow: "0px -2px 10px 0px rgba(233, 223, 255, 0.30), 0px -2px 40px 0px rgba(187, 155, 255, 0.15)",
        height: "100%"
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
      <PrimaryButton onClick={() => window.open(href, '_blank')} className="mt-4 z-[8000]">{buttonTitle}</PrimaryButton>
      <div className="relative z-10 mt-4 list-disc list-inside">
          {bulletPoints.map((point, index) => (
            <div
              key={`landing-page-pricing-card-${title}-bullet-${index}`}
              className="flex items-center mb-2"
            >
              <div className="w-1 h-1 mr-2 bg-white rounded-full"></div>
              {point}
            </div>
          ))}
      </div>
    </div>
  );
};

export default PricingCard