import React from 'react';

const PrimaryButtonWhiteText = ({
  onClick,
  children,
}) => {
  return (
    <button
      onClick={onClick}
      className={`bg-[#808AFF] px-[1.25rem] py-[0.5rem] flex items-center justify-center rounded-full text-white font-semibold border border-[#808AFF]`}
    >
      {children}
    </button>
  );
};

export default PrimaryButtonWhiteText;