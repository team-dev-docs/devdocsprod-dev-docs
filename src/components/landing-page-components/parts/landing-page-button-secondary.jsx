import React from 'react';
import { DEV_DOCS_WHITE } from '@site/src/constants/landing-page-constants';

const SecondaryButton = ({
  onClick,
  children,
  className="",
}) => {
  return (
    <button
      onClick={onClick}
      className={`bg-transparent px-[1.25rem] py-[0.5rem] flex items-center justify-center rounded-full text-[#ECECEC] font-semibold border border-[#ECECEC] ${className}`}
    >
      {children}
    </button>
  );
};

export default SecondaryButton;
