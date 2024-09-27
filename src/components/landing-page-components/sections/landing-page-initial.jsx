import React from 'react';
import { useHistory } from 'react-router-dom';
import PrimaryButton from '../parts/landing-page-button-primary';
import SecondaryButton from '../parts/landing-page-button-secondary';
import { useIsMobile } from '../context-providers/mobile-context-provider';
import LandingPageHeader from './landing-page-header';
import { LINK_BOOK_MEETING, LINK_GET_STARTED } from '@site/src/constants/landing-page-links-constants';

const BULLETS = [
  "Start in just two minutes",
  "Plug into your existing docs and toolstack",
  "Document your codebases, SDKs, APIs, and more",
  "Bridge the gap between developer and doc teams",
  "Edit and use the markdown output as needed",
]

const LandingPageInitial = () => {
  const history = useHistory();
  const isMobile = useIsMobile();

  return (
    <div
      className='relative min-h-screen'
    >
      <LandingPageHeader />

      <img
        className={isMobile ?
          'w-full p-8 m-0'
          :
          'max-w-[50vw] max-h-[50vh] w-auto h-auto absolute bottom-0 right-[1rem] z-0 m-0'
        }
        src="/landing-page/robot.png"
      />

      <div
        className={isMobile ?
          "max-w-[64rem] text-[2.75rem] leading-[2.5rem] font-extrabold z-10 relative mt-[1.56rem] mx-4 text-center font-pixel"
          :
          "max-w-[64rem] text-[5rem] leading-[4.5rem] font-extrabold z-10 relative mt-[9.38rem] ml-[7.19rem] font-pixel"
        }
        style={{
          textShadow: '0px 0px 13px rgba(187, 155, 255, 0.64)',
          background: "linear-gradient(92deg, #808AFF 1.07%, #FF78B9 56.56%)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Generate content from your codebase and software
      </div>

      <div
        className={isMobile ?
          "relative z-10 mx-4 my-[2.56rem]"
          :
          "relative z-10 ml-[7.19rem] my-[3.5rem] text-[1.125rem] max-w-[33rem]"
        }
        style={{
          color: "rgba(236, 236, 236, 0.85)",
          fontFeatureSettings: "'liga' off, 'clig' off",
        }}
      >
        Use AI to effortlessly generate context-aware, minimum viable documentation in <code className="bg-[#464646]">.md</code> from your codebase and existing docs.  With Dev-Docs, ensure your documentation and content stays accurate and up to date.
      </div>

      <div
        className={isMobile ?
          "relative z-10 mx-4 my-[2.56rem]"
          :
          "relative z-10 ml-[7.19rem] my-[3.5rem] text-[1.125rem] max-w-[33rem]"
        }
        style={{
          color: "rgba(236, 236, 236, 0.85)",
          fontFeatureSettings: "'liga' off, 'clig' off",
        }}
      >
        {BULLETS.map((bullet, index) => (
          <div
            key={`landing-page-initial-bullets-${index}`}
            className="flex items-center gap-[1rem]"
          >
            <img
              className="w-[1.25rem] h-[1.25rem]"
              src="/landing-page/rocket-bullet.svg"
            />
            {bullet}
          </div>
        ))}
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
          onClick={() => history.push(LINK_GET_STARTED)}
        >
          Get started
        </PrimaryButton>

        <SecondaryButton
          className={isMobile ?
            "px-[1.5rem] py-[0.75rem] text-[1.125rem]"
            :
            ""
          }
          onClick={() => history.push(LINK_BOOK_MEETING)}
        >
          Chat with us
        </SecondaryButton>
      </div>
    </div>
  );
};

export default LandingPageInitial;