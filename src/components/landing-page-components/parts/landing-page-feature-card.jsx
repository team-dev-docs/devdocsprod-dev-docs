import React from 'react';
import { CardSpotlight } from "../../aceternity/card-spotlight";

const LandingPageFeatureCard = ({
  iconSrc,
  title,
  description,
}) => {
  return (
    <CardSpotlight>
      <img
        className="w-[3.125rem] h-[3.125rem] mb-[px-4] z-10"
        src={iconSrc}
      />
      <div
        className="mb-[0.625rem] text-[2rem] font-medium z-10"
      >
        {title}
      </div>
      <div
        className="text-[0.875rem] z-10"
      >
        {description}
      </div>
    </CardSpotlight>
  );
};

export default LandingPageFeatureCard;