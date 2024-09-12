import React from 'react';
import { DEV_DOCS_WHITE } from '@site/src/constants/landing-page-constants';

const LandingPageLink = ({
  href,
  children,
}) => {
  return (
    <a
      href={href}
      className={`text-[#ECECEC] `}
    >
      {children}
    </a>
  );
};

export default LandingPageLink;