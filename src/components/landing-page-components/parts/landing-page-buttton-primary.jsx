import React from 'react';
import { DEV_DOCS_BLACK, DEV_DOCS_BLUE } from '@site/src/constants/landing-page-constants';

const PrimaryButton = ({
  onClick,
  children,
}) => {
  return (
    <button
      onClick={onClick}
      className={`bg-[#808AFF] px-[1.25rem] py-[0.5rem] flex items-center justify-center rounded-full text-[#0B081C] font-semibold border border-[#808AFF]`}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
