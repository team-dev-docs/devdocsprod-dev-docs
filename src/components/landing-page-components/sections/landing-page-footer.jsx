import React from 'react';
import LandingPageLink from '../parts/landing-page-link';
import icon from '/static/landing-page/icon.png';
import logo from '/static/landing-page/logo.png';

const BACKER_LOGOS_SRC = [
  "/landing-page/techstars.svg",
  "/landing-page/468_capital.svg",
  "/landing-page/top_angel_investors.svg",
];

const LandingPageFooter = () => {
  return (
    <div
      className='flex flex-col items-center w-full'
    >
      <div
        className="text-[2.5rem] font-medium text-center tracking-[-0.075rem] flex gap-[1.25rem] items-center justify-center w-full mb-[4.69rem]"
      >
        <div>
          Built by a team from
        </div>
        <img
          src="/landing-page/okta.svg"
          alt="okta"
          className="inline-block"
        />
        <div>
          and
        </div>
        <img
          src="/landing-page/stripe.svg"
          alt="okta"
          className="inline-block"
        />

      </div>

      <div
        className="text-[1.75rem] font-semibold text-center tracking-[-0.075rem] flex flex-col gap-[1.25rem] items-center justify-center w-full my-[4.69rem]"
      >
        <div>
          Backed by innovative investors
        </div>

        <div
          className='flex justify-around w-full px-[0.63rem] h-[7.3125rem]'
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
        className="px-[5rem] my-[1.5rem] text-[1.125rem] text-center"
      >
        We take your data security seriously. Dev-Docs is actively working towards SOC 2 Type 2 compliance to ensure the highest standards of security and privacy for your documentation.
      </div>

      <img
        src="/landing-page/footer-img.png"
        className="w-full my-0"
      />

      <div
        className="flex w-full py-[4rem] px-[5rem] justify-between"
        style={{
          borderTop: "1px solid rgba(162, 161, 165, 0.75)",
        }}
      >
        <div
          className="flex grow"
        >
          <div
            className="flex flex-col gap-[1rem] grow"
          >
            <div
              className='text-[1.5rem] font-medium'
            >
              Contact
            </div>
            <div
              className='text-[1.125rem] font-light mb-[1.5rem]'
            >
              Work inquires: <a
                className='text-[1.125rem] text-white font-light'
                href="mailto:founders@dev-docs.io"
              >founders@dev-docs.io</a>
              <br />
              Support: <a
                className='text-[1.125rem] text-white font-light'
                href="mailto:support@dev-docs.io"
              >support@dev-docs.io</a>
            </div>
            <div
              className='font-light text-[#939393]'
            >
              © 2024 Dev-Docs. All Rights Reserved.
            </div>
          </div>
          <div
            className="flex flex-col grow"
          >
            <div
              className='text-[1.5rem] font-medium'
            >
              Social
            </div>
            <LandingPageLink
              href=""
            >
              LinkedIn
            </LandingPageLink>
            <LandingPageLink
              href=""
            >
              GitHub
            </LandingPageLink>
            <LandingPageLink
              href=""
            >
              Blog
            </LandingPageLink>
          </div>
        </div>

        <div
          className="flex gap-[0.44rem] items-center self-end"
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