import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { useIsMobile } from '../context-providers/mobile-context-provider';
import './landing-page-dropdown.css';

const LandingPageDropdown = ({
  title,
  description,
  borderBottom,
}) => {
  const { isMobile } = useIsMobile();
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const arrowSrc = isExpanded ? '/landing-page/arrow-up.svg' : '/landing-page/arrow-down.svg'
  const divBorderBottom = borderBottom ? "1px solid rgba(163, 163, 163, 0.75)" : null;


  return (
    <div
      className={isMobile ?
        "w-full py-[1.25rem] px-[0.5rem] cursor-pointer"
        :
        "w-full py-[1.25rem] px-[0.63rem] cursor-pointer"
      }
      style={{
        borderBottom: divBorderBottom,
      }}
    >
      <div
        className={isMobile ?
          "flex justify-between w-full font-semibold"
          :
          "flex justify-between w-full text-[1.125rem] font-semibold"
        }
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
          className={isMobile ?
            "pt-[0.94rem]"
            :
            "text-[1.125rem]"
          }
        >
          {description}
        </div>
      </CSSTransition>
    </div>
  );
};

export default LandingPageDropdown;