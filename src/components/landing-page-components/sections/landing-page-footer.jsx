import React from 'react';
import LandingPageLink from '../parts/landing-page-link';
import icon from '/static/landing-page/icon.png';
import logo from '/static/landing-page/logo.png';
import { useIsMobile } from '../context-providers/mobile-context-provider';
import { LINK_BLOG, LINK_GITHUB, LINK_LINKEDIN, LINK_PRIVACY_POLICY, LINK_TERMS_OF_SERVICE } from '@site/src/constants/landing-page-links-constants';

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
            className="flex flex-col gap-[1rem] grow"
          >
            <div
              className={isMobile ?
                "text-[1.25rem] font-medium"
                :
                "text-[1.5rem] font-medium"
              }
            >
              Company
            </div>
              <a
                className={isMobile ?
                  "font-light"
                  :
                  "text-[1.125rem] font-light"
                }
                href={LINK_TERMS_OF_SERVICE}
              >
                Terms of service
              </a>
              <a
                className={isMobile ?
                  "font-light"
                  :
                  "text-[1.125rem] font-light"
                }
                href={LINK_PRIVACY_POLICY}
              >
                Privacy policy
              </a>
            
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
            <a
              className={isMobile ?
                "font-light"
                :
                "text-[1.125rem] font-light"
              }
              href={LINK_LINKEDIN}
            >
              LinkedIn
            </a>
            <a
              className={isMobile ?
                "font-light"
                :
                "text-[1.125rem] font-light"
              }
              href={LINK_GITHUB}
            >
              GitHub
            </a>
            <a
              className={isMobile ?
                "font-light"
                :
                "text-[1.125rem] font-light"
              }
              href={LINK_BLOG}
            >
              Blog
            </a>
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