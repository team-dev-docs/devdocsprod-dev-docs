import React from 'react';
import icon from '/static/landing-page/icon.png';
import logo from '/static/landing-page/logo.png';
import PrimaryButton from './landing-page-buttton-primary';
import SecondaryButton from './landing-page-button-secondary';
import LandingPageLink from './landing-page-link';

const LandingPageHeader = () => {
  return (
    <div className="w-screen px-[3.75rem] py-[1.5rem] flex items-center justify-between">
      <div
        className="flex gap-[0.44rem] items-center"
      >
        <img
          src={icon}
        />
        <img
          src={logo}
        />
      </div>
      <div
        className={`flex gap-[1.5rem] items-center`}
      >
        <LandingPageLink
          href=''
        >
          Features
        </LandingPageLink>

        <LandingPageLink
          href=''
        >
          About us
        </LandingPageLink>

        <LandingPageLink
          href=''
        >
          Pricing
        </LandingPageLink>

        <LandingPageLink
          href=''
        >
          Docs
        </LandingPageLink>

        <LandingPageLink
          href=''
        >
          Blog
        </LandingPageLink>
      </div>
      <div
        className='flex gap-[1.25rem] items-center'
      >
        <PrimaryButton
          onClick={() => {}}
        >
          Get started
        </PrimaryButton>

        <SecondaryButton
          onClick={() => { }}
        >
          Sign in
        </SecondaryButton>
      </div>
    </div>
  );
};

export default LandingPageHeader;
