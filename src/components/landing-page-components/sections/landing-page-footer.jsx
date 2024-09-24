import React from 'react';
import LandingPageLink from '../parts/landing-page-link';
import icon from '/static/landing-page/icon.png';
import logo from '/static/landing-page/logo.png';
import { useIsMobile } from '../context-providers/mobile-context-provider';

const BACKER_LOGOS_SRC = [
  "/landing-page/techstars.svg",
  "/landing-page/468_capital.svg",
  "/landing-page/top_angel_investors.svg",
];

const LandingPageFooter = () => {
  const isMobile = useIsMobile();

  return (
    <div
      className='flex flex-col items-center w-full'
    >
      <div
        className={isMobile ?
          "text-[2rem] font-medium text-center tracking-[-0.075rem] flex flex-wrap items-center justify-center w-full mb-[3.46rem]"
          :
          "text-[2.5rem] font-medium text-center tracking-[-0.075rem] flex flex-wrap gap-[1.25rem] items-center justify-center w-full mb-[4.69rem]"
        }
      >
        <div>
          Built by a team from
        </div>
        <div
          className={isMobile ?
            "flex gap-[0.62rem] items-center"
            :
            "flex gap-[1.25rem] items-center"
          }
        >
          <img
            src="/landing-page/okta.svg"
            alt="okta"
            className={isMobile ?
              "h-[2rem] inline-block"
              :
              "inline-block"
            }
          />
          <div>
            and
          </div>
          <img
            src="/landing-page/stripe.svg"
            alt="stripe"
            className={isMobile ?
              "h-[2rem] inline-block"
              :
              "inline-block"
            }
          />
        </div>
      </div>

      <div
        className={isMobile ?
          "text-[1.375rem] font-semibold text-center tracking-[-0.075rem] flex flex-col gap-[1.25rem] items-center justify-center w-full my-[1.25rem]"
          :
          "text-[1.75rem] font-semibold text-center tracking-[-0.075rem] flex flex-col gap-[1.25rem] items-center justify-center w-full my-[4.69rem]"
        }
      >
        <div>
          Backed by innovative investors
        </div>

        <div
          className='flex flex-wrap justify-around w-full px-[0.63rem] min-h-[7.3125rem]'
          style={{
            background: "rgba(207, 211, 255, 0.50)",
          }}
        >
          {BACKER_LOGOS_SRC.map((src, index) => (
            <img
              key={`landing-page-footer-backer-${index}`}
              src={src}
              alt="backer"
            />
          ))}
        </div>
      </div>

      <div
        className={isMobile ?
          "px-[1.88rem] my-[1.5rem] text-center"
          :
          "px-[5rem] my-[1.5rem] text-[1.125rem] text-center"
        }
      >
        We take your data security seriously. Dev-Docs is actively working towards SOC 2 Type 2 compliance to ensure the highest standards of security and privacy for your documentation.
      </div>

      <img
        src="/landing-page/footer-img.png"
        className="w-full my-0"
      />

      <div
        className={isMobile ?
          "flex w-full p-[1.88rem] justify-between"
          :
          "flex w-full pt-[4rem] px-[5rem] justify-between"
        }
        style={{
          borderTop: "1px solid rgba(162, 161, 165, 0.75)",
        }}
      >
        <div
          className={isMobile ?
            ""
            :
            "flex grow"
          }
        >
          <div
            className="flex flex-col gap-[1rem] grow"
          >
            <div
              className={isMobile ?
                "text-[1.25rem] font-medium"
                :
                "text-[1.5rem] font-medium"
              }
            >
              Contact
            </div>
            <div
              className={isMobile ?
                "font-light mb-[1.5rem]"
                :
                "text-[1.125rem] font-light mb-[1.5rem]"
              }
            >
              Work inquires: <a
                className='font-light text-white'
                href="mailto:founders@dev-docs.io"
              >founders@dev-docs.io</a>
              <br />
              Support: <a
                className='font-light text-white '
                href="mailto:support@dev-docs.io"
              >support@dev-docs.io</a>
            </div>
          </div>
          <div
            className="flex flex-col grow gap-[0.38rem]"
          >
            <div
              className={isMobile ?
                "text-[1.25rem] font-medium"
                :
                "text-[1.5rem] font-medium"
              }
            >
              Social
            </div>
            <LandingPageLink
              className={isMobile ?
                "font-light"
                :
                "text-[1.125rem] font-light"
              }
              href=""
            >
              LinkedIn
            </LandingPageLink>
            <LandingPageLink
              className={isMobile ?
                "font-light"
                :
                "text-[1.125rem] font-light"
              }
              href=""
            >
              GitHub
            </LandingPageLink>
            <LandingPageLink
              className={isMobile ?
                "font-light"
                :
                "text-[1.125rem] font-light"
              }
              href=""
            >
              Blog
            </LandingPageLink>
          </div>
        </div>
      </div>

      <div
        className={isMobile ?
          "flex w-full justify-between px-[1.88rem] pt-[2.5rem] pb-[4rem]"
          :
          "flex w-full justify-between px-[5rem] pt-[1rem] pb-[4rem]"
        }
      >
        <div
          className='font-light text-[#939393]'
        >
          © 2024 Dev-Docs. All Rights Reserved.
        </div>
        <div
          className={isMobile ?
            "hidden"
            :
            "flex gap-[0.44rem] items-center self-end"
          }
        >
          <img
            src={icon}
          />
          <img
            src={logo}
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPageFooter;