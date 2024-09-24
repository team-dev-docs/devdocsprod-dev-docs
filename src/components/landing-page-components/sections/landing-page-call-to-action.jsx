import React from 'react';
import LandingPageCard from '../parts/landing-page-card';
import PrimaryButton from '../parts/landing-page-button-primary';
import SecondaryButton from '../parts/landing-page-button-secondary';
import { useIsMobile } from '../context-providers/mobile-context-provider';

const LandingPageCallToAction = () => {
  const isMobile = useIsMobile();
  return (
    <LandingPageCard>
      <div
        className={isMobile ?
          "font-extrabold text-[2rem] text-center"
          :
          "font-extrabold text-[3rem] text-center"
        }
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
        className={isMobile ?
          "flex flex-col gap-[1rem] pt-[1.5rem]"
          :
          "flex gap-[1rem] pt-[2rem]"
        }
      >
        <PrimaryButton
          className="inline-flex !w-auto px-[1.5rem] py-[0.75rem]"
          onClick={() => { }}
        >
          Get Started
        </PrimaryButton>

        <SecondaryButton
          className="inline-flex !w-auto px-[1.5rem] py-[0.75rem]"
          onClick={() => { }}
        >
          Chat with the founders
        </SecondaryButton>
      </div>
    </LandingPageCard>
  );
};

export default LandingPageCallToAction;