import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import './landing-page-dropdown.css';

const LandingPageDropdown = ({
  title,
  description,
  borderBottom,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const arrowSrc = isExpanded ? '/landing-page/arrow-up.svg' : '/landing-page/arrow-down.svg'
  const divBorderBottom = borderBottom ? "1px solid rgba(163, 163, 163, 0.75)" : null;


  return (
    <div
      className="w-full py-[1.25rem] px-[0.63rem] cursor-pointer"
      style={{
        borderBottom: divBorderBottom,
      }}
    >
      <div
        className="flex justify-between w-full text-[1.125rem] font-semibold"
        onClick={toggleExpand}
      >
        {title}
        <img
          src={arrowSrc}
        />
      </div>
      <CSSTransition
        in={isExpanded}
        timeout={300}
        classNames="dropdown"
        unmountOnExit
      >
        <div
          className="text-[1.125rem]"
        >
          {description}
        </div>
      </CSSTransition>
    </div>
  );
};

export default LandingPageDropdown;