import React from 'react';
import PrimaryButtonWhiteText from '../parts/landing-page-button-primary-white-text';

const LandingPageCommunityCard = () => {
  return (
    <div
      className="mx-[5rem] rounded-[1.25rem]"
      style={{
        backgroundImage: "url('/landing-page/BG_shape_color.svg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="w-full flex flex-col items-center p-[3.75rem] gap-[1.88rem] rounded-[1.25rem] mt-[7.74rem]"
        style={{
          backgroundImage: "url('/landing-page/Bg_shape.svg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          className="flex gap-[1.88rem]"
        >
          <img
            src="/landing-page/slack.svg"
            alt="slack"
            className="w-[3.5rem]"
          />

          <img
            src="/landing-page/discord.svg"
            alt="discord"
            className="w-[3.5rem]"
          />
        </div>

        <div
          className="flex flex-col items-center gap-[0.94rem]"
        >
          <div
            className="font-extrabold text-[2.5rem]"
            style={{
              fontFeatureSettings: "'liga' off, 'clig' off",
              fontFamily: "Puffin Arcade",
            }}
          >
            Join the community
          </div>

          <div
            style={{
              color: "var(--Neutral-gray-300, #8F9BB7)",
            }}
          >
            Join the community of developers transforming how documentation gets done
          </div>
        </div>

        <div
          className="flex gap-[1.88rem]"
        >
          <PrimaryButtonWhiteText
            onClick={() => { }}
          >
            Slack
          </PrimaryButtonWhiteText>

          <PrimaryButtonWhiteText
            onClick={() => { }}
          >
            Discord
          </PrimaryButtonWhiteText>
        </div>
      </div>
    </div>
  );
};

export default LandingPageCommunityCard;