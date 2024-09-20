import React from 'react';
import { DEV_DOCS_WHITE } from '@site/src/constants/landing-page-constants';

const LandingPageLink = ({
  href,
  children,
  className = '',
  style = {},
}) => {
  return (
    <a
      href={href}
      className={`text-[#ECECEC] ${className}`}
      style={style}
    >
      {children}
    </a>
  );
};

export default LandingPageLink;