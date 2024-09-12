import React from 'react';
import LandingPageHeader from '../parts/landing-page-header';
import PrimaryButton from '../parts/landing-page-buttton-primary';
import SecondaryButton from '../parts/landing-page-button-secondary';

const LandingPageInitial = () => {
  return (
    <div
      className='relative min-h-screen'
    >
      <LandingPageHeader />

      <div
        className="max-w-[64rem] text-[5rem] leading-[4.5rem] font-extrabold z-10 relative mt-[9.38rem] ml-[7.19rem]"
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
        className="relative z-10 ml-[7.19rem] my-[3.5rem] text-[1.125rem] max-w-[32rem]"
        style={{
          color: "rgba(236, 236, 236, 0.85)",
          fontFeatureSettings: "'liga' off, 'clig' off",
        }}
      >
        Effortlessly generate and maintain docs with seamless GitHub and code editor integration. Start in just 2 minutes—fully compatible with your existing tools. Your data is secure—no code is ever used for training.
      </div>

      <div
        className="relative z-10 ml-[7.19rem] flex gap-[1rem]"
      >
        <PrimaryButton
          onClick={() => { }}
        >
          Get Started
        </PrimaryButton>

        <SecondaryButton
          onClick={() => { }}
        >
          Book a demo
        </SecondaryButton>
      </div>

      <img
        className="max-w-[75vw] max-h-[75vh] w-auto h-auto absolute bottom-0 right-0 z-0"
        src="/landing-page/robot.png"
      />
    </div>
  );
};

export default LandingPageInitial;