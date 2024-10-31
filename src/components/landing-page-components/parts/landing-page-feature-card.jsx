import React from 'react';
import { CardSpotlight } from "../../aceternity/card-spotlight";
import { useIsMobile } from '../context-providers/mobile-context-provider';

const LandingPageFeatureCard = ({
  iconSrc,
  title,
  description,
}) => {
  const isMobile = useIsMobile();

  return (
    <CardSpotlight
      className={isMobile ?
        "w-full p-[1.25rem]"
        :
        "p-[2rem]"
      }
    >
      <img
        className="w-[3.125rem] h-[3.125rem] m-0 mb-[1rem] z-10 relative"
        src={iconSrc}
      />
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
    </CardSpotlight>
  );
};

export default LandingPageFeatureCard;