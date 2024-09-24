import React from 'react';
import LandingPageHeader from '../parts/landing-page-header';
import PrimaryButton from '../parts/landing-page-button-primary';
import SecondaryButton from '../parts/landing-page-button-secondary';
import { useIsMobile } from '../context-providers/mobile-context-provider';

const LandingPageInitial = () => {
  const isMobile = useIsMobile();

  return (
    <div
      className='relative min-h-screen'
    >
      <LandingPageHeader />

      <img
        className={isMobile ?
          'w-full p-8'
          :
          'max-w-[75vw] max-h-[75vh] w-auto h-auto absolute bottom-0 right-0 z-0'
        }
        src="/landing-page/robot.png"
      />

      <div
        className={isMobile ?
          "max-w-[64rem] text-[2.75rem] leading-[2.5rem] font-extrabold z-10 relative mt-[1.56rem] mx-4 text-center"
          :
          "max-w-[64rem] text-[5rem] leading-[4.5rem] font-extrabold z-10 relative mt-[9.38rem] ml-[7.19rem]"
        }
        style={{
          textShadow: '0px 0px 13px rgba(187, 155, 255, 0.64)',
          fontFamily: "Puffin Arcade",
          background: "linear-gradient(92deg, #808AFF 1.07%, #FF78B9 56.56%)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        AI-Powered Developer Documentation
      </div>

      <div
        className={isMobile ?
          "relative z-10 mx-4 my-[2.56rem]"
          :
          "relative z-10 ml-[7.19rem] my-[3.5rem] text-[1.125rem] max-w-[32rem]"
        }
        style={{
          color: "rgba(236, 236, 236, 0.85)",
          fontFeatureSettings: "'liga' off, 'clig' off",
        }}
      >
        Effortlessly generate and maintain docs with seamless GitHub and code editor integration. Start in just 2 minutes—fully compatible with your existing tools. Your data is secure—no code is ever used for training.
      </div>

      <div
        className={isMobile ?
          "relative z-10 w-full flex flex-col gap-[1.56rem] items-center"
          :
          "relative z-10 ml-[7.19rem] flex gap-[1rem]"
        }
      >
        <PrimaryButton
          className={isMobile ?
            "px-[1.5rem] py-[0.75rem] text-[1.125rem]"
            :
            ""
          }
          onClick={() => { }}
        >
          Get Started
        </PrimaryButton>

        <SecondaryButton
          className={isMobile ?
            "px-[1.5rem] py-[0.75rem] text-[1.125rem]"
            :
            ""
          }
          onClick={() => { }}
        >
          Book a demo
        </SecondaryButton>
      </div>
    </div>
  );
};

export default LandingPageInitial;