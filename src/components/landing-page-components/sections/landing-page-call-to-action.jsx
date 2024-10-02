import React from 'react';
import { useHistory } from 'react-router-dom';
import LandingPageCard from '../parts/landing-page-card';
import PrimaryButton from '../parts/landing-page-button-primary';
import SecondaryButton from '../parts/landing-page-button-secondary';
import { useIsMobile } from '../context-providers/mobile-context-provider';
import { LINK_CHAT_WITH_FOUNDERS, LINK_GET_STARTED } from '@site/src/constants/landing-page-links-constants';

const LandingPageCallToAction = () => {
  const history = useHistory();
  const { isMobile } = useIsMobile();
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
        Ready to embrace efficiency?
      </div>

      <div
        className="text-[1.125rem] text-center"
      >
        Start effortlessly generating and maintaining your documentation today with a free account. Speak to the team if you still have questions or want to chat.
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
          onClick={() => history.push(LINK_GET_STARTED)}
        >
          Get started
        </PrimaryButton>

        <SecondaryButton
          className="inline-flex !w-auto px-[1.5rem] py-[0.75rem]"
          onClick={() => window.open(LINK_CHAT_WITH_FOUNDERS, '_blank')}
        >
          Chat with us
        </SecondaryButton>
      </div>
    </LandingPageCard>
  );
};

export default LandingPageCallToAction;