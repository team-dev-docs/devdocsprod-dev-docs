import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import icon from '/static/landing-page/icon.png';
import logo from '/static/landing-page/logo.png';
import PrimaryButton from '../parts/landing-page-button-primary';
import SecondaryButton from '../parts/landing-page-button-secondary';
import LandingPageLink from '../parts/landing-page-link';
import { useIsMobile } from '../context-providers/mobile-context-provider';
import { LINK_GET_STARTED, LINK_HOW_IT_WORKS, LINK_PRICING, LINK_DOCS, LINK_BLOG, LINK_SIGN_IN } from '../../../constants/landing-page-links-constants';

const LandingPageHeader = () => {
  const history = useHistory();
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
          href={LINK_HOW_IT_WORKS}
        >
          How it works
        </LandingPageLink>

        <LandingPageLink
          className="px-[0.5rem] py-[1.5rem]"
          style={{
            borderBottom: "1px solid #3741AC",
          }}
          href={LINK_PRICING}
        >
          Pricing
        </LandingPageLink>

        <LandingPageLink
          className="px-[0.5rem] py-[1.5rem]"
          style={{
            borderBottom: "1px solid #3741AC",
          }}
          href={LINK_DOCS}
        >
          Docs
        </LandingPageLink>

        <LandingPageLink
          className="px-[0.5rem] py-[1.5rem]"
          style={{
            borderBottom: "1px solid #3741AC",
          }}
          href={LINK_BLOG}
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
        onClick={() => history.push(LINK_GET_STARTED)}
      >
        Get started
      </PrimaryButton>

      <SecondaryButton
        onClick={() => history.push(LINK_SIGN_IN)}
      >
        Sign in
      </SecondaryButton>
    </div>
  </>

  const links = isMobile ? mobileLinks : desktopLinks;

  return (
    <div
      className={isMobile ?
        "w-full px-[1.56rem] py-[1.5rem] flex items-center justify-between sticky top-0 left-0 z-20"
        :
        "w-full px-[3.75rem] py-[1.5rem] flex items-center justify-between sticky top-0 left-0 z-20"
      }
      style={{
        background: 'rgba(17, 35, 75, 0.80)',
        backdropFilter: 'blur(12.5px)',
      }}
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
      {links}
    </div>
  );
};

export default LandingPageHeader;