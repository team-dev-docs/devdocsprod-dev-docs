import React from 'react';
import { Link} from 'react-router-dom';

const LandingPageLink = ({
  href,
  children,
  className = '',
  style = {},
}) => {
  const handleClick = (e) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      } else {
        // If the element doesn't exist on the current page, navigate to the home page with the hash
        //navigate('/' + href);
        return
      }
    }
  };

  return (
    <Link
      to={href}
      className={`text-[#ECECEC] ${className}`}
      style={style}
      onClick={handleClick}
    >
      {children}
    </Link>
  );
};

export default LandingPageLink;