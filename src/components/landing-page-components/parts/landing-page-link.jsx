import React from 'react';
import { Link } from 'react-router-dom';

const LandingPageLink = ({
  href,
  children,
  className = '',
  style = {},
}) => {
  return (
    <Link
      to={href}
      className={`text-[#ECECEC] ${className}`}
      style={style}
    >
      {children}
    </Link>
  );
};

export default LandingPageLink;