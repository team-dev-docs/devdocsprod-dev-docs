import React from 'react';
import { CardSpotlight } from "../../aceternity/card-spotlight";

const LandingPageFeatureCard = ({
  iconSrc,
  title,
  description,
}) => {
  return (
    <CardSpotlight
      className=''
    >
      <img
        src={iconSrc}
      />
      {title}
      {description}
    </CardSpotlight>
  );
};

export default LandingPageFeatureCard;