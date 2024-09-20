import React, { useState } from 'react';
import icon from '/static/landing-page/icon.png';
import logo from '/static/landing-page/logo.png';
import PrimaryButton from './landing-page-button-primary';
import SecondaryButton from './landing-page-button-secondary';
import LandingPageLink from './landing-page-link';
import { useIsMobile } from '../context-providers/mobile-context-provider';

const LandingPageHeader = () => {
  const isMobile = useIsMobile();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const mobileLinks = <>
    <img
      className="cursor-pointer"
      src='/landing-page/hamburger-menu-icon.svg'
      onClick={() => setIsMenuOpen(true)}
    />
    <div
      className={`fixed top-0 left-0 w-screen h-screen bg-[#16164B] z-20 p-[1.88rem] flex flex-col ${isMenuOpen ? '' : 'hidden'}`}
    >
      <div
        className="flex justify-between"
      >
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

        <img
          className="cursor-pointer"
          src='/landing-page/x-icon.svg'
          onClick={() => setIsMenuOpen(false)}
        />
      </div>

      <div
        className="flex flex-col mb-[6.25rem]"
      >
        <LandingPageLink
          className="px-[0.5rem] py-[1.5rem]"
          style={{
            borderBottom: "1px solid #3741AC",
          }}
          href=''
        >
          Features
        </LandingPageLink>

        <LandingPageLink
          className="px-[0.5rem] py-[1.5rem]"
          style={{
            borderBottom: "1px solid #3741AC",
          }}
          href=''
        >
          About us
        </LandingPageLink>

        <LandingPageLink
          className="px-[0.5rem] py-[1.5rem]"
          style={{
            borderBottom: "1px solid #3741AC",
          }}
          href=''
        >
          Pricing
        </LandingPageLink>

        <LandingPageLink
          className="px-[0.5rem] py-[1.5rem]"
          style={{
            borderBottom: "1px solid #3741AC",
          }}
          href=''
        >
          Docs
        </LandingPageLink>

        <LandingPageLink
          className="px-[0.5rem] py-[1.5rem]"
          style={{
            borderBottom: "1px solid #3741AC",
          }}
          href=''
        >
          Blog
        </LandingPageLink>
      </div>

      <div
        className='flex flex-col gap-[1rem] items-center w-full'
      >
        <PrimaryButton
          className="w-full"
          onClick={() => {}}
        >
          Get started
        </PrimaryButton>

        <SecondaryButton
          className="w-full"
          onClick={() => { }}
        >
          Sign in
        </SecondaryButton>
      </div>
    </div>
  </>

  const desktopLinks = <>
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
  </>

  const links = isMobile ? mobileLinks : desktopLinks;

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
      {links}
    </div>
  );
};

export default LandingPageHeader;
