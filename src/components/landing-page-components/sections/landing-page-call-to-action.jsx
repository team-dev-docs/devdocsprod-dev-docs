import React from 'react';
import LandingPageCard from '../parts/landing-page-card';
import PrimaryButton from '../parts/landing-page-button-primary';
import SecondaryButton from '../parts/landing-page-button-secondary';

const LandingPageCallToAction = () => {
  return (
    <LandingPageCard>
      <div
        className="font-extrabold text-[3rem] text-center"
        style={{
          fontFeatureSettings: "'liga' off, 'clig' off",
          fontFamily: "Puffin Arcade",
        }}
      >
        Ready to make your docs amazing?
      </div>

      <div
        className="text-[1.125rem] text-center"
      >
        Start effortlessly generating documentation with a free account. Speak to the co-founders if you still have questions or want to chat.
      </div>


      <div
        className="flex gap-[1rem] pt-[2rem]"
      >
        <PrimaryButton
          onClick={() => { }}
        >
          Get Started
        </PrimaryButton>

        <SecondaryButton
          onClick={() => { }}
        >
          Chat with the founders
        </SecondaryButton>
      </div>
    </LandingPageCard>
  );
};

export default LandingPageCallToAction;